import { Action, wfa, actionStep } from '@servicenow/sdk/automation'
import { StringColumn } from '@servicenow/sdk/core'

export const replace_badge_email = Action(
    {
        $id: Now.ID['206ae9a41b190610759455342a4bcbc4'],
        name: 'Alert Replace Badge Email',
        internalName: 'replace_badge_email',
        inputs: {
            to: StringColumn({
                label: 'To',
                mandatory: true,
                maxLength: 8000,
            }),
            requested_for: StringColumn({
                label: 'Requested For',
                mandatory: true,
                maxLength: 8000,
            }),
            deprov_status: StringColumn({
                label: 'Deprov Status',
                mandatory: true,
                maxLength: 8000,
            }),
            prov_status: StringColumn({
                label: 'Prov Status',
                mandatory: true,
                maxLength: 8000,
            }),
            badge_id: StringColumn({
                label: 'Badge Id',
                mandatory: true,
                maxLength: 8000,
            }),
            request_status: StringColumn({
                label: 'Request Status',
                mandatory: true,
                maxLength: 8000,
            }),
            new_badge_id: StringColumn({
                label: 'New Badge ID',
                mandatory: true,
                maxLength: 8000,
            }),
        },
        outputs: {},
        masterSnapshot: '174ca1681b190610759455342a4bcb14',
    },
    (params) => {
        wfa.actionStep(
            actionStep.email,
            {
                $id: Now.ID['aaeba9281b190610759455342a4bcb68'],
                label: 'Email step',
            },
            {
                body: `<p data-tinymcerootblock="">Hi&nbsp;<span class="data_parent_pill" style="display: inline;" contenteditable="false" data-pillvalue="{{fd_transform:47b73783-5cc8-41eb-9d87-7dbe9b50a4f0}}"><span class="data_pill  accepts_transform_functions" tabindex="0" contenteditable="false" data-pillvalue="{{fd_transform:47b73783-5cc8-41eb-9d87-7dbe9b50a4f0}}"><span class="data-pill-content-container"><span class="pills"><span class="pill-text" data-tooltip-id="ah_tooltipTop" data-tooltip-content="action &gt; Requested For"><span class="pill-start">action</span><span class="pill-arrow"><span class="data-pill-label-caret"><span class="data-pill-label-arrow">➛</span></span></span><span class="pill-end">Requested For</span></span></span><button id="transform_function_facade_47b73783-5cc8-41eb-9d87-7dbe9b50a4f0" class="transform_function_facade no_transform_applied"><span class="inline-script-icon"><span style="display: none;">​</span></span></button></span></span></span>,</p>
<p data-tinymcerootblock="">Your Badge Replacement request has been&nbsp;<span class="data_parent_pill" style="display: inline;" contenteditable="false" data-pillvalue="{{fd_transform:0b89aa89-dc69-411f-a851-212bbb653d3f}}"><span class="data_pill  accepts_transform_functions" tabindex="0" contenteditable="false" data-pillvalue="{{fd_transform:0b89aa89-dc69-411f-a851-212bbb653d3f}}"><span class="data-pill-content-container"><span class="pills"><span class="pill-text" data-tooltip-id="ah_tooltipTop" data-tooltip-content="action &gt; Request Status"><span class="pill-start">action</span><span class="pill-arrow"><span class="data-pill-label-caret"><span class="data-pill-label-arrow">➛</span></span></span><span class="pill-end">Request Status</span></span></span><button id="transform_function_facade_0b89aa89-dc69-411f-a851-212bbb653d3f" class="transform_function_facade no_transform_applied"><span class="inline-script-icon"><span style="display: none;">​</span></span></button></span></span></span>.</p>
<p data-tinymcerootblock=""><em><span style="text-decoration: underline;">Badge Information :</span></em></p>
<ul>
<li>Your previous badge with Badge id&nbsp;<span class="data_parent_pill" style="display: inline;" contenteditable="false" data-pillvalue="{{fd_transform:ed53f1c7-816e-4402-8bdb-6325a8f2dcc4}}"><span class="data_pill  accepts_transform_functions" tabindex="0" contenteditable="false" data-pillvalue="{{fd_transform:ed53f1c7-816e-4402-8bdb-6325a8f2dcc4}}"><span class="data-pill-content-container"><span class="pills"><span class="pill-text" data-tooltip-id="ah_tooltipTop" data-tooltip-content="action &gt; Badge Id"><span class="pill-start">action</span><span class="pill-arrow"><span class="data-pill-label-caret"><span class="data-pill-label-arrow">➛</span></span></span><span class="pill-end">Badge Id</span></span></span><button id="transform_function_facade_ed53f1c7-816e-4402-8bdb-6325a8f2dcc4" class="transform_function_facade no_transform_applied"><span class="inline-script-icon"><span style="display: none;">​</span></span></button></span></span></span>&nbsp;<span class="data_parent_pill" style="display: inline;" contenteditable="false" data-pillvalue="{{fd_transform:ef3b18e9-f2d4-4e22-8de6-5ff2c2f45a8e}}"><span class="data_pill  accepts_transform_functions" tabindex="0" contenteditable="false" data-pillvalue="{{fd_transform:ef3b18e9-f2d4-4e22-8de6-5ff2c2f45a8e}}"><span class="data-pill-content-container"><span class="pills"><span class="pill-text" data-tooltip-id="ah_tooltipTop" data-tooltip-content="action &gt; Deprov Status"><span class="pill-start">action</span><span class="pill-arrow"><span class="data-pill-label-caret"><span class="data-pill-label-arrow">➛</span></span></span><span class="pill-end">Deprov Status</span></span></span><button id="transform_function_facade_ef3b18e9-f2d4-4e22-8de6-5ff2c2f45a8e" class="transform_function_facade no_transform_applied"><span class="inline-script-icon"><span style="display: none;">​</span></span></button></span></span></span>.</li>
<li>New Badge assigned with Badge Id&nbsp;<span class="data_parent_pill" style="display: inline;" contenteditable="false" data-pillvalue="{{fd_transform:8033a912-6a1a-432c-9cb2-37317ec10b23}}"><span class="data_pill  accepts_transform_functions" tabindex="0" contenteditable="false" data-pillvalue="{{fd_transform:8033a912-6a1a-432c-9cb2-37317ec10b23}}"><span class="data-pill-content-container"><span class="pills"><span class="pill-text" data-tooltip-id="ah_tooltipTop" data-tooltip-content="action &gt; New Badge ID"><span class="pill-start">action</span><span class="pill-arrow"><span class="data-pill-label-caret"><span class="data-pill-label-arrow">➛</span></span></span><span class="pill-end">New Badge ID</span></span></span><button id="transform_function_facade_8033a912-6a1a-432c-9cb2-37317ec10b23" class="transform_function_facade no_transform_applied"><span class="inline-script-icon"><span style="display: none;">​</span></span></button></span></span></span>&nbsp;<span class="data_parent_pill" style="display: inline;" contenteditable="false" data-pillvalue="{{fd_transform:82d7428c-170f-4727-b0aa-fc1fb7f301f0}}"><span class="data_pill  accepts_transform_functions" tabindex="0" contenteditable="false" data-pillvalue="{{fd_transform:82d7428c-170f-4727-b0aa-fc1fb7f301f0}}"><span class="data-pill-content-container"><span class="pills"><span class="pill-text" data-tooltip-id="ah_tooltipTop" data-tooltip-content="action &gt; Prov Status"><span class="pill-start">action</span><span class="pill-arrow"><span class="data-pill-label-caret"><span class="data-pill-label-arrow">➛</span></span></span><span class="pill-end">Prov Status</span></span></span><button id="transform_function_facade_82d7428c-170f-4727-b0aa-fc1fb7f301f0" class="transform_function_facade no_transform_applied"><span class="inline-script-icon"><span style="display: none;">​</span></span></button></span></span></span>.</li>
</ul>
<p>&nbsp;<em style="color: rgb(var(--now-color_text--primary, 22, 27, 28));">Please remember to carry your badge at all times while on the premises.</em></p>
<p>&nbsp;</p>
<p>Thank You</p>
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
</table>`,
                subject: `Replace Badge Request ${wfa.dataPill(params.inputs.request_status, 'string')}`,
                to: wfa.dataPill(params.inputs.to, 'string'),
                errorHandlingType: 'stop_the_action',
            }
        )
    }
)
