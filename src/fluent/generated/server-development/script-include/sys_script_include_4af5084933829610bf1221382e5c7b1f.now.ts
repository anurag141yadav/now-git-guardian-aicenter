import { ScriptInclude } from '@servicenow/sdk/core'

ScriptInclude({
    $id: Now.ID['4af5084933829610bf1221382e5c7b1f'],
    name: 'VariableSetHelper',
    script: Now.include('./sys_script_include_4af5084933829610bf1221382e5c7b1f.server.js'),
    apiName: 'x_aleen_snguardian.VariableSetHelper',
    clientCallable: false,
    mobileCallable: false,
    sandboxCallable: false,
    accessibleFrom: 'public',
    active: true,
    $meta: {
        useEsLatest: true,
    },
})
