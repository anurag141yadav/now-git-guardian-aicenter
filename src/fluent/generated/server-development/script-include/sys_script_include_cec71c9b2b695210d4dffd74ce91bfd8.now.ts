import { ScriptInclude } from '@servicenow/sdk/core'

ScriptInclude({
    $id: Now.ID['cec71c9b2b695210d4dffd74ce91bfd8'],
    name: 'MRVS_util',
    script: Now.include('./sys_script_include_cec71c9b2b695210d4dffd74ce91bfd8.server.js'),
    apiName: 'x_aleen_snguardian.MRVS_util',
    clientCallable: true,
    mobileCallable: false,
    sandboxCallable: true,
    accessibleFrom: 'public',
    active: true,
    $meta: {
        useEsLatest: true,
    },
})
