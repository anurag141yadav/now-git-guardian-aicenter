import { SPPage } from '@servicenow/sdk/core'

SPPage({
    title: 'Alert Visitor Action Home Page',
    category: 'custom',
    pageId: 'alert_visitor_action_home_page',
    shortDescription: 'Visitor Action Page',
    roles: ['x_aleen_snguardian.kiosk', 'x_aleen_snguardian.lobby_admin'],
    containers: [
        {
            $id: '700d322d330e1a10bf1221382e5c7b8a',
            order: 1,
            name: 'Alert Visitor Action Home Page - Container 1',
            rows: [
                {
                    $id: 'da0dfae9330e1a10bf1221382e5c7b71',
                    order: 1,
                    columns: [
                        {
                            $id: '1e0d766d330e1a10bf1221382e5c7bc9',
                            order: 1,
                            instances: [
                                {
                                    $id: '45398e2b47382a10f487c24fe16d4314',
                                    widget: '0fb269305b3212000d7ec7ad31f91ae2',
                                    order: 1,
                                },
                                {
                                    $id: 'e11d766d330e1a10bf1221382e5c7b31',
                                    widget: '12297a29330e1a10bf1221382e5c7b26',
                                    widgetParameters: `{
	"id_scan_widget": {
		"value": "alert-visitor-camera-capture",
		"displayValue": "alert-visitor-camera-capture"
	},
	"qr_scan_widget": {
		"value": "alert-qr-code-reader",
		"displayValue": "alert-qr-code-reader"
	},
	"walkin_record_producer": {
		"value": "id=sc_cat_item&sys_id=3f46e3ec2bb51a10d4dffd74ce91bf43&source=kiosk",
		"displayValue": "id=sc_cat_item&sys_id=3f46e3ec2bb51a10d4dffd74ce91bf43&source=kiosk"
	},
	"visit_actions": {
		"value": "[{\\"action\\":{\\"confirmMessage\\":\\"Print\\",\\"propertyName\\":\\"type\\",\\"propertyValue\\":\\"printOne\\",\\"type\\":\\"widget\\",\\"value\\":\\"alert-print-widget\\"},\\"condition\\":{\\"condition\\":\\"in\\",\\"propertyName\\":\\"status.code\\",\\"role\\":\\"x_aleen_snguardian.admin,admin,x_aleen_snguardian.lobby_admin,x_aleen_snguardian.kiosk\\",\\"type\\":\\"data&role\\",\\"value\\":\\"CHECK-IN,SCHEDULED\\"},\\"icon\\":\\"icon-print\\",\\"style\\":\\"btn-warning btn-md m-l-xs text-right pull-right d-flex align-items-center\\",\\"title\\":\\"Print\\"},{\\"action\\":{\\"type\\":\\"catalog\\",\\"value\\":\\"id=sc_cat_item&sys_id=20b21f0f2b255210d4dffd74ce91bf94&visitId=##sys_id##&locationId=##location.sys_id##&source=kiosk\\"},\\"condition\\":{\\"condition\\":\\"in\\",\\"propertyName\\":\\"status.code\\",\\"role\\":\\"x_aleen_snguardian.admin,admin,x_aleen_snguardian.lobby_admin,x_aleen_snguardian.kiosk\\",\\"type\\":\\"data&role\\",\\"value\\":\\"SCHEDULED,CHECKED-OUT\\"},\\"icon\\":\\"fa fa-check-square-o\\",\\"style\\":\\"btn-success btn-md m-l-xs text-right pull-right d-flex align-items-center\\",\\"title\\":\\"Check-in\\"},{\\"action\\":{\\"confirmMessage\\":\\"Checkout Confirmation\\",\\"propertyName\\":\\"type\\",\\"propertyValue\\":\\"checkoutbyKiosk\\",\\"type\\":\\"widget\\",\\"value\\":\\"alert-notification-widget\\"},\\"condition\\":{\\"condition\\":\\"in\\",\\"propertyName\\":\\"status.code\\",\\"role\\":\\"x_aleen_snguardian.kiosk\\",\\"type\\":\\"data&role\\",\\"value\\":\\"CHECK-IN,EXTENDED-STAY\\"},\\"icon\\":\\"fa fa-sign-out\\",\\"style\\":\\"btn-danger btn-md m-l-xs text-right pull-right d-flex align-items-center\\",\\"title\\":\\"Checkout\\"},{\\"action\\":{\\"confirmMessage\\":\\"Checkout Confirmation\\",\\"propertyName\\":\\"type\\",\\"propertyValue\\":\\"checkoutbyLobbyAdmin\\",\\"type\\":\\"widget\\",\\"value\\":\\"alert-notification-widget\\"},\\"condition\\":{\\"condition\\":\\"in\\",\\"propertyName\\":\\"status.code\\",\\"role\\":\\"x_aleen_snguardian.admin,admin,x_aleen_snguardian.lobby_admin\\",\\"type\\":\\"data&role\\",\\"value\\":\\"CHECK-IN,EXTENDED-STAY\\"},\\"icon\\":\\"fa fa-sign-out\\",\\"style\\":\\"btn-danger btn-md m-l-xs text-right pull-right d-flex align-items-center\\",\\"title\\":\\"Checkout\\"}]",
		"displayValue": "[{\\"action\\":{\\"confirmMessage\\":\\"Print\\",\\"propertyName\\":\\"type\\",\\"propertyValue\\":\\"printOne\\",\\"type\\":\\"widget\\",\\"value\\":\\"alert-print-widget\\"},\\"condition\\":{\\"condition\\":\\"in\\",\\"propertyName\\":\\"status.code\\",\\"role\\":\\"x_aleen_snguardian.admin,admin,x_aleen_snguardian.lobby_admin,x_aleen_snguardian.kiosk\\",\\"type\\":\\"data&role\\",\\"value\\":\\"CHECK-IN,SCHEDULED\\"},\\"icon\\":\\"icon-print\\",\\"style\\":\\"btn-warning btn-md m-l-xs text-right pull-right d-flex align-items-center\\",\\"title\\":\\"Print\\"},{\\"action\\":{\\"type\\":\\"catalog\\",\\"value\\":\\"id=sc_cat_item&sys_id=20b21f0f2b255210d4dffd74ce91bf94&visitId=##sys_id##&locationId=##location.sys_id##&source=kiosk\\"},\\"condition\\":{\\"condition\\":\\"in\\",\\"propertyName\\":\\"status.code\\",\\"role\\":\\"x_aleen_snguardian.admin,admin,x_aleen_snguardian.lobby_admin,x_aleen_snguardian.kiosk\\",\\"type\\":\\"data&role\\",\\"value\\":\\"SCHEDULED,CHECKED-OUT\\"},\\"icon\\":\\"fa fa-check-square-o\\",\\"style\\":\\"btn-success btn-md m-l-xs text-right pull-right d-flex align-items-center\\",\\"title\\":\\"Check-in\\"},{\\"action\\":{\\"confirmMessage\\":\\"Checkout Confirmation\\",\\"propertyName\\":\\"type\\",\\"propertyValue\\":\\"checkoutbyKiosk\\",\\"type\\":\\"widget\\",\\"value\\":\\"alert-notification-widget\\"},\\"condition\\":{\\"condition\\":\\"in\\",\\"propertyName\\":\\"status.code\\",\\"role\\":\\"x_aleen_snguardian.kiosk\\",\\"type\\":\\"data&role\\",\\"value\\":\\"CHECK-IN,EXTENDED-STAY\\"},\\"icon\\":\\"fa fa-sign-out\\",\\"style\\":\\"btn-danger btn-md m-l-xs text-right pull-right d-flex align-items-center\\",\\"title\\":\\"Checkout\\"},{\\"action\\":{\\"confirmMessage\\":\\"Checkout Confirmation\\",\\"propertyName\\":\\"type\\",\\"propertyValue\\":\\"checkoutbyLobbyAdmin\\",\\"type\\":\\"widget\\",\\"value\\":\\"alert-notification-widget\\"},\\"condition\\":{\\"condition\\":\\"in\\",\\"propertyName\\":\\"status.code\\",\\"role\\":\\"x_aleen_snguardian.admin,admin,x_aleen_snguardian.lobby_admin\\",\\"type\\":\\"data&role\\",\\"value\\":\\"CHECK-IN,EXTENDED-STAY\\"},\\"icon\\":\\"fa fa-sign-out\\",\\"style\\":\\"btn-danger btn-md m-l-xs text-right pull-right d-flex align-items-center\\",\\"title\\":\\"Checkout\\"}]"
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
