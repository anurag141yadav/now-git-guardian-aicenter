import { VariableSet, SingleLineTextVariable, CustomWithLabelVariable, YesNoVariable } from '@servicenow/sdk/core'

export const visitorPhoto = VariableSet({
    $id: Now.ID['8706456c2b02d610d4dffd74ce91bf55'],
    title: 'Visitor Photo',
    internalName: 'visitor_image',
    version: 19,
    variables: {
        visitor_image_captured: SingleLineTextVariable({
            question: 'Visitor Image Captured',
            hidden: true,
        }),
        visitor_image_capture: CustomWithLabelVariable({
            question: 'Visitor Photo',
            widget: '3c96575547f16a5051a3e84d416d431b',
        }),
        update_exisiting_visitor_photo: YesNoVariable({
            question: 'Update Exisiting Visitor Photo',
            defaultValue: 'Yes',
            hidden: true,
        }),
        delete_visitor_photo: YesNoVariable({
            question: 'Delete visitor photo',
            order: 500,
            defaultValue: 'Yes',
            hidden: true,
        }),
    },
})
