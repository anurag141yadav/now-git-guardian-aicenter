import {
    CatalogItemRecordProducer,
    ReferenceVariable,
    SelectBoxVariable,
    ListCollectorVariable,
    AttachmentVariable,
    DateTimeVariable,
} from '@servicenow/sdk/core'

export const bulkMobileCredentialRequest = CatalogItemRecordProducer({
    $id: Now.ID['b487d71a33df5e10bf1221382e5c7bca'],
    name: 'Bulk Mobile Credential Request',
    catalogs: ['e0d08b13c3330100c8b837659bba8fb4'],
    categories: ['0b5516481b284e106962fe60cd4bcbcd'],
    description: `<p style="text-align: left;"><strong>Service Overview:</strong></p>
<p>To request a mobile credential (digital badge) through the application, for getting access of designated areas using their mobile device.</p>`,
    icon: Now.attach('./sc_cat_item_producer_b487d71a33df5e10bf1221382e5c7bca_icon.png'),
    notAvailableFor: ['8063fd8247312250f487c24fe16d43fd'],
    owner: '6816f79cc0a8016401c5a33be04be441',
    picture: Now.attach('./sc_cat_item_producer_b487d71a33df5e10bf1221382e5c7bca_picture.png'),
    roles: ['snc_internal'],
    shortDescription: 'This request can be used to request for bulk Mobile Credential  (NFC) multiple users.',
    variableSets: [
        {
            variableSet: '74d5e31a33139e10bf1221382e5c7bd9',
            order: 100,
        },
        {
            variableSet: '91285f9a33df5e10bf1221382e5c7bce',
            order: 350,
        },
    ],
    version: 105,
    table: 'x_aleen_snguardian_request',
    script: Now.include('./sc_cat_item_producer_b487d71a33df5e10bf1221382e5c7bca-script.js'),
    postInsertScript: Now.include('./sc_cat_item_producer_b487d71a33df5e10bf1221382e5c7bca-post-insert-script.js'),
    variables: {
        request_type: ReferenceVariable({
            question: 'Request',
            order: 1,
            readOnly: true,
            referenceTable: 'sc_cat_item_producer',
        }),
        identity_location: ReferenceVariable({
            question: 'Location',
            order: 20,
            referenceTable: 'x_aleen_snguardian_location',
            referenceQualCondition: 'is_deleted=false^EQ',
        }),
        identity_department: SelectBoxVariable({
            question: 'Department',
            order: 50,
            choices: {
                IT: {
                    label: 'IT',
                    inactive: false,
                    sequence: 100,
                },
                Finance: {
                    label: 'Finance',
                    inactive: false,
                    sequence: 100,
                },
                'Customer Support': {
                    label: 'Customer Support',
                    inactive: false,
                    sequence: 100,
                },
                Sales: {
                    label: 'Sales',
                    inactive: false,
                    sequence: 100,
                },
                'Product Management': {
                    label: 'Product Management',
                    inactive: false,
                    sequence: 100,
                },
                Development: {
                    label: 'Development',
                    inactive: false,
                    sequence: 100,
                },
            },
            includeNone: true,
        }),
        request_for: ListCollectorVariable({
            question: 'Request For',
            order: 200,
            width: 50,
            attributes:
                'is_searchable_choice=true,ref_auto_completer=AJAXTableCompleter,ref_ac_columns=email;phone;department,ref_ac_columns_search=true',
            listTable: 'x_aleen_snguardian_identity',
            referenceQual: `javascript:\r
    (function() {\r
        var departmentValue = current.variables.identity_department;\r
        var location_filtered_identities = current.variables.bulk_mobile_cred_request_metadata.location_filtered_identities;\r
        var query = "";\r
        // Check for "none" or empty value\r
        if ((!departmentValue || departmentValue === "none") && (!location_filtered_identities || location_filtered_identities === "")) {\r
            return ""; // No filter applied, shows all users\r
        } else if (!departmentValue || departmentValue === "none") {\r
            query = "sys_idIN" + location_filtered_identities;\r
            return query;\r
        } else if (!location_filtered_identities || location_filtered_identities === "") {\r
            query = "department=" + departmentValue;\r
            return query;\r
        }\r
        query = "sys_idIN" + location_filtered_identities + "^ORdepartment=" + departmentValue;\r
        return query;\r
    })();`,
        }),
        upload_identities: AttachmentVariable({
            question: 'Upload Identities',
            order: 300,
            showHelp: true,
            instructions: `<p><strong>CSV File Format:</strong></p>
<p><em>Note: The file should not include a heading line.</em></p>
<table style="width: 100%;" border="1" cellspacing="0" cellpadding="5"><tbody><tr><th style="width: 15%;">First Name</th><th style="width: 15%;">Last Name</th><th style="width: 30%;">Email</th><th style="width: 15%;">Phone</th><th style="width: 35%;">Department</th></tr><tr><td style="width: 15%;">John</td><td style="width: 15%;">Doe</td><td style="width: 30%;">john.doe&#64;mail.com</td><td style="width: 15%;">1234567890</td><td style="width: 35%;">Finance</td></tr></tbody></table>
<p>Ensure your file follows this structure before uploading.</p>`,
        }),
        valid_from: DateTimeVariable({
            question: 'Valid From',
            order: 400,
            width: 50,
        }),
        valid_to: DateTimeVariable({
            question: 'Valid To',
            order: 500,
            width: 50,
        }),
    },
})
