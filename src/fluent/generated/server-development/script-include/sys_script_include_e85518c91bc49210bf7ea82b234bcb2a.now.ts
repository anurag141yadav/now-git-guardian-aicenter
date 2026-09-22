import { ScriptInclude } from '@servicenow/sdk/core'

ScriptInclude({
    $id: Now.ID['e85518c91bc49210bf7ea82b234bcb2a'],
    name: 'DeletedRecordsUtil',
    script: Now.include('./sys_script_include_e85518c91bc49210bf7ea82b234bcb2a.server.js'),
    apiName: 'x_aleen_snguardian.DeletedRecordsUtil',
    clientCallable: false,
    mobileCallable: false,
    sandboxCallable: false,
    accessibleFrom: 'public',
    active: true,
    $meta: {
        useEsLatest: true,
    },
})
