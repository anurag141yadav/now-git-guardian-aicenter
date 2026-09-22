import { Flow, wfa, trigger, action } from '@servicenow/sdk/automation'

Flow(
    {
        $id: Now.ID['012ed9961bad0a50759455342a4bcbcf'],
        name: 'Alert Access Review :: Cancel flow',
        internalName: 'access_review__cancel_flow',
        description: 'Lookup the draft reviews and create a task for the Reviewers',
        runAs: 'system',
        masterSnapshot: '1c00695a1bad0a50759455342a4bcbc6',
    },
    wfa.trigger(
        trigger.record.updated,
        {
            $id: Now.ID['1ac1d19b4707f21051a3e84d416d436d'],
        },
        {
            table: 'x_aleen_snguardian_review',
            condition: 'status=58033d241b9946106962fe60cd4bcb1e',
            run_on_extended: 'false',
            run_flow_in: 'any',
            run_when_user_list: [],
            run_when_setting: 'both',
            run_when_user_setting: 'any',
            trigger_strategy: 'once',
        }
    ),
    (_params) => {
        const actionInstance_1 = wfa.action(
            action.core.lookUpRecords,
            {
                $id: Now.ID['96c1d19b4707f21051a3e84d416d436f'],
                uuid: '79d0b940-d374-43c0-b6a7-303b80c15daf',
            },
            {
                table: 'x_aleen_snguardian_review_task',
                conditions: `review=${wfa.dataPill(_params.trigger.current.sys_id, 'GUID')}^status!=57a2f1241b9946106962fe60cd4bcb55`,
                sort_column: '',
                sort_type: 'sort_asc',
                max_results: 1000,
            }
        )
        wfa.flowLogic.forEach(
            wfa.dataPill(actionInstance_1.Records, 'records'),
            {
                annotation: '',
                $id: Now.ID['12c1d19b4707f21051a3e84d416d4373'],
            },
            (item_2) => {
                const actionInstance_3 = wfa.action(
                    action.core.lookUpRecords,
                    {
                        $id: Now.ID['1ac1d19b4707f21051a3e84d416d4373'],
                        uuid: 'd90d200b-f3a7-4e43-a3d6-83ce47b59827',
                    },
                    {
                        table: 'x_aleen_snguardian_identity_access',
                        conditions: `review_task=${wfa.dataPill(item_2.sys_id, 'GUID')}`,
                        sort_column: '',
                        sort_type: 'sort_asc',
                        max_results: 1000,
                    }
                )
                wfa.flowLogic.forEach(
                    wfa.dataPill(actionInstance_3.Records, 'records'),
                    {
                        annotation: '',
                        $id: Now.ID['5ac1d19b4707f21051a3e84d416d4376'],
                    },
                    (item_4) => {
                        wfa.action(
                            action.core.updateRecord,
                            {
                                $id: Now.ID['96c1d19b4707f21051a3e84d416d4377'],
                                uuid: '1584e778-63e6-4e5f-87a2-3747ce3e928e',
                            },
                            {
                                record: wfa.dataPill(item_4, 'string'),
                                table_name: 'x_aleen_snguardian_identity_access',
                                values: TemplateValue({
                                    review_status:
                                        '{"display":"CANCELLED","value":"58033d241b9946106962fe60cd4bcb1e","sys_id":"58033d241b9946106962fe60cd4bcb1e"}',
                                }),
                            }
                        )
                    }
                )
                wfa.action(
                    action.core.updateRecord,
                    {
                        $id: Now.ID['9ec1d19b4707f21051a3e84d416d4377'],
                        uuid: 'b5f86a11-11fb-4bff-b8b5-53e08889cc01',
                    },
                    {
                        record: wfa.dataPill(item_2, 'string'),
                        table_name: 'x_aleen_snguardian_review_task',
                        values: TemplateValue({
                            status: '{"display":"Cancelled","value":"58033d241b9946106962fe60cd4bcb1e","sys_id":"58033d241b9946106962fe60cd4bcb1e"}',
                        }),
                    }
                )
            }
        )
    }
)
