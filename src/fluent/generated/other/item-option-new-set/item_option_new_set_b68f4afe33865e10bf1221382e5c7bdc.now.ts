import { VariableSet, SingleLineTextVariable, YesNoVariable, CustomVariable } from '@servicenow/sdk/core'

export const visitorIdScan = VariableSet({
    $id: Now.ID['b68f4afe33865e10bf1221382e5c7bdc'],
    title: 'Visitor ID Scan',
    internalName: 'visitor_id_scan',
    description: 'Visitor ID Scan',
    version: 6,
    variables: {
        id_scan_visitor_back_card: SingleLineTextVariable({
            question: 'Id Scan Visitor Back Card',
            hidden: true,
        }),
        id_scan_visitor_front_card: SingleLineTextVariable({
            question: 'Id Scan Visitor Front Card',
            hidden: true,
        }),
        is_visitor_verified: YesNoVariable({
            question: 'Is Visitor Verified',
            defaultValue: 'No',
            hidden: true,
        }),
        id_scan_visitor_image: SingleLineTextVariable({
            question: 'Id Scan Visitor Image',
            hidden: true,
        }),
        id_verification: CustomVariable({
            question: 'id_verification',
            order: 100,
            widget: '4a29a64f2bce9250d4dffd74ce91bf7c',
        }),
    },
})
