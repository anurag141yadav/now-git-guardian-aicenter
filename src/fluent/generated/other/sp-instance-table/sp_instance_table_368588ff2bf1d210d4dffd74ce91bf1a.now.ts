import { Record } from '@servicenow/sdk/core'

Record({
    $id: Now.ID['368588ff2bf1d210d4dffd74ce91bf1a'],
    table: 'sp_instance_table',
    data: {
        active: 'true',
        advanced_placeholder_dimensions: 'false',
        async_load: 'false',
        color: 'default',
        display_field: 'number',
        field_list: 'number,visitor.full_name,visitor.status.name,visitor.type.name,status.name,host,actual_start_date',
        filter: 'is_deleted=false^EQ',
        glyph: 'empty',
        maximum_entries: '20',
        order: '1',
        order_by: 'number',
        order_direction: 'desc',
        preserve_placeholder_size: 'false',
        short_description: 'Visit List',
        size: 'md',
        sp_column: '3e8588ff2bf1d210d4dffd74ce91bf17',
        sp_widget: 'fb77a01833e99a10bf1221382e5c7b7a',
        table: 'x_aleen_snguardian_visitor_visit',
        title: 'Visit Dashboard',
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
		"value": "false",
		"displayValue": "false"
	},
	"show_checkbox": {
		"value": "false",
		"displayValue": "false"
	},
	"show_actions": {
		"value": "true",
		"displayValue": "true"
	},
	"actions_list": {
		"value": "[{\\"action\\":{\\"confirmMessage\\":\\"Edit Visit\\",\\"propertyName\\":\\"view,table\\",\\"propertyValue\\":\\"portaledit,$targetTable\\",\\"type\\":\\"widget\\",\\"value\\":\\"widget-form\\"},\\"condition\\":{\\"condition\\":\\"in\\",\\"propertyName\\":\\"status.code\\",\\"type\\":\\"data\\",\\"value\\":\\"CHECK-IN,SCHEDULED,EXTENDED-STAY\\"},\\"icon\\":\\"fa fa-pencil-square-o\\",\\"style\\":\\"color:#4CAF50;\\",\\"title\\":\\"Edit Visit\\"},{\\"action\\":{\\"confirmMessage\\":\\"Edit Visitor\\",\\"propertyName\\":\\"view,table,sys_id\\",\\"propertyValue\\":\\"portaledit,x_aleen_snguardian_visitor,$visitor.value\\",\\"type\\":\\"widget\\",\\"value\\":\\"widget-form\\"},\\"condition\\":{\\"type\\":\\"multiple\\",\\"conditions\\":[{\\"condition\\":\\"in\\",\\"propertyName\\":\\"status.code\\",\\"value\\":\\"CHECK-IN,SCHEDULED,EXTENDED-STAY,PENDING-APPROVAL\\"},{\\"condition\\":\\"=\\",\\"propertyName\\":\\"type.code\\",\\"value\\":\\"SINGLE\\"}]},\\"icon\\":\\"icon-user-profile\\",\\"style\\":\\"color:#2e21a3;\\",\\"title\\":\\"Edit Visitor\\"},{\\"action\\":{\\"confirmMessage\\":\\"Edit Group\\",\\"propertyName\\":\\"view,table\\",\\"propertyValue\\":\\"editVisitGroup,$targetTable\\",\\"type\\":\\"widget\\",\\"value\\":\\"widget-form\\"},\\"condition\\":{\\"type\\":\\"multiple\\",\\"conditions\\":[{\\"condition\\":\\"in\\",\\"propertyName\\":\\"status.code\\",\\"value\\":\\"CHECK-IN,SCHEDULED,EXTENDED-STAY,PENDING-APPROVAL\\"},{\\"condition\\":\\"=\\",\\"propertyName\\":\\"type.code\\",\\"value\\":\\"GROUP\\"}]},\\"icon\\":\\"icon-user-group\\",\\"style\\":\\"color:#2e21a3;\\",\\"title\\":\\"Edit Visitor\\"},{\\"action\\":{\\"confirmMessage\\":\\"Checkout Confirmation\\",\\"propertyName\\":\\"type\\",\\"propertyValue\\":\\"checkoutbyHost\\",\\"type\\":\\"widget\\",\\"value\\":\\"alert-notification-widget\\"},\\"condition\\":{\\"condition\\":\\"in\\",\\"propertyName\\":\\"status.code\\",\\"value\\":\\"CHECK-IN,EXTENDED-STAY\\"},\\"icon\\":\\"fa fa-sign-out\\",\\"style\\":\\"color:#009688;\\",\\"title\\":\\"Checkout\\"},{\\"action\\":{\\"confirmMessage\\":\\"Email\\",\\"propertyName\\":\\"type\\",\\"propertyValue\\":\\"email\\",\\"type\\":\\"widget\\",\\"value\\":\\"alert-notification-widget\\"},\\"condition\\":{\\"condition\\":\\"in\\",\\"propertyName\\":\\"status.code\\",\\"type\\":\\"data\\",\\"value\\":\\"SCHEDULED\\"},\\"icon\\":\\"fa fa-envelope-o\\",\\"style\\":\\"color:#FF5722;\\",\\"title\\":\\"Email\\"},{\\"action\\":{\\"confirmMessage\\":\\"Reschedule Visit\\",\\"propertyName\\":\\"view,table\\",\\"propertyValue\\":\\"reschedule,$targetTable\\",\\"type\\":\\"widget\\",\\"value\\":\\"alert-form-widget\\"},\\"condition\\":{\\"condition\\":\\"in\\",\\"propertyName\\":\\"status.code\\",\\"type\\":\\"data\\",\\"value\\":\\"SCHEDULED\\"},\\"icon\\":\\"fa fa-repeat\\",\\"style\\":\\"color:#673AB7;\\",\\"title\\":\\"Reschedule Visit\\"},{\\"action\\":{\\"confirmMessage\\":\\"Do you want to cancel the visit?\\",\\"datatype\\":\\"\\",\\"propertyName\\":\\"status\\",\\"propertyValue\\":\\"CANCELLED\\",\\"refColTableName\\":\\"x_aleen_snguardian_visitor_mt_visit_status\\",\\"type\\":\\"update\\",\\"value\\":\\"Confirm Cancel\\"},\\"condition\\":{\\"condition\\":\\"in\\",\\"propertyName\\":\\"status.code\\",\\"type\\":\\"data\\",\\"value\\":\\"SCHEDULED\\"},\\"icon\\":\\"icon-cross-circle\\",\\"style\\":\\"color:#9E9E9E;\\",\\"title\\":\\"Cancel\\"},{\\"action\\":{\\"confirmMessage\\":\\"Feedback & Chat\\",\\"propertyName\\":\\"\\",\\"propertyValue\\":\\"\\",\\"type\\":\\"widget\\",\\"value\\":\\"alert-feedback-widget\\"},\\"condition\\":{\\"condition\\":\\"in\\",\\"propertyName\\":\\"status.code\\",\\"type\\":\\"data\\",\\"value\\":\\"COMPLETED,CHECKED-OUT\\"},\\"icon\\":\\"icon-collaboration\\",\\"style\\":\\"color:#FFC107;\\",\\"title\\":\\"Comments\\"}]",
		"displayValue": "[{\\"action\\":{\\"confirmMessage\\":\\"Edit Visit\\",\\"propertyName\\":\\"view,table\\",\\"propertyValue\\":\\"portaledit,$targetTable\\",\\"type\\":\\"widget\\",\\"value\\":\\"widget-form\\"},\\"condition\\":{\\"condition\\":\\"in\\",\\"propertyName\\":\\"status.code\\",\\"type\\":\\"data\\",\\"value\\":\\"CHECK-IN,SCHEDULED,EXTENDED-STAY\\"},\\"icon\\":\\"fa fa-pencil-square-o\\",\\"style\\":\\"color:#4CAF50;\\",\\"title\\":\\"Edit Visit\\"},{\\"action\\":{\\"confirmMessage\\":\\"Edit Visitor\\",\\"propertyName\\":\\"view,table,sys_id\\",\\"propertyValue\\":\\"portaledit,x_aleen_snguardian_visitor,$visitor.value\\",\\"type\\":\\"widget\\",\\"value\\":\\"widget-form\\"},\\"condition\\":{\\"type\\":\\"multiple\\",\\"conditions\\":[{\\"condition\\":\\"in\\",\\"propertyName\\":\\"status.code\\",\\"value\\":\\"CHECK-IN,SCHEDULED,EXTENDED-STAY,PENDING-APPROVAL\\"},{\\"condition\\":\\"=\\",\\"propertyName\\":\\"type.code\\",\\"value\\":\\"SINGLE\\"}]},\\"icon\\":\\"icon-user-profile\\",\\"style\\":\\"color:#2e21a3;\\",\\"title\\":\\"Edit Visitor\\"},{\\"action\\":{\\"confirmMessage\\":\\"Edit Group\\",\\"propertyName\\":\\"view,table\\",\\"propertyValue\\":\\"editVisitGroup,$targetTable\\",\\"type\\":\\"widget\\",\\"value\\":\\"widget-form\\"},\\"condition\\":{\\"type\\":\\"multiple\\",\\"conditions\\":[{\\"condition\\":\\"in\\",\\"propertyName\\":\\"status.code\\",\\"value\\":\\"CHECK-IN,SCHEDULED,EXTENDED-STAY,PENDING-APPROVAL\\"},{\\"condition\\":\\"=\\",\\"propertyName\\":\\"type.code\\",\\"value\\":\\"GROUP\\"}]},\\"icon\\":\\"icon-user-group\\",\\"style\\":\\"color:#2e21a3;\\",\\"title\\":\\"Edit Visitor\\"},{\\"action\\":{\\"confirmMessage\\":\\"Checkout Confirmation\\",\\"propertyName\\":\\"type\\",\\"propertyValue\\":\\"checkoutbyHost\\",\\"type\\":\\"widget\\",\\"value\\":\\"alert-notification-widget\\"},\\"condition\\":{\\"condition\\":\\"in\\",\\"propertyName\\":\\"status.code\\",\\"value\\":\\"CHECK-IN,EXTENDED-STAY\\"},\\"icon\\":\\"fa fa-sign-out\\",\\"style\\":\\"color:#009688;\\",\\"title\\":\\"Checkout\\"},{\\"action\\":{\\"confirmMessage\\":\\"Email\\",\\"propertyName\\":\\"type\\",\\"propertyValue\\":\\"email\\",\\"type\\":\\"widget\\",\\"value\\":\\"alert-notification-widget\\"},\\"condition\\":{\\"condition\\":\\"in\\",\\"propertyName\\":\\"status.code\\",\\"type\\":\\"data\\",\\"value\\":\\"SCHEDULED\\"},\\"icon\\":\\"fa fa-envelope-o\\",\\"style\\":\\"color:#FF5722;\\",\\"title\\":\\"Email\\"},{\\"action\\":{\\"confirmMessage\\":\\"Reschedule Visit\\",\\"propertyName\\":\\"view,table\\",\\"propertyValue\\":\\"reschedule,$targetTable\\",\\"type\\":\\"widget\\",\\"value\\":\\"alert-form-widget\\"},\\"condition\\":{\\"condition\\":\\"in\\",\\"propertyName\\":\\"status.code\\",\\"type\\":\\"data\\",\\"value\\":\\"SCHEDULED\\"},\\"icon\\":\\"fa fa-repeat\\",\\"style\\":\\"color:#673AB7;\\",\\"title\\":\\"Reschedule Visit\\"},{\\"action\\":{\\"confirmMessage\\":\\"Do you want to cancel the visit?\\",\\"datatype\\":\\"\\",\\"propertyName\\":\\"status\\",\\"propertyValue\\":\\"CANCELLED\\",\\"refColTableName\\":\\"x_aleen_snguardian_visitor_mt_visit_status\\",\\"type\\":\\"update\\",\\"value\\":\\"Confirm Cancel\\"},\\"condition\\":{\\"condition\\":\\"in\\",\\"propertyName\\":\\"status.code\\",\\"type\\":\\"data\\",\\"value\\":\\"SCHEDULED\\"},\\"icon\\":\\"icon-cross-circle\\",\\"style\\":\\"color:#9E9E9E;\\",\\"title\\":\\"Cancel\\"},{\\"action\\":{\\"confirmMessage\\":\\"Feedback & Chat\\",\\"propertyName\\":\\"\\",\\"propertyValue\\":\\"\\",\\"type\\":\\"widget\\",\\"value\\":\\"alert-feedback-widget\\"},\\"condition\\":{\\"condition\\":\\"in\\",\\"propertyName\\":\\"status.code\\",\\"type\\":\\"data\\",\\"value\\":\\"COMPLETED,CHECKED-OUT\\"},\\"icon\\":\\"icon-collaboration\\",\\"style\\":\\"color:#FFC107;\\",\\"title\\":\\"Comments\\"}]"
	},
	"new_record_url": {
		"value": "id=sc_cat_item&sys_id=ec2e8c9f2b295210d4dffd74ce91bf86",
		"displayValue": "id=sc_cat_item&sys_id=ec2e8c9f2b295210d4dffd74ce91bf86"
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
		"value": "[{\\"icon\\":\\"fa fa-calendar-check-o\\",\\"title\\":\\"Schedule\\",\\"action\\":{\\"type\\":\\"catalog\\",\\"value\\":\\"id=sc_cat_item&sys_id=ec2e8c9f2b295210d4dffd74ce91bf86\\"},\\"style\\":\\"btn-success btn-md m-l-xs text-right pull-right d-flex align-items-center\\",\\"condition\\":{\\"type\\":\\"role\\",\\"propertyName\\":\\"\\",\\"condition\\":\\"\\",\\"value\\":\\"\\",\\"role\\":\\"x_aleen_snguardian.admin,admin,x_aleen_snguardian.lobby_admin,x_aleen_snguardian.host\\"}}]",
		"displayValue": "[{\\"icon\\":\\"fa fa-calendar-check-o\\",\\"title\\":\\"Schedule\\",\\"action\\":{\\"type\\":\\"catalog\\",\\"value\\":\\"id=sc_cat_item&sys_id=ec2e8c9f2b295210d4dffd74ce91bf86\\"},\\"style\\":\\"btn-success btn-md m-l-xs text-right pull-right d-flex align-items-center\\",\\"condition\\":{\\"type\\":\\"role\\",\\"propertyName\\":\\"\\",\\"condition\\":\\"\\",\\"value\\":\\"\\",\\"role\\":\\"x_aleen_snguardian.admin,admin,x_aleen_snguardian.lobby_admin,x_aleen_snguardian.host\\"}}]"
	},
	"fields": {
		"value": "number,visitor.full_name,group,host,status.name,start_date",
		"displayValue": "number,visitor.full_name,group,host,status.name,start_date"
	},
	"additional_columns": {
		"value": ",visitor.need_assistance,is_deleted,visitor,status.code,type.code",
		"displayValue": ",visitor.need_assistance,is_deleted,visitor,status.code,type.code"
	},
	"header_styles": {
		"value": "",
		"displayValue": ""
	},
	"show_searchbox": {
		"value": "false",
		"displayValue": "false"
	}
}`,
    },
})
