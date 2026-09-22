import { Action, FlowArray, wfa, actionStep } from '@servicenow/sdk/automation'
import { ReferenceColumn, StringColumn } from '@servicenow/sdk/core'

export const process_mrvs_identities_for_mobile_credentials = Action(
    {
        $id: Now.ID['f6dacf331be3d210687b9866b04bcbc1'],
        name: 'Alert Process MRVS Identities for Mobile Credentials',
        internalName: 'process_mrvs_identities_for_mobile_credentials',
        description: 'Process MRVS Identities for Mobile Credentials',
        category: '{}',
        inputs: {
            bulk_request: ReferenceColumn({
                label: 'bulk_request',
                referenceTable: 'x_aleen_snguardian_request',
            }),
        },
        outputs: {
            identities: FlowArray({
                $id: '1e8b8b731be3d210687b9866b04bcbd6',
                co_type_name: 'FD5a8b8b73a0e3d210e7856f2faae03dd6',
                elementType: StringColumn({
                    label: 'sys_id',
                }),
                label: 'Identities',
                childName: 'sys_id',
            }),
        },
        masterSnapshot: 'ab8bcb731be3d210687b9866b04bcb87',
    },
    (params) => {
        const script_step = wfa.actionStep(
            actionStep.script,
            {
                $id: Now.ID['012b07731be3d210687b9866b04bcbf2'],
                label: 'Script step',
            },
            {
                script: Now.include('./scripts/012b07731be3d210687b9866b04bcbf2.js'),
                application: '35aa573fd7802200bdbaee5b5e610375',
                errorHandlingType: 'stop_the_action',
                required_run_time: 'instance',
                inputVariables: {
                    request: {
                        label: 'request',
                        value: wfa.dataPill(params.inputs.bulk_request, 'reference'),
                    },
                },
                outputVariables: {
                    identities: FlowArray({
                        $id: '5e8b8b731be3d210687b9866b04bcbca',
                        co_type_name: 'FD9a8b8b73ece3d210d3ad1f679df487ca',
                        elementType: StringColumn({
                            label: 'sys_id',
                        }),
                        label: 'Identities',
                        childName: 'sys_id',
                    }),
                },
            }
        )
        wfa.assignActionOutputs(params.outputs, {
            identities: wfa.dataPill(script_step.identities, 'array.string'),
        })
    }
)
