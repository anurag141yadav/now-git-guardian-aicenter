import { Subflow, wfa, action } from '@servicenow/sdk/automation'
import { ReferenceColumn, StringColumn, ChoiceColumn } from '@servicenow/sdk/core'

export const create_visitor_notification_record_subflow = Subflow(
    {
        $id: Now.ID['0da08cb333d69610bf1221382e5c7b77'],
        name: 'Alert Create Visitor Notification Record Subflow',
        internalName: 'create_visitor_notification_record_subflow',
        description: 'To create record in visitor notification table',
        runAs: 'system',
        masterSnapshot: '3141843733d69610bf1221382e5c7b13',
        inputs: {
            visit: ReferenceColumn({
                label: 'visit',
                referenceTable: 'x_aleen_snguardian_visitor_visit',
            }),
            location: ReferenceColumn({
                label: 'location',
                referenceTable: 'x_aleen_snguardian_location',
            }),
            to: StringColumn({
                label: 'to',
                maxLength: 8000,
            }),
            type: ChoiceColumn({
                label: 'type',
                maxLength: 32,
                default: 'visitScheduled',
                dynamicValueDefinitions: {
                    type: 'choices_from_other_table',
                    table: 'x_aleen_snguardian_visitor_notification',
                    field: 'type',
                },
            }),
        },
    },
    (_params) => {
        wfa.action(
            action.core.createRecord,
            {
                $id: Now.ID['5907e15b4787f21051a3e84d416d43c5'],
                uuid: '93e09a29-2fa1-465a-9747-7d0448edb170',
            },
            {
                table_name: 'x_aleen_snguardian_visitor_notification',
                values: TemplateValue({
                    visit: wfa.dataPill(_params.inputs.visit, 'reference'),
                    location: wfa.dataPill(_params.inputs.location, 'reference'),
                    to: wfa.dataPill(_params.inputs.to, 'string'),
                    type: wfa.dataPill(_params.inputs.type, 'choice'),
                }),
            }
        )
    }
)
