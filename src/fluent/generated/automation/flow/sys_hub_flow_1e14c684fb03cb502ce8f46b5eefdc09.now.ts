import { Flow, wfa, trigger, action } from '@servicenow/sdk/automation'

Flow(
    {
        $id: Now.ID['1e14c684fb03cb502ce8f46b5eefdc09'],
        name: 'AccessReviewSchedular',
        internalName: 'accessreviewschedular',
    },
    wfa.trigger(
        trigger.scheduled.monthly,
        {
            $id: Now.ID['89248a84fb03cb502ce8f46b5eefdc9a'],
        },
        {
            time: Time(
                {
                    hours: 19,
                    minutes: 0,
                },
                'UTC'
            ),
            day_of_month: 9,
        }
    ),
    (_params) => {
        wfa.action(
            action.core.createRecord,
            {
                $id: Now.ID['e1344e84fb03cb502ce8f46b5eefdc4d'],
                uuid: '714f2fbf-0b37-4171-977f-0e5236ac6467',
            },
            {
                values: TemplateValue({}),
                table_name: '',
            }
        )
    }
)
