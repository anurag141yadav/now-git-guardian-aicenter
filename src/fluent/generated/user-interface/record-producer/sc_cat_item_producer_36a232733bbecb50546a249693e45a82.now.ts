import { CatalogItemRecordProducer, ReferenceVariable } from '@servicenow/sdk/core'

export const securitySystem = CatalogItemRecordProducer({
    $id: Now.ID['36a232733bbecb50546a249693e45a82'],
    name: 'Security System',
    catalogs: ['e0d08b13c3330100c8b837659bba8fb4'],
    categories: ['0b5516481b284e106962fe60cd4bcbcd'],
    owner: '6816f79cc0a8016401c5a33be04be441',
    shortDescription: 'Privileged Account Access',
    variableSets: [
        {
            variableSet: '995d5bfb3bb20f50546a249693e45ad2',
            order: 100,
        },
    ],
    version: 13,
    table: 'x_aleen_snguardian_request',
    variables: {
        request_for: ReferenceVariable({
            question: 'Reqeust For',
            defaultValue:
                "javascript:  getVVV();  function getVVV(){ var gr = new GlideRecordSecure('x_aleen_snguardian_identity'); var loggedInUser = gs.getUserID(); gr.addQuery('master_user_id',loggedInUser);gr.query(); if(gr.next()){ var sys_id_identity = gr.getUniqueValue(); return sys_id_identity;}else{return '';}}",
            mapToField: true,
            field: 'request_for',
            readOnly: true,
            referenceTable: 'x_aleen_snguardian_identity',
            referenceQualCondition: 'master_user_idDYNAMIC90d1921e5f510100a9ad2572f2b477fe^EQ',
        }),
        request_type: ReferenceVariable({
            question: 'Request Type',
            hidden: true,
            referenceTable: 'sc_cat_item_producer',
        }),
    },
})
