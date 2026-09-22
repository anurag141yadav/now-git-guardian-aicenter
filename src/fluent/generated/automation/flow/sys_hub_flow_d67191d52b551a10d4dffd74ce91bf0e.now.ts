import { Flow, wfa, trigger, action } from '@servicenow/sdk/automation'
import { BooleanColumn, StringColumn } from '@servicenow/sdk/core'

Flow(
    {
        $id: Now.ID['d67191d52b551a10d4dffd74ce91bf0e'],
        name: 'Alert Provision NFC To PACS',
        internalName: 'provision_nfc_to_pacs',
        runAs: 'system',
        masterSnapshot: 'c09f93a12b519a10d4dffd74ce91bf4e',
        flowVariables: {
            identifier: BooleanColumn({
                label: 'identifier',
            }),
            instance_name_code: StringColumn({
                label: 'instance_name_code',
                maxLength: 8000,
            }),
        },
    },
    wfa.trigger(
        trigger.record.updated,
        {
            $id: Now.ID['8cd142d347d13250f487c24fe16d43c5'],
        },
        {
            table: 'x_aleen_snguardian_identity_asset',
            condition:
                'identifierVALCHANGES^asset.sub_systemISNOTEMPTY^asset.type=e08f8ed51bbc8210759455342a4bcbcb^identifierISNOTEMPTY^provisioning_status=458fced51bbc8210759455342a4bcb45^ORprovisioning_status=098fced51bbc8210759455342a4bcb47',
            run_on_extended: 'false',
            run_flow_in: 'any',
            run_when_user_list: [],
            run_when_setting: 'both',
            run_when_user_setting: 'any',
            trigger_strategy: 'once',
        }
    ),
    (_params) => {
        wfa.flowLogic.setFlowVariables(
            {
                annotation: 'Validate Identifier',
                $id: Now.ID['607c72ec47ed3650f487c24fe16d43e9'],
            },
            _params.flowVariables,
            {
                identifier: wfa.inlineScript(`var identifier = fd_data.trigger.current.identifier;
if(identifier!=null && identifier!=0 && identifier!=" " && identifier!=""){
    return true
}else{
    return false;
}`),
            }
        )
        wfa.flowLogic.if(
            {
                label: 'Identity Asset identifier is not empty',
                condition: `${wfa.dataPill(_params.flowVariables.identifier, 'boolean')}=true`,
                annotation: '',
                $id: Now.ID['687c72ec47ed3650f487c24fe16d43ea'],
                uuid: '30ac59f6-92d5-49de-9a34-83118f5f48fe',
            },
            () => {
                const actionInstance_3 = wfa.action(
                    action.core.createRecord,
                    {
                        $id: Now.ID['0cd142d347d13250f487c24fe16d43cb'],
                        uuid: '71ccc488-1c63-42c4-a603-64148501fad0',
                    },
                    {
                        table_name: 'x_aleen_snguardian_asset',
                        values: TemplateValue({
                            serial: wfa.dataPill(_params.trigger.current.asset.serial, 'string'),
                            status: '{"display":"Active","value":"2a7f0ed51bbc8210759455342a4bcbe9","sys_id":"2a7f0ed51bbc8210759455342a4bcbe9"}',
                            system: wfa.dataPill(_params.trigger.current.asset.sub_system, 'reference'),
                            type: '{"display":"Permanent Badge","value":"ac8f8ed51bbc8210759455342a4bcbcb","sys_id":"ac8f8ed51bbc8210759455342a4bcbcb"}',
                        }),
                    }
                )
                wfa.action(
                    action.core.createRecord,
                    {
                        $id: Now.ID['ccd142d347d13250f487c24fe16d43cc'],
                        uuid: 'd12c6be1-91d9-41ae-8e8f-a440f43a749b',
                    },
                    {
                        table_name: 'x_aleen_snguardian_identity_asset',
                        values: TemplateValue({
                            identity: wfa.dataPill(_params.trigger.current.identity, 'reference'),
                            asset: wfa.dataPill(actionInstance_3.record, 'reference'),
                            status: '{"display":"Active","value":"2a7f0ed51bbc8210759455342a4bcbe9","sys_id":"2a7f0ed51bbc8210759455342a4bcbe9"}',
                            provisioning_status:
                                '{"display":"Provision is pending","value":"c18fced51bbc8210759455342a4bcb38","sys_id":"c18fced51bbc8210759455342a4bcb38"}',
                            provisioning_action:
                                '{"display":"To be Added","value":"e77f8ed51bbc8210759455342a4bcb1a","sys_id":"e77f8ed51bbc8210759455342a4bcb1a"}',
                            is_deleted: 'false',
                            valid_from: wfa.inlineScript(`var valid_from = fd_data.trigger.current.valid_from;
var gdt = new GlideDateTime(valid_from);
return gdt.getDisplayValue();`),
                            valid_to: wfa.inlineScript(`var valid_to = fd_data.trigger.current.valid_to;
var gdt = new GlideDateTime(valid_to);
return gdt.getDisplayValue();`),
                            datasource: wfa.dataPill(_params.trigger.current.sys_id, 'GUID'),
                            datasource_table: 'x_aleen_snguardian_request',
                        }),
                    }
                )
            }
        )
    }
)
