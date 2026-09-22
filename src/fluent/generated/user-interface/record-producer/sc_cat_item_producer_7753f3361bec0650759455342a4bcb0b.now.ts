import {
    CatalogItemRecordProducer,
    ReferenceVariable,
    SingleLineTextVariable,
    CustomVariable,
    MultipleChoiceVariable,
    SelectBoxVariable,
    RichTextLabelVariable,
    MultiLineTextVariable,
} from '@servicenow/sdk/core'

export const changeAccessRequest = CatalogItemRecordProducer({
    $id: Now.ID['7753f3361bec0650759455342a4bcb0b'],
    name: 'Change Access Request',
    catalogs: ['e0d08b13c3330100c8b837659bba8fb4'],
    categories: ['0b5516481b284e106962fe60cd4bcbcd'],
    description: `<p>Use this catalog item to Add, Update (date, location) or remove Access Levels.</p>
<p>Note : Changes are subject to approval.</p>`,
    hideAttachment: true,
    icon: Now.attach('./sc_cat_item_producer_7753f3361bec0650759455342a4bcb0b_icon.png'),
    notAvailableFor: ['171149361bf68210207b2179b04bcbbd'],
    owner: '6816f79cc0a8016401c5a33be04be441',
    picture: Now.attach('./sc_cat_item_producer_7753f3361bec0650759455342a4bcb0b_picture.png'),
    roles: ['snc_internal'],
    shortDescription: 'Submit changes to access privileges (addition, amendments or removals).',
    variableSets: [
        {
            variableSet: '5e42d75a472bea5051a3e84d416d431e',
            order: 10,
        },
        {
            variableSet: 'eb52131a472bea5051a3e84d416d4363',
            order: 15,
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
    version: 292,
    table: 'x_aleen_snguardian_request',
    script: Now.include('./sc_cat_item_producer_7753f3361bec0650759455342a4bcb0b-script.js'),
    postInsertScript: Now.include('./sc_cat_item_producer_7753f3361bec0650759455342a4bcb0b-post-insert-script.js'),
    variables: {
        location: ReferenceVariable({
            question: 'Location',
            hidden: true,
            referenceTable: 'x_aleen_snguardian_location',
        }),
        is_processing_done: SingleLineTextVariable({
            question: 'is_processing_done',
            hidden: true,
        }),
        access_levels_data: CustomVariable({
            question: 'access_levels_data',
            widget: '6055f31247ebea5051a3e84d416d43ba',
        }),
        new_badge_required: SingleLineTextVariable({
            question: 'new_badge_required',
            hidden: true,
        }),
        access_levels_count: SingleLineTextVariable({
            question: 'access_levels_count',
            hidden: true,
        }),
        default_badge_technology: SingleLineTextVariable({
            question: 'default_badge_technology',
            hidden: true,
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
        access_type: MultipleChoiceVariable({
            question: 'Access Type',
            order: 8,
            choices: {
                new_access: {
                    label: 'New Access',
                    inactive: false,
                    sequence: 100,
                },
                existing_access: {
                    label: 'Modify Existing Access',
                    inactive: false,
                    sequence: 200,
                },
            },
            choiceDirection: 'across',
        }),
        reason: SelectBoxVariable({
            question: 'Reason',
            order: 70,
            choices: {
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
                WORK: {
                    label: 'Work',
                    inactive: false,
                    sequence: 100,
                },
            },
        }),
        comments: SingleLineTextVariable({
            question: 'Comments',
            order: 100,
        }),
        is_valid_request: SingleLineTextVariable({
            question: 'is_valid_request',
            order: 999,
            defaultValue: 'false',
            hidden: true,
        }),
        CustomButtonsSettings: RichTextLabelVariable({
            order: 1000,
            richText: `<style>sp-sc-multi-row-element#sp_formfield_existing_access_levels button:first-child { display:none; }

sp-sc-multi-row-element#sp_formfield_existing_access_levels button:nth-child(2) { display:none; }

sp-sc-multi-row-element#sp_formfield_existing_access_levels a.wrapper-xs.fa.fa-close { display:none; }

button[aria-label="Add a row for Existing Access Levels"] { display:none; }

button[aria-label="Remove all rows for Existing Access Levels"] { display:none; }

div#existing_access_levels a.wrapper-xs.fa.fa-close { display:none; }
</style>`,
        }),
        existing_access_mrvs: MultiLineTextVariable({
            question: 'existing_access_mrvs',
            order: 1100,
            hidden: true,
        }),
        system_based_badges: MultiLineTextVariable({
            question: 'system_based_badges',
            order: 1100,
            hidden: true,
        }),
        validate_dates: SingleLineTextVariable({
            question: 'validate_dates',
            order: 1101,
            defaultValue: 'false',
            hidden: true,
        }),
        validate_associated_asset: SingleLineTextVariable({
            question: 'validate_associated_asset',
            order: 1102,
            defaultValue: 'false',
            hidden: true,
        }),
    },
})
