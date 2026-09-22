import { Action, wfa, actionStep } from '@servicenow/sdk/automation'
import { ReferenceColumn } from '@servicenow/sdk/core'

export const access_review_create_review_task = Action(
    {
        $id: Now.ID['a340f2061ba14e506962fe60cd4bcb17'],
        name: 'Alert Access Review :: Create Review Task',
        internalName: 'access_review__create_review_task',
        description: 'Create a review Task for Reviewers',
        inputs: {
            variable: ReferenceColumn({
                label: 'variable',
                mandatory: true,
                referenceTable: 'x_aleen_snguardian_review',
            }),
        },
        outputs: {},
        masterSnapshot: '741132861ba14e506962fe60cd4bcb53',
    },
    (params) => {
        wfa.actionStep(
            actionStep.script,
            {
                $id: Now.ID['d7a0b6461ba14e506962fe60cd4bcb37'],
                label: 'Script step',
            },
            {
                script: Now.include('./scripts/d7a0b6461ba14e506962fe60cd4bcb37.js'),
                application: '35aa573fd7802200bdbaee5b5e610375',
                errorHandlingType: 'stop_the_action',
                required_run_time: 'instance',
                inputVariables: {
                    record: {
                        label: 'record',
                        value: wfa.dataPill(params.inputs.variable, 'reference'),
                    },
                },
            }
        )
    }
)
