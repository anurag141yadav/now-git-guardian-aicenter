import { UiPolicy } from '@servicenow/sdk/core'

UiPolicy({
    $id: Now.ID['07f878b4eb4852100326f284dad0cdaa'],
    table: 'x_aleen_snguardian_asset',
    shortDescription: 'Show Subtype  if It is MC',
    isolateScript: true,
    conditions: 'type.codeLIKEMOBILE_CREDENTIAL^EQ',
    actions: [
        {
            field: 'sub_system',
            visible: true,
            table: 'x_aleen_snguardian_asset',
            fieldMessageType: '',
            valueAction: '',
        },
        {
            field: 'sub_type',
            visible: true,
            table: 'x_aleen_snguardian_asset',
            fieldMessageType: '',
            valueAction: '',
        },
    ],
})
