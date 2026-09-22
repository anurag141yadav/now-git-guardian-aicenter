import { Table, StringColumn, BooleanColumn, ReferenceColumn } from '@servicenow/sdk/core'

export const x_aleen_snguardian_provisioning_queue = Table({
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
        prefix: 'PROVQ',
    },
    label: 'Provisioning Queue',
    name: 'x_aleen_snguardian_provisioning_queue',
    schema: {
        data: StringColumn({
            isFullUTF8: true,
            maxLength: 2000,
        }),
        function: StringColumn({
            maxLength: 50,
        }),
        is_processed: BooleanColumn({
            default: 'False',
            maxLength: 40,
        }),
        number: StringColumn({
            attributes: {
                ignore_filter_on_new: true,
            },
            default: 'javascript:global.getNextObjNumberPadded();',
            maxLength: 40,
        }),
        options: StringColumn({
            isFullUTF8: true,
            maxLength: 1000,
        }),
        provisioning_record: ReferenceColumn({
            label: 'Provisioning Monitor',
            maxLength: 32,
            referenceTable: 'x_aleen_snguardian_provisioning_monitor',
        }),
        record_id: StringColumn({
            maxLength: 40,
        }),
        system: ReferenceColumn({
            maxLength: 32,
            referenceTable: 'x_aleen_snguardian_system',
        }),
    },
    createAccessControls: true,
})
