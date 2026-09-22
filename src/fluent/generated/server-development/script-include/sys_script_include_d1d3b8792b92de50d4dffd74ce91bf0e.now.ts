import { ScriptInclude } from '@servicenow/sdk/core'

ScriptInclude({
    $id: Now.ID['d1d3b8792b92de50d4dffd74ce91bf0e'],
    name: 'TimeZoneUtil',
    script: Now.include('./sys_script_include_d1d3b8792b92de50d4dffd74ce91bf0e.server.js'),
    apiName: 'x_aleen_snguardian.TimeZoneUtil',
    clientCallable: false,
    mobileCallable: false,
    sandboxCallable: false,
    accessibleFrom: 'public',
    active: true,
    $meta: {
        useEsLatest: true,
    },
})
