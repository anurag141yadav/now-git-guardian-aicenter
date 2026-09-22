import { BusinessRule } from '@servicenow/sdk/core'

BusinessRule({
    $id: Now.ID['e162a6fe1b4642106962fe60cd4bcbed'],
    name: 'Trigger Identity Update Prov Action',
    table: 'x_aleen_snguardian_identity',
    when: 'after',
    action: ['update'],
    filterCondition:
        'emailVALCHANGES^ORfirst_nameVALCHANGES^ORlast_nameVALCHANGES^ORphoneVALCHANGES^u_skip_propogation!=TRUE^EQ',
    script: Now.include('./sys_script_e162a6fe1b4642106962fe60cd4bcbed.server.js'),
    $meta: {
        useEsLatest: true,
    },
})
