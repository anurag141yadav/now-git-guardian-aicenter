import {
    CatalogItemRecordProducer,
    ReferenceVariable,
    SelectBoxVariable,
    SingleLineTextVariable,
} from '@servicenow/sdk/core'

export const replaceBadge = CatalogItemRecordProducer({
    $id: Now.ID['53ec2bb21bec0650759455342a4bcba3'],
    name: 'Replace Badge',
    catalogs: ['e0d08b13c3330100c8b837659bba8fb4'],
    categories: ['0b5516481b284e106962fe60cd4bcbcd'],
    description: `<p><strong>Service Overview :</strong></p>
<ul style="list-style-position: inside;"><li>If you are a new hire then please check with your manager, there might be a request created already by the system</li><li style="text-decoration: underline;">The request will go for<strong> Manager approval</strong> before it goes to Badging office/Security Team for printing</li><li>The default Access would be automatically added to your <em>badge based on company policies</em>. You can always request additional access once you receive your badge</li></ul>`,
    icon: Now.attach('./sc_cat_item_producer_53ec2bb21bec0650759455342a4bcba3_icon.png'),
    notAvailableFor: ['171149361bf68210207b2179b04bcbbd'],
    owner: '6816f79cc0a8016401c5a33be04be441',
    picture: Now.attach('./sc_cat_item_producer_53ec2bb21bec0650759455342a4bcba3_picture.png'),
    roles: ['snc_internal'],
    shortDescription: 'This request can be used to request for a replacement of an existing stolen / damaged card',
    variableSets: [
        {
            variableSet: '22feda801b684e106962fe60cd4bcb0a',
            order: 10,
        },
        {
            variableSet: '027e9a041b684e106962fe60cd4bcb96',
            order: 30,
        },
        {
            variableSet: '135e12001b684e106962fe60cd4bcb87',
            order: 62,
        },
    ],
    version: 49,
    table: 'x_aleen_snguardian_request',
    script: Now.include('./sc_cat_item_producer_53ec2bb21bec0650759455342a4bcba3-script.js'),
    postInsertScript: Now.include('./sc_cat_item_producer_53ec2bb21bec0650759455342a4bcba3-post-insert-script.js'),
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
            referenceQualCondition: 'null',
        }),
        badge_id: SelectBoxVariable({
            question: 'Badge ID to replace',
            order: 40,
            mandatory: true,
        }),
        comments: SingleLineTextVariable({
            question: 'Comments',
            order: 80,
        }),
        reason: SelectBoxVariable({
            question: 'Reason',
            order: 100,
            choices: {
                Disabled: {
                    label: 'Disabled',
                    inactive: false,
                    sequence: 300,
                    pricingDetails: [
                        {
                            amount: 0,
                            currencyType: 'USD',
                            field: 'misc',
                        },
                        {
                            amount: 0,
                            currencyType: 'USD',
                            field: 'rec_misc',
                        },
                    ],
                },
                Damaged: {
                    label: 'Damaged',
                    inactive: false,
                    sequence: 600,
                    pricingDetails: [
                        {
                            amount: 0,
                            currencyType: 'USD',
                            field: 'misc',
                        },
                        {
                            amount: 0,
                            currencyType: 'USD',
                            field: 'rec_misc',
                        },
                    ],
                },
                Suspended: {
                    label: 'Suspended',
                    inactive: false,
                    sequence: 500,
                    pricingDetails: [
                        {
                            amount: 0,
                            currencyType: 'USD',
                            field: 'misc',
                        },
                        {
                            amount: 0,
                            currencyType: 'USD',
                            field: 'rec_misc',
                        },
                    ],
                },
                Expired: {
                    label: 'Expired',
                    inactive: false,
                    sequence: 400,
                    pricingDetails: [
                        {
                            amount: 0,
                            currencyType: 'USD',
                            field: 'misc',
                        },
                        {
                            amount: 0,
                            currencyType: 'USD',
                            field: 'rec_misc',
                        },
                    ],
                },
                Stolen: {
                    label: 'Stolen',
                    inactive: false,
                    sequence: 100,
                    pricingDetails: [
                        {
                            amount: 0,
                            currencyType: 'USD',
                            field: 'misc',
                        },
                        {
                            amount: 0,
                            currencyType: 'USD',
                            field: 'rec_misc',
                        },
                    ],
                },
                Lost: {
                    label: 'Lost',
                    inactive: false,
                    sequence: 200,
                    pricingDetails: [
                        {
                            amount: 0,
                            currencyType: 'USD',
                            field: 'misc',
                        },
                        {
                            amount: 0,
                            currencyType: 'USD',
                            field: 'rec_misc',
                        },
                    ],
                },
            },
        }),
    },
})
