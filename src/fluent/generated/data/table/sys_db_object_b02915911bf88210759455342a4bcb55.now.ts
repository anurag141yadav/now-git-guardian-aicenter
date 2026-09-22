import { Table, StringColumn, IntegerColumn } from '@servicenow/sdk/core'

export const x_aleen_snguardian_u_system_config_importset = Table({
    actions: {
        read: true,
        update: false,
        delete: false,
        create: false,
    },
    allowClientScripts: false,
    allowNewFields: false,
    allowUiActions: false,
    allowWebServiceAccess: true,
    extends: 'sys_import_set_row',
    label: 'U System Import Set',
    name: 'x_aleen_snguardian_u_system_config_importset',
    schema: {
        u_api_type: StringColumn({
            label: 'API Type',
            maxLength: 40,
        }),
        u_attribute: StringColumn({
            attributes: {
                edge_encryption_enabled: true,
                import_attribute_name: 'Attribute',
            },
            maxLength: 40,
        }),
        u_authentication: StringColumn({
            maxLength: 40,
        }),
        u_category: StringColumn({
            maxLength: 40,
        }),
        u_code: StringColumn({
            maxLength: 40,
        }),
        u_config_type: StringColumn({
            attributes: {
                edge_encryption_enabled: true,
                import_attribute_name: 'Config Type',
            },
            label: 'u_config_type',
            maxLength: 40,
        }),
        u_datatype: StringColumn({
            attributes: {
                edge_encryption_enabled: true,
                import_attribute_name: 'Datatype',
            },
            label: 'u_datatype',
            maxLength: 40,
        }),
        u_default_value: StringColumn({
            attributes: {
                edge_encryption_enabled: true,
                import_attribute_name: 'Default Value',
            },
            label: 'u_default_value',
            maxLength: 40,
        }),
        u_dependency: StringColumn({
            attributes: {
                edge_encryption_enabled: true,
                import_attribute_name: 'Dependency',
            },
            label: 'u_dependency',
            maxLength: 40,
        }),
        u_description: StringColumn({
            maxLength: 200,
        }),
        u_error_response_handler: StringColumn({
            attributes: {
                edge_encryption_enabled: true,
                import_attribute_name: 'Error Response Handler',
            },
            isFullUTF8: true,
            label: 'u_error_response_handler',
            maxLength: 8000,
        }),
        u_feature: StringColumn({
            attributes: {
                edge_encryption_enabled: true,
                import_attribute_name: 'Feature',
            },
            maxLength: 40,
        }),
        u_function: StringColumn({
            attributes: {
                edge_encryption_enabled: true,
                import_attribute_name: 'Function',
            },
            maxLength: 40,
        }),
        u_host: StringColumn({
            maxLength: 200,
        }),
        u_http_request_type: StringColumn({
            attributes: {
                edge_encryption_enabled: true,
                import_attribute_name: 'Http Request Type',
            },
            label: 'u_http_request_type',
            maxLength: 40,
        }),
        u_is_advanced: StringColumn({
            attributes: {
                edge_encryption_enabled: true,
                import_attribute_name: 'Is Advanced',
            },
            label: 'u_is_advanced',
            maxLength: 40,
        }),
        u_is_deleted: StringColumn({
            attributes: {
                edge_encryption_enabled: true,
                import_attribute_name: 'Is Deleted',
            },
            maxLength: 40,
        }),
        u_is_required: StringColumn({
            attributes: {
                edge_encryption_enabled: true,
                import_attribute_name: 'Is Required',
            },
            label: 'u_is_required',
            maxLength: 40,
        }),
        u_name: StringColumn({
            attributes: {
                edge_encryption_enabled: true,
                import_attribute_name: 'Name',
            },
            maxLength: 40,
        }),
        u_password: StringColumn({
            attributes: {
                edge_encryption_enabled: true,
                import_attribute_name: 'Password',
            },
            maxLength: 40,
        }),
        u_payload_handler: StringColumn({
            attributes: {
                edge_encryption_enabled: true,
                import_attribute_name: 'Payload Handler',
            },
            isFullUTF8: true,
            label: 'u_payload_handler',
            maxLength: 8000,
        }),
        u_payload: StringColumn({
            attributes: {
                edge_encryption_enabled: true,
                import_attribute_name: 'Payload',
            },
            maxLength: 3000,
        }),
        u_pre_validation_required: StringColumn({
            attributes: {
                edge_encryption_enabled: true,
                import_attribute_name: 'Pre Validation Required',
            },
            maxLength: 40,
        }),
        u_pre_validation_script: StringColumn({
            attributes: {
                edge_encryption_enabled: true,
                import_attribute_name: 'Pre Validation Script',
            },
            isFullUTF8: true,
            label: 'u_pre_validation_script',
            maxLength: 8000,
        }),
        u_property_name: StringColumn({
            attributes: {
                edge_encryption_enabled: true,
                import_attribute_name: 'Property Name',
            },
            maxLength: 40,
        }),
        u_property_value: StringColumn({
            attributes: {
                edge_encryption_enabled: true,
                import_attribute_name: 'Property Value',
            },
            maxLength: 500,
        }),
        u_rate_limit_count: IntegerColumn({
            label: 'Parallel Connections',
            maxLength: 40,
        }),
        u_scope: StringColumn({
            attributes: {
                edge_encryption_enabled: true,
                import_attribute_name: 'Scope',
            },
            maxLength: 40,
        }),
        u_script: StringColumn({
            attributes: {
                edge_encryption_enabled: true,
                import_attribute_name: 'Script',
            },
            isFullUTF8: true,
            label: 'u_script',
            maxLength: 8000,
        }),
        u_sequence: IntegerColumn({
            attributes: {
                import_attribute_name: 'Sequence',
            },
            maxLength: 40,
        }),
        u_source: StringColumn({
            attributes: {
                edge_encryption_enabled: true,
                import_attribute_name: 'Source',
            },
            maxLength: 40,
        }),
        u_success_response_handler: StringColumn({
            attributes: {
                edge_encryption_enabled: true,
                import_attribute_name: 'Success Response Handler',
            },
            isFullUTF8: true,
            label: 'u_success_response_handler',
            maxLength: 8000,
        }),
        u_supports_background_job: StringColumn({
            attributes: {
                edge_encryption_enabled: true,
                import_attribute_name: 'Supports Background Job',
            },
            maxLength: 40,
        }),
        u_system_attribute: StringColumn({
            attributes: {
                edge_encryption_enabled: true,
                import_attribute_name: 'System Attribute',
            },
            maxLength: 40,
        }),
        u_system: StringColumn({
            attributes: {
                edge_encryption_enabled: true,
                import_attribute_name: 'System',
            },
            label: 'u_system',
            maxLength: 40,
        }),
        u_target: StringColumn({
            attributes: {
                edge_encryption_enabled: true,
                import_attribute_name: 'Target',
            },
            maxLength: 40,
        }),
        u_type: StringColumn({
            attributes: {
                edge_encryption_enabled: true,
                import_attribute_name: 'Type',
            },
            label: 'u_type',
            maxLength: 40,
        }),
        u_url: StringColumn({
            attributes: {
                edge_encryption_enabled: true,
                import_attribute_name: 'URL',
            },
            label: 'u_url',
            maxLength: 200,
        }),
        u_username: StringColumn({
            maxLength: 40,
        }),
        u_value: StringColumn({
            attributes: {
                edge_encryption_enabled: true,
                import_attribute_name: 'Value',
            },
            maxLength: 40,
        }),
        u_version: StringColumn({
            maxLength: 40,
        }),
    },
})
