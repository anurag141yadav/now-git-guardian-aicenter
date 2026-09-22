import { ScriptInclude } from '@servicenow/sdk/core'

ScriptInclude({
    $id: Now.ID['862f0ae71ba4c650759455342a4bcb66'],
    name: 'AssetImportUtil',
    script: Now.include('./sys_script_include_862f0ae71ba4c650759455342a4bcb66.server.js'),
    apiName: 'x_aleen_snguardian.AssetImportUtil',
    clientCallable: false,
    mobileCallable: false,
    sandboxCallable: false,
    accessibleFrom: 'public',
    active: true,
    $meta: {
        useEsLatest: true,
    },
})
