import { Flow, wfa, trigger, action } from '@servicenow/sdk/automation'
import { StringColumn, BooleanColumn } from '@servicenow/sdk/core'

Flow(
    {
        $id: Now.ID['bbadb2c43b8b4f50546a249693e45af6'],
        name: 'Alert Security System Access Flow',
        internalName: 'alert_security_system_access_flow',
        masterSnapshot: '1a46b70c3b038f50546a249693e45a92',
        flowVariables: {
            add_permisions: StringColumn({
                label: 'add_permisions',
                maxLength: 8000,
            }),
            provisioning_success: BooleanColumn({
                label: 'provisioning_success',
                maxLength: 32,
            }),
            provisioning_message: StringColumn({
                label: 'provisioning_message',
                maxLength: 8000,
            }),
        },
    },
    wfa.trigger(
        trigger.record.created,
        {
            $id: Now.ID['86bdf6c43b8b4f50546a249693e45a51'],
        },
        {
            table: 'x_aleen_snguardian_request',
            condition: 'request_type=36a232733bbecb50546a249693e45a82',
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
                $id: Now.ID['63b207003bcb4f50546a249693e45a95'],
                uuid: '000b710c-de20-46c3-85b2-26c5f24f2a12',
            },
            {
                record: wfa.dataPill(_params.trigger.current, 'reference'),
                table_name: 'x_aleen_snguardian_request',
                values: TemplateValue({
                    work_notes: `\r
Request for Security System has been submitted successfully.`,
                    state: '2',
                    status: '{"display":"Provisioning Pending","value":"888f8ed51bbc8210759455342a4bcb79","sys_id":"888f8ed51bbc8210759455342a4bcb79"}',
                }),
            }
        )
        const actionInstance_2 = wfa.action(
            action.core.askForApproval,
            {
                $id: Now.ID['562f32883b8b4f50546a249693e45aac'],
                uuid: 'ab4638e4-0bb1-4582-bf9a-02cfe8413ac2',
            },
            {
                record: wfa.dataPill(_params.trigger.current, 'reference'),
                table: 'x_aleen_snguardian_request',
                approval_reason: '',
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
                                        users: ['6816f79cc0a8016401c5a33be04be441'],
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
                    date: '{}',
                    duration: 1,
                    durationType: 'days',
                    daysSchedule: '',
                }),
            }
        )
        wfa.flowLogic.if(
            {
                label: 'Approved from Security Admin',
                condition: `${wfa.dataPill(actionInstance_2.approval_state, 'choice')}=approved`,
                annotation: '',
                $id: Now.ID['4461cb4c3b8b4f50546a249693e45a4b'],
                uuid: 'dca33218-428c-4688-8aa9-a69c4ac891a1',
            },
            () => {
                const actionInstance_4 = wfa.action(
                    '1f53f3843b038f50546a249693e45aa3',
                    {
                        $id: Now.ID['06733b843b038f50546a249693e45a78'],
                        uuid: '487fa8d6-8045-43a0-b2da-b74d6f91bb1b',
                    },
                    {
                        variable: wfa.dataPill(_params.trigger.current, 'reference'),
                    }
                )
                wfa.flowLogic.forEach(
                    wfa.dataPill(actionInstance_4.result, 'array.object'),
                    {
                        annotation: '',
                        $id: Now.ID['d9b333c43b038f50546a249693e45a58'],
                    },
                    (item_5) => {
                        const actionInstance_6 = wfa.action(
                            action.core.createRecord,
                            {
                                $id: Now.ID['fd1fb6c43b8b4f50546a249693e45a14'],
                                uuid: '50f5a77d-d442-4b59-b086-d3d80ad511ff',
                            },
                            {
                                table_name: 'x_aleen_snguardian_identity_access',
                                values: TemplateValue({
                                    identity: wfa.dataPill(_params.trigger.current.request_for, 'reference'),
                                    access_level: wfa.dataPill(item_5.access, 'string'),
                                    provisioning_action:
                                        '{"display":".","value":"e77f8ed51bbc8210759455342a4bcb28","sys_id":"e77f8ed51bbc8210759455342a4bcb28"}',
                                    provisioning_status:
                                        '{"display":"Provision is pending","value":"c18fced51bbc8210759455342a4bcb38","sys_id":"c18fced51bbc8210759455342a4bcb38"}',
                                }),
                            }
                        )
                        wfa.flowLogic.setFlowVariables(
                            {
                                $id: Now.ID['601473083b038f50546a249693e45a52'],
                            },
                            _params.flowVariables,
                            {
                                add_permisions:
                                    wfa.inlineScript(`var data = new GuardianGlideRecordUtil().toJSON(fd_data._6__create_record.record, null);
var provHelper = new ProvisioningHelper(fd_data._6__create_record.record.access_level.system.number);
var answer = provHelper.execute(data, "ACCOUNT-ACCESS", {"SKIP_QUEUE":true});
if(answer['success']){
    fd_data.flow_var.provisioning_success = true;
}else{
    fd_data.flow_var.provisioning_success = false;
    fd_data.flow_var.provisioning_message = answer['message'];
}`),
                            }
                        )
                        wfa.flowLogic.if(
                            {
                                label: 'provisioning successful',
                                condition: `${wfa.dataPill(_params.flowVariables.provisioning_success, 'boolean')}=true`,
                                annotation: '',
                                $id: Now.ID['a1e5f7c83b038f50546a249693e45a6a'],
                                uuid: '671e4624-88bb-4048-90d4-b1afd6f96c3f',
                            },
                            () => {
                                wfa.action(
                                    action.core.updateRecord,
                                    {
                                        $id: Now.ID['f9063fc83b038f50546a249693e45a3d'],
                                        uuid: '17abaa63-a5aa-469e-99c4-fb46bac23fed',
                                    },
                                    {
                                        record: wfa.dataPill(actionInstance_6.record, 'reference'),
                                        table_name: 'x_aleen_snguardian_identity_access',
                                        values: TemplateValue({
                                            provisioning_status:
                                                '{"display":"Provisioned Successfully","value":"458fced51bbc8210759455342a4bcb45","sys_id":"458fced51bbc8210759455342a4bcb45"}',
                                        }),
                                    }
                                )
                            }
                        )
                        wfa.flowLogic.else(
                            {
                                annotation: '',
                                $id: Now.ID['4f16ffc83b038f50546a249693e45a96'],
                                uuid: '1c574ca5-d032-4092-b9ff-639ebb610c8b',
                            },
                            () => {
                                wfa.action(
                                    action.core.updateRecord,
                                    {
                                        $id: Now.ID['4a26730c3b038f50546a249693e45a1d'],
                                        uuid: '11975e64-a954-4f5a-80d7-e08299c12c9a',
                                    },
                                    {
                                        record: wfa.dataPill(actionInstance_6.record, 'reference'),
                                        table_name: 'x_aleen_snguardian_identity_access',
                                        values: TemplateValue({
                                            provisioning_status:
                                                '{"display":"Provisioning  was Failed","value":"0d8fced51bbc8210759455342a4bcb45","sys_id":"0d8fced51bbc8210759455342a4bcb45"}',
                                            provisioning_message: wfa.dataPill(
                                                _params.flowVariables.provisioning_message,
                                                'string'
                                            ),
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
