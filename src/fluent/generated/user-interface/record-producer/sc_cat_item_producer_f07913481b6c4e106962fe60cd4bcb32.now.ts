import { CatalogItemRecordProducer, ReferenceVariable } from '@servicenow/sdk/core'

export const onboardATempWorker = CatalogItemRecordProducer({
    $id: Now.ID['f07913481b6c4e106962fe60cd4bcb32'],
    name: 'Onboard a Temp Worker',
    catalogs: ['e0d08b13c3330100c8b837659bba8fb4'],
    categories: ['0b5516481b284e106962fe60cd4bcbcd'],
    description: `<p><br /><strong>Service Overview :</strong></p>
<ul style="list-style-position: inside;"><li>Provide Worker and the work details for registration</li><li>Based on the Worker and site policies, it may go for an additional approval</li><li>Once registered, the worker will receive a confirmation email with Work details and a QR code for easy check-in</li></ul>`,
    icon: Now.attach('./sc_cat_item_producer_f07913481b6c4e106962fe60cd4bcb32_icon.jpg'),
    notAvailableFor: ['171149361bf68210207b2179b04bcbbd'],
    owner: '6816f79cc0a8016401c5a33be04be441',
    picture: Now.attach('./sc_cat_item_producer_f07913481b6c4e106962fe60cd4bcb32_picture.jpg'),
    roles: ['snc_internal'],
    shortDescription: 'This request can be used to onaboard Temporay Worker / Temporary Access',
    variableSets: [
        {
            variableSet: 'a676628c1b684e106962fe60cd4bcbad',
            order: 100,
        },
        {
            variableSet: '9883ae841b684e106962fe60cd4bcbe7',
            order: 200,
        },
        {
            variableSet: '027e9a041b684e106962fe60cd4bcb96',
            order: 300,
        },
    ],
    version: 115,
    table: 'x_aleen_snguardian_request',
    script: Now.include('./sc_cat_item_producer_f07913481b6c4e106962fe60cd4bcb32-script.js'),
    postInsertScript: Now.include('./sc_cat_item_producer_f07913481b6c4e106962fe60cd4bcb32-post-insert-script.js'),
    variables: {
        request_for: ReferenceVariable({
            question: 'Request For',
            hidden: true,
            referenceTable: 'x_aleen_snguardian_identity',
        }),
        request_type: ReferenceVariable({
            question: 'Request',
            order: 1,
            mapToField: true,
            field: 'request_type',
            readOnly: true,
            referenceTable: 'sc_cat_item_producer',
        }),
    },
})
