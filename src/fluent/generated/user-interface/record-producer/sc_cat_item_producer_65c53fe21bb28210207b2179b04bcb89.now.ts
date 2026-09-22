import { CatalogItemRecordProducer, ReferenceVariable } from '@servicenow/sdk/core'

export const accessRequest = CatalogItemRecordProducer({
    $id: Now.ID['65c53fe21bb28210207b2179b04bcb89'],
    name: 'Access Request',
    owner: '6816f79cc0a8016401c5a33be04be441',
    roles: ['snc_internal'],
    shortDescription: 'Item level Request based on Area owner and Access level combination',
    variableSets: [
        {
            variableSet: '135e12001b684e106962fe60cd4bcb87',
            order: 200,
        },
    ],
    version: 23,
    table: 'x_aleen_snguardian_request',
    script: Now.include('./sc_cat_item_producer_65c53fe21bb28210207b2179b04bcb89-script.js'),
    postInsertScript: Now.include('./sc_cat_item_producer_65c53fe21bb28210207b2179b04bcb89-post-insert-script.js'),
    variables: {
        request_type: ReferenceVariable({
            question: 'Request Type',
            order: 1,
            mapToField: true,
            field: 'request_type',
            hidden: true,
            referenceTable: 'sc_cat_item_producer',
        }),
        parent: ReferenceVariable({
            question: 'Parent Request',
            order: 2,
            mapToField: true,
            field: 'parent',
            referenceTable: 'x_aleen_snguardian_request',
        }),
        request_for: ReferenceVariable({
            question: 'Request For',
            order: 10,
            mapToField: true,
            field: 'request_for',
            hidden: true,
            referenceTable: 'x_aleen_snguardian_identity',
        }),
        location: ReferenceVariable({
            question: 'Location',
            order: 15,
            referenceTable: 'x_aleen_snguardian_location',
        }),
    },
})
