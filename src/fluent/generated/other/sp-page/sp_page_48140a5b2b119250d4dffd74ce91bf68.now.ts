import { SPPage } from '@servicenow/sdk/core'

SPPage({
    title: 'Alert Lobby Admin Home Page',
    category: 'custom',
    pageId: 'alert_lobby_admin_home_page',
    shortDescription: 'Alert Visit List Page',
    roles: ['x_aleen_snguardian.lobby_admin'],
    containers: [
        {
            $id: '77c1551433ad9a10bf1221382e5c7b1b',
            order: 1,
            name: 'Alert Lobby Admin Home Page - Container 1',
            width: 'container-fluid',
            backgroundColor: '#1b1d43',
            subheader: true,
            rows: [
                {
                    $id: 'bd02591433ad9a10bf1221382e5c7b22',
                    cssClass: 'multi-small',
                    order: 1,
                    columns: [
                        {
                            $id: 'b102591433ad9a10bf1221382e5c7b25',
                            size: 2,
                            order: 1,
                            instances: [
                                {
                                    $id: '2885e26c33a11e10bf1221382e5c7bf7',
                                    widget: '5716e48333995210bf1221382e5c7b8e',
                                    widgetParameters: `{
	"table_name": {
		"value": "x_aleen_snguardian_location",
		"displayValue": "x_aleen_snguardian_location"
	},
	"query_limit": {
		"value": "",
		"displayValue": ""
	},
	"filter_query": {
		"value": "parentISNOTEMPTY^is_deleted=false^type=LOBBY",
		"displayValue": "parentISNOTEMPTY^is_deleted=false^type=LOBBY"
	}
}`,
                                    order: 1,
                                },
                            ],
                        },
                        {
                            $id: 'b502591433ad9a10bf1221382e5c7b27',
                            size: 2,
                            order: 2,
                            instances: [
                                {
                                    $id: '719b1d5c33ad9a10bf1221382e5c7bcc',
                                    widget: '579a99d833ad9a10bf1221382e5c7b3a',
                                    order: 1,
                                },
                            ],
                        },
                        {
                            $id: '91c6cb9c3371d610bf1221382e5c7b3b',
                            size: 6,
                            order: 3,
                            instances: [
                                {
                                    $id: 'd5ab846033b5d610bf1221382e5c7bf5',
                                    widget: '128508e83375d610bf1221382e5c7bdd',
                                    order: 1,
                                },
                            ],
                        },
                        {
                            $id: 'b102591433ad9a10bf1221382e5c7b30',
                            size: 2,
                            order: 4,
                            instances: [
                                {
                                    $id: '265d151033ed9a10bf1221382e5c7b8d',
                                    widget: 'a6cc11dc33ad9a10bf1221382e5c7b13',
                                    widgetParameters: `{
	"zone": {
		"value": "",
		"displayValue": ""
	},
	"c_color": {
		"value": "",
		"displayValue": ""
	},
	"show_digital_clock": {
		"value": "true",
		"displayValue": "true"
	},
	"time_format": {
		"value": "HH:mm:ss",
		"displayValue": "HH:mm:ss"
	},
	"default_timezone": {
		"value": "",
		"displayValue": ""
	},
	"default_location_name": {
		"value": "",
		"displayValue": ""
	},
	"date_format": {
		"value": "",
		"displayValue": ""
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
            $id: 'df961d1833ad9a10bf1221382e5c7bf4',
            order: 2,
            name: 'Alert Lobby Admin Home Page - Container 2',
            width: 'container-fluid',
            rows: [
                {
                    $id: '01a6155833ad9a10bf1221382e5c7b9e',
                    order: 1,
                    columns: [
                        {
                            $id: '85a6155833ad9a10bf1221382e5c7ba0',
                            order: 1,
                        },
                    ],
                },
            ],
        },
    ],
})
