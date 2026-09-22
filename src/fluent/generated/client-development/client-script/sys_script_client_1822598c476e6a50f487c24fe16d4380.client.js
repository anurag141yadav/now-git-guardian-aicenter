function onChange(control, oldValue, newValue, isLoading, isTemplate) {
    if (isLoading) {
        return;
    }
    try {
        var gaGetVisitData = new GlideAjax('VisitorClientScriptHelper');
        gaGetVisitData.addParam('sysparm_name', 'getVisitData');
        gaGetVisitData.addParam('sysparm_visitId', g_form.getUniqueValue());

        gaGetVisitData.getXMLAnswer(function(resp) {
            try {
                if (!resp) {
                    return;
                }

                var response = JSON.parse(resp);

                var gaLobbyConfig = new GlideAjax('VisitorClientScriptHelper');
                gaLobbyConfig.addParam('sysparm_name', 'getLobbyConfig');
                gaLobbyConfig.addParam('sysparm_location', response['location.sys_id']);

                gaLobbyConfig.getXMLAnswer(function(lobbyResp) {
                    try {
						var lobbyConfig = JSON.parse(lobbyResp);
                        if (!lobbyResp) {
                            return;
                        }
                        if (newValue == 'true' || newValue == true) {
							g_form.setValue('recurring_start_time', lobbyConfig.starthour);
                            g_form.setValue('recurring_end_time', lobbyConfig.endhours);
                            g_form.setReadOnly('recurring_start_time', true);
                            g_form.setReadOnly('recurring_end_time', true);
                        } else {
                            g_form.setReadOnly('recurring_start_time', false);
                            g_form.setReadOnly('recurring_end_time', false);
                            g_form.setValue('recurring_start_time', lobbyConfig.starthour);
                            g_form.setValue('recurring_end_time', lobbyConfig.endhours);
                        }
                    } catch (e) {
						return ;
                    }
                });

            } catch (e) {
				return ;
            }
        });

    } catch (e) {
        return ;
    }
    //Type appropriate comment here, and begin script below

}