import { Flow, wfa, trigger } from '@servicenow/sdk/automation'

Flow(
    {
        $id: Now.ID['d3bfe62f1b7ec210bf7ea82b234bcb7b'],
        name: 'Alert Event: Update Last Used Access',
        internalName: 'event_update_last_used_access',
        runAs: 'system',
        masterSnapshot: 'd26fc1c733099210bf1221382e5c7b61',
    },
    wfa.trigger(
        trigger.scheduled.repeat,
        {
            $id: Now.ID['6896211b4787f21051a3e84d416d43e9'],
        },
        {
            repeat: Duration({
                days: 1,
            }),
        }
    ),
    (_params) => {
        wfa.action(
            '458081001bef0610207b2179b04bcb32',
            {
                $id: Now.ID['e496211b4787f21051a3e84d416d43eb'],
                uuid: 'faab7a90-3dfa-4342-9641-2963998b26a5',
            },
            {}
        )
    }
)
