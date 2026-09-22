import { UiPolicy } from '@servicenow/sdk/core'

UiPolicy({
    $id: Now.ID['5311d8a31b9c8a106962fe60cd4bcbdd'],
    table: 'x_aleen_snguardian_system',
    shortDescription: 'Disable System Code of Existing Record',
    isolateScript: true,
    conditions: 'sys_created_onISNOTEMPTY^EQ',
    actions: [
        {
            field: 'code',
            readOnly: true,
            table: 'x_aleen_snguardian_system',
            fieldMessageType: '',
            valueAction: '',
        },
    ],
})
