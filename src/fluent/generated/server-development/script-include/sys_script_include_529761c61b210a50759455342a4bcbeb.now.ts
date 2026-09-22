import { ScriptInclude } from '@servicenow/sdk/core'

ScriptInclude({
    $id: Now.ID['529761c61b210a50759455342a4bcbeb'],
    name: 'AccessReviewHelper',
    script: Now.include('./sys_script_include_529761c61b210a50759455342a4bcbeb.server.js'),
    description: 'This Script used to process review records',
    apiName: 'x_aleen_snguardian.AccessReviewHelper',
    clientCallable: false,
    mobileCallable: false,
    sandboxCallable: false,
    accessibleFrom: 'public',
    active: true,
    $meta: {
        useEsLatest: true,
    },
})
