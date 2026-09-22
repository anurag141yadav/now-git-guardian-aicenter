import { ScriptInclude } from '@servicenow/sdk/core'

ScriptInclude({
    $id: Now.ID['3a8ae589470f761051a3e84d416d433c'],
    name: 'BusinessRuleHelper',
    script: Now.include('./sys_script_include_3a8ae589470f761051a3e84d416d433c.server.js'),
    apiName: 'x_aleen_snguardian.BusinessRuleHelper',
    clientCallable: false,
    mobileCallable: false,
    sandboxCallable: false,
    active: true,
    $meta: {
        useEsLatest: true,
    },
})
