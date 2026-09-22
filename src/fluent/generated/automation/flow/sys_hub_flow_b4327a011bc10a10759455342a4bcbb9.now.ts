import { Flow, wfa, trigger, action } from '@servicenow/sdk/automation'

Flow(
    {
        $id: Now.ID['b4327a011bc10a10759455342a4bcbb9'],
        name: 'Alert Sync User Info Updates in down stream',
        internalName: 'sync_user_info_updates_in_down_stream',
        description: 'Update user information in the down streams',
        runAs: 'system',
        masterSnapshot: 'b985be051bc10a10759455342a4bcb65',
    },
    wfa.trigger(
        trigger.record.updated,
        {
            $id: Now.ID['a405a9d34787f21051a3e84d416d43ac'],
        },
        {
            table: 'x_aleen_snguardian_identity',
            condition: 'source_system_codeLIKESNOW',
            run_on_extended: 'false',
            run_flow_in: 'any',
            run_when_user_list: [],
            run_when_setting: 'both',
            run_when_user_setting: 'any',
            trigger_strategy: 'unique_changes',
        }
    ),
    (_params) => {
        const actionInstance_1 = wfa.action(
            action.core.lookUpRecords,
            {
                $id: Now.ID['2c05a9d34787f21051a3e84d416d43ae'],
                uuid: '9b0e73f5-295c-4d33-bcaa-8a03259665c8',
            },
            {
                table: 'x_aleen_snguardian_identity_system',
                conditions: `identity.sys_id=${wfa.dataPill(_params.trigger.current.sys_id, 'GUID')}`,
                sort_column: '',
                sort_type: 'sort_asc',
                max_results: 1000,
            }
        )
        wfa.flowLogic.forEach(
            wfa.dataPill(actionInstance_1.Records, 'records'),
            {
                annotation: '',
                $id: Now.ID['a005a9d34787f21051a3e84d416d43b3'],
            },
            (item_2) => {
                wfa.flowLogic.if(
                    {
                        label: 'if System is not SNOW',
                        condition: `${wfa.dataPill(item_2.system.code, 'string')}NOT LIKESNOW`,
                        annotation: '',
                        $id: Now.ID['ac05a9d34787f21051a3e84d416d43b6'],
                        uuid: '8daac8bf-7051-4063-98e2-b8258e16675f',
                    },
                    () => {
                        wfa.action(
                            action.core.updateRecord,
                            {
                                $id: Now.ID['e805a9d34787f21051a3e84d416d43b7'],
                                uuid: '01708664-7d97-4b1a-bfaf-b9a11f9b9a8d',
                            },
                            {
                                record: wfa.dataPill(item_2, 'string'),
                                table_name: 'x_aleen_snguardian_identity_system',
                                values: TemplateValue({
                                    provisioning_action:
                                        '{"display":"To be Updated","value":"6b7f8ed51bbc8210759455342a4bcb27","sys_id":"6b7f8ed51bbc8210759455342a4bcb27"}',
                                    provisioning_status:
                                        '{"display":"Update  is Pending","value":"858fced51bbc8210759455342a4bcb48","sys_id":"858fced51bbc8210759455342a4bcb48"}',
                                    sys_tags: 'update',
                                }),
                            }
                        )
                        wfa.action(
                            action.core.updateRecord,
                            {
                                $id: Now.ID['e005a9d34787f21051a3e84d416d43b8'],
                                uuid: '7907871a-9243-4cbe-b973-bd198f3f28b7',
                            },
                            {
                                record: wfa.dataPill(_params.trigger.current, 'reference'),
                                table_name: 'x_aleen_snguardian_identity',
                                values: TemplateValue({
                                    work_notes: `Updating User information in  [${wfa.dataPill(item_2.system.code, 'string')}]`,
                                }),
                            }
                        )
                    }
                )
            }
        )
    }
)
