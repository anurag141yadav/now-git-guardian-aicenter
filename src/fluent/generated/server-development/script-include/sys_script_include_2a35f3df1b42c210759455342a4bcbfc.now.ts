import { ScriptInclude } from '@servicenow/sdk/core'

ScriptInclude({
    $id: Now.ID['2a35f3df1b42c210759455342a4bcbfc'],
    name: 'EventsDataHelper',
    script: Now.include('./sys_script_include_2a35f3df1b42c210759455342a4bcbfc.server.js'),
    apiName: 'x_aleen_snguardian.EventsDataHelper',
    clientCallable: false,
    mobileCallable: false,
    sandboxCallable: false,
    accessibleFrom: 'public',
    active: true,
    $meta: {
        useEsLatest: true,
    },
})
