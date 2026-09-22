import { Action, wfa, actionStep } from '@servicenow/sdk/automation'

export const process_last_used_datetime = Action(
    {
        $id: Now.ID['706045cc1baf0610207b2179b04bcb76'],
        name: 'Alert Process Last Used DateTime',
        internalName: 'process_last_used_datetime',
        inputs: {},
        outputs: {},
        masterSnapshot: '458081001bef0610207b2179b04bcb32',
    },
    () => {
        wfa.actionStep(
            actionStep.script,
            {
                $id: Now.ID['6f708dcc1baf0610207b2179b04bcbf9'],
                label: 'Script step',
            },
            {
                application: '35aa573fd7802200bdbaee5b5e610375',
                script: Now.include('./scripts/6f708dcc1baf0610207b2179b04bcbf9.js'),
                errorHandlingType: 'stop_the_action',
                required_run_time: 'instance',
            }
        )
    }
)
