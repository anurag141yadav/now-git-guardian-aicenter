import { Flow, wfa, trigger, action } from '@servicenow/sdk/automation'

Flow(
    {
        $id: Now.ID['e7ada71f1b185e50bf7ea82b234bcb8b'],
        name: 'Alert Rehire Employee',
        internalName: 'rehire_employee',
        description: 'Rehire Employee',
        runAs: 'system',
        masterSnapshot: 'e2219c271bd85e50bf7ea82b234bcb3a',
    },
    wfa.trigger(
        trigger.record.updated,
        {
            $id: Now.ID['9b6411134747f21051a3e84d416d43e6'],
        },
        {
            table: 'x_aleen_snguardian_identity',
            condition:
                'status=2a7f0ed51bbc8210759455342a4bcbe9^statusCHANGESFROMe27f0ed51bbc8210759455342a4bcbea^type=777f8ed51bbc8210759455342a4bcb58',
            run_on_extended: 'false',
            run_flow_in: 'any',
            run_when_user_list: [],
            run_when_setting: 'both',
            run_when_user_setting: 'any',
            trigger_strategy: 'always',
        }
    ),
    (_params) => {
        const actionInstance_1 = wfa.action(
            action.core.lookUpRecord,
            {
                $id: Now.ID['9b6411134747f21051a3e84d416d43e8'],
                uuid: '76271510-0707-4261-8c7c-39253419753c',
            },
            {
                table: 'x_aleen_snguardian_asset',
                conditions: 'status=a67f0ed51bbc8210759455342a4bcbec^is_deleted=false',
                sort_column: '',
                sort_type: 'sort_asc',
                if_multiple_records_are_found_action: 'use_first_record',
                dont_fail_flow_on_error: true,
            }
        )
        const actionInstance_2 = wfa.action(
            action.core.lookUpRecord,
            {
                $id: Now.ID['936411134747f21051a3e84d416d43e9'],
                uuid: 'cd4f7049-43e6-45dc-a624-4ace327bed14',
            },
            {
                table: 'x_aleen_snguardian_identity_system',
                conditions: `identity=${wfa.dataPill(_params.trigger.current, 'reference')}^system.code=${wfa.dataPill(actionInstance_1.Record.system.code, 'string')}`,
                sort_column: '',
                sort_type: 'sort_asc',
                if_multiple_records_are_found_action: 'use_first_record',
                dont_fail_flow_on_error: true,
            }
        )
        wfa.flowLogic.if(
            {
                label: 'Identity System Record Found ',
                condition: `${wfa.dataPill(actionInstance_2.Record, 'reference')}!=`,
                annotation: '',
                $id: Now.ID['1b6411134747f21051a3e84d416d43f9'],
                uuid: '84116337-3349-4ac7-a134-c56fcddcb4d2',
            },
            () => {
                wfa.action(
                    action.core.updateRecord,
                    {
                        $id: Now.ID['d76411134747f21051a3e84d416d43fa'],
                        uuid: '80922155-a984-499a-a337-c4b1458af3c7',
                    },
                    {
                        record: wfa.dataPill(actionInstance_2.Record, 'reference'),
                        table_name: 'x_aleen_snguardian_identity_system',
                        values: TemplateValue({
                            provisioning_action:
                                '{"display":"To be Added","value":"e77f8ed51bbc8210759455342a4bcb1a","sys_id":"e77f8ed51bbc8210759455342a4bcb1a"}',
                            provisioning_status:
                                '{"display":"Provision is pending","value":"c18fced51bbc8210759455342a4bcb38","sys_id":"c18fced51bbc8210759455342a4bcb38"}',
                            valid_from: wfa.inlineScript(`var gdt = new GlideDateTime();
return gdt.getValue();`),
                            valid_to: wfa.inlineScript(`var gdt = new GlideDateTime();
gdt.addYearsLocalTime(1);
return gdt.getValue();`),
                            is_deleted: 'false',
                            datasource_table: wfa.dataPill(_params.trigger.table_name, 'table_name'),
                            datasource: wfa.dataPill(_params.trigger.current.sys_id, 'GUID'),
                        }),
                    }
                )
            }
        )
        const actionInstance_5 = wfa.action(
            action.core.createRecord,
            {
                $id: Now.ID['176411134747f21051a3e84d416d43fb'],
                uuid: '93152d98-aa9e-44f4-ac76-3c2f8b5d4a8f',
            },
            {
                table_name: 'x_aleen_snguardian_identity_asset',
                values: TemplateValue({
                    identity: wfa.dataPill(_params.trigger.current, 'reference'),
                    asset: wfa.dataPill(actionInstance_1.Record, 'reference'),
                    provisioning_action:
                        '{"display":"To be Added","value":"e77f8ed51bbc8210759455342a4bcb1a","sys_id":"e77f8ed51bbc8210759455342a4bcb1a"}',
                    provisioning_status:
                        '{"display":"Provision is pending","value":"c18fced51bbc8210759455342a4bcb38","sys_id":"c18fced51bbc8210759455342a4bcb38"}',
                    valid_from: wfa.inlineScript(`var gdt = new GlideDateTime();
return gdt.getValue();`),
                    valid_to: wfa.inlineScript(`var gdt = new GlideDateTime();
gdt.addYearsLocalTime(1);
return gdt.getValue();`),
                    datasource_table: wfa.dataPill(_params.trigger.table_name, 'table_name'),
                    datasource: wfa.dataPill(_params.trigger.current.sys_id, 'GUID'),
                }),
            }
        )
        const actionInstance_6 = wfa.action(
            action.core.lookUpRecords,
            {
                $id: Now.ID['176411134747f21051a3e84d416d43fc'],
                uuid: '65384c96-a75e-4022-93f0-51555005f531',
            },
            {
                table: 'x_aleen_snguardian_identity_access',
                conditions: `identity.sys_id=${wfa.dataPill(_params.trigger.current.sys_id, 'GUID')}`,
                sort_column: '',
                sort_type: 'sort_asc',
                max_results: 1000,
            }
        )
        wfa.flowLogic.forEach(
            wfa.dataPill(actionInstance_6.Records, 'records'),
            {
                annotation: '',
                $id: Now.ID['9b6411134747f21051a3e84d416d43ff'],
            },
            (item_7) => {
                const actionInstance_8 = wfa.action(
                    action.core.lookUpRecord,
                    {
                        $id: Now.ID['136451134747f21051a3e84d416d4300'],
                        uuid: '344a27b7-d9f2-47e6-a476-e41be6aaf8c4',
                    },
                    {
                        table: 'x_aleen_snguardian_identity_system',
                        conditions: `identity=${wfa.dataPill(_params.trigger.current, 'reference')}^system.code=${wfa.dataPill(item_7.access_level.system.code, 'string')}^is_deleted=true`,
                        sort_column: '',
                        sort_type: 'sort_asc',
                        if_multiple_records_are_found_action: 'use_first_record',
                        dont_fail_flow_on_error: true,
                    }
                )
                wfa.flowLogic.if(
                    {
                        label: 'existing identity system record found',
                        condition: `${wfa.dataPill(actionInstance_8.Record, 'reference')}!=`,
                        annotation: '',
                        $id: Now.ID['976451134747f21051a3e84d416d4303'],
                        uuid: '3da63d1a-6553-4d08-aa9c-91b6bdce0f69',
                    },
                    () => {
                        wfa.action(
                            action.core.updateRecord,
                            {
                                $id: Now.ID['1f6451134747f21051a3e84d416d4303'],
                                uuid: '226c52e0-d71e-47e2-b1db-66e584600356',
                            },
                            {
                                record: wfa.dataPill(actionInstance_8.Record, 'reference'),
                                table_name: 'x_aleen_snguardian_identity_system',
                                values: TemplateValue({
                                    provisioning_action:
                                        '{"display":"To be Added","value":"e77f8ed51bbc8210759455342a4bcb1a","sys_id":"e77f8ed51bbc8210759455342a4bcb1a"}',
                                    provisioning_status:
                                        '{"display":"Provision is pending","value":"c18fced51bbc8210759455342a4bcb38","sys_id":"c18fced51bbc8210759455342a4bcb38"}',
                                    valid_to: wfa.inlineScript(`var gdt = new GlideDateTime();
gdt.addYearsLocalTime(1);
return gdt.getValue();`),
                                    valid_from: wfa.inlineScript(`var gdt = new GlideDateTime();
return gdt.getValue();`),
                                    is_deleted: 'false',
                                    datasource_table: wfa.dataPill(_params.trigger.table_name, 'table_name'),
                                    datasource: wfa.dataPill(_params.trigger.current.sys_id, 'GUID'),
                                }),
                            }
                        )
                    }
                )
                wfa.action(
                    action.core.createRecord,
                    {
                        $id: Now.ID['176451134747f21051a3e84d416d4304'],
                        uuid: 'da189d8d-a38c-400d-a90d-a6c770c66c01',
                    },
                    {
                        table_name: 'x_aleen_snguardian_identity_access',
                        values: TemplateValue({
                            identity: wfa.dataPill(item_7.identity, 'reference'),
                            access_level: wfa.dataPill(item_7.access_level, 'reference'),
                            valid_from: wfa.inlineScript(`var gdt = new GlideDateTime();
return gdt.getValue();`),
                            valid_to: wfa.inlineScript(`var gdt = new GlideDateTime();
gdt.addYearsLocalTime(1);
return gdt.getValue();`),
                            provisioning_action:
                                '{"display":"To be Added","value":"e77f8ed51bbc8210759455342a4bcb1a","sys_id":"e77f8ed51bbc8210759455342a4bcb1a"}',
                            datasource_table: wfa.dataPill(_params.trigger.table_name, 'table_name'),
                            datasource: wfa.dataPill(_params.trigger.current.sys_id, 'GUID'),
                        }),
                    }
                )
            }
        )
        wfa.action(
            action.core.updateRecord,
            {
                $id: Now.ID['1f6451134747f21051a3e84d416d4304'],
                uuid: '081f9403-fe29-444d-8401-1ad8550bc7e5',
            },
            {
                record: wfa.dataPill(_params.trigger.current, 'reference'),
                table_name: 'x_aleen_snguardian_identity',
                values: TemplateValue({
                    work_notes: `New badge ${wfa.dataPill(actionInstance_5.record.asset, 'reference')}and access ${wfa.dataPill(actionInstance_6.Records, 'records')}are assigned to user as part of rehiring process`,
                }),
            }
        )
    }
)
