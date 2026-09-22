import { Action, wfa, actionStep } from '@servicenow/sdk/automation'
import { StringColumn } from '@servicenow/sdk/core'

export const onboard_temp_worker_email = Action(
    {
        $id: Now.ID['e50801fb1b8182106962fe60cd4bcbd1'],
        name: 'Alert Onboard Temp Worker Email',
        internalName: 'onboard_temp_worker_email',
        inputs: {
            to: StringColumn({
                label: 'To',
                mandatory: true,
                maxLength: 8000,
            }),
            request_status: StringColumn({
                label: 'Request Status',
                mandatory: true,
                maxLength: 8000,
            }),
            work_notes: StringColumn({
                label: 'Work Notes',
                mandatory: true,
                maxLength: 8000,
            }),
            provisioning_status: StringColumn({
                label: 'Provisioning Status',
                mandatory: true,
                maxLength: 8000,
            }),
            requested_for: StringColumn({
                label: 'Requested For',
                mandatory: true,
                maxLength: 8000,
            }),
        },
        outputs: {},
        masterSnapshot: '5f5a05bf1b8182106962fe60cd4bcbbe',
    },
    (params) => {
        wfa.actionStep(
            actionStep.email,
            {
                $id: Now.ID['995ac1bf1b8182106962fe60cd4bcb52'],
                label: 'Email step',
            },
            {
                body: `<p data-tinymcerootblock="">Hi&nbsp;<span class="data_parent_pill" style="display: inline;" contenteditable="false" data-pillvalue="{{fd_transform:c0339d83-12c8-413e-8cf0-76f4f8fb574c}}"><span class="data_pill  accepts_transform_functions" tabindex="0" contenteditable="false" data-pillvalue="{{fd_transform:c0339d83-12c8-413e-8cf0-76f4f8fb574c}}"><span class="data-pill-content-container"><span class="pills"><span class="pill-text" data-for="ah_tooltipTop" data-tip="action &gt; Requested For"><span class="pill-start">action</span><span class="pill-arrow"><span class="data-pill-label-caret"><span class="data-pill-label-arrow">➛</span></span></span><span class="pill-end">Requested For</span></span></span><button id="transform_function_facade_c0339d83-12c8-413e-8cf0-76f4f8fb574c" class="transform_function_facade no_transform_applied"><span class="inline-script-icon"><span style="display: none;">​</span></span></button></span></span></span>,</p>
<p data-tinymcerootblock="">Your onboarding as a Temporary Worker&nbsp;<span class="data_parent_pill" style="display: inline;" contenteditable="false" data-pillvalue="{{fd_transform:dca32a7c-bc0a-4cec-8523-efd7b3589a61}}"><span class="data_pill  accepts_transform_functions" tabindex="0" contenteditable="false" data-pillvalue="{{fd_transform:dca32a7c-bc0a-4cec-8523-efd7b3589a61}}"><span class="data-pill-content-container"><span class="pills"><span class="pill-text" data-for="ah_tooltipTop" data-tip="action &gt; Work Notes"><span class="pill-start">action</span><span class="pill-arrow"><span class="data-pill-label-caret"><span class="data-pill-label-arrow">➛</span></span></span><span class="pill-end">Work Notes</span></span></span><button id="transform_function_facade_dca32a7c-bc0a-4cec-8523-efd7b3589a61" class="transform_function_facade no_transform_applied"><span class="inline-script-icon"><span style="display: none;">​</span></span></button></span></span></span> and is <span class="data_parent_pill" style="display: inline;" contenteditable="false" data-pillvalue="{{fd_transform:c4706a28-6c56-4418-90ea-c5eafa9ed245}}"><span class="data_pill  accepts_transform_functions" tabindex="0" contenteditable="false" data-pillvalue="{{fd_transform:c4706a28-6c56-4418-90ea-c5eafa9ed245}}"><span class="data-pill-content-container"><span class="pills"><span class="pill-text" data-for="ah_tooltipTop" data-tip="action &gt; Provisioning Status"><span class="pill-start">action</span><span class="pill-arrow"><span class="data-pill-label-caret"><span class="data-pill-label-arrow">➛</span></span></span><span class="pill-end">Provisioning Status</span></span></span><button id="transform_function_facade_c4706a28-6c56-4418-90ea-c5eafa9ed245" class="transform_function_facade no_transform_applied"><span class="inline-script-icon"><span style="display: none;">​</span></span></button></span></span></span>.</p>
<p data-tinymcerootblock="">Thank you for your interest and for submitting your application. For any query, please contact Manager assigned.</p>
<p data-tinymcerootblock="">Thank you</p>
<table style="font-family: Arial, Helvetica, sans-serif; color: #000000; font-size: 1px; line-height: 3px; padding: 0px; margin: 0px;" border="0" cellspacing="0" cellpadding="0">
<tbody>
<tr>
<td style="margin: 0px; font-size: 16px; line-height: 18px;" valign="top">
<table style="line-height: 3px; font-size: 1px; padding: 0px; margin: 0px;" border="0" cellspacing="0" cellpadding="0">
<tbody>
<tr>
<td style="margin: 0px; line-height: 0px; padding-bottom: 10px;"><img src="https://ci3.googleusercontent.com/meips/ADKq_NYoesWovbw4cHvQpK3LtB35d4yCR6AKbc_hrGymDI--omTG_Yb-B3BKiLgf5rwigU_BYPnS0IBwY2XyyhIN_A5rgiPE5GAtAoqLMupWE68qW0gIkh_XZTQaNnA89GfSlQUyLSAT1TAAC-E=s0-d-e1-ft#https://s3.amazonaws.com/assets.bbmconnect.com/market/AlertEnterprise/Alert+logo.jpg" alt="" width="212" height="46" border="0" /><br /><img style="padding: 0px 0px 10px;" src="https://ci3.googleusercontent.com/meips/ADKq_Na3XzutvZyeXr3dxYXQZqbKn5Qi95plAG3EUujEu1iMFmgG-HETj6qAQ-y2XtyZdO90zDIdHwpSRZsIHeorhnem0nkVKYbf4jpvjqp1H8fMe9-Q8kj5woJH4YTrWq37XHk4wkVObvHx-LasrNu6Chk=s0-d-e1-ft#https://s3.amazonaws.com/assets.bbmconnect.com/market/AlertEnterprise/Gradient-Divider.png" alt="" width="270" height="3" border="0" /></td>
</tr>
<tr>
<td style="margin: 0px; font-size: 14px; line-height: 16px; padding-bottom: 11px;"><span style="font-family: Metropolis, Gadget, sans-serif; line-height: 16px;"><a style="color: #1155cc;" href="https://www.linkedin.com/company/alertenterprise/" target="_blank"><img src="https://ci3.googleusercontent.com/meips/ADKq_NaoocqrWvRPggW84LQnQcbtNCjm3Ndr82Y-WuZFg9MMVAZy92jg36H5HHtJ-PVJotLtsCXkjOe7JORhFO_4B2DMiR0DDxItiE5D0n22LkmtKTbB_zJA4iUJHRw5y3Mb8QcXGi3nGpqKwaU=s0-d-e1-ft#https://s3.amazonaws.com/assets.bbmconnect.com/market/AlertEnterprise/ALE+icon+1.png" alt="" width="14" height="14" border="0" />&nbsp;</a><a style="color: #1155cc;" href="https://twitter.com/alertenterprise" target="_blank"><img src="https://ci3.googleusercontent.com/meips/ADKq_NYoNE8iKiQSxO4MB_LExtdQeazdzMt7fu6LYZ7EBKrmU3oqdGAj4vD16i0d03Eqt7dBiusMcJgEa-NtEcHLlWngY_pLef-LK0KFhpM6sFm6Im5U3TLbSFeO5yFYQktDOjuBDuB8XyLaAb5_lzzA=s0-d-e1-ft#https://s3.amazonaws.com/assets.bbmconnect.com/market/AlertEnterprise/twitter-x-logo.png" alt="" width="14" height="14" border="0" /></a>&nbsp;<a style="color: #1155cc;" href="https://alertenterprise.com/" target="_blank"><img src="https://ci3.googleusercontent.com/meips/ADKq_NbH8MLc20m7nd_zXLmwHOeAygLaNo1apGkG0veelRucLTsZP4YU-efMTPTkPkpe7pJit_nMk3DTNtLqgS1eo0DC_O3D8tVL409elGmkqs1LycQ63NljkH279Xmu5UqUbw07_6o07tqo2VU=s0-d-e1-ft#https://s3.amazonaws.com/assets.bbmconnect.com/market/AlertEnterprise/ALE+icon+3.png" alt="" width="14" height="14" border="0" /></a>&nbsp;<a style="color: #000000;" href="https://alertenterprise.com/" target="_blank"><span style="font-family: Helvetica, sans-serif;">https://alertenterprise.com</span></a></span></td>
</tr>
<tr>
<td style="margin: 0px; line-height: 0px; padding-bottom: 10px;"><br /><img style="padding: 0px 0px 10px;" src="https://ci3.googleusercontent.com/meips/ADKq_Na3XzutvZyeXr3dxYXQZqbKn5Qi95plAG3EUujEu1iMFmgG-HETj6qAQ-y2XtyZdO90zDIdHwpSRZsIHeorhnem0nkVKYbf4jpvjqp1H8fMe9-Q8kj5woJH4YTrWq37XHk4wkVObvHx-LasrNu6Chk=s0-d-e1-ft#https://s3.amazonaws.com/assets.bbmconnect.com/market/AlertEnterprise/Gradient-Divider.png" alt="" width="270" height="3" border="0" /><br /><span style="font-family: Helvetica, sans-serif; font-size: 15px; line-height: 19px; font-weight: bold;">Securing total workforce management</span></td>
</tr>
</tbody>
</table>
</td>
</tr>
</tbody>
</table>
<p data-tinymcerootblock="">&nbsp;</p>`,
                subject: `Request for Onboard Temp Worker ${wfa.dataPill(params.inputs.request_status, 'string')}`,
                to: wfa.dataPill(params.inputs.to, 'string'),
                errorHandlingType: 'stop_the_action',
            }
        )
    }
)
