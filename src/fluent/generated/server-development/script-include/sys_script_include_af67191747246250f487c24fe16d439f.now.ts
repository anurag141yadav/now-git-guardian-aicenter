import { ScriptInclude } from '@servicenow/sdk/core'

ScriptInclude({
    $id: Now.ID['af67191747246250f487c24fe16d439f'],
    name: 'RequestHelper',
    script: Now.include('./sys_script_include_af67191747246250f487c24fe16d439f.server.js'),
    apiName: 'x_aleen_snguardian.RequestHelper',
    clientCallable: false,
    mobileCallable: false,
    sandboxCallable: false,
    accessibleFrom: 'public',
    active: true,
    $meta: {
        useEsLatest: true,
    },
})
