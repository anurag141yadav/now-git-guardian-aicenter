import { Table, StringColumn, FloatColumn } from '@servicenow/sdk/core'

export const x_aleen_snguardian_u_location_import_set = Table({
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
    autoNumber: {
        prefix: 'ULOCATION',
    },
    extends: 'sys_import_set_row',
    label: 'U Location Import Set',
    name: 'x_aleen_snguardian_u_location_import_set',
    schema: {
        number: StringColumn({
            attributes: {
                ignore_filter_on_new: true,
            },
            default: 'javascript:global.getNextObjNumberPadded();',
            maxLength: 40,
        }),
        u_code: StringColumn({
            attributes: {
                edge_encryption_enabled: true,
                import_attribute_name: 'Code',
            },
            maxLength: 40,
        }),
        u_country: StringColumn({
            attributes: {
                edge_encryption_enabled: true,
                import_attribute_name: 'Country',
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
        u_latitude: StringColumn({
            attributes: {
                edge_encryption_enabled: true,
                import_attribute_name: 'Latitude',
            },
            maxLength: 40,
        }),
        u_longitude: FloatColumn({
            attributes: {
                import_attribute_name: 'Longitude',
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
        u_number: StringColumn({
            attributes: {
                edge_encryption_enabled: true,
                import_attribute_name: 'Number',
            },
            maxLength: 40,
        }),
        u_parent: StringColumn({
            attributes: {
                edge_encryption_enabled: true,
                import_attribute_name: 'Parent',
            },
            maxLength: 40,
        }),
        u_state: StringColumn({
            attributes: {
                edge_encryption_enabled: true,
                import_attribute_name: 'State',
            },
            maxLength: 40,
        }),
        u_time_zone: StringColumn({
            maxLength: 100,
        }),
        u_type: StringColumn({
            attributes: {
                edge_encryption_enabled: true,
                import_attribute_name: 'Type',
            },
            maxLength: 40,
        }),
        u_zip: StringColumn({
            attributes: {
                edge_encryption_enabled: true,
                import_attribute_name: 'Zip',
            },
            maxLength: 40,
        }),
    },
    createAccessControls: true,
})
