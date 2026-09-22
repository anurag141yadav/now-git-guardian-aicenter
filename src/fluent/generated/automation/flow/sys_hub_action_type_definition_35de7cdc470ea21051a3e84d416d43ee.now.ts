import { Action, wfa, actionStep } from '@servicenow/sdk/automation'
import { StringColumn } from '@servicenow/sdk/core'

export const mobile_credential_decision_action = Action(
    {
        $id: Now.ID['35de7cdc470ea21051a3e84d416d43ee'],
        name: 'Alert Decision Evaluation Action',
        internalName: 'mobile_credential_decision_action',
        description: 'Action to evaluate decision regarding mobile credential request',
        category: '{}',
        inputs: {
            input: StringColumn({
                label: 'input',
                mandatory: true,
                maxLength: 8000,
            }),
            code: StringColumn({
                label: 'code',
                mandatory: true,
                maxLength: 8000,
            }),
        },
        outputs: {
            outputs: StringColumn({
                label: 'outputs',
                mandatory: true,
                maxLength: 8000,
            }),
        },
        masterSnapshot: 'f4540d94474ea21051a3e84d416d43b6',
    },
    (params) => {
        const script_step = wfa.actionStep(
            actionStep.script,
            {
                $id: Now.ID['81104990474ea21051a3e84d416d434c'],
                label: 'Script step',
            },
            {
                script: Now.include('./scripts/81104990474ea21051a3e84d416d434c.js'),
                application: '35aa573fd7802200bdbaee5b5e610375',
                errorHandlingType: 'stop_the_action',
                required_run_time: 'instance',
                inputVariables: {
                    decision_input: {
                        label: 'decision_input',
                        value: wfa.dataPill(params.inputs.input, 'string'),
                    },
                    decision_code: {
                        label: 'decision_code',
                        value: wfa.dataPill(params.inputs.code, 'string'),
                    },
                },
                outputVariables: {
                    output: StringColumn({
                        label: 'output',
                        maxLength: 8000,
                    }),
                },
            }
        )
        wfa.assignActionOutputs(params.outputs, {
            outputs: wfa.dataPill(script_step.output, 'string'),
        })
    }
)
