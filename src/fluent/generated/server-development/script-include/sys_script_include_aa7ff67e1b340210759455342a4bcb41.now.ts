import { ScriptInclude } from '@servicenow/sdk/core'

ScriptInclude({
    $id: Now.ID['aa7ff67e1b340210759455342a4bcb41'],
    name: 'AccessHelper',
    script: Now.include('./sys_script_include_aa7ff67e1b340210759455342a4bcb41.server.js'),
    apiName: 'x_aleen_snguardian.AccessHelper',
    clientCallable: false,
    mobileCallable: false,
    sandboxCallable: false,
    accessibleFrom: 'public',
    active: true,
    $meta: {
        useEsLatest: true,
    },
})
