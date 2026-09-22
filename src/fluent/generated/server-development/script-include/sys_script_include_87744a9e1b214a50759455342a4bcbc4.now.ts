import { ScriptInclude } from '@servicenow/sdk/core'

ScriptInclude({
    $id: Now.ID['87744a9e1b214a50759455342a4bcbc4'],
    name: 'IdentityAssetImportUtil',
    script: Now.include('./sys_script_include_87744a9e1b214a50759455342a4bcbc4.server.js'),
    apiName: 'x_aleen_snguardian.IdentityAssetImportUtil',
    clientCallable: false,
    mobileCallable: false,
    sandboxCallable: false,
    accessibleFrom: 'public',
    active: true,
    $meta: {
        useEsLatest: true,
    },
})
