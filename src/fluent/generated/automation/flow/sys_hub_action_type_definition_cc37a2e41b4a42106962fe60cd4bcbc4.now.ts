import { Action, FlowArray, FlowObject, wfa, actionStep } from '@servicenow/sdk/automation'
import { ReferenceColumn, StringColumn } from '@servicenow/sdk/core'

export const process_new_badge_request_data = Action(
    {
        $id: Now.ID['cc37a2e41b4a42106962fe60cd4bcbc4'],
        name: 'Alert Process New Badge Request Data',
        internalName: 'process_new_badge_request_data',
        inputs: {
            variable: ReferenceColumn({
                label: 'variable',
                referenceTable: 'x_aleen_snguardian_request',
            }),
        },
        outputs: {
            result: FlowArray({
                $id: '9c37e2e41b4a42106962fe60cd4bcb35',
                co_type_name: 'FDd837e2e40d4a4210320d20e55a46bc35',
                elementType: FlowObject({
                    fields: {
                        record_id: StringColumn({
                            label: 'record_id',
                        }),
                        access: StringColumn({
                            label: 'asset',
                        }),
                        valid_to: StringColumn({
                            label: 'valid_to',
                        }),
                        action_code: StringColumn({
                            label: 'action_code',
                        }),
                        action: StringColumn({
                            label: 'action',
                        }),
                        valid_from: StringColumn({
                            label: 'valid_from',
                        }),
                        status: StringColumn({
                            label: 'status',
                        }),
                    },
                    label: 'asset',
                }),
                label: 'result',
                childName: 'access',
            }),
        },
        masterSnapshot: 'f12daa6c1b4a42106962fe60cd4bcb87',
    },
    (params) => {
        const script_step = wfa.actionStep(
            actionStep.script,
            {
                $id: Now.ID['4037e2e41b4a42106962fe60cd4bcb12'],
                label: 'Script step',
            },
            {
                script: Now.include('./scripts/4037e2e41b4a42106962fe60cd4bcb12.js'),
                application: '35aa573fd7802200bdbaee5b5e610375',
                errorHandlingType: 'stop_the_action',
                required_run_time: 'instance',
                inputVariables: {
                    record: {
                        label: 'record',
                        value: wfa.dataPill(params.inputs.variable, 'reference'),
                    },
                },
                outputVariables: {
                    response: FlowArray({
                        $id: '5c37e2e41b4a42106962fe60cd4bcb1a',
                        co_type_name: 'FD9837e2e4f24a42106887ccf312a2311a',
                        elementType: FlowObject({
                            fields: {
                                record_id: StringColumn({
                                    label: 'record_id',
                                }),
                                access: StringColumn({
                                    label: 'asset',
                                }),
                                valid_to: StringColumn({
                                    label: 'valid_to',
                                }),
                                action_code: StringColumn({
                                    label: 'action_code',
                                }),
                                action: StringColumn({
                                    label: 'action',
                                }),
                                valid_from: StringColumn({
                                    label: 'valid_from',
                                }),
                                status: StringColumn({
                                    label: 'status',
                                }),
                            },
                            label: 'asset',
                            mandatory: true,
                        }),
                        label: 'response',
                        mandatory: true,
                        childName: 'access',
                    }),
                },
            }
        )
        wfa.assignActionOutputs(params.outputs, {
            result: wfa.dataPill(script_step.response, 'array.object'),
        })
    }
)
