import { ScriptInclude } from '@servicenow/sdk/core'

ScriptInclude({
    $id: Now.ID['6ffe57261be00a506962fe60cd4bcb7d'],
    name: 'GuardianGlideRecordUtil',
    script: Now.include('./sys_script_include_6ffe57261be00a506962fe60cd4bcb7d.server.js'),
    apiName: 'x_aleen_snguardian.GuardianGlideRecordUtil',
    clientCallable: false,
    mobileCallable: false,
    sandboxCallable: false,
    accessibleFrom: 'public',
    active: true,
    $meta: {
        useEsLatest: true,
    },
})
