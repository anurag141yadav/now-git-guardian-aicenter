import { Record } from '@servicenow/sdk/core'

Record({
    $id: Now.ID['3fc3c3582bc69610d4dffd74ce91bfac'],
    table: 'sp_instance_table',
    data: {
        active: 'true',
        advanced_placeholder_dimensions: 'false',
        async_load: 'false',
        color: 'default',
        display_field: 'sys_id',
        field_list: 'number,host,status,start_date,end_date',
        maximum_entries: '10',
        order: '1',
        order_by: 'start_date',
        order_direction: 'desc',
        preserve_placeholder_size: 'false',
        size: 'md',
        sp_column: '8693cf182bc69610d4dffd74ce91bffe',
        sp_widget: 'fb77a01833e99a10bf1221382e5c7b7a',
        table: 'x_aleen_snguardian_visitor_visit',
        title: 'My Visits',
        widget_parameters: `{
	"enable_filter": {
		"value": "true",
		"displayValue": "true"
	},
	"show_new": {
		"value": "false",
		"displayValue": "false"
	},
	"show_breadcrumbs": {
		"value": "true",
		"displayValue": "true"
	},
	"show_checkbox": {
		"value": "true",
		"displayValue": "true"
	},
	"show_actions": {
		"value": "true",
		"displayValue": "true"
	},
	"actions_list": {
		"value": "[{\\"action\\":{\\"confirmMessage\\":\\"NDA\\",\\"propertyName\\":\\"\\",\\"propertyValue\\":\\"\\",\\"type\\":\\"widget\\",\\"value\\":\\"alert-nda-widget\\"},\\"condition\\":{\\"condition\\":\\"in\\",\\"propertyName\\":\\"status.code\\",\\"type\\":\\"data\\",\\"value\\":\\"COMPLETED,CHECKED-OUT,SCHEDULED,PENDING-APPROVAL,NEW,CHECK-IN,EXTENDED-STAY\\"},\\"icon\\":\\"fa fa-file-text-o\\",\\"style\\":\\"color: #000\\",\\"title\\":\\"View/Sign/Download/Email NDA\\"},{\\"action\\":{\\"confirmMessage\\":\\"Feedback & Chat\\",\\"propertyName\\":\\"\\",\\"propertyValue\\":\\"\\",\\"type\\":\\"widget\\",\\"value\\":\\"alert-feedback-widget\\"},\\"condition\\":{\\"condition\\":\\"in\\",\\"propertyName\\":\\"status.code\\",\\"type\\":\\"data\\",\\"value\\":\\"COMPLETED,CHECKED-OUT,SCHEDULED\\"},\\"icon\\":\\"icon-collaboration\\",\\"style\\":\\"color: #000\\",\\"title\\":\\"Comments\\"}]",
		"displayValue": "[{\\"action\\":{\\"confirmMessage\\":\\"NDA\\",\\"propertyName\\":\\"\\",\\"propertyValue\\":\\"\\",\\"type\\":\\"widget\\",\\"value\\":\\"alert-nda-widget\\"},\\"condition\\":{\\"condition\\":\\"in\\",\\"propertyName\\":\\"status.code\\",\\"type\\":\\"data\\",\\"value\\":\\"COMPLETED,CHECKED-OUT,SCHEDULED,PENDING-APPROVAL,NEW,CHECK-IN,EXTENDED-STAY\\"},\\"icon\\":\\"fa fa-file-text-o\\",\\"style\\":\\"color: #000\\",\\"title\\":\\"View/Sign/Download/Email NDA\\"},{\\"action\\":{\\"confirmMessage\\":\\"Feedback & Chat\\",\\"propertyName\\":\\"\\",\\"propertyValue\\":\\"\\",\\"type\\":\\"widget\\",\\"value\\":\\"alert-feedback-widget\\"},\\"condition\\":{\\"condition\\":\\"in\\",\\"propertyName\\":\\"status.code\\",\\"type\\":\\"data\\",\\"value\\":\\"COMPLETED,CHECKED-OUT,SCHEDULED\\"},\\"icon\\":\\"icon-collaboration\\",\\"style\\":\\"color: #000\\",\\"title\\":\\"Comments\\"}]"
	},
	"new_record_url": {
		"value": "",
		"displayValue": ""
	},
	"highlight_list": {
		"value": "[{\\"fieldName\\":\\"status.name\\",\\"scope\\":\\"column\\",\\"extField\\":\\"status.code\\",\\"higlight\\":[{\\"value\\":\\"SCHEDULED\\",\\"style\\":\\"bg-primary pill\\"},{\\"value\\":\\"PENDING-APPROVAL\\",\\"style\\":\\"bg-warning pill\\"},{\\"value\\":\\"CHECK-IN\\",\\"style\\":\\"bg-teal pill\\"},{\\"value\\":\\"CHECKED-OUT\\",\\"style\\":\\"bg-lightblue pill\\"},{\\"value\\":\\"COMPLETED\\",\\"style\\":\\"bg-green pill\\"},{\\"value\\":\\"EXTENDED-STAY\\",\\"style\\":\\"bg-darkred pill\\"},{\\"value\\":\\"EXPIRED\\",\\"style\\":\\"bg-gray pill\\"},{\\"value\\":\\"CANCELLED\\",\\"style\\":\\"bg-darkgray pill\\"},{\\"value\\":\\"DENIED\\",\\"style\\":\\"bg-darkpurple pill\\"}]},{\\"fieldName\\":\\"visitor.full_name\\",\\"scope\\":\\"column\\",\\"extField\\":\\"visitor.need_assistance\\",\\"higlight\\":[{\\"value\\":\\"true\\",\\"style\\":\\"accessible\\"}]}]",
		"displayValue": "[{\\"fieldName\\":\\"status.name\\",\\"scope\\":\\"column\\",\\"extField\\":\\"status.code\\",\\"higlight\\":[{\\"value\\":\\"SCHEDULED\\",\\"style\\":\\"bg-primary pill\\"},{\\"value\\":\\"PENDING-APPROVAL\\",\\"style\\":\\"bg-warning pill\\"},{\\"value\\":\\"CHECK-IN\\",\\"style\\":\\"bg-teal pill\\"},{\\"value\\":\\"CHECKED-OUT\\",\\"style\\":\\"bg-lightblue pill\\"},{\\"value\\":\\"COMPLETED\\",\\"style\\":\\"bg-green pill\\"},{\\"value\\":\\"EXTENDED-STAY\\",\\"style\\":\\"bg-darkred pill\\"},{\\"value\\":\\"EXPIRED\\",\\"style\\":\\"bg-gray pill\\"},{\\"value\\":\\"CANCELLED\\",\\"style\\":\\"bg-darkgray pill\\"},{\\"value\\":\\"DENIED\\",\\"style\\":\\"bg-darkpurple pill\\"}]},{\\"fieldName\\":\\"visitor.full_name\\",\\"scope\\":\\"column\\",\\"extField\\":\\"visitor.need_assistance\\",\\"higlight\\":[{\\"value\\":\\"true\\",\\"style\\":\\"accessible\\"}]}]"
	},
	"use_external_filters": {
		"value": "false",
		"displayValue": "false"
	},
	"additional_buttons": {
		"value": "",
		"displayValue": ""
	},
	"fields": {
		"value": "number,group,host,status.name,start_date",
		"displayValue": "number,group,host,status.name,start_date"
	},
	"additional_columns": {
		"value": ",status.code,visitor_status.code",
		"displayValue": ",status.code,visitor_status.code"
	},
	"show_searchbox": {
		"value": "false",
		"displayValue": "false"
	},
	"header_styles": {
		"value": "",
		"displayValue": ""
	}
}`,
    },
})
