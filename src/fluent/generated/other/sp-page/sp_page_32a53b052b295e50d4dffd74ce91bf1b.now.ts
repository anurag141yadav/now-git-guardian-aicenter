import { SPPage } from '@servicenow/sdk/core'

SPPage({
    title: 'Alert Visitor Reports Page',
    category: 'custom',
    pageId: 'alert_visitors_reports_page',
    shortDescription: 'Alert Visitor Reports',
    roles: ['x_aleen_snguardian.lobby_admin'],
    containers: [
        {
            $id: '76ff37c12b695e50d4dffd74ce91bf11',
            order: 5,
            name: 'Alert Visitor Reports Page - Container 5',
            rows: [
                {
                    $id: '764080152b695e50d4dffd74ce91bff3',
                    order: 1,
                    columns: [
                        {
                            $id: 'f240c0152b695e50d4dffd74ce91bf59',
                            order: 1,
                            instances: [
                                {
                                    $id: 'd550ccd12b695e50d4dffd74ce91bf33',
                                    widget: 'e41aa2d29f0222008252baac757fcfce',
                                    widgetParameters: `{
	"report_id": {
		"value": "313ff3812b695e50d4dffd74ce91bf30",
		"displayValue": "Visit Schedule"
	},
	"show_title": {
		"value": "true",
		"displayValue": "true"
	}
}`,
                                    order: 1,
                                },
                            ],
                        },
                    ],
                },
            ],
        },
        {
            $id: '01ff7bc12b695e50d4dffd74ce91bfdf',
            order: 20,
            name: 'Alert Visitor Reports Page - Container 20',
            rows: [
                {
                    $id: '6100c8d12b695e50d4dffd74ce91bf7c',
                    order: 1,
                    columns: [
                        {
                            $id: 'e500c8d12b695e50d4dffd74ce91bf7e',
                            size: 6,
                            order: 1,
                            instances: [
                                {
                                    $id: '3200c8d12b695e50d4dffd74ce91bff8',
                                    widget: 'e41aa2d29f0222008252baac757fcfce',
                                    widgetParameters: `{
	"report_id": {
		"value": "ba0e37012b695e50d4dffd74ce91bfdb",
		"displayValue": "Visit By Location"
	},
	"show_title": {
		"value": "true",
		"displayValue": "true"
	}
}`,
                                    order: 1,
                                },
                            ],
                        },
                        {
                            $id: 'e900c8d12b695e50d4dffd74ce91bf80',
                            size: 6,
                            order: 2,
                            instances: [
                                {
                                    $id: '12208cd12b695e50d4dffd74ce91bffa',
                                    widget: 'e41aa2d29f0222008252baac757fcfce',
                                    widgetParameters: `{
	"report_id": {
		"value": "aabd77012b695e50d4dffd74ce91bff1",
		"displayValue": "Visits By Status"
	},
	"show_title": {
		"value": "true",
		"displayValue": "true"
	}
}`,
                                    order: 1,
                                },
                            ],
                        },
                    ],
                },
            ],
        },
        {
            $id: '7f9fbb812b695e50d4dffd74ce91bf1c',
            order: 30,
            name: 'Alert Visitor Reports Page - Container 30',
            rows: [
                {
                    $id: 'e3afff812b695e50d4dffd74ce91bf24',
                    order: 1,
                    columns: [
                        {
                            $id: 'afafff812b695e50d4dffd74ce91bf26',
                            size: 6,
                            order: 1,
                            instances: [
                                {
                                    $id: '62bff3c12b695e50d4dffd74ce91bf06',
                                    widget: 'e41aa2d29f0222008252baac757fcfce',
                                    widgetParameters: `{
	"report_id": {
		"value": "ca6dfbcd2b295e50d4dffd74ce91bffd",
		"displayValue": "Visitors By Status"
	},
	"show_title": {
		"value": "true",
		"displayValue": "true"
	}
}`,
                                    order: 1,
                                },
                            ],
                        },
                        {
                            $id: '2bafff812b695e50d4dffd74ce91bf29',
                            size: 6,
                            order: 2,
                            instances: [
                                {
                                    $id: '50df37c12b695e50d4dffd74ce91bfbb',
                                    widget: 'e41aa2d29f0222008252baac757fcfce',
                                    widgetParameters: `{
	"report_id": {
		"value": "44bcbf8d2b295e50d4dffd74ce91bfd2",
		"displayValue": "Visitors By Type"
	},
	"show_title": {
		"value": "true",
		"displayValue": "true"
	}
}`,
                                    order: 1,
                                },
                            ],
                        },
                    ],
                },
            ],
        },
    ],
})
