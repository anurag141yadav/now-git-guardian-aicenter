import { Record } from '@servicenow/sdk/core'

Record({
    $id: Now.ID['d620013a1bce02106962fe60cd4bcbc4'],
    table: 'sys_hub_flow',
    data: {
        access: 'public',
        acls: '',
        active: true,
        attributes:
            'browserActivatedIn=chrome,integrationActivatedIn=standalone,labelCacheCleanUpExecuted=true,timeFromCreateToActivate=55982774000,viewActivatedIn=naturalLanguage',
        callable_by_client_api: false,
        flow_priority: 'MEDIUM',
        internal_name: 'terminate_all_email_subflow',
        label_cache:
            '[{"name":"subflow.identity_record.last_name","label":"Input➛Identity Record➛Last Name","reference":"","reference_display":"Last Name","type":"string","base_type":"string","parent_table_name":"x_aleen_snguardian_identity","column_name":"last_name"},{"name":"subflow.identity_record.first_name","label":"Input➛Identity Record➛First Name","reference":"","reference_display":"First Name","type":"string","base_type":"string","parent_table_name":"x_aleen_snguardian_identity","column_name":"first_name"},{"name":"subflow.identity_record.email","label":"Input➛Identity Record➛Email","reference":"","reference_display":"Email","type":"string","base_type":"string","parent_table_name":"x_aleen_snguardian_identity","column_name":"email"}]',
        master_snapshot: 'f2b141ba1bce02106962fe60cd4bcbbc',
        name: 'Alert Terminate Employee Email Subflow',
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
        latest_snapshot: 'f2b141ba1bce02106962fe60cd4bcbbc',
        compiler_build: 'glide-washingtondc-12-20-2023__patch10-hotfix3b-05-20-2025_05-23-2025_1940.zip',
    },
})
Record({
    $id: Now.ID['9a20013a1bce02106962fe60cd4bcbc6'],
    table: 'sys_flow_cat_variable_model',
    data: {
        id: 'd620013a1bce02106962fe60cd4bcbc4',
        name: 'Terminate All Email Subflow',
    },
})
Record({
    $id: Now.ID['76b141ba1bce02106962fe60cd4bcbbd'],
    table: 'sys_flow_cat_variable_model',
    data: {
        id: 'f2b141ba1bce02106962fe60cd4bcbbc',
        name: 'Terminate All Email Subflow',
    },
})
Record({
    $id: Now.ID['c151897a1bce02106962fe60cd4bcb17'],
    table: 'sys_hub_flow_input',
    data: {
        active: 'true',
        array: 'false',
        array_denormalized: 'false',
        attributes:
            'element_mapping_provider=com.glide.flow_design.action.data.FlowDesignVariableMapper,uiType=reference,uiTypeLabel=Reference,uiUniqueId=c6f8ec75-79fe-4926-b047-9ee413daedd6',
        audit: 'false',
        calculation: `(function calculatedFieldValue(current) {

	// Add your code here
	return '';  // return the calculated value

})(current);`,
        choice_table: 'x_aleen_snguardian_identity',
        display: 'false',
        dynamic_creation: 'false',
        element: 'identity_record',
        element_reference: 'false',
        function_field: 'false',
        internal_type: 'reference',
        label: 'Identity Record',
        mandatory: 'true',
        max_length: '32',
        model: 'd620013a1bce02106962fe60cd4bcbc4',
        model_id: 'd620013a1bce02106962fe60cd4bcbc4',
        model_table: 'sys_hub_flow',
        name: 'var__m_sys_hub_flow_input_d620013a1bce02106962fe60cd4bcbc4',
        order: '1',
        primary: 'false',
        read_only: 'false',
        reference: 'x_aleen_snguardian_identity',
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
    $id: Now.ID['fab141ba1bce02106962fe60cd4bcbbe'],
    table: 'sys_hub_flow_input',
    data: {
        active: 'true',
        array: 'false',
        array_denormalized: 'false',
        attributes:
            'element_mapping_provider=com.glide.flow_design.action.data.FlowDesignVariableMapper,uiType=reference,uiTypeLabel=Reference,uiUniqueId=c6f8ec75-79fe-4926-b047-9ee413daedd6',
        audit: 'false',
        calculation: `(function calculatedFieldValue(current) {

	// Add your code here
	return '';  // return the calculated value

})(current);`,
        choice_table: 'x_aleen_snguardian_identity',
        display: 'false',
        dynamic_creation: 'false',
        element: 'identity_record',
        element_reference: 'false',
        function_field: 'false',
        internal_type: 'reference',
        label: 'Identity Record',
        mandatory: 'true',
        max_length: '32',
        model: 'f2b141ba1bce02106962fe60cd4bcbbc',
        model_id: 'f2b141ba1bce02106962fe60cd4bcbbc',
        model_table: 'sys_hub_flow_snapshot',
        name: 'var__m_sys_hub_flow_input_f2b141ba1bce02106962fe60cd4bcbbc',
        order: '1',
        primary: 'false',
        read_only: 'false',
        reference: 'x_aleen_snguardian_identity',
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
    $id: Now.ID['0dc721db4787f21051a3e84d416d43ca'],
    table: 'sys_hub_action_instance_v2',
    data: {
        action_type: 'c1806bf4a70323008299b39f087901cb',
        action_type_parent: '98c181d20b100300d97d8bf637673ab5',
        flow: 'd620013a1bce02106962fe60cd4bcbc4',
        order: '2',
        parent_ui_id: 'c44ed5eb-e0f8-4d44-990c-a66c35c59b62',
        ui_id: '448b3a87-b7cd-402f-9008-b286d559baa9',
        values: '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',
    },
})
Record({
    $id: Now.ID['9dc761db4787f21051a3e84d416d4315'],
    table: 'sys_hub_action_instance_v2',
    data: {
        action_type: 'c1806bf4a70323008299b39f087901cb',
        action_type_parent: '98c181d20b100300d97d8bf637673ab5',
        compiled_snapshot: 'c1806bf4a70323008299b39f087901cb',
        flow: 'f2b141ba1bce02106962fe60cd4bcbbc',
        order: '2',
        parent_ui_id: 'c44ed5eb-e0f8-4d44-990c-a66c35c59b62',
        ui_id: '448b3a87-b7cd-402f-9008-b286d559baa9',
        values: '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',
    },
})
Record({
    $id: Now.ID['01c721db4787f21051a3e84d416d43c9'],
    table: 'sys_hub_flow_logic_instance_v2',
    data: {
        block: '09c721db4787f21051a3e84d416d43c8',
        flow: 'd620013a1bce02106962fe60cd4bcbc4',
        logic_definition: 'af4e1945c3e232002841b63b12d3ae3e',
        order: '1',
        ui_id: 'c44ed5eb-e0f8-4d44-990c-a66c35c59b62',
        values: 'H4sIAAAAAAAA/+2Uy27bMBBFf8XlWhD0iI3Gu6BNgABtAzRBNm0gjMiRTZQiVZLyo4b/vUM9HKNxkCbosjvzkjNz7+jAO2Za37Te3ZkL5+RCs/m3h4hJHTT6vWMaamRzxo0W0kuji06I2ApUGy6uBWov/XZyWYNUk8uNdFQZMSFdo2B7/8IzvpRKWBzmNmCpu0fL5rs/rvy2wUJBiYq63Xor9YLKpaBTlUCVnvOU59ksz5Ike3+WlrO8TDORA0JO78bCD2OMyadOiZ7NF+aR7sZJxopgK00ihhuPWiCNrkA5jFgNWoA3dntQLIK40epRWErtqR0LjzdO/qLe2XQaHlZIGTn2l4djMeyvl/nSSI43TTDYKx5KNdRwo9paf+lzhM1jBa3y4+ZJaR31wyaYDi4GS9Xt0qy/jgOvpO4CDpfKcFCHE3haQ9l6dOHDoMKaGhU1NA0tp2isWcmumLzU8ULRIa6UWdPQwFQMPBiPaUcQX5H+sZPvwcqQ4jO1oeLeZglO8qLjj9p5SxH23VqKn20w1AccohT9NuiB41Y2/oLmrHBwvY+ewnvE7W7n2jKYjOWAZmGR01eOMRC637/73iZJLp6i/IrKf0H3OUyraZpMT9N9NjtF9wmun0c6ewHp8BH+kugkSf4jfYy0dEWP5pCtG/5moh8Cvv0E13MjkEtHRu6Cdj3+a4eLLQEg+bG0NvZHiPCo7X8DmeVLn/8FAAA=',
    },
})
Record({
    $id: Now.ID['91c761db4787f21051a3e84d416d4314'],
    table: 'sys_hub_flow_logic_instance_v2',
    data: {
        block: '09c721db4787f21051a3e84d416d43c8',
        flow: 'f2b141ba1bce02106962fe60cd4bcbbc',
        logic_definition: 'af4e1945c3e232002841b63b12d3ae3e',
        order: '1',
        ui_id: 'c44ed5eb-e0f8-4d44-990c-a66c35c59b62',
        values: 'H4sIAAAAAAAA/+1Vy27bMBD8FZdnQdAjNhrfAicBAqQN0AS5tIGwIimbKEWqJGVbFfzvXephG4mL1GiPvZmzr5nVDtwSXbuqdvZJX1krlorMv74ERCiP4e+WKCg5mROqFRNOaJV1QEDWIGsfuGNcOeGayU0JQk5utsJiZUCYsJWE5vmdNLoSkhk+zK3AYHfHDZm3r0KCYZcigiK+pDFNk1maRFHy8SLOZ2keJywFDik2lJBziamLkfDkvkOC3ypxTeVx64xQy+F9P3R5HEFtmGcVRwHhW8cV48inAGl5QEpQDJw2zR4xHNiDkgdgJZTDdsQnb634iQOT6dQnFhwlUt4H989sWF8PF9fgAKnU1NVmSKUrLSi3/XIYL6CWbnGM9QkPlZfalzjI5VitZV2qz/1GyL7B+LUQqS2S4JVX6qkPOorHld58GVneCtVtZQhKTUHuX+Bwd3ntPJ+WcMlLbJSVUFW40awyei26YuRShkuJj7CQeoND/R2GQD3xEBcL4S3i1x38DEZ4FZ+wDRb3NHOwgmbdzWI7XBMnu4DYxi4kWHsQidvNftSeYi95EJf1+/El1IjKXeHkNR907IK3Fji6/ra1de5ph2I48MxwiscScn/nu92Hb3UUpeytIc6oPM8jlzAtpnE0Pe2Ri9kpj5xwx5nGSN4xhv8qf+iLKIr+G+OvjSFs1p/zoK0b/g998eJN0M/c75oKi9SePHY3/oP4QIPHJegxtNHmuxd1wHa/APu2L3KLBgAA',
    },
})
Record({
    $id: Now.ID['f2b141ba1bce02106962fe60cd4bcbbc'],
    table: 'sys_hub_flow_snapshot',
    data: {
        access: 'public',
        active: 'true',
        attributes:
            'browserActivatedIn=chrome,integrationActivatedIn=standalone,labelCacheCleanUpExecuted=true,viewActivatedIn=naturalLanguage',
        callable_by_client_api: 'false',
        flow_priority: 'MEDIUM',
        internal_name: 'terminate_all_email_subflow',
        label_cache:
            '[{"name":"subflow.identity_record.last_name","label":"Input➛Identity Record➛Last Name","reference":"","reference_display":"Last Name","type":"string","base_type":"string","parent_table_name":"x_aleen_snguardian_identity","column_name":"last_name"},{"name":"subflow.identity_record.first_name","label":"Input➛Identity Record➛First Name","reference":"","reference_display":"First Name","type":"string","base_type":"string","parent_table_name":"x_aleen_snguardian_identity","column_name":"first_name"},{"name":"subflow.identity_record.email","label":"Input➛Identity Record➛Email","reference":"","reference_display":"Email","type":"string","base_type":"string","parent_table_name":"x_aleen_snguardian_identity","column_name":"email"}]',
        master: 'true',
        name: 'Alert Terminate Employee Email Subflow',
        parent_flow: 'd620013a1bce02106962fe60cd4bcbc4',
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
    $id: Now.ID['1d51897a1bce02106962fe60cd4bcb34'],
    table: 'sys_hub_pill_compound',
    data: {
        attached_to: 'd620013a1bce02106962fe60cd4bcbc4',
        order: '0',
        prescription: '{{subflow.identity_record.last_name}}',
        transform_compositions: '[]',
        ui_id: '853cbf82-b860-4556-85ed-70deadd8588f',
    },
})
Record({
    $id: Now.ID['5551897a1bce02106962fe60cd4bcb34'],
    table: 'sys_hub_pill_compound',
    data: {
        attached_to: 'd620013a1bce02106962fe60cd4bcbc4',
        order: '0',
        prescription: '{{subflow.identity_record.first_name}}',
        transform_compositions: '[]',
        ui_id: '58696f61-6f38-4014-99e5-86a37b4e50d8',
    },
})
Record({
    $id: Now.ID['54c109ba1bce02106962fe60cd4bcb73'],
    table: 'sys_hub_pill_compound',
    data: {
        attached_to: 'f2b141ba1bce02106962fe60cd4bcbbc',
        order: '0',
        prescription: '{{subflow.identity_record.first_name}}',
        transform_compositions: '[]',
        ui_id: '58696f61-6f38-4014-99e5-86a37b4e50d8',
    },
})
Record({
    $id: Now.ID['d0c109ba1bce02106962fe60cd4bcb73'],
    table: 'sys_hub_pill_compound',
    data: {
        attached_to: 'f2b141ba1bce02106962fe60cd4bcbbc',
        order: '0',
        prescription: '{{subflow.identity_record.last_name}}',
        transform_compositions: '[]',
        ui_id: '853cbf82-b860-4556-85ed-70deadd8588f',
    },
})
Record({
    $id: Now.ID['acc109ba1bce02106962fe60cd4bcbc9'],
    table: 'sys_flow_subflow_plan',
    data: {
        plan: 'com.snc.process_flow.engine.ProcessPlan@752c487',
        plan_id: 'd620013a1bce02106962fe60cd4bcbc4',
        snapshot: 'f2b141ba1bce02106962fe60cd4bcbbc',
        sys_domain: 'global',
        sys_domain_path: '/',
    },
})
