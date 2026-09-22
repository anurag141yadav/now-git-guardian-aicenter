import { ScriptInclude } from '@servicenow/sdk/core'

ScriptInclude({
    $id: Now.ID['662eaa101b34ce506962fe60cd4bcb04'],
    name: 'IdentityClientScriptHelper',
    script: Now.include('./sys_script_include_662eaa101b34ce506962fe60cd4bcb04.server.js'),
    description: 'To Use from Record Producer',
    apiName: 'x_aleen_snguardian.IdentityClientScriptHelper',
    clientCallable: true,
    mobileCallable: false,
    sandboxCallable: true,
    accessibleFrom: 'public',
    active: true,
    $meta: {
        useEsLatest: true,
    },
})
