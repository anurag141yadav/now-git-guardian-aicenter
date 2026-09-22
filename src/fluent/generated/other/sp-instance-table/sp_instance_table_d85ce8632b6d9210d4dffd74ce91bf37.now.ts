import { Record } from '@servicenow/sdk/core'

Record({
    $id: Now.ID['d85ce8632b6d9210d4dffd74ce91bf37'],
    table: 'sp_instance_table',
    data: {
        active: 'true',
        advanced_placeholder_dimensions: 'false',
        async_load: 'false',
        color: 'default',
        display_field: 'number',
        filter: 'is_deleted=false',
        maximum_entries: '20',
        order: '1',
        order_by: 'first_name',
        order_direction: 'asc',
        preserve_placeholder_size: 'false',
        short_description: 'Visitors List',
        size: 'md',
        sp_column: 'e44ce8632b6d9210d4dffd74ce91bfa7',
        sp_widget: 'fb77a01833e99a10bf1221382e5c7b7a',
        table: 'x_aleen_snguardian_visitor',
        title: 'Visitors',
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
		"value": "false",
		"displayValue": "false"
	},
	"show_actions": {
		"value": "true",
		"displayValue": "true"
	},
	"actions_list": {
		"value": "[{\\"action\\":{\\"confirmMessage\\":\\"Edit Visitor\\",\\"propertyName\\":\\"view,table\\",\\"propertyValue\\":\\"portaledit,$targetTable\\",\\"type\\":\\"widget\\",\\"value\\":\\"alert-form-widget\\"},\\"condition\\":{\\"type\\":\\"data\\",\\"propertyName\\":\\"visitor_status.name\\",\\"condition\\":\\"!=\\",\\"value\\":\\"Rejected\\"},\\"icon\\":\\"fa fa-pencil-square-o\\",\\"style\\":\\"color: #4CAF50;\\",\\"title\\":\\"Edit Visitor\\"},{\\"icon\\":\\"fa fa fa-trash-o\\",\\"title\\":\\"Delete\\",\\"action\\":{\\"confirmMessage\\":\\"Are you sure you want to delete this record? This action cannot be undone.\\",\\"datatype\\":\\"boolean\\",\\"propertyName\\":\\"is_deleted\\",\\"propertyValue\\":\\"true\\",\\"refColTableName\\":\\"\\",\\"type\\":\\"update\\",\\"value\\":\\"Confirm Delete\\"},\\"style\\":\\"color: #E91E63;\\",\\"condition\\":{\\"type\\":\\"role\\",\\"propertyName\\":\\"\\",\\"condition\\":\\"in\\",\\"value\\":\\"\\",\\"role\\":\\"x_aleen_snguardian.admin,admin\\"}}]",
		"displayValue": "[{\\"action\\":{\\"confirmMessage\\":\\"Edit Visitor\\",\\"propertyName\\":\\"view,table\\",\\"propertyValue\\":\\"portaledit,$targetTable\\",\\"type\\":\\"widget\\",\\"value\\":\\"alert-form-widget\\"},\\"condition\\":{\\"type\\":\\"data\\",\\"propertyName\\":\\"visitor_status.name\\",\\"condition\\":\\"!=\\",\\"value\\":\\"Rejected\\"},\\"icon\\":\\"fa fa-pencil-square-o\\",\\"style\\":\\"color: #4CAF50;\\",\\"title\\":\\"Edit Visitor\\"},{\\"icon\\":\\"fa fa fa-trash-o\\",\\"title\\":\\"Delete\\",\\"action\\":{\\"confirmMessage\\":\\"Are you sure you want to delete this record? This action cannot be undone.\\",\\"datatype\\":\\"boolean\\",\\"propertyName\\":\\"is_deleted\\",\\"propertyValue\\":\\"true\\",\\"refColTableName\\":\\"\\",\\"type\\":\\"update\\",\\"value\\":\\"Confirm Delete\\"},\\"style\\":\\"color: #E91E63;\\",\\"condition\\":{\\"type\\":\\"role\\",\\"propertyName\\":\\"\\",\\"condition\\":\\"in\\",\\"value\\":\\"\\",\\"role\\":\\"x_aleen_snguardian.admin,admin\\"}}]"
	},
	"new_record_url": {
		"value": "",
		"displayValue": ""
	},
	"highlight_list": {
		"value": "[{\\"fieldName\\":\\"visitor_status.name\\",\\"scope\\":\\"column\\",\\"extField\\":\\"visitor_status.code\\",\\"higlight\\":[{\\"value\\":\\"NEW\\",\\"style\\":\\"bg-primary pill\\"},{\\"value\\":\\"PENDING-VERIFICATION\\",\\"style\\":\\"bg-warning pill\\"},{\\"value\\":\\"RE-VERIFICATION\\",\\"style\\":\\"bg-lightblue pill\\"},{\\"value\\":\\"INACTIVE\\",\\"style\\":\\"bg-darkred pill\\"},{\\"value\\":\\"VERIFIED\\",\\"style\\":\\"bg-green pill\\"},{\\"value\\":\\"BLOCKED\\",\\"style\\":\\"bg-darkgray pill\\"},{\\"value\\":\\"REJECTED\\",\\"style\\":\\"bg-darkpurple pill\\"}]}]",
		"displayValue": "[{\\"fieldName\\":\\"visitor_status.name\\",\\"scope\\":\\"column\\",\\"extField\\":\\"visitor_status.code\\",\\"higlight\\":[{\\"value\\":\\"NEW\\",\\"style\\":\\"bg-primary pill\\"},{\\"value\\":\\"PENDING-VERIFICATION\\",\\"style\\":\\"bg-warning pill\\"},{\\"value\\":\\"RE-VERIFICATION\\",\\"style\\":\\"bg-lightblue pill\\"},{\\"value\\":\\"INACTIVE\\",\\"style\\":\\"bg-darkred pill\\"},{\\"value\\":\\"VERIFIED\\",\\"style\\":\\"bg-green pill\\"},{\\"value\\":\\"BLOCKED\\",\\"style\\":\\"bg-darkgray pill\\"},{\\"value\\":\\"REJECTED\\",\\"style\\":\\"bg-darkpurple pill\\"}]}]"
	},
	"use_external_filters": {
		"value": "false",
		"displayValue": "false"
	},
	"additional_buttons": {
		"value": "[]",
		"displayValue": "[]"
	},
	"fields": {
		"value": "first_name,last_name,email,phone,visitor_status.name,visitor_type.name",
		"displayValue": "first_name,last_name,email,phone,visitor_status.name,visitor_type.name"
	},
	"additional_columns": {
		"value": "visitor_status.code",
		"displayValue": "visitor_status.code"
	},
	"header_styles": {
		"value": "[]",
		"displayValue": "[]"
	},
	"show_searchbox": {
		"value": "false",
		"displayValue": "false"
	}
}`,
    },
})
