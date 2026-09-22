import { ScriptInclude } from '@servicenow/sdk/core'

ScriptInclude({
    $id: Now.ID['6ae301d81b7c4a50759455342a4bcb99'],
    name: 'MetadataGlideRecordHelper',
    script: Now.include('./sys_script_include_6ae301d81b7c4a50759455342a4bcb99.server.js'),
    apiName: 'x_aleen_snguardian.MetadataGlideRecordHelper',
    clientCallable: false,
    mobileCallable: false,
    sandboxCallable: false,
    accessibleFrom: 'public',
    active: true,
    $meta: {
        useEsLatest: true,
    },
})
