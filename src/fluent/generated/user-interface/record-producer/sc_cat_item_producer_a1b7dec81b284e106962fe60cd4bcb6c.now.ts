import {
    CatalogItemRecordProducer,
    ReferenceVariable,
    CustomVariable,
    SelectBoxVariable,
    SingleLineTextVariable,
} from '@servicenow/sdk/core'

export const newBadgeRequest = CatalogItemRecordProducer({
    $id: Now.ID['a1b7dec81b284e106962fe60cd4bcb6c'],
    name: 'New Badge Request',
    catalogs: ['e0d08b13c3330100c8b837659bba8fb4'],
    categories: ['0b5516481b284e106962fe60cd4bcbcd'],
    description: `<p><strong>Service Overview :</strong></p>
<ul style="list-style-position: inside;"><li>If you are a new hire then please check with your manager, there might be a request created already by the system</li><li>The request will go for<span style="text-decoration: underline;"><strong> Manager approval</strong></span> before it goes to Badging office/Security Team for printing</li><li>The default Access would be automatically added to your <em>badge based on company policies</em>. You can always request additional access once you receive your badge</li></ul>`,
    icon: Now.attach('./sc_cat_item_producer_a1b7dec81b284e106962fe60cd4bcb6c_icon.jpg'),
    notAvailableFor: ['171149361bf68210207b2179b04bcbbd'],
    owner: '6816f79cc0a8016401c5a33be04be441',
    picture: Now.attach('./sc_cat_item_producer_a1b7dec81b284e106962fe60cd4bcb6c_picture.png'),
    roles: ['snc_internal'],
    shortDescription: 'This request can be used to request for a new Badge/ ID Card',
    variableSets: [
        {
            variableSet: '22feda801b684e106962fe60cd4bcb0a',
            order: 10,
        },
        {
            variableSet: '135e12001b684e106962fe60cd4bcb87',
            order: 20,
        },
        {
            variableSet: '027e9a041b684e106962fe60cd4bcb96',
            order: 30,
        },
    ],
    version: 80,
    table: 'x_aleen_snguardian_request',
    script: Now.include('./sc_cat_item_producer_a1b7dec81b284e106962fe60cd4bcb6c-script.js'),
    postInsertScript: Now.include('./sc_cat_item_producer_a1b7dec81b284e106962fe60cd4bcb6c-post-insert-script.js'),
    variables: {
        sys_created_by: ReferenceVariable({
            question: 'Created By',
            mapToField: true,
            field: 'sys_created_by',
            hidden: true,
            referenceTable: 'sys_user',
        }),
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
            referenceTable: 'x_aleen_snguardian_identity',
            referenceQualCondition: 'is_deleted=false^status=2a7f0ed51bbc8210759455342a4bcbe9^EQ',
        }),
        photo: CustomVariable({
            question: 'Photo',
            order: 11,
            widget: '900b8b02470d665051a3e84d416d4366',
        }),
        reason: SelectBoxVariable({
            question: 'Reason',
            order: 250,
            mandatory: true,
            choices: {
                NEWHIRE: {
                    label: 'New Hire',
                    inactive: false,
                    sequence: 100,
                },
            },
        }),
        description: SingleLineTextVariable({
            question: 'Comments',
            order: 300,
            mapToField: true,
            field: 'description',
        }),
        photo_data: SingleLineTextVariable({
            question: 'photo_data',
            order: 999,
            hidden: true,
        }),
    },
})
