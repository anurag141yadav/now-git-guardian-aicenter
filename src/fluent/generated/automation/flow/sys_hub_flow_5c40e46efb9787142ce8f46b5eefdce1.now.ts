import { Record } from '@servicenow/sdk/core'

Record({
    $id: Now.ID['5c40e46efb9787142ce8f46b5eefdce1'],
    table: 'sys_hub_flow',
    data: {
        access: 'public',
        acls: '',
        active: true,
        attributes:
            'browserActivatedIn=chrome,integrationActivatedIn=standalone,labelCacheCleanUpExecuted=true,timeFromCreateToActivate=511232000,viewActivatedIn=naturalLanguage',
        authored_on_release_version: 28100,
        callable_by_client_api: false,
        description: 'Alert Deactivate Badge Request Flow',
        flow_priority: 'MEDIUM',
        internal_name: 'alert_deactivate_badge_request_flow',
        label_cache:
            '[{"name":"658b2d2e-b33e-47a6-9bc5-982b9bea6531.record","label":"12 - Update Record➛Request Record","reference":"x_aleen_snguardian_request","reference_display":"Request","type":"reference","base_type":"reference","usedInstances":{"fbdf0273-4409-4a31-b9a0-2784ecdb6d89":["request_record"]},"attributes":{"element_mapping_provider":"com.glide.flow_design.action.data.FlowDesignVariableMapper"}},{"name":"5532886b-7fb7-4168-9d13-a5044c5cfecc.Record.asset.number","label":"3 - Look Up Record➛Identity Asset Record➛Asset➛Number","reference":"","reference_display":"Number","type":"string","base_type":"string","parent_table_name":"x_aleen_snguardian_asset","column_name":"number","usedInstances":{"75a7a82b-0b28-4050-b6ba-487b443e5457":["work_notes"]}},{"name":"19a9aac6-17ec-4c7d-a213-7a5dfddae77e.record","label":"4 - Update Record➛Identity Asset Record","reference":"x_aleen_snguardian_identity_asset","reference_display":"Identity Asset","type":"reference","base_type":"reference","usedInstances":{},"attributes":{"element_mapping_provider":"com.glide.flow_design.action.data.FlowDesignVariableMapper"}},{"name":"19a9aac6-17ec-4c7d-a213-7a5dfddae77e.record.asset.number","label":"4 - Update Record➛Identity Asset Record➛Asset➛Number","reference":"","reference_display":"Number","type":"string","base_type":"string","parent_table_name":"x_aleen_snguardian_asset","column_name":"number","usedInstances":{}},{"name":"19a9aac6-17ec-4c7d-a213-7a5dfddae77e.record.provisioning_status.code","label":"4 - Update Record➛Identity Asset Record➛Provisioning Status➛Code","reference":"","reference_display":"Code","type":"string","base_type":"string","parent_table_name":"x_aleen_snguardian_provisioning_status","column_name":"code","usedInstances":{}},{"name":"Created_1.table_name","label":"Trigger - Record Created➛Request Table","reference":"x_aleen_snguardian_request","reference_display":"Request","type":"table_name","base_type":"table_name","usedInstances":{"19a9aac6-17ec-4c7d-a213-7a5dfddae77e":["datasource_table"]},"attributes":{"test_input_hidden":"true"}},{"name":"75a7a82b-0b28-4050-b6ba-487b443e5457.record","label":"8 - Update Record➛Request Record","reference":"x_aleen_snguardian_request","reference_display":"Request","type":"reference","base_type":"reference","usedInstances":{"a709be14-8b54-427e-a307-73908b874aad":["request_record"]},"attributes":{"element_mapping_provider":"com.glide.flow_design.action.data.FlowDesignVariableMapper"}},{"name":"Created_1.current","label":"Trigger - Record Created➛Request Record","reference":"x_aleen_snguardian_request","reference_display":"Request","type":"reference","base_type":"reference","usedInstances":{"b0cf009f-a175-4296-96dc-e3f10ad777fa":["record"],"e6eaf675-13f0-453f-8443-dae1de1f522a":["record"],"75a7a82b-0b28-4050-b6ba-487b443e5457":["record"],"658b2d2e-b33e-47a6-9bc5-982b9bea6531":["record"],"69e238a2-c290-430e-95f7-2df3235645f9":["record"],"5c0f35f3-af3f-47f8-b37c-f5f2ae47c963":["request"]},"attributes":{}},{"name":"19a9aac6-17ec-4c7d-a213-7a5dfddae77e.record.provisioning_message","label":"4 - Update Record➛Identity Asset Record➛Provisioning Message","reference":"","reference_display":"Provisioning Message","type":"string","base_type":"string","parent_table_name":"x_aleen_snguardian_identity_asset","column_name":"provisioning_message","usedInstances":{}},{"name":"29c46de0-cb1b-42b4-acbc-7e82e5625126.__status__.message","label":"17➛Error Status➛Message","reference":"","reference_display":"","type":"string","base_type":"string","column_name":"","usedInstances":{"b0cf009f-a175-4296-96dc-e3f10ad777fa":["work_notes"]},"attributes":{}},{"name":"69e238a2-c290-430e-95f7-2df3235645f9.record","label":"1 - Update Record➛Request Record","reference":"x_aleen_snguardian_request","reference_display":"Request","type":"reference","base_type":"reference","usedInstances":{},"attributes":{"element_mapping_provider":"com.glide.flow_design.action.data.FlowDesignVariableMapper"}},{"name":"5c0f35f3-af3f-47f8-b37c-f5f2ae47c963.record","label":"5 - Create Record➛Request Activity Record","reference":"x_aleen_snguardian_request_activity","reference_display":"Request Activity","type":"reference","base_type":"reference","usedInstances":{"b72b871b-7e19-46d9-8aa6-ab65c25baca9":["record"],"b5807be3-d2f3-4df7-af7f-c28f56641e80":["record"]},"attributes":{"element_mapping_provider":"com.glide.flow_design.action.data.FlowDesignVariableMapper"}},{"name":"Created_1.current.sys_id","label":"Trigger - Record Created➛Request Record➛Sys ID","reference":"","reference_display":"Sys ID","type":"GUID","base_type":"GUID","parent_table_name":"x_aleen_snguardian_request","column_name":"sys_id","usedInstances":{"19a9aac6-17ec-4c7d-a213-7a5dfddae77e":["datasource"]}},{"name":"5532886b-7fb7-4168-9d13-a5044c5cfecc.Record","label":"3 - Look Up Record➛Identity Asset Record","reference":"x_aleen_snguardian_identity_asset","reference_display":"Identity Asset","type":"reference","base_type":"reference","usedInstances":{"19a9aac6-17ec-4c7d-a213-7a5dfddae77e":["record"]},"attributes":{"element_mapping_provider":"com.glide.flow_design.action.data.FlowDesignVariableMapper"}},{"name":"flow_variable.badge_id","label":"Flow Variables➛badge_id","type":"string","base_type":"string","usedInstances":{"5532886b-7fb7-4168-9d13-a5044c5cfecc":["conditions"]},"attributes":{"sourceUiUniqueId":"","sourceType":"","sourceId":"","uiUniqueId":"f6d66c2c-64a4-4ad0-a99b-24ad23f52911"}}]',
        master_snapshot: '017e76103b2fc754546a249693e45a48',
        name: 'Alert Deactivate Badge Request Flow',
        pre_compiled: false,
        remote_trigger_id: '217eb6103b2fc754546a249693e45aaa',
        run_as: 'user',
        run_with_roles: '',
        sc_callable: false,
        show_draft_actions: false,
        show_triggered_flows: false,
        status: 'published',
        sys_domain: 'global',
        sys_domain_path: '/',
        type: 'flow',
        version: '2',
        latest_snapshot: '017e76103b2fc754546a249693e45a48',
    },
})
Record({
    $id: Now.ID['217eb6103b2fc754546a249693e45aaa'],
    table: 'sys_flow_record_trigger',
    data: {
        active: 'true',
        condition: 'request_type=24942b96fb1387142ce8f46b5eefdcac',
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
    $id: Now.ID['697eb6103b2fc754546a249693e45aab'],
    table: 'sys_trigger_runner_mapping',
    data: {
        active: 'true',
        data: '{"run_flow_in":"background","run_when_user_list":[],"run_when_setting":"both","run_when_user_setting":"any","run_on_extended":"false"}',
        identifier: '5c40e46efb9787142ce8f46b5eefdce1',
        identifier_type: 'flow',
        runner: 'FDTriggerRunner',
        trigger: '217eb6103b2fc754546a249693e45aaa',
    },
})
Record({
    $id: Now.ID['5040e46efb9787142ce8f46b5eefdce6'],
    table: 'sys_flow_cat_variable_model',
    data: {
        id: '5c40e46efb9787142ce8f46b5eefdce1',
        name: 'Alert Deactivate Badge Request Flow',
    },
})
Record({
    $id: Now.ID['817e76103b2fc754546a249693e45a49'],
    table: 'sys_flow_cat_variable_model',
    data: {
        id: '017e76103b2fc754546a249693e45a48',
        name: 'Alert Deactivate Badge Request Flow',
    },
})
Record({
    $id: Now.ID['3650a86efb9787142ce8f46b5eefdcb5'],
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
        model: '5c40e46efb9787142ce8f46b5eefdce1',
        model_id: '5c40e46efb9787142ce8f46b5eefdce1',
        model_table: 'sys_hub_flow',
        name: 'var__m_sys_hub_flow_input_5c40e46efb9787142ce8f46b5eefdce1',
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
    $id: Now.ID['fe50a86efb9787142ce8f46b5eefdcf5'],
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
        model: '5c40e46efb9787142ce8f46b5eefdce1',
        model_id: '5c40e46efb9787142ce8f46b5eefdce1',
        model_table: 'sys_hub_flow',
        name: 'var__m_sys_hub_flow_input_5c40e46efb9787142ce8f46b5eefdce1',
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
    $id: Now.ID['817e76103b2fc754546a249693e45a4b'],
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
        model: '017e76103b2fc754546a249693e45a48',
        model_id: '017e76103b2fc754546a249693e45a48',
        model_table: 'sys_hub_flow_snapshot',
        name: 'var__m_sys_hub_flow_input_017e76103b2fc754546a249693e45a48',
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
    $id: Now.ID['c17e76103b2fc754546a249693e45a61'],
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
        model: '017e76103b2fc754546a249693e45a48',
        model_id: '017e76103b2fc754546a249693e45a48',
        model_table: 'sys_hub_flow_snapshot',
        name: 'var__m_sys_hub_flow_input_017e76103b2fc754546a249693e45a48',
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
    $id: Now.ID['a25068aafb9787142ce8f46b5eefdc11'],
    table: 'sys_hub_trigger_instance_v2',
    data: {
        flow: '5c40e46efb9787142ce8f46b5eefdce1',
        name: 'Created',
        trigger_definition: '798916a0c31322002841b63b12d3ae7c',
        trigger_inputs:
            'H4sIAAAAAAAA/9VY227bOBD9FUFPW8AL6OJr3tokxQboNoDj7j5kA4EShzaxMuVKlBK3yL/vUDfLkuzYsdJ1XgqYZGYOj86cGfb+p+4TF3z9Qp8R1we9p3MhIRTEn61XgMtSLTuCLNXekghKZBCu9QsZxtDTWRgsZ7Bc+UTiYUb8CBeDkEKoX5g9PSF+DHfr6IZiJPz7NEweU8+38feTQ3wA4URiHpOQciKcEL7HEEk8RHmE4dd/5Wen5Ya34D4NQegX9w89fUVCDC5V4p+1La6ye8wjEwsMzzZtyzIMa9w33aHtmha1CRgGBqwzUUMrWwjZXBWeJAgKtGShwVUIhN4Kf12eWCDVGS9L8hTxHxh9bKhzDBC7B9le+dPJmciWvUXAPbhdSR6IbCXDmW0GfrwUXzP8ikNgJPZlwSGuxBHGg5WCrEDkiNjdInicFgk/c5HeLt/0A4/45S8iZcjdWEKkCGfcR+qdjJsoiMMU/fT68nZ65fz9cXb5x/XUmV7fzaY3l7PrK/05vZfzPVYRM4Q5Fie7znP54T9z8NUHFPHSRTQ9PfJCvpIfPcmTQnPPvY2OLwNBecpKQ8tesRVta7m4/T4xG8ZOOXuVjIWkc/06SjT/xIZhU6s/6VvuZMhc0x6PzL7lwZj1h+4AgFGPeEcrejgkhALZoWiXVRRd5aQFtGyhp3rvfdrOVw4Rd98w/id552b1WnUvAwr+1SacjpvzOeqdi1UsFVuPRMjIkYFDKHUqPKqjiOkluWd3a2r+ZbWHscAQTvmFmppPiSwZ/cLROy/usWILttKQuM++5CGnsdAC/JT4j+bFIZIltcID2c2SzHOO2R344MmKLNi3qPrrTx5FXMwrqMukKSuNnGU6lJdWXCnLHZ2Y/KHLgm+SntTIrDWto2vbNBlzgVnGSFW2adguM42RMSCM2obhWZXaboLZiVLWJPEmNX5chUepGP0DpFenOAdvVKvhIBkl2xosSFASyY3kshtoZkfQLAWtZoj2UY5YyjJbvqqNVHuu1vGcQGhC8C/oocaoDhzggMwPHtGMX+F+LvH+nYdBLGjdjlRMjQttc0L7LefvQ4dOyIIQ9gPYPnFOHrihvRAuEesO3M9mpjuBPhhoejb6nTuYTFyPWIyNhiOwzJr7bWC0YnsXrveC2pI2ue5ywFbhJG16O8L7TgDY8MGjAZ7ugLkwW/0v23sfTve4wHcyQg0dn6ev4JrhzX1OodjrttobqZNNfZ9a8Ww88QbmaOSN8B2DFc/64BJ8Iw3IZDS0x4NaxTeg7IMpW5j5Ja+baB2lQHa4wbds67we8m8p2wikVO3o+C4tcI5N/4ZkSSqdUn0WLTWVINS+BuL3m8057Q6wAaZP3K7a9SEo1IfV3haGG8hFY17A1J9wfSu1mjN3sHJ2T6qaSJLtu578pIL+eDBhdrvFsEmbxWzA7IZ59uPFgRWS7Ky1tjnjUMEnrXWzczB4hYRrMqlODHtGmq5IMTsnxXo7UuyTx6iiFne+I18D9h21sHSuOKWPqZzgBKxq3leBhhsaJtE40/L/WwSquWtNLgAp9XFexoSayn6qa1e7SBNKqeBfCySbwBvdDJe1fIA6v0ZVk0K3L2CgIzIY2Dvm4Un9BdwG6AW8Z9+2jq6KpK3I9vau4+LWY7Z2r4pktxVxYF/q9Nbtzem0W7e2p5dufXrj2fd+b0Fxpi3l4T/ILy+QcB8AAA==',
        trigger_type: 'record_create',
    },
})
Record({
    $id: Now.ID['957eb6103b2fc754546a249693e45a4c'],
    table: 'sys_hub_trigger_instance_v2',
    data: {
        flow: '017e76103b2fc754546a249693e45a48',
        name: 'Created',
        trigger_definition: '798916a0c31322002841b63b12d3ae7c',
        trigger_inputs:
            'H4sIAAAAAAAA/9VY227bOBD9FUFPW8AL6OJr3tokxQboNoDj7j5kA4EShzaxMuVKlBK3yL/vUDfLkuzYsdJ1XgqYZGYOj86cGfb+p+4TF3z9Qp8R1we9p3MhIRTEn61XgMtSLTuCLNXekghKZBCu9QsZxtDTWRgsZ7Bc+UTiYUb8CBeDkEKoX5g9PSF+DHfr6IZiJPz7NEweU8+38feTQ3wA4URiHpOQciKcEL7HEEk8RHmE4dd/5Wen5Ya34D4NQegX9w89fUVCDC5V4p+1La6ye8wjEwsMzzZtyzIMa9w33aHtmha1CRgGBqwzUUMrWwjZXBWeJAgKtGShwVUIhN4Kf12eWCDVGS9L8hTxHxh9bKhzDBC7B9le+dPJmciWvUXAPbhdSR6IbCXDmW0GfrwUXzP8ikNgJPZlwSGuxBHGg5WCrEDkiNjdInicFgk/c5HeLt/0A4/45S8iZcjdWEKkCGfcR+qdjJsoiMMU/fT68nZ65fz9cXb5x/XUmV7fzaY3l7PrK/05vZfzPVYRM4Q5Fie7znP54T9z8NUHFPHSRTQ9PfJCvpIfPcmTQnPPvY2OLwNBecpKQ8tesRVta7m4/T4xG8ZOOXuVjIWkc/06SjT/xIZhU6s/6VvuZMhc0x6PzL7lwZj1h+4AgFGPeEcrejgkhALZoWiXVRRd5aQFtGyhp3rvfdrOVw4Rd98w/id552b1WnUvAwr+1SacjpvzOeqdi1UsFVuPRMjIkYFDKHUqPKqjiOkluWd3a2r+ZbWHscAQTvmFmppPiSwZ/cLROy/usWILttKQuM++5CGnsdAC/JT4j+bFIZIltcID2c2SzHOO2R344MmKLNi3qPrrTx5FXMwrqMukKSuNnGU6lJdWXCnLHZ2Y/KHLgm+SntTIrDWto2vbNBlzgVnGSFW2adguM42RMSCM2obhWZXaboLZiVLWJPEmNX5chUepGP0DpFenOAdvVKvhIBkl2xosSFASyY3kshtoZkfQLAWtZoj2UY5YyjJbvqqNVHuu1vGcQGhC8C/oocaoDhzggMwPHtGMX+F+LvH+nYdBLGjdjlRMjQttc0L7LefvQ4dOyIIQ9gPYPnFOHrihvRAuEesO3M9mpjuBPhhoejb6nTuYTFyPWIyNhiOwzJr7bWC0YnsXrveC2pI2ue5ywFbhJG16O8L7TgDY8MGjAZ7ugLkwW/0v23sfTve4wHcyQg0dn6ev4JrhzX1OodjrttobqZNNfZ9a8Ww88QbmaOSN8B2DFc/64BJ8Iw3IZDS0x4NaxTeg7IMpW5j5Ja+baB2lQHa4wbds67we8m8p2wikVO3o+C4tcI5N/4ZkSSqdUn0WLTWVINS+BuL3m8057Q6wAaZP3K7a9SEo1IfV3haGG8hFY17A1J9wfSu1mjN3sHJ2T6qaSJLtu578pIL+eDBhdrvFsEmbxWzA7IZ59uPFgRWS7Ky1tjnjUMEnrXWzczB4hYRrMqlODHtGmq5IMTsnxXo7UuyTx6iiFne+I18D9h21sHSuOKWPqZzgBKxq3leBhhsaJtE40/L/WwSquWtNLgAp9XFexoSayn6qa1e7SBNKqeBfCySbwBvdDJe1fIA6v0ZVk0K3L2CgIzIY2Dvm4Un9BdwG6AW8Z9+2jq6KpK3I9vau4+LWY7Z2r4pktxVxYF/q9Nbtzem0W7e2p5dufXrj2fd+b0Fxpi3l4T/ILy+QcB8AAA==',
        trigger_type: 'record_create',
    },
})
Record({
    $id: Now.ID['080a60aefbd787142ce8f46b5eefdcbf'],
    table: 'sys_hub_action_instance_v2',
    data: {
        action_type: '2de05916c31332002841b63b12d3aee1',
        action_type_parent: '02f0b88cc3c632002841b63b12d3aeff',
        flow: '5c40e46efb9787142ce8f46b5eefdce1',
        order: '5',
        parent_ui_id: '2d5bc4f3-9b1f-4451-a7a7-f2ea0cf618a6',
        ui_id: '5c0f35f3-af3f-47f8-b37c-f5f2ae47c963',
        values: 'H4sIAAAAAAAA/+1WTW/bMAz9K4bOTuDPxMltW9Hb2qHrellaQ5boRIAiu5KcNivy30dZTj+yBiuGAcOw+SbqiXwkn0R/fSCCkzmZxBDls3jC0jhNkyhKiiyuJmkVJzylABkJiaJrQKSllYSyX4RkQ2XnjPcllQCqNGrZUc0FVaWG2w6MLSmzYiPsFtFcmFbS7dVw6MIjgndPCLYSkmtQZP71OiQt1RjGgibzh4Mtu22hlLQCiY4uHaXgzFN6azovDh9Jz0U5tDWaO0JRSODeguKA8WoqDYRkTRWnttFbMre6Q4MGys+V3D4iVkJZdEgc9t6Ib+i9iByuBkyNgd97XJZDxbyZrRrB4Ly1olHe0hMbNhvZrdWZT8LVGmraSbuvNVo6g/6gdZQdiYFR/XnV3F3sA54K1Wc3bMqGUfm4otZqUXUWjOsHSFijo3JN21aoZdnqZiP6w8hlPV5KXIxr2dxhUCOWauyE0KgxVoiOT9F+0puvqBYui4/oBg/v+uzL287F9XkMjEufNAIM06K1vWpgILcL9zrmEM2ONj6unhrdS9c80/Ag2EUXRSl/ePiAzbPAy3jMOo3FsbvdjeNumk5jZ/rSe+wr4heOMUq6pMaAfXZu7z3P06QoJtVoWlfTURZPitGMx+mI5lGWsZzVwNj4AhiqzcUFnzPWzzs4gf5aIcHgPeVLCIa7dNN3wSDOtcRXfAi52F+/BZkvyGUTVBA8ueELEi58Kfr9pJrWBfA8ripWJHE0zWcZcs4SmlWsSmY93GwNZvpG/O4lN2Op7cyr3L603CUWCBN8wt4j+oBckRc1OxosKw7J/Ry/+/F1+i+Hf1sOvziKYI3Eka6XUfjmV2nv4FSA5OaVZ2o/i4YA5WYIMMyj+HfNo3gS9d+fmUqe5182lJ79HxwZT9ffAQqWZy5oCQAA',
    },
})
Record({
    $id: Now.ID['234e6466fb1b87142ce8f46b5eefdcaa'],
    table: 'sys_hub_action_instance_v2',
    data: {
        action_type: 'f9d01dd2c31332002841b63b12d3aea1',
        action_type_parent: 'baf174c8c3c232002841b63b12d3aee4',
        flow: '5c40e46efb9787142ce8f46b5eefdce1',
        order: '8',
        parent_ui_id: 'd1feae64-613a-430b-97a1-b531ffde39fe',
        ui_id: '75a7a82b-0b28-4050-b6ba-487b443e5457',
        values: 'H4sIAAAAAAAA/+1V32/aMBD+V6w8Q5QQSClv3VClPqyd2qkvo40c+wLWHCe1HShD/O875wel7dahCmmaVCQe7ny++767z5fvG09wb+INgQfhaRizKIyiQRAMxsMwjaM0HPCIAoRez1M0B4zUwArN0V5SWTnHZvNZA7XAk9Bnldag7HaL51yYUtL1bRuGHrYQkuO5N/l+1/NKqjGjBe1NNi+O7LqERNIUJF6cFqzKMSm5mGKOQ9F2t687uC/huxpo8zZ7IpwTjxyeMOh58GhBccByGZUGel5OFae20GtvYnWFDmTNr5Rc7yIWQtmGaU4fjfiJ+YeBi8sAqbG2CzszaTvUNacQDK5KKwrVeCxNZde5Qla5umwouN5CRitp93pbGcwHpYPsQDQIs5tFsbru6p0LVbNr0cqCUbmzqLVapJUF48YBEuqm5LQshZonpS6Wor6MUHJ/LtHwM1mssKYRc+VT5nD72CDqn6N/WrtvqRaOxBdMg5e3NfnkoXJ1Gxot4KTmXBNO6kFhqGFalPYMEy+hhbnttXJNR28JgJ0+zXsv55NkHxMqAVRi1LyimguqEg0PFRj7WrfXu4P3yfebA0AuGwCHgn92+Q9kWgE/87X6HR1Nv+N/pN8W0X8m4L/JNhi8ubf2Jl0r1exJ1lhcsbMqCCIe3TujMo21mXWKnXmTmffVETVIBTi5qRgDY7JKSjzszZpkdVjARxHWhTCNgvEgDOLTeJBBHDA+TFl6EtThZm1wLR4Yv71fFfpHogqcQIPsE+VzIFNwrV1S115C2tdEFtTU/xSfISFmDyjB+ZQSHxb3yZkxYMlmMxpFg/E4TvsnWXrSH4bxuH/Kw6hPR8FwyEYsA8b8ZtP71N3xVZWnoLdbIgy5UDUCIKpY+a8f+Ednj9bZd25IQFg4A9JMpHfwW+kSnAuQ3Pzm8XQrsi2QLNsCu8/80fZkGAf17+Nrf8Sv/d0vuIjPTZ4KAAA=',
    },
})
Record({
    $id: Now.ID['32e0f86afb1b87142ce8f46b5eefdc93'],
    table: 'sys_hub_action_instance_v2',
    data: {
        action_type: 'f9d01dd2c31332002841b63b12d3aea1',
        action_type_parent: 'baf174c8c3c232002841b63b12d3aee4',
        flow: '5c40e46efb9787142ce8f46b5eefdce1',
        order: '9',
        parent_ui_id: 'd1feae64-613a-430b-97a1-b531ffde39fe',
        ui_id: 'b72b871b-7e19-46d9-8aa6-ab65c25baca9',
        values: 'H4sIAAAAAAAA/+1VyW7bMBD9FUNn29Dq7RYgCNBDEyBpc4kDgSKHDgGKUrg4cQ3/e4daHGdpagQB2gLVbUazvDfzSN5sA8GCRZACC6N5NKFJlCRxGMazNComSRHFLCEAUTAMFCkBIzXQSjO010Q679huMxryJOPJiPCEj9Ipn42KZEpHPOMxgXRK55Nk3ObtdpjJhKkl2Vx3BdBD74RkGlSwuLkdBjXR2MuCDhbbF7/spoZckgIkJp5W1JWg7ODLKdY4lkeffdkTeUnM90CbddVz4Z34y+OJwmEAjxYUA2zHiTQwDEqiGLGV3gQLqx06NBB2oeRmH3EnlG2ZluTRiB9YPw19HAekRrsp7M28m1A/nEpQuKitqFTrsaSQ/eQq6Up13lLwswVOnLQHs3UG60HtIXsQLUJ+dVc9XPb9zoRq2HVoZUWJ3FvEWi0KZ8H4dYCEZiglqWuhVnmtq7VokhFKOV5JNMZcVg/Y04iVGhPqcY9xQGR8hv7Txn1NtPAkvmIZTN415PN75/u2NDrAecO5IZw3i8JQQ7Wo7QkWXkMHczfshFxk7wmAzp/2fVDzScyPOZEAKjdq5Yhmgqhcw70DY3NPZC3s5rWAL9uIwclTxMcE/c1DGpy3kI6l8yz5F/Q6ST/zdYrOPk3Rsz+k6A7RPybp3wk5jN+9yQ423WjXHIi4IWAQomdjLLHOLF0YJmy77KW7DBbL4HuNFIANrhwFY7iTEv3DZVuniQjnM06BZVFR0FkchdNsnmZZksYkLWiRTptwszF4Rx4Z/8b9/7fD/eBZhhKRWxi0NIdHb7UvcCZAMvPGmvvD3DXI112D/RP1aSc6moTN9/+l+sSX6vYng6ketXQJAAA=',
    },
})
Record({
    $id: Now.ID['4792b82efb1b87142ce8f46b5eefdcdf'],
    table: 'sys_hub_action_instance_v2',
    data: {
        action_type: 'f9d01dd2c31332002841b63b12d3aea1',
        action_type_parent: 'baf174c8c3c232002841b63b12d3aee4',
        flow: '5c40e46efb9787142ce8f46b5eefdce1',
        order: '12',
        parent_ui_id: 'c7071aad-038d-4d82-8a1c-f4d3d03fea9d',
        ui_id: '658b2d2e-b33e-47a6-9bc5-982b9bea6531',
        values: 'H4sIAAAAAAAA/+1WXU/bMBT9K1Ge2yzpd/vGYEh7GEyAeKEsurFvijXHCbbT0lX977vORymwMYSYpknkzdf345zjYytXG19wf+YPkIfRNBqxftTv98KwNxlEyaifRD3eB8TI7/gKMqRMjSzXnNZLkKULbDaHGsEij6OAlVqjstst7XNhCgnryyaNIuxGSE77/uzquuMXoKmjRe3PNo+27LrAWEKCkgqPclZm1NT7fEQ9Xoq2rT5r4T6G72bQmjfdY+GCtOXwRGHHxzuLiiONS0Ea7PgZKA4212t/ZnVJAWLNT5Vc7zJuhLI10wzujPhB/Qehy0uRqLFGhd0ybhRqxckFw9PCilzVEQuJbJXLZZmpk5qC0xZTKKXd07Y01A8LB9mBqBGm5zf56qyddyxUxa5BK3MGcrcCa7VISovGHQdKrETJoCiEWsSFzpeiKiYoWbCQtAhSma9ophELFQBzuAMSCIJjih9V4UvQwpH4Qm2oeFuRj29LN7em0QCOK84V4bg6KEo1TIvCHlDjJTYwt53GrsnwOQOw6f157/W8t+xdDBJRxUYtStBcgIo13pZo7FPfnu02XmffCwfAO6kBvBT8g+LfkGkM/CDW+Hf4Zv6d/CP/Noj+MwP/ybZh79l3a++kK6eaPcsaC7Y08zIM+3wzb00692dz/6vjZgg9EfW8T1rneu535nVplTFgk3SCfBglCZv0onA8nA6Gw/6gB4OEJeOkSjdrQ4/gC/O331a5/h6rnPSuQX0EvkCPoxNyCU5Mr7lTXgpCIvdWwt54m000hSkAG3WjMbLugI15F3pRvzuGIU85BxyPMaif6aDYoxZnaAwscLsNvAu9pu5dUyaZsNbxbmfl2jvMlSUUnne+NhYz74BnQgljtXP/B4fTFZymKflVP73w70r/NaVf+YJiRidg0atPqPPiu9Q2OBYoufnF5Wqf0GZAvGwG7H4D3uwdjUZh9b3/Dbzh38D1T9znH4e+CgAA',
    },
})
Record({
    $id: Now.ID['68b42466fbd787142ce8f46b5eefdc7f'],
    table: 'sys_hub_action_instance_v2',
    data: {
        action_type: 'f9d01dd2c31332002841b63b12d3aea1',
        action_type_parent: 'baf174c8c3c232002841b63b12d3aee4',
        flow: '5c40e46efb9787142ce8f46b5eefdce1',
        order: '4',
        parent_ui_id: '2d5bc4f3-9b1f-4451-a7a7-f2ea0cf618a6',
        ui_id: '19a9aac6-17ec-4c7d-a213-7a5dfddae77e',
        values: 'H4sIAAAAAAAA/+1UyW7bMBD9FUNnW9Dq7RbUCJBDEyANcolbgSJHDgFqKUk5cQ3/e4cUZbvZYAQpiqLVjcNZ3nt8mrutx5k39xJgQTgLxzQO4zgKgmiahPk4zsOIxQQg9IZeRUrATAm0lgzPayJaE9hu0zSOptNxPpoU+WSUhOPpaMbCeETSIEloSgug1L+2dbsdVjKuGkE2t64BRug9F0xC5c3vvg69hkicpUF68+2TK71pIBMkB4GFi5q2JVR6cLHAHqfy6KuveyJPiZkZeGaue8ZNEK8MnjAYevCooWKA4woiFAy9klSM6FpuvLmWLQYkEHZVic0+455XumNakkfFf2D/JDB5BSA16lTYHzOnUC9OzSlcNZrXVRfRJBe9crVoy+qyo2C0hYK0Qh9p2yrsB42BbEB0CIsv9/XDdT/vnFeWnUMrakrE/kS0ljxvNSjzHCDAilKSpuHVKmtkvea2GKGU/krgwS9E/YAzFV9VPqEGt48CEf8c4wsbviWSGxKfsQ0W7yz57Htr5nY0HODMcraEM/tQmKqo5I0+w8ZrcDB3Q2fkIHrTAHB4b+tfdWRkS0UhWMOrg71sgyBm22Vv2aU3X3o39SCHwQJMyppoYEtvuOy62PsonxRTYGmY53QahcEknSX4iyQRSXKaRzObrjYKjXVi/u6bkU/VrURvWC0csO0ntBoiyEL/INHuOP15Im0lPrr2OwQv/ZD/rhDv20M3UKImGgadgMOTndg3OOcgmHrBmm4VaTcgW7sB+230YesoHAf2+7+UfsNSytO3rEBnh5c/6nlYTI8ZEQBVpqpVSyTjpEK/IgyuNxlRCvTzX/jC3Q/O3P07nW3gDC47OKdS+aX4FWq9sY9jztTph3l6+ofc7BD9ZXZ+zcRffwJuN7lhJAoAAA==',
    },
})
Record({
    $id: Now.ID['6a64bceefb1b87142ce8f46b5eefdc0f'],
    table: 'sys_hub_action_instance_v2',
    data: {
        action_type: 'f9d01dd2c31332002841b63b12d3aea1',
        action_type_parent: 'baf174c8c3c232002841b63b12d3aee4',
        flow: '5c40e46efb9787142ce8f46b5eefdce1',
        order: '18',
        parent_ui_id: '29c46de0-cb1b-42b4-acbc-7e82e5625126',
        ui_id: 'b0cf009f-a175-4296-96dc-e3f10ad777fa',
        values: 'H4sIAAAAAAAA/+1VXU/bMBT9K1We0yhJk9L2DcGQ9gBI3cQLBcuxb4s1xwm2U+ii/vdd56MUxliFkKZpy9u9vh/nHB8517UnuDfzEuBhNI3GbBSNRnEYxpMkysajLIr5iAJEnu8pmgNWamCF5hivqaxcoq5PNFALnEQBq7QGZbdbPOfClJJurroyzLA7ITmee7PrG98rqcaJFrQ3q18c2U0JRNIMJDaeFqzKcejg8ynOOBRt3z3v4b6E73ZgzLvpRLgkHjk8Ueh78GhBccB1SyoN+F5OFae20BtvZnWFCWTNL5Xc7CruhLIt05w+GvEd5yehq1sCUmOdCruQdAr14hSCwWVpRaHajKWZ7JUrZJWri5aC0xaWtJJ2T9vK4DwoHWQHokW4/HJXPMz7fWdCNew6tLJgVO4iaq0WWWXBuOsACY0oOS1LoVak1MVaNM0IJQ9WEoNgKYsH3GnESgWUOdwBCkSDM8yfNukrqoUjcY5jsHnbkCf3ldvb0ugAk4ZzQ5g0F4WlhmlR2mMcvIYO5tbv7JqlbxmATZ/ue2/mk2UfCZUAihi1qqjmgiqi4b4CY3/27Xx38D77fnUABhctgEPBP2v+BZnOwM9ynX/TD/Pv5A/5t0P0lxn4d7YN4zffrb2bbpxq9ixrLD6xiyoMRzy5dUFl2qhe9I5deLOFd0JRKCmBLzx/0XY3+XAyWU6Ap1GWsUkchUfpNEnTURLTJGPZEW3KzcbgO3hg/fb2odDfiCpQ8hbKp/n8cj44B2PoCgZLXeQDJ+VgVtfxlCVjDuGQZVE2TOIsGVKWseERTGJIx3EaxeOAkJYYIUHeDnntR/IPK/HOFwhyFMXCoFXQP9iL/YAzAZKbV8zZP0HdArLuFux+ox/2DkXjsPn+/00/8G968wOv3zPz/gkAAA==',
    },
})
Record({
    $id: Now.ID['d954a826fbd787142ce8f46b5eefdca6'],
    table: 'sys_hub_action_instance_v2',
    data: {
        action_type: '9d09f99587003300663ca1bb36cb0ba3',
        action_type_parent: 'b93f42810b30030085c083eb37673a63',
        flow: '5c40e46efb9787142ce8f46b5eefdce1',
        order: '3',
        parent_ui_id: '2d5bc4f3-9b1f-4451-a7a7-f2ea0cf618a6',
        ui_id: '5532886b-7fb7-4168-9d13-a5044c5cfecc',
        values: 'H4sIAAAAAAAA/9VY227bOBD9FUHPjlfyTXbeigYGAuw2QJvtSxoQlEjZxNKkSlJOHMP/vkORsh3f47ho+sjhXM7MnBlTfpiHjITXIRlEg3ww6PaTKGq3o6jXa2c4TtN2L0ujFHfCRijwhIKmwSmncJxiXtrzM8KcUoG0GJVYEYYFYoQKw8wMYa2pAV3CdMHx7Ls3ufX3wSd/n40ZJ4qK8PrhsREWWEEoQ1V4Pd+4MrOCIo5TysHNvUUSfLGwGidn8cp4OysboD4i4VxLRSyWqBHSZ0MFoRAqx1zTRjjBgmAj1WwpURSTO8FXgjETBjyGVvlZsxdw34+sXk4hrYy6u+UR+Vo5cTaWLKN3hWFSOIkD6i4lLyfii0vAVpnmuOSmrjJISg3+aGExWxAeUf5tLJ++1gGHTFTp+UsuM8yXJ2yMYmlpqLa9oJxOwBGa4KJgYoQKJaesMgYsk+aIw6GZc/kEQTUbiSbOLPAmlAg3hyC/qcTfsWI2i3/ADRgDIMah28gVXctSVVWZooyXurpQWGjnK1xUtUI/S4vSZe3zQ65EoKAzxQrzCQym1KeyaNRE7x6kyGBFiUwKwmxMvcZ2PdNA7x8lGJP5vMp16tNpppiMKNwuFtuUP9nuvFH4vI711Dx3Gu9K3g/FK5kfivhiQ9GJot80FkaVH28qjvHcJXyE7DE5SAKy6reWyiBXuTW2b/P4bIYOGeXk1bI+AVxtfGfJFqSzfXg9QXMbY2Nrt/74rf0h6QmACHL1ZoIzUf1oAtDL8LZ7kBppvMGDqv1rO9rKsM622YsDI4OX87ds1deavyeArA2/AaLg3qHcAbzer7V7T932xajbbr2NukCch/kS/bJqOwpcv41s62r9F6uPN/WBXWsG8eJxSf3P58WM3xqzZWNuzGb7TcO5zix3c7OHYBd+ee0ZtsavnO4xmPp4yA0remLwUjGr6LUWkeYJ8/923Xt2LWeoSu/dr7j44EM/XXvFsRxNoE+sgKelohlQQSOsKMplKQjyj8oVbWzfcqa08crbO+QrNaUSgYSRC8yYBpV2sNS+xGY5Ibva8DYP6vQ8Bh1AekGVXrBM723F2LOPOhd8671nHw0x41Xp4eOgWOsdVUqqPTvpSNcOtP/EhXUiqPiioN6/0XbxfedmO4L1j/jSfO/WyShOOy3cS9pxHEVxRJKonyRxv5fmPZx08tWgIaRFBmsRPOdADHCPaiLUXY22V4vbjWf/HQI796+hd3Eq3tr4Rgr7cdpKTGABQ5+DGvDxlPy+SKXkFIsVPbu/bWF8lH9MSna/WRsn+ntX037Vj3nJ/hXsZ0lvLSn6NGr1Y5Jd9ZM4uerkpHc1ILh7hQdpN2kTmnXy83+fH/8HhlzudVAUAAA=',
    },
})
Record({
    $id: Now.ID['eac1aceefb9787142ce8f46b5eefdc55'],
    table: 'sys_hub_action_instance_v2',
    data: {
        action_type: 'f9d01dd2c31332002841b63b12d3aea1',
        action_type_parent: 'baf174c8c3c232002841b63b12d3aee4',
        flow: '5c40e46efb9787142ce8f46b5eefdce1',
        order: '1',
        parent_ui_id: '2d5bc4f3-9b1f-4451-a7a7-f2ea0cf618a6',
        ui_id: '69e238a2-c290-430e-95f7-2df3235645f9',
        values: 'H4sIAAAAAAAA/+1V204bMRD9lZWfo9VeEkjy1hYh9aGAaMULgZXXniRWvd7Fl0Aa7b93vJckQEsjilRVbV6iGY9nzjk+a19viOBkSobAo3gSH7E0TtMkipLxMM6P0jxOeEoBYjIgihaAlRpYqTnGKyqdT2w2HzRQCzyLQ+a0BmXrGte5MJWk66uuDDNsKSTHdTK9vhmQimrsaEGT6ebJkl1XkEmag8SNJyVzBTYNPp5gj0PR9rsve7hP4fsZGPOueyZ8Epc8njgaEHiwoDjguDmVBgakoIpTW+o1mVrtMIGs+bmS623FUijbMi3ogxHfsP8w8nVzQGqsU2EbZp1CvTilYHBeWVGqNmNpLnvlSukKddZS8NrCnDpp97R1BvtB5SF7EC3C+edleX/ZzzsVqmHXoZUlo3IbUWu1yJ0F448DJDSiFLSqhFpklS5XotmMUIpwITEI57K8x5lGLFRImccdokA0PMX8SZO+olp4Ep+wDW6uG/LZnfNzWxod4Kzh3BDOmoPCUsO0qOw7bLyCDmY96Oyaj14yAJvsznuv586yDxmVACozauGo5oKqTMOdA2Of+/Zyu/A6+37xAIKzFsCh4B9t/gmZzsCPcp1/R2/m3/Ef8m+H6C8z8K9sGyUv3lt7J9041exZ1li8YmcuilKe3PrAmTbazHrHzsh0Ri48UYNUkHVwgeDwf0YGs7ZRUzIej+dj4KM4z9k4iaPj0WQ4GqXDhA5zlh9PmnKzNnglHlhf396X+mumSlS/RfWe8gUEHLysK+qlDbovLFhSE+T49QXGMQbGzJ2UawzyQlh8RcLnn+A/xf2VtwwUKIOFoNVscLDf+ganAiQ3PzBgf810A7JVN2D7VL7ZXRMfRc3v/4v5di9mn/QQdz710YvF5Pc8bOgK+Fbquq5vvgOebqg3aAoAAA==',
    },
})
Record({
    $id: Now.ID['eb1474eefb1b87142ce8f46b5eefdc4f'],
    table: 'sys_hub_action_instance_v2',
    data: {
        action_type: 'f9d01dd2c31332002841b63b12d3aea1',
        action_type_parent: 'baf174c8c3c232002841b63b12d3aee4',
        flow: '5c40e46efb9787142ce8f46b5eefdce1',
        order: '16',
        parent_ui_id: '521c8ad1-d0e1-4e7f-adaf-a9f93a2b1805',
        ui_id: 'e6eaf675-13f0-453f-8443-dae1de1f522a',
        values: 'H4sIAAAAAAAA/+1UXWvbMBT9K8ZPGxhjx2lo81YWCntYO7LRl64IxbpOxGTJ1Uc+FvLfd2XLadpuXSiBMZjf7ofOPefqWHfbmLN4HA+BZflFPiqLvCgGWTY4H+azUTHLB6ygAHmcxJLWgJ0aSqUZxksqnE9stx80UAuM5GnptAZpdzusM24aQTe3oQ0z5YILhvV4fHefxA3ViGhBx+Pts5LdNEAEnYHAgxNVuhpBo48TxDiWbX962tN9Tt/PwJgFdMJ9EkueT54lMawtSAY4rqLCQBLXVDJqld7EY6sdJlA1u5Fis+9YcGk7pTVdG/4D8YeZ76sApZVhC/uQhA31y1G8hJvGciW7jKUz0W9OCVfL606C3y1U1Al7sFtnEA8aT9mT6BhWXxZqNe3nXXHZqgtshSqp2EfUWs1nzoLx1wEC2qXUtGm4nJNGqyVvDyOVOp0LDNJKqBXONHwuU1p63ikuiKZXmJ+06VuquRfxCWHw8K4VTx6cn9vJCIRJq7kVTNqLwlZTat7YSwReQqC5S4JdZ2evGaC8eLzvA8xHy64JFQCSGDl3VDNOJdHw4MDYl76d7gtvs+9XTyC67ggcS/7J4d+ICQZ+kgv+PTuZf8//kn8Do3/MwH+ybTZ49d06uOnWqebAsiulvxOpUN43l2UF++wFGaSM6iINplHSQMRN5An53DtaoTmjIosMlNGKchtZXsP7lw4/JfQb/xGokZCFqKOUHL2tHuCKg2DmF+vrf5IwgCzDgP1Df7I/JR9l7ff/vT/he3//E/MMcTWgCAAA',
    },
})
Record({
    $id: Now.ID['eea3f4aefb1b87142ce8f46b5eefdc92'],
    table: 'sys_hub_action_instance_v2',
    data: {
        action_type: 'f9d01dd2c31332002841b63b12d3aea1',
        action_type_parent: 'baf174c8c3c232002841b63b12d3aee4',
        flow: '5c40e46efb9787142ce8f46b5eefdce1',
        order: '13',
        parent_ui_id: 'c7071aad-038d-4d82-8a1c-f4d3d03fea9d',
        ui_id: 'b5807be3-d2f3-4df7-af7f-c28f56641e80',
        values: 'H4sIAAAAAAAA/+1VyW7bMBD9FYNn29Dq7RYgMNBDEyBtc4kDYUSOHAIUpYiUE9fwv3eoxXHSNDWCAG2B6jajWd6beSRvdkwKtmARCs+f+xMe+mEYeF4wi/x0EqZ+IEJA9NmQaciRIivkRSXI3oCqnWO3i7mXhXEWjiALs1E0zWajNJzyURZnAWA05fNJOG7z9nvKFNKUCrbXXQHy8DupRIWaLW5uh6yEinpZrNhi9+KX3ZaYKEhRUeJ5wesctR18Oqcap/Los696Ii+JuR5ki656Ip2Tfjk8vjdk+GhRC6R2GSiDQ5aDFmCLassWtqrJUSGIS622h4g7qW3LNIdHI79T/chzcRkSNd5N4WAm3YT64RSS42VpZaFbj4VU9ZMrVJ3ri5aCmy1mUCt7NNvaUD0sHWQHokWYfbkrHq76fkupG3YdWlVwUAcLrK1kWls0bh2osBlKDmUp9Topq2Ijm2SCko/XioxxpooH6mnkWo+BO9xjGhCMl+Q/b9zXUElH4jOVoeR9Qz65r13flkYHOGk4N4STZlEUanglS3tGhTfYwdwPOyGn8VsC4POnfR/VfBLzYwIKUSdGr2uohASdVHhfo7GJI7KRdvuzgK/aiMHZU8T7BP3VQRpctJBOpfMs+Rf0Okk/83WKjj9M0bM/pOgO0T8m6d8J2QvevMmONt1o1xyJuCFgCKJjYyzY2qxqzwvFbtVLd8UWK/atJAo4GDyAGSxBKhQrNly1ZZoALmYZRxH7acpnge9N43kUx2EUQJTyNJo24WZr6Io8Mf6V6/8vR/vOk4w5ASe4LcvhyTvtCywlKmFeWXJ/lLsGyaZrcHigPuw8+xOv+f6/Ux/4Tt3+ALT2mtdyCQAA',
    },
})
Record({
    $id: Now.ID['117eb6103b2fc754546a249693e45a38'],
    table: 'sys_hub_action_instance_v2',
    data: {
        action_type: 'f9d01dd2c31332002841b63b12d3aea1',
        action_type_parent: 'baf174c8c3c232002841b63b12d3aee4',
        compiled_snapshot: 'f9d01dd2c31332002841b63b12d3aea1',
        flow: '017e76103b2fc754546a249693e45a48',
        order: '8',
        parent_ui_id: 'd1feae64-613a-430b-97a1-b531ffde39fe',
        ui_id: '75a7a82b-0b28-4050-b6ba-487b443e5457',
        values: 'H4sIAAAAAAAA/+1WW0/iQBT+K808Q9NSqMibKzExcXWjG19Em+nMKUx2Oq1zAVnCf9/TGxI1Lia+mF0SHs5t5vu+OefA3YYITiZkCDwIj8OYRWEUDYJgMB6GaRyl4YBHFCAkPaJoDpipgRWao72k0lWOzeZUA7XAk9BnTmtQdrvFOBemlHR926ahhy2E5Bgnk7v7HimpxhMtaDLZvAgdCknSFCSmXneYXmK067KyecFcjrgS0Tkv2sppG/HOpxjBogpOGPQIPFlQHBBIRqWBHsmp4tQWek0mVjt0IGl+peR6l7EQyjZEc/pkxG+8eRhUeRkgM9aKsDOTVqDGnU2ppTd4MrNO7/QqBAPTaMIho07a031fk3BVWlGopsTSVHbVhXS5umwUIbsD9t7DGQQBZcWzQt7Qym4Wxeq6A3kmVC1JS1EWjMqdRa3VInW2grMhIKHWOKdlKdQ8KXWxFHUxQsn9uUTDz2SxwjuNmCufsgq3j6pS/wz909p9S7WoSHzHY7B42yNmbU4lNeaZCmqYPLoKSUOspZDUKtQSJHUnVMVMi9Ke4FVLaIFve23Tp6P3OowdPzfU3pnPjf+UUAmgEqPmjmouqEo0PDow9nX3X+8CHxuCAyB2Q/Czfvq3Ibdz8Mp3sV/rXTaBdgpGnzYF4680BS2NLz8Gf2v+YPDuet3rpLrfzV7jG4vrfuaCIOLRQ2U401ibWdf3MzKZkR8VdYPkgHs3juGDmcxJicHerDmsTgv4KMJ7IUyjYDwIg/g4HmQQB4wPU5YeBXU6ssftfWD+9mFV6F+JKvBNGmTfKJ+DN4VK7CWtBPe8dia9BTX1N8Vh9jyzB9TDFysljif3vRNjwHqbzWgUDcbjOO0fZelRfxjG4/4xD6M+HQXDIRuxDBjzmx8kn1Y1vnJ5Cnq79YTxzlWNADxVrPzXa+K/sp+m7Mf27AHT0O3ZMwGSmzfGo1uygMzwGZNmXF4s2jbo3bbB3V+OT9u2YRzUny+0c/+Zfx73fwCh8bP8cAsAAA==',
    },
})
Record({
    $id: Now.ID['157eb6103b2fc754546a249693e45a35'],
    table: 'sys_hub_action_instance_v2',
    data: {
        action_type: 'f9d01dd2c31332002841b63b12d3aea1',
        action_type_parent: 'baf174c8c3c232002841b63b12d3aee4',
        compiled_snapshot: 'f9d01dd2c31332002841b63b12d3aea1',
        flow: '017e76103b2fc754546a249693e45a48',
        order: '4',
        parent_ui_id: '2d5bc4f3-9b1f-4451-a7a7-f2ea0cf618a6',
        ui_id: '19a9aac6-17ec-4c7d-a213-7a5dfddae77e',
        values: 'H4sIAAAAAAAA/+1UTU/jMBD9K5XPbZTPNu0NUSEhsSAB4kLZyLEnxZLjZB2n0K3633eSOG0XWFQkDot2c/N82O+9vJn7DRGczEgI3PWm3pgFXhD4ruvHoZeOg9TzeUABPDIkiuaAlRpYoTmeV1TWTWCziaLAj+NxOppk6WQUeuN4NOVeMKKRG4YsYhkw5ly3fdstdnJRlZKu7+wFGGGPQnINiszuH4akpBrfMqDJbPMidSxYSVOQWHrdo32J3qzL5swLVuegTCL64IXtnNvM4HyOGWxq4HjukMCzAcUBgWRUVjAkOVWcmkKvyczoGgMaKL9Scr2reBTKdERz+lyJn/hy6DZ1GSAzZkXYHRMrUBfO5tTQG7yZmVrv9CoEg6rThENGa2lOD2NdwVVpRKG6FkNT2XcXss7VZacI2V1w8D/qCkFA2fBskHe0spvH4um6B3kmVCuJpSgLRuXuRI3RIq1NA2dDQEKrcU7LUqhlUupiJdpmhJI7S4kHJ5PFE75ZiaVyKGtwO6gqdc4wPm/Dd1SLhsQ3vAabt0NSratTSatqTwU1TH7UDZKOmKWQtCq0EiStE5pmpkVpTvCpFVjg26EdB9d/12GwN1Q7BdXBOLTkKoTfMO2ILGrXDfhm0Rt/QWYLclsMUhjMoSlZUQN8QYaL7pY276eTLAYeeWnKYt9zJ9E0xEELfRqmLPWnbTkKgM49sn77vRG0KmqNFmu1sMA2p+hYRJB4zl6i7WH560JWa7SBcToEb431vyvEx7bZEV7rt9mZAMmrN8xnt5mBHGU1kHRm/H2h3drk4M4mdzvt05aaN3bb7/9q+3tXWxq9Zzc23bvr4M79entOqARQSaWWNdVcUIWuRxjCrBOEC+b1Iji3+cGJzX9sPo4A3M/HbWuEtwn0I/IydnHYO7jsEnY0ok+bjPgrzYSl8eWH4k+j8PALBrXlS/YKAAA=',
    },
})
Record({
    $id: Now.ID['157eb6103b2fc754546a249693e45a3c'],
    table: 'sys_hub_action_instance_v2',
    data: {
        action_type: 'f9d01dd2c31332002841b63b12d3aea1',
        action_type_parent: 'baf174c8c3c232002841b63b12d3aee4',
        compiled_snapshot: 'f9d01dd2c31332002841b63b12d3aea1',
        flow: '017e76103b2fc754546a249693e45a48',
        order: '16',
        parent_ui_id: '521c8ad1-d0e1-4e7f-adaf-a9f93a2b1805',
        ui_id: 'e6eaf675-13f0-453f-8443-dae1de1f522a',
        values: 'H4sIAAAAAAAA/+VVXU/bMBT9K5GfNqmqkgYQ9G2iQprEYIKJF0DRbXxTrDl28Aelq/rfd504aQWIgcQLWt58v3zOyT3J9ZoJzqZsD3maHWUHZZ7l+SRNJ4d72fwgn2cTngNixkZMQY1UabDUhtP5AaQPgfX62CA45EU2Lr0xqNxmQ3kubCNhdRXLKFLeCckpz6bXtyPWgKGJDg2brp+k3gpJwhwllV70mJ5idKsmnLkufU24CtEHT2PnLGaS7zPKUFOAk6Ujho8OFUcCUoG0OGI1KA5OmxWbOuMpQKT5uZKroeJOKNcRreHRij90814a6iokZmUUYTgWUaAuXM3AwSVNLp03g15alGg7TThW4KU73o11BeeNE1p1LQ7msu/W0tfqrFOEDQN23oe3BAKbwDMg72hVl3d6edGDPBGqlSRSlLoEOZzAOSPm3gU4a4YSW41raBqhFkVj9INomwlKPV5IOowrqZd0pxULNYYy4B6TqjA+ofisDV+BEYHEDxpDzZsRsyt7LMHaLRXSsLj3AUlHLFIoWhVaCYp2E0JzaUTjvtFVDxiBb0Zx6ef7r21YebRdqJ2Z28V/LEAiqsKqhQfDBajC4L1H655v/8WQeJ8J3gCxN8Gv9tW/DDn64FnsdLc3OesS0QX7H+aCw8/kgkjj09vgX8ufTl79vO5sUrvvdmfxl9r8LpQmwjc+TXP+M1C0RIL4JgZto5XFRNgkAAqxL1DRiid5mlgskyUIlzhR49fnPvnI0e9z2hv06J12IlBy+4JAvc2wJk4Oi06wJ1aLyeQqJoefzof5LTtI2+cTue6/+ffc/gV3ydB9cgkAAA==',
    },
})
Record({
    $id: Now.ID['517eb6103b2fc754546a249693e45a39'],
    table: 'sys_hub_action_instance_v2',
    data: {
        action_type: 'f9d01dd2c31332002841b63b12d3aea1',
        action_type_parent: 'baf174c8c3c232002841b63b12d3aee4',
        compiled_snapshot: 'f9d01dd2c31332002841b63b12d3aea1',
        flow: '017e76103b2fc754546a249693e45a48',
        order: '9',
        parent_ui_id: 'd1feae64-613a-430b-97a1-b531ffde39fe',
        ui_id: 'b72b871b-7e19-46d9-8aa6-ab65c25baca9',
        values: 'H4sIAAAAAAAA/+VVy07jMBT9lcrrtkqapK8dokIaiQEJZthMUeTY18WS4wQ/Cp2q/z43r7YCxBSJxaDJ7j59zrXPza8tkZzMSQw8CGfhmEVhFI2CYDSNw2wcZeGIRxQgJH2iaQ6YaYAVhqO9pspXju02YYGIEhENqIjEIJ6I6SCLJmwgEjGiEE/YbBwNm7rdDiu5tKWim7u2AXrYg1TcgCbzX/d9UlKDZzkwZL59EToVrKIZKEy96dC+RO82ZWXzgvkctEtl57xsKxdtpPdtgREsquCEQZ/AswPNAYEIqiz0SU41p64wGzJ3xqPDAOXXWm32GQ9Su4ZoTp+t/I0nx0GVJwCZsXYIezNtB9S4xYI6eoudmfNmP69CMrDNTDgI6pU7P/Y1Cdelk4VuShzNVFddKJ/rq2YiZN/g6D68RRBQVjwr5A0tcftQPN10IC+krkfSUlQFo2pvUeeMzLyr4GwJKKhnnNOylHqVlqZYy7oYoeTDlUJjKFTxhGdaudJDyircQ5wqHV6gf1G776iRFYnv2AaLd31iN/ZcUWsPVHCG6aOvkDTEWgppPYV6BGn9EqpiZmTpzvCoNbTAd/1WDlny3gtjs8ODOup5kMRzShWATq1eeWq4pDo18OjBurSitpZu81oGN01G7+yQ8TFZnAC6k8WP+jG8TaJVxivf5XFt76oJtLpIPk0X06+ki5bGlxfG3+QQjN5duEcvqVaAPZJCTcki6IqfddR5u/RBEPHtshPAksyX5GeJpID3bj3elRVeKfT3l02fOiOYTQUDnoRZxqajMJgkszhJonhE44xl8aROR+K4yk/Mf+Nf9K/D/dhGOOHeuo1wIUFx+8ZFdusAciTvIG0u9sVKaIO9uza4/11+2l4Ix0H9faHt8N/8Ne//AHTHrt5GCgAA',
    },
})
Record({
    $id: Now.ID['557eb6103b2fc754546a249693e45a3d'],
    table: 'sys_hub_action_instance_v2',
    data: {
        action_type: 'f9d01dd2c31332002841b63b12d3aea1',
        action_type_parent: 'baf174c8c3c232002841b63b12d3aee4',
        compiled_snapshot: 'f9d01dd2c31332002841b63b12d3aea1',
        flow: '017e76103b2fc754546a249693e45a48',
        order: '18',
        parent_ui_id: '29c46de0-cb1b-42b4-acbc-7e82e5625126',
        ui_id: 'b0cf009f-a175-4296-96dc-e3f10ad777fa',
        values: 'H4sIAAAAAAAA/+VV207jMBD9lcrPbZSkSSl9W7WLtBIXqax4oWA59qRY61ywHaAb9d93EielAsQWiRdE3uZmnzk5M76uiRRkRiIQfnAcTPg4GI9D3w+nUZBMxkkQijEDCMiQ5CwDzNTACy3QfmCqahx1PdfALAgaeLzSGnK73WJcSFMqtrnq0tDD76QSGCez65shKZnGEy1oMqtfhA6FpFgCClOXPaaXGO2mbGxR8CpDXFT2ztOuctFFBr8WGMGiBk7gDwk8WcgFIJCUKQNDkrFcMFvoDZlZXaEDmxYXudrsMu5kbl2jGXsy8i/eHPlNXgrYGe9I2Jm0I8i50wWz7BJP5rbSO74KycE4TgSkrFJ2vu9zCRellUXuSixLVF9dqCrLzx0jZHfA3v+oDIKAsumzQe7aSi/visdlD/JE5i0lXYuq4EztLGatlkllGzg1AQUtxxkrS5mvaamLB9kWI5TMWys0vFQVj3inkevcY7zB7SGrzDtB/6J1XzEtmybO8Bgs3g6J2Zi5YsY8t4Ic0vuqQeIa61qgLQstBbRVQlPMtSztD7zqATrg22En+iR+T2H8+FlQe2c+C/+JMgWQU5OvK6aFZDnVcF+Bsa/Vv9wFPjYEB0Dsh+B3++vfhtzNwSvf6X7t4NwFuimIP20Kpl9pCro2vvwY/E/8fvjuet1TUqt3syd8Y3HdryrfH4votjEq46x61et+RWYrMmdInVIgVmS4ctWt359O0ymIOEgSPg0D/yg+juJ4HIUsSnhyxNp0bBfX9YH529vHQv+heYE/wUH5uVxeLAdnYAxbwyDVRTZoyB3M6jo85tFEgD/iSZCMojCJRownfHQE0xDiSRgH4cSj1DVGqZe5Q9561L4xEx/bYweord9jJxKUMG/Ir19ikCGvFqiT44tF1gUHV11w96R/2jYLJn77faGd9m1e9pt/614nMNAKAAA=',
    },
})
Record({
    $id: Now.ID['917eb6103b2fc754546a249693e45a3a'],
    table: 'sys_hub_action_instance_v2',
    data: {
        action_type: 'f9d01dd2c31332002841b63b12d3aea1',
        action_type_parent: 'baf174c8c3c232002841b63b12d3aee4',
        compiled_snapshot: 'f9d01dd2c31332002841b63b12d3aea1',
        flow: '017e76103b2fc754546a249693e45a48',
        order: '12',
        parent_ui_id: 'c7071aad-038d-4d82-8a1c-f4d3d03fea9d',
        ui_id: '658b2d2e-b33e-47a6-9bc5-982b9bea6531',
        values: 'H4sIAAAAAAAA/+1WyW7bMBD9FYFnW5W827c0aYACaVMkQS51K4zIkU2UolSSSuIa/vcOtThGErQpkB6C1jfOxvceZ8b6vGVSsAUboYjieTzhw3g4HETRYDaK08kwjQdiCIgx6zENOVKkQV4YQecbUJU3bLfHBsGhSOKQV8agdrsd+YW0pYLNdRtGFr6WSpCfLT5/6bESDFV0aNhi+8D1XEgKUlQUetFheojRbUp/FgWvcsKVyM541maetJ7g/Ql5KMnDiaMewzuHWiAByUBZ7LEctABXmA1bOFORgUiLc602+4i11K4hmsOdlT/o5lHk4zIkZrwVYX9MWoEac3YCDi6pMneV2etVSI620URgBpVyx4e2JuC8dLLQTYqDVHXZhapy/bFRhO0LHLxHZQkElp6nR97Qyi7Xxe1FB/JU6lqSlqIqOKj9CZwzMq2ch7NlqLDWOIeylHqVlKa4kXUyQcnDlaJDmKnilu60cqVD4B53SKpCeEr2k9p8DUZ6Eh+oDCXvesxu7LECa++pkIbJ98ojaYi1FJJahVqCpO4En8yNLN0RXXWDLfBdr236dPyrDuPz+4Y6qHnf+HcJKESdWL2qwAgJOjH4vULrHnf/xd7xZ0PwDIjdEFzVT/805HYOHtnODnODj42jnYLxi03B7DVNQUvj1Y/B75o/GvxyvR50Ut3v9qDxrQNX2WUVRUOxXXatvmSLJfvk2VriQ9SD4J0xhVmy3rJJrSNGfJbNUIzjNOWzQRxNx/PReDwcDWCU8nSa1uHElXb1M+N3X28L8y3RBb1AA+otiBUGAr20N+DlDdrJDDKQCkVwK9062G7jOcwB+KQfT5H3R3wq+jCIh/0pjEUmBOB0imHzbxKWB9SSHK2FFe52YXBlNlS9b6s0l8553t1dhQmOC+0IRRBcbqzDPDgSudTSOuOH6I3H6RPOs4w62DxeG/+V/mtK/9kefsa0dHv4VKIS9onx6ZYw5vSIDpNmnB4s4tYZXLfO/SfJi23jeBLVv1e0k/+ZL5MvPwF3Ypj3kAsAAA==',
    },
})
Record({
    $id: Now.ID['d17eb6103b2fc754546a249693e45a32'],
    table: 'sys_hub_action_instance_v2',
    data: {
        action_type: 'f9d01dd2c31332002841b63b12d3aea1',
        action_type_parent: 'baf174c8c3c232002841b63b12d3aee4',
        compiled_snapshot: 'f9d01dd2c31332002841b63b12d3aea1',
        flow: '017e76103b2fc754546a249693e45a48',
        order: '1',
        parent_ui_id: '2d5bc4f3-9b1f-4451-a7a7-f2ea0cf618a6',
        ui_id: '69e238a2-c290-430e-95f7-2df3235645f9',
        values: 'H4sIAAAAAAAA/+VVy07jMBT9lcjrqkr6gLa7GSqkkRhAMGJDIXLsm9Yaxwl+FDpV/n2u82oFiCkaNohuqvuwc87JuTe3WyI4mZER8DCaRkdsGA2HgzAcTEZRcjRMogEfUoCI9IiiGWCnBpZrjvGaSucT2+2JBmqBx1GfOa1B2bLEOhemkHRz07Rhhq2E5Fgns9u7HimoxhstaDLbPisdCknSBCS2XrWYnmO0m8LHPGcuQ1yxaJNnzcl5Uwl+zLGChzycKOwReLKgOCCQlEoDPZJRxanN9YbMrHaYQNL8QslN17ESytZEM/pkxB988ij0fSkgM9aI0IVxI1CdTufU0mu8mVmnO71ywcDUmnBIqZP2ZD9XN1wUVuSqPmJpItvTuXSZOq8VId0Fe+/DGQQBhefpkde00utV/njVgjwVqpKkoShzRmUXUWu1SJz1cLYEJFQaZ7QohFrGhc7XojqMULL+UmLQT2X+iM80Yqn6lHncfVSV9k8xP6/SN1QLT+InXoOHyx4xG3MiqTE7Kqhh/OA8kppYQyGuVKgkiCsn+MNMi8J+w0etoQFe9hrTJ+O3HMamO0Pt3bkz/lNMJYCKjVo6qrmgKtbw4MDYl+6/6grvG4IDILZD8Kt69a9DbubgRe5s/2xwXheaKRh/2BRMPtMUNDQ+/Rj8y/zh4M31uuekyu9mz/jG4rpfuDAc8sG9D5ypo+2i9f2CzBbk0lM3SA51CC4RHP4vSG9RX1S1TCaTdAJ8HCUJmwyi8Hg8HY3Hw9GAjhKWHE+rdmSOm/vA/vL+Mde/Y5Xj+6hRfad8CQEHL/SaerGDZk6DFTVBgjMcGMfQTyZ1Um4wSDJh8YvWfznIX4r7+3bVAY5qd9WpAMnNKxZrFxVkqKSFuLbcs2XVFIObpth9tj9sY0VHYfX7RHvrq3y926QHvXO7j95sJv83CYaugXfil2V59xdoJa3BOgsAAA==',
    },
})
Record({
    $id: Now.ID['d17eb6103b2fc754546a249693e45a34'],
    table: 'sys_hub_action_instance_v2',
    data: {
        action_type: '9d09f99587003300663ca1bb36cb0ba3',
        action_type_parent: 'b93f42810b30030085c083eb37673a63',
        compiled_snapshot: '9d09f99587003300663ca1bb36cb0ba3',
        flow: '017e76103b2fc754546a249693e45a48',
        order: '3',
        parent_ui_id: '2d5bc4f3-9b1f-4451-a7a7-f2ea0cf618a6',
        ui_id: '5532886b-7fb7-4168-9d13-a5044c5cfecc',
        values: 'H4sIAAAAAAAA/+VY32/iOBD+V6I8Uy7hV6Bvq1ZIlfa20ra3L3sry4mdYp2xs7ZDSxH/+41jByKgQHRUanWPnhnb38x838TwcxUyEl6HZBJN8slkOE6iqN+PotGon+E4TfujLI1SPAg7ocBzCpEGp5zCcoF5adcvCHNKBdLiqcSKMCwQI1QYZpYIa00NxBKmC46XP/yWO+8Pvnh/NmOcKCrC65+/OmGBFVxlqAqvVzuuc7FynFIOoY8e7A52syw2S1T5nO1rc1vwzTmkIhZK1Anpi6GCUMCQY65pJ5xjQbCRarmxKIrJveBbw4wJAyeGNvhFs1e4dxzZuJxCVhl1vs0S+VI5c36LDX4wqsxMqXxoNpMso9rVg9Acl9zcNG0u4L4wTAq3xaXtdktezsU3V45wc0DdGbCUGkDQwiZqkfs08oeZfP5eo5wyUdXEO7nMMN+ssDGKpaWxeFYh5XQOB6E5LgomnlCh5IJVmwHLvPvEYdHNuXyGSzV7El2cWeBdqCvuTsF+W5l/YMVsFn/CMbAZADEODEGuhVqWqirlAmW81JVDYaHdWeG6E+qlvuFAx23mUHL0u7S4XR18xsgVzW7JFCvMFzhiQX1y604tl+FRCk62lMukIMyi0A3NABoQyd8lbCarVZX9wifYTTF5ouBdr/eFc/a+loI6nU0tqJtmOodS9NLas309dICXVnwxaQ2i6DOJCy7/eNpqrxZXghOSiclRkpEtn7RUBrlaNjSzr4bWPD8DQs3ze8vMIF2+hcrTPGeUk0NfkKl17HxBev/PL8iHJDkAIsh1jwnORPUcAKDvxf7hUeql8Q7PKno1vhfWhnW2rwEcGBm8tlbCGXBqJTzA3cGjw3MAYj3vK8rszvra6AXQv5gA+r3LCGC1SXNTyAM1r1+Atpt1/KuNx7vxQMHGhnh9SGCt7ozb3tlb7wu430rBTbI5z+0bnLvwU/ENRXbecwTMYKu/Dzn9omcGDymzvb2OItI8Y/7PIb9nHKobVaX3Ds/O+Ogvn7Tx7GQ5mkPnWAGvY0UzIIdGWFGUy1IQ5N/FWyLZTuZMaeOD9wfNdwr6EYEEYQZmRoMqOthEt/wQn86jLuVdHtSJ+Nt0AIkEVSLBJpF2abcZWoMLPk4vPbSmmPGqG/CTp2i0kyol1RuD60QjjzDizKl2Jqj4oqD++9g7JIGD4+8E1k/x+/nyoymjOB308Cjpx3EUxRFJonGSxONRmo9wMsi3GkVIiwymKZycA1XgeFRTo+5ztD9/3EhtO2jOQFVT8FYK+8O6l5jAwoL+BjWs08D9QEml5BSLnYnyCN+JP6Yev+fr8MNNlU/xb1LJHncr7UwHa/1e74aS/SXY75LeWYqNadQbxyS7GidxcjXIyehqQvDwCk/SYdInNBvkl3wK/PoX4+R5SLIVAAA=',
    },
})
Record({
    $id: Now.ID['d17eb6103b2fc754546a249693e45a3b'],
    table: 'sys_hub_action_instance_v2',
    data: {
        action_type: 'f9d01dd2c31332002841b63b12d3aea1',
        action_type_parent: 'baf174c8c3c232002841b63b12d3aee4',
        compiled_snapshot: 'f9d01dd2c31332002841b63b12d3aea1',
        flow: '017e76103b2fc754546a249693e45a48',
        order: '13',
        parent_ui_id: 'c7071aad-038d-4d82-8a1c-f4d3d03fea9d',
        ui_id: 'b5807be3-d2f3-4df7-af7f-c28f56641e80',
        values: 'H4sIAAAAAAAA/+VVy07jMBT9lcjrtMqzrx2iqjQSAxLMsKEourFviiXHCbZT6FT993FebQUIisRi0GR3nz7n2ufmbks4IzMSIfP8qT+ioR+GgecFk8hPR2HqBywERJ+4REKONlMhLRSz9hpEVTu225h6WRhn4QCyMBtE42wySMMxHWRxFgBGYzodhcO2brezlYzrUsDmtmtgPfSBC6ZQktndvUtKUPYsg4rMti9Cp4IVkKKwqdc92pfozaasbVbQKkdpEt47L7rKeRdxfsxtxBbVcHzPJfhsUDK0QDIQGl2Sg2RgCrUhM6Mq61AI7EqKzT7jgUvTEs3hWfM/9uTIq/MytMxoN4S9mXQDat3ZHAzc2M7UVGo/r4JT1O1MGGZQCXN+7GsTrkrDC9mWGEhFX12IKpeX7UTIvsHRfVTagsCy5lkjb2llNw/F03UPcsFlM5KOoigoiL0FxiieVqaGsyUosJlxDmXJ5SopVbHmTbGFkg9XwhrDTBRP9kzNV3IItMY9tFOF4cL65437FhSvSfy0bWzxziV6o88FaH2gYmeYPFY1kpZYRyFpptCMIGleQl1MFS/NmT1qjR3wndvJIY3fe2F0enhQRz0PknhOQCDKRMtVBYpxkInCxwq1SWpqa242r2Vw3WY4Z4eMz8niBNC9LH41j+FtEp0yXvkujmudyzbQ6SL+Ml1MvpMuOhrfXhgfycEL3l24Ry+pUYA+kkJDSVvQNT9twFR6WXleyLbLXgBLMluS36UlhY7zBNpZABfIlsRdtm2aBMomGUUW+2lKJ4HvjeNpFMdhFECU0jQaN+mWt93kJ+a/8Sv6x9F+bh+ccGv9PlhwFEy/cY39MsDccjeYtNf6YiF0Qee2C+5/ll+2FfyR13zfaDf8N//M+7/JvTCnRAoAAA==',
    },
})
Record({
    $id: Now.ID['dd7eb6103b2fc754546a249693e45a36'],
    table: 'sys_hub_action_instance_v2',
    data: {
        action_type: '2de05916c31332002841b63b12d3aee1',
        action_type_parent: '02f0b88cc3c632002841b63b12d3aeff',
        compiled_snapshot: '2de05916c31332002841b63b12d3aee1',
        flow: '017e76103b2fc754546a249693e45a48',
        order: '5',
        parent_ui_id: '2d5bc4f3-9b1f-4451-a7a7-f2ea0cf618a6',
        ui_id: '5c0f35f3-af3f-47f8-b37c-f5f2ae47c963',
        values: 'H4sIAAAAAAAA/+1WyW7bMBD9FYFn2dBmW/atTZBTmxRJmkucCBQ5sgnQkkJSSVzD/96hKC91bSQFegla3zh8M3xvFo3vV0RwMiHDEILBOByyOIzjKAiiNAnzYZyHEY8pQEJ8UtIFINLQXELWHnzyTGVjja8ZlQBlpstZQxUXtMwUPDWgTUaZEc/CLBHNha4lXd51TtcO4X3aIdhcSK6gJJP7B5/UVOEzBhSZrA6u3kta0hwkQm8t6xMizLI+avuy7+tduotKccsn8Am8Gig5IJGCSg0+WdCSU1OpJZkY1aBBAeVXpVxuEXNRGgxILPZVix/4bBpYXAGojIG72x6zLmHOXJxTQ28wMjON6qBsXgkG2uWEQ0Ebac72bQ5wVRtRlc6lldl5V7JZlJcuJWQbYFMftDQaSUBtdVrmnYziZl69XG9YXoiyTUl3KStG5fZEjVEib4zlsyIgYYGBsgWta1HOslpVz6J1Ri6L/kzioV/I6gUf1WJW9m3zVGUf00r7F2g/b813VAmr4iuGQee1T/RSn0mq9U4LJjF7aiwTp6zTkLk0WBemRG3a3oOO7trfTAOHYHyyscJ810jtAOi9SejaftoEQcxXqzPsAQM8C/usUZgus14/WjW6ahQWuC2Gwx4ZIWEZ42BkqAzMnt8m+mAQR2k6zHujIh/1knCY9sY8jHt0ECQJG7ACGOtfA8Omte+C04wZdQHOoR1OJOh9pnwGXjeRj21dNOJskVwNuienmyGeksmU3FZeDt4uDJ8Sf+pS0d5H+ahIgQ/CPGdpFAajwThBzklEk5zl0biFY+1Q6Tvx61+5aUNNo49y+15zK8wT2vuGtUf0Abl0kBbs5GNJekjubfz692/c/3b4t9vhDxfa29+dzUK7ECC5PvIh2mwzWKB2A5n7MB1stO7Su+suu60W/q2tFg6D9veBdpsT9+FX296/mBNL7uEny28+//QJAAA=',
    },
})
Record({
    $id: Now.ID['1b0470eefb1b87142ce8f46b5eefdc32'],
    table: 'sys_hub_flow_logic_instance_v2',
    data: {
        block: '9d157062fb5b87142ce8f46b5eefdc29',
        connected_to: 'd1feae64-613a-430b-97a1-b531ffde39fe',
        flow: '5c40e46efb9787142ce8f46b5eefdce1',
        logic_definition: '1f781bf3c32232002841b63b12d3aee6',
        order: '15',
        parent_ui_id: '2d5bc4f3-9b1f-4451-a7a7-f2ea0cf618a6',
        ui_id: '521c8ad1-d0e1-4e7f-adaf-a9f93a2b1805',
        values: 'H4sIAAAAAAAA/6tWyi8tKSgtKQ7JdywuzkzPU7KKjtVRyswDiUHYZYlFmYlJOalQbkpqcmZxZn5eCEjME0ldSmVeYm5mMrJQeX5RdlpOfjlCrBYAD1ouqHEAAAA=',
    },
})
Record({
    $id: Now.ID['2ec3a8e2fbd787142ce8f46b5eefdc4f'],
    table: 'sys_hub_flow_logic_instance_v2',
    data: {
        block: '11157062fb5b87142ce8f46b5eefdc06',
        flow: '5c40e46efb9787142ce8f46b5eefdce1',
        flow_variables_assigned: 'badge_id',
        logic_definition: '4f787d1e0f9b0010ecf0cc52ff767ea0',
        order: '2',
        parent_ui_id: '2d5bc4f3-9b1f-4451-a7a7-f2ea0cf618a6',
        ui_id: 'f8050dbe-d315-46a6-9aab-b95d788af1da',
        values: 'H4sIAAAAAAAA/+1Vy27bMBD8FYNnW5BlRbGdU4AigIG2ARo3lyYQKHIlE6VIhQ87buB/71IP23CBoocefSOH+5gZ7UIfRHvXeGfX+t5aUSmy/PE6JkIFDM8fRNEayJIUlFeQC07GZEulDxAeubCNpPvnE8I2QnIDfZ2GGkx3YMjy4+LJ7RvIJS1AYuKTM0JVmI4NlmTBilmWQlIW/HZ+O00TBvMyzYobgJIzDhg3JJ7R+pNoaIGIHYprwwOT6ZjAuwPFAZuVVFoYk5oqTp02+yNigPJHJU/ARijXaazpuxW/sPQ8juMQWQLKYr0Dx2veuzMYowWDx8YJrTrE0UIOrmnpa/W1UxB8hZJ66c589RbrQRNYBxo9p/Jpo3ffhoYPQrUC+0epGZXHG3VoQ+Ed2PAtvFhfmNMhny8/CEiosWNe06ZBJG+M3oq2C5Kuo0riJSql3iG7MD8RZUFhhG7S6AHxTy38TI0Icr9gGUwO7b4r8eZhFT54mfEsYwmbZClNJynl8YQuFsUkwWMyK2+SxXRKDq21+ZsPojqTejvyzlEMsMyIxt0jhS2Kc8bDgAXRx9HA898iccLNqA1e8dGLj+MZH5U8byWhL1UFJmLeoOcu2vbCbDRUv3tRBpw3aihxRw6Hw2vYmz603at/nfTr/l3377p//2P/ODBh0Zt1iF8Nf7jwsMfZFewc2mnzM7h6wg6/AX+jifQrBwAA',
    },
})
Record({
    $id: Now.ID['2f543ceefb1b87142ce8f46b5eefdc9d'],
    table: 'sys_hub_flow_logic_instance_v2',
    data: {
        block: 'd5157062fb5b87142ce8f46b5eefdc01',
        flow: '5c40e46efb9787142ce8f46b5eefdce1',
        logic_definition: 'e9060aa2c3013010ace8b740ad40dd51',
        order: '0',
        ui_id: '2d5bc4f3-9b1f-4451-a7a7-f2ea0cf618a6',
        values: 'H4sIAAAAAAAA/6tWyi8tKSgtKQ7JdywuzkzPU7KKjtVRyswDiUHYZYlFmYlJOalQbkpqcmZxZn5eCEjME0ldSmVeYm5mMrJQeX5RdlpOfjlCrBYAD1ouqHEAAAA=',
    },
})
Record({
    $id: Now.ID['b6ac68a2fb1b87142ce8f46b5eefdc7e'],
    table: 'sys_hub_flow_logic_instance_v2',
    data: {
        block: 'dd157062fb5b87142ce8f46b5eefdc1a',
        flow: '5c40e46efb9787142ce8f46b5eefdce1',
        logic_definition: 'fdb2541473031300b61e66476bf6a70e',
        order: '6',
        parent_ui_id: '2d5bc4f3-9b1f-4451-a7a7-f2ea0cf618a6',
        ui_id: 'bc507f3b-6ceb-47ba-815e-84e99c5ec997',
        values: 'H4sIAAAAAAAA/+1Y3Y+bOBD/VxDPuRRDIJu8Vd2r1Ie7Vt1oX04VMmZIrHOAM2a36Wr/946NIWxCsl/ZflwrRUo8Y+bzN8NMbtyiVmWtqkXxuqr4Mnfn/3wauTzXNPx94+Z0De7cTWtJFS/yWG1KcEfuFRW1psPnUnDGVdxeQF7Kq1LQzaW98qe94vSusBUXqQSrrqQStSiQ7vxmh6XVxYImIFDSm1XBmdbOUzxNZtMgPCOTaeAFJPC8JCIQRZNplGQRnZ6FeK998NxqdhaN9QecMl9ztMCqKWSqbSKeN0JHFeQpoOKMigpG7prmKVWF3HQUCTR9n4stYcVzhfJcfflzxb+g8Imn72WADjJoeN0xtoFryI0VTRJaP4ZCeSwT1gHvdrSV8REEsq9gSIa0vAEZpC/jA0gGuaLLQSllxx2Q499iVlPIaC3Um9O5SE7gon8iFwPtYpO+96Vhzd1Aw4smwuacFaJe5383MHS7gFweq6rmyvn9xVVXaBWUGq4afxaM2cWquP7YYu0tz42tlikKRkV3okpJntRKp+bGBQFrFBSvaVnyfBmXsrji5mF0Yz1eCjyMM1Fco1LdQsaUaUPGWB10/Bbp54Z8SSXXAfgLxeDDtwb48X+11tuEwFocm4DpCxWTvFSvmc6XNU6nyFZvLweKr0HGpmvFqBb0uZet/Z705BZ0jtJfLRrxpgslGUkjEpFkGkQ+dqFgwiIG0QyAEDrzvV4X6kHKGOwYgx1tsGMtfrBrtlWZ4Bt6bBkv0LOMrMc0rQ71jwL9z4JcTHwVN9C0vhnlJ0B0k+tt8l8Gwu9yBcvGDw3gMy8IAm/GwmDaAThNAbJsmhAfyCCAt1AdsNlik3d6fmPyZ8fkwCuQzKbeHx7Bj+N5c/wE3j5IA8+5AFbkafX0jrtVbfAKGZmE7NDYl8DA2LeL1p43d/vo/kjwHUe/34h9DmL35ry4QLU6az0M00wZU3ZQ25JPsaWkjE6IFx6Aqx/14LowQ4HcHV6dnuEPd/HALhP8MLtMG+TdXAztLAlkhey/DjtCN/4f3yruUUYepcx/9nzf4W5wpm+5O3WsZP0jlnFrIdvEx3as3jULzS3o7qv5u3v6kxvAN94MSOaH6cHKnwZHKn9/I3iAT/etBJP/wbvsmTUw/MoZ/XK1UbEVpLV4oUroMtNWQpaEIQ5tByoh8u+ObJgAR63AyQqBkdWnnrmH3LBxkz3VFvbhCWEf+Hdhz9Z534ihErjYsn+Fse6p49snjcRGUtVAKgXGK1S40LR37R/SmrFBEHDWJ10X8l9t6pZ2+xVliRay2hYAAA==',
    },
})
Record({
    $id: Now.ID['cea1bcaafb1b87142ce8f46b5eefdc43'],
    table: 'sys_hub_flow_logic_instance_v2',
    data: {
        block: 'd9157062fb5b87142ce8f46b5eefdc24',
        connected_to: 'd1feae64-613a-430b-97a1-b531ffde39fe',
        flow: '5c40e46efb9787142ce8f46b5eefdce1',
        logic_definition: '666e5545c3e232002841b63b12d3ae99',
        order: '11',
        parent_ui_id: '2d5bc4f3-9b1f-4451-a7a7-f2ea0cf618a6',
        ui_id: 'c7071aad-038d-4d82-8a1c-f4d3d03fea9d',
        values: 'H4sIAAAAAAAA/+1VTY/TMBD9K1XOaZSk25b2VgGVKgqL2NVe0Cqa2JPWwrGD7bRbqv53xvnoVuwuICQ4cYvfjGfeG89TjoGuXVU7e6sX1oqNCuaf78NAKI/R9zFQUGIwD5hWXDihVdYAYbADWfvAqhh8NHonLMUGSxASOUW5sJWEw91Pk9hWSG6w61mBocoOTTA//hByhwozCTlKqnXjjFAbui44nYoYimTGEjZKJ6M0jtNXV0k+GeVJykeAkFJef/F1L2GwbpDwRW2+H+G276QN97SSOAzwwaHiRH9egLQYBiUoDk6bwxkxCPxayUdgK5SjcoFPfrDiG9VOx2OfWCBpZNgGz8esm14Ls60WDK8rT7BFHOSyu8O0rEv1odXh544F1NL1cyektlQPK0/as+goFTdbvf/UN1wK1QjsglIzkOcTOBpDXju0/mFQYkmFshKqioaTVf5Zm8vEpYw2kg5RIfWemvp9ioB54hHNCKIl4W8a+A6M8CreUxm63NLMwQqWNbtH5ZwhCadmLNnX2hNqBXZSsnYalGCZEZVbUJ8ddqxP4dPFvdjZ4zGZwQyATYbJFNnwik35ENJkNJzCmBecA06nGBlk9PJR1W+u12sduNpGTHM8ndard2+Xi9X66cL/hQ7/wC3Jc255xicvWyT9hUX8o/6mQ+I4/m+RS4sIm7Wr3mlrmv+xQ+69HdoOtt0bjqxZwluPrfo/gA8caAEEu4T22nzxEh6x03eJCjAsSwYAAA==',
    },
})
Record({
    $id: Now.ID['e3543ceefb1b87142ce8f46b5eefdc9f'],
    table: 'sys_hub_flow_logic_instance_v2',
    data: {
        block: '55157062fb5b87142ce8f46b5eefdc2e',
        flow: '5c40e46efb9787142ce8f46b5eefdce1',
        logic_definition: '35d60003e6022010a5e40cdd1254dd23',
        order: '17',
        ui_id: '29c46de0-cb1b-42b4-acbc-7e82e5625126',
        values: 'H4sIAAAAAAAA/+1Y227jNhD9lULIY+JKvqwdvwVJDaRoEqD25qUOBIocO9zSolainGSD/ffOUBQt2dnNIuvmoTVgCNIMNXN45sKRnwNdmqw0xUyfFYVcpsH4r7vjQKYkw/vnIGUrCMZBHBeGmbKI4+A4WDNVkvB5HqwhL6RO58F4HkSdcB4czwOuV5mCx5vkE3Az5fewYqjHxROlHy6A3EA+nlycnc8ub66ns7PZx2m1gGsB1tRlamAJuTMnoHO0kKBEvGAcTFEtnkpyc8WyCQnta8/z+Two5ewpgz9YAooex3Sp7c3JIl5yYCLWqXryK0xeglffy9RYTVoqdbwx6lfLLXsCFqxUJrbM+FVezbhBkmLIc53HFeMvO1Yt1OdER61asVQwo/MN5AVTxUavc1EBsrqo8d5jrCBdmnuv7Id0/Yo/pHcFRcGWFe1Tk8t0aVl34p8l3lncF+9F29wu7f7FN1J+5dh4G+vd77Meet6J+O9UQ+fI4K7fTHpVeR4L17E1R6Xs12yV374CpNuuX6mLNvdnNmS/TG2j2UUUu74Sb3zsAtxjlYReWcqPqfxcwqXwyhH0IOmdDk746Wl40mdDcZKMBDsJRxGLGGfJEJJmsFs9sdXs8O6Ir+sbG9hPbM06iqXLTqMgj9ZW5+xtqvYN75OBAnLJlPzCiPOJzlesSqrfpzfXuAa7vJBFptjT7aHZH5r9odkfmv2h2f+Hmz2/l0rkkNqZXwrs9yh0sz9hb0z97dX4tVDwXGaGArpGvQ1BLUSgCGDHotvQzxjFJRnL0ZyBHAXtDdg2ZmsHa4i0jcJBZ+6AQJ8vNA7UU5Jhu2yCewXONvpSXlSnJ7lFC9J7tMWpdoDUBNWa84rzdgTMtjGb4ME4Og7g0UAqQHhsvja8hGrrBkvLC6i+K69YEIX8grb7Ia1bAG6Eu537x9gNBHW0tORwkxF/lcSwRNWh1KpcpdcVeBolqs5wu+HTSS7aMwYqygIdQUabIXQO6mJ6rx/+rJFMZGr37ZRKc6b8EzNYBklpoKgCg/jjzyUtqPw603EFm5LzlWypyuodk6WoHbZyxcPYTpUrX0w71WW2DLp86e4xX8L/XcbcbQWmavN1YMLFsMsGrDtIol43jMLkQwQMb3rDUcSH/dNG4H6jRHIn4CZ6rX9aXAB17aIueGJ9TyEcvV8I9xspV6ZNetqF6wPTnIlQ3p6GUA8KVhTgFcsyLJQ4y/VaWhR0lHeWCh86C5zgED2NcJ2qE3SQbdbZTHa3DE/ZxM5tGb78A73npU5BHckBhZTMicYxGe1+l9n+s91SvnU0bufuDF/+dUJu6/wVYhhGoyHnvQ9A+TsYDHrJsB8y0Q+FELyRvxt4O3hd3iZaK2Dpv5O473NWLRw5L7efWvvup9aLmXNHiVLlYFEFWwCX9Mk+I9ll/a8uKZ4wZpI3RQ86/5uSfCP7+g+nsTytHxYAAA==',
    },
})
Record({
    $id: Now.ID['f3bce8a2fb1b87142ce8f46b5eefdcdf'],
    table: 'sys_hub_flow_logic_instance_v2',
    data: {
        block: '55157062fb5b87142ce8f46b5eefdc1e',
        flow: '5c40e46efb9787142ce8f46b5eefdce1',
        logic_definition: 'af4e1945c3e232002841b63b12d3ae3e',
        order: '7',
        parent_ui_id: '2d5bc4f3-9b1f-4451-a7a7-f2ea0cf618a6',
        ui_id: 'd1feae64-613a-430b-97a1-b531ffde39fe',
        values: 'H4sIAAAAAAAA/+1VTW/bMAz9K4XPieGPOFlyK7IWKNatw9z1MhQGLdGJMNnyJDltFuS/l/JHGqwpOgzbbTfrkeLjo/jgnacaWzfW3KpzY8Sq8hbf7keeqBxG3zuvghK9hcdUxYUVqspaYORtQDYu8FmrjTAUQH6WNoyhMUUj5ZZSuDC1hO3d25lsLSTX2LPXoInDovYWu19CdltjJiFHSQVTq0W1ouuC06kIoAjnLGRxNI2jIIjeTcJ8GudhxGNAiClvuLgcxJxdt8joVZWOj3AzMCnNXVthMPLw0WLFkagLkAZHXgkVB6v09oBoBH5TyWdgLSpL5TyX/GjET6odJYlLLJA0MuyCh2PWj7CD2VoJhje1a7BDLOSyv8OUbMrqU6fDDR8LaKQdhk9IY6ge1q5p10XfUpGu1cOXgfBSVK3APigVA3k4gaUx5I1F4x4GJZZUKCuhrmk4We2et71MvZT+StLBL6R6IFK3WT4w17hPMwL/kvD3LXwHWjgVH6kMXe7azMEIlrVbSOWsJgn7dizZj8Y11AnspWTdNCjBMC1qe048G+y73o9ervDR9u524RzmAGw6DmfIxhM242OIwng8g4QXnAPOZuhrZPTyfj1ssNNrLNjG+Exx3O+vrz5cpF+Xy4s0fbn4/4bkb3hmDkmRhEFy2jOT6SnPnHDL60aJ3jCKe9rf9EkQBP+NcmwUYbJu4XttLfkf++TemaJjMN3ecGTtHt467Gr4I7jAlhZAsGPoQenvTsIztn8CKmBYr1sGAAA=',
    },
})
Record({
    $id: Now.ID['117e76103b2fc754546a249693e45aab'],
    table: 'sys_hub_flow_logic_instance_v2',
    data: {
        block: 'dd157062fb5b87142ce8f46b5eefdc1a',
        flow: '017e76103b2fc754546a249693e45a48',
        logic_definition: 'fdb2541473031300b61e66476bf6a70e',
        order: '6',
        parent_ui_id: '2d5bc4f3-9b1f-4451-a7a7-f2ea0cf618a6',
        ui_id: 'bc507f3b-6ceb-47ba-815e-84e99c5ec997',
        values: 'H4sIAAAAAAAA/+1ZbW/iOBD+K1E+c1ycQCh8W7VXaaW921NB/bJaRY4zAWtNknWcdrmq//3GifMCBLbs0hUrVUJqPXbGz8w8z8SGJzstVFaofJG+y3O+TOzZp88Dmyfahv8/2Qldgz2zo0JSxdMkUJsM7IH9QEWh7fAtE5xxFdQLcC7ieSbo5t4s+csssTpL2IqLSILZLqMSd1Eg7dnTzhSP0MNoOvHGV2Q08RyPeI4T+gR8fzTxw9ink6sxOhQ0BIFLb8we1qLCeQB++WeGe6Wc1eMPxsV1bUxlpCERxxlgnAqSCBBNTEUOA3tNk4iqVG4aiwQafUxEa1jxRKE/Wy/+lvP/cMeRo9fFgPExqOaaYWDyVpnjG6roXMmCqUKapRXcqi51wH3ZPVYcE5TzPGh93IHA6Qfo8yHNXI8P0vXxL0gGiaLLXi9ZM9vjx33GQkcQ00Ko6/OFSM4QonumED0dYlW+j1k5NbM9zTsairq4qSjWyT8VX+0mIffHhFYtufm+3oocUUGmKaw5aQgaz1fp413Nv1uelFjNpEgZFc2IKiV5WChdmicbBKzRUbCmWcaTZZDJ9IGXD2MY6+FS4GAYi/QRN9VdZUiZBjJExdDhLdpvSvM9lVwn4G90gw8/D+x8k18LmudtGlAewddCI6mSYmIIyhSWjzDJM/WO6QoauLpoRvidqii+BhmUrS1AIKDHnfrtN66T+1QYk8gnPgknnu9in/JGzGfgTwEIoVPX6fSpDpdKXFaJy9K4LAPsxRGYZlZmvbQHnYm6q2E7gT8Xlf0VGlvp6xydra8V7GvnJOn8LvxHFuVBRWcTW7n5q+iiolLLrfMK4crxPM+ZsrE3aYQQRQBxPAmJC6RXCC3le8AZjiPxYFmmqsvt9431jdlvzC7J0/OCJtOJ84dD8GM5zgw/nrNPdc+x5sDSJMpPJj3EZDRmh06pIfScUncp30G93dS37R/23dTnlQs8q77x/hfyfu8sG6QIRBe/owQaqxLcDvdr82m0jxgdEWd8gPau36H9ojzpyN2juNWB+PJgTrnCeRcoi/ZeUed9tzx9V7UQ4lR239aNobn1HL9MfWczctJm7k9faxoq9l5l6tkdsWNKL1HrNUK2CY5dLTvLDIdbIp7eGLa/2fjhLvE6FyISu+PoYG+YeEd6w/5F6AXQf/QmNLrA/vBLXps/qaT+t9vgTWGYlhVEhTiznuJwPMZD5gE9+e72ERMzb6kVWHEqMKV61EF1CK1JWMvgbfHcdexGPOMzisdzt8XD1kkXXJ+Q5u30BQjq9HNoPAcq2eqWg9AlLuvyu33f9lmzvPLdZJrxHCEstO19/XOCnthghJx1TY+p/KLBt7bn/wHRHxgdmBgAAA==',
    },
})
Record({
    $id: Now.ID['197e76103b2fc754546a249693e45aad'],
    table: 'sys_hub_flow_logic_instance_v2',
    data: {
        block: '55157062fb5b87142ce8f46b5eefdc1e',
        flow: '017e76103b2fc754546a249693e45a48',
        logic_definition: 'af4e1945c3e232002841b63b12d3ae3e',
        order: '7',
        parent_ui_id: '2d5bc4f3-9b1f-4451-a7a7-f2ea0cf618a6',
        ui_id: 'd1feae64-613a-430b-97a1-b531ffde39fe',
        values: 'H4sIAAAAAAAA/+1VTW8aMRD9K5HPy2p3CVC4RSSRotKmKmkuVbQa7FmwatZbfyShiP+e8X4Q1FClUdtbb/jNeOa9t35iy7R3lXf2Rp9ZK5clm3y9i5gsA0a/t6yENbIJ47oU0kld5jUQsXtQPhQ+GX0vLRVQnMw952ht4ZXaUIuQtlKwuX29k6+kEgbb7RUY2uHQsMn2p5IUNKhIoEjHPOX9bNjPkiR7d5ouhv1Fmok+IPRpoIIFKmqddrRPZjUS/VKP21QBt87IctmeZ+2UeQdqIwKrNIkYPjosBRKfApTFiK2hFOC02ewRgyCuS/UMrGTpaBwLzY9W/qCF2WAQGgskiRyb4v6Ytw42cHEODoiK586btpWvtCQjG3MEFuCVmx5iTcN1FaQ2VxwsVHdbK78uPzaOsP2A7oMR4i2RwCooDdRbHcV8pR8+dywvZVm70haV5qD2J3Dk3cK7wGfLUOGaBuVrqCpyNK/Ck6gvE5d1vFR0iAulH2hpeI0x8EA8JmMhviT8vIZvwcig4gONocsNzQVYyfP65dI4sgnZLmJ2Y6cKrH0WSe7m332g2EhuxeWNP+EKN7JyZ7T5Hlsdu+hlEA4ysN2mYxgD8GEvHSHvnfKR6EGW9nsjGIhCCMDRCGODnB5QXHU5CA5YB87bmGuBu93s6v3F/Mt0ejGfv4zPv1nytuSNYVAM0mRwPHmnw2PJO5K5N8YteyVu4Vv/ZtqSJPkftz+Om7R5E5JWW738L6btLkSr2bn3mtev+SZgV92/Uyhs6HFJfgg9aPMtiHrGdk/XyrvG5wYAAA==',
    },
})
Record({
    $id: Now.ID['197e76103b2fc754546a249693e45ab3'],
    table: 'sys_hub_flow_logic_instance_v2',
    data: {
        block: '55157062fb5b87142ce8f46b5eefdc2e',
        flow: '017e76103b2fc754546a249693e45a48',
        logic_definition: '35d60003e6022010a5e40cdd1254dd23',
        order: '17',
        ui_id: '29c46de0-cb1b-42b4-acbc-7e82e5625126',
        values: 'H4sIAAAAAAAA/+1ZbW/iOBD+K6eoHymXFFgo36r2kHraFulg98tRRY5tqHeNnY0d2m7V/77jl5iEsHvaHqurTkgoSmbs8fiZZx5ieI5kqfNSq7m8UIqtRDT++64TMWFscP8cCbSm0ThKU6WRLlWaRp1og3hpjM+LaEMLxaRYRONFlHTjRdRZRFiuc04fp9knivUM39M1Aj8MnnD5cEXNMrQYT64uLufX09vZ/GL+YeYGYEmoDXUtNF3RwocjtHuyZJSTdIkw1coNnjGzzA3KJ8Zopz0vFouoZPOnnL5HGeXmcWwuVbyFiQiXgiKSSsGfwghdlDS475nQ1iNKzjvboGE024lH6BKVXKcWmTAquBHWAFJKi0IWqUN8/8K8kfWlgaNyrZEgSMtim/IScbX1y4K4hKwvqc17TDkVK30fnP3YXF/gA/CuqVJo5WCf6YKJlUXdm/8t8D7ioXBXzXBt2MPEV0J+49F4HepnP0Y9Drgb4H/QDd0TDbt+Neiu80IuWKY2nGnlMGan/Q5VINlc+h/6oon9hS3ZbzMrNO2MUq8r6XaNdoIH7JI4OEv2QbAvJb0mwTmiPZr1zgen+Pw8Pu2jITnNRgSdxqMEJQijbEizerEbmtgQO7g7wZvqxhb2E9qgLkdi1a015MnG+ny8bde+Yr4JoGjBEGdfkcF8Ios1cqT6cza9hTGg8oSpnKOnj0exP4r9UeyPYn8U+/+x2ON7xklBRf2d3+QMrhwV8KxpAatGViAsK4GdxlCjJEzx0guz9rQk+E35QIjCCaL9NQMWhQuWa0OQDVhsSSsjrPjSsYJcCMTfM/HZTamlD8eXkl25oCY1GMBCVrY1eCtZRlyYynPpdt7EQe8L1t64JV00TjoRfdRUEErCHgJfg8XwfQp0j8YGmY5tOZcKcFSxr7BgPzbDlhR2hz1A4TH14Dnz8gppBCQosS4LWgEjGabK4eIeprmpjHNrlPFqpOTlWty6LZu6uG6u1cVbrloFKxVkQnOzWZO+39tydi8f/qpSnTBhcfFOLjHi4QlpoG5WapOoKbB6UpccKbXNBracfinNFJeJXyx1G3nZS5qXTqCy76CfZLNrqDdGZlUl1eBySHWXyjdh5y0o9J6Ara17Op8djs7xkdCvJfTdDn8bqn2U5qM0v0UmH2X2KLNvlZx3vpLxcniGBuhskCW9sziJs3cJRXDTG44SPOyf1yr9h2GnP7dsy934fdxX3B1ddio+rYyVGJk6/VTNvWFP0UeHLLqv2uUBiXDYensVqQPd1JUAdf1MDPbmaRj8lNO1IcUa5Tm0Y5oXcsNsFuYo111xeOgu4QQP2ZsjfNcJVRdKhLrbk/1HBKeszJ7bc5j8K95jqTALkNp/MElbDq1g7urb994bqg4gZBgnoyHGvXfUdMBgMOhlw36MSD8mhOBaB2yTaGXlmZ9JySkSO9SfQ16/T8yOfg39D/h1fGjyL/2u90th5f3v9fC7r50bz+2AD2bmp+C5sV1X/xYaxxNwguG66UEWn03zbG0v3wCG6uh1dxwAAA==',
    },
})
Record({
    $id: Now.ID['5d7e76103b2fc754546a249693e45a9a'],
    table: 'sys_hub_flow_logic_instance_v2',
    data: {
        block: 'd5157062fb5b87142ce8f46b5eefdc01',
        flow: '017e76103b2fc754546a249693e45a48',
        logic_definition: 'e9060aa2c3013010ace8b740ad40dd51',
        order: '0',
        ui_id: '2d5bc4f3-9b1f-4451-a7a7-f2ea0cf618a6',
        values: 'H4sIAAAAAAAA/6tWyi8tKSgtKQ7JdywuzkzPU7KKjtVRyswDiUHYZYlFmYlJOalQbkpqcmZxZn5eCEjME0ldSmVeYm5mMrJQeX5RdlpOfjlCrBYAD1ouqHEAAAA=',
    },
})
Record({
    $id: Now.ID['997e76103b2fc754546a249693e45a9c'],
    table: 'sys_hub_flow_logic_instance_v2',
    data: {
        block: '11157062fb5b87142ce8f46b5eefdc06',
        flow: '017e76103b2fc754546a249693e45a48',
        flow_variables_assigned: 'badge_id',
        logic_definition: '4f787d1e0f9b0010ecf0cc52ff767ea0',
        order: '2',
        parent_ui_id: '2d5bc4f3-9b1f-4451-a7a7-f2ea0cf618a6',
        ui_id: 'f8050dbe-d315-46a6-9aab-b95d788af1da',
        values: 'H4sIAAAAAAAA/+1VTW8aMRD9K8hnWMFCCJBTlCgSUttIDc0liVaz9uxi1evd+ANCEf+9Y/YDmkhVr5Vys59nPO+98ch7VnpXeWdX5bW1Mtds8fTSZ1IHjNZ7JgVbsDlPx9MJxlkqLmeXo0nMcZZNpukFYia4QNZnGgqkyBREjgkl9dkGlA8QLYW0lYLd4wnha6mEwaZeBYbSHRq22L87+tf6ClJUfxL4SMntqoBYZ6TOm/2XJvGhBUsjApFRn+GbQy2QGGSgLPZZAVqAK82uQwyCuNfqBKyldrXEAt6s/EX1ZsPhMERmSKp4Y0C3TRpzaji7BQdExXPnTedVKTna2g+BGXjlbs6xOuC+crLUdYqDVLXZpfKF/lZ7wboLznrhLZHAKkgN3Bsh2cO63H5vWd5JfXSlOVQlB9XtwJF3qXeBz555uXpnc418MBoVFlQxKaCqCEkqU27ksQqRLqJc0SbKVLklduFtRsCDwohaANEd4bdH+BGMDHK/0jWUHMr90PLV4zI8nWwqplMe88F0ApPBBMRwAPN5OohpGY+zi3g+GrFDn9mdvVFg7cko6lDy6oPM2rbGoKT2OKRwIyt3TaQ2lEI9wxYLNnTPjtZ/i6Q5Mb1j8FL0nv1wOBa9TCRHkeRUnqOJuDfUBRdtGqk2am+/etYG6ano9oordjgcXsL0NaGfU/w5xZ9T/J9OsUAuLbm1CvHL9lcOBzuaC8nPoW1pfgafT9jhN7278uPfBwAA',
    },
})
Record({
    $id: Now.ID['d97e76103b2fc754546a249693e45aaf'],
    table: 'sys_hub_flow_logic_instance_v2',
    data: {
        block: 'd9157062fb5b87142ce8f46b5eefdc24',
        connected_to: 'd1feae64-613a-430b-97a1-b531ffde39fe',
        flow: '017e76103b2fc754546a249693e45a48',
        logic_definition: '666e5545c3e232002841b63b12d3ae99',
        order: '11',
        parent_ui_id: '2d5bc4f3-9b1f-4451-a7a7-f2ea0cf618a6',
        ui_id: 'c7071aad-038d-4d82-8a1c-f4d3d03fea9d',
        values: 'H4sIAAAAAAAA/+1VXW/aMBT9K8jPIUpCgcEbokNCY+u0Vn2pquhiO2DNsTPbgbKI/77rfABauy+te9sbPte+95yTe0RFdOmK0tk7PbNWbBSZPjwGRCiP4e+KKMg5mRKqFRNOaJXWQEB2IEtfWGa9j0bvhMVabwFCcoZVJmwh4XD/00t0KyQzvJ1ZgMHOjhsyrb4rCYY9sgiyeEJjOkhGgySKkjdX8Xo0WMcJGwCHBBtKWHOJV+cd2d6qRoIfqnCHwuPWGaE27XnVdrntQG2YZxVHAeFPjiuG7KcZSMsDkoNi4LQ5nBDDgd0oeQa2QjlsR/zlJyu+4sBkOPQXM44SKW+Kp2PamtfA2TU4QColdaVpr9KtFpTbxhzGMyilm19izYWbwkttnjhYy+61lmWuPjSOkFOD7lshUlokwQuv1FNvdWS3W73/1LFcCFW70halpiBPJ3Do3bp0nk9FuOQ5NkpzKAp0NC38KtSPkUsebiQewkzqPQ71OxgC9cRDNBbCBeLXNXwPRngV77ENPm5orsEKmtb7iu3QJk6OAbEHO5dg7Vkkupt+KT3FRnIrLm388U+oEYWb4eQdb3Ucg+frf7H5VRVPYAJAR/14zGn/io5ZH5J40B/DkGWMAR+PeWg4xQUKi27/vQPWgSttSDXjx+Nq+e7tYrZcPY/NP5jwqpmLX8rcC2n7w6Alvwia/8q/mbMoiv4H7a+DJmzaxKPVVg9/xZw9+lA1M09e03qV7zy27P6NfOGAyyXoJbTX5rMXdcaO3wAQ0Yz91wYAAA==',
    },
})
Record({
    $id: Now.ID['dd7e76103b2fc754546a249693e45ab1'],
    table: 'sys_hub_flow_logic_instance_v2',
    data: {
        block: '9d157062fb5b87142ce8f46b5eefdc29',
        connected_to: 'd1feae64-613a-430b-97a1-b531ffde39fe',
        flow: '017e76103b2fc754546a249693e45a48',
        logic_definition: '1f781bf3c32232002841b63b12d3aee6',
        order: '15',
        parent_ui_id: '2d5bc4f3-9b1f-4451-a7a7-f2ea0cf618a6',
        ui_id: '521c8ad1-d0e1-4e7f-adaf-a9f93a2b1805',
        values: 'H4sIAAAAAAAA/6tWyi8tKSgtKQ7JdywuzkzPU7KKjtVRyswDiUHYZYlFmYlJOalQbkpqcmZxZn5eCEjME0ldSmVeYm5mMrJQeX5RdlpOfjlCrBYAD1ouqHEAAAA=',
    },
})
Record({
    $id: Now.ID['017e76103b2fc754546a249693e45a48'],
    table: 'sys_hub_flow_snapshot',
    data: {
        access: 'public',
        active: 'true',
        attributes:
            'browserActivatedIn=chrome,integrationActivatedIn=standalone,labelCacheCleanUpExecuted=true,viewActivatedIn=naturalLanguage',
        authored_on_release_version: '28100',
        callable_by_client_api: 'false',
        description: 'Alert Deactivate Badge Request Flow',
        flow_priority: 'MEDIUM',
        internal_name: 'alert_deactivate_badge_request_flow',
        label_cache:
            '[{"name":"658b2d2e-b33e-47a6-9bc5-982b9bea6531.record","label":"12 - Update Record➛Request Record","reference":"x_aleen_snguardian_request","reference_display":"Request","type":"reference","base_type":"reference","usedInstances":{"fbdf0273-4409-4a31-b9a0-2784ecdb6d89":["request_record"]},"attributes":{"element_mapping_provider":"com.glide.flow_design.action.data.FlowDesignVariableMapper"}},{"name":"5532886b-7fb7-4168-9d13-a5044c5cfecc.Record.asset.number","label":"3 - Look Up Record➛Identity Asset Record➛Asset➛Number","reference":"","reference_display":"Number","type":"string","base_type":"string","parent_table_name":"x_aleen_snguardian_asset","column_name":"number","usedInstances":{"75a7a82b-0b28-4050-b6ba-487b443e5457":["work_notes"]}},{"name":"19a9aac6-17ec-4c7d-a213-7a5dfddae77e.record","label":"4 - Update Record➛Identity Asset Record","reference":"x_aleen_snguardian_identity_asset","reference_display":"Identity Asset","type":"reference","base_type":"reference","usedInstances":{},"attributes":{"element_mapping_provider":"com.glide.flow_design.action.data.FlowDesignVariableMapper"}},{"name":"19a9aac6-17ec-4c7d-a213-7a5dfddae77e.record.asset.number","label":"4 - Update Record➛Identity Asset Record➛Asset➛Number","reference":"","reference_display":"Number","type":"string","base_type":"string","parent_table_name":"x_aleen_snguardian_asset","column_name":"number","usedInstances":{}},{"name":"19a9aac6-17ec-4c7d-a213-7a5dfddae77e.record.provisioning_status.code","label":"4 - Update Record➛Identity Asset Record➛Provisioning Status➛Code","reference":"","reference_display":"Code","type":"string","base_type":"string","parent_table_name":"x_aleen_snguardian_provisioning_status","column_name":"code","usedInstances":{}},{"name":"Created_1.table_name","label":"Trigger - Record Created➛Request Table","reference":"x_aleen_snguardian_request","reference_display":"Request","type":"table_name","base_type":"table_name","usedInstances":{"19a9aac6-17ec-4c7d-a213-7a5dfddae77e":["datasource_table"]},"attributes":{"test_input_hidden":"true"}},{"name":"75a7a82b-0b28-4050-b6ba-487b443e5457.record","label":"8 - Update Record➛Request Record","reference":"x_aleen_snguardian_request","reference_display":"Request","type":"reference","base_type":"reference","usedInstances":{"a709be14-8b54-427e-a307-73908b874aad":["request_record"]},"attributes":{"element_mapping_provider":"com.glide.flow_design.action.data.FlowDesignVariableMapper"}},{"name":"Created_1.current","label":"Trigger - Record Created➛Request Record","reference":"x_aleen_snguardian_request","reference_display":"Request","type":"reference","base_type":"reference","usedInstances":{"b0cf009f-a175-4296-96dc-e3f10ad777fa":["record"],"e6eaf675-13f0-453f-8443-dae1de1f522a":["record"],"75a7a82b-0b28-4050-b6ba-487b443e5457":["record"],"658b2d2e-b33e-47a6-9bc5-982b9bea6531":["record"],"69e238a2-c290-430e-95f7-2df3235645f9":["record"],"5c0f35f3-af3f-47f8-b37c-f5f2ae47c963":["request"]},"attributes":{}},{"name":"19a9aac6-17ec-4c7d-a213-7a5dfddae77e.record.provisioning_message","label":"4 - Update Record➛Identity Asset Record➛Provisioning Message","reference":"","reference_display":"Provisioning Message","type":"string","base_type":"string","parent_table_name":"x_aleen_snguardian_identity_asset","column_name":"provisioning_message","usedInstances":{}},{"name":"29c46de0-cb1b-42b4-acbc-7e82e5625126.__status__.message","label":"17➛Error Status➛Message","reference":"","reference_display":"","type":"string","base_type":"string","column_name":"","usedInstances":{"b0cf009f-a175-4296-96dc-e3f10ad777fa":["work_notes"]},"attributes":{}},{"name":"69e238a2-c290-430e-95f7-2df3235645f9.record","label":"1 - Update Record➛Request Record","reference":"x_aleen_snguardian_request","reference_display":"Request","type":"reference","base_type":"reference","usedInstances":{},"attributes":{"element_mapping_provider":"com.glide.flow_design.action.data.FlowDesignVariableMapper"}},{"name":"5c0f35f3-af3f-47f8-b37c-f5f2ae47c963.record","label":"5 - Create Record➛Request Activity Record","reference":"x_aleen_snguardian_request_activity","reference_display":"Request Activity","type":"reference","base_type":"reference","usedInstances":{"b72b871b-7e19-46d9-8aa6-ab65c25baca9":["record"],"b5807be3-d2f3-4df7-af7f-c28f56641e80":["record"]},"attributes":{"element_mapping_provider":"com.glide.flow_design.action.data.FlowDesignVariableMapper"}},{"name":"Created_1.current.sys_id","label":"Trigger - Record Created➛Request Record➛Sys ID","reference":"","reference_display":"Sys ID","type":"GUID","base_type":"GUID","parent_table_name":"x_aleen_snguardian_request","column_name":"sys_id","usedInstances":{"19a9aac6-17ec-4c7d-a213-7a5dfddae77e":["datasource"]}},{"name":"5532886b-7fb7-4168-9d13-a5044c5cfecc.Record","label":"3 - Look Up Record➛Identity Asset Record","reference":"x_aleen_snguardian_identity_asset","reference_display":"Identity Asset","type":"reference","base_type":"reference","usedInstances":{"19a9aac6-17ec-4c7d-a213-7a5dfddae77e":["record"]},"attributes":{"element_mapping_provider":"com.glide.flow_design.action.data.FlowDesignVariableMapper"}},{"name":"flow_variable.badge_id","label":"Flow Variables➛badge_id","type":"string","base_type":"string","usedInstances":{"5532886b-7fb7-4168-9d13-a5044c5cfecc":["conditions"]},"attributes":{"sourceUiUniqueId":"","sourceType":"","sourceId":"","uiUniqueId":"f6d66c2c-64a4-4ad0-a99b-24ad23f52911"}}]',
        master: 'true',
        name: 'Alert Deactivate Badge Request Flow',
        parent_flow: '5c40e46efb9787142ce8f46b5eefdce1',
        run_as: 'user',
        sc_callable: 'false',
        status: 'published',
        sys_domain: 'global',
        sys_domain_path: '/',
        type: 'flow',
        version: '2',
    },
})
Record({
    $id: Now.ID['e97eb6103b2fc754546a249693e45aac'],
    table: 'sys_flow_trigger_plan',
    data: {
        binding_strategy: 'com.snc.process_flow.engine.binding.OncePerRecord',
        plan_id: '5c40e46efb9787142ce8f46b5eefdce1',
        snapshot: '017e76103b2fc754546a249693e45a48',
        sys_domain: 'global',
        sys_domain_path: '/',
        trigger: '217eb6103b2fc754546a249693e45aaa',
    },
})
Record({
    $id: Now.ID['9cb364e2fbd787142ce8f46b5eefdcde'],
    table: 'sys_hub_flow_variable',
    data: {
        active: 'true',
        array: 'false',
        array_denormalized: 'false',
        attributes:
            'element_mapping_provider=com.glide.flow_design.action.data.FlowDesignVariableMapper,uiType=string,uiTypeLabel=String,uiUniqueId=f6d66c2c-64a4-4ad0-a99b-24ad23f52911',
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
        model: '5c40e46efb9787142ce8f46b5eefdce1',
        model_id: '5c40e46efb9787142ce8f46b5eefdce1',
        model_table: 'sys_hub_flow',
        name: 'var__m_sys_hub_flow_variable_5c40e46efb9787142ce8f46b5eefdce1',
        order: '1',
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
    $id: Now.ID['9d7e76103b2fc754546a249693e45a90'],
    table: 'sys_hub_flow_variable',
    data: {
        active: 'true',
        array: 'false',
        array_denormalized: 'false',
        attributes:
            'element_mapping_provider=com.glide.flow_design.action.data.FlowDesignVariableMapper,uiType=string,uiTypeLabel=String,uiUniqueId=f6d66c2c-64a4-4ad0-a99b-24ad23f52911',
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
        model: '017e76103b2fc754546a249693e45a48',
        model_id: '017e76103b2fc754546a249693e45a48',
        model_table: 'sys_hub_flow_snapshot',
        name: 'var__m_sys_hub_flow_variable_017e76103b2fc754546a249693e45a48',
        order: '1',
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
    $id: Now.ID['9bd37caefb1b87142ce8f46b5eefdc15'],
    table: 'sys_hub_sub_flow_instance_v2',
    data: {
        flow: '5c40e46efb9787142ce8f46b5eefdce1',
        order: '14',
        parent_ui_id: 'c7071aad-038d-4d82-8a1c-f4d3d03fea9d',
        show_stages: 'false',
        subflow: 'f7de95261b7dce906962fe60cd4bcb8f',
        subflow_inputs:
            'H4sIAAAAAAAA/41SXY+bMBD8K5WfAQUIEHirVJ1Uqe1J1/ZeTie0tpfEkjGcMbmkUf5718AlUT/UPnr2Y3Zm/HRiSrKKFanEMkvymBdSYLnKyzxpMF8JueaClwkLmIEWqdPiy4iDqy2KzkrC96BHXzid8mzDE5lgyNMUw3UBeVhykYXlJuElR8izNI7mufOZJqUaeg3Hx2UBIWKntLRoWPX0HLAeLHE6tKw6/VJyxx5rDRw1DT5gg1QRSBv+V811dpLz7uFNzt9kesYJv3JRwd8WBwwPDo1E4m5ADxiwFowE19kjq5wdCbAI8t7o46Vjp4ybRbdwGNQPWp4mwc3+ih1q0IimHsx2BCsVmHo5i9001ouNVzGTkZ0SeN871ZmZxQHX/1wqOj225stsgU8IGxi1u0loHIgQe6/W37+Iab7uutdLDHfKTMYsRd0J0JcXOGcVHx0OPtVRffvd1xn89Id0UWNLvHULfa/Mtu5tt1cTF53eRltNj6jR3SvdOKitiUB4ByLKAqI7wj9M8CNY5e34TGto2DN+N4pM+Oh/j9hILDa4CmXCN+E6zegbizwOoYjLoix4vkpLdp4SqF9GL222ajGlnh2nhkFY1bv3dMIeF/3n55+wxglLcgMAAA==',
        ui_id: 'fbdf0273-4409-4a31-b9a0-2784ecdb6d89',
        wait_for_completion: 'true',
    },
})
Record({
    $id: Now.ID['d651f4aafb1b87142ce8f46b5eefdccc'],
    table: 'sys_hub_sub_flow_instance_v2',
    data: {
        flow: '5c40e46efb9787142ce8f46b5eefdce1',
        order: '10',
        parent_ui_id: 'd1feae64-613a-430b-97a1-b531ffde39fe',
        show_stages: 'false',
        subflow: 'f7de95261b7dce906962fe60cd4bcb8f',
        subflow_inputs:
            'H4sIAAAAAAAA/41S24rbMBT8laJn2ziOr3krlIVC24Vtuy/LYo6k40Qgy15ZziYN+fce2d4k9EL7qDmXOTOjpxNTkm1YsZZYZUm+4oUUWMV5lScN5rGQKRe8SljADLRInRZfRhxcbVF0VhK+Bz36wulUZFBAmfAw5kkZpnEWhzznEKZlwdN0jVmaFdE8dz7TpFRDr+H4uCwgROyUlhYN2zw9B6wHS5wOLducfim5Y4+1Bo6aBh+wQaoIpA3/q+Y6O8l59/Am528yPeOEX7mo4G9bBQwPDo1E4m5ADxiwFowE19kj2zg7EmAR5L3Rx0vHThk3i27hMKgftHydBDf7N+xQg0Y09WC2I1ipwNTLWeymsV5svIqZjOyUwPveqc7MLA64/udS0emxNV9mC3xC2MCo3U1C40CE2Hu1/v5FTPN1171eYrhTZjJmKepOgL68wDmr+Ohw8KmO6tvvvs7gpz+kixpb4q1b6HtltnVvu72auOj0NtpqekSN7l7pxkFtTQTCOxBRFhDdEf5hgh/BKm/HZ1pDw57xu1Fkwkf/e0QpsSgxDmXC6RuvszysRL4KoVhVRVXwPF5X7DwlUL+MXtps1WJKPTtODYOwqnfv6YQ9LvrPzz8BJQvMzHIDAAA=',
        ui_id: 'a709be14-8b54-427e-a307-73908b874aad',
        wait_for_completion: 'true',
    },
})
Record({
    $id: Now.ID['197eb6103b2fc754546a249693e45a4e'],
    table: 'sys_hub_sub_flow_instance_v2',
    data: {
        flow: '017e76103b2fc754546a249693e45a48',
        order: '14',
        parent_ui_id: 'c7071aad-038d-4d82-8a1c-f4d3d03fea9d',
        show_stages: 'false',
        subflow: 'f7de95261b7dce906962fe60cd4bcb8f',
        subflow_inputs:
            'H4sIAAAAAAAA/42T3WrbQBCFX6XstSRsyZYs34UEQ6FtIGlzE4KY3R3ZC6uVsj+OXeN378hSbNOmtJc6c2bnzDfo+cCUZEtWZBLLeZpPeSEFlpO8zNMa84mQMy54mbKIGWiQnBZfAzpfWRStlaRvQYe+cDjk8wVPZYoxzzKMZwXkccnFPC4XKS85Qj7PpsnQdzxSp1Su07B/Gh8gRWyUlhYNWz6/RKwDSzM9WrY8/Fb639AaOGqyPgypPz28p/7bNn7fDXqNNEzgKH05v3PRqaGPNo0Y7jwaiZSpBu0wYg0YCb61e7b0NpBgEeS90fuzY6OMH3ZuYOfUTxqapdHV3CXbVaARTeXMOoCVCkw1xmVXxmqkeFmSqvUdeHik0cIHe2bbKoFu4CexhqD97bU2GO47r1oztHjg+p9JRKtDY74NPNn56aurBkcpsesR9UuPBOrHTft25rlS5kRzLOpWgL6yIlixWSnU/d1NaDh5IwbeW8WD7zc4sKC+/3m8QfzofKixoTxVA12nzLrqbLtVpwy0UpOsNX0ktW7fKLtTa5OA6MkkdFhIVqTfneQnsKrH9JWeOYUK6odRBOdzH1UsJBYLnMQy5Yt4ls3plxD5NIZiWhZlwfNJVrJjxNze3Wpw7oKRlqheQw9hgDriq4bb9C3Cqs7fUKgtjqSOL78AGTh7dNADAAA=',
        ui_id: 'fbdf0273-4409-4a31-b9a0-2784ecdb6d89',
        wait_for_completion: 'true',
    },
})
Record({
    $id: Now.ID['d57eb6103b2fc754546a249693e45a4d'],
    table: 'sys_hub_sub_flow_instance_v2',
    data: {
        flow: '017e76103b2fc754546a249693e45a48',
        order: '10',
        parent_ui_id: 'd1feae64-613a-430b-97a1-b531ffde39fe',
        show_stages: 'false',
        subflow: 'f7de95261b7dce906962fe60cd4bcb8f',
        subflow_inputs:
            'H4sIAAAAAAAA/42TW2vbQBCF/0rZZ0nIsixZfisJhkLbQNLmJQQxuzuyF1YrZS9OXOP/3pGl2KYX2kedObNz5hv0dGBKshUr5xKrRVbMeCkFVmlRFVmDRSpkzgWvMhYxAy2S0+JLQOdri6KzkvQd6DAUDodyASUsMx6nPFvGebpIY15wiPNlyfN8jot8USZj3/FInVK5XsP+cXqAFLFVWlo0bPX0HLEeLM30aNnq8Evpf0Nr4KjJej+m/nD/nvpv2/h9P+oN0jCBk/T5/M5Fp4Yh2ixi+ObRSKRMDWiHEWvBSPCd3bOVt4EEiyDvjN6fHVtl/LhzC29O/aCh8yy6mrtibzVoRFM7swlgpQJTT3HZlbGeKF6WpGpzCx4eaLTwwZ7ZdkqgG/lJbCBof3OtjYa73qvOjC0euP5nEtHp0JqvI092fvrqqsFRSuwHRMPSE4HmYdu9nnmulTnRnIq6E6CvrAhWbNcK9XB3E1pO3oiB91bx4IcNDiyob78fbxT/dD7U2FKeuoW+V2ZT97bbqVMGWqlNNpo+kkZ3r5TdqY1JQAxkEjosJGvSb0/yI1g1YPpCz5xCBfXdKILzaYgqlhLLJaaxzDj9EvNFEVeimMVQzqqyKnmRzit2jJjbuxsNzl0w0hL1SxggjFAnfPV4m6FFWNX7jxRqhxOp4/NPlAlIj9ADAAA=',
        ui_id: 'a709be14-8b54-427e-a307-73908b874aad',
        wait_for_completion: 'true',
    },
})
