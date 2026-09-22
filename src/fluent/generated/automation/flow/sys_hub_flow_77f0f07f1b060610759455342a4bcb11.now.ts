import { Flow, wfa, trigger, action } from '@servicenow/sdk/automation'
import { StringColumn } from '@servicenow/sdk/core'

Flow(
    {
        $id: Now.ID['77f0f07f1b060610759455342a4bcb11'],
        name: 'Alert Asset Review :: Process Review Action',
        internalName: 'asset_review__process_review_action',
        description: 'Expiry Badge Review',
        runAs: 'system',
        masterSnapshot: 'b7f33c881b9286106962fe60cd4bcb98',
        flowVariables: {
            triggerneeded: StringColumn({
                label: 'TriggerNeeded',
                maxLength: 8000,
            }),
        },
    },
    wfa.trigger(
        trigger.record.updated,
        {
            $id: Now.ID['86ca9a87470b7210f487c24fe16d43dd'],
        },
        {
            table: 'x_aleen_snguardian_identity_asset',
            condition:
                'review_action=6b7f8ed51bbc8210759455342a4bcb27^ORreview_action=237f8ed51bbc8210759455342a4bcb28^ORreview_action=58ecb4361ba98a50759455342a4bcb5f^review_status=077279e01b9946106962fe60cd4bcb94',
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
                $id: Now.ID['82ca9a87470b7210f487c24fe16d43e4'],
                uuid: '85577773-bbaa-4076-a1a5-9fd49703ccfc',
            },
            {
                table: 'x_aleen_snguardian_request_entity_action',
                conditions: 'code=TOBEREVIEWED',
                sort_column: '',
                sort_type: 'sort_asc',
                if_multiple_records_are_found_action: 'use_first_record',
                dont_fail_flow_on_error: false,
            }
        )
        wfa.flowLogic.setFlowVariables(
            {
                $id: Now.ID['02ca9a87470b7210f487c24fe16d43e8'],
            },
            _params.flowVariables,
            {
                triggerneeded: 'NO',
            }
        )
        wfa.flowLogic.forEach(
            wfa.dataPill(_params.trigger.changed_fields, 'array.object'),
            {
                annotation: '',
                $id: Now.ID['8eca9a87470b7210f487c24fe16d43f7'],
            },
            (item_3) => {
                wfa.flowLogic.if(
                    {
                        label: 'Previous action was to be Reviewed',
                        condition: `${wfa.dataPill(item_3.field_name, 'string')}=review_action^${wfa.dataPill(item_3.previous_value, 'string')}=${wfa.dataPill(actionInstance_1.Record.sys_id, 'GUID')}`,
                        annotation: '',
                        $id: Now.ID['0aca9a87470b7210f487c24fe16d43fb'],
                        uuid: 'becee35d-25e8-481a-8c35-ddeeac87431e',
                    },
                    () => {
                        wfa.flowLogic.setFlowVariables(
                            {
                                $id: Now.ID['8aca9a87470b7210f487c24fe16d43fe'],
                            },
                            _params.flowVariables,
                            {
                                triggerneeded: 'YES',
                            }
                        )
                    }
                )
            }
        )
        wfa.flowLogic.if(
            {
                label: 'Previous state was to be reviewed',
                condition: `${wfa.dataPill(_params.flowVariables.triggerneeded, 'string')}=YES`,
                annotation: '',
                $id: Now.ID['cecada87470b7210f487c24fe16d4301'],
                uuid: '2f89fbb5-4a5b-461d-9754-e5e7309b7953',
            },
            () => {
                wfa.flowLogic.if(
                    {
                        label: 'Review action is to be updated or deleted',
                        condition: `${wfa.dataPill(_params.trigger.current.review_action.code, 'string')}=UPDATE^NQ${wfa.dataPill(_params.trigger.current.review_action.code, 'string')}=DELETE`,
                        annotation: '',
                        $id: Now.ID['06cada87470b7210f487c24fe16d4305'],
                        uuid: 'bd93d97a-0adc-4366-8e25-295f9d03f7a8',
                    },
                    () => {
                        wfa.action(
                            action.core.updateRecord,
                            {
                                $id: Now.ID['42cada87470b7210f487c24fe16d4306'],
                                uuid: '2f5d1bb1-8ee1-48c0-9290-38a420dd2b13',
                            },
                            {
                                record: wfa.dataPill(_params.trigger.current, 'reference'),
                                table_name: 'x_aleen_snguardian_identity_asset',
                                values: TemplateValue({
                                    review_status:
                                        '{"display":"Completed","value":"57a2f1241b9946106962fe60cd4bcb55","sys_id":"57a2f1241b9946106962fe60cd4bcb55"}',
                                    provisioning_action: wfa.dataPill(
                                        _params.trigger.current.review_action,
                                        'reference'
                                    ),
                                    review_log: wfa.inlineScript(`/*
**Access Flow/Action data using the fd_data object. Script must return a value. 
**Order number is offset by +1 in Error Handling Section.
**Available options display upon pressing "." after fd_data
**example: var shortDesc = fd_data.trigger.current.short_description;
**return shortDesc;
*/
var message = "Process Review Action flow Update ["+ gs.getUser().getName() + '] marked review  action as [ ' + fd_data.trigger.current.review_action.name + '] as part of review task ' + fd_data.trigger.current.review_task.number ;
return message;`),
                                }),
                            }
                        )
                    }
                )
                wfa.flowLogic.else(
                    {
                        annotation: '',
                        $id: Now.ID['42cada87470b7210f487c24fe16d4309'],
                        uuid: '07e242f7-7bc9-49c5-b80c-175a64aeeef2',
                    },
                    () => {
                        wfa.action(
                            action.core.updateRecord,
                            {
                                $id: Now.ID['c6cada87470b7210f487c24fe16d4309'],
                                uuid: 'a0799f54-6792-485e-a7a2-232ecc6fd7b2',
                            },
                            {
                                record: wfa.dataPill(_params.trigger.current, 'reference'),
                                table_name: 'x_aleen_snguardian_identity_asset',
                                values: TemplateValue({
                                    review_status:
                                        '{"display":"Completed","value":"57a2f1241b9946106962fe60cd4bcb55","sys_id":"57a2f1241b9946106962fe60cd4bcb55"}',
                                    review_log: wfa.inlineScript(`/*
**Access Flow/Action data using the fd_data object. Script must return a value. 
**Order number is offset by +1 in Error Handling Section.
**Available options display upon pressing "." after fd_data
**example: var shortDesc = fd_data.trigger.current.short_description;
**return shortDesc;
*/
var message = "Process Review Action flow Update ["+ gs.getUser().getName() + '] marked review  action as [ ' + fd_data.trigger.current.review_action.name + '] as part of review task ' + fd_data.trigger.current.review_task.number ;
return message;`),
                                }),
                            }
                        )
                    }
                )
            }
        )
    }
)
