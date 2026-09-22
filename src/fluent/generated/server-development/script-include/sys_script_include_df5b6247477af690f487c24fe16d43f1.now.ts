import { ScriptInclude } from '@servicenow/sdk/core'

ScriptInclude({
    $id: Now.ID['df5b6247477af690f487c24fe16d43f1'],
    name: 'AlertGuardianLogger',
    script: Now.include('./sys_script_include_df5b6247477af690f487c24fe16d43f1.server.js'),
    apiName: 'x_aleen_snguardian.AlertGuardianLogger',
    clientCallable: false,
    mobileCallable: false,
    sandboxCallable: false,
    active: true,
    protectionPolicy: 'protected',
    $meta: {
        useEsLatest: true,
    },
})
