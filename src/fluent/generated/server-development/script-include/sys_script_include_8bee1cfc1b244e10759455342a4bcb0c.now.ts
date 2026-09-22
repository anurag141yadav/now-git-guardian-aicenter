import { ScriptInclude } from '@servicenow/sdk/core'

ScriptInclude({
    $id: Now.ID['8bee1cfc1b244e10759455342a4bcb0c'],
    name: 'AuthenticationUtil',
    script: Now.include('./sys_script_include_8bee1cfc1b244e10759455342a4bcb0c.server.js'),
    description: 'Authentication  Utility to Get New token / Store token',
    apiName: 'x_aleen_snguardian.AuthenticationUtil',
    clientCallable: false,
    mobileCallable: false,
    sandboxCallable: false,
    accessibleFrom: 'public',
    active: true,
    $meta: {
        useEsLatest: true,
    },
})
