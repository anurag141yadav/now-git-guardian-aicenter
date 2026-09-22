import { ScriptInclude } from '@servicenow/sdk/core'

ScriptInclude({
    $id: Now.ID['88ca4138478b361051a3e84d416d4379'],
    name: 'AuthenticationTokenHelper',
    script: Now.include('./sys_script_include_88ca4138478b361051a3e84d416d4379.server.js'),
    apiName: 'x_aleen_snguardian.AuthenticationTokenHelper',
    clientCallable: false,
    mobileCallable: false,
    sandboxCallable: false,
    active: true,
    $meta: {
        useEsLatest: true,
    },
})
