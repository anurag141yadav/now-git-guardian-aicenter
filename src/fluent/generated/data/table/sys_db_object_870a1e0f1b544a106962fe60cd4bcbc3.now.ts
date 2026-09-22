import { Table, ListColumn, StringColumn } from '@servicenow/sdk/core'

export const x_aleen_snguardian_u_metadata_import_set = Table({
    actions: {
        read: true,
        update: true,
        delete: true,
        create: true,
    },
    allowClientScripts: false,
    allowNewFields: false,
    allowUiActions: false,
    allowWebServiceAccess: true,
    extends: 'sys_import_set_row',
    label: 'U Metadata  Import Set',
    name: 'x_aleen_snguardian_u_metadata_import_set',
    schema: {
        u_applicable_to: ListColumn({
            maxLength: 4000,
        }),
        u_category: StringColumn({
            attributes: {
                edge_encryption_enabled: true,
                import_attribute_name: 'Category',
            },
            maxLength: 40,
        }),
        u_code: StringColumn({
            attributes: {
                edge_encryption_enabled: true,
                import_attribute_name: 'Code',
            },
            maxLength: 40,
        }),
        u_description: StringColumn({
            attributes: {
                edge_encryption_enabled: true,
                import_attribute_name: 'Description',
            },
            maxLength: 40,
        }),
        u_is_deleted: StringColumn({
            maxLength: 40,
        }),
        u_name: StringColumn({
            attributes: {
                edge_encryption_enabled: true,
                import_attribute_name: 'Name',
            },
            maxLength: 40,
        }),
        u_parent: StringColumn({
            maxLength: 40,
        }),
        u_type: StringColumn({
            attributes: {
                edge_encryption_enabled: true,
                import_attribute_name: 'u_type',
            },
            maxLength: 40,
        }),
    },
    createAccessControls: true,
})
