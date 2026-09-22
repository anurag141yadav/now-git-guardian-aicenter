import { Action, FlowArray, FlowObject, wfa, actionStep } from '@servicenow/sdk/automation'
import { ReferenceColumn, StringColumn } from '@servicenow/sdk/core'

export const process_change_access_request_data = Action(
    {
        $id: Now.ID['8516dbb21bb40210759455342a4bcbf3'],
        name: 'Alert Process Change Access Request Data',
        internalName: 'process_change_access_request_data',
        inputs: {
            variable: ReferenceColumn({
                label: 'variable',
                referenceTable: 'x_aleen_snguardian_request',
            }),
        },
        outputs: {
            result: FlowArray({
                $id: 'bc8a5fb61bb40210759455342a4bcbb5',
                co_type_name: 'FDf88a5fb654b402103d7f7d7057c66eb5',
                elementType: FlowObject({
                    fields: {
                        record_id: StringColumn({
                            label: 'record_id',
                        }),
                        access: StringColumn({
                            label: 'access',
                        }),
                        valid_to: StringColumn({
                            label: 'valid_to',
                        }),
                        action: StringColumn({
                            label: 'action',
                        }),
                        valid_from: StringColumn({
                            label: 'valid_from',
                        }),
                        associated_asset: StringColumn({
                            label: 'associated_asset',
                        }),
                        status: StringColumn({
                            label: 'status',
                        }),
                    },
                    label: 'access',
                }),
                label: 'result',
                childName: 'access',
            }),
        },
        masterSnapshot: '849adfb61bb40210759455342a4bcb1a',
    },
    (params) => {
        const script_step = wfa.actionStep(
            actionStep.script,
            {
                $id: Now.ID['5d169fb21bb40210759455342a4bcbc5'],
                label: 'Script step',
            },
            {
                script: Now.include('./scripts/5d169fb21bb40210759455342a4bcbc5.js'),
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
                        $id: 'a08a5fb61bb40210759455342a4bcba9',
                        co_type_name: 'FDec8a5fb62bb40210451e3da804d70aa8',
                        elementType: FlowObject({
                            fields: {
                                record_id: StringColumn({
                                    label: 'record_id',
                                }),
                                access: StringColumn({
                                    label: 'access',
                                }),
                                valid_to: StringColumn({
                                    label: 'valid_to',
                                }),
                                action: StringColumn({
                                    label: 'action',
                                }),
                                valid_from: StringColumn({
                                    label: 'valid_from',
                                }),
                                associated_asset: StringColumn({
                                    label: 'associated_asset',
                                }),
                                status: StringColumn({
                                    label: 'status',
                                }),
                            },
                            label: 'access',
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
