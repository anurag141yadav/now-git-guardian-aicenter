import {
    Table,
    BooleanColumn,
    StringColumn,
    ScriptColumn,
    ReferenceColumn,
    DateTimeColumn,
    ListColumn,
    ChoiceColumn,
} from '@servicenow/sdk/core'

export const x_aleen_snguardian_system_function = Table({
    actions: {
        read: true,
        update: true,
        delete: false,
        create: true,
    },
    allowClientScripts: true,
    allowNewFields: true,
    allowUiActions: true,
    allowWebServiceAccess: true,
    autoNumber: {
        prefix: 'SYSFUNC',
    },
    label: 'System Function',
    name: 'x_aleen_snguardian_system_function',
    schema: {
        allow_periodic_schedule: BooleanColumn({
            default: false,
            maxLength: 40,
        }),
        category: StringColumn({
            default: 'PROVISIONING',
            dropdown: 'dropdown_without_none',
            maxLength: 40,
        }),
        description: StringColumn({
            maxLength: 100,
        }),
        error_response_handler: ScriptColumn({
            default: `/*\r
 * Always return:\r
 * answer['success'] = Boolean;\r
 * answer['message'] = new StringUtil().getMessage("<MESSAGE_CODE>", data);\r
 *\r
 * Message Handling:\r
 * - The message must be fetched from the Messages table using the defined message code.\r
 * - The system_id (or relevant identifier) present in 'data' will be used for dynamic value replacement.\r
 *\r
 * Custom Messages:\r
 * - If a custom message is required, it must still follow the same structure:\r
 *     answer['message'] = new StringUtil().getMessage("<CUSTOM_MESSAGE_CODE>", data);\r
 * - Ensure the message code exists in the Messages table before using it.\r
 */\r
processErrorResponse();\r
\r
function processErrorResponse() {\r
    var answer = {};\r
    answer['success'] = false;\r
    if (data !== null && responseBody !== null) {\r
        answer['message'] = new StringUtil().getMessage("MESSAGE_CODE", data);\r
    } else {\r
        answer['message'] = new StringUtil().getMessage("GENERAL_EXCEPTION_MESSAGE", data);\r
        return answer;\r
    }\r
}`,
            maxLength: 8000,
        }),
        function: ReferenceColumn({
            maxLength: 32,
            referenceTable: 'x_aleen_snguardian_system_function_type',
        }),
        is_deleted: BooleanColumn({
            maxLength: 40,
        }),
        last_event_position: StringColumn({
            label: 'Last event position',
            maxLength: 40,
        }),
        last_failure_datetime: DateTimeColumn({
            label: 'Last Failure Run Datetime',
            maxLength: 40,
        }),
        last_success_datetime: DateTimeColumn({
            label: 'Last Success Run Datetime',
            maxLength: 40,
        }),
        name: StringColumn({
            maxLength: 40,
        }),
        number: StringColumn({
            attributes: {
                edge_encryption_enabled: true,
            },
            default: 'javascript:global.getNextObjNumberPadded();',
            maxLength: 40,
        }),
        payload_handler: ScriptColumn({
            default: `preparePayload();\r
\r
function preparePayload(){\r
 return {};\r
}`,
            maxLength: 8000,
        }),
        payload: StringColumn({
            maxLength: 3000,
        }),
        pre_validation_required: BooleanColumn({
            default: false,
            maxLength: 40,
        }),
        pre_validation_script: ScriptColumn({
            default: `/*\r
 * Expected return structure:\r
 * {\r
 *    prevalidation : Boolean (mandatory)\r
 *    success       : Boolean (mandatory if prevalidation = false)\r
 *    message       : String  (mandatory if prevalidation = false)\r
 *    identifier    : String  (optional if prevalidation = false)\r
 *    request_url   : String  (optional - can override or append, if prevalidation = true)\r
 *    payload       :  String (optional - can override request body, if prevalidation = true)\r
 * }\r
 */\r
performPreValidation();\r
\r
function performPreValidation() {\r
    return {\r
        'prevalidation': true\r
    };\r
}`,
            maxLength: 8000,
        }),
        preceding: ListColumn({
            maxLength: 4000,
            referenceTable: 'x_aleen_snguardian_system_function_type',
        }),
        succeeding: ListColumn({
            maxLength: 4000,
            referenceTable: 'x_aleen_snguardian_system_function_type',
        }),
        success_response_handler: ScriptColumn({
            default: `/*\r
 * Always return:\r
 * answer['success'] = Boolean;\r
 * answer['message'] = new StringUtil().getMessage("<MESSAGE_CODE>", data);\r
 *\r
 * Message Handling:\r
 * - The message must be fetched from the Messages table using the defined message code.\r
 * - The system_id (or relevant identifier) present in 'data' will be used for dynamic value replacement.\r
 *\r
 * Custom Messages:\r
 * - If a custom message is required, it must still follow the same structure:\r
 *     answer['message'] = new StringUtil().getMessage("<CUSTOM_MESSAGE_CODE>", data);\r
 * - Ensure the message code exists in the Messages table before using it.\r
 */\r
processResponse();\r
\r
function processResponse() {\r
    var answer = {};\r
    if (data !== null && responseBody !== null) {\r
        answer['success'] = true;\r
        answer['message'] =new StringUtil().getMessage("<SUCCESS_MESSAGE_CODE>", data);\r
    }else{\r
		answer['success'] = false;\r
        answer['message'] = new StringUtil().getMessage("<FAILURE_MESSAGE_CODE>", data);\r
	}\r
    return answer;\r
}`,
            maxLength: 8000,
        }),
        supports_background_job: BooleanColumn({
            default: false,
            maxLength: 40,
        }),
        system: ReferenceColumn({
            maxLength: 32,
            referenceTable: 'x_aleen_snguardian_system',
        }),
        type: ChoiceColumn({
            default: 'POST',
            dropdown: 'dropdown_without_none',
            mandatory: true,
            maxLength: 32,
        }),
        url: StringColumn({
            maxLength: 200,
        }),
    },
})
