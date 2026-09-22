import { Record } from '@servicenow/sdk/core'

Record({
    $id: Now.ID['e184620d2b615e50d4dffd74ce91bf29'],
    table: 'sys_hub_flow',
    data: {
        access: 'public',
        acls: '',
        active: true,
        attributes:
            'browserActivatedIn=chrome,integrationActivatedIn=standalone,labelCacheCleanUpExecuted=true,timeFromCreateToActivate=41393271000,viewActivatedIn=naturalLanguage',
        callable_by_client_api: false,
        copied_from: 'e9c21a692bd95a10d4dffd74ce91bfb1',
        copied_from_name: 'Deactivate Mobile Credential Req',
        flow_priority: 'MEDIUM',
        internal_name: 'deactivate_nfc_sub_assets',
        label_cache:
            '[{"name":"flow_variable.nfc_badge_active","label":"Flow Variables➛nfc_badge_active","reference":"","reference_display":"","type":"boolean","base_type":"boolean","column_name":"","choices":[],"attributes":{"sourceUiUniqueId":"","sourceType":"","sourceId":"","uiUniqueId":"b355581f-4a51-4555-9486-50c5937e555e"}},{"name":"55db9f43-11fd-4d03-95eb-91128d837328.Record","label":"2 - Look Up Record➛Identity Asset Record","reference":"x_aleen_snguardian_identity_asset","reference_display":"Identity Asset","type":"reference","base_type":"reference","usedInstances":{"8ea58f7d-e63d-4a84-92a3-0d09f1761dc6":["condition"],"5cd506ac-a338-44d3-9b53-0ff0d10f82bf":["record"]},"attributes":{"element_mapping_provider":"com.glide.flow_design.action.data.FlowDesignVariableMapper"}},{"name":"0eebc2ad-adca-4cc6-8b5d-4ad2f1870667.record.provisioning_status","label":"12 - Create Record➛Request Activity Record➛Provisioning Status","reference":"x_aleen_snguardian_provisioning_status","reference_display":"Provisioning Status","type":"reference","base_type":"reference","parent_table_name":"x_aleen_snguardian_request_activity","column_name":"provisioning_status"},{"name":"flow_variable.provisioning_success","label":"Flow Variables➛provisioning_success","reference":"","reference_display":"","type":"boolean","base_type":"boolean","column_name":"","choices":[],"attributes":{"sourceUiUniqueId":"","sourceType":"","sourceId":"","uiUniqueId":"30684978-344c-4107-b4bd-98ec5914f3fc"}},{"name":"3a1f8f77-d73d-4798-9458-a668da753394.record.provisioning_status.code","label":"11 - Update Record➛Identity Asset Record➛Provisioning Status➛Code","reference":"","reference_display":"Code","type":"string","base_type":"string","parent_table_name":"x_aleen_snguardian_provisioning_status","column_name":"code"},{"name":"Created_1.current.request_for","label":"Trigger - Record Created➛Request Record➛Request For","reference":"x_aleen_snguardian_identity","reference_display":"Identity","type":"reference","base_type":"reference","parent_table_name":"x_aleen_snguardian_request","column_name":"request_for"},{"name":"09b57c5b-667a-4d64-911a-5661d809eb54.record","label":"12 - Update Record➛Record","reference_display":"Record","type":"document_id","base_type":"document_id","attributes":{"element_mapping_provider":"com.glide.flow_design.action.data.FlowDesignVariableMapper"}},{"name":"Created_1.current.request_for.last_name","label":"Trigger - Record Created➛Request Record➛Request For➛Last Name","reference":"","reference_display":"Last Name","type":"string","base_type":"string","parent_table_name":"x_aleen_snguardian_identity","column_name":"last_name"},{"name":"Created_1.current.request_for.first_name","label":"Trigger - Record Created➛Request Record➛Request For➛First Name","reference":"","reference_display":"First Name","type":"string","base_type":"string","parent_table_name":"x_aleen_snguardian_identity","column_name":"first_name"},{"name":"Created_1.current.request_for.email","label":"Trigger - Record Created➛Request Record➛Request For➛Email","reference":"","reference_display":"Email","type":"string","base_type":"string","parent_table_name":"x_aleen_snguardian_identity","column_name":"email"},{"name":"ea155853-d782-4719-ab04-5c48a73ebd34.__status__.message","label":"10 - Top Level Catch➛Error Status➛Message","reference":"","reference_display":"","type":"string","base_type":"string","column_name":"","usedInstances":{"5cd506ac-a338-44d3-9b53-0ff0d10f82bf":["provisioning_message"]},"attributes":{}},{"name":"Created_1.current.number","label":"Trigger - Record Created➛Request Record➛Number","reference":"","reference_display":"Number","type":"string","base_type":"string","parent_table_name":"x_aleen_snguardian_request","column_name":"number"},{"name":"0eebc2ad-adca-4cc6-8b5d-4ad2f1870667.record","label":"13 - Create Record➛Record","reference_display":"Record","type":"document_id","base_type":"document_id","attributes":{"element_mapping_provider":"com.glide.flow_design.action.data.FlowDesignVariableMapper"}},{"name":"Created_1.current","label":"Trigger - Record Created➛Request Record","reference":"x_aleen_snguardian_request","reference_display":"Request","type":"reference","base_type":"reference","attributes":{}},{"name":"flow_variable.badge_id","label":"Flow Variables➛badge_id","reference":"","reference_display":"","type":"string","base_type":"string","column_name":"","attributes":{"uiType":"string","uiTypeLabel":"String","element_mapping_provider":"com.glide.flow_design.action.data.FlowDesignVariableMapper","uiUniqueId":"4f43887b-e234-47e9-8b31-4dfe9e6e99a2"}},{"name":"d09205c5-08d6-4bc1-879a-a5e60e8e32ba.record.provisioning_status.code","label":"5 - Update Record➛Identity Asset Record➛Provisioning Status➛Code","reference":"","reference_display":"Code","type":"string","base_type":"string","parent_table_name":"x_aleen_snguardian_provisioning_status","column_name":"code"},{"name":"d09205c5-08d6-4bc1-879a-a5e60e8e32ba.record.asset.status.name","label":"5 - Update Record➛Identity Asset Record➛Asset➛Status➛Name","reference":"","reference_display":"Name","type":"string","base_type":"string","parent_table_name":"x_aleen_snguardian_status_code","column_name":"name"},{"name":"Created_1.current.opened_by.email","label":"Trigger - Record Created➛Request Record➛Opened by➛Email","reference":"","reference_display":"Email","type":"email","base_type":"email","parent_table_name":"sys_user","column_name":"email"},{"name":"Created_1.current.opened_by.first_name","label":"Trigger - Record Created➛Request Record➛Opened by➛First name","reference":"","reference_display":"First name","type":"string","base_type":"string","parent_table_name":"sys_user","column_name":"first_name"},{"name":"Created_1.current.opened_by.last_name","label":"Trigger - Record Created➛Request Record➛Opened by➛Last name","reference":"","reference_display":"Last name","type":"string","base_type":"string","parent_table_name":"sys_user","column_name":"last_name"},{"name":"8c168f53-abe3-42e8-865f-0a1db9840131.record.provisioning_status.name","label":"16 - Update Record➛Request Activity Record➛Provisioning Status➛Name","reference":"","reference_display":"Name","type":"string","base_type":"string","parent_table_name":"x_aleen_snguardian_provisioning_status","column_name":"name"},{"name":"09b57c5b-667a-4d64-911a-5661d809eb54.record.status.name","label":"12 - Update Record➛Request Record➛Status➛Name","reference":"","reference_display":"Name","type":"string","base_type":"string","parent_table_name":"x_aleen_snguardian_request_status","column_name":"name"},{"name":"d8f86874-9485-42bc-81c8-51176c3668bc.record.provisioning_status.name","label":"17 - Update Record➛Request Activity Record➛Provisioning Status➛Name","reference":"","reference_display":"Name","type":"string","base_type":"string","parent_table_name":"x_aleen_snguardian_provisioning_status","column_name":"name"},{"name":"Updated_1.current.asset.sub_system","label":"Trigger - Record Updated➛Identity Asset Record➛Asset➛Sub System","reference":"x_aleen_snguardian_system","reference_display":"System","type":"reference","base_type":"reference","parent_table_name":"x_aleen_snguardian_asset","column_name":"sub_system"},{"name":"Updated_1.current.identifier","label":"Trigger - Record Updated➛Identity Asset Record➛Identifier","reference":"","reference_display":"Identifier","type":"string","base_type":"string","parent_table_name":"x_aleen_snguardian_identity_asset","column_name":"identifier"},{"name":"Updated_1.current.identity","label":"Trigger - Record Updated➛Identity Asset Record➛Identity","reference":"x_aleen_snguardian_identity","reference_display":"Identity","type":"reference","base_type":"reference","parent_table_name":"x_aleen_snguardian_identity_asset","column_name":"identity"},{"name":"Updated_1.current","label":"Trigger - Record Updated➛Identity Asset Record","reference":"x_aleen_snguardian_identity_asset","reference_display":"Identity Asset","type":"reference","base_type":"reference","usedInstances":{"db6939dd-5659-46b2-8ece-efa3717f45ba":["record"]},"attributes":{}},{"name":"Updated_1.current.asset.serial","label":"Trigger - Record Updated➛Identity Asset Record➛Asset➛Serial","reference":"","reference_display":"Serial","type":"string","base_type":"string","parent_table_name":"x_aleen_snguardian_asset","column_name":"serial"},{"name":"Updated_1.current.provisioning_message","label":"Trigger - Record Updated➛Identity Asset Record➛Provisioning Message","reference":"","reference_display":"Provisioning Message","type":"string","base_type":"string","parent_table_name":"x_aleen_snguardian_identity_asset","column_name":"provisioning_message","usedInstances":{}},{"name":"ea155853-d782-4719-ab04-5c48a73ebd34.__status__.code","label":"10 - Top Level Catch➛Error Status➛Code","reference":"","reference_display":"","type":"integer","base_type":"integer","column_name":"","usedInstances":{"5cd506ac-a338-44d3-9b53-0ff0d10f82bf":["provisioning_message"]},"attributes":{}}]',
        master_snapshot: '761176c92ba15e50d4dffd74ce91bf99',
        name: 'Alert Update NFC Sub Assets',
        pre_compiled: false,
        remote_trigger_id: '93ea034d2b255e50d4dffd74ce91bf65',
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
        latest_snapshot: '761176c92ba15e50d4dffd74ce91bf99',
        compiler_build: 'glide-xanadu-07-02-2024__patch10-hotfix1a-09-24-2025_10-23-2025_0714.zip',
    },
})
Record({
    $id: Now.ID['93ea034d2b255e50d4dffd74ce91bf65'],
    table: 'sys_flow_record_trigger',
    data: {
        active: 'true',
        condition: 'asset.system.code=ALERT-MC-01^statusVALCHANGES^asset.sub_systemISNOTEMPTY^is_deleted=false',
        on_delete: 'false',
        on_insert: 'false',
        on_update: 'true',
        run_flow_in: 'background',
        run_on_extended: 'false',
        run_when_setting: 'both',
        run_when_user_setting: 'any',
        sys_domain: 'global',
        sys_domain_path: '/',
        table: 'x_aleen_snguardian_identity_asset',
    },
})
Record({
    $id: Now.ID['5e95a1574787f21051a3e84d416d43cc'],
    table: 'sys_trigger_runner_mapping',
    data: {
        active: 'true',
        data: '{"run_flow_in":"background","run_when_user_list":[],"run_when_setting":"both","run_when_user_setting":"any","run_on_extended":"false"}',
        identifier: 'e184620d2b615e50d4dffd74ce91bf29',
        runner: 'FDTriggerRunner',
        trigger: '93ea034d2b255e50d4dffd74ce91bf65',
    },
})
Record({
    $id: Now.ID['e184620d2b615e50d4dffd74ce91bf2a'],
    table: 'sys_flow_cat_variable_model',
    data: {
        id: 'e184620d2b615e50d4dffd74ce91bf29',
        name: 'Deactivate NFC Sub Assets',
    },
})
Record({
    $id: Now.ID['721176c92ba15e50d4dffd74ce91bf9a'],
    table: 'sys_flow_cat_variable_model',
    data: {
        id: '761176c92ba15e50d4dffd74ce91bf99',
        name: 'Update NFC Sub Assets',
    },
})
Record({
    $id: Now.ID['3584620d2b615e50d4dffd74ce91bf57'],
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
        model: 'e184620d2b615e50d4dffd74ce91bf29',
        model_id: 'e184620d2b615e50d4dffd74ce91bf29',
        model_table: 'sys_hub_flow',
        name: 'var__m_sys_hub_flow_input_e184620d2b615e50d4dffd74ce91bf29',
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
    $id: Now.ID['670cae052ba15e50d4dffd74ce91bf2d'],
    table: 'sys_hub_flow_input',
    data: {
        active: 'true',
        array: 'false',
        array_denormalized: 'false',
        attributes:
            'child_label=FDChangeDetails,child_name=FDChangeDetails,child_type=object,child_type_label=Object,co_type_name=FDCollection,element_mapping_provider=com.glide.flow_design.action.data.FlowDesignVariableMapper,pwd2droppable=true,uiType=array.object,uiTypeLabel=Array.Object',
        audit: 'false',
        calculation: `(function calculatedFieldValue(current) {

	// Add your code here
	return '';  // return the calculated value

})(current);`,
        display: 'false',
        dynamic_creation: 'false',
        element: 'changed_fields',
        element_reference: 'false',
        function_field: 'false',
        internal_type: 'string',
        label: 'Changed Fields',
        mandatory: 'false',
        max_length: '4000',
        model: 'e184620d2b615e50d4dffd74ce91bf29',
        model_id: 'e184620d2b615e50d4dffd74ce91bf29',
        model_table: 'sys_hub_flow',
        name: 'var__m_sys_hub_flow_input_e184620d2b615e50d4dffd74ce91bf29',
        order: '100',
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
    $id: Now.ID['f584620d2b615e50d4dffd74ce91bf53'],
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
        model: 'e184620d2b615e50d4dffd74ce91bf29',
        model_id: 'e184620d2b615e50d4dffd74ce91bf29',
        model_table: 'sys_hub_flow',
        name: 'var__m_sys_hub_flow_input_e184620d2b615e50d4dffd74ce91bf29',
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
    $id: Now.ID['321176c92ba15e50d4dffd74ce91bfb4'],
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
        model: '761176c92ba15e50d4dffd74ce91bf99',
        model_id: '761176c92ba15e50d4dffd74ce91bf99',
        model_table: 'sys_hub_flow_snapshot',
        name: 'var__m_sys_hub_flow_input_761176c92ba15e50d4dffd74ce91bf99',
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
    $id: Now.ID['721176c92ba15e50d4dffd74ce91bf9b'],
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
        model: '761176c92ba15e50d4dffd74ce91bf99',
        model_id: '761176c92ba15e50d4dffd74ce91bf99',
        model_table: 'sys_hub_flow_snapshot',
        name: 'var__m_sys_hub_flow_input_761176c92ba15e50d4dffd74ce91bf99',
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
    $id: Now.ID['721176c92ba15e50d4dffd74ce91bfac'],
    table: 'sys_hub_flow_input',
    data: {
        active: 'true',
        array: 'false',
        array_denormalized: 'false',
        attributes:
            'child_label=FDChangeDetails,child_name=FDChangeDetails,child_type=object,child_type_label=Object,co_type_name=FDCollection,element_mapping_provider=com.glide.flow_design.action.data.FlowDesignVariableMapper,pwd2droppable=true,uiType=array.object,uiTypeLabel=Array.Object',
        audit: 'false',
        calculation: `(function calculatedFieldValue(current) {

	// Add your code here
	return '';  // return the calculated value

})(current);`,
        display: 'false',
        dynamic_creation: 'false',
        element: 'changed_fields',
        element_reference: 'false',
        function_field: 'false',
        internal_type: 'string',
        label: 'Changed Fields',
        mandatory: 'false',
        max_length: '4000',
        model: '761176c92ba15e50d4dffd74ce91bf99',
        model_id: '761176c92ba15e50d4dffd74ce91bf99',
        model_table: 'sys_hub_flow_snapshot',
        name: 'var__m_sys_hub_flow_input_761176c92ba15e50d4dffd74ce91bf99',
        order: '100',
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
    $id: Now.ID['1e49a821470bf61051a3e84d416d431d'],
    table: 'sys_hub_trigger_instance_v2',
    data: {
        flow: 'e184620d2b615e50d4dffd74ce91bf29',
        name: 'Updated',
        trigger_definition: 'bb695e60c31322002841b63b12d3aea5',
        trigger_inputs:
            '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',
        trigger_type: 'record_update',
    },
})
Record({
    $id: Now.ID['f249a821470bf61051a3e84d416d43e8'],
    table: 'sys_hub_trigger_instance_v2',
    data: {
        flow: '761176c92ba15e50d4dffd74ce91bf99',
        name: 'Updated',
        trigger_definition: 'bb695e60c31322002841b63b12d3aea5',
        trigger_inputs:
            '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',
        trigger_type: 'record_update',
    },
})
Record({
    $id: Now.ID['1a49a821470bf61051a3e84d416d433f'],
    table: 'sys_hub_action_instance_v2',
    data: {
        action_type: 'f9d01dd2c31332002841b63b12d3aea1',
        action_type_parent: 'baf174c8c3c232002841b63b12d3aee4',
        flow: 'e184620d2b615e50d4dffd74ce91bf29',
        order: '7',
        parent_ui_id: '40b664aa-0826-426e-8bc7-6b8508b08112',
        ui_id: '7aa82254-d711-453b-bfde-c43983abb9ff',
        values: 'H4sIAAAAAAAA/+1V227cNhD9FUKP7lrW1XvpkwHXqB8aA3aQlygQSHG0y4KiVJLaeLvYf8+QkjZO6hpu6iAJkH1ZaDiXc2bOkG/3Aa2saNW1MpaqCu525poHqyA5T+uERsuE0TiHPOIZr2s+zypYxqye82AWCOeXAY/iZXxepXGaJlGULLKYnacsTnhKAWL0U7QB9NRQtdrFbansnWG/z3POlnWWnsZxzU8zHqWnyxzY6TKOkwVfpPM0WYS3Pu5wwEguTCfp7s2YAC3VRkiuQQWrt+9mQUc11rKgg9X+syO766CUlIHEwMu26htQllxf/gceU/TtRORzYq4GfvMxeymcEY8cnjiaBXBvQXHAcjWVBmZBQxWnttW7YGV1jwYNlN8ouTt6bISyA9OG3hvxN+bPIudXA1Krxi4cP8uxQ1NzWlHBTefmO1gsZXLqXCv7Rr0aKLjeQk17aR/0tjeYDzoH2YEYENZ3m/b97VTvSijPbkQr24rK4xe1VgvWWzBuHCDBN6WhXSfUuux0uxU+GKE04VriR1jL9j3WNGKtwkGXITaIhldov/TmN1QLR+IPTIPBB0++/Kt3dQcaI+DSc/aESz8odDWVFp29wMRbGGEeZv93A1j+lHKq5UehPADzcQvuSyoBVGnUuqeaC6pQN4hf2F1JjQH7T91fj+fkYjz/si147eCQVwOc51L5JPhfqI178IltXIP8xdZg8Y3WYET0g+3BV1N/lDx5bz6QiBe8eaB8z9xgbdeGAUXRR1HK98Wk+CJYFcHrljAgl+BcttQCL4JZMWTx5wmb1wvgecxYtUjiaJ4vszxPs4RmrGLJ0rubncG9eqb/I2/N9w32Cy8AaBC3BTKQfP5EpwRXAiQ3j4x4ugHGAuV2LHB8DF/sGojPI//7+Sa+3Js4GR3ER3TvzE9GBWcnhTo5uagqMIY4nGcXPpI44KQ3mIvYDZCal97Ssj+hsiG58wlI0xtLNNheK0KJ105IXMYbJx+i+obhnzCkrWt8AAnbkV9iIhT5TetWk99RR9KVuIOhXR7MlgrpH7zWz96QURak7xBYpxGqiymCsAgIrXF7JnguHO4pShlWiEYTs2m1xdZXZLgCJscQZ7tegw6rXqMUbOgd3ew8L6z6q8s1MjtmccazQuGgDN0Cn9T2HVwsh8Ph3QccX2+6IgwAAA==',
    },
})
Record({
    $id: Now.ID['5249a821470bf61051a3e84d416d433c'],
    table: 'sys_hub_action_instance_v2',
    data: {
        action_type: 'f9d01dd2c31332002841b63b12d3aea1',
        action_type_parent: 'baf174c8c3c232002841b63b12d3aee4',
        flow: 'e184620d2b615e50d4dffd74ce91bf29',
        order: '5',
        parent_ui_id: '2248b6fa-422f-44ac-a572-f4354b5c003d',
        ui_id: 'd09205c5-08d6-4bc1-879a-a5e60e8e32ba',
        values: 'H4sIAAAAAAAA/+1V227bRhD9lQUfHZnmVZbUJwOuUT80BuwgL2FA7GUobUEu2d2lYlXQv3d2SSqO6zhu6qItUL0InJ3LOTNndj/sA8qtbNW1MpYqDnc7cy2CVcBhkc2TSCRsHueQRyITVSXOMw7LmFU8DmaBdH4ZiChexnOexmmaRFGyyGI2T1mciJQCOD9FG0BPDbzVAr+3tO6dYb/Pc8GWVZaexnElTjMRpafLHNjpMo6ThVik52myCG993OGAkUKarqa792MCtPCNrIUGFaw+fJwFHdVYy4IOVvtHR3bXQVlTBjUGXra8b0BZcn35J3hM0bcTkcfEXA38FmP2UjojHjk8cTQL4N6CEoDlKlobmAUNVYLaVu+CldU9GjRQcaPq3dFjI5UdmDb03sjfMH8WOb8KkBofu3D8LMcOTc1pJYebzs13sFjK6qlzbd036u1AwfUWKtrX9kFve4P5oHOQHYgBYXW3aT/dTvWupPLsRrR1y2l9/KLWasl6C8aNA2rwTWlo10m1LjvdbqUPRihNuK7xI6zq9hPWNHKtwkGXITaIhldov/Tm91RLR+JnTIPBB0++/LV3dQcaI+DSc/aESz8odDVcy85eYOItjDAPs7+6ASx/Tjl8+VkoD8B83oL7ktYAqjRq3VMtJFWoG8Qv7a6kxoD9o+6vx3NyMZ5/3xa8c3DI2wHOS6l8EfwVauMefGEb1yB/tTVY/ENrMCL6j+3B36b+KHn23nwgES9480D5nrnB2q4NA4qij6JU7ItJ8UWwKoJ3LWFAPG5qQRTBrBhy+FNanVcLEHnMGF8kcXSeL7M8T7OEZoyzZOHdzc7gVr3Q/4mX5t8M9TuXHxpEbYEMFF8+zSnBlYRamCfGO23/WKDcjgWOD+GrXQHxPPK//9/D13sPJ6OD+ITqnfnZqODspFAnJxecgzHE4Ty78JHEASe9wVzEboBUovSWlv0C3IbkzicgTW8s0WB7rQglXjshcRlvnHyI6huGf9KQtqrw8SNsR97ERCryo9atJj+hjmpX4g6GdnkwWypr/9i1fvaGjLIgfYfAOo1QXUwRhEVAaIXbM8Fz4XBPUcqwQjSamE2rLbaek+ECmBxDnO16DTrkvUYp2NA7utl5Xlj1B5drZHbM4oxnhcJBGboFMantyWvlEuhXLpaEPXtRLB9fLN/2PwSHw+Hj7++9q40eDAAA',
    },
})
Record({
    $id: Now.ID['70cca8ed47433a10f487c24fe16d43e5'],
    table: 'sys_hub_action_instance_v2',
    data: {
        action_type: 'f9d01dd2c31332002841b63b12d3aea1',
        action_type_parent: 'baf174c8c3c232002841b63b12d3aee4',
        flow: 'e184620d2b615e50d4dffd74ce91bf29',
        order: '12',
        parent_ui_id: '8ea58f7d-e63d-4a84-92a3-0d09f1761dc6',
        ui_id: '5cd506ac-a338-44d3-9b53-0ff0d10f82bf',
        values: 'H4sIAAAAAAAA/+1V30/bMBD+V6I8N1F+0rRvaAyJh8EEGy8MWU58bS05TmY7ha7q/75z4pbCGOsQ0oQ0v92d7+777j7ZN2ufM3/qZ8CieBIfVWmcpkkUJUUWl0dpGScspQCxP/IlrQFvKqgaxdBeUtFZx3qd56yczLI0iOMZCzIWpcEkhzKYxHFSsCIdp0kRXvZ5mw1mMq5bQVfXrgB6qgUXTIH0pze3I7+lCnsZUP50/SRkVi0QQUsQmHjSVF0N0nhnJ1jjUB7b7MstkafEbA+0matOuHViyOKJo5EP9wYkA2w3o0LDyK+pZNQ0auVPjerQoYCyCylWuxsLLs3AtKb3mv/A+llk780AqVVuCjuTuAlth9PwCi5awxs5eAwtxXZyjehqeT5QsLOFGe2E2Zttp7EetBayBTEgnF0tmrvLbb9TLnt2Dq1oKip2FjVG8bIzoO06QEA/lJq2LZdz0qpmyftkhFKHc4FGOBPNHfbUfC5DWlncIQ6IhqfoP+nd11RxS+ITlsHkTU+efO9s34GGA0x6zj1h0i8Kr+pK8dYcY+ElOJibkRNymb8kgGrysO+9mg9ividUAEii5byjinEqcf0Ig5sVoVqD+VW+Zy7uHbv468T8xcLxzgc4h1J5lPwbak7Oj3xOzfmbqbn4R2p2iN6ZnP8k4ih58RXb23SvW70n4J6ARoiWTQ1a0zl866IoZR+VapTHpfe1RfQY9q66chCttu7Pxx+uPNaBZ5r1Gmic50WeBmxcJEE2jicBLaMsyKusoOMUSpZmISHaUNNpQkLXabMZeXfcLLy/r1A1DJ77Hd4/oVe+B1DjGAx4wyBGBytjW+CUg2D6GalsHwTXgCxdg90X92avQnwU9ef/T/eGP93tTyBH7ei0CQAA',
    },
})
Record({
    $id: Now.ID['9649a821470bf61051a3e84d416d4333'],
    table: 'sys_hub_action_instance_v2',
    data: {
        action_type: '9d09f99587003300663ca1bb36cb0ba3',
        action_type_parent: 'b93f42810b30030085c083eb37673a63',
        flow: 'e184620d2b615e50d4dffd74ce91bf29',
        order: '2',
        parent_ui_id: '616b2b1b-f995-4673-909e-b5845b15cee0',
        ui_id: '55db9f43-11fd-4d03-95eb-91128d837328',
        values: 'H4sIAAAAAAAA/+1YUU/jOBD+K1GeSy9pk6blbbUICelukYDdFw4sx3aoda6TtR2gi/jvO46dtpS2lFIEK91j7BnPNzPffLV7+RBiYngpT6Q2WBJ2PtUnNDwMsywimEVpL8dxytKIJrQoaJYQNorzIsFhJ+TWjo6iUTEapcMsivr9KBoM+gTHed4fkDzKcQJ2Ek8YWBqcCwaft1jU9vseYcGYRFre1FhRjiXilEnDzRRhrZkBW8p1JfD0h3c58fvBF79PxlxQxWR4eHnVCSusIJRhKjx8WNoy04ohgXMm4JgLiyT4ZmFtn8UT5+dZ2QDtJ5Lu6FJRiyXqhOzeMEkZhCqw0KwTTrCk2JRqOltRDNNTKeYLYy4NnBha43vNf8Hxw8jaFQzSIsztzT6Rr5VbJuOSE3Za2da6FQfUbZainshvLgFbZVbgWpi2yrBSaziPVRazBeERFefj8u6sDXjMZZOe3xQlwWL2hY1RPK8N07YXTLAJHIQmuKq4vEGVKm954wxYJt0bAR/dQpR3EFTzG9l1nOxCiXD3GNaPmuUfWHGbxT9wDDgDIC6g28gVXZe1aqpyi4iodbOhsNTurPCxqRX6WVuULmufH3IlAgNNFK/MF3C4ZT6Vx86bJyTdyK3RnEuklJTbUHphTJpR6OopJDT5t4Yj6MPD9woqwyiKu6RW0AzT9VZ1jpzl4+O1X2JQM/GiY2MFTu0ErndoLayxhn4JGDjqzJuCXTfN1ZCF7TSUzNTabSfpsCCMppA7GfbiKEtHSZr2kx5OcpIn6fXp2VrfaLTRN3uuFf/Xbcu67aahXxe5ui3PVzqvIr9X0ydrXk3jvalpEkUfpKdG1Z9PTl8SSJfwe6lkTDeyh86JoktlkCv5gkw+F4CdqX3MmaBPrgdbgGudTy1Lg3y6Dq9ndmFjLN0Ten/8PeFT8hoAUeTqzaXgsrmmAdAPJny6kVN5vESghjdzujdrWJMVv3uBKYNfu+t6Q4hXgGwdzwFRcOFQrgDeKnp7vOd8f2+c7/dex3lg3OXDDP2saisK3F7jbc9b+1/WHi/bAy0XHOLHq9nMfN0tZvzamD0bc2mo+6+a6kVmuZ2jNQTb8yNhzZR23lMWxuDq4yE35eiO0xtm5tFbK1qaOyz+W7Xv2TWboSa9j3twxBsfs/nCg4MXaAIN5hU8nxQjwCGNsGKoKGtJkX84zflmG15wpY03fi4+Z8zUSgYlzGpgxixorIOZ9T4kaYvsWseTImjT8xh0AOkFTXrBLL3XFWONkCV7vJa+RciOMRdN6eE1Uy30jilVqjVi9kLXNrR/S6XbElS8V1Bvl8JVfF8piS9g/SP+TfkwuSIM5/AeHWT9OI6iOKJZNMyyeDjIiwHOkmI+oQhpSUCIAVIBjAJcqGVQS4f4uSZ5nd7xr0Jw/uu40fPt4bbOR6W0r/BeZgKLF/gRtHhfzsjrTF6WgmE5p3X6YULzWf5NrPnFcm3c0t+rmvZet4eaf5f8Z80arg9Z1BvGlBwMszg7SAo6OBhRnB7gUZ5mfcpIUux+Ibj6DQbeNkilFwAA',
    },
})
Record({
    $id: Now.ID['0349e821470bf61051a3e84d416d434f'],
    table: 'sys_hub_action_instance_v2',
    data: {
        action_type: 'f9d01dd2c31332002841b63b12d3aea1',
        action_type_parent: 'baf174c8c3c232002841b63b12d3aee4',
        compiled_snapshot: 'f9d01dd2c31332002841b63b12d3aea1',
        flow: '761176c92ba15e50d4dffd74ce91bf99',
        order: '7',
        parent_ui_id: '40b664aa-0826-426e-8bc7-6b8508b08112',
        ui_id: '7aa82254-d711-453b-bfde-c43983abb9ff',
        values: 'H4sIAAAAAAAA/+VVW2/bNhT+K4QeM0fRNb70KagXLEDXAHGRl6oQKPHI5kBRGkm58Qz/9x1SkmOkQZBiLdBgfjF0rt+5fIef9x4tDW/kjdSGyhJWO33DvIUXXcZVRIN5VNAwhTRgCasqNk1KmIdFNWXexOPWLgEWhPPwsozDOI6CIJolYXEZF2HEYgoQop2kNaClgrJR1m9LRWcF+32asmJeJfF5GFbsPGFBfD5PoTifh2E0Y7N4Gkcz/875HQ7oybhuBd3dDwFQUm64YAqkt/j8ZeK1VGEuA8pb7J+oXgtW0AIEmt6NaJ+iN7vWfrOm7GqQJuej8MPguRw05GaJGnSycMJg4sGDAckAgVRUaJh4NZWMmkbtvIVRHQoUUHYrxe5oseHS9IXW9EHzfzBzEli7CrCycmjC8TMfGtSLqyU1dIWRS9OpY78aXoLue8Kgop0w709lvcFta3eidzG0EKN3I7pafuw74h0DnMyj0wgCWlunRd6XVa02zde7EeQ1l64lQ4miKak4flFjFC86Y+HsPRDgelzTtuVynbeq2XLnjFBqfy3ww69E8xVzar6Wfr/LPnaV+tcoXzrxPVXcFvEnhkHnw8TTO/1eUK0fS8Ee5n93Fklf2FBC7rrgWpC7TbDOpeKtucJUWxiAHyb/lUdF+tJqlvPHTTwB88ilh5wKAJlrue6oYpxKXEzEz80uxzrBfMuem0FPrgb993HpFYBHLn1yG/R8AQOdvpF9OPUlH3vFQKb0h5Fp9pbINJTx5tn00zgURC+e95MVdLTRJ/xxvdCY2zamR5F1QRCzfTbyJvMWmfepIQWQJViTLTXAMm+S9VGcPiqm1QxYGhZFOYvCYJrOkzSNk4gmRVlEc2eO/UJ2vtL+mXfv1wb7fWfkFTMbz8g1B8H0M0McbwjUWLqBvB/qkzsyKMn9oDw+zD/smISXgfu9oZPyf3mfR6EF/Qx7rPhFL+/iLJNnZ1clzkETi/ziynkSWwrpNMYiZgOkYrmTNMVfUBqfrFwAUnfaEAU4Z0kocfvpExvx1m4hkV1d4B/XpKkqfIxJsSO/hYRL8rtSjSJ/4DoKm2IFfQMdmC3lwr2OjdsGTYbtIl2LwFqFUK1P5vmZR2iFHBzhWXd4oMgIWCAaRfSmUQaHUZL+kIyGPk57vQbll53C5TC+M7TTdHVh1nc21lDZMYoVXmQSB6XpFti4f7/AeTocDl/+BeQ1vMX0DAAA',
    },
})
Record({
    $id: Now.ID['4b49e821470bf61051a3e84d416d4343'],
    table: 'sys_hub_action_instance_v2',
    data: {
        action_type: '9d09f99587003300663ca1bb36cb0ba3',
        action_type_parent: 'b93f42810b30030085c083eb37673a63',
        compiled_snapshot: '9d09f99587003300663ca1bb36cb0ba3',
        flow: '761176c92ba15e50d4dffd74ce91bf99',
        order: '2',
        parent_ui_id: '616b2b1b-f995-4673-909e-b5845b15cee0',
        ui_id: '55db9f43-11fd-4d03-95eb-91128d837328',
        values: 'H4sIAAAAAAAA/+1YTW/bOBD9K4LOjleyJcvOrUgQIEC3AZK0l25DUCQVE0tTKkklcQ3/945EyjZs+Qt1AAe7R5Iz5JuZN0+kvs98TAzP5a3UBkvCHqb6lvqXfpIEBLMg7qU4jFkc0IhmGU0iwkZhmkXY7/i8sqOjYJSNRvEwCYJ+PwgGgz7BYZr2ByQNUhyBncQTBpYGp4LB8AWLshq/ISwYk0jL5xIryrFEnDJpuJkirDUzYEu5LgSefnMut27d++TWyZgLqpj0L7//6PgFVnCUYcq/nK0tHYpV4JQJMH10YNewm2mxGKJ6zc59XnXzvtiFXNEKStDx2ZthkjLAkGGhWcefYEmxydV0MaMYpndSLCfGXBrY0a+M3zT/BecOg8ouYxAVYXZtMUQuVXY6u8YGPxhVElMqZ0rGOSdM23xQluFSmKvVOWtwV1R0sC42bOudi3Iiv9h0+IsNmsrATKkBBCuqQCvkLozsYZy/3jcob7isc+IWRU6wWIywMYqnpanwzHwm2AQ2QhNcFFw+o0LlL7x2BiyT7rOAQTcT+Sscqvmz7FoedyGvuHsD89f19DeseBXF37ANOAMgLoAhyJZQ56WqU/mCiCh1vaCw1HYvf97x9VRfCaDjMnJIOfpZVrhtHlzEyCatciGKF+YTbPHCXHDzzh/3WbyTu6MlV0kuKa+O0ivNVjdUF4IxbPJPCVvQ2exrAbliFIVdUiooj+k6qzJF1nI+f3JTDLIo9jrWVuDU9PF2h8aiMtZQQQFtS615nbCnutwaoqhqDykzpbbLUTzMCKMxxE6GvTBI4lEUx/2oh6OUpFH8dHe/1TcY7fRNNhXn/7wdmLcjlXg/mxslvlqlcxvFnSZvzH1u28BpcngyTY6C4COpMhx+fqJ8vMzaFLyX1oZ0Jzvpkog6VwbZIqyI7aaMHN0gB0BoGuSuorSXTrehcv2RcSZo253lplpYu7P0/pt3lrPsDgBEka0el4LL+gIKQM+ubeKdnE3DNYLWvFw2TT2HNWn5Bnsm934d3UIHwGla6AHO9h4tnhaIzRem5tr616WZdJ3TP1nn9Hun6ZzZIsxFIlty3jxWKho09r8qe7xuD9xdcQjnbZ151JnhsWf25pud3z+q9VfJZleut3DuxK+aLa3ceU/tGIOrOw/ZxkevnD4zszy9saK5ecXi37Z1xzjUFKoO75xeSOHO13268kLiGZpAyXkBL0DFCLBKI6wYyvJSUuTefksGVhTIuNLGGW8q1D2DxpNeDh3tmTHzamtvYX3kp39/HE0NbjOvCcSdpj0IxKsD8RaBHBf2MWoXnfAefWq1u8Fc1NWAF1mxUk6mVK62KN6eQu5gxIFyeCCo8KSg/lwv21qgVTf3YP0Q/4jOSNMIwym8sgdJPwyDIAxoEgyTJBwO0myAkyhbNjdCWhLQb4CUAccAF2o41RAk3BQuJ+/HCdQBoBrqXuey+oPQS4xXoQJeeA2q/bidEKV5LhiWa0r0CMj/uqm/QQuex2enRh/iT2vJH9czbadac/1eF5WSf5X8Z8nq/hiyoDcMKbkYJmFyEWV0cDGiOL7AozRO+pSRKDvl3ePHbzhiVP0HGQAA',
    },
})
Record({
    $id: Now.ID['4b49e821470bf61051a3e84d416d434b'],
    table: 'sys_hub_action_instance_v2',
    data: {
        action_type: 'f9d01dd2c31332002841b63b12d3aea1',
        action_type_parent: 'baf174c8c3c232002841b63b12d3aee4',
        compiled_snapshot: 'f9d01dd2c31332002841b63b12d3aea1',
        flow: '761176c92ba15e50d4dffd74ce91bf99',
        order: '5',
        parent_ui_id: '2248b6fa-422f-44ac-a572-f4354b5c003d',
        ui_id: 'd09205c5-08d6-4bc1-879a-a5e60e8e32ba',
        values: 'H4sIAAAAAAAA/+VVW2/bNhT+KwQfM0fRNbG9p6BesABdA8RFXupCoMgjm4NMaSTlxjX833dISY6RelmKdcCC6UXgufE7l+/w044ybmWtbpWxTHGYb82toFPKYZxexqGIi8sogywUqShLcZVymERFySM6otLZpSDCaBJd8iRKkjgM43EaFZdJEcUiYQDOTrE1oKUGXmuB5w2rWifY7bJMFJMyTc6jqBTnqQiT80kGxfkkiuKxGCdXSTwO7r3ffo+eQpqmYtuHPgBK+EpWQoOi00+fR7RhGu+yoOl090z1WrAVK6BC0/sB7XP0dtu4s6h5uwZlczkI3/ees15DbmeoQScHJwpHFB4tKAEIpGSVgRFdMyWYrfWWTq1uUaCBiTtVbQ8WK6lsl+iaPRr5FW9OQ2dXAmbG+yIcjnlfoE5czphlc4zMbasP9aolB9PVREDJ2sq+O5Z1BneNm4nOxbKiGrzrql2rD11F6CHAUT9agyCgcXk65F1a5XxVf7kfQN5I5UvSp1jVnFWHE7NWy6K1Ds6OQgW+xmvWNFIt80bXG+mdEco6WFZ4CMqq/oJ3GrlUQTfLAVaVBTcon3nxA9PSJfEbhkHn/YiarXlXMWOeUsEa5n+0DkmXWJ9C7qvgS5D7SXDOXMvGXuNVG+iB70f/lEdF9tJo8snTJB6BeeLSY84qAJUbtWyZFpIpHEzEL+02xzzBfsue215Prnv993HpFYAHLn30E3Q6gZ5O38jeH/uSD52iJ1P2w8g0fktk6tN482z61zgUxi+u96MR9LQxR/zxtTB4tytMh2LRhmEidouBNws6XdCPNSmAeNzMgljQ0aKL4bWsvCrHILKoKPg4jsKrbJJmWZLGLC14EY+9OVYLuflK+xOv3n8Z6vetkFf0a1ghNxIqYU40cNgfsMbELeRdQ5/tkF5JHnrl4VH+YYskugz994bWyf/lbR6EDvQJ7jjxi1704myhzs6uOfbBEIf84tp7EpcKaQ3GInYFpBS5l9TF78BtQOY+AFm3xhIN2GdFGPHzGRAX8c5NIVHtusCfNKQuS3yISbElP0VEKvKL1rUmv+I4Vu6KOXQF9GA2TFb+Zaz9NBjSTxdpGwTWaITqfBY0WFDCSuTgAM+5wyNDRsAU0WhiVrW22AxOujUyGAbY7eUSdMBbjcNhA2/ouunzwlt/drH6zA5RnPBiobBRhm1ADPN3cjnNgP3FeoqLF9fN5Pl6+nv7Pd3v95//BFpKsKPwDAAA',
    },
})
Record({
    $id: Now.ID['f6cc2ced47433a10f487c24fe16d4311'],
    table: 'sys_hub_action_instance_v2',
    data: {
        action_type: 'f9d01dd2c31332002841b63b12d3aea1',
        action_type_parent: 'baf174c8c3c232002841b63b12d3aee4',
        compiled_snapshot: 'f9d01dd2c31332002841b63b12d3aea1',
        flow: '761176c92ba15e50d4dffd74ce91bf99',
        order: '12',
        parent_ui_id: '8ea58f7d-e63d-4a84-92a3-0d09f1761dc6',
        ui_id: '5cd506ac-a338-44d3-9b53-0ff0d10f82bf',
        values: 'H4sIAAAAAAAA/+VVUW+bMBD+K4jngCBAQ/JWNatUqeumZutLV6EDH4klY5ht2mZR/vsOcNKorbpW6ks03nzns7/v477z7cblzJ25MbIgnIYnRRRG0TgIxmkc5idRHo5ZBIihO3IlVEg7FRa1YrS+B9F2gc0mSVg+LePIC8OSeTELIm+aYO5Nw3CcsjSaROPUv+7rtluqZFw3AtY39gCKFCsumELpzm7vRm4Diu4yqNzZ5lnqvWAF5Cho6/UO7XP0Zt10a1YXbYXSZHwXvLSVc5txLuaUoaIOThiMXHw0KBkSkBKExpFbgWRgarV2Z0a1FFAI7JsU6/2OFZdmIFrBo+Z/6OY46PaVSMwKK8J+mVmBhnA5BwMLOrkwrdrrVfMC9aAJwxJaYc4OY8OGb43htRxKDORiV12LtpJXgyLu/oCD/9FqAoFNx7NDPtAqF6v64XoH8pzLXhJLUdQFiP0KjFE8b00HZ+OiwF7jCpqGy2XWqPqe98UEpfKXghZ+KeoHulPzpfSh6HD7pCr45xSf9+EbULwj8ZWOoeLtyNVrfSZA6ycqpGH2u+2QDMQshaxXoZcg6zuhKy4Ub8wpXXWPFvh2ZO2QJ291WDF9aqiDM58s8ZiBQJSZlssWFOMgqb8IBjfrjOCieWmCC5t3Tm3+Y5Z4B+CdJX70jfA6AeuKF7HLw1rnakhYTySf5on0mDxhaRy9Kf5lhWD85rA96KS++/WBDXpKmkB3/CrUGpb4qw2CiH1RqlYOl87PhvhQ2lm0+dD6ugt/Pz1bOKxFx9SbDUKYJGkSeWySjr14Ek49yIPYS4o4hUmEOYtiP8u0AdPqLPPtTdvtyHngZuV8/ISiZvjaS3X8hD42Vd7x73dT5ZyjYPqVZtiNFKxISYPZ0BzPxopNOjc2uX9uP222hCdB/x3RhPlvXt27vzJ8TraGCgAA',
    },
})
Record({
    $id: Now.ID['1649a821470bf61051a3e84d416d433b'],
    table: 'sys_hub_flow_logic_instance_v2',
    data: {
        block: '659561574787f21051a3e84d416d43b9',
        flow: 'e184620d2b615e50d4dffd74ce91bf29',
        logic_definition: 'af4e1945c3e232002841b63b12d3ae3e',
        order: '4',
        parent_ui_id: '69bd247f-8106-4e4c-98ba-82268f554a4e',
        ui_id: '2248b6fa-422f-44ac-a572-f4354b5c003d',
        values: 'H4sIAAAAAAAA/+2Uy27bMBBFf8XgWhD0iI3GuzxgoECbAE2QTRsII5KyiVKkSlJ2XMP/3iEpOUbjtGnRZXfmHXLm3tGBd0T3ruudvdcX1oqlIvPPjwkRymv4e0cUtJzMCdWKCSe0qoKQkDXI3hduFleTS2BLPhF2ckGdWPsqE7aTsH345SW6EpIZPszswGBnxw2Z734quW3HKwk1l9jrzhmhlvhcMDw1GTT5Oc1pWczKIsuKd2d5PSvrvGAlcCjx3vjwaoww+RCU5NVsfh7qdpykDfO28iwh/MlxxTiObkBanpAWFAOnzfagGA7sVslnYSWUw3bEX36y4jv2LqZTf7HhmJHyWDwcq2F7UaYrLSi/7bzBqDio5fCGatm36ibm8HvnDfTSjXtHpbfYj3fetHcxWGruVnrzaRy4ECoEHIpSU5CHEzhcQ907bv2H4ZK32KhqoetwOVVn9FqEx+ilTZcSD2kj9QaHep5SoN54ijuCdIH6dZAfwAif4iO2wcfRZg1W0Cqwh+2cwQj7sJbqW+8NxYBDlCpuAy9YakTnBqqi633yEtwjZne74HA9mEhVQ3E44llB6LLff+mzrGTBwguY//D1v6D8HKbNNM+mpyk/m52i/ATfr6Nd/AZtn+WNZGdZ9h/tY7SFrSKiQ7Yw/K/JfvQYxwk2csM4FRaN3Hvt/fjP7QtbBEDQY2mjzVcf4Vnb/wBnyGVsAwYAAA==',
    },
})
Record({
    $id: Now.ID['5649a821470bf61051a3e84d416d4332'],
    table: 'sys_hub_flow_logic_instance_v2',
    data: {
        block: 'e59561574787f21051a3e84d416d43a8',
        flow: 'e184620d2b615e50d4dffd74ce91bf29',
        flow_variables_assigned: 'nfc_badge_active',
        logic_definition: '4f787d1e0f9b0010ecf0cc52ff767ea0',
        order: '1',
        parent_ui_id: '616b2b1b-f995-4673-909e-b5845b15cee0',
        ui_id: 'b9b12a8d-b182-47bb-812a-9c327dc5a1fe',
        values: 'H4sIAAAAAAAA/+1WTU/bQBD9K6s9tRRMQmIg6SkqoCK1RSoplxpZ6/U42Xa9a/YDSFH+e2dsByQKqD1WIofE+2Z2Zt7M8yh33MbQxODndua9Whg+/X65zZUhDJ/vuBE18Ck3lcwLUS4gFzKoa+Db/FroSKYBPpfKN1qsLnqoEtqTi1wqXTroozbCYbAAjk/vHpnCqoFciwI03p67CLsnfQhVIpLuj6o9MZjsFWKYQjoox2VVlQdjCZNhUaX76Le5/EShz1OgtGgprNUgDALWlVTeYJvDbQBTAmZvyWzzWphSBOtW94gDUZ4Z/QAslQkYjpPzrVe/MPZ4QH4VIFMJne3+mPdd62C5tErCWROUNR0SRKH7O9LqWJsvHRHqN1Qi6vC43z189PQ0oseU0BAtqrMvujpf2puvm5pOlGk70Bu1lULfn0QIThUxgKcJRjV/3L4O+vTUHEFDjWnzWjSNMou8cfZatamQXJ0sNB6SStsbLJGEmNCQrEmw5yI5QfyohS+EU9SWzxgGL1PKb0ZdRTglnRSjNE0Ph9XOWKTDnTEedibjw/2ddCDTyegAEAC+bkeQX0Vi1jWz70nedR4dvHSqCbNOJ9OARDYYMf9DSYi9dIPvbmVma2smJXjPiMzurGXHiB2LHhvCwhJYVeYtYosfIEPCztsArI4+MAchOsMEa9+7hFHEM5IrM7Eu8Ed5ZqvKQ2DFir0bMmXYsXPWsY+oXE0pzqHraVvMtVCaOslsKznPejWy2GBhjcNS6U7Gk4wzUeFruymPrsOtqBsNU6zGMb+0LuB8JMviYDAqN44JymWxAJfI6FBdIWkdacAtL8z6nmL1zO6jELibmcyo6s2zkYII0SfSltDl7L/57MP89OI442/vMsPw0wfPOI0k4xh7nRlATT62txrvHPh6vb6kBddprVuEpM1PdqHkqcHk+Kqcr3wrusmLy2l/tFli/7SZ/mK5vq7T13X6uk5f1+n/sk5LkMpjkXNq0+nmHyYZVrhSaK8+QDfW/ST1PmDr30j86UOrCgAA',
    },
})
Record({
    $id: Now.ID['5649a821470bf61051a3e84d416d4345'],
    table: 'sys_hub_flow_logic_instance_v2',
    data: {
        block: 'a19561574787f21051a3e84d416d43bf',
        flow: 'e184620d2b615e50d4dffd74ce91bf29',
        logic_definition: 'd176605ea76103004f27b0d2187901c7',
        order: '9',
        parent_ui_id: '3e108ff4-4417-4440-a14e-69379786becb',
        ui_id: '1a8c7d1f-e3c0-4fb3-99f9-5d81d291ce13',
        values: 'H4sIAAAAAAAA/6tWyi8tKSgtKQ7JdywuzkzPU7KKjtVRyswDiUHYZYlFmYlJOalQbkpqcmZxZn5eCEjME0ldSmVeYm5mMrJQeX5RdlpOfjlCrBYAD1ouqHEAAAA=',
    },
})
Record({
    $id: Now.ID['78cca8ed47433a10f487c24fe16d43e4'],
    table: 'sys_hub_flow_logic_instance_v2',
    data: {
        block: 'e19561574787f21051a3e84d416d43cf',
        flow: 'e184620d2b615e50d4dffd74ce91bf29',
        logic_definition: 'af4e1945c3e232002841b63b12d3ae3e',
        order: '11',
        parent_ui_id: 'ea155853-d782-4719-ab04-5c48a73ebd34',
        ui_id: '8ea58f7d-e63d-4a84-92a3-0d09f1761dc6',
        values: 'H4sIAAAAAAAA/+1UXWvbMBT9K5mfHSPbcRbnrWwECtsKbenLVowsXSdisuRJctIs5L/vyh9p2FJWyh735nvu1zlXBx8C3bqmdfZeX1kr1ipYfn0MA6E8ht+HQNEagmXAtOLCCa2KDgiDLZWtT9y15QRbwU2uOSgn3H4IV7pVHAu5sI2k+4fX1rONkNzAwKShBvc5MMHy8FvK7RsoJC1B+rHOCLXGdsExqgit4pzFLE3maUJIspjF5Twt44SnFGiKdWPjh1HY5FOHhC8q9vsQt+MmbbinFZMwgCcHigOurqi0EAY1VZw6bfYnxADlN0o+AxuhHI4LfPGTFT9xdpJlvrAC1MigT57CYjhkD7ONFgxuGk+wRxwt5dDDtGxr9aXX4Z8AKtpKNz4BIq3FedB40p7FQKm62+jd7bhwJVQncEhKzag8RdThGcrWgfUPAxJqHFTUtGnwOEVj9FZ0zciljtYSg6iSeodLvcsiyjzxCG9EoxXiHzv4gRrhVXzGMdjc0yypFazoHInjnEEJx+4sxY/WE+oFDlKK/hpYYJkRjbvCPVsYWB/DP+185uTDIct4mVezdBrHFZ/OOEmneQblNI/jZMEX6fs0WUS3wPDlj8d331pC0gsOf/Ocf+H8nGZVFpPssvNn80vOv+D5l+2e/MXu/oFe6XZCyH+7n9td2KK37aCtW/5mtz96a/cbbO8bDkxYJHLvsevxH+8TezSAYOfQTpvvXsIzdvwFfGbVRi0GAAA=',
    },
})
Record({
    $id: Now.ID['9249a821470bf61051a3e84d416d433f'],
    table: 'sys_hub_flow_logic_instance_v2',
    data: {
        block: 'e99561574787f21051a3e84d416d43bb',
        connected_to: '2248b6fa-422f-44ac-a572-f4354b5c003d',
        flow: 'e184620d2b615e50d4dffd74ce91bf29',
        logic_definition: '1f781bf3c32232002841b63b12d3aee6',
        order: '6',
        parent_ui_id: '69bd247f-8106-4e4c-98ba-82268f554a4e',
        ui_id: '40b664aa-0826-426e-8bc7-6b8508b08112',
        values: 'H4sIAAAAAAAA/6tWyi8tKSgtKQ7JdywuzkzPU7KKjtVRyswDiUHYZYlFmYlJOalQbkpqcmZxZn5eCEjME0ldSmVeYm5mMrJQeX5RdlpOfjlCrBYAD1ouqHEAAAA=',
    },
})
Record({
    $id: Now.ID['9649a821470bf61051a3e84d416d432e'],
    table: 'sys_hub_flow_logic_instance_v2',
    data: {
        block: 'a99561574787f21051a3e84d416d43a6',
        flow: 'e184620d2b615e50d4dffd74ce91bf29',
        logic_definition: 'e9060aa2c3013010ace8b740ad40dd51',
        order: '0',
        ui_id: '616b2b1b-f995-4673-909e-b5845b15cee0',
        values: 'H4sIAAAAAAAA/6tWyi8tKSgtKQ7JdywuzkzPU7KKjtVRyswDiUHYZYlFmYlJOalQbkpqcmZxZn5eCEjME0ldSmVeYm5mMrJQeX5RdlpOfjlCrBYAD1ouqHEAAAA=',
    },
})
Record({
    $id: Now.ID['9649a821470bf61051a3e84d416d4342'],
    table: 'sys_hub_flow_logic_instance_v2',
    data: {
        block: 'e59561574787f21051a3e84d416d43bd',
        connected_to: '69bd247f-8106-4e4c-98ba-82268f554a4e',
        flow: 'e184620d2b615e50d4dffd74ce91bf29',
        logic_definition: '1f781bf3c32232002841b63b12d3aee6',
        order: '8',
        parent_ui_id: '616b2b1b-f995-4673-909e-b5845b15cee0',
        ui_id: '3e108ff4-4417-4440-a14e-69379786becb',
        values: 'H4sIAAAAAAAA/6tWyi8tKSgtKQ7JdywuzkzPU7KKjtVRyswDiUHYZYlFmYlJOalQbkpqcmZxZn5eCEjME0ldSmVeYm5mMrJQeX5RdlpOfjlCrBYAD1ouqHEAAAA=',
    },
})
Record({
    $id: Now.ID['9e49a821470bf61051a3e84d416d4337'],
    table: 'sys_hub_flow_logic_instance_v2',
    data: {
        block: 'e99561574787f21051a3e84d416d43b7',
        flow: 'e184620d2b615e50d4dffd74ce91bf29',
        logic_definition: 'af4e1945c3e232002841b63b12d3ae3e',
        order: '3',
        parent_ui_id: '616b2b1b-f995-4673-909e-b5845b15cee0',
        ui_id: '69bd247f-8106-4e4c-98ba-82268f554a4e',
        values: 'H4sIAAAAAAAA/+2UUWvbMBSF/0rnZ8fIdpwleSsdhcG2Qlv6shUjS9eJmCx5kpw0C/nvu7LsNGwpG2WPfYvOle495/oj+0h3ru2cvdeX1oqVipZfH+NIKK/h732kaAPRMmJaceGEVmUvxNGGys4XboFpwy9q3SmOMhe2lXT3cL7K1kJyA8OUlhrs5cBEy/1vJbdroZS0AolN7pwRaoXPBcdTTWidLljK8myWZ4Rk82lazfIqzXhOgeZ4b3x4NZq++NQr8Ytp/DzU7TgJTXtbKYkjeHKgOODomkoLcdRQxanTZndUDFB+o+SzsBbKYbvIX36y4if2zorCX6wBMzIIxeOxHNYWZLbWgsFN6w0GxdFKDm+Yll2jvoQcfuFQ0066ceGodBb7QetNexeDpfpurbe348BrofqAQ1FqRuXxRB2uoeocWP9hQEKDjcqGti0up2yN3oj+MXppkpXEQ1JLvcWhnqCEMm88wR3R5Br1D738QI3wKT5jG3wcbFbUClb2tGE7ZzDCoV9L+aPzhkLAIUoZtoEXLDOidZc4ZwOD60P8J6onlO73RcGrRT3NJ2la88mUk3yyKKCaLNI0m/N5/j7P5knA9XB4960jJD/D86v7/A/yF7Soi5QU58mfzs6Rf4b5l3HP/oK7/0D/SDsh5A33U9yFLQO2Q7Z++Ktpf/Rohwk2cMOBCYtG7r32cfz/9oUdAiDYqbTV5ruP8KwdfgHt478CCQYAAA==',
    },
})
Record({
    $id: Now.ID['9e49a821470bf61051a3e84d416d4348'],
    table: 'sys_hub_flow_logic_instance_v2',
    data: {
        block: 'a19561574787f21051a3e84d416d43c1',
        flow: 'e184620d2b615e50d4dffd74ce91bf29',
        logic_definition: '35d60003e6022010a5e40cdd1254dd23',
        order: '10',
        ui_id: 'ea155853-d782-4719-ab04-5c48a73ebd34',
        values: 'H4sIAAAAAAAA/+1Y32/jNgz+Vwajj2lm58clzVvRLkCHtQWWXF/mwpAtJtVNsXy2nLYX5H8fKctKnGTXoZf1YQtQBDYpkZ/IjxTdladKnZW6mKrLohDz1Bv98djyREoyfF55KVuAN/KiqNBMl0UUeS1vyWRJwlXoLSEvhEpDbxR6QdsPvVboFZALJsU3plEzVvmCaaP/dXJ/ZxYkapFJeLmPv0BCqhWJOFRPZ8myfjC7vrAla0uWztsTnYt0biycLY0u9NZrfFtAUbD5O/evdwFNkidYsMrGWKrna6DAQD4aX19eTW/u7ybTy+nnSQN36N2kGuaQ2/NxaJ/NBEgezVgCuqgWTwS5uWXZmIRm2yoMQ68U09cMfmMxSHod0U9tLySL+JMD45FK5atbofMSnPpJpNpo0lLK1saoWy127HGYsVLqyOTSrXJqllDyIshzlUcVRw47lg3UVxSOWrVgKWda5RvIMyaLjV7lvAJkdMHWvpdIQjrXT07Z8+l3jX+NdGNINzm14h8NvLV4rLgXTXP7YXcb3xnyWxuN90W98/2o+y7uFPjvVEP7TOOp3x102wpqLImKjDlqPm7NTvkdK0Gq6fqNumjG/tKk7KeJaY37iCLbV6KNj32AR6wS3ylL8TkVX0u44U45hC7E3Yv+eXJx4Z/32ICfx0POzv1hwAKWsHgAsUv2Grs8F0Um2evDqdmfmv2p2Z+a/anZ/4ebffIkJM8hNTO/4NjvUWhnf+pwW1N/czV+LRRJLjJN4Vmi3hyoFiI3kEx7Fm31/ohRXJKxHM1pyFHQPIBpCoaJyEjSbtEQndl2iz4PlCHqKWXYfLbBvQFnF30prqvbk9yiBeE8GqrLPSB1gGrNVRXzZgb0rjFDF28UtDx40ZBy4A6bY5qTEFPvkahOQNVSeUV6FeIb2u75tG4GeJDEnty9RnYgqLOlRAL3GcWvkmgWyzqVSpaL9K4CT6NEVWcPm3hayXVzxkBFWaAjyOgwhM5CnU2e1PPvNZKxSM25rVKqhEn3xjQ24bjUUFSJQfzR15IWVH6t6aiCTeR8gy3VHfGBZClqhw2uOBi7VLl1xbRXXXrHoOVL54h88f93jHncSUx1ndWJ8WeDDuuzTj8Ouh0/8ONPATB86A6GQTLoXWwl7hcikr1PNtlr/KfFJlDVLuqCp6gfKYXDj0vhcTNly3Q7PM3CdYnZnjBQ3pwtUA8SFpTgBcsyLJQoy9VSGBT0sdCeS3xpz3AeQvQ0ELWrTtDGaLP2Zk56YPgpFJspKMPN/6D3HOoU1JEsUEjJHN+6JoP97zLTf3Zbyt9djbvcneLmn8fktuYv5wM/GA6SpPsJiL/9fr8bD3o+4z2fc55s8XcDbw+v5W2slASW/jvE/Zi7amaDc7j91NoPv7UOMueRiFJxsKiSzSER9Mk+JdlN/V9dUrxizkSyLXpW+Z9E8o1s/RfQLDk/HxYAAA==',
    },
})
Record({
    $id: Now.ID['0349e821470bf61051a3e84d416d433f'],
    table: 'sys_hub_flow_logic_instance_v2',
    data: {
        block: 'a99561574787f21051a3e84d416d43a6',
        flow: '761176c92ba15e50d4dffd74ce91bf99',
        logic_definition: 'e9060aa2c3013010ace8b740ad40dd51',
        order: '0',
        ui_id: '616b2b1b-f995-4673-909e-b5845b15cee0',
        values: 'H4sIAAAAAAAA/6tWyi8tKSgtKQ7JdywuzkzPU7KKjtVRyswDiUHYZYlFmYlJOalQbkpqcmZxZn5eCEjME0ldSmVeYm5mMrJQeX5RdlpOfjlCrBYAD1ouqHEAAAA=',
    },
})
Record({
    $id: Now.ID['0f49e821470bf61051a3e84d416d434a'],
    table: 'sys_hub_flow_logic_instance_v2',
    data: {
        block: '659561574787f21051a3e84d416d43b9',
        flow: '761176c92ba15e50d4dffd74ce91bf99',
        logic_definition: 'af4e1945c3e232002841b63b12d3ae3e',
        order: '4',
        parent_ui_id: '69bd247f-8106-4e4c-98ba-82268f554a4e',
        ui_id: '2248b6fa-422f-44ac-a572-f4354b5c003d',
        values: 'H4sIAAAAAAAA/+1Vy27bMBD8FYNnQdAjNprcEgcGCqQJ0AS5tIGwIimbKEWqJGXHFfzvXYqSbTTuw2iPvZmzr5nVDtwR3bqmdfZJX1srlopcfXqJiFAew98dUVBzckWoVkw4oVXRAxFZg2x94H4xn9wAW/KJsJNr6sTaR5mwjYTt8y+T6EpIZvgwswGDnR035Kr7ISQY9qgSqNJLmtI8m+VZkmTvLtJylpdpxnLgkGNDCSWXmDofyU7ueiT6qQq3bTxunRFqObzvhi6PI6gN86zSJCL81XHFOPKpQFoekRoUA6fNdo8YDuxByQOwEsphO+KTX634hgOz6dQnVhwlUh6C+2cxLC/A1S04QCotda0ZUulKC8ptWA7jFbTSzY+xkPDQeKmhxEEpx2ot21rdh42QfYPxWyHSWiTBG6/UUx90VI8rvfk4slwI1W9lCEpNQe5f4HB3Zes8n45wyWtsVNTQNLjRojF6Lfpi5FLHS4mPuJJ6g0P9DcZAPfEYFwvxAvHbHn4GI7yKD9gGiwPNEqygRX+v2A7XxMkuInZr5xKsPYjE7RZfW08xSB7EFWE/voQa0bjhNoOOXfT2/I8uv+t6zuuBVqwqinTwyAvou+x2n9skyVlP6o0lzqw+zyuXMK2maTI97ZWL2SmvnHDJmQbJfmMQL+UP/ZEkyX+D/LVBhC3CWQ/a+uH/0B8v3gxh5n7XVFik9uSx9+O/iA9s8bgEPYY22nzxog7Y7jsA8jtZjwYAAA==',
    },
})
Record({
    $id: Now.ID['3ecc2ced47433a10f487c24fe16d4320'],
    table: 'sys_hub_flow_logic_instance_v2',
    data: {
        block: 'e19561574787f21051a3e84d416d43cf',
        flow: '761176c92ba15e50d4dffd74ce91bf99',
        logic_definition: 'af4e1945c3e232002841b63b12d3ae3e',
        order: '11',
        parent_ui_id: 'ea155853-d782-4719-ab04-5c48a73ebd34',
        ui_id: '8ea58f7d-e63d-4a84-92a3-0d09f1761dc6',
        values: 'H4sIAAAAAAAA/+1VW2/aMBj9K8zPIcqFMOCtokKq1K1SqfqyVdEX2ynWjJ3FNjRD/Pd9TsJFG9PabY97w8ff5ZwTH7Ej2tnKWfOgr4wRz4rMPj0FRCiP4e8dUbDmZEaoVkxYoVXeAgHZgHT+YumKAbZyO7hhXFlhm/640E4xLGTCVBKax9fW05WQrOY9kwpq3Gd5TWa7H64Ew3FlBGU8pTFNk3GaRFEyGcXFOC3ihKXAIcWBEgousXR+kDC4bZHgl9psU3nc2Fqo5/58209ZHkBdM88qjgLCXyxXjCOfEqThAVmDYmB13RyRmgO7U/IErISyOI744hcjvuHCJMt8YclRIuXd5fGY9z52cHkNFpCKo9bVfSldaUG56cxhvAQn7fwc6wruKi+1a7FQyEO3lm6tPnaOkOOAw2dDxBkkwSuv1FPvdZTLld7eH1guhGpd6S+lpiCPJ7DoXeGs57MjXPI1DsrXUFXoaF7VeiPaZuSyDp8lHsJS6i0u9S8zBOqJh2gshAvEr1v4EWrhVXzAMdjc0SzACJq3rxjHoU2c7ANiGjOXYMxJJLqbf3WeYie5F5d3/vgWWovKXuHmDe917IOfQ3GWh90uy1gxLUfpMI5LNhyxKB1OM14Mp3GcTNgkfZ8mk/CeU3xA+/27zy6K0gs5+eM5b8vPFLIyi6Pscn5G40v5uZCcN4Ym+U1o/Bd7ZWaiKPofmr8OjTB599R7be3yf5iZJx+QbufRayoMUnvw2M3h/8ZfNPi4BD2Htrr+4kWdsP13+PoyXbkGAAA=',
    },
})
Record({
    $id: Now.ID['4b49e821470bf61051a3e84d416d4342'],
    table: 'sys_hub_flow_logic_instance_v2',
    data: {
        block: 'e59561574787f21051a3e84d416d43a8',
        flow: '761176c92ba15e50d4dffd74ce91bf99',
        flow_variables_assigned: 'nfc_badge_active',
        logic_definition: '4f787d1e0f9b0010ecf0cc52ff767ea0',
        order: '1',
        parent_ui_id: '616b2b1b-f995-4673-909e-b5845b15cee0',
        ui_id: 'b9b12a8d-b182-47bb-812a-9c327dc5a1fe',
        values: 'H4sIAAAAAAAA/+1WTW/bOBD9KwRP3TRR7NpKau/JSBo0QNsAtTeXVWFQ1NDmLkWq/EjiGv7vOyPJziKbLbC3PdgHW3qcjzdvhgNvuUuxSTEs3CwEvbJ8+vu3U64tYfi85cq4x09upeWtDVFYCfNNuK34lE8uRuqdGEzelWKYQz6oxpVS1eVYwmRYqosRxzBkZ5VclqJawVLIqB8AcStqeP3kQZhERwN8rnRojNjc95ASJpBJIzy6R/B8uuVyrU3lYU+b8uU/5ZVfYAgjSjD/lVrcNHRSOmdA2B741Eda+ATnNz1D5ytiNzjl8BTBVoC0WvanvBa2EtH5zQHxIKo7a56BtbYRI3Iyfgr6ByYdD8hOARYqoTs7vC57mTpYXYso5tEnGZPvTeXaaQmhk6gCJZKJV3/HOoO7JmpnO5coSrP3dibV9ksnCz8EeNmVHr5+vWcpIE9oSAsqrq9Uzdfu8eu+kBttW9n6Q+OkMIc3EaPXZYpEecuTXrxsRge92g4wUGPaZS2aRtvVsvHuQbepsLg6Wxl8yWjMkSJdgYxa7myGjRLZDeLXLXwvvCZZPmMYdKaUv1n9PUF7G8pRnufvh+psLPLh2Rhfzibj9xdn+UDmk9ElIAB8d8rDJlwZEcKzoNjJ5fdEtXby9iotu16Qi/S6ibNuDqfYW9hjpMU/JhWxn3nw85PCnpzMJLY/MCrvfNbWy6helgJKxOIamKqWLeLKP0DGjM3bAKxOITIPOF6WCdbe14xRxDuaemZTXeKPDswpFSCycsPeDpm27IP3zrOPeAEMpZhDp3JL5kFoQ9oy1w5hYP1Qs9QgscYjVfIpeFZwJhRe/j09cocnUTcGpsjGs7B2PmLHJCvSYDCq9oYZDtBqBT6TyeO8xaw1pJa3dWHWXylWX9khCoHnhS2sVm/+NVIUMYVMugq6nP03n10tbu8/FPyXbWEZfvrgBaeWFBxj7woLOKUvz9up7wz4brf7Rouxm77jUj4u5eNSPi7l41L+HyzlCqQOSHJBMt3u/zPTwQZXFm3nZ+jR+T9pnp+x3V95ubOVfQsAAA==',
    },
})
Record({
    $id: Now.ID['4f49e821470bf61051a3e84d416d4354'],
    table: 'sys_hub_flow_logic_instance_v2',
    data: {
        block: 'a19561574787f21051a3e84d416d43bf',
        flow: '761176c92ba15e50d4dffd74ce91bf99',
        logic_definition: 'd176605ea76103004f27b0d2187901c7',
        order: '9',
        parent_ui_id: '3e108ff4-4417-4440-a14e-69379786becb',
        ui_id: '1a8c7d1f-e3c0-4fb3-99f9-5d81d291ce13',
        values: 'H4sIAAAAAAAA/6tWyi8tKSgtKQ7JdywuzkzPU7KKjtVRyswDiUHYZYlFmYlJOalQbkpqcmZxZn5eCEjME0ldSmVeYm5mMrJQeX5RdlpOfjlCrBYAD1ouqHEAAAA=',
    },
})
Record({
    $id: Now.ID['8749e821470bf61051a3e84d416d4347'],
    table: 'sys_hub_flow_logic_instance_v2',
    data: {
        block: 'e99561574787f21051a3e84d416d43b7',
        flow: '761176c92ba15e50d4dffd74ce91bf99',
        logic_definition: 'af4e1945c3e232002841b63b12d3ae3e',
        order: '3',
        parent_ui_id: '616b2b1b-f995-4673-909e-b5845b15cee0',
        ui_id: '69bd247f-8106-4e4c-98ba-82268f554a4e',
        values: 'H4sIAAAAAAAA/+1Vy27TQBT9lTJrx/IjDkl2VapKSIVKbdUNVNb1PJoR4xnjGScNVv6dO34kEQRBgSW7zLmvc4/vUVpiGlc1zj6YS2vlsybLj08Bkdpj+LslGkpOloQazaSTRucdEJANqMYH7jg1NbsQptEMYSZtpWD3eD5K11Kxmg9TKqixl+M1WbbfhSTDYhGBiBc0pmkyS5MoSubTuJilRZywFDik2FBBwRWmrkZ6FzcdEvyUt9tVHreulvp5eN8MXe5HEDl7VnEUEP7iuGYc+QhQlgekBM3AmXp3QGoO7FarI7CW2mE74pNfrPyKA5Ms84mC44qU98HDMx9U62FxBQ6QSkNdUw+pdG0k5bYXh3EBjXKrU6xPuK38qn2Jg0KN1UY1pf7QK0IODcaPhEhjkQSv/Kae+rCHuF+b7d3I8lrqTpUhqAwFdXiBQ+2Kxnk+LeGKl9goL6GqUNG8qs1GdsXIpQyfFT5CocwWh/qrC4F64iEKC+E14lcd/Ai19Fu8xzZY3NMswEqadxeK7VAmTvYBsTu7UmDtcUlUN//SeIr9ysNyea+PL6G1rNwlTt7wYY998OPBn9x622YZKxZimk7iWLDJlEXpZJHxYrKI42TO5unbNJmH/dHv928+NVGUnnHFH/d5nX8WkIksjrLz/pnOzvnnjHNeaZrkF6bxX+w3PRNF0X/T/LVppM37Ux9264b/Q888eYP0Mw9aU2mR2oPH3o3/JT6ww+OS9BTamvqzX+qI7b8BKYAso5UGAAA=',
    },
})
Record({
    $id: Now.ID['8749e821470bf61051a3e84d416d4358'],
    table: 'sys_hub_flow_logic_instance_v2',
    data: {
        block: 'a19561574787f21051a3e84d416d43c1',
        flow: '761176c92ba15e50d4dffd74ce91bf99',
        logic_definition: '35d60003e6022010a5e40cdd1254dd23',
        order: '10',
        ui_id: 'ea155853-d782-4719-ab04-5c48a73ebd34',
        values: 'H4sIAAAAAAAA/+1ZXW/iOBT9K6uoj5RNCgyUt6pdpK6mRVqYedlUkWMb6hmTZGyHtoP47+NrOyYhzKymy2irFRKK4nv9ce851ydx2AR5qYpSyXl+JSVbZsH474dOwDKw6ftNkKEVDcZBkkiFVCmTJOgEa8RLMG7iYE2FZHkWB+M4iLphHHTiQFLBEGdfkdKeSS5WSBn/n7PpvemA81XB6fM0/UQxuDZgItTeneF1dWNGfUJr1OUoW3ZnSrBsaWY4WxtfHGy3urWiUqLlK8dv9wOa4Ue6QnaOCc+fbigAQ8V4cnN1Pb+d3s/mV/MPs0bccXCbKbqkwuVHaPdswSgnyQJhqqTtPGOwzB0qJmA0wzZxHAclm78U9D1KKYfmGC7VfDHMqC+CIpLkGX/xPZQoqXc/skwZT1Zy3tlN6nuzvfkIXaCSq8Rw6Xt5N8JAXkKFyEVia+TwwrwR9TXAUblWKCNI5WIX8gJxufPngtiAjC+qjXtOOM2W6tE7+yFct/rXoFtDuuPUmf8t8G7GY+Eum9O1YfcDXwn5nUPjdahf/Bj10OMOwP9gN3TPlM761aA7KahiwXlipgPx8X32tt+xCMqbS//Dvmhif2Uo+21mpLEdUeJ0Jdmt0Q7wiLsk9M6SfcjYl5LeEu8c0R5Ne5eDc3x5GZ730ZCcpyOCzsNRhCKEUTqkqSd7q1WeMFlw9PLxJPYnsT+J/UnsT2L/PxZ7/Mg4ETSrv/ODsmlXgYRuKyo00YHZboZjzTUYagTrIU7I9KgDBa79AIbe1v4E0X7MaIvEghUK4F5riwGoMuoVtx0jbyJD/D3LPtshtfD18aVkN3ZSCE13YD4qU2i8FSwjdprKc20zb+KgDk3WTtxQGIyjTkCfFc0IJT4Hz763QPVMdfEEY0CmYwrYhqIZl+yrXrAfQrcF1dlhB5BvJg48a17cIIW0opVYlYJWwOQMU2lxsY1pAcxYt0Ipr3rmvFxl9zZl4MXujRovznLTIqyUOhJaQLIQvsttMXvMn/6qQp2wzODinDzHiPsWUlo401JBoECwfJHXHEm5i0annHwpYYiNxC2W2ES2B4tm2/Gl7B4XP1nN9unwxopZVkE1atmHul/Kdz7zFhTqwISt1F05XxyvnMNTQb+2oB/26reh2idpPknzW6zkk8yeZPatFueDYzJcDC/QAF0M0qh3EUZh+i6iSN/0hqMID/uXNab/gOp0p4Ad3Y3v445xexDYY3xaGSsxAp5+inNnOED66JikO9auj1gIx+XbqUgd6KaueKjrJ0xtb54ttZ9yuoKiWKGi0NsxKUS+ZiYK+FjUXXLd6C70eVhHDwfirhWqrqYIdXfn5I9IMIBDi1yhB/+K91iawQKk9h9M1JZDI5j7+va994ZqBxAyDKPREOPeOwo7YDAY9NJhP0SkHxJCcG0H7IJoReUqP81zTlG2V/pzHdfvE8jo15T/ER/Hxy7+hcv6sBRW3v9eD7/72rl2te3xwQw+Bc/Bdlv9WwiOF10TDNdNT7n4DJtnZ9t+A3wUxSd3HAAA',
    },
})
Record({
    $id: Now.ID['8b49e821470bf61051a3e84d416d434e'],
    table: 'sys_hub_flow_logic_instance_v2',
    data: {
        block: 'e99561574787f21051a3e84d416d43bb',
        connected_to: '2248b6fa-422f-44ac-a572-f4354b5c003d',
        flow: '761176c92ba15e50d4dffd74ce91bf99',
        logic_definition: '1f781bf3c32232002841b63b12d3aee6',
        order: '6',
        parent_ui_id: '69bd247f-8106-4e4c-98ba-82268f554a4e',
        ui_id: '40b664aa-0826-426e-8bc7-6b8508b08112',
        values: 'H4sIAAAAAAAA/6tWyi8tKSgtKQ7JdywuzkzPU7KKjtVRyswDiUHYZYlFmYlJOalQbkpqcmZxZn5eCEjME0ldSmVeYm5mMrJQeX5RdlpOfjlCrBYAD1ouqHEAAAA=',
    },
})
Record({
    $id: Now.ID['8f49e821470bf61051a3e84d416d4351'],
    table: 'sys_hub_flow_logic_instance_v2',
    data: {
        block: 'e59561574787f21051a3e84d416d43bd',
        connected_to: '69bd247f-8106-4e4c-98ba-82268f554a4e',
        flow: '761176c92ba15e50d4dffd74ce91bf99',
        logic_definition: '1f781bf3c32232002841b63b12d3aee6',
        order: '8',
        parent_ui_id: '616b2b1b-f995-4673-909e-b5845b15cee0',
        ui_id: '3e108ff4-4417-4440-a14e-69379786becb',
        values: 'H4sIAAAAAAAA/6tWyi8tKSgtKQ7JdywuzkzPU7KKjtVRyswDiUHYZYlFmYlJOalQbkpqcmZxZn5eCEjME0ldSmVeYm5mMrJQeX5RdlpOfjlCrBYAD1ouqHEAAAA=',
    },
})
Record({
    $id: Now.ID['761176c92ba15e50d4dffd74ce91bf99'],
    table: 'sys_hub_flow_snapshot',
    data: {
        access: 'public',
        active: 'true',
        attributes:
            'browserActivatedIn=chrome,integrationActivatedIn=standalone,labelCacheCleanUpExecuted=true,timeFromCreateToActivate=15792000,viewActivatedIn=naturalLanguage',
        callable_by_client_api: 'false',
        copied_from: 'e9c21a692bd95a10d4dffd74ce91bfb1',
        flow_priority: 'MEDIUM',
        internal_name: 'update_nfc_sub_assets',
        label_cache:
            '[{"name":"flow_variable.nfc_badge_active","label":"Flow Variables➛nfc_badge_active","reference":"","reference_display":"","type":"boolean","base_type":"boolean","column_name":"","choices":[],"attributes":{"sourceUiUniqueId":"","sourceType":"","sourceId":"","uiUniqueId":"b355581f-4a51-4555-9486-50c5937e555e"}},{"name":"55db9f43-11fd-4d03-95eb-91128d837328.Record","label":"2 - Look Up Record➛Identity Asset Record","reference":"x_aleen_snguardian_identity_asset","reference_display":"Identity Asset","type":"reference","base_type":"reference","usedInstances":{"8ea58f7d-e63d-4a84-92a3-0d09f1761dc6":["condition"],"5cd506ac-a338-44d3-9b53-0ff0d10f82bf":["record"]},"attributes":{"element_mapping_provider":"com.glide.flow_design.action.data.FlowDesignVariableMapper"}},{"name":"0eebc2ad-adca-4cc6-8b5d-4ad2f1870667.record.provisioning_status","label":"12 - Create Record➛Request Activity Record➛Provisioning Status","reference":"x_aleen_snguardian_provisioning_status","reference_display":"Provisioning Status","type":"reference","base_type":"reference","parent_table_name":"x_aleen_snguardian_request_activity","column_name":"provisioning_status"},{"name":"flow_variable.provisioning_success","label":"Flow Variables➛provisioning_success","reference":"","reference_display":"","type":"boolean","base_type":"boolean","column_name":"","choices":[],"attributes":{"sourceUiUniqueId":"","sourceType":"","sourceId":"","uiUniqueId":"30684978-344c-4107-b4bd-98ec5914f3fc"}},{"name":"3a1f8f77-d73d-4798-9458-a668da753394.record.provisioning_status.code","label":"11 - Update Record➛Identity Asset Record➛Provisioning Status➛Code","reference":"","reference_display":"Code","type":"string","base_type":"string","parent_table_name":"x_aleen_snguardian_provisioning_status","column_name":"code"},{"name":"Created_1.current.request_for","label":"Trigger - Record Created➛Request Record➛Request For","reference":"x_aleen_snguardian_identity","reference_display":"Identity","type":"reference","base_type":"reference","parent_table_name":"x_aleen_snguardian_request","column_name":"request_for"},{"name":"09b57c5b-667a-4d64-911a-5661d809eb54.record","label":"12 - Update Record➛Record","reference_display":"Record","type":"document_id","base_type":"document_id","attributes":{"element_mapping_provider":"com.glide.flow_design.action.data.FlowDesignVariableMapper"}},{"name":"Created_1.current.request_for.last_name","label":"Trigger - Record Created➛Request Record➛Request For➛Last Name","reference":"","reference_display":"Last Name","type":"string","base_type":"string","parent_table_name":"x_aleen_snguardian_identity","column_name":"last_name"},{"name":"Created_1.current.request_for.first_name","label":"Trigger - Record Created➛Request Record➛Request For➛First Name","reference":"","reference_display":"First Name","type":"string","base_type":"string","parent_table_name":"x_aleen_snguardian_identity","column_name":"first_name"},{"name":"Created_1.current.request_for.email","label":"Trigger - Record Created➛Request Record➛Request For➛Email","reference":"","reference_display":"Email","type":"string","base_type":"string","parent_table_name":"x_aleen_snguardian_identity","column_name":"email"},{"name":"ea155853-d782-4719-ab04-5c48a73ebd34.__status__.message","label":"10 - Top Level Catch➛Error Status➛Message","reference":"","reference_display":"","type":"string","base_type":"string","column_name":"","usedInstances":{"5cd506ac-a338-44d3-9b53-0ff0d10f82bf":["provisioning_message"]},"attributes":{}},{"name":"Created_1.current.number","label":"Trigger - Record Created➛Request Record➛Number","reference":"","reference_display":"Number","type":"string","base_type":"string","parent_table_name":"x_aleen_snguardian_request","column_name":"number"},{"name":"0eebc2ad-adca-4cc6-8b5d-4ad2f1870667.record","label":"13 - Create Record➛Record","reference_display":"Record","type":"document_id","base_type":"document_id","attributes":{"element_mapping_provider":"com.glide.flow_design.action.data.FlowDesignVariableMapper"}},{"name":"Created_1.current","label":"Trigger - Record Created➛Request Record","reference":"x_aleen_snguardian_request","reference_display":"Request","type":"reference","base_type":"reference","attributes":{}},{"name":"flow_variable.badge_id","label":"Flow Variables➛badge_id","reference":"","reference_display":"","type":"string","base_type":"string","column_name":"","attributes":{"uiType":"string","uiTypeLabel":"String","element_mapping_provider":"com.glide.flow_design.action.data.FlowDesignVariableMapper","uiUniqueId":"4f43887b-e234-47e9-8b31-4dfe9e6e99a2"}},{"name":"d09205c5-08d6-4bc1-879a-a5e60e8e32ba.record.provisioning_status.code","label":"5 - Update Record➛Identity Asset Record➛Provisioning Status➛Code","reference":"","reference_display":"Code","type":"string","base_type":"string","parent_table_name":"x_aleen_snguardian_provisioning_status","column_name":"code"},{"name":"d09205c5-08d6-4bc1-879a-a5e60e8e32ba.record.asset.status.name","label":"5 - Update Record➛Identity Asset Record➛Asset➛Status➛Name","reference":"","reference_display":"Name","type":"string","base_type":"string","parent_table_name":"x_aleen_snguardian_status_code","column_name":"name"},{"name":"Created_1.current.opened_by.email","label":"Trigger - Record Created➛Request Record➛Opened by➛Email","reference":"","reference_display":"Email","type":"email","base_type":"email","parent_table_name":"sys_user","column_name":"email"},{"name":"Created_1.current.opened_by.first_name","label":"Trigger - Record Created➛Request Record➛Opened by➛First name","reference":"","reference_display":"First name","type":"string","base_type":"string","parent_table_name":"sys_user","column_name":"first_name"},{"name":"Created_1.current.opened_by.last_name","label":"Trigger - Record Created➛Request Record➛Opened by➛Last name","reference":"","reference_display":"Last name","type":"string","base_type":"string","parent_table_name":"sys_user","column_name":"last_name"},{"name":"8c168f53-abe3-42e8-865f-0a1db9840131.record.provisioning_status.name","label":"16 - Update Record➛Request Activity Record➛Provisioning Status➛Name","reference":"","reference_display":"Name","type":"string","base_type":"string","parent_table_name":"x_aleen_snguardian_provisioning_status","column_name":"name"},{"name":"09b57c5b-667a-4d64-911a-5661d809eb54.record.status.name","label":"12 - Update Record➛Request Record➛Status➛Name","reference":"","reference_display":"Name","type":"string","base_type":"string","parent_table_name":"x_aleen_snguardian_request_status","column_name":"name"},{"name":"d8f86874-9485-42bc-81c8-51176c3668bc.record.provisioning_status.name","label":"17 - Update Record➛Request Activity Record➛Provisioning Status➛Name","reference":"","reference_display":"Name","type":"string","base_type":"string","parent_table_name":"x_aleen_snguardian_provisioning_status","column_name":"name"},{"name":"Updated_1.current.asset.sub_system","label":"Trigger - Record Updated➛Identity Asset Record➛Asset➛Sub System","reference":"x_aleen_snguardian_system","reference_display":"System","type":"reference","base_type":"reference","parent_table_name":"x_aleen_snguardian_asset","column_name":"sub_system"},{"name":"Updated_1.current.identifier","label":"Trigger - Record Updated➛Identity Asset Record➛Identifier","reference":"","reference_display":"Identifier","type":"string","base_type":"string","parent_table_name":"x_aleen_snguardian_identity_asset","column_name":"identifier"},{"name":"Updated_1.current.identity","label":"Trigger - Record Updated➛Identity Asset Record➛Identity","reference":"x_aleen_snguardian_identity","reference_display":"Identity","type":"reference","base_type":"reference","parent_table_name":"x_aleen_snguardian_identity_asset","column_name":"identity"},{"name":"Updated_1.current","label":"Trigger - Record Updated➛Identity Asset Record","reference":"x_aleen_snguardian_identity_asset","reference_display":"Identity Asset","type":"reference","base_type":"reference","usedInstances":{"db6939dd-5659-46b2-8ece-efa3717f45ba":["record"]},"attributes":{}},{"name":"Updated_1.current.asset.serial","label":"Trigger - Record Updated➛Identity Asset Record➛Asset➛Serial","reference":"","reference_display":"Serial","type":"string","base_type":"string","parent_table_name":"x_aleen_snguardian_asset","column_name":"serial"},{"name":"Updated_1.current.provisioning_message","label":"Trigger - Record Updated➛Identity Asset Record➛Provisioning Message","reference":"","reference_display":"Provisioning Message","type":"string","base_type":"string","parent_table_name":"x_aleen_snguardian_identity_asset","column_name":"provisioning_message","usedInstances":{}},{"name":"ea155853-d782-4719-ab04-5c48a73ebd34.__status__.code","label":"10 - Top Level Catch➛Error Status➛Code","reference":"","reference_display":"","type":"integer","base_type":"integer","column_name":"","usedInstances":{"5cd506ac-a338-44d3-9b53-0ff0d10f82bf":["provisioning_message"]},"attributes":{}}]',
        master: 'true',
        name: 'Alert Update NFC Sub Assets',
        parent_flow: 'e184620d2b615e50d4dffd74ce91bf29',
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
    $id: Now.ID['9711b6c92ba15e50d4dffd74ce91bfc0'],
    table: 'sys_flow_trigger_plan',
    data: {
        binding_strategy: 'com.snc.process_flow.engine.binding.RunAlways',
        plan: '{"type":"PlanProxy","persistor":{"@class":".ChunkingPlanPersistor","table":"sys_flow_trigger_plan","id":"9711b6c92ba15e50d4dffd74ce91bfc0","name":"plan","plan_signature":null}}',
        plan_id: 'e184620d2b615e50d4dffd74ce91bf29',
        snapshot: '761176c92ba15e50d4dffd74ce91bf99',
        sys_domain: 'global',
        sys_domain_path: '/',
        trigger: '93ea034d2b255e50d4dffd74ce91bf65',
    },
})
Record({
    $id: Now.ID['6284a20d2b615e50d4dffd74ce91bfc6'],
    table: 'sys_hub_pill_compound',
    data: {
        attached_to: 'e184620d2b615e50d4dffd74ce91bf29',
        order: '0',
        prescription: '{{flow_variable.badge_id}}',
        transform_compositions: '[]',
        ui_id: '8770175f-5954-44b8-9f92-151a0401706a',
    },
})
Record({
    $id: Now.ID['0b11b6c92ba15e50d4dffd74ce91bf67'],
    table: 'sys_hub_pill_compound',
    data: {
        attached_to: '761176c92ba15e50d4dffd74ce91bf99',
        order: '0',
        prescription: '{{flow_variable.badge_id}}',
        transform_compositions: '[]',
        ui_id: '8770175f-5954-44b8-9f92-151a0401706a',
    },
})
Record({
    $id: Now.ID['2984620d2b615e50d4dffd74ce91bf31'],
    table: 'sys_hub_flow_variable',
    data: {
        active: 'true',
        array: 'false',
        array_denormalized: 'false',
        attributes:
            'element_mapping_provider=com.glide.flow_design.action.data.FlowDesignVariableMapper,uiType=string,uiTypeLabel=String,uiUniqueId=4f43887b-e234-47e9-8b31-4dfe9e6e99a2',
        audit: 'false',
        calculation: `(function calculatedFieldValue(current) {

	// Add your code here
	return '';  // return the calculated value

})(current);`,
        display: 'false',
        dynamic_creation: 'false',
        element: 'badge_id',
        element_reference: 'false',
        function_field: 'false',
        internal_type: 'string',
        label: 'badge_id',
        mandatory: 'false',
        max_length: '8000',
        model: 'e184620d2b615e50d4dffd74ce91bf29',
        model_id: 'e184620d2b615e50d4dffd74ce91bf29',
        model_table: 'sys_hub_flow',
        name: 'var__m_sys_hub_flow_variable_e184620d2b615e50d4dffd74ce91bf29',
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
    $id: Now.ID['3184620d2b615e50d4dffd74ce91bf4f'],
    table: 'sys_hub_flow_variable',
    data: {
        active: 'true',
        array: 'false',
        array_denormalized: 'false',
        attributes:
            'element_mapping_provider=com.glide.flow_design.action.data.FlowDesignVariableMapper,uiType=boolean,uiTypeLabel=True/False,uiUniqueId=30684978-344c-4107-b4bd-98ec5914f3fc',
        audit: 'false',
        calculation: `(function calculatedFieldValue(current) {

	// Add your code here
	return '';  // return the calculated value

})(current);`,
        default_value: 'false',
        display: 'false',
        dynamic_creation: 'false',
        element: 'provisioning_success',
        element_reference: 'false',
        function_field: 'false',
        internal_type: 'boolean',
        label: 'provisioning_success',
        mandatory: 'false',
        max_length: '40',
        model: 'e184620d2b615e50d4dffd74ce91bf29',
        model_id: 'e184620d2b615e50d4dffd74ce91bf29',
        model_table: 'sys_hub_flow',
        name: 'var__m_sys_hub_flow_variable_e184620d2b615e50d4dffd74ce91bf29',
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
    $id: Now.ID['563f2a092ba15e50d4dffd74ce91bf56'],
    table: 'sys_hub_flow_variable',
    data: {
        active: 'true',
        array: 'false',
        array_denormalized: 'false',
        attributes:
            'element_mapping_provider=com.glide.flow_design.action.data.FlowDesignVariableMapper,uiType=boolean,uiTypeLabel=True/False,uiUniqueId=b355581f-4a51-4555-9486-50c5937e555e',
        audit: 'false',
        calculation: `(function calculatedFieldValue(current) {

	// Add your code here
	return '';  // return the calculated value

})(current);`,
        default_value: 'false',
        display: 'false',
        dynamic_creation: 'false',
        element: 'nfc_badge_active',
        element_reference: 'false',
        function_field: 'false',
        internal_type: 'boolean',
        label: 'nfc_badge_active',
        mandatory: 'false',
        max_length: '40',
        model: 'e184620d2b615e50d4dffd74ce91bf29',
        model_id: 'e184620d2b615e50d4dffd74ce91bf29',
        model_table: 'sys_hub_flow',
        name: 'var__m_sys_hub_flow_variable_e184620d2b615e50d4dffd74ce91bf29',
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
    $id: Now.ID['721176c92ba15e50d4dffd74ce91bffc'],
    table: 'sys_hub_flow_variable',
    data: {
        active: 'true',
        array: 'false',
        array_denormalized: 'false',
        attributes:
            'element_mapping_provider=com.glide.flow_design.action.data.FlowDesignVariableMapper,uiType=boolean,uiTypeLabel=True/False,uiUniqueId=30684978-344c-4107-b4bd-98ec5914f3fc',
        audit: 'false',
        calculation: `(function calculatedFieldValue(current) {

	// Add your code here
	return '';  // return the calculated value

})(current);`,
        display: 'false',
        dynamic_creation: 'false',
        element: 'provisioning_success',
        element_reference: 'false',
        function_field: 'false',
        internal_type: 'boolean',
        label: 'provisioning_success',
        mandatory: 'false',
        max_length: '40',
        model: '761176c92ba15e50d4dffd74ce91bf99',
        model_id: '761176c92ba15e50d4dffd74ce91bf99',
        model_table: 'sys_hub_flow_snapshot',
        name: 'var__m_sys_hub_flow_variable_761176c92ba15e50d4dffd74ce91bf99',
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
    $id: Now.ID['b21176c92ba15e50d4dffd74ce91bfff'],
    table: 'sys_hub_flow_variable',
    data: {
        active: 'true',
        array: 'false',
        array_denormalized: 'false',
        attributes:
            'element_mapping_provider=com.glide.flow_design.action.data.FlowDesignVariableMapper,uiType=boolean,uiTypeLabel=True/False,uiUniqueId=b355581f-4a51-4555-9486-50c5937e555e',
        audit: 'false',
        calculation: `(function calculatedFieldValue(current) {

	// Add your code here
	return '';  // return the calculated value

})(current);`,
        display: 'false',
        dynamic_creation: 'false',
        element: 'nfc_badge_active',
        element_reference: 'false',
        function_field: 'false',
        internal_type: 'boolean',
        label: 'nfc_badge_active',
        mandatory: 'false',
        max_length: '40',
        model: '761176c92ba15e50d4dffd74ce91bf99',
        model_id: '761176c92ba15e50d4dffd74ce91bf99',
        model_table: 'sys_hub_flow_snapshot',
        name: 'var__m_sys_hub_flow_variable_761176c92ba15e50d4dffd74ce91bf99',
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
    $id: Now.ID['fa1176c92ba15e50d4dffd74ce91bfdf'],
    table: 'sys_hub_flow_variable',
    data: {
        active: 'true',
        array: 'false',
        array_denormalized: 'false',
        attributes:
            'element_mapping_provider=com.glide.flow_design.action.data.FlowDesignVariableMapper,uiType=string,uiTypeLabel=String,uiUniqueId=4f43887b-e234-47e9-8b31-4dfe9e6e99a2',
        audit: 'false',
        calculation: `(function calculatedFieldValue(current) {

	// Add your code here
	return '';  // return the calculated value

})(current);`,
        display: 'false',
        dynamic_creation: 'false',
        element: 'badge_id',
        element_reference: 'false',
        function_field: 'false',
        internal_type: 'string',
        label: 'badge_id',
        mandatory: 'false',
        max_length: '8000',
        model: '761176c92ba15e50d4dffd74ce91bf99',
        model_id: '761176c92ba15e50d4dffd74ce91bf99',
        model_table: 'sys_hub_flow_snapshot',
        name: 'var__m_sys_hub_flow_variable_761176c92ba15e50d4dffd74ce91bf99',
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
