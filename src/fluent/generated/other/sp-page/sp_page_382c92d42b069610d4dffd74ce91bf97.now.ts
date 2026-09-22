import { SPPage } from '@servicenow/sdk/core'

SPPage({
    title: 'Alert Visitor Kiosk Home Page',
    category: 'custom',
    pageId: 'alert_visitor_kiosk_home_page',
    shortDescription: 'Alert Visitor Portal Menu',
    roles: ['x_aleen_snguardian.kiosk'],
    containers: [
        {
            $id: '302c92d42b069610d4dffd74ce91bf9b',
            order: 1,
            name: 'Alert Visitor Kiosk Home Page - Container 1',
            rows: [
                {
                    $id: '3c2c92d42b069610d4dffd74ce91bf9d',
                    order: 1,
                    columns: [
                        {
                            $id: 'b42c92d42b069610d4dffd74ce91bfa0',
                            order: 1,
                            instances: [
                                {
                                    $id: '9b094e2b47382a10f487c24fe16d4332',
                                    widget: '0fb269305b3212000d7ec7ad31f91ae2',
                                    order: 1,
                                },
                                {
                                    $id: '4acfded82b069610d4dffd74ce91bff9',
                                    widget: 'fc0f12d82b069610d4dffd74ce91bf55',
                                    widgetParameters: `{
	"widget_title": {
		"value": "",
		"displayValue": ""
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
		"value": "YES",
		"displayValue": "Yes"
	},
	"location_table": {
		"value": "",
		"displayValue": ""
	},
	"location_query_limit": {
		"value": null,
		"displayValue": ""
	}
}`,
                                    order: 2,
                                },
                            ],
                        },
                    ],
                },
            ],
        },
    ],
})
