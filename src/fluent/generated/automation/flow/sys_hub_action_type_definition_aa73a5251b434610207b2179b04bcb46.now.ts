import { Action, wfa, actionStep } from '@servicenow/sdk/automation'
import { StringColumn } from '@servicenow/sdk/core'

export const action_verify_access_request_complete = Action(
    {
        $id: Now.ID['aa73a5251b434610207b2179b04bcb46'],
        name: 'Alert Action Verify Access Request Complete',
        internalName: 'action_verify_access_request_complete',
        inputs: {
            parent_request_number: StringColumn({
                label: 'Parent Request Number',
                maxLength: 8000,
            }),
        },
        outputs: {},
        masterSnapshot: '71bfb1211bc34610207b2179b04bcb81',
    },
    (params) => {
        wfa.actionStep(
            actionStep.script,
            {
                $id: Now.ID['d77da9ad1b434610207b2179b04bcbc1'],
                label: 'Script step',
            },
            {
                script: Now.include('./scripts/d77da9ad1b434610207b2179b04bcbc1.js'),
                application: '35aa573fd7802200bdbaee5b5e610375',
                errorHandlingType: 'stop_the_action',
                required_run_time: 'instance',
                inputVariables: {
                    parent_number: {
                        label: 'parent_number',
                        value: wfa.dataPill(params.inputs.parent_request_number, 'string'),
                    },
                },
            }
        )
    }
)
