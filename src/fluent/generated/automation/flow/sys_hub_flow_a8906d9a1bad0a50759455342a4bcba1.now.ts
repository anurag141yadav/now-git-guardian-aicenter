import { Flow, wfa, trigger, action } from '@servicenow/sdk/automation'

Flow(
    {
        $id: Now.ID['a8906d9a1bad0a50759455342a4bcba1'],
        name: 'Alert Access Review :: Due Date Reminder Notification',
        internalName: 'access_review__due_date_reminder_notification',
        description: 'Lookup the draft reviews and create a task for the Reviewers',
        runAs: 'system',
        masterSnapshot: 'a1905a301b4a82106962fe60cd4bcbb4',
    },
    wfa.trigger(
        trigger.scheduled.daily,
        {
            $id: Now.ID['7af019fd478b3a1051a3e84d416d4389'],
        },
        {
            time: Time(
                {
                    hours: 5,
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
                $id: Now.ID['f2f019fd478b3a1051a3e84d416d4398'],
                uuid: '79d0b940-d374-43c0-b6a7-303b80c15daf',
            },
            {
                table: 'x_aleen_snguardian_review',
                conditions:
                    'due_dateBETWEENjavascript:gs.beginningOfTomorrow()@javascript:gs.endOfThisWeek()^status!=57a2f1241b9946106962fe60cd4bcb55',
                sort_column: '',
                sort_type: 'sort_asc',
                max_results: 1000,
            }
        )
        wfa.flowLogic.forEach(
            wfa.dataPill(actionInstance_1.Records, 'records'),
            {
                annotation: '',
                $id: Now.ID['72f019fd478b3a1051a3e84d416d439d'],
            },
            (item_2) => {
                const actionInstance_3 = wfa.action(
                    action.core.lookUpRecords,
                    {
                        $id: Now.ID['fef019fd478b3a1051a3e84d416d439d'],
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
                        $id: Now.ID['b2f019fd478b3a1051a3e84d416d43a1'],
                    },
                    (item_4) => {
                        wfa.subflow(
                            'c52055bd478b3a1051a3e84d416d4336',
                            {
                                $id: Now.ID['b2f019fd478b3a1051a3e84d416d43a2'],
                                uuid: '98965bfd-164b-4dc5-a8b7-bc94a900b717',
                            },
                            {
                                review_task: wfa.dataPill(item_4, 'string'),
                            }
                        )
                    }
                )
            }
        )
    }
)
