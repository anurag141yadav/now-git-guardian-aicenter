import { Flow, wfa, trigger, action } from '@servicenow/sdk/automation'

Flow(
    {
        $id: Now.ID['db932e584719ee5051a3e84d416d43b8'],
        name: 'Alert Visitor photo deletion and Group to Single Visit Job',
        internalName: 'split_group_visit_to_single_visit_job',
        description: 'For each group visit where Check in/out is not as one',
        runAs: 'system',
        masterSnapshot: '0cfe8abc476d261051a3e84d416d433a',
    },
    wfa.trigger(
        trigger.scheduled.daily,
        {
            $id: Now.ID['0816a5974787f21051a3e84d416d4347'],
        },
        {
            time: Time(
                {
                    hours: 0,
                    minutes: 0,
                },
                'UTC'
            ),
        }
    ),
    (_params) => {
        const actionInstance_1 = wfa.action(
            action.core.lookUpRecords,
            {
                $id: Now.ID['8c16a5974787f21051a3e84d416d4349'],
                annotation: 'Create Single Visits for all Group Visit, not Checked-In/Checked-Out as group',
                uuid: 'ded68999-0b99-4eb0-993e-092f51700cf8',
            },
            {
                table: 'x_aleen_snguardian_visitor_visit',
                conditions:
                    'type=9f4f79992b191a10d4dffd74ce91bfff^check_in_check_out_as_a_group=false^status=6b9fb91d2b191a10d4dffd74ce91bf25^start_dateBETWEENjavascript:gs.beginningOfCurrentMinute()@javascript:gs.endOfTomorrow()^is_deleted=false',
                sort_column: '',
                sort_type: 'sort_asc',
                max_results: 1000,
            }
        )
        wfa.flowLogic.forEach(
            wfa.dataPill(actionInstance_1.Records, 'records'),
            {
                annotation: '',
                $id: Now.ID['0416a5974787f21051a3e84d416d434e'],
            },
            (item_2) => {
                wfa.flowLogic.forEach(
                    wfa.dataPill(item_2.visitors, 'glide_list'),
                    {
                        annotation: '',
                        $id: Now.ID['8416a5974787f21051a3e84d416d4351'],
                    },
                    (item_3) => {
                        wfa.action(
                            action.core.createRecord,
                            {
                                $id: Now.ID['4016a5974787f21051a3e84d416d4352'],
                                uuid: '815c58bd-8bf9-49a9-b9c8-3c5ec591a3d9',
                            },
                            {
                                table_name: 'x_aleen_snguardian_visitor_visit',
                                values: TemplateValue({
                                    location: wfa.dataPill(item_2.location, 'reference'),
                                    visitor: wfa.dataPill(item_3, 'string'),
                                    type: '{"display":"Single / Individual","value":"dfce711d2b191a10d4dffd74ce91bfd4","sys_id":"dfce711d2b191a10d4dffd74ce91bfd4"}',
                                    start_date: wfa.dataPill(item_2.start_date, 'glide_date_time'),
                                    end_date: wfa.dataPill(item_2.end_date, 'glide_date_time'),
                                    recurring_start_date: wfa.dataPill(item_2.recurring_start_date, 'glide_date'),
                                    recurring_end_date: wfa.dataPill(item_2.recurring_end_date, 'glide_date'),
                                    is_recurring: wfa.dataPill(item_2.is_recurring, 'boolean'),
                                    recurring_start_time: wfa.dataPill(item_2.recurring_start_time, 'glide_time'),
                                    recurring_end_time: wfa.dataPill(item_2.recurring_end_time, 'glide_time'),
                                    is_all_day_event: wfa.dataPill(item_2.is_all_day_event, 'boolean'),
                                    host: wfa.dataPill(item_2.host, 'glide_list'),
                                    escrort: wfa.dataPill(item_2.escrort, 'glide_list'),
                                    is_nda_signed: wfa.dataPill(item_2.is_nda_signed, 'boolean'),
                                    nda: wfa.dataPill(item_2.nda, 'reference'),
                                    nda_signed_date_time: wfa.dataPill(item_2.nda_signed_date_time, 'glide_date_time'),
                                    nda_sign_expiry_date_time: wfa.dataPill(
                                        item_2.nda_sign_expiry_date_time,
                                        'glide_date_time'
                                    ),
                                    parent: wfa.dataPill(item_2, 'string'),
                                    purpose: wfa.dataPill(item_2.purpose, 'reference'),
                                    status: '{"display":"Scheduled","value":"6b9fb91d2b191a10d4dffd74ce91bf25","sys_id":"6b9fb91d2b191a10d4dffd74ce91bf25"}',
                                    recurring_type: wfa.inlineScript(`if(fd_data._2__for_each.item.recurring_type){
    return fd_data._2__for_each.item.recurring_type;
}else{
    return "";
}`),
                                    group: wfa.dataPill(item_2.group, 'string'),
                                    check_in_check_out_as_a_group: 'false',
                                }),
                            }
                        )
                    }
                )
            }
        )
        const actionInstance_5 = wfa.action(
            action.core.lookUpRecords,
            {
                $id: Now.ID['4816a5974787f21051a3e84d416d4352'],
                uuid: '44e68687-ae11-4a72-b5ee-ecb7390aeaa0',
            },
            {
                table: 'x_aleen_snguardian_visitor_visit',
                conditions: 'end_date<javascript:gs.beginningOfCurrentMinute()^groupISNOTEMPTY',
                sort_column: '',
                sort_type: 'sort_asc',
                max_results: 1000,
            }
        )
        wfa.flowLogic.forEach(
            wfa.dataPill(actionInstance_5.Records, 'records'),
            {
                annotation: '',
                $id: Now.ID['c816a5974787f21051a3e84d416d4355'],
            },
            (item_6) => {
                wfa.action(
                    action.core.updateRecord,
                    {
                        $id: Now.ID['0816a5974787f21051a3e84d416d4356'],
                        uuid: '4c3696b9-78c9-4d22-b775-dcec9003913e',
                    },
                    {
                        record: wfa.dataPill(item_6, 'string'),
                        table_name: 'x_aleen_snguardian_visitor_visit',
                        values: TemplateValue({}),
                    }
                )
            }
        )
        const actionInstance_8 = wfa.action(
            action.core.lookUpRecords,
            {
                $id: Now.ID['0016a5974787f21051a3e84d416d4357'],
                uuid: '112cba4f-eda8-4a9e-852d-074560c3b031',
            },
            {
                table: 'x_aleen_snguardian_visitor_visit',
                conditions:
                    'status=6b9fb91d2b191a10d4dffd74ce91bf25^end_date<javascript:gs.beginningOfCurrentMinute()^ORrecurring_end_date<javascript:gs.beginningOfCurrentMinute()',
                sort_column: '',
                sort_type: 'sort_asc',
                max_results: 1000,
            }
        )
        wfa.flowLogic.forEach(
            wfa.dataPill(actionInstance_8.Records, 'records'),
            {
                annotation: '',
                $id: Now.ID['8016a5974787f21051a3e84d416d435a'],
            },
            (item_9) => {
                wfa.action(
                    action.core.updateRecord,
                    {
                        $id: Now.ID['0816a5974787f21051a3e84d416d435a'],
                        uuid: '93bf7120-3ca8-4706-a63e-f40067f92138',
                    },
                    {
                        record: wfa.dataPill(item_9, 'string'),
                        table_name: 'x_aleen_snguardian_visitor_visit',
                        values: TemplateValue({
                            status: '{"display":"No Show","value":"b2cf7d1d2b191a10d4dffd74ce91bfbf","sys_id":"b2cf7d1d2b191a10d4dffd74ce91bfbf"}',
                        }),
                    }
                )
            }
        )
        const actionInstance_11 = wfa.action(
            action.core.lookUpRecords,
            {
                $id: Now.ID['0016a5974787f21051a3e84d416d435b'],
                uuid: '19616bdd-de0e-4f14-a23e-41f08b8523fb',
            },
            {
                table: 'x_aleen_snguardian_visitor_visit',
                conditions: 'end_dateONYesterday@javascript:gs.beginningOfYesterday()@javascript:gs.endOfYesterday()',
                sort_column: '',
                sort_type: 'sort_asc',
                max_results: 1000,
            }
        )
        wfa.flowLogic.forEach(
            wfa.dataPill(actionInstance_11.Records, 'records'),
            {
                annotation: '',
                $id: Now.ID['0016a5974787f21051a3e84d416d4377'],
            },
            (item_12) => {
                wfa.flowLogic.if(
                    {
                        label: 'is Recurring and End Date (recurring) is before now',
                        condition: `${wfa.dataPill(item_12.is_recurring, 'boolean')}=true^${wfa.dataPill(item_12.recurring_end_date, 'glide_date')}<${wfa.dataPill(_params.trigger.run_start_date_time, 'glide_date_time')}^${wfa.dataPill(item_12.visitor.keep_photo, 'boolean')}=false`,
                        annotation: '',
                        $id: Now.ID['8816a5974787f21051a3e84d416d437a'],
                        uuid: '3696ab03-ac08-455e-a41f-e086a7338bb0',
                    },
                    () => {
                        const actionInstance_14 = wfa.action(
                            action.core.lookUpRecord,
                            {
                                $id: Now.ID['8816a5974787f21051a3e84d416d437b'],
                                uuid: '1904572d-3a94-4116-98fb-37a8db46aa65',
                            },
                            {
                                table: 'sys_attachment',
                                conditions: `table_sys_id=${wfa.dataPill(item_12.visitor.sys_id, 'GUID')}`,
                                sort_column: '',
                                sort_type: 'sort_asc',
                                if_multiple_records_are_found_action: 'use_first_record',
                                dont_fail_flow_on_error: true,
                            }
                        )
                        wfa.flowLogic.if(
                            {
                                label: 'Attachment',
                                condition: `${wfa.dataPill(actionInstance_14.Record, 'reference')}ISNOTEMPTY`,
                                annotation: '',
                                $id: Now.ID['4016a5974787f21051a3e84d416d437f'],
                                uuid: '59173596-4f13-4651-b8b3-107edbb6cc48',
                            },
                            () => {
                                wfa.action(
                                    action.core.deleteRecord,
                                    {
                                        $id: Now.ID['0c16a5974787f21051a3e84d416d437f'],
                                        uuid: '10264653-d3b8-4693-853a-e9a9bb54d009',
                                    },
                                    {
                                        record: wfa.dataPill(actionInstance_14.Record, 'reference'),
                                    }
                                )
                            }
                        )
                    }
                )
                wfa.flowLogic.if(
                    {
                        label: 'not Recurring ',
                        condition: `${wfa.dataPill(item_12.is_recurring, 'boolean')}=false^${wfa.dataPill(item_12.visitor.keep_photo, 'boolean')}=false`,
                        annotation: '',
                        $id: Now.ID['c016a5974787f21051a3e84d416d4383'],
                        uuid: 'd7c623c8-e672-4d6c-b814-9dde026e4aa0',
                    },
                    () => {
                        const actionInstance_18 = wfa.action(
                            action.core.lookUpRecord,
                            {
                                $id: Now.ID['4816a5974787f21051a3e84d416d4383'],
                                uuid: '00403a2c-6bcd-43a7-b08d-18b59edf3eb8',
                            },
                            {
                                table: 'sys_attachment',
                                conditions: `table_sys_id=${wfa.dataPill(item_12.visitor.sys_id, 'GUID')}`,
                                sort_column: '',
                                sort_type: 'sort_asc',
                                if_multiple_records_are_found_action: 'use_first_record',
                                dont_fail_flow_on_error: true,
                            }
                        )
                        wfa.flowLogic.if(
                            {
                                label: 'Attachment',
                                condition: `${wfa.dataPill(actionInstance_18.Record, 'reference')}ISNOTEMPTY`,
                                annotation: '',
                                $id: Now.ID['0016a5974787f21051a3e84d416d4387'],
                                uuid: 'ddd54415-c481-43a1-966d-492b540d9799',
                            },
                            () => {
                                wfa.action(
                                    action.core.deleteRecord,
                                    {
                                        $id: Now.ID['8416a5974787f21051a3e84d416d4387'],
                                        uuid: '808c59d6-7914-4e52-94a1-21fea400de52',
                                    },
                                    {
                                        record: wfa.dataPill(actionInstance_18.Record, 'reference'),
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
