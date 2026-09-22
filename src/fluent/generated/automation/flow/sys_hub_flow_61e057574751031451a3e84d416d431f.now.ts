import { Subflow, wfa } from '@servicenow/sdk/automation'
import { StringColumn } from '@servicenow/sdk/core'

export const alert_web_provisioning_email_subflow = Subflow(
    {
        $id: Now.ID['61e057574751031451a3e84d416d431f'],
        name: 'Alert Web Provisioning Email Subflow',
        internalName: 'alert_web_provisioning_email_subflow',
        description: 'Subflow to initiate email for webprovisioning of mobile credential',
        runAs: 'system',
        masterSnapshot: '6a519bd74751031451a3e84d416d4352',
        inputs: {
            email_data: StringColumn({
                label: 'email_data',
                maxLength: 8000,
            }),
            email_code: StringColumn({
                label: 'email_code',
                maxLength: 8000,
            }),
            email: StringColumn({
                label: 'email',
                maxLength: 8000,
            }),
            email_subject: StringColumn({
                label: 'email_subject',
                maxLength: 8000,
            }),
            email_template: StringColumn({
                label: 'email_template',
                maxLength: 8000,
            }),
        },
        outputs: {
            result: StringColumn({
                label: 'result',
                maxLength: 8000,
            }),
        },
    },
    (_params) => {
        wfa.action(
            '711c2ddb47513250f487c24fe16d435c',
            {
                $id: Now.ID['62519bd74751031451a3e84d416d4317'],
                uuid: '371991f2-3398-4072-b279-9c3edd049b7a',
            },
            {
                email: wfa.dataPill(_params.inputs.email, 'string'),
                email_template: wfa.dataPill(_params.inputs.email_template, 'string'),
                email_code: wfa.dataPill(_params.inputs.email_code, 'string'),
                email_data: wfa.dataPill(_params.inputs.email_data, 'string'),
                email_subject: wfa.dataPill(_params.inputs.email_subject, 'string'),
            }
        )
    }
)
