import { VariableSet, ReferenceVariable, DateTimeVariable } from '@servicenow/sdk/core'

export const systems = VariableSet({
    $id: Now.ID['22feda801b684e106962fe60cd4bcb0a'],
    title: 'Systems',
    internalName: 'systems',
    description: 'Systems',
    type: 'multiRow',
    layout: '2across',
    order: 10,
    version: 13,
    variables: {
        system: ReferenceVariable({
            question: 'System',
            order: 10,
            referenceTable: 'x_aleen_snguardian_system',
            referenceQualCondition: 'is_deleted=false^EQ',
        }),
        system_valid_from: DateTimeVariable({
            question: 'Valid From',
            order: 20,
        }),
        system_valid_to: DateTimeVariable({
            question: 'valid To',
            order: 30,
        }),
        system_provisioning_status: ReferenceVariable({
            question: 'Provisioning Status',
            order: 400,
            readOnly: true,
            referenceTable: 'x_aleen_snguardian_provisioning_status',
        }),
        system_action: ReferenceVariable({
            question: 'Action',
            order: 500,
            referenceTable: 'x_aleen_snguardian_request_entity_action',
            referenceQualCondition: 'applicable_toLIKESYSTEM^EQ',
        }),
    },
})
