import { ScriptInclude } from '@servicenow/sdk/core'

ScriptInclude({
    $id: Now.ID['c171eb319c8a4584b922a53a4144a398'],
    name: 'McProvisionService',
    script: Now.include('./sys_script_include_c171eb319c8a4584b922a53a4144a398.server.js'),
    apiName: 'x_aleen_snguardian.McProvisionService',
    clientCallable: false,
    mobileCallable: false,
    sandboxCallable: false,
    active: true,
})
