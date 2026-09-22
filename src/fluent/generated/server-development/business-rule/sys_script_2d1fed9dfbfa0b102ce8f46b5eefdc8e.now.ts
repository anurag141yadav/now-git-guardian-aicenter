import { BusinessRule } from '@servicenow/sdk/core'

BusinessRule({
    $id: Now.ID['2d1fed9dfbfa0b102ce8f46b5eefdc8e'],
    name: 'TEST BR',
    table: 'x_aleen_snguardian_identity',
    when: 'after',
    action: ['update'],
    filterCondition: 'last_nameVALCHANGES^EQ',
    script: Now.include('./sys_script_2d1fed9dfbfa0b102ce8f46b5eefdc8e.server.js'),
})
