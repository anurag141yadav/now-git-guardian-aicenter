var StringUtil = Class.create();
StringUtil.prototype = {
    initialize: function() {
        this.logger = new AlertGuardianLogger(" StringUtil:: ");
    },
    replacePlaceholders: function(inputString, jsonObject) {
        try {
            if (!inputString || !jsonObject) {
                return inputString;
            }
            var replacedString = inputString;
            for (var key in jsonObject) {
                var placeholder = "${" + key + "}";
                if (inputString.includes(placeholder)) {
                    if (jsonObject.hasOwnProperty(key)) {
                        var value = jsonObject[key];
                        replacedString = String(replacedString.split(placeholder).join(value));
                    }
                }
            }
            return replacedString;
        } catch (e) {
            this.logger.error("replacePlaceholders Exception :: " + e + " \nStack\n " + e.stack);
            return inputString;
        }
    },
    getMessage: function(key, data) {
        try {
            var systemId = data["system.sys_id"] || data["asset.system.sys_id"] || data["access_level.system.sys_id"] || "NULL";
            var message;
            var grMessageRecord = new GlideRecordSecure('x_aleen_snguardian_messages');
            grMessageRecord.addQuery('code', key);
            grMessageRecord.addQuery('is_deleted', false);
            var orQuery = grMessageRecord.addQuery('system', systemId);
            orQuery.addOrCondition("system", null);
            grMessageRecord.orderByDesc('system');
            grMessageRecord.setLimit(1);
            grMessageRecord.query();
            if (grMessageRecord.next()) {
                message = grMessageRecord.message;
            }
            var finalMessage = this.replacePlaceholders(message, data);
            return finalMessage ? String(finalMessage) : "";
        } catch (e) {
			this.logger.error("getMessage() Exception : "+e+" \n stack \n "+e.stack);
        }
    },
    type: 'StringUtil'
};