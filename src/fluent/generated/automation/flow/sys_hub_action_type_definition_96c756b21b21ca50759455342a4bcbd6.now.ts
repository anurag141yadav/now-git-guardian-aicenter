import { Action, wfa, actionStep } from '@servicenow/sdk/automation'
import { DurationColumn } from '@servicenow/sdk/core'

export const random_wait_duration = Action(
    {
        $id: Now.ID['96c756b21b21ca50759455342a4bcbd6'],
        name: 'Alert Random Wait Duration',
        internalName: 'random_wait_duration',
        inputs: {},
        outputs: {
            variable: DurationColumn({
                label: 'duration',
                maxLength: 40,
            }),
        },
        masterSnapshot: 'b8a916761b21ca50759455342a4bcbbd',
    },
    (params) => {
        const script_step = wfa.actionStep(
            actionStep.script,
            {
                $id: Now.ID['5fb816361b21ca50759455342a4bcbc5'],
                label: 'Script step',
            },
            {
                application: '35aa573fd7802200bdbaee5b5e610375',
                script: Now.include('./scripts/5fb816361b21ca50759455342a4bcbc5.js'),
                errorHandlingType: 'stop_the_action',
                required_run_time: 'instance',
                outputVariables: {
                    dur: DurationColumn({
                        label: 'dur',
                        maxLength: 40,
                    }),
                },
            }
        )
        wfa.assignActionOutputs(params.outputs, {
            variable: wfa.dataPill(script_step.dur, 'glide_duration'),
        })
    }
)
