import { UiPolicy } from '@servicenow/sdk/core'

UiPolicy({
    $id: Now.ID['99f248e6471a621051a3e84d416d4344'],
    table: 'x_aleen_snguardian_visitor_visit',
    shortDescription: 'Show Start/End Date based on Recurring',
    isolateScript: true,
    conditions: 'is_recurring=true^EQ',
    runScripts: true,
    scriptTrue: `function onCondition() {
	g_form.setDisplay('recurring_start_date',true);
	g_form.setDisplay('recurring_end_date',true);
	g_form.setDisplay('is_all_day_event',true);
	g_form.setDisplay('recurring_start_time',true);
	g_form.setDisplay('recurring_end_time',true);
	g_form.showFieldMsg('recurring_start_time','Valid Time Format: HH:mm:ss');
	g_form.showFieldMsg('recurring_end_time','Valid Time Format: HH:mm:ss');
	g_form.setDisplay('recurring_value',true);
	g_form.setDisplay('recurring_type',true);

	g_form.setDisplay('start_date',false);
	g_form.setDisplay('end_date',false);
}`,
    scriptFalse: `function onCondition() {
	g_form.setDisplay('start_date',true);
	g_form.setDisplay('end_date',true);
	
	g_form.hideFieldMsg('recurring_start_time', true);
	g_form.hideFieldMsg('recurring_end_time', true);
	g_form.setDisplay('is_all_day_event',false);
	g_form.setDisplay('recurring_start_date',false);
	g_form.setDisplay('recurring_end_date',false);
	g_form.setDisplay('recurring_start_time',false);
	g_form.setDisplay('recurring_end_time',false);
	g_form.setDisplay('recurring_value',false);
	g_form.setDisplay('recurring_type',false);
}`,
    uiType: 'all',
    view: 'reschedule',
    actions: [
        {
            field: 'end_date',
            visible: false,
            table: 'x_aleen_snguardian_visitor_visit',
        },
        {
            field: 'start_date',
            visible: false,
            table: 'x_aleen_snguardian_visitor_visit',
        },
    ],
    $meta: {
        useEsLatest: false,
    },
})
