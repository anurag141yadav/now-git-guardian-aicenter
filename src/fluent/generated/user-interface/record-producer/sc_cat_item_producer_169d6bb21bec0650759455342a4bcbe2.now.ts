import {
    CatalogItemRecordProducer,
    ReferenceVariable,
    SelectBoxVariable,
    SingleLineTextVariable,
} from '@servicenow/sdk/core'

export const terminateTempWorker = CatalogItemRecordProducer({
    $id: Now.ID['169d6bb21bec0650759455342a4bcbe2'],
    name: 'Terminate Temp Worker',
    catalogs: ['e0d08b13c3330100c8b837659bba8fb4'],
    categories: ['0b5516481b284e106962fe60cd4bcbcd'],
    description: `<p><strong>Service Overview :</strong></p>
<ul style="list-style-position: inside;"><li>If you are terminating temp worker then please check with your manager, there might be a request created already by the system</li><li style="text-decoration: underline;">The request will go for<strong> Manager approval</strong> before it goes to Badging office/Security Team for printing</li><li>The default Access would be automatically added to your <em>badge based on company policies</em>. You can always request additional access once you receive your badge</li></ul>`,
    icon: Now.attach('./sc_cat_item_producer_169d6bb21bec0650759455342a4bcbe2_icon.png'),
    notAvailableFor: ['579325c247fdee10f487c24fe16d43d0'],
    owner: '6816f79cc0a8016401c5a33be04be441',
    picture: Now.attach('./sc_cat_item_producer_169d6bb21bec0650759455342a4bcbe2_picture.png'),
    roles: ['snc_internal'],
    shortDescription: 'This request is used to Teminate a Temporary Worker',
    version: 35,
    table: 'x_aleen_snguardian_request',
    script: Now.include('./sc_cat_item_producer_169d6bb21bec0650759455342a4bcbe2-script.js'),
    postInsertScript: Now.include('./sc_cat_item_producer_169d6bb21bec0650759455342a4bcbe2-post-insert-script.js'),
    variables: {
        request_type: ReferenceVariable({
            question: 'Request',
            order: 1,
            mapToField: true,
            field: 'request_type',
            referenceTable: 'sc_cat_item_producer',
        }),
        request_for: ReferenceVariable({
            question: 'Request For',
            order: 2,
            mapToField: true,
            field: 'request_for',
            mandatory: true,
            referenceTable: 'x_aleen_snguardian_identity',
            referenceQualCondition: 'type=bf7f8ed51bbc8210759455342a4bcb59^status=2a7f0ed51bbc8210759455342a4bcbe9^EQ',
        }),
        reason: SelectBoxVariable({
            question: 'Reason',
            order: 20,
            mandatory: true,
            choices: {
                PERFORMANCE: {
                    label: 'Performance',
                    inactive: false,
                    sequence: 20,
                },
                VIOLATION: {
                    label: 'Violation',
                    inactive: false,
                    sequence: 30,
                },
                END: {
                    label: 'End of Contract',
                    inactive: false,
                    sequence: 10,
                },
                LEGAL: {
                    label: 'Legal Issues',
                    inactive: false,
                    sequence: 40,
                },
                OTHERS: {
                    label: 'Others',
                    inactive: false,
                    sequence: 50,
                },
            },
        }),
        comments: SingleLineTextVariable({
            question: 'Comments',
            order: 30,
        }),
    },
})
