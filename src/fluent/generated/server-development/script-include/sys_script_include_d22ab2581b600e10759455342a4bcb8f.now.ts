import { ScriptInclude } from '@servicenow/sdk/core'

ScriptInclude({
    $id: Now.ID['d22ab2581b600e10759455342a4bcb8f'],
    name: 'JSONUtil',
    script: Now.include('./sys_script_include_d22ab2581b600e10759455342a4bcb8f.server.js'),
    apiName: 'x_aleen_snguardian.JSONUtil',
    clientCallable: false,
    mobileCallable: false,
    sandboxCallable: false,
    accessibleFrom: 'public',
    active: true,
})
