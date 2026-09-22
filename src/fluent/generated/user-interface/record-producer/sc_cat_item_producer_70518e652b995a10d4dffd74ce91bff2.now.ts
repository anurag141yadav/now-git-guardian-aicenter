import {
    CatalogItemRecordProducer,
    ReferenceVariable,
    SelectBoxVariable,
    SingleLineTextVariable,
} from '@servicenow/sdk/core'

export const deactivateMobileCredentialRequest = CatalogItemRecordProducer({
    $id: Now.ID['70518e652b995a10d4dffd74ce91bff2'],
    name: 'Deactivate Mobile Credential Request',
    catalogs: ['e0d08b13c3330100c8b837659bba8fb4'],
    categories: ['0b5516481b284e106962fe60cd4bcbcd'],
    description: `<p><strong>Service Overview :</strong></p>
<ul style="list-style-position: inside;"><li>Definition: A deactivation request is to disable access or services no longer needed.</li><li>Reason: It is initiated due to role changes, departures, or completed projects.</li><li>Impact: User access to specified systems or services will be removed.</li><li>Process: It involves approval, followed by deactivation within a set timeline.</li></ul>`,
    icon: Now.attach('./sc_cat_item_producer_70518e652b995a10d4dffd74ce91bff2_icon.png'),
    notAvailableFor: ['171149361bf68210207b2179b04bcbbd'],
    owner: 'f4c452b41bb842106962fe60cd4bcb6b',
    picture: Now.attach('./sc_cat_item_producer_70518e652b995a10d4dffd74ce91bff2_picture.png'),
    roles: ['snc_internal'],
    shortDescription: 'Deactivate Mobile Credential and its related badges',
    variableSets: [
        {
            variableSet: '027e9a041b684e106962fe60cd4bcb96',
            order: 20,
        },
    ],
    version: 30,
    table: 'x_aleen_snguardian_request',
    script: Now.include('./sc_cat_item_producer_70518e652b995a10d4dffd74ce91bff2-script.js'),
    postInsertScript: Now.include('./sc_cat_item_producer_70518e652b995a10d4dffd74ce91bff2-post-insert-script.js'),
    variables: {
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
            referenceQualCondition: 'is_deleted=false^EQ',
        }),
        badge_id: SelectBoxVariable({
            question: 'Badge ID to deactivate',
            order: 30,
            mandatory: true,
        }),
        description: SingleLineTextVariable({
            question: 'Comments',
            order: 40,
            mapToField: true,
            field: 'description',
        }),
    },
})
