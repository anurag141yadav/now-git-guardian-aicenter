import { CatalogItemRecordProducer, ReferenceVariable, MaskedVariable } from '@servicenow/sdk/core'

export const resetPin = CatalogItemRecordProducer({
    $id: Now.ID['d574bb7a1bec0650759455342a4bcbe6'],
    name: 'Reset PIN',
    catalogs: ['e0d08b13c3330100c8b837659bba8fb4'],
    categories: ['0b5516481b284e106962fe60cd4bcbcd'],
    description: '<p>This request used to reset PIN</p>',
    icon: Now.attach('./sc_cat_item_producer_d574bb7a1bec0650759455342a4bcbe6_icon.png'),
    notAvailableFor: ['171149361bf68210207b2179b04bcbbd'],
    owner: '6816f79cc0a8016401c5a33be04be441',
    picture: Now.attach('./sc_cat_item_producer_d574bb7a1bec0650759455342a4bcbe6_picture.png'),
    roles: ['snc_internal'],
    shortDescription: 'This request used to reset PIN',
    version: 76,
    table: 'x_aleen_snguardian_request',
    script: Now.include('./sc_cat_item_producer_d574bb7a1bec0650759455342a4bcbe6-script.js'),
    postInsertScript: Now.include('./sc_cat_item_producer_d574bb7a1bec0650759455342a4bcbe6-post-insert-script.js'),
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
            defaultValue:
                "javascript:  getVVV();  function getVVV(){ var gr = new GlideRecordSecure('x_aleen_snguardian_identity'); var loggedInUser = gs.getUserID(); gr.addQuery('master_user_id',loggedInUser);gr.query(); if(gr.next()){ var sys_id_identity = gr.getUniqueValue(); return sys_id_identity;}else{return '';}}",
            mapToField: true,
            field: 'request_for',
            readOnly: true,
            referenceTable: 'x_aleen_snguardian_identity',
            referenceQualCondition: 'master_user_idDYNAMIC90d1921e5f510100a9ad2572f2b477fe^EQ',
        }),
        new_pin: MaskedVariable({
            question: 'New PIN',
            order: 3,
            mandatory: true,
            useEncryption: true,
        }),
    },
})
