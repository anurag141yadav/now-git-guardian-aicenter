import { ScriptInclude } from '@servicenow/sdk/core'

ScriptInclude({
    $id: Now.ID['469d82bd1bf80610759455342a4bcb32'],
    name: 'AssetHelper',
    script: Now.include('./sys_script_include_469d82bd1bf80610759455342a4bcb32.server.js'),
    apiName: 'x_aleen_snguardian.AssetHelper',
    clientCallable: false,
    mobileCallable: false,
    sandboxCallable: false,
    accessibleFrom: 'public',
    active: true,
    $meta: {
        useEsLatest: true,
    },
})
