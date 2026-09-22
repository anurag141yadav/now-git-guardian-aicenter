import { Flow, wfa, trigger, action } from '@servicenow/sdk/automation'
import { StringColumn } from '@servicenow/sdk/core'

Flow(
    {
        $id: Now.ID['d5e5de841b5a86106962fe60cd4bcb1d'],
        name: 'Alert Access Attestation Review :: Review Action Change',
        internalName: 'access_attestation_review__review_action_change',
        runAs: 'system',
        masterSnapshot: '0636660c1b9a86106962fe60cd4bcb77',
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
            $id: Now.ID['1f81595b4707f21051a3e84d416d436d'],
        },
        {
            table: 'x_aleen_snguardian_identity_attestation',
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
                $id: Now.ID['9781595b4707f21051a3e84d416d438e'],
                uuid: '68cc8e01-d6b4-49d4-bb08-43bf3769e25e',
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
                $id: Now.ID['5781595b4707f21051a3e84d416d4393'],
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
                $id: Now.ID['5381595b4707f21051a3e84d416d4397'],
            },
            (item_3) => {
                wfa.flowLogic.if(
                    {
                        label: 'Previos action was to be reviewed ',
                        condition: `${wfa.dataPill(item_3.field_name, 'string')}=review_action^${wfa.dataPill(item_3.previous_value, 'string')}=${wfa.dataPill(actionInstance_1.Record.sys_id, 'GUID')}`,
                        annotation: '',
                        $id: Now.ID['9b81595b4707f21051a3e84d416d439a'],
                        uuid: '693b26d0-883f-41af-b4e8-97b3edd933d5',
                    },
                    () => {
                        wfa.flowLogic.setFlowVariables(
                            {
                                $id: Now.ID['db81595b4707f21051a3e84d416d439d'],
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
                label: 'Previos state was to be reviewed',
                condition: `${wfa.dataPill(_params.flowVariables.triggerneeded, 'string')}=YES`,
                annotation: '',
                $id: Now.ID['df81595b4707f21051a3e84d416d43a0'],
                uuid: '52905907-67da-496c-bea5-10e76519d5ed',
            },
            () => {
                wfa.action(
                    action.core.updateRecord,
                    {
                        $id: Now.ID['1f81595b4707f21051a3e84d416d43a1'],
                        uuid: '5b582c8f-ac0e-4bfb-84a4-d771153c4b10',
                    },
                    {
                        record: wfa.dataPill(_params.trigger.current, 'reference'),
                        table_name: 'x_aleen_snguardian_identity_attestation',
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
