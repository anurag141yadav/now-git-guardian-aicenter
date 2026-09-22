import { Flow, wfa, trigger, action } from '@servicenow/sdk/automation'

Flow(
    {
        $id: Now.ID['c56b6d4a1b210a50759455342a4bcb7e'],
        name: 'Alert Access Review :: Initiate the Process',
        internalName: 'access_review__initiate_the_process',
        description: 'Lookup the draft reviews and create a task for the Reviewers',
        runAs: 'system',
        masterSnapshot: '6b1d614e1b210a50759455342a4bcbd2',
    },
    wfa.trigger(
        trigger.scheduled.repeat,
        {
            $id: Now.ID['40f1599b4707f21051a3e84d416d433f'],
        },
        {
            repeat: Duration({
                days: 1,
            }),
        }
    ),
    (_params) => {
        const actionInstance_1 = wfa.action(
            action.core.lookUpRecords,
            {
                $id: Now.ID['c4f1599b4707f21051a3e84d416d4340'],
                uuid: '79d0b940-d374-43c0-b6a7-303b80c15daf',
            },
            {
                table: 'x_aleen_snguardian_review',
                conditions: 'start_date<=javascript:gs.endOfToday()^status=3522bde01b9946106962fe60cd4bcbe9',
                sort_column: '',
                sort_type: 'sort_asc',
                max_results: 1000,
            }
        )
        wfa.flowLogic.forEach(
            wfa.dataPill(actionInstance_1.Records, 'records'),
            {
                annotation: '',
                $id: Now.ID['40f1599b4707f21051a3e84d416d4344'],
            },
            (item_2) => {
                wfa.action(
                    '741132861ba14e506962fe60cd4bcb53',
                    {
                        $id: Now.ID['00f1599b4707f21051a3e84d416d4345'],
                        uuid: '44002456-30f7-4df4-a0f2-d23cfb96b5de',
                    },
                    {
                        variable: wfa.dataPill(item_2, 'string'),
                    }
                )
                wfa.action(
                    action.core.updateRecord,
                    {
                        $id: Now.ID['ccf1599b4707f21051a3e84d416d4345'],
                        uuid: '9e2a1bd0-d53f-4eab-882e-cd1d85b70183',
                    },
                    {
                        record: wfa.dataPill(item_2, 'string'),
                        table_name: 'x_aleen_snguardian_review',
                        values: TemplateValue({
                            work_notes: 'Review initiated',
                            status: '{"display":"InProgress","value":"81c2fda01b9946106962fe60cd4bcbae","sys_id":"81c2fda01b9946106962fe60cd4bcbae"}',
                        }),
                    }
                )
            }
        )
    }
)
