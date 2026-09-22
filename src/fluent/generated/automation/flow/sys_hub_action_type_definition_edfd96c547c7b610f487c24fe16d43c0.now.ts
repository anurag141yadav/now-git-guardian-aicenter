import { Action, wfa, actionStep } from '@servicenow/sdk/automation'

export const alert_automatic_badge_deactivation_action = Action(
    {
        $id: Now.ID['edfd96c547c7b610f487c24fe16d43c0'],
        name: 'Alert Automatic Badge Deactivation Action',
        internalName: 'alert_automatic_badge_deactivation_action',
        category: '{}',
        inputs: {},
        outputs: {},
        masterSnapshot: 'ef9e1e0947c7b610f487c24fe16d43ef',
    },
    () => {
        wfa.actionStep(
            actionStep.script,
            {
                $id: Now.ID['0e9eda0947c7b610f487c24fe16d43cf'],
                label: 'Script step',
            },
            {
                script: Now.include('./scripts/0e9eda0947c7b610f487c24fe16d43cf.js'),
                application: '35aa573fd7802200bdbaee5b5e610375',
                errorHandlingType: 'stop_the_action',
                required_run_time: 'instance',
            }
        )
    }
)
