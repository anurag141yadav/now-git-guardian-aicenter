import { Record } from '@servicenow/sdk/core'

Record({
    $id: Now.ID['3aaa95ee1b3dce906962fe60cd4bcb93'],
    table: 'sys_hub_flow',
    data: {
        access: 'public',
        acls: '',
        active: true,
        attributes:
            'browserActivatedIn=chrome,integrationActivatedIn=standalone,labelCacheCleanUpExecuted=true,timeFromCreateToActivate=57116520000,viewActivatedIn=naturalLanguage',
        callable_by_client_api: false,
        flow_priority: 'MEDIUM',
        internal_name: 'send_email_subflow',
        label_cache:
            '[{"name":"subflow.request_record.status.name","label":"Input➛Request Record➛Status➛Name","reference":"","reference_display":"Name","type":"string","base_type":"string","parent_table_name":"x_aleen_snguardian_request_status","column_name":"name"},{"name":"subflow.request_record.request_type.name","label":"Input➛Request Record➛Request Type➛Name","reference":"","reference_display":"Name","type":"translated_text","base_type":"translated_text","parent_table_name":"sc_cat_item_producer","column_name":"name"},{"name":"subflow.request_record.number","label":"Input➛Request Record➛Number","reference":"","reference_display":"Number","type":"string","base_type":"string","parent_table_name":"x_aleen_snguardian_request","column_name":"number"},{"name":"subflow.request_record.request_for.email","label":"Input➛Request Record➛Request For➛Email","reference":"","reference_display":"Email","type":"string","base_type":"string","parent_table_name":"x_aleen_snguardian_identity","column_name":"email"},{"name":"flow_variable.email","label":"Flow Variables➛email","type":"string","base_type":"string","attributes":{"sourceUiUniqueId":"","sourceType":"","sourceId":"","uiUniqueId":"cd63ae07-0353-4ed2-a1a8-f9f0fe4c34d7"}},{"name":"subflow.request_record.request_for.first_name","label":"Input➛Request Record➛Request For➛First Name","reference":"","reference_display":"First Name","type":"string","base_type":"string","parent_table_name":"x_aleen_snguardian_identity","column_name":"first_name"},{"name":"subflow.request_record.request_for.last_name","label":"Input➛Request Record➛Request For➛Last Name","reference":"","reference_display":"Last Name","type":"string","base_type":"string","parent_table_name":"x_aleen_snguardian_identity","column_name":"last_name"}]',
        master_snapshot: 'f7de95261b7dce906962fe60cd4bcb8f',
        name: 'Alert Send Email Subflow',
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
        latest_snapshot: 'f7de95261b7dce906962fe60cd4bcb8f',
        compiler_build: 'glide-zurich-07-01-2025__patch11m-07-09-2026_07-22-2026_0426.zip',
    },
})
Record({
    $id: Now.ID['baaa95ee1b3dce906962fe60cd4bcb95'],
    table: 'sys_flow_cat_variable_model',
    data: {
        id: '3aaa95ee1b3dce906962fe60cd4bcb93',
        name: 'Send Email Subflow',
    },
})
Record({
    $id: Now.ID['fbde95261b7dce906962fe60cd4bcb90'],
    table: 'sys_flow_cat_variable_model',
    data: {
        id: 'f7de95261b7dce906962fe60cd4bcb8f',
        name: 'Send Email Subflow',
    },
})
Record({
    $id: Now.ID['120e95e21b7dce906962fe60cd4bcbf4'],
    table: 'sys_hub_flow_input',
    data: {
        active: 'true',
        array: 'false',
        array_denormalized: 'false',
        attributes:
            'element_mapping_provider=com.glide.flow_design.action.data.FlowDesignVariableMapper,uiType=reference,uiTypeLabel=Reference,uiUniqueId=c8de78e0-d2b8-4356-9c61-a719797b6039',
        audit: 'false',
        calculation: `(function calculatedFieldValue(current) {

	// Add your code here
	return '';  // return the calculated value

})(current);`,
        choice_table: 'x_aleen_snguardian_request',
        display: 'false',
        dynamic_creation: 'false',
        element: 'request_record',
        element_reference: 'false',
        function_field: 'false',
        internal_type: 'reference',
        label: 'Request Record',
        mandatory: 'true',
        max_length: '32',
        model: '3aaa95ee1b3dce906962fe60cd4bcb93',
        model_id: '3aaa95ee1b3dce906962fe60cd4bcb93',
        model_table: 'sys_hub_flow',
        name: 'var__m_sys_hub_flow_input_3aaa95ee1b3dce906962fe60cd4bcb93',
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
    $id: Now.ID['73de95261b7dce906962fe60cd4bcb92'],
    table: 'sys_hub_flow_input',
    data: {
        active: 'true',
        array: 'false',
        array_denormalized: 'false',
        attributes:
            'element_mapping_provider=com.glide.flow_design.action.data.FlowDesignVariableMapper,uiType=reference,uiTypeLabel=Reference,uiUniqueId=c8de78e0-d2b8-4356-9c61-a719797b6039',
        audit: 'false',
        calculation: `(function calculatedFieldValue(current) {

	// Add your code here
	return '';  // return the calculated value

})(current);`,
        choice_table: 'x_aleen_snguardian_request',
        display: 'false',
        dynamic_creation: 'false',
        element: 'request_record',
        element_reference: 'false',
        function_field: 'false',
        internal_type: 'reference',
        label: 'Request Record',
        mandatory: 'true',
        max_length: '32',
        model: 'f7de95261b7dce906962fe60cd4bcb8f',
        model_id: 'f7de95261b7dce906962fe60cd4bcb8f',
        model_table: 'sys_hub_flow_snapshot',
        name: 'var__m_sys_hub_flow_input_f7de95261b7dce906962fe60cd4bcb8f',
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
    $id: Now.ID['2627295b4787f21051a3e84d416d43dc'],
    table: 'sys_hub_action_instance_v2',
    data: {
        action_type: 'c1806bf4a70323008299b39f087901cb',
        action_type_parent: '98c181d20b100300d97d8bf637673ab5',
        compiled_snapshot: 'c1806bf4a70323008299b39f087901cb',
        flow: '3aaa95ee1b3dce906962fe60cd4bcb93',
        order: '5',
        ui_id: '5287506e-1fee-48af-adc6-e89ade596f4f',
        values: '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',
    },
})
Record({
    $id: Now.ID['3627695b4787f21051a3e84d416d4393'],
    table: 'sys_hub_action_instance_v2',
    data: {
        action_type: 'c1806bf4a70323008299b39f087901cb',
        action_type_parent: '98c181d20b100300d97d8bf637673ab5',
        compiled_snapshot: 'c1806bf4a70323008299b39f087901cb',
        flow: 'f7de95261b7dce906962fe60cd4bcb8f',
        order: '5',
        ui_id: '5287506e-1fee-48af-adc6-e89ade596f4f',
        values: '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',
    },
})
Record({
    $id: Now.ID['2627295b4787f21051a3e84d416d43da'],
    table: 'sys_hub_flow_logic_instance_v2',
    data: {
        block: '2e27295b4787f21051a3e84d416d43d9',
        flow: '3aaa95ee1b3dce906962fe60cd4bcb93',
        flow_variables_assigned: 'email',
        logic_definition: '4f787d1e0f9b0010ecf0cc52ff767ea0',
        order: '4',
        parent_ui_id: '6473dd7b-94e8-4468-b4e1-17e8459ffb35',
        ui_id: '2355b635-02c5-4a96-9096-8152141c6de9',
        values: 'H4sIAAAAAAAA/+1VTW/bMAz9LzonhhOnTpNbgaFAgG4FlqyXoTBkiUqEyZIryUmzIP99pD8SINguu/TSm/kkku89kfCJuSbWTQwb9xCC3lq2/Pk6YtoSht8nZnkFbMmg4tqwEdtz01B8OoWmVMYdEg9vDYRYeBDOy0uonE/apPMZ06QOteHHl//LFjttpIeeXM09corg2fJ0cxSPNRSGl2CwyTp6bbeYriVGOU9hcQfTSTmXAhZpvsinCvJUyFkpSqXw3pA4aL2RTsUxDENZ5Esc0hGD9whWArZR3AQYsYpbyaPzxwvigctna67ATtuI1Rhdfg/6N5a+T9OUbipAQQK600tY9B52sNg5LeC5jtrZDom8NH2OcKap7LeOPrkPijcmDu4j0gSsBzWxJho9J7XeucP3oeGjtq3A/tA4wc0l4hFtKJsIgV6h0Zsbczrk6fYpwECFHYuK1zUiRe3dXrddkHSVbA0GCQ0GsqNxTLgghQm6yZNHxL+08Av3muR+xTKYTO1+WI2js6KnFjLPOKTzcZrdZeMZyOmYT/j9WC1UqmAmspmcs3NrbfHWkKjOpN6OonMULwThdR0fkMIeeuXnV9qBrnu3IMT2yW21WNkQOfq2PoaWRobi5WSa/33isnyYzH+M24ds2udufe7Wh+6WBKEDstoQhdXwG6KDI44MLdkVOjj/i/RcsfMfi3lCeNAGAAA=',
    },
})
Record({
    $id: Now.ID['6a27295b4787f21051a3e84d416d43c7'],
    table: 'sys_hub_flow_logic_instance_v2',
    data: {
        block: '6227295b4787f21051a3e84d416d43c7',
        flow: '3aaa95ee1b3dce906962fe60cd4bcb93',
        logic_definition: 'd176605ea76103004f27b0d2187901c7',
        order: '2',
        parent_ui_id: '1d7c0c72-91cd-4172-8483-0c7660ca3602',
        ui_id: '3e1671f7-a8aa-4bfa-8cd0-9db5c5db8bb9',
        values: 'H4sIAAAAAAAA/6tWyi8tKSgtKQ7JdywuzkzPU7KKjtVRyswDiUHYZYlFmYlJOalQbkpqcmZxZn5eCEjME0ldSmVeYm5mMrJQeX5RdlpOfjlCrBYAD1ouqHEAAAA=',
    },
})
Record({
    $id: Now.ID['ae27295b4787f21051a3e84d416d43d6'],
    table: 'sys_hub_flow_logic_instance_v2',
    data: {
        block: 'a627295b4787f21051a3e84d416d43d6',
        connected_to: '1d7c0c72-91cd-4172-8483-0c7660ca3602',
        flow: '3aaa95ee1b3dce906962fe60cd4bcb93',
        logic_definition: '1f781bf3c32232002841b63b12d3aee6',
        order: '3',
        ui_id: '6473dd7b-94e8-4468-b4e1-17e8459ffb35',
        values: 'H4sIAAAAAAAA/6tWyi8tKSgtKQ7JdywuzkzPU7KKjtVRyswDiUHYZYlFmYlJOalQbkpqcmZxZn5eCEjME0ldSmVeYm5mMrJQeX5RdlpOfjlCrBYAD1ouqHEAAAA=',
    },
})
Record({
    $id: Now.ID['e227295b4787f21051a3e84d416d43c4'],
    table: 'sys_hub_flow_logic_instance_v2',
    data: {
        block: 'a627295b4787f21051a3e84d416d43c3',
        flow: '3aaa95ee1b3dce906962fe60cd4bcb93',
        logic_definition: 'af4e1945c3e232002841b63b12d3ae3e',
        order: '1',
        ui_id: '1d7c0c72-91cd-4172-8483-0c7660ca3602',
        values: 'H4sIAAAAAAAA/+1UTW/bMAz9K4HOhuGPJlhzK7oVGLCtQFv0shUGLdOJMFlSJTlpZuS/j/JHGqwpVhQ77mY+UuR75IM7pltvWu/u9IVzYqXY8vtDxIQKGH13TEGDbMm4VpXwQquiByK2AdmGxA1yYQQqP/vUgJAz4WZK+5mx6Aikwko4I2F3/9Z6vhaysjgyMWBpnkfLlt0fKb8zWEgoUVLbW2+FWtFzUVFUJ1Cn5zzlebbIsyTJPpyl5SIv06zKASGnuunh5SRs9qVHolcVh3mEu2mStlWglSYRwyePqkIaXYN0GLEGVAVe290BsQjVtZLPwFqQ3CVjofjJiV/UO5vPQ2GNpJHjkDyExbjIAeZrLThem0BwQDyUcnzDtWwb9W3QEU6ANbTSTycgpHXUD00gHViMlOrbtd7eTAOvhOoFjkmpOchDBJ7WULYeXTgMSmyoUdGAMbScwli9Ef1j4tLEK0lBXEu9paHBZTHwQDymHUF8RfjHHr4HK4KKr9SGHg80S3CCF70jqZ23JGHfr6V4bAOhQeAopRi2QQWOW2H8Bc3Z4Mh6H72085GTu861ZSAZW3xs0fnCIqcjH8Ja2xiDaff7H22S5NVLd7+rx79w/DnM63mazE87/mxxyvEnvP66zbO/2Dwc5o0uT5Lkv82PbS5cMdh11NYPf7fLH4Klhwlu8E1F/1xHRO4C9nn6t4fEjgwg+DG01fZnkPCM7X8DVfqO6SUGAAA=',
    },
})
Record({
    $id: Now.ID['3627695b4787f21051a3e84d416d4391'],
    table: 'sys_hub_flow_logic_instance_v2',
    data: {
        block: '2e27295b4787f21051a3e84d416d43d9',
        flow: 'f7de95261b7dce906962fe60cd4bcb8f',
        flow_variables_assigned: 'email',
        logic_definition: '4f787d1e0f9b0010ecf0cc52ff767ea0',
        order: '4',
        parent_ui_id: '6473dd7b-94e8-4468-b4e1-17e8459ffb35',
        ui_id: '2355b635-02c5-4a96-9096-8152141c6de9',
        values: 'H4sIAAAAAAAA/+1VyW7bMBD9F55tQV4ix74FCQIYSBugdnMpAmFEDm2iFKlwseMa/vcOLdkOulx66sE3zeMs7z1yoD2zMTQx+KW9816tDJt9e+0xZRJG33smtd0+2ZXic+MDGI6LnZ8LNmMjqFAMhsWgmgiO07yYFkOJRc7FuOLVqGDUJuVhDUpTYKDGD+EGdEzxfu9jlYZkDt8i+lA65NaJcyity45FhwOVCeUbDbuXf6tuwBGLgI7N9oyvlRYOT5IT1wJynN7g8M+apKQWmmTrv8sKuyaFPjhlVl381JUsTiARTBTyHsP3gEYgzZagPfZYDUZAsG53RhyCeDb6AqyVCdSNpeR3r37QvNs8z1OmRNLDsT09h2VnWgvLBwhAVCIP0XWpfG0VR986IVBC1OH+I9YmPDdBWdOWBKj0qdrqWJvPrRHs3OB0R4RETySwSVIT906IXKzt9suJ5aMyR1e6Q2056HMEgbyrYkh89iyq5S82t8hvRqPGmiaWNTQNIWXj7EYdpxDpOltpCrL0fIhdev0Z8KQwoyuA7JHwhyP8Ak4luZ+oDRWncV+Nogd2XAQuihFgPunno5tRf4xi2IcB3PblVOYSx3w0FhN26DG/8/cavL8YRTdUvsUks7WtM6hsPU4l3Kkm3BGpDXZeHF7T7rR8rht63dDrhv6PGyqQK088l4nU/PQ3TQc7eo5pVS/Q1rrvSeEFO/wEBPmiDpcHAAA=',
    },
})
Record({
    $id: Now.ID['be27695b4787f21051a3e84d416d4387'],
    table: 'sys_hub_flow_logic_instance_v2',
    data: {
        block: 'a627295b4787f21051a3e84d416d43c3',
        flow: 'f7de95261b7dce906962fe60cd4bcb8f',
        logic_definition: 'af4e1945c3e232002841b63b12d3ae3e',
        order: '1',
        ui_id: '1d7c0c72-91cd-4172-8483-0c7660ca3602',
        values: 'H4sIAAAAAAAA/+1Vy27bMBD8FYNnQZDs2Gh8C5wGKJA2QBLk0gbCilrZRClS4cOOa/jfu9TLRuKiSdtjb+ZwuTsz2oF3THtXe2fv9YW1YqnY/OtjxIQKGP3eMQUVsjnjWhXCCa2yBojYGqQPF7fIRS1QudHHCoQcCTtS2o1qg5ZAKiyErSVsH95az1dCFgY7JjUYmufQsPnuxZUoqF2ZQJme85RPxrPJOEnGH87SfDbJ03ExAYQJNZSQo6TSRS9hdN0g0S+1uW0dcOuMUMvufN11uetBbYrAKk0ihs8OVYHEpwRpMWIVqAKcNtsBMQjFjZIHYCVI7ZyxUPxsxQ8aOJ5OQ2GJJJFjezkcs87HFi4vwQFR8dx505XylRYcbWtOgSV46RbHWFtwUwep7RMHuexfa+kr9aV1hA0N+s9GiLdEAuugNFDvdJR3K7257VleCdW40l1KzUEOJ3DkXe5d4LNjKLGiRlkFdU2OZrXRa9E8Ji5VvJR0iEupNzQ0bGYMPBCPyViIrwi/bOAHMCKo+Ext6HFLMwcreNZsMbUjm5DtI2a3diHB2oNIcjd78oFiK7kTl7X+hCfciNpd0OQ1djr20etQHOVht7M+D7Rjg08ercsMctqV4VhqE2NY/f3+m0+SSfE6I3/U4325OYdpOU2T6encnM1O5eZEYt4ZlvFvwhK+1BuzkiTJ/7D8dViEzdoV77Q1w/9hVh5DMNqZg9dcWKJ2H7BP/f9MuNjScgl+DG20+R5EHbD9T573xFexBgAA',
    },
})
Record({
    $id: Now.ID['be27695b4787f21051a3e84d416d438d'],
    table: 'sys_hub_flow_logic_instance_v2',
    data: {
        block: 'a627295b4787f21051a3e84d416d43d6',
        connected_to: '1d7c0c72-91cd-4172-8483-0c7660ca3602',
        flow: 'f7de95261b7dce906962fe60cd4bcb8f',
        logic_definition: '1f781bf3c32232002841b63b12d3aee6',
        order: '3',
        ui_id: '6473dd7b-94e8-4468-b4e1-17e8459ffb35',
        values: 'H4sIAAAAAAAA/6tWyi8tKSgtKQ7JdywuzkzPU7KKjtVRyswDiUHYZYlFmYlJOalQbkpqcmZxZn5eCEjME0ldSmVeYm5mMrJQeX5RdlpOfjlCrBYAD1ouqHEAAAA=',
    },
})
Record({
    $id: Now.ID['fe27695b4787f21051a3e84d416d438a'],
    table: 'sys_hub_flow_logic_instance_v2',
    data: {
        block: '6227295b4787f21051a3e84d416d43c7',
        flow: 'f7de95261b7dce906962fe60cd4bcb8f',
        logic_definition: 'd176605ea76103004f27b0d2187901c7',
        order: '2',
        parent_ui_id: '1d7c0c72-91cd-4172-8483-0c7660ca3602',
        ui_id: '3e1671f7-a8aa-4bfa-8cd0-9db5c5db8bb9',
        values: 'H4sIAAAAAAAA/6tWyi8tKSgtKQ7JdywuzkzPU7KKjtVRyswDiUHYZYlFmYlJOalQbkpqcmZxZn5eCEjME0ldSmVeYm5mMrJQeX5RdlpOfjlCrBYAD1ouqHEAAAA=',
    },
})
Record({
    $id: Now.ID['f7de95261b7dce906962fe60cd4bcb8f'],
    table: 'sys_hub_flow_snapshot',
    data: {
        access: 'public',
        active: 'true',
        attributes:
            'browserActivatedIn=chrome,integrationActivatedIn=standalone,labelCacheCleanUpExecuted=true,viewActivatedIn=naturalLanguage',
        callable_by_client_api: 'false',
        flow_priority: 'MEDIUM',
        internal_name: 'send_email_subflow',
        label_cache:
            '[{"name":"subflow.request_record.status.name","label":"Input➛Request Record➛Status➛Name","reference":"","reference_display":"Name","type":"string","base_type":"string","parent_table_name":"x_aleen_snguardian_request_status","column_name":"name"},{"name":"subflow.request_record.request_type.name","label":"Input➛Request Record➛Request Type➛Name","reference":"","reference_display":"Name","type":"translated_text","base_type":"translated_text","parent_table_name":"sc_cat_item_producer","column_name":"name"},{"name":"subflow.request_record.number","label":"Input➛Request Record➛Number","reference":"","reference_display":"Number","type":"string","base_type":"string","parent_table_name":"x_aleen_snguardian_request","column_name":"number"},{"name":"subflow.request_record.request_for.email","label":"Input➛Request Record➛Request For➛Email","reference":"","reference_display":"Email","type":"string","base_type":"string","parent_table_name":"x_aleen_snguardian_identity","column_name":"email"},{"name":"flow_variable.email","label":"Flow Variables➛email","type":"string","base_type":"string","attributes":{"sourceUiUniqueId":"","sourceType":"","sourceId":"","uiUniqueId":"cd63ae07-0353-4ed2-a1a8-f9f0fe4c34d7"}},{"name":"subflow.request_record.request_for.first_name","label":"Input➛Request Record➛Request For➛First Name","reference":"","reference_display":"First Name","type":"string","base_type":"string","parent_table_name":"x_aleen_snguardian_identity","column_name":"first_name"},{"name":"subflow.request_record.request_for.last_name","label":"Input➛Request Record➛Request For➛Last Name","reference":"","reference_display":"Last Name","type":"string","base_type":"string","parent_table_name":"x_aleen_snguardian_identity","column_name":"last_name"}]',
        master: 'true',
        name: 'Alert Send Email Subflow',
        parent_flow: '3aaa95ee1b3dce906962fe60cd4bcb93',
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
    $id: Now.ID['3ebed1261b7dce906962fe60cd4bcb4a'],
    table: 'sys_hub_pill_compound',
    data: {
        attached_to: '3aaa95ee1b3dce906962fe60cd4bcb93',
        order: '0',
        prescription: '{{subflow.request_record.request_for.first_name}}',
        transform_compositions: '[]',
        ui_id: 'eb9b1f59-6c0c-4dd1-a7b2-10b097b00221',
    },
})
Record({
    $id: Now.ID['7abed1261b7dce906962fe60cd4bcb4a'],
    table: 'sys_hub_pill_compound',
    data: {
        attached_to: '3aaa95ee1b3dce906962fe60cd4bcb93',
        order: '0',
        prescription: '{{subflow.request_record.status.name}}',
        transform_compositions: '[]',
        ui_id: 'ef1d8a01-948e-47ca-95bc-2e6686b55360',
    },
})
Record({
    $id: Now.ID['b2bed1261b7dce906962fe60cd4bcb4a'],
    table: 'sys_hub_pill_compound',
    data: {
        attached_to: '3aaa95ee1b3dce906962fe60cd4bcb93',
        order: '0',
        prescription: '{{subflow.request_record.request_type.name}}',
        transform_compositions: '[]',
        ui_id: 'e654f1e7-3ae6-44da-9257-81051e448ad6',
    },
})
Record({
    $id: Now.ID['febed1261b7dce906962fe60cd4bcb4a'],
    table: 'sys_hub_pill_compound',
    data: {
        attached_to: '3aaa95ee1b3dce906962fe60cd4bcb93',
        order: '0',
        prescription: '{{subflow.request_record.request_for.last_name}}',
        transform_compositions: '[]',
        ui_id: 'fd049cb6-895b-4491-9a2c-4f57c4040b60',
    },
})
Record({
    $id: Now.ID['04eed5261b7dce906962fe60cd4bcb08'],
    table: 'sys_hub_pill_compound',
    data: {
        attached_to: 'f7de95261b7dce906962fe60cd4bcb8f',
        order: '0',
        prescription: '{{subflow.request_record.status.name}}',
        transform_compositions: '[]',
        ui_id: 'ef1d8a01-948e-47ca-95bc-2e6686b55360',
    },
})
Record({
    $id: Now.ID['08eed5261b7dce906962fe60cd4bcb08'],
    table: 'sys_hub_pill_compound',
    data: {
        attached_to: 'f7de95261b7dce906962fe60cd4bcb8f',
        order: '0',
        prescription: '{{subflow.request_record.request_type.name}}',
        transform_compositions: '[]',
        ui_id: 'e654f1e7-3ae6-44da-9257-81051e448ad6',
    },
})
Record({
    $id: Now.ID['84eed5261b7dce906962fe60cd4bcb08'],
    table: 'sys_hub_pill_compound',
    data: {
        attached_to: 'f7de95261b7dce906962fe60cd4bcb8f',
        order: '0',
        prescription: '{{subflow.request_record.request_for.last_name}}',
        transform_compositions: '[]',
        ui_id: 'fd049cb6-895b-4491-9a2c-4f57c4040b60',
    },
})
Record({
    $id: Now.ID['88eed5261b7dce906962fe60cd4bcb08'],
    table: 'sys_hub_pill_compound',
    data: {
        attached_to: 'f7de95261b7dce906962fe60cd4bcb8f',
        order: '0',
        prescription: '{{subflow.request_record.request_for.first_name}}',
        transform_compositions: '[]',
        ui_id: 'eb9b1f59-6c0c-4dd1-a7b2-10b097b00221',
    },
})
Record({
    $id: Now.ID['8ceed5261b7dce906962fe60cd4bcb26'],
    table: 'sys_flow_subflow_plan',
    data: {
        plan: '{"type":"PlanProxy","persistor":{"@class":".ChunkingPlanPersistor","table":"sys_flow_subflow_plan","id":"8ceed5261b7dce906962fe60cd4bcb26","name":"plan","plan_signature":null}}',
        plan_id: '3aaa95ee1b3dce906962fe60cd4bcb93',
        snapshot: '6c4d31d43b27c754546a249693e45a3f',
        sys_domain: 'global',
        sys_domain_path: '/',
    },
})
Record({
    $id: Now.ID['6a0e95e21b7dce906962fe60cd4bcbff'],
    table: 'sys_hub_flow_variable',
    data: {
        active: 'true',
        array: 'false',
        array_denormalized: 'false',
        attributes:
            'element_mapping_provider=com.glide.flow_design.action.data.FlowDesignVariableMapper,uiType=string,uiTypeLabel=String,uiUniqueId=cd63ae07-0353-4ed2-a1a8-f9f0fe4c34d7',
        audit: 'false',
        calculation: `(function calculatedFieldValue(current) {

	// Add your code here
	return '';  // return the calculated value

})(current);`,
        display: 'false',
        dynamic_creation: 'false',
        element: 'email',
        element_reference: 'false',
        function_field: 'false',
        internal_type: 'string',
        label: 'email',
        mandatory: 'false',
        max_length: '8000',
        model: '3aaa95ee1b3dce906962fe60cd4bcb93',
        model_id: '3aaa95ee1b3dce906962fe60cd4bcb93',
        model_table: 'sys_hub_flow',
        name: 'var__m_sys_hub_flow_variable_3aaa95ee1b3dce906962fe60cd4bcb93',
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
    $id: Now.ID['b7de95261b7dce906962fe60cd4bcbd0'],
    table: 'sys_hub_flow_variable',
    data: {
        active: 'true',
        array: 'false',
        array_denormalized: 'false',
        attributes:
            'element_mapping_provider=com.glide.flow_design.action.data.FlowDesignVariableMapper,uiType=string,uiTypeLabel=String,uiUniqueId=cd63ae07-0353-4ed2-a1a8-f9f0fe4c34d7',
        audit: 'false',
        calculation: `(function calculatedFieldValue(current) {

	// Add your code here
	return '';  // return the calculated value

})(current);`,
        display: 'false',
        dynamic_creation: 'false',
        element: 'email',
        element_reference: 'false',
        function_field: 'false',
        internal_type: 'string',
        label: 'email',
        mandatory: 'false',
        max_length: '8000',
        model: 'f7de95261b7dce906962fe60cd4bcb8f',
        model_id: 'f7de95261b7dce906962fe60cd4bcb8f',
        model_table: 'sys_hub_flow_snapshot',
        name: 'var__m_sys_hub_flow_variable_f7de95261b7dce906962fe60cd4bcb8f',
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
