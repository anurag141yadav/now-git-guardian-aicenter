import {
    CatalogItemRecordProducer,
    SingleLineTextVariable,
    ReferenceVariable,
    AttachmentVariable,
} from '@servicenow/sdk/core'

export const updateProfile = CatalogItemRecordProducer({
    $id: Now.ID['af04ff3a1bec0650759455342a4bcb36'],
    name: 'Update Profile',
    catalogs: ['e0d08b13c3330100c8b837659bba8fb4'],
    categories: ['0b5516481b284e106962fe60cd4bcbcd'],
    description: '<p>This request used to update identity Information</p>',
    icon: Now.attach('./sc_cat_item_producer_af04ff3a1bec0650759455342a4bcb36_icon.png'),
    notAvailableFor: ['223fda0647f12250f487c24fe16d4392'],
    owner: '6816f79cc0a8016401c5a33be04be441',
    picture: Now.attach('./sc_cat_item_producer_af04ff3a1bec0650759455342a4bcb36_picture.png'),
    roles: ['snc_internal'],
    shortDescription: 'This request used to update identity Information',
    version: 49,
    table: 'x_aleen_snguardian_request',
    script: Now.include('./sc_cat_item_producer_af04ff3a1bec0650759455342a4bcb36-script.js'),
    postInsertScript: Now.include('./sc_cat_item_producer_af04ff3a1bec0650759455342a4bcb36-post-insert-script.js'),
    variables: {
        type: SingleLineTextVariable({
            question: 'Type',
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
            referenceTable: 'x_aleen_snguardian_identity',
        }),
        first_name: SingleLineTextVariable({
            question: 'First Name',
            order: 20,
        }),
        last_name: SingleLineTextVariable({
            question: 'Last Name',
            order: 30,
        }),
        phone: SingleLineTextVariable({
            question: 'Phone',
            order: 50,
        }),
        photo: AttachmentVariable({
            question: 'Photo',
            order: 60,
            attributes: 'allowed_extensions=png;jpeg;jpg',
        }),
    },
})
