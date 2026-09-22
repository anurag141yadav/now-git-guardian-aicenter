import {
    VariableSet,
    YesNoVariable,
    CustomVariable,
    WideSingleLineTextVariable,
    SingleLineTextVariable,
} from '@servicenow/sdk/core'

export const ndaSign = VariableSet({
    $id: Now.ID['c068dc862bb19e10d4dffd74ce91bfcb'],
    title: 'NDA & Sign',
    internalName: 'nda_sign',
    description: 'Visit Remarks and Signature',
    version: 27,
    variables: {
        terms_and_conditions_agreed: YesNoVariable({
            question: 'Terms and Conditions Agreed',
            defaultValue: 'Yes',
            hidden: true,
        }),
        visit_nda: CustomVariable({
            question: 'visit_nda',
            order: 100,
            width: 100,
            widget: '73f03d2e33461e10bf1221382e5c7bf9',
        }),
        visitor_signature: WideSingleLineTextVariable({
            question: 'Signature',
            order: 200,
            width: 100,
            hidden: true,
        }),
        visit_nda_id: SingleLineTextVariable({
            question: 'visit_nda_id',
            order: 300,
            hidden: true,
        }),
    },
})
