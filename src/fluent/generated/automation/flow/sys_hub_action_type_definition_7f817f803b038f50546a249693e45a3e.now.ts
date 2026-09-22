import { Action, FlowArray, FlowObject, wfa, actionStep } from '@servicenow/sdk/automation'
import { ReferenceColumn, StringColumn } from '@servicenow/sdk/core'

export const alert_process_security_system_access_request_data = Action(
    {
        $id: Now.ID['7f817f803b038f50546a249693e45a3e'],
        name: 'Alert Process Security System Access Request Data',
        internalName: 'alert_process_security_system_access_request_data',
        inputs: {
            variable: ReferenceColumn({
                label: 'variable',
                referenceTable: 'x_aleen_snguardian_request',
            }),
        },
        outputs: {
            result: FlowArray({
                $id: 'c0917f803b038f50546a249693e45ae3',
                co_type_name: 'FDcc917f80f1038f50041ed5b04ea51ee2',
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
        masterSnapshot: '1f53f3843b038f50546a249693e45aa3',
    },
    (params) => {
        const script_step = wfa.actionStep(
            actionStep.script,
            {
                $id: Now.ID['44917f803b038f50546a249693e45ab3'],
                label: 'Script step',
            },
            {
                application: '35aa573fd7802200bdbaee5b5e610375',
                script: Now.include('./scripts/44917f803b038f50546a249693e45ab3.js'),
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
                        $id: '80917f803b038f50546a249693e45ac4',
                        co_type_name: 'FD8c917f8054038f506e6d42353c618fc3',
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
