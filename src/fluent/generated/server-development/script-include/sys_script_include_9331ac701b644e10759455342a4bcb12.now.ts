import { ScriptInclude } from '@servicenow/sdk/core'

ScriptInclude({
    $id: Now.ID['9331ac701b644e10759455342a4bcb12'],
    name: 'SystemUtil',
    script: Now.include('./sys_script_include_9331ac701b644e10759455342a4bcb12.server.js'),
    apiName: 'x_aleen_snguardian.SystemUtil',
    clientCallable: false,
    mobileCallable: false,
    sandboxCallable: false,
    accessibleFrom: 'public',
    active: true,
    $meta: {
        useEsLatest: true,
    },
})
