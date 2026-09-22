import { ScriptInclude } from '@servicenow/sdk/core'

ScriptInclude({
    $id: Now.ID['0c14b9841bd64610759455342a4bcbf2'],
    name: 'ClientServerRelay',
    script: Now.include('./sys_script_include_0c14b9841bd64610759455342a4bcbf2.server.js'),
    apiName: 'x_aleen_snguardian.ClientServerRelay',
    clientCallable: true,
    mobileCallable: false,
    sandboxCallable: true,
    active: true,
    $meta: {
        useEsLatest: true,
    },
})
