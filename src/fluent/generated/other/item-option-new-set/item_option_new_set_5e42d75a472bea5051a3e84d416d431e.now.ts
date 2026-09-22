import { VariableSet, ReferenceVariable, DateTimeVariable, SelectBoxVariable } from '@servicenow/sdk/core'

export const newAccessLevels = VariableSet({
    $id: Now.ID['5e42d75a472bea5051a3e84d416d431e'],
    title: 'New Access Levels',
    internalName: 'new_access_levels',
    type: 'multiRow',
    layout: '2across',
    version: 83,
    variables: {
        access_location: ReferenceVariable({
            question: 'Location',
            order: 10,
            mandatory: true,
            referenceTable: 'x_aleen_snguardian_location',
        }),
        access_level: ReferenceVariable({
            question: 'Access Level',
            order: 20,
            attributes:
                'ref_auto_completer=AJAXTableCompleter,ref_ac_columns=access_level;access_level.system,ref_ac_columns_search=true',
            unique: true,
            mandatory: true,
            referenceTable: 'x_aleen_snguardian_access_location',
            useReferenceQualifier: 'advanced',
            referenceQual: 'javascript:"location="+current.variables.access_location',
        }),
        access_valid_from: DateTimeVariable({
            question: 'Valid From',
            order: 30,
            mandatory: true,
        }),
        access_valid_to: DateTimeVariable({
            question: 'Valid To',
            order: 40,
            mandatory: true,
        }),
        associated_asset: SelectBoxVariable({
            question: 'Associated Asset',
            order: 50,
            hidden: true,
        }),
    },
})
