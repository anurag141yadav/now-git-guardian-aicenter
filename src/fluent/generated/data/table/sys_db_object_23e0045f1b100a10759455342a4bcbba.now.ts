import {
    Table,
    StringColumn,
    ReferenceColumn,
    BooleanColumn,
    Password2Column,
    IntegerColumn,
} from '@servicenow/sdk/core'

export const x_aleen_snguardian_system = Table({
    actions: {
        read: true,
        update: true,
        delete: false,
        create: true,
    },
    allowClientScripts: true,
    allowNewFields: true,
    allowUiActions: true,
    allowWebServiceAccess: true,
    autoNumber: {
        number: 1,
        numberOfDigits: 3,
        prefix: 'SYSTEM',
    },
    display: 'code',
    label: 'System',
    name: 'x_aleen_snguardian_system',
    schema: {
        authentication: StringColumn({
            default: 'USERNAMEPASSOWRD',
            dropdown: 'dropdown_without_none',
            maxLength: 40,
        }),
        code: StringColumn({
            label: [
                {
                    plural: '',
                },
            ],
            maxLength: 40,
        }),
        credential: ReferenceColumn({
            maxLength: 32,
            referenceTable: 'x_aleen_snguardian_connector_credntial',
        }),
        date_format: StringColumn({
            default: 'YYYY-MM-DD hh:mm:ss',
            maxLength: 40,
        }),
        description: StringColumn({
            label: [
                {
                    plural: '',
                },
            ],
            maxLength: 150,
        }),
        host: StringColumn({
            label: [
                {
                    plural: '',
                },
            ],
            maxLength: 200,
        }),
        is_deleted: BooleanColumn({
            default: false,
            maxLength: 40,
        }),
        mid_server: ReferenceColumn({
            label: 'MID Server',
            maxLength: 32,
            referenceTable: 'ecc_agent',
        }),
        number: StringColumn({
            attributes: {
                edge_encryption_enabled: true,
            },
            default: 'javascript:global.getNextObjNumberPadded();',
            maxLength: 40,
        }),
        oauth_entity_profile: ReferenceColumn({
            label: 'OAuth Entity Profile',
            maxLength: 32,
            referenceTable: 'oauth_entity_profile',
        }),
        password: Password2Column({
            label: [
                {
                    plural: '',
                },
            ],
            maxLength: 255,
        }),
        rate_limit_count: IntegerColumn({
            default: '0',
            label: 'Parallel Connections',
            maxLength: 40,
        }),
        time_zone: StringColumn({
            default: 'UTC',
            maxLength: 40,
        }),
        type: StringColumn({
            default: 'REST',
            dropdown: 'dropdown_without_none',
            maxLength: 40,
        }),
        username: StringColumn({
            label: [
                {
                    label: 'UserName',
                    plural: '',
                },
            ],
            maxLength: 80,
        }),
        version: StringColumn({
            maxLength: 40,
            readOnly: true,
        }),
    },
})
