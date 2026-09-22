import { Action, wfa, actionStep } from '@servicenow/sdk/automation'
import { StringColumn } from '@servicenow/sdk/core'

export const updatedocumentid = Action(
    {
        $id: Now.ID['fa5090581b788e506962fe60cd4bcb23'],
        name: 'Alert UpdateDocumentID',
        internalName: 'updatedocumentid',
        inputs: {
            tablename: StringColumn({
                label: 'TableName',
                mandatory: true,
                maxLength: 8000,
            }),
            recordid: StringColumn({
                label: 'RecordID',
                mandatory: true,
                maxLength: 8000,
            }),
            documenttablename: StringColumn({
                label: 'DocumentTableName',
                mandatory: true,
                maxLength: 8000,
            }),
            documentid: StringColumn({
                label: 'DocumentID',
                mandatory: true,
                maxLength: 8000,
            }),
        },
        outputs: {},
        masterSnapshot: '7a82d4181bb84a50759455342a4bcb6f',
    },
    (params) => {
        wfa.actionStep(
            actionStep.script,
            {
                $id: Now.ID['b49118d41bb84a50759455342a4bcb08'],
                label: 'Script step',
            },
            {
                script: Now.include('./scripts/b49118d41bb84a50759455342a4bcb08.js'),
                application: '35aa573fd7802200bdbaee5b5e610375',
                errorHandlingType: 'stop_the_action',
                required_run_time: 'instance',
                inputVariables: {
                    DocumentID: {
                        label: 'DocumentID',
                        value: wfa.dataPill(params.inputs.documentid, 'string'),
                    },
                    TableName: {
                        label: 'TableName',
                        value: wfa.dataPill(params.inputs.tablename, 'string'),
                    },
                    DocumentTableName: {
                        label: 'DocumentTableName',
                        value: wfa.dataPill(params.inputs.documenttablename, 'string'),
                    },
                    RecordID: {
                        label: 'RecordID',
                        value: wfa.dataPill(params.inputs.recordid, 'string'),
                    },
                },
            }
        )
    }
)
