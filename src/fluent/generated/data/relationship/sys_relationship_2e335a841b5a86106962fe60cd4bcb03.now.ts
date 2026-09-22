import { Record } from '@servicenow/sdk/core'

Record({
    $id: Now.ID['2e335a841b5a86106962fe60cd4bcb03'],
    table: 'sys_relationship',
    data: {
        advanced: false,
        basic_apply_to: 'x_aleen_snguardian_review_task',
        basic_query_from: 'x_aleen_snguardian_identity_attestation',
        name: 'Review Attestation Items',
        query_with: "current.addQuery('review_task', parent.sys_id);",
        simple_reference: false,
        sys_name: 'Review Attestation Items',
    },
})
