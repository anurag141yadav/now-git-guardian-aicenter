import { ScriptInclude } from '@servicenow/sdk/core'

ScriptInclude({
    $id: Now.ID['6f3a995147222e1051a3e84d416d43a3'],
    name: 'ProvisioningMonitorUtil',
    script: Now.include('./sys_script_include_6f3a995147222e1051a3e84d416d43a3.server.js'),
    description: 'Utility for Provisioning Monitor',
    apiName: 'x_aleen_snguardian.ProvisioningMonitorUtil',
    clientCallable: false,
    mobileCallable: false,
    sandboxCallable: false,
    accessibleFrom: 'public',
    active: true,
    $meta: {
        useEsLatest: true,
    },
})
