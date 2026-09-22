import { VariableSet, SingleLineTextVariable } from '@servicenow/sdk/core'

export const prerequisites = VariableSet({
    $id: Now.ID['399dc4801b1286106962fe60cd4bcb0c'],
    title: 'Prerequisites',
    internalName: 'prerequisites',
    description: 'Required Training For  an Access Level',
    type: 'multiRow',
    version: 7,
    variables: {
        type: SingleLineTextVariable({
            question: 'Type',
            order: 1,
        }),
        name: SingleLineTextVariable({
            question: 'Name',
            order: 10,
        }),
        required_for: SingleLineTextVariable({
            question: 'Required For',
            order: 20,
        }),
    },
})
