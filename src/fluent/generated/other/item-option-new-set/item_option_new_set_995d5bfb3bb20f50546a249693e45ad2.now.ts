import { VariableSet, ReferenceVariable } from '@servicenow/sdk/core'

export const roles = VariableSet({
    $id: Now.ID['995d5bfb3bb20f50546a249693e45ad2'],
    title: 'Roles',
    internalName: 'roles',
    type: 'multiRow',
    version: 9,
    variables: {
        role: ReferenceVariable({
            question: 'Role',
            width: 100,
            attributes:
                'ref_auto_completer=AJAXTableCompleter,ref_ac_columns=access_level;system,ref_ac_columns_search=true',
            referenceTable: 'x_aleen_snguardian_access_level',
            useReferenceQualifier: 'advanced',
            referenceQual: 'system.codeLIKELENEL^EQ',
        }),
    },
})
