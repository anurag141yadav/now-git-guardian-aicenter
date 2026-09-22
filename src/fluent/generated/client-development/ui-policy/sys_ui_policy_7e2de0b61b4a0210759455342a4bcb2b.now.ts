import { UiPolicy } from '@servicenow/sdk/core'

UiPolicy({
    $id: Now.ID['7e2de0b61b4a0210759455342a4bcb2b'],
    table: 'x_aleen_snguardian_system_function',
    shortDescription: 'mark date time is read only',
    isolateScript: true,
    conditions: 'sys_idISNOTEMPTY^EQ',
    actions: [
        {
            field: 'last_success_datetime',
            readOnly: true,
            table: 'x_aleen_snguardian_system_function',
            fieldMessageType: '',
            valueAction: '',
        },
        {
            field: 'last_failure_datetime',
            readOnly: true,
            table: 'x_aleen_snguardian_system_function',
            fieldMessageType: '',
            valueAction: '',
        },
    ],
})
