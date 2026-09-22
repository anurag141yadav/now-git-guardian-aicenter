import { Role } from '@servicenow/sdk/core'

Role({
    name: 'x_aleen_snguardian.review_admin',
    description: 'Review Admin',
    federatedId: 'efSBsekePgG7vNY0ta3R7fUyl5a2U7hudcFX2dqsQSc=',
    containsRoles: ['x_aleen_snguardian.access_reviewer'],
})
