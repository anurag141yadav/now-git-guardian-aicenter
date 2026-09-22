import { ScriptInclude } from '@servicenow/sdk/core'

ScriptInclude({
    $id: Now.ID['3a4765231b24c650759455342a4bcb02'],
    name: 'ProvisioningHelper',
    script: Now.include('./sys_script_include_3a4765231b24c650759455342a4bcb02.server.js'),
    apiName: 'x_aleen_snguardian.ProvisioningHelper',
    clientCallable: false,
    mobileCallable: false,
    sandboxCallable: false,
    accessibleFrom: 'public',
    active: true,
    $meta: {
        useEsLatest: true,
    },
})
