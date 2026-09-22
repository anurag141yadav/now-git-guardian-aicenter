import { Action, wfa, actionStep } from '@servicenow/sdk/automation'
import { ReferenceColumn, StringColumn } from '@servicenow/sdk/core'

export const shift_access_to_badge_replace_badge = Action(
    {
        $id: Now.ID['fc914bb91b185e10207b2179b04bcb21'],
        name: 'Alert Shift Access to badge (Replace badge)',
        internalName: 'shift_access_to_badge_replace_badge',
        access: 'package_private',
        inputs: {
            identity_asset: ReferenceColumn({
                label: 'Identity Asset',
                referenceTable: 'x_aleen_snguardian_identity_asset',
            }),
        },
        outputs: {
            access: StringColumn({
                label: 'access',
                maxLength: 8000,
            }),
        },
        masterSnapshot: '0d054fbd1b185e10207b2179b04bcb8b',
    },
    (params) => {
        const script_step = wfa.actionStep(
            actionStep.script,
            {
                $id: Now.ID['8b0203f91b185e10207b2179b04bcbf6'],
                label: 'Script step',
            },
            {
                script: Now.include('./scripts/8b0203f91b185e10207b2179b04bcbf6.js'),
                application: '35aa573fd7802200bdbaee5b5e610375',
                errorHandlingType: 'stop_the_action',
                required_run_time: 'instance',
                inputVariables: {
                    identity_asset: {
                        label: 'identity_asset',
                        value: wfa.dataPill(params.inputs.identity_asset, 'reference'),
                    },
                },
                outputVariables: {
                    access: StringColumn({
                        label: 'access',
                        maxLength: 8000,
                    }),
                },
            }
        )
        wfa.assignActionOutputs(params.outputs, {
            access: wfa.dataPill(script_step.access, 'string'),
        })
    }
)
