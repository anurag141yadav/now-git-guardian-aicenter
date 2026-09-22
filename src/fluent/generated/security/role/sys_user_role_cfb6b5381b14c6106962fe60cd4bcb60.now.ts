import { Role } from '@servicenow/sdk/core'

Role({
    name: 'x_aleen_snguardian.employee',
    description: 'Guardian User',
    federatedId: 'igrRsnKMPOct1xXCsy2x+e0Qj8MwxmBTwAYswxNcK5w=',
    containsRoles: ['x_aleen_snguardian.host'],
})
