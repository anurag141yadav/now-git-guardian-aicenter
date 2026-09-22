import { Table, Password2Column, StringColumn, ReferenceColumn } from '@servicenow/sdk/core'

export const x_aleen_snguardian_u_visitor_importset = Table({
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
    label: 'U Visitor Importset',
    name: 'x_aleen_snguardian_u_visitor_importset',
    schema: {
        u_document_number: Password2Column({
            maxLength: 255,
        }),
        u_first_name: StringColumn({
            maxLength: 40,
        }),
        u_identity_validation_type: StringColumn({
            maxLength: 32,
        }),
        u_last_name: StringColumn({
            maxLength: 40,
        }),
        u_photo: StringColumn({
            maxLength: 10000,
        }),
        u_source_system_code: StringColumn({
            maxLength: 40,
        }),
        u_visitor: ReferenceColumn({
            maxLength: 32,
            referenceTable: 'x_aleen_snguardian_visitor',
        }),
    },
    createAccessControls: true,
})
