var ImageUtils = Class.create();
ImageUtils.prototype = {
    initialize: function() {
        this.logger = new AlertGuardianLogger(" ImageUtils:: ");
    },

    // Convert image to byte array
    imageToByteArray: function(attachmentSysId) {
        try {
            var grAttachment = new GlideRecord('sys_attachment');
            if (attachmentSysId && grAttachment.get(attachmentSysId)) {
                var attachment = new GlideSysAttachment();
                var byteArray = attachment.getBytes(grAttachment);
                return byteArray;
            }
            return "";
        } catch (e) {
            this.logger.error("imageToByteArray Exception :: " + e + " \nStack\n " + e.stack);
            return "";
        }
    },

    // Convert byte array back to image (attach to record)
    byteArrayToImage: function(tableName, recordSysId, fileName, byteArray, contentType) {
        var attachment = new GlideSysAttachment();
        return attachment.write(tableName, recordSysId, fileName, contentType, byteArray);
        // return 'Image attached successfully';
    },

    // Convert image to Base64 string
    imageToBase64: function(attachmentSysId) {
        try {
            var attachment = new GlideSysAttachment();
            var grAttachment = new GlideRecordSecure('sys_attachment');
            if (attachmentSysId && grAttachment.get(attachmentSysId)){
                return attachment.getContentBase64(grAttachment);
            }
            return "";
        } catch (e) {
            this.logger.error("imageToBase64 Exception :: " + e + " \nStack\n " + e.stack);
            return "";
        }
    },

    // Convert Base64 string back to image (attach to record)
    base64ToImage: function(tableName, recordSysId, fileName, base64String, contentType) {
        // var byteArray = GlideStringUtil.base64DecodeAsBytes(base64String);
        // return this.byteArrayToImage(tableName, recordSysId, fileName, byteArray, contentType);
        try {
            var attachment = new GlideSysAttachment();
            var grRec = new GlideRecordSecure(tableName);
            if (recordSysId && grRec.get(recordSysId)) {
                var agr = attachment.writeBase64(grRec, fileName, contentType, base64String);
                return agr;
            } else {
                return "";
            }
        } catch (e) {
            this.logger.error("base64ToImage Exception :: " + e + " \nStack\n " + e.stack);
            return "";
        }
    },

    type: 'ImageUtils'
};