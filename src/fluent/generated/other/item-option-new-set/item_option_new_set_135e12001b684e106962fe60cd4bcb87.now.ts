import {
    VariableSet,
    SingleLineTextVariable,
    SelectBoxVariable,
    ReferenceVariable,
    DateTimeVariable,
} from '@servicenow/sdk/core'

export const accessLevels = VariableSet({
    $id: Now.ID['135e12001b684e106962fe60cd4bcb87'],
    title: 'Access Levels',
    internalName: 'access_levels',
    type: 'multiRow',
    layout: '2across',
    order: 200,
    version: 127,
    variables: {
        access_record_id: SingleLineTextVariable({
            question: 'Record ID',
            unique: true,
            readOnly: true,
            hidden: true,
        }),
        access_record_status: SelectBoxVariable({
            question: 'Record Status',
            order: 1,
            defaultValue: 'NEW',
            readOnly: true,
            hidden: true,
            choices: {
                NEW: {
                    label: 'New',
                    inactive: false,
                    sequence: 100,
                },
                EXISTING: {
                    label: 'Existing',
                    inactive: false,
                    sequence: 100,
                },
            },
        }),
        access_action: ReferenceVariable({
            question: 'Action',
            order: 5,
            defaultValue:
                'javascript:new MetadataGlideRecordHelper().getRecordSysIdByCode("x_aleen_snguardian_request_entity_action","ADD");',
            referenceTable: 'x_aleen_snguardian_request_entity_action',
            referenceQualCondition: 'codeLIKEADD^ORcodeLIKEUPDATE^ORcodeLIKEDELETE^EQ',
        }),
        access_level: ReferenceVariable({
            question: 'Access Level',
            order: 10,
            attributes: 'fef_ac_columns=access_level;',
            unique: true,
            referenceTable: 'x_aleen_snguardian_access_location',
        }),
        access_valid_from: DateTimeVariable({
            question: 'Valid From',
            order: 20,
        }),
        access_valid_to: DateTimeVariable({
            question: 'Valid To',
            order: 30,
        }),
        associated_asset: SelectBoxVariable({
            question: 'Associated Asset',
            order: 100,
            hidden: true,
            choices: {
                NEW: {
                    label: 'New',
                    inactive: false,
                    sequence: 100,
                },
            },
        }),
    },
})
