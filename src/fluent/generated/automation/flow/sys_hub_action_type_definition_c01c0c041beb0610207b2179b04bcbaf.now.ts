import { Action, FlowArray, FlowObject, wfa, actionStep } from '@servicenow/sdk/automation'
import { ReferenceColumn, StringColumn, BooleanColumn } from '@servicenow/sdk/core'

export const process_nfc_badge_details = Action(
    {
        $id: Now.ID['c01c0c041beb0610207b2179b04bcbaf'],
        name: 'Alert Guardian Action Process NFC Assets',
        internalName: 'process_nfc_badge_details',
        inputs: {
            request: ReferenceColumn({
                label: 'request',
                referenceTable: 'x_aleen_snguardian_request',
            }),
        },
        outputs: {
            resultlistOutput: FlowArray({
                $id: 'a8e3ecd51b24d210207b2179b04bcb9c',
                co_type_name: 'FDe4e3ecd5e224d210b2145344f3552d9c',
                elementType: FlowObject({
                    fields: {
                        identity: StringColumn({
                            label: 'identity',
                        }),
                        valid_to: StringColumn({
                            label: 'valid_to',
                        }),
                        valid_from: StringColumn({
                            label: 'valid_from',
                        }),
                        asset: StringColumn({
                            label: 'asset',
                        }),
                    },
                    label: 'identityAsset',
                }),
                label: 'resultListOutput',
                childName: 'identityAsset',
            }),
            hasmrvs: BooleanColumn({
                label: 'Has Mrvs',
            }),
            iswebprov: BooleanColumn({
                label: 'Is Web Prov',
            }),
            mrvslength: StringColumn({
                label: 'mrvs Length',
                maxLength: 8000,
            }),
        },
        masterSnapshot: 'dc22d04c1beb0610207b2179b04bcb9a',
    },
    (params) => {
        const script_step = wfa.actionStep(
            actionStep.script,
            {
                $id: Now.ID['2212904c1beb0610207b2179b04bcbcc'],
                label: 'Script step',
            },
            {
                script: Now.include('./scripts/2212904c1beb0610207b2179b04bcbcc.js'),
                application: '35aa573fd7802200bdbaee5b5e610375',
                errorHandlingType: 'stop_the_action',
                required_run_time: 'instance',
                inputVariables: {
                    request: {
                        label: 'request',
                        value: wfa.dataPill(params.inputs.request, 'reference'),
                    },
                },
                outputVariables: {
                    hasmrvs: BooleanColumn({
                        label: 'hasMrvs',
                        maxLength: 40,
                    }),
                    resultlistoutput: FlowArray({
                        $id: '6cd6ec991b24d210207b2179b04bcb95',
                        co_type_name: 'FDa8d6ec995924d2101828c2754fd72b95',
                        elementType: FlowObject({
                            fields: {
                                identity: StringColumn({
                                    label: 'identity',
                                }),
                                valid_to: StringColumn({
                                    label: 'valid_to',
                                }),
                                valid_from: StringColumn({
                                    label: 'valid_from',
                                }),
                                asset: StringColumn({
                                    label: 'asset',
                                }),
                            },
                            label: 'identityAsset',
                        }),
                        label: 'resultListOutput',
                        childName: 'identityAsset',
                    }),
                    iswebprov: BooleanColumn({
                        label: 'isWebProv',
                        maxLength: 40,
                    }),
                    mrvssize: StringColumn({
                        label: 'mrvsSize',
                        maxLength: 8000,
                    }),
                },
            }
        )
        wfa.assignActionOutputs(params.outputs, {
            iswebprov: wfa.dataPill(script_step.iswebprov, 'boolean'),
            resultlistOutput: wfa.dataPill(script_step.resultlistoutput, 'array.object'),
            hasmrvs: wfa.dataPill(script_step.hasmrvs, 'boolean'),
            mrvslength: wfa.dataPill(script_step.mrvssize, 'string'),
        })
    }
)
