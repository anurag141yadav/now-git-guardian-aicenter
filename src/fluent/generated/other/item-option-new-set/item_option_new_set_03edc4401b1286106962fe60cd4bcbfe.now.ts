import { VariableSet, SingleLineTextVariable } from '@servicenow/sdk/core'

export const userPrerequisites = VariableSet({
    $id: Now.ID['03edc4401b1286106962fe60cd4bcbfe'],
    title: 'User Prerequisites',
    internalName: 'user_prerequisites',
    description: 'User Trainings',
    type: 'multiRow',
    version: 19,
    variables: {
        training_type: SingleLineTextVariable({
            question: 'Type',
            order: 10,
        }),
        training_name: SingleLineTextVariable({
            question: 'Name',
            order: 13,
        }),
        training_valid_from: SingleLineTextVariable({
            question: 'Valid From',
            order: 15,
        }),
        training_valid_to: SingleLineTextVariable({
            question: 'Valid To',
            order: 30,
        }),
        training_status: SingleLineTextVariable({
            question: 'Status',
            order: 40,
        }),
    },
})
