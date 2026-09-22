import { Action, wfa, actionStep } from '@servicenow/sdk/automation'
import { ReferenceColumn, StringColumn } from '@servicenow/sdk/core'

export const get_temp_worker_manager_master_id = Action(
    {
        $id: Now.ID['43cbe82e1b3482106962fe60cd4bcb3e'],
        name: 'Alert Get Manager to set as Approver',
        internalName: 'get_temp_worker_manager_master_id',
        inputs: {
            variable: ReferenceColumn({
                label: 'variable',
                referenceTable: 'x_aleen_snguardian_request',
            }),
            approver_user_name: StringColumn({
                label: 'approver_user_name',
                maxLength: 8000,
            }),
        },
        outputs: {
            approver_user: ReferenceColumn({
                label: 'Approver',
                referenceTable: 'sys_user',
            }),
        },
        masterSnapshot: '328eecee1b3482106962fe60cd4bcbb7',
    },
    (params) => {
        const script_step = wfa.actionStep(
            actionStep.script,
            {
                $id: Now.ID['13cbe82e1b3482106962fe60cd4bcb65'],
                label: 'Script step',
            },
            {
                application: '35aa573fd7802200bdbaee5b5e610375',
                script: Now.include('./scripts/13cbe82e1b3482106962fe60cd4bcb65.js'),
                errorHandlingType: 'dont_stop_the_action',
                required_run_time: 'instance',
                inputVariables: {
                    record: {
                        label: 'record',
                        value: wfa.dataPill(params.inputs.variable, 'reference'),
                    },
                    approver_user_name: {
                        label: 'approver_user_name',
                        value: wfa.dataPill(params.inputs.approver_user_name, 'string'),
                    },
                },
                outputVariables: {
                    approver: ReferenceColumn({
                        label: 'approver',
                        maxLength: 32,
                        referenceTable: 'sys_user',
                    }),
                },
            }
        )
        wfa.assignActionOutputs(params.outputs, {
            approver_user: wfa.dataPill(script_step.approver, 'reference'),
        })
    }
)
