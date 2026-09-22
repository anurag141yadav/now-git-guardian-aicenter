import { ScriptInclude } from '@servicenow/sdk/core'

ScriptInclude({
    $id: Now.ID['1ae3dfa01bf54290759455342a4bcb93'],
    name: 'IdentityAccessImportUtil',
    script: Now.include('./sys_script_include_1ae3dfa01bf54290759455342a4bcb93.server.js'),
    apiName: 'x_aleen_snguardian.IdentityAccessImportUtil',
    clientCallable: false,
    mobileCallable: false,
    sandboxCallable: false,
    accessibleFrom: 'public',
    active: true,
    $meta: {
        useEsLatest: true,
    },
})
