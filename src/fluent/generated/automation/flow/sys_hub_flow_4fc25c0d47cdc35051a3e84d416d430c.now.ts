import { Flow, wfa, trigger, action } from '@servicenow/sdk/automation'
import { BooleanColumn, StringColumn } from '@servicenow/sdk/core'

Flow(
    {
        $id: Now.ID['4fc25c0d47cdc35051a3e84d416d430c'],
        name: 'Alert Provision NFC To PACS Watch Credential',
        internalName: 'alert_provision_nfc_to_pacs_watch_credential',
        runAs: 'system',
        masterSnapshot: '9c01fc0d4781075051a3e84d416d4346',
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
        trigger.record.created,
        {
            $id: Now.ID['800f2c494781075051a3e84d416d43a8'],
        },
        {
            table: 'x_aleen_snguardian_identity_asset',
            condition:
                'identifierISNOTEMPTY^assetISNOTEMPTY^asset.type=cbbf88853b4d431065adbfcc73e45ab8^asset.serialISNOTEMPTY^asset.systemISNOTEMPTY',
            run_on_extended: 'false',
            run_flow_in: 'any',
            run_when_user_list: [],
            run_when_setting: 'both',
            run_when_user_setting: 'any',
        }
    ),
    (_params) => {
        wfa.flowLogic.setFlowVariables(
            {
                annotation: 'Validate Identifier',
                $id: Now.ID['4fc25c0d47cdc35051a3e84d416d436b'],
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
        wfa.action(
            action.core.updateRecord,
            {
                $id: Now.ID['a023c52e47858f5051a3e84d416d43cb'],
                uuid: '4392f37e-5429-4d1e-ae0d-59fd3d645435',
            },
            {
                record: wfa.dataPill(_params.trigger.current, 'reference'),
                table_name: 'x_aleen_snguardian_identity_asset',
                values: TemplateValue({
                    issue_type: 'WC',
                }),
            }
        )
        wfa.flowLogic.if(
            {
                label: 'Identity Asset identifier is not empty',
                condition: `${wfa.dataPill(_params.flowVariables.identifier, 'boolean')}=true`,
                annotation: '',
                $id: Now.ID['c7c25c0d47cdc35051a3e84d416d436f'],
                uuid: '30ac59f6-92d5-49de-9a34-83118f5f48fe',
            },
            () => {
                const actionInstance_4 = wfa.action(
                    action.core.lookUpRecord,
                    {
                        $id: Now.ID['cff07c0d4781075051a3e84d416d43cf'],
                        uuid: '5571b4c3-f75f-4114-b915-18a18e270d1d',
                    },
                    {
                        table: 'x_aleen_snguardian_identity_location',
                        conditions: `identity=${wfa.dataPill(_params.trigger.current.identity, 'reference')}`,
                        sort_column: '',
                        sort_type: 'sort_asc',
                        if_multiple_records_are_found_action: 'use_first_record',
                        dont_fail_flow_on_error: false,
                    }
                )
                const actionInstance_5 = wfa.action(
                    action.core.lookUpRecord,
                    {
                        $id: Now.ID['4bf07c0d4781075051a3e84d416d43d1'],
                        uuid: '3c5111c9-4a9b-43f4-aa10-b05fcb699c76',
                    },
                    {
                        table: 'x_aleen_snguardian_badge_office',
                        conditions: `locationsLIKE${wfa.dataPill(actionInstance_4.Record.location, 'reference')}`,
                        sort_column: 'mc_supported',
                        sort_type: 'sort_desc',
                        if_multiple_records_are_found_action: 'use_first_record',
                        dont_fail_flow_on_error: false,
                    }
                )
                wfa.flowLogic.if(
                    {
                        label: 'Pac System Found',
                        condition: `${wfa.dataPill(actionInstance_5.Record.system, 'reference')}ISNOTEMPTY`,
                        annotation: '',
                        $id: Now.ID['8bf07c0d4781075051a3e84d416d43d3'],
                        uuid: '0835c6b7-279c-4cf6-85a3-a6a8d4b049b8',
                    },
                    () => {
                        wfa.action(
                            action.core.updateRecord,
                            {
                                $id: Now.ID['e6f2012e47858f5051a3e84d416d43e7'],
                                uuid: '8d41a69f-10ae-4da4-bfe0-4f6db812bec8',
                            },
                            {
                                record: wfa.dataPill(_params.trigger.current.asset, 'reference'),
                                table_name: 'x_aleen_snguardian_asset',
                                values: TemplateValue({
                                    sub_system: wfa.dataPill(actionInstance_5.Record.system, 'reference'),
                                }),
                            }
                        )
                        const actionInstance_8 = wfa.action(
                            action.core.createRecord,
                            {
                                $id: Now.ID['0bc25c0d47cdc35051a3e84d416d4371'],
                                uuid: '71ccc488-1c63-42c4-a603-64148501fad0',
                            },
                            {
                                table_name: 'x_aleen_snguardian_asset',
                                values: TemplateValue({
                                    serial: wfa.dataPill(_params.trigger.current.asset.serial, 'string'),
                                    system: wfa.dataPill(actionInstance_5.Record.system, 'reference'),
                                    type: '{"display":"Permanent Badge","value":"ac8f8ed51bbc8210759455342a4bcbcb","sys_id":"ac8f8ed51bbc8210759455342a4bcbcb"}',
                                }),
                            }
                        )
                        wfa.action(
                            action.core.createRecord,
                            {
                                $id: Now.ID['93c25c0d47cdc35051a3e84d416d4374'],
                                uuid: 'd12c6be1-91d9-41ae-8e8f-a440f43a749b',
                            },
                            {
                                table_name: 'x_aleen_snguardian_identity_asset',
                                values: TemplateValue({
                                    asset: wfa.dataPill(actionInstance_8.record, 'reference'),
                                    identity: wfa.dataPill(_params.trigger.current.identity, 'reference'),
                                    provisioning_action:
                                        '{"display":"To be Added","value":"e77f8ed51bbc8210759455342a4bcb1a","sys_id":"e77f8ed51bbc8210759455342a4bcb1a"}',
                                    provisioning_status:
                                        '{"display":"Provision is pending","value":"c18fced51bbc8210759455342a4bcb38","sys_id":"c18fced51bbc8210759455342a4bcb38"}',
                                    status: '{"display":"Active","value":"2a7f0ed51bbc8210759455342a4bcbe9","sys_id":"2a7f0ed51bbc8210759455342a4bcbe9"}',
                                    valid_from: wfa.inlineScript(`var valid_from = fd_data.trigger.current.valid_from;
var gdt = new GlideDateTime(valid_from);
return gdt.getDisplayValue();`),
                                    valid_to: wfa.inlineScript(`var valid_to = fd_data.trigger.current.valid_to;
var gdt = new GlideDateTime(valid_to);
return gdt.getDisplayValue();`),
                                    datasource: wfa.dataPill(_params.trigger.current, 'reference'),
                                    datasource_table: 'x_aleen_snguardian_identity_asset',
                                    is_deleted: 'false',
                                    issue_type: 'WCLB',
                                }),
                            }
                        )
                    }
                )
            }
        )
    }
)
