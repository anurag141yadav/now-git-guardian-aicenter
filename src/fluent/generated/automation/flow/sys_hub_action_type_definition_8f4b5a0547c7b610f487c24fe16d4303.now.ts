import { Action, wfa, actionStep } from '@servicenow/sdk/automation'
import { IntegerColumn, StringColumn } from '@servicenow/sdk/core'

export const alert_recurring_visit_status_update_action = Action(
    {
        $id: Now.ID['8f4b5a0547c7b610f487c24fe16d4303'],
        name: 'Alert Recurring Visit Status Update Action',
        internalName: 'alert_recurring_visit_status_update_action',
        category: '{}',
        inputs: {},
        outputs: {
            updated_count: IntegerColumn({
                label: 'updated_count',
            }),
            updated_visit_ids: StringColumn({
                label: 'updated_visit_ids',
                maxLength: 8000,
            }),
        },
        masterSnapshot: 'dcbb164547c7b610f487c24fe16d4396',
    },
    (params) => {
        const script_step = wfa.actionStep(
            actionStep.script,
            {
                $id: Now.ID['3b8b524547c7b610f487c24fe16d4300'],
                label: 'Script step',
            },
            {
                application: '35aa573fd7802200bdbaee5b5e610375',
                script: Now.include('./scripts/3b8b524547c7b610f487c24fe16d4300.js'),
                errorHandlingType: 'stop_the_action',
                required_run_time: 'instance',
                outputVariables: {
                    updated_visit_ids: StringColumn({
                        label: 'updated_visit_ids',
                        maxLength: 8000,
                    }),
                    updated_count: IntegerColumn({
                        label: 'updated_count',
                        maxLength: 40,
                    }),
                },
            }
        )
        wfa.assignActionOutputs(params.outputs, {
            updated_count: wfa.dataPill(script_step.updated_count, 'integer'),
            updated_visit_ids: wfa.dataPill(script_step.updated_visit_ids, 'string'),
        })
    }
)
