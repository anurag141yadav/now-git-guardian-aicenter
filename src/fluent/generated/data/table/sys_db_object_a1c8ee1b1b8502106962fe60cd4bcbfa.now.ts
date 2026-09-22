import { Table, ListColumn, IntegerColumn, StringColumn, ReferenceColumn, GenericColumn } from '@servicenow/sdk/core'

export const x_aleen_snguardian_review_task = Table({
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
    audit: true,
    autoNumber: {
        prefix: 'REVIEWTASK',
    },
    label: 'Review Task',
    name: 'x_aleen_snguardian_review_task',
    schema: {
        assigned_to: ListColumn({
            attributes: {
                edge_encryption_enabled: true,
                encode_utf8: false,
            },
            maxLength: 4000,
            referenceTable: 'sys_user',
        }),
        completed: IntegerColumn({
            attributes: {
                edge_encryption_enabled: true,
            },
            default: '0',
            maxLength: 40,
            readOnly: true,
        }),
        delegated_to: ListColumn({
            maxLength: 4000,
            referenceTable: 'sys_user',
        }),
        errors: IntegerColumn({
            default: '0',
            maxLength: 40,
            readOnly: true,
        }),
        number: StringColumn({
            attributes: {
                ignore_filter_on_new: true,
            },
            default: 'javascript:global.getNextObjNumberPadded();',
            maxLength: 40,
            readOnly: true,
        }),
        pending: IntegerColumn({
            attributes: {
                edge_encryption_enabled: true,
            },
            default: '0',
            maxLength: 40,
            readOnly: true,
        }),
        review_type: StringColumn({
            functionDefinition: 'glidefunction:concat(review.type,"");',
            maxLength: 40,
            readOnly: true,
        }),
        review: ReferenceColumn({
            maxLength: 32,
            readOnly: true,
            referenceTable: 'x_aleen_snguardian_review',
        }),
        status: ReferenceColumn({
            attributes: {
                edge_encryption_enabled: true,
                encode_utf8: false,
            },
            default:
                "javascript: getOpenCode();function getOpenCode(){var grCode=new GlideRecordSecure('x_aleen_snguardian_status_code');grCode.addQuery('code','INPROGRESS');grCode.query();if(grCode.next()){var sys_id_status_code=grCode.getUniqueValue();return sys_id_status_code;}return '';}",
            maxLength: 40,
            referenceTable: 'x_aleen_snguardian_status_code',
            referenceQual: 'applicable_toLIKEREVIEW-TASK^EQ',
            useReferenceQualifier: 'simple',
        }),
        total_records: IntegerColumn({
            attributes: {
                edge_encryption_enabled: true,
            },
            default: '0',
            maxLength: 40,
            readOnly: true,
        }),
        work_notes: GenericColumn({
            columnType: 'journal_input',
            label: 'Work notes',
            maxLength: 4000,
        }),
    },
    createAccessControls: true,
})
