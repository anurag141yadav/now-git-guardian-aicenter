import { Action, wfa, actionStep } from '@servicenow/sdk/automation'
import { StringColumn, BooleanColumn } from '@servicenow/sdk/core'

export const alert_authentication_action = Action(
    {
        $id: Now.ID['9ddfc17c478b361051a3e84d416d43d2'],
        name: 'Alert Authentication Action',
        internalName: 'alert_authentication_action',
        category: '{}',
        inputs: {
            system_id: StringColumn({
                label: 'system_id',
                maxLength: 8000,
            }),
        },
        outputs: {
            success: BooleanColumn({
                label: 'success',
            }),
            token: StringColumn({
                label: 'token',
                maxLength: 8000,
            }),
            message: StringColumn({
                label: 'message',
                maxLength: 8000,
            }),
        },
        masterSnapshot: '4240953047cb361051a3e84d416d43c4',
    },
    (params) => {
        const script_step = wfa.actionStep(
            actionStep.script,
            {
                $id: Now.ID['3940953047cb361051a3e84d416d4342'],
                label: 'Script step',
            },
            {
                script: Now.include('./scripts/3940953047cb361051a3e84d416d4342.js'),
                application: '35aa573fd7802200bdbaee5b5e610375',
                errorHandlingType: 'stop_the_action',
                required_run_time: 'instance',
                inputVariables: {
                    system_id: {
                        label: 'system_id',
                        value: wfa.dataPill(params.inputs.system_id, 'string'),
                    },
                },
                outputVariables: {
                    token: StringColumn({
                        label: 'token',
                        maxLength: 8000,
                    }),
                    message: StringColumn({
                        label: 'message',
                        maxLength: 8000,
                    }),
                    success: BooleanColumn({
                        label: 'success',
                        maxLength: 40,
                    }),
                },
            }
        )
        wfa.assignActionOutputs(params.outputs, {
            success: wfa.dataPill(script_step.success, 'boolean'),
            message: wfa.dataPill(script_step.message, 'string'),
            token: wfa.dataPill(script_step.token, 'string'),
        })
    }
)
