import { Action, wfa, actionStep } from '@servicenow/sdk/automation'
import { ReferenceColumn, StringColumn } from '@servicenow/sdk/core'

export const update_request_with_systems_access_assets = Action(
    {
        $id: Now.ID['ba2be0361b280a506962fe60cd4bcba3'],
        name: 'Alert Process Decision Table Response',
        internalName: 'update_request_with_systems__access__assets',
        annotation: 'Update Request with Systems , Access Levels , Assets using Decision Matrix Response',
        inputs: {
            system1: ReferenceColumn({
                label: 'System',
                referenceTable: 'x_aleen_snguardian_system',
            }),
            system_action: ReferenceColumn({
                label: 'System Action',
                referenceTable: 'x_aleen_snguardian_request_entity_action',
            }),
            access_level: ReferenceColumn({
                label: 'Access Level',
                referenceTable: 'x_aleen_snguardian_access_level',
            }),
            access_level_action: ReferenceColumn({
                label: 'Access Level Action',
                referenceTable: 'x_aleen_snguardian_request_entity_action',
            }),
            asset_action: StringColumn({
                label: 'Asset Action',
                maxLength: 8000,
            }),
            data: StringColumn({
                label: 'data',
                maxLength: 8000,
            }),
        },
        outputs: {
            result: StringColumn({
                label: 'result',
                maxLength: 8000,
            }),
        },
        masterSnapshot: 'f26de0ba1b280a506962fe60cd4bcb42',
    },
    (params) => {
        const script_step = wfa.actionStep(
            actionStep.script,
            {
                $id: Now.ID['26dce47a1b280a506962fe60cd4bcbdd'],
                label: 'Script step',
            },
            {
                script: Now.include('./scripts/26dce47a1b280a506962fe60cd4bcbdd.js'),
                application: '35aa573fd7802200bdbaee5b5e610375',
                errorHandlingType: 'stop_the_action',
                required_run_time: 'instance',
                inputVariables: {
                    access_level: {
                        label: 'access_level',
                        value: wfa.dataPill(params.inputs.access_level, 'reference'),
                    },
                    data: {
                        label: 'data',
                        value: wfa.dataPill(params.inputs.data, 'string'),
                    },
                    system_action: {
                        label: 'system_action',
                        value: wfa.dataPill(params.inputs.system_action, 'reference'),
                    },
                    asset_action: {
                        label: 'asset_action',
                        value: wfa.dataPill(params.inputs.asset_action, 'string'),
                    },
                    system: {
                        label: 'system',
                        value: wfa.dataPill(params.inputs.system1, 'reference'),
                    },
                    access_level_action: {
                        label: 'access_level_action',
                        value: wfa.dataPill(params.inputs.access_level_action, 'reference'),
                    },
                },
                outputVariables: {
                    result: StringColumn({
                        label: 'result',
                        maxLength: 8000,
                    }),
                },
            }
        )
        wfa.assignActionOutputs(params.outputs, {
            result: wfa.dataPill(script_step.result, 'string'),
        })
    }
)
