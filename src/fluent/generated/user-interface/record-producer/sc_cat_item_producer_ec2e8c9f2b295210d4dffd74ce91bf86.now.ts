import { CatalogItemRecordProducer, ReferenceVariable } from '@servicenow/sdk/core'

export const scheduleAVisit = CatalogItemRecordProducer({
    $id: Now.ID['ec2e8c9f2b295210d4dffd74ce91bf86'],
    name: 'Schedule a  Visit',
    catalogs: ['e0d08b13c3330100c8b837659bba8fb4'],
    categories: ['17a5358647312250f487c24fe16d430d'],
    description: `<p> </p>
<div class="schedule-visit-description">
<h2>Schedule a Visit</h2>
<p>Schedule a Visit allows guests to book appointments in advance, ensuring a smooth and organized check-in experience. This process improves security, reduces wait times, and enhances visitor management by allowing staff to prepare for arrivals.</p>
<ul><li>Enables guests to select convenient times for their visits, enhancing flexibility.</li><li>Facilitates advanced preparation by staff for a more personalized experience.</li><li>Streamlines the check-in process, minimizing congestion and delays.</li><li>Improves visitor satisfaction by reducing waiting times and ensuring prompt attention.</li><li>Helps maintain security by managing the flow of visitors effectively.</li></ul>
</div>`,
    icon: Now.attach('./sc_cat_item_producer_ec2e8c9f2b295210d4dffd74ce91bf86_icon.ico'),
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
    notAvailableFor: ['50f2cf5b47b92650f487c24fe16d4355'],
    owner: '6816f79cc0a8016401c5a33be04be441',
    picture: 'da8e960533165210bf1221382e5c7bf1',
    roles: ['snc_internal'],
    shortDescription:
        'Schedule a Visit allows guests to book appointments in advance, ensuring a smooth and organized check-in experience',
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
            order: 30,
        },
        {
            variableSet: '0881dddb33ab1210bf1221382e5c7b39',
            order: 100,
        },
        {
            variableSet: '811132872ba15210d4dffd74ce91bf94',
            order: 200,
        },
        {
            variableSet: '776c041f2b295210d4dffd74ce91bf93',
            order: 350,
        },
        {
            variableSet: '6623aa841b684e106962fe60cd4bcb9f',
            order: 600,
        },
        {
            variableSet: '2ecb32522b311250d4dffd74ce91bf6f',
            order: 650,
        },
    ],
    version: 199,
    table: 'x_aleen_snguardian_visitor_request',
    script: Now.include('./sc_cat_item_producer_ec2e8c9f2b295210d4dffd74ce91bf86-script.js'),
    postInsertScript: Now.include('./sc_cat_item_producer_ec2e8c9f2b295210d4dffd74ce91bf86-post-insert-script.js'),
    variables: {
        request_type: ReferenceVariable({
            question: 'Request Type',
            order: 1,
            mapToField: true,
            field: 'request_type',
            readOnly: true,
            referenceTable: 'sc_cat_item_producer',
        }),
    },
})
