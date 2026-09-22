import { Flow, wfa, trigger, action } from '@servicenow/sdk/automation'
import { StringColumn } from '@servicenow/sdk/core'

Flow(
    {
        $id: Now.ID['9129164c1b5a86106962fe60cd4bcbb7'],
        name: 'Alert Access Attestation Review :: Review Status Change',
        internalName: 'access_attestation_review__review_status_change',
        runAs: 'system',
        masterSnapshot: '6916eec81b9a86106962fe60cd4bcb5d',
        flowVariables: {
            satuschangefrompending: StringColumn({
                label: 'SatusChangeFromPending',
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
            $id: Now.ID['9ea15d5b4707f21051a3e84d416d43a4'],
        },
        {
            table: 'x_aleen_snguardian_identity_attestation',
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
                $id: Now.ID['1aa15d5b4707f21051a3e84d416d43d2'],
                uuid: '108cada6-0fa3-406d-85bb-bc4bc72c55eb',
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
                $id: Now.ID['96a15d5b4707f21051a3e84d416d43d6'],
            },
            _params.flowVariables,
            {
                satuschangefrompending: 'NO',
            }
        )
        wfa.flowLogic.forEach(
            wfa.dataPill(_params.trigger.changed_fields, 'array.object'),
            {
                annotation: '',
                $id: Now.ID['1ea15d5b4707f21051a3e84d416d43d9'],
            },
            (item_3) => {
                wfa.flowLogic.if(
                    {
                        label: 'Previous status was Review Pending',
                        condition: `${wfa.dataPill(item_3.field_name, 'string')}=review_status^${wfa.dataPill(item_3.previous_value, 'string')}=${wfa.dataPill(actionInstance_1.Record.sys_id, 'GUID')}`,
                        annotation: '',
                        $id: Now.ID['1ea15d5b4707f21051a3e84d416d43e9'],
                        uuid: '465a77f0-ea31-4738-9322-153b87294303',
                    },
                    () => {
                        wfa.flowLogic.setFlowVariables(
                            {
                                $id: Now.ID['9ea15d5b4707f21051a3e84d416d43ec'],
                            },
                            _params.flowVariables,
                            {
                                satuschangefrompending: 'YES',
                            }
                        )
                    }
                )
            }
        )
        wfa.flowLogic.if(
            {
                label: 'Status change from Review Pending',
                condition: `${wfa.dataPill(_params.flowVariables.satuschangefrompending, 'string')}=YES`,
                annotation: '',
                $id: Now.ID['92a15d5b4707f21051a3e84d416d43f0'],
                uuid: 'f74ed23b-f050-4918-a993-3fd42e16b88d',
            },
            () => {
                const actionInstance_7 = wfa.action(
                    action.core.lookUpRecord,
                    {
                        $id: Now.ID['1aa15d5b4707f21051a3e84d416d43f0'],
                        uuid: 'af6e967f-247f-42d4-a523-2f5c665798d9',
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
                        $id: Now.ID['12a15d5b4707f21051a3e84d416d43f1'],
                        uuid: '60283561-fc70-4921-9aff-aeeac3008965',
                    },
                    {}
                )
                wfa.flowLogic.waitForADuration({
                    $id: Now.ID['daa15d5b4707f21051a3e84d416d43f6'],
                    uuid: 'bca81081-a657-4c32-b945-c8adc426b75c',
                    durationType: 'explicit_duration',
                    duration: wfa.dataPill(actionInstance_8.variable, 'glide_duration'),
                })
                const actionInstance_10 = wfa.action(
                    action.core.updateRecord,
                    {
                        $id: Now.ID['1aa15d5b4707f21051a3e84d416d43f7'],
                        uuid: '1671977f-e12c-4954-a972-5019df548cb0',
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
var message = gs.getUser().getName() + ' marked review task for Attestation [ ' + fd_data.trigger.current.assertion.code + ']  for the  identity[' + fd_data.trigger.current.identity.number +'] as  ['+fd_data.trigger.current.review_status.name+']';
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
                        $id: Now.ID['12a15d5b4707f21051a3e84d416d43f8'],
                        uuid: '23c5dc08-23b2-40b1-93fc-9dc1e84afbb6',
                    },
                    {
                        record: wfa.dataPill(_params.trigger.current, 'reference'),
                        table_name: 'x_aleen_snguardian_identity_attestation',
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
                        $id: Now.ID['96a15d5b4707f21051a3e84d416d43fb'],
                        uuid: '242222d6-2900-471c-ba74-4d8b19424c2a',
                    },
                    () => {
                        wfa.action(
                            action.core.updateRecord,
                            {
                                $id: Now.ID['1ea15d5b4707f21051a3e84d416d43fb'],
                                uuid: '3452b7a5-0226-474b-8a91-fc4f9d519963',
                            },
                            {
                                record: wfa.dataPill(_params.trigger.current, 'reference'),
                                table_name: 'x_aleen_snguardian_identity_attestation',
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
                        $id: Now.ID['92a15d5b4707f21051a3e84d416d43ff'],
                        uuid: 'b0742895-a4df-4c9d-8734-8e2e2364b613',
                    },
                    () => {
                        const actionInstance_15 = wfa.action(
                            action.core.updateRecord,
                            {
                                $id: Now.ID['1aa15d5b4707f21051a3e84d416d43ff'],
                                uuid: 'ec776b43-6703-4302-a1a9-674fddd9bd98',
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
                                $id: Now.ID['12a19d5b4707f21051a3e84d416d4300'],
                                uuid: 'b3bd99d8-31b2-4030-bec6-ec1dd4829880',
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
                                $id: Now.ID['daa19d5b4707f21051a3e84d416d430f'],
                            },
                            _params.flowVariables,
                            {
                                allcompleted: 'YES',
                            }
                        )
                        const actionInstance_18 = wfa.action(
                            action.core.lookUpRecords,
                            {
                                $id: Now.ID['5aa19d5b4707f21051a3e84d416d4310'],
                                uuid: 'd74ffbf8-e11f-4b24-b370-24c8ff6021b5',
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
                                $id: Now.ID['9aa19d5b4707f21051a3e84d416d4313'],
                            },
                            (item_19) => {
                                wfa.flowLogic.if(
                                    {
                                        label: 'check status of review tasks',
                                        condition: `${wfa.dataPill(item_19.pending, 'integer')}>0`,
                                        annotation: '',
                                        $id: Now.ID['9ea19d5b4707f21051a3e84d416d4316'],
                                        uuid: '5651e825-a49b-4bc8-a861-0d61a836bd59',
                                    },
                                    () => {
                                        wfa.flowLogic.setFlowVariables(
                                            {
                                                $id: Now.ID['12a19d5b4707f21051a3e84d416d431a'],
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
                                label: 'check status',
                                condition: `${wfa.dataPill(_params.flowVariables.allcompleted, 'string')}=YES`,
                                annotation: '',
                                $id: Now.ID['16a19d5b4707f21051a3e84d416d431d'],
                                uuid: 'd625ae80-86ea-40ac-95d2-a99ea639c0bb',
                            },
                            () => {
                                wfa.action(
                                    action.core.updateRecord,
                                    {
                                        $id: Now.ID['9aa19d5b4707f21051a3e84d416d431d'],
                                        uuid: '5bdc7ba6-94aa-4262-98fe-47baa5fe6716',
                                    },
                                    {
                                        record: wfa.dataPill(actionInstance_7.Record.review, 'reference'),
                                        table_name: 'x_aleen_snguardian_review',
                                        values: TemplateValue({
                                            status: '{"display":"Completed","value":"57a2f1241b9946106962fe60cd4bcb55","sys_id":"57a2f1241b9946106962fe60cd4bcb55"}',
                                            work_notes: 'Review Completed',
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
