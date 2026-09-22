import { Role } from '@servicenow/sdk/core'

Role({
    name: 'x_aleen_snguardian.admin',
    description: 'Guardian Admintrator',
    federatedId: '4YVs5SJHVXWVHczm+Yz/qbvB9jGWNadCzFbFUkn/wwM=',
    containsRoles: ['x_aleen_snguardian.manager'],
})
