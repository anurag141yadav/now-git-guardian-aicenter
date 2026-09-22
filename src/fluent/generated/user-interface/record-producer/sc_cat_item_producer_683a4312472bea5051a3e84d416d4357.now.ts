import {
    CatalogItemRecordProducer,
    SingleLineTextVariable,
    CustomVariable,
    ReferenceVariable,
    SelectBoxVariable,
} from '@servicenow/sdk/core'

export const changeAccessRequest10 = CatalogItemRecordProducer({
    $id: Now.ID['683a4312472bea5051a3e84d416d4357'],
    name: 'Change Access Request 1.0',
    active: false,
    catalogs: ['e0d08b13c3330100c8b837659bba8fb4'],
    categories: ['0b5516481b284e106962fe60cd4bcbcd'],
    description: `<p>This request is for  Change access</p>
<p>1. Edit the Existing access levels (Dates)</p>
<p>2. Deleted the existing Access Levels</p>
<p>3. Add new access levels</p>`,
    icon: Now.attach('./sc_cat_item_producer_683a4312472bea5051a3e84d416d4357_icon.png'),
    notAvailableFor: ['171149361bf68210207b2179b04bcbbd'],
    owner: '6816f79cc0a8016401c5a33be04be441',
    picture: Now.attach('./sc_cat_item_producer_683a4312472bea5051a3e84d416d4357_picture.png'),
    roles: ['snc_internal'],
    shortDescription: 'This request is for  Change request (to add new , edit  / delete the existing  access levels)',
    variableSets: [
        {
            variableSet: '135e12001b684e106962fe60cd4bcb87',
            order: 16,
        },
        {
            variableSet: '399dc4801b1286106962fe60cd4bcb0c',
            order: 17,
        },
        {
            variableSet: '03edc4401b1286106962fe60cd4bcbfe',
            order: 18,
        },
    ],
    version: 145,
    table: 'x_aleen_snguardian_request',
    variables: {
        access_levels_count: SingleLineTextVariable({
            question: 'access_levels_count',
            hidden: true,
        }),
        access_levels_data: CustomVariable({
            question: 'access_levels_data',
            widget: 'd7fe4e441b5a4610759455342a4bcb1d',
        }),
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
        }),
        location: ReferenceVariable({
            question: 'Location',
            order: 15,
            referenceTable: 'x_aleen_snguardian_location',
        }),
        reason: SelectBoxVariable({
            question: 'Reason',
            order: 70,
            choices: {
                WORK: {
                    label: 'Work',
                    inactive: false,
                    sequence: 100,
                },
                VISIT: {
                    label: 'Visit',
                    inactive: false,
                    sequence: 200,
                },
                OTHERS: {
                    label: 'Others',
                    inactive: false,
                    sequence: 300,
                },
            },
        }),
        comments: SingleLineTextVariable({
            question: 'Comments',
            order: 100,
        }),
    },
})
