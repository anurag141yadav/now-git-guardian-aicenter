import { VariableSet, ListCollectorVariable, SingleLineTextVariable } from '@servicenow/sdk/core'

export const hostDetails = VariableSet({
    $id: Now.ID['776c041f2b295210d4dffd74ce91bf93'],
    title: 'Host Details',
    internalName: 'host_details',
    layout: '2down',
    displayTitle: true,
    version: 27,
    variables: {
        host_s: ListCollectorVariable({
            question: 'Host(s)',
            order: 400,
            attributes:
                'ref_auto_completer=AJAXTableCompleter,ref_ac_columns=first_name;last_name;email,ref_ac_columns_search=true',
            defaultValue: 'javascript: gs.getUserID();',
            listTable: 'sys_user',
        }),
        host_email: SingleLineTextVariable({
            question: 'Host',
            order: 401,
        }),
        escort: ListCollectorVariable({
            question: 'Escort(s)',
            order: 420,
            listTable: 'sys_user',
        }),
    },
})
