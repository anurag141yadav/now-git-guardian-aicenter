import { ScriptInclude } from '@servicenow/sdk/core'

ScriptInclude({
    $id: Now.ID['99babe581b600e10759455342a4bcb1c'],
    name: 'StringUtil',
    script: Now.include('./sys_script_include_99babe581b600e10759455342a4bcb1c.server.js'),
    apiName: 'x_aleen_snguardian.StringUtil',
    clientCallable: false,
    mobileCallable: false,
    sandboxCallable: false,
    accessibleFrom: 'public',
    active: true,
    $meta: {
        useEsLatest: true,
    },
})
