import { ScriptInclude } from '@servicenow/sdk/core'

ScriptInclude({
    $id: Now.ID['d559e18a47c82610f487c24fe16d43b3'],
    name: 'ImageUtils',
    script: Now.include('./sys_script_include_d559e18a47c82610f487c24fe16d43b3.server.js'),
    apiName: 'x_aleen_snguardian.ImageUtils',
    clientCallable: false,
    mobileCallable: false,
    sandboxCallable: false,
    active: true,
    protectionPolicy: 'read',
    $meta: {
        useEsLatest: true,
    },
})
