import { Table, DateTimeColumn, Password2Column, ReferenceColumn, StringColumn } from '@servicenow/sdk/core'

export const x_aleen_snguardian_connector_credntial = Table({
    accessibleFrom: 'package_private',
    actions: {
        read: false,
        update: false,
        delete: false,
        create: false,
    },
    allowClientScripts: false,
    allowNewFields: false,
    allowUiActions: false,
    allowWebServiceAccess: false,
    extends: 'discovery_credentials',
    label: 'Connector Credential',
    name: 'x_aleen_snguardian_connector_credntial',
    schema: {
        refresh_token_expiry: DateTimeColumn({
            maxLength: 40,
        }),
        refresh_token: Password2Column({
            maxLength: 2000,
        }),
        system: ReferenceColumn({
            maxLength: 32,
            referenceTable: 'x_aleen_snguardian_system',
        }),
        token_expiry: DateTimeColumn({
            maxLength: 40,
        }),
        token_type: StringColumn({
            maxLength: 40,
        }),
        token: Password2Column({
            maxLength: 2000,
        }),
    },
    createAccessControls: true,
})
