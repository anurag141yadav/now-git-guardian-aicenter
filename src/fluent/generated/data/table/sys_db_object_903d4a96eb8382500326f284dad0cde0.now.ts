import { Table, StringColumn } from '@servicenow/sdk/core'

export const x_aleen_snguardian_u_readers_import_set = Table({
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
    label: 'U Readers Importset',
    name: 'x_aleen_snguardian_u_readers_import_set',
    schema: {
        u_code: StringColumn({
            attributes: {
                edge_encryption_enabled: true,
                import_attribute_name: 'Code',
            },
            maxLength: 40,
        }),
        u_is_deleted: StringColumn({
            attributes: {
                edge_encryption_enabled: true,
                import_attribute_name: 'Is Deleted',
            },
            maxLength: 40,
        }),
        u_location: StringColumn({
            attributes: {
                edge_encryption_enabled: true,
                import_attribute_name: 'Location',
            },
            maxLength: 40,
        }),
        u_name: StringColumn({
            attributes: {
                edge_encryption_enabled: true,
                import_attribute_name: 'Name',
            },
            maxLength: 40,
        }),
        u_system: StringColumn({
            attributes: {
                edge_encryption_enabled: true,
                import_attribute_name: 'System',
            },
            maxLength: 40,
        }),
        u_type: StringColumn({
            attributes: {
                edge_encryption_enabled: true,
                import_attribute_name: 'Type',
            },
            maxLength: 40,
        }),
    },
})
