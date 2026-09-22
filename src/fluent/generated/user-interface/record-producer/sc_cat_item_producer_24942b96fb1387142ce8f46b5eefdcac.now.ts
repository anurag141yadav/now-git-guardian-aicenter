import {
    CatalogItemRecordProducer,
    ReferenceVariable,
    SelectBoxVariable,
    SingleLineTextVariable,
} from '@servicenow/sdk/core'

export const deactivateBadgeRequest = CatalogItemRecordProducer({
    $id: Now.ID['24942b96fb1387142ce8f46b5eefdcac'],
    name: 'Deactivate Badge Request',
    catalogs: ['e0d08b13c3330100c8b837659bba8fb4'],
    categories: ['0b5516481b284e106962fe60cd4bcbcd'],
    description: `<p><strong>Service Overview :</strong></p>
<ul style="list-style-position: inside;"><li>You can deactivate an existing badge </li><li>The badge will be deactivated.</li></ul>`,
    notAvailableFor: ['171149361bf68210207b2179b04bcbbd'],
    owner: '6816f79cc0a8016401c5a33be04be441',
    shortDescription: 'This request can be used to Deactivate a Badge or ID Card',
    variableSets: [
        {
            variableSet: '027e9a041b684e106962fe60cd4bcb96',
            order: 20,
        },
    ],
    version: 42,
    table: 'x_aleen_snguardian_request',
    variables: {
        request_type: ReferenceVariable({
            question: 'Request',
            order: 1,
            mapToField: true,
            field: 'request_type',
            readOnly: true,
            referenceTable: 'sc_cat_item_producer',
        }),
        request_for: ReferenceVariable({
            question: 'Request For',
            order: 10,
            mapToField: true,
            field: 'request_for',
            mandatory: true,
            referenceTable: 'x_aleen_snguardian_identity',
            referenceQualCondition: 'is_deleted=false^EQ',
        }),
        badge_id: SelectBoxVariable({
            question: 'Badge ID to Deactivate',
            order: 30,
            mandatory: true,
        }),
        description: SingleLineTextVariable({
            question: 'Comments',
            order: 50,
            mapToField: true,
            field: 'description',
        }),
    },
})
