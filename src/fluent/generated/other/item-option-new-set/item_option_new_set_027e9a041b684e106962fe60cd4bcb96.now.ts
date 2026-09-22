import { VariableSet, ReferenceVariable, DateTimeVariable, SingleLineTextVariable } from '@servicenow/sdk/core'

export const assets = VariableSet({
    $id: Now.ID['027e9a041b684e106962fe60cd4bcb96'],
    title: 'Assets',
    internalName: 'assets',
    type: 'multiRow',
    layout: '2across',
    order: 300,
    version: 21,
    variables: {
        asset: ReferenceVariable({
            question: 'Asset',
            order: 10,
            attributes:
                'ref_auto_completer=AJAXTableCompleter,ref_ac_columns=status;system;serial,ref_ac_columns_search=true',
            referenceTable: 'x_aleen_snguardian_asset',
            referenceQualCondition: 'status=a67f0ed51bbc8210759455342a4bcbec^EQ',
        }),
        asset_valid_from: DateTimeVariable({
            question: 'Valid From',
            order: 20,
            defaultValue: `var gdt = new GlideDateTime();\r
return gdt.getDisplayValue();`,
        }),
        asset_valid_to: DateTimeVariable({
            question: 'Valid To',
            order: 30,
        }),
        asset_status: ReferenceVariable({
            question: 'Status',
            order: 35,
            referenceTable: 'x_aleen_snguardian_status_code',
            referenceQualCondition: 'name=Active^ORname=Inactive^EQ',
        }),
        asset_provisioning_status: ReferenceVariable({
            question: 'Provisioning Status',
            order: 40,
            readOnly: true,
            referenceTable: 'x_aleen_snguardian_provisioning_status',
        }),
        asset_action: ReferenceVariable({
            question: 'Action',
            order: 50,
            defaultValue:
                'javascript:new MetadataGlideRecordHelper().getRecordSysIdByCode("x_aleen_snguardian_request_entity_action","ADD");',
            referenceTable: 'x_aleen_snguardian_request_entity_action',
            referenceQualCondition: 'applicable_toLIKEASSET^codeSTARTSWITHADD^EQ',
        }),
        asset_record_status: SingleLineTextVariable({
            question: 'Asset Record Status',
            order: 80,
            defaultValue: 'NEW',
            hidden: true,
        }),
    },
})
