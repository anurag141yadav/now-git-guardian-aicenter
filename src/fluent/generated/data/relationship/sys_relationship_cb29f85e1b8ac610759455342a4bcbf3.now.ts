import { Record } from '@servicenow/sdk/core'

Record({
    $id: Now.ID['cb29f85e1b8ac610759455342a4bcbf3'],
    table: 'sys_relationship',
    data: {
        advanced: false,
        basic_apply_to: 'x_aleen_snguardian_identity',
        basic_query_from: 'x_aleen_snguardian_identity_attestation',
        name: 'Prerequisites',
        query_with: "current.addQuery('identity', parent.sys_id);",
        reference_field: 'identity',
        simple_reference: true,
        sys_name: 'Prerequisites',
    },
})
