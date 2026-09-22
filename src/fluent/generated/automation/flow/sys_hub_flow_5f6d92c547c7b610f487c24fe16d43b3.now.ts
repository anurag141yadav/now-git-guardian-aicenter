import { Flow, wfa, trigger } from '@servicenow/sdk/automation'

Flow(
    {
        $id: Now.ID['5f6d92c547c7b610f487c24fe16d43b3'],
        name: 'Alert Automatic Badge Deactivation Job',
        internalName: 'alert_automatic_badge_deactivation_job',
        description: 'Badge deactivation job for checked out visitors and expired badges (QR, MC)',
        runAs: 'system',
        masterSnapshot: 'fcbe124947c7b610f487c24fe16d4309',
    },
    wfa.trigger(
        trigger.scheduled.daily,
        {
            $id: Now.ID['63ae9e0947c7b610f487c24fe16d43e5'],
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
            'ef9e1e0947c7b610f487c24fe16d43ef',
            {
                $id: Now.ID['e7ae9e0947c7b610f487c24fe16d43e6'],
                uuid: '044c6ce9-f51b-46a8-b170-d80d7fd5201a',
            },
            {}
        )
    }
)
