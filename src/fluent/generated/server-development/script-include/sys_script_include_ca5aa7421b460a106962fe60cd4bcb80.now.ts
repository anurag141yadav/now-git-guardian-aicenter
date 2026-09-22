import { ScriptInclude } from '@servicenow/sdk/core'

ScriptInclude({
    $id: Now.ID['ca5aa7421b460a106962fe60cd4bcb80'],
    name: 'ValueHelper',
    script: Now.include('./sys_script_include_ca5aa7421b460a106962fe60cd4bcb80.server.js'),
    apiName: 'x_aleen_snguardian.ValueHelper',
    clientCallable: true,
    mobileCallable: false,
    sandboxCallable: true,
    accessibleFrom: 'public',
    active: true,
    $meta: {
        useEsLatest: true,
    },
})
