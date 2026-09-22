import { Record } from '@servicenow/sdk/core'

Record({
    $id: Now.ID['e330bbdeeb175e10e317ff47bad0cd67'],
    table: 'sys_hub_flow',
    data: {
        access: 'public',
        acls: '',
        active: true,
        attributes:
            'browserActivatedIn=chrome,integrationActivatedIn=standalone,labelCacheCleanUpExecuted=true,timeFromCreateToActivate=33522858000,viewActivatedIn=naturalLanguage',
        callable_by_client_api: false,
        copied_from: '1ed7f2e4ebcbd2100326f284dad0cded',
        copied_from_name: 'New Badge Request (NFC) v3.0',
        description: 'Auto Approved Mobile Cred Request Flow',
        flow_priority: 'MEDIUM',
        internal_name: 'copy_of_new_badge_request_nfc_v30',
        label_cache:
            '[{"name":"a33b890e-2c8e-4d94-9b14-9da003c7536a.record.provisioning_message","label":"8 - Create Record➛Identity Asset Record➛Provisioning Message","reference":"","reference_display":"Provisioning Message","type":"string","base_type":"string","parent_table_name":"x_aleen_snguardian_identity_asset","column_name":"provisioning_message","usedInstances":{"3522cd61-c65b-47ad-848b-332c71f6ed6a":["work_notes"]}},{"name":"a33b890e-2c8e-4d94-9b14-9da003c7536a.record.asset.number","label":"8 - Create Record➛Identity Asset Record➛Asset➛Number","reference":"","reference_display":"Number","type":"string","base_type":"string","parent_table_name":"x_aleen_snguardian_asset","column_name":"number"},{"name":"a33b890e-2c8e-4d94-9b14-9da003c7536a.record.number","label":"8 - Create Record➛Identity Asset Record➛Number","reference":"","reference_display":"Number","type":"string","base_type":"string","parent_table_name":"x_aleen_snguardian_identity_asset","column_name":"number","usedInstances":{"b42a474f-93ae-4e6e-8274-c4cb3c6da787":["work_notes"]}},{"name":"a33b890e-2c8e-4d94-9b14-9da003c7536a.record.provisioning_status.code","label":"8 - Create Record➛Identity Asset Record➛Provisioning Status➛Code","reference":"","reference_display":"Code","type":"string","base_type":"string","parent_table_name":"x_aleen_snguardian_provisioning_status","column_name":"code","usedInstances":{"5918978c-25b0-441d-a6e0-29422cb5c6c8":["condition"]}},{"name":"4a5c8453-3acd-4128-99c0-d7835636cbcf.record.number","label":"12 - Create Record➛Identity Asset Record➛Number","reference":"","reference_display":"Number","type":"string","base_type":"string","parent_table_name":"x_aleen_snguardian_identity_asset","column_name":"number"},{"name":"4a5c8453-3acd-4128-99c0-d7835636cbcf.record.provisioning_message","label":"12 - Create Record➛Identity Asset Record➛Provisioning Message","reference":"","reference_display":"Provisioning Message","type":"string","base_type":"string","parent_table_name":"x_aleen_snguardian_identity_asset","column_name":"provisioning_message"},{"name":"cbe1f6d5-7d46-4882-9b97-19bd3932de77.Record.provisioning_message","label":"14 - Look Up Record➛Identity System Record➛Provisioning Message","reference":"","reference_display":"Provisioning Message","type":"string_full_utf8","base_type":"string_full_utf8","parent_table_name":"x_aleen_snguardian_identity_system","column_name":"provisioning_message"},{"name":"4a5c8453-3acd-4128-99c0-d7835636cbcf.record.provisioning_status.code","label":"12 - Create Record➛Identity Asset Record➛Provisioning Status➛Code","reference":"","reference_display":"Code","type":"string","base_type":"string","parent_table_name":"x_aleen_snguardian_provisioning_status","column_name":"code"},{"name":"4a5c8453-3acd-4128-99c0-d7835636cbcf.record.asset.number","label":"12 - Create Record➛Identity Asset Record➛Asset➛Number","reference":"","reference_display":"Number","type":"string","base_type":"string","parent_table_name":"x_aleen_snguardian_asset","column_name":"number"},{"name":"4a5c8453-3acd-4128-99c0-d7835636cbcf.record.provisioning_status","label":"12 - Create Record➛Identity Asset Record➛Provisioning Status","reference":"x_aleen_snguardian_provisioning_status","reference_display":"Provisioning Status","type":"reference","base_type":"reference","parent_table_name":"x_aleen_snguardian_identity_asset","column_name":"provisioning_status"},{"name":"6a8a1dda-a660-487c-89be-cd6d95ff3835.Record","label":"9 - Look Up Record➛System Record","reference":"x_aleen_snguardian_system","reference_display":"System","type":"reference","base_type":"reference","attributes":{"element_mapping_provider":"com.glide.flow_design.action.data.FlowDesignVariableMapper"}},{"name":"Created_1.current.request_for","label":"Trigger - Record Created➛Request Record➛Request For","reference":"x_aleen_snguardian_identity","reference_display":"Identity","type":"reference","base_type":"reference","parent_table_name":"x_aleen_snguardian_request","column_name":"request_for","usedInstances":{"21c1a7f7-97e4-4271-8c67-05dca876950f":["conditions"]}},{"name":"47dcb633-1717-4ca6-83ef-876f3f74638e.record","label":"10 - Create Record➛Asset Record","reference":"x_aleen_snguardian_asset","reference_display":"Asset","type":"reference","base_type":"reference","attributes":{"element_mapping_provider":"com.glide.flow_design.action.data.FlowDesignVariableMapper"}},{"name":"64934999-aa82-4eb5-9393-bbbf141f8a57.Record","label":"8 - Look Up Record➛System Record","reference":"x_aleen_snguardian_system","reference_display":"System","type":"reference","base_type":"reference","attributes":{"element_mapping_provider":"com.glide.flow_design.action.data.FlowDesignVariableMapper"}},{"name":"4821266c-a7da-42dc-825c-670d17727524.Record","label":"7 - Look Up Record➛Asset Type Record","reference":"x_aleen_snguardian_asset_type","reference_display":"Asset Type","type":"reference","base_type":"reference","attributes":{"element_mapping_provider":"com.glide.flow_design.action.data.FlowDesignVariableMapper"}},{"name":"flow_variable.sub_system_code","label":"Flow Variables➛sub_system_code","reference":"","reference_display":"","type":"string","base_type":"string","column_name":"","usedInstances":{"fe44eeea-f264-40b9-b1db-baf6613aa36b":["conditions"]},"attributes":{"uiType":"string","uiTypeLabel":"String","element_mapping_provider":"com.glide.flow_design.action.data.FlowDesignVariableMapper","uiUniqueId":"4e36e68d-9895-4bf6-a076-af199bfb6cc7"}},{"name":"flow_variable.sub_type_code","label":"Flow Variables➛sub_type_code","reference":"","reference_display":"","type":"string","base_type":"string","column_name":"","usedInstances":{"891ac64a-6ee6-452e-986b-fcc9721cb829":["conditions"],"6f4d5512-0d59-4533-b30a-4b38ea9c9a8f":["conditions"]},"attributes":{"uiType":"string","uiTypeLabel":"String","element_mapping_provider":"com.glide.flow_design.action.data.FlowDesignVariableMapper","uiUniqueId":"4b0b3b72-4c4f-4a66-aba0-71ff08427881"}},{"name":"2be3b193-f53c-423d-9e52-4b8c6b69cd70.Record","label":"2 - Look Up Record➛Asset Record","reference":"x_aleen_snguardian_asset","reference_display":"Asset","type":"reference","base_type":"reference","attributes":{"element_mapping_provider":"com.glide.flow_design.action.data.FlowDesignVariableMapper"}},{"name":"flow_variable.asset_id","label":"Flow Variables➛asset_id","reference":"x_aleen_snguardian_asset","reference_display":"Asset","type":"reference","base_type":"reference","attributes":{"sourceUiUniqueId":"","sourceType":"","sourceId":"","uiUniqueId":"404abe18-be74-4f92-8ea6-758400c74452"}},{"name":"Created_1.current","label":"Trigger - Record Created➛Request Record","reference":"x_aleen_snguardian_request","reference_display":"Request","type":"reference","base_type":"reference","usedInstances":{"6b3956f5-0748-412a-b856-8dc1dd64fa39":["record"],"3522cd61-c65b-47ad-848b-332c71f6ed6a":["record"]},"attributes":{}},{"name":"1655ce6f-3277-4810-b783-354ac8577b7f.__status__.message","label":"13 - Top Level Catch➛Error Status➛Message","reference":"","reference_display":"","type":"string","base_type":"string","column_name":"","usedInstances":{"6b3956f5-0748-412a-b856-8dc1dd64fa39":["work_notes"]},"attributes":{}},{"name":"Created_1.current.request_for.full_name","label":"Trigger - Record Created➛Request Record➛Request For➛Full Name","reference":"","reference_display":"Full Name","type":"string","base_type":"string","parent_table_name":"x_aleen_snguardian_identity","column_name":"full_name","usedInstances":{"cb6d56d9-5dec-439d-a2bd-4f874f30d6e0":["work_notes"]}},{"name":"flow_variable.system","label":"Flow Variables➛system","type":"string","base_type":"string","usedInstances":{"c6f46e21-2165-4a9d-b7cc-e908cf0be671":["conditions"]},"attributes":{"sourceUiUniqueId":"","sourceType":"","sourceId":"","uiUniqueId":"1b16fdae-3a8a-464a-a839-4714c450c48c"}},{"name":"a33b890e-2c8e-4d94-9b14-9da003c7536a.record.asset.serial","label":"8 - Create Record➛Identity Asset Record➛Asset➛Serial","reference":"","reference_display":"Serial","type":"string","base_type":"string","parent_table_name":"x_aleen_snguardian_asset","column_name":"serial","usedInstances":{"b42a474f-93ae-4e6e-8274-c4cb3c6da787":["work_notes"]}},{"name":"Created_1.current.sys_id","label":"Trigger - Record Created➛Request Record➛Sys ID","reference":"","reference_display":"Sys ID","type":"GUID","base_type":"GUID","parent_table_name":"x_aleen_snguardian_request","column_name":"sys_id","usedInstances":{"a33b890e-2c8e-4d94-9b14-9da003c7536a":["datasource"]}},{"name":"Created_1.current.request_for.type.sys_id","label":"Trigger - Record Created➛Request Record➛Request For➛Type➛Sys ID","reference":"","reference_display":"Sys ID","type":"GUID","base_type":"GUID","parent_table_name":"x_aleen_snguardian_identitytype","column_name":"sys_id","usedInstances":{"2697b8d3-6939-45b6-bc95-7d8d5cc9f07e":["employee_type-0"]}},{"name":"21c1a7f7-97e4-4271-8c67-05dca876950f.Record.location.sys_id","label":"1 - Look Up Record➛Identity Location Record➛Location➛Sys ID","reference":"","reference_display":"Sys ID","type":"GUID","base_type":"GUID","parent_table_name":"x_aleen_snguardian_location","column_name":"sys_id","usedInstances":{"2697b8d3-6939-45b6-bc95-7d8d5cc9f07e":["identity_location-1"]}},{"name":"flow_variable.decision_table","label":"Flow Variables➛decision_table","type":"string","base_type":"string","usedInstances":{"6959c9b3-7a3a-4ae8-8d5d-22b2258c22dd":["code"]},"attributes":{"sourceUiUniqueId":"","sourceType":"","sourceId":"","uiUniqueId":"009bf178-85a4-4f1e-b48e-dff21ff8b2ff"}},{"name":"21c1a7f7-97e4-4271-8c67-05dca876950f.Record","label":"1 - Look Up Record➛Identity Location Record","reference":"x_aleen_snguardian_identity_location","reference_display":"Identity Location","type":"reference","base_type":"reference","usedInstances":{},"attributes":{"element_mapping_provider":"com.glide.flow_design.action.data.FlowDesignVariableMapper"}},{"name":"flow_variable.identity_location","label":"Flow Variables➛identity_location","reference":"","reference_display":"","type":"string","base_type":"string","column_name":"","usedInstances":{"2200b803-bd18-4734-825e-3dca7db67bfb":["conditions"]},"attributes":{"uiType":"string","uiTypeLabel":"String","element_mapping_provider":"com.glide.flow_design.action.data.FlowDesignVariableMapper","uiUniqueId":"011c6de1-c559-4b77-ae12-27c8ed7d2dda"}},{"name":"2200b803-bd18-4734-825e-3dca7db67bfb.Record.system.code","label":"3 - Look Up Record➛Location Administration Record➛PAC System➛Code","reference":"","reference_display":"Code","type":"string","base_type":"string","parent_table_name":"x_aleen_snguardian_system","column_name":"code","usedInstances":{"b51c2f48-8569-4996-a60a-1abec6190c10":["sub_system_code-0"]}},{"name":"2200b803-bd18-4734-825e-3dca7db67bfb.Record.mc_sub_type.code","label":"3 - Look Up Record➛Location Administration Record➛MC Sub Type➛Code","reference":"","reference_display":"Code","type":"string","base_type":"string","parent_table_name":"x_aleen_snguardian_asset_type","column_name":"code","usedInstances":{"b51c2f48-8569-4996-a60a-1abec6190c10":["sub_type_code-1"]}},{"name":"2200b803-bd18-4734-825e-3dca7db67bfb.Record.mc_nfc_system.code","label":"3 - Look Up Record➛Location Administration Record➛MC NFC System➛Code","reference":"","reference_display":"Code","type":"string","base_type":"string","parent_table_name":"x_aleen_snguardian_system","column_name":"code","usedInstances":{"b51c2f48-8569-4996-a60a-1abec6190c10":["system-2"]}},{"name":"2200b803-bd18-4734-825e-3dca7db67bfb.Record.mc_nfc_system","label":"3 - Look Up Record➛Location Administration Record➛MC NFC System","reference":"x_aleen_snguardian_system","reference_display":"System","type":"reference","base_type":"reference","parent_table_name":"x_aleen_snguardian_badge_office","column_name":"mc_nfc_system","usedInstances":{"b452b535-5c44-4c4b-ae94-060895186602":["system"]}},{"name":"2200b803-bd18-4734-825e-3dca7db67bfb.Record.system","label":"3 - Look Up Record➛Location Administration Record➛PAC System","reference":"x_aleen_snguardian_system","reference_display":"System","type":"reference","base_type":"reference","parent_table_name":"x_aleen_snguardian_badge_office","column_name":"system","usedInstances":{"b452b535-5c44-4c4b-ae94-060895186602":["sub_system"]}},{"name":"2200b803-bd18-4734-825e-3dca7db67bfb.Record.mc_sub_type","label":"3 - Look Up Record➛Location Administration Record➛MC Sub Type","reference":"x_aleen_snguardian_asset_type","reference_display":"Asset Type","type":"reference","base_type":"reference","parent_table_name":"x_aleen_snguardian_badge_office","column_name":"mc_sub_type","usedInstances":{"b452b535-5c44-4c4b-ae94-060895186602":["sub_type"]}},{"name":"b452b535-5c44-4c4b-ae94-060895186602.record","label":"6 - Create Record➛Asset Record","reference":"x_aleen_snguardian_asset","reference_display":"Asset","type":"reference","base_type":"reference","usedInstances":{"e1b52a3d-1293-4e1d-b26a-7a1dcf83d010":["asset_id-0"]},"attributes":{"element_mapping_provider":"com.glide.flow_design.action.data.FlowDesignVariableMapper"}},{"name":"a33b890e-2c8e-4d94-9b14-9da003c7536a.record","label":"8 - Create Record➛Identity Asset Record","reference":"x_aleen_snguardian_identity_asset","reference_display":"Identity Asset","type":"reference","base_type":"reference","usedInstances":{},"attributes":{"element_mapping_provider":"com.glide.flow_design.action.data.FlowDesignVariableMapper"}}]',
        master_snapshot: 'd9fd88a633d39e10bf1221382e5c7b3a',
        name: 'Alert Single Mobile Credential Request (Bulk)',
        pre_compiled: false,
        remote_trigger_id: '92fdc8a633d39e10bf1221382e5c7b73',
        run_as: 'system',
        run_with_roles: '',
        sc_callable: false,
        show_draft_actions: false,
        show_triggered_flows: false,
        status: 'published',
        sys_domain: 'global',
        sys_domain_path: '/',
        type: 'flow',
        version: '2',
        latest_snapshot: 'd9fd88a633d39e10bf1221382e5c7b3a',
        compiler_build: 'glide-washingtondc-12-20-2023__patch10-hotfix3b-05-20-2025_05-23-2025_1940.zip',
    },
})
Record({
    $id: Now.ID['92fdc8a633d39e10bf1221382e5c7b73'],
    table: 'sys_flow_record_trigger',
    data: {
        active: 'true',
        condition: 'request_type=6375cc2e33939e10bf1221382e5c7bbf',
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
    $id: Now.ID['e7c7b11f47c7f21051a3e84d416d43fc'],
    table: 'sys_trigger_runner_mapping',
    data: {
        active: 'true',
        data: '{"run_flow_in":"background","run_when_user_list":[],"run_when_setting":"both","run_when_user_setting":"any","run_on_extended":"false"}',
        identifier: 'e330bbdeeb175e10e317ff47bad0cd67',
        runner: 'FDTriggerRunner',
        trigger: '92fdc8a633d39e10bf1221382e5c7b73',
    },
})
Record({
    $id: Now.ID['e730bbdeeb175e10e317ff47bad0cd74'],
    table: 'sys_flow_cat_variable_model',
    data: {
        id: 'e330bbdeeb175e10e317ff47bad0cd67',
        name: 'Copy of New Badge Request (NFC) v3.0',
    },
})
Record({
    $id: Now.ID['d5fd88a633d39e10bf1221382e5c7b3b'],
    table: 'sys_flow_cat_variable_model',
    data: {
        id: 'd9fd88a633d39e10bf1221382e5c7b3a',
        name: 'Single Mobile Credential Request (Bulk)',
    },
})
Record({
    $id: Now.ID['cc59886233d39e10bf1221382e5c7b03'],
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
        model: 'e330bbdeeb175e10e317ff47bad0cd67',
        model_id: 'e330bbdeeb175e10e317ff47bad0cd67',
        model_table: 'sys_hub_flow',
        name: 'var__m_sys_hub_flow_input_e330bbdeeb175e10e317ff47bad0cd67',
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
    $id: Now.ID['cc59886233d39e10bf1221382e5c7b07'],
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
        model: 'e330bbdeeb175e10e317ff47bad0cd67',
        model_id: 'e330bbdeeb175e10e317ff47bad0cd67',
        model_table: 'sys_hub_flow',
        name: 'var__m_sys_hub_flow_input_e330bbdeeb175e10e317ff47bad0cd67',
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
    $id: Now.ID['19fd88a633d39e10bf1221382e5c7b4f'],
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
        model: 'd9fd88a633d39e10bf1221382e5c7b3a',
        model_id: 'd9fd88a633d39e10bf1221382e5c7b3a',
        model_table: 'sys_hub_flow_snapshot',
        name: 'var__m_sys_hub_flow_input_d9fd88a633d39e10bf1221382e5c7b3a',
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
    $id: Now.ID['d5fd88a633d39e10bf1221382e5c7b3c'],
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
        model: 'd9fd88a633d39e10bf1221382e5c7b3a',
        model_id: 'd9fd88a633d39e10bf1221382e5c7b3a',
        model_table: 'sys_hub_flow_snapshot',
        name: 'var__m_sys_hub_flow_input_d9fd88a633d39e10bf1221382e5c7b3a',
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
    $id: Now.ID['9847646947433a10f487c24fe16d4388'],
    table: 'sys_hub_trigger_instance_v2',
    data: {
        flow: 'e330bbdeeb175e10e317ff47bad0cd67',
        name: 'Created',
        trigger_definition: '798916a0c31322002841b63b12d3ae7c',
        trigger_inputs:
            'H4sIAAAAAAAA/+VYXW/bNhT9K4KeNiAD9GFbVt66JMUCdM3gpNtDFhAUeWkLoylXopR6Rf77SH1FliV/pVnt9MWASPrqnMtzDy91/9WUcTidQnwtEokFgdtlck3Nc9MaDP3xeOS4LnV9sK2A2Y5ju2MHhsQLLGKemRwHwNXSOxxwUM+hkBALzO+WC1DDUg8jged6bo4FxTKKl+a5jFM4M6OYQmye22dmvqJcrlZmmKf6+QvCHECgRExTHNMQCxTD5xQSqRbRMFlwvPyzXDupJxY4VuGkDv3VJLOQ0xiEeX7/oOBpWoQR7DtgEdd2HceynPHADkZuYDvUxWBZHbRa+GQHu2cy8EWCoKBexTBPoIN4DJjeCL6sV8xU3lTAPElfkvBfFX1s6XUMFHYCxVz9iEruxTCZRSGBm4UMI1GMFDiLyYinc/GxwK+zBgynXFZZUyNpouLBQkPWIEpE7HYWPU6qF74PRc6unOQRwbx+wlLpJ0glJDrhLOQq9ajITRKlcY5+cnVxM7lEf727u/jtaoImV7d3k+uLu6tL8ynnhT6nOmKBsMSCCjpP9Va/D4HrDRTpPFBozsyExOFCviMyzKCE83T2LeR8EQka5vlckzSpppIm1oY4GrtdJqiShmXVSiKNF1RqL6WNtLr+Ti3LpSPXGxLigOv6HYgDtl4FB8XYVjCjEcYUcE/B5CG6EtdBVXbksJmdTaVTjuxSOwPL+k7VU9T3wcUzjyjwy6aoCimjUCxSqbP1iIVMkIwQphQ18qiXKkzbqqng9vSKpROnQr0K1Tu5XkB5wuvMfwiVaZ/fK+OospqDUfPsQxlykgojUluufgySxiqp0qiqjV3P8bTcC/ZHJeQ8maX+MhwjNEfJMkGzNEArGUWeP/btUZ+0PbKSwbxQVeh703x40rsMHIhsqJV9SppPv4dJEoppI701x3yz1ijW7JTqjSqDBdXktLg+7OiD62rJWipoH/MbtLDNx2ybsQCYY3mavm25SsaWZw0xo65lEWejinsBy5asX8XP9nOzJC8ovkP5tLNdgddi5ftoM1sVdhnH0UIoTfPiCKG1zN/dy/1rhRbDl7sL9Ru3XJhm2qzprofAq/s/49GjMp0DvD/A5J9pHKWCtt1RxzRCYTyvMH4qM//zaXlj8xxgUQyb+a6uOB2W+5wAz3qpahWL5br3F4PbXN5lduDDACxl7q7y9WDo+wHBDmPeyAPH7tVqJ6CTcPcttZF1FVefnXbqLuuS6x4e//0BvsjpSzV2+nwx99Yd/XEGAimSMeJh/pGlZexTHlKo5nau+7Wo2fPFqlX7OxQ+G/tkaHse8ZSzqcJnAwiwPXCG2PdG7ni4jdImYLKD5v9ycdVGroH0mMKnYuq4PgEdp3oTkFKfT/s3JUI1/Pl/cAGvcVLrDTVyV4pi42Mkfrl+XmfcgjoR8+8eJ3RuN7uTXUhrBRpvinUQydlaN6aY/qrGV5jq60bPnr/h63qrmLLVrHVc1w/J3darPAzGQ5+53V7P/M0G0M/m6Nu9HQ0n67WurrZq14LOOn2hbrPajdoB+95SUxna3dJi/rhJeVFbW5Vs7/eLQ8D+EL1E3hq+pKHQaAFFrHnOXEaGmjDUS4yQGSVaoEawNOQM1GZwdfNRLzT020/sgGmer+vM61J707yLm+JaW6GGjbLDPyFie3cMrZLZ+KGnIzXbGgKgHh4O3Z7Ln9/+6tMFaQvio28N9vaPrMuONh6F+8Vtx+w8DBt7vKqJHc/+N8z61b5ZdaA40mP74T9uc5LSniQAAA==',
        trigger_type: 'record_create',
    },
})
Record({
    $id: Now.ID['b847a46947433a10f487c24fe16d43c2'],
    table: 'sys_hub_trigger_instance_v2',
    data: {
        flow: 'd9fd88a633d39e10bf1221382e5c7b3a',
        name: 'Created',
        trigger_definition: '798916a0c31322002841b63b12d3ae7c',
        trigger_inputs:
            'H4sIAAAAAAAA/+VYXW/bNhT9K4KeNiAD9GFbVt66JMUCdM3gpNtDFhAUeWkLoylXopR6Rf77SH1FliV/pVnt9MWASPrqnMtzDy91/9WUcTidQnwtEokFgdtlck3Nc9MaDP3xeOS4LnV9sK2A2Y5ju2MHhsQLLGKemRwHwNXSOxxwUM+hkBALzO+WC1DDUg8jged6bo4FxTKKl+a5jFM4M6OYQmye22dmvqJcrlZmmKf6+QvCHECgRExTHNMQCxTD5xQSqRbRMFlwvPyzXDupJxY4VuGkDv3VJLOQ0xiEeX7/oOBpWoQR7DtgEdd2HceynPHADkZuYDvUxWBZHbRa+GQHu2cy8EWCoKBexTBPoIN4DJjeCL6sV8xU3lTAPElfkvBfFX1s6XUMFHYCxVz9iEruxTCZRSGBm4UMI1GMFDiLyYinc/GxwK+zBgynXFZZUyNpouLBQkPWIEpE7HYWPU6qF74PRc6unOQRwbx+wlLpJ0glJDrhLOQq9ajITRKlcY5+cnVxM7lEf727u/jtaoImV7d3k+uLu6tL8ynnhT6nOmKBsMSCCjpP9Va/D4HrDRTpPFBozsyExOFCviMyzKCE83T2LeR8EQka5vlckzSpppIm1oY4GrtdJqiShmXVSiKNF1RqL6WNtLr+Ti3LpSPXGxLigOv6HYgDtl4FB8XYVjCjEcYUcE/B5CG6EtdBVXbksJmdTaVTjuxSOwPL+k7VU9T3wcUzjyjwy6aoCimjUCxSqbP1iIVMkIwQphQ18qiXKkzbqqng9vSKpROnQr0K1Tu5XkB5wuvMfwiVaZ/fK+OospqDUfPsQxlykgojUluufgySxiqp0qiqjV3P8bTcC/ZHJeQ8maX+MhwjNEfJMkGzNEArGUWeP/btUZ+0PbKSwbxQVeh703x40rsMHIhsqJV9SppPv4dJEoppI701x3yz1ijW7JTqjSqDBdXktLg+7OiD62rJWipoH/MbtLDNx2ybsQCYY3mavm25SsaWZw0xo65lEWejinsBy5asX8XP9nOzJC8ovkP5tLNdgddi5ftoM1sVdhnH0UIoTfPiCKG1zN/dy/1rhRbDl7sL9Ru3XJhm2qzprofAq/s/49GjMp0DvD/A5J9pHKWCtt1RxzRCYTyvMH4qM//zaXlj8xxgUQyb+a6uOB2W+5wAz3qpahWL5br3F4PbXN5lduDDACxl7q7y9WDo+wHBDmPeyAPH7tVqJ6CTcPcttZF1FVefnXbqLuuS6x4e//0BvsjpSzV2+nwx99Yd/XEGAimSMeJh/pGlZexTHlKo5nau+7Wo2fPFqlX7OxQ+G/tkaHse8ZSzqcJnAwiwPXCG2PdG7ni4jdImYLKD5v9ycdVGroH0mMKnYuq4PgEdp3oTkFKfT/s3JUI1/Pl/cAGvcVLrDTVyV4pi42Mkfrl+XmfcgjoR8+8eJ3RuN7uTXUhrBRpvinUQydlaN6aY/qrGV5jq60bPnr/h63qrmLLVrHVc1w/J3darPAzGQ5+53V7P/M0G0M/m6Nu9HQ0n67WurrZq14LOOn2hbrPajdoB+95SUxna3dJi/rhJeVFbW5Vs7/eLQ8D+EL1E3hq+pKHQaAFFrHnOXEaGmjDUS4yQGSVaoEawNOQM1GZwdfNRLzT020/sgGmer+vM61J707yLm+JaW6GGjbLDPyFie3cMrZLZ+KGnIzXbGgKgHh4O3Z7Ln9/+6tMFaQvio28N9vaPrMuONh6F+8Vtx+w8DBt7vKqJHc/+N8z61b5ZdaA40mP74T9uc5LSniQAAA==',
        trigger_type: 'record_create',
    },
})
Record({
    $id: Now.ID['1447646947433a10f487c24fe16d43a5'],
    table: 'sys_hub_action_instance_v2',
    data: {
        action_type: 'f9d01dd2c31332002841b63b12d3aea1',
        action_type_parent: 'baf174c8c3c232002841b63b12d3aee4',
        comment: 'update single mob cred request record',
        flow: 'e330bbdeeb175e10e317ff47bad0cd67',
        order: '5',
        parent_ui_id: 'd0c96acc-7e09-444c-be53-eeb11b2afd11',
        ui_id: 'cb6d56d9-5dec-439d-a2bd-4f874f30d6e0',
        values: 'H4sIAAAAAAAA/+1WyW7bMBD9FUFnQ9BiObJvRYMAOWRBUuQSJwJFjmyiFKWQlBPX0L93qMVxlgZumqIoEF8Mzgxn3jy+oXi9cQk1vJTHUhsiKVyu9TFzZy6j8TRJJmEUsWgKgZ/lQRgGURJCTA+yKHBHLrdxY2B+MA0mNAqiKPT9MBkH2STKgpBFBMDGSVIARiqgpWK4XhFRW8Nm81UBMcDSwKO1UiBN06CfcV0Jsr7qw9BCl1ww9Luz65uRWxGFGQ0od7Z55jLrClJBMhC48bCkdYFJnePD30A77L4Y4D6Hb2tYgvrsKbdGdFk8gT9y4cGAZIDlciI0jNyCSEZMqdbuzKgaDdg1O5NivY1Ycmm6TgvyoPkPzD/2bVwO2BrtWdgu056hgZySUzir7Cl2FkMyMTBXirqQp10LllvISS3MDre1xnxQWcgWRIcwv1yW9xdDvSMu2+56tKKkRGxXxBjFs9qAtscBAlpSClJVXC7SSpUr3m5GKIW3ELjwclHeY03NF9Lr1OchQcQ7Qvtha74iitsmTjANbm7a5tO72tbt2ugBp23PbcNpe1AYqqnilfmCiVfQw2xGf6rzLH5LOXT6KJQdMI9af0iJAJCplouaKMaJTBXc1aDNS8FfbB3v0/03C8A57QDsC/7J5l800yv/ia0Xfvxhwk/+kfB7RP+Z8v+a3v3wzZtyRyKtxPWO1rGggXnt+xELb+2i1t1qMx+kPndnc/fcMqQRI9LlnGNX+D93R/MuURuSJEmeAIuDLKNJGPgH8XQcx9E4JOOMZgfTNlyvNV7Ce8Y3t/el+p7KEo+tQ3VSZhznBb9FllZOhNMPoJOXynnlI+X1k5ui38trIdpZaBpnSbST4ZQ7us4KbnCTgxPg2HDFQTuydPBUsWs8zBdT/8naXqy980qEAgk04HRs76/xIcERB8H0K6If7sS+QLrqC2wfBB92MQYTv/19vgs+8F1w8xPKuBUNAQsAAA==',
    },
})
Record({
    $id: Now.ID['18b57d5b47c7f21051a3e84d416d43b8'],
    table: 'sys_hub_action_instance_v2',
    data: {
        action_type: '9d09f99587003300663ca1bb36cb0ba3',
        action_type_parent: 'b93f42810b30030085c083eb37673a63',
        flow: 'e330bbdeeb175e10e317ff47bad0cd67',
        order: '3',
        parent_ui_id: 'd0c96acc-7e09-444c-be53-eeb11b2afd11',
        ui_id: '2200b803-bd18-4734-825e-3dca7db67bfb',
        values: 'H4sIAAAAAAAA/9VY227bOBD9FUHPjlfyTXbeimYNBJttgDbbl2xAUCJlE0uTKkk5cQL/+w4l0nZ8j+Oi6SOHczkzc2ZM+f4lZCS8DMkgGuSDQbefRFG7HUW9XjvDcZq2e1kapbgTNkKBJxQ0DU45heMU89KenxDmlAqkxajEijAsUIrJiCKZ5yyzmoTpguPZd2dwIzNsmBTBJzJhgmmjqiMoZmPGiaIivLx/aIQFVhDRUBVevqxdmVlBEccp5eDvzgIKvlh0jaOTeWW8mZwN4I9I1K6lIhZL1Ajpk6GCUAiVY65pI5xgQbCRaraQKIrJreBLwZgJAx5Dq/yk2TO470dWL6eQVkbru8URuaLV4mwsoZS3RVWnSlIDrS8lLyfiS52ALTfNccmNLzdISg3+aGExWxAOUf5tLB+/+oBDJqr03CWHJvHFCRujWFoaqm0vKKcTcIQmuCiYGKFCySmrjAHLpDnicGjmXD5CUM1GookzC7wJJcLNIcivKvF3rJjN4m9wA8YAiHHoNqqLrmWpqqpMUcZLXV0oLHTtK5xXtUI/Souyztrlh+oSgYLOFCvMJzCYUpfKvOH53t1LkcGSEpkUhNmYeoX03HFY31z/9efLS5Xs1OXTZBYGMzPktebzzSk4wcNp4/F5Ff+xuW813lYQNyivZG5Q4rMNSieKftGoGFV+vEk5xP064QMDEJO9JCDLfmupDKortzIBdZM3aO3Fp3F1yCgnr1b5ETC98a0NHaSzXcgdVXMbY22nt377nf4hiQqACKrrzQRnovpJBaDnYXB3LzXSeI0HVfuX/K1kWGebFMaBkcHz6fu26qvn7xEgveE3QBTc1Si3APeb1rt31G2fjbrt1tuoC8S5f1mgX1RtS4H9y8m2zus/W328rg/sWjGI5w8L6n8+LWb81pgtG3NtNttvGs5VZtU3VzsIduZ32Y5ha/zM6R6DqYuH6mFFjwxe/2YZ3WsRaR4x/2/bvWPXYoaq9N79xov3fgakK288lqMJ9IkV8PBUNAMqaIQVRbksBUHuybmkje1bzpQ2Tnlzh3ylplQikDBygRnToNIOFtrn2CxHZOcNr/PAp+cw6ADSC6r0gkV6byvGjn3UOeOr7z37aIgZr0oPnw7FSu+oUlLt2EkHuran/UcurCNBxWcF9f6Nto3vWzfbAay/xXfoe7dORnHaaeFe0o7jKIojkkT9JIn7vTTv4aSTLwcNIS0yWIvgOQdigHvkieC7Gm2ulno3nvxnCezcP4bOxbF4vfGVFP+WUdRKTGABQ58DD/hwSm5fpFJyisWSnt1ftjA+yv8pJbtbr00tutnWtJ/1Y16yfwT7UdJrS4o+jVr9mGQX/SROLjo56V0MCO5e4EHaTdqEZp389N/nh/8BDMwAP3UUAAA=',
    },
})
Record({
    $id: Now.ID['54b57d5b47c7f21051a3e84d416d43bc'],
    table: 'sys_hub_action_instance_v2',
    data: {
        action_type: '2de05916c31332002841b63b12d3aee1',
        action_type_parent: '02f0b88cc3c632002841b63b12d3aeff',
        flow: 'e330bbdeeb175e10e317ff47bad0cd67',
        order: '6',
        parent_ui_id: 'd0c96acc-7e09-444c-be53-eeb11b2afd11',
        ui_id: 'b452b535-5c44-4c4b-ae94-060895186602',
        values: 'H4sIAAAAAAAA/+1WW2/bNhT+KxqfHExWJcu3eE/F0nR9aIIlS/dQtQRFHjnEKEojKTeeof++I1FKc2m2rBgwDKgfDPNcvvOdcz6Jfn8gUpANWSYQL46TJU+TNJ3F8Ww9T/JlmiczkTKAOQmJZiVgpGO5AtofQrJjqumMN5QpAE2t3jbMCMk0ZdaCwxAhba3Y/t0Q+XIw82uphAFNNu8/hKRmBgEdGLI5PHC5fQ1UsRwUZv/SFQ/OfPHnEr+X/EQjXZWHtsqIjlAcErhxoAVgvYIpCyEpmRbMVWZPNs40aDDAxLlW+9uIa6kdApIu9sbKPxB9HXdxBWBrHLzv9kiHMXkzv64kh/PayUp7S09scFaqKfWZb6IbMBSsUW4cMFoai3hQd5Q7EgOj4vK6+nQxFjyVuu9ucKqKM3V7Ys4ZmTcObLcPUFAiEC1ZXUu9pbWpdrJPRi5ltFV4iApVfcKiVm51xHhHPMIJsegU7Se9+R0zsuviLcJgctt3T39vurq+j4Ex9U1jgOVG1u4lwu1gINeGo2IFxMdPLj7JPy+6F6m9o1brmGts1sRxKg7ZqNCMbDJypQNUKLIFkZEw8ym9hy1XRQxikeQ5X8+SeLU4ni8W6XzG5jnPgffhdm+pFM+Mbz92qvsijbdVLhX8aKCbh8S+H5CBeF2snwTn+UMyfx/ffsRwB+VA5zDDkebrOJ3mIllP56t0Pl3PFjBNBWcrkS9XeZFHF8DxIYlKTnXBqQdoEanJ6dej3YO5M6F/SmlM75AApac8TiGmXlb4OD96O31TxjdlDMr4ygsKSlyVg8ArKnz2u2oEOJWghP3Cy2u8oYYCdDcUGG6p5N+6pZJl3H/+m7vK8/yfXVV3/jU8urR8Q97WMfSC63/9RRyRxaQQtKdFU0pVVf1Gm5oar2HzSMoRrwQE33khBxn56c1JRo4OmQ7ws2MmkLpuXDD4tzbaggaDOnp99eZkcvTD50Aht9LZMbJPw3q4bw6TF1l28mIb9s7Zyn8fRTUTr7SYLEZ7PDqQnMXt6O0kDoPFWMSAa4we6qCtzTTgKg/3vBm5PDv/dXrx6udpRoLvg9fd5i6BNwYuUNVVeeWkwibcXdulL9ZXanFNlu1A3GqtbdsPfwIgc8cx7woAAA==',
    },
})
Record({
    $id: Now.ID['5847646947433a10f487c24fe16d43bb'],
    table: 'sys_hub_action_instance_v2',
    data: {
        action_type: 'f9d01dd2c31332002841b63b12d3aea1',
        action_type_parent: 'baf174c8c3c232002841b63b12d3aee4',
        flow: 'e330bbdeeb175e10e317ff47bad0cd67',
        order: '10',
        parent_ui_id: '5918978c-25b0-441d-a6e0-29422cb5c6c8',
        ui_id: 'b42a474f-93ae-4e6e-8274-c4cb3c6da787',
        values: 'H4sIAAAAAAAA/+1WW0/bMBT+K1Ge2yiXNjR9Q0NIPAwmmHihEDn2SWvNcYLttHRV//uOcymFMQSMaZtE3s79O+d8dny1cQk1vJQnUhsiKVys9Qlzp+5oHFF/EsZRxKIEAj/LgzAMokkIY3qQBSN34PLGD5gfJEFMoyCKQt8PJ6Mgi6MsCFlEAAL0k6QA9FRAS8VQXhJRW8Vm80kBMcDSwKO1UiDNdot2xnUlyPqyc0MNXXDB0O5Or64HbkUUZjSg3OnmkcmsK0gFyUBg4FFJ6wKTOidHr0DbR5/3cB/DtzVQZl32lFslmiyewB+4cGdAMsByOREaBm5BJCOmVGt3alSNCuyanUmx3nksuDRtpwW50/w75h/51i8HbI12U9iJaTehfjglp3BW2S22GkMy0U+uFHUhT9sW7GwhJ7Uwe7OtNeaDykK2IFqE+cWiXJ339Y65bLrr0IqSErGTiDGKZ7UBbdcBApqhFKSquJynlSqXvAlGKIU3Fyh4uShXWFPzufRa9nk4IOIdo/6oUV8SxW0TnzENBm+b5tPb2tZt2+gAp03PTcNpsyh01VTxyhxi4iV0MLeD3+V5Nn6OOTS5J8oemHuu36VEAMhUy3lNFONEpgpua9DmZ8Kf7wxv4/1XC8A5bQG8FPyD4F800zH/ga4j/vjdiD/5S8TvEP1nzP9jfPfDZ2/KPYo0FNd7XMeCBma172OJGyvUupU2s57qM3c6c7/YCWnECMy5qCkFrfNaCDQOZm2yxs1n4wjrQpBFCDzw4yQOc4h9ykYZzQ78xl2vNV7EL/Tf3qxK9S2VJa6uRdYdOWdBtJPhOXWoKDXC0nuwHLSZBTgndvrcrJ1DrcE4+G02BCtOEh+GIZ3AcMSS0TDBYQ4TRjA9PRhHMfHaP4gn6yIDtd3uahFtF4/VTOkgKZWz4mbRZ39dbmKDPMzBiXjqX/qxmn9nNW+83KHALRlw2pW+/LT2CY45CKafOL797d4VSJddgd3T5t2u+CD2m+/jhfOOL5zrH7KK/1/LCwAA',
    },
})
Record({
    $id: Now.ID['5c47646947433a10f487c24fe16d43be'],
    table: 'sys_hub_action_instance_v2',
    data: {
        action_type: 'f9d01dd2c31332002841b63b12d3aea1',
        action_type_parent: 'baf174c8c3c232002841b63b12d3aee4',
        flow: 'e330bbdeeb175e10e317ff47bad0cd67',
        order: '12',
        parent_ui_id: '3640e14a-9e45-45c4-8d78-43ed7f9c04c5',
        ui_id: '3522cd61-c65b-47ad-848b-332c71f6ed6a',
        values: 'H4sIAAAAAAAA/+1W30/bMBD+V6I8lyg/26Rv0xgSDwMEEy8UIse+tBaOE2ynpav6v+/yqxTGEGNM0yT6UOnO57vvvvvs+GpjE2p4KY+lNkRSuFjrY2ZPbZcF1I39cRCwIAHPzXLP970g9iGik8xP7JHNm7gQmOsl3pgGXhD4ruvHoZeNg8zzWUAAPIyTpACMVEBLxdBeElE3js3mswJigKWeQ2ulQJrtFtcZ15Ug68s+DD10wQXDdXt6dT2yK6IwowFlTzdPlsy6glSQDARuPCxpXWBS6/jwN9AOu88HuE/hNzXQZn32lDdOXGrweO7IhnsDkgGWy4nQMLILIhkxpVrbU6NqdGDX7FSK9S5iwaXpOi3IvebfMX/oNnE5YGu0Z2Fnpj1DAzklp3BaNVPsPIZkYmCuFHUhT7oWGm4hJ7Uwe9zWGvNB1UBuQHQI84tFuTof6h1x2XbXoxUlJWJnEWMUz2oDuhkHCGhJKUhVcTlPK1UuebsZoRTOXKDh5KJcYU3N59Lp1OcgQcQ5Qv9h674kijdNfMU0uHnbNp/e1U3dro0ecNr23DactoPCUE0Vr8wnTLyEHuZ29Kc6z6KXlEOTB6HsgXnQ+n1KBIBMtZzXRDFOZKrgrgZtfhb8+W7hbbr/1gCwTjoArwX/aPMvmumV/8jXCz96N+HH/0j4PaL/TPl/Te+u/+JNuSeRVuJ6T+tY0MCsdt2AhTeNUevO2swGqc/s6cw+axjSiBHpsqwvSpVqZo9mXZ42IqRxHgOLvCyjse+5kygJoygIfRJmNJtkbbhea7yDXxm/vVmV6jaVJU6tA9WfNmtBtJUTLoBZprQysHBqlcDjxhzrTADR6FkAvbW4tFbcLCysa6CwCCvQs9mQIMjixIUDn8ZwELIkPEgyD/8YwTJ0EgVj4nQfEafa6zwtQGsyh+c+fR9MvpnJN16dgEiRc6ubwOvPwpDgiINg+pnDMdydfYF02RfYPRze7QL1xm77+3g/vOP74foHqqKhcCkLAAA=',
    },
})
Record({
    $id: Now.ID['9847646947433a10f487c24fe16d439a'],
    table: 'sys_hub_action_instance_v2',
    data: {
        action_type: '9d09f99587003300663ca1bb36cb0ba3',
        action_type_parent: 'b93f42810b30030085c083eb37673a63',
        flow: 'e330bbdeeb175e10e317ff47bad0cd67',
        order: '1',
        parent_ui_id: 'd0c96acc-7e09-444c-be53-eeb11b2afd11',
        ui_id: '21c1a7f7-97e4-4271-8c67-05dca876950f',
        values: 'H4sIAAAAAAAA/9VYXW/iOhD9K1GeKZsQINC3q1ZIlXa30rZ3X7qV5dgTsK5xUsdpS1H/+x3nAyhfBUpF9zH2jOfMzDkTJ3dTlzIjEnWlMkMVg5tJdsXdc5dDv9tlgdcOIaCUe3G7F7JWOwa/y9sBhG7DFYVd3+vH/X6nF3peEHhetxsw6kdR0GWRF9E22ik6BrQ0NJKAj49U5vb5mVAJoEimhjnVXFBFBAdlhJkQmTBqUaE5F1kq6eR35XVVmTjf5yZsJCTXoNzzu/uGm1KNAQ1o93y6tGUmKRBJI5B40q3F4/y04HbP5Y3zam42QP1IVHl0ornF4jVceDagOGComMoMGu6YKk5NoiezFQ2UXys5XxgJZfBE1xo/Z+IFj+951i4GTItBuTd7JFW5ymU2SgSD67SoU7FSAi03E5mP1c8yAVtoiGkuTV1oXMkzPA9Si9mCqBDFN6Pk6VcdcCBUkV61aRsnZ0/UGC2i3EBmewESxngQGdM0FWpIUp08isIZsYybQ4kPzVgmTxg0E0PVLJnZxBLR5gDXL4vl31QLm8UPPAadEZCQ2G1SFj1Lcl1U5ZEwmWfFhqYqK89yX4takYfcoiyzrvIjZYnQIGNapOYfdHiEKpXXxod10tnKrf6cSyxRXNhQ2YJYamX8ydGdT6cXSBQDnPhNlmtshGlqeMghMyRO9Ovrqm72P+AwVV0sot8187XO68pR6evNWqUv/2j6anveiRRmdP71BPaeZMqEP0s3Pt/KHj4nSpZoQ8qSLwhnVQkHU3sgQPI3L4wdwNXO15alTjTZhLdidmxjLL05Wn/9m+NL8hoBcVLWWygpVPHiRqAnJnxnK6cif4lABW/mdC/WaMZWaU8dkzgvh8/1ghB7gKwdbxCRc1uiXAO8nuj18RXng6NxPmjtx3lk3N10hn5WtTUFri92tue1/Yu1p8v2SMsFB//1fqaZi8Ni+vvGbNmYS6IO9lL1IrPKncsNBDvytXGDShufORZG6FrFI6XKyZPgQzDz6LUVT8wTlf+t26/YNdNQkd7prqD+1s+baOEKKmIyxgaLFC/UGhhyKCNUA14Nc8VJdZWe8802PBYa746l8erw+QUm18pJUKuOGYFTWDsz62OMpB2yqx2vYqdOr8KQOZieU6TnzNLbrxgbBln7iNfSjwyyARWyKD1+EqULvQOtE71hmL3TtS3t33HS7QjKPyqoj4/CdXxfOxLfwfpXfF+fbFwxoFG7Rbth4Pue53s89Hph6Pe6UdylYTueK5SQTDEcxAgpRkYhLlIzqKaDtzqTyml88N8jnPLfBtURu+KtnS8TZb/DW6FxLGAkiFMDfj+latBESSKBqjmvOyebNF/lB1MubpdrUy59X9e0z7o+5OJfJR5yKMjeA6/V8zk764V+eNaOefesz2nnjPajThhwYMj7gyV2/z/cMI6EvhUAAA==',
    },
})
Record({
    $id: Now.ID['d047646947433a10f487c24fe16d43b7'],
    table: 'sys_hub_action_instance_v2',
    data: {
        action_type: '2de05916c31332002841b63b12d3aee1',
        action_type_parent: '02f0b88cc3c632002841b63b12d3aeff',
        comment: 'create new identity asset to provision into NFC',
        flow: 'e330bbdeeb175e10e317ff47bad0cd67',
        order: '8',
        parent_ui_id: 'd0c96acc-7e09-444c-be53-eeb11b2afd11',
        ui_id: 'a33b890e-2c8e-4d94-9b14-9da003c7536a',
        values: 'H4sIAAAAAAAA/+1W227bOBD9FUFPKeAVdPF9n4IGKfKw7WKbLbCoGoEiRwoBiXJJyolr6N93SEpu6kuTXoC2QP1kDQ9nzhweDvh26xOqeSOuhNJEUHi9UVfMX/rFPKF0HE+ThCULiMK8iOI4SuYxTOgsJ2N/5HODm0YQThbRlCZRksRhGM/HUT5N8ihmCQEwOEFqQKQmeQWZ/Rj5a1K1JnifkQpAZEqULZGME5FxBkJzvcmIUqARy7haVWTzpt9y1a975/06veUVkyD85dt3I39FJJbQIP3ldm9Jb1aQVSSHCtNcGzreS0fnqa18svlEa6bKfqyRzBAKRz7caxAMsF5BKgUjvyaCEd3Ijb/UssWABMJeiWqzQ9xyoTGhb7D3in/A7PPQ4ArA1ii4td1n1uvlwvS24RRercwZu4gl1i82VVuLl64JozQUpK30oDRGWoX5YGUoGxI9o+L1bXP3z1DwkgvbXb9YNZRUuy+iteR5q0GZ84AKakyU1WS14qLMVrJZc7sZudRBWeFHUFTNHRZVvBSBM2eACpHgEuMXNvyGSG66+AvT4ObOdp+9b01d10fPOHNNI0BRyVf6HNOtoSfXjb7Z/AzCxUnHRPlHh1i/qwfGH1yetmGYsO32OR67BpZFAW0lyqoDCe9xi86KRnbdjb0MA9gqtO5FCOwSXhtEYXbOskI2tYMW7A/XOLB+TTeHK9i8blWfPB3uW+ovU98Jlvqj1DG3wZjMihDYJMpzOo+jcDZZjCeTZByTcU5zWFi42ijk9ER8d2OdoPAsjC3cqRwldN14OXjnDK/QHiuYzYr5ySoR2Wf1OH6P1Wdk+nvAeVx5xnuI36NHo3lBT5ZL5vv0Hsd3N+ZaqKaVFE7byKXsHoIzOwLcliMDuDfe4eT97dnfnv3pPfuVrwGoURgNnvP60+f7kOCSQ8XUkYE/PAf6Atm6L9A/CaLv9SSIpqH9/ZiHgeP5i70LHjzRDl4IriEXMwyHSWT+fw6JQOmVnjOqJ+DOe2HIX+DRX/Mazp79mYoyIIz9B0Sqf6+fn0UmxIuzgmW2HdSlLEHuLsMwM1UwcHi2TYWHP1PKxnDAnCz4BWmDEvTFg5FvyZpCEnQrxVALgx3gIW4/WSyP7u5Sgborsga2M0838j/O/Ef1/AJlTL4DbS4x+O3q2NRP0sfUO67QETMc1+xQsa579z8LcFYvqg0AAA==',
    },
})
Record({
    $id: Now.ID['dc47646947433a10f487c24fe16d43c2'],
    table: 'sys_hub_action_instance_v2',
    data: {
        action_type: 'f9d01dd2c31332002841b63b12d3aea1',
        action_type_parent: 'baf174c8c3c232002841b63b12d3aee4',
        flow: 'e330bbdeeb175e10e317ff47bad0cd67',
        order: '14',
        parent_ui_id: '1655ce6f-3277-4810-b783-354ac8577b7f',
        ui_id: '6b3956f5-0748-412a-b856-8dc1dd64fa39',
        values: 'H4sIAAAAAAAA/+1VXU/bMBT9K1We2yhpkib0bRpD4mEwwcTLyizHvinWHCfYTqGr+t93nY9SYEOMMU3Tljffe33vOccn9qeNR5kVlTpWxlLF4Hxtjrk394I0KYqC8jiNDihNgiSkEWQxj8MZjyMK3tgTri4GHoQH4YxFYRRNg2CaxWE+i/JwyrEKQqxTtASs1MAqzXG9orJxgc3mrQZqgZPQZ43WoOx2i3kuTC3p+qIvwwi7EpJj3pt/uhx7NdXY0YL25psHKbuugUiag8SNhxVrSmw6Oj78CbTD7rMB7kP4bgaued+dCBfElMMTBmMPbi0oDjiuoNLA2Cup4tRWeu3NrW4wgKz5qZLrXcWVULZjWtJbI75i/zhwdQUgNdarsFuSXqFBnEowOK3dKXYRS3M5KFfJplQnHQWnLRS0kXZP28ZgP6gdZAeiQ1icX1U3Z8O8I6Fadj1aWTEqdytqrRZ5Y8G44wAJrSglrWuhlqTW1Uq0mxFK6S8lLvxCVjc404il8jv3+SgQ9Y8wftiGL6gWjsR7bIObty15ct24uR2NHjBpObeESXtQWGqYFrV9g41X0MPcjn/V53nylHPYwZ1R9sDcef2WUAmgiFHLhmouqCIarhsw9rHhz3aJl/n+owMwOukAPBf8vc0/INM7/16sN37yasbP/pDxe0R/mfN/m9+D6ZM35Z5FWoubPa/fVPoLURXqsmiCIOKbTThLEgazYhJN03QSZ2EwydMsmkRJTFmWpGmeFj4hiNQ2hhC/BGPoErbbz12o77MY/pSFN194H5zABimi2qPRO60rvfDGiw5GWxGzrMiAJ2Ges2waIvWDOEmieErjnOVp3pabtcEr/Jn1HSDo8MSPf91/ifoLLycokYaFUSfZ8902NDgSILn5jv2G26kfQFb9gN3T/GpXVDgL2u//C/2KL/TlN3FvViGLCgAA',
    },
})
Record({
    $id: Now.ID['1947e46947433a10f487c24fe16d436d'],
    table: 'sys_hub_action_instance_v2',
    data: {
        action_type: 'f9d01dd2c31332002841b63b12d3aea1',
        action_type_parent: 'baf174c8c3c232002841b63b12d3aee4',
        compiled_snapshot: 'f9d01dd2c31332002841b63b12d3aea1',
        flow: 'd9fd88a633d39e10bf1221382e5c7b3a',
        order: '10',
        parent_ui_id: '5918978c-25b0-441d-a6e0-29422cb5c6c8',
        ui_id: 'b42a474f-93ae-4e6e-8274-c4cb3c6da787',
        values: 'H4sIAAAAAAAA/+1WWW/aQBD+K5afwfIBBHiLgiIhpUkVqryUxFrvjmHV9drZI4Ra/PeOL4KSKCJqKjVqeds5vzk+xt9Ll1DDczmX2hBJYbHVc+ZO3cEwov44HEURiyYQ+EkahGEQjUMY0pMkGLg9l9d2wPxgEoxoFERR6PvheBAkoygJQhYRgADtJMkALRXQXDF8PxBhK0FZnikgBlgceNQqBdLsdqhnXBeCbG9aM5TQNRcM9e70+23PLYjCiAaUOy2fqY6FJEgCAk2vO0zPMZptUb1ZTm2GuGLeCS9az1mrceYz1KBTBSfwey48GpAMEEhKhIaemxHJiMnV1p0aZVGARbMrKbZ7izWXpik0I4+a/8TMA7+ySwEro20T9s+4bVAjTmfEkAVGpsaqfb9yTkE3PWGQEivM2aGsMbgqqsk3LoYkovPOhc3kZdMRdx/gYB5WIwgoqjor5E1Z6WKdb647kOdc1i1pSxQ5JWL/IsYonlhTwSldEFD3OCNFweUqLlT+wGtnhJJ5K4EPLxX5BnNqvpJes7EedpV45yif1eIbonhVxBcMg867nqu3+kwQrZ9KwR7G97ZC0hTWlhDXXahbENebUDlTxQtziqkeoAW+6/0uW5LhW6tJJ0+beADmiTGPMREAMtZyZYlinMhYwb0FbV7S5nqveB97joDYsedbvTOvQ24J9EJ2cejrXDaKlj7DD6PP+DPRpy3j0/Pnj7HGD9/8Qz9YwZoo+oAxmNDA0vo+prirHlY3r3LZEWbpTpfu16pnGjECcxaW4qR1aoVAZW/ZBKvNfDaMMC8ESYTAA380GYUpjHzKBglNTvzaHNuG9+JI+93dJlc/YpnjMBtkLXGdNdFOgmx3qMg1wtIHsBzUmTU486r73GydU63BOPgrS4IZxxMf+iEdQ3/AJoP+BJvZnzCC4enJMBoRrzl0nrRZAmq32+fCaeMqYDaTO7imytlws+6ivy82qZw8jMGJeO2u/x/N3zOa952II/jYnYhzDoLpVwja3QfIcNAG4oawz25Eq3RuWuX+M+vDDkUw8uvfJzoX/8zX1u0v4YP/yJ0MAAA=',
    },
})
Record({
    $id: Now.ID['1d47e46947433a10f487c24fe16d4370'],
    table: 'sys_hub_action_instance_v2',
    data: {
        action_type: 'f9d01dd2c31332002841b63b12d3aea1',
        action_type_parent: 'baf174c8c3c232002841b63b12d3aee4',
        compiled_snapshot: 'f9d01dd2c31332002841b63b12d3aea1',
        flow: 'd9fd88a633d39e10bf1221382e5c7b3a',
        order: '12',
        parent_ui_id: '3640e14a-9e45-45c4-8d78-43ed7f9c04c5',
        ui_id: '3522cd61-c65b-47ad-848b-332c71f6ed6a',
        values: 'H4sIAAAAAAAA/+1WW0/bMBT+K5GfS5RbS9q3CYaExGCCiZd1i07sk9aa4wTbAbqq/30nl5aKIQS7PKCtD5V8LvZ3Pp/vOJ/XDLiTlT7V1oHmeLWyp4LNWCBiHqTRJI5FPMUwyIswisI4jXDMD/NoykZMtnEJiiCchhMeh3EcBUGUJmE+ifMwEjEghhSnoUSKNMgrI2h9C6ppDev1kUFwKLLQ540xqN1mQ34hba1gdT2EkYUvpRLkZ7PPX0asBkM7OjRstn7keikkBTkqCr3cYnqM0a3qdi0q3pSEK5Nb49mQeTx4vNNj8lBSCycMRgzvHWqBBKQAZXHEStACXGVWbOZMQwYqWlxotdpFLKV2faEl3Fv5nU5OgjauQKqMDyTsltlAUG8ujsHBFe3MXWN2fFWSo+05EVhAo9zRvq0PuKjbm+9THORqm12pptTnPSNst8HefTSWQGDd1tki78sqrpbV3eUW5InUHSVDiarioHYrcM7IvHEtnDVDhR3HJdS11IusNtWt7JIJSukvFC38QlV3dKaVC+33HesTq+CfkP24M1+DkW0RH2gbSt6MmF3ZIwXWPpRCHGY3TYukL2woIetY6CjIuk5ok7mRtXtHR93iAHwz+l215OPnWpNPHzpxD8yDYu4zUIg6s3rRgBESdGbwpkHrfpbN5c7xOvW8AOJWPZ+6nnka8iCgn2xn+7neee8Y5DP+Y/JJ35J8hjLevH7+mmqC6NmBvteCnVDsnmLoQIfzJghikXxtF43tV+v5VjBzNpuzjy1nljASgZ733pjKzNlo3u/TRSQ8LVIU4zDPeRqFweF4mozHcRJBkvP8MO/CiTF6Kl4Yv/l6V5lvma7oHntQg2a9JVivAKlQeK7ycvToHmtFohW+91EhWLIskX/zpPbupFt6dK7D0gNRkmW9hjjO02mABxFP8SAR0+Rgmof0J4CO4YfjeAJ+/9b59V7lWYnWwgKfeob/M/nLTL5uAL+g27cD+ESiEvaJ9t9OX6Ri6dqyXg6PJvDg9K4H5+4j5o+N4XASdL83NIz/mW+ZLz8AXO+NOPsLAAA=',
    },
})
Record({
    $id: Now.ID['24b5bd5b47c7f21051a3e84d416d4352'],
    table: 'sys_hub_action_instance_v2',
    data: {
        action_type: '9d09f99587003300663ca1bb36cb0ba3',
        action_type_parent: 'b93f42810b30030085c083eb37673a63',
        compiled_snapshot: '9d09f99587003300663ca1bb36cb0ba3',
        flow: 'd9fd88a633d39e10bf1221382e5c7b3a',
        order: '3',
        parent_ui_id: 'd0c96acc-7e09-444c-be53-eeb11b2afd11',
        ui_id: '2200b803-bd18-4734-825e-3dca7db67bfb',
        values: 'H4sIAAAAAAAA/+VY32/iOBD+V6I8Uy7hV6Bvq/aQquttpW1vX/ZWlhM7YJ2xs7bTliL+9x3HDiCgQHap1OoePR57vpn5vonh2yJkJLwMySga5aNRf5hEUbcbRYNBN8NxmnYHWRqluBe2QoFnFDwNTjmF5SPmpV0/I8wpFUiLSYkVYVigFJMJRTLPWWY9CdMFx/Ov/sCtzLBhUgSfyIwJpo2qluCYTRkniorw8tv3VlhgBRENVeHlYmvrVMgcp5SD64PHvJWCmRerJar2nO1281jw2W1IRSyUqBXSZ0MFoYAhx1zTVjjDgmAj1XxlURSTO8HXhikTBm4MrfOzZi8QdxhZv5xCVhl1e6sl8jVz5vwaG3xvVJmZUnnXbCqhutrVg9Acl9xcbdqcw11R1bY64tJ2pyUvZ+KzK0e4uqBuEVhKDSBoYRO1yH0a+f1UPn2pUY6ZqGriNzk0lq9W2BjF0tJYPIuQcjqDi9AMFwUTE1Qo+ciqw4Bl1p5wWLRzLp8gqGYT0caZBd6GuuL2GOzXlfkrVsxm8TdcA4cBEOPAEORaqGWpqlI+ooyXutpQWGh3V7hshXqurzjWep05lBz9KC1uVwefMXJFs0cyxQrzCa54pD65ZatWTf8gBUdrymVSEGZR6A3pcK8EfXvz15+LRZX+o8+wzSwMZuao9loud7X0Czc0FNnxDGuRXW2muC9tL7cd2+2+C7zc4rPJrRdFH0lwEPz96a25glwJjsgoJgdJRtZ80lIZ5Gq5oSPHlR1x1OZmjD8BTM34OxsgSOev4fOEzxnlZN/3ZWw3tr4vnf/n9+Vd0h0AEeS6xwRnonosANC30kH/IPXSeItnFb3WKqhsWGe7QsCBkcFLYyWcAKdWwj3EDh4cnj0Q68lfUWZ76tdGL4Du2QTQ7ZxHAItVmqtC7ql5/T603az9X6w/3vYHCm4ciJf7BNYoZtw0Zme5K+BuIwVvks3tXL/CuTM/JF9RZOstR8AUjvp4yOkXPTH4iWPW0WsvIs0T5v/t2/eMQ3WjqvTe4FEaH/xdlG48SlmOZtA5VsDbWdEMyKERVhTlshQE+Vfzmki2kzlT2njn3UHzhYJ+RCBBmIGZ0qDyDlbeDT/Ex/OoS3mTB3UiPpoOIJGgSiRYJdIs7SZDq3fGZ+q5h9YYM151A34QFRvtpEpJ9crgOtLIA4w4caqdCCo+K6jfH3v7JLB3/B3B+iF+XZ9/NGUUp70OHiTdOI6iOCJJNEySeDhI8wFOevlaowhpkcE0hZtzoApcj2pq1H2OduePG6lNB80JqGoKXkvxbxlFncQEFhb0N6hhHQfuB0oqJadYbE2UB/hO/DH2+D1f++9uqnyI/5pK9rBdaWfaW+u3ejeU7B/BfpT0xlJsSKPOMCbZxTCJk4teTgYXI4L7F3iU9pMuoVkvP+dT4PtP1znMTtcVAAA=',
    },
})
Record({
    $id: Now.ID['4d47e46947433a10f487c24fe16d4340'],
    table: 'sys_hub_action_instance_v2',
    data: {
        action_type: '9d09f99587003300663ca1bb36cb0ba3',
        action_type_parent: 'b93f42810b30030085c083eb37673a63',
        compiled_snapshot: '9d09f99587003300663ca1bb36cb0ba3',
        flow: 'd9fd88a633d39e10bf1221382e5c7b3a',
        order: '1',
        parent_ui_id: 'd0c96acc-7e09-444c-be53-eeb11b2afd11',
        ui_id: '21c1a7f7-97e4-4271-8c67-05dca876950f',
        values: 'H4sIAAAAAAAA/+VYUW/iOBD+K1GeKZcQINC3UyukSr2ttO3ty97KcuxJsc44qe20pYj/fpM4AQSUEi2VqO7R47H9zcz3jZ38XPiUWZGpG2UsVQzu5+aG+5c+h/FwyKKgH0NEKQ/S/ihmvX4K4ZD3I4j9ji8qv3EwTsfjwSgOgigKguEwYjRMkmjIkiChffRTdAboaWkiAYfPVBbl+JVQCaCIUY8F1VxQRQQHZYWdE5kxWqJCdy5MLun8R73qpnbxbtcubCok16D8y5+/On5ONR5oQfuXi62pYxFLmoBE14ca8lYEdp6vhqSac7bbzWXeNzeRaV5CCTo+vFpQHBBDSqWBjj+jilOb6fnKooHyOyXXhqlQFnf0S+dXI97w3FFQ+qWAUTFwc6shqbPlzOk1tfTe6oLZQteubJoJBsblg0NKC2mvNm3O4S6vclstcWG71ZksZuqbS4e/2qApDloKgyAgLwMtkddhpPfT7OV7g3IiVJWTerIstlyNqLVaJIUt8Sx8kDDDjciM5rlQjyTX2bOoFiOWWfdR4qCbyuwFDzXiUXUdm7uYV9qdoP26Mv+gWpRR/IXb4GIEJCQyhLgSmqzQVSqfCZOFqSY0Vcbt5S87vpmbK0mNWUeOKSdPRYnb5aGOmLiklUuYFrn9E7d4hjq4Zee31TY4yN3xmqssU1yUR5kNyTX6+qfA5XyxuEK+WeAk7LJCY2lsV8NTAcaSNNPL5a762m/QUpsfx9do82ozwH1B1yrdsd3u26BWaXgylfaD4CvpFA8/P5m2F55LwWepL+QH2cnXRDSZtsQVYUN+u3pqLZAjIDQCuSsp7SXz91DV+kgFSL7vFpuUE1u3WO//eYudpToQECeuekJJoaonCQI9O9kMDnI2CbcIWvFyLZrKRg3bFQ/1bOa9tZbQEXAaCd3j2d6Dw7MHYnPDVFzbvl0aY62c6GTKiXqnUc5iFeYqkXty3jxfSxo0/m+lP932R+5uLAiX+5TZ6syw7Zm95a7yo1bS3ySbm7l+h3Mnfue+I+XOZ/aOKS6tzyNO+ORF8Eew69MbL57ZFyr/3TdfM440harCO6c3c3jwey/ZeDOLlMyw5CLHbwINDFllCNWAb9lCcVJ/DawZWFIgFRofu855t0N9BxSe8jJUtGen4FXe3sq75dX/cRxNDW5SrwmkPs14GIhXBeKtAmkXdptu1z/hO/rU3W5ChayqgR96+UY5QetMv9PxPijkAUYc2Q6PBBWeFNTv98t9EtjbNz/A+iX+GpxRT2NAk36PDuMoDIMgDHgcjOI4HA2TdEjjfroWNyFGMezfCClFjiEu0nCqIUiw27hcE2/boY5A1XD3OlPlP4RebL0SFhLDa2B9DLzuREmWSaBqqxU94M30x6TGXxN9cHbt6Ev8fCvEw3amnWlvrj/rpVKIv5V4KqASyAiC3ijk7GIUh/FFP+XDizGngws6TgZxxIGhVk4o1F//AbrKYSsgFwAA',
    },
})
Record({
    $id: Now.ID['9147e46947433a10f487c24fe16d4369'],
    table: 'sys_hub_action_instance_v2',
    data: {
        action_type: '2de05916c31332002841b63b12d3aee1',
        action_type_parent: '02f0b88cc3c632002841b63b12d3aeff',
        comment: 'create new identity asset to provision into NFC',
        compiled_snapshot: '2de05916c31332002841b63b12d3aee1',
        flow: 'd9fd88a633d39e10bf1221382e5c7b3a',
        order: '8',
        parent_ui_id: 'd0c96acc-7e09-444c-be53-eeb11b2afd11',
        ui_id: 'a33b890e-2c8e-4d94-9b14-9da003c7536a',
        values: 'H4sIAAAAAAAA/+1W227cNhD9FYFPDrAVdNl7ngwbLgy0SVG7BoooFihyJBPQUhuSWnu70L93KErrzV5iG+lDA8RP1szhzJnDGe582hDKjKjktdSGSgY3a33NyZzk05ixYTSOYx7PIAyyPIyiMJ5GMGKTjA7JgAiLG4cQjGbhmMVhHEdBEE2HYTaOszDiMQWwOEkXgEhDsxLS9mNAVrSsrfEppSWATLUsaqq4oDIVHKQRZp1SrcEglgu9LOn6rjty3fm9887PHkTJFUgy//R5QJZUYQoDisw3e67XEi5pBiVCby3jEwWY9fKo7bfds94H56gUt3yCAYEnA5IDEslpqWFAFlRyaiq1JnOjajQooPyjLNdbxIOQBgMSi33S4h9MOw0sLgesjIHzbT/TTi5nzi+poTcYmZladVD2UAkG2mnCIad1aS52bQ7wcWn7wh1py+xOV2W9kB+cJGQboL8dtNQaScDS1mmZd2XkNw/V4589yyshW0k6Z1kxWm6/qDFKZLWxfDYESlhgoHRBl0shi3SpqpVoDyOXhV+U+OHnZfWISbUopO8a2kdZqX+F9svWfEeVsFX8jmHwcDMgeq0vSmyy51pQxPRLbZm4yroaUieDPcKUWJpzTLCCjm4z+O4R4hDMTnZkmD13YDs1emd8+llJ6iCI+WZzgd1jgKehz2qFQhtfwRc8YtK8Uk1z345UD241W3Wy+K0Lhw9RGF3wNFfVwkFz/osrHHjnM9WhB4s3te6CJ/3UJmSeECdYQgaJY94aIzrJA+CjMMvYNAqDyWg2HI3iYUSHGctg1sLxjpDTK/HNfdsbGu/CNoq7laOEbisvA++c4yTusYLJJJ+ezBLSfVYv4/dYfUOmP3qcJ7Rnew/xe/RYOM3ZyXTxdJ/ey/jm3g6KrmrF4HQbuZDNLjhtHwV35Mgz3jXe4fv9s2d/9uz/vmffuFO8/IL3O8WVgJLrI096v1DAArU1kLonfm+p6JzeXefsFovwv1oswnHQ/v1A64Ur7offLnYWyYM9w5XobJZz/57Z/7+FRKDyCs+1uyfh0fvVloN3BrdiAWfv3iey8CnnfwNV+q/bi7PQmkR+lvO0LRCVKgpQ25HqX17t9xzebRLp4Z9N1drwmTqZ8A1h/QLM5c4PR0vWJlKArSb7XGhsAK9185WzOHq6SSTqrukK+LadmgF5/uV4Uc83KGPjHWhzhcbvV6cN/Sp9bL7jCh1phuOaHSrWNJ//BSXav0w2DgAA',
    },
})
Record({
    $id: Now.ID['9d47e46947433a10f487c24fe16d4374'],
    table: 'sys_hub_action_instance_v2',
    data: {
        action_type: 'f9d01dd2c31332002841b63b12d3aea1',
        action_type_parent: 'baf174c8c3c232002841b63b12d3aee4',
        compiled_snapshot: 'f9d01dd2c31332002841b63b12d3aea1',
        flow: 'd9fd88a633d39e10bf1221382e5c7b3a',
        order: '14',
        parent_ui_id: '1655ce6f-3277-4810-b783-354ac8577b7f',
        ui_id: '6b3956f5-0748-412a-b856-8dc1dd64fa39',
        values: 'H4sIAAAAAAAA/+VWTU/bQBD9K9GeQ2THduzkVkGRkCitoOJCqDXeHYdV12uzuwbSKP+944+ECBAKKj0gctv5WL/3PG/iqxUD7mSpT7R1oDleLO2JYDPmxVGe5yDCOJgCRF7kQ4BJKEJ/IsIAkA2ZbOpCFJ4/9Sc88INg7HnjJPSzSZD5Y0FV6FOdhgKp0iAvjaDzHai6CaxWhwbBoUj9Ea+NQe3Wa8oLaSsFy8u+jCL8RipBeTa7uh6yCgzd6NCw2epJal9ICjJUVHq+wfQUo1tWzVmUvC4IVyo3wdO+86jPDE6OKENNDRzfGzJ8cKgFEpAclMUhK0ALcKVZspkzNQWItPiu1XJbcSO164gW8GDlH3py6DV1ORIz3ouwPaa9QF04PwIHF3Qzd7XZ6lVKjrbTRGAOtXKHu7Gu4HvVvPmuxUGmNt2lqgt91inCthfsvI/aEgisGp4N8o5WfnFT3p9vQB5L3UrSU1QlB7U9gXNGZrVr4KwYKmw1LqCqpF6klSnvZNtMUIrRQtFhlKvynp5p5UKPuokdkaowOqb4URu+BCMbEt/oGmpeD5ld2kMF1j5SIQ3T27pB0hHrKaStCq0EaTsJTTM3snJf6FF32ANfD//VLVn02mjy6eMk7oB5dMxDCgpRp1YvajBCgk4N3tZo3XPbnG8Tb3PPHhA37vnZzszLkHsDPYud7vYOzrpEb5/o3eyTfCT79DQ+vH/+m2u88asLfWcEW6PYHcfcl+Z3qktSal57XiBWK38SRRwn+UEwjuODMPG9gyxOgoMgCoEnURxncT5KU0LqapumowKthQWu17+6UH/PfOO3OZvN2Y9GcksUSf/B4KsxpZmz4byD0VaEPMkTFJGfZTwZ+0R9GkZREI4hzHgWZ205CU7/NHvWd4CwwxM+XwCfifrbVtwe87RZcccSlbAvDNhmv2FBSjhMu4F7suP65OCyT24/E95t0fkTr/19oHX3ab4Wrv8Cga6B5F0LAAA=',
    },
})
Record({
    $id: Now.ID['c147e46947433a10f487c24fe16d4357'],
    table: 'sys_hub_action_instance_v2',
    data: {
        action_type: 'f9d01dd2c31332002841b63b12d3aea1',
        action_type_parent: 'baf174c8c3c232002841b63b12d3aee4',
        comment: 'update single mob cred request record',
        compiled_snapshot: 'f9d01dd2c31332002841b63b12d3aea1',
        flow: 'd9fd88a633d39e10bf1221382e5c7b3a',
        order: '5',
        parent_ui_id: 'd0c96acc-7e09-444c-be53-eeb11b2afd11',
        ui_id: 'cb6d56d9-5dec-439d-a2bd-4f874f30d6e0',
        values: 'H4sIAAAAAAAA/+1W207jMBD9lcjPVZRLU9K+raiQkLgJVrxsIXLsCbXWcYLtAN2q/77jXEoFCBUt+4B2+1J5LvaZ4znj/FgTyqyo1LEylioGVytzzMmMcJZM03QSxTGPpxAGeRFGURinESTsII9DMiLCxY2BB+E0nLA4jOMoCKJ0HOaTOA8jHlMAF6doCRipgVWa4/qBysYZ1utDDdQCz0KfNVqDspsN+rkwtaSr6z4MLWwpJEc/mf24GZGaatzRgiaz9QvXvpAkzUFi6OWA6SVGu6rdmlesKRFXJgbjSZ857z3e8Rw9mOTghMGIwJMFxQGBFFQaGJGSKk5tpVdkZnWDBiyanyu52kYshbJdoSV9MuIXnjwOXFwBWBnrSdgus56gzlzMqaVXuDOzjd7yVQkGpuOEQ0EbaQ93bV3Aee1uvkuxNJdDdiWbUp11jJDtBjv30RgEAbWr0yHvyiqultXj5QDySKiWkr5EWTEqtytqrRZ5Yx2cNQEJLcclrWuh7rJaVw+iTUYopX8nceEXsnrEM424U37XsT6ySv0jtM9b8zXVwhVxittg8mZEzMocSmrMcynIYXbfOCRdYX0JWctCS0HWdoJLZlrU9hse9QA98M3oT9WSJ++1Jps+d+IOmGfFPGVUAqjMqLuGai6oyjTcN2Dsa9lcbh0fU88eEAf1fG975m3IvYBe2U52c72zztHLJ/k0+aRfST59GV9eP39NNUH07kDfacFWKGZHMXighUUTBDGPbt2iMd1qvRgEsyCzBblwnBnEiAR6F1gV/i/IaNFt1IakaVqkwJMwz1kahcFBMh0nSTyO6Dhn+cG0DUfK8K3YM35z+1jpn5mq8CI7VKdVLlAW+C46WgWVXi9jr6i098aD6ff6z9DvF42UrdY2G29JjZfjrPBMk5fCYpKHQvJcuBZgPFV5eM9YNV7mq9nxn7W9WPvYYN2ji4fBeiRAcvNGWw9TFUq8AwtZ1+YvJmvv9K575/bj5NPGazgJ2t8XGrL/zDfKzW8BXCLG0wsAAA==',
    },
})
Record({
    $id: Now.ID['e0b5bd5b47c7f21051a3e84d416d4353'],
    table: 'sys_hub_action_instance_v2',
    data: {
        action_type: '2de05916c31332002841b63b12d3aee1',
        action_type_parent: '02f0b88cc3c632002841b63b12d3aeff',
        compiled_snapshot: '2de05916c31332002841b63b12d3aee1',
        flow: 'd9fd88a633d39e10bf1221382e5c7b3a',
        order: '6',
        parent_ui_id: 'd0c96acc-7e09-444c-be53-eeb11b2afd11',
        ui_id: 'b452b535-5c44-4c4b-ae94-060895186602',
        values: 'H4sIAAAAAAAA/+1WTXPbNhD9KyxO8pRiSFFfVk8ZK04z09hTq3YPYYIBgSWNKQiyJKhY0fC/d0mQsuKPJun0kpnooBF23y7eLh6wercnUpAVmQfgz06DOQ+DMJz4/mQ5DeJ5GAcTETKAKXGJZhkg0rBYAe0WLtkyVbfGO8oUgKaVTmtWCsk0ZVUFBiFCVoViu5se+bI381upRAmarN69d0nBSkxooCSr/QPX19JTLAaF0D9afs/QNbviSdtvx7HOhXXkpWj5+C6BOwNaABJJmKrAJRnTgpm83JGVKWs0lMDEpVa7A+JWaoMJSYu9q+Qn3Hbpt7gEsDIO1ndY0r5L1pysmWEbzMxNXfZQfptLDpXtiYCE1cqcHdss4LIwMtc2pCuzj85VnekL2xJySDAcClrqCklA0dbZMu/LSDa3+cergeW51F1LeqfKOVOHFTOmlHFtWj57AgoyTEQzVhRSp7Qo863sgpFL5qUKF16i8o+4aSVT7THeEvewrcw7R/u6M9+wUrZVvMU0GNy4pNpVZwq1dV8LNpH+XbdMbGV9DdS2oQ3hpSzMS9xgCz3dxh10L8A/fVZYQXwvpE7q1ZHmK8NMXUW174diHw06j8gqItfaQZ0jfxARcSMb0nnYfJH4IGZBHPPlJPAXs9PpbBZOJ2wa8xh4B8caqRRfiW8+tAp+ksbbPJYKzkpo+yGx7gdkwF8my2eT8/ghmS/jmw8IN5D1dPYTbGm89MNxLILleLoIp+PlZAbjUHC2EPF8ESexdwUc75qXcaoTTm2CBjPVMf3v2T5Lc9Shb6U0hLeZAMWobJ5EjK2s8FV49Mb9UMYPZfTK+MYx9+XXaBhz5xKUqJ54noYZBxmetgFqn6sHc653Oje9s591wf8164K5332+o4lni/vuB97Rf5tHo8+WaG0tZyvb7te/4IhMRomgHVEaUqry/C9aF7S0N6F8dCE8ngtwfrLXwYnIr2/WETnZR9rBz5aVjtRFbZzen1ZeChpKlOPr6zfr0ckv90AhU2mqAdmF4X4oGw6jF1G0fpG6nXOysN8nXsHEKy1Gs8HuDw4kV+F56XTku85s2KQE1Jvu90FbE2nAw91/5o3I5uLyz/HVq9/HEXF+dl63Z7kBjkq9wsuRZ9dGKizCHNs2drNupwaPqWJbEAf1NU3z/h/N3vDYewsAAA==',
    },
})
Record({
    $id: Now.ID['5047646947433a10f487c24fe16d4399'],
    table: 'sys_hub_flow_logic_instance_v2',
    data: {
        block: '88f4a5d34787f21051a3e84d416d43fb',
        flow: 'e330bbdeeb175e10e317ff47bad0cd67',
        logic_definition: 'e9060aa2c3013010ace8b740ad40dd51',
        order: '0',
        ui_id: 'd0c96acc-7e09-444c-be53-eeb11b2afd11',
        values: 'H4sIAAAAAAAA/6tWyi8tKSgtKQ7JdywuzkzPU7KKjtVRyswDiUHYZYlFmYlJOalQbkpqcmZxZn5eCEjME0ldSmVeYm5mMrJQeX5RdlpOfjlCrBYAD1ouqHEAAAA=',
    },
})
Record({
    $id: Now.ID['5847646947433a10f487c24fe16d43c2'],
    table: 'sys_hub_flow_logic_instance_v2',
    data: {
        block: '04f4e5d34787f21051a3e84d416d431d',
        flow: 'e330bbdeeb175e10e317ff47bad0cd67',
        logic_definition: '35d60003e6022010a5e40cdd1254dd23',
        order: '13',
        ui_id: '1655ce6f-3277-4810-b783-354ac8577b7f',
        values: 'H4sIAAAAAAAA/+1Y32/jNgz+Vwajj2lm58clzVvRLkCHtQWWXF/mwpAtJtVNsXy2nLYX5H8fKctKnGTXoZf1YQtQBDYpkZ/IjxTdladKnZW6mKrLohDz1Bv98djyREoyfF55KVuAN/KiqNBMl0UUeS1vyWRJwlXoLSEvhEpDbxR6QdsPvVboFZALJsU3plEzVvmCaaP/dXJ/ZxYkapFJeLmPv0BCqhWJOFRPZ8myfjC7vrAla0uWztsTnYt0biycLY0u9NZrfFtAUbD5O/evdwFNkidYsMrGWKrna6DAQD4aX19eTW/u7ybTy+nnSQN36N2kGuaQ2/NxaJ/NBEgezVgCuqgWTwS5uWXZmIRm2yoMQ68U09cMfmMxSHod0U9tLySL+JMD45FK5atbofMSnPpJpNpo0lLK1saoWy127HGYsVLqyOTSrXJqllDyIshzlUcVRw47lg3UVxSOWrVgKWda5RvIMyaLjV7lvAJkdMHWvpdIQjrXT07Z8+l3jX+NdGNINzm14h8NvLV4rLgXTXP7YXcb3xnyWxuN90W98/2o+y7uFPjvVEP7TOOp3x102wpqLImKjDlqPm7NTvkdK0Gq6fqNumjG/tKk7KeJaY37iCLbV6KNj32AR6wS3ylL8TkVX0u44U45hC7E3Yv+eXJx4Z/32ICfx0POzv1hwAKWsHgAsUv2Grs8F0Um2evDqdmfmv2p2Z+a/anZ/4ebffIkJM8hNTO/4NjvUWhnf+pwW1N/czV+LRRJLjJN4Vmi3hyoFiI3kEx7Fm31/ohRXJKxHM1pyFHQPIBpCoaJyEjSbtEQndl2iz4PlCHqKWXYfLbBvQFnF30prqvbk9yiBeE8GqrLPSB1gGrNVRXzZgb0rjFDF28UtDx40ZBy4A6bY5qTEFPvkahOQNVSeUV6FeIb2u75tG4GeJDEnty9RnYgqLOlRAL3GcWvkmgWyzqVSpaL9K4CT6NEVWcPm3hayXVzxkBFWaAjyOgwhM5CnU2e1PPvNZKxSM25rVKqhEn3xjQ24bjUUFSJQfzR15IWVH6t6aiCTeR8gy3VHfGBZClqhw2uOBi7VLl1xbRXXXrHoOVL54h88f93jHncSUx1ndWJ8WeDDuuzTj8Ouh0/8ONPATB86A6GQTLoXWwl7hcikr1PNtlr/KfFJlDVLuqCp6gfKYXDj0vhcTNly3Q7PM3CdYnZnjBQ3pwtUA8SFpTgBcsyLJQoy9VSGBT0sdCeS3xpz3AeQvQ0ELWrTtDGaLP2Zk56YPgpFJspKMPN/6D3HOoU1JEsUEjJHN+6JoP97zLTf3Zbyt9djbvcneLmn8fktuYv5wM/GA6SpPsJiL/9fr8bD3o+4z2fc55s8XcDbw+v5W2slASW/jvE/Zi7amaDc7j91NoPv7UOMueRiFJxsKiSzSER9Mk+JdlN/V9dUrxizkSyLXpW+Z9E8o1s/RfQLDk/HxYAAA==',
    },
})
Record({
    $id: Now.ID['d047646947433a10f487c24fe16d43bb'],
    table: 'sys_hub_flow_logic_instance_v2',
    data: {
        block: '00f4e5d34787f21051a3e84d416d4319',
        comment: 'if success',
        flow: 'e330bbdeeb175e10e317ff47bad0cd67',
        logic_definition: 'af4e1945c3e232002841b63b12d3ae3e',
        order: '9',
        parent_ui_id: 'd0c96acc-7e09-444c-be53-eeb11b2afd11',
        ui_id: '5918978c-25b0-441d-a6e0-29422cb5c6c8',
        values: 'H4sIAAAAAAAA/+1V227aQBD9FeRnY/kCFHiLaCJFTZuqTvNSRdZ4dwyrLl53dw2hiH/PrC8ENUSNqvatL4g9cz0zc+S9p2pb1dbcqQtjxLL05t8efE+UDqP/e6+ENXpzj6mSCytUmTWA721A1s5AYWgHn7XaCENm5IO0ZgyNKWopd+TIhakk7O7f6s9WQnKNXScVaKpnUXvz/S8mu6swk5CjpLSp1aJcUrjg9CpCKKIZi1gST5I4DOPpKMonSR7FPAGEhPz6wEVPbHDTIP6rjF09wk1fSWnu2opC38NHiyVHKl2ANOh7ayg5WKV3R0Qj8NtSPgMrUVpK5znnRyN+Uu54PHaOBRJHhq3x+My6QbYwWynB8LZyDbaIhVx2MUzJel1+anm4FWABtbT9CgipDeXDyjXtuuhaKtKV2n7pC16JsiHYGaViII8vsDSGvLZo3GJQ4poSZWuoKhpOVrn1NsHUyzpYSnoEhVRbKuquLADmGg9oRhBcEf6+ge9BC8fiI6Wh4LbNHIxgWXORlM5qonBoxpL9qF1DLcGOStZOgxwM06KyF1Rng13XB//lOZ9c8n4PSZJPZyEOYzbF4YjPRsNZHtEPhzBM2LtxMoFAI6PNB1V/wY6vsWBrEzDF8XC4uf5wmX5dLC7T9OX5/5sif0MzMxgX4ygcn9fMaHJOM2fU8rpQ4t8Ixa32jToJw/C/UE6FIkzWHnzHrSn+xzp5cKJoK5j2bjiy5g7vHHbdfx2cYUcHINgptFX6u6PwjB2eAAsD28VnBgAA',
    },
})
Record({
    $id: Now.ID['d447646947433a10f487c24fe16d43a4'],
    table: 'sys_hub_flow_logic_instance_v2',
    data: {
        block: '80f4e5d34787f21051a3e84d416d430d',
        comment: 'Set Codes for SubType and SubSystem , in case of new Asset to be created',
        flow: 'e330bbdeeb175e10e317ff47bad0cd67',
        flow_variables_assigned: 'sub_system_code,sub_type_code,system',
        logic_definition: '4f787d1e0f9b0010ecf0cc52ff767ea0',
        order: '4',
        parent_ui_id: 'd0c96acc-7e09-444c-be53-eeb11b2afd11',
        ui_id: 'b51c2f48-8569-4996-a60a-1abec6190c10',
        values: 'H4sIAAAAAAAA/+1YTW+bQBD9L5wNWmCBJbdIVaRIaSMlaS5VhfbTXpWvwJLEtfzfOwvGSd06ahUOjsTFMrO7M2/ezsNP3jhVZ+rOtHfVedvqZemcffu+cHRpY/B945S0kM6Z03Ysa9etkUXGKyGdhfNI886ubDZBgBAjKHSZ8ImLkxC7JIikGwpOE8HihCnm3UheNcIbcng2x3YLWYRu65yu7ydJxlc6F43cNVHTBrAb2Thnm4Mls65lllMmc6h5axpdLuG4FvCEUZQSEgdhKMJU+ogpPwj8kAQy4gnzMewbD/7JyVGybEG7MJYC9BYXWjjy2chSSCitaN7KhVPQUlBTNet9pJFUXJf5S2ClSwPZHLv5udU/ITVBCNmdSkKTXA6r+8dsR/MQ5qtKc3ldG12VQ8RQlu/O8CrvivLL0Ii9IKlol5vxgiDStZBP1ha1hbHDpG5X1dPNWPBCl32Du8W84jTfP1EDNLDOyNbeTKfvDsgZIleH1yNzWUDFrKB1DZGsbqpH3VcB0IW3zOHBU3n1BOjsKHuU2w49YJN6FxD/1IfvaaNtu58hDRy25b6W+qGTl/31yzCWMRFuStLIxUzFLkUJfCg/TWH0Ys4TZ9tTmz10tqmBpB0d2cAobGh5o2tzDhAe5b7zIQhdb7eL36TVD+S7hFXwbEw0kbr+mnEKiZG3JZYcSOw1N0com+X1UeTFEAtZEriYY+ViGoOyGEVu4iuFCA4SQvyp5dW/iN+jq1LxbNLfrSM5p9AWixFRUYRwAnIKfBT5NJQEC+zHAoexeK2tkZhDomY1fRA1+cyPlaAwZJRQF8eYupSEKUyfD/qKEMeET6Km71Y9A5LBFVrkV9VS88uyNRQ4vF23PSRE3ny383FO/8M7naDRnK3lrNaTtpaT6PMfjNdJe9XZnc4KPVl3+n6FHrNvJ+9zZ2c7K/GEnK2QXLeA8M7CuRz/+bQLa5gfK9CX0FPV/LC9vcS2vwBhJ4ySQxUAAA==',
    },
})
Record({
    $id: Now.ID['d447646947433a10f487c24fe16d43be'],
    table: 'sys_hub_flow_logic_instance_v2',
    data: {
        block: '8cf4e5d34787f21051a3e84d416d431a',
        comment: 'failure',
        connected_to: '5918978c-25b0-441d-a6e0-29422cb5c6c8',
        flow: 'e330bbdeeb175e10e317ff47bad0cd67',
        logic_definition: '1f781bf3c32232002841b63b12d3aee6',
        order: '11',
        parent_ui_id: 'd0c96acc-7e09-444c-be53-eeb11b2afd11',
        ui_id: '3640e14a-9e45-45c4-8d78-43ed7f9c04c5',
        values: 'H4sIAAAAAAAA/6tWyi8tKSgtKQ7JdywuzkzPU7KKjtVRyswDiUHYZYlFmYlJOalQbkpqcmZxZn5eCEjME0ldSmVeYm5mMrJQeX5RdlpOfjlCrBYAD1ouqHEAAAA=',
    },
})
Record({
    $id: Now.ID['d847646947433a10f487c24fe16d439f'],
    table: 'sys_hub_flow_logic_instance_v2',
    data: {
        block: '8cf4e5d34787f21051a3e84d416d430a',
        flow: 'e330bbdeeb175e10e317ff47bad0cd67',
        flow_variables_assigned: 'employee_type,identity_location,decision_table',
        logic_definition: '4f787d1e0f9b0010ecf0cc52ff767ea0',
        order: '2',
        parent_ui_id: 'd0c96acc-7e09-444c-be53-eeb11b2afd11',
        ui_id: '2697b8d3-6939-45b6-bc95-7d8d5cc9f07e',
        values: 'H4sIAAAAAAAA/+1Y227iMBD9lzyTKAm58tbtRULqRSrsvqyqyLHHYK1J0sRpyyL+fceEQEVb1C3VLpXyBB6PPWeOz6GjLoy8VkWtqnF+UlVikhmDn3c9Q2Q6ht8XRkZmYAwMmBUynwMkal6A0TMeiKx1fLE4LYEoYIlj0bosIVNWCfc1VCrheWnpdKuaV4lgyyWeY6IqJJn/+OBxOhWSYVYDsyAlolNQGoPFzpY+mEiSgsQqI1WKbILHBcNV5MZBQPu2F0KfEGZzLwqp63FwAub1qY157cHdrt8gY/UxMKq2TF4yjcnuGfCkIGOAZTmRFfSMGckYUXk530Swf3aTyW1gKjKFtxk6+akSv/HqyLZtnckBG6TQ7G6WyZrUJkynuaBwUyiRZ01EkVSuz9Bc1rPsumlDPwdwUkvVPgdG6grvg0Kj1jDWmPhomj/etgUvRLZqcL0pc0rkZkUU0pDWCir9KrUY75DTRC53nwYkzLBiMiNFgZGkKPMHsaqCoGfWROLC4jJ/RHRaqBahukML2STWBcbPVuEfpBS63Su8Bg/rct8zgYIa6qePvTTy4xTMyPdc0wOHm2nQ90xgHud2EDp+7BrLFbXJfa2bakha05E0jGJCRUtRqBOE8ADrzpe9jVmEThZqnmhmVu/w3DCuQx0S8tCMQ/BMzw0dM6JBaNo+oyQKg9i3uXULFFVktRfstdChF/4DUwXPTPUaO3uI68z1RcxlOw4NGDgm9f3Y9NIwNAk4rumGNAIWMpcx8gnmYkBFheCShvmts65OzbPz0+FoeHNtjk++XZ6/9MprKZ+i/mCv+uNn6n8B/622Ot1/Fd3bccqdMMI/KgR/frkDZupFYDLOXYfzKHU5/7Du77S+m+rNPKbRXuYTQYdZpQjyNppXKxj+Xg0CbbX6zpnmPw143UjXue+oRrqD/faX484Rz4ndZNh59Cgnw4M9+u6h7MBZs5suO+8c2XTZKmOsIQzb//vpjTlqR1tqG3rMy1+6n21s+QdAv+03QRQAAA==',
    },
})
Record({
    $id: Now.ID['d847646947433a10f487c24fe16d43b6'],
    table: 'sys_hub_flow_logic_instance_v2',
    data: {
        block: '88f4e5d34787f21051a3e84d416d4316',
        comment: 'store asset id and nfc client data push',
        flow: 'e330bbdeeb175e10e317ff47bad0cd67',
        flow_variables_assigned: 'asset_id',
        logic_definition: '4f787d1e0f9b0010ecf0cc52ff767ea0',
        order: '7',
        parent_ui_id: 'd0c96acc-7e09-444c-be53-eeb11b2afd11',
        ui_id: 'e1b52a3d-1293-4e1d-b26a-7a1dcf83d010',
        values: 'H4sIAAAAAAAA/+1Vy27bMBD8F54tQ9bDlnwzUAQwkDZA4+ZSBMKKWtlEKVIhKTuu4X/v0pIfaIL20kuB3MRZcmdmH9CB6c61nbMrvbBWrBWbf38eMaE8Rt8HpqBBNmdgLbpCVGzEtiA7Dx0OZZJGZRqnQcqTJEh4UgaAeRKE0zDL00k2nYbR2CDXpjoe6WUlbCth/zQkIIRvhKwMDrQtGGJzaNj88FvI7VssJJQo6eFXrJEiHCkDSZqzJEzzLJtGcVzFOU7Csp5E0STOIkz5rAxrund+e2PkrTXPQoi5yU/avZ5wxPDVoaqQ+GqQFkesAVWB02Z/QQxC9aDkFdgI5XqnDbxa8ZOyx9HohmDOXguQiKqwat2BqQSo4qSI3VwrhsrR9cUQ4xstOD60TmjVMzgo5V8Sci27Rn3pffuGYA2ddDcN6SyRYeuNeuWDjfpxo3eXqt8JdarJEJSag7ycwDkjys6h9U3sxOptSXvw/p1mosSGeIsG2laoddEavRUnLpLejNeSDuNa6h1p9NM6Bu79j6kNML4j/NMJfgIjfDE+Uxp67Bm/KfHS4bIfloSoJ1lQ4oymts6jIEOYBrM0S8KQzxKaanY8Vb946by1vlRDUYq+3nTBciNatyAJWxz8H5/9fvTs/f54tfd6LfhSWQdk83FvTzLiLOY8iabvz2xenWf7jwP7L3fxY/s+tu//374KubCkauUlLM//MR/Y08T5NbxCO21+eD9X7PgLLV+fFhEHAAA=',
    },
})
Record({
    $id: Now.ID['1947e46947433a10f487c24fe16d4374'],
    table: 'sys_hub_flow_logic_instance_v2',
    data: {
        block: '04f4e5d34787f21051a3e84d416d431d',
        flow: 'd9fd88a633d39e10bf1221382e5c7b3a',
        logic_definition: '35d60003e6022010a5e40cdd1254dd23',
        order: '13',
        ui_id: '1655ce6f-3277-4810-b783-354ac8577b7f',
        values: 'H4sIAAAAAAAA/+1ZXW/iOBT9K6uoj5RNCgyUt6pdpK6mRVqYedlUkWMb6hmTZGyHtoP47+NrOyYhzKymy2irFRKK4nv9ce851ydx2AR5qYpSyXl+JSVbZsH474dOwDKw6ftNkKEVDcZBkkiFVCmTJOgEa8RLMG7iYE2FZHkWB+M4iLphHHTiQFLBEGdfkdKeSS5WSBn/n7PpvemA81XB6fM0/UQxuDZgItTeneF1dWNGfUJr1OUoW3ZnSrBsaWY4WxtfHGy3urWiUqLlK8dv9wOa4Ue6QnaOCc+fbigAQ8V4cnN1Pb+d3s/mV/MPs0bccXCbKbqkwuVHaPdswSgnyQJhqqTtPGOwzB0qJmA0wzZxHAclm78U9D1KKYfmGC7VfDHMqC+CIpLkGX/xPZQoqXc/skwZT1Zy3tlN6nuzvfkIXaCSq8Rw6Xt5N8JAXkKFyEVia+TwwrwR9TXAUblWKCNI5WIX8gJxufPngtiAjC+qjXtOOM2W6tE7+yFct/rXoFtDuuPUmf8t8G7GY+Eum9O1YfcDXwn5nUPjdahf/Bj10OMOwP9gN3TPlM761aA7KahiwXlipgPx8X32tt+xCMqbS//Dvmhif2Uo+21mpLEdUeJ0Jdmt0Q7wiLsk9M6SfcjYl5LeEu8c0R5Ne5eDc3x5GZ730ZCcpyOCzsNRhCKEUTqkqSd7q1WeMFlw9PLxJPYnsT+J/UnsT2L/PxZ7/Mg4ETSrv/ODsmlXgYRuKyo00YHZboZjzTUYagTrIU7I9KgDBa79AIbe1v4E0X7MaIvEghUK4F5riwGoMuoVtx0jbyJD/D3LPtshtfD18aVkN3ZSCE13YD4qU2i8FSwjdprKc20zb+KgDk3WTtxQGIyjTkCfFc0IJT4Hz763QPVMdfEEY0CmYwrYhqIZl+yrXrAfQrcF1dlhB5BvJg48a17cIIW0opVYlYJWwOQMU2lxsY1pAcxYt0Ipr3rmvFxl9zZl4MXujRovznLTIqyUOhJaQLIQvsttMXvMn/6qQp2wzODinDzHiPsWUlo401JBoECwfJHXHEm5i0annHwpYYiNxC2W2ES2B4tm2/Gl7B4XP1nN9unwxopZVkE1atmHul/Kdz7zFhTqwISt1F05XxyvnMNTQb+2oB/26reh2idpPknzW6zkk8yeZPatFueDYzJcDC/QAF0M0qh3EUZh+i6iSN/0hqMID/uXNab/gOp0p4Ad3Y3v445xexDYY3xaGSsxAp5+inNnOED66JikO9auj1gIx+XbqUgd6KaueKjrJ0xtb54ttZ9yuoKiWKGi0NsxKUS+ZiYK+FjUXXLd6C70eVhHDwfirhWqrqYIdXfn5I9IMIBDi1yhB/+K91iawQKk9h9M1JZDI5j7+va994ZqBxAyDKPREOPeOwo7YDAY9NJhP0SkHxJCcG0H7IJoReUqP81zTlG2V/pzHdfvE8jo15T/ER/Hxy7+hcv6sBRW3v9eD7/72rl2te3xwQw+Bc/Bdlv9WwiOF10TDNdNT7n4DJtnZ9t+A3wUxSd3HAAA',
    },
})
Record({
    $id: Now.ID['8547e46947433a10f487c24fe16d4356'],
    table: 'sys_hub_flow_logic_instance_v2',
    data: {
        block: '80f4e5d34787f21051a3e84d416d430d',
        comment: 'Set Codes for SubType and SubSystem , in case of new Asset to be created',
        flow: 'd9fd88a633d39e10bf1221382e5c7b3a',
        flow_variables_assigned: 'sub_system_code,sub_type_code,system',
        logic_definition: '4f787d1e0f9b0010ecf0cc52ff767ea0',
        order: '4',
        parent_ui_id: 'd0c96acc-7e09-444c-be53-eeb11b2afd11',
        ui_id: 'b51c2f48-8569-4996-a60a-1abec6190c10',
        values: 'H4sIAAAAAAAA/+1YXWvbMBT9L3qOjWzLttK30lIodCu0XV/GMPpyIiZ/1JbbZiH/fVdxnISuH1vJoFC/hOhc6erc43vwxUtUdbbubHtTHbetnpXo6PuPCdKlw+D/EuWmerioZlqcl61lpVDXi/ZcoiOEaTylNAmjSEZTFWCeB2EYRDRUsUh5IBCkcfvajmftorWqyEQlFcAlK9SzgXtmOhdZLsMQY05x5HEZUI+kEfFoGCsvkoKlkicpz7l/pUTVSL/P4bscqxVkkbqtDVvcHiRZzRpga1WDjpZIzLWRjRpEctUR/KoKBFIYxpX5NyHsol4HbKPL2WZ9sUlzPYBA19HCE6QerSqlAj45M62aoIKVktmqWWyRRjF5WZodMNelhWzIbX5s9S+4j2KM3c5cQY1C9dHtMtvo2sP5KbMMqHTCds1mq5hXWqi2V0eqnHXGnuxj/YbL2uqq7I9Yxs1wujJdUX7tJUHbBMNjBKRrgYSqXamO+6aQ/HpePVwNLM90uVZlEzSVYGa7Yha04511fJao0zdPZO6RP4RWRhVwY1awugYkq5vqXq9vAdKFPzOw8J1PgJ3zkM+Eq9CHR8D8M8BP1/Ata7Qr9wukgcPuum+lvuvU2k5ERYlKqPSmdBp7hOeJx3AKP3kwnUKDJkKkaDVB0CgnhrXtTih4Qtld58rsZdsIlPUauyOi0bU9BlL3aqtFD4IOq9XkQC53XfpMa+/D73N4IbIh0YFs/mzGt7xOX/d6+sTrfyHH6PPP53OOecTT0COC5B5hCVicM+ylQZ5jSsKU0uAj+3z9ntrr6GH9bmeXucgO+gp/Iedb7uYJpnkcY5JC0WGA44BFihJJgkSSKJH77n5JhNHPn87PAQ+SXDJoRUaZRxLCPEajKfRoAA6PsSBU/Cc//3Cu67mNs/o4q4+eH2f1cVYfZ/XR5+OsPs7q46w++vljzepSCd0C5xtH8Hz4wu4CC+hNZ/Md9FA1P121O2z1G0nhsgarFwAA',
    },
})
Record({
    $id: Now.ID['9147e46947433a10f487c24fe16d436d'],
    table: 'sys_hub_flow_logic_instance_v2',
    data: {
        block: '00f4e5d34787f21051a3e84d416d4319',
        comment: 'if success',
        flow: 'd9fd88a633d39e10bf1221382e5c7b3a',
        logic_definition: 'af4e1945c3e232002841b63b12d3ae3e',
        order: '9',
        parent_ui_id: 'd0c96acc-7e09-444c-be53-eeb11b2afd11',
        ui_id: '5918978c-25b0-441d-a6e0-29422cb5c6c8',
        values: 'H4sIAAAAAAAA/+1VyU4bQRD9FdTnYTSL7WBuyICEQkIUEy4RGtV01+BW2tOTXgDH8r9TPYuNgqOAktxysdyv1vdcT14z7V3jnb3WJ9bKu5odf72NmKwDRt/XrIYlsmPGdS2kk7ouWiBi96B8CFAZuoNPRt9LS2EUB3PPOVpbeaVWlCikbRSsbl6bzxdSCYP9Jg0YmufQsOP1TyEpqF2VQJVOecrzbJJnSZIdjdJykpdpJnJAyKmhghIVpc4GCgeXLRL9kptbNQG3zsj6rn9f9l3mA6iNCFulScTw0WEtkPapQFmM2BJqAU6b1RYxCOKqVjtgIWtH7VhIfrTyBw3MxuOQWCFR5NgFt8+i17GDq1NwQKt47rzpU/lCSxKyE0dgBV652XOsS7hqAtWuxEGphmqt/LL+2CnCtg2Gn40Qb2kJbALTsHrPo5ov9MPnYctzWbeq9EGlOajtCxxpV3oX9lkzVLikRsUSmoYULZpwEm0x7bKM7xQ94krpBxoaLjMGHhaPSViIzwk/beEbMDKw+EBtqLhbswQredFeMbUjmZBtImZXdqbA2h1JUrf47sOKHeWeXNHpE0q4kY07ocn32PPYRC9N8cwP6zXkeXk0TfAw40d4OBLT0eG0TOlDQJLk/N04n0BskNMBxc3gg6CAdeC8jbkWuNlcXrw/m3+Zzc7m85cm+jdD3ua8KYyrcZqM9ztvNNnnvD2ee6Pdst/YLfzWr3RbkiT/7fbHdpO26EzSc2uH/0W33QZrdTO3WvP2mq8DdjH8U4XAio5L8ufQgzbfAqkdtnkCTMxXm/MGAAA=',
    },
})
Record({
    $id: Now.ID['9547e46947433a10f487c24fe16d4370'],
    table: 'sys_hub_flow_logic_instance_v2',
    data: {
        block: '8cf4e5d34787f21051a3e84d416d431a',
        comment: 'failure',
        connected_to: '5918978c-25b0-441d-a6e0-29422cb5c6c8',
        flow: 'd9fd88a633d39e10bf1221382e5c7b3a',
        logic_definition: '1f781bf3c32232002841b63b12d3aee6',
        order: '11',
        parent_ui_id: 'd0c96acc-7e09-444c-be53-eeb11b2afd11',
        ui_id: '3640e14a-9e45-45c4-8d78-43ed7f9c04c5',
        values: 'H4sIAAAAAAAA/6tWyi8tKSgtKQ7JdywuzkzPU7KKjtVRyswDiUHYZYlFmYlJOalQbkpqcmZxZn5eCEjME0ldSmVeYm5mMrJQeX5RdlpOfjlCrBYAD1ouqHEAAAA=',
    },
})
Record({
    $id: Now.ID['9947e46947433a10f487c24fe16d4368'],
    table: 'sys_hub_flow_logic_instance_v2',
    data: {
        block: '88f4e5d34787f21051a3e84d416d4316',
        comment: 'store asset id and nfc client data push',
        flow: 'd9fd88a633d39e10bf1221382e5c7b3a',
        flow_variables_assigned: 'asset_id',
        logic_definition: '4f787d1e0f9b0010ecf0cc52ff767ea0',
        order: '7',
        parent_ui_id: 'd0c96acc-7e09-444c-be53-eeb11b2afd11',
        ui_id: 'e1b52a3d-1293-4e1d-b26a-7a1dcf83d010',
        values: 'H4sIAAAAAAAA/+2VTW/iMBCG/4vPBIV8QOCGWiEhdbfSttvLqoomzgSsdezUH7Qs4r/vmKSFaiv1vuotfj0eP/OORzkw7V3nnb3XS2vFRrHFr8cREypo9H1gjdTPN3oj+FpZB4rj3d6ua7ZgaZFyniXTNK3TOU7iqpkkySQtEsz5rJrXjNKEOLAWXSnCWkGL75UdSB+kw6HK8qTK0zzKeZZFGc+qCHCeRfE0Lub5pJhO42RskGtTH490sha2k7B/GBKQ0oGh/A4NWxwY3wpZG3ytJ4BkcT4vimnyMXDcUAoJFcrPmN2+C4rBBukCjoN0M5z9caETbMCJRwxfHKoaiaMBaXHEWlA1OG32b4pBqG+VPAtboVxfWgsvVvyhW9NkdHHxgr2UIBFVadXGg6kFqPJEyi7CysEqCl8Oe801OLhzxnPnzWAf32rB0faG1diAl+7qUusDbjsntOqPOKjkJxRcS9+q772J7C3xRdu8JULsgjuh3KH25m6rn9+sXAl1MnLYlJqDvAhFMHy7EihDm5VvK4odMXDOiMq7wH9gXtz/27de/KhzKLElnrKFrhNqU3ZG78SJgUpqxxtJi3GYDWIPczMGHnwZU09hvCL9+iQ/gBHBpG+U5gTlxU8lnjyu+xeZ0dWTIqpwRm++mSdRgTCNZnmRxTGfZTQT7Dhidm+vJDl6tpGKKJ98MKE3dbCv7DsTjnAjOrckqB0OTh0fw7z1PF+z/TXbX7P9f812jVxY4rwPUOvXP3jY2NNDD0N+lp61+R0qPGvHvxR7EmILCAAA',
    },
})
Record({
    $id: Now.ID['c147e46947433a10f487c24fe16d4345'],
    table: 'sys_hub_flow_logic_instance_v2',
    data: {
        block: '8cf4e5d34787f21051a3e84d416d430a',
        flow: 'd9fd88a633d39e10bf1221382e5c7b3a',
        flow_variables_assigned: 'employee_type,identity_location,decision_table',
        logic_definition: '4f787d1e0f9b0010ecf0cc52ff767ea0',
        order: '2',
        parent_ui_id: 'd0c96acc-7e09-444c-be53-eeb11b2afd11',
        ui_id: '2697b8d3-6939-45b6-bc95-7d8d5cc9f07e',
        values: 'H4sIAAAAAAAA/+1YXW/aMBT9L34mURJCPvrW0VZC6odU2F6mKnLsa7BmkjR22jLEf981CVCtVdet1bSpeQIfX1+fe3yPuGJNysZUjdGz8lhrOS/I0debAZGFxfD7mghV3p+Xc8kmhTa0YDBd6QknR2QUpVHEhl4Yw5BS7okwiVkQCvAjHg6BEUxj42BZqXIFkJlVBQgWdAnPwHdUNRZfr8c1UAM8813W1DUUxq3htgFtMlHWrg139Upnkm82eI5LXSm6+vKHxytaIx8DNTlaE7aQiuORTgTLPgleqpJ5mELRHNTrC91+HBFtalnMu/V5l2K6A8uaW0regMCDgYIDchFUaRiQJS04NWW92iNYML8q1AFYyMJgNmKDH7T8jvclnufZSAFYH4N2d7/MOhVbWJxQQ5FKw0xTd6FsUUoGulWGg6CNMuPHWBtwVRlZFu0RQ3O1O12qZllctoKQfYLdoyHSaCQBlS3Vcu8KEdNFeX+9Y3kmi60q3aYqGVX7FTWoXd4Yy2dNGjn7SeYWeSI0KFjijdmSVhUiWVWXd3J7C5JeunOFC9d6ANlZf7iU2QpdfALqniF+soW/0Fraci8wDR62130uJLbd1ippmCejNAcnGYWBE4IvnDwahg7wUAgviv1RGpDNgGBfjhXV+iAUvlB229gyW9k6gbJWY3uE1bIyx0jqDjotNoN3cK2010izyqzK2zfdN/RzWwf3Bj7zaSxiJ40hdMIg9p2ERbHjjTijSRylI0+418Cww91dghf9/NaEb3R49MjhvylK7/QP53TP91nEwXfYaJQ6YR7HDgU/cIKYJcBjHnBO/zGnc2BSY6FZ+4r7jn6C7zx+MXZOTseT6eTq0pkdfzo/fera50J+6cMX+bL0kQ9fTbl34MdzoJfmwo8T/K2l+HMhfHDyMAGHCxH4QiR5IMQ7OvDG+qLl08/L/bzce7ifl/t5uZ+Xe6f383I/L/cO/A8c+Nfn5V3XzSypye6fZruxwr60xjxA92X9zVZ4wDY/ABmsYyizFgAA',
    },
})
Record({
    $id: Now.ID['c947e46947433a10f487c24fe16d433f'],
    table: 'sys_hub_flow_logic_instance_v2',
    data: {
        block: '88f4a5d34787f21051a3e84d416d43fb',
        flow: 'd9fd88a633d39e10bf1221382e5c7b3a',
        logic_definition: 'e9060aa2c3013010ace8b740ad40dd51',
        order: '0',
        ui_id: 'd0c96acc-7e09-444c-be53-eeb11b2afd11',
        values: 'H4sIAAAAAAAA/6tWyi8tKSgtKQ7JdywuzkzPU7KKjtVRyswDiUHYZYlFmYlJOalQbkpqcmZxZn5eCEjME0ldSmVeYm5mMrJQeX5RdlpOfjlCrBYAD1ouqHEAAAA=',
    },
})
Record({
    $id: Now.ID['d9fd88a633d39e10bf1221382e5c7b3a'],
    table: 'sys_hub_flow_snapshot',
    data: {
        access: 'public',
        active: 'true',
        attributes:
            'browserActivatedIn=chrome,integrationActivatedIn=standalone,labelCacheCleanUpExecuted=true,timeFromCreateToActivate=536884000,viewActivatedIn=naturalLanguage',
        callable_by_client_api: 'false',
        copied_from: '1ed7f2e4ebcbd2100326f284dad0cded',
        description: 'Auto Approved Mobile Cred Request Flow',
        flow_priority: 'MEDIUM',
        internal_name: 'single_mobile_credential_request_bulk',
        label_cache:
            '[{"name":"a33b890e-2c8e-4d94-9b14-9da003c7536a.record.provisioning_message","label":"8 - Create Record➛Identity Asset Record➛Provisioning Message","reference":"","reference_display":"Provisioning Message","type":"string","base_type":"string","parent_table_name":"x_aleen_snguardian_identity_asset","column_name":"provisioning_message","usedInstances":{"3522cd61-c65b-47ad-848b-332c71f6ed6a":["work_notes"]}},{"name":"a33b890e-2c8e-4d94-9b14-9da003c7536a.record.asset.number","label":"8 - Create Record➛Identity Asset Record➛Asset➛Number","reference":"","reference_display":"Number","type":"string","base_type":"string","parent_table_name":"x_aleen_snguardian_asset","column_name":"number"},{"name":"a33b890e-2c8e-4d94-9b14-9da003c7536a.record.number","label":"8 - Create Record➛Identity Asset Record➛Number","reference":"","reference_display":"Number","type":"string","base_type":"string","parent_table_name":"x_aleen_snguardian_identity_asset","column_name":"number","usedInstances":{"b42a474f-93ae-4e6e-8274-c4cb3c6da787":["work_notes"]}},{"name":"a33b890e-2c8e-4d94-9b14-9da003c7536a.record.provisioning_status.code","label":"8 - Create Record➛Identity Asset Record➛Provisioning Status➛Code","reference":"","reference_display":"Code","type":"string","base_type":"string","parent_table_name":"x_aleen_snguardian_provisioning_status","column_name":"code","usedInstances":{"5918978c-25b0-441d-a6e0-29422cb5c6c8":["condition"]}},{"name":"4a5c8453-3acd-4128-99c0-d7835636cbcf.record.number","label":"12 - Create Record➛Identity Asset Record➛Number","reference":"","reference_display":"Number","type":"string","base_type":"string","parent_table_name":"x_aleen_snguardian_identity_asset","column_name":"number"},{"name":"4a5c8453-3acd-4128-99c0-d7835636cbcf.record.provisioning_message","label":"12 - Create Record➛Identity Asset Record➛Provisioning Message","reference":"","reference_display":"Provisioning Message","type":"string","base_type":"string","parent_table_name":"x_aleen_snguardian_identity_asset","column_name":"provisioning_message"},{"name":"cbe1f6d5-7d46-4882-9b97-19bd3932de77.Record.provisioning_message","label":"14 - Look Up Record➛Identity System Record➛Provisioning Message","reference":"","reference_display":"Provisioning Message","type":"string_full_utf8","base_type":"string_full_utf8","parent_table_name":"x_aleen_snguardian_identity_system","column_name":"provisioning_message"},{"name":"4a5c8453-3acd-4128-99c0-d7835636cbcf.record.provisioning_status.code","label":"12 - Create Record➛Identity Asset Record➛Provisioning Status➛Code","reference":"","reference_display":"Code","type":"string","base_type":"string","parent_table_name":"x_aleen_snguardian_provisioning_status","column_name":"code"},{"name":"4a5c8453-3acd-4128-99c0-d7835636cbcf.record.asset.number","label":"12 - Create Record➛Identity Asset Record➛Asset➛Number","reference":"","reference_display":"Number","type":"string","base_type":"string","parent_table_name":"x_aleen_snguardian_asset","column_name":"number"},{"name":"4a5c8453-3acd-4128-99c0-d7835636cbcf.record.provisioning_status","label":"12 - Create Record➛Identity Asset Record➛Provisioning Status","reference":"x_aleen_snguardian_provisioning_status","reference_display":"Provisioning Status","type":"reference","base_type":"reference","parent_table_name":"x_aleen_snguardian_identity_asset","column_name":"provisioning_status"},{"name":"6a8a1dda-a660-487c-89be-cd6d95ff3835.Record","label":"9 - Look Up Record➛System Record","reference":"x_aleen_snguardian_system","reference_display":"System","type":"reference","base_type":"reference","attributes":{"element_mapping_provider":"com.glide.flow_design.action.data.FlowDesignVariableMapper"}},{"name":"Created_1.current.request_for","label":"Trigger - Record Created➛Request Record➛Request For","reference":"x_aleen_snguardian_identity","reference_display":"Identity","type":"reference","base_type":"reference","parent_table_name":"x_aleen_snguardian_request","column_name":"request_for","usedInstances":{"21c1a7f7-97e4-4271-8c67-05dca876950f":["conditions"]}},{"name":"47dcb633-1717-4ca6-83ef-876f3f74638e.record","label":"10 - Create Record➛Asset Record","reference":"x_aleen_snguardian_asset","reference_display":"Asset","type":"reference","base_type":"reference","attributes":{"element_mapping_provider":"com.glide.flow_design.action.data.FlowDesignVariableMapper"}},{"name":"64934999-aa82-4eb5-9393-bbbf141f8a57.Record","label":"8 - Look Up Record➛System Record","reference":"x_aleen_snguardian_system","reference_display":"System","type":"reference","base_type":"reference","attributes":{"element_mapping_provider":"com.glide.flow_design.action.data.FlowDesignVariableMapper"}},{"name":"4821266c-a7da-42dc-825c-670d17727524.Record","label":"7 - Look Up Record➛Asset Type Record","reference":"x_aleen_snguardian_asset_type","reference_display":"Asset Type","type":"reference","base_type":"reference","attributes":{"element_mapping_provider":"com.glide.flow_design.action.data.FlowDesignVariableMapper"}},{"name":"flow_variable.sub_system_code","label":"Flow Variables➛sub_system_code","reference":"","reference_display":"","type":"string","base_type":"string","column_name":"","usedInstances":{"fe44eeea-f264-40b9-b1db-baf6613aa36b":["conditions"]},"attributes":{"uiType":"string","uiTypeLabel":"String","element_mapping_provider":"com.glide.flow_design.action.data.FlowDesignVariableMapper","uiUniqueId":"4e36e68d-9895-4bf6-a076-af199bfb6cc7"}},{"name":"flow_variable.sub_type_code","label":"Flow Variables➛sub_type_code","reference":"","reference_display":"","type":"string","base_type":"string","column_name":"","usedInstances":{"891ac64a-6ee6-452e-986b-fcc9721cb829":["conditions"],"6f4d5512-0d59-4533-b30a-4b38ea9c9a8f":["conditions"]},"attributes":{"uiType":"string","uiTypeLabel":"String","element_mapping_provider":"com.glide.flow_design.action.data.FlowDesignVariableMapper","uiUniqueId":"4b0b3b72-4c4f-4a66-aba0-71ff08427881"}},{"name":"2be3b193-f53c-423d-9e52-4b8c6b69cd70.Record","label":"2 - Look Up Record➛Asset Record","reference":"x_aleen_snguardian_asset","reference_display":"Asset","type":"reference","base_type":"reference","attributes":{"element_mapping_provider":"com.glide.flow_design.action.data.FlowDesignVariableMapper"}},{"name":"flow_variable.asset_id","label":"Flow Variables➛asset_id","reference":"x_aleen_snguardian_asset","reference_display":"Asset","type":"reference","base_type":"reference","attributes":{"sourceUiUniqueId":"","sourceType":"","sourceId":"","uiUniqueId":"404abe18-be74-4f92-8ea6-758400c74452"}},{"name":"Created_1.current","label":"Trigger - Record Created➛Request Record","reference":"x_aleen_snguardian_request","reference_display":"Request","type":"reference","base_type":"reference","usedInstances":{"6b3956f5-0748-412a-b856-8dc1dd64fa39":["record"],"3522cd61-c65b-47ad-848b-332c71f6ed6a":["record"]},"attributes":{}},{"name":"1655ce6f-3277-4810-b783-354ac8577b7f.__status__.message","label":"13 - Top Level Catch➛Error Status➛Message","reference":"","reference_display":"","type":"string","base_type":"string","column_name":"","usedInstances":{"6b3956f5-0748-412a-b856-8dc1dd64fa39":["work_notes"]},"attributes":{}},{"name":"Created_1.current.request_for.full_name","label":"Trigger - Record Created➛Request Record➛Request For➛Full Name","reference":"","reference_display":"Full Name","type":"string","base_type":"string","parent_table_name":"x_aleen_snguardian_identity","column_name":"full_name","usedInstances":{"cb6d56d9-5dec-439d-a2bd-4f874f30d6e0":["work_notes"]}},{"name":"flow_variable.system","label":"Flow Variables➛system","type":"string","base_type":"string","usedInstances":{"c6f46e21-2165-4a9d-b7cc-e908cf0be671":["conditions"]},"attributes":{"sourceUiUniqueId":"","sourceType":"","sourceId":"","uiUniqueId":"1b16fdae-3a8a-464a-a839-4714c450c48c"}},{"name":"a33b890e-2c8e-4d94-9b14-9da003c7536a.record.asset.serial","label":"8 - Create Record➛Identity Asset Record➛Asset➛Serial","reference":"","reference_display":"Serial","type":"string","base_type":"string","parent_table_name":"x_aleen_snguardian_asset","column_name":"serial","usedInstances":{"b42a474f-93ae-4e6e-8274-c4cb3c6da787":["work_notes"]}},{"name":"Created_1.current.sys_id","label":"Trigger - Record Created➛Request Record➛Sys ID","reference":"","reference_display":"Sys ID","type":"GUID","base_type":"GUID","parent_table_name":"x_aleen_snguardian_request","column_name":"sys_id","usedInstances":{"a33b890e-2c8e-4d94-9b14-9da003c7536a":["datasource"]}},{"name":"Created_1.current.request_for.type.sys_id","label":"Trigger - Record Created➛Request Record➛Request For➛Type➛Sys ID","reference":"","reference_display":"Sys ID","type":"GUID","base_type":"GUID","parent_table_name":"x_aleen_snguardian_identitytype","column_name":"sys_id","usedInstances":{"2697b8d3-6939-45b6-bc95-7d8d5cc9f07e":["employee_type-0"]}},{"name":"21c1a7f7-97e4-4271-8c67-05dca876950f.Record.location.sys_id","label":"1 - Look Up Record➛Identity Location Record➛Location➛Sys ID","reference":"","reference_display":"Sys ID","type":"GUID","base_type":"GUID","parent_table_name":"x_aleen_snguardian_location","column_name":"sys_id","usedInstances":{"2697b8d3-6939-45b6-bc95-7d8d5cc9f07e":["identity_location-1"]}},{"name":"flow_variable.decision_table","label":"Flow Variables➛decision_table","type":"string","base_type":"string","usedInstances":{"6959c9b3-7a3a-4ae8-8d5d-22b2258c22dd":["code"]},"attributes":{"sourceUiUniqueId":"","sourceType":"","sourceId":"","uiUniqueId":"009bf178-85a4-4f1e-b48e-dff21ff8b2ff"}},{"name":"21c1a7f7-97e4-4271-8c67-05dca876950f.Record","label":"1 - Look Up Record➛Identity Location Record","reference":"x_aleen_snguardian_identity_location","reference_display":"Identity Location","type":"reference","base_type":"reference","usedInstances":{},"attributes":{"element_mapping_provider":"com.glide.flow_design.action.data.FlowDesignVariableMapper"}},{"name":"flow_variable.identity_location","label":"Flow Variables➛identity_location","reference":"","reference_display":"","type":"string","base_type":"string","column_name":"","usedInstances":{"2200b803-bd18-4734-825e-3dca7db67bfb":["conditions"]},"attributes":{"uiType":"string","uiTypeLabel":"String","element_mapping_provider":"com.glide.flow_design.action.data.FlowDesignVariableMapper","uiUniqueId":"011c6de1-c559-4b77-ae12-27c8ed7d2dda"}},{"name":"2200b803-bd18-4734-825e-3dca7db67bfb.Record.system.code","label":"3 - Look Up Record➛Location Administration Record➛PAC System➛Code","reference":"","reference_display":"Code","type":"string","base_type":"string","parent_table_name":"x_aleen_snguardian_system","column_name":"code","usedInstances":{"b51c2f48-8569-4996-a60a-1abec6190c10":["sub_system_code-0"]}},{"name":"2200b803-bd18-4734-825e-3dca7db67bfb.Record.mc_sub_type.code","label":"3 - Look Up Record➛Location Administration Record➛MC Sub Type➛Code","reference":"","reference_display":"Code","type":"string","base_type":"string","parent_table_name":"x_aleen_snguardian_asset_type","column_name":"code","usedInstances":{"b51c2f48-8569-4996-a60a-1abec6190c10":["sub_type_code-1"]}},{"name":"2200b803-bd18-4734-825e-3dca7db67bfb.Record.mc_nfc_system.code","label":"3 - Look Up Record➛Location Administration Record➛MC NFC System➛Code","reference":"","reference_display":"Code","type":"string","base_type":"string","parent_table_name":"x_aleen_snguardian_system","column_name":"code","usedInstances":{"b51c2f48-8569-4996-a60a-1abec6190c10":["system-2"]}},{"name":"2200b803-bd18-4734-825e-3dca7db67bfb.Record.mc_nfc_system","label":"3 - Look Up Record➛Location Administration Record➛MC NFC System","reference":"x_aleen_snguardian_system","reference_display":"System","type":"reference","base_type":"reference","parent_table_name":"x_aleen_snguardian_badge_office","column_name":"mc_nfc_system","usedInstances":{"b452b535-5c44-4c4b-ae94-060895186602":["system"]}},{"name":"2200b803-bd18-4734-825e-3dca7db67bfb.Record.system","label":"3 - Look Up Record➛Location Administration Record➛PAC System","reference":"x_aleen_snguardian_system","reference_display":"System","type":"reference","base_type":"reference","parent_table_name":"x_aleen_snguardian_badge_office","column_name":"system","usedInstances":{"b452b535-5c44-4c4b-ae94-060895186602":["sub_system"]}},{"name":"2200b803-bd18-4734-825e-3dca7db67bfb.Record.mc_sub_type","label":"3 - Look Up Record➛Location Administration Record➛MC Sub Type","reference":"x_aleen_snguardian_asset_type","reference_display":"Asset Type","type":"reference","base_type":"reference","parent_table_name":"x_aleen_snguardian_badge_office","column_name":"mc_sub_type","usedInstances":{"b452b535-5c44-4c4b-ae94-060895186602":["sub_type"]}},{"name":"b452b535-5c44-4c4b-ae94-060895186602.record","label":"6 - Create Record➛Asset Record","reference":"x_aleen_snguardian_asset","reference_display":"Asset","type":"reference","base_type":"reference","usedInstances":{"e1b52a3d-1293-4e1d-b26a-7a1dcf83d010":["asset_id-0"]},"attributes":{"element_mapping_provider":"com.glide.flow_design.action.data.FlowDesignVariableMapper"}},{"name":"a33b890e-2c8e-4d94-9b14-9da003c7536a.record","label":"8 - Create Record➛Identity Asset Record","reference":"x_aleen_snguardian_identity_asset","reference_display":"Identity Asset","type":"reference","base_type":"reference","usedInstances":{},"attributes":{"element_mapping_provider":"com.glide.flow_design.action.data.FlowDesignVariableMapper"}}]',
        master: 'true',
        name: 'Alert Single Mobile Credential Request (Bulk)',
        parent_flow: 'e330bbdeeb175e10e317ff47bad0cd67',
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
    $id: Now.ID['12fdc8a633d39e10bf1221382e5c7b8e'],
    table: 'sys_flow_trigger_plan',
    data: {
        binding_strategy: 'com.snc.process_flow.engine.binding.OncePerRecord',
        plan: '{"type":"PlanProxy","persistor":{"@class":".ChunkingPlanPersistor","table":"sys_flow_trigger_plan","id":"12fdc8a633d39e10bf1221382e5c7b8e","name":"plan","plan_signature":null}}',
        plan_id: 'e330bbdeeb175e10e317ff47bad0cd67',
        snapshot: 'd9fd88a633d39e10bf1221382e5c7b3a',
        sys_domain: 'global',
        sys_domain_path: '/',
        trigger: '92fdc8a633d39e10bf1221382e5c7b73',
    },
})
Record({
    $id: Now.ID['4059886233d39e10bf1221382e5c7b0f'],
    table: 'sys_hub_flow_variable',
    data: {
        active: 'true',
        array: 'false',
        array_denormalized: 'false',
        attributes:
            'element_mapping_provider=com.glide.flow_design.action.data.FlowDesignVariableMapper,uiType=reference,uiTypeLabel=Reference,uiUniqueId=404abe18-be74-4f92-8ea6-758400c74452',
        audit: 'false',
        calculation: `(function calculatedFieldValue(current) {

	// Add your code here
	return '';  // return the calculated value

})(current);`,
        choice_table: 'x_aleen_snguardian_asset',
        display: 'false',
        dynamic_creation: 'false',
        element: 'asset_id',
        element_reference: 'false',
        function_field: 'false',
        internal_type: 'reference',
        label: 'asset_id',
        mandatory: 'false',
        max_length: '32',
        model: 'e330bbdeeb175e10e317ff47bad0cd67',
        model_id: 'e330bbdeeb175e10e317ff47bad0cd67',
        model_table: 'sys_hub_flow',
        name: 'var__m_sys_hub_flow_variable_e330bbdeeb175e10e317ff47bad0cd67',
        order: '0',
        primary: 'false',
        read_only: 'false',
        reference: 'x_aleen_snguardian_asset',
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
    $id: Now.ID['4059886233d39e10bf1221382e5c7b14'],
    table: 'sys_hub_flow_variable',
    data: {
        active: 'true',
        array: 'false',
        array_denormalized: 'false',
        attributes:
            'element_mapping_provider=com.glide.flow_design.action.data.FlowDesignVariableMapper,uiType=string,uiTypeLabel=String,uiUniqueId=4e36e68d-9895-4bf6-a076-af199bfb6cc7',
        audit: 'false',
        calculation: `(function calculatedFieldValue(current) {

	// Add your code here
	return '';  // return the calculated value

})(current);`,
        display: 'false',
        dynamic_creation: 'false',
        element: 'sub_system_code',
        element_reference: 'false',
        function_field: 'false',
        internal_type: 'string',
        label: 'sub_system_code',
        mandatory: 'false',
        max_length: '8000',
        model: 'e330bbdeeb175e10e317ff47bad0cd67',
        model_id: 'e330bbdeeb175e10e317ff47bad0cd67',
        model_table: 'sys_hub_flow',
        name: 'var__m_sys_hub_flow_variable_e330bbdeeb175e10e317ff47bad0cd67',
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
    $id: Now.ID['8059886233d39e10bf1221382e5c7b17'],
    table: 'sys_hub_flow_variable',
    data: {
        active: 'true',
        array: 'false',
        array_denormalized: 'false',
        attributes:
            'element_mapping_provider=com.glide.flow_design.action.data.FlowDesignVariableMapper,uiType=string,uiTypeLabel=String,uiUniqueId=4b0b3b72-4c4f-4a66-aba0-71ff08427881',
        audit: 'false',
        calculation: `(function calculatedFieldValue(current) {

	// Add your code here
	return '';  // return the calculated value

})(current);`,
        display: 'false',
        dynamic_creation: 'false',
        element: 'sub_type_code',
        element_reference: 'false',
        function_field: 'false',
        internal_type: 'string',
        label: 'sub_type_code',
        mandatory: 'false',
        max_length: '8000',
        model: 'e330bbdeeb175e10e317ff47bad0cd67',
        model_id: 'e330bbdeeb175e10e317ff47bad0cd67',
        model_table: 'sys_hub_flow',
        name: 'var__m_sys_hub_flow_variable_e330bbdeeb175e10e317ff47bad0cd67',
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
    $id: Now.ID['82966c3047e3aad0f487c24fe16d43c0'],
    table: 'sys_hub_flow_variable',
    data: {
        active: 'true',
        array: 'false',
        array_denormalized: 'false',
        attributes:
            'element_mapping_provider=com.glide.flow_design.action.data.FlowDesignVariableMapper,uiType=string,uiTypeLabel=String,uiUniqueId=94b859be-8542-4e1f-b634-ed4ff0671592',
        audit: 'false',
        calculation: `(function calculatedFieldValue(current) {

	// Add your code here
	return '';  // return the calculated value

})(current);`,
        display: 'false',
        dynamic_creation: 'false',
        element: 'employee_type',
        element_reference: 'false',
        function_field: 'false',
        internal_type: 'string',
        label: 'employee_type',
        mandatory: 'false',
        max_length: '8000',
        model: 'e330bbdeeb175e10e317ff47bad0cd67',
        model_id: 'e330bbdeeb175e10e317ff47bad0cd67',
        model_table: 'sys_hub_flow',
        name: 'var__m_sys_hub_flow_variable_e330bbdeeb175e10e317ff47bad0cd67',
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
    $id: Now.ID['82966c3047e3aad0f487c24fe16d43c6'],
    table: 'sys_hub_flow_variable',
    data: {
        active: 'true',
        array: 'false',
        array_denormalized: 'false',
        attributes:
            'element_mapping_provider=com.glide.flow_design.action.data.FlowDesignVariableMapper,uiType=string,uiTypeLabel=String,uiUniqueId=011c6de1-c559-4b77-ae12-27c8ed7d2dda',
        audit: 'false',
        calculation: `(function calculatedFieldValue(current) {

	// Add your code here
	return '';  // return the calculated value

})(current);`,
        display: 'false',
        dynamic_creation: 'false',
        element: 'identity_location',
        element_reference: 'false',
        function_field: 'false',
        internal_type: 'string',
        label: 'identity_location',
        mandatory: 'false',
        max_length: '8000',
        model: 'e330bbdeeb175e10e317ff47bad0cd67',
        model_id: 'e330bbdeeb175e10e317ff47bad0cd67',
        model_table: 'sys_hub_flow',
        name: 'var__m_sys_hub_flow_variable_e330bbdeeb175e10e317ff47bad0cd67',
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
    $id: Now.ID['86966c3047e3aad0f487c24fe16d43c9'],
    table: 'sys_hub_flow_variable',
    data: {
        active: 'true',
        array: 'false',
        array_denormalized: 'false',
        attributes:
            'element_mapping_provider=com.glide.flow_design.action.data.FlowDesignVariableMapper,uiType=string,uiTypeLabel=String,uiUniqueId=009bf178-85a4-4f1e-b48e-dff21ff8b2ff',
        audit: 'false',
        calculation: `(function calculatedFieldValue(current) {

	// Add your code here
	return '';  // return the calculated value

})(current);`,
        display: 'false',
        dynamic_creation: 'false',
        element: 'decision_table',
        element_reference: 'false',
        function_field: 'false',
        internal_type: 'string',
        label: 'decision_table',
        mandatory: 'false',
        max_length: '8000',
        model: 'e330bbdeeb175e10e317ff47bad0cd67',
        model_id: 'e330bbdeeb175e10e317ff47bad0cd67',
        model_table: 'sys_hub_flow',
        name: 'var__m_sys_hub_flow_variable_e330bbdeeb175e10e317ff47bad0cd67',
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
    $id: Now.ID['b47d0c6633d39e10bf1221382e5c7b83'],
    table: 'sys_hub_flow_variable',
    data: {
        active: 'true',
        array: 'false',
        array_denormalized: 'false',
        attributes:
            'element_mapping_provider=com.glide.flow_design.action.data.FlowDesignVariableMapper,uiType=string,uiTypeLabel=String,uiUniqueId=eda19dd0-d146-49b3-a76a-daf27c229e7e',
        audit: 'false',
        calculation: `(function calculatedFieldValue(current) {

	// Add your code here
	return '';  // return the calculated value

})(current);`,
        display: 'false',
        dynamic_creation: 'false',
        element: 'nfc_data_relay',
        element_reference: 'false',
        function_field: 'false',
        internal_type: 'string',
        label: 'nfc_data_relay',
        mandatory: 'false',
        max_length: '8000',
        model: 'e330bbdeeb175e10e317ff47bad0cd67',
        model_id: 'e330bbdeeb175e10e317ff47bad0cd67',
        model_table: 'sys_hub_flow',
        name: 'var__m_sys_hub_flow_variable_e330bbdeeb175e10e317ff47bad0cd67',
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
    $id: Now.ID['b608f5504782e21051a3e84d416d436d'],
    table: 'sys_hub_flow_variable',
    data: {
        active: 'true',
        array: 'false',
        array_denormalized: 'false',
        attributes:
            'element_mapping_provider=com.glide.flow_design.action.data.FlowDesignVariableMapper,uiType=string,uiTypeLabel=String,uiUniqueId=1b16fdae-3a8a-464a-a839-4714c450c48c',
        audit: 'false',
        calculation: `(function calculatedFieldValue(current) {

	// Add your code here
	return '';  // return the calculated value

})(current);`,
        display: 'false',
        dynamic_creation: 'false',
        element: 'system',
        element_reference: 'false',
        function_field: 'false',
        internal_type: 'string',
        label: 'system',
        mandatory: 'false',
        max_length: '8000',
        model: 'e330bbdeeb175e10e317ff47bad0cd67',
        model_id: 'e330bbdeeb175e10e317ff47bad0cd67',
        model_table: 'sys_hub_flow',
        name: 'var__m_sys_hub_flow_variable_e330bbdeeb175e10e317ff47bad0cd67',
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
    $id: Now.ID['26476c7047e3aad0f487c24fe16d43c0'],
    table: 'sys_hub_flow_variable',
    data: {
        active: 'true',
        array: 'false',
        array_denormalized: 'false',
        attributes:
            'element_mapping_provider=com.glide.flow_design.action.data.FlowDesignVariableMapper,uiType=string,uiTypeLabel=String,uiUniqueId=94b859be-8542-4e1f-b634-ed4ff0671592',
        audit: 'false',
        calculation: `(function calculatedFieldValue(current) {

	// Add your code here
	return '';  // return the calculated value

})(current);`,
        display: 'false',
        dynamic_creation: 'false',
        element: 'employee_type',
        element_reference: 'false',
        function_field: 'false',
        internal_type: 'string',
        label: 'employee_type',
        mandatory: 'false',
        max_length: '8000',
        model: 'd9fd88a633d39e10bf1221382e5c7b3a',
        model_id: 'd9fd88a633d39e10bf1221382e5c7b3a',
        model_table: 'sys_hub_flow_snapshot',
        name: 'var__m_sys_hub_flow_variable_d9fd88a633d39e10bf1221382e5c7b3a',
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
    $id: Now.ID['62476c7047e3aad0f487c24fe16d43c7'],
    table: 'sys_hub_flow_variable',
    data: {
        active: 'true',
        array: 'false',
        array_denormalized: 'false',
        attributes:
            'element_mapping_provider=com.glide.flow_design.action.data.FlowDesignVariableMapper,uiType=string,uiTypeLabel=String,uiUniqueId=009bf178-85a4-4f1e-b48e-dff21ff8b2ff',
        audit: 'false',
        calculation: `(function calculatedFieldValue(current) {

	// Add your code here
	return '';  // return the calculated value

})(current);`,
        display: 'false',
        dynamic_creation: 'false',
        element: 'decision_table',
        element_reference: 'false',
        function_field: 'false',
        internal_type: 'string',
        label: 'decision_table',
        mandatory: 'false',
        max_length: '8000',
        model: 'd9fd88a633d39e10bf1221382e5c7b3a',
        model_id: 'd9fd88a633d39e10bf1221382e5c7b3a',
        model_table: 'sys_hub_flow_snapshot',
        name: 'var__m_sys_hub_flow_variable_d9fd88a633d39e10bf1221382e5c7b3a',
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
    $id: Now.ID['6dfd88a633d39e10bf1221382e5c7b63'],
    table: 'sys_hub_flow_variable',
    data: {
        active: 'true',
        array: 'false',
        array_denormalized: 'false',
        attributes:
            'element_mapping_provider=com.glide.flow_design.action.data.FlowDesignVariableMapper,uiType=string,uiTypeLabel=String,uiUniqueId=4e36e68d-9895-4bf6-a076-af199bfb6cc7',
        audit: 'false',
        calculation: `(function calculatedFieldValue(current) {

	// Add your code here
	return '';  // return the calculated value

})(current);`,
        display: 'false',
        dynamic_creation: 'false',
        element: 'sub_system_code',
        element_reference: 'false',
        function_field: 'false',
        internal_type: 'string',
        label: 'sub_system_code',
        mandatory: 'false',
        max_length: '8000',
        model: 'd9fd88a633d39e10bf1221382e5c7b3a',
        model_id: 'd9fd88a633d39e10bf1221382e5c7b3a',
        model_table: 'sys_hub_flow_snapshot',
        name: 'var__m_sys_hub_flow_variable_d9fd88a633d39e10bf1221382e5c7b3a',
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
    $id: Now.ID['6e476c7047e3aad0f487c24fe16d43c3'],
    table: 'sys_hub_flow_variable',
    data: {
        active: 'true',
        array: 'false',
        array_denormalized: 'false',
        attributes:
            'element_mapping_provider=com.glide.flow_design.action.data.FlowDesignVariableMapper,uiType=string,uiTypeLabel=String,uiUniqueId=011c6de1-c559-4b77-ae12-27c8ed7d2dda',
        audit: 'false',
        calculation: `(function calculatedFieldValue(current) {

	// Add your code here
	return '';  // return the calculated value

})(current);`,
        display: 'false',
        dynamic_creation: 'false',
        element: 'identity_location',
        element_reference: 'false',
        function_field: 'false',
        internal_type: 'string',
        label: 'identity_location',
        mandatory: 'false',
        max_length: '8000',
        model: 'd9fd88a633d39e10bf1221382e5c7b3a',
        model_id: 'd9fd88a633d39e10bf1221382e5c7b3a',
        model_table: 'sys_hub_flow_snapshot',
        name: 'var__m_sys_hub_flow_variable_d9fd88a633d39e10bf1221382e5c7b3a',
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
    $id: Now.ID['7918b9504782e21051a3e84d416d43ea'],
    table: 'sys_hub_flow_variable',
    data: {
        active: 'true',
        array: 'false',
        array_denormalized: 'false',
        attributes:
            'element_mapping_provider=com.glide.flow_design.action.data.FlowDesignVariableMapper,uiType=string,uiTypeLabel=String,uiUniqueId=1b16fdae-3a8a-464a-a839-4714c450c48c',
        audit: 'false',
        calculation: `(function calculatedFieldValue(current) {

	// Add your code here
	return '';  // return the calculated value

})(current);`,
        display: 'false',
        dynamic_creation: 'false',
        element: 'system',
        element_reference: 'false',
        function_field: 'false',
        internal_type: 'string',
        label: 'system',
        mandatory: 'false',
        max_length: '8000',
        model: 'd9fd88a633d39e10bf1221382e5c7b3a',
        model_id: 'd9fd88a633d39e10bf1221382e5c7b3a',
        model_table: 'sys_hub_flow_snapshot',
        name: 'var__m_sys_hub_flow_variable_d9fd88a633d39e10bf1221382e5c7b3a',
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
    $id: Now.ID['a5fd88a633d39e10bf1221382e5c7b5f'],
    table: 'sys_hub_flow_variable',
    data: {
        active: 'true',
        array: 'false',
        array_denormalized: 'false',
        attributes:
            'element_mapping_provider=com.glide.flow_design.action.data.FlowDesignVariableMapper,uiType=reference,uiTypeLabel=Reference,uiUniqueId=404abe18-be74-4f92-8ea6-758400c74452',
        audit: 'false',
        calculation: `(function calculatedFieldValue(current) {

	// Add your code here
	return '';  // return the calculated value

})(current);`,
        choice_table: 'x_aleen_snguardian_asset',
        display: 'false',
        dynamic_creation: 'false',
        element: 'asset_id',
        element_reference: 'false',
        function_field: 'false',
        internal_type: 'reference',
        label: 'asset_id',
        mandatory: 'false',
        max_length: '32',
        model: 'd9fd88a633d39e10bf1221382e5c7b3a',
        model_id: 'd9fd88a633d39e10bf1221382e5c7b3a',
        model_table: 'sys_hub_flow_snapshot',
        name: 'var__m_sys_hub_flow_variable_d9fd88a633d39e10bf1221382e5c7b3a',
        order: '0',
        primary: 'false',
        read_only: 'false',
        reference: 'x_aleen_snguardian_asset',
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
    $id: Now.ID['adfd88a633d39e10bf1221382e5c7b66'],
    table: 'sys_hub_flow_variable',
    data: {
        active: 'true',
        array: 'false',
        array_denormalized: 'false',
        attributes:
            'element_mapping_provider=com.glide.flow_design.action.data.FlowDesignVariableMapper,uiType=string,uiTypeLabel=String,uiUniqueId=4b0b3b72-4c4f-4a66-aba0-71ff08427881',
        audit: 'false',
        calculation: `(function calculatedFieldValue(current) {

	// Add your code here
	return '';  // return the calculated value

})(current);`,
        display: 'false',
        dynamic_creation: 'false',
        element: 'sub_type_code',
        element_reference: 'false',
        function_field: 'false',
        internal_type: 'string',
        label: 'sub_type_code',
        mandatory: 'false',
        max_length: '8000',
        model: 'd9fd88a633d39e10bf1221382e5c7b3a',
        model_id: 'd9fd88a633d39e10bf1221382e5c7b3a',
        model_table: 'sys_hub_flow_snapshot',
        name: 'var__m_sys_hub_flow_variable_d9fd88a633d39e10bf1221382e5c7b3a',
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
    $id: Now.ID['edfd88a633d39e10bf1221382e5c7b69'],
    table: 'sys_hub_flow_variable',
    data: {
        active: 'true',
        array: 'false',
        array_denormalized: 'false',
        attributes:
            'element_mapping_provider=com.glide.flow_design.action.data.FlowDesignVariableMapper,uiType=string,uiTypeLabel=String,uiUniqueId=eda19dd0-d146-49b3-a76a-daf27c229e7e',
        audit: 'false',
        calculation: `(function calculatedFieldValue(current) {

	// Add your code here
	return '';  // return the calculated value

})(current);`,
        display: 'false',
        dynamic_creation: 'false',
        element: 'nfc_data_relay',
        element_reference: 'false',
        function_field: 'false',
        internal_type: 'string',
        label: 'nfc_data_relay',
        mandatory: 'false',
        max_length: '8000',
        model: 'd9fd88a633d39e10bf1221382e5c7b3a',
        model_id: 'd9fd88a633d39e10bf1221382e5c7b3a',
        model_table: 'sys_hub_flow_snapshot',
        name: 'var__m_sys_hub_flow_variable_d9fd88a633d39e10bf1221382e5c7b3a',
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
