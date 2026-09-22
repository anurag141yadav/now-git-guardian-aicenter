import { CatalogItemRecordProducer, ReferenceVariable } from '@servicenow/sdk/core'

export const checkIn = CatalogItemRecordProducer({
    $id: Now.ID['20b21f0f2b255210d4dffd74ce91bf94'],
    name: 'Check In',
    catalogs: ['e0d08b13c3330100c8b837659bba8fb4'],
    categories: ['17a5358647312250f487c24fe16d430d'],
    checkedOut: false,
    description: `<p> </p>
<div class="visitor-checkin-description">
<h2>Visitor Check-In</h2>
<p>Visitor Check-In is a secure and efficient process that registers guests upon arrival, verifies their identity, and grants appropriate access. This process enhances security, ensures accurate visitor logs, and supports a smooth visitor experience.</p>
<ul><li>Registers guests upon arrival for accurate visitor tracking.</li><li>Verifies visitor identity to enhance facility security.</li><li>Grants appropriate access levels based on visitor role or purpose.</li><li>Supports a smooth and efficient check-in experience.</li><li>Ensures compliance with security policies and visitor management standards.</li></ul>
</div>`,
    icon: Now.attach('./sc_cat_item_producer_20b21f0f2b255210d4dffd74ce91bf94_icon.ico'),
    meta: [
        'Visitor Check-In',
        'Visitor Management',
        'Facility Security',
        'Visitor Registration',
        'Identity Verification',
        'Access Control',
        'Visitor Tracking',
        'Check-in System',
        'Security Compliance',
        'Visitor Logs',
        'Access Management',
    ],
    notAvailableFor: ['11f8a2db47392650f487c24fe16d43bc'],
    owner: '6816f79cc0a8016401c5a33be04be441',
    picture: Now.attach('./sc_cat_item_producer_20b21f0f2b255210d4dffd74ce91bf94_picture.png'),
    roles: ['snc_internal'],
    shortDescription:
        'Check-In is a secure and efficient process that registers guests upon arrival, verifies their identity, and grants appropriate access',
    state: 'published',
    variableSets: [
        {
            variableSet: '8706456c2b02d610d4dffd74ce91bf55',
            order: 50,
        },
        {
            variableSet: 'b68f4afe33865e10bf1221382e5c7bdc',
            order: 75,
        },
        {
            variableSet: '01fbc1eb2bce1650d4dffd74ce91bfe4',
            order: 100,
        },
        {
            variableSet: 'd96b03072b255210d4dffd74ce91bf42',
            order: 200,
        },
        {
            variableSet: 'c068dc862bb19e10d4dffd74ce91bfcb',
            order: 400,
        },
    ],
    version: 223,
    table: 'x_aleen_snguardian_visitor_request',
    script: Now.include('./sc_cat_item_producer_20b21f0f2b255210d4dffd74ce91bf94-script.js'),
    postInsertScript: Now.include('./sc_cat_item_producer_20b21f0f2b255210d4dffd74ce91bf94-post-insert-script.js'),
    variables: {
        request_type: ReferenceVariable({
            question: 'Request Type',
            order: 1,
            readOnly: true,
            referenceTable: 'sc_cat_item_producer',
        }),
        visit_id: ReferenceVariable({
            question: 'Visit',
            order: 2,
            readOnly: true,
            referenceTable: 'x_aleen_snguardian_visitor_visit',
        }),
        visit_location: ReferenceVariable({
            question: 'Location',
            order: 3,
            readOnly: true,
            referenceTable: 'x_aleen_snguardian_location',
        }),
    },
})
