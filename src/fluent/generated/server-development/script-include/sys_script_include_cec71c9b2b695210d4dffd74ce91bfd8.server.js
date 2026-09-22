var MRVS_util = Class.create();
MRVS_util.prototype = Object.extendsObject(global.AbstractAjaxProcessor, {

    checkFileFormat: function() {
        var logger = new AlertGuardianLogger(" MRVS_util:: ");
        try {
            var attachmentSysId = this.getParameter('sysparm_attachment_id');
            var grAttachmentRecord = new GlideRecordSecure('sys_attachment');
            if (attachmentSysId && grAttachmentRecord.get(attachmentSysId)) {
                var fileName = grAttachmentRecord.getValue('file_name');
                var fileExtension = fileName.split('.').pop().toLowerCase();
                if (fileExtension == 'csv')
                    return true;
                else
                    return false;
            } else {
                return false;
            }
        } catch (e) {
            logger.error("checkFileFormat Exception :: " + e + " \nStack\n " + e.stack);
            return false;
        }

    },
    fetchCSVData: function() {
        var logger = new AlertGuardianLogger(" MRVS_util:: ");
        try {
            var attachmentSysId = this.getParameter('sysparm_cart_id');
            var grAttachmentRecord = new GlideRecordSecure('sys_attachment');
            if (attachmentSysId && grAttachmentRecord.get(attachmentSysId)) {
                var glideAttachment = new GlideSysAttachment();
                var content = glideAttachment.getContent(grAttachmentRecord);
                var csvData = content.split('\n');
                var data = [];
                for (var i = 0; i < csvData.length; i++) {
                    var trimmedRow = csvData[i].trim();
                    if (!trimmedRow) continue;
                    var row = trimmedRow.split(',');
                    if (row.length == 4) {
                        var rowObject = {};
                        rowObject.visit_visitor_first_name = row[0] ? row[0].trim() : "";
                        rowObject.visit_visitor_last_name = row[1] ? row[1].trim() : "";
                        rowObject.visit_visitor_email = row[2] ? row[2].trim() : "";
                        rowObject.visit_visitor_phone = row[3] ? row[3].trim() : "";
                        data.push(rowObject);
                    }
                }
                return JSON.stringify(data);
            }
        } catch (e) {
            logger.error("fetchCSVData Exception :: " + e + " \nStack\n " + e.stack);
            return JSON.stringify([]);
        }
    },
    fetchIdentityData: function() {
        var logger = new AlertGuardianLogger(" MRVS_util:: ");
        try {
            var attachmentSysId = this.getParameter('sysparm_cart_id');
            var grAttachmentRecord = new GlideRecordSecure('sys_attachment');
            if (attachmentSysId && grAttachmentRecord.get(attachmentSysId)) {
                var glideAttachment = new GlideSysAttachment();
                var content = glideAttachment.getContent(grAttachmentRecord);
                var csvData = content.split('\n');
                var data = [];
                for (var i = 0; i < csvData.length; i++) {
                    var row = csvData[i].split(',');
                    var rowObject = {};
                    rowObject.first_name = row[0];
                    rowObject.last_name = row[1];
                    rowObject.email = row[2];
                    rowObject.phone = row[3];
                    rowObject.department = row[4];
                    data.push(rowObject);
                }
                data.pop();
                return JSON.stringify(data);
            }
        } catch (e) {
            logger.error("fetchIdentityData Exception :: " + e + " \nStack\n " + e.stack);
            return JSON.stringify([]);
        }
    },
    type: 'MRVS_util'
});