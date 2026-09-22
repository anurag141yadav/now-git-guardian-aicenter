import { UiPolicy } from '@servicenow/sdk/core'

UiPolicy({
    $id: Now.ID['199e6e041bdfce10bf7ea82b234bcb0c'],
    table: 'x_aleen_snguardian_system_scheduled_job',
    shortDescription: 'Disable Function of Existing Record',
    isolateScript: true,
    conditions: 'sys_created_onISNOTEMPTY^EQ',
    actions: [
        {
            field: 'function',
            readOnly: true,
            table: 'x_aleen_snguardian_system_scheduled_job',
            fieldMessageType: '',
            valueAction: '',
        },
    ],
})
