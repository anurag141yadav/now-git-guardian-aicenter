import { Table, StringColumn, ListColumn, ReferenceColumn, BooleanColumn, IntegerColumn } from '@servicenow/sdk/core'

export const x_aleen_snguardian_badge_office = Table({
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
        numberOfDigits: 4,
        prefix: 'BADGEOFFICE',
    },
    label: 'Location Administration',
    name: 'x_aleen_snguardian_badge_office',
    schema: {
        badge_issue_type: StringColumn({
            default: 'PLASTIC',
            dropdown: 'dropdown_without_none',
            maxLength: 40,
        }),
        description: StringColumn({
            maxLength: 100,
        }),
        lobby_admin: ListColumn({
            maxLength: 4000,
            referenceTable: 'sys_user',
        }),
        locations: ListColumn({
            mandatory: true,
            maxLength: 4000,
            referenceTable: 'x_aleen_snguardian_location',
        }),
        mc_nfc_system: ReferenceColumn({
            label: 'MC NFC System',
            maxLength: 32,
            referenceTable: 'x_aleen_snguardian_system',
        }),
        mc_sub_type: ReferenceColumn({
            label: 'MC Sub Type',
            maxLength: 32,
            referenceTable: 'x_aleen_snguardian_asset_type',
        }),
        mc_supported: BooleanColumn({
            default: 'False',
            label: 'MC Supported',
            maxLength: 40,
        }),
        name: StringColumn({
            maxLength: 40,
        }),
        number: StringColumn({
            attributes: {
                edge_encryption_enabled: true,
            },
            default: 'javascript:global.getNextObjNumberPadded();',
            maxLength: 40,
        }),
        officers: ListColumn({
            label: 'Badging Officer',
            maxLength: 4000,
            referenceTable: 'sys_user',
        }),
        order: IntegerColumn({
            default: '1',
            maxLength: 40,
        }),
        security_admin: ListColumn({
            maxLength: 4000,
            referenceTable: 'sys_user',
        }),
        system: ListColumn({
            label: 'PAC System',
            maxLength: 32,
            referenceTable: 'x_aleen_snguardian_system',
        }),
        web_provisioning: BooleanColumn({
            default: 'False',
            maxLength: 40,
        }),
    },
})
