import { ScriptInclude } from '@servicenow/sdk/core'

ScriptInclude({
    $id: Now.ID['35404d90474ea21051a3e84d416d4357'],
    name: 'DecisionHelper',
    script: Now.include('./sys_script_include_35404d90474ea21051a3e84d416d4357.server.js'),
    apiName: 'x_aleen_snguardian.DecisionHelper',
    clientCallable: false,
    mobileCallable: false,
    sandboxCallable: false,
    accessibleFrom: 'public',
    active: true,
    protectionPolicy: 'read',
    $meta: {
        useEsLatest: true,
    },
})
