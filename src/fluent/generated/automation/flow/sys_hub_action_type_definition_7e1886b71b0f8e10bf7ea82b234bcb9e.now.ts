import { Action, wfa, actionStep } from '@servicenow/sdk/automation'
import { ReferenceColumn } from '@servicenow/sdk/core'

export const get_manager_for_first_stage_approval = Action(
    {
        $id: Now.ID['7e1886b71b0f8e10bf7ea82b234bcb9e'],
        name: 'Alert Get Manager for First Stage Approval',
        internalName: 'get_manager_for_first_stage_approval',
        inputs: {
            identity: ReferenceColumn({
                label: 'identity',
                referenceTable: 'x_aleen_snguardian_identity',
            }),
        },
        outputs: {
            manager: ReferenceColumn({
                label: 'manager',
                referenceTable: 'sys_user',
            }),
        },
        masterSnapshot: '9d884af71b0f8e10bf7ea82b234bcbee',
    },
    (params) => {
        const script_step = wfa.actionStep(
            actionStep.script,
            {
                $id: Now.ID['00880af71b0f8e10bf7ea82b234bcb65'],
                label: 'Script step',
            },
            {
                script: Now.include('./scripts/00880af71b0f8e10bf7ea82b234bcb65.js'),
                application: '35aa573fd7802200bdbaee5b5e610375',
                errorHandlingType: 'stop_the_action',
                required_run_time: 'instance',
                inputVariables: {
                    identity: {
                        label: 'identity',
                        value: wfa.dataPill(params.inputs.identity, 'reference'),
                    },
                },
                outputVariables: {
                    response: ReferenceColumn({
                        label: 'response',
                        maxLength: 32,
                        referenceTable: 'sys_user',
                    }),
                },
            }
        )
        wfa.assignActionOutputs(params.outputs, {
            manager: wfa.dataPill(script_step.response, 'reference'),
        })
    }
)
