import { ScriptInclude } from '@servicenow/sdk/core'

ScriptInclude({
    $id: Now.ID['ba4386552b75da10d4dffd74ce91bfad'],
    name: 'VisitorClientScriptHelper',
    script: Now.include('./sys_script_include_ba4386552b75da10d4dffd74ce91bfad.server.js'),
    description: 'To Use from Record Producer',
    apiName: 'x_aleen_snguardian.VisitorClientScriptHelper',
    clientCallable: true,
    mobileCallable: false,
    sandboxCallable: true,
    accessibleFrom: 'public',
    active: true,
    $meta: {
        useEsLatest: true,
    },
})
