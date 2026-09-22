import { Action, wfa, actionStep } from '@servicenow/sdk/automation'
import { ReferenceColumn, StringColumn, BooleanColumn } from '@servicenow/sdk/core'

export const process_temp_worker_request_variables_as_user_importset = Action(
    {
        $id: Now.ID['e6a1fd131ba48650759455342a4bcb65'],
        name: 'Alert Process Temp worker Variables as User Import Set',
        internalName: 'process_temp_worker_request_variables_as_user_importset',
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
            skipsystemprov: BooleanColumn({
                label: 'skipSystemProv',
            }),
        },
        outputs: {},
        masterSnapshot: 'a3c2b1d31ba48650759455342a4bcb05',
    },
    (params) => {
        wfa.actionStep(
            actionStep.script,
            {
                $id: Now.ID['ee92bd931ba48650759455342a4bcb8d'],
                label: 'Script step',
            },
            {
                script: Now.include('./scripts/ee92bd931ba48650759455342a4bcb8d.js'),
                application: '35aa573fd7802200bdbaee5b5e610375',
                errorHandlingType: 'dont_stop_the_action',
                required_run_time: 'instance',
                inputVariables: {
                    record: {
                        label: 'record',
                        value: wfa.dataPill(params.inputs.variable, 'reference'),
                    },
                    skipSystemProv: {
                        label: 'skipSystemProv',
                        value: wfa.dataPill(params.inputs.skipsystemprov, 'boolean'),
                    },
                    DocumentTableName: {
                        label: 'DocumentTableName',
                        value: wfa.dataPill(params.inputs.documenttablename, 'string'),
                    },
                    DcoumentNumber: {
                        label: 'DcoumentNumber',
                        value: wfa.dataPill(params.inputs.documentnumber, 'string'),
                    },
                    DocumentID: {
                        label: 'DocumentID',
                        value: wfa.dataPill(params.inputs.documentid, 'string'),
                    },
                },
            }
        )
    }
)
