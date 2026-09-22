import { Acl } from '@servicenow/sdk/core'

Acl({
    $id: Now.ID['6b474adeeb4382500326f284dad0cdda'],
    description:
        'Allow write for records in x_aleen_snguardian_reader, for users with roles (x_aleen_snguardian.manager, x_aleen_snguardian.badging_officer).',
    localOrExisting: 'Local',
    type: 'record',
    operation: 'write',
    roles: ['x_aleen_snguardian.manager'],
    table: 'x_aleen_snguardian_reader',
})
