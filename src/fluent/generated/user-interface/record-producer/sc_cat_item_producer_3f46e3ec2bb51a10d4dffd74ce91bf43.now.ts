import {
    CatalogItemRecordProducer,
    SingleLineTextVariable,
    YesNoVariable,
    ReferenceVariable,
} from '@servicenow/sdk/core'

export const walkIn = CatalogItemRecordProducer({
    $id: Now.ID['3f46e3ec2bb51a10d4dffd74ce91bf43'],
    name: 'Walk-in',
    catalogs: ['e0d08b13c3330100c8b837659bba8fb4'],
    categories: ['17a5358647312250f487c24fe16d430d'],
    checkedOut: false,
    description: `<p> </p>
<div style="font-family: Arial, sans-serif; line-height: 1.6;">
<h3 style="color: #2b579a;">Visitor Walk-In Process</h3>
<ul style="color: #555; margin-left: 20px;"><li>Visitors register and provide ID details at the lobby.</li><li>Details are checked against the watchlist for security.</li><li>Lobby admin reviews and approves or escalates flagged entries.</li><li>Once approved, visitors receive access and check-in instructions.</li></ul>
</div>`,
    hideAttachment: true,
    meta: [
        'Schedule a Visit',
        'Appointment Booking',
        'Visitor Management',
        'Check-in Process',
        'Facility Security',
        'Guest Scheduling',
        'Visitor Flow Management',
        'Advance Booking',
        'Improved Visitor Experience',
    ],
    notAvailableFor: ['11f8a2db47392650f487c24fe16d43bc'],
    owner: '6816f79cc0a8016401c5a33be04be441',
    picture: Now.attach('./sc_cat_item_producer_3f46e3ec2bb51a10d4dffd74ce91bf43_picture.png'),
    roles: ['snc_internal'],
    shortDescription:
        'Schedule a Visit allows guests to book appointments in advance, ensuring a smooth and organized check-in experience',
    state: 'published',
    variableSets: [
        {
            variableSet: '01fbc1eb2bce1650d4dffd74ce91bfe4',
            order: 1,
        },
        {
            variableSet: 'afda325f2b259210d4dffd74ce91bf60',
            order: 10,
        },
        {
            variableSet: '41b50b0f2be15210d4dffd74ce91bfc1',
            order: 20,
        },
        {
            variableSet: '811132872ba15210d4dffd74ce91bf94',
            order: 30,
        },
        {
            variableSet: '6623aa841b684e106962fe60cd4bcb9f',
            order: 200,
        },
        {
            variableSet: '2ecb32522b311250d4dffd74ce91bf6f',
            order: 250,
        },
        {
            variableSet: '776c041f2b295210d4dffd74ce91bf93',
            order: 300,
        },
        {
            variableSet: '8706456c2b02d610d4dffd74ce91bf55',
            order: 350,
        },
        {
            variableSet: 'b68f4afe33865e10bf1221382e5c7bdc',
            order: 400,
        },
        {
            variableSet: 'd96b03072b255210d4dffd74ce91bf42',
            order: 500,
        },
        {
            variableSet: 'c068dc862bb19e10d4dffd74ce91bfcb',
            order: 600,
        },
    ],
    version: 279,
    hideAddToWishList: true,
    table: 'x_aleen_snguardian_visitor_request',
    script: Now.include('./sc_cat_item_producer_3f46e3ec2bb51a10d4dffd74ce91bf43-script.js'),
    postInsertScript: Now.include('./sc_cat_item_producer_3f46e3ec2bb51a10d4dffd74ce91bf43-post-insert-script.js'),
    variables: {
        visitor_id_scan_type: SingleLineTextVariable({
            question: 'Visitor ID Scan Type',
            hidden: true,
        }),
        includes_checkin: YesNoVariable({
            question: 'Includes Checkin',
            order: 2,
            defaultValue: 'No',
            hidden: true,
        }),
        request_type: ReferenceVariable({
            question: 'Request Type',
            order: 100,
            mapToField: true,
            field: 'request_type',
            readOnly: true,
            referenceTable: 'sc_cat_item_producer',
        }),
    },
})
