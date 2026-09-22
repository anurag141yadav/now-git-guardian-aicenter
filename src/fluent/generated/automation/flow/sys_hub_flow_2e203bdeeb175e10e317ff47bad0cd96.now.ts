import { Flow, wfa, trigger, action } from '@servicenow/sdk/automation'
import { StringColumn, DateTimeColumn } from '@servicenow/sdk/core'

Flow(
    {
        $id: Now.ID['2e203bdeeb175e10e317ff47bad0cd96'],
        name: 'Alert Bulk Mobile Credential Request Flow',
        internalName: 'copy_of_bulk_mobile_credential_request_flow',
        description: 'Requesting new badge',
        runAs: 'system',
        masterSnapshot: 'cd1d0bf31be3d210687b9866b04bcb11',
        flowVariables: {
            request_for: StringColumn({
                label: 'request_for',
                maxLength: 8000,
            }),
            valid_from: DateTimeColumn({
                label: 'valid_from',
            }),
            valid_to: DateTimeColumn({
                label: 'valid_to',
            }),
        },
    },
    wfa.trigger(
        trigger.record.created,
        {
            $id: Now.ID['f4d03395474ff610f487c24fe16d4393'],
        },
        {
            table: 'x_aleen_snguardian_request',
            condition: 'request_type=b487d71a33df5e10bf1221382e5c7bca^submitted_by=USER',
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
                $id: Now.ID['38d03395474ff610f487c24fe16d439b'],
                uuid: 'b81d3c32-bfc7-45f5-a878-7452caef83ab',
            },
            {
                record: wfa.dataPill(_params.trigger.current, 'reference'),
                table_name: 'x_aleen_snguardian_request',
                values: TemplateValue({
                    status: '{"display":"Provisioning Pending","value":"888f8ed51bbc8210759455342a4bcb79","sys_id":"888f8ed51bbc8210759455342a4bcb79"}',
                    state: '2',
                    work_notes: 'Mobile credential request successfully submitted for all selected user(s).',
                }),
            }
        )
        wfa.flowLogic.setFlowVariables(
            {
                $id: Now.ID['74d03395474ff610f487c24fe16d43ad'],
            },
            _params.flowVariables,
            {
                request_for: wfa.inlineScript('return fd_data.trigger.current.variables.request_for;'),
                valid_from: wfa.inlineScript(`if(fd_data.trigger.current.variables.valid_from){
    var validFrom = new GlideDateTime(fd_data.trigger.current.variables.valid_from).getDisplayValue();
    return validFrom;
}else{
    return new GlideDateTime().getDisplayValue();
}`),
                valid_to: wfa.inlineScript(`var g = new GlideDateTime();
g.addYearsUTC(1);
if(fd_data.trigger.current.variables.valid_to){
    var validTo = new GlideDateTime(fd_data.trigger.current.variables.valid_to).getDisplayValue();
    return validTo;
}else{
    return g.getDisplayValue();
}
`),
            }
        )
        const actionInstance_3 = wfa.action(
            'ab8bcb731be3d210687b9866b04bcb87',
            {
                $id: Now.ID['b8d03395474ff610f487c24fe16d43ae'],
                uuid: 'b5be2847-fb09-47bd-8273-fe2b1ce6ec90',
            },
            {
                bulk_request: wfa.dataPill(_params.trigger.current, 'reference'),
            }
        )
        wfa.flowLogic.forEach(
            wfa.dataPill(actionInstance_3.identities, 'array.string'),
            {
                annotation: '',
                $id: Now.ID['b0d03395474ff610f487c24fe16d43b2'],
            },
            (item_4) => {
                const actionInstance_5 = wfa.action(
                    action.core.recordProducer,
                    {
                        $id: Now.ID['70d03395474ff610f487c24fe16d43b3'],
                        uuid: 'db5d72b1-d407-46ab-b45c-66f0495cfb1d',
                    },
                    {
                        catalog_item: '6375cc2e33939e10bf1221382e5c7bbf',
                        catalog_item_inputs: `{"inputs":[{"id":"44864cae33939e10bf1221382e5c7baf","label":"Parent Request","name":"parent","type":"reference","type_label":"Reference","order":0,"extended":false,"mandatory":false,"readonly":false,"maxsize":0,"children":[],"data_structure":"","reference":"x_aleen_snguardian_request","reference_display":"Request","ref_qual":"","choiceOption":"","table":"item_option_new","columnName":"","defaultValue":"{\\"display\\":\\"\\",\\"value\\":\\"\\"}","defaultDisplayValue":"","use_dependent":false,"dependent_on":"","internal_link":"","show_ref_finder":false,"local":false,"attributes":{"catalogType":"8","catalogTypeLabel":"Reference","fd_hide_inline_script_widget":"true"},"sys_class_name":"","canDrop":true,"field_name":"parent","value":"${wfa.dataPill(_params.trigger.current, 'reference')}","isNew":true,"userHasChanged":false},{"id":"7375446e33939e10bf1221382e5c7b1c","label":"Request","name":"request_type","type":"reference","type_label":"Reference","order":0,"extended":false,"mandatory":false,"readonly":false,"maxsize":0,"children":[],"data_structure":"","reference":"sc_cat_item_producer","reference_display":"Record Producer","ref_qual":"","choiceOption":"","table":"item_option_new","columnName":"","defaultValue":"{\\"display\\":\\"\\",\\"value\\":\\"\\"}","defaultDisplayValue":"","use_dependent":false,"dependent_on":"","internal_link":"","show_ref_finder":false,"local":false,"attributes":{"catalogType":"8","catalogTypeLabel":"Reference","fd_hide_inline_script_widget":"true"},"sys_class_name":"","canDrop":true,"field_name":"request_type","value":"{\\"display\\":\\"Single Mobile Credential Request\\",\\"value\\":\\"6375cc2e33939e10bf1221382e5c7bbf\\",\\"table\\":\\"sc_cat_item_producer\\",\\"sys_id\\":\\"6375cc2e33939e10bf1221382e5c7bbf\\"}","isNew":true,"userHasChanged":false},{"id":"a775446e33939e10bf1221382e5c7b0f","label":"Request For","name":"request_for","type":"reference","type_label":"Reference","order":0,"extended":false,"mandatory":false,"readonly":false,"maxsize":0,"children":[],"data_structure":"","reference":"x_aleen_snguardian_identity","reference_display":"Identity","ref_qual":"is_deleted=false^EQ","choiceOption":"","table":"item_option_new","columnName":"","defaultValue":"{\\"display\\":\\"\\",\\"value\\":\\"\\"}","defaultDisplayValue":"","use_dependent":false,"dependent_on":"","internal_link":"","show_ref_finder":false,"local":false,"attributes":{"catalogType":"8","catalogTypeLabel":"Reference","fd_hide_inline_script_widget":"true"},"sys_class_name":"","canDrop":true,"field_name":"request_for","value":"${wfa.dataPill(item_4, 'string')}","isNew":true,"userHasChanged":false},{"id":"ef75446e33939e10bf1221382e5c7b01","label":"Valid From","name":"valid_from","type":"glide_date_time","type_label":"Date/Time","order":0,"extended":false,"mandatory":false,"readonly":false,"maxsize":0,"children":[],"data_structure":"","reference":"","reference_display":"","ref_qual":"","choiceOption":"","table":"item_option_new","columnName":"","defaultValue":"","defaultDisplayValue":"","use_dependent":false,"dependent_on":"","internal_link":"","show_ref_finder":false,"local":false,"attributes":{"catalogType":"10","catalogTypeLabel":"Date/Time","fd_hide_inline_script_widget":"true"},"sys_class_name":"","canDrop":true,"field_name":"valid_from","value":"${wfa.dataPill(_params.flowVariables.valid_from, 'glide_date_time')}","isNew":true,"userHasChanged":false},{"id":"7375446e33939e10bf1221382e5c7b29","label":"Valid To","name":"valid_to","type":"glide_date_time","type_label":"Date/Time","order":0,"extended":false,"mandatory":false,"readonly":false,"maxsize":0,"children":[],"data_structure":"","reference":"","reference_display":"","ref_qual":"","choiceOption":"","table":"item_option_new","columnName":"","defaultValue":"","defaultDisplayValue":"","use_dependent":false,"dependent_on":"","internal_link":"","show_ref_finder":false,"local":false,"attributes":{"catalogType":"10","catalogTypeLabel":"Date/Time","fd_hide_inline_script_widget":"true"},"sys_class_name":"","canDrop":true,"field_name":"valid_to","value":"${wfa.dataPill(_params.flowVariables.valid_to, 'glide_date_time')}","isNew":true,"userHasChanged":false}]}`,
                        _snc_dont_fail_on_error: true,
                        record_table: 'x_aleen_snguardian_request',
                    }
                )
                const actionInstance_6 = wfa.action(
                    action.core.lookUpRecord,
                    {
                        $id: Now.ID['f0d03395474ff610f487c24fe16d43b4'],
                        uuid: '0302e13c-b213-4a61-91b9-d0864c424229',
                    },
                    {
                        table: 'x_aleen_snguardian_identity',
                        conditions: `sys_id=${wfa.dataPill(item_4, 'string')}`,
                        sort_column: '',
                        sort_type: 'sort_asc',
                        if_multiple_records_are_found_action: 'use_first_record',
                        dont_fail_flow_on_error: false,
                    }
                )
                wfa.action(
                    action.core.updateRecord,
                    {
                        $id: Now.ID['f8d03395474ff610f487c24fe16d43b4'],
                        uuid: '34647f3a-418a-4261-b56a-bda0c4dc0971',
                    },
                    {
                        record: wfa.dataPill(_params.trigger.current, 'reference'),
                        table_name: 'x_aleen_snguardian_request',
                        values: TemplateValue({
                            work_notes: `Mobile credential request ${wfa.dataPill(actionInstance_5.record.number, 'string')} successfully submitted for ${wfa.dataPill(actionInstance_6.Record.first_name, 'string')} ${wfa.dataPill(actionInstance_6.Record.last_name, 'string')}`,
                        }),
                    }
                )
                wfa.flowLogic.waitForADuration({
                    $id: Now.ID['b4d03395474ff610f487c24fe16d43ba'],
                    uuid: '478ea87b-1270-4227-b890-cedabc7cf878',
                    durationType: 'explicit_duration',
                    duration: Duration({
                        seconds: 9,
                    }),
                })
            }
        )
        wfa.flowLogic.waitForADuration({
            $id: Now.ID['74d03395474ff610f487c24fe16d43bf'],
            uuid: '2dc46ca6-a566-4cbf-892f-806d09ce28d2',
            durationType: 'explicit_duration',
            duration: Duration({
                minutes: 3,
            }),
        })
        wfa.action(
            '71bfb1211bc34610207b2179b04bcb81',
            {
                $id: Now.ID['30d03395474ff610f487c24fe16d43c0'],
                uuid: '2348e5a0-d6be-4eff-b39b-ec22b86402ac',
            },
            {
                parent_request_number: wfa.dataPill(_params.trigger.current.number, 'string'),
            }
        )
    }
)
