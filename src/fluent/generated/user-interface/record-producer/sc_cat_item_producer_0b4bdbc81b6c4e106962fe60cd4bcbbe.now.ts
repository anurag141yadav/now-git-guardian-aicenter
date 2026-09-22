import {
    CatalogItemRecordProducer,
    ReferenceVariable,
    SelectBoxVariable,
    SingleLineTextVariable,
} from '@servicenow/sdk/core'

export const activateBadgeRequest = CatalogItemRecordProducer({
    $id: Now.ID['0b4bdbc81b6c4e106962fe60cd4bcbbe'],
    name: 'Activate Badge Request',
    catalogs: ['e0d08b13c3330100c8b837659bba8fb4'],
    categories: ['0b5516481b284e106962fe60cd4bcbcd'],
    description: `<p><strong>Service Overview :</strong></p>
<ul style="list-style-position: inside;"><li>If you have received a new Badge/ID Card in the Mail then use this option to activate it</li><li>You will need a numeric code from the back of your badge, to submit the request form</li><li>If the application finds the numeric code assigned to your profile, the Badge will be activated instantly</li><li>You will receive a confirmation email once it is activated</li></ul>`,
    icon: Now.attach('./sc_cat_item_producer_0b4bdbc81b6c4e106962fe60cd4bcbbe_icon.jpg'),
    notAvailableFor: ['171149361bf68210207b2179b04bcbbd'],
    owner: '6816f79cc0a8016401c5a33be04be441',
    picture: Now.attach('./sc_cat_item_producer_0b4bdbc81b6c4e106962fe60cd4bcbbe_picture.jpg'),
    roles: ['snc_internal'],
    shortDescription: 'This request can be used to activate a newly received Badge or ID Card',
    variableSets: [
        {
            variableSet: '027e9a041b684e106962fe60cd4bcb96',
            order: 20,
        },
    ],
    version: 45,
    table: 'x_aleen_snguardian_request',
    script: Now.include('./sc_cat_item_producer_0b4bdbc81b6c4e106962fe60cd4bcbbe-script.js'),
    postInsertScript: Now.include('./sc_cat_item_producer_0b4bdbc81b6c4e106962fe60cd4bcbbe-post-insert-script.js'),
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
            mandatory: true,
            referenceTable: 'x_aleen_snguardian_identity',
            referenceQualCondition: 'is_deleted=false^EQ',
        }),
        badge_id: SelectBoxVariable({
            question: 'Badge ID to Activate',
            order: 30,
            mandatory: true,
        }),
        description: SingleLineTextVariable({
            question: 'Comments',
            order: 50,
            mapToField: true,
            field: 'description',
        }),
    },
})
