import { Flow, wfa, trigger } from '@servicenow/sdk/automation'

Flow(
    {
        $id: Now.ID['321bd60547c7b610f487c24fe16d43e4'],
        name: 'Alert Recurring Visit Status Update Job',
        internalName: 'alert_recurring_visit_status_update_job',
        description: 'To  update recurring visit status on day of visit',
        runAs: 'system',
        masterSnapshot: '005c128547c7b610f487c24fe16d43db',
    },
    wfa.trigger(
        trigger.scheduled.daily,
        {
            $id: Now.ID['cf4c128547c7b610f487c24fe16d4326'],
        },
        {
            time: Time(
                {
                    hours: 0,
                    minutes: 0,
                    seconds: 1,
                },
                'UTC'
            ),
        }
    ),
    (_params) => {
        wfa.action(
            'dcbb164547c7b610f487c24fe16d4396',
            {
                $id: Now.ID['874c128547c7b610f487c24fe16d4328'],
                uuid: '6e51bf5a-5573-49c6-9b8a-84ec18264224',
            },
            {}
        )
    }
)
