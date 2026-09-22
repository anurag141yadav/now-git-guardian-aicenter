import { ScriptInclude } from '@servicenow/sdk/core'

ScriptInclude({
    $id: Now.ID['f0e988721bc60210759455342a4bcbd5'],
    name: 'DateUtil',
    script: Now.include('./sys_script_include_f0e988721bc60210759455342a4bcbd5.server.js'),
    apiName: 'x_aleen_snguardian.DateUtil',
    clientCallable: false,
    mobileCallable: false,
    sandboxCallable: false,
    accessibleFrom: 'public',
    active: true,
    $meta: {
        useEsLatest: true,
    },
})
