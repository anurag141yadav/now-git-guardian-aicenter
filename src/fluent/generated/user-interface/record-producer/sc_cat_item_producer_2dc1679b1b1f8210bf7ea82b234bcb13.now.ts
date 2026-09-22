import {
    CatalogItemRecordProducer,
    ReferenceVariable,
    DateTimeVariable,
    YesNoVariable,
    SingleLineTextVariable,
} from '@servicenow/sdk/core'

export const mobileCredentialRequest = CatalogItemRecordProducer({
    $id: Now.ID['2dc1679b1b1f8210bf7ea82b234bcb13'],
    name: 'Mobile Credential Request',
    catalogs: ['e0d08b13c3330100c8b837659bba8fb4'],
    categories: ['0b5516481b284e106962fe60cd4bcbcd'],
    checkedOut: false,
    description: `<p style="text-align: left;"><strong>Service Overview:</strong></p>
<p>Use this service to obtain a digital mobile credential that grants access to authorized areas through your mobile device.</p>`,
    icon: Now.attach('./sc_cat_item_producer_2dc1679b1b1f8210bf7ea82b234bcb13_icon.png'),
    notAvailableFor: ['171149361bf68210207b2179b04bcbbd'],
    owner: '4bf49e341bb842106962fe60cd4bcb20',
    picture: '2e1468644724a610f487c24fe16d434b',
    roles: ['snc_internal'],
    shortDescription: 'Request a new Mobile Wallet Credential.',
    state: 'published',
    variableSets: [
        {
            variableSet: '027e9a041b684e106962fe60cd4bcb96',
            order: 300,
        },
    ],
    version: 105,
    table: 'x_aleen_snguardian_request',
    variables: {
        request_type: ReferenceVariable({
            question: 'Request',
            order: 100,
            readOnly: true,
            referenceTable: 'sc_cat_item_producer',
        }),
        request_for: ReferenceVariable({
            question: 'Request For',
            order: 200,
            mapToField: true,
            field: 'request_for',
            referenceTable: 'x_aleen_snguardian_identity',
            referenceQualCondition: 'is_deleted=false^EQ',
        }),
        valid_from: DateTimeVariable({
            question: 'Valid From',
            order: 400,
            width: 50,
            hidden: true,
        }),
        valid_to: DateTimeVariable({
            question: 'Valid To',
            order: 500,
            width: 50,
            hidden: true,
        }),
        web_provision: YesNoVariable({
            question: 'Web Provision',
            order: 600,
            hidden: true,
        }),
        isvalidrequest: SingleLineTextVariable({
            question: 'isValidRequest',
            order: 1000,
            hidden: true,
        }),
    },
})
