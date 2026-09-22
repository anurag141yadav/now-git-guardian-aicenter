import {
    CatalogItemRecordProducer,
    ReferenceVariable,
    DateTimeVariable,
    AttachmentVariable,
    LabelVariable,
    CustomVariable,
} from '@servicenow/sdk/core'

export const idVerification = CatalogItemRecordProducer({
    $id: Now.ID['914c83502b0a9610d4dffd74ce91bfdc'],
    name: 'ID Verification',
    catalogs: ['e0d08b13c3330100c8b837659bba8fb4'],
    categories: ['17a5358647312250f487c24fe16d430d'],
    notAvailableFor: ['3fd33dc247312250f487c24fe16d43c9'],
    owner: '6816f79cc0a8016401c5a33be04be441',
    roles: ['snc_internal'],
    shortDescription: 'Self Service Catalog Item to complete ID Verification',
    version: 35,
    table: 'x_aleen_snguardian_visitor_request',
    script: Now.include('./sc_cat_item_producer_914c83502b0a9610d4dffd74ce91bfdc-script.js'),
    postInsertScript: Now.include('./sc_cat_item_producer_914c83502b0a9610d4dffd74ce91bfdc-post-insert-script.js'),
    variables: {
        visitor_self_service_visitor: ReferenceVariable({
            question: 'Visitor',
            order: 1,
            referenceTable: 'x_aleen_snguardian_visitor',
        }),
        visitor_self_service_verification_date: DateTimeVariable({
            question: 'Verification Date & Time',
            order: 2,
            defaultValue: 'javascript:new GlideDateTime().getDisplayValue();',
            readOnly: true,
        }),
        visitor_self_service_document: ReferenceVariable({
            question: 'Document',
            order: 3,
            referenceTable: 'x_aleen_snguardian_visitor_id_document',
        }),
        visitor_self_service_document_uploaded: AttachmentVariable({
            question: 'Upload Document',
            order: 4,
            tooltip: 'Upload Document or Capture Photo',
            showHelp: true,
            helpTag: 'File size supported : 1024 MB',
            helpText: 'File size supported : 1024 MB',
        }),
        visitor_self_service_or: LabelVariable({
            question: 'OR',
            order: 5,
        }),
        visitor_self_service_capture_and_upload: CustomVariable({
            question: 'Capture and Upload',
            order: 6,
            widget: '0a0476cf33ed5210bf1221382e5c7ba3',
        }),
    },
})
