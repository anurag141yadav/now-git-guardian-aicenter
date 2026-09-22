import { Subflow, wfa, action } from '@servicenow/sdk/automation'
import { StringColumn, BooleanColumn } from '@servicenow/sdk/core'

export const update_group_visit_status = Subflow(
    {
        $id: Now.ID['ffc69d0c476d2e10f487c24fe16d432b'],
        name: 'Alert Update Group Visit Status',
        internalName: 'update_group_visit_status',
        runAs: 'system',
        masterSnapshot: 'f8acd5c047ad2e10f487c24fe16d435b',
        inputs: {
            child_visit_sys_id: StringColumn({
                label: 'child_visit_sys_id',
                maxLength: 8000,
            }),
            parent_visit_sys_id: StringColumn({
                label: 'parent_visit_sys_id',
                maxLength: 8000,
            }),
            action: StringColumn({
                label: 'action',
                maxLength: 8000,
            }),
        },
        flowVariables: {
            all_checked_out: BooleanColumn({
                label: 'all_checked_out',
            }),
            all_checked_in: BooleanColumn({
                label: 'all_checked_in',
            }),
        },
    },
    (_params) => {
        const actionInstance_1 = wfa.action(
            action.core.lookUpRecord,
            {
                $id: Now.ID['d1d7e1db4787f21051a3e84d416d43a3'],
                annotation: 'Child Visit Record',
                uuid: '571612e8-d655-4063-96c6-0a03f296dc72',
            },
            {
                table: 'x_aleen_snguardian_visitor_visit',
                conditions: `sys_id=${wfa.dataPill(_params.inputs.child_visit_sys_id, 'string')}`,
                sort_column: '',
                sort_type: 'sort_asc',
                if_multiple_records_are_found_action: 'use_first_record',
                dont_fail_flow_on_error: false,
            }
        )
        const actionInstance_2 = wfa.action(
            action.core.lookUpRecord,
            {
                $id: Now.ID['d9d7e1db4787f21051a3e84d416d43a3'],
                annotation: 'Parent Visit Record',
                uuid: '80510123-ee6d-4371-84c6-e348a049228b',
            },
            {
                table: 'x_aleen_snguardian_visitor_visit',
                conditions: `sys_id=${wfa.dataPill(_params.inputs.parent_visit_sys_id, 'string')}`,
                sort_column: '',
                sort_type: 'sort_asc',
                if_multiple_records_are_found_action: 'use_first_record',
                dont_fail_flow_on_error: false,
            }
        )
        wfa.flowLogic.setFlowVariables(
            {
                $id: Now.ID['d1d7e1db4787f21051a3e84d416d43b4'],
            },
            _params.flowVariables,
            {
                all_checked_out: true,
                all_checked_in: true,
            }
        )
        const actionInstance_4 = wfa.action(
            action.core.lookUpRecords,
            {
                $id: Now.ID['d1d7e1db4787f21051a3e84d416d43b5'],
                uuid: '88f1aeea-0011-4093-9ddf-3e5fee33ca74',
            },
            {
                table: 'x_aleen_snguardian_visitor_visit',
                conditions: `parent=${wfa.dataPill(actionInstance_2.Record, 'reference')}`,
                sort_column: '',
                sort_type: 'sort_asc',
                max_results: 1000,
            }
        )
        wfa.flowLogic.if(
            {
                label: 'Action is Check-in',
                condition: `${wfa.dataPill(_params.inputs.action, 'string')}=CHECK-IN`,
                annotation: '',
                $id: Now.ID['ddd7e1db4787f21051a3e84d416d43b8'],
                uuid: '643a9a89-0d3f-4058-a090-eed085b3fe52',
            },
            () => {
                wfa.flowLogic.if(
                    {
                        label: 'Parent Visit Record is not in Checked in progress State',
                        condition: `${wfa.dataPill(actionInstance_2.Record, 'reference')}ISNOTEMPTY^${wfa.dataPill(actionInstance_2.Record.status.code, 'string')}!=CHECK-IN_IN-PROGRESS`,
                        annotation: '',
                        $id: Now.ID['15d7e1db4787f21051a3e84d416d43bc'],
                        uuid: '9a90aff2-58c8-46f4-9272-fa1c82c80358',
                    },
                    () => {
                        wfa.action(
                            action.core.updateRecord,
                            {
                                $id: Now.ID['51d7e1db4787f21051a3e84d416d43bd'],
                                uuid: 'c85a05a4-dc44-4a1c-b20b-2836a5dd0ae4',
                            },
                            {
                                record: wfa.dataPill(actionInstance_2.Record, 'reference'),
                                table_name: 'x_aleen_snguardian_visitor_visit',
                                values: TemplateValue({
                                    status: '{"display":"Check in is In Progress","value":"8cf34e804755ae5051a3e84d416d43d2","sys_id":"8cf34e804755ae5051a3e84d416d43d2"}',
                                }),
                            }
                        )
                        wfa.action(
                            action.core.createRecord,
                            {
                                $id: Now.ID['9dd7e1db4787f21051a3e84d416d43bd'],
                                uuid: '5dd8a429-f38f-4b80-b216-cca5aece05a8',
                            },
                            {
                                table_name: 'x_aleen_snguardian_visit_operation',
                                values: TemplateValue({
                                    visit: wfa.dataPill(actionInstance_2.Record, 'reference'),
                                    operation: `Vistior: ${wfa.dataPill(actionInstance_1.Record.visitor.full_name, 'string')} has been checked-in`,
                                }),
                            }
                        )
                    }
                )
                wfa.flowLogic.forEach(
                    wfa.dataPill(actionInstance_4.Records, 'records'),
                    {
                        annotation: '',
                        $id: Now.ID['55d7e1db4787f21051a3e84d416d43c1'],
                    },
                    (item_9) => {
                        wfa.flowLogic.if(
                            {
                                label: 'Any Visit Record is not Checked in Yet',
                                condition: `${wfa.dataPill(item_9.status.code, 'string')}=PENDING-APPROVAL^NQ${wfa.dataPill(item_9.status.code, 'string')}=SCHEDULED`,
                                annotation: '',
                                $id: Now.ID['99d7e1db4787f21051a3e84d416d43c4'],
                                uuid: 'c7428990-6a60-4833-9024-1e87872537da',
                            },
                            () => {
                                wfa.flowLogic.setFlowVariables(
                                    {
                                        $id: Now.ID['1dd7e1db4787f21051a3e84d416d43c7'],
                                    },
                                    _params.flowVariables,
                                    {
                                        all_checked_in: false,
                                    }
                                )
                            }
                        )
                    }
                )
                wfa.flowLogic.if(
                    {
                        label: 'All child visits are checked in',
                        condition: `${wfa.dataPill(_params.flowVariables.all_checked_in, 'boolean')}=true`,
                        annotation: '',
                        $id: Now.ID['51d7e1db4787f21051a3e84d416d43cb'],
                        uuid: '3ea10e4a-fb1c-4b7e-9ca0-c8111cb8bf57',
                    },
                    () => {
                        wfa.action(
                            action.core.updateRecord,
                            {
                                $id: Now.ID['d5d7e1db4787f21051a3e84d416d43cb'],
                                uuid: '2e978454-7cf9-452e-8eaa-9ba0542eb653',
                            },
                            {
                                record: wfa.dataPill(actionInstance_2.Record, 'reference'),
                                table_name: 'x_aleen_snguardian_visitor_visit',
                                values: TemplateValue({
                                    status: '{"display":"Checked in","value":"86ef715d2b191a10d4dffd74ce91bf87","sys_id":"86ef715d2b191a10d4dffd74ce91bf87"}',
                                }),
                            }
                        )
                        wfa.action(
                            action.core.createRecord,
                            {
                                $id: Now.ID['ddd7e1db4787f21051a3e84d416d43cb'],
                                uuid: 'eb318edc-6970-4af4-8d79-e1bc787f987e',
                            },
                            {
                                table_name: 'x_aleen_snguardian_visit_operation',
                                values: TemplateValue({
                                    visit: wfa.dataPill(actionInstance_2.Record, 'reference'),
                                    operation: 'All Visitors have been Checked-In.',
                                }),
                            }
                        )
                    }
                )
            }
        )
        wfa.flowLogic.elseIf(
            {
                label: 'Action is Final Checkout',
                condition: `${wfa.dataPill(_params.inputs.action, 'string')}=CHECK-OUT`,
                annotation: '',
                $id: Now.ID['1dd7e1db4787f21051a3e84d416d43cf'],
                uuid: 'f03b7f0c-7b77-48fc-9a00-d8570b54cd75',
            },
            () => {
                wfa.flowLogic.if(
                    {
                        label: 'Parent Visit Record is is not in Checked out progress State',
                        condition: `${wfa.dataPill(actionInstance_2.Record, 'reference')}ISNOTEMPTY^${wfa.dataPill(actionInstance_2.Record.status.code, 'string')}!=CHECK-OUT_IN-PROGRESS`,
                        annotation: '',
                        $id: Now.ID['51d7e1db4787f21051a3e84d416d43d3'],
                        uuid: '417bb057-3039-424c-8032-c76028870ef4',
                    },
                    () => {
                        wfa.action(
                            action.core.updateRecord,
                            {
                                $id: Now.ID['d5d7e1db4787f21051a3e84d416d43d3'],
                                uuid: '5ee7f7c1-f7dc-4358-af5b-0fe81a63257e',
                            },
                            {
                                record: wfa.dataPill(actionInstance_2.Record, 'reference'),
                                table_name: 'x_aleen_snguardian_visitor_visit',
                                values: TemplateValue({
                                    status: '{"display":"Check out is In Progress","value":"d7148acc4715ae5051a3e84d416d4322","sys_id":"d7148acc4715ae5051a3e84d416d4322"}',
                                }),
                            }
                        )
                        wfa.action(
                            action.core.createRecord,
                            {
                                $id: Now.ID['ddd7e1db4787f21051a3e84d416d43d3'],
                                uuid: '8112f474-abed-42e0-b66b-658eb6b0b699',
                            },
                            {
                                table_name: 'x_aleen_snguardian_visit_operation',
                                values: TemplateValue({
                                    visit: wfa.dataPill(actionInstance_2.Record, 'reference'),
                                    operation: `Vistior: ${wfa.dataPill(actionInstance_1.Record.visitor.full_name, 'string')}has been checked-out`,
                                }),
                            }
                        )
                    }
                )
                wfa.flowLogic.forEach(
                    wfa.dataPill(actionInstance_4.Records, 'records'),
                    {
                        annotation: '',
                        $id: Now.ID['51d7e1db4787f21051a3e84d416d43d7'],
                    },
                    (item_19) => {
                        wfa.flowLogic.if(
                            {
                                label: 'Any Visit Record is not Checked out Yet',
                                condition: `${wfa.dataPill(item_19.status.code, 'string')}=EXTENDED-STAY^NQ${wfa.dataPill(item_19.status.code, 'string')}=TEMP-CHECKOUT^NQ${wfa.dataPill(item_19.status.code, 'string')}=PENDING-APPROVAL^NQ${wfa.dataPill(item_19.status.code, 'string')}=SCHEDULED^NQ${wfa.dataPill(item_19.status.code, 'string')}=CHECK-IN`,
                                annotation: '',
                                $id: Now.ID['5dd7e1db4787f21051a3e84d416d43e6'],
                                uuid: 'be805040-4666-4c28-824a-052f92aadf8a',
                            },
                            () => {
                                wfa.flowLogic.setFlowVariables(
                                    {
                                        $id: Now.ID['edd7e1db4787f21051a3e84d416d43e9'],
                                    },
                                    _params.flowVariables,
                                    {
                                        all_checked_out: false,
                                    }
                                )
                            }
                        )
                    }
                )
                wfa.flowLogic.if(
                    {
                        label: 'All child visits are checked out',
                        condition: `${wfa.dataPill(_params.flowVariables.all_checked_out, 'boolean')}=true`,
                        annotation: '',
                        $id: Now.ID['25d7e1db4787f21051a3e84d416d43ed'],
                        uuid: '8ff2127f-b436-481d-835f-0ec85c581d7a',
                    },
                    () => {
                        wfa.action(
                            action.core.updateRecord,
                            {
                                $id: Now.ID['a9d7e1db4787f21051a3e84d416d43ed'],
                                uuid: '5a20fab0-cac7-4a13-9048-21ea3e8a948f',
                            },
                            {
                                record: wfa.dataPill(actionInstance_2.Record, 'reference'),
                                table_name: 'x_aleen_snguardian_visitor_visit',
                                values: TemplateValue({
                                    status: '{"display":"Completed","value":"3c600a5d2b191a10d4dffd74ce91bf61","sys_id":"3c600a5d2b191a10d4dffd74ce91bf61"}',
                                }),
                            }
                        )
                        wfa.action(
                            action.core.createRecord,
                            {
                                $id: Now.ID['a1d7e1db4787f21051a3e84d416d43ee'],
                                uuid: '063487d7-ed14-4019-9bc1-5c16d8eed400',
                            },
                            {
                                table_name: 'x_aleen_snguardian_visit_operation',
                                values: TemplateValue({
                                    visit: wfa.dataPill(actionInstance_2.Record, 'reference'),
                                    operation: 'All Visitors have been Checked-out.',
                                }),
                            }
                        )
                    }
                )
            }
        )
    }
)
