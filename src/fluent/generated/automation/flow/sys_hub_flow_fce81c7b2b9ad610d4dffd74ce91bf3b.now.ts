import { Flow, wfa, trigger, action } from '@servicenow/sdk/automation'
import { BooleanColumn, StringColumn, ReferenceColumn } from '@servicenow/sdk/core'

Flow(
    {
        $id: Now.ID['fce81c7b2b9ad610d4dffd74ce91bf3b'],
        name: 'Alert Visitor Walk-in Flow',
        internalName: 'visitor_walkin_flow',
        runAs: 'system',
        masterSnapshot: '8e6c58ff2b9ad610d4dffd74ce91bf9c',
        flowVariables: {
            host_confirmation_reqd: BooleanColumn({
                label: 'host_confirmation_reqd',
            }),
            is_non_watchlisted: BooleanColumn({
                label: 'is_non_watchlisted',
            }),
            visitors: StringColumn({
                label: 'visitors',
                maxLength: 8000,
            }),
            host_approved: BooleanColumn({
                label: 'host_approved',
            }),
            visit_record_to_be_updated: StringColumn({
                label: 'visit_record_to_be_updated',
                maxLength: 8000,
            }),
            host_list: ReferenceColumn({
                label: 'host_list',
                referenceTable: 'sys_user',
            }),
            is_recurring: BooleanColumn({
                label: 'is_recurring',
            }),
            check_in_as_one: BooleanColumn({
                label: 'check_in_as_one',
            }),
            visitor_id: StringColumn({
                label: 'visitor_id',
                maxLength: 8000,
            }),
            visitor_location: StringColumn({
                label: 'visitor_location',
                maxLength: 8000,
            }),
            security_admin_approved: BooleanColumn({
                label: 'security_admin_approved',
            }),
            visitor_email_list: StringColumn({
                label: 'visitor_email_list',
                maxLength: 8000,
            }),
            is_watchlisted: BooleanColumn({
                label: 'is_watchlisted',
            }),
        },
    },
    wfa.trigger(
        trigger.record.created,
        {
            $id: Now.ID['76d13f6147aa3a5051a3e84d416d43e4'],
        },
        {
            table: 'x_aleen_snguardian_visitor_request',
            condition: 'request_type=3f46e3ec2bb51a10d4dffd74ce91bf43',
            run_on_extended: 'false',
            run_flow_in: 'any',
            run_when_user_list: [],
            run_when_setting: 'both',
            run_when_user_setting: 'any',
        }
    ),
    (_params) => {
        wfa.action(
            action.core.updateRecord,
            {
                $id: Now.ID['8fd17f6147aa3a5051a3e84d416d431d'],
                annotation: 'update initial status as open',
                uuid: 'b73185c3-2e33-4e4d-8158-f17a6519a54f',
            },
            {
                record: wfa.dataPill(_params.trigger.current, 'reference'),
                table_name: 'x_aleen_snguardian_visitor_request',
                values: TemplateValue({
                    status: '{"display":"Open","value":"848f8ed51bbc8210759455342a4bcb7b","sys_id":"848f8ed51bbc8210759455342a4bcb7b"}',
                    state: '1',
                }),
            }
        )
        wfa.flowLogic.setFlowVariables(
            {
                $id: Now.ID['4bd17f6147aa3a5051a3e84d416d4324'],
            },
            _params.flowVariables,
            {
                host_confirmation_reqd:
                    wfa.inlineScript(`var host_confirmation = fd_data.trigger.current.variables.metadata.need_host_confirmation;
if(host_confirmation =='Yes') return true;
else return false;`),
                visitor_location:
                    wfa.inlineScript(`gs.info("SCHEDULE VISIT FLOW visit location "+fd_data.trigger.current.variables.visit_creation_home.visit_location);\r
return fd_data.trigger.current.variables.visit_creation_home.visit_location;`),
                is_watchlisted:
                    wfa.inlineScript(`var is_watchlisted = fd_data.trigger.current.variables.metadata.found_in_watchlist;
if(is_watchlisted=='Yes') return true;
else return false;`),
                is_recurring:
                    wfa.inlineScript(`var recurring = fd_data.trigger.current.variables.visit_details.is_recurring_visit;\r
if(recurring =='Yes'){\r
    return true;\r
}else{\r
    return false;\r
}`),
                check_in_as_one:
                    wfa.inlineScript(`if(fd_data.trigger.current.variables.visit_creation_home.check_in_out_as_one =="Yes"){
    return true;
}else{
    return false;
}`),
            }
        )
        const actionInstance_3 = wfa.action(
            'dfab10bc2bb91a10d4dffd74ce91bfc0',
            {
                $id: Now.ID['8fd17f6147aa3a5051a3e84d416d4325'],
                uuid: '06d31d9d-40d0-4f1b-9e7f-a4c5bbce1f46',
            },
            {
                visitor_request: wfa.dataPill(_params.trigger.current, 'reference'),
            }
        )
        wfa.flowLogic.if(
            {
                label: 'Single Visitor Request',
                condition: `${wfa.dataPill(actionInstance_3.visittype, 'string')}=SINGLE`,
                annotation: '',
                $id: Now.ID['4fd17f6147aa3a5051a3e84d416d4329'],
                uuid: '672f3822-1019-4644-bf45-432b2c18e79e',
            },
            () => {
                wfa.flowLogic.forEach(
                    wfa.dataPill(actionInstance_3.visitorlist, 'array.object'),
                    {
                        annotation: '',
                        $id: Now.ID['47d17f6147aa3a5051a3e84d416d432d'],
                    },
                    (item_5) => {
                        wfa.flowLogic.if(
                            {
                                label: 'New visitor',
                                condition: `${wfa.dataPill(item_5.visitor_is_existing, 'boolean')}=false`,
                                annotation: '',
                                $id: Now.ID['0fd17f6147aa3a5051a3e84d416d4330'],
                                uuid: '216ee032-9ebf-4dcc-b4d5-09157dbfbd47',
                            },
                            () => {
                                const actionInstance_7 = wfa.action(
                                    action.core.createRecord,
                                    {
                                        $id: Now.ID['5eda8ee0471b3a1051a3e84d416d4354'],
                                        uuid: 'a502afaa-f29c-4e2a-b42d-b6c9c05b869d',
                                    },
                                    {
                                        table_name: 'x_aleen_snguardian_visitor',
                                        values: TemplateValue({
                                            first_name: wfa.dataPill(item_5.visitor_first_name, 'string'),
                                            last_name: wfa.dataPill(item_5.visitor_last_name, 'string'),
                                            email: wfa.dataPill(item_5.visitor_email, 'string'),
                                            phone: wfa.dataPill(item_5.visitor_phone, 'string'),
                                            visitor_status: wfa.inlineScript(
                                                'return fd_data.trigger.current.variables.visit_visitor_details.visitor_visitor_status;'
                                            ),
                                            visitor_type: wfa.inlineScript(
                                                'return fd_data.trigger.current.variables.visit_visitor_details.visitor_type;'
                                            ),
                                            need_assistance:
                                                wfa.inlineScript(`var value = fd_data.trigger.current.variables.visit_visitor_details.visitor_need_assistance;
if(value == 'Yes')return true;
else return false;`),
                                            company: wfa.inlineScript(
                                                'return fd_data.trigger.current.variables.visit_visitor_details.visitor_company_name;'
                                            ),
                                            identity_validation_date: wfa.inlineScript(
                                                'return fd_data.trigger.current.variables.visit_visitor_details.id_verification_date;'
                                            ),
                                            identity_validation_expires_on: wfa.inlineScript(
                                                'return fd_data.trigger.current.variables.visit_visitor_details.id_verification_expires_on;'
                                            ),
                                            identity_validation_type: wfa.inlineScript(
                                                'return fd_data.trigger.current.variables.visit_visitor_details.id_verification_document;'
                                            ),
                                        }),
                                    }
                                )
                                wfa.flowLogic.setFlowVariables(
                                    {
                                        $id: Now.ID['c3d17f6147aa3a5051a3e84d416d4342'],
                                    },
                                    _params.flowVariables,
                                    {
                                        visitor_id: wfa.dataPill(actionInstance_7.record, 'reference'),
                                        visitor_email_list: wfa.dataPill(actionInstance_7.record.email, 'string'),
                                    }
                                )
                            }
                        )
                        wfa.flowLogic.else(
                            {
                                annotation: '',
                                $id: Now.ID['07d17f6147aa3a5051a3e84d416d4345'],
                                uuid: '52917035-99e7-4032-8b62-752096092b4c',
                            },
                            () => {
                                wfa.flowLogic.setFlowVariables(
                                    {
                                        $id: Now.ID['87d17f6147aa3a5051a3e84d416d4349'],
                                    },
                                    _params.flowVariables,
                                    {
                                        visitor_id: wfa.inlineScript('return fd_data._5__for_each.item.visitor_id;'),
                                        visitor_email_list: wfa.dataPill(item_5.visitor_email, 'string'),
                                    }
                                )
                            }
                        )
                    }
                )
                const actionInstance_11 = wfa.action(
                    action.core.createRecord,
                    {
                        $id: Now.ID['0fd17f6147aa3a5051a3e84d416d4349'],
                        uuid: 'ad478697-32e1-4fc7-b328-0b3a1da826df',
                    },
                    {
                        table_name: 'x_aleen_snguardian_visitor_visit',
                        values: TemplateValue({
                            visitor: wfa.dataPill(_params.flowVariables.visitor_id, 'string'),
                            status: '{"display":"New","value":"937f7d1d2b191a10d4dffd74ce91bf81","sys_id":"937f7d1d2b191a10d4dffd74ce91bf81"}',
                            purpose: wfa.inlineScript(
                                'return fd_data.trigger.current.variables.visit_details.visit_purpose;'
                            ),
                            type: '{"display":"Single / Individual","value":"dfce711d2b191a10d4dffd74ce91bfd4","sys_id":"dfce711d2b191a10d4dffd74ce91bfd4"}',
                            location: wfa.dataPill(_params.flowVariables.visitor_location, 'string'),
                            check_in_check_out_as_a_group: 'false',
                            host: wfa.inlineScript('return fd_data.trigger.current.variables.host_details.host_s;'),
                            escrort: wfa.inlineScript('return fd_data.trigger.current.variables.host_details.escort;'),
                            is_all_day_event:
                                wfa.inlineScript(`var all_day = fd_data.trigger.current.variables.visit_details.visit_all_day_long;
if(all_day=='Yes')return true;
else return false;`),
                            request: wfa.dataPill(_params.trigger.current, 'reference'),
                            start_date:
                                wfa.inlineScript(`if(fd_data.trigger.current.variables.visit_details.visit_start_date && !fd_data.flow_var.is_recurring){
    return new GlideDateTime(fd_data.trigger.current.variables.visit_details.visit_start_date).getDisplayValue();
}else{
    return "";
}`),
                            end_date:
                                wfa.inlineScript(`if(fd_data.trigger.current.variables.visit_details.visit_end_date && !fd_data.flow_var.is_recurring){
    return new GlideDateTime(fd_data.trigger.current.variables.visit_details.visit_end_date).getDisplayValue();
}else{
    return "";
}`),
                            recurring_start_date:
                                wfa.inlineScript(`if(fd_data.trigger.current.variables.visit_details.recurring_start_date){
    return fd_data.trigger.current.variables.visit_details.recurring_start_date;
}else{
    return "";
}`),
                            recurring_end_date:
                                wfa.inlineScript(`if(fd_data.trigger.current.variables.visit_details.recurring_end_date){
    return fd_data.trigger.current.variables.visit_details.recurring_end_date;
}else{
    return "";
}`),
                            recurring_start_time:
                                wfa.inlineScript(`if(fd_data.trigger.current.variables.visit_details.recurring_start_time){
    return fd_data.trigger.current.variables.visit_details.recurring_start_time;
}else{
    return "";
}`),
                            recurring_end_time:
                                wfa.inlineScript(`if(fd_data.trigger.current.variables.visit_details.recurring_end_time){
    return fd_data.trigger.current.variables.visit_details.recurring_end_time;
}else{
    return "";
}`),
                            is_recurring: wfa.dataPill(_params.flowVariables.is_recurring, 'boolean'),
                            recurring_value:
                                wfa.inlineScript(`if(fd_data.trigger.current.variables.visit_recurrence_selector.recurring_value){
    return fd_data.trigger.current.variables.visit_recurrence_selector.recurring_value;
}else{
    return "";
}`),
                            recurring_type:
                                wfa.inlineScript(`if(fd_data.trigger.current.variables.visit_details.visit_recurring_type){
    return fd_data.trigger.current.variables.visit_details.visit_recurring_type;
}else{
    return "";
}`),
                        }),
                    }
                )
                wfa.flowLogic.setFlowVariables(
                    {
                        $id: Now.ID['8fd17f6147aa3a5051a3e84d416d434d'],
                    },
                    _params.flowVariables,
                    {
                        visit_record_to_be_updated: wfa.dataPill(actionInstance_11.record.sys_id, 'GUID'),
                    }
                )
            }
        )
        wfa.flowLogic.else(
            {
                annotation: '',
                $id: Now.ID['cbd17f6147aa3a5051a3e84d416d4350'],
                uuid: '9a9374d4-f39d-4ee6-ad06-93af91912c73',
            },
            () => {
                wfa.flowLogic.forEach(
                    wfa.dataPill(actionInstance_3.visitorlist, 'array.object'),
                    {
                        annotation: '',
                        $id: Now.ID['4fd17f6147aa3a5051a3e84d416d4353'],
                    },
                    (item_14) => {
                        wfa.flowLogic.if(
                            {
                                label: 'if new visitor',
                                condition: `${wfa.dataPill(item_14.visitor_is_existing, 'boolean')}=false`,
                                annotation: '',
                                $id: Now.ID['07d17f6147aa3a5051a3e84d416d4357'],
                                uuid: 'af2164a0-a5e0-4ff0-9b93-0c1c1f885fac',
                            },
                            () => {
                                const actionInstance_16 = wfa.action(
                                    action.core.createRecord,
                                    {
                                        $id: Now.ID['8bd17f6147aa3a5051a3e84d416d4357'],
                                        uuid: 'c0c72716-49ec-4d49-a612-ff3531133a42',
                                    },
                                    {
                                        table_name: 'x_aleen_snguardian_visitor',
                                        values: TemplateValue({
                                            first_name: wfa.dataPill(item_14.visitor_first_name, 'string'),
                                            last_name: wfa.dataPill(item_14.visitor_last_name, 'string'),
                                            email: wfa.dataPill(item_14.visitor_email, 'string'),
                                            phone: wfa.dataPill(item_14.visitor_phone, 'string'),
                                            visitor_status:
                                                '{"display":"New","value":"ef318e9d2b191a10d4dffd74ce91bfc3","sys_id":"ef318e9d2b191a10d4dffd74ce91bfc3"}',
                                            visitor_type: 'GUEST',
                                            user_name: wfa.inlineScript(`var user_name;
 if (null != fd_data._14__for_each.item.visitor_first_name && null != fd_data._14__for_each.item.visitor_last_name) {
       user_name =  fd_data._14__for_each.item.visitor_first_name + ' ' + fd_data._14__for_each.item.visitor_last_name;
    } else if (null != fd_data._14__for_each.item.visitor_first_name && fd_data._14__for_each.item.visitor_first_name != "") {
        user_name =  fd_data._14__for_each.item.visitor_first_name;
    } else if (null != fd_data._14__for_each.item.visitor_last_name && fd_data._14__for_each.item.visitor_last_name!= "") {
        user_name = fd_data._14__for_each.item.visitor_last_name;
    }
return user_name.toUpperCase();
`),
                                        }),
                                    }
                                )
                                wfa.flowLogic.setFlowVariables(
                                    {
                                        $id: Now.ID['cfd17f6147aa3a5051a3e84d416d435b'],
                                    },
                                    _params.flowVariables,
                                    {
                                        visitors: `${wfa.dataPill(_params.flowVariables.visitors, 'string')},${wfa.dataPill(actionInstance_16.record, 'reference')}`,
                                        visitor_email_list: `${wfa.dataPill(_params.flowVariables.visitor_email_list, 'string')}, ${wfa.dataPill(actionInstance_16.record.email, 'string')}`,
                                        is_non_watchlisted: true,
                                    }
                                )
                            }
                        )
                        wfa.flowLogic.else(
                            {
                                annotation: '',
                                $id: Now.ID['0fd17f6147aa3a5051a3e84d416d435e'],
                                uuid: '64d6df6b-2bf0-4323-9705-5950b3612568',
                            },
                            () => {
                                const actionInstance_19 = wfa.action(
                                    action.core.lookUpRecord,
                                    {
                                        $id: Now.ID['0fd17f6147aa3a5051a3e84d416d435f'],
                                        uuid: 'a423e80c-3b5e-4678-97a0-fb56c210abed',
                                    },
                                    {
                                        table: 'x_aleen_snguardian_visitor',
                                        conditions: `sys_id=${wfa.dataPill(item_14.visitor_id, 'string')}`,
                                        sort_column: '',
                                        sort_type: 'sort_asc',
                                        if_multiple_records_are_found_action: 'use_first_record',
                                        dont_fail_flow_on_error: false,
                                    }
                                )
                                wfa.flowLogic.setFlowVariables(
                                    {
                                        $id: Now.ID['43d17f6147aa3a5051a3e84d416d4364'],
                                    },
                                    _params.flowVariables,
                                    {
                                        visitors: `${wfa.dataPill(_params.flowVariables.visitors, 'string')},${wfa.dataPill(actionInstance_19.Record, 'reference')}`,
                                        visitor_email_list: `${wfa.dataPill(_params.flowVariables.visitor_email_list, 'string')},${wfa.dataPill(actionInstance_19.Record.email, 'string')}`,
                                        is_non_watchlisted: wfa.inlineScript(`if (fd_data.flow_var.is_non_watchlisted) {
  return true;
} else {
  var grWatchList = new GlideRecordSecure(
    "x_aleen_snguardian_visitor_watch_list",
  );
  grWatchList.addQuery("email", fd_data._19__look_up_record.record.email);
  grWatchList.setLimit(1);
  grWatchList.query();
  if (grWatchList.next()) {
    return false;
  } else {
    return true;
  }
}
`),
                                    }
                                )
                            }
                        )
                    }
                )
                const actionInstance_21 = wfa.action(
                    action.core.createRecord,
                    {
                        $id: Now.ID['c7d17f6147aa3a5051a3e84d416d4364'],
                        uuid: '00de9d73-1fc1-45bb-88b7-9ebbc5d647b8',
                    },
                    {
                        table_name: 'x_aleen_snguardian_visitor_visit',
                        values: TemplateValue({
                            type: '{"display":"Group","value":"9f4f79992b191a10d4dffd74ce91bfff","sys_id":"9f4f79992b191a10d4dffd74ce91bfff"}',
                            status: '{"display":"New","value":"937f7d1d2b191a10d4dffd74ce91bf81","sys_id":"937f7d1d2b191a10d4dffd74ce91bf81"}',
                            visitors: wfa.dataPill(_params.flowVariables.visitors, 'string'),
                            group: wfa.inlineScript(
                                'return fd_data.trigger.current.variables.visit_creation_home.visit_visitor_group_name;'
                            ),
                            purpose: wfa.inlineScript(
                                'return fd_data.trigger.current.variables.visit_details.visit_purpose;'
                            ),
                            location: wfa.inlineScript(
                                'return fd_data.trigger.current.variables.visit_creation_home.visit_location;'
                            ),
                            check_in_check_out_as_a_group:
                                wfa.inlineScript(`if(fd_data.trigger.current.variables.visit_creation_home.check_in_out_as_one=="Yes"){\r
    return true;\r
}else{\r
    return false;\r
}`),
                            is_all_day_event:
                                wfa.inlineScript(`var all_day = fd_data.trigger.current.variables.visit_details.visit_all_day_long;
if(all_day=='Yes')return true;
else return false;`),
                            request: wfa.dataPill(_params.trigger.current, 'reference'),
                            start_date:
                                wfa.inlineScript(`if(fd_data.trigger.current.variables.visit_details.visit_start_date){
    return new GlideDateTime(fd_data.trigger.current.variables.visit_details.visit_start_date).getDisplayValue();
}else{
    return "";
}`),
                            end_date:
                                wfa.inlineScript(`if(fd_data.trigger.current.variables.visit_details.visit_end_date){
    return new GlideDateTime(fd_data.trigger.current.variables.visit_details.visit_end_date).getDisplayValue();
}else{
    return "";
}`),
                            recurring_start_date:
                                wfa.inlineScript(`if(fd_data.trigger.current.variables.visit_details.recurring_start_date){
    return fd_data.trigger.current.variables.visit_details.recurring_start_date;
}else{
    return "";
}`),
                            recurring_end_date:
                                wfa.inlineScript(`if(fd_data.trigger.current.variables.visit_details.recurring_end_date){
    return fd_data.trigger.current.variables.visit_details.recurring_end_date;
}else{
    return "";
}`),
                            recurring_start_time:
                                wfa.inlineScript(`if(fd_data.trigger.current.variables.visit_details.recurring_start_time){
    return fd_data.trigger.current.variables.visit_details.recurring_start_time;
}else{
    return "";
}`),
                            recurring_end_time:
                                wfa.inlineScript(`if(fd_data.trigger.current.variables.visit_details.recurring_end_time){
    return fd_data.trigger.current.variables.visit_details.recurring_end_time;
}else{
    return "";
}`),
                            is_recurring: wfa.dataPill(_params.flowVariables.is_recurring, 'boolean'),
                            recurring_value: 'fd-scripted',
                            recurring_type:
                                wfa.inlineScript(`if(fd_data.trigger.current.variables.visit_details.visit_recurring_type){
    return fd_data.trigger.current.variables.visit_details.visit_recurring_type;
}else{
    return "";
}`),
                            host: wfa.inlineScript('return fd_data.trigger.current.variables.host_details.host_s;'),
                        }),
                    }
                )
                wfa.flowLogic.setFlowVariables(
                    {
                        $id: Now.ID['4bd17f6147aa3a5051a3e84d416d4368'],
                    },
                    _params.flowVariables,
                    {
                        visit_record_to_be_updated: wfa.dataPill(actionInstance_21.record.sys_id, 'GUID'),
                    }
                )
            }
        )
        const actionInstance_23 = wfa.action(
            action.core.lookUpRecord,
            {
                $id: Now.ID['cfd17f6147aa3a5051a3e84d416d4368'],
                uuid: '4d03f757-8d0e-416d-9cca-bb317d8b257a',
            },
            {
                table: 'x_aleen_snguardian_visitor_visit',
                conditions: `sys_id=${wfa.dataPill(_params.flowVariables.visit_record_to_be_updated, 'string')}`,
                sort_column: '',
                sort_type: 'sort_asc',
                if_multiple_records_are_found_action: 'use_first_record',
                dont_fail_flow_on_error: false,
            }
        )
        wfa.action(
            action.core.updateRecord,
            {
                $id: Now.ID['c7d17f6147aa3a5051a3e84d416d4369'],
                annotation: 'Update Visit ID Information in Request',
                uuid: 'e27e1061-9ad9-401d-b5be-682cd5bb1360',
            },
            {
                record: wfa.dataPill(_params.trigger.current, 'reference'),
                table_name: 'x_aleen_snguardian_visitor_request',
                values: TemplateValue({
                    visit: wfa.dataPill(actionInstance_23.Record, 'reference'),
                }),
            }
        )
        wfa.flowLogic.if(
            {
                label: 'User  Not In the  Watch List & No Host Approval required',
                condition: `${wfa.dataPill(_params.flowVariables.is_watchlisted, 'boolean')}=false^${wfa.dataPill(_params.flowVariables.host_confirmation_reqd, 'boolean')}=false`,
                annotation: '',
                $id: Now.ID['03d17f6147aa3a5051a3e84d416d436d'],
                uuid: '0047aef4-8c29-4163-9353-b116ba206bf5',
            },
            () => {
                wfa.action(
                    action.core.updateRecord,
                    {
                        $id: Now.ID['87d17f6147aa3a5051a3e84d416d436d'],
                        annotation: 'Mark Visit as Scheduled',
                        uuid: '3a0ded2f-68d8-4e7c-a729-6870a199291f',
                    },
                    {
                        record: wfa.dataPill(actionInstance_23.Record, 'reference'),
                        table_name: 'x_aleen_snguardian_visitor_visit',
                        values: TemplateValue({
                            status: '{"display":"Scheduled","value":"6b9fb91d2b191a10d4dffd74ce91bf25","sys_id":"6b9fb91d2b191a10d4dffd74ce91bf25"}',
                            work_notes: 'Scheduled Successfully',
                        }),
                    }
                )
                wfa.action(
                    action.core.updateRecord,
                    {
                        $id: Now.ID['8fd17f6147aa3a5051a3e84d416d436d'],
                        uuid: '955c1014-5547-479a-92cc-4fe5a8bced02',
                    },
                    {
                        record: wfa.dataPill(_params.trigger.current, 'reference'),
                        table_name: 'x_aleen_snguardian_visitor_request',
                        values: TemplateValue({
                            state: '3',
                            status: '{"display":"Closed","value":"cc8f8ed51bbc8210759455342a4bcb7a","sys_id":"cc8f8ed51bbc8210759455342a4bcb7a"}',
                            work_notes: 'No Watchlist , No Host approval required',
                        }),
                    }
                )
                wfa.subflow(
                    '3141843733d69610bf1221382e5c7b13',
                    {
                        $id: Now.ID['83d17f6147aa3a5051a3e84d416d436f'],
                        uuid: '8464e35e-3df2-4cd7-ada4-373923fd4b7b',
                    },
                    {
                        visit: wfa.dataPill(_params.flowVariables.visit_record_to_be_updated, 'string'),
                        location: wfa.dataPill(_params.flowVariables.visitor_location, 'string'),
                        to: wfa.dataPill(_params.flowVariables.visitor_email_list, 'string'),
                        type: 'visitScheduled',
                    }
                )
                wfa.action(
                    action.core.createRecord,
                    {
                        $id: Now.ID['0fd17f6147aa3a5051a3e84d416d437c'],
                        uuid: '82b5bda9-e2ce-42c8-a42c-c701c77fed8b',
                    },
                    {
                        table_name: 'x_aleen_snguardian_visit_operation',
                        values: TemplateValue({
                            visit: wfa.inlineScript(`var grVisit = new GlideRecordSecure('x_aleen_snguardian_visitor_visit');
if(grVisit.get(fd_data.flow_var.visit_record_to_be_updated)){
    return grVisit;
}
else{
    return "";
}`),
                            operation: 'Visit for the Visitor has been Scheduled',
                            start_date: wfa.inlineScript(
                                'return fd_data.trigger.current.variables.visit_details.visit_start_date;'
                            ),
                            end_date: wfa.inlineScript(
                                'return fd_data.trigger.current.variables.visit_details.visit_start_date;'
                            ),
                        }),
                    }
                )
                wfa.subflow(
                    '341ebdcb335ed210bf1221382e5c7bc4',
                    {
                        $id: Now.ID['cbd17f6147aa3a5051a3e84d416d437d'],
                        uuid: '395f40f6-c99e-4d71-bc6c-db28884c3f2e',
                    },
                    {
                        visit_record: wfa.inlineScript('return fd_data.flow_var.visit_record_to_be_updated;'),
                        record: wfa.dataPill(_params.trigger.current, 'reference'),
                    }
                )
                wfa.flowLogic.endFlow({
                    annotation: '',
                    $id: Now.ID['8fd17f6147aa3a5051a3e84d416d4380'],
                })
            }
        )
        wfa.flowLogic.else(
            {
                annotation: '',
                $id: Now.ID['cbd17f6147aa3a5051a3e84d416d4383'],
                uuid: 'd4326d07-b0a1-4cbe-83d0-ea2b1b71e6db',
            },
            () => {
                wfa.action(
                    action.core.updateRecord,
                    {
                        $id: Now.ID['43d17f6147aa3a5051a3e84d416d4384'],
                        annotation: 'Visitor Request status is Waiting for Approval',
                        uuid: '8e7722a2-12cc-4b27-b9bb-faa9c3539757',
                    },
                    {
                        record: wfa.dataPill(_params.trigger.current, 'reference'),
                        table_name: 'x_aleen_snguardian_visitor_request',
                        values: TemplateValue({
                            state: '2',
                            status: '{"display":"Awaiting Approval","value":"c08f8ed51bbc8210759455342a4bcb79","sys_id":"c08f8ed51bbc8210759455342a4bcb79"}',
                            work_notes: 'Waiting for approval',
                            stage: 'HOST-APPROVAL',
                        }),
                    }
                )
                wfa.action(
                    action.core.updateRecord,
                    {
                        $id: Now.ID['4bd17f6147aa3a5051a3e84d416d4384'],
                        annotation: 'Mark as waiting for  Approval',
                        uuid: 'c004961b-02f2-4456-a756-38f8bbcfa833',
                    },
                    {
                        record: wfa.dataPill(actionInstance_23.Record, 'reference'),
                        table_name: 'x_aleen_snguardian_visitor_visit',
                        values: TemplateValue({
                            status: '{"display":"Pending Approval","value":"9a8f711d2b191a10d4dffd74ce91bfdc","sys_id":"9a8f711d2b191a10d4dffd74ce91bfdc"}',
                            work_notes: 'Waiting for Approval',
                        }),
                    }
                )
                wfa.flowLogic.if(
                    {
                        label: 'Not In Watchlist But Host approval required',
                        condition: `${wfa.dataPill(_params.flowVariables.host_confirmation_reqd, 'boolean')}=true^${wfa.dataPill(_params.flowVariables.is_watchlisted, 'boolean')}=false`,
                        annotation: 'ask for Host approval, if approved mark as Scheduled  else rejected',
                        $id: Now.ID['83d17f6147aa3a5051a3e84d416d4388'],
                        uuid: 'b7127650-9cdf-4374-ad0b-a6c6e692e34a',
                    },
                    () => {
                        wfa.flowLogic.setFlowVariables(
                            {
                                $id: Now.ID['c3d17f6147aa3a5051a3e84d416d438c'],
                            },
                            _params.flowVariables,
                            {
                                host_list: wfa.inlineScript(
                                    'return fd_data.trigger.current.variables.host_details.host_s;'
                                ),
                            }
                        )
                        wfa.flowLogic.if(
                            {
                                label: 'Request not opened by host',
                                condition: `${wfa.dataPill(_params.flowVariables.host_list, 'reference')}NOT LIKE${wfa.dataPill(_params.trigger.current.opened_by, 'reference')}`,
                                annotation: '',
                                $id: Now.ID['8bd17f6147aa3a5051a3e84d416d438f'],
                                uuid: 'ccd57ada-6389-48c2-b76c-d92a02ddcaf4',
                            },
                            () => {
                                wfa.action(
                                    action.core.askForApproval,
                                    {
                                        $id: Now.ID['4bd17f6147aa3a5051a3e84d416d4390'],
                                        uuid: '7826a1a7-dac1-4186-944f-32de301e27a7',
                                    },
                                    {
                                        record: wfa.dataPill(_params.trigger.current, 'reference'),
                                        table: 'x_aleen_snguardian_visitor_request',
                                        approval_field: 'approval',
                                        journal_field: 'approval_history',
                                        approval_conditions: wfa.approvalRules({
                                            conditionType: 'OR',
                                            ruleSets: [
                                                {
                                                    action: 'Approves',
                                                    conditionType: 'AND',
                                                    rules: [
                                                        [
                                                            {
                                                                ruleType: 'Any',
                                                                users: [
                                                                    wfa.dataPill(
                                                                        _params.flowVariables.host_list,
                                                                        'reference'
                                                                    ),
                                                                ],
                                                                groups: [],
                                                                manual: false,
                                                            },
                                                        ],
                                                    ],
                                                },
                                            ],
                                        }),
                                        due_date: wfa.approvalDueDate({
                                            action: 'none',
                                            dateType: 'actual',
                                            date: '{{}}',
                                            duration: 1,
                                            durationType: 'days',
                                            daysSchedule: '',
                                        }),
                                    }
                                )
                                wfa.subflow(
                                    '3141843733d69610bf1221382e5c7b13',
                                    {
                                        $id: Now.ID['47d17f6147aa3a5051a3e84d416d4391'],
                                        uuid: '5d067977-74de-4ce5-91c2-7e669bee3290',
                                    },
                                    {
                                        visit: wfa.dataPill(_params.flowVariables.visit_record_to_be_updated, 'string'),
                                        location: wfa.dataPill(_params.flowVariables.visitor_location, 'string'),
                                        to: wfa.dataPill(_params.flowVariables.visitor_email_list, 'string'),
                                        type: 'approvalHost',
                                    }
                                )
                            }
                        )
                        wfa.flowLogic.if(
                            {
                                label: 'Host Approved or Host approval skipped',
                                condition: `${wfa.dataPill(actionInstance_38.approval_state, 'choice')}=approved^NQ${wfa.dataPill(_params.flowVariables.host_list, 'reference')}LIKE${wfa.dataPill(_params.trigger.current.opened_by, 'reference')}`,
                                annotation: '',
                                $id: Now.ID['9fd17f6147aa3a5051a3e84d416d4394'],
                                uuid: '5718b9e9-a4da-4917-81e7-7e821fe5c21e',
                            },
                            () => {
                                wfa.action(
                                    action.core.updateRecord,
                                    {
                                        $id: Now.ID['17d17f6147aa3a5051a3e84d416d4395'],
                                        annotation: 'Visitor Request status as closed',
                                        uuid: '66aeab57-9c9b-4eac-8615-78d17c6b4bf8',
                                    },
                                    {
                                        record: wfa.dataPill(_params.trigger.current, 'reference'),
                                        table_name: 'x_aleen_snguardian_visitor_request',
                                        values: TemplateValue({
                                            state: '3',
                                            status: '{"display":"Closed","value":"cc8f8ed51bbc8210759455342a4bcb7a","sys_id":"cc8f8ed51bbc8210759455342a4bcb7a"}',
                                        }),
                                    }
                                )
                                wfa.action(
                                    action.core.updateRecord,
                                    {
                                        $id: Now.ID['1fd17f6147aa3a5051a3e84d416d4395'],
                                        annotation: 'Mark as Scheduled',
                                        uuid: 'feb35770-e12f-404e-ab5a-dbca2908ce92',
                                    },
                                    {
                                        record: wfa.dataPill(actionInstance_23.Record, 'reference'),
                                        table_name: 'x_aleen_snguardian_visitor_visit',
                                        values: TemplateValue({
                                            status: '{"display":"Scheduled","value":"6b9fb91d2b191a10d4dffd74ce91bf25","sys_id":"6b9fb91d2b191a10d4dffd74ce91bf25"}',
                                            work_notes: 'Approved By  Host',
                                        }),
                                    }
                                )
                                wfa.subflow(
                                    '3141843733d69610bf1221382e5c7b13',
                                    {
                                        $id: Now.ID['1bd17f6147aa3a5051a3e84d416d4396'],
                                        uuid: 'b57f9913-a237-4720-a44c-93f13c1d4410',
                                    },
                                    {
                                        visit: wfa.dataPill(_params.flowVariables.visit_record_to_be_updated, 'string'),
                                        location: wfa.dataPill(_params.flowVariables.visitor_location, 'string'),
                                        to: wfa.dataPill(_params.flowVariables.visitor_email_list, 'string'),
                                        type: 'visitScheduled',
                                    }
                                )
                                wfa.action(
                                    action.core.createRecord,
                                    {
                                        $id: Now.ID['13d17f6147aa3a5051a3e84d416d4397'],
                                        uuid: 'b0f0d1bd-47a3-46c1-9362-1ec3a44401b3',
                                    },
                                    {
                                        table_name: 'x_aleen_snguardian_visit_operation',
                                        values: TemplateValue({
                                            visit: wfa.inlineScript(`var grVisit = new GlideRecordSecure('x_aleen_snguardian_visitor_visit');
if(grVisit.get(fd_data.flow_var.visit_record_to_be_updated)){
    return grVisit;
}
else{
    return "";
}`),
                                            operation: 'Visit for the Visitor has been Scheduled',
                                            start_date: wfa.inlineScript(
                                                'return fd_data.trigger.current.variables.visit_details.visit_start_date;'
                                            ),
                                            end_date: wfa.inlineScript(
                                                'return fd_data.trigger.current.variables.visit_details.visit_start_date;'
                                            ),
                                        }),
                                    }
                                )
                                wfa.subflow(
                                    '341ebdcb335ed210bf1221382e5c7bc4',
                                    {
                                        $id: Now.ID['9bd17f6147aa3a5051a3e84d416d4397'],
                                        uuid: '46058a70-f9fb-4ee5-872c-80140dc32bb7',
                                    },
                                    {
                                        visit_record: wfa.inlineScript(
                                            'return fd_data.flow_var.visit_record_to_be_updated;'
                                        ),
                                        record: wfa.dataPill(_params.trigger.current, 'reference'),
                                    }
                                )
                            }
                        )
                        wfa.flowLogic.else(
                            {
                                annotation: '',
                                $id: Now.ID['5bd17f6147aa3a5051a3e84d416d439a'],
                                uuid: '74449c8e-d6f6-4115-ab70-553a42c3e933',
                            },
                            () => {
                                wfa.action(
                                    action.core.updateRecord,
                                    {
                                        $id: Now.ID['dfd17f6147aa3a5051a3e84d416d439a'],
                                        annotation: 'Visitor Request status as closed',
                                        uuid: '22c1023d-6585-4288-a231-54b50790fd01',
                                    },
                                    {
                                        record: wfa.dataPill(_params.trigger.current, 'reference'),
                                        table_name: 'x_aleen_snguardian_visitor_request',
                                        values: TemplateValue({
                                            state: '4',
                                            status: '{"display":"Closed","value":"cc8f8ed51bbc8210759455342a4bcb7a","sys_id":"cc8f8ed51bbc8210759455342a4bcb7a"}',
                                            approval: 'rejected',
                                        }),
                                    }
                                )
                                wfa.action(
                                    action.core.updateRecord,
                                    {
                                        $id: Now.ID['d7d17f6147aa3a5051a3e84d416d439b'],
                                        annotation: 'Mark as Rejected by Host',
                                        uuid: '77686d92-f3ac-42b7-83e3-ca58def03326',
                                    },
                                    {
                                        record: wfa.dataPill(actionInstance_23.Record, 'reference'),
                                        table_name: 'x_aleen_snguardian_visitor_visit',
                                        values: TemplateValue({
                                            status: '{"display":"Rejected","value":"77af7d1d2b191a10d4dffd74ce91bfc6","sys_id":"77af7d1d2b191a10d4dffd74ce91bfc6"}',
                                            work_notes: 'Rejected  by  Host',
                                        }),
                                    }
                                )
                                wfa.subflow(
                                    '3141843733d69610bf1221382e5c7b13',
                                    {
                                        $id: Now.ID['d3d17f6147aa3a5051a3e84d416d439c'],
                                        uuid: '9402c14e-f319-4731-8d8e-15df4cfb4205',
                                    },
                                    {
                                        visit: wfa.dataPill(_params.flowVariables.visit_record_to_be_updated, 'string'),
                                        location: wfa.dataPill(_params.flowVariables.visitor_location, 'string'),
                                        to: `${wfa.dataPill(_params.flowVariables.visitor_location, 'string')}${wfa.dataPill(_params.flowVariables.visitor_email_list, 'string')}`,
                                        type: 'visReqRejected',
                                    }
                                )
                            }
                        )
                        wfa.flowLogic.endFlow({
                            annotation: '',
                            $id: Now.ID['93d17f6147aa3a5051a3e84d416d439f'],
                        })
                    }
                )
                wfa.flowLogic.elseIf(
                    {
                        label: 'Found the watch list but  No Host approval is required',
                        condition: `${wfa.dataPill(_params.flowVariables.is_watchlisted, 'boolean')}=true^${wfa.dataPill(_params.flowVariables.host_confirmation_reqd, 'boolean')}=false`,
                        annotation: 'ask for Security Admin approval, if approved mark as Scheduled  else rejected',
                        $id: Now.ID['13d17f6147aa3a5051a3e84d416d43a3'],
                        uuid: '407daad9-f3ba-4a3c-be3f-9e621294283f',
                    },
                    () => {
                        const actionInstance_52 = wfa.action(
                            action.core.lookUpRecord,
                            {
                                $id: Now.ID['97d17f6147aa3a5051a3e84d416d43a3'],
                                uuid: '5d19dd16-cd5c-42b1-9197-5be5c5d02201',
                            },
                            {
                                table: 'x_aleen_snguardian_badge_office',
                                conditions: `locationsLIKE${wfa.dataPill(_params.flowVariables.visitor_location, 'string')}`,
                                sort_column: '',
                                sort_type: 'sort_asc',
                                if_multiple_records_are_found_action: 'use_first_record',
                                dont_fail_flow_on_error: false,
                            }
                        )
                        wfa.action(
                            action.core.updateRecord,
                            {
                                $id: Now.ID['9fd17f6147aa3a5051a3e84d416d43a3'],
                                annotation: 'Visitor Request admin approval',
                                uuid: '97dc6072-9536-456a-8d2c-1e1d3e54604a',
                            },
                            {
                                record: wfa.dataPill(_params.trigger.current, 'reference'),
                                table_name: 'x_aleen_snguardian_visitor_request',
                                values: TemplateValue({
                                    state: '-5',
                                    status: '{"display":"Awaiting Approval","value":"c08f8ed51bbc8210759455342a4bcb79","sys_id":"c08f8ed51bbc8210759455342a4bcb79"}',
                                    stage: 'ADMIN-APPROVAL',
                                }),
                            }
                        )
                        const actionInstance_54 = wfa.action(
                            action.core.askForApproval,
                            {
                                $id: Now.ID['97d17f6147aa3a5051a3e84d416d43a4'],
                                uuid: '8a462edb-30f3-417e-85aa-4db2b00832d5',
                            },
                            {
                                record: wfa.dataPill(_params.trigger.current, 'reference'),
                                table: 'x_aleen_snguardian_visitor_request',
                                approval_field: 'approval',
                                journal_field: 'approval_history',
                                approval_conditions: wfa.approvalRules({
                                    conditionType: 'OR',
                                    ruleSets: [
                                        {
                                            action: 'Approves',
                                            conditionType: 'AND',
                                            rules: [
                                                [
                                                    {
                                                        ruleType: 'Any',
                                                        users: [
                                                            wfa.dataPill(
                                                                actionInstance_52.Record.security_admin,
                                                                'glide_list'
                                                            ),
                                                        ],
                                                        groups: [],
                                                        manual: false,
                                                    },
                                                ],
                                            ],
                                        },
                                    ],
                                }),
                                due_date: wfa.approvalDueDate({
                                    action: 'none',
                                    dateType: 'actual',
                                    date: '{{}}',
                                    duration: 1,
                                    durationType: 'days',
                                    daysSchedule: '',
                                }),
                            }
                        )
                        wfa.subflow(
                            '3141843733d69610bf1221382e5c7b13',
                            {
                                $id: Now.ID['93d17f6147aa3a5051a3e84d416d43a5'],
                                uuid: 'aa4ec1aa-d214-44c5-bcc8-88da77596cd2',
                            },
                            {
                                visit: wfa.dataPill(_params.flowVariables.visit_record_to_be_updated, 'string'),
                                location: wfa.dataPill(_params.flowVariables.visitor_location, 'string'),
                                to: wfa.dataPill(_params.flowVariables.visitor_email_list, 'string'),
                                type: 'approvalSecurity',
                            }
                        )
                        wfa.flowLogic.if(
                            {
                                label: 'Approved',
                                condition: `${wfa.dataPill(actionInstance_54.approval_state, 'choice')}=approved`,
                                annotation: '',
                                $id: Now.ID['dbd17f6147aa3a5051a3e84d416d43a8'],
                                uuid: '15b50a28-0d28-4de8-b623-6d9406189af5',
                            },
                            () => {
                                wfa.action(
                                    action.core.updateRecord,
                                    {
                                        $id: Now.ID['53d17f6147aa3a5051a3e84d416d43a9'],
                                        annotation: 'Visitor Request status as closed',
                                        uuid: 'cc472918-18d6-4c61-842d-6b15664fd53d',
                                    },
                                    {
                                        record: wfa.dataPill(_params.trigger.current, 'reference'),
                                        table_name: 'x_aleen_snguardian_visitor_request',
                                        values: TemplateValue({
                                            state: '3',
                                            status: '{"display":"Closed","value":"cc8f8ed51bbc8210759455342a4bcb7a","sys_id":"cc8f8ed51bbc8210759455342a4bcb7a"}',
                                        }),
                                    }
                                )
                                wfa.action(
                                    action.core.updateRecord,
                                    {
                                        $id: Now.ID['5bd17f6147aa3a5051a3e84d416d43a9'],
                                        annotation: 'Mark as Scheduled',
                                        uuid: '178a59df-6cda-4aa4-b498-2cb178a2dc1e',
                                    },
                                    {
                                        record: wfa.dataPill(actionInstance_23.Record, 'reference'),
                                        table_name: 'x_aleen_snguardian_visitor_visit',
                                        values: TemplateValue({
                                            status: '{"display":"Scheduled","value":"6b9fb91d2b191a10d4dffd74ce91bf25","sys_id":"6b9fb91d2b191a10d4dffd74ce91bf25"}',
                                            work_notes: 'Approved By Security Admin',
                                        }),
                                    }
                                )
                                wfa.subflow(
                                    '3141843733d69610bf1221382e5c7b13',
                                    {
                                        $id: Now.ID['57d17f6147aa3a5051a3e84d416d43aa'],
                                        uuid: '7987f31b-71dd-48a4-bf96-b9d1447c0dd1',
                                    },
                                    {
                                        visit: wfa.dataPill(_params.flowVariables.visit_record_to_be_updated, 'string'),
                                        location: wfa.dataPill(_params.flowVariables.visitor_location, 'string'),
                                        to: wfa.dataPill(_params.flowVariables.visitor_email_list, 'string'),
                                        type: 'visitScheduled',
                                    }
                                )
                                wfa.action(
                                    action.core.createRecord,
                                    {
                                        $id: Now.ID['5fd17f6147aa3a5051a3e84d416d43aa'],
                                        uuid: 'fbf4e7c4-b916-4072-8708-e6cfeb695ab0',
                                    },
                                    {
                                        table_name: 'x_aleen_snguardian_visit_operation',
                                        values: TemplateValue({
                                            visit: wfa.inlineScript(`var grVisit = new GlideRecordSecure('x_aleen_snguardian_visitor_visit');
if(grVisit.get(fd_data.flow_var.visit_record_to_be_updated)){
    return grVisit;
}
else{
    return "";
}`),
                                            operation: 'Visit for the Visitor has been Scheduled',
                                            start_date: wfa.inlineScript(
                                                'return fd_data.trigger.current.variables.visit_details.visit_start_date;'
                                            ),
                                            end_date: wfa.inlineScript(
                                                'return fd_data.trigger.current.variables.visit_details.visit_start_date;'
                                            ),
                                        }),
                                    }
                                )
                                wfa.subflow(
                                    '341ebdcb335ed210bf1221382e5c7bc4',
                                    {
                                        $id: Now.ID['d7d17f6147aa3a5051a3e84d416d43ab'],
                                        uuid: '0b8287e2-2f9e-4bd7-9a7e-70496e5f63eb',
                                    },
                                    {
                                        visit_record: wfa.inlineScript(
                                            'return fd_data.flow_var.visit_record_to_be_updated;'
                                        ),
                                        record: wfa.dataPill(_params.trigger.current, 'reference'),
                                    }
                                )
                                wfa.flowLogic.endFlow({
                                    annotation: '',
                                    $id: Now.ID['5fd17f6147aa3a5051a3e84d416d43ba'],
                                })
                            }
                        )
                        wfa.flowLogic.else(
                            {
                                annotation: '',
                                $id: Now.ID['9bd17f6147aa3a5051a3e84d416d43bd'],
                                uuid: '38c60fbc-534a-431f-be02-0969c242893a',
                            },
                            () => {
                                wfa.action(
                                    action.core.updateRecord,
                                    {
                                        $id: Now.ID['13d17f6147aa3a5051a3e84d416d43be'],
                                        annotation: 'Visitor Request status as closed',
                                        uuid: 'c7461e59-8ab2-46f9-b438-74ef1cfe2540',
                                    },
                                    {
                                        record: wfa.dataPill(_params.trigger.current, 'reference'),
                                        table_name: 'x_aleen_snguardian_visitor_request',
                                        values: TemplateValue({
                                            state: '4',
                                            status: '{"display":"Closed","value":"cc8f8ed51bbc8210759455342a4bcb7a","sys_id":"cc8f8ed51bbc8210759455342a4bcb7a"}',
                                            approval: 'rejected',
                                        }),
                                    }
                                )
                                wfa.action(
                                    action.core.updateRecord,
                                    {
                                        $id: Now.ID['1bd17f6147aa3a5051a3e84d416d43be'],
                                        annotation: 'Mark as Rejected by Security Admin',
                                        uuid: '58a84fbc-4771-4c88-90c2-7e922c3c27a8',
                                    },
                                    {
                                        record: wfa.dataPill(actionInstance_23.Record, 'reference'),
                                        table_name: 'x_aleen_snguardian_visitor_visit',
                                        values: TemplateValue({
                                            status: '{"display":"Rejected","value":"77af7d1d2b191a10d4dffd74ce91bfc6","sys_id":"77af7d1d2b191a10d4dffd74ce91bfc6"}',
                                            work_notes: 'Rejected by  Security Admin',
                                        }),
                                    }
                                )
                                wfa.subflow(
                                    '3141843733d69610bf1221382e5c7b13',
                                    {
                                        $id: Now.ID['17d17f6147aa3a5051a3e84d416d43bf'],
                                        uuid: '0543393a-ff1c-462c-ac7a-5202ce3931bc',
                                    },
                                    {
                                        visit: wfa.dataPill(_params.flowVariables.visit_record_to_be_updated, 'string'),
                                        location: wfa.dataPill(_params.flowVariables.visitor_location, 'string'),
                                        to: wfa.dataPill(_params.flowVariables.visitor_email_list, 'string'),
                                        type: 'visReqRejected',
                                    }
                                )
                            }
                        )
                        wfa.flowLogic.endFlow({
                            annotation: '',
                            $id: Now.ID['1bd17f6147aa3a5051a3e84d416d43c0'],
                        })
                    }
                )
                wfa.flowLogic.elseIf(
                    {
                        label: 'Found in Watchlist & Requires Host Confirmation',
                        condition: `${wfa.dataPill(_params.flowVariables.is_watchlisted, 'boolean')}=true^${wfa.dataPill(_params.flowVariables.host_confirmation_reqd, 'boolean')}=true`,
                        annotation:
                            'ask for  Security admin Approval first , once approved by security ask for Host approval, if approved mark as Scheduled  else rejected',
                        $id: Now.ID['53d17f6147aa3a5051a3e84d416d43c4'],
                        uuid: 'a4e84d88-049d-4feb-8ed4-d015c2bcfa41',
                    },
                    () => {
                        const actionInstance_69 = wfa.action(
                            action.core.lookUpRecord,
                            {
                                $id: Now.ID['d7d17f6147aa3a5051a3e84d416d43c4'],
                                uuid: '1fe04f94-c330-430e-8259-32e6147432a0',
                            },
                            {
                                table: 'x_aleen_snguardian_badge_office',
                                conditions: `locationsLIKE${wfa.dataPill(_params.flowVariables.visitor_location, 'string')}`,
                                sort_column: '',
                                sort_type: 'sort_asc',
                                if_multiple_records_are_found_action: 'use_first_record',
                                dont_fail_flow_on_error: false,
                            }
                        )
                        wfa.action(
                            action.core.updateRecord,
                            {
                                $id: Now.ID['dfd17f6147aa3a5051a3e84d416d43c4'],
                                annotation: 'update work notes Security admin approval',
                                uuid: '1b34059a-7dfa-479d-908f-94eba0123ace',
                            },
                            {
                                record: wfa.dataPill(_params.trigger.current, 'reference'),
                                table_name: 'x_aleen_snguardian_visitor_request',
                                values: TemplateValue({
                                    work_notes: 'Request is pending approval from security admin',
                                    stage: 'ADMIN-APPROVAL',
                                }),
                            }
                        )
                        const actionInstance_71 = wfa.action(
                            action.core.askForApproval,
                            {
                                $id: Now.ID['d7d17f6147aa3a5051a3e84d416d43c5'],
                                annotation: 'First Security Admin Approval',
                                uuid: 'e1539cb1-703e-4581-a91b-d51427447871',
                            },
                            {
                                record: wfa.dataPill(_params.trigger.current, 'reference'),
                                table: 'x_aleen_snguardian_visitor_request',
                                approval_field: 'approval',
                                journal_field: 'approval_history',
                                approval_conditions: wfa.approvalRules({
                                    conditionType: 'OR',
                                    ruleSets: [
                                        {
                                            action: 'Approves',
                                            conditionType: 'AND',
                                            rules: [
                                                [
                                                    {
                                                        ruleType: 'Any',
                                                        users: [
                                                            wfa.dataPill(
                                                                actionInstance_69.Record.security_admin,
                                                                'glide_list'
                                                            ),
                                                        ],
                                                        groups: [],
                                                        manual: false,
                                                    },
                                                ],
                                            ],
                                        },
                                    ],
                                }),
                                due_date: wfa.approvalDueDate({
                                    action: 'none',
                                    dateType: 'actual',
                                    date: '{{}}',
                                    duration: 1,
                                    durationType: 'days',
                                    daysSchedule: '',
                                }),
                            }
                        )
                        wfa.subflow(
                            '3141843733d69610bf1221382e5c7b13',
                            {
                                $id: Now.ID['d3d17f6147aa3a5051a3e84d416d43c6'],
                                uuid: '11d25551-2b91-4f5b-9de1-dd9b18bb7039',
                            },
                            {
                                visit: wfa.dataPill(_params.flowVariables.visit_record_to_be_updated, 'string'),
                                location: wfa.dataPill(_params.flowVariables.visitor_location, 'string'),
                                to: wfa.dataPill(_params.flowVariables.visitor_email_list, 'string'),
                                type: 'approvalSecurity',
                            }
                        )
                        wfa.flowLogic.if(
                            {
                                label: 'Approved by Security admin',
                                condition: `${wfa.dataPill(actionInstance_71.approval_state, 'choice')}=approved`,
                                annotation: '',
                                $id: Now.ID['1fd17f6147aa3a5051a3e84d416d43c9'],
                                uuid: '39db6d14-47ea-4be0-ace5-9a10cdca400d',
                            },
                            () => {
                                wfa.action(
                                    action.core.updateRecord,
                                    {
                                        $id: Now.ID['93d17f6147aa3a5051a3e84d416d43ca'],
                                        annotation: 'update work notes Security admin approved',
                                        uuid: 'be85e6c1-df6c-449a-b349-ebf4eb97a239',
                                    },
                                    {
                                        record: wfa.dataPill(_params.trigger.current, 'reference'),
                                        table_name: 'x_aleen_snguardian_visitor_request',
                                        values: TemplateValue({
                                            work_notes: 'Security admin approved',
                                        }),
                                    }
                                )
                                wfa.action(
                                    action.core.updateRecord,
                                    {
                                        $id: Now.ID['9bd17f6147aa3a5051a3e84d416d43ca'],
                                        annotation: 'update work notes Security admin approved',
                                        uuid: '0da87b23-9561-4dca-a7e0-a60ac88edbb1',
                                    },
                                    {
                                        record: wfa.dataPill(actionInstance_23.Record, 'reference'),
                                        table_name: 'x_aleen_snguardian_visitor_visit',
                                        values: TemplateValue({
                                            work_notes: 'Security admin approved',
                                        }),
                                    }
                                )
                            }
                        )
                        wfa.flowLogic.else(
                            {
                                annotation: '',
                                $id: Now.ID['5bd17f6147aa3a5051a3e84d416d43cd'],
                                uuid: '66b37e00-f7b1-4b9a-a90e-433a08fd02e6',
                            },
                            () => {
                                wfa.action(
                                    action.core.updateRecord,
                                    {
                                        $id: Now.ID['dfd17f6147aa3a5051a3e84d416d43cd'],
                                        annotation: 'Visitor Request status as closed',
                                        uuid: '38958310-cae6-4976-b2c0-a52d8a6b5443',
                                    },
                                    {
                                        record: wfa.dataPill(_params.trigger.current, 'reference'),
                                        table_name: 'x_aleen_snguardian_visitor_request',
                                        values: TemplateValue({
                                            approval: 'rejected',
                                            work_notes: 'Request rejected by system admin',
                                        }),
                                    }
                                )
                                wfa.action(
                                    action.core.updateRecord,
                                    {
                                        $id: Now.ID['d7d17f6147aa3a5051a3e84d416d43ce'],
                                        annotation: 'Mark as Rejected by Security Admin',
                                        uuid: 'd61a19cc-d9a6-401e-a98b-e4f40e17e7d9',
                                    },
                                    {
                                        record: wfa.dataPill(actionInstance_23.Record, 'reference'),
                                        table_name: 'x_aleen_snguardian_visitor_visit',
                                        values: TemplateValue({
                                            status: '{"display":"Rejected","value":"77af7d1d2b191a10d4dffd74ce91bfc6","sys_id":"77af7d1d2b191a10d4dffd74ce91bfc6"}',
                                            work_notes: 'Rejected  for  Security Admin',
                                        }),
                                    }
                                )
                                wfa.subflow(
                                    '3141843733d69610bf1221382e5c7b13',
                                    {
                                        $id: Now.ID['d3d17f6147aa3a5051a3e84d416d43cf'],
                                        uuid: 'fcb3cef1-c657-4d47-a851-04ff3048622c',
                                    },
                                    {
                                        visit: wfa.dataPill(_params.flowVariables.visit_record_to_be_updated, 'string'),
                                        location: wfa.dataPill(_params.flowVariables.visitor_location, 'string'),
                                        to: wfa.dataPill(_params.flowVariables.visitor_email_list, 'string'),
                                        type: 'visReqRejected',
                                    }
                                )
                            }
                        )
                        wfa.flowLogic.if(
                            {
                                label: 'Proceed for Host Approval',
                                condition: `${wfa.dataPill(_params.flowVariables.is_non_watchlisted, 'boolean')}=true^${wfa.dataPill(_params.flowVariables.check_in_as_one, 'boolean')}=false^OR${wfa.dataPill(_params.flowVariables.is_watchlisted, 'boolean')}=true^${wfa.dataPill(_params.flowVariables.check_in_as_one, 'boolean')}=false`,
                                annotation: '',
                                $id: Now.ID['93d17f6147aa3a5051a3e84d416d43d0'],
                                uuid: '4cc3a11c-f53d-4777-a8b8-c2929dd5c60e',
                            },
                            () => {
                                wfa.flowLogic.setFlowVariables(
                                    {
                                        $id: Now.ID['d3d17f6147aa3a5051a3e84d416d43d4'],
                                    },
                                    _params.flowVariables,
                                    {
                                        host_list: wfa.inlineScript(
                                            'return fd_data.trigger.current.variables.host_details.host_s;'
                                        ),
                                    }
                                )
                                wfa.action(
                                    action.core.updateRecord,
                                    {
                                        $id: Now.ID['5bd17f6147aa3a5051a3e84d416d43d4'],
                                        annotation: 'Visitor Request status as closed',
                                        uuid: 'cb7d3ae7-525d-4d05-b0be-a5f43ecad42b',
                                    },
                                    {
                                        record: wfa.dataPill(_params.trigger.current, 'reference'),
                                        table_name: 'x_aleen_snguardian_visitor_request',
                                        values: TemplateValue({
                                            work_notes: 'Host approval pending',
                                            stage: 'HOST-APPROVAL',
                                        }),
                                    }
                                )
                                wfa.flowLogic.if(
                                    {
                                        label: 'Request is not opened by host',
                                        condition: `${wfa.dataPill(_params.flowVariables.host_list, 'reference')}NOT LIKE${wfa.dataPill(_params.trigger.current.opened_by, 'reference')}`,
                                        annotation: '',
                                        $id: Now.ID['93d17f6147aa3a5051a3e84d416d43d8'],
                                        uuid: 'bee87704-d9d2-4072-b9f2-756939cc642b',
                                    },
                                    () => {
                                        wfa.subflow(
                                            '3141843733d69610bf1221382e5c7b13',
                                            {
                                                $id: Now.ID['17d17f6147aa3a5051a3e84d416d43d9'],
                                                uuid: '9d64e15e-77a4-4613-94e0-fdbeb42fc8b2',
                                            },
                                            {
                                                visit: wfa.dataPill(
                                                    _params.flowVariables.visit_record_to_be_updated,
                                                    'string'
                                                ),
                                                location: wfa.dataPill(
                                                    _params.flowVariables.visitor_location,
                                                    'string'
                                                ),
                                                to: wfa.dataPill(_params.flowVariables.visitor_email_list, 'string'),
                                                type: 'approvalHost',
                                            }
                                        )
                                        wfa.action(
                                            action.core.askForApproval,
                                            {
                                                $id: Now.ID['1bd17f6147aa3a5051a3e84d416d43d8'],
                                                annotation: 'Host Approval',
                                                uuid: '159913c0-d7c6-463f-a04b-0633e10e56f8',
                                            },
                                            {
                                                record: wfa.dataPill(_params.trigger.current, 'reference'),
                                                table: 'x_aleen_snguardian_visitor_request',
                                                approval_field: 'approval',
                                                journal_field: 'approval_history',
                                                approval_conditions: wfa.approvalRules({
                                                    conditionType: 'OR',
                                                    ruleSets: [
                                                        {
                                                            action: 'Approves',
                                                            conditionType: 'AND',
                                                            rules: [
                                                                [
                                                                    {
                                                                        ruleType: 'Any',
                                                                        users: [
                                                                            wfa.dataPill(
                                                                                _params.flowVariables.host_list,
                                                                                'reference'
                                                                            ),
                                                                        ],
                                                                        groups: [],
                                                                        manual: false,
                                                                    },
                                                                ],
                                                            ],
                                                        },
                                                    ],
                                                }),
                                                due_date: wfa.approvalDueDate({
                                                    action: 'none',
                                                    dateType: 'actual',
                                                    date: '{{}}',
                                                    duration: 1,
                                                    durationType: 'days',
                                                    daysSchedule: '',
                                                }),
                                            }
                                        )
                                    }
                                )
                                wfa.flowLogic.if(
                                    {
                                        label: 'Host Approved or Request opened by host',
                                        condition: `${wfa.dataPill(actionInstance_85.approval_state, 'choice')}=approved^NQ${wfa.dataPill(_params.flowVariables.host_list, 'reference')}LIKE${wfa.dataPill(_params.trigger.current.opened_by, 'reference')}`,
                                        annotation: '',
                                        $id: Now.ID['5fd17f6147aa3a5051a3e84d416d43dc'],
                                        uuid: 'ee578330-2198-4291-9ee9-c7582169f8fb',
                                    },
                                    () => {
                                        wfa.action(
                                            action.core.updateRecord,
                                            {
                                                $id: Now.ID['d3d17f6147aa3a5051a3e84d416d43dd'],
                                                annotation: 'Visitor Request status as closed',
                                                uuid: 'f65c9ce9-823e-472f-8657-67911b5dba20',
                                            },
                                            {
                                                record: wfa.dataPill(_params.trigger.current, 'reference'),
                                                table_name: 'x_aleen_snguardian_visitor_request',
                                                values: TemplateValue({
                                                    state: '3',
                                                    status: '{"display":"Closed","value":"cc8f8ed51bbc8210759455342a4bcb7a","sys_id":"cc8f8ed51bbc8210759455342a4bcb7a"}',
                                                }),
                                            }
                                        )
                                        wfa.action(
                                            action.core.updateRecord,
                                            {
                                                $id: Now.ID['dbd17f6147aa3a5051a3e84d416d43dd'],
                                                annotation: 'Mark as Scheduled',
                                                uuid: '9ccd94c2-8986-4ff6-b686-bb5a118edd66',
                                            },
                                            {
                                                record: wfa.dataPill(actionInstance_23.Record, 'reference'),
                                                table_name: 'x_aleen_snguardian_visitor_visit',
                                                values: TemplateValue({
                                                    status: '{"display":"Scheduled","value":"6b9fb91d2b191a10d4dffd74ce91bf25","sys_id":"6b9fb91d2b191a10d4dffd74ce91bf25"}',
                                                    work_notes: 'Approved by Host',
                                                }),
                                            }
                                        )
                                        wfa.subflow(
                                            '3141843733d69610bf1221382e5c7b13',
                                            {
                                                $id: Now.ID['d7d17f6147aa3a5051a3e84d416d43de'],
                                                uuid: '4841269d-4b4e-4f24-9eba-32f00b22ea45',
                                            },
                                            {
                                                visit: wfa.dataPill(
                                                    _params.flowVariables.visit_record_to_be_updated,
                                                    'string'
                                                ),
                                                location: wfa.dataPill(
                                                    _params.flowVariables.visitor_location,
                                                    'string'
                                                ),
                                                to: wfa.dataPill(_params.flowVariables.visitor_email_list, 'string'),
                                                type: 'visitScheduled',
                                            }
                                        )
                                        wfa.action(
                                            action.core.createRecord,
                                            {
                                                $id: Now.ID['dfd17f6147aa3a5051a3e84d416d43de'],
                                                uuid: '65cae32b-60db-4cf0-bb15-adcf39f1a358',
                                            },
                                            {
                                                table_name: 'x_aleen_snguardian_visit_operation',
                                                values: TemplateValue({
                                                    visit: wfa.inlineScript(`var grVisit = new GlideRecordSecure('x_aleen_snguardian_visitor_visit');
if(grVisit.get(fd_data.flow_var.visit_record_to_be_updated)){
    return grVisit;
}
else{
    return "";
}`),
                                                    operation: 'Visit for the Visitor has been Scheduled',
                                                    start_date: wfa.inlineScript(
                                                        'return fd_data.trigger.current.variables.visit_details.visit_start_date;'
                                                    ),
                                                    end_date: wfa.inlineScript(
                                                        'return fd_data.trigger.current.variables.visit_details.visit_start_date;'
                                                    ),
                                                }),
                                            }
                                        )
                                        wfa.subflow(
                                            '341ebdcb335ed210bf1221382e5c7bc4',
                                            {
                                                $id: Now.ID['5bd17f6147aa3a5051a3e84d416d43df'],
                                                uuid: '45b2d8c2-1533-40f1-8cc8-0700f32f106b',
                                            },
                                            {
                                                visit_record: wfa.inlineScript(
                                                    'return fd_data.flow_var.visit_record_to_be_updated;'
                                                ),
                                                record: wfa.dataPill(_params.trigger.current, 'reference'),
                                            }
                                        )
                                        wfa.flowLogic.endFlow({
                                            annotation: '',
                                            $id: Now.ID['1bd17f6147aa3a5051a3e84d416d43e2'],
                                        })
                                    }
                                )
                                wfa.flowLogic.else(
                                    {
                                        annotation: '',
                                        $id: Now.ID['57d17f6147aa3a5051a3e84d416d43e5'],
                                        uuid: 'a62cefda-4c51-4af5-9142-7f28e497b54d',
                                    },
                                    () => {
                                        wfa.action(
                                            action.core.updateRecord,
                                            {
                                                $id: Now.ID['dfd17f6147aa3a5051a3e84d416d43e6'],
                                                annotation: 'Visitor Request status as closed',
                                                uuid: 'f7ca08c5-17a0-4b00-be98-442601220061',
                                            },
                                            {
                                                record: wfa.dataPill(_params.trigger.current, 'reference'),
                                                table_name: 'x_aleen_snguardian_visitor_request',
                                                values: TemplateValue({
                                                    state: '4',
                                                    status: '{"display":"Closed","value":"cc8f8ed51bbc8210759455342a4bcb7a","sys_id":"cc8f8ed51bbc8210759455342a4bcb7a"}',
                                                }),
                                            }
                                        )
                                        wfa.action(
                                            action.core.updateRecord,
                                            {
                                                $id: Now.ID['dbd17f6147aa3a5051a3e84d416d43e5'],
                                                annotation: 'Mark as Rejected by Host',
                                                uuid: '10459015-6706-4907-990c-11d8e977bebd',
                                            },
                                            {
                                                record: wfa.dataPill(actionInstance_23.Record, 'reference'),
                                                table_name: 'x_aleen_snguardian_visitor_visit',
                                                values: TemplateValue({
                                                    status: '{"display":"Rejected","value":"77af7d1d2b191a10d4dffd74ce91bfc6","sys_id":"77af7d1d2b191a10d4dffd74ce91bfc6"}',
                                                    work_notes: 'Rejected  for  Host',
                                                }),
                                            }
                                        )
                                        wfa.subflow(
                                            '3141843733d69610bf1221382e5c7b13',
                                            {
                                                $id: Now.ID['d7d17f6147aa3a5051a3e84d416d43e6'],
                                                uuid: 'dfd8285c-131a-44ae-bdb6-39eb1324a883',
                                            },
                                            {
                                                visit: wfa.dataPill(
                                                    _params.flowVariables.visit_record_to_be_updated,
                                                    'string'
                                                ),
                                                location: wfa.dataPill(
                                                    _params.flowVariables.visitor_location,
                                                    'string'
                                                ),
                                                to: wfa.dataPill(_params.flowVariables.visitor_email_list, 'string'),
                                                type: 'visReqRejected',
                                            }
                                        )
                                        wfa.flowLogic.endFlow({
                                            annotation: '',
                                            $id: Now.ID['9fd17f6147aa3a5051a3e84d416d43e9'],
                                        })
                                    }
                                )
                            }
                        )
                        wfa.action(
                            action.core.updateRecord,
                            {
                                $id: Now.ID['d21580fd47ea3a5051a3e84d416d43db'],
                                annotation: 'Mark as Rejected by Host',
                                uuid: 'b7eea277-7dc3-446a-8046-2e4020de0d9d',
                            },
                            {
                                record: wfa.dataPill(actionInstance_23.Record, 'reference'),
                                table_name: 'x_aleen_snguardian_visitor_visit',
                                values: TemplateValue({
                                    status: '{"display":"Rejected","value":"77af7d1d2b191a10d4dffd74ce91bfc6","sys_id":"77af7d1d2b191a10d4dffd74ce91bfc6"}',
                                    work_notes: 'Visit is rejected',
                                }),
                            }
                        )
                    }
                )
            }
        )
    }
)
