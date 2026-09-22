import { Record } from '@servicenow/sdk/core'

Record({
    $id: Now.ID['02def56e1bfdce906962fe60cd4bcb6c'],
    table: 'sys_hub_flow',
    data: {
        access: 'public',
        acls: '',
        active: true,
        attributes:
            'browserActivatedIn=chrome,integrationActivatedIn=standalone,labelCacheCleanUpExecuted=true,timeFromCreateToActivate=57107012000,viewActivatedIn=naturalLanguage',
        callable_by_client_api: false,
        flow_priority: 'MEDIUM',
        internal_name: 'onboard_temp_worker_email_subflow',
        label_cache:
            '[{"name":"subflow.is_manager_email","label":"Input➛is_manager_email","reference":"","reference_display":"","type":"boolean","base_type":"boolean","column_name":"","choices":[],"attributes":{"sourceUiUniqueId":"","sourceType":"","sourceId":"","uiUniqueId":"4f2dd37d-5e5e-4fb1-b0cc-e0b95fd607fa"}},{"name":"subflow.worker_name","label":"Input➛worker_name","type":"string","base_type":"string","attributes":{"sourceUiUniqueId":"","sourceType":"","sourceId":"","uiUniqueId":"b621ceac-602a-49f7-ae83-71247fa1a4e0"}},{"name":"subflow.request.status.name","label":"Input➛request➛Status➛Name","reference":"","reference_display":"Name","type":"string","base_type":"string","parent_table_name":"x_aleen_snguardian_request_status","column_name":"name"},{"name":"subflow.request.status","label":"Input➛request➛Status","reference":"x_aleen_snguardian_request_status","reference_display":"Request Status","type":"reference","base_type":"reference","parent_table_name":"x_aleen_snguardian_request","column_name":"status"},{"name":"subflow.request.request_type.name","label":"Input➛request➛Request Type➛Name","reference":"","reference_display":"Name","type":"translated_text","base_type":"translated_text","parent_table_name":"sc_cat_item_producer","column_name":"name"},{"name":"subflow.woker_email","label":"Input➛woker_email","type":"string","base_type":"string","attributes":{"sourceUiUniqueId":"","sourceType":"","sourceId":"","uiUniqueId":"28e45406-285b-4c40-8657-7eac6ccb50b2"}},{"name":"subflow.manager.last_name","label":"Input➛manager➛Last Name","reference":"","reference_display":"Last Name","type":"string","base_type":"string","parent_table_name":"x_aleen_snguardian_identity","column_name":"last_name"},{"name":"subflow.manager.first_name","label":"Input➛manager➛First Name","reference":"","reference_display":"First Name","type":"string","base_type":"string","parent_table_name":"x_aleen_snguardian_identity","column_name":"first_name"},{"name":"subflow.manager.email","label":"Input➛manager➛Email","reference":"","reference_display":"Email","type":"string","base_type":"string","parent_table_name":"x_aleen_snguardian_identity","column_name":"email"},{"name":"subflow.manager","label":"Input➛manager","reference":"x_aleen_snguardian_identity","reference_display":"Identity","type":"reference","base_type":"reference","attributes":{"sourceUiUniqueId":"","sourceType":"","sourceId":"","uiUniqueId":"e4f51c26-124c-47c0-8498-86e3340b8560"}},{"name":"subflow.request.number","label":"Input➛request➛Number","reference":"","reference_display":"Number","type":"string","base_type":"string","parent_table_name":"x_aleen_snguardian_request","column_name":"number"}]',
        master_snapshot: '5751ca221b3102d06962fe60cd4bcb50',
        name: 'Alert Onboard Temp Worker Email Subflow',
        pre_compiled: false,
        run_as: 'system',
        run_with_roles: '',
        sc_callable: false,
        show_draft_actions: false,
        show_triggered_flows: false,
        status: 'published',
        sys_domain: 'global',
        sys_domain_path: '/',
        type: 'subflow',
        version: '2',
        latest_snapshot: '5751ca221b3102d06962fe60cd4bcb50',
        compiler_build: 'glide-vancouver-07-06-2023__patch9-hotfix1-05-22-2024_05-31-2024_1617.zip',
    },
})
Record({
    $id: Now.ID['8edef56e1bfdce906962fe60cd4bcb6c'],
    table: 'sys_flow_cat_variable_model',
    data: {
        id: '02def56e1bfdce906962fe60cd4bcb6c',
        name: 'Onboard Temp Worker Email Subflow',
    },
})
Record({
    $id: Now.ID['1751ca221b3102d06962fe60cd4bcb51'],
    table: 'sys_flow_cat_variable_model',
    data: {
        id: '5751ca221b3102d06962fe60cd4bcb50',
        name: 'Onboard Temp Worker Email Subflow',
    },
})
Record({
    $id: Now.ID['24514a221b3102d06962fe60cd4bcb45'],
    table: 'sys_hub_flow_input',
    data: {
        active: 'true',
        array: 'false',
        array_denormalized: 'false',
        attributes:
            'element_mapping_provider=com.glide.flow_design.action.data.FlowDesignVariableMapper,uiType=reference,uiTypeLabel=Reference,uiUniqueId=ba56918a-572f-407d-8e54-ac35b3edb95c',
        audit: 'false',
        calculation: `(function calculatedFieldValue(current) {

	// Add your code here
	return '';  // return the calculated value

})(current);`,
        choice_table: 'x_aleen_snguardian_request',
        display: 'false',
        dynamic_creation: 'false',
        element: 'request',
        element_reference: 'false',
        function_field: 'false',
        internal_type: 'reference',
        label: 'request',
        mandatory: 'true',
        max_length: '32',
        model: '02def56e1bfdce906962fe60cd4bcb6c',
        model_id: '02def56e1bfdce906962fe60cd4bcb6c',
        model_table: 'sys_hub_flow',
        name: 'var__m_sys_hub_flow_input_02def56e1bfdce906962fe60cd4bcb6c',
        order: '1',
        primary: 'false',
        read_only: 'false',
        reference: 'x_aleen_snguardian_request',
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
    $id: Now.ID['28514a221b3102d06962fe60cd4bcb86'],
    table: 'sys_hub_flow_input',
    data: {
        active: 'true',
        array: 'false',
        array_denormalized: 'false',
        attributes:
            'element_mapping_provider=com.glide.flow_design.action.data.FlowDesignVariableMapper,uiType=string,uiTypeLabel=String,uiUniqueId=b621ceac-602a-49f7-ae83-71247fa1a4e0',
        audit: 'false',
        calculation: `(function calculatedFieldValue(current) {

	// Add your code here
	return '';  // return the calculated value

})(current);`,
        display: 'false',
        dynamic_creation: 'false',
        element: 'worker_name',
        element_reference: 'false',
        function_field: 'false',
        internal_type: 'string',
        label: 'worker_name',
        mandatory: 'true',
        max_length: '8000',
        model: '02def56e1bfdce906962fe60cd4bcb6c',
        model_id: '02def56e1bfdce906962fe60cd4bcb6c',
        model_table: 'sys_hub_flow',
        name: 'var__m_sys_hub_flow_input_02def56e1bfdce906962fe60cd4bcb6c',
        order: '3',
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
    $id: Now.ID['a4514a221b3102d06962fe60cd4bcb7f'],
    table: 'sys_hub_flow_input',
    data: {
        active: 'true',
        array: 'false',
        array_denormalized: 'false',
        attributes:
            'element_mapping_provider=com.glide.flow_design.action.data.FlowDesignVariableMapper,uiType=string,uiTypeLabel=String,uiUniqueId=28e45406-285b-4c40-8657-7eac6ccb50b2',
        audit: 'false',
        calculation: `(function calculatedFieldValue(current) {

	// Add your code here
	return '';  // return the calculated value

})(current);`,
        display: 'false',
        dynamic_creation: 'false',
        element: 'woker_email',
        element_reference: 'false',
        function_field: 'false',
        internal_type: 'string',
        label: 'woker_email',
        mandatory: 'true',
        max_length: '8000',
        model: '02def56e1bfdce906962fe60cd4bcb6c',
        model_id: '02def56e1bfdce906962fe60cd4bcb6c',
        model_table: 'sys_hub_flow',
        name: 'var__m_sys_hub_flow_input_02def56e1bfdce906962fe60cd4bcb6c',
        order: '2',
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
    $id: Now.ID['2351ca221b3102d06962fe60cd4bcba4'],
    table: 'sys_hub_flow_input',
    data: {
        active: 'true',
        array: 'false',
        array_denormalized: 'false',
        attributes:
            'element_mapping_provider=com.glide.flow_design.action.data.FlowDesignVariableMapper,uiType=string,uiTypeLabel=String,uiUniqueId=b621ceac-602a-49f7-ae83-71247fa1a4e0',
        audit: 'false',
        calculation: `(function calculatedFieldValue(current) {

	// Add your code here
	return '';  // return the calculated value

})(current);`,
        display: 'false',
        dynamic_creation: 'false',
        element: 'worker_name',
        element_reference: 'false',
        function_field: 'false',
        internal_type: 'string',
        label: 'worker_name',
        mandatory: 'true',
        max_length: '8000',
        model: '5751ca221b3102d06962fe60cd4bcb50',
        model_id: '5751ca221b3102d06962fe60cd4bcb50',
        model_table: 'sys_hub_flow_snapshot',
        name: 'var__m_sys_hub_flow_input_5751ca221b3102d06962fe60cd4bcb50',
        order: '3',
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
    $id: Now.ID['5b51ca221b3102d06962fe60cd4bcb52'],
    table: 'sys_hub_flow_input',
    data: {
        active: 'true',
        array: 'false',
        array_denormalized: 'false',
        attributes:
            'element_mapping_provider=com.glide.flow_design.action.data.FlowDesignVariableMapper,uiType=reference,uiTypeLabel=Reference,uiUniqueId=ba56918a-572f-407d-8e54-ac35b3edb95c',
        audit: 'false',
        calculation: `(function calculatedFieldValue(current) {

	// Add your code here
	return '';  // return the calculated value

})(current);`,
        choice_table: 'x_aleen_snguardian_request',
        display: 'false',
        dynamic_creation: 'false',
        element: 'request',
        element_reference: 'false',
        function_field: 'false',
        internal_type: 'reference',
        label: 'request',
        mandatory: 'true',
        max_length: '32',
        model: '5751ca221b3102d06962fe60cd4bcb50',
        model_id: '5751ca221b3102d06962fe60cd4bcb50',
        model_table: 'sys_hub_flow_snapshot',
        name: 'var__m_sys_hub_flow_input_5751ca221b3102d06962fe60cd4bcb50',
        order: '1',
        primary: 'false',
        read_only: 'false',
        reference: 'x_aleen_snguardian_request',
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
    $id: Now.ID['6751ca221b3102d06962fe60cd4bcb78'],
    table: 'sys_hub_flow_input',
    data: {
        active: 'true',
        array: 'false',
        array_denormalized: 'false',
        attributes:
            'element_mapping_provider=com.glide.flow_design.action.data.FlowDesignVariableMapper,uiType=string,uiTypeLabel=String,uiUniqueId=28e45406-285b-4c40-8657-7eac6ccb50b2',
        audit: 'false',
        calculation: `(function calculatedFieldValue(current) {

	// Add your code here
	return '';  // return the calculated value

})(current);`,
        display: 'false',
        dynamic_creation: 'false',
        element: 'woker_email',
        element_reference: 'false',
        function_field: 'false',
        internal_type: 'string',
        label: 'woker_email',
        mandatory: 'true',
        max_length: '8000',
        model: '5751ca221b3102d06962fe60cd4bcb50',
        model_id: '5751ca221b3102d06962fe60cd4bcb50',
        model_table: 'sys_hub_flow_snapshot',
        name: 'var__m_sys_hub_flow_input_5751ca221b3102d06962fe60cd4bcb50',
        order: '2',
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
    $id: Now.ID['86e2376147073a1051a3e84d416d43b8'],
    table: 'sys_hub_action_instance_v2',
    data: {
        action_type: 'c1806bf4a70323008299b39f087901cb',
        action_type_parent: '98c181d20b100300d97d8bf637673ab5',
        flow: '02def56e1bfdce906962fe60cd4bcb6c',
        order: '1',
        ui_id: '545e31df-3a47-43c5-848e-c28e67a89c2b',
        values: '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',
    },
})
Record({
    $id: Now.ID['56e2776147073a1051a3e84d416d4306'],
    table: 'sys_hub_action_instance_v2',
    data: {
        action_type: 'c1806bf4a70323008299b39f087901cb',
        action_type_parent: '98c181d20b100300d97d8bf637673ab5',
        compiled_snapshot: 'c1806bf4a70323008299b39f087901cb',
        flow: '5751ca221b3102d06962fe60cd4bcb50',
        order: '1',
        ui_id: '545e31df-3a47-43c5-848e-c28e67a89c2b',
        values: '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',
    },
})
Record({
    $id: Now.ID['5751ca221b3102d06962fe60cd4bcb50'],
    table: 'sys_hub_flow_snapshot',
    data: {
        access: 'public',
        active: 'true',
        attributes:
            'browserActivatedIn=chrome,integrationActivatedIn=standalone,labelCacheCleanUpExecuted=true,viewActivatedIn=naturalLanguage',
        callable_by_client_api: 'false',
        flow_priority: 'MEDIUM',
        internal_name: 'onboard_temp_worker_email_subflow',
        label_cache:
            '[{"name":"subflow.is_manager_email","label":"Input➛is_manager_email","reference":"","reference_display":"","type":"boolean","base_type":"boolean","column_name":"","choices":[],"attributes":{"sourceUiUniqueId":"","sourceType":"","sourceId":"","uiUniqueId":"4f2dd37d-5e5e-4fb1-b0cc-e0b95fd607fa"}},{"name":"subflow.worker_name","label":"Input➛worker_name","type":"string","base_type":"string","attributes":{"sourceUiUniqueId":"","sourceType":"","sourceId":"","uiUniqueId":"b621ceac-602a-49f7-ae83-71247fa1a4e0"}},{"name":"subflow.request.status.name","label":"Input➛request➛Status➛Name","reference":"","reference_display":"Name","type":"string","base_type":"string","parent_table_name":"x_aleen_snguardian_request_status","column_name":"name"},{"name":"subflow.request.status","label":"Input➛request➛Status","reference":"x_aleen_snguardian_request_status","reference_display":"Request Status","type":"reference","base_type":"reference","parent_table_name":"x_aleen_snguardian_request","column_name":"status"},{"name":"subflow.request.request_type.name","label":"Input➛request➛Request Type➛Name","reference":"","reference_display":"Name","type":"translated_text","base_type":"translated_text","parent_table_name":"sc_cat_item_producer","column_name":"name"},{"name":"subflow.woker_email","label":"Input➛woker_email","type":"string","base_type":"string","attributes":{"sourceUiUniqueId":"","sourceType":"","sourceId":"","uiUniqueId":"28e45406-285b-4c40-8657-7eac6ccb50b2"}},{"name":"subflow.manager.last_name","label":"Input➛manager➛Last Name","reference":"","reference_display":"Last Name","type":"string","base_type":"string","parent_table_name":"x_aleen_snguardian_identity","column_name":"last_name"},{"name":"subflow.manager.first_name","label":"Input➛manager➛First Name","reference":"","reference_display":"First Name","type":"string","base_type":"string","parent_table_name":"x_aleen_snguardian_identity","column_name":"first_name"},{"name":"subflow.manager.email","label":"Input➛manager➛Email","reference":"","reference_display":"Email","type":"string","base_type":"string","parent_table_name":"x_aleen_snguardian_identity","column_name":"email"},{"name":"subflow.manager","label":"Input➛manager","reference":"x_aleen_snguardian_identity","reference_display":"Identity","type":"reference","base_type":"reference","attributes":{"sourceUiUniqueId":"","sourceType":"","sourceId":"","uiUniqueId":"e4f51c26-124c-47c0-8498-86e3340b8560"}},{"name":"subflow.request.number","label":"Input➛request➛Number","reference":"","reference_display":"Number","type":"string","base_type":"string","parent_table_name":"x_aleen_snguardian_request","column_name":"number"}]',
        master: 'true',
        name: 'Alert Onboard Temp Worker Email Subflow',
        parent_flow: '02def56e1bfdce906962fe60cd4bcb6c',
        run_as: 'system',
        sc_callable: 'false',
        status: 'published',
        sys_domain: 'global',
        sys_domain_path: '/',
        type: 'subflow',
        version: '2',
    },
})
Record({
    $id: Now.ID['01514a221b3102d06962fe60cd4bcbb8'],
    table: 'sys_hub_pill_compound',
    data: {
        attached_to: '02def56e1bfdce906962fe60cd4bcb6c',
        order: '0',
        prescription: '{{subflow.request.status.name}}',
        transform_compositions: '[]',
        ui_id: 'b6dfd122-eba6-46fb-99f1-736252bd1fb0',
    },
})
Record({
    $id: Now.ID['05514a221b3102d06962fe60cd4bcbb7'],
    table: 'sys_hub_pill_compound',
    data: {
        attached_to: '02def56e1bfdce906962fe60cd4bcb6c',
        order: '0',
        prescription: '{{subflow.manager.last_name}}',
        transform_compositions: '[]',
        ui_id: '9f136e28-e266-4784-9ec6-e040f7f201cb',
    },
})
Record({
    $id: Now.ID['4d514a221b3102d06962fe60cd4bcbb6'],
    table: 'sys_hub_pill_compound',
    data: {
        attached_to: '02def56e1bfdce906962fe60cd4bcb6c',
        order: '0',
        prescription: '{{subflow.manager.first_name}}',
        transform_compositions: '[]',
        ui_id: '2787faae-3ad3-4c52-b76d-1b8dd55277bd',
    },
})
Record({
    $id: Now.ID['4d514a221b3102d06962fe60cd4bcbb7'],
    table: 'sys_hub_pill_compound',
    data: {
        attached_to: '02def56e1bfdce906962fe60cd4bcb6c',
        order: '0',
        prescription: '{{subflow.request.request_type.name}}',
        transform_compositions: '[]',
        ui_id: 'ddae7d7c-8292-4228-ac28-4959fb826182',
    },
})
Record({
    $id: Now.ID['89514a221b3102d06962fe60cd4bcbb7'],
    table: 'sys_hub_pill_compound',
    data: {
        attached_to: '02def56e1bfdce906962fe60cd4bcb6c',
        order: '0',
        prescription: '{{subflow.worker_name}}',
        transform_compositions: '[]',
        ui_id: '88d1ecea-84a5-48df-8a48-05f5f21323b8',
    },
})
Record({
    $id: Now.ID['c5514a221b3102d06962fe60cd4bcbb7'],
    table: 'sys_hub_pill_compound',
    data: {
        attached_to: '02def56e1bfdce906962fe60cd4bcb6c',
        order: '0',
        prescription: '{{subflow.request.number}}',
        transform_compositions: '[]',
        ui_id: '6d2d215b-0137-4cd3-a907-50dcc7f0c2cc',
    },
})
Record({
    $id: Now.ID['33510e221b3102d06962fe60cd4bcb55'],
    table: 'sys_hub_pill_compound',
    data: {
        attached_to: '5751ca221b3102d06962fe60cd4bcb50',
        order: '0',
        prescription: '{{subflow.worker_name}}',
        transform_compositions: '[]',
        ui_id: '88d1ecea-84a5-48df-8a48-05f5f21323b8',
    },
})
Record({
    $id: Now.ID['3b510e221b3102d06962fe60cd4bcb54'],
    table: 'sys_hub_pill_compound',
    data: {
        attached_to: '5751ca221b3102d06962fe60cd4bcb50',
        order: '0',
        prescription: '{{subflow.manager.first_name}}',
        transform_compositions: '[]',
        ui_id: '2787faae-3ad3-4c52-b76d-1b8dd55277bd',
    },
})
Record({
    $id: Now.ID['3f510e221b3102d06962fe60cd4bcb54'],
    table: 'sys_hub_pill_compound',
    data: {
        attached_to: '5751ca221b3102d06962fe60cd4bcb50',
        order: '0',
        prescription: '{{subflow.manager.last_name}}',
        transform_compositions: '[]',
        ui_id: '9f136e28-e266-4784-9ec6-e040f7f201cb',
    },
})
Record({
    $id: Now.ID['b3510e221b3102d06962fe60cd4bcb55'],
    table: 'sys_hub_pill_compound',
    data: {
        attached_to: '5751ca221b3102d06962fe60cd4bcb50',
        order: '0',
        prescription: '{{subflow.request.status.name}}',
        transform_compositions: '[]',
        ui_id: 'b6dfd122-eba6-46fb-99f1-736252bd1fb0',
    },
})
Record({
    $id: Now.ID['bb510e221b3102d06962fe60cd4bcb54'],
    table: 'sys_hub_pill_compound',
    data: {
        attached_to: '5751ca221b3102d06962fe60cd4bcb50',
        order: '0',
        prescription: '{{subflow.request.number}}',
        transform_compositions: '[]',
        ui_id: '6d2d215b-0137-4cd3-a907-50dcc7f0c2cc',
    },
})
Record({
    $id: Now.ID['bf510e221b3102d06962fe60cd4bcb54'],
    table: 'sys_hub_pill_compound',
    data: {
        attached_to: '5751ca221b3102d06962fe60cd4bcb50',
        order: '0',
        prescription: '{{subflow.request.request_type.name}}',
        transform_compositions: '[]',
        ui_id: 'ddae7d7c-8292-4228-ac28-4959fb826182',
    },
})
Record({
    $id: Now.ID['40610e221b3102d06962fe60cd4bcb8c'],
    table: 'sys_flow_subflow_plan',
    data: {
        plan: 'com.snc.process_flow.engine.ProcessPlan@209f4419',
        plan_id: '02def56e1bfdce906962fe60cd4bcb6c',
        snapshot: '5751ca221b3102d06962fe60cd4bcb50',
        sys_domain: 'global',
        sys_domain_path: '/',
    },
})
