import { ScriptInclude } from '@servicenow/sdk/core'

ScriptInclude({
    $id: Now.ID['8f09d55b1b89c2506962fe60cd4bcb8d'],
    name: 'ConditionHelper',
    script: Now.include('./sys_script_include_8f09d55b1b89c2506962fe60cd4bcb8d.server.js'),
    apiName: 'x_aleen_snguardian.ConditionHelper',
    clientCallable: false,
    mobileCallable: false,
    sandboxCallable: false,
    accessibleFrom: 'public',
    active: true,
    $meta: {
        useEsLatest: true,
    },
})
