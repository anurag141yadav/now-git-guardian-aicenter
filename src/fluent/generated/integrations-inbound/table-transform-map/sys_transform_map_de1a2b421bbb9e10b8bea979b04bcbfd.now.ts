import { ImportSet } from '@servicenow/sdk/core'

ImportSet({
    $id: Now.ID['de1a2b421bbb9e10b8bea979b04bcbfd'],
    name: 'Event Transform Map',
    targetTable: 'x_aleen_snguardian_event',
    sourceTable: 'x_aleen_snguardian_u_event__import_set',
    active: true,
    fields: {
        event_id: {
            sourceField: 'u_alert_attr_eventid',
            coalesce: true,
            choiceAction: 'ignore',
            sourceScript: `answer = (function transformEntry(source) {

	// Add your code here
	return ""; // return the value to be put into the target field

})(source);`,
            dateFormat: 'yyyy-MM-dd HH:mm:ss',
        },
        type: {
            sourceField: 'u_alert_attr_eventtype',
            choiceAction: 'ignore',
            sourceScript: `answer = (function transformEntry(source) {

	// Add your code here
	return ""; // return the value to be put into the target field

})(source);`,
            dateFormat: 'yyyy-MM-dd HH:mm:ss',
        },
        event_position: {
            sourceField: 'u_alert_event_position',
            coalesce: true,
            choiceAction: 'create',
            sourceScript: `answer = (function transformEntry(source) {

	// Add your code here
	return ""; // return the value to be put into the target field

})(source);`,
            dateFormat: 'yyyy-MM-dd HH:mm:ss',
        },
        event_date_time: {
            sourceField: 'u_alert_attr_timestamp',
            coalesce: true,
            choiceAction: 'ignore',
            sourceScript: `answer = (function transformEntry(source) {

	// Add your code here
	return ""; // return the value to be put into the target field

})(source);`,
            dateFormat: 'yyyy-MM-dd HH:mm:ss',
        },
    },
    runScript: false,
})
