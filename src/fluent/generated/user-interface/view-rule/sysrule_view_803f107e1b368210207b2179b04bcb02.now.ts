import { Record } from '@servicenow/sdk/core'

Record({
    $id: Now.ID['803f107e1b368210207b2179b04bcb02'],
    table: 'sysrule_view',
    data: {
        active: true,
        advanced: true,
        device_type: 'browser',
        match_conditions: 'ANY',
        name: 'Access Review  View Role',
        order: 100,
        overrides_user_preference: true,
        script: `(function overrideView(view, is_list) {
    answer = "";
    if (gs.hasRole('x_aleen_snguardian.access_reviewer')) {
        answer = "Review";
    }
})(view, is_list);`,
        sys_domain: 'global',
        sys_domain_path: '/',
        table: 'x_aleen_snguardian_review_task',
        view: 'access_review',
    },
})
