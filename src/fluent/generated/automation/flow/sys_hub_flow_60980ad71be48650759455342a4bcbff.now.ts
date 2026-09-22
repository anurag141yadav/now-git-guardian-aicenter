import { Record } from '@servicenow/sdk/core'

Record({
    $id: Now.ID['60980ad71be48650759455342a4bcbff'],
    table: 'sys_hub_flow',
    data: {
        access: 'public',
        acls: '',
        active: true,
        attributes:
            'browserActivatedIn=chrome,integrationActivatedIn=standalone,labelCacheCleanUpExecuted=true,timeFromCreateToActivate=62267838000,viewActivatedIn=naturalLanguage',
        callable_by_client_api: false,
        description: 'Update  Identity Information (self)',
        flow_priority: 'MEDIUM',
        internal_name: 'update__identity_information_self',
        label_cache:
            '[{"name":"39bfa97a-f7d9-46ac-8fce-04b6c2ced09b.manager.name","label":"1 - Alert Get Manager for First Stage Approval➛manager➛Name","reference":"","reference_display":"Name","type":"string","base_type":"string","parent_table_name":"sys_user","column_name":"name","usedInstances":{"d3f99c52-e69e-4331-a056-ac4c600627e0":["work_notes"]}},{"name":"flow_variable.manager_approved","label":"Flow Variables➛manager approved","reference":"","reference_display":"","type":"boolean","base_type":"boolean","column_name":"","choices":[],"attributes":{"sourceUiUniqueId":"","sourceType":"","sourceId":"","uiUniqueId":"a1b054ad-f8ff-4993-86e1-5c7ea0a26b61"}},{"name":"afccb52e-4c66-4343-b9fe-761034565f78.approval_state","label":"4 - Ask For Approval➛Approval State","reference_display":"Approval State","type":"choice","base_type":"choice","choices":[{"label":"-- None --","value":"","order":0.0},{"label":"Not Yet Requested","value":"not requested","order":1.0},{"label":"Requested","value":"requested","order":2.0},{"label":"Approved","value":"approved","order":3.0},{"label":"Rejected","value":"rejected","order":4.0},{"label":"Cancelled","value":"cancelled","order":5.0},{"label":"No Longer Required","value":"not_required","order":6.0},{"label":"Skipped","value":"skipped","order":7.0}],"attributes":{"element_mapping_provider":"com.glide.flow_design.action.data.FlowDesignVariableMapper"}},{"name":"39bfa97a-f7d9-46ac-8fce-04b6c2ced09b.manager","label":"1 - Alert Get Manager for First Stage Approval➛manager","reference":"sys_user","reference_display":"User","type":"reference","base_type":"reference","attributes":{"uiType":"reference","uiTypeLabel":"Reference","element_mapping_provider":"com.glide.flow_design.action.data.FlowDesignVariableMapper","uiUniqueId":"c464d03d-430b-4b1a-ade3-4caefe794b13"}},{"name":"Created_1.current.request_for.email","label":"Trigger - Record Created➛Request Record➛Request For➛Email","reference":"","reference_display":"Email","type":"string","base_type":"string","parent_table_name":"x_aleen_snguardian_identity","column_name":"email"},{"name":"27850384-1a4b-4ea2-834f-ea2695210369.record.opened_by.mobile_phone","label":"10 - Update Record➛Request Record➛Opened by➛Mobile phone","reference":"","reference_display":"Mobile phone","type":"ph_number","base_type":"ph_number","parent_table_name":"sys_user","column_name":"mobile_phone"},{"name":"Created_1.table_name","label":"Trigger - Record Created➛Request Table","reference":"x_aleen_snguardian_request","reference_display":"Request","type":"table_name","base_type":"table_name","attributes":{"test_input_hidden":"true"}},{"name":"Created_1.current","label":"Trigger - Record Created➛Request Record","reference":"x_aleen_snguardian_request","reference_display":"Request","type":"reference","base_type":"reference","attributes":{}},{"name":"Created_1.current.request_for","label":"Trigger - Record Created➛Request Record➛Request For","reference":"x_aleen_snguardian_identity","reference_display":"Identity","type":"reference","base_type":"reference","parent_table_name":"x_aleen_snguardian_request","column_name":"request_for"},{"name":"Created_1.current.request_for.sys_id","label":"Trigger - Record Created➛Request Record➛Request For➛Sys ID","reference":"","reference_display":"Sys ID","type":"GUID","base_type":"GUID","parent_table_name":"x_aleen_snguardian_identity","column_name":"sys_id"},{"name":"Created_1.current.number","label":"Trigger - Record Created➛Request Record➛Number","reference":"","reference_display":"Number","type":"string","base_type":"string","parent_table_name":"x_aleen_snguardian_request","column_name":"number"},{"name":"Created_1.current.sys_id","label":"Trigger - Record Created➛Request Record➛Sys ID","reference":"","reference_display":"Sys ID","type":"GUID","base_type":"GUID","parent_table_name":"x_aleen_snguardian_request","column_name":"sys_id"},{"name":"Created_1.current.opened_by.email","label":"Trigger - Record Created➛Request Record➛Opened by➛Email","reference":"","reference_display":"Email","type":"email","base_type":"email","parent_table_name":"sys_user","column_name":"email"},{"name":"Created_1.current.opened_by.first_name","label":"Trigger - Record Created➛Request Record➛Opened by➛First name","reference":"","reference_display":"First name","type":"string","base_type":"string","parent_table_name":"sys_user","column_name":"first_name"},{"name":"Created_1.current.opened_by","label":"Trigger - Record Created➛Request Record➛Opened by","reference":"sys_user","reference_display":"User","type":"reference","base_type":"reference","parent_table_name":"x_aleen_snguardian_request","column_name":"opened_by"},{"name":"Created_1.current.opened_by.last_name","label":"Trigger - Record Created➛Request Record➛Opened by➛Last name","reference":"","reference_display":"Last name","type":"string","base_type":"string","parent_table_name":"sys_user","column_name":"last_name"},{"name":"27850384-1a4b-4ea2-834f-ea2695210369.record.opened_by.photo","label":"10 - Update Record➛Request Record➛Opened by➛Photo","reference":"","reference_display":"Photo","type":"user_image","base_type":"user_image","parent_table_name":"sys_user","column_name":"photo"},{"name":"27850384-1a4b-4ea2-834f-ea2695210369.record.opened_by.first_name","label":"10 - Update Record➛Request Record➛Opened by➛First name","reference":"","reference_display":"First name","type":"string","base_type":"string","parent_table_name":"sys_user","column_name":"first_name"},{"name":"Created_1.current.opened_by.photo","label":"Trigger - Record Created➛Request Record➛Opened by➛Photo","reference":"","reference_display":"Photo","type":"user_image","base_type":"user_image","parent_table_name":"sys_user","column_name":"photo"},{"name":"Created_1.current.request_for.first_name","label":"Trigger - Record Created➛Request Record➛Request For➛First Name","reference":"","reference_display":"First Name","type":"string","base_type":"string","parent_table_name":"x_aleen_snguardian_identity","column_name":"first_name"},{"name":"Created_1.current.request_for.last_name","label":"Trigger - Record Created➛Request Record➛Request For➛Last Name","reference":"","reference_display":"Last Name","type":"string","base_type":"string","parent_table_name":"x_aleen_snguardian_identity","column_name":"last_name"},{"name":"27850384-1a4b-4ea2-834f-ea2695210369.record","label":"10 - Update Record➛Request Record","reference":"x_aleen_snguardian_request","reference_display":"Request","type":"reference","base_type":"reference","attributes":{"element_mapping_provider":"com.glide.flow_design.action.data.FlowDesignVariableMapper"}}]',
        master_snapshot: 'e67c065f1be48650759455342a4bcb76',
        name: 'Alert Update Identity Information (self)',
        pre_compiled: false,
        remote_trigger_id: 'fe7c065f1be48650759455342a4bcbd6',
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
        latest_snapshot: 'e67c065f1be48650759455342a4bcb76',
        compiler_build: 'glide-washingtondc-12-20-2023__patch10-hotfix3b-05-20-2025_05-23-2025_1940.zip',
    },
})
Record({
    $id: Now.ID['fe7c065f1be48650759455342a4bcbd6'],
    table: 'sys_flow_record_trigger',
    data: {
        active: 'true',
        condition: 'request_type=af04ff3a1bec0650759455342a4bcb36',
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
    $id: Now.ID['4685ed174787f21051a3e84d416d43f7'],
    table: 'sys_trigger_runner_mapping',
    data: {
        active: 'true',
        data: '{"run_flow_in":"background","run_when_user_list":[],"run_when_setting":"both","run_when_user_setting":"any","run_on_extended":"false"}',
        identifier: '60980ad71be48650759455342a4bcbff',
        runner: 'FDTriggerRunner',
        trigger: 'fe7c065f1be48650759455342a4bcbd6',
    },
})
Record({
    $id: Now.ID['ac980ad71be48650759455342a4bcbff'],
    table: 'sys_flow_cat_variable_model',
    data: {
        id: '60980ad71be48650759455342a4bcbff',
        name: 'Update  Identity Information (self)',
    },
})
Record({
    $id: Now.ID['e67c065f1be48650759455342a4bcb77'],
    table: 'sys_flow_cat_variable_model',
    data: {
        id: 'e67c065f1be48650759455342a4bcb76',
        name: 'Update  Identity Information (self)',
    },
})
Record({
    $id: Now.ID['5d7cc25f1be48650759455342a4bcb7e'],
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
        model: '60980ad71be48650759455342a4bcbff',
        model_id: '60980ad71be48650759455342a4bcbff',
        model_table: 'sys_hub_flow',
        name: 'var__m_sys_hub_flow_input_60980ad71be48650759455342a4bcbff',
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
    $id: Now.ID['d97cc25f1be48650759455342a4bcb82'],
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
        model: '60980ad71be48650759455342a4bcbff',
        model_id: '60980ad71be48650759455342a4bcbff',
        model_table: 'sys_hub_flow',
        name: 'var__m_sys_hub_flow_input_60980ad71be48650759455342a4bcbff',
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
    $id: Now.ID['227c065f1be48650759455342a4bcbaa'],
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
        model: 'e67c065f1be48650759455342a4bcb76',
        model_id: 'e67c065f1be48650759455342a4bcb76',
        model_table: 'sys_hub_flow_snapshot',
        name: 'var__m_sys_hub_flow_input_e67c065f1be48650759455342a4bcb76',
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
    $id: Now.ID['2e7c065f1be48650759455342a4bcb78'],
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
        model: 'e67c065f1be48650759455342a4bcb76',
        model_id: 'e67c065f1be48650759455342a4bcb76',
        model_table: 'sys_hub_flow_snapshot',
        name: 'var__m_sys_hub_flow_input_e67c065f1be48650759455342a4bcb76',
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
    $id: Now.ID['ffe7cb56470ffa10f487c24fe16d43a2'],
    table: 'sys_hub_trigger_instance_v2',
    data: {
        flow: '60980ad71be48650759455342a4bcbff',
        name: 'Created',
        trigger_definition: '798916a0c31322002841b63b12d3ae7c',
        trigger_inputs:
            'H4sIAAAAAAAA/+VY227jNhD9FUFPLZACutiWlbdtkkUDbDeFk20f0oCgqKEtVKa8EqWsu8i/d6hbZFnyLZuunX0xIJKmzhmeOTPU/VddxsF0CvG1SCQVDG6XybWvn+uu6TBmDbnpwWA8GhrO0B0Mh/bAogOPeWNHP9ND6kGIS++oFwI+B0JCLGh4t1wADks1TASdq7k5FT6VUbzUz2WcwpkexT7E+rl5pucryuW4MqNhqp6/EBoCCJKIaUpjP6CCxPA5hUTiIj9IFiFd/lmundQTCxrjdlJt/VVnsyD0YxD6+f0DwlO0GGfUtcBgtmlblmFY44HpjWzPtHybgmF00Grhkx3snsnAFwnCB3wVp2ECHcRjoP6NCJf1ihnGDTfMg/QlCf7F3ceGWscBsTMo5upHUnIvhtksChjcLGQQiWKkwFlMRmE6Fx8L/CpqwGkayipqOJImuB8sFGQFokTEb2fR46R64ftA5OzKyTBiNKyfqET9eKmERAWcByGGnhSxSaI0ztFPri5uJpfkr3d3F79dTcjk6vZucn1xd3WpP+W8yOdU7VggLLGQgs5TfdTvAwjVAYp07iGaMz1hcbCQ75gMMijhPJ19CzlfRMIP8niuSZpVU0kTa0McjdMuA1RJwzBqJbHGCyq1l9ImSl1/p4Zh+5QbA85tioiZsYbYHq1nwUF7bEuY0YhSH2hPwni8J3AdVGVHDJvR2ZQ65cguuTMwjO+UPUV+H5w888iH8LIpqkLKJBCLVKpoPVIhEyIjQn2fNOKoliKmbdlUcHt6xdSJU4GvIvVJridQHvA68h8CNO3zezSOKqo5GJznH8otJ6nQIjxy/NFYGmNQpVZlG7+e02l5FvyPSsh5MEv9ZTQmZE6SZUJmqUdWIkocd+yaoz5pO2wlgnmi4tb3uv7wpE4ZQmCyoVb+KWk+/R4kSSCmjfDWHPPDWqNYs0PVa1UEC6rJaXF92NEH19WStVTQLvMbtLDNx0yTcw+4ZTiKvmnYHjcNxxhS7tuGwayNKu4FLFuyfhU/28/Nkjyhwh3Spx3tCrwSa7iPNrNVYZf7WEoIpWleHCG0lvnbe7l/rdBi+HJ3oX7jlov6mTJrf9ci8Or+z8PoEU3nAO/3KPtnGkep8NvuqPbUAqE9r9B+KiP/82l5Y7MO8CiGzXxXV5wOy30qwLNeqlylYrnu/cXgNpe3UaUuDMBAc7fR172h63qMWpw7Iwcss1ernYBOwt235EbWlVx9dtqpu6xLrnt4/PcH+CKnL9XY6fPF3Ft39McZCIIkYxIG+UeWlrFPw8CHam7nvF/bNXu+WLVyf4fE52OXDU3HYQ46GyY+H4BHzYE1pK4zssfDbZQ2AZMdNP+Xi6sycgWkxxQ+FVPH9QnoONWbgJSqPu3flAhs+PP/0AJeo1KrA9VyV4pi7WMkfrl+XqfdAlbE/LvHCdXtZneyC2mlQO1NsfYiOVvrxpDprzi+wlRdN3rO/A1f11vJlK1GreO6fkjstl7lMe+HLre7vZ67mw2gn83Rt3s7Gk7Wa11dbdWuCZ11+kLdZrUbtQPOvaWmcmt7S4v54wblRW1tlbK93y8OAftD9BJ5a/iShkKhBRLxZp25jDSc0PAlWsC1Ei34mrfU5AzwMEK8+eALNfX2Eyswzfq6zrxOtTfNu7gprrUVOKyVHf4JEdu7Y2ilzMYPPR2h2dYQgO9QzNqey5/b/urTBWkL4qNvDfb2j6zLjjaWwv32be/ZWQwbZ7yqiR1r/xtm/WrfrDpQHGnZfvgP/e7QuZ4kAAA=',
        trigger_type: 'record_create',
    },
})
Record({
    $id: Now.ID['d8f70f56470ffa10f487c24fe16d4395'],
    table: 'sys_hub_trigger_instance_v2',
    data: {
        flow: 'e67c065f1be48650759455342a4bcb76',
        name: 'Created',
        trigger_definition: '798916a0c31322002841b63b12d3ae7c',
        trigger_inputs:
            'H4sIAAAAAAAA/+VY227jNhD9FUFPLZACutiWlbdtkkUDbDeFk20f0oCgqKEtVKa8EqWsu8i/d6hbZFnyLZuunX0xIJKmzhmeOTPU/VddxsF0CvG1SCQVDG6XybWvn+uu6TBmDbnpwWA8GhrO0B0Mh/bAogOPeWNHP9ND6kGIS++oFwI+B0JCLGh4t1wADks1TASdq7k5FT6VUbzUz2WcwpkexT7E+rl5pucryuW4MqNhqp6/EBoCCJKIaUpjP6CCxPA5hUTiIj9IFiFd/lmundQTCxrjdlJt/VVnsyD0YxD6+f0DwlO0GGfUtcBgtmlblmFY44HpjWzPtHybgmF00Grhkx3snsnAFwnCB3wVp2ECHcRjoP6NCJf1ihnGDTfMg/QlCf7F3ceGWscBsTMo5upHUnIvhtksChjcLGQQiWKkwFlMRmE6Fx8L/CpqwGkayipqOJImuB8sFGQFokTEb2fR46R64ftA5OzKyTBiNKyfqET9eKmERAWcByGGnhSxSaI0ztFPri5uJpfkr3d3F79dTcjk6vZucn1xd3WpP+W8yOdU7VggLLGQgs5TfdTvAwjVAYp07iGaMz1hcbCQ75gMMijhPJ19CzlfRMIP8niuSZpVU0kTa0McjdMuA1RJwzBqJbHGCyq1l9ImSl1/p4Zh+5QbA85tioiZsYbYHq1nwUF7bEuY0YhSH2hPwni8J3AdVGVHDJvR2ZQ65cguuTMwjO+UPUV+H5w888iH8LIpqkLKJBCLVKpoPVIhEyIjQn2fNOKoliKmbdlUcHt6xdSJU4GvIvVJridQHvA68h8CNO3zezSOKqo5GJznH8otJ6nQIjxy/NFYGmNQpVZlG7+e02l5FvyPSsh5MEv9ZTQmZE6SZUJmqUdWIkocd+yaoz5pO2wlgnmi4tb3uv7wpE4ZQmCyoVb+KWk+/R4kSSCmjfDWHPPDWqNYs0PVa1UEC6rJaXF92NEH19WStVTQLvMbtLDNx0yTcw+4ZTiKvmnYHjcNxxhS7tuGwayNKu4FLFuyfhU/28/Nkjyhwh3Spx3tCrwSa7iPNrNVYZf7WEoIpWleHCG0lvnbe7l/rdBi+HJ3oX7jlov6mTJrf9ci8Or+z8PoEU3nAO/3KPtnGkep8NvuqPbUAqE9r9B+KiP/82l5Y7MO8CiGzXxXV5wOy30qwLNeqlylYrnu/cXgNpe3UaUuDMBAc7fR172h63qMWpw7Iwcss1ernYBOwt235EbWlVx9dtqpu6xLrnt4/PcH+CKnL9XY6fPF3Ft39McZCIIkYxIG+UeWlrFPw8CHam7nvF/bNXu+WLVyf4fE52OXDU3HYQ46GyY+H4BHzYE1pK4zssfDbZQ2AZMdNP+Xi6sycgWkxxQ+FVPH9QnoONWbgJSqPu3flAhs+PP/0AJeo1KrA9VyV4pi7WMkfrl+XqfdAlbE/LvHCdXtZneyC2mlQO1NsfYiOVvrxpDprzi+wlRdN3rO/A1f11vJlK1GreO6fkjstl7lMe+HLre7vZ67mw2gn83Rt3s7Gk7Wa11dbdWuCZ11+kLdZrUbtQPOvaWmcmt7S4v54wblRW1tlbK93y8OAftD9BJ5a/iShkKhBRLxZp25jDSc0PAlWsC1Ei34mrfU5AzwMEK8+eALNfX2Eyswzfq6zrxOtTfNu7gprrUVOKyVHf4JEdu7Y2ilzMYPPR2h2dYQgO9QzNqey5/b/urTBWkL4qNvDfb2j6zLjjaWwv32be/ZWQwbZ7yqiR1r/xtm/WrfrDpQHGnZfvgP/e7QuZ4kAAA=',
        trigger_type: 'record_create',
    },
})
Record({
    $id: Now.ID['33e7cb56470ffa10f487c24fe16d43be'],
    table: 'sys_hub_action_instance_v2',
    data: {
        action_type: '634c025f1be48650759455342a4bcb9e',
        action_type_parent: 'cbe9869b1be48650759455342a4bcba7',
        flow: '60980ad71be48650759455342a4bcbff',
        order: '9',
        parent_ui_id: 'e28cc8f8-140d-476f-8dee-968297e59493',
        ui_id: 'b5e8d520-6f3b-412f-be3b-dbb5dc735233',
        values: 'H4sIAAAAAAAA/+2VWU/jMBDHv0uemyp2nIu31SIkpF2QFpYXhCIf49aS44QchW7V777O0VJaWo5FCw+8RMrM2DP/mfkl1wuH8lrl5tRUNTUcLubVqXCOnARFnONAIgYkDgMvChISBD7BlDDOYumMHNXGYUm4tzeOIhtnaAY2ckZLRZkGa5lR3bSmxeJ7CbQGkaIxb8oSTL1cWr9QVaHp/GoIsxY+VVpYv3N0fTNyClraO2sonaPFlqueF5BqykDbg79AgvVweEW1q7Mb5e4KaLNYS7lxf16Kth40cuC+BiPA5pNUVzByMmoErfNyvrZY1eLc6AfDVJm6V5rR+0r9sbf7eLSR4Mi5T6kGMGllJg0thaImLeG2gap2NgLToXed+pWXT3PF4bxoB91nqTshz1zKc91k5qxX344FJG10vTGWprIJoWjltvUPYuTFNL9b9/5Ema4zg1PnnOr1G63rUrGmhqodZaMudxvbG388MVLQkNm8aUaLQplJWpT5THW5bOnZeKLty1jq/M7WWKmJGferPrbDoOMTaz/uzFfDXH/aa+zhNuNvo2wTOhBwLAn2eOAGknOXCIxchpLETRDEAnwgkkln2U0gvW1aaX2rhqakfcdtQMVLVdTfbAkzGPQvR/+KXxTIOCCCI8ZiQrfjZPywvSLnTdutbvKd7YHDg1uwBePhjXkTphd2B8zkFZJWB48HTZetprNe0wG5A7XVKt2ALH43ZGPP8x5DuwfNg0x+KHnr5jzGbj2i/8IcCRIWBTRyJQ+xSxDCbgwhtY9IgJcIFLPg45jz8MEF5btLaI8d/OmNq3mVKvHUv++Z6PcA7gV6toE7Pd4jcg9i/hdinwwxwUQSkThwqRChS5gMXUbC0I0wSjixnHle+HGIJTzGwFGM7Pd+dyU53d0+02SsU3kIsz7opZhtRL8HZi/QtI3Z2UrUPrF7cCNfuH0y3CIUkgjHzGWRj1xCgVjwCHL9AGMfeCiC2H8zbjd/AQiKaCjGDQAA',
    },
})
Record({
    $id: Now.ID['3be7cb56470ffa10f487c24fe16d43b2'],
    table: 'sys_hub_action_instance_v2',
    data: {
        action_type: 'f8f2e9920b10030085c083eb37673abd',
        action_type_parent: 'bae0a1120b10030085c083eb37673a92',
        flow: '60980ad71be48650759455342a4bcbff',
        order: '4',
        parent_ui_id: '8d929e4f-3c2a-42b4-8a2c-7e0b824005b1',
        ui_id: 'afccb52e-4c66-4343-b9fe-761034565f78',
        values: 'H4sIAAAAAAAA/+1XW0/bMBT+KyjPpUvaQpu+oSEkJm2TgO2FosiXk9aT62S2A3RV//uOEzcNLWSMdUKbeDz375x8x46vlwFhVmTqXBlLFIPLhTnnwTiglA4jGsYRTVN2fBT2wiHtRcOYhgPKaBwFnUA4v+Eo7UEc90IahWE/DEdHLBz1gfaHx8M+YSH6KTIH9NTAMs1RviWycIrl8r0GYoEnUZcVWoOyqxXauTC5JIuv3g01bCYkR3swvr7pBDnRmNGCDsbLLZNd5JBIQkFi4GnGijkmPTg//Q206+iLNdxt+K4GytxnT4RTosnhCTsB3FtQHLBaSqSBTjAnihOb6UUwtrpABTbNPyu5qD1mQtmq0Tm5N+IHpu/3nF8K2BnzQ6jFxA9oPZtMMPicu49YaSyhcj24TBZz9anqwI0WUlJI2xhtYTAf5A6yA1EhTC9n2d3Fut6ZUGVzHq3MGJG1RKzVghYWjPsaIKGcyZzkuVDTJNfZrSiDEcq8O5UodFOZ3WFNI6aqW5GviwMi3TPUn5bqr0QL18RHTIPBq7L55Hvh6lZteMBJ2XPVMHoZpkVuTzDnLXiEq86fMpyyVs6wDUUqHBuC3ydEAqjEqGlBNBdEJRq+F2DsLssvasPLyH7lah+UX/r5uB8E7/bhmV6KiapSe6JH7UT3mucwfRS+DtM9on+M6n+N5WHUxhY+2rADgWKrRCapANk8z9eGXXI3LC9j95kr9YDdz8C7Dj7x1Q/OPOCnGvF8L8Utvvf2yPfwlRj/drbvsJ61sgj6G7J8ywqtWkifzIQpufAk+Rse+1qCZ8BfB3+o8G/vwHZbLSvQf1uB/3EFBketHIJHzkuWKS5cTdNYhOqUBXOiFl+ul8t+TFMSD8lhOuTx4eCYsMNRyuAQqx+zHgMexrSL9CFT0KvVze7a/HG+ly1ZfVlcFBLMbwypfjf4uNah+TWrjdoH+VUb7OsZ8Xqb9vZ79fCiaSVQGm8IwwucI76Kmw/lia8+CcaTQGUKJkFnEjivxDGpVKMHdlUbSt1yuVpVmkITnyBqiJtoTham9DRsBhzZWGofaKoV8fp9vtMvfYGDU8T97ko07rdfT61+7BdV/KOD9OtWd1JNTjRvt6O93W6Dt41rbBzCFEn9/4+XGZ5dL17Dm5/36J4orxIAAA==',
    },
})
Record({
    $id: Now.ID['3be7cb56470ffa10f487c24fe16d43be'],
    table: 'sys_hub_action_instance_v2',
    data: {
        action_type: 'f9d01dd2c31332002841b63b12d3aea1',
        action_type_parent: 'baf174c8c3c232002841b63b12d3aee4',
        flow: '60980ad71be48650759455342a4bcbff',
        order: '10',
        parent_ui_id: 'e28cc8f8-140d-476f-8dee-968297e59493',
        ui_id: '27850384-1a4b-4ea2-834f-ea2695210369',
        values: 'H4sIAAAAAAAA/+1V207bQBD9lcjPkbW2Y5PkrSpC4qFQQcULKdZ6dxxWXa/NXgJplH/vrC8hQIsopapa1W9z2ZlzZo53LzcBZVbU6lgZSxWD87U55sE8iGMKhPIyKmAyzVJykM4maZpMYjopWJHOgnEgfN4EOIlmUcaSKEliQuLpJCqypIhinlCACPMUrQAzNbBac7RXVDrv2Gzea6AWeB6FzGkNym63GOfCNJKuL/o09LBrITnGg/nl53HQUI0VLehgvnkUsusGckkLkHjwsGauwqKj48OfQDucPhvgPobve6DN++q58E4MeTwRGQdwZ0FxwHYllQbGQUUVp7bW62ButUMHsuanSq53GddC2Y5pRe+M+Ir1J8TnlYDUWD+FnZn3ExqGUwsGp43fYuextJDD5GrpKnXSUfCzhZI6afdm6wzWg8ZD9iA6hOX5dX17NvQ7Eqpl16OVNaNyZ1FrtSicBePXARLaoVS0aYRa5o2uV6I9jFCqcCnRCEtZ32JPI5Yq7NQX4oBoeIT+w9Z9QbXwJD5gGTy8bcnnN8737Wj0gPOWc0s4bxeFqYZp0dh3WHgFPczt+Fd1XqTPKYfN7oWyB+Ze63c5lQAqN2rpqOaCqlzDjQNjnwr+bBd4ne4/eQCjkw7AS8E/OPwDMr3yH/h64advJvzpHxJ+j+gvU/5v0zuJn70p9yTSStzsaR0bWlg4QhKeXHnDmc7aLAapL4L5IvjoJ2QQI/DRuWMMjCmdlBgcL7pibRrhaYJ9ISoSMo0jks2yuISMMO4RH5A23awNXsQvzN9e3db6S65qXF2HrP/lRripRuIvxkdmD1D49B/9Jzm+8roBrIfTGHWzebl+hgJHAiQ33xHUcN/0DfJV32D32L7ZpRNlpP3+v7lv+OZ+/gbrQdiyXQoAAA==',
    },
})
Record({
    $id: Now.ID['bbe7cb56470ffa10f487c24fe16d43ab'],
    table: 'sys_hub_action_instance_v2',
    data: {
        action_type: '9d884af71b0f8e10bf7ea82b234bcbee',
        action_type_parent: '7e1886b71b0f8e10bf7ea82b234bcb9e',
        flow: '60980ad71be48650759455342a4bcbff',
        order: '1',
        ui_id: '39bfa97a-f7d9-46ac-8fce-04b6c2ced09b',
        values: 'H4sIAAAAAAAA/5VTXYvbMBD8L3pOjO04H85baTkItD3otfdyHGIlrRKBLPskOZc05L93Fbu50CuUPnp2dmd2Vn46MZDRtG7jQgQn8eEYNoqt2UyIZSHyuhBay8U8L/OlKItlLfJKSLGq2ISZxJur1aoCnbh6hUUu9BJhVYpylni6JJ6DBolpFLpo4pGQPdg+QafTR48QUfEik733RMg8vvQYItetP5+Jq0zoLBwfxxZC5M5YRVy2fnqesA48zY/o2fr0RykeO+QWBFpq/IYaqSLxP5z/7r2x/n6ZpEKIv5nfepX8FBOGh4hOIelpsAEnrAGnILb+eEUoAXXv7BuwMy4OmzZwCOYnTZ+VkxuBNTtwsIiOB7ftwSsDjt84ujL5GB51bN7KctcaifddOvugE0HYf4+Vre0b93UIIF0GNfQ23lymDySJXdo4rTDuox927es1/jvjLuGMRdtKsNcviNEb0UcM6Zq9+f4+2wH8/JerosWGdHkDXWfclne+3ZuLFllvsq2lj0zb9pU8BrN12fDyM7oHZHeEf7rAj+BNyuMLjaHmpPjDGXqUl/+i1ou8rAqYwiyX06oS86mY1/W0rnIoxXKRL0TOzpcb8Jc+rTZENYbCh8iJEKQ3XfxAFvY47n9+/gVEbhGXjwMAAA==',
    },
})
Record({
    $id: Now.ID['bfe7cb56470ffa10f487c24fe16d43c1'],
    table: 'sys_hub_action_instance_v2',
    data: {
        action_type: 'f9d01dd2c31332002841b63b12d3aea1',
        action_type_parent: 'baf174c8c3c232002841b63b12d3aee4',
        flow: '60980ad71be48650759455342a4bcbff',
        order: '12',
        parent_ui_id: '0b6d5147-182c-4501-a159-00170270a19a',
        ui_id: '0c217b52-3ba3-404c-ab74-d99fb09b841d',
        values: 'H4sIAAAAAAAA/+1V207cMBD9lVWeVyvnstc3VITEQ0GCihcWIl8mi1vHCbazkK723zvOZVmgRZRSVUjNm8fHM+eMT8aXm4ByJwt9rK2jmsN5bY9FsAjIjE9DRuYhyzI+GZOITFkUTueMJIwzNgmGgfS4BAQJ5+GEx2EcR4REsyRkk5iFkYgpQIg4TXNApAFeGIHrNVWVD2w2nwxQByINR7wyBrTbbnFfSFsqWl90MIzwG6kE7geLy6thUFKDGR2YYLF5suXqElJFGSg8eFjwKsekg+PD32Dbnz7r6T6l72vgWnTZU+mDuOX5hGQYwL0DLQDLZVRZGAY51YK6wtTBwpkKA6hanGpV7xA3UrtWaU7vrfyO+RPicRmgNN51YbdMuw71zSkkh9PS32IbcZSpvnOFqnJ90krwvYWMVsrt9baymA9KT9mTaBlm5zfF3Vlf70jqRl3HVhWcqt2KOmckqxxYfx2goGlKTstS6lVammItm8NIJR+tFC5GmSrusKaVKz1q3TfCBtHREcYPm/AFNdKL+Ixp8PC2EZ/eVr5uK6MjnDaaG8Fpc1EItdzI0h1g4jV0NLfDP/U5G7/kHD5/MMoemQev36dUAejU6lVFjZBUpwZuK7DuueHPdhtv8/0XT2Bw0hJ4LflHh38hpnP+o1hn/PG7GX/2j4zfMfpgzv9rfifRi5NyzyKNxe2e17Ggq+yyIiQWm2Xv7mWwWKK1vwLHib8MhssW34QTMstmIMYhY3wWhWQ6nifjcZxE1JOa0gZua4uz9pX47fVdYb6lusDbaZl0f9XAdBQGrB6gQekKzLVnDC0sef4/fng9bxwjkKNOB4O2D6/3RZ/gSIIS9idG6edIVyBddwV2j+i7DZNwQprv/1v6jm/p1Q+6cX91NQoAAA==',
    },
})
Record({
    $id: Now.ID['ffe7cb56470ffa10f487c24fe16d43ac'],
    table: 'sys_hub_action_instance_v2',
    data: {
        action_type: 'f9d01dd2c31332002841b63b12d3aea1',
        action_type_parent: 'baf174c8c3c232002841b63b12d3aee4',
        flow: '60980ad71be48650759455342a4bcbff',
        order: '2',
        ui_id: 'd3f99c52-e69e-4331-a056-ac4c600627e0',
        values: 'H4sIAAAAAAAA/+1VUU/bMBD+K1GeNqmNkrS0pG/TEBIPAwkmXhhEZ/tSrDlOcJyWrsp/3zlJS4ENAWOakJa3O5/vvu/zF/ti7QO3stBHurKgOZ6tqiPhz3zG2DRiYRKxLOOTvTAOpyyOpgkLx4yzJPEHvnR1YxRhlEQTPopGozgM4/1xxCYjFsViBIgR1WnIkSoN8sIIihegapdYrz8bBIsijQJeG4PaNg2tC1mVClbnfRll+LVUgtb92cXlwC/BUEeLxp+tHyzZVYmpAoaKNh4UvM6pqXd08AK0m92nG7gP4bsZFIu+eypdkpYcnigc+HhrUQukcRmoCgd+DlqALczKn1lTU4JYixOtVtuKa6ltxzSH20r+oP7j0NVlSNR4r8I2THuFNuIUkuNJ6U6xy1hgaqNcoepcH3cUnLaYQa3sjrZ1Rf2wdJAdiA5hdnZdLE838w6lbtn1aFXBQW0jsNZIVlus3HGgwlaUHMpS6nlammIh280EJQ/mioIgU8WSZlZyroPOfQEJBMEh5Q/a9DkY6Uh8oTa0uWnJpze1m9vR6AGnLeeWcNoeFJVW3MjSfqLGC+xhNoM/9Tnbe8o5PLkzyg6YO6/fpqAQdVrpeQ1GSNCpwZsaK/vY8Kfbhdf5/qsD4B13AJ4L/t7m35DpnX8v1xt/782Mv/+PjN8jemfO/2t+D+Mnb8odi7QWr3a8DpUjQte6Lb7VYTgS6/UoYRkkUxhmU5EMxxPgw/2M45CGTnjM6VZOWEB2gTmaprlaFuZ7qgtStmvQ/xGeB0uQltT1ssJ4nveyxoED3DTehz7+6JHGdEqgrkgji92s+PEP+f4JvfIiwZxksOh1QjzfGZsGhxKVqH5hlc1N0g9IF/2A7TP6ZtdJNAnb7/9r+oav6eVP0gZGwjcKAAA=',
    },
})
Record({
    $id: Now.ID['ffe7cb56470ffa10f487c24fe16d43bc'],
    table: 'sys_hub_action_instance_v2',
    data: {
        action_type: 'f9d01dd2c31332002841b63b12d3aea1',
        action_type_parent: 'baf174c8c3c232002841b63b12d3aee4',
        flow: '60980ad71be48650759455342a4bcbff',
        order: '8',
        parent_ui_id: 'e28cc8f8-140d-476f-8dee-968297e59493',
        ui_id: 'aed6f66f-3093-4da5-893e-52cd612ee677',
        values: 'H4sIAAAAAAAA/+1VXU/bMBT9K1Geq8hpS6F9m4aQeBhIMPHCUOSPm9aaYwfbKXRV//uuE6eUsiHGOk2Tljffe33vOcfH8e06pdxLo8+181RzuF65c5HO0hPOj3NGpjkrSz45IkNyzIb58ZSRMeOM0nSQylA3BkHyaT7ho3w0GhIyPBnnbDJi+VCMKECOdZpWgJUWuLEC10uqmhBYrz9aoB5EkWe8sRa032wwL6SrFV3dxDKM8IVUAvPp7PZukNbUYkcPNp2t91J+VUOhKAOFG08Nbypsmpyf/gLafvdVD3cffpiBaxG7FzIEMRXw5GSQwqMHLQDHlVQ5GKQV1YJ6Y1fpzNsGA8haXGq12lYspPYd04o+OvkN+49JqCsBqfGownZZRIV6cYzkcFmHU+winjLVK2dUU+mLjkLQFkraKL+jbeOwH9QBcgDRISyvF+bhqp93JnXLLqJVhlO1XVHvrWSNBxeOAxS0olS0rqWeF7U1S9luRihVNle4yEplHnCmk3Odde7LUCCanWH8tA3fUCsDiU/YBjdvWvLFfRPmdjQi4KLl3BIu2oPCUsetrP0HbLyECHMz+F2fs6PXnMOnT0bZAfPk9ceCKgBdOD1vqBWS6sLCfQPOvzT81TbxPt9/DgCSiw7AW8E/2/wTMtH5z2LR+EcHM/7JXzJ+RPSPOf+P+Z0MX/1T7liktbjb8fqDsV8LbVCXLw0hIxH9nEiXICmUBUTCVolfQIIOoXOwibGJ1NLL8Brs5bKXF+TwA9550aBCWB6SDtjblesbnElQwv1Ayv6mxQHFMg7YPjMHu275hLTf/9fmgK/N3Xd6WrvvVwkAAA==',
    },
})
Record({
    $id: Now.ID['60f74f56470ffa10f487c24fe16d4300'],
    table: 'sys_hub_action_instance_v2',
    data: {
        action_type: 'f9d01dd2c31332002841b63b12d3aea1',
        action_type_parent: 'baf174c8c3c232002841b63b12d3aee4',
        compiled_snapshot: 'f9d01dd2c31332002841b63b12d3aea1',
        flow: 'e67c065f1be48650759455342a4bcb76',
        order: '8',
        parent_ui_id: 'e28cc8f8-140d-476f-8dee-968297e59493',
        ui_id: 'aed6f66f-3093-4da5-893e-52cd612ee677',
        values: 'H4sIAAAAAAAA/+VVTU/jMBD9K5HPVZS0pdDeVlRISCxIsOLComhiT1prHSfYDpCt+t93kjhpVRACLXtA29t82e+9zKvvNgy4k4U+19aB5nhT23PBFuyE8+M4jeZxmmV8dhSNo+N0HB/P02ia8hSAjZhs+qYoongez/gknkzGUTQ+mcbpbJLGYzEBxJj6NORInQZ5YQTFj6CqJrHZnBoEhyKJQ14Zg9ptt1QX0pYK6lvfRhm+lkpQnS3u7kesBEMnOjRssTkovReSghQVtV73mA4xurpsYlHwKidcieyTF35y6SvB+ZIqNNTAiaMRw2eHWiAByUBZHLEctABXmJotnKkoQaTFlVb10LGW2nVEc3i28jfdPI2avgyJGfciDGHiBerS2RIc3NDJ3FVm0KuQHG2nicAMKuVO93Ndw1XZfPluxEGq+ulCVbm+7BRhwwF736OyBALLhmeDvKOV3ayLp+se5JnUrSSeoio4qCEC54xMK9fA2TBU2GqcQ1lKvUpKUzzKdpig5OFKURBmqniiO61c6bDb2JBUhfCM8ss2fQtGNiS+0zE0vB0xW9tTBdbuqJCGyUPVIOmIeQpJq0IrQdJuQjPMjSzdN7rqET3w7ehv3ZIevbWafL7bxD0wO8c8J6AQdWL1qgIjJOjE4EOF1r20zfVQ+Jh73gGxd8+Pdmdeh+wN9CJ3sT8bXHYFb5+jT7PPyVeyj6fx5f3zz1wTjd/8Q99bwdYods8xT4X5leiClPpZRdFEeFcE0gZEk4RCEaR14NYY0KLBCk1QmEBq6WTzMh3Uwpc2+/wLPmbXd2jT2/VMohL2FbF6r2JOzBwmnXgHfvXF4NYXhyfv00wbz6L294Ws+9+8fPd/ADpeBIApCgAA',
    },
})
Record({
    $id: Now.ID['60f74f56470ffa10f487c24fe16d4305'],
    table: 'sys_hub_action_instance_v2',
    data: {
        action_type: 'f9d01dd2c31332002841b63b12d3aea1',
        action_type_parent: 'baf174c8c3c232002841b63b12d3aee4',
        compiled_snapshot: 'f9d01dd2c31332002841b63b12d3aea1',
        flow: 'e67c065f1be48650759455342a4bcb76',
        order: '12',
        parent_ui_id: '0b6d5147-182c-4501-a159-00170270a19a',
        ui_id: '0c217b52-3ba3-404c-ab74-d99fb09b841d',
        values: 'H4sIAAAAAAAA/+VV207jMBD9lcrPVeWk6fVtRYWExIIEK14oRL5MincdJ9gO0K367ztJnFIBQkXLPqD1m+dinzmeM77eECa8KsyJcZ4ZAZdrdyLJnNCpmEScziKeZWI8ojGd8DiazDhNuOB8TPpE1XEJSBrNorEYRsNhTGk8TSI+HvIolkMGEGGcYTlgpAVRWIn7B6ar2rDZHFlgHmQaDURlLRi/3aJfKldqtr4KYWgRd0pL9JP59U2flMziiR4smW9euA6FpBkHjaEXHaaXGP26rPeyEFWOuFLVGU9D5iJ4eicL9GBSDSeifQJPHowEBJIx7aBPcmYk84Vdk7m3FRqwaHlu9HoXcaeMbwvN2ZNTv/HmhNZxGWBlIpCw26aBoNacLZhnl3iy8JXd8VUoAa7lRELGKu2P9m1twHlZv3yb4hnXXXahq9yctYyQ3QF771E5BAFlXWeNvC0ru7wrHi86kMfKNJSEEnUhmN7tmPdW8crXcDYENDQc56wslVmlpS0eVJOMUPLBSuNmkOniEe90amUGbccOkFU2OEb7ojFfMavqIr7jMZi87RO3dkeaOfdcCnKY3lc1krawUELasNBQkDadUCcLq0r/Da96gAB82/9btfDRe60pZs+duAfmWTFPKdMAJnVmVTErFTOphfsKnH8tm4ud42PqOQBip54fTc+8DTkI6JXtdD+3d9Y6gnxGnyaf6VeSTyjjy+vnn6mGxu8O9L0WbITi9hSDF/rKLStKh3Kz7DSyJPMlCuQnCPx9lqS/bOMbc0Kn2RTkKOJcTOOITkazZDQaJjGrQU1YE47M4JdwYPz29rGwv1JT4Hu1SII2ezZA6PF1D/ucrcDe1oihDUteq/rL1/OxYXTAy3fD6FiBlu6NVugmEeRIlYe0bY0X0yg4e1fBufvQP20kRWParC80mP6bf/3mD9WXoZsHCwAA',
    },
})
Record({
    $id: Now.ID['a0f70f56470ffa10f487c24fe16d43f0'],
    table: 'sys_hub_action_instance_v2',
    data: {
        action_type: 'f9d01dd2c31332002841b63b12d3aea1',
        action_type_parent: 'baf174c8c3c232002841b63b12d3aee4',
        compiled_snapshot: 'f9d01dd2c31332002841b63b12d3aea1',
        flow: 'e67c065f1be48650759455342a4bcb76',
        order: '2',
        ui_id: 'd3f99c52-e69e-4331-a056-ac4c600627e0',
        values: 'H4sIAAAAAAAA/+VVTU/bQBD9K5ZPrZRYthMSnFtFhIREQYKKCwVrdnccVl2vze6akEb+7x1/JESAEKj0ENW3+dp98zxv9nrtA3ey0CfaOtAcL1f2RPgznzE2jViYRCzL+OQgjMMpi6NpwsIx4yxJ/IEvm7wxijBKogkfRaNRHIbx4ThikxGLYjECxIjyNORImQZ5YQTZD6CqxrFeHxkEhyKNAl4Zg9rVNcWFtKWC1VWfRh5+J5WguD+7vhn4JRg60aHxZ+tnofdCUsBQUerFBtNzjG5VNrYoeJUTrlRunKd95byPeCdzilBRAycKBz4+OtQCCUgGyuLAz0ELcIVZ+TNnKnJQ0+Jcq9U2405q1zWaw6OVv+nmcdjkZUid8Z6ErZn2BHXubA4OLulk7iqz5auQHG3HicAMKuWOdn1dwnnZ/PmuxAFTm+pCVbk+6xjxtwfs/I/KEggsmz4b5F1b2eVdsbzYgDyWuqWkb1EVHNTWAueMZJVr4Kx9VNhynENZSr1IS1M8yLaYoOTBQpERZKpY0p1WLnTQTWxArEJwTP55674CI5smvtMxVFwPfLuyRwqsfWqFOEzvqwZJ11jfQtqy0FKQtpPQFHMjS/eNrnrAHng9+Fu1sIO3RpMnT5O4A+ZJMY8pKESdWr2owAgJOjV4X6F1L2VzsQ18TD3vgLhRz492Zl6H3Avohe90t9Y76wK9fA4+TT6H+ySfvo29188/U00Yv7nQd0awFYrdUQyhp9boiXHFzyoMR2K9HiUsg2QKw2wqkuF4Anx4mHEc0qUTHnN6PBIW0NTBAk1d3y4L8yvVBXHdHdDryvNgCdIR315WGM/zPnZw0ACua+9Lb3/1iHX6b6BuiSOH3V3xS1nvf0MfW0fv+PebdXQsUQn7yjBsdhHmxKTDtBuOZ/uoD3pXfXD7pH/aUoomYfvt0Wr6b172mz+VUZ/2CQsAAA==',
    },
})
Record({
    $id: Now.ID['a0f74f56470ffa10f487c24fe16d4301'],
    table: 'sys_hub_action_instance_v2',
    data: {
        action_type: '634c025f1be48650759455342a4bcb9e',
        action_type_parent: 'cbe9869b1be48650759455342a4bcba7',
        compiled_snapshot: '634c025f1be48650759455342a4bcb9e',
        flow: 'e67c065f1be48650759455342a4bcb76',
        order: '9',
        parent_ui_id: 'e28cc8f8-140d-476f-8dee-968297e59493',
        ui_id: 'b5e8d520-6f3b-412f-be3b-dbb5dc735233',
        values: 'H4sIAAAAAAAA/+2W3WvbPBTG/xdfx8Fy5K/evbQUClsH67abMcyRdJQKFNmT5a5Z6P8++SNpmixZwlvGGLsp9NGR/ZxH5yfn8yoA7lRlbkzjwHC8WzY3IrgICpJxHieSMKR5mkRZUtAkmdEYKOMsl8EkUF1dLCmPDtYB8XUGFugrH8AqYBq98gC67aTV6tIiOBQlmfLWWjTu6cmvC9XUGpafxjKv8HulhV8PLj5/mQQ1WP9Mhza4WO0snWpKA0P90tW+T7esO8WiRP8CvpbejHvfb+mVFZ0dMgnw0aER6H1I0A1OggUYAa6yy43imxbvjH4W7pVxQ6MLeGzUd//WWTzZevFF8FiCRjRlY+YtWKHAlBa/tti4YKuwHKPr3a1X5RU4uHO25a61m0ArxbEZQhMoodXuclsbCt7V3XAMW1yfyi+c8Eq3C3M7RBlsHr11lG3jXWLdZdQ1PSYg7+6rb5tAr5Xp4xwXdcVBb5UiWH5/rVB3h23aBfO1kwCcs4q1rutgFbTqw/7pDeLPzg81LryfcgF1rcy8rG31oHoPvqXFdK79P1Opq2/ee6PmZjpgM/UnC9Nrr1/18qdxeN76x/SmWvXRKB9OD1WcSxpHPAkTyXlIRUxCRooiLAjmAmdIJZPB0yRols2lhqZ5jtE3UX5tuxCGUMf4yuFsui3cqtr950094JjU0+T/wp0lMk+o4ISxnMJuncyfoREVb7v8+hnptWfKj87LDurHZ+usS+AE8+tL4Gp0/6Fzfzu4P9LYeC00ftzMfOdOuFuL44UQv9qFkEdR9PJKOAD+6xP/e7g+wO8m5pfwboL+LeTSpGBZAlkoeRqHlJA4zDEF/ycTGBWC5Cz5k8iN4qPDz/cH3G87+mGe+tZKJX72ff5F9XnYnuB8F9ubqwPtnAPq7B+ofwOogokio3kSghBpSJlMQ0bTNMxiUnDqaY2i9E8CteB5jJzkxH+R9sedw/5kb37vHIN1KDoV1q3q82A9wf0urLdr+4faOgda+g/avwHajKQ0i3MWsmxGQgpIPb6UhLMkjmfIU5Hks1eE9ssPaodW6PYOAAA=',
    },
})
Record({
    $id: Now.ID['a8f74f56470ffa10f487c24fe16d4301'],
    table: 'sys_hub_action_instance_v2',
    data: {
        action_type: 'f9d01dd2c31332002841b63b12d3aea1',
        action_type_parent: 'baf174c8c3c232002841b63b12d3aee4',
        compiled_snapshot: 'f9d01dd2c31332002841b63b12d3aea1',
        flow: 'e67c065f1be48650759455342a4bcb76',
        order: '10',
        parent_ui_id: 'e28cc8f8-140d-476f-8dee-968297e59493',
        ui_id: '27850384-1a4b-4ea2-834f-ea2695210369',
        values: 'H4sIAAAAAAAA/+VVW0/bMBT+K5Wfq8pJmtL2baJCQmIw0YmXFSLHPinWXCf4AnRV//uOcykVIFQ09sCWt3Ozv/P5fCc/NoRxJ0t9qq1jmsN8bU8FmZI4ZkCZKKIchuNRSo/SyTBNk2HMhjnP0wnpExnyhiBoNIlGPImSJKY0Hg+jfJTkUSwSBhBhnmYrwEwDvDQC7XumfHBsNscGmAORRQPujQHttluMC2krxdZXbRp6+K1UAuNk+uO6Typm8EQHhkw3z0KHQlIsB4Wplx2m5xjdugq2KLlfIa5Mds6ztnLWRnqnM4xgUYAT0T6BRwdaAAIpmLLQJyumBXOlWZOpMx4d2LS40Gq9y7iV2jWNrtijlb/w5iENeQVgZ7wlYWdmLUGNu5gxx+Z4Mnfe7PgqJQfbcCKgYF65431fk3BRhZdvShzLVVddKr/S5w0jZHfA3nt4iyCgCn0G5E1bxfy2fLjsQJ5IXVPStqhKztTOYs4ZmXsX4GwIKKg5XrGqknqZVaa8l3UxQlkNlgqNQaHKB7zTyqUeNBM7QFbZ4AT9s9p9xYwMTXzFY7B42yd2bY8Vs/apFeQwu/MBSdNY20JWs1BTkNWTEIq5kZX7glfdQwt82/9TteTpW6PJJ0+TuAfmSTGPGVMAOrN66ZkRkunMwJ0H617K5nIXeJ96DoDYqed7PTOvQ24F9MJ3tl/bO28CrXzSD5PP+DPJp23j0+vnr6mGxm8u9L0RrIVi9xSDFzpYeEoTkdwEw9vG2iw6wSzIdEG+Bc4sYgTRm3uOL20LrxQG+4vmsDqNijTBeyHKEzqOIzqajOICRpSLgPiI1ulIG/4vDszf3jyU5memS3zMBlkr3B6+XaVQqKJn9wANXir9n+zxfUvrgAnpltaJBCXsKyPTbSxASEho1ozQs63VBntXbXD34/+w1RWNaP19ogX23/z/r38DKWztyi8LAAA=',
    },
})
Record({
    $id: Now.ID['d0f70f56470ffa10f487c24fe16d43ef'],
    table: 'sys_hub_action_instance_v2',
    data: {
        action_type: '9d884af71b0f8e10bf7ea82b234bcbee',
        action_type_parent: '7e1886b71b0f8e10bf7ea82b234bcb9e',
        compiled_snapshot: '9d884af71b0f8e10bf7ea82b234bcbee',
        flow: 'e67c065f1be48650759455342a4bcb76',
        order: '1',
        ui_id: '39bfa97a-f7d9-46ac-8fce-04b6c2ced09b',
        values: 'H4sIAAAAAAAA/42TW4vbMBCF/4ueHWM7zvWtZAkE2i407b4sixnJo0Qgy15dspuG/PeOYpOk3UL76KMzmjPfyM8nBsKr1myM82AEbo9uU7MlG3M+y3m2yLmUYjrJimzGi3y24FnJBZ+XLGEq+ib1fF6CjF45xzzjcoYwL3gxjj5ZkM9Ag+RUNRqv/JGUA+gQpdNpZRE81lWeimAtGVKLrwGdr2Rrz2fy1sp1Go5PQwkpYq90TV62fH5JWAeW7vdo2fL0x9H/BtTAUf+e8GNmf+yiYlEiNRA4SJ+H2m93emvrGCdPGL57NDVSDgnaYcIaMDX41h6vCgGoH42+CXtlfD9oA+9O/aSu4yK5a7xk7xVoRFM5swtgawWmukt6dVYDO6rY3I7lA3jYehuED/aKtFUCXY+tRglB+9W91hseu/hU+hIPXP87i2h1aMzXnia73n23zeAoJ3YRU5x7gCC3+/btynStzIXocKhbAfrOimDFfq1Qx33LoHV1WV/CwHurePBxihML6vvHHfbi37aIGhuKVDXQdcrsqs62B3WJQVM16U7TRyp1+0bxndqZtP+RUtovpGvSHy7yE1gVUX2ha6g4dvxhFL3xy2+2kNOsKHMYwTgTo7LkkxGfLBajRZlBwWfTbMozdk6YO7qVBuduJGmI6jVEDj3XgWDV7yeWCKs6/4lCHXCAdX75BYPYRr/wAwAA',
    },
})
Record({
    $id: Now.ID['e4f70f56470ffa10f487c24fe16d43f5'],
    table: 'sys_hub_action_instance_v2',
    data: {
        action_type: 'f8f2e9920b10030085c083eb37673abd',
        action_type_parent: 'bae0a1120b10030085c083eb37673a92',
        compiled_snapshot: 'f8f2e9920b10030085c083eb37673abd',
        flow: 'e67c065f1be48650759455342a4bcb76',
        order: '4',
        parent_ui_id: '8d929e4f-3c2a-42b4-8a2c-7e0b824005b1',
        ui_id: 'afccb52e-4c66-4343-b9fe-761034565f78',
        values: 'H4sIAAAAAAAA/+2Y32/aOhTH/5XKz5QlQAvhrSqq1Ku7TWq3vZQqcuwT8JVxmO10ZRH/+z2JnZDByuC296ESjz4/7O85OR+c8FAQyqzI1K0ylioG9ytzy8mYJEkyDJMgCpM0ZZcXQS8YJr1wGCXBIGFJFJIOEWXccJT2IIp6QRIGQT8IRhcsGPUh6Q8vh33KAoxTdAEYqYFlmuP6icq8NBTFtQZqgcdhl+Vag7LrNfq5MEtJV998GFrYXEiOfjJ+eOyQJdW4owVNxsWW61BJkiYgMfSu1rSt0a6W5ZpnLF+grljUxr995sR7zm4n6MGkUk7QIfBsQXFAHSmVBjpkQRWnNtMrMrY6RwPWzD8ruWoi5kJZV+eCPhvxEw/u98q4FLAw5nvQLGPfH2dOJ9TSe9yZ2Vw37coEA+NawiGlubTXbZsL+LwsH7xLsTSRdXYm84X65BpCmg1ajyM3KAKWZZ2lcldWej/PftzVIm+EqjriS5QZo7JZUWu1SHJbyikISKhavKDLpVCzeKmzJ1Elo5RFdyZx0U1l9gPPNGKmum5gu9hV2r1B+6Qyf6NalEV8xG0wed0hZmWuJTVmUwr2MP6el0pcYb6EuOqCa0GZx7RY2is85Qm85nXntZwkbO9Qss0MOh0bTJ5jKgFUbNQsp5oLqmIN33MwdpeVu8ZxHDIHqKuR+eLlban1wFTLuPL9ykuVdvbJOTwu4X5cvGXDixu03+AyCt4RLr6sd8/L/4ZKEO4bRj7aDB9Kx+KpjFMBsn211I5dQlqe4xA5QFWNyJU/4+zGy3pJroemWv4Omip/C5rekdC8fMmMguA9cXO6Zg5gh+2dUuhvhvGfLNdqDzrxXJhqpF5EqBVxHEoHiKxR+sup3CZpW/x/Aal/AukE0osgDS72zmjrDajBgWWKi/JM08LJ3QVgrtTq60NR9KMkpdGQnqdDHp0PLik7H6UMzvH0S9ZjwIMo6eIU0hno9fpxF75X73ccqge0ofmWyiWYP7XFg9o4tU9qw9pcn/WOHtjBW31dvTNeTy+Mf7r09g5pGm2GkufYWWrbn1fF1J8+JeMpUZmCKelMSRkVl1NZmTECq2ocla0o1mtnyTX1G4St5Sab05WpIg2bA8ehrqy/WOKKIm9/iz9BDuhJDe4kh7OJa8pumzywjU7XF7Fzw977gGqnD19E+6a9eLObdnDi9rXcokwRN19BeI3iz+Ybwvz4L6xv2dVSFAAA',
    },
})
Record({
    $id: Now.ID['37e7cb56470ffa10f487c24fe16d43b9'],
    table: 'sys_hub_flow_logic_instance_v2',
    data: {
        block: '9185ad174787f21051a3e84d416d43df',
        flow: '60980ad71be48650759455342a4bcbff',
        flow_variables_assigned: 'manager_approved',
        logic_definition: '4f787d1e0f9b0010ecf0cc52ff767ea0',
        order: '6',
        parent_ui_id: 'e70f200a-2e43-42cf-832a-cce9830b9b1e',
        ui_id: '14c48eae-a6c8-4a11-8b9f-97bc61f20396',
        values: 'H4sIAAAAAAAA/+1VTW/bMAz9LzonmZ3PJrcCRYEA3QqsWS9DYVAylQiTJVeWk2ZB/vvI2E7Qotuw44CeYj1+PT6SyEH4OpZ1rFb+uqrM2onF96eeMI4x+j4IBwWKhSjAwRpDBmUZ/BZz0RNbsDWbUvrOTVVa2D+2UAz00xNqY2wesE1aQqBcEYNYHN6Y4r7EzIJES8ErCv50C7biFCYnZKTlLJXJPJVaq+kkGSYzOUxnc5mMpZKzEfl1we/w/H0HXJYs0nuL4AjwIWd6SU/gS0SXk9dCM5Meh+cQfdifkYCQ3zt7ATbGRUon2PmlMj8p9zhhP43UqcLGdn5mrWgNrDbeKLwvo/GuQSJI28Yob+vCfWkaYblRQ21jJ7duxWrhm9fD6Kx1RSWx5LaYZ0taP2z87mvH6da4kwKt0XoF9vyCGIORdcSKJ1ib1Vv5GujuvTmixYLKZgXJb9w64xmYUylqrhisLT0G2vodUeQ9HIBiJQakOQxuCb85wY8QDMvymdJQMJf85sxzjUveE6AlmYwh7+srrfvj+XzUv5pi2p+oGUICw6mcpuJ4GkH2XHNnjZitJlmjPDlUKpgyXhOFLbbtH59445vqzWUw2zu/Nmrpqggk3sO+OtHQf1zXue7W+p929e/X9nFfH/f1f99XjspUxGrFFJbdfxAb9rRkfGgXaOfDD+7ngh1/AZAH2wPNBgAA',
    },
})
Record({
    $id: Now.ID['3be7cb56470ffa10f487c24fe16d43c1'],
    table: 'sys_hub_flow_logic_instance_v2',
    data: {
        block: '1d85ad174787f21051a3e84d416d43e3',
        connected_to: 'e28cc8f8-140d-476f-8dee-968297e59493',
        flow: '60980ad71be48650759455342a4bcbff',
        logic_definition: '1f781bf3c32232002841b63b12d3aee6',
        order: '11',
        ui_id: '0b6d5147-182c-4501-a159-00170270a19a',
        values: 'H4sIAAAAAAAA/6tWyi8tKSgtKQ7JdywuzkzPU7KKjtVRyswDiUHYZYlFmYlJOalQbkpqcmZxZn5eCEjME0ldSmVeYm5mMrJQeX5RdlpOfjlCrBYAD1ouqHEAAAA=',
    },
})
Record({
    $id: Now.ID['7be7cb56470ffa10f487c24fe16d43bc'],
    table: 'sys_hub_flow_logic_instance_v2',
    data: {
        block: '1d85ad174787f21051a3e84d416d43e0',
        flow: '60980ad71be48650759455342a4bcbff',
        logic_definition: 'af4e1945c3e232002841b63b12d3ae3e',
        order: '7',
        ui_id: 'e28cc8f8-140d-476f-8dee-968297e59493',
        values: 'H4sIAAAAAAAA/+1VyW7bMBD9FUFnW9BiO7FvQYoABdoEbYJc2lQYkSObKE0qJGXHFfTvHWpJjCZBi6CHHnoT32xvlgc1oa5dVTt7o8+sFWsVrr7cTUKhPEbfTahgi+EqZFpx4YRWeQdMwh3I2hu2oGCNJoCqMnqHPNAmMHhfo3WBsIGuUBFYHILBkUK5sJWEw+3bM7CNkNzgwLYCQ5wcWVbNLyZ3qDCXUKCkQtfOCLWmcMHpVcZQJkuWsCxdZGkcp6ezpFhkRZLyDBAy8hsDz8fmgw8dMnl1Kr4e4XaspA33tJJ4EuKDQ8WRSpcgLU583xycNodHxCDwKyWfgI1QjtKF3vnBih+UO53PvWOJ1CPD3vj4zIfR9jDbaMHwqvIEe8RBIYcYpmW9VZd9H34pWEIt3bgUQmpL+bDypD2LgVJ5vdH7z2PBC6G6Bgej1Azk4wscjaGoHVq/GJS4pUT5lvZMw8n9skUXTFy20VrSIyql3lNRf4kRME88ohlBdEH4uw6+BSN8Fx8pTXcLnmYBVrC8u1pK5wy10HZjye9rT6hvcGgl76dBDpYZUbkzqrPDgXU7eX7yR9feNB3D3UAiGk4yH2+3bb/WcZxxT+Hb5aemOaedOuR5ErHa0Mhc1N9zXhxG36bJlkUJyxOYlid8OZ0tgE1PS4bTeFYsWMqQx8tiLNW2zxX0j7D6G6pcwrycJ/H8ZVXOFi+p8gU9vi7F9DdS9DP6QyXGcfxfisdSFDbvJTX01hV/sxLvvOz6Cra/G45MWCJy47H34z/KGw50AIIdQ3ttvvsWnrD2JyLk8fjtBgAA',
    },
})
Record({
    $id: Now.ID['f7e7cb56470ffa10f487c24fe16d43b1'],
    table: 'sys_hub_flow_logic_instance_v2',
    data: {
        block: '9d85ad174787f21051a3e84d416d43da',
        flow: '60980ad71be48650759455342a4bcbff',
        logic_definition: 'af4e1945c3e232002841b63b12d3ae3e',
        order: '3',
        ui_id: '8d929e4f-3c2a-42b4-8a2c-7e0b824005b1',
        values: 'H4sIAAAAAAAA/+1VTW/bMAz9K5nPjuGPJG1yKzoUGNCtwFr0shUGLdGJMEXyJDltZvi/j/JHGqwpVgzbbTfrkSLfo/jgJtC1q2pn7/SFtWKtgtWXhzAQymP03QQKthisAqYVF05olXdAGOxA1j5wrddr5BOhJrVFMxF2orSbbEHBGg3lcWErCfv7N6azjZDc4MCjAkPdHEVWzS8ht68wl1CgpKq3zgi1puuC06mMoUyWLGFZusjSOE7PZ0mxyIok5RkgZJQ3XrwcZU2uOyR8Va/vR7gdO2nDPa0kDgN8cqg4UusSpMUwIDkcnDb7A2IQ+I2Sz8BGKEflAp/8ZMUPqp3O5z6xRNLIsA8ejvkwxx5mGy0Y3lSeYI84KORwh2lZb9WnXod/ASyhlm58AUJo9DnHypP2LAZK5e1GP34eG14J1QkcglIzkIcTOBpDUTu0/mFQ4pYK5VuoKhpOXhm9E91l4rKN1pIOUSn1IzX1OxYB88QjmhFEV4S/7+B7MMKr+Ehlul3wNAuwguXdPlI5Z0hC240l/157Qr3AQUreT4MSLDOichfUZ4cD6zZ8ucxHe9w0l/RIDnmeRKw2NAMXaapLQLFv23df6zjOeNNky6KE5RlMyzO+nM4WwKbnJcNpPCsWLGXI42URDfvcti8N8M/6/A3nLGFezpN4fto5s8Up55zwzOt2SX9jF//Ab3RLHMf/7XJsF2Hzfu0HbV3zP3bLg7dG38H2e8ORCUtE7jz2YfxD+MCeFkCwY+hRm29ewjPW/gRT2HdvawYAAA==',
    },
})
Record({
    $id: Now.ID['ffe7cb56470ffa10f487c24fe16d43b5'],
    table: 'sys_hub_flow_logic_instance_v2',
    data: {
        block: 'd585ad174787f21051a3e84d416d43dd',
        flow: '60980ad71be48650759455342a4bcbff',
        logic_definition: 'af4e1945c3e232002841b63b12d3ae3e',
        order: '5',
        parent_ui_id: '8d929e4f-3c2a-42b4-8a2c-7e0b824005b1',
        ui_id: 'e70f200a-2e43-42cf-832a-cce9830b9b1e',
        values: 'H4sIAAAAAAAA/+1UTW/bMAz9K4PPjuHvNrkFGwoM2FZgLXrZCoOW6ESYLHmWnDQL8t9H+SMN2gQbhh53sx5F8j3q0XtPd7bprLnXS2PESnmLb4++J5TD6HvvKajRW3hMKy6s0KroAd/bgOxcYNk0rd4gJ4gL00jYPbyOsLWQvMWxegMt1bDYeov9i5DdNVhIKFFSgTvbCrWidMHpVIVQRXMWsSTOkzgM4+s0KvOkjGKeAEJC96bE9xPZd596xL+owvUj3EyddMsdrSj0PXyyqDjRX1QgDfpeDYqD1e3uiLQI/FbJZ2AtlKVynrv8ZMQvqh1nmbtYIWlkOASPx2Ic2QCztRYMbxtHcEAslHLMYVp2tfoy6HDDxgo6aadhE9IZqoeNI+1YjJSqu7Xefp0a3gjVCxyDUjOQxxNYGkPZWTTuYVBiTYWKGpqGhlO4xxR9MnGpg5WkQ1BJvaWmzjkBMEc8oBlBcEP4hx5+gFY4FZ+pDCUPNEswghW9y6icbUnCoR9L8bNzhAaBo5RimAZdMKwVjV1Snw2OrA/+a4ueuHO/h4qxMotxlrI8n6VJmszKeYWzqzwKkzTLs+rqOoDeqiALY8Hi4fC9C8OEw0Vrv1XZt9iLOWRVFoXZ+b1I83N7cWYjLi9D/IdlcM/3l7sQhuH/ZThdBmGKwdSjtr75P+/CozP+0MEMvuHIhCEi9w77OP3VXWBHBhDsFNrq9oeT8IwdfgPuut75HwYAAA==',
    },
})
Record({
    $id: Now.ID['64f70f56470ffa10f487c24fe16d43fc'],
    table: 'sys_hub_flow_logic_instance_v2',
    data: {
        block: '9185ad174787f21051a3e84d416d43df',
        flow: 'e67c065f1be48650759455342a4bcb76',
        flow_variables_assigned: 'manager_approved',
        logic_definition: '4f787d1e0f9b0010ecf0cc52ff767ea0',
        order: '6',
        parent_ui_id: 'e70f200a-2e43-42cf-832a-cce9830b9b1e',
        ui_id: '14c48eae-a6c8-4a11-8b9f-97bc61f20396',
        values: 'H4sIAAAAAAAA/+1VTY/aMBD9K5XPQMP3wm21CAlp25UK3Uu1isaODVYdO2s7sCniv3eGJNBWq6rHHjjFfvP15o1HOTJXxqKMYePuQ9Bby+bfXjpMW8LwfGTKuMOj22qxsiGCFXJdhVXG5kwpPu3zZNbnSonJOBkkUz7oT2c8GXHBZ4phGvLLwcJW+hSKwru9zBC3kMv3LXswJZn6eM50KAxUzw0UPX46rACP0VF6Nj8ysdMm87JlTeWGf6U1HWIKA1yaa/0P/8QsVgVZuHNGgm2AxybTBrl9XIIJxND5jNglHSbforQZhs8V2TqUN4PofHVBvITsyZorsNM2YkZGzm9B/8Cio4T8lMRGhaxtl2vaqFTDagER1qiUiKVvXMXOaSFDLVEmFZQmPvyK1Q5PRdTO1iERuGmjnSlz+7mWhV0StENRTc8NvPh9ZK21DMhTFqQFNdd0qtY7d/jSNrLU9ixbYzROgLncIEaveRmJ8pGVevPnMGro3XFII3Msm+Y4TG23KU1Un0thc3lva/DSo1eOFGkDeiBIiR4OCnpLxBdn+Bm8Jlk+YRoMppJfrX4t5XkZAJ/ceARZV90p1R3NZsPu3UT2u2MxlZDAYMInfXbqsFCFBwMhXAXFSaavJfVay9uolNazoBDhdRHvkdReNoKcXmhTaj63Lb1t6W1L/9ctzaTQAXluiNSq/auSocJHTOt6hQ7Of6cOr9jpJzt25GyfBwAA',
    },
})
Record({
    $id: Now.ID['a4f70f56470ffa10f487c24fe16d43f4'],
    table: 'sys_hub_flow_logic_instance_v2',
    data: {
        block: '9d85ad174787f21051a3e84d416d43da',
        flow: 'e67c065f1be48650759455342a4bcb76',
        logic_definition: 'af4e1945c3e232002841b63b12d3ae3e',
        order: '3',
        ui_id: '8d929e4f-3c2a-42b4-8a2c-7e0b824005b1',
        values: 'H4sIAAAAAAAA/+1Vy27bMBD8FZdnWdDDdiLfAgcBCrgN0AS5tIGwIimbKE2qJOXEFfTvXUryA42LJmh7600cLndnhhyoIbp2Ve3svb6yVqwUmX9+DIhQHsPvhijYcDInVCsmnNAq74CAbEHWfmOpVyvORkKNasvNSNiR0m60AQUrbrCOCVtJ2D28spyuhWSGDzwqMDjN4c68+WlLMOxWRlDGGY1pmszSJIqSy0lczNIiTlgKHFJsKKHgEksXewGjZYcEv1TmdpXHrTNCrYb1cuhytwe1YZ5VHAWEPzuuGEc+JUjLA4JqGDhtdgfEcGC3Sh6BtVAO2xFf/GzFdxyYTKe+sOQokfJ+87DMBxt7uLwGB0ilpq42Qylda0G57c1hvIRausUp1hfcVl5qf8RBIfentaw36mPvCDk02N8aInhdOeOVV+qpDzrKu7V++rRneSNU58qwKTUFeViBQ++K2nk+DeGSb7BRvoGqQkfzyuit6A4jl024krgIS6mfcKh/lyFQTzxEYyG8Qfy6gx/ACK/iA7bp3o+nWYAVNO/eMLZDmzhpA2J3diHB2qNIdDf/VnuKveRBXN77449QIyp3hZO3fNDRBi8jcZKGplngXTvO8jiktUFXXKixLwLFrm3ffamjKGVNk2ZFCdkFjMsLlo0nM6Djy5LycTQpZjShnEVZEQ6paNuXMfpnc96Wvwym5TSOpufzN5mdy9+Z5L0xdMlvQudv/JWZi6Lof+j+OHTC5n1UBm3d8L+YuUcfsH7mwWsqLFK799j7/d/Kb+zwcQl6Cj1p89WLOmLtD5KbPgf3BgAA',
    },
})
Record({
    $id: Now.ID['e8f70f56470ffa10f487c24fe16d43ff'],
    table: 'sys_hub_flow_logic_instance_v2',
    data: {
        block: '1d85ad174787f21051a3e84d416d43e0',
        flow: 'e67c065f1be48650759455342a4bcb76',
        logic_definition: 'af4e1945c3e232002841b63b12d3ae3e',
        order: '7',
        ui_id: 'e28cc8f8-140d-476f-8dee-968297e59493',
        values: 'H4sIAAAAAAAA/+1Vy27bMBD8FYFnWdDDduLcAgcBCqQJ2gS9tKmwIimbKE0qJOVEFfTvXerhBE2KNm0PPfRmDpe7M6MduCW6dlXt7I0+tVZsFDn5eBsSoTyGv1uiYMfJCaFaMeGEVnkPhGQPsvYXO1Cw4SaAqjJ6z1mgTWD4Xc2tC4QNdMUVgkUTjIX4lAlbSWg+/H4HuhWSGT6yrcAgJ4c3J+13V4LhgDKGMlnRhGbpMkvjOD2eJ8UyK5KUZcAhw4YSCi6xdD3JDC56JPyhftdUHrfOCLUZzxdjl+sJ1IZ5VkkcEv7guGIc+ZQgLQ+9bAZOm+aAGA7sSslHYCuUw3bEFz9Y8RUHpouFLyw5SqR8uDwc89HZAS7PwAFSqamrzVhKt1pQbgdzGC+hlm79FBsKriovdXjioJDTay3rnbocHCGHBtOHRKS2SIJXXqmnPuoor7f6/v3E8lyo3pXxUmoK8nACh94VtfN8WsIl32GjfIe7gY7mfkFE/xi57KKNxENUSn2PQ/32RkA98QiNhegc8bMe/gBGeBVvsU2/P55mAVbQvN90bIc2cdKFxDZ2LcHaR5Hobn5Xe4qD5FFcPvjjn1AjKneKk/d81NGFz4PzJDNt23Pej7SicbHzKQFd96mO44x5Up8v37XtGlfDcZYnEa0NmuiiIRV50Uy1bZutihJWRzArj9hqNl8CnR2XlM/iebGkKeUsXhXTqK57nsN/hNXrsr2CRblI4sXL2Z4vX8r2C6l+ZaDTnwTaW/SLeY7j+H+g/zjQwuZDDEdt/fC/mOdbH95h5sFrKixSu/HYm+n/0l80uFyCPoXutfniRT1i3TfXyOcHeQcAAA==',
    },
})
Record({
    $id: Now.ID['e8f74f56470ffa10f487c24fe16d4304'],
    table: 'sys_hub_flow_logic_instance_v2',
    data: {
        block: '1d85ad174787f21051a3e84d416d43e3',
        connected_to: 'e28cc8f8-140d-476f-8dee-968297e59493',
        flow: 'e67c065f1be48650759455342a4bcb76',
        logic_definition: '1f781bf3c32232002841b63b12d3aee6',
        order: '11',
        ui_id: '0b6d5147-182c-4501-a159-00170270a19a',
        values: 'H4sIAAAAAAAA/6tWyi8tKSgtKQ7JdywuzkzPU7KKjtVRyswDiUHYZYlFmYlJOalQbkpqcmZxZn5eCEjME0ldSmVeYm5mMrJQeX5RdlpOfjlCrBYAD1ouqHEAAAA=',
    },
})
Record({
    $id: Now.ID['ecf70f56470ffa10f487c24fe16d43f8'],
    table: 'sys_hub_flow_logic_instance_v2',
    data: {
        block: 'd585ad174787f21051a3e84d416d43dd',
        flow: 'e67c065f1be48650759455342a4bcb76',
        logic_definition: 'af4e1945c3e232002841b63b12d3ae3e',
        order: '5',
        parent_ui_id: '8d929e4f-3c2a-42b4-8a2c-7e0b824005b1',
        ui_id: 'e70f200a-2e43-42cf-832a-cce9830b9b1e',
        values: 'H4sIAAAAAAAA/+1Vy27bMBD8lYJnWdA7sW+GgwAF0gZoglzaQFjxEROlRFWk7LiC/71LPWyjcdAGzbE3c5a7nBntwB3Rra1ba+710hj5VJHF10ePyMph+LsjFZScLAjVFZNW6irvAY9sQLWusKzrRm84Q4hJUyvYPbys0LVUrOHj9BoanGF5QxbdbyXJsFEEIMI5DWkcZXEUBNFlEhZZXIQRi4FDjAMVFFzh1dVE68NNj3iv8rW72uHGNrJ6Gs8345S7CdQNc6zCwCP82fKKIfuFAGW4R0qoGFjd7A5Iw4HdVuoIrGVlcRxxl5+N/IkPRmnqLgqOEikfiodjPjo2wOIKLCCVltq2Ga/StZaUm8EcxgW0yq5OseHCbe2kDi0WCjV1a9WW1efBEXIYMH0gRFqDJHjtlDrqow5xt9bbLxPLa1n1roxFpSmowwksele01vHpCFe8xEF5CXWNjuZuAWTfjFxK/0nhwRdKb/FRt20+UEfcR2PBv0b8qocfoJFOxSccg80DzQKMpHm/mTgObeJk7xGzMysFxhxForv5j9ZRHCSP4vLBH9dCG1nbJb684aOOvfdy0U92vOtAUFqkEZ8lNMtmSZzEs2Iu+OwiC4M4SbNUXFz60C88qNxYsHy//9YGQczg1YC819i3pWsOqUjDID2friQ7l64zuXpjpKI/RMp9z79MVBAE/yP1z5GSJh+CMGrrH3/HRD26+AxvHrym0iC1e4d9nP5hXGGHyyXpKbTVzXcn6ojtfwG5UpIaqwYAAA==',
    },
})
Record({
    $id: Now.ID['e67c065f1be48650759455342a4bcb76'],
    table: 'sys_hub_flow_snapshot',
    data: {
        access: 'public',
        active: 'true',
        attributes:
            'browserActivatedIn=chrome,integrationActivatedIn=standalone,labelCacheCleanUpExecuted=true,viewActivatedIn=naturalLanguage',
        callable_by_client_api: 'false',
        description: 'Update  Identity Information (self)',
        flow_priority: 'MEDIUM',
        internal_name: 'update__identity_information_self',
        label_cache:
            '[{"name":"39bfa97a-f7d9-46ac-8fce-04b6c2ced09b.manager.name","label":"1 - Alert Get Manager for First Stage Approval➛manager➛Name","reference":"","reference_display":"Name","type":"string","base_type":"string","parent_table_name":"sys_user","column_name":"name","usedInstances":{"d3f99c52-e69e-4331-a056-ac4c600627e0":["work_notes"]}},{"name":"flow_variable.manager_approved","label":"Flow Variables➛manager approved","reference":"","reference_display":"","type":"boolean","base_type":"boolean","column_name":"","choices":[],"attributes":{"sourceUiUniqueId":"","sourceType":"","sourceId":"","uiUniqueId":"a1b054ad-f8ff-4993-86e1-5c7ea0a26b61"}},{"name":"afccb52e-4c66-4343-b9fe-761034565f78.approval_state","label":"4 - Ask For Approval➛Approval State","reference_display":"Approval State","type":"choice","base_type":"choice","choices":[{"label":"-- None --","value":"","order":0.0},{"label":"Not Yet Requested","value":"not requested","order":1.0},{"label":"Requested","value":"requested","order":2.0},{"label":"Approved","value":"approved","order":3.0},{"label":"Rejected","value":"rejected","order":4.0},{"label":"Cancelled","value":"cancelled","order":5.0},{"label":"No Longer Required","value":"not_required","order":6.0},{"label":"Skipped","value":"skipped","order":7.0}],"attributes":{"element_mapping_provider":"com.glide.flow_design.action.data.FlowDesignVariableMapper"}},{"name":"39bfa97a-f7d9-46ac-8fce-04b6c2ced09b.manager","label":"1 - Alert Get Manager for First Stage Approval➛manager","reference":"sys_user","reference_display":"User","type":"reference","base_type":"reference","attributes":{"uiType":"reference","uiTypeLabel":"Reference","element_mapping_provider":"com.glide.flow_design.action.data.FlowDesignVariableMapper","uiUniqueId":"c464d03d-430b-4b1a-ade3-4caefe794b13"}},{"name":"Created_1.current.request_for.email","label":"Trigger - Record Created➛Request Record➛Request For➛Email","reference":"","reference_display":"Email","type":"string","base_type":"string","parent_table_name":"x_aleen_snguardian_identity","column_name":"email"},{"name":"27850384-1a4b-4ea2-834f-ea2695210369.record.opened_by.mobile_phone","label":"10 - Update Record➛Request Record➛Opened by➛Mobile phone","reference":"","reference_display":"Mobile phone","type":"ph_number","base_type":"ph_number","parent_table_name":"sys_user","column_name":"mobile_phone"},{"name":"Created_1.table_name","label":"Trigger - Record Created➛Request Table","reference":"x_aleen_snguardian_request","reference_display":"Request","type":"table_name","base_type":"table_name","attributes":{"test_input_hidden":"true"}},{"name":"Created_1.current","label":"Trigger - Record Created➛Request Record","reference":"x_aleen_snguardian_request","reference_display":"Request","type":"reference","base_type":"reference","attributes":{}},{"name":"Created_1.current.request_for","label":"Trigger - Record Created➛Request Record➛Request For","reference":"x_aleen_snguardian_identity","reference_display":"Identity","type":"reference","base_type":"reference","parent_table_name":"x_aleen_snguardian_request","column_name":"request_for"},{"name":"Created_1.current.request_for.sys_id","label":"Trigger - Record Created➛Request Record➛Request For➛Sys ID","reference":"","reference_display":"Sys ID","type":"GUID","base_type":"GUID","parent_table_name":"x_aleen_snguardian_identity","column_name":"sys_id"},{"name":"Created_1.current.number","label":"Trigger - Record Created➛Request Record➛Number","reference":"","reference_display":"Number","type":"string","base_type":"string","parent_table_name":"x_aleen_snguardian_request","column_name":"number"},{"name":"Created_1.current.sys_id","label":"Trigger - Record Created➛Request Record➛Sys ID","reference":"","reference_display":"Sys ID","type":"GUID","base_type":"GUID","parent_table_name":"x_aleen_snguardian_request","column_name":"sys_id"},{"name":"Created_1.current.opened_by.email","label":"Trigger - Record Created➛Request Record➛Opened by➛Email","reference":"","reference_display":"Email","type":"email","base_type":"email","parent_table_name":"sys_user","column_name":"email"},{"name":"Created_1.current.opened_by.first_name","label":"Trigger - Record Created➛Request Record➛Opened by➛First name","reference":"","reference_display":"First name","type":"string","base_type":"string","parent_table_name":"sys_user","column_name":"first_name"},{"name":"Created_1.current.opened_by","label":"Trigger - Record Created➛Request Record➛Opened by","reference":"sys_user","reference_display":"User","type":"reference","base_type":"reference","parent_table_name":"x_aleen_snguardian_request","column_name":"opened_by"},{"name":"Created_1.current.opened_by.last_name","label":"Trigger - Record Created➛Request Record➛Opened by➛Last name","reference":"","reference_display":"Last name","type":"string","base_type":"string","parent_table_name":"sys_user","column_name":"last_name"},{"name":"27850384-1a4b-4ea2-834f-ea2695210369.record.opened_by.photo","label":"10 - Update Record➛Request Record➛Opened by➛Photo","reference":"","reference_display":"Photo","type":"user_image","base_type":"user_image","parent_table_name":"sys_user","column_name":"photo"},{"name":"27850384-1a4b-4ea2-834f-ea2695210369.record.opened_by.first_name","label":"10 - Update Record➛Request Record➛Opened by➛First name","reference":"","reference_display":"First name","type":"string","base_type":"string","parent_table_name":"sys_user","column_name":"first_name"},{"name":"Created_1.current.opened_by.photo","label":"Trigger - Record Created➛Request Record➛Opened by➛Photo","reference":"","reference_display":"Photo","type":"user_image","base_type":"user_image","parent_table_name":"sys_user","column_name":"photo"},{"name":"Created_1.current.request_for.first_name","label":"Trigger - Record Created➛Request Record➛Request For➛First Name","reference":"","reference_display":"First Name","type":"string","base_type":"string","parent_table_name":"x_aleen_snguardian_identity","column_name":"first_name"},{"name":"Created_1.current.request_for.last_name","label":"Trigger - Record Created➛Request Record➛Request For➛Last Name","reference":"","reference_display":"Last Name","type":"string","base_type":"string","parent_table_name":"x_aleen_snguardian_identity","column_name":"last_name"},{"name":"27850384-1a4b-4ea2-834f-ea2695210369.record","label":"10 - Update Record➛Request Record","reference":"x_aleen_snguardian_request","reference_display":"Request","type":"reference","base_type":"reference","attributes":{"element_mapping_provider":"com.glide.flow_design.action.data.FlowDesignVariableMapper"}}]',
        master: 'true',
        name: 'Alert Update Identity Information (self)',
        parent_flow: '60980ad71be48650759455342a4bcbff',
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
    $id: Now.ID['be7c065f1be48650759455342a4bcbd8'],
    table: 'sys_flow_trigger_plan',
    data: {
        binding_strategy: 'com.snc.process_flow.engine.binding.OncePerRecord',
        plan: '{"type":"PlanProxy","persistor":{"@class":".ChunkingPlanPersistor","table":"sys_flow_trigger_plan","id":"be7c065f1be48650759455342a4bcbd8","name":"plan","plan_signature":null}}',
        plan_id: '60980ad71be48650759455342a4bcbff',
        snapshot: 'e67c065f1be48650759455342a4bcb76',
        sys_domain: 'global',
        sys_domain_path: '/',
        trigger: 'fe7c065f1be48650759455342a4bcbd6',
    },
})
Record({
    $id: Now.ID['092490981bb84a50759455342a4bcb8c'],
    table: 'sys_hub_pill_compound',
    data: {
        attached_to: '60980ad71be48650759455342a4bcbff',
        order: '0',
        prescription: '{{Created_1.current.request_for.sys_id}}',
        transform_compositions: '[]',
        ui_id: '8c4513d1-c459-46e1-88f6-782e905dcb81',
    },
})
Record({
    $id: Now.ID['15d430041bd1c2106962fe60cd4bcb20'],
    table: 'sys_hub_pill_compound',
    data: {
        attached_to: '60980ad71be48650759455342a4bcbff',
        order: '0',
        prescription: '{{27850384-1a4b-4ea2-834f-ea2695210369.record.opened_by.mobile_phone}}',
        transform_compositions: '[]',
        ui_id: '4757eb33-7498-4150-bf7a-f892d00e7dbb',
    },
})
Record({
    $id: Now.ID['2838e9241b190610759455342a4bcbbf'],
    table: 'sys_hub_pill_compound',
    data: {
        attached_to: '60980ad71be48650759455342a4bcbff',
        order: '0',
        prescription: '{{Created_1.current.request_for.last_name}}',
        transform_compositions: '[]',
        ui_id: 'd93f7d16-71ad-4eff-908b-1c8262be29cf',
    },
})
Record({
    $id: Now.ID['2bf55ae71b8542106962fe60cd4bcb78'],
    table: 'sys_hub_pill_compound',
    data: {
        attached_to: '60980ad71be48650759455342a4bcbff',
        order: '0',
        prescription: '{{27850384-1a4b-4ea2-834f-ea2695210369.record.opened_by.first_name}}',
        transform_compositions: '[]',
        ui_id: 'd4244def-0cc7-4cef-9de8-d1d1267eba9b',
    },
})
Record({
    $id: Now.ID['452490981bb84a50759455342a4bcb8c'],
    table: 'sys_hub_pill_compound',
    data: {
        attached_to: '60980ad71be48650759455342a4bcbff',
        order: '1',
        source_ui_id: '26eacf70-76b8-41d0-bf6a-97ada42be233',
        transform_compositions:
            '[{"id":"e0fce048c72333003884f80bf4c26002","transformType":null,"transformDefinition":null,"order":0,"parameters":[]}]',
        transform_definition_id: 'a809ecb7b7133300388487c2de11a9f7',
        ui_id: 'b2bccd23-0ec1-4917-bc27-f6f2cbfe1cb0',
    },
})
Record({
    $id: Now.ID['4d2490981bb84a50759455342a4bcb8b'],
    table: 'sys_hub_pill_compound',
    data: {
        attached_to: '60980ad71be48650759455342a4bcbff',
        order: '0',
        prescription: '{{Created_1.current.sys_id}}',
        transform_compositions: '[]',
        ui_id: '26eacf70-76b8-41d0-bf6a-97ada42be233',
    },
})
Record({
    $id: Now.ID['6038e9241b190610759455342a4bcbbf'],
    table: 'sys_hub_pill_compound',
    data: {
        attached_to: '60980ad71be48650759455342a4bcbff',
        order: '0',
        prescription: '{{Created_1.current.request_for.first_name}}',
        transform_compositions: '[]',
        ui_id: '05eb3219-51bb-4b75-adff-f852904b2c76',
    },
})
Record({
    $id: Now.ID['63f55ae71b8542106962fe60cd4bcb79'],
    table: 'sys_hub_pill_compound',
    data: {
        attached_to: '60980ad71be48650759455342a4bcbff',
        order: '0',
        prescription: '{{Created_1.current.opened_by.photo}}',
        transform_compositions: '[]',
        ui_id: '48b78442-2756-4a4a-84d3-2487b49f33ee',
    },
})
Record({
    $id: Now.ID['67f55ae71b8542106962fe60cd4bcb78'],
    table: 'sys_hub_pill_compound',
    data: {
        attached_to: '60980ad71be48650759455342a4bcbff',
        order: '0',
        prescription: '{{27850384-1a4b-4ea2-834f-ea2695210369.record.opened_by.photo}}',
        transform_compositions: '[]',
        ui_id: '9f3a2ee3-6aca-4d7c-9b52-2387ca220fb3',
    },
})
Record({
    $id: Now.ID['a3f55ae71b8542106962fe60cd4bcb78'],
    table: 'sys_hub_pill_compound',
    data: {
        attached_to: '60980ad71be48650759455342a4bcbff',
        order: '0',
        prescription: '{{Created_1.current.opened_by.last_name}}',
        transform_compositions: '[]',
        ui_id: 'fc0ebe8c-e458-4d92-81d0-f6d3b4ccef00',
    },
})
Record({
    $id: Now.ID['ac38e9241b190610759455342a4bcbbf'],
    table: 'sys_hub_pill_compound',
    data: {
        attached_to: '60980ad71be48650759455342a4bcbff',
        order: '0',
        prescription: '{{d733bbbb-7b16-4d23-aec1-711e69995650.Record.photo}}',
        transform_compositions: '[]',
        ui_id: 'ba96a5bc-9bd9-404a-94bd-0bfb8a968e57',
    },
})
Record({
    $id: Now.ID['aff55ae71b8542106962fe60cd4bcb78'],
    table: 'sys_hub_pill_compound',
    data: {
        attached_to: '60980ad71be48650759455342a4bcbff',
        order: '0',
        prescription: '{{Created_1.current.opened_by.last_name}}',
        transform_compositions: '[]',
        ui_id: '7062b2bc-9e0a-42aa-bb4b-811b410d6df1',
    },
})
Record({
    $id: Now.ID['c92490981bb84a50759455342a4bcb8c'],
    table: 'sys_hub_pill_compound',
    data: {
        attached_to: '60980ad71be48650759455342a4bcbff',
        order: '1',
        source_ui_id: '8c4513d1-c459-46e1-88f6-782e905dcb81',
        transform_compositions:
            '[{"id":"e0fce048c72333003884f80bf4c26002","transformType":null,"transformDefinition":null,"order":0,"parameters":[]}]',
        transform_definition_id: 'a809ecb7b7133300388487c2de11a9f7',
        ui_id: 'c2db9a20-0b32-4c48-b18f-bd8a58a1a4b7',
    },
})
Record({
    $id: Now.ID['e7f55ae71b8542106962fe60cd4bcb77'],
    table: 'sys_hub_pill_compound',
    data: {
        attached_to: '60980ad71be48650759455342a4bcbff',
        order: '0',
        prescription: '{{Created_1.current.opened_by.first_name}}',
        transform_compositions: '[]',
        ui_id: 'f79a05ab-d36f-49db-a1dc-50799599ac02',
    },
})
Record({
    $id: Now.ID['e838e9241b190610759455342a4bcbbf'],
    table: 'sys_hub_pill_compound',
    data: {
        attached_to: '60980ad71be48650759455342a4bcbff',
        order: '0',
        prescription: '{{d733bbbb-7b16-4d23-aec1-711e69995650.Record.phone}}',
        transform_compositions: '[]',
        ui_id: '076dd57b-2af5-4edb-85e9-8411c80fe7b7',
    },
})
Record({
    $id: Now.ID['ebf55ae71b8542106962fe60cd4bcb78'],
    table: 'sys_hub_pill_compound',
    data: {
        attached_to: '60980ad71be48650759455342a4bcbff',
        order: '0',
        prescription: '{{Created_1.current.number}}',
        transform_compositions: '[]',
        ui_id: 'bfbecfbc-23ca-42db-8945-171e1f51467b',
    },
})
Record({
    $id: Now.ID['eff55ae71b8542106962fe60cd4bcb77'],
    table: 'sys_hub_pill_compound',
    data: {
        attached_to: '60980ad71be48650759455342a4bcbff',
        order: '0',
        prescription: '{{Created_1.current.opened_by}}',
        transform_compositions: '[]',
        ui_id: 'a8d5c367-b265-4878-878c-8e3dbfdb426f',
    },
})
Record({
    $id: Now.ID['236f56641b9d46106962fe60cd4bcb3f'],
    table: 'sys_hub_pill_compound',
    data: {
        attached_to: 'e67c065f1be48650759455342a4bcb76',
        order: '0',
        prescription: '{{Created_1.current.request_for.last_name}}',
        transform_compositions: '[]',
        ui_id: 'd93f7d16-71ad-4eff-908b-1c8262be29cf',
    },
})
Record({
    $id: Now.ID['236f56641b9d46106962fe60cd4bcb40'],
    table: 'sys_hub_pill_compound',
    data: {
        attached_to: 'e67c065f1be48650759455342a4bcb76',
        order: '0',
        prescription: '{{d733bbbb-7b16-4d23-aec1-711e69995650.Record.photo}}',
        transform_compositions: '[]',
        ui_id: 'ba96a5bc-9bd9-404a-94bd-0bfb8a968e57',
    },
})
Record({
    $id: Now.ID['2b395cdc1bb84a50759455342a4bcb42'],
    table: 'sys_hub_pill_compound',
    data: {
        attached_to: 'e67c065f1be48650759455342a4bcb76',
        order: '0',
        prescription: '{{Created_1.current.sys_id}}',
        transform_compositions: '[]',
        ui_id: '26eacf70-76b8-41d0-bf6a-97ada42be233',
    },
})
Record({
    $id: Now.ID['2b6f56641b9d46106962fe60cd4bcb3e'],
    table: 'sys_hub_pill_compound',
    data: {
        attached_to: 'e67c065f1be48650759455342a4bcb76',
        order: '0',
        prescription: '{{Created_1.current.opened_by.first_name}}',
        transform_compositions: '[]',
        ui_id: 'f79a05ab-d36f-49db-a1dc-50799599ac02',
    },
})
Record({
    $id: Now.ID['636f56641b9d46106962fe60cd4bcb3e'],
    table: 'sys_hub_pill_compound',
    data: {
        attached_to: 'e67c065f1be48650759455342a4bcb76',
        order: '0',
        prescription: '{{Created_1.current.opened_by.photo}}',
        transform_compositions: '[]',
        ui_id: '48b78442-2756-4a4a-84d3-2487b49f33ee',
    },
})
Record({
    $id: Now.ID['67395cdc1bb84a50759455342a4bcb42'],
    table: 'sys_hub_pill_compound',
    data: {
        attached_to: 'e67c065f1be48650759455342a4bcb76',
        order: '1',
        source_ui_id: '26eacf70-76b8-41d0-bf6a-97ada42be233',
        transform_compositions:
            '[{"id":"e0fce048c72333003884f80bf4c26002","transformType":null,"transformDefinition":null,"order":0,"parameters":[]}]',
        transform_definition_id: 'a809ecb7b7133300388487c2de11a9f7',
        ui_id: 'b2bccd23-0ec1-4917-bc27-f6f2cbfe1cb0',
    },
})
Record({
    $id: Now.ID['676f56641b9d46106962fe60cd4bcb3e'],
    table: 'sys_hub_pill_compound',
    data: {
        attached_to: 'e67c065f1be48650759455342a4bcb76',
        order: '0',
        prescription: '{{Created_1.current.opened_by.last_name}}',
        transform_compositions: '[]',
        ui_id: '7062b2bc-9e0a-42aa-bb4b-811b410d6df1',
    },
})
Record({
    $id: Now.ID['6f6f56641b9d46106962fe60cd4bcb3f'],
    table: 'sys_hub_pill_compound',
    data: {
        attached_to: 'e67c065f1be48650759455342a4bcb76',
        order: '0',
        prescription: '{{Created_1.current.number}}',
        transform_compositions: '[]',
        ui_id: 'bfbecfbc-23ca-42db-8945-171e1f51467b',
    },
})
Record({
    $id: Now.ID['a76f56641b9d46106962fe60cd4bcb3f'],
    table: 'sys_hub_pill_compound',
    data: {
        attached_to: 'e67c065f1be48650759455342a4bcb76',
        order: '0',
        prescription: '{{Created_1.current.opened_by}}',
        transform_compositions: '[]',
        ui_id: 'a8d5c367-b265-4878-878c-8e3dbfdb426f',
    },
})
Record({
    $id: Now.ID['ab6f56641b9d46106962fe60cd4bcb3f'],
    table: 'sys_hub_pill_compound',
    data: {
        attached_to: 'e67c065f1be48650759455342a4bcb76',
        order: '0',
        prescription: '{{27850384-1a4b-4ea2-834f-ea2695210369.record.opened_by.first_name}}',
        transform_compositions: '[]',
        ui_id: 'd4244def-0cc7-4cef-9de8-d1d1267eba9b',
    },
})
Record({
    $id: Now.ID['af395cdc1bb84a50759455342a4bcb41'],
    table: 'sys_hub_pill_compound',
    data: {
        attached_to: 'e67c065f1be48650759455342a4bcb76',
        order: '1',
        source_ui_id: '8c4513d1-c459-46e1-88f6-782e905dcb81',
        transform_compositions:
            '[{"id":"e0fce048c72333003884f80bf4c26002","transformType":null,"transformDefinition":null,"order":0,"parameters":[]}]',
        transform_definition_id: 'a809ecb7b7133300388487c2de11a9f7',
        ui_id: 'c2db9a20-0b32-4c48-b18f-bd8a58a1a4b7',
    },
})
Record({
    $id: Now.ID['af6f56641b9d46106962fe60cd4bcb3d'],
    table: 'sys_hub_pill_compound',
    data: {
        attached_to: 'e67c065f1be48650759455342a4bcb76',
        order: '0',
        prescription: '{{27850384-1a4b-4ea2-834f-ea2695210369.record.opened_by.mobile_phone}}',
        transform_compositions: '[]',
        ui_id: '4757eb33-7498-4150-bf7a-f892d00e7dbb',
    },
})
Record({
    $id: Now.ID['e36f56641b9d46106962fe60cd4bcb3f'],
    table: 'sys_hub_pill_compound',
    data: {
        attached_to: 'e67c065f1be48650759455342a4bcb76',
        order: '0',
        prescription: '{{Created_1.current.request_for.first_name}}',
        transform_compositions: '[]',
        ui_id: '05eb3219-51bb-4b75-adff-f852904b2c76',
    },
})
Record({
    $id: Now.ID['e36f56641b9d46106962fe60cd4bcb40'],
    table: 'sys_hub_pill_compound',
    data: {
        attached_to: 'e67c065f1be48650759455342a4bcb76',
        order: '0',
        prescription: '{{d733bbbb-7b16-4d23-aec1-711e69995650.Record.phone}}',
        transform_compositions: '[]',
        ui_id: '076dd57b-2af5-4edb-85e9-8411c80fe7b7',
    },
})
Record({
    $id: Now.ID['e76f56641b9d46106962fe60cd4bcb3d'],
    table: 'sys_hub_pill_compound',
    data: {
        attached_to: 'e67c065f1be48650759455342a4bcb76',
        order: '0',
        prescription: '{{Created_1.current.opened_by.last_name}}',
        transform_compositions: '[]',
        ui_id: 'fc0ebe8c-e458-4d92-81d0-f6d3b4ccef00',
    },
})
Record({
    $id: Now.ID['eb395cdc1bb84a50759455342a4bcb42'],
    table: 'sys_hub_pill_compound',
    data: {
        attached_to: 'e67c065f1be48650759455342a4bcb76',
        order: '0',
        prescription: '{{Created_1.current.request_for.sys_id}}',
        transform_compositions: '[]',
        ui_id: '8c4513d1-c459-46e1-88f6-782e905dcb81',
    },
})
Record({
    $id: Now.ID['eb6f56641b9d46106962fe60cd4bcb3e'],
    table: 'sys_hub_pill_compound',
    data: {
        attached_to: 'e67c065f1be48650759455342a4bcb76',
        order: '0',
        prescription: '{{27850384-1a4b-4ea2-834f-ea2695210369.record.opened_by.photo}}',
        transform_compositions: '[]',
        ui_id: '9f3a2ee3-6aca-4d7c-9b52-2387ca220fb3',
    },
})
Record({
    $id: Now.ID['3fb71b091bffc650207b2179b04bcb73'],
    table: 'sys_hub_flow_variable',
    data: {
        active: 'true',
        array: 'false',
        array_denormalized: 'false',
        attributes:
            'element_mapping_provider=com.glide.flow_design.action.data.FlowDesignVariableMapper,uiType=boolean,uiTypeLabel=True/False,uiUniqueId=a1b054ad-f8ff-4993-86e1-5c7ea0a26b61',
        audit: 'false',
        calculation: `(function calculatedFieldValue(current) {

	// Add your code here
	return '';  // return the calculated value

})(current);`,
        default_value: 'false',
        display: 'false',
        dynamic_creation: 'false',
        element: 'manager_approved',
        element_reference: 'false',
        function_field: 'false',
        internal_type: 'boolean',
        label: 'manager approved',
        mandatory: 'false',
        max_length: '40',
        model: '60980ad71be48650759455342a4bcbff',
        model_id: '60980ad71be48650759455342a4bcbff',
        model_table: 'sys_hub_flow',
        name: 'var__m_sys_hub_flow_variable_60980ad71be48650759455342a4bcbff',
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
    $id: Now.ID['80d71f091bffc650207b2179b04bcb24'],
    table: 'sys_hub_flow_variable',
    data: {
        active: 'true',
        array: 'false',
        array_denormalized: 'false',
        attributes:
            'element_mapping_provider=com.glide.flow_design.action.data.FlowDesignVariableMapper,uiType=boolean,uiTypeLabel=True/False,uiUniqueId=a1b054ad-f8ff-4993-86e1-5c7ea0a26b61',
        audit: 'false',
        calculation: `(function calculatedFieldValue(current) {

	// Add your code here
	return '';  // return the calculated value

})(current);`,
        display: 'false',
        dynamic_creation: 'false',
        element: 'manager_approved',
        element_reference: 'false',
        function_field: 'false',
        internal_type: 'boolean',
        label: 'manager approved',
        mandatory: 'false',
        max_length: '40',
        model: 'e67c065f1be48650759455342a4bcb76',
        model_id: 'e67c065f1be48650759455342a4bcb76',
        model_table: 'sys_hub_flow_snapshot',
        name: 'var__m_sys_hub_flow_variable_e67c065f1be48650759455342a4bcb76',
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
    $id: Now.ID['7fe7cb56470ffa10f487c24fe16d43c2'],
    table: 'sys_hub_sub_flow_instance_v2',
    data: {
        flow: '60980ad71be48650759455342a4bcbff',
        order: '13',
        show_stages: 'false',
        subflow: 'f7de95261b7dce906962fe60cd4bcb8f',
        subflow_inputs:
            'H4sIAAAAAAAA/5VTXWvbQBD8K+WeLaEv68NvhRIItA2kbV5CEHt3K/vgdFJOJyeu8X/vnqTYpk0pfZN2Z3d2ZrjHIxtGfqO7l1szODACbyXbsKhJKlxjEnMuBVZRXuVJg3kkZMYFT5CtmPK4IpVYrZM85sU7uCohnIEWCWnxecTB1RZFZyXV96BH3zgek6JcR2mZBTFkPMgQkqBMsyagj5yWx1GaV+E8dzrRpFRDr+HwsCygitgpLS0atnl8WrEeLHE6tGxz/K3lDj3WGjhqGrzHBqkj/kfNZXaS8+H+Tc7fZHrGqX7hooa/LV4xfHVoJBJ3A3rAFWvBSHCdPbCNsyMVLIK8M/pwRuyUcbPoFl4H9ZOWp8nqav+GvdagEU09mO0IViow9XIWuwLWi40XMZORnRJ41zvVmZnFAdf/XCo6Pbbm62yBTwgbGLW7SmgciBB7r9bfv4hpvu26l3MMN8pMxixN3QnQ5z9wzio+Ohx8qqP6/qevc/HzO+mixpZ46xb6Xplt3dturyYuOr0Nt5p+woYeAd04qK0JQXgHQsoCQv84Pk3lB7DK2/GF1tCwZ/xhFJkwvRlRSixKjAKZ8DLI0nUeVCKPAyjiqqgKnkdpxU5TAvXz6KXNVi2m1LPjBBiEVb37SCfscdF/evoFy5SSaqkDAAA=',
        ui_id: 'e6a3b571-7a7a-453b-ad62-6d4f538fce45',
        wait_for_completion: 'true',
    },
})
Record({
    $id: Now.ID['20f74f56470ffa10f487c24fe16d4306'],
    table: 'sys_hub_sub_flow_instance_v2',
    data: {
        flow: 'e67c065f1be48650759455342a4bcb76',
        order: '13',
        show_stages: 'false',
        subflow: 'f7de95261b7dce906962fe60cd4bcb8f',
        subflow_inputs:
            'H4sIAAAAAAAA/41TXWvbQBD8K+WeJaMPW7L8VhICgbaBpM1LCGLvbmUfnE7KfTh2jf97V5bimDalfZNmZ3dnZrmnA3OB3+ju9dY4D0bgrWQrljRZhQvMUs6lwCopqiJrsEiEnHPBM2QRUwOvzCVWi6xIefkBr8qIZ6BFYlp8Ceh8bVF0VhK+BR2GwuGQlctFki/ncQpzHs8RsniZz5uYPgoaniZ5Uc3GvuOROqVyvYb94zSAELFRWlo0bPX0HLEeLO30aNnq8Fvpf0Vr4KiJej+q/nT/pvpvbvy+H/EGaZnACfpynvOOU8MgLY0Y7jwaiaSpAe0wYi0YCb6ze7byNhBgEeSd0fszY6OMHz23sHPqJy3Ns+hi74rtatCIpnZmHcBKBaae5LILYj2l+G6Sqs01eHig1cIHe862UwLdmJ/EBoL2V5fYSLjrverM2OKB638qEZ0Orfk25snOoy+uGhypxH6IaDA9JdA8bLrXc543ypzSnIq6E6AvqAhWbG4U6uHuJrScuBED763iwQ8ODiyo738ebwQ/Oh9qbElP3ULfK7Oue9tt1UkDWWpna00/s4YeFGl3am1mIIZkZnRYmA0P7foEP4JVQ0xfacxJVFA/jKJwTu9PLCWWS0ximfFlPM8XRVyJIo2hTKuyKnmR5BU7Rszt3ZUG595jJBP1SxhCGEOd4qvH2wwtwqrefyZRW5ySOj7/Ai4jLFIHBAAA',
        ui_id: 'e6a3b571-7a7a-453b-ad62-6d4f538fce45',
        wait_for_completion: 'true',
    },
})
