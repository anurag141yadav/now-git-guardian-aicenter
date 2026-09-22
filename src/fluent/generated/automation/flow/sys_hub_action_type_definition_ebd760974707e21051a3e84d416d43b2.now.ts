import { Action, wfa, actionStep } from '@servicenow/sdk/automation'

export const processing_provisioning_queue_action = Action(
    {
        $id: Now.ID['ebd760974707e21051a3e84d416d43b2'],
        name: 'Alert Processing Provisioning Queue Action',
        internalName: 'processing_provisioning_queue_action',
        category: '{}',
        inputs: {},
        outputs: {},
        masterSnapshot: '79a8e0d74707e21051a3e84d416d436e',
    },
    () => {
        wfa.actionStep(
            actionStep.script,
            {
                $id: Now.ID['18a8e4974707e21051a3e84d416d430e'],
                label: 'Script step',
            },
            {
                application: '35aa573fd7802200bdbaee5b5e610375',
                script: Now.include('./scripts/18a8e4974707e21051a3e84d416d430e.js'),
                errorHandlingType: 'stop_the_action',
                required_run_time: 'instance',
            }
        )
    }
)
