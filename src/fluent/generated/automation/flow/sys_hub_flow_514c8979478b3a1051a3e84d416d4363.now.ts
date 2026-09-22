import { Record } from '@servicenow/sdk/core'

Record({
    $id: Now.ID['514c8979478b3a1051a3e84d416d4363'],
    table: 'sys_hub_flow',
    data: {
        access: 'public',
        acls: '',
        active: true,
        attributes:
            'browserActivatedIn=chrome,integrationActivatedIn=standalone,labelCacheCleanUpExecuted=true,timeFromCreateToActivate=409600000,viewActivatedIn=naturalLanguage',
        authored_on_release_version: 26000,
        callable_by_client_api: false,
        category: '{}',
        flow_priority: 'MEDIUM',
        internal_name: 'alert_access_review_subflow__notification_email',
        label_cache:
            '[{"name":"f54151c2-28fe-4651-9023-c9ad293d587b.item.valid_to","label":"4 - For Each➛Identity Attestation Record➛Valid To","reference":"","reference_display":"Valid To","type":"glide_date_time","base_type":"glide_date_time","parent_table_name":"x_aleen_snguardian_identity_attestation","column_name":"valid_to","usedInstances":{"0b91a2ae-01c4-4147-baed-cedd091da963":[null]}},{"name":"flow_variable.expiration_period","label":"Flow Variables➛expiration_period","type":"string","base_type":"string","usedInstances":{"0b91a2ae-01c4-4147-baed-cedd091da963":[null]},"attributes":{"sourceUiUniqueId":"","sourceType":"","sourceId":"","uiUniqueId":"f5e5f6d6-0a57-40d2-8f2b-98947fb7d6ad"}},{"name":"subflow.review_task.review.type","label":"Input➛review_task➛Review➛Type","reference":"","reference_display":"Type","type":"choice","base_type":"choice","parent_table_name":"x_aleen_snguardian_review","column_name":"type","choices":[{"image":"","label":"Area owner Access Review","used":false,"reference":false,"selected":false,"missing":false,"rawLabel":"Area owner Access Review","value":"AREAOWNER","parameters":{"name":"x_aleen_snguardian_review","dependent_values":[""]}},{"image":"","label":"Expiring Badge Review","used":false,"reference":false,"selected":false,"missing":false,"rawLabel":"Expiring Badge Review","value":"EXPIRY_BADGE","parameters":{"name":"x_aleen_snguardian_review","dependent_values":[""]}},{"image":"","label":"Manager Access Review","used":false,"reference":false,"selected":false,"missing":false,"rawLabel":"Manager Access Review","value":"MANAGER","parameters":{"name":"x_aleen_snguardian_review","dependent_values":[""]}},{"image":"","label":"Others","used":false,"reference":false,"selected":false,"missing":false,"rawLabel":"Others","value":"OTHERS","parameters":{"name":"x_aleen_snguardian_review","dependent_values":[""]}},{"image":"","label":"Training Expiry Review","used":false,"reference":false,"selected":false,"missing":false,"rawLabel":"Training Expiry Review","value":"EXPIRY_TRAINING","parameters":{"name":"x_aleen_snguardian_review","dependent_values":[""]}}],"usedInstances":{"19fc25b7-61d9-48d6-a85e-65433d8ce20a":["condition"],"15873d07-e896-4433-880e-9c156ea42313":[null]}},{"name":"subflow.review_task.number","label":"Input➛review_task➛Number","reference":"","reference_display":"Number","type":"string","base_type":"string","parent_table_name":"x_aleen_snguardian_review_task","column_name":"number","usedInstances":{"39a0ce8c-96cb-4730-93d6-4acd5b6908e4":["conditions"],"15873d07-e896-4433-880e-9c156ea42313":["ah_subject",null]}},{"name":"39a0ce8c-96cb-4730-93d6-4acd5b6908e4.Records","label":"3 - Look Up Records➛Identity Attestation Records","reference":"x_aleen_snguardian_identity_attestation","reference_display":"Identity Attestation","type":"records","base_type":"records","usedInstances":{"f54151c2-28fe-4651-9023-c9ad293d587b":["items"]},"attributes":{"element_mapping_provider":"com.glide.flow_design.action.data.FlowDesignVariableMapper"}},{"name":"f54151c2-28fe-4651-9023-c9ad293d587b.item.identity.email","label":"4 - For Each➛Identity Attestation Record➛Identity➛Email","reference":"","reference_display":"Email","type":"string","base_type":"string","parent_table_name":"x_aleen_snguardian_identity","column_name":"email","usedInstances":{"0b91a2ae-01c4-4147-baed-cedd091da963":["ah_to"]}},{"name":"f54151c2-28fe-4651-9023-c9ad293d587b.item.identity.full_name","label":"4 - For Each➛Identity Attestation Record➛Identity➛Full Name","reference":"","reference_display":"Full Name","type":"string","base_type":"string","parent_table_name":"x_aleen_snguardian_identity","column_name":"full_name","usedInstances":{"0b91a2ae-01c4-4147-baed-cedd091da963":["ah_subject",null]}},{"name":"f54151c2-28fe-4651-9023-c9ad293d587b.item.assertion.name","label":"4 - For Each➛Identity Attestation Record➛Assertion➛Name","reference":"","reference_display":"Name","type":"string","base_type":"string","parent_table_name":"x_aleen_snguardian_assertion","column_name":"name","usedInstances":{"0b91a2ae-01c4-4147-baed-cedd091da963":[null]}},{"name":"f54151c2-28fe-4651-9023-c9ad293d587b.item.valid_from","label":"4 - For Each➛Identity Attestation Record➛Valid From","reference":"","reference_display":"Valid From","type":"glide_date_time","base_type":"glide_date_time","parent_table_name":"x_aleen_snguardian_identity_attestation","column_name":"valid_from","usedInstances":{"0b91a2ae-01c4-4147-baed-cedd091da963":[null]}},{"name":"subflow.review_task.review.due_date","label":"Input➛review_task➛Review➛Due Date","reference":"","reference_display":"Due Date","type":"glide_date_time","base_type":"glide_date_time","parent_table_name":"x_aleen_snguardian_review","column_name":"due_date","usedInstances":{"15873d07-e896-4433-880e-9c156ea42313":[null]}},{"name":"subflow.review_task.total_records","label":"Input➛review_task➛Total Records","reference":"","reference_display":"Total Records","type":"integer","base_type":"integer","parent_table_name":"x_aleen_snguardian_review_task","column_name":"total_records","usedInstances":{"15873d07-e896-4433-880e-9c156ea42313":[null]}},{"name":"subflow.review_task.pending","label":"Input➛review_task➛Pending","reference":"","reference_display":"Pending","type":"integer","base_type":"integer","parent_table_name":"x_aleen_snguardian_review_task","column_name":"pending","usedInstances":{"15873d07-e896-4433-880e-9c156ea42313":[null]}},{"name":"subflow.review_task.errors","label":"Input➛review_task➛Errors","reference":"","reference_display":"Errors","type":"integer","base_type":"integer","parent_table_name":"x_aleen_snguardian_review_task","column_name":"errors","usedInstances":{"15873d07-e896-4433-880e-9c156ea42313":[null]}},{"name":"subflow.review_task.completed","label":"Input➛review_task➛Completed","reference":"","reference_display":"Completed","type":"integer","base_type":"integer","parent_table_name":"x_aleen_snguardian_review_task","column_name":"completed","usedInstances":{"15873d07-e896-4433-880e-9c156ea42313":[null]}}]',
        master_snapshot: 'c52055bd478b3a1051a3e84d416d4336',
        name: 'Alert Access Review Subflow :: Notification',
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
        latest_snapshot: 'c52055bd478b3a1051a3e84d416d4336',
        compiler_build: 'glide-xanadu-07-02-2024__patch11-hotfix1a-12-29-2025_01-12-2026_2334.zip',
    },
})
Record({
    $id: Now.ID['994c05b9478b3a1051a3e84d416d4329'],
    table: 'sys_flow_cat_variable_model',
    data: {
        id: '514c8979478b3a1051a3e84d416d4363',
        name: 'Alert Access Review Subflow :: Notification Email',
    },
})
Record({
    $id: Now.ID['0d2055bd478b3a1051a3e84d416d4337'],
    table: 'sys_flow_cat_variable_model',
    data: {
        id: 'c52055bd478b3a1051a3e84d416d4336',
        name: 'Alert Access Review Subflow :: Notification',
    },
})
Record({
    $id: Now.ID['e21ec5f9478b3a1051a3e84d416d4319'],
    table: 'sys_hub_flow_input',
    data: {
        active: 'true',
        array: 'false',
        array_denormalized: 'false',
        attributes:
            'element_mapping_provider=com.glide.flow_design.action.data.FlowDesignVariableMapper,uiType=reference,uiTypeLabel=Reference,uiUniqueId=cd710962-0466-4241-8830-701b124d8826',
        audit: 'false',
        calculation: `(function calculatedFieldValue(current) {

	// Add your code here
	return '';  // return the calculated value

})(current);`,
        choice_table: 'x_aleen_snguardian_review_task',
        display: 'false',
        dynamic_creation: 'false',
        element: 'review_task',
        element_reference: 'false',
        function_field: 'false',
        internal_type: 'reference',
        label: 'review_task',
        mandatory: 'false',
        max_length: '32',
        model: '514c8979478b3a1051a3e84d416d4363',
        model_id: '514c8979478b3a1051a3e84d416d4363',
        model_table: 'sys_hub_flow',
        name: 'var__m_sys_hub_flow_input_514c8979478b3a1051a3e84d416d4363',
        order: '1',
        primary: 'false',
        read_only: 'false',
        reference: 'x_aleen_snguardian_review_task',
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
    $id: Now.ID['012055bd478b3a1051a3e84d416d4339'],
    table: 'sys_hub_flow_input',
    data: {
        active: 'true',
        array: 'false',
        array_denormalized: 'false',
        attributes:
            'element_mapping_provider=com.glide.flow_design.action.data.FlowDesignVariableMapper,uiType=reference,uiTypeLabel=Reference,uiUniqueId=cd710962-0466-4241-8830-701b124d8826',
        audit: 'false',
        calculation: `(function calculatedFieldValue(current) {

	// Add your code here
	return '';  // return the calculated value

})(current);`,
        choice_table: 'x_aleen_snguardian_review_task',
        display: 'false',
        dynamic_creation: 'false',
        element: 'review_task',
        element_reference: 'false',
        function_field: 'false',
        internal_type: 'reference',
        label: 'review_task',
        mandatory: 'false',
        max_length: '32',
        model: 'c52055bd478b3a1051a3e84d416d4336',
        model_id: 'c52055bd478b3a1051a3e84d416d4336',
        model_table: 'sys_hub_flow_snapshot',
        name: 'var__m_sys_hub_flow_input_c52055bd478b3a1051a3e84d416d4336',
        order: '1',
        primary: 'false',
        read_only: 'false',
        reference: 'x_aleen_snguardian_review_task',
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
    $id: Now.ID['661e413d478b3a1051a3e84d416d4397'],
    table: 'sys_hub_action_instance_v2',
    data: {
        action_type: 'c1806bf4a70323008299b39f087901cb',
        action_type_parent: '98c181d20b100300d97d8bf637673ab5',
        compiled_snapshot: 'c1806bf4a70323008299b39f087901cb',
        flow: '514c8979478b3a1051a3e84d416d4363',
        order: '5',
        parent_ui_id: 'f54151c2-28fe-4651-9023-c9ad293d587b',
        ui_id: '0b91a2ae-01c4-4147-baed-cedd091da963',
        values: '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',
    },
})
Record({
    $id: Now.ID['a21e413d478b3a1051a3e84d416d4393'],
    table: 'sys_hub_action_instance_v2',
    data: {
        action_type: '43400a1587003300663ca1bb36cb0b4b',
        action_type_parent: 'd1c56ec50b30030085c083eb37673a50',
        compiled_snapshot: '43400a1587003300663ca1bb36cb0b4b',
        flow: '514c8979478b3a1051a3e84d416d4363',
        order: '3',
        parent_ui_id: '19fc25b7-61d9-48d6-a85e-65433d8ce20a',
        ui_id: '39a0ce8c-96cb-4730-93d6-4acd5b6908e4',
        values: 'H4sIAAAAAAAA/9VXy07jMBT9lSrrqEpoKQw7BorEAioBYhYMYzmx21q4dsZ2+qDqv8917KRPoHTKDCx9fR/nXp/jOA/TgJHgJDjuNqMIx4fHR1HUaERRq9VIcZwkjVaaREkzCcJA4AEFT4MTTmE5xDy36zHCnFKBtOjlWBGGBWKECsPMBGFjqDbYMCkggjCdcTy594GX3qt2uuSV9hkniorg5OExDDKsoKyhKjiZrmyZSUYRxwnlkOzOoqpdW4jh1h0tBa93aAuUSyRcaqmIxRKFAR0bKgiFUl3MNQ2DARYEG6kmlUVRTDqCzw19JgxkDKzzWLNnSH8cWb8uhbZS6vaqJfITc+a0L1lKO1kxp8LigLpNyfOBuHYN2FnTLs65KWcNllxDPppZzBaER9S97cvRTVnwgomiPb/JZYp5tYLDVCzJ4azsWVBOB5AIDXCWMdFDmZJDVgQDlkG9x2FR73I5gqKa9UQdpxZ4HUaE6xdgPy/M91gx28UVpIFgAMQ4nDZyQ9cyV8VUhijluS42FBba5QpmxazQ79yidF37/pAbETjoVLHMnELAkPpWZuFWpD+M5pRIpSDM1tQLzFd0yOgIoOqnusgHCVU/c0hEplOdJ7b1+rrHbPbLG/08UkmoC7vrfG/ftO8v2z/a5+tq+dhiu4nubHEq2050Y/CmMXv5Ldm8/OK9yQ/g/icBGpV/Pv29pSjX8BuySo9eJcHh/Ly1VAa5yS3oap38OzP0glFOlj4LW4ArgzuWbLVk8hJeT9CurbHyfTj48t+HT0lPAESQmzcTnIni8wxA98Pb6PXL69sKD4rjn7O2sGGdrrMX14ysPe9+yxbnWvJ3C5Bl4C0gqt05lBuAl/drmd5Tt7E36jYO3kddIM7DtEJfTW3DgMtXmD260v/Z+uNVf2DXQkA8e6yof7Zbzfi9NQ9szRVtNt4lzkVmuZ3zFwi25zfeC2ILP1LdfQj19ZATKxox0qNmXr30ItKMMH/atO/ZVWmoaO+v34vNV7XXiuc6Aw0gRTUc1eKDMYbHxvr1EIfOvNvtcCkM7RXD2xZiGXmFx7WbCuNG4P6KYFUNz+nmHt9f/+LzVg5+o3rK+X+JH6RdKfz4B/NhtGbpDwAA',
    },
})
Record({
    $id: Now.ID['e21e413d478b3a1051a3e84d416d43b2'],
    table: 'sys_hub_action_instance_v2',
    data: {
        action_type: 'c1806bf4a70323008299b39f087901cb',
        action_type_parent: '98c181d20b100300d97d8bf637673ab5',
        compiled_snapshot: 'c1806bf4a70323008299b39f087901cb',
        flow: '514c8979478b3a1051a3e84d416d4363',
        order: '6',
        ui_id: '15873d07-e896-4433-880e-9c156ea42313',
        values: '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',
    },
})
Record({
    $id: Now.ID['0d2055bd478b3a1051a3e84d416d4372'],
    table: 'sys_hub_action_instance_v2',
    data: {
        action_type: '43400a1587003300663ca1bb36cb0b4b',
        action_type_parent: 'd1c56ec50b30030085c083eb37673a50',
        compiled_snapshot: '43400a1587003300663ca1bb36cb0b4b',
        flow: 'c52055bd478b3a1051a3e84d416d4336',
        order: '3',
        parent_ui_id: '19fc25b7-61d9-48d6-a85e-65433d8ce20a',
        ui_id: '39a0ce8c-96cb-4730-93d6-4acd5b6908e4',
        values: 'H4sIAAAAAAAA/+VX0U7bMBT9lSrPUZXQUhhvjBYJCagEiD0wZjmx01q4TmY7LaXqv+86dtKsDayVWgm0R1/fa597fI7jPC08Rrwz7zTpBgEOj09PgqDTCYJerxPjMIo6vTgKom7k+Z7AEwqZGkecwnCKeW7GrwhzSgVSYpRjSRgWiBEqNNNzhLWmSmPNUgEVhKmM4/mjK7xyWa3zv7LiMeNEUuGdPT37XoYlbKup9M4Wa1Pb4uY4ohxSHxzwtT70PKuGqJizset6WevWTqSSGCiB79FXTQWhgCHBXFHfm2BBsE7lvIpIislQ8FVgzISGFT2T/KrYG+x7Gpi8hEJXMbVz1RA5wmw46WON77XMY51LlxqPUxZTZfkgNME51xf1mE0YZgW3RYlt21anPJ+IW0uHVy1Qng9EcgUgaGYaNchdG8n9OJ3dlSgvmSg4cZM8jTGvRiAAyaJcGzwLj3I6gYXQBGcZEyOUyXTKimLAMmmPOAzaCU9nsKliI9HGsQHeBl5x+xLi/SL8iCUzXdzAMlAMgBgHhSB7hCrNZUHlFMU8V8WExELZtbyl76m5uuBYqVXnQDn6nRvclgfXMbKkmZJYskyfwxJT6ppb+ltZ5zhYSS5OBWEGhar5R9IpozMAr17aIp9EVP7MYSGyWKg8MmS0NzOWy18u6BiKU0Jt2cPw++Bu8Hg1+DHob3rusJvt07oFb6V1L+rENZHpTLwRu25awJk43JuJoY+vZGPY/PO5eHdfWgr+Yc745EORHa/0pFKpkeWy5s5NC+2s8y0glDofGmW2ovl7qJzME0Y5afpWXZqJtW/V0f/5rfqUIgdABNnTY4IzUTw8AOih1B98fMV+W9NZIa+V9osYVvGmB3BLp623nZ2wBZzSCfewd+vB4mmAWN73hWTW7/oy6AzQ2ZsBOkf7McCiarMisoHz8q1pTrPMfzP5eD0fJFgrCJdNBttpz3DXPY+Wmwbu7OTgutjsTP8dze35UfqOI/1DXgFjKHX7IetfNGNkRPVq9zKLpHqG+UvTvFMcKg+qaO8AD9zuh7bthSuLglOQpAoOr/7CDeF5tHmHhL4N73aFbIGlpOMGv7buKjCNCN01Ak6no+Js6vfIVRV1Iu/u8cH4ab+k5WE1erA8sy/xX7g/Izz/Ad4FfhcmEQAA',
    },
})
Record({
    $id: Now.ID['112055bd478b3a1051a3e84d416d4377'],
    table: 'sys_hub_action_instance_v2',
    data: {
        action_type: 'c1806bf4a70323008299b39f087901cb',
        action_type_parent: '98c181d20b100300d97d8bf637673ab5',
        compiled_snapshot: 'c1806bf4a70323008299b39f087901cb',
        flow: 'c52055bd478b3a1051a3e84d416d4336',
        order: '6',
        ui_id: '15873d07-e896-4433-880e-9c156ea42313',
        values: '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',
    },
})
Record({
    $id: Now.ID['412055bd478b3a1051a3e84d416d4375'],
    table: 'sys_hub_action_instance_v2',
    data: {
        action_type: 'c1806bf4a70323008299b39f087901cb',
        action_type_parent: '98c181d20b100300d97d8bf637673ab5',
        compiled_snapshot: 'c1806bf4a70323008299b39f087901cb',
        flow: 'c52055bd478b3a1051a3e84d416d4336',
        order: '5',
        parent_ui_id: 'f54151c2-28fe-4651-9023-c9ad293d587b',
        ui_id: '0b91a2ae-01c4-4147-baed-cedd091da963',
        values: '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',
    },
})
Record({
    $id: Now.ID['2e1e413d478b3a1051a3e84d416d4394'],
    table: 'sys_hub_flow_logic_instance_v2',
    data: {
        block: '59c6291b4787f21051a3e84d416d4395',
        flow: '514c8979478b3a1051a3e84d416d4363',
        logic_definition: '098e1dc5c3e232002841b63b12d3ae33',
        order: '4',
        parent_ui_id: '19fc25b7-61d9-48d6-a85e-65433d8ce20a',
        ui_id: 'f54151c2-28fe-4651-9023-c9ad293d587b',
        values: 'H4sIAAAAAAAA/51STW/bMAz9Lzonhj8yL86twFCgh65AW/RSFAYt0YlQWVIlOaln+L+Xip1s6HEnm4/k43siR2b6YPvgn82N93Kv2e71bcWkjhj9j0xDh2zHZMDOsxU7gupjPI5FBSnHLV9XJW/Wm59Fuq4KUa43wMWPpqzSLW6SR+TGCT9N1CqktwqGl/9n4AephMNFpAVH2gI6thu/pcJgsVbQoKJBCwP1S0FhVom2ytKKF3lZ5GmabzdZUxZNlosCUJRUd+m8W0x/e4PITqG78tInqsjTFcPPgFogDWpBeVyxDrSAYNzAdsH1BDgE8aDVcK04SB2IjsXaTy//EHeWprGwRXLEcU5ew3p5yBnmByM5PtggjZ6RAI1aerhRfad/z/LjCrCFXoXLCgjpPfGhjZqjikVS+3Qwp8fLwFupz/6WpDIc1DWCEJxs+oA+rgEVdkRUd2Ct1PvaOnOU52bS0iV7RUHSKnOiofHcEuBReEJPBMkt4b/O8As4GV3cEw01T2f39Ucf584+FsX1bJoKPHfShhuiO+IibnqL9zoz+fkwBHLpaeBzxO4uVx4TAy1Z8n+hk3HvUepfbPoC3wd/Wy8DAAA=',
    },
})
Record({
    $id: Now.ID['621e413d478b3a1051a3e84d416d4392'],
    table: 'sys_hub_flow_logic_instance_v2',
    data: {
        block: '5dc6291b4787f21051a3e84d416d4392',
        flow: '514c8979478b3a1051a3e84d416d4363',
        flow_variables_assigned: 'expiration_period',
        logic_definition: '4f787d1e0f9b0010ecf0cc52ff767ea0',
        order: '2',
        parent_ui_id: '19fc25b7-61d9-48d6-a85e-65433d8ce20a',
        ui_id: 'e4c60101-5962-4c0f-b8e9-c33985f9262a',
        values: 'H4sIAAAAAAAA/+1WTU8bMRD9K9aeWgibDfkETkgtKlJbpIZyIWjlXc8mLl578UdCivLfO7MfAdGKay+cYj97Zt57nh3lKTLBV8G7a3PunFzq6PT2rhdJTRiunyLNS4hOI3ispOVeGp1WYKURUS9acxXoDJdCukrx7c0zkq+kEhbahBW3mMeDjU6fXh35bQWp4hkoDJx7K/USw6XA3fFkAKPBUIyms2zIB8l4wIcwG4nRYCJGw2mC97rAf/F7gzoVxSPXlTNWELekh7c9aAFYvuDKQS8quRbcG7vdIxa4uNLqGVhJ7RvVJX908jemniVJQjcLQKF568l+m7Z+dVYZmcNVRRQbxPNMdT4aFUr9vZFCTkPBg/IvnA4O80FFrIlGy6mYr8zmR1fwQupaYHuoTM7Vfsc92pAFD45eJ8jrV+Y0yNfXTwQKSqyYlryqEEkra9ayroKky3ipcBMXymyQHbVWzHNSGKObPL5A/FMN33ArSe43TIPBVO6nlg8BLqkFijGMi4mYHCV8PD0aJeL4aFYcZ0cns5PRtMimYsJFtKutTR8CiWpMau1IG0fxgsutrPw5UlijOG8DdBiJ/rtHEHwrJOofLPTBwXmeg3OM1PTPa3mM5LHg0BHmV8AKkdaIyX5B7mM2rxOwMjjPLPhgNeOs/pJiRhmvqBOZDmWGP9IxUxQOPMu27HDApGafrTWWfcGmVFRiDo2pNZk1l4qsZKbuJcfaNmOhQmKVRaoUs4jiRcR4gZ9jR4/C4ZGXlYJTZGOZWxnr8YFytghJMhTdxRhff7kEG+fBYmf5uL5IL1zrwqpnlKtVts9CYH+hW7jL5UJW90czbmILawmb1HN3367j+l22qfPcBxeX3OerD/3FQhz2lx9vk7uzaLfb3dEkanqoGVn17Hj7+38fXe+j6310vY+u/z+6BOTSYe1rUn/Z/e+igy0OAZm/hDbG3lPVZ2z3B0re9dfBCQAA',
    },
})
Record({
    $id: Now.ID['e61e413d478b3a1051a3e84d416d4390'],
    table: 'sys_hub_flow_logic_instance_v2',
    data: {
        block: 'd9c6291b4787f21051a3e84d416d4390',
        flow: '514c8979478b3a1051a3e84d416d4363',
        logic_definition: 'af4e1945c3e232002841b63b12d3ae3e',
        order: '1',
        ui_id: '19fc25b7-61d9-48d6-a85e-65433d8ce20a',
        values: 'H4sIAAAAAAAA/+1UyW7bMBD9FUFnQdASG41vQZsUBlqncIygRRsII2pkE6FIlaS81PC/d6jFMRoHXY+9iW+292YetPdVY+vGmoW6MoYvpT/5/BD4XDqMvve+hAr9ic+ULLjlSmYtEPhrEI0LzHHNceMtdjV63HgLDVxyufSutzXXO68LU37BTS1gd/+bZWzFRaGx51WDpukWtT/Z/xCy1CkTkKOg7ndWUzMq5wW9ygjK+JLFLE3GaRJFyauLOB+neZwUKSCklDcUvh5keu9aJHhRv5tHuBkmKV04WnEU+Li1KAuk0SUIg4FfgSzAKr07IhqhuJXiCVhxaamd75K3hn+j3slo5BJLJI0Mu+DxmfX77GC2Upzhbe0IdoiFXPQ1TImmkrNOh7sEltAIO1yCkMZQP6wdaceip1TerdRmPgy84bIV2AeFYiCOL7C0hryxaNxhUGBFjbIK6pqWk9VarXlbTFyqcCnoEZZCbWio81wIzBEPaUcQ3hD+poXvQXOn4j21oeKOZg6Gs6z1J7WzmiQc2rVkXxtHqBPYS8m6bVCCYZrX9ormrLFnfQiem/vE1/u9aXJHMtStFzML5rH/Dt3xD4cvTRSlxfXHD9P5p2wxv5rOprO3z63+F53+hfsvYVSO4mh03v0X43PuP+P7ly2f/MTy7ki/6Pgoiv5b/tTy3GSddXtt7fA/dvyDs3c3wXS+KZBxQ0QWDpsOf30X2JEBODuFNko/OglP2OE7/7yIrT8GAAA=',
    },
})
Record({
    $id: Now.ID['092055bd478b3a1051a3e84d416d4370'],
    table: 'sys_hub_flow_logic_instance_v2',
    data: {
        block: '5dc6291b4787f21051a3e84d416d4392',
        flow: 'c52055bd478b3a1051a3e84d416d4336',
        flow_variables_assigned: 'expiration_period',
        logic_definition: '4f787d1e0f9b0010ecf0cc52ff767ea0',
        order: '2',
        parent_ui_id: '19fc25b7-61d9-48d6-a85e-65433d8ce20a',
        ui_id: 'e4c60101-5962-4c0f-b8e9-c33985f9262a',
        values: 'H4sIAAAAAAAA/+1W207bQBD9ldU+tRAch4QkhCdEi1qpLVKhfWmQNfaOk23Xu+5eAinKv3fWdgIClR9onmKf3Zk558x4lAdugq+Ddzfm3Dm50Hz247bHpY4YPT9wKfiM8x7XUCE94X0tLXhpdFajlUbQ0QpUwPaWkK5WsP7+iBRLqYTFLnENlvJ4tHz28OyoKXQ8HuBoMBSjyTQfwiA9GcAQpyMxGozFaDhJKaGCHNU/mLxC0q/reOS8lXrRvX/qUl1vQWNFpJb2KIVHLZA4laAc9ngFWoA3dr1DLIK40uoRWErtW9EV3Dv5h+pN0zSNN0sknUVnye416+xq4fIdeCAqofDB7twzskDXOiSwhKD8xVOsvXBVR7FtiIdcbaONCpX+0prCdwmedCc4IoF1lBq5d0LK66W5+7pleSl140p3qEwBavcGnrzLg498HniQN89sbpEXRqPCiipmFdQ1IVltzUo2VYh0lSwUvSSlMnfELo5lAkVUmFALILkk/F0Dfwcro9zPlIaCY7lvWv4O+DEOU3mCJ+VYjI9SOJkcjVJxfDQtj/Oj0+npaFLmEzEGwTc97tbuQoFzj0ZRh7LfIcpsbesMylqPY0hhZe3PidSKQqhnuMWiDS/nj8DXQnj/YK4PDs4L6qtjUV//vBHMomAWHHnE/BJZKbIGMflPLHzCrpsErArOM4s0N5oBa77HhMWMV3GgmQ5VTj/SMVOWDj3L1+xwwKRm7601ln2g2VaxxDW2NjdkViBVNJeZZroc66aVhZqI1Zaoxpg5T+acQUkf9ZZeDMd7qGqFM2JjmVsa66llBZuHNB2K7cWE5mGxQJsUwdKs+aS5GHve6KKqZzFXp2yXJYL9ue7gbS4X8mZi2uWVWFxJvMs8uF/dc9L0ZZ05Dz64pAJfLN/053Nx2F+8/ZHenvHNZnMb91k7VfsFuF+A+wW4X4D/3QIUWEhHtW+i+o/b/4LxYE0LRhZPoTtjf8Wqj9jmL3h5Bn1VCgAA',
    },
})
Record({
    $id: Now.ID['492055bd478b3a1051a3e84d416d4371'],
    table: 'sys_hub_flow_logic_instance_v2',
    data: {
        block: '59c6291b4787f21051a3e84d416d4395',
        flow: 'c52055bd478b3a1051a3e84d416d4336',
        logic_definition: '098e1dc5c3e232002841b63b12d3ae33',
        order: '4',
        parent_ui_id: '19fc25b7-61d9-48d6-a85e-65433d8ce20a',
        ui_id: 'f54151c2-28fe-4651-9023-c9ad293d587b',
        values: 'H4sIAAAAAAAA/51TXW+jMBD8L34miI8cF/JWtapU6e4qpVVfThVa7CWxzticbZJyKP/91oHQqo99gh3vzs4MZmSm913v3bO5cU7uNdv+fo2Y1AGj95FpaJFtmfTYOhaxI6g+1OOYl5Bw3PBVWfB6tf6eJ6syF8VqDVx8q4sy2eA63iE3VrjzmUaFdJ2C4eXrDPwglbA4i+zAkjaPlm3HT0dS0IK0FE2ZJiXPsyLPkiTbrNO6yOs0EzmgKIhQQY2KWh9md5/M+qELpZ0kzMCPeWa3oPQIIrIkYvjmUQuk9Q0ohxFrQQvwxg5s621PgEUQj1oNS8dBak90LPS+OfmPNqZJEhobJEMcp8OlrOYcJ7i5Aw9PRM19b+dWfjCSo5uiENhAr/ztR2xqeOy8NHoa8VCr67RRfat/TUmwheD62QjpHYnALhgN0mcfzdPBnHZXlfdSX0KZD5XhoJYKvLey7n3QMzJU2BJR1ULXSb2vOmuO8jJMWtp4r6iIG2VOtDRc0Rh4EB5TrhDfE353gV/AyuDiJ9HQ8DlibnC3Cpx790IhVn/7oGRyNnuophjCCLey8ze04Iiz3PNruPUT95Ipl44kPAfs4fqvhIOBbpDkH6GTsX+C+Hfs/B/7R/9HdQMAAA==',
    },
})
Record({
    $id: Now.ID['c12055bd478b3a1051a3e84d416d436f'],
    table: 'sys_hub_flow_logic_instance_v2',
    data: {
        block: 'd9c6291b4787f21051a3e84d416d4390',
        flow: 'c52055bd478b3a1051a3e84d416d4336',
        logic_definition: 'af4e1945c3e232002841b63b12d3ae3e',
        order: '1',
        ui_id: '19fc25b7-61d9-48d6-a85e-65433d8ce20a',
        values: 'H4sIAAAAAAAA/+1VXW/aMBT9K5GfoyiBglbeEG0npI5OFFWbtiq6cRywauzMdvgY4r/3Ok4ArUwb6h73hs/9OufmHrEjqrJlZc1MDY3hc0kG355DwqXD8PeOSFgyMiBUyZxbrmRaAyFZgahcYMpWnK2D2bZkATfBTAOXXM6D203J9TbwYczPuSkFbJ8uLKMLLnLNGl4laJxumSaD3S8hnmPXIoYiuaYJ7Xb63U4cdz5cJVm/myWdvAsMuthQQMYEpo5aQcF9jYS/VWqRI+LGaiTYvO+bLo8tqHTuWCVxSNjGMpkz5FOAMCwkS5A5WKW3B0QzyB+kOAILLi22Iy55Y/hPHNjp9VxiwVAiZT54eKbNOj1c3IAFpFJRW+kmlS4Up8z45eSsgErY0SnmEx5KJ9WXWMhEW61EtZQTvxFyaNB+PUQqgyRY6ZQ66o2O4nGh1tOW5R2X9VaaoFAUxOEFFneXVdbx2REm2BIbpUsoS9xoWmq14nUxcllGc4GPqBBqjUPdnUZAHfEIFwvRHeI3NfwEmjsVn7ANFnuaGRhO0/qmsR2uiZF9SMzWjAQYcxSJ201/VI6il9yIS/1+XAnVvLRDnLxijY59+NYiJ+7Y7UyVOdqRri86tWBemt+RO6T9/nsVx9389svn8fRrOpsOx5Px5ONbw7yj02UeuoZe0Uvi3nkPXfXPeeiMey40TucPxnFf7S99E8fxf+O82zjcpP7cG2318H/om2dnEj/zsGvKDVKbOWzc/gO5wBaPi9NTaK30ixN1xPavRGmQucsGAAA=',
    },
})
Record({
    $id: Now.ID['c52055bd478b3a1051a3e84d416d4336'],
    table: 'sys_hub_flow_snapshot',
    data: {
        access: 'public',
        active: 'true',
        attributes:
            'browserActivatedIn=chrome,integrationActivatedIn=standalone,labelCacheCleanUpExecuted=true,viewActivatedIn=naturalLanguage',
        authored_on_release_version: '26000',
        callable_by_client_api: 'false',
        category: '{}',
        flow_priority: 'MEDIUM',
        internal_name: 'alert_access_review_subflow__notification_email',
        label_cache:
            '[{"name":"f54151c2-28fe-4651-9023-c9ad293d587b.item.valid_to","label":"4 - For Each➛Identity Attestation Record➛Valid To","reference":"","reference_display":"Valid To","type":"glide_date_time","base_type":"glide_date_time","parent_table_name":"x_aleen_snguardian_identity_attestation","column_name":"valid_to","usedInstances":{"0b91a2ae-01c4-4147-baed-cedd091da963":[null]}},{"name":"flow_variable.expiration_period","label":"Flow Variables➛expiration_period","type":"string","base_type":"string","usedInstances":{"0b91a2ae-01c4-4147-baed-cedd091da963":[null]},"attributes":{"sourceUiUniqueId":"","sourceType":"","sourceId":"","uiUniqueId":"f5e5f6d6-0a57-40d2-8f2b-98947fb7d6ad"}},{"name":"subflow.review_task.review.type","label":"Input➛review_task➛Review➛Type","reference":"","reference_display":"Type","type":"choice","base_type":"choice","parent_table_name":"x_aleen_snguardian_review","column_name":"type","choices":[{"image":"","label":"Area owner Access Review","used":false,"reference":false,"selected":false,"missing":false,"rawLabel":"Area owner Access Review","value":"AREAOWNER","parameters":{"name":"x_aleen_snguardian_review","dependent_values":[""]}},{"image":"","label":"Expiring Badge Review","used":false,"reference":false,"selected":false,"missing":false,"rawLabel":"Expiring Badge Review","value":"EXPIRY_BADGE","parameters":{"name":"x_aleen_snguardian_review","dependent_values":[""]}},{"image":"","label":"Manager Access Review","used":false,"reference":false,"selected":false,"missing":false,"rawLabel":"Manager Access Review","value":"MANAGER","parameters":{"name":"x_aleen_snguardian_review","dependent_values":[""]}},{"image":"","label":"Others","used":false,"reference":false,"selected":false,"missing":false,"rawLabel":"Others","value":"OTHERS","parameters":{"name":"x_aleen_snguardian_review","dependent_values":[""]}},{"image":"","label":"Training Expiry Review","used":false,"reference":false,"selected":false,"missing":false,"rawLabel":"Training Expiry Review","value":"EXPIRY_TRAINING","parameters":{"name":"x_aleen_snguardian_review","dependent_values":[""]}}],"usedInstances":{"19fc25b7-61d9-48d6-a85e-65433d8ce20a":["condition"],"15873d07-e896-4433-880e-9c156ea42313":[null]}},{"name":"subflow.review_task.number","label":"Input➛review_task➛Number","reference":"","reference_display":"Number","type":"string","base_type":"string","parent_table_name":"x_aleen_snguardian_review_task","column_name":"number","usedInstances":{"39a0ce8c-96cb-4730-93d6-4acd5b6908e4":["conditions"],"15873d07-e896-4433-880e-9c156ea42313":["ah_subject",null]}},{"name":"39a0ce8c-96cb-4730-93d6-4acd5b6908e4.Records","label":"3 - Look Up Records➛Identity Attestation Records","reference":"x_aleen_snguardian_identity_attestation","reference_display":"Identity Attestation","type":"records","base_type":"records","usedInstances":{"f54151c2-28fe-4651-9023-c9ad293d587b":["items"]},"attributes":{"element_mapping_provider":"com.glide.flow_design.action.data.FlowDesignVariableMapper"}},{"name":"f54151c2-28fe-4651-9023-c9ad293d587b.item.identity.email","label":"4 - For Each➛Identity Attestation Record➛Identity➛Email","reference":"","reference_display":"Email","type":"string","base_type":"string","parent_table_name":"x_aleen_snguardian_identity","column_name":"email","usedInstances":{"0b91a2ae-01c4-4147-baed-cedd091da963":["ah_to"]}},{"name":"f54151c2-28fe-4651-9023-c9ad293d587b.item.identity.full_name","label":"4 - For Each➛Identity Attestation Record➛Identity➛Full Name","reference":"","reference_display":"Full Name","type":"string","base_type":"string","parent_table_name":"x_aleen_snguardian_identity","column_name":"full_name","usedInstances":{"0b91a2ae-01c4-4147-baed-cedd091da963":["ah_subject",null]}},{"name":"f54151c2-28fe-4651-9023-c9ad293d587b.item.assertion.name","label":"4 - For Each➛Identity Attestation Record➛Assertion➛Name","reference":"","reference_display":"Name","type":"string","base_type":"string","parent_table_name":"x_aleen_snguardian_assertion","column_name":"name","usedInstances":{"0b91a2ae-01c4-4147-baed-cedd091da963":[null]}},{"name":"f54151c2-28fe-4651-9023-c9ad293d587b.item.valid_from","label":"4 - For Each➛Identity Attestation Record➛Valid From","reference":"","reference_display":"Valid From","type":"glide_date_time","base_type":"glide_date_time","parent_table_name":"x_aleen_snguardian_identity_attestation","column_name":"valid_from","usedInstances":{"0b91a2ae-01c4-4147-baed-cedd091da963":[null]}},{"name":"subflow.review_task.review.due_date","label":"Input➛review_task➛Review➛Due Date","reference":"","reference_display":"Due Date","type":"glide_date_time","base_type":"glide_date_time","parent_table_name":"x_aleen_snguardian_review","column_name":"due_date","usedInstances":{"15873d07-e896-4433-880e-9c156ea42313":[null]}},{"name":"subflow.review_task.total_records","label":"Input➛review_task➛Total Records","reference":"","reference_display":"Total Records","type":"integer","base_type":"integer","parent_table_name":"x_aleen_snguardian_review_task","column_name":"total_records","usedInstances":{"15873d07-e896-4433-880e-9c156ea42313":[null]}},{"name":"subflow.review_task.pending","label":"Input➛review_task➛Pending","reference":"","reference_display":"Pending","type":"integer","base_type":"integer","parent_table_name":"x_aleen_snguardian_review_task","column_name":"pending","usedInstances":{"15873d07-e896-4433-880e-9c156ea42313":[null]}},{"name":"subflow.review_task.errors","label":"Input➛review_task➛Errors","reference":"","reference_display":"Errors","type":"integer","base_type":"integer","parent_table_name":"x_aleen_snguardian_review_task","column_name":"errors","usedInstances":{"15873d07-e896-4433-880e-9c156ea42313":[null]}},{"name":"subflow.review_task.completed","label":"Input➛review_task➛Completed","reference":"","reference_display":"Completed","type":"integer","base_type":"integer","parent_table_name":"x_aleen_snguardian_review_task","column_name":"completed","usedInstances":{"15873d07-e896-4433-880e-9c156ea42313":[null]}}]',
        master: 'true',
        name: 'Alert Access Review Subflow :: Notification',
        parent_flow: '514c8979478b3a1051a3e84d416d4363',
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
    $id: Now.ID['13ef41bd478b3a1051a3e84d416d435b'],
    table: 'sys_hub_pill_compound',
    data: {
        attached_to: '514c8979478b3a1051a3e84d416d4363',
        order: '0',
        prescription: '{{subflow.review_task.review.type}}',
        transform_compositions: '[]',
        ui_id: '3729772f-5221-4589-b023-5994aa987688',
    },
})
Record({
    $id: Now.ID['17ef41bd478b3a1051a3e84d416d435a'],
    table: 'sys_hub_pill_compound',
    data: {
        attached_to: '514c8979478b3a1051a3e84d416d4363',
        order: '0',
        prescription: '{{f54151c2-28fe-4651-9023-c9ad293d587b.item.valid_to}}',
        transform_compositions: '[]',
        ui_id: '94441d88-5d23-40c3-be2c-b317d6d72421',
    },
})
Record({
    $id: Now.ID['1fef41bd478b3a1051a3e84d416d435b'],
    table: 'sys_hub_pill_compound',
    data: {
        attached_to: '514c8979478b3a1051a3e84d416d4363',
        order: '0',
        prescription: '{{subflow.review_task.errors}}',
        transform_compositions: '[]',
        ui_id: '77cd11bf-ef17-422c-b16d-913dde08bae8',
    },
})
Record({
    $id: Now.ID['53ef41bd478b3a1051a3e84d416d435a'],
    table: 'sys_hub_pill_compound',
    data: {
        attached_to: '514c8979478b3a1051a3e84d416d4363',
        order: '0',
        prescription: '{{f54151c2-28fe-4651-9023-c9ad293d587b.item.valid_from}}',
        transform_compositions: '[]',
        ui_id: '89b7a834-cca0-44f7-82fe-9dc41a1e1ab9',
    },
})
Record({
    $id: Now.ID['5bef41bd478b3a1051a3e84d416d435b'],
    table: 'sys_hub_pill_compound',
    data: {
        attached_to: '514c8979478b3a1051a3e84d416d4363',
        order: '0',
        prescription: '{{subflow.review_task.pending}}',
        transform_compositions: '[]',
        ui_id: 'd9b18653-b469-42e6-8e6b-6ad43ccb5716',
    },
})
Record({
    $id: Now.ID['5fef41bd478b3a1051a3e84d416d435a'],
    table: 'sys_hub_pill_compound',
    data: {
        attached_to: '514c8979478b3a1051a3e84d416d4363',
        order: '0',
        prescription: '{{subflow.review_task.number}}',
        transform_compositions: '[]',
        ui_id: '22533b23-b99c-424e-88b7-8f3191167a16',
    },
})
Record({
    $id: Now.ID['641fc17d478b3a1051a3e84d416d4345'],
    table: 'sys_hub_pill_compound',
    data: {
        attached_to: '514c8979478b3a1051a3e84d416d4363',
        order: '0',
        prescription: '{{flow_variable.expiration_period}}',
        transform_compositions: '[]',
        ui_id: 'cbac9bab-57ea-49a0-ba00-924215674ab9',
    },
})
Record({
    $id: Now.ID['6c1fc17d478b3a1051a3e84d416d4345'],
    table: 'sys_hub_pill_compound',
    data: {
        attached_to: '514c8979478b3a1051a3e84d416d4363',
        order: '0',
        prescription: '{{f54151c2-28fe-4651-9023-c9ad293d587b.item.valid_to}}',
        transform_compositions: '[]',
        ui_id: '65ea3088-79ca-4d2d-99b2-2c0a4dcbc835',
    },
})
Record({
    $id: Now.ID['97ef41bd478b3a1051a3e84d416d435b'],
    table: 'sys_hub_pill_compound',
    data: {
        attached_to: '514c8979478b3a1051a3e84d416d4363',
        order: '0',
        prescription: '{{subflow.review_task.total_records}}',
        transform_compositions: '[]',
        ui_id: '1b5dbd35-86ac-4168-94f1-7bcfa9634ae6',
    },
})
Record({
    $id: Now.ID['9bef41bd478b3a1051a3e84d416d435a'],
    table: 'sys_hub_pill_compound',
    data: {
        attached_to: '514c8979478b3a1051a3e84d416d4363',
        order: '0',
        prescription: '{{f54151c2-28fe-4651-9023-c9ad293d587b.item.valid_to}}',
        transform_compositions: '[]',
        ui_id: '668b0a6d-e7fc-4c63-94ea-7c851559d0c6',
    },
})
Record({
    $id: Now.ID['9fef41bd478b3a1051a3e84d416d4359'],
    table: 'sys_hub_pill_compound',
    data: {
        attached_to: '514c8979478b3a1051a3e84d416d4363',
        order: '0',
        prescription: '{{f54151c2-28fe-4651-9023-c9ad293d587b.item.identity.full_name}}',
        transform_compositions: '[]',
        ui_id: '31062171-d4d4-411b-b197-d76dd9cf14e6',
    },
})
Record({
    $id: Now.ID['d3ef41bd478b3a1051a3e84d416d435b'],
    table: 'sys_hub_pill_compound',
    data: {
        attached_to: '514c8979478b3a1051a3e84d416d4363',
        order: '0',
        prescription: '{{subflow.review_task.review.due_date}}',
        transform_compositions: '[]',
        ui_id: 'e29ff2d5-889f-4a7a-ba9a-641340d994e9',
    },
})
Record({
    $id: Now.ID['d7ef41bd478b3a1051a3e84d416d435a'],
    table: 'sys_hub_pill_compound',
    data: {
        attached_to: '514c8979478b3a1051a3e84d416d4363',
        order: '0',
        prescription: '{{f54151c2-28fe-4651-9023-c9ad293d587b.item.valid_to}}',
        transform_compositions: '[]',
        ui_id: 'dcf6674d-4d45-4983-8e24-b30298974ebf',
    },
})
Record({
    $id: Now.ID['dbef41bd478b3a1051a3e84d416d4359'],
    table: 'sys_hub_pill_compound',
    data: {
        attached_to: '514c8979478b3a1051a3e84d416d4363',
        order: '0',
        prescription: '{{f54151c2-28fe-4651-9023-c9ad293d587b.item.assertion.name}}',
        transform_compositions: '[]',
        ui_id: 'b795fafe-ff1f-46e1-abe5-5188774344f7',
    },
})
Record({
    $id: Now.ID['dfef41bd478b3a1051a3e84d416d435b'],
    table: 'sys_hub_pill_compound',
    data: {
        attached_to: '514c8979478b3a1051a3e84d416d4363',
        order: '0',
        prescription: '{{subflow.review_task.completed}}',
        transform_compositions: '[]',
        ui_id: '166e5861-6e29-4252-9e1a-647aaafea8ba',
    },
})
Record({
    $id: Now.ID['112055bd478b3a1051a3e84d416d4378'],
    table: 'sys_hub_pill_compound',
    data: {
        attached_to: 'c52055bd478b3a1051a3e84d416d4336',
        order: '0',
        prescription: '{{f54151c2-28fe-4651-9023-c9ad293d587b.item.valid_to}}',
        transform_compositions: '[]',
        ui_id: 'dcf6674d-4d45-4983-8e24-b30298974ebf',
    },
})
Record({
    $id: Now.ID['112055bd478b3a1051a3e84d416d4379'],
    table: 'sys_hub_pill_compound',
    data: {
        attached_to: 'c52055bd478b3a1051a3e84d416d4336',
        order: '0',
        prescription: '{{f54151c2-28fe-4651-9023-c9ad293d587b.item.assertion.name}}',
        transform_compositions: '[]',
        ui_id: 'b795fafe-ff1f-46e1-abe5-5188774344f7',
    },
})
Record({
    $id: Now.ID['152055bd478b3a1051a3e84d416d4378'],
    table: 'sys_hub_pill_compound',
    data: {
        attached_to: 'c52055bd478b3a1051a3e84d416d4336',
        order: '0',
        prescription: '{{f54151c2-28fe-4651-9023-c9ad293d587b.item.identity.full_name}}',
        transform_compositions: '[]',
        ui_id: '31062171-d4d4-411b-b197-d76dd9cf14e6',
    },
})
Record({
    $id: Now.ID['152055bd478b3a1051a3e84d416d4379'],
    table: 'sys_hub_pill_compound',
    data: {
        attached_to: 'c52055bd478b3a1051a3e84d416d4336',
        order: '0',
        prescription: '{{f54151c2-28fe-4651-9023-c9ad293d587b.item.valid_to}}',
        transform_compositions: '[]',
        ui_id: '94441d88-5d23-40c3-be2c-b317d6d72421',
    },
})
Record({
    $id: Now.ID['192055bd478b3a1051a3e84d416d4377'],
    table: 'sys_hub_pill_compound',
    data: {
        attached_to: 'c52055bd478b3a1051a3e84d416d4336',
        order: '0',
        prescription: '{{f54151c2-28fe-4651-9023-c9ad293d587b.item.valid_from}}',
        transform_compositions: '[]',
        ui_id: '89b7a834-cca0-44f7-82fe-9dc41a1e1ab9',
    },
})
Record({
    $id: Now.ID['192055bd478b3a1051a3e84d416d4378'],
    table: 'sys_hub_pill_compound',
    data: {
        attached_to: 'c52055bd478b3a1051a3e84d416d4336',
        order: '0',
        prescription: '{{subflow.review_task.total_records}}',
        transform_compositions: '[]',
        ui_id: '1b5dbd35-86ac-4168-94f1-7bcfa9634ae6',
    },
})
Record({
    $id: Now.ID['1d2055bd478b3a1051a3e84d416d4377'],
    table: 'sys_hub_pill_compound',
    data: {
        attached_to: 'c52055bd478b3a1051a3e84d416d4336',
        order: '0',
        prescription: '{{subflow.review_task.pending}}',
        transform_compositions: '[]',
        ui_id: 'd9b18653-b469-42e6-8e6b-6ad43ccb5716',
    },
})
Record({
    $id: Now.ID['1d2055bd478b3a1051a3e84d416d4378'],
    table: 'sys_hub_pill_compound',
    data: {
        attached_to: 'c52055bd478b3a1051a3e84d416d4336',
        order: '0',
        prescription: '{{subflow.review_task.errors}}',
        transform_compositions: '[]',
        ui_id: '77cd11bf-ef17-422c-b16d-913dde08bae8',
    },
})
Record({
    $id: Now.ID['912055bd478b3a1051a3e84d416d4378'],
    table: 'sys_hub_pill_compound',
    data: {
        attached_to: 'c52055bd478b3a1051a3e84d416d4336',
        order: '0',
        prescription: '{{subflow.review_task.review.type}}',
        transform_compositions: '[]',
        ui_id: '3729772f-5221-4589-b023-5994aa987688',
    },
})
Record({
    $id: Now.ID['912055bd478b3a1051a3e84d416d4379'],
    table: 'sys_hub_pill_compound',
    data: {
        attached_to: 'c52055bd478b3a1051a3e84d416d4336',
        order: '0',
        prescription: '{{f54151c2-28fe-4651-9023-c9ad293d587b.item.valid_to}}',
        transform_compositions: '[]',
        ui_id: '65ea3088-79ca-4d2d-99b2-2c0a4dcbc835',
    },
})
Record({
    $id: Now.ID['952055bd478b3a1051a3e84d416d4378'],
    table: 'sys_hub_pill_compound',
    data: {
        attached_to: 'c52055bd478b3a1051a3e84d416d4336',
        order: '0',
        prescription: '{{subflow.review_task.review.due_date}}',
        transform_compositions: '[]',
        ui_id: 'e29ff2d5-889f-4a7a-ba9a-641340d994e9',
    },
})
Record({
    $id: Now.ID['992055bd478b3a1051a3e84d416d4377'],
    table: 'sys_hub_pill_compound',
    data: {
        attached_to: 'c52055bd478b3a1051a3e84d416d4336',
        order: '0',
        prescription: '{{subflow.review_task.completed}}',
        transform_compositions: '[]',
        ui_id: '166e5861-6e29-4252-9e1a-647aaafea8ba',
    },
})
Record({
    $id: Now.ID['992055bd478b3a1051a3e84d416d4378'],
    table: 'sys_hub_pill_compound',
    data: {
        attached_to: 'c52055bd478b3a1051a3e84d416d4336',
        order: '0',
        prescription: '{{f54151c2-28fe-4651-9023-c9ad293d587b.item.valid_to}}',
        transform_compositions: '[]',
        ui_id: '668b0a6d-e7fc-4c63-94ea-7c851559d0c6',
    },
})
Record({
    $id: Now.ID['9d2055bd478b3a1051a3e84d416d4377'],
    table: 'sys_hub_pill_compound',
    data: {
        attached_to: 'c52055bd478b3a1051a3e84d416d4336',
        order: '0',
        prescription: '{{subflow.review_task.number}}',
        transform_compositions: '[]',
        ui_id: '22533b23-b99c-424e-88b7-8f3191167a16',
    },
})
Record({
    $id: Now.ID['9d2055bd478b3a1051a3e84d416d4378'],
    table: 'sys_hub_pill_compound',
    data: {
        attached_to: 'c52055bd478b3a1051a3e84d416d4336',
        order: '0',
        prescription: '{{flow_variable.expiration_period}}',
        transform_compositions: '[]',
        ui_id: 'cbac9bab-57ea-49a0-ba00-924215674ab9',
    },
})
Record({
    $id: Now.ID['512055bd478b3a1051a3e84d416d438c'],
    table: 'sys_flow_subflow_plan',
    data: {
        plan: 'com.snc.process_flow.engine.ProcessPlan@570f798d',
        plan_id: '514c8979478b3a1051a3e84d416d4363',
        snapshot: 'c52055bd478b3a1051a3e84d416d4336',
        sys_domain: 'global',
        sys_domain_path: '/',
    },
})
Record({
    $id: Now.ID['261e413d478b3a1051a3e84d416d4370'],
    table: 'sys_hub_flow_variable',
    data: {
        active: 'true',
        array: 'false',
        array_denormalized: 'false',
        attributes:
            'element_mapping_provider=com.glide.flow_design.action.data.FlowDesignVariableMapper,uiType=string,uiTypeLabel=String,uiUniqueId=f5e5f6d6-0a57-40d2-8f2b-98947fb7d6ad',
        audit: 'false',
        calculation: `(function calculatedFieldValue(current) {

	// Add your code here
	return '';  // return the calculated value

})(current);`,
        display: 'false',
        dynamic_creation: 'false',
        element: 'expiration_period',
        element_reference: 'false',
        function_field: 'false',
        internal_type: 'string',
        label: 'expiration_period',
        mandatory: 'false',
        max_length: '8000',
        model: '514c8979478b3a1051a3e84d416d4363',
        model_id: '514c8979478b3a1051a3e84d416d4363',
        model_table: 'sys_hub_flow',
        name: 'var__m_sys_hub_flow_variable_514c8979478b3a1051a3e84d416d4363',
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
    $id: Now.ID['412055bd478b3a1051a3e84d416d4369'],
    table: 'sys_hub_flow_variable',
    data: {
        active: 'true',
        array: 'false',
        array_denormalized: 'false',
        attributes:
            'element_mapping_provider=com.glide.flow_design.action.data.FlowDesignVariableMapper,uiType=string,uiTypeLabel=String,uiUniqueId=f5e5f6d6-0a57-40d2-8f2b-98947fb7d6ad',
        audit: 'false',
        calculation: `(function calculatedFieldValue(current) {

	// Add your code here
	return '';  // return the calculated value

})(current);`,
        display: 'false',
        dynamic_creation: 'false',
        element: 'expiration_period',
        element_reference: 'false',
        function_field: 'false',
        internal_type: 'string',
        label: 'expiration_period',
        mandatory: 'false',
        max_length: '8000',
        model: 'c52055bd478b3a1051a3e84d416d4336',
        model_id: 'c52055bd478b3a1051a3e84d416d4336',
        model_table: 'sys_hub_flow_snapshot',
        name: 'var__m_sys_hub_flow_variable_c52055bd478b3a1051a3e84d416d4336',
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
