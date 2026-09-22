import { VariableSet, ReferenceVariable, DateTimeVariable, SingleLineTextVariable } from '@servicenow/sdk/core'

export const existingAccessLevels = VariableSet({
    $id: Now.ID['eb52131a472bea5051a3e84d416d4363'],
    title: 'Existing Access Levels',
    internalName: 'existing_access_levels',
    type: 'multiRow',
    layout: '2across',
    version: 24,
    variables: {
        existing_access_level: ReferenceVariable({
            question: 'Access Level',
            order: 10,
            unique: true,
            readOnly: true,
            referenceTable: 'x_aleen_snguardian_identity_access',
        }),
        existing_action: ReferenceVariable({
            question: 'Action',
            order: 15,
            mandatory: true,
            referenceTable: 'x_aleen_snguardian_request_entity_action',
            referenceQualCondition: 'codeLIKENONE^ORcodeLIKEUPDATE^ORcodeLIKEDELETE^EQ',
        }),
        existing_valid_from: DateTimeVariable({
            question: 'Valid From',
            order: 20,
            mandatory: true,
        }),
        existing_valid_to: DateTimeVariable({
            question: 'Valid To',
            order: 30,
            mandatory: true,
        }),
        existing_associated_asset: SingleLineTextVariable({
            question: 'Associated Asset',
            order: 40,
            readOnly: true,
            hidden: true,
        }),
    },
})
