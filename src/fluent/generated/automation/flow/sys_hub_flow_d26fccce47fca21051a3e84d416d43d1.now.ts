import { Record } from '@servicenow/sdk/core'

Record({
    $id: Now.ID['d26fccce47fca21051a3e84d416d43d1'],
    table: 'sys_hub_flow',
    data: {
        access: 'public',
        acls: '',
        active: true,
        attributes:
            'browserActivatedIn=chrome,integrationActivatedIn=standalone,labelCacheCleanUpExecuted=true,timeFromCreateToActivate=27200540000,viewActivatedIn=naturalLanguage',
        authored_on_release_version: 25000,
        callable_by_client_api: false,
        copied_from: 'd9de17171b1f8210bf7ea82b234bcb5b',
        copied_from_name: 'New Badge Request (NFC)',
        description: 'Requesting new badge',
        flow_priority: 'MEDIUM',
        internal_name: 'new_badge_request_nfc_dt',
        label_cache:
            '[{"name":"flow_variable.u_auto_provisioning","label":"Flow Variables➛u_auto_provisioning","reference":null,"reference_display":null,"type":"string","base_type":"string","parent_table_name":null,"column_name":null,"choices":null,"usedInstances":{"eeb3b969-e838-43d8-a4bf-d29e10f803ad":["auto_provisioning"],"ed703c57-ef29-4e3e-b892-73527870955f":["condition"]},"attributes":{"sourceUiUniqueId":"","sourceType":"","sourceId":"","uiUniqueId":"f53c3584-632b-47f1-84e2-0bbe90eaad24"}},{"name":"flow_variable.result","label":"Flow Variables➛result","reference":"","reference_display":"","type":"json","base_type":"json","parent_table_name":null,"column_name":null,"choices":null,"usedInstances":{"a3c76d8f-1c6c-4c09-86ae-1ecb3152e9d5":["condition"]},"attributes":{"sourceUiUniqueId":"","sourceType":"","sourceId":"","uiUniqueId":"f8a7c2e3-b02f-4ea1-ba0a-2e0ea4538bb8"}},{"name":"b2ee4d0b-d13a-49e9-a83e-b3e1e532a9d9.record.provisioning_message","label":"11 - Create Record➛Identity Asset Record➛Provisioning Message","reference":"","reference_display":"Provisioning Message","type":"string","base_type":"string","parent_table_name":"x_aleen_snguardian_identity_asset","column_name":"provisioning_message","choices":null,"usedInstances":{"dd4aebf9-0903-4ad7-acff-717a39d5e65b":["work_notes"]},"attributes":null},{"name":"388df9aa-4b9e-4cf9-9356-41cb54ad17a6.Record.system.code","label":"5 - Look Up Record➛Location Administration Record➛PAC System➛Code","reference":"","reference_display":"Code","type":"string","base_type":"string","parent_table_name":"x_aleen_snguardian_system","column_name":"code","choices":null,"usedInstances":{"871e54c8-fa6b-495f-bc0e-bc8ac615bc5b":["u_sub_system-1"]},"attributes":null},{"name":"flow_variable.mc_decision_table","label":"Flow Variables➛MC Decision Table","reference":null,"reference_display":null,"type":"string","base_type":"string","parent_table_name":null,"column_name":null,"choices":null,"usedInstances":{"50b78cb4-0825-4780-ba87-ba7a70de2787":["conditions"],"4776875f-32e5-4aac-a3d4-285866d6ad67":["code"]},"attributes":{"sourceUiUniqueId":"","sourceType":"","sourceId":"","uiUniqueId":"8683ccb3-8a68-4af7-867e-a15ccf017de1"}},{"name":"flow_variable.identity_system.identity","label":"Flow Variables➛Identity System➛Identity","reference":"x_aleen_snguardian_identity","reference_display":"Identity","type":"reference","base_type":"reference","parent_table_name":"x_aleen_snguardian_identity_system","column_name":"identity","choices":null,"usedInstances":null,"attributes":null},{"name":"b2ee4d0b-d13a-49e9-a83e-b3e1e532a9d9.record.asset.sub_type.code","label":"11 - Create Record➛Identity Asset Record➛Asset➛Sub Type➛Code","reference":"","reference_display":"Code","type":"string","base_type":"string","parent_table_name":"x_aleen_snguardian_asset_type","column_name":"code","choices":null,"usedInstances":{},"attributes":null},{"name":"a081c5e8-a1e2-4cdb-bd5e-f613f99fff92.Record.code","label":"2 - Look Up Record➛System Record➛Code","reference":"","reference_display":"Code","type":"string","base_type":"string","parent_table_name":"x_aleen_snguardian_system","column_name":"code","choices":null,"usedInstances":null,"attributes":null},{"name":"b2ee4d0b-d13a-49e9-a83e-b3e1e532a9d9.record","label":"11 - Create Record➛Identity Asset Record","reference":"x_aleen_snguardian_identity_asset","reference_display":"Identity Asset","type":"reference","base_type":"reference","parent_table_name":null,"column_name":null,"choices":null,"usedInstances":{"8e2972fa-0532-430e-91f2-7812364c2704":["condition"]},"attributes":{"element_mapping_provider":"com.glide.flow_design.action.data.FlowDesignVariableMapper"}},{"name":"b2ee4d0b-d13a-49e9-a83e-b3e1e532a9d9.record.provisioning_status","label":"11 - Create Record➛Identity Asset Record➛Provisioning Status","reference":"x_aleen_snguardian_provisioning_status","reference_display":"Provisioning Status","type":"reference","base_type":"reference","parent_table_name":"x_aleen_snguardian_identity_asset","column_name":"provisioning_status","choices":null,"usedInstances":{},"attributes":null},{"name":"Created_1.current.number","label":"Trigger - Record Created➛Request Record➛Number","reference":"","reference_display":"Number","type":"string","base_type":"string","parent_table_name":"x_aleen_snguardian_request","column_name":"number","choices":null,"usedInstances":{"9a94ec6e-aaf6-4db5-98b2-bc3d77332d69":["work_notes"],"ab8b1b51-59a2-4dd8-9bea-05637ad24bc2":["work_notes"],"91390dca-e456-4dd5-912d-1935597829d5":["work_notes"]},"attributes":null},{"name":"fd6bc191-c267-46b2-9307-caab05dca7cd.approval_state","label":"7 - Ask For Approval➛Approval State","reference":null,"reference_display":"Approval State","type":"choice","base_type":"choice","parent_table_name":null,"column_name":null,"choices":[{"label":"-- None --","value":"","order":0.0},{"label":"Not Yet Requested","value":"not requested","order":1.0},{"label":"Requested","value":"requested","order":2.0},{"label":"Approved","value":"approved","order":3.0},{"label":"Rejected","value":"rejected","order":4.0},{"label":"Cancelled","value":"cancelled","order":5.0},{"label":"No Longer Required","value":"not_required","order":6.0},{"label":"Skipped","value":"skipped","order":7.0}],"usedInstances":null,"attributes":{"element_mapping_provider":"com.glide.flow_design.action.data.FlowDesignVariableMapper"}},{"name":"Created_1.current.request_for.type","label":"Trigger - Record Created➛Request Record➛Request For➛Type","reference":"x_aleen_snguardian_identitytype","reference_display":"Identity Type","type":"reference","base_type":"reference","parent_table_name":"x_aleen_snguardian_identity","column_name":"type","choices":null,"usedInstances":{"08b22acf-ef7c-4340-a950-79995876602e":["u_employee_type-1"]},"attributes":null},{"name":"a081c5e8-a1e2-4cdb-bd5e-f613f99fff92.Record","label":"2 - Look Up Record➛System Record","reference":"x_aleen_snguardian_system","reference_display":"System","type":"reference","base_type":"reference","parent_table_name":null,"column_name":null,"choices":null,"usedInstances":null,"attributes":{"element_mapping_provider":"com.glide.flow_design.action.data.FlowDesignVariableMapper"}},{"name":"flow_variable.identity_system.identity.full_name","label":"Flow Variables➛Identity System➛Identity➛Full Name","reference":"","reference_display":"Full Name","type":"string","base_type":"string","parent_table_name":"x_aleen_snguardian_identity","column_name":"full_name","choices":null,"usedInstances":null,"attributes":null},{"name":"Created_1.current.request_for","label":"Trigger - Record Created➛Request Record➛Request For","reference":"x_aleen_snguardian_identity","reference_display":"Identity","type":"reference","base_type":"reference","parent_table_name":"x_aleen_snguardian_request","column_name":"request_for","choices":null,"usedInstances":{"da97665b-a043-4f03-8d87-2f961241d1a4":["conditions"],"9ef05ad7-3e34-42b6-bcd1-b20a69808b7f":["conditions"],"c6bed67a-d77d-49c3-80d7-0d4020938b32":["conditions"]},"attributes":null},{"name":"81f75790-d9c1-429a-a927-3a00493b9a2c.Record.officers","label":"5 - Look Up Record➛Location Administrator Record➛Officers","reference":"sys_user","reference_display":"User","type":"glide_list","base_type":"glide_list","parent_table_name":"x_aleen_snguardian_badge_office","column_name":"officers","choices":null,"usedInstances":null,"attributes":null},{"name":"10c11ef5-30ea-49e8-90c4-7d60dece04c8.item.valid_to","label":"25 - For Each➛identityAsset➛valid_to","reference":"","reference_display":"","type":"string","base_type":"string","parent_table_name":null,"column_name":"","choices":null,"usedInstances":null,"attributes":{}},{"name":"Created_1.current.request_for.manager.master_user_id","label":"Trigger - Record Created➛Request Record➛Request For➛Manager➛Master User ID","reference":"sys_user","reference_display":"User","type":"reference","base_type":"reference","parent_table_name":"x_aleen_snguardian_identity","column_name":"master_user_id","choices":null,"usedInstances":null,"attributes":null},{"name":"flow_variable.manager_approved","label":"Flow Variables➛manager_approved","reference":"","reference_display":"","type":"boolean","base_type":"boolean","parent_table_name":null,"column_name":"","choices":[],"usedInstances":null,"attributes":{"sourceUiUniqueId":"","sourceType":"","sourceId":"","uiUniqueId":"84621ea6-e035-45b7-ac76-550fc2d8f1d8"}},{"name":"b2ee4d0b-d13a-49e9-a83e-b3e1e532a9d9.record.asset.system","label":"11 - Create Record➛Identity Asset Record➛Asset➛System","reference":"x_aleen_snguardian_system","reference_display":"System","type":"reference","base_type":"reference","parent_table_name":"x_aleen_snguardian_asset","column_name":"system","choices":null,"usedInstances":{"da97665b-a043-4f03-8d87-2f961241d1a4":["conditions"]},"attributes":null},{"name":"flow_variable.requested_by_badging_officer","label":"Flow Variables➛requested_by_badging_officer","reference":"","reference_display":"","type":"boolean","base_type":"boolean","parent_table_name":null,"column_name":"","choices":[],"usedInstances":{"c584169f-8066-4642-bad2-9e7530b6dca6":["condition"],"e814d090-0961-4dc0-b75d-86f1b9d96eb5":["condition"],"c5acb835-28d5-41e1-8c2f-fdf9b271014f":["condition"]},"attributes":{"sourceUiUniqueId":"","sourceType":"","sourceId":"","uiUniqueId":"e60a0abd-42ef-4dad-b870-87fb8493f304"}},{"name":"8b1e95a0-fec0-4b70-857b-47a41dbff723.item.identity","label":"10 - For Each➛identityAsset➛identity","reference":"","reference_display":"","type":"string","base_type":"string","parent_table_name":null,"column_name":"","choices":null,"usedInstances":null,"attributes":{}},{"name":"flow_variable.u_skip_manager_approval","label":"Flow Variables➛u_skip_manager_approval","reference":"","reference_display":"","type":"boolean","base_type":"boolean","parent_table_name":null,"column_name":"","choices":null,"usedInstances":{"a3c76d8f-1c6c-4c09-86ae-1ecb3152e9d5":["condition"]},"attributes":{"uiType":"boolean","uiTypeLabel":"True/False","element_mapping_provider":"com.glide.flow_design.action.data.FlowDesignVariableMapper","uiUniqueId":"d43a9875-3147-452d-8ef8-939407a90d41"}},{"name":"f59c73c8-2ebf-4e29-9b51-a17ab2a42c94.record.provisioning_status","label":"26 - Create Record➛Identity Asset Record➛Provisioning Status","reference":"x_aleen_snguardian_provisioning_status","reference_display":"Provisioning Status","type":"reference","base_type":"reference","parent_table_name":"x_aleen_snguardian_identity_asset","column_name":"provisioning_status","choices":null,"usedInstances":{},"attributes":null},{"name":"f59c73c8-2ebf-4e29-9b51-a17ab2a42c94.record.provisioning_message","label":"26 - Create Record➛Identity Asset Record➛Provisioning Message","reference":"","reference_display":"Provisioning Message","type":"string","base_type":"string","parent_table_name":"x_aleen_snguardian_identity_asset","column_name":"provisioning_message","choices":null,"usedInstances":{"9fe6f1ee-4231-49f3-81d4-381bdff738d4":["work_notes"]},"attributes":null},{"name":"388df9aa-4b9e-4cf9-9356-41cb54ad17a6.Record.mc_nfc_system.code","label":"5 - Look Up Record➛Location Administration Record➛MC NFC System➛Code","reference":"","reference_display":"Code","type":"string","base_type":"string","parent_table_name":"x_aleen_snguardian_system","column_name":"code","choices":null,"usedInstances":{"871e54c8-fa6b-495f-bc0e-bc8ac615bc5b":["mc_system-2"]},"attributes":null},{"name":"b2ee4d0b-d13a-49e9-a83e-b3e1e532a9d9.record.provisioning_status.code","label":"11 - Create Record➛Identity Asset Record➛Provisioning Status➛Code","reference":"","reference_display":"Code","type":"string","base_type":"string","parent_table_name":"x_aleen_snguardian_provisioning_status","column_name":"code","choices":null,"usedInstances":{"8e2972fa-0532-430e-91f2-7812364c2704":["condition"]},"attributes":null},{"name":"da97665b-a043-4f03-8d87-2f961241d1a4.Record.provisioning_message","label":"17 - Look Up Record➛Identity System Record➛Provisioning Message","reference":"","reference_display":"Provisioning Message","type":"string_full_utf8","base_type":"string_full_utf8","parent_table_name":"x_aleen_snguardian_identity_system","column_name":"provisioning_message","choices":null,"usedInstances":{"dd4aebf9-0903-4ad7-acff-717a39d5e65b":["work_notes"]},"attributes":null},{"name":"flow_variable.u_sub_system","label":"Flow Variables➛u_sub_system","reference":"","reference_display":"","type":"string","base_type":"string","parent_table_name":null,"column_name":null,"choices":null,"usedInstances":{"eeb3b969-e838-43d8-a4bf-d29e10f803ad":["sub_system"],"5791a2af-956e-48ca-9268-d0f67f3b18b4":["sub_system"]},"attributes":{"sourceUiUniqueId":"","sourceType":"","sourceId":"","uiUniqueId":"573d3d05-3224-4d4d-8fa7-9b3b04d54eaf"}},{"name":"896d90cb-61b8-4abe-85bd-30c9021ea412.approved","label":"8 - Alert Subflow Identity Manager Approval➛Approved","reference":null,"reference_display":"Approved","type":"boolean","base_type":"boolean","parent_table_name":null,"column_name":null,"choices":null,"usedInstances":{"b512f089-a9d8-4d36-804f-bcc6ce659f44":["condition"]},"attributes":{"uiType":"boolean","uiTypeLabel":"True/False","element_mapping_provider":"com.glide.flow_design.action.data.FlowDesignVariableMapper","uiUniqueId":"9e538ef8-8c63-4760-8a4c-30a1921d538b"}},{"name":"Created_1.current","label":"Trigger - Record Created➛Request Record","reference":"x_aleen_snguardian_request","reference_display":"Request","type":"reference","base_type":"reference","parent_table_name":null,"column_name":null,"choices":null,"usedInstances":{"9a94ec6e-aaf6-4db5-98b2-bc3d77332d69":["record"],"b5a6e11c-f95d-4083-b398-6a4eb03d68d3":["record"],"91390dca-e456-4dd5-912d-1935597829d5":["record"],"896d90cb-61b8-4abe-85bd-30c9021ea412":["request"],"b66258d3-cc4b-494c-b5f1-37b571bc2108":["request"],"eeb3b969-e838-43d8-a4bf-d29e10f803ad":["request"],"5791a2af-956e-48ca-9268-d0f67f3b18b4":["request"],"2df8057b-3744-476d-953a-2ecd5b809e97":["record"]},"attributes":{}},{"name":"8b1e95a0-fec0-4b70-857b-47a41dbff723.item.valid_from","label":"10 - For Each➛identityAsset➛valid_from","reference":"","reference_display":"","type":"string","base_type":"string","parent_table_name":null,"column_name":"","choices":null,"usedInstances":null,"attributes":{}},{"name":"c6bed67a-d77d-49c3-80d7-0d4020938b32.Record.location.sys_id","label":"1 - Look Up Record➛Identity Location Record➛Location➛sys_id","reference":"","reference_display":"sys_id","type":"char","base_type":"char","parent_table_name":"x_aleen_snguardian_location","column_name":"sys_id","choices":null,"usedInstances":{"08b22acf-ef7c-4340-a950-79995876602e":["u_location-2"]},"attributes":null},{"name":"4b85677e-414e-422f-8fbf-d55ca562ca94.Record.location","label":"4 - Look Up Record➛Identity Location Record➛Location","reference":"x_aleen_snguardian_location","reference_display":"Location","type":"reference","base_type":"reference","parent_table_name":"x_aleen_snguardian_identity_location","column_name":"location","choices":null,"usedInstances":null,"attributes":null},{"name":"9ef05ad7-3e34-42b6-bcd1-b20a69808b7f.Record.provisioning_message","label":"32 - Look Up Record➛Identity System Record➛Provisioning Message","reference":"","reference_display":"Provisioning Message","type":"string_full_utf8","base_type":"string_full_utf8","parent_table_name":"x_aleen_snguardian_identity_system","column_name":"provisioning_message","choices":null,"usedInstances":{"9fe6f1ee-4231-49f3-81d4-381bdff738d4":["work_notes"]},"attributes":null},{"name":"81f75790-d9c1-429a-a927-3a00493b9a2c.Record","label":"5 - Look Up Record➛Location Administrator Record","reference":"x_aleen_snguardian_badge_office","reference_display":"Location Administration","type":"reference","base_type":"reference","parent_table_name":null,"column_name":null,"choices":null,"usedInstances":{"d14bdf88-9323-44d0-839d-dd55ff4f5ef8":["assigned_to"]},"attributes":{"element_mapping_provider":"com.glide.flow_design.action.data.FlowDesignVariableMapper"}},{"name":"50b02abb-044f-4038-a72a-3bb50059fc62.__status__.code","label":"17 - Top Level Catch➛Error Status➛Code","reference":"","reference_display":"","type":"integer","base_type":"integer","parent_table_name":null,"column_name":"","choices":null,"usedInstances":{"2df8057b-3744-476d-953a-2ecd5b809e97":["work_notes"]},"attributes":{}},{"name":"Created_1.current.request_for.sys_id","label":"Trigger - Record Created➛Request Record➛Request For➛Sys ID","reference":"","reference_display":"Sys ID","type":"GUID","base_type":"GUID","parent_table_name":"x_aleen_snguardian_identity","column_name":"sys_id","choices":null,"usedInstances":null,"attributes":null},{"name":"Created_1.current.request_for.full_name","label":"Trigger - Record Created➛Request Record➛Request For➛Full Name","reference":"","reference_display":"Full Name","type":"string","base_type":"string","parent_table_name":"x_aleen_snguardian_identity","column_name":"full_name","choices":null,"usedInstances":null,"attributes":null},{"name":"f59c73c8-2ebf-4e29-9b51-a17ab2a42c94.record","label":"26 - Create Record➛Identity Asset Record","reference":"x_aleen_snguardian_identity_asset","reference_display":"Identity Asset","type":"reference","base_type":"reference","parent_table_name":null,"column_name":null,"choices":null,"usedInstances":{},"attributes":{"element_mapping_provider":"com.glide.flow_design.action.data.FlowDesignVariableMapper"}},{"name":"flow_variable.u_asset_subtype","label":"Flow Variables➛u_asset_subtype","reference":null,"reference_display":null,"type":"string","base_type":"string","parent_table_name":null,"column_name":null,"choices":null,"usedInstances":{"eeb3b969-e838-43d8-a4bf-d29e10f803ad":["asset_subtype"],"5791a2af-956e-48ca-9268-d0f67f3b18b4":["asset_subtype"]},"attributes":{"sourceUiUniqueId":"","sourceType":"","sourceId":"","uiUniqueId":"448fa9ce-cf64-44a7-a88a-3e913bab33e3"}},{"name":"Created_1.current.request_for.email","label":"Trigger - Record Created➛Request Record➛Request For➛Email","reference":"","reference_display":"Email","type":"string","base_type":"string","parent_table_name":"x_aleen_snguardian_identity","column_name":"email","choices":null,"usedInstances":{"32d82b3c-22ec-4dc9-acbf-7ce33902628c":["ah_to"],"9eb8eba9-ba1c-4ece-9213-a87bba446ac0":["ah_to"]},"attributes":null},{"name":"fd7d9313-28ff-47e4-8550-13b409220c1d.record","label":"8 - Create Record➛Identity System Record","reference":"x_aleen_snguardian_identity_system","reference_display":"Identity System","type":"reference","base_type":"reference","parent_table_name":null,"column_name":null,"choices":null,"usedInstances":null,"attributes":{"element_mapping_provider":"com.glide.flow_design.action.data.FlowDesignVariableMapper"}},{"name":"10c11ef5-30ea-49e8-90c4-7d60dece04c8.item.valid_from","label":"25 - For Each➛identityAsset➛valid_from","reference":"","reference_display":"","type":"string","base_type":"string","parent_table_name":null,"column_name":"","choices":null,"usedInstances":null,"attributes":{}},{"name":"50b02abb-044f-4038-a72a-3bb50059fc62.__status__.message","label":"17 - Top Level Catch➛Error Status➛Message","reference":"","reference_display":"","type":"string","base_type":"string","parent_table_name":null,"column_name":"","choices":null,"usedInstances":{"2df8057b-3744-476d-953a-2ecd5b809e97":["work_notes"]},"attributes":{}},{"name":"Created_1.current.request_for.type.sys_id","label":"Trigger - Record Created➛Request Record➛Request For➛Type➛sys_id","reference":"","reference_display":"sys_id","type":"char","base_type":"char","parent_table_name":"x_aleen_snguardian_identitytype","column_name":"sys_id","choices":null,"usedInstances":{"08b22acf-ef7c-4340-a950-79995876602e":["u_employee_type-1"]},"attributes":null},{"name":"b2ee4d0b-d13a-49e9-a83e-b3e1e532a9d9.record.number","label":"11 - Create Record➛Identity Asset Record➛Number","reference":"","reference_display":"Number","type":"string","base_type":"string","parent_table_name":"x_aleen_snguardian_identity_asset","column_name":"number","choices":null,"usedInstances":{"b5a6e11c-f95d-4083-b398-6a4eb03d68d3":["work_notes"]},"attributes":null},{"name":"85e801c5-82c9-4f10-840c-ec0d33d0349d.resultlistOutput","label":"24 - Guardian Action Process NFC Assets➛resultListOutput","reference":null,"reference_display":"resultListOutput","type":"array.object","base_type":"array.object","parent_table_name":null,"column_name":null,"choices":null,"usedInstances":null,"attributes":{"sourceId":"0cb7e7d8-c91a-42dd-82df-d8d0f380b97d","child_name":"identityAsset","uiUniqueId":"3232e723-e1d0-4c60-95fd-b009918757c9","uiTypeLabel":"Array.Object","co_type_name":"FD74346419fc24d210888d1b92348b3c99","child_label":"identityAsset","child_type_label":"Object","element_mapping_provider":"com.glide.flow_design.action.data.FlowDesignVariableMapper","sourceType":"step","sourceUiUniqueId":"368436f5-4447-402b-86f0-6544acb757f9","uiType":"array.object","child_type":"object","child_uiUniqueId":"e3a6b1c9-17d6-46a5-bd3c-bba54f8d5c3d"}},{"name":"b66258d3-cc4b-494c-b5f1-37b571bc2108.approved","label":"12 - Alert Subflow Badging Officer Approval➛Approved","reference":null,"reference_display":"Approved","type":"boolean","base_type":"boolean","parent_table_name":null,"column_name":null,"choices":null,"usedInstances":{"579039c0-2192-4964-8160-f47fae5f4509":["condition"]},"attributes":{"uiType":"boolean","uiTypeLabel":"True/False","element_mapping_provider":"com.glide.flow_design.action.data.FlowDesignVariableMapper","uiUniqueId":"f7984318-57ba-48fe-8536-dedfe49f96a0"}},{"name":"10c11ef5-30ea-49e8-90c4-7d60dece04c8.item.asset","label":"25 - For Each➛identityAsset➛asset","reference":"","reference_display":"","type":"string","base_type":"string","parent_table_name":null,"column_name":"","choices":null,"usedInstances":null,"attributes":{}},{"name":"10c11ef5-30ea-49e8-90c4-7d60dece04c8.item.identity","label":"25 - For Each➛identityAsset➛identity","reference":"","reference_display":"","type":"string","base_type":"string","parent_table_name":null,"column_name":"","choices":null,"usedInstances":null,"attributes":{}},{"name":"flow_variable.web_provision","label":"Flow Variables➛Web Provision","reference":null,"reference_display":null,"type":"string","base_type":"string","parent_table_name":null,"column_name":null,"choices":null,"usedInstances":{"4bf8f0e5-8984-451a-9e58-e2506f116b08":["condition"],"d664eae4-a557-40fb-b076-7266c6eb0f7c":["condition"]},"attributes":{"sourceUiUniqueId":"","sourceType":"","sourceId":"","uiUniqueId":"eb1b15be-c8d2-49b8-adfa-c5a7ec87df89"}},{"name":"f59c73c8-2ebf-4e29-9b51-a17ab2a42c94.record.provisioning_status.code","label":"26 - Create Record➛Identity Asset Record➛Provisioning Status➛Code","reference":"","reference_display":"Code","type":"string","base_type":"string","parent_table_name":"x_aleen_snguardian_provisioning_status","column_name":"code","choices":null,"usedInstances":{"7e77e210-14b2-4acc-933f-dc0bf1075ce1":["condition"]},"attributes":null},{"name":"5ef49585-6b49-460f-9d5d-157ac98cba4e.resultlistOutput","label":"9 - Guardian Action Process NFC Assets➛resultListOutput","reference":null,"reference_display":"resultListOutput","type":"array.object","base_type":"array.object","parent_table_name":null,"column_name":null,"choices":null,"usedInstances":null,"attributes":{"sourceId":"0cb7e7d8-c91a-42dd-82df-d8d0f380b97d","child_name":"identityAsset","uiUniqueId":"3232e723-e1d0-4c60-95fd-b009918757c9","uiTypeLabel":"Array.Object","co_type_name":"FD74346419fc24d210888d1b92348b3c99","child_label":"identityAsset","child_type_label":"Object","element_mapping_provider":"com.glide.flow_design.action.data.FlowDesignVariableMapper","sourceType":"step","sourceUiUniqueId":"368436f5-4447-402b-86f0-6544acb757f9","uiType":"array.object","child_type":"object","child_uiUniqueId":"e3a6b1c9-17d6-46a5-bd3c-bba54f8d5c3d"}},{"name":"Created_1.current.opened_by","label":"Trigger - Record Created➛Request Record➛Opened by","reference":"sys_user","reference_display":"User","type":"reference","base_type":"reference","parent_table_name":"x_aleen_snguardian_request","column_name":"opened_by","choices":null,"usedInstances":null,"attributes":null},{"name":"06013dfb-548e-4c39-a5a8-18fcc5b49f20.approval_state","label":"2 - Ask For Approval➛Approval State","reference":null,"reference_display":"Approval State","type":"choice","base_type":"choice","parent_table_name":null,"column_name":null,"choices":[{"label":"-- None --","value":"","order":0.0},{"label":"Not Yet Requested","value":"not requested","order":1.0},{"label":"Requested","value":"requested","order":2.0},{"label":"Approved","value":"approved","order":3.0},{"label":"Rejected","value":"rejected","order":4.0},{"label":"Cancelled","value":"cancelled","order":5.0},{"label":"No Longer Required","value":"not_required","order":6.0},{"label":"Skipped","value":"skipped","order":7.0}],"usedInstances":null,"attributes":{"element_mapping_provider":"com.glide.flow_design.action.data.FlowDesignVariableMapper"}},{"name":"flow_variable.identity_system","label":"Flow Variables➛Identity System","reference":"x_aleen_snguardian_identity_system","reference_display":"Identity System","type":"reference","base_type":"reference","parent_table_name":null,"column_name":null,"choices":null,"usedInstances":null,"attributes":{"sourceUiUniqueId":"","sourceType":"","sourceId":"","uiUniqueId":"82efee55-7a7f-4de5-8769-4f923b9280f9"}},{"name":"flow_variable.mc_system","label":"Flow Variables➛mc_system","reference":"","reference_display":"","type":"string","base_type":"string","parent_table_name":null,"column_name":"","choices":null,"usedInstances":{"eeb3b969-e838-43d8-a4bf-d29e10f803ad":["mc_system"],"5791a2af-956e-48ca-9268-d0f67f3b18b4":["mc_system"]},"attributes":{"uiType":"string","uiTypeLabel":"String","element_mapping_provider":"com.glide.flow_design.action.data.FlowDesignVariableMapper","uiUniqueId":"769ac3c6-0129-44ab-bad9-d22bb77d53d8"}},{"name":"388df9aa-4b9e-4cf9-9356-41cb54ad17a6.Record.system","label":"5➛Location Administration Record➛PAC System","reference":"x_aleen_snguardian_system","reference_display":"PAC System","type":"glide_list","base_type":"glide_list","parent_table_name":"x_aleen_snguardian_badge_office","column_name":"system","choices":[{"label":null,"value":null,"order":0}],"usedInstances":{"871e54c8-fa6b-495f-bc0e-bc8ac615bc5b":["u_sub_system-1"]},"attributes":null},{"name":"8b1e95a0-fec0-4b70-857b-47a41dbff723.item.valid_to","label":"10 - For Each➛identityAsset➛valid_to","reference":"","reference_display":"","type":"string","base_type":"string","parent_table_name":null,"column_name":"","choices":null,"usedInstances":null,"attributes":{}},{"name":"f59c73c8-2ebf-4e29-9b51-a17ab2a42c94.record.asset.system","label":"26 - Create Record➛Identity Asset Record➛Asset➛System","reference":"x_aleen_snguardian_system","reference_display":"System","type":"reference","base_type":"reference","parent_table_name":"x_aleen_snguardian_asset","column_name":"system","choices":null,"usedInstances":{"9ef05ad7-3e34-42b6-bcd1-b20a69808b7f":["conditions"]},"attributes":null},{"name":"c6bed67a-d77d-49c3-80d7-0d4020938b32.Record.location","label":"1 - Look Up Record➛Identity Location Record➛Location","reference":"x_aleen_snguardian_location","reference_display":"Location","type":"reference","base_type":"reference","parent_table_name":"x_aleen_snguardian_identity_location","column_name":"location","choices":null,"usedInstances":{"08b22acf-ef7c-4340-a950-79995876602e":["u_location-2"],"388df9aa-4b9e-4cf9-9356-41cb54ad17a6":["conditions"]},"attributes":null},{"name":"flow_variable.bo_approval","label":"Flow Variables➛BO Approval","reference":"","reference_display":"","type":"boolean","base_type":"boolean","parent_table_name":null,"column_name":"","choices":[],"usedInstances":null,"attributes":{"sourceUiUniqueId":"","sourceType":"","sourceId":"","uiUniqueId":"eb3f1515-3483-478a-a375-14b2bff9c553"}},{"name":"flow_variable.u_skip_badging_office","label":"Flow Variables➛u_skip_badging_office","reference":"","reference_display":"","type":"boolean","base_type":"boolean","parent_table_name":null,"column_name":"","choices":null,"usedInstances":{"2377742b-c812-4404-9b7d-21d595697ebf":["condition"]},"attributes":{"uiType":"boolean","uiTypeLabel":"True/False","element_mapping_provider":"com.glide.flow_design.action.data.FlowDesignVariableMapper","uiUniqueId":"7d098a99-cba0-4aec-960a-2d3228ac5a78"}},{"name":"f59c73c8-2ebf-4e29-9b51-a17ab2a42c94.record.asset.sub_type.code","label":"26 - Create Record➛Identity Asset Record➛Asset➛Sub Type➛Code","reference":"","reference_display":"Code","type":"string","base_type":"string","parent_table_name":"x_aleen_snguardian_asset_type","column_name":"code","choices":null,"usedInstances":{},"attributes":null},{"name":"4776875f-32e5-4aac-a3d4-285866d6ad67.outputs","label":"3 - Alert Decision Evaluation Action➛outputs","reference":null,"reference_display":"outputs","type":"string","base_type":"string","parent_table_name":null,"column_name":null,"choices":null,"usedInstances":{"9b6ff257-5323-47f6-84c1-9a1454f5670a":["u_asset_subtype-0"]},"attributes":{"uiType":"string","uiTypeLabel":"String","element_mapping_provider":"com.glide.flow_design.action.data.FlowDesignVariableMapper","pwd2droppable":"true","uiUniqueId":"3c19ece4-55fa-479e-b464-c12521a49bf1"}},{"name":"8b1e95a0-fec0-4b70-857b-47a41dbff723.item.asset","label":"10 - For Each➛identityAsset➛asset","reference":"","reference_display":"","type":"string","base_type":"string","parent_table_name":null,"column_name":"","choices":null,"usedInstances":null,"attributes":{}},{"name":"388df9aa-4b9e-4cf9-9356-41cb54ad17a6.Record.mc_sub_type.code","label":"5 - Look Up Record➛Location Administration Record➛MC Sub Type➛Code","reference":"","reference_display":"Code","type":"string","base_type":"string","parent_table_name":"x_aleen_snguardian_asset_type","column_name":"code","choices":null,"usedInstances":{"871e54c8-fa6b-495f-bc0e-bc8ac615bc5b":["u_asset_subtype-0"]},"attributes":null}]',
        master_snapshot: '2b4711ca47b0e210f487c24fe16d431e',
        name: 'Alert New Badge Request (NFC) (DT)',
        pre_compiled: false,
        remote_trigger_id: '028ed3a747c7621051a3e84d416d43c0',
        run_as: 'system',
        run_with_roles: '',
        sc_callable: false,
        show_draft_actions: false,
        show_triggered_flows: false,
        status: 'draft',
        sys_domain: 'global',
        sys_domain_path: '/',
        type: 'flow',
        version: '2',
        latest_snapshot: '2b4711ca47b0e210f487c24fe16d431e',
        compiler_build: 'glide-xanadu-07-02-2024__patch11-hotfix1a-12-29-2025_01-12-2026_2334.zip',
    },
})
Record({
    $id: Now.ID['028ed3a747c7621051a3e84d416d43c0'],
    table: 'sys_flow_record_trigger',
    data: {
        active: 'true',
        condition: 'request_type=2dc1679b1b1f8210bf7ea82b234bcb13^submitted_by=USER',
        on_delete: 'false',
        on_insert: 'true',
        on_update: 'false',
        run_flow_in: 'background',
        run_on_extended: 'false',
        run_when_setting: 'both',
        run_when_user_setting: 'any',
        sys_domain: 'global',
        sys_domain_path: '/',
        table: 'x_aleen_snguardian_request',
    },
})
Record({
    $id: Now.ID['1d83519f4707f21051a3e84d416d43fa'],
    table: 'sys_trigger_runner_mapping',
    data: {
        active: 'true',
        data: '{"run_flow_in":"background","run_when_user_list":[],"run_when_setting":"both","run_when_user_setting":"any","run_on_extended":"false"}',
        identifier: 'd26fccce47fca21051a3e84d416d43d1',
        runner: 'FDTriggerRunner',
        trigger: '028ed3a747c7621051a3e84d416d43c0',
    },
})
Record({
    $id: Now.ID['926fccce47fca21051a3e84d416d43d2'],
    table: 'sys_flow_cat_variable_model',
    data: {
        id: 'd26fccce47fca21051a3e84d416d43d1',
        name: 'New Badge Request (NFC) (DT)',
    },
})
Record({
    $id: Now.ID['6b4711ca47b0e210f487c24fe16d431f'],
    table: 'sys_flow_cat_variable_model',
    data: {
        id: '2b4711ca47b0e210f487c24fe16d431e',
        name: 'New Badge Request (NFC) (DT)',
    },
})
Record({
    $id: Now.ID['aa6f00024730e21051a3e84d416d430b'],
    table: 'sys_hub_flow_input',
    data: {
        active: 'true',
        array: 'false',
        array_denormalized: 'false',
        attributes:
            'element_mapping_provider=com.glide.flow_design.action.data.FlowDesignVariableMapper,test_input_hidden=true,uiType=table_name,uiTypeLabel=Table Name',
        audit: 'false',
        calculation: `(function calculatedFieldValue(current) {

	// Add your code here
	return '';  // return the calculated value

})(current);`,
        display: 'false',
        dynamic_creation: 'false',
        element: 'table_name',
        element_reference: 'false',
        function_field: 'false',
        internal_type: 'table_name',
        label: 'Table Name',
        mandatory: 'false',
        max_length: '200',
        model: 'd26fccce47fca21051a3e84d416d43d1',
        model_id: 'd26fccce47fca21051a3e84d416d43d1',
        model_table: 'sys_hub_flow',
        name: 'var__m_sys_hub_flow_input_d26fccce47fca21051a3e84d416d43d1',
        order: '101',
        primary: 'false',
        read_only: 'false',
        reference_floats: 'false',
        spell_check: 'false',
        staged: 'false',
        table_reference: 'false',
        text_index: 'false',
        unique: 'false',
        use_dependent_field: 'false',
        use_dynamic_default: 'false',
        use_reference_qualifier: 'simple',
        virtual: 'false',
        virtual_type: 'script',
        xml_view: 'false',
    },
})
Record({
    $id: Now.ID['ee6f00024730e21051a3e84d416d4307'],
    table: 'sys_hub_flow_input',
    data: {
        active: 'true',
        array: 'false',
        array_denormalized: 'false',
        attributes:
            'element_mapping_provider=com.glide.flow_design.action.data.FlowDesignVariableMapper,uiType=document_id,uiTypeLabel=Document ID',
        audit: 'false',
        calculation: `(function calculatedFieldValue(current) {

	// Add your code here
	return '';  // return the calculated value

})(current);`,
        dependent: 'table_name',
        dependent_on_field: 'table_name',
        display: 'false',
        dynamic_creation: 'false',
        element: 'current',
        element_reference: 'false',
        function_field: 'false',
        internal_type: 'document_id',
        label: 'Record',
        mandatory: 'true',
        max_length: '200',
        model: 'd26fccce47fca21051a3e84d416d43d1',
        model_id: 'd26fccce47fca21051a3e84d416d43d1',
        model_table: 'sys_hub_flow',
        name: 'var__m_sys_hub_flow_input_d26fccce47fca21051a3e84d416d43d1',
        order: '100',
        primary: 'false',
        read_only: 'false',
        reference_floats: 'false',
        spell_check: 'false',
        staged: 'false',
        table_reference: 'false',
        text_index: 'false',
        unique: 'false',
        use_dependent_field: 'true',
        use_dynamic_default: 'false',
        use_reference_qualifier: 'simple',
        virtual: 'false',
        virtual_type: 'script',
        xml_view: 'false',
    },
})
Record({
    $id: Now.ID['ab4711ca47b0e210f487c24fe16d433f'],
    table: 'sys_hub_flow_input',
    data: {
        active: 'true',
        array: 'false',
        array_denormalized: 'false',
        attributes:
            'element_mapping_provider=com.glide.flow_design.action.data.FlowDesignVariableMapper,test_input_hidden=true,uiType=table_name',
        audit: 'false',
        calculation: `(function calculatedFieldValue(current) {

	// Add your code here
	return '';  // return the calculated value

})(current);`,
        display: 'false',
        dynamic_creation: 'false',
        element: 'table_name',
        element_reference: 'false',
        function_field: 'false',
        internal_type: 'table_name',
        label: 'Table Name',
        mandatory: 'false',
        max_length: '200',
        model: '2b4711ca47b0e210f487c24fe16d431e',
        model_id: '2b4711ca47b0e210f487c24fe16d431e',
        model_table: 'sys_hub_flow_snapshot',
        name: 'var__m_sys_hub_flow_input_2b4711ca47b0e210f487c24fe16d431e',
        order: '101',
        primary: 'false',
        read_only: 'false',
        reference_floats: 'false',
        spell_check: 'false',
        staged: 'false',
        table_reference: 'false',
        text_index: 'false',
        unique: 'false',
        use_dependent_field: 'false',
        use_dynamic_default: 'false',
        use_reference_qualifier: 'simple',
        virtual: 'false',
        virtual_type: 'script',
        xml_view: 'false',
    },
})
Record({
    $id: Now.ID['ef4711ca47b0e210f487c24fe16d4320'],
    table: 'sys_hub_flow_input',
    data: {
        active: 'true',
        array: 'false',
        array_denormalized: 'false',
        attributes:
            'element_mapping_provider=com.glide.flow_design.action.data.FlowDesignVariableMapper,uiType=document_id',
        audit: 'false',
        calculation: `(function calculatedFieldValue(current) {

	// Add your code here
	return '';  // return the calculated value

})(current);`,
        dependent: 'table_name',
        dependent_on_field: 'table_name',
        display: 'false',
        dynamic_creation: 'false',
        element: 'current',
        element_reference: 'false',
        function_field: 'false',
        internal_type: 'document_id',
        label: 'Record',
        mandatory: 'true',
        max_length: '200',
        model: '2b4711ca47b0e210f487c24fe16d431e',
        model_id: '2b4711ca47b0e210f487c24fe16d431e',
        model_table: 'sys_hub_flow_snapshot',
        name: 'var__m_sys_hub_flow_input_2b4711ca47b0e210f487c24fe16d431e',
        order: '100',
        primary: 'false',
        read_only: 'false',
        reference_floats: 'false',
        spell_check: 'false',
        staged: 'false',
        table_reference: 'false',
        text_index: 'false',
        unique: 'false',
        use_dependent_field: 'true',
        use_dynamic_default: 'false',
        use_reference_qualifier: 'simple',
        virtual: 'false',
        virtual_type: 'script',
        xml_view: 'false',
    },
})
Record({
    $id: Now.ID['e8e6091b47ddfe10f487c24fe16d4367'],
    table: 'sys_hub_trigger_instance_v2',
    data: {
        flow: 'd26fccce47fca21051a3e84d416d43d1',
        name: 'Created',
        trigger_definition: '798916a0c31322002841b63b12d3ae7c',
        trigger_inputs:
            'H4sIAAAAAAAA/+VY227jNhD9FUFPLZACutmy8rZNsmiA7aZwkvYhTQlSHNpCacorUUq8i/x7Sd0iy/Itl26cfTEgkh6dMzxzONTNN1Mm0WQCyblIJRYhXC7Sc2oem5Y/ZJ5lOZ7vWuDY1sDGLow86tlD6rmebx6ZHBPgaukVJhzUcyQkJALzq8Uc1LDUw0jgmZ6bYUGxjJOFeSyTDI7MOKGQmMf2kVmsqJarlTnmmX6+R5gDCJSKSYYTGmGBEviSQSrVIhqlc44Xf1Zrx83EHCcqnNShv5nhNOI0AWEe39wqeJpWyEIcOGCFru06juI38mwydIntUBeDZfXQ6uCTPeweycC9BEFBvYphnkIP8QQwvRB80ayYqrypgEWS7tPoq4o+svQ6Bgp7COVc84gq7uVwOI2jEC7mMopFOVLiLCdjns3E5xK/zhownHFZZ02NZKmKB3MNWYOoELHLaXw3rl/4MRIFu2qSxyHmzROWSj8kk5DqhLOIq9SjMjdpnCUF+vHZycX4FP314erkt7MxGp9dXo3PT67OTs2Hghf6kumIJcIKCyrpPDRb/TECrjdQZDOi0ByZaZhEc/khlFEOFZyHo5eQ80ksaFTkc0XSYT2VtrG2xNHa7SpBtTQsq1FS2HpBrfZK2kir6+/Mslzq0NAe+gGxic1GCjFhPuCRQxzXIyGx3X/SjMwiKYEisij/cn15Nl4tjpcMva28hkOMKeA15UXYmjT3JEb2ZLydy02FVo3sUmlKE9+p1ko3eHKpzWIK/LQtwVL4KBLzTOps3WEhUyRjhClFrTzqpQrTttoruT28YqElmVCvQs1OrpZbkfAm858iZfHHN8pm6qwWYNQ8+1SFHGfCiNWWqx8jzBKVVGnUtcnOZ3hS7QX7oxZykcxKfzlOEJqhdJGiaUbQUkaRH4wCe7hO2n64lMGirFXoG9O8fdC7DBxC2VIru07bT79HaRqJSSu9Dcdis1YoNuyU6o06gyXV9LC43u7omqtqyTsq6DYFG7SwzcdsmzECzLF8Td+2XMJsy7cGmFHXskJno4rXApYdWb+Kn+3nZmlRUHyH8ulmuwavxcr30Wa+LOwqjqOFUJnmyRuE1jF/dy/3bxRaDp/uLtQXbtAwzbVZ010PgVf3f8bjO2U6T/B+gsN/J0mcCdp1Rx3TiITxuML4qcr8z4flje1zgMUJbOa7vOJwWO5zAjzqpa5VLBar3l8ObnN5l9kkAA8sZe6u8nUyCAISYocxf+gr8a7Vai+gg3D3LbWR9xXXOjvt1V3eJ9c9PP77A3yW01dq7PX5cu69O/rdFARSJBPEo+KTTMfYJzyiUM/tXPcrUfPHi1Wn9ncofDYKwoHt+6GveKnCZx4QbHvOAAf+0B0NtlHaBEz20PxfLq7ayDWQNaZwXU69rQ9Gb1O9KUipz6f9mxKhGv7iP7iE1zqp9YYahSvFifE5Fr+cP64zLkGdiMV3jwM6t9vdyS6ktQKNd8WaxHK60o0ppr+q8SWm+rqxZs/f8XW9U0z5ctZ6rutPyd3Wqzx4o0HA3H6vZ8FmA1jP5s23ezsaTr7Wuvraql0LOu/1habN6jZqT9j3jpqq0O6WFvPHTcqz2tq6ZNd+v3gK2B+ilyhaw+c0FBotoJi1z5nT2FAThnqJETGjQgvUIAtDTkFtBlc3H/VCQ7/9wA6Y9vm6yrwptXfNu7wprrQVatioOvwDIrZ3x9ApmY0fenpSs60hAOrjwcBdc/kLul99+iBtQfzmW4O9/SPvs6ONR+F+cbsxew/D1h4va2LHs/8ds361b1Y9KN7osX37H7bT4gfMJAAA',
        trigger_type: 'record_create',
    },
})
Record({
    $id: Now.ID['2de6891b47ddfe10f487c24fe16d4338'],
    table: 'sys_hub_trigger_instance_v2',
    data: {
        flow: '2b4711ca47b0e210f487c24fe16d431e',
        name: 'Created',
        trigger_definition: '798916a0c31322002841b63b12d3ae7c',
        trigger_inputs:
            'H4sIAAAAAAAA/+VY227jNhD9FUFPLZACutmy8rZNsmiA7aZwkvYhTQlSHNpCacorUUq8i/x7Sd0iy/Itl26cfTEgkh6dMzxzONTNN1Mm0WQCyblIJRYhXC7Sc2oem5Y/ZJ5lOZ7vWuDY1sDGLow86tlD6rmebx6ZHBPgaukVJhzUcyQkJALzq8Uc1LDUw0jgmZ6bYUGxjJOFeSyTDI7MOKGQmMf2kVmsqJarlTnmmX6+R5gDCJSKSYYTGmGBEviSQSrVIhqlc44Xf1Zrx83EHCcqnNShv5nhNOI0AWEe39wqeJpWyEIcOGCFru06juI38mwydIntUBeDZfXQ6uCTPeweycC9BEFBvYphnkIP8QQwvRB80ayYqrypgEWS7tPoq4o+svQ6Bgp7COVc84gq7uVwOI2jEC7mMopFOVLiLCdjns3E5xK/zhownHFZZ02NZKmKB3MNWYOoELHLaXw3rl/4MRIFu2qSxyHmzROWSj8kk5DqhLOIq9SjMjdpnCUF+vHZycX4FP314erkt7MxGp9dXo3PT67OTs2Hghf6kumIJcIKCyrpPDRb/TECrjdQZDOi0ByZaZhEc/khlFEOFZyHo5eQ80ksaFTkc0XSYT2VtrG2xNHa7SpBtTQsq1FS2HpBrfZK2kir6+/Mslzq0NAe+gGxic1GCjFhPuCRQxzXIyGx3X/SjMwiKYEisij/cn15Nl4tjpcMva28hkOMKeA15UXYmjT3JEb2ZLydy02FVo3sUmlKE9+p1ko3eHKpzWIK/LQtwVL4KBLzTOps3WEhUyRjhClFrTzqpQrTttoruT28YqElmVCvQs1OrpZbkfAm858iZfHHN8pm6qwWYNQ8+1SFHGfCiNWWqx8jzBKVVGnUtcnOZ3hS7QX7oxZykcxKfzlOEJqhdJGiaUbQUkaRH4wCe7hO2n64lMGirFXoG9O8fdC7DBxC2VIru07bT79HaRqJSSu9Dcdis1YoNuyU6o06gyXV9LC43u7omqtqyTsq6DYFG7SwzcdsmzECzLF8Td+2XMJsy7cGmFHXskJno4rXApYdWb+Kn+3nZmlRUHyH8ulmuwavxcr30Wa+LOwqjqOFUJnmyRuE1jF/dy/3bxRaDp/uLtQXbtAwzbVZ010PgVf3f8bjO2U6T/B+gsN/J0mcCdp1Rx3TiITxuML4qcr8z4flje1zgMUJbOa7vOJwWO5zAjzqpa5VLBar3l8ObnN5l9kkAA8sZe6u8nUyCAISYocxf+gr8a7Vai+gg3D3LbWR9xXXOjvt1V3eJ9c9PP77A3yW01dq7PX5cu69O/rdFARSJBPEo+KTTMfYJzyiUM/tXPcrUfPHi1Wn9ncofDYKwoHt+6GveKnCZx4QbHvOAAf+0B0NtlHaBEz20PxfLq7ayDWQNaZwXU69rQ9Gb1O9KUipz6f9mxKhGv7iP7iE1zqp9YYahSvFifE5Fr+cP64zLkGdiMV3jwM6t9vdyS6ktQKNd8WaxHK60o0ppr+q8SWm+rqxZs/f8XW9U0z5ctZ6rutPyd3Wqzx4o0HA3H6vZ8FmA1jP5s23ezsaTr7Wuvraql0LOu/1habN6jZqT9j3jpqq0O6WFvPHTcqz2tq6ZNd+v3gK2B+ilyhaw+c0FBotoJi1z5nT2FAThnqJETGjQgvUIAtDTkFtBlc3H/VCQ7/9wA6Y9vm6yrwptXfNu7wprrQVatioOvwDIrZ3x9ApmY0fenpSs60hAOrjwcBdc/kLul99+iBtQfzmW4O9/SPvs6ONR+F+cbsxew/D1h4va2LHs/8ds361b1Y9KN7osX37H7bT4gfMJAAA',
        trigger_type: 'record_create',
    },
})
Record({
    $id: Now.ID['70e6091b47ddfe10f487c24fe16d43b6'],
    table: 'sys_hub_action_instance_v2',
    data: {
        action_type: 'f9d01dd2c31332002841b63b12d3aea1',
        action_type_parent: 'baf174c8c3c232002841b63b12d3aee4',
        compiled_snapshot: 'f9d01dd2c31332002841b63b12d3aea1',
        flow: 'd26fccce47fca21051a3e84d416d43d1',
        order: '20',
        parent_ui_id: '50b02abb-044f-4038-a72a-3bb50059fc62',
        ui_id: '2df8057b-3744-476d-953a-2ecd5b809e97',
        values: 'H4sIAAAAAAAA/+1WXU/bMBT9K1Ge28r5atO+TUNIPGxIMPFCh+XYN8Wa42S2A3RV//uuk7QUtiHGmKZJ9O1e349z7j12c7kJGXey1ifaOqY5nK/tiQgXYZmIfCbmJJ3lMcQRySKWQJ6KNJqKNJlPw1EofVwKgkTzaMqTKEliQuI8jYppUkSxSBhAhHGaVYCRBnhtBNo3TLXesdm8N8AcCBpNeGsMaLfd4rmQtlFsfTGEoYdfSyXwPFxcfh6FDTNY0YEJF5tHR27dAFWsAIWJRzVvKywanBz9Btpd9tkO7mP4vgfaYqhOpXfikccTkVEIdw60AGxXMmVhFFZMC+Zqsw4XzrToQNbiVKv1PuJaatczrdidld+wfkp8XAlIjQ9T2Jt0mNBuOLXkcNr4LfYexwq1m1yt2kp/7Cn42ULJWuUOZttarAeNh+xB9AjL8+v69mzX71jqjt2AVtWcqb3FnDOyaB1Yvw5Q0A2lYk0j9Yo2pr6RXTJCqSYrhcakVPUt9rRypSe9+iY4IDY5Rv9R575gRnoSH7AMJm878vRr6/v2NAbAtOPcEabdojDUciMb9w4L38AAczv6U50X2VPK4fN7oRyAudf6HWUKQFOrVy0zQjJNDXxtwbofBX+2P3iZ7j95AMHHHsBzwT9I/gWZQfkPfIPws1cTfv6PhD8g+s+U/9f0TuInX8oDiXQStwdax4YOli0hiUivvNHa3tosd1Jfhotl+N7jUgrEMhwt++zOT/K8zEFkUVHwHCHOsnmaZUkas7TgxYx14XZt8eV9Zvz26rY2X6iucVc9lOGOBbxuldDeF89cUAA6qkbhJROBaCFwdQDG1CbYbDJSkJgVxZikaTlOSZKP2Sxm46QoMkKyecmn8YTSni+lE14L2G6DcdcPXlCgAmvZCn72l/g24Vef8AufWkAuuIug38zz786uwLEEJexPLtPurR0a0Juhwf5D49Ue3GhKut/b98Yrfm98/g5rDvLlWQsAAA==',
    },
})
Record({
    $id: Now.ID['a4e6091b47ddfe10f487c24fe16d438b'],
    table: 'sys_hub_action_instance_v2',
    data: {
        action_type: 'f4540d94474ea21051a3e84d416d43b6',
        action_type_parent: '35de7cdc470ea21051a3e84d416d43ee',
        compiled_snapshot: 'f4540d94474ea21051a3e84d416d43b6',
        flow: 'd26fccce47fca21051a3e84d416d43d1',
        order: '3',
        parent_ui_id: 'fcbc6bed-d3f7-48cb-adfd-70d08b824d6d',
        ui_id: '4776875f-32e5-4aac-a3d4-285866d6ad67',
        values: 'H4sIAAAAAAAA/+1UTW+cMBD9KyufWmlBZoEAm1OlKlKqNpG6bS7ZCA22SSwZQ4xJsl3x3zuGJR/bNP089NAbM7wZv/dm7PMtAWZlrY91a0Ezsdq0x5wsSUKzJAqyNEoiAYuAxgGEIo14FBzwKDwAMifS4UIWR5Rn0fO4wuE0VAKRUjedxfAGVOdi/OSybRRszh4y7EoqboQmy/OLOWnAYK0Vhiy3e7/sphG5gkIoLFxZI/XlL1CaCidOexRdcwzbqW1tuOMQzIm4s0JzgceUoFoxJxVoDrY2G7K0psOEEcBPtdrcI66ktqO4Cu5a+QU7p5RShywF6mE76fdhvrNlcqSWTJw2bkhjxkKhJrtq1VX6ZGTvDBUldMo+MrRrsZ9oHGlHY8epXF3Vtx+nA4+kHvTtfqqagbqPwKILRWdF64bQyU973oyZ9/uTEEpUeGJeQdNgJm9MfSOHU5B05V8qDPxS1bfIrpWX2h/X0EczwT/C/NshfQZGOrkfsA0Wu+M+a3ndiWFJgfGSxjTxYsgKLwKgXhakgXeQRSFNUl6EEJN+sDa/7pyo0aSdHfnoKAJaZmRj3yCFGzENcsw50eNa4MdLMNxrMxuQs3VHachn2/5wrYfM+Zp0uagaVW+EyN12rcnFBCt5PogezMAm/h70SRM3G+cT1o/lz1RPGCw0wnZGz96tTk/8cWKy3Lwa2r0+JH3fz//4/qcvXrby4XKxmotH13+7nSgPA/YrhpvAZItc8mHD+/7bF+Lniv7KI/JjXVPhTthTmd95Qhb/n5B/6wmJ45JmWcG8NIxLL1pksZfSLPIKscggKVmYhOFvPCGD8v7iK/Mh/DVfBwAA',
    },
})
Record({
    $id: Now.ID['a8e6091b47ddfe10f487c24fe16d4385'],
    table: 'sys_hub_action_instance_v2',
    data: {
        action_type: '9d09f99587003300663ca1bb36cb0ba3',
        action_type_parent: 'b93f42810b30030085c083eb37673a63',
        compiled_snapshot: '9d09f99587003300663ca1bb36cb0ba3',
        flow: 'd26fccce47fca21051a3e84d416d43d1',
        order: '1',
        parent_ui_id: 'fcbc6bed-d3f7-48cb-adfd-70d08b824d6d',
        ui_id: 'c6bed67a-d77d-49c3-80d7-0d4020938b32',
        values: 'H4sIAAAAAAAA/9VYW2/iOhD+K1GeKZuQkEDfjlohVdrdStuefelWlhNPwDrGSR2nLUX972ecC1BuBUpF9zH2XL6Z+WYyyd3UprHmqbySuaYyhptJfsXsc9sJ+gH03Z4fOh3ouE7XpR70fOa7AfM9Su2WzY0c6zv9pN/v9kLH8TzHCQIvpm4UeUEcORH1UU7SMaCkppEAfHykojDPz4QKAElyOSyoYpxKwhlIzfWEiDSmBhWKM55ngk5+11pXtYj1fS4Sj7hgCqR9fnffsjOq0KEGZZ9Pl670JAMiaAQCLd0aPNZPA273WN4or8ZmHDSPRFamU8UMFqdlw7MGyQBdJVTk0LLHVDKqUzWZnSig7FqK+cGIS40WbSP8nPMXNN9zjFwCGFYM1d3skdTpqo7jUcpjuM7KPJUnFdDqMhXFWP6sAjCJhoQWQjeJxpMiR3uQGcwGRI0ouRmlT78ahwMuy/DqS1M4MXuiWiseFRpyUwsQMEZDZEyzjMshyVT6yEtlxDJuDwU+tBORPqHTnA9lu2JmG1NE2wM8vyyPf1PFTRQ/0AwqIyAusNqkSnqeFqrMyiOJRZGXF4rKvLJlv5a5Ig+FQVlFXcdHqhShQB4rnul/UOER6lBeWx/uk+5WbvXnXIpTybhxlS80S9MZfwpUZ9PpBRJFAyNuOy4UFkK3FTwUkGuSpOr1dbVv9jdwWFddLKLfNfK1yuvSUffXm7O6v9yj9ZfvOCfqMK2Kr9dg77VMFfBn9Y3LtrKHzYmSp0qTKuULjbPaCQdTe8BBsDcvjB3ANcrXhqVWNNmEt2Z2YnwsvTk6f/2b40vyGgExUuWbS8Fl+eJGoCcmfHcrpyJ3iUAlb+Z0L89oHq/Snlo6tV4On+slIfYA2SjeICLrtkK5Bngz0RvzNee9o3He6+zHeWTc3XSGfpa1NQluFjtT80b+xcjTZXmk5YKC+3o/65mLw3y6+/rsGJ9LTe3t1dWLzKpuLjcQ7Mhr44YubX3mWBihau2PVF1Onjgbgp57b6RYqp+o+G/dfc2uWQ+V4Z1uBXW3ft5ECysoT8gYC8wzXKgVxMihnFAFuBoWkpF6lZ7zzRQ84Qp3x0p4dfj8Al0oaaXYq5YegVVKWzPpY4ykHaJrFK8SqwmvxpBbGJ5VhmfNwtsvGRsGmX/EtfQjg2xAuShTj59E2ULtQKlUbRhm71RtS/l3nHQ7gnKPCurjo3Ad39eOxHew/hXf1ycbVzHQyO/QIPRc13Fch4VOLwzdXhAlAQ39ZN6hhOQyxkGMkBJkFOIiDYMaOjirM6maxgf/PcIp/21Qm9gVb6N8mUrzHd4JtWUAI0GsBvD7IdWDJkpTAVTOed092aT5Kj+YCn67nJvq6Pu6on3W+lDwfyV/KKAkew+cTs9l8VkvdMMzP2HBWZ/R7hntR93QYxD7yeEbwf3/cMjbhb4VAAA=',
    },
})
Record({
    $id: Now.ID['ace6091b47ddfe10f487c24fe16d438f'],
    table: 'sys_hub_action_instance_v2',
    data: {
        action_type: '9d09f99587003300663ca1bb36cb0ba3',
        action_type_parent: 'b93f42810b30030085c083eb37673a63',
        compiled_snapshot: '9d09f99587003300663ca1bb36cb0ba3',
        flow: 'd26fccce47fca21051a3e84d416d43d1',
        order: '5',
        parent_ui_id: 'fcbc6bed-d3f7-48cb-adfd-70d08b824d6d',
        ui_id: '388df9aa-4b9e-4cf9-9356-41cb54ad17a6',
        values: 'H4sIAAAAAAAA/9VYXU/rOBD9K1Ge267TpE3L29VlkdCyFwnY+8Iiy7Edaq1r59oOn+p/33E+2tIWKKUI7lttz3jOjM+Z2L18DAl1QqtjZR1RlJ/f22MWHoR5xBLKBmmSMpbzCOXJKKX9BH4OWRL3SdgJhbdjYzTOx+PBKEUojhEaDmNKoiyLhzRDGUnATpEpB0tHMslheENk6cd3mEjOFbbquiSGCaJwRtg1xzrPBfWWTNhCkvufjcOJpsRDDb6xqVDCOlMNwZBOhGSGq/Dg8qoTFsRARMdNePC4suTuC44lybiE/S48oOCHR7d9Mk+c15PzAdohVvXW2jCPBXVCfue4YhxC5URa3gmnRDHitLmfzxhO2KmSi4mJUA52DL3xnRUPsP0IebucQ1qU12vzIW6KVk/TiYZSnhZVnaqZGmi9qGU5VT/qBHy5eU5K6dpyw0xpYT9eeMweRIMoP5/o27M24JFQVXrNooRDkvMRcc6IrHTc+rPgkk9hIzwlRSHUNS6MvhGVM2CZ9q4lDHq51LcQ1Ipr1aup2YMSkd4RzB9W0z+JET6Lv2EbcAZAQsJp47roVpemqsoNprK01YIhytZ7hbOqVvhX6VHWWTf54bpEYGCpEYX7Bg43vEll1nm3UAYvcmu84BLVigkfyi6pRTbktyfHf/35+EiHGWfDlHRZmrJuMqZxd4RY2kUsQX00jkdZ3O+dcQrc67Wus9m6pva17W4K/L6c6bZV2ui8qXSNFp/MNVqM9qbFBKFPUqMz5dcT42vyqhP+KI1F7EX2sAVRrDYO1yVfEtm6Pnam9pHgkj35uGwBrnU+9SwNsvvn8DbMzn2Mla9M/7f/ynxJXgMghut6CyWFqj7yAPSTCT94kVNZtEKgijcLuldzxNJ12pPA6eBh975eEeINIFvHc0AUXNQoNwBvO3q7fcP5eG+cj/tv4zww7vJxjn5etQ0Fbi+B/sxb+wdvT1btgZZLDtHsaq6Z77vFjN4as+9jrog6fpOql5lVrxw+Q7A9XzGfUWnnI9vCBFybeLhWOb4V8JBxi+itFdPulsj/Nq037JprqErv866r0YtPoWzpuipyPIUDFgVcvk11NbSYGI5zXSqGm2v3gm/+wHNhrGuM15vPGXelUYEGrQZuwoPKOphb76MlbZFd63icB216DQYbQHpBlV4wT+9txXimkSV7vJa+p5EdESGr0sPzqVg6O26MNs80s1dO7YXj37LTbQkq2iuo97fCTXzf2BJfwfpbvMU/rV1RTrKkT4ZpHEUIRfBmRaM0jUbDLB+SNMkXCsXYKgqNGCDlwCjAhVsGtXRA6z2p7sY7/9MEXf6Po2aLbfG2zoda/Vsi1E9d4AEDQYIW8OspNY0m01pyoha8Hnxap/kqf0aV4mK1NvXUyaZD+6jrQyn+UeJXySuyjzjqjyJGu6M0SrtJzobdMSODLhlngzRmnALvd5bY1f8hxquQ6xUAAA==',
    },
})
Record({
    $id: Now.ID['8ae6c91b47ddfe10f487c24fe16d430b'],
    table: 'sys_hub_action_instance_v2',
    data: {
        action_type: 'f4540d94474ea21051a3e84d416d43b6',
        action_type_parent: '35de7cdc470ea21051a3e84d416d43ee',
        compiled_snapshot: 'f4540d94474ea21051a3e84d416d43b6',
        flow: '2b4711ca47b0e210f487c24fe16d431e',
        order: '3',
        parent_ui_id: 'fcbc6bed-d3f7-48cb-adfd-70d08b824d6d',
        ui_id: '4776875f-32e5-4aac-a3d4-285866d6ad67',
        values: 'H4sIAAAAAAAA/+1U30+cQBD+Vy771CYHgQMEzqdGY2LTatJrffEMGXYX3WRZEBaVXvjfO8uP8zyN1bRPTd+Y4ZuZb76ZncsNAapFoU5VrUFRvmrrU0aWJHTi0HfjyA99DgvXCVzweOQz3z1gvncAZE6EwXk08B0W+y/jUoNTkHNEClU2Gs07kI2x8ZOJupTQXjx66I2QrOKKLC+v5qSECmM1r8hys/frrcUlpFzuVN8jo9vSmLWuhLoe7S9jyGpyFhUzFNw54Q+aK8axdgay5nOSg2Kgi6olS1016Kg4sHMl2y3iRig99JbDQy1+YrnIcRyDzDi2Q8fOt2YyqjK4s2PQgEwaqptqK1IhKK8HIRjPoJH6aNc3AM5LM9ghREMqp+hCNrk6G3Qg2wQ7Q2hqJMFL06nhPjaSrW6K+28TyxOhelHGn7KgILcWaJQubbThsyGN+L6n8uB5pjOXPMeKSQ5liZ6krIo70VdB0rl9LdGwM1ncI7taXCt7WF0bJwD2CfqPe/cFVMK0+xXTYLAp90OJ24b3iw2UZU7ghFYAcWr5AI4Vu5FrHcS+54QRSz0ISDcndVsfSajrR6FwQsltY9ocZBsFSgaNTQitRKk/Iak7Pu3D4DMyDCuHH6/B8HVUsx45WzeO47HZpjtcq95zuSZNwvNSFi3nidnUNbmaYBlLehl6eTCJvQd9ksRMyyiH8UP4C9ETBgMrjrunZp9X52f2MEORtR/6dB8PSdd18z++ItGrDzl7fLi0YHzniGw2E+V+5HZOcTeoqJFL0u981z2/M28Leucp+n0H0ykaW3ja0HsO0eL/IfoHDlEQZE4cp9SKvCCz/EUcWJET+1bKFzGEGfVCz/srh6jXorv6BYs7NdHrBwAA',
    },
})
Record({
    $id: Now.ID['a5e6891b47ddfe10f487c24fe16d433a'],
    table: 'sys_hub_action_instance_v2',
    data: {
        action_type: '9d09f99587003300663ca1bb36cb0ba3',
        action_type_parent: 'b93f42810b30030085c083eb37673a63',
        compiled_snapshot: '9d09f99587003300663ca1bb36cb0ba3',
        flow: '2b4711ca47b0e210f487c24fe16d431e',
        order: '5',
        parent_ui_id: 'fcbc6bed-d3f7-48cb-adfd-70d08b824d6d',
        ui_id: '388df9aa-4b9e-4cf9-9356-41cb54ad17a6',
        values: 'H4sIAAAAAAAA/+VYUW/iOBD+K1GegXNIINC3VXtI1fW2Utvbl72V5dgOWGecrO20pYj/vpM4AQS0JVoqUd0bHo8934y/b+zwfekTakWmrpWxRFF+vzDXzL/w04BFlA3iKGYs5QFKo1FM+xH8HLIo7BO/44vSj43ROB2PB6MYoTBEaDgMKQmSJBzSBCUkAj9F5hw8LUkkh+EjkUU5fsZEcq6wUdOCaCaIwglhU46zNBW09GTC5JIsvtULbjJKSqjeFzYXShirqyE40pmQTHPlX3z/0fFzoiGi5dq/WO5MHQtZkoRLcH2oMe+kYBf5eoirOWe72V7mfXUTmWYlFNTx+bPlinHAkBJpeMefE8WIzfRibdGcsFslN4aZUBZ29EvnZyNeIO4IlX4ph6wod3PrIa5r5szpFbHk3uqC2kLXrnSWQXWNqwfjKSmkvdy2OYfbvKpttcSl7VZnspirr64c/nqD5ojAUhgAwfMy0RJ5nUZ6P8ue7hqUE6GqmtSTEg5WrkfEWi2SwpZ4lj6XfA4b4TnJc6GmONfZo6gWA5Z5byph0Etl9gRBjZiqnqNzD+pKehOwX1Xmb0SLMou/YRtYDICEBIZgd4QmK3RVykdMZWGqCU2UcXv5q45vFuZSEmM2mUPJ8c+ixO3qUGeMXdHKJVSL3H6BLR55ndyq89tyG7zJ3fGGqzRTTJShzJbmZC0hc3P915/LJR0mnA1j0mVxzLrRmIbdEWJxF7EI9dE4HCVhv3fHKVC41yxdrfaVeaptW+r4/Vo0Or7cLsahAtWK3rPdHNqgVnRwMkVHCH0mTUPw85N0e5G6EnyUUgP2JjvZhogm0xa7Q9iS6r7KWgvkCAiNQG5LSnvJ4jVUtT5SwSU7dONNyomdG6///7zxzlIdAIhhd3pCSaGq5wsAPTvZDN7kbBLsELTi5UY0lY0Yui8e4tnMe2ktoSPgNBK6h9jeg8NzAGJzw1Rc271dGmOtnPBkygn7p1HOcp3mupAHat48dUsaNP4vpT/Z9Qfubi0IVoeU2Spm0DZmf7Wv/LCV9LfJ5mauXuHcid/Er0i585G9YwZL63jYCR8/Cfhas5vojRfL7BOR/x2arxmHm4Oq0jun93Xw5rdhsvW+Fimew5GLHL4fdPWWNZhojtOsUAzXXw4bBpYUSIU2tnbe71B3HISnvAwU7dkZ9ypvb+3d8up/P4/mDK5Tr0mkjmY8SMSrEvHWibRLu023i074jj51t5sQIavTgI/CfOs4udaZfqXjvXOQbzDiyHZ4JKjgpKB+v18eksDBvvkO1k/xD8MZ9TTKSRL1yTAOgwChAL7E0SiOg9EwSYckjtKNuDE2ikL/BkgpcAxw4YZTDUHQfuNyTbxthzoCVcPdq0z9WyDUj61XwgJieA2s94HXnSjJMsmJ2mlFD3Az/TGp8ddEH5xdO/oUf9QV4mG30s50sNYf9VIpxD9K/Cx4JZARR/1RwGh3FAdxN0rZsDtmZNAl42QQh4xT0MoJhfrjF2R7bwFNFwAA',
    },
})
Record({
    $id: Now.ID['cae6c91b47ddfe10f487c24fe16d4341'],
    table: 'sys_hub_action_instance_v2',
    data: {
        action_type: 'f9d01dd2c31332002841b63b12d3aea1',
        action_type_parent: 'baf174c8c3c232002841b63b12d3aee4',
        compiled_snapshot: 'f9d01dd2c31332002841b63b12d3aea1',
        flow: '2b4711ca47b0e210f487c24fe16d431e',
        order: '20',
        parent_ui_id: '50b02abb-044f-4038-a72a-3bb50059fc62',
        ui_id: '2df8057b-3744-476d-953a-2ecd5b809e97',
        values: 'H4sIAAAAAAAA/+1W227bOBD9FYHPtkHdbNlvRYIAAbotkCzyUrfCiBw5RClKJakkXsP/vqOLHSMNirTNPgRbv82NPHM4Z+RPOwbCq9pcGufBCLzeukvJVqyMZbaQS54ssgijkKchxJglMgnnMomXczZhqstLUPJwGc5FHMZxxHmUJWExj4swkjEghpRnoELKtChqK8m+A912jt3uzCJ4lHk4E621aPx+T3GpXKNhezOmkUfcKi0pzlafPk9YA5ZO9GjZavck9FJIGgrUlHp1wPQUo982nS1r0VaEK1cH5/ux8nyMBJfnFKGiDk7IJwwfPBqJBKQE7XDCKjASfG23bOVtSw5qWn40envMuFXGD41W8ODUP3Rzwru8EqkzMZJwNPORoMFdnoOHazpZ+NYe+aqVQDdwIrGEVvuzU9+Q8LHpXn4o8VDoQ3Wt28p8GBhhxwNO3qN1BAKbrs8O+dBWeX1b318dQF4o01MytqhrAfpogfdWFa3v4OwYauw5rqBplNnkja3vVF9MUKrZRpMxK3V9T3c6tTGzYWJnxCrMLsh/3rtvwKquib/oGCreT5jbujMNzj22Qhzm39oOydDY2ELes9BTkPeT0BULqxr/jq66wxH4fvK7ainSH42mWD5O4gmYR8U85KARTe7MpgUrFZjc4rcWnf9eNlfHwM+p5wUQD+r5u5+Z5yGPAvrO9/60NvgwBEb5pK8mn+wtyWds483r5z9TDY9+uNBPRrAXijtRDF3ocd1yHsvkS2e0brB264Ng1my1ZmcdLq1RrtlkPVT3fp5lZYYyDYtCZARxkS6TNI2TCJJCFAvo04kn+kC8MH//5b62X3NT0+sNUEalBqJutTSdL1r4oEByVI0mqcpAthj4OkBraxvsdikveARFMeVJUk4THmdTWEQwjYsi5TxdlmIezfJ86DfPZ6KWuN8H0/4+/IUDKnQONvjc5/kPw6/O8M8t7Beo47CwLxRq6Z6Ry2FbI9FBz5kP8nmyscdgcDMGj396Xm1th3Pe/97Q8v7f/Pf5/C+eHAMDKwwAAA==',
    },
})
Record({
    $id: Now.ID['f1e6c91b47ddfe10f487c24fe16d4306'],
    table: 'sys_hub_action_instance_v2',
    data: {
        action_type: '9d09f99587003300663ca1bb36cb0ba3',
        action_type_parent: 'b93f42810b30030085c083eb37673a63',
        compiled_snapshot: '9d09f99587003300663ca1bb36cb0ba3',
        flow: '2b4711ca47b0e210f487c24fe16d431e',
        order: '1',
        parent_ui_id: 'fcbc6bed-d3f7-48cb-adfd-70d08b824d6d',
        ui_id: 'c6bed67a-d77d-49c3-80d7-0d4020938b32',
        values: 'H4sIAAAAAAAA/+VYUW/iOBD+K1GeKZeQQKBvp1aVKvW20ra3L3sraxI7xTrjpLbTliL++43jBBDQlmipRHWPHo/tb2a+b+zk58KHzPBCXkttQGbsbq6vqX/uB6PJiE3CcZwEAzYIg2EIERvHNA5HNI4A/J7PrR+dBJN8MhmOkyCIoiAYjaIMwjSNRlkapBCjn4QZQ08DqWA4fAJR2fELAcGYJFo+VKAoB0k4ZdJwMyeiyMCiQnfKdSlg/qNZdd24eDdrl2zKBVVM+uc/f/X8EhQeaJjyzxdbU4ciFpAyga73DeStCMy8XA1JPedsN5vLvG9uolDUQgl6PnsxTFKGGHIQmvX8GUgKplDzlUUxoLdSrA1TLg3u6FvnF81f8dxxYP1yhlFlzM2thqTJljPnl2DgzqgqM5VqXLNpwTOmXT4oy6ES5mLT5hxuyzq39RIXtltdiGomv7l0+KsN2uKgpdIIgpU2UIu8CSO/mxbP31uUV1zWOWkmbbHFagTGKJ5WxuJZ+EywGW5EZlCWXD6QUhVPvF6MWGb9B4GDfi6KZzxU8wfZd2zuY16hf4X2y9r8AxS3UfyF2+BiBMQFMoS4EuqiUnUqn0gmKl1PKJDa7eUve76e6wsBWq8jx5STx8ridnloIiYuaXZJpnhp/sQtnlgT3LL322obvsvdyZqrWSEpt0fpDcm1+vqnwuV0sbhAvhlGSdjPKoWlMX3FHiumDckLtVzuqq/7Bh21+XF8rTYvNgPcF3Sj0h3bzb4NGpWGR1NpHARfSad4+OnJtLvwXAo+S30hfZeddE1EXShDXBE25Lerp84COQBCK5BbS2kvnb+FqtFHzpmg+26xKzuxdYsN/p+32EmqAwFR4qrHpeCyfpIg0JOTzfBdzqbhFkFrXq5FU9tAZ7viAc8U3mtnCR0Ap5XQHZ7t3Ts8eyC2N0zNte3bpTU2yomOppxocBzlLFZhrhK5J+ft89XSoPV/tf6w7Y/c3VgQLvcps9OZYdczB8td5UedpL9JNjdz+QbnjvzOfUPKvc/sHVNc2pxHnPDJM6cPzKxPb71oYZ5B/LtvvmEcaQtVh3dKb+bw3e+9dOPNzHMyw5LzEr8JFMuQVZqAYviWrSQlzdfAmoGWAjlX+Nh1zrsd6jtD4UmvQEV7Zsq82ttbeXe8+j+Oo63Bde61gTSnaQ8D8epAvFUg3cLu0u3iI76jj93troCLuhr4oVdulJMpVag3Ot4HhXyHEQe2wwNBhUcF9fv9cp8E9vbND7B+ib8GJ9TTMgZpPIBREoVhEIQBTYJxkoTjUZqPIInztbgJ0TLD/o2QcuQY4iItp1qCBLuNyzXxrh3qAFQtdy8Laf8hDBLjWVhIDK+F9THwphOlRSEYyK1WdI830x9XDf6G6MOTa0df4udbxe+3M+1Me3P9WS+Viv8t+WPFaoGMWTAYhzQ7GydhchbndHQ2oTA8g0k6TCLKsjg/5uPj1387hdewIBcAAA==',
    },
})
Record({
    $id: Now.ID['28e6091b47ddfe10f487c24fe16d4384'],
    table: 'sys_hub_flow_logic_instance_v2',
    data: {
        block: '1083119f4707f21051a3e84d416d4329',
        flow: 'd26fccce47fca21051a3e84d416d43d1',
        logic_definition: 'e9060aa2c3013010ace8b740ad40dd51',
        order: '0',
        ui_id: 'fcbc6bed-d3f7-48cb-adfd-70d08b824d6d',
        values: 'H4sIAAAAAAAA/6tWyi8tKSgtKQ7JdywuzkzPU7KKjtVRyswDiUHYZYlFmYlJOalQbkpqcmZxZn5eCEjME0ldSmVeYm5mMrJQeX5RdlpOfjlCrBYAD1ouqHEAAAA=',
    },
})
Record({
    $id: Now.ID['28e6091b47ddfe10f487c24fe16d438f'],
    table: 'sys_hub_flow_logic_instance_v2',
    data: {
        block: '95d0df5e3b5f4b14546a249693e45a4f',
        flow: 'd26fccce47fca21051a3e84d416d43d1',
        flow_variables_assigned: 'u_auto_provisioning,u_skip_manager_approval,u_skip_badging_office',
        logic_definition: '4f787d1e0f9b0010ecf0cc52ff767ea0',
        order: '4',
        parent_ui_id: 'fcbc6bed-d3f7-48cb-adfd-70d08b824d6d',
        ui_id: '9b6ff257-5323-47f6-84c1-9a1454f5670a',
        values: 'H4sIAAAAAAAA/+1ZUU/bMBD+K5Ofmy5N0iZhTwiEhMSGNDpeAEWX2GktXDvEDtCh/vedm6SltCCN0YmHvMVnn++7786feuoTUZUpKqPH6lBrPpHk4OqmR7i0Nvx+IrlQD2dqwrNTqQ3IjF3M9SklByTM4jAYxFEQBgy8gTscgM+igAaDEQ38ESV4jT1XJVAZlRSluueaK8nlBLckzNirm/cgKruLn5TrQsD8cm0poERfw0py8ESyKRe0ZC1sG897E9dggFcISJl4HzQzL+ymNuV6fdZcd9EaVUktPLdH2KNhkjLElYPQrEdmICkYVc5XlpIBPZdibZhyaepUZ/Co+W+MF7mua0/mDHPNGiJWy6QhqTbnx2AAoVSZqcrmaDZVPGO6ZomyHCphjp7b6gPnhcFEaxcDqWi9lahm8kdNC1ld8KwmlUYQrLCpWuxNIvnFVD38bFGecLlkpdkUKgOxWoFB7tLKWDxPpOLjFzTXli2imWAzjJjMoCjQUhdrGQVBz/oTgYu+7WBEZ7u7D5nNsI8lgP4J2o+X5ksouU33O16DzjbcL8nvKrZs9HzoZ/4wCpyR76VOEOYDJwqY57hpymKXAVAvIIse0XN9JEDrNVFYoeSusmnWtDUEJTXH1iUreWEOEdQ9umDNWGtb0rCjA9H8lhOGxKrLLzlNljkmfoKpZ0v3hNl3BZaApOGhefxX17tiXZObb2SxWPQ+RAT0LS+wThImrEyQZwyExDx7ba8daMXA3VaDZfP8syS4m5LwbqCNNKRKCQbyhTaMsUxfTxq8H64PwedVh7ZGjfl4dwX3JSDrYmwqyEY5/ouKYKNBHIVDxx8EoRMMPepELI+c2I8DN4TYxW7ck4rsbtj9KcnOeHtQkxToxNZL5Tm259YT3drev5KMtpXkb0F2KtKpyOsqElI3jiCOnSwF1wmAZU48csHxqO95EWRDCKN9qsiLdt2zhmxGaxXkxr7kmqRuROlGlG5E6UaUbkTpRpTux0U3onQjSjeidCrSjSifYERpLxlbpk7b/1PsxhyflxWWtelBlbeW9rVt8QfmYclDmRkAAA==',
    },
})
Record({
    $id: Now.ID['2ce6091b47ddfe10f487c24fe16d439f'],
    table: 'sys_hub_flow_logic_instance_v2',
    data: {
        block: '1c83119f4707f21051a3e84d416d434e',
        flow: 'd26fccce47fca21051a3e84d416d43d1',
        logic_definition: 'd176605ea76103004f27b0d2187901c7',
        order: '10',
        parent_ui_id: 'b512f089-a9d8-4d36-804f-bcc6ce659f44',
        ui_id: 'f0b42dba-d56a-4103-b8f6-a5a01818ef01',
        values: 'H4sIAAAAAAAA/6tWyi8tKSgtKQ7JdywuzkzPU7KKjtVRyswDiUHYZYlFmYlJOalQbkpqcmZxZn5eCEjME0ldSmVeYm5mMrJQeX5RdlpOfjlCrBYAD1ouqHEAAAA=',
    },
})
Record({
    $id: Now.ID['30e6091b47ddfe10f487c24fe16d43aa'],
    table: 'sys_hub_flow_logic_instance_v2',
    data: {
        block: '9483119f4707f21051a3e84d416d4354',
        flow: 'd26fccce47fca21051a3e84d416d43d1',
        logic_definition: 'd176605ea76103004f27b0d2187901c7',
        order: '14',
        parent_ui_id: '579039c0-2192-4964-8160-f47fae5f4509',
        ui_id: 'd5509cb4-c6ce-463d-a2f4-09d816bbe91f',
        values: 'H4sIAAAAAAAA/6tWyi8tKSgtKQ7JdywuzkzPU7KKjtVRyswDiUHYZYlFmYlJOalQbkpqcmZxZn5eCEjME0ldSmVeYm5mMrJQeX5RdlpOfjlCrBYAD1ouqHEAAAA=',
    },
})
Record({
    $id: Now.ID['34e6091b47ddfe10f487c24fe16d43b5'],
    table: 'sys_hub_flow_logic_instance_v2',
    data: {
        block: 'dc83119f4707f21051a3e84d416d435a',
        flow: 'd26fccce47fca21051a3e84d416d43d1',
        logic_definition: '35d60003e6022010a5e40cdd1254dd23',
        order: '19',
        ui_id: '50b02abb-044f-4038-a72a-3bb50059fc62',
        values: 'H4sIAAAAAAAA/+1Y32/jNgz+Vwajj2lm58clzVvRLkCHtQWWXF/mwpAtJtVNsXy2nLYX5H8fKctKnGTXoZf1YQtQBDYpkZ/IjxTdladKnZW6mKrLohDz1Bv98djyREoyfF55KVuAN/KiqNBMl0UUeS1vyWRJwlXoLSEvhEpDbxR6QdsPvVboFZALJsU3plEzVvmCaaP/dXJ/ZxYkapFJeLmPv0BCqhWJOFRPZ8myfjC7vrAla0uWztsTnYt0biycLY0u9NZrfFtAUbD5O/evdwFNkidYsMrGWKrna6DAQD4aX19eTW/u7ybTy+nnSQN36N2kGuaQ2/NxaJ/NBEgezVgCuqgWTwS5uWXZmIRm2yoMQ68U09cMfmMxSHod0U9tLySL+JMD45FK5atbofMSnPpJpNpo0lLK1saoWy127HGYsVLqyOTSrXJqllDyIshzlUcVRw47lg3UVxSOWrVgKWda5RvIMyaLjV7lvAJkdMHWvpdIQjrXT07Z8+l3jX+NdGNINzm14h8NvLV4rLgXTXP7YXcb3xnyWxuN90W98/2o+y7uFPjvVEP7TOOp3x102wpqLImKjDlqPm7NTvkdK0Gq6fqNumjG/tKk7KeJaY37iCLbV6KNj32AR6wS3ylL8TkVX0u44U45hC7E3Yv+eXJx4Z/32ICfx0POzv1hwAKWsHgAsUv2Grs8F0Um2evDqdmfmv2p2Z+a/anZ/4ebffIkJM8hNTO/4NjvUWhnf+pwW1N/czV+LRRJLjJN4Vmi3hyoFiI3kEx7Fm31/ohRXJKxHM1pyFHQPIBpCoaJyEjSbtEQndl2iz4PlCHqKWXYfLbBvQFnF30prqvbk9yiBeE8GqrLPSB1gGrNVRXzZgb0rjFDF28UtDx40ZBy4A6bY5qTEFPvkahOQNVSeUV6FeIb2u75tG4GeJDEnty9RnYgqLOlRAL3GcWvkmgWyzqVSpaL9K4CT6NEVWcPm3hayXVzxkBFWaAjyOgwhM5CnU2e1PPvNZKxSM25rVKqhEn3xjQ24bjUUFSJQfzR15IWVH6t6aiCTeR8gy3VHfGBZClqhw2uOBi7VLl1xbRXXXrHoOVL54h88f93jHncSUx1ndWJ8WeDDuuzTj8Ouh0/8ONPATB86A6GQTLoXWwl7hcikr1PNtlr/KfFJlDVLuqCp6gfKYXDj0vhcTNly3Q7PM3CdYnZnjBQ3pwtUA8SFpTgBcsyLJQoy9VSGBT0sdCeS3xpz3AeQvQ0ELWrTtDGaLP2Zk56YPgpFJspKMPN/6D3HOoU1JEsUEjJHN+6JoP97zLTf3Zbyt9djbvcneLmn8fktuYv5wM/GA6SpPsJiL/9fr8bD3o+4z2fc55s8XcDbw+v5W2slASW/jvE/Zi7amaDc7j91NoPv7UOMueRiFJxsKiSzSER9Mk+JdlN/V9dUrxizkSyLXpW+Z9E8o1s/RfQLDk/HxYAAA==',
    },
})
Record({
    $id: Now.ID['60e6091b47ddfe10f487c24fe16d43a3'],
    table: 'sys_hub_flow_logic_instance_v2',
    data: {
        block: 'd483119f4707f21051a3e84d416d4350',
        flow: 'd26fccce47fca21051a3e84d416d43d1',
        logic_definition: 'af4e1945c3e232002841b63b12d3ae3e',
        order: '11',
        parent_ui_id: 'fcbc6bed-d3f7-48cb-adfd-70d08b824d6d',
        ui_id: '2377742b-c812-4404-9b7d-21d595697ebf',
        values: 'H4sIAAAAAAAA/+1UXWvbMBT9K0HPxvijCWve0pXCYFtgLX3ZipElORGVJU2Sk2Yh/333WnYb1oSVsse9WedenXvO1cF7Yrpgu+DvzMJ7udJk/v0hIVIjBt97omkryJwwo7kM0uiqBxKyoarDwu2jtJOr5WRhrTMAQolLbxXd3Z/vYGupuBPDNEsdcAbhyHz/RynsrKgUrYVCouCkXsF1yeHUZLTJL1nOymJWFllWfLjI61lZ5wUvqaAl9I0XP47iJ597JDnrCucB7sdJxnGUlWcJEU9BaC5gdEOVFwlpqeY0GLd7RpygfKnVC7CWOgAdweYnL38BdzGdYmMjwCMTsfh8rIbVRZitjWRiaVFgRAKt1XCHGdW1+mv0gUsXDe1UGJcOSOeBT1gUjSoGSc3t2my/jQNvpO4NDkVlGLzPeKIB1lB3QXh8GKFEC0RVS62F5VT4mLK/DFradKXgkDbKbGEoJimlDIWnsCOa3gB+3cP31El08QVo4HKUWVMvWdWnDuiCAwuHfi3Vzw4FRYODlSpuAxo8c9KGBczZiEH1IXkd2aO07ve9ws0gIu0qD+mE+XyFnkzTwMYPhx9dlpW8J3yd53dx/IvEX9JpM82z6enEX8xOJf5E1s/HvPhLzPFh3pjyLMv+x/w45tJXMa6DtxiM96b8ASMdJ/iYGy6Y9CDkDrFP4/8bCzsIgGTH0Na4R7Twgh1+A6nLyrkJBgAA',
    },
})
Record({
    $id: Now.ID['6ce6091b47ddfe10f487c24fe16d4397'],
    table: 'sys_hub_flow_logic_instance_v2',
    data: {
        block: '9883119f4707f21051a3e84d416d434a',
        flow: 'd26fccce47fca21051a3e84d416d43d1',
        logic_definition: 'af4e1945c3e232002841b63b12d3ae3e',
        order: '7',
        parent_ui_id: 'fcbc6bed-d3f7-48cb-adfd-70d08b824d6d',
        ui_id: 'a3c76d8f-1c6c-4c09-86ae-1ecb3152e9d5',
        values: 'H4sIAAAAAAAA/+2UX2vbMBTFv0rwszH+04Q1b6WjMNhWWEtftiKupetEVJY8SU6ahXz3XVl2G9aUjrLHvcXnSveec/Uj+8T0vuu9uzUXzsmVTpbf79NE6qDR732iocVkmXCjhfTSaDYIabIB1YfCzYPsZi1oWKGdQddZQxWqC+k6Bbu7N47xtVTC4ji3A0vdPdpkuf+j5HcdMgU1qtDNW6lXdF0K+mpyaIpzXvCqXFRlnpcfzop6UdVFKSpAqOjcdPFyijH7PCjpq/nCPNLdNMlYEWwVeZrgo0ctkEY3oBymCeUS4I3dPSkWQVxr9SyspfbULgmHH538Rb3L+TwcbJAycozFp0827i/KfG0kx+suGIyKh1qNd7hRfau/xhxh89hAr/y0eVJ6R/2wC6aDi9FSc7M222/TwCuph4BjURlO7zN9gac11L1HFx4GFbbUiLX0jrQcFh5TDpfJS5utFH1kjTJbGhqYyoAH4xntCLIr0j8O8h1YGVJ8oTZ0OdqswUnOBv6onbcU4TCshf3sg6EYcIzC4jbogONWdv6C5mxwdH1IX8J7xO1+PzjcjCaynjlClI2IsgnRw+FHn+eVGFq+xPqdXf4F9ecwb+ZFPj9N/dniFPUneH8d9fIN1MPj/CXpeZ7/R/0YdelYRHbMFsF4L+n3Aes4wUVuBHLpyMht0D5N/+ahsCMAJD+WtsY+hAjP2uE3DJJdMRcGAAA=',
    },
})
Record({
    $id: Now.ID['74e6091b47ddfe10f487c24fe16d43a7'],
    table: 'sys_hub_flow_logic_instance_v2',
    data: {
        block: '5c83119f4707f21051a3e84d416d4352',
        comment: 'If Request not approved end flow',
        flow: 'd26fccce47fca21051a3e84d416d43d1',
        logic_definition: 'af4e1945c3e232002841b63b12d3ae3e',
        order: '13',
        parent_ui_id: '2377742b-c812-4404-9b7d-21d595697ebf',
        ui_id: '579039c0-2192-4964-8160-f47fae5f4509',
        values: 'H4sIAAAAAAAA/+1Uy27bMBD8lUBnWdDDcmzf3BYBCrQ10AS5NIGwfMgmSpEqSdlxBf97l3o4RuOgRdtjb+IsOTuzHKoNdOPqxtk7vbJWbFSw/PIYBkJ5DL/bQEHFg2VAtWLCCa2KDgiDHcjGF96sr1Z1bfSOM0SZsLWEw/3FIt0KyQwfetRgkMlxEyzbn0ruUPNCAuESOW6dEWqDxwXDVRlDmSxoQrN0lqVxnM6nCZllJElZBhwy3DcefDtKvvrQIeGrXnw/xO3YSRvmZSVxGPAnxxVD+csSpOVhUIFi4LQ5nBDDga2VfAa2QjmkC/zmJyu+I3ea535jydEj5X3xtCyGqfUw3WpB+br2AnvEAZHDGaplU6lPvQ8/b15CI904b0Qai3y89qK9ikFSebvV+89jwxuhOoNDUWoK8rQCh2MgjePWXwyXvEKiooK6xuEU/jJFdxi1VNFG4iIqpd5jU5+fCKgXHuGMILpB/F0H34MR3sVHpMHDvUwCVtCiyxrSOYMWjt1Yim+NF9QbHKwU/TRwg6VG1G6FfXZ8UH0MXwb1LKNtS2azNJ+zbELplEymiymdkLxMJtk1ya8TQtMknkcwRPV4fGjiOGMd9ctQ/yXbv3gFC8jLPInzy69gOrv0Ci7k//Xop7+Ivr+s30x+HMf/o38efWGLPsKDtz4Yf5r8Rx/zvoPtc8M4FRaF3Hns/fgn94UDBkDQc2ivzVdv4Rk7/gC/wiMTEwYAAA==',
    },
})
Record({
    $id: Now.ID['74e6091b47ddfe10f487c24fe16d43ad'],
    table: 'sys_hub_flow_logic_instance_v2',
    data: {
        block: '5083119f4707f21051a3e84d416d4356',
        flow: 'd26fccce47fca21051a3e84d416d43d1',
        logic_definition: 'af4e1945c3e232002841b63b12d3ae3e',
        order: '15',
        parent_ui_id: 'fcbc6bed-d3f7-48cb-adfd-70d08b824d6d',
        ui_id: 'ed703c57-ef29-4e3e-b892-73527870955f',
        values: 'H4sIAAAAAAAA/+2Uy27bMBBFfyXgWhD0iI3GuyBFgAJtUzRBNm0gjEjKJkqRKh92XMP/3iEpOUbj9IUuuzPvkDP3jg68I9q7wTt7py+tFUtFFp8eMiJU0PD3jijoOVkQqhUTTmjVRCEja5A+FC6902cfjF4Li1Whllhjwg4Stvc/uUJXQjLDx3kDGOzquCGL3Q8ltx14I6HlEjvdOpOeC4anroCuvKAlrat5XRVF9eq8bOd1W1asBg413pseXk32z95GJXsxV5iHup0macOCrbLICH90XDGOozuQlmekB8XAabM9KIYDu1HySVgJ5bAdCZcfrfiGvavZLFzsOGakPBUPx2bcXZLpSgvKb4ZgMCkOWjm+oVr6Xr1POcLWeQdeumnrqHiL/fgQTAcXo6XudqU3H6eB10LFgGNRagrycAKHa2i94zZ8GC55j42aHoYBl9MM4ZPGx+ilz5cSD3kn9QaHBpZyoMF4jjuC/Br111G+ByNCinfYBh8nmy1YQZvIHbZzBiPs41qarz4YSgHHKE3aBl6w1IjBXeKcNR9d77Pn0B7xuttFh+vRRO4bQDxTlhHP/f6zL4qaRRfPaP7zBv+C9QuYdbOymJ1m/Xx+ivUTlL8MePULwEOW3+S7KIr/gB8DLmyTQB2zxeF/zfdDgDlNsIkbxmlE7y5ob6b/7lDYIgCCHksbbb6ECE/a/jvxx+PTBQYAAA==',
    },
})
Record({
    $id: Now.ID['a8e6091b47ddfe10f487c24fe16d438a'],
    table: 'sys_hub_flow_logic_instance_v2',
    data: {
        block: '91d0df5e3b5f4b14546a249693e45a4a',
        flow: 'd26fccce47fca21051a3e84d416d43d1',
        flow_variables_assigned: 'mc_decision_table,u_employee_type,u_location',
        logic_definition: '4f787d1e0f9b0010ecf0cc52ff767ea0',
        order: '2',
        parent_ui_id: 'fcbc6bed-d3f7-48cb-adfd-70d08b824d6d',
        ui_id: '08b22acf-ef7c-4340-a950-79995876602e',
        values: 'H4sIAAAAAAAA/+1YXW/aMBT9L34mUUJCPvrW0VZC6odUur5MVeTYN2DNJGnstGWI/75rkgAbGlW1apravOFz7etzj++BK1akqHVZa3VXnColZjk5+fYwICI3GH5ekUwWz5fFTLBJrjTNGUyXasLJCWEpd0Pf9f3QATp0nZFLPYh87rsB973YJ5jG7FuwhAMTShR5omkqAQM5XcAfQk9U1iZ2NbbOzseT6eTm2ro7/XJ5jjEuVCnp8v7IlpJWmFtDRU5WhM2F5BV0RRk2fniM9cjDFJKmIN9OXC9LE1K6EvmsXV+2qaYdWFTcUHMGBF405ByQU0alggFZ0JxTXVTLLVIB5Te53AFzkWvMRszmFyV+4H2R4zhmZwZYJ4Mmul0mrWINnJ1RTZFKzXRdtVvZvBAMVKMQh4zWUo/3sWbDTamx1uZIU3BzupD1Ir9uRCHbBN0DIVIrJAGlKdVwbwvJpvPi+bZjeSHyjSptUBaMyu2KatQurbXhsyK1uPtN5gY5EBokLPDGZEHLEpGkrIonsbkFSS/smcSFbXob2Zm+tykzFdr4BNS+QPxsA9/TSphyrzANHjbXfc3FYw0bC0RB5DGWelZEg8jyaRZaURCCRd0RY5njhhxcsh4QtVRjSZXaCYUvlDzWpsxGtlagpNHYHGGVKPUpknqCVov14B3cWCewKGWxBEg2Dbtt6cNA58TVaoydqIEnrs3qCp9M2xWgBkonWVHZZruNJSaCr9eHLn3r8dcc7GXBKIxd5of+EA4q9YM9B7+h2N69n869I/DDNKWRNXTD2PLjOLbQObHlZl7mZBkfef+he428m8fc6+U9bOdZFqTAg5BaPAw5VsfwW8rhoeVw3xk6sRel3tC+BYY9bXcJjrr4bxO+6uv0mK9d+MXXr8jQu/nzuTkaOiNwMitITXt6vmtRD3+Q0wD9E7g8dr3oHd38YLzW8Onn5H5O7r3Zz8n9nNy79yO6t5+T+zm5d/OHcfM/n5O7CfDOkJp0/yybwBJ70ph8Bz0X1XdT4Q5b/wQsxFfFoxYAAA==',
    },
})
Record({
    $id: Now.ID['ace6091b47ddfe10f487c24fe16d439c'],
    table: 'sys_hub_flow_logic_instance_v2',
    data: {
        block: '1083119f4707f21051a3e84d416d434d',
        comment: 'If Request not Approved end flow',
        flow: 'd26fccce47fca21051a3e84d416d43d1',
        logic_definition: 'af4e1945c3e232002841b63b12d3ae3e',
        order: '9',
        parent_ui_id: 'a3c76d8f-1c6c-4c09-86ae-1ecb3152e9d5',
        ui_id: 'b512f089-a9d8-4d36-804f-bcc6ce659f44',
        values: 'H4sIAAAAAAAA/+1UXWvbMBT9K8XPjpHtOCR5CxuFwbrCWvqyFXMtyYmYLHmSnDYL+e+7suw0tAkb2x73Zp37dc7VkfeR7lzbOXuvV9aKtYqWXx7jSCiP4fc+UtDwaBlRrZhwQquyB+JoC7LzgRtQsObmatW2Rm85wxATtpWwe7icQTdCMsOHaS0Y7Om4iZb7VyG3a3kpoeISG905I9QaywXDU02gThc0pXk2yzNCsvk0rWZ5lWYsBw455o2F70byVx97JL6oys9D3I6TtGGeVkriiD87rhjSX9YgLY+jBhQDp83uiBgO7FbJF2AjlMN2kU9+tuIH9s6KwifWHDVSHoLHYzmsLsB0owXlt60nGBAHlRxqqJZdoz4FHX7pvIZOunHpiHQW+/HWk/YsBkr13UY/fR4HXgvVCxyCUlOQxxM4XEPVOW79xXDJG2xUNtC2uJzSX6boi5FLk6wlHpJa6icc6p2UAPXEE9wRJNeIv+/hBzDCq7jBNlgcaFZgBS1712E7Z1DCoV9L+b3zhILAQUoZtoEJlhrRuhXO2fKB9SF+a9kTt+7388WMLQitJrO0mk+m6IfJvKjYJCd0QbKUwzTNEhisejh87QjJWd/6rbP/stu/eAULKOoiJcX5VzCdnXsFZ/x/2frZL6zvL+s3nU8I+W/9U+sLWwYLD9qCMf7U+Y/e5mGCDb5hnAqLRO499mH8p/vADg0g6Cn0pM03L+EFO/wEgzPOUR0GAAA=',
    },
})
Record({
    $id: Now.ID['b0e6091b47ddfe10f487c24fe16d43b1'],
    table: 'sys_hub_flow_logic_instance_v2',
    data: {
        block: '1883119f4707f21051a3e84d416d4358',
        flow: 'd26fccce47fca21051a3e84d416d43d1',
        logic_definition: 'd176605ea76103004f27b0d2187901c7',
        order: '17',
        parent_ui_id: 'ed703c57-ef29-4e3e-b892-73527870955f',
        ui_id: '90dc6d2a-be75-4c30-805a-9abe0e798819',
        values: 'H4sIAAAAAAAA/6tWyi8tKSgtKQ7JdywuzkzPU7KKjtVRyswDiUHYZYlFmYlJOalQbkpqcmZxZn5eCEjME0ldSmVeYm5mMrJQeX5RdlpOfjlCrBYAD1ouqHEAAAA=',
    },
})
Record({
    $id: Now.ID['e0e6091b47ddfe10f487c24fe16d4394'],
    table: 'sys_hub_flow_logic_instance_v2',
    data: {
        block: '5dd0df5e3b5f4b14546a249693e45a52',
        flow: 'd26fccce47fca21051a3e84d416d43d1',
        flow_variables_assigned: 'u_asset_subtype,u_sub_system,mc_system',
        logic_definition: '4f787d1e0f9b0010ecf0cc52ff767ea0',
        order: '6',
        parent_ui_id: 'fcbc6bed-d3f7-48cb-adfd-70d08b824d6d',
        ui_id: '871e54c8-fa6b-495f-bc0e-bc8ac615bc5b',
        values: 'H4sIAAAAAAAA/+1YXU/bMBT9L35Oonw4TdI3BEJC2oYEjJcJRTe2Q605HyQO0FX977tukrZM3QaDTZrIU+Nr+/jc43vkq65I1em60+1VddS28rYk8y83FpGlieH3ikhO5sSnSUS9JKYRFeB7buhBIGLKqTfjNHAzYpESCoEruxTaVui07TK9rAVO3IPqzMxqFcQxzxMAm2aJsCnLEzsJwplNPZaFFLgXwcy5EKxquFMwA5EaDIdVXKzXCMVlWytYXr8dIltIxRsxpF1Dg1lo0ZD56oep58qgIBPqoA4/FWjzMyetbmR5O4w/DDCXYxAzMLRci4hHLUoukE8OqhUWKaDkoKtmuY00Avh5qXaBhSw1ohGz+LGV3/C82HVdszIXmCMT/ex2mA5S9+H8BDQglY7prhmWskUlmWh7dbjIoVP6eD/WLzivtazKfouGTI27K9UV5adeErIFGG8WI12LJERtUjXch0Tyy0X1cDGyPJXlRpVhUlUM1HYEGrXLOm34rEgnrw7JKpQoED8toK4xktZNdS83mEixcG4VDpxcVQ/IxdjDAWbycVBwcE4xfrIJX0MjTXIfEQY3W8Nx+7fayc+lvOvEmSkkSuMcEiZsls+oTSlENsQx2IFIvCCDLAhEQNYWaZftscJ62QmFN5TedSbNXrZBoLTX2Gxhjaz1EdK8F4MWa2u0cfzL+n1SpcYreLwWxR97uN/+eufu4bzQr7/Pd+fXJwkflmFy6rtzahgFPOBuaAe+j07llNto3chOsiBzKQ+xsPK/4NQo4ZTxMKIR57nw3JzGEfMpfm4ql+5K1Dxrr7MpIpT5iPJ2j+0hzJfZ9xkijPbdV+GAMJNx351xo1kCLGAz2/X8xDyxmZ0BT2zu+1kWRTwMePyGxr0x7usZTn3z1DdPpp765qlvnp7fd+vUqW+e+ubJuP+hcf9938wFky0yvzI0z8Z/ns3EEktSsv3QQ9V8NTnvYuvvkHowccMWAAA=',
    },
})
Record({
    $id: Now.ID['06e6c91b47ddfe10f487c24fe16d4322'],
    table: 'sys_hub_flow_logic_instance_v2',
    data: {
        block: 'd483119f4707f21051a3e84d416d4350',
        flow: '2b4711ca47b0e210f487c24fe16d431e',
        logic_definition: 'af4e1945c3e232002841b63b12d3ae3e',
        order: '11',
        parent_ui_id: 'fcbc6bed-d3f7-48cb-adfd-70d08b824d6d',
        ui_id: '2377742b-c812-4404-9b7d-21d595697ebf',
        values: 'H4sIAAAAAAAA/+1Vy27bMBD8FYNnQZCs2Gh8cx0EKJDWQB3k0gYCRVI2EYpk+bDjCv73LkXJNhoHbdoeexNnl7szyx2oRco77Z29V3Nr+Vqi2ZfHBHEZMPhukcQNQzNElKTccSXLDkjQFgsfAqsnrkfvl6O51kYBCCHKrRZ4//B6BtlwQQ3ru2lsoKZjBs3an0KcQoE6w3V+TXJSjKfFOMvG767yalpU+ZgWmOECCgpcMQGpi4Hm6K5Dklf5u70OuHWGy3V/vuurrAZQGRpY5VmC2LNjkjLgU2NhWYIaLCl2yuyPiGGYLqU4ARsuHZRDIfnZ8u/QcDyZhMSagUTCYvB4LPvJRbi+wQ4DFU+cN30q2ShOmI3DoazGXrjFORYTljpIjVccrsRwWwnfyE9xIuhYYHgoQLwFEkwHpYF6r6NebdTu88DylstuKn1QKAJvOpywg9lV3gU+LWKCNVCobLDWMNEyLADvLgOXJl0LOKS1UDtoGrYvxSQQT2GwOL0F/KaDH7DhQcVHKAOXI80KW07KblOhHIyJoUOC7N4uBLb2JBKmW37zgWKU3Isr43zCFWK4dnPovGW9jkPycvHPdr5tO87bnlbqSws7DozoOqhUdQ1vcDh89VlW0K7gS1f8UY23+eYaT+pJnk0u++Zqesk3FxzzRrOMf2GW8FK/6ZUsy/6b5a/Nwm0ZV7zXFpfp33nlMRgj9jzOmnAL1O4D9mH4l4TAHpaLk3Nop8xTEHXCDj8AJVwQoZUGAAA=',
    },
})
Record({
    $id: Now.ID['0ae6c91b47ddfe10f487c24fe16d4326'],
    table: 'sys_hub_flow_logic_instance_v2',
    data: {
        block: '5c83119f4707f21051a3e84d416d4352',
        comment: 'If Request not approved end flow',
        flow: '2b4711ca47b0e210f487c24fe16d431e',
        logic_definition: 'af4e1945c3e232002841b63b12d3ae3e',
        order: '13',
        parent_ui_id: '2377742b-c812-4404-9b7d-21d595697ebf',
        ui_id: '579039c0-2192-4964-8160-f47fae5f4509',
        values: 'H4sIAAAAAAAA/+1VXW/aMBT9K5WfQ5QPQoE3RlVpUjekterLWkU3tgPWnDizHSiL+O+7zgeglWmruse94XN9r885uUc0RNW2qq15UAtjxLok86/PHhGlw/B3Q0ooOJkTqkomrFBl2gIe2YKsXeHD6mpRVVptOUOUCVNJ2D9eLNKNkEzz/o0KNE6yXJN580tJMOzNA8jDGQ1pHE3iKAii6TjMJnEWRiwGDjEOlJBxiVeXA7mruxbxfsva7iuHG6tFue7Pd/2U+wFUmjlWYeAR/mJ5yZD9PAdpuEcKKBlYpfdHRHNgq1KegI0oLY4j7vKLET/wwShJ3MWco0TKu+LxmPamdXB+AxaQSk1trfurdKME5aYzh/EcammX51h3YVU5qV2LhUwO3UrWRfm5c4QcBwzfCJHaIAleOaWOeq8jv9+o3ZeB5a0oW1f6olQU5PEEFr3Lauv4NIRLXuCgtICqQkdTtwCibUYuhb+WePBzqXb4qNs5H6gj7qOx4N8iftPCj6CFU/EJx2BzRzMDI2ja7ieOQ5s4OXjE7M1SgjEnkehu+r12FDvJvbi088e1UC0qu8CXt7zXcfBer/vZpjdNNplEyZTFI0rH2Wg8G9NRluThKL7Okuswo1EYTH3oF/5weKqDIGbt6NfReOe0t2VpBkmehEFyOUvjyaUsXUjRGwMU/SFA7uv9ZX6CIPgfoHcHSJi0W/teW7dM/y4/zy4s3ZtHr6kwSO3BYR+HfxVX2ONyCXoO7ZT+5kSdsMNPkHfxKZ8GAAA=',
    },
})
Record({
    $id: Now.ID['0ee6c91b47ddfe10f487c24fe16d430f'],
    table: 'sys_hub_flow_logic_instance_v2',
    data: {
        block: '5c83119f4707f21051a3e84d416d4346',
        flow: '2b4711ca47b0e210f487c24fe16d431e',
        flow_variables_assigned: 'u_auto_provisioning,u_skip_manager_approval,u_skip_badging_office',
        logic_definition: '4f787d1e0f9b0010ecf0cc52ff767ea0',
        order: '4',
        parent_ui_id: 'fcbc6bed-d3f7-48cb-adfd-70d08b824d6d',
        ui_id: '9b6ff257-5323-47f6-84c1-9a1454f5670a',
        values: 'H4sIAAAAAAAA/+1ZUU/bMBD+K5Ofmy5N0iZhTwiEhMSGNDpeAEWX2GktXDvEDtCh/vedm6SltCCN0YmHvMVnn++7786feuoTUZUpKqPH6lBrPpHk4OqmR7i0Nvx+IrlQD2dqwrNTqQ3IjF3M9SklByTM4jAYxFEQBgy8gTscgM+igAaDEQ38ESV4jT1XJVAZlRSluueaK8nlBLckzNirm/cgKruLn5TrQsD8cm0poERfw0py8ESyKRe0ZC1sG897E9dggFcISJl4HzQzL+ymNuV6fdZcd9EaVUktPLdH2KNhkjLElYPQrEdmICkYVc5XlpIBPZdibZhyaepUZ/Co+W+MF7mua0/mDHPNGiJWy6QhqTbnx2AAoVSZqcrmaDZVPGO6ZomyHCphjp7b6gPnhcFEaxcDqWi9lahm8kdNC1ld8KwmlUYQrLCpWuxNIvnFVD38bFGecLlkpdkUKgOxWoFB7tLKWDxPpOLjFzTXli2imWAzjJjMoCjQUhdrGQVBz/oTgYu+7WBEZ7u7D5nNsI8lgP4J2o+X5ksouU33O16DzjbcL8nvKrZs9HzoZ/4wCpyR76VOEOYDJwqY57hpymKXAVAvIIse0XN9JEDrNVFYoeSusmnWtDUEJTXH1iUreWEOEdQ9umDNWGtb0rCjA9H8lhOGxKrLLzlNljkmfoKpZ0v3hNl3BZaApOGhefxX17tiXZObb2SxWPQ+RAT0LS+wThImrEyQZwyExDx7ba8daMXA3VaDZfP8syS4m5LwbqCNNKRKCQbyhTaMsUxfTxq8H64PwedVh7ZGjfl4dwX3JSDrYmwqyEY5/ouKYKNBHIVDxx8EoRMMPepELI+c2I8DN4TYxW7ck4rsbtj9KcnOeHtQkxToxNZL5Tm259YT3drev5KMtpXkb0F2KtKpyOsqElI3jiCOnSwF1wmAZU48csHxqO95EWRDCKN9qsiLdt2zhmxGaxXkxr7kmqRuROlGlG5E6UaUbkTpRpTux0U3onQjSjeidCrSjSifYERpLxlbpk7b/1PsxhyflxWWtelBlbeW9rVt8QfmYclDmRkAAA==',
    },
})
Record({
    $id: Now.ID['0ee6c91b47ddfe10f487c24fe16d433c'],
    table: 'sys_hub_flow_logic_instance_v2',
    data: {
        block: '1883119f4707f21051a3e84d416d4358',
        flow: '2b4711ca47b0e210f487c24fe16d431e',
        logic_definition: 'd176605ea76103004f27b0d2187901c7',
        order: '17',
        parent_ui_id: 'ed703c57-ef29-4e3e-b892-73527870955f',
        ui_id: '90dc6d2a-be75-4c30-805a-9abe0e798819',
        values: 'H4sIAAAAAAAA/6tWyi8tKSgtKQ7JdywuzkzPU7KKjtVRyswDiUHYZYlFmYlJOalQbkpqcmZxZn5eCEjME0ldSmVeYm5mMrJQeX5RdlpOfjlCrBYAD1ouqHEAAAA=',
    },
})
Record({
    $id: Now.ID['42e6c91b47ddfe10f487c24fe16d431c'],
    table: 'sys_hub_flow_logic_instance_v2',
    data: {
        block: '1083119f4707f21051a3e84d416d434d',
        comment: 'If Request not Approved end flow',
        flow: '2b4711ca47b0e210f487c24fe16d431e',
        logic_definition: 'af4e1945c3e232002841b63b12d3ae3e',
        order: '9',
        parent_ui_id: 'a3c76d8f-1c6c-4c09-86ae-1ecb3152e9d5',
        ui_id: 'b512f089-a9d8-4d36-804f-bcc6ce659f44',
        values: 'H4sIAAAAAAAA/+1VXWvbMBT9K0XPjpHtOCR5CymFQbvCWvqyFXMtyYmYInmSnDQL+e+7sp0P1pStdI97i869Ojr3+B6yI6bxdePdo5k5JxeaTL8+R0TqgOHvHdGwEmRKmNFceml00QIRWYNqQuEONCyEvZrVtTVrwbHEpasVbJ/e7mBLqbgV/Ws1WOT0wpLp7reS5EhQUaiSCUtYlo6ylNJ0PEzKUVYmKc9AQIaECkqhsHV+kHl12yLRm/r9tg6481bqRX++7VkeDqCxPKhKaETEixeao/ppBcqJiKxAc/DGbo+IFcDvtToBS6k90pHQ/OLkT3wwzfPQWAkckYmueDwWvXMdXF2DB5TSMN/YvpUtjWTCdeZwUUGj/Pwc6xru6zBqd8VDqQ63jWpW+nPnCDkSHD4UIo1DEaIOkwbp/RzVw9JsvhxU3kjdutIXlWGgjifw6F3Z+KBnR4QSKyQqVlDX6GgRFkC2l1HLKl4oPMSVMht8NGxfDCwIj9FYiG8Qv27hJ7AyTHGHNHi5k1mCk6xoNxXp0CZB9hFxWzdX4NxpSHS3+NEEid3I/XBF50+4wqys/QxfXot+jn30evHPdn63G09GfEJZORgl5XgwxL0ZjPOSDzLKJjRNBAyTNIZ+4ff7bw2lGW+pX+fjg2zvy9IE8ipPaH45S8PRpSxdSNE7A5T+IUDh6/1lfiil/wP04QBJV3Rr38/WLdO/y89zCEv35tFrJh1KewzYp8P/SyhscbkkO4c2xn4PQ52w/S/P384gqQYAAA==',
    },
})
Record({
    $id: Now.ID['4ee6c91b47ddfe10f487c24fe16d4317'],
    table: 'sys_hub_flow_logic_instance_v2',
    data: {
        block: '9883119f4707f21051a3e84d416d434a',
        flow: '2b4711ca47b0e210f487c24fe16d431e',
        logic_definition: 'af4e1945c3e232002841b63b12d3ae3e',
        order: '7',
        parent_ui_id: 'fcbc6bed-d3f7-48cb-adfd-70d08b824d6d',
        ui_id: 'a3c76d8f-1c6c-4c09-86ae-1ecb3152e9d5',
        values: 'H4sIAAAAAAAA/+1Vy27bMBD8FYNnQdAjNhrfAgcBCqQNUAe5tIGwoiibCCWqfNhxBf97lyJlG4mLNG2PvYmzy92Z5Q7UE2lNZ42+l1da81VL5l8fI8Jbh+F3T1poGJkTKtuKGy7bYgAisgFhXWD5xLtJAy2smJpA1ymJEYxXXHcCdg9vpNE1F5VioW8HCqsbpsi8fxHiFVapE6jTS5rSPJvlWZJkHy7ScpaXaVblwCDHggJKJjB1MRKe3A5I9EslZtc5XBvF21U434YqyxGUqnKs0iQi7NmwtmLIpwahWURQVgVGqt0BUQyqu1YcgTVvDZYjLvlZ8x/YMJtOXWLNUCJlPng4FmF8Hq6vwQBSsdRYFVLpWnLKtB9OxWqwwixOMZ9w1zmp/oqBUoy3pbBN+9lPhBwKjK+FiNVIgnVOqaMedNTLtdx+GVne8HaYSggKSfFNxxMYnF1pjePTEyZYg4WKBt8eJ1q4BeDDZeTSxCuBh7gWcotN3R7GQB3xGAcL8Q3i1wP8AIo7FZ+wDF72NEvQnBbDzmI5HBMj+4jonV4I0PooEqdbfLeOopccxBV+Pu4KVbwzV9h5w4KOffTaAifb3/cD502gFdtC46IXYdGLcdH3+282SfJqKPnaHH9Y5X3euYRpPU2T6XnvXMzOeeeMa95pmOwNw7jX+k2/JEny3zB/bRiuC7/mQZtfpn/nl0dnDt/zMGvKNVK7d9jH8c/iAjtcLk5Poa1UT07UEdv/BPiECRCjBgAA',
    },
})
Record({
    $id: Now.ID['71e6c91b47ddfe10f487c24fe16d4305'],
    table: 'sys_hub_flow_logic_instance_v2',
    data: {
        block: '1083119f4707f21051a3e84d416d4329',
        flow: '2b4711ca47b0e210f487c24fe16d431e',
        logic_definition: 'e9060aa2c3013010ace8b740ad40dd51',
        order: '0',
        ui_id: 'fcbc6bed-d3f7-48cb-adfd-70d08b824d6d',
        values: 'H4sIAAAAAAAA/6tWyi8tKSgtKQ7JdywuzkzPU7KKjtVRyswDiUHYZYlFmYlJOalQbkpqcmZxZn5eCEjME0ldSmVeYm5mMrJQeX5RdlpOfjlCrBYAD1ouqHEAAAA=',
    },
})
Record({
    $id: Now.ID['8ae6c91b47ddfe10f487c24fe16d4335'],
    table: 'sys_hub_flow_logic_instance_v2',
    data: {
        block: '9483119f4707f21051a3e84d416d4354',
        flow: '2b4711ca47b0e210f487c24fe16d431e',
        logic_definition: 'd176605ea76103004f27b0d2187901c7',
        order: '14',
        parent_ui_id: '579039c0-2192-4964-8160-f47fae5f4509',
        ui_id: 'd5509cb4-c6ce-463d-a2f4-09d816bbe91f',
        values: 'H4sIAAAAAAAA/6tWyi8tKSgtKQ7JdywuzkzPU7KKjtVRyswDiUHYZYlFmYlJOalQbkpqcmZxZn5eCEjME0ldSmVeYm5mMrJQeX5RdlpOfjlCrBYAD1ouqHEAAAA=',
    },
})
Record({
    $id: Now.ID['8ee6c91b47ddfe10f487c24fe16d430a'],
    table: 'sys_hub_flow_logic_instance_v2',
    data: {
        block: '1c83119f4707f21051a3e84d416d432b',
        flow: '2b4711ca47b0e210f487c24fe16d431e',
        flow_variables_assigned: 'mc_decision_table,u_employee_type,u_location',
        logic_definition: '4f787d1e0f9b0010ecf0cc52ff767ea0',
        order: '2',
        parent_ui_id: 'fcbc6bed-d3f7-48cb-adfd-70d08b824d6d',
        ui_id: '08b22acf-ef7c-4340-a950-79995876602e',
        values: 'H4sIAAAAAAAA/+1Y227iMBD9lSrPJEpIyKVvXWglpF6kwvZlVUWOPQFrTZLGTlsW8e87TsJlFy2o2mq1avOGz9jjM8dzYMTKyCtVVEpO8wsp+Swzzr899gyeaQw/r4xU5C/X+YzTcSYVyShMlnLMjHODJswJPMfzAhtI37EHDnEh9Jjn+MxzI8/ANHrfgsYMKJc8z2JFEgEYyMgC/hB6JqLSsZuhObocjifju1tzevHl+hJjjMtCkOXDkS0FKTG3gtI4Xxl0zgUrYVOUZuMFx1gPXEwhSAKiTn82atmdTU8TV8tCh6QqeTZr19dtqskGzEumqdk9A14VZAyQU0qEhJ6xIBkjKi+XW6QEwu4ysQPmPFOYzdCbXyX/gfeFtm3rnSlgnRSa6HYZt4o1cDoiiiCViqqqbLfSec4pyEYhBimphBruY82Gu0Jhrc2RpuDmdC6qRXbbiGJsE2weCJFKIgkodKmae1tIOpnnL/cbllc8q1VpgyKnRGxXRKF2SaU0n5VR8elvMjfIgdAgYIE3xgtSFIjERZk/8/oWJL2wZgIXlu5tZKf73iJUV2jhExDrCvFRDT+QkutybzANHtbXfc34UwW1BUI/dClNXDMkfmh6JA3M0A/AJM6A0tR2AgaOse4ZcimHgki5EwpfKH6qdJmNbK1AcaOxPkJLXqgLJPUMrRbr3ju4sYphUYh8CRDXDbtt6cPAxomr1RA7UQGLHYtWJT6ZskpADaSK07y09HYLS4w5W68PXfrW46cc7Kb+IIgc6gVeHw4q9fw9B7+h2M69n869A/CCJCGh2XeCyPSiKDLROZHppG5qpykbuP+he7W89WPu9fIetvMs9RNgfkBMFgQMq6P4LWWzwLSZZ/ftyA0Tt2/dA8WetjYJjrr4bxOe9HVyzNcO/OLrEzJ0bv58bg779gDs1PQT3Z6u55jExR/kxEf/+A6LHDd8Rzc/aq81fLo5uZuTO292c3I3J3fu/Yju7ebkbk7u3Pxh3PzP5+TNBFjPhuPNP8s6sMSe1CbfQS95+V1XuMPWPwGeFzjWoxYAAA==',
    },
})
Record({
    $id: Now.ID['8ee6c91b47ddfe10f487c24fe16d4340'],
    table: 'sys_hub_flow_logic_instance_v2',
    data: {
        block: 'dc83119f4707f21051a3e84d416d435a',
        flow: '2b4711ca47b0e210f487c24fe16d431e',
        logic_definition: '35d60003e6022010a5e40cdd1254dd23',
        order: '19',
        ui_id: '50b02abb-044f-4038-a72a-3bb50059fc62',
        values: 'H4sIAAAAAAAA/+1ZXW/iOBT9K6uoj5RNCgyUt6pdpK6mRVqYedlUkWMb6hmTZGyHtoP47+NrOyYhzKymy2irFRKK4nv9ce851ydx2AR5qYpSyXl+JSVbZsH474dOwDKw6ftNkKEVDcZBkkiFVCmTJOgEa8RLMG7iYE2FZHkWB+M4iLphHHTiQFLBEGdfkdKeSS5WSBn/n7PpvemA81XB6fM0/UQxuDZgItTeneF1dWNGfUJr1OUoW3ZnSrBsaWY4WxtfHGy3urWiUqLlK8dv9wOa4Ue6QnaOCc+fbigAQ8V4cnN1Pb+d3s/mV/MPs0bccXCbKbqkwuVHaPdswSgnyQJhqqTtPGOwzB0qJmA0wzZxHAclm78U9D1KKYfmGC7VfDHMqC+CIpLkGX/xPZQoqXc/skwZT1Zy3tlN6nuzvfkIXaCSq8Rw6Xt5N8JAXkKFyEVia+TwwrwR9TXAUblWKCNI5WIX8gJxufPngtiAjC+qjXtOOM2W6tE7+yFct/rXoFtDuuPUmf8t8G7GY+Eum9O1YfcDXwn5nUPjdahf/Bj10OMOwP9gN3TPlM761aA7KahiwXlipgPx8X32tt+xCMqbS//Dvmhif2Uo+21mpLEdUeJ0Jdmt0Q7wiLsk9M6SfcjYl5LeEu8c0R5Ne5eDc3x5GZ730ZCcpyOCzsNRhCKEUTqkqSd7q1WeMFlw9PLxJPYnsT+J/UnsT2L/PxZ7/Mg4ETSrv/ODsmlXgYRuKyo00YHZboZjzTUYagTrIU7I9KgDBa79AIbe1v4E0X7MaIvEghUK4F5riwGoMuoVtx0jbyJD/D3LPtshtfD18aVkN3ZSCE13YD4qU2i8FSwjdprKc20zb+KgDk3WTtxQGIyjTkCfFc0IJT4Hz763QPVMdfEEY0CmYwrYhqIZl+yrXrAfQrcF1dlhB5BvJg48a17cIIW0opVYlYJWwOQMU2lxsY1pAcxYt0Ipr3rmvFxl9zZl4MXujRovznLTIqyUOhJaQLIQvsttMXvMn/6qQp2wzODinDzHiPsWUlo401JBoECwfJHXHEm5i0annHwpYYiNxC2W2ES2B4tm2/Gl7B4XP1nN9unwxopZVkE1atmHul/Kdz7zFhTqwISt1F05XxyvnMNTQb+2oB/26reh2idpPknzW6zkk8yeZPatFueDYzJcDC/QAF0M0qh3EUZh+i6iSN/0hqMID/uXNab/gOp0p4Ad3Y3v445xexDYY3xaGSsxAp5+inNnOED66JikO9auj1gIx+XbqUgd6KaueKjrJ0xtb54ttZ9yuoKiWKGi0NsxKUS+ZiYK+FjUXXLd6C70eVhHDwfirhWqrqYIdXfn5I9IMIBDi1yhB/+K91iawQKk9h9M1JZDI5j7+va994ZqBxAyDKPREOPeOwo7YDAY9NJhP0SkHxJCcG0H7IJoReUqP81zTlG2V/pzHdfvE8jo15T/ER/Hxy7+hcv6sBRW3v9eD7/72rl2te3xwQw+Bc/Bdlv9WwiOF10TDNdNT7n4DJtnZ9t+A3wUxSd3HAAA',
    },
})
Record({
    $id: Now.ID['c2e6c91b47ddfe10f487c24fe16d4314'],
    table: 'sys_hub_flow_logic_instance_v2',
    data: {
        block: '9883119f4707f21051a3e84d416d4348',
        flow: '2b4711ca47b0e210f487c24fe16d431e',
        flow_variables_assigned: 'u_asset_subtype,u_sub_system,mc_system',
        logic_definition: '4f787d1e0f9b0010ecf0cc52ff767ea0',
        order: '6',
        parent_ui_id: 'fcbc6bed-d3f7-48cb-adfd-70d08b824d6d',
        ui_id: '871e54c8-fa6b-495f-bc0e-bc8ac615bc5b',
        values: 'H4sIAAAAAAAA/+1YXU/bMBT9L35uqny4TcIbAiEhsSEB42VC1Y1901pzkxA7QFf1v++6ST9gCDZUTZPIU5Nj+/jcEx/5qktWNrZqrLkpj41R04Idfb8bMFU4jJ6XLNfl40U5VeK8MBYKgdcLcy7ZERMouZCjmMdS5hj4OU9iEXJ6HEsehZIRjZvXTMAYtBPTZHZRIcEFzPHVgQfQjRtZLqMkkXkK4PEsRY+LPPXSaDT2eCCyEQcZxDAeXqEoazmcC0cxcRxDUUpcrYhKKlNpWNwejrGCmnRbrNnRkomZ0rLGjV2uzpCnMQ/ShMccIQz8UQARJlzytR9+RhQaMtR/Z8n654gZW6ti2r1fdDTXG5A0O1n+gOGTxUIi6clBGxywORQSbFkvtkiNIC8LvQNmqrDExtzkJ6N+0n6J7/tuZo5Uo8B2dPs66cxt4fwULJCURtim7qaKWakEmtYdiTk02p7sY+2Ey8qqsmiXWMj0ZnWpm3nxtbWEbQk235KQxpAIrFypTntXSH49Kx+vNirPVLF2pRvUpQC9fQNL3mWNdXqWrFE3L2xukd+MRo1z2nEyh6oiZFLV5YNa70Ki58OpppehSwypc2kagnAVDukTwPCM8NM1fAu1cuV+IRpa7Lb7Vqj7BtfB4jzJIRXoiXzMPc4h9iBJwIswDaIMsijCiK0GzCzMiabzsjOKvtDkvnFltrZ1Bk1aj90SUavKHpOoB+y8WA0OknGXFxJkcb5/mp+hH0t3u/xAwX5J9m6mkzczjc8y/QcW9Gn+dGkexZGMpD/yojCkNEsuPYp37KVZlPlcjuhg5f9Zmt319+Ic70MfvqWLfMNyuHv6Nc73Uh2nb/ng871Uv2NFn+dPl+d4nIKIxNjzgzB1t3PmZSBTT4ZhlsWxHEUyOWCe71zeWj19P973433i+36878f7frxPc9+P9/1434/3ef73/bhEoQzpvHGizjf/lLuBBR1JF/Md9FjWP1yFO2z1CxhWuQFzFwAA',
    },
})
Record({
    $id: Now.ID['cee6c91b47ddfe10f487c24fe16d431e'],
    table: 'sys_hub_flow_logic_instance_v2',
    data: {
        block: '1c83119f4707f21051a3e84d416d434e',
        flow: '2b4711ca47b0e210f487c24fe16d431e',
        logic_definition: 'd176605ea76103004f27b0d2187901c7',
        order: '10',
        parent_ui_id: 'b512f089-a9d8-4d36-804f-bcc6ce659f44',
        ui_id: 'f0b42dba-d56a-4103-b8f6-a5a01818ef01',
        values: 'H4sIAAAAAAAA/6tWyi8tKSgtKQ7JdywuzkzPU7KKjtVRyswDiUHYZYlFmYlJOalQbkpqcmZxZn5eCEjME0ldSmVeYm5mMrJQeX5RdlpOfjlCrBYAD1ouqHEAAAA=',
    },
})
Record({
    $id: Now.ID['cee6c91b47ddfe10f487c24fe16d4338'],
    table: 'sys_hub_flow_logic_instance_v2',
    data: {
        block: '5083119f4707f21051a3e84d416d4356',
        flow: '2b4711ca47b0e210f487c24fe16d431e',
        logic_definition: 'af4e1945c3e232002841b63b12d3ae3e',
        order: '15',
        parent_ui_id: 'fcbc6bed-d3f7-48cb-adfd-70d08b824d6d',
        ui_id: 'ed703c57-ef29-4e3e-b892-73527870955f',
        values: 'H4sIAAAAAAAA/+1VyW7bMBD9lYBnQdASG41vhoMAAdKmaIJc2kAYUZRNlCJVLnZcwf/eoSjZRuMuRnPszXyzvTeaB3dEOds6ax7V3Bi+lGT2+TkiXHoMf3dEQsPIjFAlK265kkUPRGQNwvnA3Fl18VGrNTcY5XKJsYqbVsD26TcpdMVFpdkwrwWNXS3TZNb9FOIVdqgTqNMrmtI8m+ZZkmTvLtNympdpVuXAIMeGAkomMHUxEr2465HolwrstvW4sTpQ8u+7ocvDCCpdeVZpEhH2YpmsGPKpQRgWkQZkBVbp7R7RDKp7KQ7AikuL7YhPfjH8Ow7MJhOfWDOUSFkI7p/FsLoA19dgAak4ap0eUulKccpMWE7FanDCLo6xkHDfeqmhxEIpxmolXCM/hI2QfYPxSyHiDJJgrVfqqQ866oeV2nwaWd5w2W9lCApFQexfYHF3pbOeT0eYYA02KhpoW9xo0foz6IuRSxMvBT7iWqgNDvX3FwP1xGNcLMQ3iF/38BNo7lW8xzZYHGiWYDgt+lvFdrgmRnYRMVuzEGDMQSRut/jmPMUgeRBXhP34Eqp5a+c4ec0GHbvo9ekfXX3X9ZzXA63YFYBHHtQNR77bfXFJklc9r1eeOL/BeY65gkk9SZPJacdcTk855oRXzrRJ9gebeCl/6ZIkSf7b5J9twk0RjnvQ1g9/Q5c8e0uEmftd0/6AHz12O/6P+MAWj4vTY2ij9Fcv6oDtfgAYhoR5kQYAAA==',
    },
})
Record({
    $id: Now.ID['2b4711ca47b0e210f487c24fe16d431e'],
    table: 'sys_hub_flow_snapshot',
    data: {
        access: 'public',
        active: 'true',
        attributes:
            'browserActivatedIn=chrome,integrationActivatedIn=standalone,labelCacheCleanUpExecuted=true,timeFromCreateToActivate=22341363000,viewActivatedIn=naturalLanguage',
        authored_on_release_version: '25000',
        callable_by_client_api: 'false',
        copied_from: 'd9de17171b1f8210bf7ea82b234bcb5b',
        description: 'Requesting new badge',
        flow_priority: 'MEDIUM',
        internal_name: 'new_badge_request_nfc_dt',
        label_cache:
            '[{"name":"388df9aa-4b9e-4cf9-9356-41cb54ad17a6.Record.mc_nfc_system.code","label":"5 - Look Up Record➛Location Administration Record➛MC NFC System➛Code","reference":"","reference_display":"Code","type":"string","base_type":"string","parent_table_name":"x_aleen_snguardian_system","column_name":"code","usedInstances":{"871e54c8-fa6b-495f-bc0e-bc8ac615bc5b":["mc_system-2"]}},{"name":"388df9aa-4b9e-4cf9-9356-41cb54ad17a6.Record.system.code","label":"5 - Look Up Record➛Location Administration Record➛PAC System➛Code","reference":"","reference_display":"Code","type":"string","base_type":"string","parent_table_name":"x_aleen_snguardian_system","column_name":"code","usedInstances":{"871e54c8-fa6b-495f-bc0e-bc8ac615bc5b":["u_sub_system-1"]}},{"name":"388df9aa-4b9e-4cf9-9356-41cb54ad17a6.Record.mc_sub_type.code","label":"5 - Look Up Record➛Location Administration Record➛MC Sub Type➛Code","reference":"","reference_display":"Code","type":"string","base_type":"string","parent_table_name":"x_aleen_snguardian_asset_type","column_name":"code","usedInstances":{"871e54c8-fa6b-495f-bc0e-bc8ac615bc5b":["u_asset_subtype-0"]}},{"name":"50b02abb-044f-4038-a72a-3bb50059fc62.__status__.message","label":"17 - Top Level Catch➛Error Status➛Message","reference":"","reference_display":"","type":"string","base_type":"string","column_name":"","usedInstances":{"2df8057b-3744-476d-953a-2ecd5b809e97":["work_notes"]},"attributes":{}},{"name":"50b02abb-044f-4038-a72a-3bb50059fc62.__status__.code","label":"17 - Top Level Catch➛Error Status➛Code","reference":"","reference_display":"","type":"integer","base_type":"integer","column_name":"","usedInstances":{"2df8057b-3744-476d-953a-2ecd5b809e97":["work_notes"]},"attributes":{}},{"name":"c6bed67a-d77d-49c3-80d7-0d4020938b32.Record.location.sys_id","label":"1 - Look Up Record➛Identity Location Record➛Location➛sys_id","reference":"","reference_display":"sys_id","type":"char","base_type":"char","parent_table_name":"x_aleen_snguardian_location","column_name":"sys_id","usedInstances":{"08b22acf-ef7c-4340-a950-79995876602e":["u_location-2"]}},{"name":"Created_1.current.request_for.type.sys_id","label":"Trigger - Record Created➛Request Record➛Request For➛Type➛sys_id","reference":"","reference_display":"sys_id","type":"char","base_type":"char","parent_table_name":"x_aleen_snguardian_identitytype","column_name":"sys_id","usedInstances":{"08b22acf-ef7c-4340-a950-79995876602e":["u_employee_type-1"]}},{"name":"4776875f-32e5-4aac-a3d4-285866d6ad67.outputs","label":"3 - Alert Decision Evaluation Action➛outputs","reference_display":"outputs","type":"string","base_type":"string","usedInstances":{"9b6ff257-5323-47f6-84c1-9a1454f5670a":["u_asset_subtype-0"]},"attributes":{"uiType":"string","uiTypeLabel":"String","element_mapping_provider":"com.glide.flow_design.action.data.FlowDesignVariableMapper","pwd2droppable":"true","uiUniqueId":"3c19ece4-55fa-479e-b464-c12521a49bf1"}},{"name":"flow_variable.u_auto_provisioning","label":"Flow Variables➛u_auto_provisioning","type":"string","base_type":"string","usedInstances":{"eeb3b969-e838-43d8-a4bf-d29e10f803ad":["auto_provisioning"],"ed703c57-ef29-4e3e-b892-73527870955f":["condition"]},"attributes":{"sourceUiUniqueId":"","sourceType":"","sourceId":"","uiUniqueId":"f53c3584-632b-47f1-84e2-0bbe90eaad24"}},{"name":"flow_variable.u_sub_system","label":"Flow Variables➛u_sub_system","reference":"","reference_display":"","type":"string","base_type":"string","usedInstances":{"eeb3b969-e838-43d8-a4bf-d29e10f803ad":["sub_system"],"5791a2af-956e-48ca-9268-d0f67f3b18b4":["sub_system"]},"attributes":{"sourceUiUniqueId":"","sourceType":"","sourceId":"","uiUniqueId":"573d3d05-3224-4d4d-8fa7-9b3b04d54eaf"}},{"name":"flow_variable.u_asset_subtype","label":"Flow Variables➛u_asset_subtype","type":"string","base_type":"string","usedInstances":{"eeb3b969-e838-43d8-a4bf-d29e10f803ad":["asset_subtype"],"5791a2af-956e-48ca-9268-d0f67f3b18b4":["asset_subtype"]},"attributes":{"sourceUiUniqueId":"","sourceType":"","sourceId":"","uiUniqueId":"448fa9ce-cf64-44a7-a88a-3e913bab33e3"}},{"name":"flow_variable.u_skip_badging_office","label":"Flow Variables➛u_skip_badging_office","reference":"","reference_display":"","type":"boolean","base_type":"boolean","column_name":"","usedInstances":{"2377742b-c812-4404-9b7d-21d595697ebf":["condition"]},"attributes":{"uiType":"boolean","uiTypeLabel":"True/False","element_mapping_provider":"com.glide.flow_design.action.data.FlowDesignVariableMapper","uiUniqueId":"7d098a99-cba0-4aec-960a-2d3228ac5a78"}},{"name":"flow_variable.u_skip_manager_approval","label":"Flow Variables➛u_skip_manager_approval","reference":"","reference_display":"","type":"boolean","base_type":"boolean","column_name":"","usedInstances":{"a3c76d8f-1c6c-4c09-86ae-1ecb3152e9d5":["condition"]},"attributes":{"uiType":"boolean","uiTypeLabel":"True/False","element_mapping_provider":"com.glide.flow_design.action.data.FlowDesignVariableMapper","uiUniqueId":"d43a9875-3147-452d-8ef8-939407a90d41"}},{"name":"flow_variable.result","label":"Flow Variables➛result","reference":"","reference_display":"","type":"json","base_type":"json","usedInstances":{"a3c76d8f-1c6c-4c09-86ae-1ecb3152e9d5":["condition"]},"attributes":{"sourceUiUniqueId":"","sourceType":"","sourceId":"","uiUniqueId":"f8a7c2e3-b02f-4ea1-ba0a-2e0ea4538bb8"}},{"name":"fd6bc191-c267-46b2-9307-caab05dca7cd.approval_state","label":"7 - Ask For Approval➛Approval State","reference_display":"Approval State","type":"choice","base_type":"choice","choices":[{"label":"-- None --","value":"","order":0.0},{"label":"Not Yet Requested","value":"not requested","order":1.0},{"label":"Requested","value":"requested","order":2.0},{"label":"Approved","value":"approved","order":3.0},{"label":"Rejected","value":"rejected","order":4.0},{"label":"Cancelled","value":"cancelled","order":5.0},{"label":"No Longer Required","value":"not_required","order":6.0},{"label":"Skipped","value":"skipped","order":7.0}],"attributes":{"element_mapping_provider":"com.glide.flow_design.action.data.FlowDesignVariableMapper"}},{"name":"81f75790-d9c1-429a-a927-3a00493b9a2c.Record.officers","label":"5 - Look Up Record➛Location Administrator Record➛Officers","reference":"sys_user","reference_display":"User","type":"glide_list","base_type":"glide_list","parent_table_name":"x_aleen_snguardian_badge_office","column_name":"officers"},{"name":"4b85677e-414e-422f-8fbf-d55ca562ca94.Record.location","label":"4 - Look Up Record➛Identity Location Record➛Location","reference":"x_aleen_snguardian_location","reference_display":"Location","type":"reference","base_type":"reference","parent_table_name":"x_aleen_snguardian_identity_location","column_name":"location"},{"name":"a081c5e8-a1e2-4cdb-bd5e-f613f99fff92.Record","label":"2 - Look Up Record➛System Record","reference":"x_aleen_snguardian_system","reference_display":"System","type":"reference","base_type":"reference","attributes":{"element_mapping_provider":"com.glide.flow_design.action.data.FlowDesignVariableMapper"}},{"name":"a081c5e8-a1e2-4cdb-bd5e-f613f99fff92.Record.code","label":"2 - Look Up Record➛System Record➛Code","reference":"","reference_display":"Code","type":"string","base_type":"string","parent_table_name":"x_aleen_snguardian_system","column_name":"code"},{"name":"Created_1.current.request_for.manager.master_user_id","label":"Trigger - Record Created➛Request Record➛Request For➛Manager➛Master User ID","reference":"sys_user","reference_display":"User","type":"reference","base_type":"reference","parent_table_name":"x_aleen_snguardian_identity","column_name":"master_user_id"},{"name":"Created_1.current","label":"Trigger - Record Created➛Request Record","reference":"x_aleen_snguardian_request","reference_display":"Request","type":"reference","base_type":"reference","usedInstances":{"9a94ec6e-aaf6-4db5-98b2-bc3d77332d69":["record"],"b5a6e11c-f95d-4083-b398-6a4eb03d68d3":["record"],"91390dca-e456-4dd5-912d-1935597829d5":["record"],"896d90cb-61b8-4abe-85bd-30c9021ea412":["request"],"b66258d3-cc4b-494c-b5f1-37b571bc2108":["request"],"eeb3b969-e838-43d8-a4bf-d29e10f803ad":["request"],"5791a2af-956e-48ca-9268-d0f67f3b18b4":["request"],"2df8057b-3744-476d-953a-2ecd5b809e97":["record"]},"attributes":{}},{"name":"Created_1.current.request_for.sys_id","label":"Trigger - Record Created➛Request Record➛Request For➛Sys ID","reference":"","reference_display":"Sys ID","type":"GUID","base_type":"GUID","parent_table_name":"x_aleen_snguardian_identity","column_name":"sys_id"},{"name":"Created_1.current.request_for","label":"Trigger - Record Created➛Request Record➛Request For","reference":"x_aleen_snguardian_identity","reference_display":"Identity","type":"reference","base_type":"reference","parent_table_name":"x_aleen_snguardian_request","column_name":"request_for","usedInstances":{"da97665b-a043-4f03-8d87-2f961241d1a4":["conditions"],"9ef05ad7-3e34-42b6-bcd1-b20a69808b7f":["conditions"],"c6bed67a-d77d-49c3-80d7-0d4020938b32":["conditions"]}},{"name":"Created_1.current.request_for.full_name","label":"Trigger - Record Created➛Request Record➛Request For➛Full Name","reference":"","reference_display":"Full Name","type":"string","base_type":"string","parent_table_name":"x_aleen_snguardian_identity","column_name":"full_name"},{"name":"fd7d9313-28ff-47e4-8550-13b409220c1d.record","label":"8 - Create Record➛Identity System Record","reference":"x_aleen_snguardian_identity_system","reference_display":"Identity System","type":"reference","base_type":"reference","attributes":{"element_mapping_provider":"com.glide.flow_design.action.data.FlowDesignVariableMapper"}},{"name":"flow_variable.bo_approval","label":"Flow Variables➛BO Approval","reference":"","reference_display":"","type":"boolean","base_type":"boolean","column_name":"","choices":[],"attributes":{"sourceUiUniqueId":"","sourceType":"","sourceId":"","uiUniqueId":"eb3f1515-3483-478a-a375-14b2bff9c553"}},{"name":"flow_variable.identity_system","label":"Flow Variables➛Identity System","reference":"x_aleen_snguardian_identity_system","reference_display":"Identity System","type":"reference","base_type":"reference","attributes":{"sourceUiUniqueId":"","sourceType":"","sourceId":"","uiUniqueId":"82efee55-7a7f-4de5-8769-4f923b9280f9"}},{"name":"flow_variable.identity_system.identity","label":"Flow Variables➛Identity System➛Identity","reference":"x_aleen_snguardian_identity","reference_display":"Identity","type":"reference","base_type":"reference","parent_table_name":"x_aleen_snguardian_identity_system","column_name":"identity"},{"name":"flow_variable.identity_system.identity.full_name","label":"Flow Variables➛Identity System➛Identity➛Full Name","reference":"","reference_display":"Full Name","type":"string","base_type":"string","parent_table_name":"x_aleen_snguardian_identity","column_name":"full_name"},{"name":"5ef49585-6b49-460f-9d5d-157ac98cba4e.resultlistOutput","label":"9 - Guardian Action Process NFC Assets➛resultListOutput","reference_display":"resultListOutput","type":"array.object","base_type":"array.object","attributes":{"sourceId":"0cb7e7d8-c91a-42dd-82df-d8d0f380b97d","child_name":"identityAsset","uiUniqueId":"3232e723-e1d0-4c60-95fd-b009918757c9","uiTypeLabel":"Array.Object","co_type_name":"FD74346419fc24d210888d1b92348b3c99","child_label":"identityAsset","child_type_label":"Object","element_mapping_provider":"com.glide.flow_design.action.data.FlowDesignVariableMapper","sourceType":"step","sourceUiUniqueId":"368436f5-4447-402b-86f0-6544acb757f9","uiType":"array.object","child_type":"object","child_uiUniqueId":"e3a6b1c9-17d6-46a5-bd3c-bba54f8d5c3d"}},{"name":"8b1e95a0-fec0-4b70-857b-47a41dbff723.item.identity","label":"10 - For Each➛identityAsset➛identity","reference":"","reference_display":"","type":"string","base_type":"string","column_name":"","attributes":{}},{"name":"8b1e95a0-fec0-4b70-857b-47a41dbff723.item.asset","label":"10 - For Each➛identityAsset➛asset","reference":"","reference_display":"","type":"string","base_type":"string","column_name":"","attributes":{}},{"name":"8b1e95a0-fec0-4b70-857b-47a41dbff723.item.valid_from","label":"10 - For Each➛identityAsset➛valid_from","reference":"","reference_display":"","type":"string","base_type":"string","column_name":"","attributes":{}},{"name":"8b1e95a0-fec0-4b70-857b-47a41dbff723.item.valid_to","label":"10 - For Each➛identityAsset➛valid_to","reference":"","reference_display":"","type":"string","base_type":"string","column_name":"","attributes":{}},{"name":"85e801c5-82c9-4f10-840c-ec0d33d0349d.resultlistOutput","label":"24 - Guardian Action Process NFC Assets➛resultListOutput","reference_display":"resultListOutput","type":"array.object","base_type":"array.object","attributes":{"sourceId":"0cb7e7d8-c91a-42dd-82df-d8d0f380b97d","child_name":"identityAsset","uiUniqueId":"3232e723-e1d0-4c60-95fd-b009918757c9","uiTypeLabel":"Array.Object","co_type_name":"FD74346419fc24d210888d1b92348b3c99","child_label":"identityAsset","child_type_label":"Object","element_mapping_provider":"com.glide.flow_design.action.data.FlowDesignVariableMapper","sourceType":"step","sourceUiUniqueId":"368436f5-4447-402b-86f0-6544acb757f9","uiType":"array.object","child_type":"object","child_uiUniqueId":"e3a6b1c9-17d6-46a5-bd3c-bba54f8d5c3d"}},{"name":"10c11ef5-30ea-49e8-90c4-7d60dece04c8.item.asset","label":"25 - For Each➛identityAsset➛asset","reference":"","reference_display":"","type":"string","base_type":"string","column_name":"","attributes":{}},{"name":"10c11ef5-30ea-49e8-90c4-7d60dece04c8.item.identity","label":"25 - For Each➛identityAsset➛identity","reference":"","reference_display":"","type":"string","base_type":"string","column_name":"","attributes":{}},{"name":"10c11ef5-30ea-49e8-90c4-7d60dece04c8.item.valid_from","label":"25 - For Each➛identityAsset➛valid_from","reference":"","reference_display":"","type":"string","base_type":"string","column_name":"","attributes":{}},{"name":"10c11ef5-30ea-49e8-90c4-7d60dece04c8.item.valid_to","label":"25 - For Each➛identityAsset➛valid_to","reference":"","reference_display":"","type":"string","base_type":"string","column_name":"","attributes":{}},{"name":"Created_1.current.opened_by","label":"Trigger - Record Created➛Request Record➛Opened by","reference":"sys_user","reference_display":"User","type":"reference","base_type":"reference","parent_table_name":"x_aleen_snguardian_request","column_name":"opened_by"},{"name":"06013dfb-548e-4c39-a5a8-18fcc5b49f20.approval_state","label":"2 - Ask For Approval➛Approval State","reference_display":"Approval State","type":"choice","base_type":"choice","choices":[{"label":"-- None --","value":"","order":0.0},{"label":"Not Yet Requested","value":"not requested","order":1.0},{"label":"Requested","value":"requested","order":2.0},{"label":"Approved","value":"approved","order":3.0},{"label":"Rejected","value":"rejected","order":4.0},{"label":"Cancelled","value":"cancelled","order":5.0},{"label":"No Longer Required","value":"not_required","order":6.0},{"label":"Skipped","value":"skipped","order":7.0}],"attributes":{"element_mapping_provider":"com.glide.flow_design.action.data.FlowDesignVariableMapper"}},{"name":"flow_variable.manager_approved","label":"Flow Variables➛manager_approved","reference":"","reference_display":"","type":"boolean","base_type":"boolean","column_name":"","choices":[],"attributes":{"sourceUiUniqueId":"","sourceType":"","sourceId":"","uiUniqueId":"84621ea6-e035-45b7-ac76-550fc2d8f1d8"}},{"name":"Created_1.current.number","label":"Trigger - Record Created➛Request Record➛Number","reference":"","reference_display":"Number","type":"string","base_type":"string","parent_table_name":"x_aleen_snguardian_request","column_name":"number","usedInstances":{"9a94ec6e-aaf6-4db5-98b2-bc3d77332d69":["work_notes"],"ab8b1b51-59a2-4dd8-9bea-05637ad24bc2":["work_notes"],"91390dca-e456-4dd5-912d-1935597829d5":["work_notes"]}},{"name":"81f75790-d9c1-429a-a927-3a00493b9a2c.Record","label":"5 - Look Up Record➛Location Administrator Record","reference":"x_aleen_snguardian_badge_office","reference_display":"Location Administration","type":"reference","base_type":"reference","usedInstances":{"d14bdf88-9323-44d0-839d-dd55ff4f5ef8":["assigned_to"]},"attributes":{"element_mapping_provider":"com.glide.flow_design.action.data.FlowDesignVariableMapper"}},{"name":"b2ee4d0b-d13a-49e9-a83e-b3e1e532a9d9.record","label":"11 - Create Record➛Identity Asset Record","reference":"x_aleen_snguardian_identity_asset","reference_display":"Identity Asset","type":"reference","base_type":"reference","usedInstances":{"8e2972fa-0532-430e-91f2-7812364c2704":["condition"]},"attributes":{"element_mapping_provider":"com.glide.flow_design.action.data.FlowDesignVariableMapper"}},{"name":"b2ee4d0b-d13a-49e9-a83e-b3e1e532a9d9.record.provisioning_status","label":"11 - Create Record➛Identity Asset Record➛Provisioning Status","reference":"x_aleen_snguardian_provisioning_status","reference_display":"Provisioning Status","type":"reference","base_type":"reference","parent_table_name":"x_aleen_snguardian_identity_asset","column_name":"provisioning_status","usedInstances":{}},{"name":"b2ee4d0b-d13a-49e9-a83e-b3e1e532a9d9.record.provisioning_status.code","label":"11 - Create Record➛Identity Asset Record➛Provisioning Status➛Code","reference":"","reference_display":"Code","type":"string","base_type":"string","parent_table_name":"x_aleen_snguardian_provisioning_status","column_name":"code","usedInstances":{"8e2972fa-0532-430e-91f2-7812364c2704":["condition"]}},{"name":"b2ee4d0b-d13a-49e9-a83e-b3e1e532a9d9.record.number","label":"11 - Create Record➛Identity Asset Record➛Number","reference":"","reference_display":"Number","type":"string","base_type":"string","parent_table_name":"x_aleen_snguardian_identity_asset","column_name":"number","usedInstances":{"b5a6e11c-f95d-4083-b398-6a4eb03d68d3":["work_notes"]}},{"name":"b2ee4d0b-d13a-49e9-a83e-b3e1e532a9d9.record.provisioning_message","label":"11 - Create Record➛Identity Asset Record➛Provisioning Message","reference":"","reference_display":"Provisioning Message","type":"string","base_type":"string","parent_table_name":"x_aleen_snguardian_identity_asset","column_name":"provisioning_message","usedInstances":{"dd4aebf9-0903-4ad7-acff-717a39d5e65b":["work_notes"]}},{"name":"b2ee4d0b-d13a-49e9-a83e-b3e1e532a9d9.record.asset.system","label":"11 - Create Record➛Identity Asset Record➛Asset➛System","reference":"x_aleen_snguardian_system","reference_display":"System","type":"reference","base_type":"reference","parent_table_name":"x_aleen_snguardian_asset","column_name":"system","usedInstances":{"da97665b-a043-4f03-8d87-2f961241d1a4":["conditions"]}},{"name":"da97665b-a043-4f03-8d87-2f961241d1a4.Record.provisioning_message","label":"17 - Look Up Record➛Identity System Record➛Provisioning Message","reference":"","reference_display":"Provisioning Message","type":"string_full_utf8","base_type":"string_full_utf8","parent_table_name":"x_aleen_snguardian_identity_system","column_name":"provisioning_message","usedInstances":{"dd4aebf9-0903-4ad7-acff-717a39d5e65b":["work_notes"]}},{"name":"f59c73c8-2ebf-4e29-9b51-a17ab2a42c94.record","label":"26 - Create Record➛Identity Asset Record","reference":"x_aleen_snguardian_identity_asset","reference_display":"Identity Asset","type":"reference","base_type":"reference","usedInstances":{},"attributes":{"element_mapping_provider":"com.glide.flow_design.action.data.FlowDesignVariableMapper"}},{"name":"f59c73c8-2ebf-4e29-9b51-a17ab2a42c94.record.provisioning_status","label":"26 - Create Record➛Identity Asset Record➛Provisioning Status","reference":"x_aleen_snguardian_provisioning_status","reference_display":"Provisioning Status","type":"reference","base_type":"reference","parent_table_name":"x_aleen_snguardian_identity_asset","column_name":"provisioning_status","usedInstances":{}},{"name":"f59c73c8-2ebf-4e29-9b51-a17ab2a42c94.record.provisioning_status.code","label":"26 - Create Record➛Identity Asset Record➛Provisioning Status➛Code","reference":"","reference_display":"Code","type":"string","base_type":"string","parent_table_name":"x_aleen_snguardian_provisioning_status","column_name":"code","usedInstances":{"7e77e210-14b2-4acc-933f-dc0bf1075ce1":["condition"]}},{"name":"f59c73c8-2ebf-4e29-9b51-a17ab2a42c94.record.asset.system","label":"26 - Create Record➛Identity Asset Record➛Asset➛System","reference":"x_aleen_snguardian_system","reference_display":"System","type":"reference","base_type":"reference","parent_table_name":"x_aleen_snguardian_asset","column_name":"system","usedInstances":{"9ef05ad7-3e34-42b6-bcd1-b20a69808b7f":["conditions"]}},{"name":"f59c73c8-2ebf-4e29-9b51-a17ab2a42c94.record.provisioning_message","label":"26 - Create Record➛Identity Asset Record➛Provisioning Message","reference":"","reference_display":"Provisioning Message","type":"string","base_type":"string","parent_table_name":"x_aleen_snguardian_identity_asset","column_name":"provisioning_message","usedInstances":{"9fe6f1ee-4231-49f3-81d4-381bdff738d4":["work_notes"]}},{"name":"9ef05ad7-3e34-42b6-bcd1-b20a69808b7f.Record.provisioning_message","label":"32 - Look Up Record➛Identity System Record➛Provisioning Message","reference":"","reference_display":"Provisioning Message","type":"string_full_utf8","base_type":"string_full_utf8","parent_table_name":"x_aleen_snguardian_identity_system","column_name":"provisioning_message","usedInstances":{"9fe6f1ee-4231-49f3-81d4-381bdff738d4":["work_notes"]}},{"name":"flow_variable.requested_by_badging_officer","label":"Flow Variables➛requested_by_badging_officer","reference":"","reference_display":"","type":"boolean","base_type":"boolean","column_name":"","choices":[],"usedInstances":{"c584169f-8066-4642-bad2-9e7530b6dca6":["condition"],"e814d090-0961-4dc0-b75d-86f1b9d96eb5":["condition"],"c5acb835-28d5-41e1-8c2f-fdf9b271014f":["condition"]},"attributes":{"sourceUiUniqueId":"","sourceType":"","sourceId":"","uiUniqueId":"e60a0abd-42ef-4dad-b870-87fb8493f304"}},{"name":"Created_1.current.request_for.email","label":"Trigger - Record Created➛Request Record➛Request For➛Email","reference":"","reference_display":"Email","type":"string","base_type":"string","parent_table_name":"x_aleen_snguardian_identity","column_name":"email","usedInstances":{"32d82b3c-22ec-4dc9-acbf-7ce33902628c":["ah_to"],"9eb8eba9-ba1c-4ece-9213-a87bba446ac0":["ah_to"]}},{"name":"b2ee4d0b-d13a-49e9-a83e-b3e1e532a9d9.record.asset.sub_type.code","label":"11 - Create Record➛Identity Asset Record➛Asset➛Sub Type➛Code","reference":"","reference_display":"Code","type":"string","base_type":"string","parent_table_name":"x_aleen_snguardian_asset_type","column_name":"code","usedInstances":{}},{"name":"f59c73c8-2ebf-4e29-9b51-a17ab2a42c94.record.asset.sub_type.code","label":"26 - Create Record➛Identity Asset Record➛Asset➛Sub Type➛Code","reference":"","reference_display":"Code","type":"string","base_type":"string","parent_table_name":"x_aleen_snguardian_asset_type","column_name":"code","usedInstances":{}},{"name":"flow_variable.web_provision","label":"Flow Variables➛Web Provision","type":"string","base_type":"string","usedInstances":{"4bf8f0e5-8984-451a-9e58-e2506f116b08":["condition"],"d664eae4-a557-40fb-b076-7266c6eb0f7c":["condition"]},"attributes":{"sourceUiUniqueId":"","sourceType":"","sourceId":"","uiUniqueId":"eb1b15be-c8d2-49b8-adfa-c5a7ec87df89"}},{"name":"896d90cb-61b8-4abe-85bd-30c9021ea412.approved","label":"8 - Alert Subflow Identity Manager Approval➛Approved","reference_display":"Approved","type":"boolean","base_type":"boolean","usedInstances":{"b512f089-a9d8-4d36-804f-bcc6ce659f44":["condition"]},"attributes":{"uiType":"boolean","uiTypeLabel":"True/False","element_mapping_provider":"com.glide.flow_design.action.data.FlowDesignVariableMapper","uiUniqueId":"9e538ef8-8c63-4760-8a4c-30a1921d538b"}},{"name":"b66258d3-cc4b-494c-b5f1-37b571bc2108.approved","label":"12 - Alert Subflow Badging Officer Approval➛Approved","reference_display":"Approved","type":"boolean","base_type":"boolean","usedInstances":{"579039c0-2192-4964-8160-f47fae5f4509":["condition"]},"attributes":{"uiType":"boolean","uiTypeLabel":"True/False","element_mapping_provider":"com.glide.flow_design.action.data.FlowDesignVariableMapper","uiUniqueId":"f7984318-57ba-48fe-8536-dedfe49f96a0"}},{"name":"flow_variable.mc_decision_table","label":"Flow Variables➛MC Decision Table","type":"string","base_type":"string","usedInstances":{"50b78cb4-0825-4780-ba87-ba7a70de2787":["conditions"],"4776875f-32e5-4aac-a3d4-285866d6ad67":["code"]},"attributes":{"sourceUiUniqueId":"","sourceType":"","sourceId":"","uiUniqueId":"8683ccb3-8a68-4af7-867e-a15ccf017de1"}},{"name":"c6bed67a-d77d-49c3-80d7-0d4020938b32.Record.location","label":"1 - Look Up Record➛Identity Location Record➛Location","reference":"x_aleen_snguardian_location","reference_display":"Location","type":"reference","base_type":"reference","parent_table_name":"x_aleen_snguardian_identity_location","column_name":"location","usedInstances":{"08b22acf-ef7c-4340-a950-79995876602e":["u_location-2"],"388df9aa-4b9e-4cf9-9356-41cb54ad17a6":["conditions"]}},{"name":"Created_1.current.request_for.type","label":"Trigger - Record Created➛Request Record➛Request For➛Type","reference":"x_aleen_snguardian_identitytype","reference_display":"Identity Type","type":"reference","base_type":"reference","parent_table_name":"x_aleen_snguardian_identity","column_name":"type","usedInstances":{"08b22acf-ef7c-4340-a950-79995876602e":["u_employee_type-1"]}},{"name":"flow_variable.mc_system","label":"Flow Variables➛mc_system","reference":"","reference_display":"","type":"string","base_type":"string","column_name":"","usedInstances":{"eeb3b969-e838-43d8-a4bf-d29e10f803ad":["mc_system"],"5791a2af-956e-48ca-9268-d0f67f3b18b4":["mc_system"]},"attributes":{"uiType":"string","uiTypeLabel":"String","element_mapping_provider":"com.glide.flow_design.action.data.FlowDesignVariableMapper","uiUniqueId":"769ac3c6-0129-44ab-bad9-d22bb77d53d8"}}]',
        master: 'true',
        name: 'Alert New Badge Request (NFC) (DT)',
        parent_flow: 'd26fccce47fca21051a3e84d416d43d1',
        run_as: 'system',
        sc_callable: 'false',
        status: 'published',
        sys_domain: 'global',
        sys_domain_path: '/',
        type: 'flow',
        version: '2',
    },
})
Record({
    $id: Now.ID['ceeea5a84749ae1051a3e84d416d438a'],
    table: 'sys_flow_trigger_plan',
    data: {
        binding_strategy: 'com.snc.process_flow.engine.binding.OncePerRecord',
        plan: '{"type":"PlanProxy","persistor":{"@class":".ChunkingPlanPersistor","table":"sys_flow_trigger_plan","id":"ceeea5a84749ae1051a3e84d416d438a","name":"plan","plan_signature":null}}',
        plan_id: 'd26fccce47fca21051a3e84d416d43d1',
        snapshot: '2b4711ca47b0e210f487c24fe16d431e',
        sys_domain: 'global',
        sys_domain_path: '/',
        trigger: '028ed3a747c7621051a3e84d416d43c0',
    },
})
Record({
    $id: Now.ID['24974198474ea21051a3e84d416d430b'],
    table: 'sys_hub_flow_variable',
    data: {
        active: 'true',
        array: 'false',
        array_denormalized: 'false',
        attributes:
            'element_mapping_provider=com.glide.flow_design.action.data.FlowDesignVariableMapper,uiType=string,uiTypeLabel=String,uiUniqueId=448fa9ce-cf64-44a7-a88a-3e913bab33e3',
        audit: 'false',
        calculation: `(function calculatedFieldValue(current) {

	// Add your code here
	return '';  // return the calculated value

})(current);`,
        display: 'false',
        dynamic_creation: 'false',
        element: 'u_asset_subtype',
        element_reference: 'false',
        function_field: 'false',
        internal_type: 'string',
        label: 'u_asset_subtype',
        mandatory: 'false',
        max_length: '8000',
        model: 'd26fccce47fca21051a3e84d416d43d1',
        model_id: 'd26fccce47fca21051a3e84d416d43d1',
        model_table: 'sys_hub_flow',
        name: 'var__m_sys_hub_flow_variable_d26fccce47fca21051a3e84d416d43d1',
        order: '0',
        primary: 'false',
        read_only: 'false',
        reference_floats: 'false',
        spell_check: 'false',
        staged: 'false',
        table_reference: 'false',
        text_index: 'false',
        unique: 'false',
        use_dependent_field: 'false',
        use_dynamic_default: 'false',
        use_reference_qualifier: 'simple',
        virtual: 'false',
        virtual_type: 'script',
        xml_view: 'false',
    },
})
Record({
    $id: Now.ID['28974198474ea21051a3e84d416d430e'],
    table: 'sys_hub_flow_variable',
    data: {
        active: 'true',
        array: 'false',
        array_denormalized: 'false',
        attributes:
            'element_mapping_provider=com.glide.flow_design.action.data.FlowDesignVariableMapper,uiType=string,uiTypeLabel=String,uiUniqueId=573d3d05-3224-4d4d-8fa7-9b3b04d54eaf',
        audit: 'false',
        calculation: `(function calculatedFieldValue(current) {

	// Add your code here
	return '';  // return the calculated value

})(current);`,
        display: 'false',
        dynamic_creation: 'false',
        element: 'u_sub_system',
        element_reference: 'false',
        function_field: 'false',
        internal_type: 'string',
        label: 'u_sub_system',
        mandatory: 'false',
        max_length: '8000',
        model: 'd26fccce47fca21051a3e84d416d43d1',
        model_id: 'd26fccce47fca21051a3e84d416d43d1',
        model_table: 'sys_hub_flow',
        name: 'var__m_sys_hub_flow_variable_d26fccce47fca21051a3e84d416d43d1',
        order: '0',
        primary: 'false',
        read_only: 'false',
        reference_floats: 'false',
        spell_check: 'false',
        staged: 'false',
        table_reference: 'false',
        text_index: 'false',
        unique: 'false',
        use_dependent_field: 'false',
        use_dynamic_default: 'false',
        use_reference_qualifier: 'simple',
        virtual: 'false',
        virtual_type: 'script',
        xml_view: 'false',
    },
})
Record({
    $id: Now.ID['2c974198474ea21051a3e84d416d4301'],
    table: 'sys_hub_flow_variable',
    data: {
        active: 'true',
        array: 'false',
        array_denormalized: 'false',
        attributes:
            'element_mapping_provider=com.glide.flow_design.action.data.FlowDesignVariableMapper,uiType=boolean,uiTypeLabel=True/False,uiUniqueId=d43a9875-3147-452d-8ef8-939407a90d41',
        audit: 'false',
        calculation: `(function calculatedFieldValue(current) {

	// Add your code here
	return '';  // return the calculated value

})(current);`,
        default_value: 'false',
        display: 'false',
        dynamic_creation: 'false',
        element: 'u_skip_manager_approval',
        element_reference: 'false',
        function_field: 'false',
        internal_type: 'boolean',
        label: 'u_skip_manager_approval',
        mandatory: 'false',
        max_length: '40',
        model: 'd26fccce47fca21051a3e84d416d43d1',
        model_id: 'd26fccce47fca21051a3e84d416d43d1',
        model_table: 'sys_hub_flow',
        name: 'var__m_sys_hub_flow_variable_d26fccce47fca21051a3e84d416d43d1',
        order: '0',
        primary: 'false',
        read_only: 'false',
        reference_floats: 'false',
        spell_check: 'false',
        staged: 'false',
        table_reference: 'false',
        text_index: 'false',
        unique: 'false',
        use_dependent_field: 'false',
        use_dynamic_default: 'false',
        use_reference_qualifier: 'simple',
        virtual: 'false',
        virtual_type: 'script',
        xml_view: 'false',
    },
})
Record({
    $id: Now.ID['2c974198474ea21051a3e84d416d4306'],
    table: 'sys_hub_flow_variable',
    data: {
        active: 'true',
        array: 'false',
        array_denormalized: 'false',
        attributes:
            'element_mapping_provider=com.glide.flow_design.action.data.FlowDesignVariableMapper,uiType=boolean,uiTypeLabel=True/False,uiUniqueId=7d098a99-cba0-4aec-960a-2d3228ac5a78',
        audit: 'false',
        calculation: `(function calculatedFieldValue(current) {

	// Add your code here
	return '';  // return the calculated value

})(current);`,
        default_value: 'false',
        display: 'false',
        dynamic_creation: 'false',
        element: 'u_skip_badging_office',
        element_reference: 'false',
        function_field: 'false',
        internal_type: 'boolean',
        label: 'u_skip_badging_office',
        mandatory: 'false',
        max_length: '40',
        model: 'd26fccce47fca21051a3e84d416d43d1',
        model_id: 'd26fccce47fca21051a3e84d416d43d1',
        model_table: 'sys_hub_flow',
        name: 'var__m_sys_hub_flow_variable_d26fccce47fca21051a3e84d416d43d1',
        order: '0',
        primary: 'false',
        read_only: 'false',
        reference_floats: 'false',
        spell_check: 'false',
        staged: 'false',
        table_reference: 'false',
        text_index: 'false',
        unique: 'false',
        use_dependent_field: 'false',
        use_dynamic_default: 'false',
        use_reference_qualifier: 'simple',
        virtual: 'false',
        virtual_type: 'script',
        xml_view: 'false',
    },
})
Record({
    $id: Now.ID['2c974198474ea21051a3e84d416d4311'],
    table: 'sys_hub_flow_variable',
    data: {
        active: 'true',
        array: 'false',
        array_denormalized: 'false',
        attributes:
            'element_mapping_provider=com.glide.flow_design.action.data.FlowDesignVariableMapper,uiType=string,uiTypeLabel=String,uiUniqueId=f53c3584-632b-47f1-84e2-0bbe90eaad24',
        audit: 'false',
        calculation: `(function calculatedFieldValue(current) {

	// Add your code here
	return '';  // return the calculated value

})(current);`,
        display: 'false',
        dynamic_creation: 'false',
        element: 'u_auto_provisioning',
        element_reference: 'false',
        function_field: 'false',
        internal_type: 'string',
        label: 'u_auto_provisioning',
        mandatory: 'false',
        max_length: '8000',
        model: 'd26fccce47fca21051a3e84d416d43d1',
        model_id: 'd26fccce47fca21051a3e84d416d43d1',
        model_table: 'sys_hub_flow',
        name: 'var__m_sys_hub_flow_variable_d26fccce47fca21051a3e84d416d43d1',
        order: '0',
        primary: 'false',
        read_only: 'false',
        reference_floats: 'false',
        spell_check: 'false',
        staged: 'false',
        table_reference: 'false',
        text_index: 'false',
        unique: 'false',
        use_dependent_field: 'false',
        use_dynamic_default: 'false',
        use_reference_qualifier: 'simple',
        virtual: 'false',
        virtual_type: 'script',
        xml_view: 'false',
    },
})
Record({
    $id: Now.ID['3b65791c4742e21051a3e84d416d431e'],
    table: 'sys_hub_flow_variable',
    data: {
        active: 'true',
        array: 'false',
        array_denormalized: 'false',
        attributes:
            'element_mapping_provider=com.glide.flow_design.action.data.FlowDesignVariableMapper,uiType=string,uiTypeLabel=String,uiUniqueId=58205e0f-6b7d-4341-a3f7-b639461d9138',
        audit: 'false',
        calculation: `(function calculatedFieldValue(current) {

	// Add your code here
	return '';  // return the calculated value

})(current);`,
        display: 'false',
        dynamic_creation: 'false',
        element: 'u_location',
        element_reference: 'false',
        function_field: 'false',
        internal_type: 'string',
        label: 'u_location',
        mandatory: 'false',
        max_length: '8000',
        model: 'd26fccce47fca21051a3e84d416d43d1',
        model_id: 'd26fccce47fca21051a3e84d416d43d1',
        model_table: 'sys_hub_flow',
        name: 'var__m_sys_hub_flow_variable_d26fccce47fca21051a3e84d416d43d1',
        order: '0',
        primary: 'false',
        read_only: 'false',
        reference_floats: 'false',
        spell_check: 'false',
        staged: 'false',
        table_reference: 'false',
        text_index: 'false',
        unique: 'false',
        use_dependent_field: 'false',
        use_dynamic_default: 'false',
        use_reference_qualifier: 'simple',
        virtual: 'false',
        virtual_type: 'script',
        xml_view: 'false',
    },
})
Record({
    $id: Now.ID['3f65791c4742e21051a3e84d416d4346'],
    table: 'sys_hub_flow_variable',
    data: {
        active: 'true',
        array: 'false',
        array_denormalized: 'false',
        attributes:
            'element_mapping_provider=com.glide.flow_design.action.data.FlowDesignVariableMapper,uiType=string,uiTypeLabel=String,uiUniqueId=5e47bba8-2179-4999-a219-1f3f0ffd53e1',
        audit: 'false',
        calculation: `(function calculatedFieldValue(current) {

	// Add your code here
	return '';  // return the calculated value

})(current);`,
        display: 'false',
        dynamic_creation: 'false',
        element: 'u_employee_type',
        element_reference: 'false',
        function_field: 'false',
        internal_type: 'string',
        label: 'u_employee_type',
        mandatory: 'false',
        max_length: '8000',
        model: 'd26fccce47fca21051a3e84d416d43d1',
        model_id: 'd26fccce47fca21051a3e84d416d43d1',
        model_table: 'sys_hub_flow',
        name: 'var__m_sys_hub_flow_variable_d26fccce47fca21051a3e84d416d43d1',
        order: '0',
        primary: 'false',
        read_only: 'false',
        reference_floats: 'false',
        spell_check: 'false',
        staged: 'false',
        table_reference: 'false',
        text_index: 'false',
        unique: 'false',
        use_dependent_field: 'false',
        use_dynamic_default: 'false',
        use_reference_qualifier: 'simple',
        virtual: 'false',
        virtual_type: 'script',
        xml_view: 'false',
    },
})
Record({
    $id: Now.ID['47d17414470ea21051a3e84d416d4353'],
    table: 'sys_hub_flow_variable',
    data: {
        active: 'true',
        array: 'false',
        array_denormalized: 'false',
        attributes:
            'element_mapping_provider=com.glide.flow_design.action.data.FlowDesignVariableMapper,uiType=string,uiTypeLabel=String,uiUniqueId=8683ccb3-8a68-4af7-867e-a15ccf017de1',
        audit: 'false',
        calculation: `(function calculatedFieldValue(current) {

	// Add your code here
	return '';  // return the calculated value

})(current);`,
        display: 'false',
        dynamic_creation: 'false',
        element: 'mc_decision_table',
        element_reference: 'false',
        function_field: 'false',
        internal_type: 'string',
        label: 'MC Decision Table',
        mandatory: 'false',
        max_length: '8000',
        model: 'd26fccce47fca21051a3e84d416d43d1',
        model_id: 'd26fccce47fca21051a3e84d416d43d1',
        model_table: 'sys_hub_flow',
        name: 'var__m_sys_hub_flow_variable_d26fccce47fca21051a3e84d416d43d1',
        order: '0',
        primary: 'false',
        read_only: 'false',
        reference_floats: 'false',
        spell_check: 'false',
        staged: 'false',
        table_reference: 'false',
        text_index: 'false',
        unique: 'false',
        use_dependent_field: 'false',
        use_dynamic_default: 'false',
        use_reference_qualifier: 'simple',
        virtual: 'false',
        virtual_type: 'script',
        xml_view: 'false',
    },
})
Record({
    $id: Now.ID['79d4cd5747ddfe10f487c24fe16d4304'],
    table: 'sys_hub_flow_variable',
    data: {
        active: 'true',
        array: 'false',
        array_denormalized: 'false',
        attributes:
            'element_mapping_provider=com.glide.flow_design.action.data.FlowDesignVariableMapper,uiType=string,uiTypeLabel=String,uiUniqueId=769ac3c6-0129-44ab-bad9-d22bb77d53d8',
        audit: 'false',
        calculation: `(function calculatedFieldValue(current) {

	// Add your code here
	return '';  // return the calculated value

})(current);`,
        display: 'false',
        dynamic_creation: 'false',
        element: 'mc_system',
        element_reference: 'false',
        function_field: 'false',
        internal_type: 'string',
        label: 'mc_system',
        mandatory: 'false',
        max_length: '8000',
        model: 'd26fccce47fca21051a3e84d416d43d1',
        model_id: 'd26fccce47fca21051a3e84d416d43d1',
        model_table: 'sys_hub_flow',
        name: 'var__m_sys_hub_flow_variable_d26fccce47fca21051a3e84d416d43d1',
        order: '0',
        primary: 'false',
        read_only: 'false',
        reference_floats: 'false',
        spell_check: 'false',
        staged: 'false',
        table_reference: 'false',
        text_index: 'false',
        unique: 'false',
        use_dependent_field: 'false',
        use_dynamic_default: 'false',
        use_reference_qualifier: 'simple',
        virtual: 'false',
        virtual_type: 'script',
        xml_view: 'false',
    },
})
Record({
    $id: Now.ID['ae6f00024730e21051a3e84d416d4302'],
    table: 'sys_hub_flow_variable',
    data: {
        active: 'true',
        array: 'false',
        array_denormalized: 'false',
        attributes:
            'element_mapping_provider=com.glide.flow_design.action.data.FlowDesignVariableMapper,uiType=boolean,uiTypeLabel=True/False,uiUniqueId=bcbb3319-2fa3-46cd-9023-e455609e314f',
        audit: 'false',
        calculation: `(function calculatedFieldValue(current) {

	// Add your code here
	return '';  // return the calculated value

})(current);`,
        default_value: 'false',
        display: 'false',
        dynamic_creation: 'false',
        element: 'successful_provision',
        element_reference: 'false',
        function_field: 'false',
        internal_type: 'boolean',
        label: 'Successful Provision',
        mandatory: 'false',
        max_length: '40',
        model: 'd26fccce47fca21051a3e84d416d43d1',
        model_id: 'd26fccce47fca21051a3e84d416d43d1',
        model_table: 'sys_hub_flow',
        name: 'var__m_sys_hub_flow_variable_d26fccce47fca21051a3e84d416d43d1',
        order: '0',
        primary: 'false',
        read_only: 'false',
        reference_floats: 'false',
        spell_check: 'false',
        staged: 'false',
        table_reference: 'false',
        text_index: 'false',
        unique: 'false',
        use_dependent_field: 'false',
        use_dynamic_default: 'false',
        use_reference_qualifier: 'simple',
        virtual: 'false',
        virtual_type: 'script',
        xml_view: 'false',
    },
})
Record({
    $id: Now.ID['e4974198474ea21051a3e84d416d4328'],
    table: 'sys_hub_flow_variable',
    data: {
        active: 'true',
        array: 'false',
        array_denormalized: 'false',
        attributes:
            'element_mapping_provider=com.glide.flow_design.action.data.FlowDesignVariableMapper,uiType=string,uiTypeLabel=String,uiUniqueId=0d463ec4-9c28-4a95-8285-16dcd236d897',
        audit: 'false',
        calculation: `(function calculatedFieldValue(current) {

	// Add your code here
	return '';  // return the calculated value

})(current);`,
        display: 'false',
        dynamic_creation: 'false',
        element: 'result',
        element_reference: 'false',
        function_field: 'false',
        internal_type: 'string',
        label: 'result',
        mandatory: 'false',
        max_length: '8000',
        model: 'd26fccce47fca21051a3e84d416d43d1',
        model_id: 'd26fccce47fca21051a3e84d416d43d1',
        model_table: 'sys_hub_flow',
        name: 'var__m_sys_hub_flow_variable_d26fccce47fca21051a3e84d416d43d1',
        order: '0',
        primary: 'false',
        read_only: 'false',
        reference_floats: 'false',
        spell_check: 'false',
        staged: 'false',
        table_reference: 'false',
        text_index: 'false',
        unique: 'false',
        use_dependent_field: 'false',
        use_dynamic_default: 'false',
        use_reference_qualifier: 'simple',
        virtual: 'false',
        virtual_type: 'script',
        xml_view: 'false',
    },
})
Record({
    $id: Now.ID['ea6fccce47fca21051a3e84d416d43ee'],
    table: 'sys_hub_flow_variable',
    data: {
        active: 'true',
        array: 'false',
        array_denormalized: 'false',
        attributes:
            'element_mapping_provider=com.glide.flow_design.action.data.FlowDesignVariableMapper,uiType=reference,uiTypeLabel=Reference,uiUniqueId=82efee55-7a7f-4de5-8769-4f923b9280f9',
        audit: 'false',
        calculation: `(function calculatedFieldValue(current) {

	// Add your code here
	return '';  // return the calculated value

})(current);`,
        choice_table: 'x_aleen_snguardian_identity_system',
        display: 'false',
        dynamic_creation: 'false',
        element: 'identity_system',
        element_reference: 'false',
        function_field: 'false',
        internal_type: 'reference',
        label: 'Identity System',
        mandatory: 'false',
        max_length: '32',
        model: 'd26fccce47fca21051a3e84d416d43d1',
        model_id: 'd26fccce47fca21051a3e84d416d43d1',
        model_table: 'sys_hub_flow',
        name: 'var__m_sys_hub_flow_variable_d26fccce47fca21051a3e84d416d43d1',
        order: '0',
        primary: 'false',
        read_only: 'false',
        reference: 'x_aleen_snguardian_identity_system',
        reference_floats: 'false',
        spell_check: 'false',
        staged: 'false',
        table_reference: 'false',
        text_index: 'false',
        unique: 'false',
        use_dependent_field: 'false',
        use_dynamic_default: 'false',
        use_reference_qualifier: 'simple',
        virtual: 'false',
        virtual_type: 'script',
        xml_view: 'false',
    },
})
Record({
    $id: Now.ID['634711ca47b0e210f487c24fe16d4371'],
    table: 'sys_hub_flow_variable',
    data: {
        active: 'true',
        array: 'false',
        array_denormalized: 'false',
        attributes:
            'element_mapping_provider=com.glide.flow_design.action.data.FlowDesignVariableMapper,uiType=boolean,uiTypeLabel=True/False,uiUniqueId=bcbb3319-2fa3-46cd-9023-e455609e314f',
        audit: 'false',
        calculation: `(function calculatedFieldValue(current) {

	// Add your code here
	return '';  // return the calculated value

})(current);`,
        display: 'false',
        dynamic_creation: 'false',
        element: 'successful_provision',
        element_reference: 'false',
        function_field: 'false',
        internal_type: 'boolean',
        label: 'Successful Provision',
        mandatory: 'false',
        max_length: '40',
        model: '2b4711ca47b0e210f487c24fe16d431e',
        model_id: '2b4711ca47b0e210f487c24fe16d431e',
        model_table: 'sys_hub_flow_snapshot',
        name: 'var__m_sys_hub_flow_variable_2b4711ca47b0e210f487c24fe16d431e',
        order: '0',
        primary: 'false',
        read_only: 'false',
        reference_floats: 'false',
        spell_check: 'false',
        staged: 'false',
        table_reference: 'false',
        text_index: 'false',
        unique: 'false',
        use_dependent_field: 'false',
        use_dynamic_default: 'false',
        use_reference_qualifier: 'simple',
        virtual: 'false',
        virtual_type: 'script',
        xml_view: 'false',
    },
})
Record({
    $id: Now.ID['65e5f99c4742e21051a3e84d416d43a8'],
    table: 'sys_hub_flow_variable',
    data: {
        active: 'true',
        array: 'false',
        array_denormalized: 'false',
        attributes:
            'element_mapping_provider=com.glide.flow_design.action.data.FlowDesignVariableMapper,uiType=string,uiTypeLabel=String,uiUniqueId=58205e0f-6b7d-4341-a3f7-b639461d9138',
        audit: 'false',
        calculation: `(function calculatedFieldValue(current) {

	// Add your code here
	return '';  // return the calculated value

})(current);`,
        display: 'false',
        dynamic_creation: 'false',
        element: 'u_location',
        element_reference: 'false',
        function_field: 'false',
        internal_type: 'string',
        label: 'u_location',
        mandatory: 'false',
        max_length: '8000',
        model: '2b4711ca47b0e210f487c24fe16d431e',
        model_id: '2b4711ca47b0e210f487c24fe16d431e',
        model_table: 'sys_hub_flow_snapshot',
        name: 'var__m_sys_hub_flow_variable_2b4711ca47b0e210f487c24fe16d431e',
        order: '0',
        primary: 'false',
        read_only: 'false',
        reference_floats: 'false',
        spell_check: 'false',
        staged: 'false',
        table_reference: 'false',
        text_index: 'false',
        unique: 'false',
        use_dependent_field: 'false',
        use_dynamic_default: 'false',
        use_reference_qualifier: 'simple',
        virtual: 'false',
        virtual_type: 'script',
        xml_view: 'false',
    },
})
Record({
    $id: Now.ID['65e5f99c4742e21051a3e84d416d43c0'],
    table: 'sys_hub_flow_variable',
    data: {
        active: 'true',
        array: 'false',
        array_denormalized: 'false',
        attributes:
            'element_mapping_provider=com.glide.flow_design.action.data.FlowDesignVariableMapper,uiType=string,uiTypeLabel=String,uiUniqueId=5e47bba8-2179-4999-a219-1f3f0ffd53e1',
        audit: 'false',
        calculation: `(function calculatedFieldValue(current) {

	// Add your code here
	return '';  // return the calculated value

})(current);`,
        display: 'false',
        dynamic_creation: 'false',
        element: 'u_employee_type',
        element_reference: 'false',
        function_field: 'false',
        internal_type: 'string',
        label: 'u_employee_type',
        mandatory: 'false',
        max_length: '8000',
        model: '2b4711ca47b0e210f487c24fe16d431e',
        model_id: '2b4711ca47b0e210f487c24fe16d431e',
        model_table: 'sys_hub_flow_snapshot',
        name: 'var__m_sys_hub_flow_variable_2b4711ca47b0e210f487c24fe16d431e',
        order: '0',
        primary: 'false',
        read_only: 'false',
        reference_floats: 'false',
        spell_check: 'false',
        staged: 'false',
        table_reference: 'false',
        text_index: 'false',
        unique: 'false',
        use_dependent_field: 'false',
        use_dynamic_default: 'false',
        use_reference_qualifier: 'simple',
        virtual: 'false',
        virtual_type: 'script',
        xml_view: 'false',
    },
})
Record({
    $id: Now.ID['69e6891b47ddfe10f487c24fe16d4329'],
    table: 'sys_hub_flow_variable',
    data: {
        active: 'true',
        array: 'false',
        array_denormalized: 'false',
        attributes:
            'element_mapping_provider=com.glide.flow_design.action.data.FlowDesignVariableMapper,uiType=string,uiTypeLabel=String,uiUniqueId=769ac3c6-0129-44ab-bad9-d22bb77d53d8',
        audit: 'false',
        calculation: `(function calculatedFieldValue(current) {

	// Add your code here
	return '';  // return the calculated value

})(current);`,
        display: 'false',
        dynamic_creation: 'false',
        element: 'mc_system',
        element_reference: 'false',
        function_field: 'false',
        internal_type: 'string',
        label: 'mc_system',
        mandatory: 'false',
        max_length: '8000',
        model: '2b4711ca47b0e210f487c24fe16d431e',
        model_id: '2b4711ca47b0e210f487c24fe16d431e',
        model_table: 'sys_hub_flow_snapshot',
        name: 'var__m_sys_hub_flow_variable_2b4711ca47b0e210f487c24fe16d431e',
        order: '0',
        primary: 'false',
        read_only: 'false',
        reference_floats: 'false',
        spell_check: 'false',
        staged: 'false',
        table_reference: 'false',
        text_index: 'false',
        unique: 'false',
        use_dependent_field: 'false',
        use_dynamic_default: 'false',
        use_reference_qualifier: 'simple',
        virtual: 'false',
        virtual_type: 'script',
        xml_view: 'false',
    },
})
Record({
    $id: Now.ID['710bc1dc474ea21051a3e84d416d4384'],
    table: 'sys_hub_flow_variable',
    data: {
        active: 'true',
        array: 'false',
        array_denormalized: 'false',
        attributes:
            'element_mapping_provider=com.glide.flow_design.action.data.FlowDesignVariableMapper,uiType=string,uiTypeLabel=String,uiUniqueId=573d3d05-3224-4d4d-8fa7-9b3b04d54eaf',
        audit: 'false',
        calculation: `(function calculatedFieldValue(current) {

	// Add your code here
	return '';  // return the calculated value

})(current);`,
        display: 'false',
        dynamic_creation: 'false',
        element: 'u_sub_system',
        element_reference: 'false',
        function_field: 'false',
        internal_type: 'string',
        label: 'u_sub_system',
        mandatory: 'false',
        max_length: '8000',
        model: '2b4711ca47b0e210f487c24fe16d431e',
        model_id: '2b4711ca47b0e210f487c24fe16d431e',
        model_table: 'sys_hub_flow_snapshot',
        name: 'var__m_sys_hub_flow_variable_2b4711ca47b0e210f487c24fe16d431e',
        order: '0',
        primary: 'false',
        read_only: 'false',
        reference_floats: 'false',
        spell_check: 'false',
        staged: 'false',
        table_reference: 'false',
        text_index: 'false',
        unique: 'false',
        use_dependent_field: 'false',
        use_dynamic_default: 'false',
        use_reference_qualifier: 'simple',
        virtual: 'false',
        virtual_type: 'script',
        xml_view: 'false',
    },
})
Record({
    $id: Now.ID['710bc1dc474ea21051a3e84d416d4391'],
    table: 'sys_hub_flow_variable',
    data: {
        active: 'true',
        array: 'false',
        array_denormalized: 'false',
        attributes:
            'element_mapping_provider=com.glide.flow_design.action.data.FlowDesignVariableMapper,uiType=string,uiTypeLabel=String,uiUniqueId=8683ccb3-8a68-4af7-867e-a15ccf017de1',
        audit: 'false',
        calculation: `(function calculatedFieldValue(current) {

	// Add your code here
	return '';  // return the calculated value

})(current);`,
        display: 'false',
        dynamic_creation: 'false',
        element: 'mc_decision_table',
        element_reference: 'false',
        function_field: 'false',
        internal_type: 'string',
        label: 'MC Decision Table',
        mandatory: 'false',
        max_length: '8000',
        model: '2b4711ca47b0e210f487c24fe16d431e',
        model_id: '2b4711ca47b0e210f487c24fe16d431e',
        model_table: 'sys_hub_flow_snapshot',
        name: 'var__m_sys_hub_flow_variable_2b4711ca47b0e210f487c24fe16d431e',
        order: '0',
        primary: 'false',
        read_only: 'false',
        reference_floats: 'false',
        spell_check: 'false',
        staged: 'false',
        table_reference: 'false',
        text_index: 'false',
        unique: 'false',
        use_dependent_field: 'false',
        use_dynamic_default: 'false',
        use_reference_qualifier: 'simple',
        virtual: 'false',
        virtual_type: 'script',
        xml_view: 'false',
    },
})
Record({
    $id: Now.ID['750bc1dc474ea21051a3e84d416d4387'],
    table: 'sys_hub_flow_variable',
    data: {
        active: 'true',
        array: 'false',
        array_denormalized: 'false',
        attributes:
            'element_mapping_provider=com.glide.flow_design.action.data.FlowDesignVariableMapper,uiType=boolean,uiTypeLabel=True/False,uiUniqueId=d43a9875-3147-452d-8ef8-939407a90d41',
        audit: 'false',
        calculation: `(function calculatedFieldValue(current) {

	// Add your code here
	return '';  // return the calculated value

})(current);`,
        display: 'false',
        dynamic_creation: 'false',
        element: 'u_skip_manager_approval',
        element_reference: 'false',
        function_field: 'false',
        internal_type: 'boolean',
        label: 'u_skip_manager_approval',
        mandatory: 'false',
        max_length: '40',
        model: '2b4711ca47b0e210f487c24fe16d431e',
        model_id: '2b4711ca47b0e210f487c24fe16d431e',
        model_table: 'sys_hub_flow_snapshot',
        name: 'var__m_sys_hub_flow_variable_2b4711ca47b0e210f487c24fe16d431e',
        order: '0',
        primary: 'false',
        read_only: 'false',
        reference_floats: 'false',
        spell_check: 'false',
        staged: 'false',
        table_reference: 'false',
        text_index: 'false',
        unique: 'false',
        use_dependent_field: 'false',
        use_dynamic_default: 'false',
        use_reference_qualifier: 'simple',
        virtual: 'false',
        virtual_type: 'script',
        xml_view: 'false',
    },
})
Record({
    $id: Now.ID['790bc1dc474ea21051a3e84d416d438a'],
    table: 'sys_hub_flow_variable',
    data: {
        active: 'true',
        array: 'false',
        array_denormalized: 'false',
        attributes:
            'element_mapping_provider=com.glide.flow_design.action.data.FlowDesignVariableMapper,uiType=boolean,uiTypeLabel=True/False,uiUniqueId=7d098a99-cba0-4aec-960a-2d3228ac5a78',
        audit: 'false',
        calculation: `(function calculatedFieldValue(current) {

	// Add your code here
	return '';  // return the calculated value

})(current);`,
        display: 'false',
        dynamic_creation: 'false',
        element: 'u_skip_badging_office',
        element_reference: 'false',
        function_field: 'false',
        internal_type: 'boolean',
        label: 'u_skip_badging_office',
        mandatory: 'false',
        max_length: '40',
        model: '2b4711ca47b0e210f487c24fe16d431e',
        model_id: '2b4711ca47b0e210f487c24fe16d431e',
        model_table: 'sys_hub_flow_snapshot',
        name: 'var__m_sys_hub_flow_variable_2b4711ca47b0e210f487c24fe16d431e',
        order: '0',
        primary: 'false',
        read_only: 'false',
        reference_floats: 'false',
        spell_check: 'false',
        staged: 'false',
        table_reference: 'false',
        text_index: 'false',
        unique: 'false',
        use_dependent_field: 'false',
        use_dynamic_default: 'false',
        use_reference_qualifier: 'simple',
        virtual: 'false',
        virtual_type: 'script',
        xml_view: 'false',
    },
})
Record({
    $id: Now.ID['7d0bc1dc474ea21051a3e84d416d438d'],
    table: 'sys_hub_flow_variable',
    data: {
        active: 'true',
        array: 'false',
        array_denormalized: 'false',
        attributes:
            'element_mapping_provider=com.glide.flow_design.action.data.FlowDesignVariableMapper,uiType=string,uiTypeLabel=String,uiUniqueId=f53c3584-632b-47f1-84e2-0bbe90eaad24',
        audit: 'false',
        calculation: `(function calculatedFieldValue(current) {

	// Add your code here
	return '';  // return the calculated value

})(current);`,
        display: 'false',
        dynamic_creation: 'false',
        element: 'u_auto_provisioning',
        element_reference: 'false',
        function_field: 'false',
        internal_type: 'string',
        label: 'u_auto_provisioning',
        mandatory: 'false',
        max_length: '8000',
        model: '2b4711ca47b0e210f487c24fe16d431e',
        model_id: '2b4711ca47b0e210f487c24fe16d431e',
        model_table: 'sys_hub_flow_snapshot',
        name: 'var__m_sys_hub_flow_variable_2b4711ca47b0e210f487c24fe16d431e',
        order: '0',
        primary: 'false',
        read_only: 'false',
        reference_floats: 'false',
        spell_check: 'false',
        staged: 'false',
        table_reference: 'false',
        text_index: 'false',
        unique: 'false',
        use_dependent_field: 'false',
        use_dynamic_default: 'false',
        use_reference_qualifier: 'simple',
        virtual: 'false',
        virtual_type: 'script',
        xml_view: 'false',
    },
})
Record({
    $id: Now.ID['ab4711ca47b0e210f487c24fe16d4399'],
    table: 'sys_hub_flow_variable',
    data: {
        active: 'true',
        array: 'false',
        array_denormalized: 'false',
        attributes:
            'element_mapping_provider=com.glide.flow_design.action.data.FlowDesignVariableMapper,uiType=reference,uiTypeLabel=Reference,uiUniqueId=82efee55-7a7f-4de5-8769-4f923b9280f9',
        audit: 'false',
        calculation: `(function calculatedFieldValue(current) {

	// Add your code here
	return '';  // return the calculated value

})(current);`,
        choice_table: 'x_aleen_snguardian_identity_system',
        display: 'false',
        dynamic_creation: 'false',
        element: 'identity_system',
        element_reference: 'false',
        function_field: 'false',
        internal_type: 'reference',
        label: 'Identity System',
        mandatory: 'false',
        max_length: '32',
        model: '2b4711ca47b0e210f487c24fe16d431e',
        model_id: '2b4711ca47b0e210f487c24fe16d431e',
        model_table: 'sys_hub_flow_snapshot',
        name: 'var__m_sys_hub_flow_variable_2b4711ca47b0e210f487c24fe16d431e',
        order: '0',
        primary: 'false',
        read_only: 'false',
        reference: 'x_aleen_snguardian_identity_system',
        reference_floats: 'false',
        spell_check: 'false',
        staged: 'false',
        table_reference: 'false',
        text_index: 'false',
        unique: 'false',
        use_dependent_field: 'false',
        use_dynamic_default: 'false',
        use_reference_qualifier: 'simple',
        virtual: 'false',
        virtual_type: 'script',
        xml_view: 'false',
    },
})
Record({
    $id: Now.ID['b90bc1dc474ea21051a3e84d416d437f'],
    table: 'sys_hub_flow_variable',
    data: {
        active: 'true',
        array: 'false',
        array_denormalized: 'false',
        attributes:
            'element_mapping_provider=com.glide.flow_design.action.data.FlowDesignVariableMapper,uiType=string,uiTypeLabel=String,uiUniqueId=448fa9ce-cf64-44a7-a88a-3e913bab33e3',
        audit: 'false',
        calculation: `(function calculatedFieldValue(current) {

	// Add your code here
	return '';  // return the calculated value

})(current);`,
        display: 'false',
        dynamic_creation: 'false',
        element: 'u_asset_subtype',
        element_reference: 'false',
        function_field: 'false',
        internal_type: 'string',
        label: 'u_asset_subtype',
        mandatory: 'false',
        max_length: '8000',
        model: '2b4711ca47b0e210f487c24fe16d431e',
        model_id: '2b4711ca47b0e210f487c24fe16d431e',
        model_table: 'sys_hub_flow_snapshot',
        name: 'var__m_sys_hub_flow_variable_2b4711ca47b0e210f487c24fe16d431e',
        order: '0',
        primary: 'false',
        read_only: 'false',
        reference_floats: 'false',
        spell_check: 'false',
        staged: 'false',
        table_reference: 'false',
        text_index: 'false',
        unique: 'false',
        use_dependent_field: 'false',
        use_dynamic_default: 'false',
        use_reference_qualifier: 'simple',
        virtual: 'false',
        virtual_type: 'script',
        xml_view: 'false',
    },
})
Record({
    $id: Now.ID['f10bc1dc474ea21051a3e84d416d4395'],
    table: 'sys_hub_flow_variable',
    data: {
        active: 'true',
        array: 'false',
        array_denormalized: 'false',
        attributes:
            'element_mapping_provider=com.glide.flow_design.action.data.FlowDesignVariableMapper,uiType=string,uiTypeLabel=String,uiUniqueId=0d463ec4-9c28-4a95-8285-16dcd236d897',
        audit: 'false',
        calculation: `(function calculatedFieldValue(current) {

	// Add your code here
	return '';  // return the calculated value

})(current);`,
        display: 'false',
        dynamic_creation: 'false',
        element: 'result',
        element_reference: 'false',
        function_field: 'false',
        internal_type: 'string',
        label: 'result',
        mandatory: 'false',
        max_length: '8000',
        model: '2b4711ca47b0e210f487c24fe16d431e',
        model_id: '2b4711ca47b0e210f487c24fe16d431e',
        model_table: 'sys_hub_flow_snapshot',
        name: 'var__m_sys_hub_flow_variable_2b4711ca47b0e210f487c24fe16d431e',
        order: '0',
        primary: 'false',
        read_only: 'false',
        reference_floats: 'false',
        spell_check: 'false',
        staged: 'false',
        table_reference: 'false',
        text_index: 'false',
        unique: 'false',
        use_dependent_field: 'false',
        use_dynamic_default: 'false',
        use_reference_qualifier: 'simple',
        virtual: 'false',
        virtual_type: 'script',
        xml_view: 'false',
    },
})
Record({
    $id: Now.ID['74e6091b47ddfe10f487c24fe16d43ae'],
    table: 'sys_hub_sub_flow_instance_v2',
    data: {
        flow: 'd26fccce47fca21051a3e84d416d43d1',
        order: '16',
        parent_ui_id: 'ed703c57-ef29-4e3e-b892-73527870955f',
        show_stages: 'false',
        subflow: '3374804247fca21051a3e84d416d438f',
        subflow_inputs:
            'H4sIAAAAAAAA/+2XXW+bShCG/0rEtXFZWLyL76pWkSr1S01Pb6oKDbtDggQLhSWNG+W/nwFjbNcf8clJk170zp6d3Zn3nXlk+eut07TJeV7+eGMaC0bhG+3MnSCIWMSVz0Xgoc+8kEGAkmvOZpoHvnQmTtblCSG49DjlpQp28iJGeQYKpMwav7fYWApcQ952kdvbVzWCRR2zqWrrGo29u6NznTVVDosvQxpF1FWWazp35l+/TZwKanrSYu3Mb385sosK4xwSzOniJ0yRThT+h2bXd1fd7rTf1egD69fLWnfdsImDNxaNRqqWQt7gxCnAaLBlvXDmtm4pQJL1B5MvxoyrzNilzAJumuwnPR74k433585NDDmiiRtz2UKtMzDxup8xMR6M22pfXZWZwg+VzUqzrGIhye99VJV5W5j3S+3dTDCFNrcbM2kbKohVp7brfxCTXlyVP0bjzzPTGzMc5qWCfPwG1tZZ0lpsujm22eddX5fBt3vmiTkWVDcuoKoycxlXdXmd9bWo9WJ6mdOXaUpbTT022aWZguocmNIsYNpt++s+/AXqrLPjHT1Dl7uK/5iMTOgh8ACAq0C5Ogm4yzlDV4aKuzIRHJjPAxElzl0/gfh720lbWjWYEi8dp4RG1VllX1IL1zjov5v8P/CUkkd2GeV6c6G15dKfhhwgs7YQ7D26HmyYtvFO9j4kewUP5vIzcfDifHjiVDGryy+pv7OP22qOCB1gTcoyRzBrVP3HQpV726geAPIoiffztjJ8CL/eP47fheTavW0gtwb5JEQq5gseMe5ioCKXB+HMlUwJ1wuTgAlEjVw/F5HSk1wdXGJv46cQmgZtTLX67TxK42bmPhJPufIwSi9oFXqEThU3Eto1cHYxqjsgeiCzWZUZwAyOgzlETiFTet6TsPkbwRvN2eZuHM2TMAcY+uAnnquVSl2ehMwFXwhXzsIg0UKlKPznYs6Tx9bS31g/qhI3i8ZicRS4ddpptP2S/xionaBpvNgmZxcrUfuEHoCM/4XsD4MspB808MPITaUGl4eoiS/N3FAnifAYUwmTzwWZTuSMay240DpF5qVcCrpFH7u8NFzvXqHuZ2zMOQWw7eTHoOsEMauL717twLUp8ABb4V+2/jC2eKACVEK6TKS+y2nL6W9cIFwtZkEYiQhwlj6YrW//AkBXIzxBEQAA',
        ui_id: 'eeb3b969-e838-43d8-a4bf-d29e10f803ad',
        wait_for_completion: 'true',
    },
})
Record({
    $id: Now.ID['a8e6091b47ddfe10f487c24fe16d4398'],
    table: 'sys_hub_sub_flow_instance_v2',
    data: {
        flow: 'd26fccce47fca21051a3e84d416d43d1',
        order: '8',
        parent_ui_id: 'a3c76d8f-1c6c-4c09-86ae-1ecb3152e9d5',
        show_stages: 'false',
        subflow: '93ca408a47fca21051a3e84d416d43b5',
        subflow_inputs:
            'H4sIAAAAAAAA/5VTXYvbMBD8L3p2jB3bceK30nJw0PagH/dyHGYtrROBLPv0kUsa8t+7st3k2hRKHzU72p2ZlZ5OzPrmTvWv99o60BzvBatYVm7SIufLvMwSXKZJkUKG61zk6UrkGWQsYjLwRMkhT9aQly2HG15TEk9Dh8Q0+OLROgL2oHxATqf3BsGhqNOYe2NQu/OZ6kLaQcHxcaYRwndSCaqz6uk5YgMYaunQsOr0R8kdB6wVNKjo4hdskSoc/0Ps9e4vtTfyw4wRuHbvjQhq0ojhwaEWSNNaUBYj1oEW4HpzZJUzngCyLB60Ol4YO6ndZLODg5U/qHm2jN70r9ihBoWoa6u3HoyQoOurnguxnoP7TT7f9ZLjw+Bkr6cpDhr1z6a8V77TnyfvYSfYglfuzU68pYE4BLdB/2ym/brrXy/B30k9BjMXVc9BXU7gnJGNd2jDHr38dpvrBH78yz5RYUdz6w6GQeptPZh+L8dZJL2Lt4oOcUuvmjRaudUx8JBATLuAOLz2DyP8CEaGOD5RG7ocJn7XkkIYP0Ga5CuRLYtFscnXizxbbRZNSscmTbIC1ptV1ibsPG6gfvHB2hTVHEo9JU4Ey40c3DuSsMfZ//n5J/qGLVl6AwAA',
        ui_id: '896d90cb-61b8-4abe-85bd-30c9021ea412',
        wait_for_completion: 'true',
    },
})
Record({
    $id: Now.ID['ace6091b47ddfe10f487c24fe16d43a3'],
    table: 'sys_hub_sub_flow_instance_v2',
    data: {
        flow: 'd26fccce47fca21051a3e84d416d43d1',
        order: '12',
        parent_ui_id: '2377742b-c812-4404-9b7d-21d595697ebf',
        show_stages: 'false',
        subflow: 'b93fc4ce47fca21051a3e84d416d4326',
        subflow_inputs:
            'H4sIAAAAAAAA/5VT2W7bMBD8Fz7LgnX4kN+KFgECtA3QIy9BIKzIpU2AohQejl3D/96lpNhBXaDoI2eHuzOz5NOJudDc6e713jgPhuO9YBu2klW2KHleroo55tl8kUGB61KU2VKUhZQsYSrypCgkLzmWK8nhhpeviWegRWJafAnoPAF70CEip9NHi+BR1FnKg7Vo/PlMdaFcr+H4ONEI4TulBdXZ5uk5YT1YaunRss3pj5I/9lhraFDTxW8okSoc/0Ps292r2hv5ccYAXLt3VkQ1WcLw4NEIpGkStMOEtWAE+M4e2cbbQABZFg9GHy+MnTJ+tNnCwalf1LzIk3f9N+xQg0Y0tTPbAFYoMPVVz4VYT8EN1t+qfNcpjg+9V50Zp3ho9D+b8k6H1nwdvcedoISg/budBEcDsY9uo/7JjPy+614vwd8pMwQzFXXHQV9O4L1VTfDo4h6D+nGb6wh+/ss+UWNLc+sW+l6Zbd3bbq+GWSS9TbeaDqmkV00andqaFHhMIKVdQBpf+6cBfgSrYhxfqA1djhN/GkUhDJ9gsZ4LLsV8Vi5LnJVQNTPIGjHDSi6rCvNCQMPOwwbqlxCtjVFNodRj4kRw3KrefyAJe5z8n59/AzJ8Ns16AwAA',
        ui_id: 'b66258d3-cc4b-494c-b5f1-37b571bc2108',
        wait_for_completion: 'true',
    },
})
Record({
    $id: Now.ID['b8e6091b47ddfe10f487c24fe16d43b1'],
    table: 'sys_hub_sub_flow_instance_v2',
    data: {
        flow: 'd26fccce47fca21051a3e84d416d43d1',
        order: '18',
        parent_ui_id: 'fcbc6bed-d3f7-48cb-adfd-70d08b824d6d',
        show_stages: 'false',
        subflow: '3374804247fca21051a3e84d416d438f',
        subflow_inputs:
            'H4sIAAAAAAAA/+2X32/bOAzH/5XCz1HOsuXIyduwocCA/Thcd3sZBoOW6FaALXu23DVX9H8/2nGcZGnSXK9r97C3mCJF8kt+IOTLrde06Xlefn9rGwdW4VvtLTwNGddKBUKGPgbcjziEGAst+EyL0Adv4pnOT0opYl+QX6Zgz2/Oyc9CgeRZ47cWG0eGa8jbznJ7+7pGcKgTPlVtXaN1d3d0rk1T5bD8PLiRRV2ZXNO5t/jydeJVUNOVDmtvcfvDkVtWmOSQYk6Bf2GGdKLwPxS7iV1Xu1d+l6M3bG4va91Vwyce3ji0GilbBnmDE68Aq8GV9dJbuLolA7WsP9p8OXpcGetWbRZw05h/6PIwmGzdv/BuEsgRbdLYyxZqbcAmm3pGx2QQbqd8dVUahR8rZ0q7yuIgzR+8VJV5W9gPq967mWAGbe62ZtI2lBCrrtuu/qGZ7OKq/D4Kf25sL8xwmJcK8vELnKtN2jpsujm25tO+rivju3vmiTkWlDcpoKqMvUyqurw2fS4qvZhe5vQxzWirqcbGXNopqE6BKc0Cpt22v+nNn6E2nRzv6RoK7jL+bQ2J0EPgA4BQoWI6DQUTgiOLIyVYnEoBPBChnKfeXT+B5FvbtbaSahAlWSlODo2qTeVeUQnXOPR/N/l/4CkVH9lljDebC60rV/o0pACJtYWgv49bX92jmftEO/7H+XDFqYWug19RpWd/7lZ6pIkBxLQscwS7wTB4KgyFv4vhAdiOUvYwS2vBB/Ob+8fxs3DbqLcL284gn4U2xQMp5lwwDNWciTCasZgryfwoDblE1Cj0S9EW+7FQB5fY33rmoGnQJZSr387tx67X53qQYNomO573PXynhDyO0gtahR6hU5sbCe0KOLsYuzvQ9EBms04zgBkeB3OwnEJm7PvPwuZPBG8UZ5e7cTTPwhxgFECQ+owgyJhII84gkJLFsyhMtVQZyuClmPPjY2sZbK0fZUmaZeOwOArcxu002n7wfwrUTuhpDGzTs4t1U/c1egAy8RuyXwyyiB40CKI5y2INTESoiS/NWaTTVPqcq5THLwWZTuOZ0FoKqXWG3M9ELCmKfnZ+WbTZvUI9zNjocwpgu85PQdcJzawD37/eg2u7wQNsRb/Z+sXYEqEKUcmYcZkFTNCW01+0UDItZ2E0l3PAWfZotr7+C5ml6esdEQAA',
        ui_id: '5791a2af-956e-48ca-9268-d0f67f3b18b4',
        wait_for_completion: 'true',
    },
})
Record({
    $id: Now.ID['06e6c91b47ddfe10f487c24fe16d433d'],
    table: 'sys_hub_sub_flow_instance_v2',
    data: {
        flow: '2b4711ca47b0e210f487c24fe16d431e',
        order: '18',
        parent_ui_id: 'fcbc6bed-d3f7-48cb-adfd-70d08b824d6d',
        show_stages: 'false',
        subflow: '3374804247fca21051a3e84d416d438f',
        subflow_inputs:
            'H4sIAAAAAAAA/+2XW2/bOBCF/0qgZ8srSpQp+61IEKBAL4t1ty9FIYzIUUKAolyJSuM18t93ZMmynYtjo2kRFH1LhofimTP8QPjLyqub7NKU39/a2oGV+FZ5M09BzpSUIRdRgCELYgYRJlxxNlE8CsAbebrVCSF4EnDS5RIe6KaMdBYKJGWF3xqsHRVuwDRtZbU6rxAcqpSNZVNVaN3dHa0rXS8MLD/3MqrIa20UrXuzL19H3gIq+qTDyput7i0d68lAhoak/wymHrh0y0VXyJE+L7EvvRt2butlpVozbOThrUOrkFzkYGoceQVYBa6slt7MVQ0VqGP10ZrloLjW1nVdFnBb6//o0Cgc7Zw7825TMIg2re1VA5XSYNOtz0GY9rnttZVfgIM5HS1dUw1pllpi3SWmMIfGuPPdWif4uHC6tN0WB5l51oksTVPYD12Q3vDpnTk2NbnERRtR23SfQD6/Lr8PeV5qu06zXzSlBLMjRajk9aVG007aNkVG2pEHzlU6a1zbwcpr9KeHw+uKj40PDRbkJy1gsdD2Kl1U5Y1ee6CWivGVoX/GORFC3mt9Zccg22TGNFgYt+RcrMufodJtTO/pM2tTjf7XagpnDVQAAFxG0ldZxH3OGfpJLLmfZIIDC3kkppl3N/LqZX1uoK63MVIT6bemDaELtY8v7WbTbpGVXrg3ZOoG+6TuRj+GtZTJAYQw2QIDjSu7xGrKhOLbATx4CPPa3clEH2FnQ/Qb8nP2976fA1Z7yrOyNAj2HuOfiNi/LnvHPeThS0HOg33In0D55Rl+ntTNkPryxeMj/GGYn4B2O4t9ZPem8UuYlSwUfMq4j5Gc+jyKJ37CpPCDOIuYQFTI1ethNgkSLp+EJNh5iskqupTOWt/+3Qd5ndhNH8q4SfeUjz3Ox2w5jfUj2hhYb486mw99PNFez3hNt21gfnOp5ptij3d0GO++cgzfSRC8XsJ/Ir5DzPv0DkH/EnIB4xDCLPAJnNznWcx8CIXwk0kcZUrIHEX4esgNkkNXPty52nRKSp4dFgex3cqOY/ae/jRgj3C/AZZQPZtv7D/W0imo8j+o/g6oxvS4QhhP/TxR4PMYFVGqmB+rLBMBYzJjyetBVWXJhCsluFAqRxbkPBG0i/5sdXm8vdeFfJ7UQXMMpvvi0xg9wvaG0ffnDxDdbeUUQuM/hP4OhPJIRihF4jORhz4nMuinayR8JSZRPBVTwEn+goR+/R9GAaH1kxIAAA==',
        ui_id: '5791a2af-956e-48ca-9268-d0f67f3b18b4',
        wait_for_completion: 'true',
    },
})
Record({
    $id: Now.ID['42e6c91b47ddfe10f487c24fe16d4323'],
    table: 'sys_hub_sub_flow_instance_v2',
    data: {
        flow: '2b4711ca47b0e210f487c24fe16d431e',
        order: '12',
        parent_ui_id: '2377742b-c812-4404-9b7d-21d595697ebf',
        show_stages: 'false',
        subflow: 'b93fc4ce47fca21051a3e84d416d4326',
        subflow_inputs:
            'H4sIAAAAAAAA/42Ty27bMBBF/4VrWbAs+bkrHBgI0DZA02YTBMKIHNoEKErhw7Fr+N87lBTHrQu0S965HN45Az6fmAvVRjdv98Z5MBzvBVuxuVxm04JPink+xkk2nmaQ46IQRTYTRS4lS5iKPilyyQuOxVxyuPFNFuQzUCM5Lb4GdJ6EPegQldNpbRE8ijJLebAWjT+fqS6UazUcnwYbKXyntKA6Wz2/JKwFSy09WrY6/VH630waKtS/hbpJ6Y9tL0ik9hwH6fNw89uV3lgRw2QJw4NHI5BSSNAOE1aDEeAbe2QrbwMJNLF4MPp4ceyU8f2UNRyc+kmP5pPk6t0VO5SgEU3pzDaAFQpM+ZHzYiwHbl2496q8Aw+P9DT3wV5oNoqj64kJlBC0X19rveGh9aox/RUPlf5nEt7oUJuvPUh2aX21x+AoJbYRURx6ICAfd83bhedGmY7mUNQNB31lRbB8t1Go46ZNqCvyJgy8t6oKPk5wYkF9v11eL/5tfaixpjxlDW2rzLZsbbNXXQYaqU63mg6ppB9C2Z3amhR4JJPSYiGNP+euk5/AqojpC7XpQgX1wyiC032o6WIsuBTjUTErcFTAshpBVokRLuVsucRJLqBi54S5o1trcO4DIw1RvoYIoYc64Cv73cQr3KrWf6JQexxInV9+AaRTfKLYAwAA',
        ui_id: 'b66258d3-cc4b-494c-b5f1-37b571bc2108',
        wait_for_completion: 'true',
    },
})
Record({
    $id: Now.ID['8ae6c91b47ddfe10f487c24fe16d4318'],
    table: 'sys_hub_sub_flow_instance_v2',
    data: {
        flow: '2b4711ca47b0e210f487c24fe16d431e',
        order: '8',
        parent_ui_id: 'a3c76d8f-1c6c-4c09-86ae-1ecb3152e9d5',
        show_stages: 'false',
        subflow: '93ca408a47fca21051a3e84d416d43b5',
        subflow_inputs:
            'H4sIAAAAAAAA/42TW4vbMBCF/4ueHWPHdm5vJUtgoe1Ct92XZTFjaZwIZNmrSzZpyH/vKDZO2hTaR505Gp35Br2emPXVRrUfj9o60BwfBVuxbL5Mi5xP83mW4DRNihQyXOQiT2cizyBjEZPBJ+Yc8mQB+bzmcOer5uTT0CA5Db57tI6EPSgflNNpbRAcijKNuTcGtTufqS6k7RQcXwYbKXwnlaA6W72+RawDQy0dGrY6/VH630wKKlRk/TaGukvpjl0v1EjtOQ7S5/HmVW+NCGHSiOHBoRZIKWpQFiPWgBbgWnNkK2c8CTSxeNLqODp2Urt+ygYOVv6kR7NpdPPuih1KUIi6tHrrwQgJurzmHI3lwO23seoHcPBMT3PnzUizlRxtT0xgDV659a3WG546J1vdX3FQqX8m4a3yjf7ag2Rj65s9ekspsQuIwtADgfp5136MPDdSX2gORdVyUDdWBMN3G4kqbFr7piJvxMA5IyvvwgQn5uX3++X14t/WhwobylM20HVSb8vOtHt5yUAjNfFW0SGu6YdQdiu3OgYeyMS0WIjDz3m4yC9gZMD0hdpcQnn5Q0uCc/lQaZLPRDYtJsUyX0zybLacVCkdqzTJClgsZ1mdsHPE7NGuFVh7xUhDlO8+QOihDvjKfjfhCjeyc58o1B4HUue3X+iDqwzYAwAA',
        ui_id: '896d90cb-61b8-4abe-85bd-30c9021ea412',
        wait_for_completion: 'true',
    },
})
Record({
    $id: Now.ID['cee6c91b47ddfe10f487c24fe16d4339'],
    table: 'sys_hub_sub_flow_instance_v2',
    data: {
        flow: '2b4711ca47b0e210f487c24fe16d431e',
        order: '16',
        parent_ui_id: 'ed703c57-ef29-4e3e-b892-73527870955f',
        show_stages: 'false',
        subflow: '3374804247fca21051a3e84d416d438f',
        subflow_inputs:
            'H4sIAAAAAAAA/+2XX2+bShDFv0rEs/FlYfGC36pEkSr1z9V1b1+qCg27Q4K0LC4saXytfPc7GIzt2HFsNa2iqm/2cJY9c2Z/a/nL0qmb9FqX39+a2oKR+FY5UycIYhZz6XMReOgzL2QQYMQVZxPFAz9yRk7e6oQQPPI46TIJe7qYkc5AgaSs8FuDtaXCHeimrSyXlxWCRZWwsWyqCo19eKDnKq/nGhafexlV5G2uFT13pl++jpw5VPRKi5UzXT56dKonDSlqkv4zmNpzaRfzrpAhvV5iX3o3rNzUy0q1ZtjIwXuLRiG5yEDXOHIKMApsWS2cqa0aKlDH6qPRi0FxmxvbdVnAfZ3/R5sG/mhr36lzn4BGNEltbhqoVA4m2fgchEmf205b2RVYmNHW0jbVkGaZS6y7xBRm0Gh7uV3rBB/nNi9Nt8RCqp91IkvdFOZDF6QzvHprjk1NLnHeRtQ23SeQzW7L70Oe17lZpdk/1KUEvSVFqOTtdY66nbRpipS0IwesrfK0sW0HS6fJP+0PryseGh9qLMhPUsB8npubZF6Vd/nKA7VUjG80fRlnRAh5r/MbMwbZJjOmwcK4JedqVf4MVd7G9J5eszLV5P+anMJZAeUBAJeBdFUacJdzhm4USu5GqeDAfB6IOHUeRk69qC811PUmRmoi+da0IXSh9vEl3WzaJbLK5/YNmbrDPqmH0Y9hLWV0BCGMNsBAY8susZoyofh2AF+ldtcHM26SPfUh4FcdnE39CZbX1L8hFxd/73o+0k5/E6RlqRHMo3vgE1H913XvuL8I/Je6CLi3exE8gfvLc/48zesh9eWrwyP8YeCfAHszi12sd6bxS7iWzBc8ZtzFQMYuD8KJGzEpXC9MAyYQFXL1eriOvIjLJyHxtn6uySrahPZanf6jTG8rD/F8ypLzWD+hjYH1dquL2dDHE+31jNd02gbm14dqti72eAfH8e4rp/Aded7rJfwn4jvEvEvvEPQvIRcw9MFPPVdJmbk8DZkLvhBuNAmDVAmZofBfD7ledOzI+1tHm3ZJyLPF4ii2G9lpzD7SnwfsCe7XwBKqF7O1/UMtnYMq/4Pq74BqSD+u4Iexm0UKXB6iIkoVc0OVpsJjTKYsej2oqjSacKUEF0plyLyMR4JW0cdWl4Wbc13I50kdNKdguis+j9ETbK8ZfX+5h+h2K+cQGv4h9HcglAcyQCkil4nMdzmRQX9vA+EqMQnCWMSAk+wFCf36PyexG0K3EgAA',
        ui_id: 'eeb3b969-e838-43d8-a4bf-d29e10f803ad',
        wait_for_completion: 'true',
    },
})
