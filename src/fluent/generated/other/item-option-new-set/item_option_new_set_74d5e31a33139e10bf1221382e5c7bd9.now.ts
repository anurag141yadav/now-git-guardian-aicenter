import { VariableSet, SingleLineTextVariable, CustomVariable } from '@servicenow/sdk/core'

export const bulkMobileCredRequestMetadata = VariableSet({
    $id: Now.ID['74d5e31a33139e10bf1221382e5c7bd9'],
    title: 'Bulk Mobile Cred Request Metadata',
    internalName: 'bulk_mobile_cred_request_metadata',
    version: 19,
    variables: {
        able_to_submit: SingleLineTextVariable({
            question: 'Able To Submit',
            order: 400,
            defaultValue: 'Yes',
            hidden: true,
        }),
        trigger_event_on_identity_change: CustomVariable({
            question: 'Trigger event on identity change',
            order: 600,
            widget: '583bb379eb4f1a100326f284dad0cdfc',
        }),
        identities_count: SingleLineTextVariable({
            question: 'Identites Count',
            order: 650,
            hidden: true,
        }),
        deleted_requestees: SingleLineTextVariable({
            question: 'Deleted Requestees',
            order: 700,
            hidden: true,
        }),
        location_filtered_identities: SingleLineTextVariable({
            question: 'Location Filtered Identities',
            order: 750,
            hidden: true,
        }),
    },
})
