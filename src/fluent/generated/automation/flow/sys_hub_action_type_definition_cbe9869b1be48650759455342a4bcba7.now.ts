import { Action, wfa, actionStep } from '@servicenow/sdk/automation'
import { ReferenceColumn, StringColumn } from '@servicenow/sdk/core'

export const process_user_updates_as_user_import_set = Action(
    {
        $id: Now.ID['cbe9869b1be48650759455342a4bcba7'],
        name: 'Alert Process user Updates as User Import Set',
        internalName: 'process_user_updates_as_user_import_set',
        inputs: {
            variable: ReferenceColumn({
                label: 'variable',
                referenceTable: 'x_aleen_snguardian_request',
            }),
            documenttablename: StringColumn({
                label: 'DocumentTableName',
                maxLength: 8000,
            }),
            documentid: StringColumn({
                label: 'DocumentID',
                maxLength: 8000,
            }),
            documentnumber: StringColumn({
                label: 'DocumentNumber',
                maxLength: 8000,
            }),
        },
        outputs: {},
        masterSnapshot: '634c025f1be48650759455342a4bcb9e',
    },
    (params) => {
        wfa.actionStep(
            actionStep.script,
            {
                $id: Now.ID['b62a0e9b1be48650759455342a4bcbdc'],
                label: 'Script step',
            },
            {
                application: '35aa573fd7802200bdbaee5b5e610375',
                script: Now.include('./scripts/b62a0e9b1be48650759455342a4bcbdc.js'),
                errorHandlingType: 'stop_the_action',
                required_run_time: 'instance',
                inputVariables: {
                    DcoumentNumber: {
                        label: 'DcoumentNumber',
                        value: wfa.dataPill(params.inputs.documentnumber, 'string'),
                    },
                    DocumentID: {
                        label: 'DocumentID',
                        value: wfa.dataPill(params.inputs.documentid, 'string'),
                    },
                    record: {
                        label: 'record',
                        value: wfa.dataPill(params.inputs.variable, 'reference'),
                    },
                    DocumentTableName: {
                        label: 'DocumentTableName',
                        value: wfa.dataPill(params.inputs.documenttablename, 'string'),
                    },
                },
            }
        )
    }
)
