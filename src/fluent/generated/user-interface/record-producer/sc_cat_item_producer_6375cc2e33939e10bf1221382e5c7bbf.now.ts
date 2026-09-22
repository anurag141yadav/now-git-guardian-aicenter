import { CatalogItemRecordProducer, ReferenceVariable, DateTimeVariable } from '@servicenow/sdk/core'

export const singleMobileCredentialRequest = CatalogItemRecordProducer({
    $id: Now.ID['6375cc2e33939e10bf1221382e5c7bbf'],
    name: 'Single Mobile Credential Request',
    description: `<p style="text-align: left;"><strong>Service Overview:</strong></p>
<p>To request a mobile credential (digital badge) through the application, for getting access of designated areas using their mobile device.</p>`,
    icon: Now.attach('./sc_cat_item_producer_6375cc2e33939e10bf1221382e5c7bbf_icon.png'),
    owner: '6816f79cc0a8016401c5a33be04be441',
    picture: Now.attach('./sc_cat_item_producer_6375cc2e33939e10bf1221382e5c7bbf_picture.png'),
    roles: ['snc_internal'],
    shortDescription: 'This request can be used to request for a new Mobile Credential  (NFC).',
    version: 68,
    table: 'x_aleen_snguardian_request',
    script: Now.include('./sc_cat_item_producer_6375cc2e33939e10bf1221382e5c7bbf-script.js'),
    postInsertScript: Now.include('./sc_cat_item_producer_6375cc2e33939e10bf1221382e5c7bbf-post-insert-script.js'),
    variables: {
        parent: ReferenceVariable({
            question: 'Parent Request',
            mapToField: true,
            field: 'parent',
            hidden: true,
            referenceTable: 'x_aleen_snguardian_request',
        }),
        request_type: ReferenceVariable({
            question: 'Request',
            order: 1,
            readOnly: true,
            referenceTable: 'sc_cat_item_producer',
        }),
        request_for: ReferenceVariable({
            question: 'Request For',
            order: 10,
            mapToField: true,
            field: 'request_for',
            referenceTable: 'x_aleen_snguardian_identity',
            referenceQualCondition: 'is_deleted=false^EQ',
        }),
        valid_from: DateTimeVariable({
            question: 'Valid From',
            order: 20,
            width: 50,
        }),
        valid_to: DateTimeVariable({
            question: 'Valid To',
            order: 30,
            width: 50,
        }),
    },
})
