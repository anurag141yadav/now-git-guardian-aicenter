import { Flow, wfa, trigger, action } from '@servicenow/sdk/automation'
import { StringColumn } from '@servicenow/sdk/core'

Flow(
    {
        $id: Now.ID['091505771b860610759455342a4bcb78'],
        name: 'Alert Asset Review :: Process review status change',
        internalName: 'asset_review__process_review_status_change',
        runAs: 'system',
        masterSnapshot: '2516308c1b9286106962fe60cd4bcb50',
        flowVariables: {
            statuschangefrompending1: StringColumn({
                label: 'StatusChangeFromPending',
                maxLength: 8000,
            }),
            allcompleted: StringColumn({
                label: 'AllCompleted',
                maxLength: 8000,
            }),
        },
    },
    wfa.trigger(
        trigger.record.updated,
        {
            $id: Now.ID['52d2191f4707f21051a3e84d416d43bd'],
        },
        {
            table: 'x_aleen_snguardian_identity_asset',
            condition: 'review_status=57a2f1241b9946106962fe60cd4bcb55',
            run_on_extended: 'false',
            run_flow_in: 'any',
            run_when_user_list: [],
            run_when_setting: 'both',
            run_when_user_setting: 'any',
            trigger_strategy: 'every',
        }
    ),
    (_params) => {
        const actionInstance_1 = wfa.action(
            action.core.lookUpRecord,
            {
                $id: Now.ID['ded2191f4707f21051a3e84d416d43c5'],
                uuid: '46c8d094-4d9d-47a0-ada7-055461b882f6',
            },
            {
                table: 'x_aleen_snguardian_status_code',
                conditions: 'code=REVIEW-PENDING',
                sort_column: '',
                sort_type: 'sort_asc',
                if_multiple_records_are_found_action: 'use_first_record',
                dont_fail_flow_on_error: false,
            }
        )
        wfa.flowLogic.setFlowVariables(
            {
                $id: Now.ID['1ad2191f4707f21051a3e84d416d43ca'],
            },
            _params.flowVariables,
            {
                statuschangefrompending1: 'NO',
            }
        )
        wfa.flowLogic.forEach(
            wfa.dataPill(_params.trigger.changed_fields, 'array.object'),
            {
                annotation: '',
                $id: Now.ID['9ed2191f4707f21051a3e84d416d43cd'],
            },
            (item_3) => {
                wfa.flowLogic.if(
                    {
                        label: 'Previous status was REVIEW-PENDING',
                        condition: `${wfa.dataPill(item_3.field_name, 'string')}=review_status^${wfa.dataPill(item_3.previous_value, 'string')}=${wfa.dataPill(actionInstance_1.Record.sys_id, 'GUID')}`,
                        annotation: '',
                        $id: Now.ID['d6d2191f4707f21051a3e84d416d43d1'],
                        uuid: 'c39f9311-e1a4-483d-9adb-5a7c91ec8f33',
                    },
                    () => {
                        wfa.flowLogic.setFlowVariables(
                            {
                                $id: Now.ID['5ad2191f4707f21051a3e84d416d43d4'],
                            },
                            _params.flowVariables,
                            {
                                statuschangefrompending1: 'YES',
                            }
                        )
                    }
                )
            }
        )
        wfa.flowLogic.if(
            {
                label: 'Status change from pending',
                condition: `${wfa.dataPill(_params.flowVariables.statuschangefrompending1, 'string')}=YES`,
                annotation: '',
                $id: Now.ID['5ed2191f4707f21051a3e84d416d43d7'],
                uuid: 'b2c57099-0701-48d6-8800-5e848693cd0b',
            },
            () => {
                const actionInstance_7 = wfa.action(
                    action.core.lookUpRecord,
                    {
                        $id: Now.ID['d2d2191f4707f21051a3e84d416d43d8'],
                        uuid: 'c5c6c22f-eec2-4538-9098-d48134526867',
                    },
                    {
                        table: 'x_aleen_snguardian_review_task',
                        conditions: `sys_id=${wfa.dataPill(_params.trigger.current.review_task.sys_id, 'GUID')}`,
                        sort_column: '',
                        sort_type: 'sort_asc',
                        if_multiple_records_are_found_action: 'use_first_record',
                        dont_fail_flow_on_error: false,
                    }
                )
                const actionInstance_8 = wfa.action(
                    'b8a916761b21ca50759455342a4bcbbd',
                    {
                        $id: Now.ID['dad2191f4707f21051a3e84d416d43d8'],
                        uuid: '8d4dc19a-4a9a-4f45-a130-6c691d05b9e9',
                    },
                    {}
                )
                wfa.flowLogic.waitForADuration({
                    $id: Now.ID['96d2191f4707f21051a3e84d416d43de'],
                    uuid: 'b07cf27f-39ca-4d67-b76c-93bf72110b0c',
                    durationType: 'explicit_duration',
                    duration: wfa.dataPill(actionInstance_8.variable, 'glide_duration'),
                })
                const actionInstance_10 = wfa.action(
                    action.core.updateRecord,
                    {
                        $id: Now.ID['d2d2191f4707f21051a3e84d416d43df'],
                        uuid: '5c73cda2-54e1-482f-8db1-56895c89266b',
                    },
                    {
                        record: wfa.dataPill(actionInstance_7.Record, 'reference'),
                        table_name: 'x_aleen_snguardian_review_task',
                        values: TemplateValue({
                            work_notes: wfa.inlineScript(`/*
**Access Flow/Action data using the fd_data object. Script must return a value. 
**Order number is offset by +1 in Error Handling Section.
**Available options display upon pressing "." after fd_data
**example: var shortDesc = fd_data.trigger.current.short_description;
**return shortDesc;
*/
var message = gs.getUser().getName() + ' marked review task for asset  [ ' + fd_data.trigger.current.asset.number + ']  for the  identity[' + fd_data.trigger.current.identity.number +'] as  ['+fd_data.trigger.current.review_status.name+']';
return message;`),
                            completed: wfa.inlineScript(`/*
**Access Flow/Action data using the fd_data object. Script must return a value. 
**Order number is offset by +1 in Error Handling Section.
**Available options display upon pressing "." after fd_data
**example: var shortDesc = fd_data.trigger.current.short_description;
**return shortDesc;
*/
return fd_data._7__look_up_record.record.completed + 1;`),
                            pending: wfa.inlineScript(`/*
**Access Flow/Action data using the fd_data object. Script must return a value. 
**Order number is offset by +1 in Error Handling Section.
**Available options display upon pressing "." after fd_data
**example: var shortDesc = fd_data.trigger.current.short_description;
**return shortDesc;
*/
return fd_data._7__look_up_record.record.pending -1;`),
                        }),
                    }
                )
                const actionInstance_11 = wfa.action(
                    action.core.updateRecord,
                    {
                        $id: Now.ID['dad2191f4707f21051a3e84d416d43df'],
                        uuid: '0927399a-382b-465b-8436-b3327bdbb677',
                    },
                    {
                        record: wfa.dataPill(_params.trigger.current, 'reference'),
                        table_name: 'x_aleen_snguardian_identity_asset',
                        values: TemplateValue({
                            last_reviewed_by: wfa.inlineScript(`/*
**Access Flow/Action data using the fd_data object. Script must return a value. 
**Order number is offset by +1 in Error Handling Section.
**Available options display upon pressing "." after fd_data
**example: var shortDesc = fd_data.trigger.current.short_description;
**return shortDesc;
*/
return gs.getUserID();`),
                            last_reviewed_on: wfa.inlineScript(`/*
**Access Flow/Action data using the fd_data object. Script must return a value. 
**Order number is offset by +1 in Error Handling Section.
**Available options display upon pressing "." after fd_data
**example: var shortDesc = fd_data.trigger.current.short_description;
**return shortDesc;
*/
return new GlideDateTime();`),
                            review_log: wfa.inlineScript(`/*
**Access Flow/Action data using the fd_data object. Script must return a value. 
**Order number is offset by +1 in Error Handling Section.
**Available options display upon pressing "." after fd_data
**example: var shortDesc = fd_data.trigger.current.short_description;
**return shortDesc;
*/
var message = gs.getUser().getName() + ' reviewed as [ ' + fd_data.trigger.current.review_status.name + '] as part of review task ' + fd_data.trigger.current.review_task.number ;
return message;`),
                        }),
                    }
                )
                wfa.flowLogic.if(
                    {
                        label: 'Review status changed directly mark review action as NOACTIONNEEDED',
                        condition: `${wfa.dataPill(actionInstance_11.record.review_action.code, 'string')}=TOBEREVIEWED`,
                        annotation: '',
                        $id: Now.ID['52d2191f4707f21051a3e84d416d43e3'],
                        uuid: '10861b25-89be-4616-82cd-3a9562e4e879',
                    },
                    () => {
                        wfa.action(
                            action.core.updateRecord,
                            {
                                $id: Now.ID['d6d2191f4707f21051a3e84d416d43e3'],
                                uuid: '027a34ba-e0a7-4026-ab44-dbbf111dbcdd',
                            },
                            {
                                record: wfa.dataPill(_params.trigger.current, 'reference'),
                                table_name: 'x_aleen_snguardian_identity_asset',
                                values: TemplateValue({
                                    review_action:
                                        '{"display":"No Action Needed","value":"58ecb4361ba98a50759455342a4bcb5f","sys_id":"58ecb4361ba98a50759455342a4bcb5f"}',
                                }),
                            }
                        )
                    }
                )
                wfa.flowLogic.if(
                    {
                        label: 'No pending items mark review task as completed',
                        condition: `${wfa.dataPill(actionInstance_10.record.pending, 'integer')}=0`,
                        annotation: '',
                        $id: Now.ID['5ed2191f4707f21051a3e84d416d43e6'],
                        uuid: '7942d3cc-4c98-4f63-b62e-2b35f54143a5',
                    },
                    () => {
                        const actionInstance_15 = wfa.action(
                            action.core.updateRecord,
                            {
                                $id: Now.ID['d2d2191f4707f21051a3e84d416d43e7'],
                                uuid: '3142ee94-b266-49bf-b2db-20d60451909b',
                            },
                            {
                                record: wfa.dataPill(actionInstance_10.record, 'reference'),
                                table_name: 'x_aleen_snguardian_review_task',
                                values: TemplateValue({
                                    status: '{"display":"Completed","value":"57a2f1241b9946106962fe60cd4bcb55","sys_id":"57a2f1241b9946106962fe60cd4bcb55"}',
                                }),
                            }
                        )
                        wfa.action(
                            action.core.updateRecord,
                            {
                                $id: Now.ID['dad2191f4707f21051a3e84d416d43e7'],
                                uuid: 'dc4858f0-d1b9-4f1f-a596-a6662070e9af',
                            },
                            {
                                record: wfa.dataPill(actionInstance_7.Record.review, 'reference'),
                                table_name: 'x_aleen_snguardian_review',
                                values: TemplateValue({
                                    work_notes: `Review Task [${wfa.dataPill(actionInstance_7.Record.number, 'string')}] is completed `,
                                }),
                            }
                        )
                        wfa.flowLogic.setFlowVariables(
                            {
                                $id: Now.ID['96d2191f4707f21051a3e84d416d43f7'],
                            },
                            _params.flowVariables,
                            {
                                allcompleted: 'YES',
                            }
                        )
                        const actionInstance_18 = wfa.action(
                            action.core.lookUpRecords,
                            {
                                $id: Now.ID['16d2191f4707f21051a3e84d416d43f8'],
                                uuid: '39f71766-a53b-4349-a096-4cc99631b73d',
                            },
                            {
                                table: 'x_aleen_snguardian_review_task',
                                conditions: `review=${wfa.dataPill(actionInstance_15.record.review, 'reference')}`,
                                sort_column: '',
                                sort_type: 'sort_asc',
                                max_results: 1000,
                            }
                        )
                        wfa.flowLogic.forEach(
                            wfa.dataPill(actionInstance_18.Records, 'records'),
                            {
                                annotation: '',
                                $id: Now.ID['56d2191f4707f21051a3e84d416d43fb'],
                            },
                            (item_19) => {
                                wfa.flowLogic.if(
                                    {
                                        label: 'check status of review tasks',
                                        condition: `${wfa.dataPill(item_19.pending, 'integer')}>0`,
                                        annotation: '',
                                        $id: Now.ID['5ad2191f4707f21051a3e84d416d43fe'],
                                        uuid: '9ffe3894-54ac-4b4e-9fcd-876191dc2f3f',
                                    },
                                    () => {
                                        wfa.flowLogic.setFlowVariables(
                                            {
                                                $id: Now.ID['dad2591f4707f21051a3e84d416d4301'],
                                            },
                                            _params.flowVariables,
                                            {
                                                allcompleted: 'NO',
                                            }
                                        )
                                    }
                                )
                            }
                        )
                        wfa.flowLogic.if(
                            {
                                label: 'Check status',
                                condition: `${wfa.dataPill(_params.flowVariables.allcompleted, 'string')}=YES`,
                                annotation: '',
                                $id: Now.ID['ded2591f4707f21051a3e84d416d4304'],
                                uuid: 'cce12851-63f7-406c-a916-0e1d3a3430de',
                            },
                            () => {
                                wfa.action(
                                    action.core.updateRecord,
                                    {
                                        $id: Now.ID['56d2591f4707f21051a3e84d416d4305'],
                                        uuid: 'fef59bb8-daf1-445c-9a29-d70eb363558f',
                                    },
                                    {
                                        record: wfa.dataPill(actionInstance_7.Record.review, 'reference'),
                                        table_name: 'x_aleen_snguardian_review',
                                        values: TemplateValue({
                                            status: '{"display":"Completed","value":"57a2f1241b9946106962fe60cd4bcb55","sys_id":"57a2f1241b9946106962fe60cd4bcb55"}',
                                            work_notes: 'Review completed',
                                        }),
                                    }
                                )
                            }
                        )
                    }
                )
            }
        )
    }
)
