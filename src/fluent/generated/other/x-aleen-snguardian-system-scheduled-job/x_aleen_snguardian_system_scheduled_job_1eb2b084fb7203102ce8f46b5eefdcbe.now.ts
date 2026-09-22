import { Record } from '@servicenow/sdk/core'

Record({
    $id: Now.ID['1eb2b084fb7203102ce8f46b5eefdcbe'],
    table: 'x_aleen_snguardian_system_scheduled_job',
    data: {
        active: 'true',
        advanced: 'false',
        conditional: 'false',
        entered_time: '1970-01-01 00:00:00',
        function: '',
        name: 'User rcon',
        number: 'SYSJOB0001002',
        offset_type: '0',
        run_as: '6816f79cc0a8016401c5a33be04be441',
        run_dayofmonth: '1',
        run_dayofweek: '1',
        run_start: '2026-08-14 09:46:34',
        run_time: '1970-01-01 08:00:00',
        run_type: 'on_demand',
        script: `var logger = new AlertGuardianLogger(" System Scheduled Job ");
var grJobHistory = new GlideRecordSecure('x_aleen_snguardian_system_scheduled_job_history');
grJobHistory.status = 'Started';
grJobHistory.script = current.getUniqueValue();
grJobHistory.datasource = current.getUniqueValue();
grJobHistory.datasource_table = 'x_aleen_snguardian_system_scheduled_job';
var historyId = grJobHistory.insert();
var grSystem = new GlideRecordSecure('x_aleen_snguardian_system');
if (grSystem.get(current.system)) {
    var data = new GuardianGlideRecordUtil().toJSON(grSystem, null);
    data['history_id'] = historyId;
    data['datasource.sys_id'] = current.getUniqueValue();
    data['datasource_table'] = 'x_aleen_snguardian_system_scheduled_job';
    var provHelper = new ProvisioningHelper(grSystem.number);
    var answer = provHelper.execute(data, 'GET-ALL-USERS', {});
    if (answer.hasMorePages && answer.hasMorePages == true) {
        do {
            try {
                data["page_number"] = answer.page_number;
                answer = provHelper.execute(data, 'GET-ALL-USERS', {});
            } catch (err) {
                logger.error("Error in Recalling Recon : " + err);
            }
        } while (answer.hasMorePages);
    }
}`,
        system: '',
        upgrade_safe: 'false',
    },
})
