import { ScriptInclude } from '@servicenow/sdk/core'

ScriptInclude({
    $id: Now.ID['3d81ad5e33dd9e10bf1221382e5c7ba6'],
    name: 'VisitorHelper',
    script: Now.include('./sys_script_include_3d81ad5e33dd9e10bf1221382e5c7ba6.server.js'),
    apiName: 'x_aleen_snguardian.VisitorHelper',
    clientCallable: false,
    mobileCallable: false,
    sandboxCallable: false,
    active: true,
    $meta: {
        useEsLatest: true,
    },
})
