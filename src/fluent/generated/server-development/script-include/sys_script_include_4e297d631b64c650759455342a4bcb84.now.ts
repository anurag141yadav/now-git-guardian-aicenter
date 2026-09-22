import { ScriptInclude } from '@servicenow/sdk/core'

ScriptInclude({
    $id: Now.ID['4e297d631b64c650759455342a4bcb84'],
    name: 'AccessImportUtil',
    script: Now.include('./sys_script_include_4e297d631b64c650759455342a4bcb84.server.js'),
    apiName: 'x_aleen_snguardian.AccessImportUtil',
    clientCallable: false,
    mobileCallable: false,
    sandboxCallable: false,
    accessibleFrom: 'public',
    active: true,
    $meta: {
        useEsLatest: true,
    },
})
