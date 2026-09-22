import { UiPolicy } from '@servicenow/sdk/core'

UiPolicy({
    $id: Now.ID['e419344c1b2c8a10759455342a4bcbcb'],
    table: 'x_aleen_snguardian_system_function',
    shortDescription: 'Hide Pre Validation Script',
    isolateScript: true,
    conditions: 'pre_validation_required=false^EQ',
    actions: [
        {
            field: 'pre_validation_script',
            visible: false,
            table: 'x_aleen_snguardian_system_function',
            fieldMessageType: '',
            valueAction: '',
        },
    ],
})
