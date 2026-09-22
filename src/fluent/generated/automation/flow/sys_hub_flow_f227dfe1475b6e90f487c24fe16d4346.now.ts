import { Flow, wfa, trigger, action } from '@servicenow/sdk/automation'

Flow(
    {
        $id: Now.ID['f227dfe1475b6e90f487c24fe16d4346'],
        name: 'Alert Update Visitor Status Job',
        internalName: 'update_visitor_status_job',
        description: 'Update Visitor Status based on activity/inactivity',
        runAs: 'system',
        masterSnapshot: '23489765475b6e90f487c24fe16d4372',
    },
    wfa.trigger(
        trigger.scheduled.daily,
        {
            $id: Now.ID['51a525574787f21051a3e84d416d4372'],
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
                $id: Now.ID['d5a525574787f21051a3e84d416d4374'],
                uuid: 'dc7195fd-34cb-44b7-af11-9d4b2bab2e55',
            },
            {
                table: 'x_aleen_snguardian_visitor',
                conditions:
                    'identity_validation_expires_onISNOTEMPTY^identity_validation_expires_on<javascript:gs.beginningOfToday()',
                sort_column: '',
                sort_type: 'sort_asc',
                max_results: 1000,
            }
        )
        wfa.flowLogic.forEach(
            wfa.dataPill(actionInstance_1.Records, 'records'),
            {
                annotation: '',
                $id: Now.ID['5da525574787f21051a3e84d416d4378'],
            },
            (item_2) => {
                wfa.action(
                    action.core.updateRecord,
                    {
                        $id: Now.ID['1da525574787f21051a3e84d416d4379'],
                        uuid: 'b82e8191-fce3-4c89-bd7d-0799008d0a77',
                    },
                    {
                        record: wfa.dataPill(item_2, 'string'),
                        table_name: 'x_aleen_snguardian_visitor',
                        values: TemplateValue({
                            visitor_status:
                                '{"display":"Pending Verification","value":"75418e9d2b191a10d4dffd74ce91bfc7","sys_id":"75418e9d2b191a10d4dffd74ce91bfc7"}',
                        }),
                    }
                )
            }
        )
    }
)
