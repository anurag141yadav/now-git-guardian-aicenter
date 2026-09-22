import { Action, FlowArray, FlowObject, wfa, actionStep } from '@servicenow/sdk/automation'
import { ReferenceColumn, StringColumn } from '@servicenow/sdk/core'

export const process_area_owner_change_access_data = Action(
    {
        $id: Now.ID['b57202961bbe0210bf7ea82b234bcb97'],
        name: 'Alert Process Area Owner Access Request',
        internalName: 'process_area_owner_change_access_data',
        inputs: {
            variable: ReferenceColumn({
                label: 'variable',
                referenceTable: 'x_aleen_snguardian_request',
            }),
        },
        outputs: {
            result: FlowArray({
                $id: '039f63bb1bb60610207b2179b04bcb83',
                co_type_name: 'FD4f9f63bb08b60610a2cf7a6aff5af082',
                elementType: FlowObject({
                    fields: {
                        approver: StringColumn({
                            label: 'approver',
                        }),
                        accessLevelList: FlowArray({
                            elementType: FlowObject({
                                fields: {
                                    access_level: StringColumn({
                                        label: 'access_level',
                                    }),
                                    access_valid_from: StringColumn({
                                        label: 'access_valid_from',
                                    }),
                                    access_action: StringColumn({
                                        label: 'access_action',
                                    }),
                                    access_record_id: StringColumn({
                                        label: 'access_record_id',
                                    }),
                                    access_record_status: StringColumn({
                                        label: 'access_record_status',
                                    }),
                                    access_valid_to: StringColumn({
                                        label: 'access_valid_to',
                                    }),
                                    associated_asset: StringColumn({
                                        label: 'associated_asset',
                                    }),
                                },
                                label: 'access',
                            }),
                            label: 'accessLevelList',
                            childName: 'access',
                        }),
                    },
                    label: 'request',
                }),
                label: 'result',
                childName: 'request',
            }),
        },
        masterSnapshot: '8b778eda1bbe0210bf7ea82b234bcba1',
    },
    (params) => {
        const script_step = wfa.actionStep(
            actionStep.script,
            {
                $id: Now.ID['d23382d61bbe0210bf7ea82b234bcb01'],
                label: 'Script step',
            },
            {
                application: '35aa573fd7802200bdbaee5b5e610375',
                script: Now.include('./scripts/d23382d61bbe0210bf7ea82b234bcb01.js'),
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
                        $id: 'b7ddcfab1b76c210207b2179b04bcb6e',
                        co_type_name: 'FDf3ddcfabde76c21028130a30149d0d6e',
                        elementType: FlowObject({
                            fields: {
                                approver: StringColumn({
                                    label: 'approver',
                                }),
                                accessLevelList: FlowArray({
                                    elementType: FlowObject({
                                        fields: {
                                            access_level: StringColumn({
                                                label: 'access_level',
                                            }),
                                            access_valid_from: StringColumn({
                                                label: 'access_valid_from',
                                            }),
                                            access_action: StringColumn({
                                                label: 'access_action',
                                            }),
                                            access_record_id: StringColumn({
                                                label: 'access_record_id',
                                            }),
                                            access_record_status: StringColumn({
                                                label: 'access_record_status',
                                            }),
                                            access_valid_to: StringColumn({
                                                label: 'access_valid_to',
                                            }),
                                            associated_asset: StringColumn({
                                                label: 'associated_asset',
                                            }),
                                        },
                                        label: 'access',
                                    }),
                                    label: 'accessLevelList',
                                    childName: 'access',
                                }),
                            },
                            label: 'request',
                        }),
                        label: 'response',
                        childName: 'request',
                    }),
                },
            }
        )
        wfa.assignActionOutputs(params.outputs, {
            result: wfa.dataPill(script_step.response, 'array.object'),
        })
    }
)
