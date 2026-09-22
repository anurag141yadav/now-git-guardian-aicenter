import {
    Table,
    DateTimeColumn,
    ReferenceColumn,
    StringColumn,
    TableNameColumn,
    DocumentIdColumn,
    UrlColumn,
} from '@servicenow/sdk/core'

export const x_aleen_snguardian_risk_instance = Table({
    actions: {
        read: true,
        update: false,
        delete: false,
        create: false,
    },
    allowClientScripts: false,
    allowNewFields: false,
    allowUiActions: false,
    allowWebServiceAccess: true,
    autoNumber: {
        prefix: 'RISINST',
    },
    label: 'Risk Instance',
    name: 'x_aleen_snguardian_risk_instance',
    schema: {
        action_at: DateTimeColumn({
            maxLength: 40,
        }),
        assigned_to: ReferenceColumn({
            maxLength: 32,
            referenceTable: 'sys_user',
        }),
        comments: StringColumn({
            isFullUTF8: true,
            maxLength: 255,
        }),
        detected_at: DateTimeColumn({
            maxLength: 40,
        }),
        document_table: TableNameColumn({
            maxLength: 64,
        }),
        document: DocumentIdColumn({
            dependent: 'document_table',
            maxLength: 32,
        }),
        eta: DateTimeColumn({
            label: 'ETA',
            maxLength: 40,
        }),
        identity: ReferenceColumn({
            maxLength: 32,
            referenceTable: 'x_aleen_snguardian_identity',
        }),
        mitigation: ReferenceColumn({
            label: 'Applied Mitigation',
            maxLength: 32,
            referenceTable: 'x_aleen_snguardian_mitigation',
        }),
        number: StringColumn({
            attributes: {
                ignore_filter_on_new: true,
            },
            default: 'javascript:global.getNextObjNumberPadded();',
            maxLength: 40,
        }),
        policy_execution: ReferenceColumn({
            maxLength: 32,
            referenceTable: 'x_aleen_snguardian_policy_execution',
        }),
        policy: ReferenceColumn({
            maxLength: 32,
            referenceTable: 'x_aleen_snguardian_policy',
        }),
        risk_evidence: UrlColumn({
            maxLength: 1024,
        }),
        risk: ReferenceColumn({
            maxLength: 32,
            referenceTable: 'x_aleen_snguardian_risk',
        }),
        sla_due: StringColumn({
            functionDefinition: 'glidefunction:datediff(action_at,eta)',
            maxLength: 20,
            readOnly: true,
        }),
        status: StringColumn({
            default: 'OPEN',
            dropdown: 'dropdown_without_none',
            maxLength: 40,
        }),
    },
    createAccessControls: true,
})
