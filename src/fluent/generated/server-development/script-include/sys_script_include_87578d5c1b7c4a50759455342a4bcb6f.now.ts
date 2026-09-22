import { ScriptInclude } from '@servicenow/sdk/core'

ScriptInclude({
    $id: Now.ID['87578d5c1b7c4a50759455342a4bcb6f'],
    name: 'IdentityHelper',
    script: Now.include('./sys_script_include_87578d5c1b7c4a50759455342a4bcb6f.server.js'),
    apiName: 'x_aleen_snguardian.IdentityHelper',
    clientCallable: false,
    mobileCallable: false,
    sandboxCallable: false,
    accessibleFrom: 'public',
    active: true,
    $meta: {
        useEsLatest: true,
    },
})
