import { Action, wfa, actionStep } from '@servicenow/sdk/automation'
import { StringColumn } from '@servicenow/sdk/core'

export const alert_mobile_credential_email = Action(
    {
        $id: Now.ID['098aed5247593e10f487c24fe16d43e1'],
        name: 'Alert Email Processing Action',
        internalName: 'alert_mobile_credential_email',
        description: 'Mobile Credential Web Provisioning',
        inputs: {
            email: StringColumn({
                label: 'email',
                maxLength: 8000,
            }),
            email_template: StringColumn({
                label: 'email_template',
                maxLength: 8000,
            }),
            email_code: StringColumn({
                label: 'email_code',
                maxLength: 8000,
            }),
            email_data: StringColumn({
                label: 'email_data',
                maxLength: 8000,
            }),
            email_subject: StringColumn({
                label: 'email_subject',
                maxLength: 8000,
            }),
        },
        outputs: {},
        masterSnapshot: '711c2ddb47513250f487c24fe16d435c',
    },
    (params) => {
        const processing_template_script = wfa.actionStep(
            actionStep.script,
            {
                $id: Now.ID['949e51df47113250f487c24fe16d434a'],
                label: 'Processing Template Script',
            },
            {
                application: '35aa573fd7802200bdbaee5b5e610375',
                script: Now.include('./scripts/949e51df47113250f487c24fe16d434a.js'),
                errorHandlingType: 'stop_the_action',
                required_run_time: 'instance',
                inputVariables: {
                    email_data: {
                        label: 'email_data',
                        value: wfa.dataPill(params.inputs.email_data, 'string'),
                    },
                    email_code: {
                        label: 'email_code',
                        value: wfa.dataPill(params.inputs.email_code, 'string'),
                    },
                    email_subject: {
                        label: 'email_subject',
                        value: wfa.dataPill(params.inputs.email_subject, 'string'),
                    },
                    email_template: {
                        label: 'email_template',
                        value: wfa.dataPill(params.inputs.email_template, 'string'),
                    },
                    email: {
                        label: 'email',
                        value: wfa.dataPill(params.inputs.email, 'string'),
                    },
                },
                outputVariables: {
                    email_template: StringColumn({
                        label: 'email_template',
                        maxLength: 8000,
                    }),
                    email_subject: StringColumn({
                        label: 'email_subject',
                        maxLength: 8000,
                    }),
                    email: StringColumn({
                        label: 'email',
                        maxLength: 8000,
                    }),
                },
            }
        )
        wfa.actionStep(
            actionStep.email,
            {
                $id: Now.ID['e89e51df47113250f487c24fe16d43b0'],
                label: 'Email step',
            },
            {
                body: '<p data-tinymcerootblock=""><span class="data_parent_pill" style="display: inline;" contenteditable="false" data-pillvalue="{{fd_transform:1da18133-a2a8-4050-a5a1-563fe79c4a31}}"><span class="data_pill  accepts_transform_functions" tabindex="0" contenteditable="false" data-pillvalue="{{fd_transform:1da18133-a2a8-4050-a5a1-563fe79c4a31}}"><span class="data-pill-content-container"><span class="pills"><span class="pill-text" data-tooltip-id="ah_tooltipTop" data-tooltip-content="step &gt; Processing Template Script &gt; email_template"><span class="pill-start">step</span><span class="pill-arrow"><span class="data-pill-label-caret"><span class="data-pill-label-arrow">➛</span></span>...<span class="data-pill-label-caret"><span class="data-pill-label-arrow">➛</span></span></span><span class="pill-end">email_template</span></span></span><button id="transform_function_facade_1da18133-a2a8-4050-a5a1-563fe79c4a31" class="transform_function_facade no_transform_applied"><span class="inline-script-icon"><span style="display: none;">​</span></span></button></span></span></span></p>',
                subject: wfa.dataPill(processing_template_script.email_subject, 'string'),
                to: wfa.dataPill(processing_template_script.email, 'string'),
                errorHandlingType: 'stop_the_action',
            }
        )
    }
)
