import { Role } from '@servicenow/sdk/core'

Role({
    name: 'x_aleen_snguardian.portal',
    description: 'User to Login Visitor Portal',
    federatedId: 'y7FO2zkJwB9AvhF9KRCtosTekwf3jLyUEBCTXJOKRnE=',
    containsRoles: ['x_aleen_snguardian.visitor'],
})
