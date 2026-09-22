import {
    CatalogItemRecordProducer,
    ReferenceVariable,
    MultipleChoiceVariable,
    SingleLineTextVariable,
} from '@servicenow/sdk/core'

export const temporaryBadgeRequest = CatalogItemRecordProducer({
    $id: Now.ID['8e51568647c56250f487c24fe16d431d'],
    name: 'Temporary Badge Request',
    catalogs: ['e0d08b13c3330100c8b837659bba8fb4'],
    categories: ['0b5516481b284e106962fe60cd4bcbcd'],
    notAvailableFor: ['fc5373ca477d2e5051a3e84d416d4343'],
    owner: '5b729ae147f0621051a3e84d416d4367',
    roles: ['snc_internal'],
    shortDescription: 'Request for temporary badge issuance or return.',
    variableSets: [
        {
            variableSet: '38a5daca47c56250f487c24fe16d43bd',
            order: 40,
        },
        {
            variableSet: 'bae6ac514725a250f487c24fe16d4334',
            order: 100,
        },
    ],
    version: 138,
    table: 'x_aleen_snguardian_request',
    script: Now.include('./sc_cat_item_producer_8e51568647c56250f487c24fe16d431d-script.js'),
    variables: {
        request_type: ReferenceVariable({
            question: 'Request',
            mapToField: true,
            field: 'request_type',
            referenceTable: 'sc_cat_item_producer',
        }),
        select_action: MultipleChoiceVariable({
            question: 'Select Action',
            order: 10,
            defaultValue: 'issue_badge',
            choices: {
                issue_badge: {
                    label: 'Issue Badge',
                    inactive: false,
                    sequence: 100,
                    pricingDetails: [
                        {
                            amount: 0,
                            currencyType: 'USD',
                            field: 'misc',
                        },
                        {
                            amount: 0,
                            currencyType: 'USD',
                            field: 'rec_misc',
                        },
                    ],
                },
                return_badge: {
                    label: 'Return Badge',
                    inactive: false,
                    sequence: 200,
                    pricingDetails: [
                        {
                            amount: 0,
                            currencyType: 'USD',
                            field: 'misc',
                        },
                        {
                            amount: 0,
                            currencyType: 'USD',
                            field: 'rec_misc',
                        },
                    ],
                },
            },
            choiceDirection: 'across',
        }),
        location: ReferenceVariable({
            question: 'Location',
            order: 15,
            referenceTable: 'x_aleen_snguardian_location',
            referenceQualCondition: 'type=LOBBY^EQ',
        }),
        request_for: ReferenceVariable({
            question: 'Request For',
            order: 20,
            attributes:
                'ref_auto_completer=AJAXTableCompleter,ref_ac_columns_search=true,ref_ac_columns=full_name;email;type.name',
            mapToField: true,
            field: 'request_for',
            referenceTable: 'x_aleen_snguardian_identity',
            useReferenceQualifier: 'advanced',
            referenceQual: `javascript:\r
	(function(){\r
               var type = "EMPLOYEE"; \r
		var filtered_visitors = current.variables.temp_badge_metadata.filtered_visitor_list;\r
                var query = "";\r
		 if ((!filtered_visitors|| filtered_visitors.trim() === "")) {\r
            query = "type.code="+type;\r
        }else{\r
		  query = "sys_idIN" + filtered_visitors+"^ORtype.code="+type; \r
		}\r
		return query;\r
	})();`,
        }),
        comments: SingleLineTextVariable({
            question: 'Comments',
            order: 50,
        }),
    },
})
