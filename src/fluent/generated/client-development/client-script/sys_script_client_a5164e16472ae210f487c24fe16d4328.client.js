function onSubmit() {
    var ga = new GlideAjax('VisitorClientScriptHelper');
    ga.addParam('sysparm_name', 'getVisitData');
    ga.addParam('sysparm_visitId', g_form.getUniqueValue());
    ga.getXMLAnswer(getResponse);

    function getResponse(resp) {
        try {
            responseObj = JSON.parse(resp);
            var gaVisit = new GlideAjax('VisitorClientScriptHelper');
            gaVisit.addParam('sysparm_name', 'setVisitStartEndTime');
            gaVisit.addParam('sysparm_visitId',g_form.getUniqueValue());
            gaVisit.addParam('sysparm_start_time', g_form.getValue('recurring_start_date')+" "+g_form.getValue('recurring_start_time'));
            gaVisit.addParam('sysparm_end_time', g_form.getValue('recurring_end_date')+" "+g_form.getValue('recurring_end_time'));
            gaVisit.addParam('sysparm_timezone', responseObj['location.time_zone']);
            gaVisit.addParam('sysparm_location', responseObj['location.sys_id']);
            gaVisit.getXMLAnswer(getTimeResponse);

        } catch (err) {
            console.error("Error getting Visit Data" + err);
        }

    }

    function getTimeResponse(timeResp) {
		try{
			var timeResponse = JSON.parse(timeResp);
        } catch (err) {
            console.error("Error in getting Start Time-End Time " + err);
        }
    }
    //Type appropriate comment here, and begin script below

}