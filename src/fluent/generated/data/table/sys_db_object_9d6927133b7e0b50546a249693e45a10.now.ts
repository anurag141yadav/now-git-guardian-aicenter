import { Table } from '@servicenow/sdk/core'

export const x_aleen_snguardian_sooriacldemo = Table({
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
    label: 'SOORIACLDEMO',
    name: 'x_aleen_snguardian_sooriacldemo',
    schema: {},
    createAccessControls: true,
})
