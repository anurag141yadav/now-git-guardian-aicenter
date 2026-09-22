import { ScriptInclude } from '@servicenow/sdk/core'

ScriptInclude({
    $id: Now.ID['789f86e71ba4c650759455342a4bcbe4'],
    name: 'UserImportUtil',
    script: Now.include('./sys_script_include_789f86e71ba4c650759455342a4bcbe4.server.js'),
    apiName: 'x_aleen_snguardian.UserImportUtil',
    clientCallable: false,
    mobileCallable: false,
    sandboxCallable: false,
    accessibleFrom: 'public',
    active: true,
    $meta: {
        useEsLatest: true,
    },
})
