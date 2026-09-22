import { SPPage } from '@servicenow/sdk/core'

SPPage({
    title: 'Alert Visitor Portal Menu Page',
    category: 'custom',
    pageId: 'alert_visitor_portal_home_page',
    shortDescription: 'Alert Visitor Portal Menu',
    roles: ['x_aleen_snguardian.portal'],
    containers: [
        {
            $id: '6493cf182bc69610d4dffd74ce91bf64',
            order: 1,
            name: 'Alert Visitor Portal Menu Page - Container 1',
            width: 'container-fluid',
            rows: [
                {
                    $id: 'ca93cf182bc69610d4dffd74ce91bfec',
                    order: 1,
                    columns: [
                        {
                            $id: '8693cf182bc69610d4dffd74ce91bfef',
                            size: 3,
                            order: 1,
                            instances: [
                                {
                                    $id: '35f586df2b119250d4dffd74ce91bfb5',
                                    widget: '913ec09a33999e10bf1221382e5c7bce',
                                    widgetParameters: `{
	"widget_title": {
		"value": "welcome",
		"displayValue": "welcome"
	},
	"theme": {
		"value": "default",
		"displayValue": "Default"
	},
	"decision_table": {
		"value": "",
		"displayValue": ""
	},
	"show_locations_widget": {
		"value": "NO",
		"displayValue": "No"
	},
	"location_table": {
		"value": "",
		"displayValue": ""
	},
	"location_query_limit": {
		"value": null,
		"displayValue": ""
	},
	"show_right_to_be_forgotten": {
		"value": "YES",
		"displayValue": "Yes"
	},
	"show_logout": {
		"value": "YES",
		"displayValue": "Yes"
	}
}`,
                                    order: 1,
                                },
                            ],
                        },
                        {
                            $id: 'f778d34b2bc2d250d4dffd74ce91bf63',
                            size: 9,
                            sizeSm: 9,
                            sizeLg: 9,
                            sizeXs: 9,
                            order: 1,
                            instances: [
                                {
                                    $id: '8288134b2bc2d250d4dffd74ce91bf52',
                                    widget: '0fb269305b3212000d7ec7ad31f91ae2',
                                    order: 1,
                                },
                            ],
                        },
                        {
                            $id: '8693cf182bc69610d4dffd74ce91bffe',
                            size: 9,
                            order: 2,
                        },
                    ],
                },
            ],
        },
    ],
})
