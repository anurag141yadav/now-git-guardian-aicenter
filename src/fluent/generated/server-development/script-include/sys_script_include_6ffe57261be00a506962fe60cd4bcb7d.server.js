var GuardianGlideRecordUtil = Class.create();
GuardianGlideRecordUtil.prototype = {
    initialize: function() {
        this.jsonObject = {};
        this.glideRecordJson = {};
        this.logger = new AlertGuardianLogger(" GuardianGlideRecordUtil:: ");
    },
    toJSON: function(record, parentKey) {
        this.transform(record, parentKey);
        return this.jsonObject;
    },

    //toJSONWithSelectedAttributes(identityGr,{},[first_name,last_name],true);
    //toJSONWithSelectedAttributes(identityGr,{},[first_name,last_name],false);
    toJSONWithSelectedAttributes: function(record, parentKey, attributeList, include) {
        this.transformSelectedFields(record, parentKey, attributeList, include);
        return this.jsonObject;
    },
    transformSelectedFields: function(record, parentKey, attributesList, include) {
        for (fieldName in record) {
            //if include , fieldName in attributesList
            //else  fieldName not in attributesList
            if ((include && attributesList.includes(fieldName)) || (!include && !attributesList.includes(fieldName) && !(fieldName == "datasource") && !(fieldName == "credential"))) {
                var value = null;
                var jsonkey = fieldName;
                var fieldElement = "";
                var fieldType = "";
                if (parentKey !== null && parentKey !== '' && parentKey !== undefined) {
                    jsonkey = parentKey + "." + jsonkey;
                }
                try {
                    if (!fieldName.startsWith("sys_") && typeof record[fieldName] !== "function") {
                        if (typeof record[fieldName] !== "function" && !fieldName.startsWith("sys_") &&
                            !fieldName.startsWith("hashed") && !fieldName.startsWith("accumulated") &&
                            !fieldName.startsWith("role")
                        ) {
                            try {
                                fieldElement = record.getElement(fieldName);
                                if (null != fieldElement && null != fieldElement.getED()) {
                                    fieldType = fieldElement.getED().getInternalType();
                                    value = record.getValue(fieldName); //Sys_id in case REF field
                                }
                            } catch (ex) {
                                this.logger.error("transformSelectedFields Exception Block 1 for :: [" + fieldName + "] " + ex + " \nStack\n " + ex.stack);
                                continue;
                            }
                            if (null !== value) {
                                if (fieldElement.getRefRecord()) {
                                    var refTableName = fieldElement.getReferenceTable();
                                    if (refTableName.startsWith("x_aleen_snguardian_")) {
                                        var jsonParentkey = fieldName;
                                        if (parentKey !== null && parentKey !== '') {
                                            jsonParentkey = parentKey + "." + jsonParentkey;
                                        }
                                        this.transform(fieldElement.getRefRecord(), jsonParentkey);

                                    }
                                } else if (fieldType == 'string' || fieldType == 'glide_date_time') {
                                    this.jsonObject[jsonkey] = value;
                                } else {
                                    this.jsonObject[jsonkey] = value;
                                }
                            } else {
                                this.jsonObject[jsonkey] = "NULL";
                            }
                        } else {
                            this.jsonObject[jsonkey] = {};
                        }
                    } else if (fieldName == 'sys_id') {
                        this.jsonObject[jsonkey] = record.getValue("sys_id");
                    } else if (!parentKey && fieldName == 'datasource') {
                        this.jsonObject["datasource.sys_id"] = record.getValue("datasource");
                    } else if (fieldName == 'credential') {
                        this.jsonObject["credential.sys_id"] = record.getValue("credential");
                    }
                } catch (ex) {
                    this.logger.error("transformSelectedFields Exception ::  Block 2  for [" + fieldName + "]" + ex + " \nStack\n " + ex.stack);
                }

            }
        }
    },
    transform: function(record, parentKey) {
        for (fieldName in record) {
            var value = null;
            var jsonkey = fieldName;
            var fieldElement = "";
            var fieldType = "";
            if (parentKey !== null && parentKey !== '' && parentKey !== undefined) {
                jsonkey = parentKey + "." + jsonkey;
            }
            try {
                if (!fieldName.startsWith("sys_") && typeof record[fieldName] !== "function" && !(fieldName == "datasource") && !(fieldName == "credential")) {
                    if (typeof record[fieldName] !== "function" && !fieldName.startsWith("sys_") &&
                        !fieldName.startsWith("hashed") && !fieldName.startsWith("accumulated") &&
                        !fieldName.startsWith("role")
                    ) {
                        try {
                            fieldElement = record.getElement(fieldName);
                            if (null != fieldElement && null != fieldElement.getED()) {
                                fieldType = fieldElement.getED().getInternalType();
                                value = record.getValue(fieldName); //Sys_id in case REF field
                            }
                        } catch (ex) {
                            this.logger.error("transform Exception Block 1 for :: [" + fieldName + "] " + ex + " \nStack\n " + ex.stack);
                            continue;
                        }
                        if (null !== value) {
                            if (fieldElement.getRefRecord()) {
                                var refTableName = fieldElement.getReferenceTable();
                                if (refTableName.startsWith("x_aleen_snguardian_")) {
                                    var jsonParentkey = fieldName;
                                    if (parentKey !== null && parentKey !== '') {
                                        jsonParentkey = parentKey + "." + jsonParentkey;
                                    }
                                    this.transform(fieldElement.getRefRecord(), jsonParentkey);

                                }
                            } else if (fieldType == 'string' || fieldType == 'glide_date_time') {
                                this.jsonObject[jsonkey] = value;
                            } else {
                                this.jsonObject[jsonkey] = value;
                            }
                        } else {
                            this.jsonObject[jsonkey] = "NULL";
                        }
                    } else {
                        this.jsonObject[jsonkey] = {};
                    }
                } else if (fieldName == 'sys_id') {
                    this.jsonObject[jsonkey] = record.getValue("sys_id");
                } else if (!parentKey && fieldName == 'datasource') {
                    this.jsonObject["datasource.sys_id"] = record.getValue("datasource");
                } else if (fieldName == 'credential') {
                    this.jsonObject["credential.sys_id"] = record.getValue("credential");
                }
            } catch (ex) {
                this.logger.error("transform Exception ::  Block 2  for [" + fieldName + "]" + ex + " \nStack\n " + ex.stack);
            }
        }
    },

    type: 'GuardianGlideRecordUtil'
};