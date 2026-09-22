import { Table, StringColumn } from '@servicenow/sdk/core'

export const x_aleen_snguardian_u_event__import_set = Table({
    actions: {
        read: true,
        update: false,
        delete: false,
        create: false,
    },
    allowClientScripts: false,
    allowNewFields: false,
    allowUiActions: false,
    allowWebServiceAccess: true,
    extends: 'sys_import_set_row',
    label: 'U Event  Import Set',
    name: 'x_aleen_snguardian_u_event__import_set',
    schema: {
        u_alert_attr_eventid: StringColumn({
            attributes: {
                edge_encryption_enabled: true,
                import_attribute_name: 'Alert_attr_EventId',
            },
            label: 'EventId',
            maxLength: 40,
        }),
        u_alert_attr_eventtype: StringColumn({
            attributes: {
                edge_encryption_enabled: true,
                import_attribute_name: 'Alert_attr_EventType',
            },
            label: 'Event Type',
            maxLength: 40,
        }),
        u_alert_attr_i_tion_timestamp: StringColumn({
            attributes: {
                edge_encryption_enabled: true,
                import_attribute_name: 'Alert_attr_Insertion_TIMESTAMP',
            },
            label: 'Insertion timestamp',
            maxLength: 40,
        }),
        u_alert_attr_local_timestamp: StringColumn({
            attributes: {
                edge_encryption_enabled: true,
                import_attribute_name: 'Alert_attr_LOCAL_TIMESTAMP',
            },
            label: 'Local Timestamp',
            maxLength: 40,
        }),
        u_alert_attr_profile_name: StringColumn({
            attributes: {
                edge_encryption_enabled: true,
                import_attribute_name: 'Alert_attr_PROFILE_Name',
            },
            label: 'Profile name',
            maxLength: 40,
        }),
        u_alert_attr_timestamp: StringColumn({
            attributes: {
                edge_encryption_enabled: true,
                import_attribute_name: 'Alert_attr_TIMESTAMP',
            },
            label: 'Timestamp',
            maxLength: 40,
        }),
        u_alert_event_position: StringColumn({
            attributes: {
                edge_encryption_enabled: true,
                import_attribute_name: 'Alert_Event_Position',
            },
            label: 'Event position',
            maxLength: 40,
        }),
        u_pacssource: StringColumn({
            attributes: {
                edge_encryption_enabled: true,
                import_attribute_name: 'PACSSource',
            },
            label: 'PACSSource',
            maxLength: 40,
        }),
    },
})
