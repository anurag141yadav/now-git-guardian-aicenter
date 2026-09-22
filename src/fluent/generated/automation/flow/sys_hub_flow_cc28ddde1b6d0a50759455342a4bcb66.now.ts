import { Flow, wfa, trigger, action } from '@servicenow/sdk/automation'

Flow(
    {
        $id: Now.ID['cc28ddde1b6d0a50759455342a4bcb66'],
        name: 'Alert Access Review :: Post due date process',
        internalName: 'access_review__post_due_date_process',
        description: 'Lookup the draft reviews and create a task for the Reviewers',
        runAs: 'system',
        masterSnapshot: 'fbed95961bad0a50759455342a4bcbe6',
    },
    wfa.trigger(
        trigger.scheduled.daily,
        {
            $id: Now.ID['443211db4707f21051a3e84d416d430e'],
        },
        {
            time: Time(
                {
                    hours: 1,
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
                $id: Now.ID['c83211db4707f21051a3e84d416d430f'],
                uuid: '79d0b940-d374-43c0-b6a7-303b80c15daf',
            },
            {
                table: 'x_aleen_snguardian_review',
                conditions: 'due_date<=javascript:gs.endOfYesterday()^status!=57a2f1241b9946106962fe60cd4bcb55',
                sort_column: '',
                sort_type: 'sort_asc',
                max_results: 1000,
            }
        )
        wfa.flowLogic.forEach(
            wfa.dataPill(actionInstance_1.Records, 'records'),
            {
                annotation: '',
                $id: Now.ID['443211db4707f21051a3e84d416d4313'],
            },
            (item_2) => {
                const actionInstance_3 = wfa.action(
                    action.core.lookUpRecords,
                    {
                        $id: Now.ID['4c3211db4707f21051a3e84d416d4313'],
                        uuid: '3f79a61d-08ef-4b05-bd40-ce4b37eae653',
                    },
                    {
                        table: 'x_aleen_snguardian_review_task',
                        conditions: `review=${wfa.dataPill(item_2.sys_id, 'GUID')}^status!=57a2f1241b9946106962fe60cd4bcb55`,
                        sort_column: '',
                        sort_type: 'sort_asc',
                        max_results: 1000,
                    }
                )
                wfa.flowLogic.forEach(
                    wfa.dataPill(actionInstance_3.Records, 'records'),
                    {
                        annotation: '',
                        $id: Now.ID['8c3211db4707f21051a3e84d416d4316'],
                    },
                    (item_4) => {
                        const actionInstance_5 = wfa.action(
                            action.core.lookUpRecords,
                            {
                                $id: Now.ID['043211db4707f21051a3e84d416d4317'],
                                uuid: 'd90d200b-f3a7-4e43-a3d6-83ce47b59827',
                            },
                            {
                                table: 'x_aleen_snguardian_identity_access',
                                conditions: `review_task=${wfa.dataPill(item_4.sys_id, 'GUID')}`,
                                sort_column: '',
                                sort_type: 'sort_asc',
                                max_results: 1000,
                            }
                        )
                        wfa.flowLogic.forEach(
                            wfa.dataPill(actionInstance_5.Records, 'records'),
                            {
                                annotation: '',
                                $id: Now.ID['443211db4707f21051a3e84d416d431a'],
                            },
                            (item_6) => {
                                wfa.flowLogic.if(
                                    {
                                        label: 'Review post due date action is AUTO Approve',
                                        condition: `${wfa.dataPill(item_2.post_due_date_action, 'choice')}=APPROVE`,
                                        annotation: '',
                                        $id: Now.ID['8c3211db4707f21051a3e84d416d431d'],
                                        uuid: '76ee9121-05b1-4e51-95c4-88a86caedb8a',
                                    },
                                    () => {
                                        wfa.action(
                                            action.core.updateRecord,
                                            {
                                                $id: Now.ID['c83211db4707f21051a3e84d416d431e'],
                                                uuid: '3e6240e1-d663-44c4-a888-67b74ac9f7e5',
                                            },
                                            {
                                                record: wfa.dataPill(item_6, 'string'),
                                                table_name: 'x_aleen_snguardian_identity_access',
                                                values: TemplateValue({
                                                    status: '{"display":"Completed","value":"57a2f1241b9946106962fe60cd4bcb55","sys_id":"57a2f1241b9946106962fe60cd4bcb55"}',
                                                }),
                                            }
                                        )
                                    }
                                )
                                wfa.flowLogic.else(
                                    {
                                        annotation: '',
                                        $id: Now.ID['883211db4707f21051a3e84d416d4321'],
                                        uuid: '7cea6b74-2dae-41b7-b401-c36733934172',
                                    },
                                    () => {
                                        wfa.action(
                                            action.core.updateRecord,
                                            {
                                                $id: Now.ID['003211db4707f21051a3e84d416d4322'],
                                                uuid: '85ee62dc-7dd7-4891-b047-3aacbcc2832d',
                                            },
                                            {
                                                record: wfa.dataPill(item_6, 'string'),
                                                table_name: 'x_aleen_snguardian_identity_access',
                                                values: TemplateValue({
                                                    review_action:
                                                        '{"display":"To be Deleted","value":"237f8ed51bbc8210759455342a4bcb28","sys_id":"237f8ed51bbc8210759455342a4bcb28"}',
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
    }
)
