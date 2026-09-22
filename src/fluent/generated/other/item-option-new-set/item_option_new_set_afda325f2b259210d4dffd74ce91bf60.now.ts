import {
    VariableSet,
    ReferenceVariable,
    LookupSelectBoxVariable,
    YesNoVariable,
    SingleLineTextVariable,
    AttachmentVariable,
} from '@servicenow/sdk/core'

export const visitHome = VariableSet({
    $id: Now.ID['afda325f2b259210d4dffd74ce91bf60'],
    title: 'Visit Home',
    internalName: 'visit_creation_home',
    layout: '2across',
    order: 10,
    version: 229,
    variables: {
        visit_location: ReferenceVariable({
            question: 'Location',
            order: 10,
            mandatory: true,
            referenceTable: 'x_aleen_snguardian_location',
            referenceQualCondition: 'type=LOBBY^EQ',
        }),
        visit_type: ReferenceVariable({
            question: 'Visit Type',
            order: 20,
            mandatory: true,
            referenceTable: 'x_aleen_snguardian_visitor_visit_type',
        }),
        visit_visitor_single_visitor_id: LookupSelectBoxVariable({
            question: 'Visitor',
            order: 30,
            referenceQual: 'is_deleted=false',
            lookupFromTable: 'x_aleen_snguardian_visitor',
            lookupValueField: 'sys_id',
            lookupLabelFields: ['full_name', 'email'],
        }),
        check_in_out_as_one: YesNoVariable({
            question: 'Check-in/out as One',
            order: 35,
            defaultValue: 'No',
        }),
        visit_visitor_group_name: SingleLineTextVariable({
            question: 'Group Name',
            order: 40,
        }),
        visit_visitor_attachment: AttachmentVariable({
            question: 'Upload Visitor',
            order: 50,
            showHelp: true,
            instructions: `<p><strong>Maximum file size supported : 1024 MB<br />File Format supported : CSV</strong></p>
<p><em>Note: The file should not include a heading line.</em></p>
<table border="1" cellspacing="0" cellpadding="5"><tbody><tr><th>First Name</th><th>Last Name</th><th>Email</th><th>Phone</th></tr><tr><td>John</td><td>Doe</td><td>john.doe&#64;mail.com</td><td>1234567890</td></tr></tbody></table>
<p>Ensure your file follows this structure before uploading.</p>`,
        }),
    },
})
