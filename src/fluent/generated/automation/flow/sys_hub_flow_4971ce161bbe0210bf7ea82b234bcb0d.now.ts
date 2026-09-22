import { Flow, wfa, trigger, action } from '@servicenow/sdk/automation'
import { StringColumn } from '@servicenow/sdk/core'

Flow(
    {
        $id: Now.ID['4971ce161bbe0210bf7ea82b234bcb0d'],
        name: 'Alert Area Approval Change Access Request',
        internalName: 'area_approval_change_access_request_flow',
        description: 'New Badge Request Flow',
        runAs: 'system',
        masterSnapshot: '4f86acf61b768210207b2179b04bcb27',
        flowVariables: {
            assign_existing_badges: StringColumn({
                label: 'assign_existing_badges',
                maxLength: 8000,
            }),
            access_level_names: StringColumn({
                label: 'access_level_names',
                maxLength: 8000,
            }),
            approver_names: StringColumn({
                label: 'approver_names',
                maxLength: 8000,
            }),
        },
    },
    wfa.trigger(
        trigger.record.created,
        {
            $id: Now.ID['c2ae92e04795b610f487c24fe16d4358'],
        },
        {
            table: 'x_aleen_snguardian_request',
            condition: 'request_type=7753f3361bec0650759455342a4bcb0b^submitted_by=USER',
            run_on_extended: 'false',
            run_flow_in: 'any',
            run_when_user_list: [],
            run_when_setting: 'both',
            run_when_user_setting: 'any',
        }
    ),
    (_params) => {
        const actionInstance_1 = wfa.action(
            '8b778eda1bbe0210bf7ea82b234bcba1',
            {
                $id: Now.ID['0eae92e04795b610f487c24fe16d4360'],
                uuid: '544c8c4c-ec1e-4a8d-abc5-0e5aa2ced4c2',
            },
            {
                variable: wfa.dataPill(_params.trigger.current, 'reference'),
            }
        )
        wfa.flowLogic.forEach(
            wfa.dataPill(actionInstance_1.result, 'array.object'),
            {
                annotation: '',
                $id: Now.ID['8eae92e04795b610f487c24fe16d4365'],
            },
            (item_2) => {
                const actionInstance_3 = wfa.action(
                    action.core.recordProducer,
                    {
                        $id: Now.ID['46ae92e04795b610f487c24fe16d4367'],
                        uuid: '3fdb540d-67c8-482d-865b-911c50b4a407',
                    },
                    {
                        catalog_item: '65c53fe21bb28210207b2179b04bcb89',
                        catalog_item_inputs: `{"inputs":[{"id":"b6b805931b768210bf7ea82b234bcb67","label":"Request Type","name":"request_type","type":"reference","type_label":"Reference","order":0,"extended":false,"mandatory":false,"readonly":false,"maxsize":0,"children":[],"data_structure":"","reference":"sc_cat_item_producer","reference_display":"Record Producer","ref_qual":"","choiceOption":"","table":"item_option_new","columnName":"","defaultValue":"{\\"display\\":\\"\\",\\"value\\":\\"\\"}","defaultDisplayValue":"","use_dependent":false,"dependent_on":"","internal_link":"","show_ref_finder":false,"local":false,"attributes":{"catalogType":"8","catalogTypeLabel":"Reference","fd_hide_inline_script_widget":"true"},"sys_class_name":"","canDrop":true,"field_name":"request_type","value":"{\\"display\\":\\"Access Request\\",\\"value\\":\\"65c53fe21bb28210207b2179b04bcb89\\",\\"table\\":\\"sc_cat_item_producer\\",\\"sys_id\\":\\"65c53fe21bb28210207b2179b04bcb89\\"}","isNew":true,"userHasChanged":false},{"id":"7e7741e51bcf0610207b2179b04bcbdf","label":"Parent Request","name":"parent","type":"reference","type_label":"Reference","order":0,"extended":false,"mandatory":false,"readonly":false,"maxsize":0,"children":[],"data_structure":"","reference":"x_aleen_snguardian_request","reference_display":"Request","ref_qual":"","choiceOption":"","table":"item_option_new","columnName":"","defaultValue":"{\\"display\\":\\"\\",\\"value\\":\\"\\"}","defaultDisplayValue":"","use_dependent":false,"dependent_on":"","internal_link":"","show_ref_finder":false,"local":false,"attributes":{"catalogType":"8","catalogTypeLabel":"Reference","fd_hide_inline_script_widget":"true"},"sys_class_name":"","canDrop":true,"field_name":"parent","value":"${wfa.dataPill(_params.trigger.current, 'reference')}","isNew":true,"userHasChanged":false},{"id":"40033b7f1bb60610207b2179b04bcbd3","label":"Request For","name":"request_for","type":"reference","type_label":"Reference","order":0,"extended":false,"mandatory":false,"readonly":false,"maxsize":0,"children":[],"data_structure":"","reference":"x_aleen_snguardian_identity","reference_display":"Identity","ref_qual":"","choiceOption":"","table":"item_option_new","columnName":"","defaultValue":"{\\"display\\":\\"\\",\\"value\\":\\"\\"}","defaultDisplayValue":"","use_dependent":false,"dependent_on":"","internal_link":"","show_ref_finder":false,"local":false,"attributes":{"catalogType":"8","catalogTypeLabel":"Reference","fd_hide_inline_script_widget":"true"},"sys_class_name":"","canDrop":true,"field_name":"request_for","value":"${wfa.dataPill(_params.trigger.current.request_for, 'reference')}","isNew":true,"userHasChanged":false},{"id":"da9ed0f2470de250f487c24fe16d4307","label":"Location","name":"location","type":"reference","type_label":"Reference","order":0,"extended":false,"mandatory":false,"readonly":false,"maxsize":0,"children":[],"data_structure":"","reference":"x_aleen_snguardian_location","reference_display":"Location","ref_qual":"","choiceOption":"","table":"item_option_new","columnName":"","defaultValue":"{\\"display\\":\\"\\",\\"value\\":\\"\\"}","defaultDisplayValue":"","use_dependent":false,"dependent_on":"","internal_link":"","show_ref_finder":false,"local":false,"attributes":{"catalogType":"8","catalogTypeLabel":"Reference","fd_hide_inline_script_widget":"true"},"sys_class_name":"","canDrop":true,"field_name":"location","value":"${wfa.dataPill(_params.trigger.current.location, 'reference')}","isNew":true,"userHasChanged":false},{"id":"135e12001b684e106962fe60cd4bcb87","label":"Access Levels","name":"access_levels","type":"array.object","type_label":"Array.Object","order":0,"extended":false,"mandatory":false,"readonly":false,"maxsize":0,"children":[{"type":"object","type_label":"Object","name":"access_levels.access_levels","label":"Access Levels","hint":"","maxsize":"","defaultValue":"","uiUniqueId":"f0f44557-041c-4cad-9b4f-a80dfdb30a85","parent":"access_levels","cannotBeDeleted":true,"value":"","attributes":{"fd_hide_inline_script_widget":"true"},"nameToBeEdited":false,"children":[{"id":"0fd983b61b740210759455342a4bcb8b","label":"Record Status","name":"access_record_status","type":"choice","type_label":"Choice","order":0,"extended":false,"mandatory":false,"readonly":false,"maxsize":0,"children":[],"data_structure":"","reference":"","reference_display":"","ref_qual":"","choices":[{"label":"Existing","value":"EXISTING","order":100},{"label":"New","value":"NEW","order":100}],"choiceOption":"","table":"","columnName":"","defaultValue":"","defaultDisplayValue":"","use_dependent":false,"dependent_on":"","internal_link":"","show_ref_finder":false,"local":false,"attributes":{"catalogType":"5","catalogTypeLabel":"Select Box","fd_hide_inline_script_widget":"true"},"sys_class_name":"","fieldFacetMap":{},"value":"","scriptActive":false,"script":{},"display_value":"","canDrop":true,"field_name":"access_record_status"},{"id":"2ace193b1b90de50bf7ea82b234bcba8","label":"Associated Asset","name":"associated_asset","type":"choice","type_label":"Choice","order":0,"extended":false,"mandatory":false,"readonly":false,"maxsize":0,"children":[],"data_structure":"","reference":"","reference_display":"","ref_qual":"","choices":[{"label":"New","value":"NEW","order":100}],"choiceOption":"","table":"","columnName":"","defaultValue":"","defaultDisplayValue":"","use_dependent":false,"dependent_on":"","internal_link":"","show_ref_finder":false,"local":false,"attributes":{"catalogType":"5","catalogTypeLabel":"Select Box","fd_hide_inline_script_widget":"true"},"sys_class_name":"","fieldFacetMap":{},"value":"","scriptActive":false,"script":{},"display_value":"","canDrop":true,"field_name":"associated_asset"},{"id":"5dff3e881be84e106962fe60cd4bcb0e","label":"Valid From","name":"access_valid_from","type":"glide_date_time","type_label":"Date/Time","order":0,"extended":false,"mandatory":false,"readonly":false,"maxsize":0,"children":[],"data_structure":"","reference":"","reference_display":"","ref_qual":"","choiceOption":"","table":"","columnName":"","defaultValue":"","defaultDisplayValue":"","use_dependent":false,"dependent_on":"","internal_link":"","show_ref_finder":false,"local":false,"attributes":{"catalogType":"10","catalogTypeLabel":"Date/Time","fd_hide_inline_script_widget":"true"},"sys_class_name":"","fieldFacetMap":{},"value":"","scriptActive":false,"script":{},"display_value":"","canDrop":true,"field_name":"access_valid_from"},{"id":"8fcff2881be84e106962fe60cd4bcbf0","label":"Access Level","name":"access_level","type":"string","type_label":"String","order":0,"extended":false,"mandatory":false,"readonly":false,"maxsize":0,"children":[],"data_structure":"","reference":"","reference_display":"","ref_qual":"","choiceOption":"","table":"","columnName":"","defaultValue":"","defaultDisplayValue":"","use_dependent":false,"dependent_on":"","internal_link":"","show_ref_finder":false,"local":false,"attributes":{"catalogType":"8","catalogTypeLabel":"Reference","fd_hide_inline_script_widget":"true"},"sys_class_name":"","fieldFacetMap":{},"value":"","scriptActive":false,"script":{},"display_value":"","canDrop":true,"field_name":"access_level"},{"id":"a0108f881be84e106962fe60cd4bcb74","label":"Valid To","name":"access_valid_to","type":"glide_date_time","type_label":"Date/Time","order":0,"extended":false,"mandatory":false,"readonly":false,"maxsize":0,"children":[],"data_structure":"","reference":"","reference_display":"","ref_qual":"","choiceOption":"","table":"","columnName":"","defaultValue":"","defaultDisplayValue":"","use_dependent":false,"dependent_on":"","internal_link":"","show_ref_finder":false,"local":false,"attributes":{"catalogType":"10","catalogTypeLabel":"Date/Time","fd_hide_inline_script_widget":"true"},"sys_class_name":"","fieldFacetMap":{},"value":"","scriptActive":false,"script":{},"display_value":"","canDrop":true,"field_name":"access_valid_to"},{"id":"b76043c81be84e106962fe60cd4bcb9e","label":"Action","name":"access_action","type":"string","type_label":"String","order":0,"extended":false,"mandatory":false,"readonly":false,"maxsize":0,"children":[],"data_structure":"","reference":"","reference_display":"","ref_qual":"","choiceOption":"","table":"","columnName":"","defaultValue":"","defaultDisplayValue":"","use_dependent":false,"dependent_on":"","internal_link":"","show_ref_finder":false,"local":false,"attributes":{"catalogType":"8","catalogTypeLabel":"Reference","fd_hide_inline_script_widget":"true"},"sys_class_name":"","fieldFacetMap":{},"value":"","scriptActive":false,"script":{},"display_value":"","canDrop":true,"field_name":"access_action"},{"id":"fb63da0b1b304210759455342a4bcbed","label":"Record ID","name":"access_record_id","type":"string","type_label":"String","order":0,"extended":false,"mandatory":false,"readonly":false,"maxsize":0,"children":[],"data_structure":"","reference":"","reference_display":"","ref_qual":"","choiceOption":"","table":"","columnName":"","defaultValue":"","defaultDisplayValue":"","use_dependent":false,"dependent_on":"","internal_link":"","show_ref_finder":false,"local":false,"attributes":{"catalogType":"6","catalogTypeLabel":"Single Line Text","fd_hide_inline_script_widget":"true"},"sys_class_name":"","fieldFacetMap":{},"value":"","scriptActive":false,"script":{},"display_value":"","canDrop":true,"field_name":"access_record_id"}],"depth":1,"arrayPosition":0,"sourceUiUniqueId":"","sourceType":"","sourceId":"","mandatory":false,"canDrop":true,"fieldFacetMap":{"uiUniqueId":"f0f44557-041c-4cad-9b4f-a80dfdb30a85"},"field_name":"access_levels.access_levels"}],"data_structure":"","reference":"","reference_display":"","ref_qual":"","choiceOption":"","table":"item_option_new_set","columnName":"","defaultValue":"","defaultDisplayValue":"","use_dependent":false,"dependent_on":"","internal_link":"","show_ref_finder":false,"local":false,"attributes":{"child_label":"Access Levels","child_type_label":"Object","child_type":"object","child_name":"access_levels","fd_hide_inline_script_widget":"true"},"sys_class_name":"","max_rows":null,"value":"--FDIHCOSTART--${wfa.dataPill(item_2.accessLevelList, 'array.object')}--FDIHCOEND--","canDrop":true,"field_name":"access_levels","isNew":true,"userHasChanged":false}]}`,
                        _snc_dont_fail_on_error: false,
                        record_table: 'x_aleen_snguardian_request',
                    }
                )
                wfa.flowLogic.forEach(
                    wfa.dataPill(item_2.accessLevelList, 'array.object'),
                    {
                        annotation: '',
                        $id: Now.ID['0aae92e04795b610f487c24fe16d436a'],
                    },
                    (item_4) => {
                        const actionInstance_5 = wfa.action(
                            action.core.lookUpRecord,
                            {
                                $id: Now.ID['0aae92e04795b610f487c24fe16d436b'],
                                uuid: '215e559e-0196-4dd6-8087-0926f8a6aa4c',
                            },
                            {
                                table: 'x_aleen_snguardian_access_location',
                                conditions: `sys_id=${wfa.dataPill(item_4.access_level, 'string')}`,
                                sort_column: '',
                                sort_type: 'sort_asc',
                                if_multiple_records_are_found_action: 'use_first_record',
                                dont_fail_flow_on_error: false,
                            }
                        )
                        wfa.flowLogic.setFlowVariables(
                            {
                                $id: Now.ID['42ae92e04795b610f487c24fe16d436f'],
                            },
                            _params.flowVariables,
                            {
                                access_level_names:
                                    wfa.inlineScript(`var accessLevelNames = fd_data.flow_var.access_level_names.toString();
if(accessLevelNames.length==0){
    accessLevelNames+=fd_data._5__look_up_record.record.access_level.name;
}else{
    accessLevelNames+=", "+fd_data._5__look_up_record.record.access_level.name;
}
return accessLevelNames;
`),
                            }
                        )
                        const actionInstance_7 = wfa.action(
                            action.core.lookUpRecords,
                            {
                                $id: Now.ID['deae92e04795b610f487c24fe16d436f'],
                                uuid: '369d5aa3-b0d9-4edc-8634-a6b996eb99bf',
                            },
                            {
                                table: 'x_aleen_snguardian_access_owner',
                                conditions: `access_level=${wfa.dataPill(actionInstance_5.Record.access_level, 'reference')}`,
                                sort_column: '',
                                sort_type: 'sort_asc',
                                max_results: 1000,
                            }
                        )
                        wfa.flowLogic.forEach(
                            wfa.dataPill(actionInstance_7.Records, 'records'),
                            {
                                annotation: '',
                                $id: Now.ID['92ae92e04795b610f487c24fe16d4373'],
                            },
                            () => {
                                wfa.flowLogic.setFlowVariables(
                                    {
                                        $id: Now.ID['96ae92e04795b610f487c24fe16d4376'],
                                    },
                                    _params.flowVariables,
                                    {
                                        approver_names:
                                            wfa.inlineScript(`var approverNames = fd_data.flow_var.approver_names;
if(fd_data._8__for_each.item.owner && fd_data._8__for_each.item.owner!=""){
    if(approverNames.length==0){
        approverNames+=fd_data._8__for_each.item.owner.full_name;
    }else{
        approverNames+=", "+fd_data._8__for_each.item.owner.full_name;
    }
}
return approverNames;`),
                                    }
                                )
                            }
                        )
                    }
                )
                wfa.flowLogic.setFlowVariables(
                    {
                        $id: Now.ID['9aae92e04795b610f487c24fe16d4379'],
                    },
                    _params.flowVariables,
                    {
                        approver_names: wfa.inlineScript(`if(fd_data.flow_var.approver_names.toString().length==0){
   return "No Approval Required";
}else{
    return fd_data.flow_var.approver_names;
}`),
                    }
                )
                wfa.action(
                    action.core.updateRecord,
                    {
                        $id: Now.ID['d6ae92e04795b610f487c24fe16d437a'],
                        uuid: '0d5a3504-2247-48d8-a4da-3e8a00529eaa',
                    },
                    {
                        record: wfa.dataPill(_params.trigger.current, 'reference'),
                        table_name: 'x_aleen_snguardian_request',
                        values: TemplateValue({
                            work_notes: `Request ${wfa.dataPill(actionInstance_3.record.number, 'string')} created for Access Level(s) : ${wfa.dataPill(_params.flowVariables.access_level_names, 'string')}.
Request Assigned to : ${wfa.dataPill(_params.flowVariables.approver_names, 'string')}`,
                        }),
                    }
                )
                wfa.flowLogic.setFlowVariables(
                    {
                        annotation: 'Again empty the variables',
                        $id: Now.ID['deae92e04795b610f487c24fe16d437d'],
                    },
                    _params.flowVariables,
                    {
                        access_level_names: '',
                        approver_names: '',
                    }
                )
            }
        )
        wfa.action(
            action.core.updateRecord,
            {
                $id: Now.ID['5aae92e04795b610f487c24fe16d4381'],
                uuid: '1926ef4c-ba5d-48c1-93f9-4d907b98664a',
            },
            {
                record: wfa.dataPill(_params.trigger.current, 'reference'),
                table_name: 'x_aleen_snguardian_request',
                values: TemplateValue({
                    state: '2',
                    status: '{"display":"Provisioning Pending","value":"888f8ed51bbc8210759455342a4bcb79","sys_id":"888f8ed51bbc8210759455342a4bcb79"}',
                    work_notes: `Requests for all changed access levels have been created successfully. 
Once approved from Access Owner (if any), ${wfa.dataPill(_params.trigger.current.request_for.first_name, 'string')} will be granted with required access levels.`,
                }),
            }
        )
        wfa.action(
            action.core.waitForCondition,
            {
                $id: Now.ID['9aae92e04795b610f487c24fe16d4382'],
                uuid: '9f6a164d-7aaa-4a09-b2fb-adeea4f6c278',
            },
            {
                record: wfa.dataPill(_params.trigger.current, 'reference'),
                table_name: 'x_aleen_snguardian_request',
                conditions:
                    'state=3^ORstate=4^ORstatus=0d533b1e1b3082106962fe60cd4bcb70^ORstatus=4c8f8ed51bbc8210759455342a4bcb7b',
                timeout_flag: false,
                timeout_duration: '',
                timeout_schedule: '',
            }
        )
        wfa.flowLogic.if(
            {
                label: 'all Requests completed successfully',
                condition: `${wfa.dataPill(_params.trigger.current.state, 'choice')}=3^NQ${wfa.dataPill(_params.trigger.current.status.code, 'string')}LIKESUCCESS`,
                annotation: '',
                $id: Now.ID['d6ae92e04795b610f487c24fe16d4386'],
                uuid: 'cfece162-377b-4040-9acf-07047918d876',
            },
            () => {
                wfa.action(
                    action.core.updateRecord,
                    {
                        $id: Now.ID['5eae92e04795b610f487c24fe16d4386'],
                        uuid: '332ec8e1-79e1-4bd5-81a9-8dc7f0ac1772',
                    },
                    {
                        record: wfa.dataPill(_params.trigger.current, 'reference'),
                        table_name: 'x_aleen_snguardian_request',
                        values: TemplateValue({
                            work_notes: `Required Access levels have been processed successfully for ${wfa.dataPill(_params.trigger.current.request_for.first_name, 'string')}. `,
                        }),
                    }
                )
                wfa.flowLogic.setFlowVariables(
                    {
                        $id: Now.ID['d2ae92e04795b610f487c24fe16d4381'],
                    },
                    _params.flowVariables,
                    {
                        assign_existing_badges:
                            wfa.inlineScript(`var system_badges = fd_data.trigger.current.variables.system_based_badges?JSON.parse(fd_data.trigger.current.variables.system_based_badges).system_badges:{};

for(var systemSysId in system_badges){
    var assetToAssign = null;
    
    //========================FETCH ASSET IF EXSITING PRESENT
    var grAsset = new GlideRecordSecure('x_aleen_snguardian_asset');
    grAsset.addQuery('serial', system_badges[systemSysId]);
    grAsset.addQuery('system', systemSysId);
    grAsset.addQuery('status.code', "UNASSIGNED");
    grAsset.setLimit(1);
    grAsset.query();
    if(grAsset.next()){
        assetToAssign = grAsset.getUniqueValue();
    }else{
        //====================CREATE NEW ASSET IF NOT PRESENT IN INVENTORY
        var grCreateAsset = new GlideRecordSecure('x_aleen_snguardian_asset');
        grCreateAsset.serial = system_badges[systemSysId];
        grCreateAsset.system = systemSysId;
        grCreateAsset.type = new MetadataGlideRecordHelper().getRecordSysIdByCode("x_aleen_snguardian_asset_type","TEMP_BADGE");
        grCreateAsset.status = new MetadataGlideRecordHelper().getRecordSysIdByCode("x_aleen_snguardian_status_code","UNASSIGNED");
        assetToAssign = grCreateAsset.insert();
    }
    if (assetToAssign) {//IF ASSET IS FETCHED

        var valid_from = "";
        var valid_to = "";
        var grIdentitySystem = new GlideRecordSecure('x_aleen_snguardian_identity_system');
        grIdentitySystem.addQuery('identity', fd_data.trigger.current.request_for);
        grIdentitySystem.addQuery('system', systemSysId);
        grIdentitySystem.addQuery('is_deleted', false);
        grIdentitySystem.addQuery('provisioning_status.code=success^ORprovisioning_status.codeLIKEupdate-success');
        grIdentitySystem.setLimit(1);
        grIdentitySystem.query();
        if(grIdentitySystem.next()){
            valid_from = grIdentitySystem.getDisplayValue('valid_from');
            valid_to = grIdentitySystem.getDisplayValue('valid_to');
        }else{
            valid_from = new GlideDateTime().getDisplayValue();
            valid_to = new GlideDateTime();
            valid_to.addMonthsUTC(1);
        }

        //==================CREATE IDENTITY ASSET IN EACH SYSTEM TO TO
        var grCreateIdentityAsset = new GlideRecordSecure('x_aleen_snguardian_identity_asset');
        grCreateIdentityAsset.asset = assetToAssign;
        grCreateIdentityAsset.identity = fd_data.trigger.current.request_for;
        grCreateIdentityAsset.status = new MetadataGlideRecordHelper().getRecordSysIdByCode("x_aleen_snguardian_status_code","ACTIVE");
        grCreateIdentityAsset.provisioning_action = new MetadataGlideRecordHelper().getRecordSysIdByCode("x_aleen_snguardian_request_entity_action","ADD");
        grCreateIdentityAsset.valid_from = valid_from;
        grCreateIdentityAsset.valid_to = valid_to;
        grCreateIdentityAsset.insert();
    }
}`),
                    }
                )
            }
        )
        wfa.flowLogic.else(
            {
                annotation: '',
                $id: Now.ID['deae92e04795b610f487c24fe16d4389'],
                uuid: 'bb81a6d2-cb5c-4fa5-bb9a-369b9cb31e1c',
            },
            () => {
                wfa.action(
                    action.core.updateRecord,
                    {
                        $id: Now.ID['56ae92e04795b610f487c24fe16d438a'],
                        uuid: '9987011f-bd17-4cce-b23a-881428f354c8',
                    },
                    {
                        record: wfa.dataPill(_params.trigger.current, 'reference'),
                        table_name: 'x_aleen_snguardian_request',
                        values: TemplateValue({
                            work_notes: `Your Change Access Level Request failed. 
Try re-submitting request or Contact System Administrator/Area Admin.`,
                        }),
                    }
                )
            }
        )
    }
)
