import { CatalogItemRecordProducer, ReferenceVariable } from '@servicenow/sdk/core'

export const demoRequest = CatalogItemRecordProducer({
    $id: Now.ID['66ac3d39fb320f102ce8f46b5eefdcd0'],
    name: 'DEMO Request',
    description: '<p>xcvvxc</p>',
    owner: '6816f79cc0a8016401c5a33be04be441',
    shortDescription: 'HI is this isdemo',
    variableSets: [
        {
            variableSet: '027e9a041b684e106962fe60cd4bcb96',
            order: 300,
        },
    ],
    version: 7,
    table: 'x_aleen_snguardian_request',
    variables: {
        request_type: ReferenceVariable({
            question: 'Request Type',
            mapToField: true,
            field: 'request_type',
            referenceTable: 'sc_cat_item_producer',
        }),
        request_for: ReferenceVariable({
            question: 'Requesting For',
            mapToField: true,
            field: 'request_for',
            referenceTable: 'x_aleen_snguardian_identity',
        }),
    },
})
