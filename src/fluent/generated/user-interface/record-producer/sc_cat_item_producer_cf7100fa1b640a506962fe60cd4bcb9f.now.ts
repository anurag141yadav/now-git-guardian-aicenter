import { CatalogItemRecordProducer, ReferenceVariable, SingleLineTextVariable } from '@servicenow/sdk/core'

export const newHireDefaultAccessRequest = CatalogItemRecordProducer({
    $id: Now.ID['cf7100fa1b640a506962fe60cd4bcb9f'],
    name: 'New Hire Default Access Request',
    catalogs: ['e0d08b13c3330100c8b837659bba8fb4'],
    description: '<p>New Hire</p>',
    owner: '6816f79cc0a8016401c5a33be04be441',
    roles: ['snc_internal'],
    shortDescription: 'New Hire',
    variableSets: [
        {
            variableSet: '22feda801b684e106962fe60cd4bcb0a',
            order: 10,
        },
        {
            variableSet: '135e12001b684e106962fe60cd4bcb87',
            order: 200,
        },
        {
            variableSet: '027e9a041b684e106962fe60cd4bcb96',
            order: 300,
        },
    ],
    version: 18,
    table: 'x_aleen_snguardian_request',
    script: Now.include('./sc_cat_item_producer_cf7100fa1b640a506962fe60cd4bcb9f-script.js'),
    postInsertScript: Now.include('./sc_cat_item_producer_cf7100fa1b640a506962fe60cd4bcb9f-post-insert-script.js'),
    variables: {
        request_type: ReferenceVariable({
            question: 'Type',
            mapToField: true,
            field: 'request_type',
            referenceTable: 'sc_cat_item_producer',
        }),
        request_for: ReferenceVariable({
            question: 'Request For',
            order: 1,
            mapToField: true,
            field: 'request_for',
            readOnly: true,
            referenceTable: 'x_aleen_snguardian_identity',
        }),
        reason: SingleLineTextVariable({
            question: 'Reason',
            order: 2,
        }),
    },
})
