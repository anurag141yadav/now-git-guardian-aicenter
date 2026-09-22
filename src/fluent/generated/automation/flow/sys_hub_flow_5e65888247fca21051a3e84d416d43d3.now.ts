import { Record } from '@servicenow/sdk/core'

Record({
    $id: Now.ID['5e65888247fca21051a3e84d416d43d3'],
    table: 'sys_hub_flow',
    data: {
        access: 'public',
        acls: '',
        active: true,
        attributes:
            'browserActivatedIn=chrome,integrationActivatedIn=standalone,labelCacheCleanUpExecuted=true,timeFromCreateToActivate=27208425000,viewActivatedIn=naturalLanguage',
        authored_on_release_version: 25000,
        callable_by_client_api: false,
        category: '{}',
        flow_priority: 'MEDIUM',
        internal_name: 'subflow_identity_manager_approval',
        label_cache:
            '[{"name":"bc8297f4-98c8-435b-a53b-7b4666c62132.approval_state","label":"4 - Ask For Approval➛Approval State","reference_display":"Approval State","type":"choice","base_type":"choice","choices":[{"label":"-- None --","value":"","order":0.0},{"label":"Not Yet Requested","value":"not requested","order":1.0},{"label":"Requested","value":"requested","order":2.0},{"label":"Approved","value":"approved","order":3.0},{"label":"Rejected","value":"rejected","order":4.0},{"label":"Cancelled","value":"cancelled","order":5.0},{"label":"No Longer Required","value":"not_required","order":6.0},{"label":"Skipped","value":"skipped","order":7.0}],"usedInstances":{"0f5e1b49-d578-480b-9397-c43934e7be80":["condition"]},"attributes":{"element_mapping_provider":"com.glide.flow_design.action.data.FlowDesignVariableMapper"}},{"name":"e551864f-9a56-4c4e-ab04-51add5bf61f4.__status__.message","label":"17 - Top Level Catch➛Error Status➛Message","reference":"","reference_display":"","type":"string","base_type":"string","column_name":"","usedInstances":{"f4be4885-a7c4-4a6c-9aea-54689c482c04":["work_notes"]},"attributes":{}},{"name":"e551864f-9a56-4c4e-ab04-51add5bf61f4.__status__.code","label":"17 - Top Level Catch➛Error Status➛Code","reference":"","reference_display":"","type":"integer","base_type":"integer","column_name":"","usedInstances":{"f4be4885-a7c4-4a6c-9aea-54689c482c04":["work_notes"]},"attributes":{}},{"name":"subflow.request.request_for.full_name","label":"Input➛Request➛Request For➛Full Name","reference":"","reference_display":"Full Name","type":"string","base_type":"string","parent_table_name":"x_aleen_snguardian_identity","column_name":"full_name","usedInstances":{"c4b580eb-cde7-49ca-812e-8b142908b53b":["work_notes"]}},{"name":"flow_variable.manager.last_name","label":"Flow Variables➛Manager➛Last name","reference":"","reference_display":"Last name","type":"string","base_type":"string","parent_table_name":"sys_user","column_name":"last_name","usedInstances":{"23aafed8-aeab-4a3f-9cab-a70a9dd56fc9":["work_notes"],"a5e796eb-dad0-47a6-af0f-d07bcf678274":["work_notes"]}},{"name":"flow_variable.manager.first_name","label":"Flow Variables➛Manager➛First name","reference":"","reference_display":"First name","type":"string","base_type":"string","parent_table_name":"sys_user","column_name":"first_name","usedInstances":{"23aafed8-aeab-4a3f-9cab-a70a9dd56fc9":["work_notes"],"a5e796eb-dad0-47a6-af0f-d07bcf678274":["work_notes"]}},{"name":"subflow.request.task_effective_number","label":"Input➛Request➛Effective number","reference":"","reference_display":"Effective number","type":"string","base_type":"string","parent_table_name":"x_aleen_snguardian_request","column_name":"task_effective_number","usedInstances":{"23aafed8-aeab-4a3f-9cab-a70a9dd56fc9":["work_notes"]}},{"name":"subflow.request.approval","label":"Input➛Request➛Approval","reference":"","reference_display":"Approval","type":"choice","base_type":"choice","parent_table_name":"x_aleen_snguardian_request","column_name":"approval","choices":[{"image":"","label":"Not Yet Requested","used":false,"reference":false,"selected":false,"missing":false,"rawLabel":"Not Yet Requested","value":"not requested","parameters":{"name":"task","dependent_values":[""]}},{"image":"","label":"Requested","used":false,"reference":false,"selected":false,"missing":false,"rawLabel":"Requested","value":"requested","parameters":{"name":"task","dependent_values":[""]}},{"image":"","label":"Approved","used":false,"reference":false,"selected":false,"missing":false,"rawLabel":"Approved","value":"approved","parameters":{"name":"task","dependent_values":[""]}},{"image":"","label":"Rejected","used":false,"reference":false,"selected":false,"missing":false,"rawLabel":"Rejected","value":"rejected","parameters":{"name":"task","dependent_values":[""]}}],"usedInstances":{}},{"name":"flow_variable.manager.user_name","label":"Flow Variables➛Manager➛User ID","reference":"","reference_display":"User ID","type":"string","base_type":"string","parent_table_name":"sys_user","column_name":"user_name","usedInstances":{"c489bcb1-3f47-438c-92a1-82504c97e88b":["work_notes"]}},{"name":"subflow.request.number","label":"Input➛Request➛Number","reference":"","reference_display":"Number","type":"string","base_type":"string","parent_table_name":"x_aleen_snguardian_request","column_name":"number","usedInstances":{"c489bcb1-3f47-438c-92a1-82504c97e88b":["work_notes"],"23aafed8-aeab-4a3f-9cab-a70a9dd56fc9":["work_notes"],"a5e796eb-dad0-47a6-af0f-d07bcf678274":["work_notes"],"c4b580eb-cde7-49ca-812e-8b142908b53b":["work_notes"]}},{"name":"subflow.request","label":"Input➛Request","reference":"x_aleen_snguardian_request","reference_display":"Request","type":"reference","base_type":"reference","column_name":"","usedInstances":{"c489bcb1-3f47-438c-92a1-82504c97e88b":["record"],"bc8297f4-98c8-435b-a53b-7b4666c62132":["record"],"23aafed8-aeab-4a3f-9cab-a70a9dd56fc9":["record","work_notes"],"a5e796eb-dad0-47a6-af0f-d07bcf678274":["record"],"c4b580eb-cde7-49ca-812e-8b142908b53b":["record","work_notes"],"f4be4885-a7c4-4a6c-9aea-54689c482c04":["record"]},"attributes":{"uiType":"reference","uiTypeLabel":"Reference","element_mapping_provider":"com.glide.flow_design.action.data.FlowDesignVariableMapper","uiUniqueId":"1046d325-5948-4369-b125-b1035a8963f0","sourceUiUniqueId":"","sourceType":"","sourceId":""}},{"name":"flow_variable.manager","label":"Flow Variables➛Manager","reference":"sys_user","reference_display":"User","type":"reference","base_type":"reference","usedInstances":{"69a90f82-d979-438c-8d97-1f939020a772":["condition"],"c489bcb1-3f47-438c-92a1-82504c97e88b":["assigned_to"],"bc8297f4-98c8-435b-a53b-7b4666c62132":["approval_conditions"]},"attributes":{"sourceUiUniqueId":"","sourceType":"","sourceId":"","uiUniqueId":"25048cf8-8e20-4b63-8c1d-e2fa134d5038"}}]',
        master_snapshot: '93ca408a47fca21051a3e84d416d43b5',
        name: 'Alert Subflow Identity Manager Approval',
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
        latest_snapshot: '93ca408a47fca21051a3e84d416d43b5',
        compiler_build: 'glide-washingtondc-12-20-2023__patch10-hotfix2-03-11-2025_03-12-2025_0251.zip',
    },
})
Record({
    $id: Now.ID['9a65888247fca21051a3e84d416d43d4'],
    table: 'sys_flow_cat_variable_model',
    data: {
        id: '5e65888247fca21051a3e84d416d43d3',
        name: 'Subflow Identity Manager Approval',
    },
})
Record({
    $id: Now.ID['93ca408a47fca21051a3e84d416d43b6'],
    table: 'sys_flow_cat_variable_model',
    data: {
        id: '93ca408a47fca21051a3e84d416d43b5',
        name: 'Subflow Identity Manager Approval',
    },
})
Record({
    $id: Now.ID['17c54c8247fca21051a3e84d416d43d8'],
    table: 'sys_hub_flow_input',
    data: {
        active: 'true',
        array: 'false',
        array_denormalized: 'false',
        attributes:
            'element_mapping_provider=com.glide.flow_design.action.data.FlowDesignVariableMapper,uiType=reference,uiTypeLabel=Reference,uiUniqueId=1046d325-5948-4369-b125-b1035a8963f0',
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
        label: 'Request',
        mandatory: 'true',
        max_length: '32',
        model: '5e65888247fca21051a3e84d416d43d3',
        model_id: '5e65888247fca21051a3e84d416d43d3',
        model_table: 'sys_hub_flow',
        name: 'var__m_sys_hub_flow_input_5e65888247fca21051a3e84d416d43d3',
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
    $id: Now.ID['d7ca408a47fca21051a3e84d416d43b7'],
    table: 'sys_hub_flow_input',
    data: {
        active: 'true',
        array: 'false',
        array_denormalized: 'false',
        attributes:
            'element_mapping_provider=com.glide.flow_design.action.data.FlowDesignVariableMapper,uiType=reference,uiTypeLabel=Reference,uiUniqueId=1046d325-5948-4369-b125-b1035a8963f0',
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
        label: 'Request',
        mandatory: 'true',
        max_length: '32',
        model: '93ca408a47fca21051a3e84d416d43b5',
        model_id: '93ca408a47fca21051a3e84d416d43b5',
        model_table: 'sys_hub_flow_snapshot',
        name: 'var__m_sys_hub_flow_input_93ca408a47fca21051a3e84d416d43b5',
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
    $id: Now.ID['03c3b7a147073a1051a3e84d416d431e'],
    table: 'sys_hub_action_instance_v2',
    data: {
        action_type: 'f9d01dd2c31332002841b63b12d3aea1',
        action_type_parent: 'baf174c8c3c232002841b63b12d3aee4',
        flow: '5e65888247fca21051a3e84d416d43d3',
        order: '7',
        parent_ui_id: '0f5e1b49-d578-480b-9397-c43934e7be80',
        ui_id: '23aafed8-aeab-4a3f-9cab-a70a9dd56fc9',
        values: 'H4sIAAAAAAAA/+1W207jMBD9lSjPVZQ0CYS+rYSQeFhAgHihEE3saWut4wTbKXSr/vuOcym3BbEsaLUSvKAZz+XMmWM3l2sfmBWVOlTGgmJ4tjKH3J/4WcogYwkkuzMG4yhMI4gxS3gS7fAkZqk/8oWLS5CH0V60w+IojsdhOM6SqNiJi2jMY0CMKE5BiRSpkVWak70E2TjHem2aYiar20DjTYPGbjZ0yoWpJawu+iDysIWQXKPyJ5dXI78GTfUsan+yfnJkVzXmEgqUlLhfsaZEZb3D/T/AOmSfDmCfgnc9yOZ99Vw4Jx05PFE48vHOouJI7WYgDY78EhQHW+mVP7G6IYdG4MdKrrYRC6FsN2kJd0b8pPpJ6OJmSKOxnoWtmfcMDeRUguFx7XbYeSwUcmCukk2pjroRHLc4g0baB9w2huph7SA7EB3C2dmiuj0d+h0I1U7Xo5UVA7m1wFotisaicetAiS0pJdS1UPO81tVStMkEpQzmkozAbZx6GjFXQae9gAiC4ID8+637ArRwQ3ynMpS8aYfPbxrXtxujB5y3M7cD5+2iKNQwLWr7jQovsYe5Gf2tyov0NeWwvXuhPABzr/S7HCSiyo2aN6C5AJX3kn8u+NPtwft0f+4AeEcdgLeCf5T8wjC98h/5euGnHyb87B8Jv0f0nyn/0/Qejl99KR9IpJW4eaB1amgbM23CMObr6aDuqT+Z+ieOFEOwiCHvhAah/1N/NO1y25Asy2YZ8jQqCpYRwN10L0nTOBlDUrBid68NNytD7+4b4zfXYBy1yHNbdbCuiV2CArIzOwv59W2lf+SqopV2B+cL9Prr6D37sQpUUxaoNxtvAcYr6Hp7QyGvWHmkfpijprx268t+sUHvD2ZCG9teI6rwUpCEbUzw/KX4YvrTmH7n04slbcCi123o7XdpKHAgUHLzm8s1vL19g3zZN9h+eHzYAxzthO3f1/fHB35/XP0C5RXLk2cLAAA=',
    },
})
Record({
    $id: Now.ID['32c377a147073a1051a3e84d416d43fc'],
    table: 'sys_hub_action_instance_v2',
    data: {
        action_type: 'f9d01dd2c31332002841b63b12d3aea1',
        action_type_parent: 'baf174c8c3c232002841b63b12d3aee4',
        flow: '5e65888247fca21051a3e84d416d43d3',
        order: '3',
        parent_ui_id: '69a90f82-d979-438c-8d97-1f939020a772',
        ui_id: 'c489bcb1-3f47-438c-92a1-82504c97e88b',
        values: 'H4sIAAAAAAAA/+1WTU/jMBD9K1HOVZQ0aUl7Q0JIHBYkQFwoRBN72lrrOMF2WrpV/vvaiVPKp1gWtFqJ3jwez7z35tnN9dYHolkpToTSIAhebNQJ9ad+OiGQkgSSgzmBYRSOIogxTWgSjWkSA/EHPrN5CdIwmkRjEkdxPAzDYZpE+TjOoyGNATEyeQIKNJkSSSmpWa+A1zaw3ao6n/NyHUi8q1HppjG7lKmKw+bKJZkIWTJOJQp/en0z8CuQpp5G6U+3T7b0psKMQ47cHDwqSV2g0N7J0R9g7U+f92Cfgrc9zJq66hmzQbNl8UThwMd7jYKiaTcHrnDgFyAo6FJu/KmWtQlIBHom+GaXsWRCd0wLuFfsl6mfhDZvjoYacSrslplTqBenZATPKjvDLqIh571yJa8LcdpRsNriHGqu97StlamHlYVsQXQI5xfLcn3e9ztmomXn0PKSAN+tQGvJ8lqjsuNAjq0oBVQVE4uskuWKtYcNlCJYcLMI7MRNT8UWIui8FxiBIDg28aM2fAWSWRI/TBlzuGnJZ3e17dvRcICzlnNLOGsHZVIVkazSh6bwCh3MZvC3Ls9HbzmHTB6Msgfmwen3GXBEkSmxqEFSBiJzln9u+PPdxsd8f2kBeKcdgPeCf3T4FTLO+Y9izvijTzN++o+M7xD9Z87/Mr+Hwzdfyj2LtBZXe14HZYkgzXQ5q8Mwpttty3vlqAXGF7BA2TS361L+zERpJOwyL5foOft7z/4cAlEXuT3mLUF5ublOXt/K06XnqnqvdAvMvGXr2qYJbo0oGruew3ZROwTbWX8dZ/505h+ugWkzTu+wsgMFPvMHs45pu0/CdJ4iHUV5TlIj58FokoxGcTKEJCf5waRNVxtl/iXemd/cQt+qBeTII33+UHwL/VVCf/DhxcLw0eh1A3r/TeoLHDPkVL1wtfqX1zXIVq7B7rPj057faBy2v++vj8/7+uiDFuLenbXLl7NhhXQnUtM0N78BU6Gz6aULAAA=',
    },
})
Record({
    $id: Now.ID['3ec377a147073a1051a3e84d416d43fd'],
    table: 'sys_hub_action_instance_v2',
    data: {
        action_type: 'f8f2e9920b10030085c083eb37673abd',
        action_type_parent: 'bae0a1120b10030085c083eb37673a92',
        flow: '5e65888247fca21051a3e84d416d43d3',
        order: '4',
        parent_ui_id: '69a90f82-d979-438c-8d97-1f939020a772',
        ui_id: 'bc8297f4-98c8-435b-a53b-7b4666c62132',
        values: 'H4sIAAAAAAAA/+2XUW/aMBDHv0qVZ8QCgUJ5q4SQOmmrRLu9lCoyzgU8GSe1HVoW8d13TpwQoM0oY6o28ejzne9/l985yUPqEKpZJG6E0kRQuFupm8AZOG6Xkj7tkE4vpKTdcrst4kG/E3Ral0HHm3adhsOMX68ftuHqqu1OW67ruW6/S92+B1Ovd9nzCHXRT5AFoKcEGskA10vCE2NIU5VMQx49NyU8JaD0eo27AVMxJ6vv1gktdM54IEE4g4fHhhMTiedpkM4g3dnSqxh8TqbAMXAY0WQBQl/cDN+htYgeF2J3xZscuA7s6T4zRtwyetyGAy8aRACYLSRcQcNZEBEQHcmVM9AyQYMEEtwKvio95kzovNAFeVHsJx7vtY1fCFgZtU0ol75tUNGbiFG4jc0jzC2aTHnRuIgnC/E1r8C0FkKScF1pbaLwPIiNZCMiVxjezaPncZFvxERWnFXLI0p4uSJaSzZNNCjzNIBD1pMFiWMmZn4soyXLglHKojnjuGiaB445FZuJZo5eExtEmiO0DzPzdyKZKeILHoPB66x4/ykxefMyrGA/qzkvGL0UlSzW13jmEqzCdeNP+Z7SWmboBpFcxwbvF59wAOErMUuIDBgRvuV8n/JxuXEc7Pcm90X2pA/XvRW8X4clPVv6Ij/agt6qB91aDiG9734M6VbRP4b6X6PcbdXREvQ3dKBQLJVwP2TAq7d5sbEPd2XnOLpHJtUW3QfoLYKvbfaLkRX8ViGW92y5w3v7hLy7H0T8+W7fo57WUgTeBpYfUSJFDfT+nKmMhTfhr3icaggOkF8Ef871787Ablk1I+CdR+B/HIFOt5YheOW+pJEImMmpKoOQ37KgrsXq20OaZl1Y2kKbyAmZgVyvH/fn4/DA48amvP7HCQf1jrLLPwEbV9sGOzjlprRBdng6p/ox+LjZOX8wbb86agEKrzbABAn2kejqn0E6sdknzmDiiEjAxGlMHOPlG5IyM3pgVeVGZkvT9Tq3JJLYA1qV5SY6ICuVeSo6hwBpzKxblnxErP2Uf953NsHFEHV/umeVN9bvu1b+vid5/KuNtONWVpJ3jlXfV92Tva8654mrTBzKZH75RY+vJ7y7jh7Dx1/Ycrw8fxIAAA==',
    },
})
Record({
    $id: Now.ID['4fc3b7a147073a1051a3e84d416d4327'],
    table: 'sys_hub_action_instance_v2',
    data: {
        action_type: 'f9d01dd2c31332002841b63b12d3aea1',
        action_type_parent: 'baf174c8c3c232002841b63b12d3aee4',
        flow: '5e65888247fca21051a3e84d416d43d3',
        order: '11',
        parent_ui_id: '7fbb2e1d-e754-4aa4-b62b-928440d2157e',
        ui_id: 'a5e796eb-dad0-47a6-af0f-d07bcf678274',
        values: 'H4sIAAAAAAAA/+1WUU/bMBD+K1Geqyhp0lL6Ngkh8TCQAPFCIbrYl9ab4wTbKXRV//suiVMKDMRYp2kSfbvzd3ff3X12c732gVlRqhNlLCiGFytzwv2pPzlkMGEJJAc5g2EUjiKIcZLwJBrzJOaJP/BFg0uQh9FhNGZxFMfDMBxOkigbx1k05DEgRoRTUCAhNbJSc7KXIOvGsV6bOstleR9ovKvR2M2GTrkwlYTVlQORhy2E5BqVP72+GfgVaMpnUfvT9bMju6owlZChpMCjktUFKuudHP0G1z76vCf7nHxTg2zusqeicdJRwycKBz4+WFQcqVwO0uDAL0BxsKVe+VOra3JoBH6m5GqLWAhlu04LeDDiB+VPwgaXI7XG3BS2Zuom1A+nFAzPqmaHncdCJvvJlbIu1GnXQjNbzKGWdme2taF8WDWUGxIdw/xiUd6f9/WOhWq7c2xlyUBuLbBWi6y2aJp1oMR2KAVUlVDztNLlUrTBRKUI5pKMoNk41TRiroJOewENCIJj8h+17ivQomniK6Wh4E3bfHpXN3W7NhzhtO25bThtF0VQw7So7BdKvERHczP4U5Vno7eUww4fhbJD5lHpDylIRJUaNa9BcwEqdZJ/Kfjz7cHHdH/ZEPBOOwLvJf8k+JVmnPKf+JzwR3sT/uQfCd8x+s+U/9f0Hg7ffCl3JNJK3OxonQra2szqMIz5etare+ZPZyTtb8gs8pk/mHX41p2Ek3yCfBRlGZsQqYPRYTIaxckQkoxlB9DCzcrQW/tO/Oa2YYEdieSWhknrANnZ2rG4vS/191SVtMHu4HKBnrt93ov/pkDVRYZ6s/EWYLyMbrPXJ/KylUdihzlqimuXvHR7DJw/yIU2tr01lOE1kIQtJnj5MHwOdl+D/eDDigUN3KLXLeT9N6VPcCxQcvOLq9O/rK5AunQFtp8Ve3teo3HY/j6/Lvb4dXHzE8PcbjpFCwAA',
    },
})
Record({
    $id: Now.ID['c7c3b7a147073a1051a3e84d416d4360'],
    table: 'sys_hub_action_instance_v2',
    data: {
        action_type: 'f9d01dd2c31332002841b63b12d3aea1',
        action_type_parent: 'baf174c8c3c232002841b63b12d3aee4',
        flow: '5e65888247fca21051a3e84d416d43d3',
        order: '19',
        parent_ui_id: 'e551864f-9a56-4c4e-ab04-51add5bf61f4',
        ui_id: 'f4be4885-a7c4-4a6c-9aea-54689c482c04',
        values: 'H4sIAAAAAAAA/+1WUW/TMBD+K1Ge2yhpnK7tG9KYtAc2NBAvdIsu9qW1cJxgO9tK1f/OOUm7wWAaYwghkbc7n+++u+/LyR+3IXAna32qrQPN8d3GnopwEc7nHGacATsqOUySOEsgxRkTLJkKlpZlOAqlj2Mo4mSeTHmapOkkjiczlhTTtEgmIgXEhOI0VEiRBnltBNnXoFrv2G5tW5SqvokMfm7Rut2OToW0jYLNhyGIPHwtlTCow8XHy1HYgKF8Dk242H535DYN5goKVHTxuOZthdoFp8e/gHV/+2IP9nvwvgbZYsieS++kI48niUch3jrUAqlcCcriKKxAC3C12YQLZ1pyGARxrtXmELGW2vWdVnBr5RfKz2IfVyK1xocpHMx8mNB+OLXkeN54DnuPg0LtJ1erttJnfQt+tlhCq9y92baW8mHjIXsQPcLy3bq+udjXO5G6625Aq2oO6mCBc0YWrUPr6UCF3VAqaBqpV3lj6mvZXSYoVbRSZESecapp5UpHvfYiGhBEJ+Q/7twfwEjfxBtKQ5d3XfP559bX7dsYAOddz13DeUcUhVpuZONeUeJrHGDuRr+r8iJ7TDl8fieUe2DulH6bg0LUudWrFoyQoPNB8g8Ff3E4eJ7u33sAwVkP4Kngv7n8k2YG5X/jG4SfvZjwZ39J+AOif0z5f0zv8eTRTXlPIp3E7T2tU0GHyzaOU8GuvNHa3tou91Jfhotl+NZPyBJGGlcQvDamNstwtOzzdBGMz8oZiiwpCj4jsEfZnGVZyibACl4cFV243VjawU+M313d1OZTrmtirQf1fk1UB2uwQUE/aAA6QI8kkDogCjla6+Ftt5hlyWzKyvEcsumYcYZjKGI2pgEKkRXlNClZlOd9v3ke8VrgbheMuyr4jAQVlYYV5YiCtwrBYsBr7YjVAERF6EoCadumqY2LHi6R/yT8DRKeubCxIj4cBj15T/8D9wlOJCphf/BL7jf2UCC/HgocnisvtraTadx9/18tL/hqufwKaPg+cp0LAAA=',
    },
})
Record({
    $id: Now.ID['cfc3b7a147073a1051a3e84d416d4330'],
    table: 'sys_hub_action_instance_v2',
    data: {
        action_type: 'f9d01dd2c31332002841b63b12d3aea1',
        action_type_parent: 'baf174c8c3c232002841b63b12d3aee4',
        flow: '5e65888247fca21051a3e84d416d43d3',
        order: '15',
        parent_ui_id: '35a7d726-0a8c-4f0b-8022-acd10edf01f0',
        ui_id: 'c4b580eb-cde7-49ca-812e-8b142908b53b',
        values: 'H4sIAAAAAAAA/+1W32/TMBD+V6w8V1HSpFvXN8Q0aQ8MNBAvlEUX+9IaHCfYTrdS9X/nnDhlMEADhgBpfanuh+++u/t88ZtdBNzJRp9r60BzfLm15yJaRLMTDnOeQ35ccZimySyFDOe5yNMjkWdYRZNIer8cRZKepEc8S7NsmiTTeZ6WR1mZTkUGiCn5aaiRPA3yxgiSN6A6r9jtbFdWqrmODX7o0Lr9nqxC2lbB9nVwIg1fSyUM6mjx5u0kasFQPIcmWuy+Mrlti4WCEhUdPG14V6N27Pz0J7COpy9HsF+D9zlIFiF6Ib2STB5PmkwivHGoBVK6CpTFSVSDFuAas40WznSkMAjiuVbbg8daajdUWsONlR8pfp54vwqpNB66cBCL0KGxOY3k+Lz1Mxw0Dko1dq5RXa0vhhJ8b7GCTrlbve0sxcPWQ/YgBoTVy3VzfTnmO5O6ry6gVQ0HdZDAOSPLzqH140CFfVNqaFupV0Vrmo3sDxOUOl4pEmI/ccpp5UrHA/diahDEZ6Q/7dWvwUhfxDMKQ4f3ffHFh87nHcoIgIu+5r7goh8UuVpuZOueUOANBpj7ye+yvJz9iDn85DNRboH5zPSbAhSiLqxedWCEBF0Eyt8l/OXB8Gu8f+UBsIsBwH3Bf3H4O8UE5n+hC8SfPRjx53+J+AHRf8b8P8b3ZPrDTXmLIj3F7S2uU0KHyy5JMpFfeaGzg7RbjlRfRotl9NTjUgrFMposh9O9PpnPqzmKWVqWfE4Qj2cn+WyW5VPIS14eQ+9ut5Y27z3991fUTZoHqAGIwXfIHYqr68a8L3RDIxwMr9bIwvVjdz5Ose7qEs1+z6rGfMMc/guyxlWnVH9FyFs0aLWPPz12bA0bZKC3jC4HrNDEjHLSiBuDzFH2EIT8LCtpYzA+dilmLxSCRRaYNUZgrmHEZdOjIhvRho3lepmjtUTI+O6ieRzUvzqoX1z8WNPMHLJhwPe/yWOAM4lK2G9c7XHzhwTFJiQ4PHsebP2nR0n/e3z9PODr5+0n+cUGNeULAAA=',
    },
})
Record({
    $id: Now.ID['23c3f7a147073a1051a3e84d416d43bf'],
    table: 'sys_hub_action_instance_v2',
    data: {
        action_type: 'f9d01dd2c31332002841b63b12d3aea1',
        action_type_parent: 'baf174c8c3c232002841b63b12d3aee4',
        compiled_snapshot: 'f9d01dd2c31332002841b63b12d3aea1',
        flow: '93ca408a47fca21051a3e84d416d43b5',
        order: '7',
        parent_ui_id: '0f5e1b49-d578-480b-9397-c43934e7be80',
        ui_id: '23aafed8-aeab-4a3f-9cab-a70a9dd56fc9',
        values: 'H4sIAAAAAAAA/+1WTW+bQBD9K2jPFgIDCfGtahQpUr+UVLnUCRp2B3vVZaG7SxLX8n/vAItjJW2Vqu0han2x5mt583bewKctA+5ko8+1daA5Xm7suWALlmcccp5CelxxmMdRFkOCeSrS+EikCc/YjMk+L0URxSfxEU/iJJlH0TxP4/IoKeO5SAAxpjwNNVKmQd4YQfYtqK53bLe2KyvV3IUGv3Ro3W5HUSFtq2Bz5ZPIw9dSCYOaLT5dz1gLhs5zaNhi+yj0XEAKSlSUejEheozQbdreFg3vatSukJPzja889ZHg/JQiVNTDiaMZw3uHWiABqUBZnLEatADXmA1bONORwyCI91pt9hlrqd3YaA33Vn6lJ6dRn1chdcY9CXuz8ASN7uoUHFzSydx1Zs9XIznakROBFXTKvT70jQnv2/7exxIHpZqqG9XV+t3ICNsfcHAfnSUQ2PZ99sjHtqrLdXN3MYE8k3qgxLeoGg5qb4FzRpad6+FsGSocOK6hbaVeFa1pbuVQTFDqcKXICPspoWdaudLhOK8hsQrhGflPB/cVGNk38ZaOoeLdjNmNfa3A2odWiMPiS9cjGRvzLRQDCwMFxTAJfTE3snWv6FG36IHvZr+rlTL72Wjyk4dJPADzoJf7AhSiLqxedWCEBF144TyVzcU+8GvqeQbEST0fh5n5PmQvoCe+N4e1wbsx4OWT/TH55C9JPr6NF6+fv6aaaP7ThX4wgoNQ7IFi6IGus8suihKxXU4aWbLFkn3oabIEizgLPlAj9L9ks+VYO6TkeV7lKLK4LHlOAI+zkzTLknQOacnL45MhnVii18Mz83c3xCeRjaJwzQjrhvgmKKBGc7RQ3Nw15nOhG7rkMfBxjYEXdfDkxRnqri7R7HbBGmxQ0pIIpoOCchOQiGCFhuqGObj1Vx16f1hJY90gUzrhR0k0ClNO+HTf/Gf6rzH9awv8GWqZFviZRCXsd+QzbW+s6RIdFqOcHm1wHwyufHD/EfTH1nh8FA2/F7TM/5lvoetvIfhBaTkMAAA=',
    },
})
Record({
    $id: Now.ID['6bc3f7a147073a1051a3e84d416d43b6'],
    table: 'sys_hub_action_instance_v2',
    data: {
        action_type: 'f9d01dd2c31332002841b63b12d3aea1',
        action_type_parent: 'baf174c8c3c232002841b63b12d3aee4',
        compiled_snapshot: 'f9d01dd2c31332002841b63b12d3aea1',
        flow: '93ca408a47fca21051a3e84d416d43b5',
        order: '3',
        parent_ui_id: '69a90f82-d979-438c-8d97-1f939020a772',
        ui_id: 'c489bcb1-3f47-438c-92a1-82504c97e88b',
        values: 'H4sIAAAAAAAA/+1WTW/bOBD9KwLPhiBZcmL7FjQIEKDbAkmRS90II3JsE0tRKkk58Rr67zuUKMdIskWKbQ/Brm/zRb55nDfy1wMD7mStr7V1oDne7u21YEs2X3CY8xzy8zWHaZrMUshwnos8PRN5BpxNmPR5OYokXaRnPEuzbJok03melmdZmU5FBogp5WmokDIN8toIsnegWu84HGxbrlX9EBv83qJ1XUdRIW2jYH8XksjDt1IJg5otv36bsAYMnefQsOXhWeitgBSUqCj1ZkT0HKHbN94WNW8r1K6Qo/NjqLwMkej6kiJU5OGkyYTho0MtkICsQVmcsAq0AFebPVs605LDIIjPWu2PGVup3dBoBY9W/kU354nPWyN1xgMJR7MIBA3u9SU4uKWTuWvNka9acrQDJwLX0Cr34dQ3JHxu/LsPJQ5KNVbXqq30p4ERdjzg5D1aSyCw8X165ENb69tt/XAzgrySuqcktKhqDupogXNGlq3zcA4MFfYcV9A0Um+KxtQ72RcTlCreKDJiPyV0p5UbHQ/zGhOrEF+R/7J334GRvok/6Bgq7ibM7u0HBdY+tUIcFt9bj2RoLLRQ9Cz0FBT9JPhibmTjLuiqHQbg3eTfaqWc/Wg0+eJpEk/APOnlsQCFqAurNy0YIUEXQTgvZXNzDPycet4AcVTPl35mXoccBPTC9/G0Nvo0BIJ8Zr9MPvP3JJ/QxrvXz29TTTL94UI/GcFeKPZEMYSeWkNRuHrVJkkmDoeeiV1oNqbxgg2arrt/qM2fha6J1CHzyxajIKLoxYcq1m1V+rJoCzYqSZTReFXk6iicGv3DbTFNgOlV0XXxPZHicLhz2httQHBYjaJeseWKXTyAdPTA0UXjnxjUik1WQ6d9nCfz9RzFLC1LPic6z2eLfDbL8inkJS/PF306vSl9zN6Y393DeFUPKDSP4uW6+Z/o30X0z63vN2hlXN9XEpWwr4hn3N1YESUOi0FMz/Z3CEZ3IXj8C/TLlnh6lvS/d7TK/yv/hEanB32ifG++ng07FEfauq779jdt+nE/dwwAAA==',
    },
})
Record({
    $id: Now.ID['6bc3f7a147073a1051a3e84d416d43e8'],
    table: 'sys_hub_action_instance_v2',
    data: {
        action_type: 'f9d01dd2c31332002841b63b12d3aea1',
        action_type_parent: 'baf174c8c3c232002841b63b12d3aee4',
        compiled_snapshot: 'f9d01dd2c31332002841b63b12d3aea1',
        flow: '93ca408a47fca21051a3e84d416d43b5',
        order: '19',
        parent_ui_id: 'e551864f-9a56-4c4e-ab04-51add5bf61f4',
        ui_id: 'f4be4885-a7c4-4a6c-9aea-54689c482c04',
        values: 'H4sIAAAAAAAA/+1WyW7bMBD9FYFnW5AsyrF9K5oGCNANSZFL3QojcmQTpSiVpJK4hv+9o8WOkRRFuqEIWt9mI9+8mUf5/ZaB8Koy58Z5MAIvN+5csgWbzwXMBAd+UgiYxFEaQ4IzLnk8lTwpCjZiqs3jKKN4Hk9FEifJJIomMx7n0ySPJzIBxJjyDJRImRZFZSXZ16Cb1rHduiYvdHUTWvzcoPO7HUWlcrWGzdWQRB6xVlpaNGzx/sOI1WDpPI+WLbb3Qo8FpCFHTakXe0T3EfpN3dqyEk2Jxmdq73w5VJ4OkeD8lCJU1MKJoxHDW49GIgEpQDscsRKMBF/ZDVt425DDIsg3Rm8OGWtlfN9oCbdOfaGbedTmFUidiYGEg5kNBPXu4hQ8XNLJwjf2wFelBLqeE4kFNNo/P/b1CW/qdu59iYdc76sr3ZTmdc8IOxxwNI/GEQis2z5b5H1bxeW6urnYgzxTpqNkaFFXAvTBAu+tyhvfwtky1NhxXEJdK7PKaltdq66YoJThSpMRtltCdzq1MmG/ryGxCuEZ+U879xVY1Tbxio6h4t2IuY17rsG5u1aIw+xz0yLpGxtayDoWOgqybhPaYmFV7Z/RVdc4AN+NflUrefq91RTzu008AnOnl9sMNKLJnFk1YKUCkw3CeSibi0Pgx9TzCIh79bzrdubbkAcBPfC9PK4NXveBQT7pb5PP7CnJZ2jjyevnj6kmmnz3QT9awU4o7kgxdKHHZRNFieQfW6NxvbVd7gWzZIsle9ty5ggjERgEL6yt7JKNlv05XQYXs2KGMo3zXMwI7Ek652ma8AnwXOQneZdOjNGn4pH5u483lf2UmYrm2IN6t6bhB2twQU4yD8AE2CIJlAloqLR+roW33WKaxrMpL8ZzSKdjLjiOIY/4mAiUMs2LaVzwMMv6frMsFJXE3S4Yd7fgTxxQ0tWwojPC4K1GcBiIyniaagCyJHQFgXRNXVfWhw+fov9D+BtD+LFn/xEa2z/7Zwq1dN8Q3f7Nx5JG6jHrRXjv3R+CwdUQPPx1+m2PfzyNut8T+gT8M/+gPnwFrUPZxW8MAAA=',
    },
})
Record({
    $id: Now.ID['6fc3f7a147073a1051a3e84d416d43c8'],
    table: 'sys_hub_action_instance_v2',
    data: {
        action_type: 'f9d01dd2c31332002841b63b12d3aea1',
        action_type_parent: 'baf174c8c3c232002841b63b12d3aee4',
        compiled_snapshot: 'f9d01dd2c31332002841b63b12d3aea1',
        flow: '93ca408a47fca21051a3e84d416d43b5',
        order: '11',
        parent_ui_id: '7fbb2e1d-e754-4aa4-b62b-928440d2157e',
        ui_id: 'a5e796eb-dad0-47a6-af0f-d07bcf678274',
        values: 'H4sIAAAAAAAA/+1W30/bMBD+V6I8V1HSpKX0bQIhITGQAPFCR3SxL603xwm2U+iq/u+7JE6pKEOgsQe09c33w/7uu/suvV37wKwo1akyFhTDq5U55f7UnxwymLAEkoOcwTAKRxHEOEl4Eo15EvPEH/iiiUuQh9FhNGZxFMfDMBxOkigbx1k05DEgRhSnoECK1MhKzem8BFk3hvXa1Fkuy4dA432Nxm425OXCVBJWNy6ILGwhJNeo/Ontt4Ffgab7LGp/un7meisgCRlKCr3sET1HaFdVc+YlqwtUNhW98cxlHjuPd3pMHkpq4EThwMdHi4ojAclBGhz4BSgOttQrf2p1TQaNwC+UXG0jFkLZrtACHo34SS8nYROXI1XGHAnbY+oI6sz5MVi4opuZrfWWr1IwNB0nHHOopT3atXUBF1XT9y7FQib77FLWhTrvGPG3F+z0ozYEAqumzgZ5V1Z+tSgfLnuQJ0K1lLgSZclAbk9grRZZbRs4ax8lthwXUFVCzdNKl0vRJhOUIphLOgTNlNCbRsxV0M1rQKxCcEL249Z8A1o0RXylayh5M/DNyhxJMOapFOIwva8bJF1hroS0ZaGlIG0noUlmWlT2Cz21RAd8M/hTrWSj10aTHT5N4g6YJ708piARVWrUvAbNBajUCWdfNpdbx/vU8waIvXqu25l5GbIT0J7tbDfXO+8cTj6jD5PP5DPJx5Xx6fXz11QTDl9d6Dsj2ArF7CiGHrS1mdVhGPP1rNfIzJ/OSCDfkVnkM38w6+JbcxJO8gnyUZRlbEKgDkaHyWgUJ0NIMpYdQBtOzNAn4Y3xm7sGBXYgkjuilxoEsjtrh+LuodQ/UlVSTzvH9QI9p2Fv7zsZqLrIUG823gKMl9FO8PqLvGzlkWZgjpry2rYvXWcDZw9yoY1tVUk3/C6IOt/HBPvr5T+xH0Xs+9bzG7TQr+cTgZKbF8TR72YsqGcW004sz/azc3o3zrn9i/NhSzoah+3vE63qf+afzrdfBpjwMhcMAAA=',
    },
})
Record({
    $id: Now.ID['abc3f7a147073a1051a3e84d416d43b7'],
    table: 'sys_hub_action_instance_v2',
    data: {
        action_type: 'f8f2e9920b10030085c083eb37673abd',
        action_type_parent: 'bae0a1120b10030085c083eb37673a92',
        compiled_snapshot: 'f8f2e9920b10030085c083eb37673abd',
        flow: '93ca408a47fca21051a3e84d416d43b5',
        order: '4',
        parent_ui_id: '69a90f82-d979-438c-8d97-1f939020a772',
        ui_id: 'bc8297f4-98c8-435b-a53b-7b4666c62132',
        values: 'H4sIAAAAAAAA/+2YXW/aMBSG/0rla8QCgZVyVw1V6rQPqd12U6roYDvgyTiZ7XRlEf99J7YTMlgZbN1FJS59Puz3nJwHJ9yVBKgVmbpWxoKi/HZlrhkZk2hIYUQHMDhPKfR70bAHMR8N2KD3mg3i2ZB0iKjizkdpn19c9KNZL4riKBoNaTSK+Sw+f30eA40wTsGSY6TmNNMM1w8gi8pQlqaYpTL73tX8W8GNXa/Ry4TJJay+hCC00IWQTHNFxnf3HZKDxv0s12RcbrkOFSRhxiWG3tSKthXaVV6tWUaLJVc2EbXxXcicBM/Z9QQ9mFTJiTqEP1quGEcdKUjDO2QJioHN9IqMrS7QoDmwj0qumoiFUNbXuYRHI37gwXG/iks5FkZDD5plEvrjzekELNziztQWumlXJig3viWMp1BI+6Zt8wEf8+qx+xQLM1lnZ7JYqg++IaTZoPU4CoMieF7VWSn3ZaW3i+z7TS3ySijXkVCizCjIZgXWajErbCWnJFxy1+Il5LlQ8yTX2YNwyShl2Z1LXHSrIcEzjZirrh/XLnYVuldonzjzF9CiKuI9boPJ6w4xK/NGgjGbUrCHybeiUuILCyUkrgu+BVUe1SK3l3jKAw+a151/pWRG9w4l3cyg17GB5DEByblKjJoXoJkAlQRadlm5aRzHIXOAuhqZT0HeltoAjFsmzvcrLy7t7IN3BFx6+3EJlg0vftB+g8soekG4hLJePC//DZWot28Y2WgzfCgdiweZpILL9sVSO3YJaXmOQ+QAVTUil+GMs6sg6ym5ARq3/B00Ln8Lmv6R0Dx9yYyi6CVxc7pmDmCH7p1SHm+G8WtWaLUHnWQhjBupJxFqRRyH0gEia5TeepXbJG2L/xuQ4hNIJ5CeBGkw3DujrTegBgeaKSaqM00LJ38XcHOpVp/vytL15SGU3sVxgznX6/X9LmWHJx4H3wGFNV9HheTmT4UG9BqnDklt/JoLsd4xIDh4ru+lF0bg6RXwT9fY3iFNLzZDyQrsLNj2B1M5DadPyXhKVKb4lHSmpIpKqql0ZozAqhqHs5Xleu0thYawQa+13GQzWBkXaeiCMxxqZ/3FkjiKgv05/tY4oCc1uJOCn018U3bbFIBtdPq+iJ078zYEuJ1efRLtu3P4bHfn4MTtv3KLMkXSfNfgxYg/m88I8/1POfqRNSIUAAA=',
    },
})
Record({
    $id: Now.ID['efc3f7a147073a1051a3e84d416d43d1'],
    table: 'sys_hub_action_instance_v2',
    data: {
        action_type: 'f9d01dd2c31332002841b63b12d3aea1',
        action_type_parent: 'baf174c8c3c232002841b63b12d3aee4',
        compiled_snapshot: 'f9d01dd2c31332002841b63b12d3aea1',
        flow: '93ca408a47fca21051a3e84d416d43b5',
        order: '15',
        parent_ui_id: '35a7d726-0a8c-4f0b-8022-acd10edf01f0',
        ui_id: 'c4b580eb-cde7-49ca-812e-8b142908b53b',
        values: 'H4sIAAAAAAAA/+1W227bOBD9FYLPhiBZcuL4bZEgQIBuu0iKvNSNMCJHNluKUkkqidfwv+9IohwjCYoEmwINdv1izI08czkcfdlyEF7V5sI4D0bg1cZdSL7gsxMBc5FBdlwKmCbxLIEU55nMkiOZpVjyCVedX4YyTk6SI5EmaTqN4+k8S4qjtEimMgXEhPwMVEieFkVtJcm3oNtOsd26tih1fRdZ/NGi87sdWaVyjYbNdXAijVgrLS0avvjydcIbsHSeR8sX20emlwLSUKAm18sR0WOEftN0sqxFW6HxuRqVH0LkWbCwizOyUFAHJ4knHO89GokEpATtcMIrMBJ8bTd84W1LCosgPxm92XuslfFDohXcO/U33ZzFnV+JlJkIRdiLeSjQoC7PwMMVnSx8a/f1qpVAN9REYgmt9qeHusHhU9P1fQjxUOgxutZtZT4OFeH7Aw760ToCgU2XZ4d8SKu8Wtd3lyPIc2X6koQUdS1A7yXw3qqi9R2cLUeNfY0raBplVnlj61vVBxOUKlppEqJuSuhOp1YmGuY1oqpCdE76s159DVZ1SfxJx1DwbsLdxp1qcO4hFaph/qPtkAyJhRTyvgp9CfJ+ErpgYVXj/6CrbjEA303+LVeK2c9GU5w8TOIBmAe+3OegEU3uzKoFKxWYPBDnKW0u94bXsecFEEf2fO5n5nnIgUBPdB8OY9nHwRDoM3sz+szfE31CGu+eP7+MNfH0pw/6wQj2RHEHjKELPS7bOE5ldtMJrRuk7XIkzJIvlvy0w6U1yiWfLIfoXh/P5+Uc5SwpCjEniMezk2w2S7MpZIUojqF3pzrRgnih/+6G6ksdAj0AsfgNhUd5c1fb77mpqamD4fMaWSAxe7IoI9NWBdrdjpW1fcYc/nOyRmWrdU9B8pY1OtOdPz32bA23yMBsGHEMVmgjRndSi2uLzNPt4RDyc6ygd4eJsUoR+0sjOGRh1sYTmK8ZTbftUZGNBomN6XYyMcjRiEZPn6v/G/W7Nup16+MFXB3Xx7lCLd0z5B13B1bUdo/5QOZH+yMY2XUw7j/B3myJJEdx/3tHq+Q/8yX29R+fbeLNtwwAAA==',
    },
})
Record({
    $id: Now.ID['07c3b7a147073a1051a3e84d416d4324'],
    table: 'sys_hub_flow_logic_instance_v2',
    data: {
        block: '6567a19b4787f21051a3e84d416d43a5',
        connected_to: '0f5e1b49-d578-480b-9397-c43934e7be80',
        flow: '5e65888247fca21051a3e84d416d43d3',
        logic_definition: '1f781bf3c32232002841b63b12d3aee6',
        order: '9',
        parent_ui_id: '69a90f82-d979-438c-8d97-1f939020a772',
        ui_id: '7fbb2e1d-e754-4aa4-b62b-928440d2157e',
        values: 'H4sIAAAAAAAA/6tWyi8tKSgtKQ7JdywuzkzPU7KKjtVRyswDiUHYZYlFmYlJOalQbkpqcmZxZn5eCEjME0ldSmVeYm5mMrJQeX5RdlpOfjlCrBYAD1ouqHEAAAA=',
    },
})
Record({
    $id: Now.ID['0bc3b7a147073a1051a3e84d416d4359'],
    table: 'sys_hub_flow_logic_instance_v2',
    data: {
        block: 'a167a19b4787f21051a3e84d416d43c7',
        flow: '5e65888247fca21051a3e84d416d43d3',
        logic_definition: 'df4e1945c3e232002841b63b12d3ae3e',
        order: '16',
        outputs_assigned: 'approved,has_manager',
        parent_ui_id: '35a7d726-0a8c-4f0b-8022-acd10edf01f0',
        ui_id: 'cdf37f8f-9a6b-45d0-b70f-fac11f92724f',
        values: 'H4sIAAAAAAAA/+1VTY/aMBD9K5XPhOYLCNyQKlSk3a7UpXtZVdHEnoBVY2djB5Yi/nvHJEC1pdWqqqoeeouf38y8eZ5R9sw0rmqcXZiptXKp2eRxz0pltjdmKflcWwea4/3OzgWbsLHgkPEU0lHJIY7CQQQJZqlIo6FIkzJiPSY9L/wlbwjE07BGYkJV1WaDgpANqMZDIX0LaSsFu4cOKkFZJJivpBI1epWfe6yCmpI4rNlk/+LK7SrMFRSoKHpRN/h21qV4rb5T8PQi8EfJvgwhhTEKQRNgauHlRD2Gzw61INbkKL7H1qAFOFPvzkiNIO60ugArqR2lY578bOVXyp2GnlcidcaxvTsf886lFuYrIzneVU4a3SIOCtXFcKOatf7QNuD9xRIa5U7+EtJYyoeV1+xFdIrK+5XZfjwVnEl9bK+7VIaDOp/AuVoWjUPrn6ORi5fetNDNtUdBhWsqm6/JW6mXuTdYHkuR8nV/qejQ91NJEv2U9oH7NvtkKPRnhL87wg9QS9/zLaWhYF/yk5ZPDbbDi4MkwzILMj5MgnQ0DIMMUh4kIUTjOBJ0W7DD0d/8qfGdtU51nuStrUSwvJaVm5KEDXbtH3p/YGvGBR+kPIuv8wReRnAFlrzSsDx2+RcX5xUST8Hvwb65PWu8Kvxn6xP/X59/b33iESSDFKMgS0EE6WDMgwLicYCYjUdxUgwjEf32+tDkSe3/Q+0Ubjol3VEgl5YELzw2/44ndjRXfuEu0NbUX3yrF+zwDTa7jBXlBgAA',
    },
})
Record({
    $id: Now.ID['36c377a147073a1051a3e84d416d43f3'],
    table: 'sys_hub_flow_logic_instance_v2',
    data: {
        block: '2167a19b4787f21051a3e84d416d4398',
        flow: '5e65888247fca21051a3e84d416d43d3',
        logic_definition: 'e9060aa2c3013010ace8b740ad40dd51',
        order: '0',
        ui_id: '484d2041-7cab-442c-bf85-50a3b744d3af',
        values: 'H4sIAAAAAAAA/6tWyi8tKSgtKQ7JdywuzkzPU7KKjtVRyswDiUHYZYlFmYlJOalQbkpqcmZxZn5eCEjME0ldSmVeYm5mMrJQeX5RdlpOfjlCrBYAD1ouqHEAAAA=',
    },
})
Record({
    $id: Now.ID['36c3b7a147073a1051a3e84d416d431a'],
    table: 'sys_hub_flow_logic_instance_v2',
    data: {
        block: 'e567a19b4787f21051a3e84d416d439f',
        flow: '5e65888247fca21051a3e84d416d43d3',
        logic_definition: 'af4e1945c3e232002841b63b12d3ae3e',
        order: '5',
        parent_ui_id: '69a90f82-d979-438c-8d97-1f939020a772',
        ui_id: '0f5e1b49-d578-480b-9397-c43934e7be80',
        values: 'H4sIAAAAAAAA/+1UTW/bMAz9K4XPjuGP2E1yCzYUGLCuwFr0shUGLdOJMFnyJDlpFuS/j/JHGrQJNgw97mY9UuR71KP3nmpt01rzoJbG8JX0Ft+efI9Lh9H33pNQo7fwmJIlt1zJvAN8bwOidYFbkLBCfbVsGq02aChUctMI2D1ezmBrLkqNQ7cGNNW0qL3F/lXI7hrMBRQoqNC91Vyu6Dov6VSFUEVzFrEkzpI4DOPZNCqypIjiMgGEhPLGix9G8lefO8S/qMr1I9yMnZQuHa0o9D18tihLpNYVCIO+V4MswSq9OyIaobyT4gVYc2mpnOeSnw3/RbXjNHWJFZJGhn3weMyH0fUwWyvO8K5xBHvEQiGGO0yJtpZfeh1u6FhBK+w4dEJaQ/WwcaQdi4FSdb9W269jwxsuO4FDUCgG4ngCS2MoWktPRg+DAmsqlNfQNDSc3D0m7y4TlzpYCToElVBbauqcFABzxAOaEQQ3hH/s4EfQ3Km4pTJ0uadZgOEs71xH5awmCYduLPnP1hHqBQ5S8n4alGCY5o1dUp8NDqwP/lvLnrh1vy/YLJ5fV9PJfMZmk2mSFhNIk2JyXUyzLGNZHCVxAJ1VQeTGgsXD4XsbhknZo+SANxZ/r7LvsRdzSKs0CtPzezHNzu3FmY24vAzxH5bBPd9f7kIYhv+X4XQZuMl7Uw/auub/vAtPzvh9B9P7pkTGDRF5cNin8S/vAjsyAGen0FbpH07CC3b4DZB0VPUvBgAA',
    },
})
Record({
    $id: Now.ID['43c3b7a147073a1051a3e84d416d4360'],
    table: 'sys_hub_flow_logic_instance_v2',
    data: {
        block: '2167a19b4787f21051a3e84d416d43cb',
        flow: '5e65888247fca21051a3e84d416d43d3',
        logic_definition: '35d60003e6022010a5e40cdd1254dd23',
        order: '18',
        ui_id: 'e551864f-9a56-4c4e-ab04-51add5bf61f4',
        values: 'H4sIAAAAAAAA/+1Y32/jNgz+Vwajj2lm58clzVvRLkCHtQWWXF/mwpAtJtVNsXy2nLYX5H8fKctKnGTXoZf1YQtQBDYpkZ/IjxTdladKnZW6mKrLohDz1Bv98djyREoyfF55KVuAN/KiqNBMl0UUeS1vyWRJwlXoLSEvhEpDbxR6QdsPvVboFZALJsU3plEzVvmCaaP/dXJ/ZxYkapFJeLmPv0BCqhWJOFRPZ8myfjC7vrAla0uWztsTnYt0biycLY0u9NZrfFtAUbD5O/evdwFNkidYsMrGWKrna6DAQD4aX19eTW/u7ybTy+nnSQN36N2kGuaQ2/NxaJ/NBEgezVgCuqgWTwS5uWXZmIRm2yoMQ68U09cMfmMxSHod0U9tLySL+JMD45FK5atbofMSnPpJpNpo0lLK1saoWy127HGYsVLqyOTSrXJqllDyIshzlUcVRw47lg3UVxSOWrVgKWda5RvIMyaLjV7lvAJkdMHWvpdIQjrXT07Z8+l3jX+NdGNINzm14h8NvLV4rLgXTXP7YXcb3xnyWxuN90W98/2o+y7uFPjvVEP7TOOp3x102wpqLImKjDlqPm7NTvkdK0Gq6fqNumjG/tKk7KeJaY37iCLbV6KNj32AR6wS3ylL8TkVX0u44U45hC7E3Yv+eXJx4Z/32ICfx0POzv1hwAKWsHgAsUv2Grs8F0Um2evDqdmfmv2p2Z+a/anZ/4ebffIkJM8hNTO/4NjvUWhnf+pwW1N/czV+LRRJLjJN4Vmi3hyoFiI3kEx7Fm31/ohRXJKxHM1pyFHQPIBpCoaJyEjSbtEQndl2iz4PlCHqKWXYfLbBvQFnF30prqvbk9yiBeE8GqrLPSB1gGrNVRXzZgb0rjFDF28UtDx40ZBy4A6bY5qTEFPvkahOQNVSeUV6FeIb2u75tG4GeJDEnty9RnYgqLOlRAL3GcWvkmgWyzqVSpaL9K4CT6NEVWcPm3hayXVzxkBFWaAjyOgwhM5CnU2e1PPvNZKxSM25rVKqhEn3xjQ24bjUUFSJQfzR15IWVH6t6aiCTeR8gy3VHfGBZClqhw2uOBi7VLl1xbRXXXrHoOVL54h88f93jHncSUx1ndWJ8WeDDuuzTj8Ouh0/8ONPATB86A6GQTLoXWwl7hcikr1PNtlr/KfFJlDVLuqCp6gfKYXDj0vhcTNly3Q7PM3CdYnZnjBQ3pwtUA8SFpTgBcsyLJQoy9VSGBT0sdCeS3xpz3AeQvQ0ELWrTtDGaLP2Zk56YPgpFJspKMPN/6D3HOoU1JEsUEjJHN+6JoP97zLTf3Zbyt9djbvcneLmn8fktuYv5wM/GA6SpPsJiL/9fr8bD3o+4z2fc55s8XcDbw+v5W2slASW/jvE/Zi7amaDc7j91NoPv7UOMueRiFJxsKiSzSER9Mk+JdlN/V9dUrxizkSyLXpW+Z9E8o1s/RfQLDk/HxYAAA==',
    },
})
Record({
    $id: Now.ID['4bc3b7a147073a1051a3e84d416d4330'],
    table: 'sys_hub_flow_logic_instance_v2',
    data: {
        block: 'e167a19b4787f21051a3e84d416d43c5',
        connected_to: '69a90f82-d979-438c-8d97-1f939020a772',
        flow: '5e65888247fca21051a3e84d416d43d3',
        logic_definition: '1f781bf3c32232002841b63b12d3aee6',
        order: '14',
        parent_ui_id: '484d2041-7cab-442c-bf85-50a3b744d3af',
        ui_id: '35a7d726-0a8c-4f0b-8022-acd10edf01f0',
        values: 'H4sIAAAAAAAA/6tWyi8tKSgtKQ7JdywuzkzPU7KKjtVRyswDiUHYZYlFmYlJOalQbkpqcmZxZn5eCEjME0ldSmVeYm5mMrJQeX5RdlpOfjlCrBYAD1ouqHEAAAA=',
    },
})
Record({
    $id: Now.ID['4fc3b7a147073a1051a3e84d416d432a'],
    table: 'sys_hub_flow_logic_instance_v2',
    data: {
        block: '6d67a19b4787f21051a3e84d416d43c1',
        flow: '5e65888247fca21051a3e84d416d43d3',
        logic_definition: 'd176605ea76103004f27b0d2187901c7',
        order: '12',
        parent_ui_id: '7fbb2e1d-e754-4aa4-b62b-928440d2157e',
        ui_id: '490a81f9-ad5f-4090-8b6f-fbc220cef2a6',
        values: 'H4sIAAAAAAAA/6tWyi8tKSgtKQ7JdywuzkzPU7KKjtVRyswDiUHYZYlFmYlJOalQbkpqcmZxZn5eCEjME0ldSmVeYm5mMrJQeX5RdlpOfjlCrBYAD1ouqHEAAAA=',
    },
})
Record({
    $id: Now.ID['76c377a147073a1051a3e84d416d43f7'],
    table: 'sys_hub_flow_logic_instance_v2',
    data: {
        block: '2167a19b4787f21051a3e84d416d439a',
        flow: '5e65888247fca21051a3e84d416d43d3',
        flow_variables_assigned: 'manager',
        logic_definition: '4f787d1e0f9b0010ecf0cc52ff767ea0',
        order: '1',
        parent_ui_id: '484d2041-7cab-442c-bf85-50a3b744d3af',
        ui_id: 'ce6b8ecc-6562-40b7-bed7-8b796ddbe375',
        values: 'H4sIAAAAAAAA/+1Wy27bMBD8FYGnBLAF21ISxT0FSFMYSBqgeVyqQKDJlU2UohQ+nLiG/71LPWzHSYOeC+tiacid3VkOF16R0tnKWXNfXhgjZoqMfz71iFAew/cVUbQAMiYFVXQGmvTIgkrnEXzlwlSSLh+3CJsLyTW0NBXVGG0xbLzaW7LLCjJJpyAx8AfkgCsMkEFwBBhnNGExjc9yRkfDwcmQRpDEPB6e8jg6Y7ivi73ZFPauUp8DAb3DXmruqxn0CLxaUBwwW06lgZ6P49SWerlBNFB+q+QWmAtlG50FfTXiN7JHo95OgjExS5M5U6ffwFnbJ1x+aJbYvBQMbisrStUQWjqVe/GslK5Q3xtVvtuQUyftTrdxY8ah8jp8YW2V+d28fNm09EqoWnK7KEtG5eaLWqvF1Fkw/oScuH/fsQa8/uCkQEKBebOCVpVQs6zS5ULUubD0IpxJ/AhzWb5gjd5aIWVeb4hdpuEV4pc1/Ei18OJvkKbW7cSDEs8OJt4Jo5NBnLA86ScwGvTj6WnUT9iQ92GU02EU85NBlJB13ezs2XlpTavapmRNf3GDYVpU9gJLWKBEqx10mJfemQZfP9tIUrugOhCeWthlkLrBIOJBzrNalHHTWm9zfUINqMLY7jfLS/0lVQE+uyS+vZPLjqpDQ2/e0FsaQ5qsbY0thciDow8pWqKUfC0qWS4BUnIcrJog/7Q07xIW1OBNrc2XCR6+zbYOAA3zbzQ1vkfX0Wzlz/RF5R0D2t+JjkbBS/DNG+cHMLyrd8CchiO/ODrrrkbzdbzTh7dc4QzsUVvG8RvpGqzTai91V5oXuPK9Tm27LyUpqbuPZaeKrNfrJz/+Grs209Ef93U5E2yijKV4L+6WpvZtcv7ZBDuPuklX/H18fTpoD6P1MFoPo/UwWv+n0cqBCYM2vveenXR/Qf3CEk/Lz9gt9FLqX94QW2z9BxAHzurMCgAA',
    },
})
Record({
    $id: Now.ID['87c3b7a147073a1051a3e84d416d435c'],
    table: 'sys_hub_flow_logic_instance_v2',
    data: {
        block: '6d67a19b4787f21051a3e84d416d43c8',
        flow: '5e65888247fca21051a3e84d416d43d3',
        logic_definition: 'd176605ea76103004f27b0d2187901c7',
        order: '17',
        parent_ui_id: '35a7d726-0a8c-4f0b-8022-acd10edf01f0',
        ui_id: '6b9229bb-5988-4109-9852-fd21e9bd9eaf',
        values: 'H4sIAAAAAAAA/6tWyi8tKSgtKQ7JdywuzkzPU7KKjtVRyswDiUHYZYlFmYlJOalQbkpqcmZxZn5eCEjME0ldSmVeYm5mMrJQeX5RdlpOfjlCrBYAD1ouqHEAAAA=',
    },
})
Record({
    $id: Now.ID['8bc3b7a147073a1051a3e84d416d431d'],
    table: 'sys_hub_flow_logic_instance_v2',
    data: {
        block: '6567a19b4787f21051a3e84d416d43a1',
        flow: '5e65888247fca21051a3e84d416d43d3',
        logic_definition: 'df4e1945c3e232002841b63b12d3ae3e',
        order: '6',
        outputs_assigned: 'approved,has_manager',
        parent_ui_id: '0f5e1b49-d578-480b-9397-c43934e7be80',
        ui_id: '90f333d8-cc67-49cd-9a03-1ad5f23abe6b',
        values: 'H4sIAAAAAAAA/+1VTY/aMBD9K5XPhJIPIHBDqlCRdrtSl+5lVUUTewJWHTsbO7AU8d87JgGqLa3aqqp66Cnx85uZNy8zyp6ZxlWNs0szs1auNJs+7lmhzPbGrCRfaOtAc7zf2YVgU8aHHFKeQDIuOEThYBhCjGkiknAkkjgXrMek5w3Ej3gjIJ6GEokJVVWbDfrIDajGQyG9C2krBbuHDnI1PXqMr6USNXqRH3usgppyOKzZdP/iyu0qzBTkqCh4ScGv56As/oK8U/Dsou9bxb4MIbkxCkETYGrh5YQ9hs8OtSDWtPCVe6wELcCZendGagRxp9UFWEvtKB3z5GcrP1PuZOB5BVJnHNu78zHrTGphvjaS413lpNEt4iBXXQw3qin1u7YBby8W0Ch3speQxlI+rLxmL6JTVNyvzfb9qeBc6mN73aUyHNT5BM7VMm8cWv85Grl86U0L3Vz7KKiwpLJZSd5Kvcq8wfJYipSX/ZWiQ98PJUn0Q9oH7tvsk6HQnxP+5gg/QC19z7eUhoJ9yQ9aPjV4nN0JDuMUizRI+SgOkvFoEKSQ8CAeQDiJQkG3OTsc/c2eGt9Z61TnSdbaSgTLa1m5GUnYYNf+ofcHlmaS82HC0+g6T+BlBNdgySsNq2OXf29vfkLhKfgt2Fe3Z4lXdX9ve6L/2/PvbU80hniYYBikCYggGU54kEM0CRDTyTiK81Eowt/eHpo8qf1fqJ3CTaekOwrk0pLgpccWX/HEjubK79sF2pr6k2/1gh2+APUU+mLjBgAA',
    },
})
Record({
    $id: Now.ID['b2c377a147073a1051a3e84d416d43fb'],
    table: 'sys_hub_flow_logic_instance_v2',
    data: {
        block: 'a167a19b4787f21051a3e84d416d439c',
        flow: '5e65888247fca21051a3e84d416d43d3',
        logic_definition: 'af4e1945c3e232002841b63b12d3ae3e',
        order: '2',
        parent_ui_id: '484d2041-7cab-442c-bf85-50a3b744d3af',
        ui_id: '69a90f82-d979-438c-8d97-1f939020a772',
        values: 'H4sIAAAAAAAA/+2UXWvbMBSG/0rRtTG204S1d2VbobA0YwmFMYo5lo8TMVnyJDkfC/nvO7LsNKwJK2OXu4ve8/We44fsmW5d0zq70HfWiqVit9+eIyaU1+j3nimokd0yrlUpnNAq74SIrUG2PjAFBUs0V7gVlkoiVgrbSNg9XYrzlZClwX5SA4b6OTTsdv9byO0azCUUKKnN3BmhllQuSnpVCVTpDU/5KJuMsiTJ3l2nxWRUpFk5AoQR5Q2F7wfjV586Jbq4kZ9Huh0maVN6W2kSMdw6VCXS6AqkxYjVoEpw2uyOikEoZ0q+CCuhHLVjPnlrxU/qnY3HPrFC2pFjCB6feX+4IPOVFhxnjTcYFAeF7Gu4lm2tHsMe/uRYQSvdcHJSWkv9sPGmvYveUjVf6c2XYeC9UN2CfVBqDvL4AkdnKFqH1n8YlFhTo7yGpqHj5I3Ra9EVk5c6Xkp6xJXUGxrqKYqBe+Mx3Qjie9I/dPITGOG3mFIbKg42C7CC5x1x1M4ZWuHQnSX/0XpDYcF+lTxcgxIsN6JxdzRnjb3rQ/Qa1xNS9/vO4bo3EdeBzMPhYf44W3ycfl58fY3v24r+BdM3MK7GaTI+z/T15BzTZ2i+DHL2B5D96d/IcZIk/0E+BVnYPADZ79YN/2uOnz20YYIN3JTIhSUjC689DP/OPrAjAAQ/lTbafPcrvGiHX0vuxqvnBQAA',
    },
})
Record({
    $id: Now.ID['c3c3b7a147073a1051a3e84d416d4321'],
    table: 'sys_hub_flow_logic_instance_v2',
    data: {
        block: 'e567a19b4787f21051a3e84d416d43a3',
        flow: '5e65888247fca21051a3e84d416d43d3',
        logic_definition: 'd176605ea76103004f27b0d2187901c7',
        order: '8',
        parent_ui_id: '0f5e1b49-d578-480b-9397-c43934e7be80',
        ui_id: '2111cb4a-8523-4aad-920f-e22d174fabf0',
        values: 'H4sIAAAAAAAA/6tWyi8tKSgtKQ7JdywuzkzPU7KKjtVRyswDiUHYZYlFmYlJOalQbkpqcmZxZn5eCEjME0ldSmVeYm5mMrJQeX5RdlpOfjlCrBYAD1ouqHEAAAA=',
    },
})
Record({
    $id: Now.ID['c7c3b7a147073a1051a3e84d416d4327'],
    table: 'sys_hub_flow_logic_instance_v2',
    data: {
        block: 'ad67a19b4787f21051a3e84d416d43bf',
        flow: '5e65888247fca21051a3e84d416d43d3',
        logic_definition: 'df4e1945c3e232002841b63b12d3ae3e',
        order: '10',
        outputs_assigned: 'approved,has_manager',
        parent_ui_id: '7fbb2e1d-e754-4aa4-b62b-928440d2157e',
        ui_id: '49d41d17-6a6b-4f7e-9c1b-90cbefcf5f08',
        values: 'H4sIAAAAAAAA/+1VwW7bMAz9lUHnOIttJbFzKzAUC9CuwJr1MgwBLdGJMEVyLTlpVvTfR9lOMrTZUAw97LCb9fRIPj6R8COzja8a7xb2wjm1Mmz29ZGV2u6u7EqJuXEejMDbvZtLNmM8F5AJDnxaCkji0TiGFDMueTyRPBWSDZgKvJH8E28CxDOwQWJCVdV2iyFyC7oJ0Ii+pXKVhv1dD5WgHRIs1krLGoPKbwNWQU1JPNZs9vjsyu8rXGooUFP0om7w/WWf4rX6DsEXJ4EvJYcyhBTWagRDgK1lkBMPGD54NJJYs1b8gG3ASPC23h+RGkHeGH0C1sp4SscC+cGpH5SbjwKvROpMYHd3PC57lzpYrK0SeFN5ZU2HeCh0HyOsbjbmU9dA8BdLaLQ/+EtI4ygfVkFzENErKm/Xdvf5UPBSmba9/lJbAfp4Au9rVTQeXXiORi2ee9NBV+ceBTVuqOxyQ94qs1oGg1VbipRvhitNh2GYSpIYpnQIIrQ5JENheEn4hxa+g1qFnq8pDQWHkl+Mum+wHd4cx2mGZRZlYpJGfDoZRRlwEaUjiPMklnRbsKfW3+V9EzrrnOo9WXa2EsGJWlX+giRssW//afAGW5MXYsxFlpznSTyN4BoceWVg1XZ5WJz45eJ4cvkN9+YVCg/BH8G9uz5KPKv7d9uT/N+ef297kimkY45xlHGQER/nIiogySPELJ8maTGJZfzX20OTp0z4DXVTuO2V9EeJQjkSvAjY/Bee3NNchX07QTtbfw+tnrCnnyMtXPbkBgAA',
    },
})
Record({
    $id: Now.ID['cbc3b7a147073a1051a3e84d416d432d'],
    table: 'sys_hub_flow_logic_instance_v2',
    data: {
        block: '2967a19b4787f21051a3e84d416d43c3',
        flow: '5e65888247fca21051a3e84d416d43d3',
        logic_definition: 'd176605ea76103004f27b0d2187901c7',
        order: '13',
        parent_ui_id: '69a90f82-d979-438c-8d97-1f939020a772',
        ui_id: 'dd130e76-5e74-49cf-a04d-a6973342486e',
        values: 'H4sIAAAAAAAA/6tWyi8tKSgtKQ7JdywuzkzPU7KKjtVRyswDiUHYZYlFmYlJOalQbkpqcmZxZn5eCEjME0ldSmVeYm5mMrJQeX5RdlpOfjlCrBYAD1ouqHEAAAA=',
    },
})
Record({
    $id: Now.ID['27c3f7a147073a1051a3e84d416d43bb'],
    table: 'sys_hub_flow_logic_instance_v2',
    data: {
        block: 'e567a19b4787f21051a3e84d416d439f',
        flow: '93ca408a47fca21051a3e84d416d43b5',
        logic_definition: 'af4e1945c3e232002841b63b12d3ae3e',
        order: '5',
        parent_ui_id: '69a90f82-d979-438c-8d97-1f939020a772',
        ui_id: '0f5e1b49-d578-480b-9397-c43934e7be80',
        values: 'H4sIAAAAAAAA/+1Vy27bMBD8lYBnWdDDUmzfDAcBCiQN0AS5tIGwoiibKEWqJGXHFfzvXephG02CNmiOvZmzr5nVDtwS1di6seZBLY3ha0kWX588wqXD8HdLJFSMLAhVsuCWK5l1gEe2IBoXuAUJa6YvlnWt1ZYZDBXc1AL2j29n0A0XhWbDtBo09rRMk0X7W4gX2KAMoAznNKRxlMZREESzaZincR5GRQwMYmwoIGcCU1cjzYubDvHe5G/3tcON1Vyuh/fN0OV+BJUuHKsw8Ah7tkwWDPmUIAzzSAWyAKv0/ohoBsWdFCdgw6XFdsQlPxv+EwdGSeISS4YSKeuDx2c2bK6HyyuwgFQaahs9pNKN4pSZfjkFK6ERdnWO9Ql3tZPal1jIxVitRFPJz/1GyLHB+KEQaQySYLVT6qgPOsr7jdp9GVlec9ltZQgKRUEcX2Bxd3ljHZ+WMMEqbJRVUNe40cwdAO+KkUvlrwU+/FKoHQ511+cDdcR9XCz414hfdfAjaO5U3GIbLO5p5mA4zbpLxXa4JkYOHjF7sxJgzEkkbjf70TiKveRBXNbvx5VQzWu7xMlbNug4eC8P/+zm2zans2h+WU4n8xmdTaZxkk8gifPJZT5N05SmURhHPnQHDyIzFiw7HL41QRAXPYqH9MIoH9X2fe6aQ1ImYZC87q5p+pq7XvHVOy0V/cFS7nv+paOCIPhvqX+2FDdZb4RBWzf8Ax315OzTzzzumnKD1B4c9mn8x3GBPR4Xp+fQTunvTtQJO/wCQiidrrsGAAA=',
    },
})
Record({
    $id: Now.ID['27c3f7a147073a1051a3e84d416d43c5'],
    table: 'sys_hub_flow_logic_instance_v2',
    data: {
        block: '6567a19b4787f21051a3e84d416d43a5',
        connected_to: '0f5e1b49-d578-480b-9397-c43934e7be80',
        flow: '93ca408a47fca21051a3e84d416d43b5',
        logic_definition: '1f781bf3c32232002841b63b12d3aee6',
        order: '9',
        parent_ui_id: '69a90f82-d979-438c-8d97-1f939020a772',
        ui_id: '7fbb2e1d-e754-4aa4-b62b-928440d2157e',
        values: 'H4sIAAAAAAAA/6tWyi8tKSgtKQ7JdywuzkzPU7KKjtVRyswDiUHYZYlFmYlJOalQbkpqcmZxZn5eCEjME0ldSmVeYm5mMrJQeX5RdlpOfjlCrBYAD1ouqHEAAAA=',
    },
})
Record({
    $id: Now.ID['2bc3f7a147073a1051a3e84d416d43a5'],
    table: 'sys_hub_flow_logic_instance_v2',
    data: {
        block: '2167a19b4787f21051a3e84d416d439a',
        flow: '93ca408a47fca21051a3e84d416d43b5',
        flow_variables_assigned: 'manager',
        logic_definition: '4f787d1e0f9b0010ecf0cc52ff767ea0',
        order: '1',
        parent_ui_id: '484d2041-7cab-442c-bf85-50a3b744d3af',
        ui_id: 'ce6b8ecc-6562-40b7-bed7-8b796ddbe375',
        values: 'H4sIAAAAAAAA/+1WTU8bMRD9K5FPICWrJBsgpCcEpYoERWqASxetHHs2ser1LrY3kEb5753Zj3wARb1Wyl5iP4/fzLwZj7JiWeHzwrv77MI5NTNs9POpzZQhDNcrlujs5SabKTE2znMjYLJ0Y8lGbHgu+FAM+OAsEbzf6570eAjDgRz0TuUgPA8Z0pBdyg2fgcWt4SnsAQuuC0JwKZXLNV8+bpGcW7T3aDhaMTFXWlpowiNeIT/zfyaQQvMpaDS9/XsIfpkTYCEBpBdQQzf1zR87eGYlBdNtM3j1YCRgFAnXDtrEJ7nP7HKDWODyzugtMFfGV4ml/NWp3+g17Ld3HI+YW7q4cGVYGziuhcHjh+ooueKeT7wthC9srZWYZ0qAq9SRkPBC+8tdrDK4y73KTHXF86l+41RkukjN90oitiHaqQkaxhJySp6yqVNLJvPsZaPUtTKlTvWhzgTXO6bArZhfK9BUw7Icbca9t2paeIp2xQp1/74oFfhRWUBDitHEKc9zZWZxbrOFKiPAhNJgpnETUBdj5NThARekQoAF48E14lcl/MitIklukaZUo1APRj0XUDZ7/6Q7GIpk2BlCv9sZTE/DzlD0ZAf6Ce+FA3nSDYds3SY1LzV3bisiJhE/FyRBJWktXlzVga4Iq3J/gUEt8ArWFRqMxGg6FZefGbLIL7htKaJWftmKim43lK1ExmWarpiWClTvOrCAeTnf/MZJZr9EpoXfLgkJPr5qqBo0oOcRUOHwSuW1jrGmUEnr6EOKmihiX9NcZ0uAiB23VtUl+mqadw5T7nAKlE0aKxnse1u3ABvr32hK/A1dQ7NNf2YvcuohsPTgGhoDL61v1Eo/QOAgmIDAx3dEh/2z5glVu+MdHfa5ghn4ozqM473ULeBbNm9cN6FRgivSOvK1XcQiVqqPYUeGrdfrJxqmVQMfxvZhbB/G9mFsH8b2fzG2JQjlsLHvqYvHzf9uOlhitWh+b6GXzP6ihthi6z8Pyva3wQsAAA==',
    },
})
Record({
    $id: Now.ID['2fc3f7a147073a1051a3e84d416d43b5'],
    table: 'sys_hub_flow_logic_instance_v2',
    data: {
        block: 'a167a19b4787f21051a3e84d416d439c',
        flow: '93ca408a47fca21051a3e84d416d43b5',
        logic_definition: 'af4e1945c3e232002841b63b12d3ae3e',
        order: '2',
        parent_ui_id: '484d2041-7cab-442c-bf85-50a3b744d3af',
        ui_id: '69a90f82-d979-438c-8d97-1f939020a772',
        values: 'H4sIAAAAAAAA/+1VXWvbMBT9K0XPxthOE9a8lXSFQtOMJRTGKOZalhMxWfIkOR8z+e+7suwktClraR/3Fp37dc7xvaQhqrZVbc1CXRvDl5KMfz4FhEuH4e+GSCgZGROqZM4tVzJtgYCsQdQuMAUJS6Yv2JYbLAlIzk0lYPf4WpyuuMg16yZVoLGfZZqMm2chnmN5EUERX9GYDpLRIImi5MtlnI0GWZzkA2AwwIYCMiYwddJTvLhvkeBV7nZXOdxYzeWye993XeY9qHTuWMVRQNjWMpkz5FOAMCwgJcgcrNK7A6IZ5DMpjsCKS4vtiEveGv4HBybDoUssGEqkzAcPz7TzzcPFDVhAKjW1te5S6Upxyow3J2cF1MJOTjGfMKucVF9iIRN9tRJ1KR+8I+TQoP9MiNQGSbDKKXXUOx3FfKU233uWt1y2rnRBoSiIwwssepfV1vFpCBOsxEZpCVWFjqaVVmveFiOXMlwKfISFUBsc6jYvBOqIh2gshLeI37TwI2juVEyxDRZ7mhkYTtN2S7Ed2sTIPiBmZyYCjDmKRHfT37Wj6CV34lLvjyuhmlf2GievWadjH7xc+pN9b5qW87qjFZZ+v/f7u/nDbPF1+m3x4+URvK3ofZdxBcNiGEfD85dxOTp3GWdu4p3nkPzjHNy3eOM1RFH0/xw+fA7cpH6JO23t8E+8hie3+n7mwWvKDVJbOOyu/6dwgR0uF6en0EbpX07UEdv/BV0EbExzBgAA',
    },
})
Record({
    $id: Now.ID['63c3f7a147073a1051a3e84d416d43d8'],
    table: 'sys_hub_flow_logic_instance_v2',
    data: {
        block: '6d67a19b4787f21051a3e84d416d43c8',
        flow: '93ca408a47fca21051a3e84d416d43b5',
        logic_definition: 'd176605ea76103004f27b0d2187901c7',
        order: '17',
        parent_ui_id: '35a7d726-0a8c-4f0b-8022-acd10edf01f0',
        ui_id: '6b9229bb-5988-4109-9852-fd21e9bd9eaf',
        values: 'H4sIAAAAAAAA/6tWyi8tKSgtKQ7JdywuzkzPU7KKjtVRyswDiUHYZYlFmYlJOalQbkpqcmZxZn5eCEjME0ldSmVeYm5mMrJQeX5RdlpOfjlCrBYAD1ouqHEAAAA=',
    },
})
Record({
    $id: Now.ID['6bc3f7a147073a1051a3e84d416d43d1'],
    table: 'sys_hub_flow_logic_instance_v2',
    data: {
        block: 'e167a19b4787f21051a3e84d416d43c5',
        connected_to: '69a90f82-d979-438c-8d97-1f939020a772',
        flow: '93ca408a47fca21051a3e84d416d43b5',
        logic_definition: '1f781bf3c32232002841b63b12d3aee6',
        order: '14',
        parent_ui_id: '484d2041-7cab-442c-bf85-50a3b744d3af',
        ui_id: '35a7d726-0a8c-4f0b-8022-acd10edf01f0',
        values: 'H4sIAAAAAAAA/6tWyi8tKSgtKQ7JdywuzkzPU7KKjtVRyswDiUHYZYlFmYlJOalQbkpqcmZxZn5eCEjME0ldSmVeYm5mMrJQeX5RdlpOfjlCrBYAD1ouqHEAAAA=',
    },
})
Record({
    $id: Now.ID['6fc3f7a147073a1051a3e84d416d43a1'],
    table: 'sys_hub_flow_logic_instance_v2',
    data: {
        block: '2167a19b4787f21051a3e84d416d4398',
        flow: '93ca408a47fca21051a3e84d416d43b5',
        logic_definition: 'e9060aa2c3013010ace8b740ad40dd51',
        order: '0',
        ui_id: '484d2041-7cab-442c-bf85-50a3b744d3af',
        values: 'H4sIAAAAAAAA/6tWyi8tKSgtKQ7JdywuzkzPU7KKjtVRyswDiUHYZYlFmYlJOalQbkpqcmZxZn5eCEjME0ldSmVeYm5mMrJQeX5RdlpOfjlCrBYAD1ouqHEAAAA=',
    },
})
Record({
    $id: Now.ID['6fc3f7a147073a1051a3e84d416d43cb'],
    table: 'sys_hub_flow_logic_instance_v2',
    data: {
        block: '6d67a19b4787f21051a3e84d416d43c1',
        flow: '93ca408a47fca21051a3e84d416d43b5',
        logic_definition: 'd176605ea76103004f27b0d2187901c7',
        order: '12',
        parent_ui_id: '7fbb2e1d-e754-4aa4-b62b-928440d2157e',
        ui_id: '490a81f9-ad5f-4090-8b6f-fbc220cef2a6',
        values: 'H4sIAAAAAAAA/6tWyi8tKSgtKQ7JdywuzkzPU7KKjtVRyswDiUHYZYlFmYlJOalQbkpqcmZxZn5eCEjME0ldSmVeYm5mMrJQeX5RdlpOfjlCrBYAD1ouqHEAAAA=',
    },
})
Record({
    $id: Now.ID['abc3f7a147073a1051a3e84d416d43be'],
    table: 'sys_hub_flow_logic_instance_v2',
    data: {
        block: '6567a19b4787f21051a3e84d416d43a1',
        flow: '93ca408a47fca21051a3e84d416d43b5',
        logic_definition: 'df4e1945c3e232002841b63b12d3ae3e',
        order: '6',
        outputs_assigned: 'approved,has_manager',
        parent_ui_id: '0f5e1b49-d578-480b-9397-c43934e7be80',
        ui_id: '90f333d8-cc67-49cd-9a03-1ad5f23abe6b',
        values: 'H4sIAAAAAAAA/+1VXU/bMBT9K5Ofk675aJv2DYHQkGBIo+Nlmqob+6a1cOxgO4Wu4r/vuklbNNDEJPYy7anx8bn2Oef6qltmWt+03s3NiXNyqdns25ZVyjxcmqXkF9p50BxvNu5CsBnjIw4FzyGfVBzSZDhKIMMiF3kyFnlWChYxGXhD8TveGIinoUZiQtNYs8ZQuQbVBiihbyFdo2Bz20Pe0k/E+EoqYTGI/B6xBiyd4dGy2ZZJTR8a1KXUd1TwgvxWWQpKVEQ9Oep6qdRvmoCUxigE3QOXfeWctH48B+WCYmNF0JdEDB89akHlsyrsRawGLcAbuzkgFkFca3UEVuSqM1PDo5M/6NJ8GHgVkjGO3d5huehT6+DqDDzcUHLctxb3mRjJ0XWRCKygVf70OdYRrhsvje5KPJRqX21UW+vPXRzscMC+SYS0jkRgE4wG5b2N6mZlHr7sVZ5Lvcuk31SGgzqswHsry9YHPVvWyvmvSXfQq1mjwpquXdTUKamXi9AuubuKlNeDpaLFIDxtkhie+gB4sDmgLsDgnPCzHXwLVgbPV3QMFYcrv2p53+JuAqY4ygqsirjg4yzOJ+NhXEDO42wIyTRNBO2W7ClibuNOFTh3TIvatLhvg9cuuz6lRRd0KOFWNv6ERK2xD+QpeodhnJZ8lPMifZ0n8PjEV+AoPQ3Lne+/P49vULafx0/gPlwdpL2q94+nMv0/lf/IVKYTyEY5JnGRg4jz0ZTHJaTTGLGYTtKsHCciecepDO9Xh3/Nrj3rXtuhg1w6sjAP2MUzntjQuw1zfIQejL0L5o/Y009mkf9BkwcAAA==',
    },
})
Record({
    $id: Now.ID['e3c3f7a147073a1051a3e84d416d43c2'],
    table: 'sys_hub_flow_logic_instance_v2',
    data: {
        block: 'e567a19b4787f21051a3e84d416d43a3',
        flow: '93ca408a47fca21051a3e84d416d43b5',
        logic_definition: 'd176605ea76103004f27b0d2187901c7',
        order: '8',
        parent_ui_id: '0f5e1b49-d578-480b-9397-c43934e7be80',
        ui_id: '2111cb4a-8523-4aad-920f-e22d174fabf0',
        values: 'H4sIAAAAAAAA/6tWyi8tKSgtKQ7JdywuzkzPU7KKjtVRyswDiUHYZYlFmYlJOalQbkpqcmZxZn5eCEjME0ldSmVeYm5mMrJQeX5RdlpOfjlCrBYAD1ouqHEAAAA=',
    },
})
Record({
    $id: Now.ID['e3c3f7a147073a1051a3e84d416d43d5'],
    table: 'sys_hub_flow_logic_instance_v2',
    data: {
        block: 'a167a19b4787f21051a3e84d416d43c7',
        flow: '93ca408a47fca21051a3e84d416d43b5',
        logic_definition: 'df4e1945c3e232002841b63b12d3ae3e',
        order: '16',
        outputs_assigned: 'approved,has_manager',
        parent_ui_id: '35a7d726-0a8c-4f0b-8022-acd10edf01f0',
        ui_id: 'cdf37f8f-9a6b-45d0-b70f-fac11f92724f',
        values: 'H4sIAAAAAAAA/+1VXWvbMBT9K0PPcRZ/JHHyVlrCAu0Ka9aXMcK1dJ2IypIryWmz0P++q9hJylpGB2UPY2/W0bnSOefq4h0zja8b7xbmzDm50mz6bcdKZR4uzUryuXYeNMebrZsLNmUTwSHnGWTjkkMSD4YxpJhnIotHIkvLmPWYDLzBb3kjIJ6GCokJdW3NBgUhG1BNgAb0LaSrFWxvO6gE5ZBgvpZKWAwqv/dYDZYO8WjZdMekpg8N6lLqO6p4QX6rLgUFKqKenYS9lOq3dUAKYxSC7oDLrnJhG/w46xQbK4K+uMfw0aMWVD7du+mxCrQAb+z2iFgEca3VCViTq9ZMBY9O/qBLs0HglUjGOLZ7x+Wyi62FywvwcONtw31j8ZCJkRxdG4nAEhrlz59jLeG69tLotsRDoQ7VRjWV/tzGwY4HHLpESONIBNbBaFDe2Shv1ubhy0HlTOp9Jt2mMhzUcQXeW1k0PujZsUYufk26hV7NGhVWdO2yok5JvVqGdsn9VaS86q8ULfrhbZPE8Nb7wIPNPnUB+jPCL/bwLVgZPF/RMVQcrvyq5X2D7QjgMM2xzKOcj9IoG48GUQ4Zj9IBxJMkFrRbsKcec1t3rsC5U1rUpuV9E7y22XUpLdugQwm3svZnJGqDXSBPvXeYxknBhxnPk9d5Ak9PfA2O0tOw2vv+CwP5BmmHgfwE7sPVUdurgv94LJP/Y/mPjGUyhnSYYRzlGYgoG054VEAyiRDzyThJi1Es4nccy/B+dfhvtu3ZdNqOHeTSkYVFwObPeGJL7zYM8gl6MPYumD9hTz8BsgZjzpUHAAA=',
    },
})
Record({
    $id: Now.ID['e3c3f7a147073a1051a3e84d416d43e8'],
    table: 'sys_hub_flow_logic_instance_v2',
    data: {
        block: '2167a19b4787f21051a3e84d416d43cb',
        flow: '93ca408a47fca21051a3e84d416d43b5',
        logic_definition: '35d60003e6022010a5e40cdd1254dd23',
        order: '18',
        ui_id: 'e551864f-9a56-4c4e-ab04-51add5bf61f4',
        values: 'H4sIAAAAAAAA/+1ZXW/iOBT9K6uoj5RNCgyUt6pdpK6mRVqYedlUkWMb6hmTZGyHtoP47+NrOyYhzKymy2irFRKK4nv9ce851ydx2AR5qYpSyXl+JSVbZsH474dOwDKw6ftNkKEVDcZBkkiFVCmTJOgEa8RLMG7iYE2FZHkWB+M4iLphHHTiQFLBEGdfkdKeSS5WSBn/n7PpvemA81XB6fM0/UQxuDZgItTeneF1dWNGfUJr1OUoW3ZnSrBsaWY4WxtfHGy3urWiUqLlK8dv9wOa4Ue6QnaOCc+fbigAQ8V4cnN1Pb+d3s/mV/MPs0bccXCbKbqkwuVHaPdswSgnyQJhqqTtPGOwzB0qJmA0wzZxHAclm78U9D1KKYfmGC7VfDHMqC+CIpLkGX/xPZQoqXc/skwZT1Zy3tlN6nuzvfkIXaCSq8Rw6Xt5N8JAXkKFyEVia+TwwrwR9TXAUblWKCNI5WIX8gJxufPngtiAjC+qjXtOOM2W6tE7+yFct/rXoFtDuuPUmf8t8G7GY+Eum9O1YfcDXwn5nUPjdahf/Bj10OMOwP9gN3TPlM761aA7KahiwXlipgPx8X32tt+xCMqbS//Dvmhif2Uo+21mpLEdUeJ0Jdmt0Q7wiLsk9M6SfcjYl5LeEu8c0R5Ne5eDc3x5GZ730ZCcpyOCzsNRhCKEUTqkqSd7q1WeMFlw9PLxJPYnsT+J/UnsT2L/PxZ7/Mg4ETSrv/ODsmlXgYRuKyo00YHZboZjzTUYagTrIU7I9KgDBa79AIbe1v4E0X7MaIvEghUK4F5riwGoMuoVtx0jbyJD/D3LPtshtfD18aVkN3ZSCE13YD4qU2i8FSwjdprKc20zb+KgDk3WTtxQGIyjTkCfFc0IJT4Hz763QPVMdfEEY0CmYwrYhqIZl+yrXrAfQrcF1dlhB5BvJg48a17cIIW0opVYlYJWwOQMU2lxsY1pAcxYt0Ipr3rmvFxl9zZl4MXujRovznLTIqyUOhJaQLIQvsttMXvMn/6qQp2wzODinDzHiPsWUlo401JBoECwfJHXHEm5i0annHwpYYiNxC2W2ES2B4tm2/Gl7B4XP1nN9unwxopZVkE1atmHul/Kdz7zFhTqwISt1F05XxyvnMNTQb+2oB/26reh2idpPknzW6zkk8yeZPatFueDYzJcDC/QAF0M0qh3EUZh+i6iSN/0hqMID/uXNab/gOp0p4Ad3Y3v445xexDYY3xaGSsxAp5+inNnOED66JikO9auj1gIx+XbqUgd6KaueKjrJ0xtb54ttZ9yuoKiWKGi0NsxKUS+ZiYK+FjUXXLd6C70eVhHDwfirhWqrqYIdXfn5I9IMIBDi1yhB/+K91iawQKk9h9M1JZDI5j7+va994ZqBxAyDKPREOPeOwo7YDAY9NJhP0SkHxJCcG0H7IJoReUqP81zTlG2V/pzHdfvE8jo15T/ER/Hxy7+hcv6sBRW3v9eD7/72rl2te3xwQw+Bc/Bdlv9WwiOF10TDNdNT7n4DJtnZ9t+A3wUxSd3HAAA',
    },
})
Record({
    $id: Now.ID['e7c3f7a147073a1051a3e84d416d43c8'],
    table: 'sys_hub_flow_logic_instance_v2',
    data: {
        block: 'ad67a19b4787f21051a3e84d416d43bf',
        flow: '93ca408a47fca21051a3e84d416d43b5',
        logic_definition: 'df4e1945c3e232002841b63b12d3ae3e',
        order: '10',
        outputs_assigned: 'approved,has_manager',
        parent_ui_id: '7fbb2e1d-e754-4aa4-b62b-928440d2157e',
        ui_id: '49d41d17-6a6b-4f7e-9c1b-90cbefcf5f08',
        values: 'H4sIAAAAAAAA/+1VXU/bMBT9K5Ofm675aJv0DYHQkGBIo+MFTdWNfdNaOHawnUJX8d933aQtGmhiEk/T3uLje+1zzvVRtsy0vmm9m5sT5+RSs9ndllXKPF6apeQX2nnQHG827kKwGcsKDjnPIJtWHJJ4NI4hxTwTWTwRWcoFGzAZ6kbiT3UToDoNNVIlNI01awyda1BtgEb0LaRrFGxue6gC5ZBgvpJKWAwsfwxYA5YO8WjZbMukpg8N6lLqe+p4VfxeXgpKVFR6ciT2mqrfNAEpjVEIugcu+865bfHzec/YWBH4xQOGTx61oPbZTs2A1aAFeGM3B8QiiGutjsCKVHVianhy8iddmo1CXYUkjGO3d1guets6uDoDDzfetty3FveeGMnRdZYIrKBV/vQl1hVcN14a3bV4KNW+26i21l87O9jhgP2UCGkdkcAmCA3MexnVzco8ftuzPJd650m/qQwHdViB91aWrQ98tqyV89+d7qA3vUaFNV27qGlSUi8XYVxydxUxr4dLRYtheNtEMbz1IfAgc0hTgOE54Wc7+BasDJqv6BhqDld+1/KhxV0EChynOVZ5lPNJGmXTySjKIeNROoK4SGJBuyV7HjC3cacKnDu6RWNaPLRBa+dd79KiMzq0cCsbf0Kk1tgb8jz4gDQWJR9nPE/erhN4fOIrcOSehuVO9z6Q8etA0qv6iDy+g9k+j1/Afbo6UHuT71+nMvmfyn8klckU0nGGcZRnIKJsXPCohKSIEPNimqTlJBbxB6YyvF8dfpvdeNY9t8MEuXQkYR6wixd1YkPvNuT4CD0aex/EH7HnX6WK0M+UBwAA',
    },
})
Record({
    $id: Now.ID['ebc3f7a147073a1051a3e84d416d43ce'],
    table: 'sys_hub_flow_logic_instance_v2',
    data: {
        block: '2967a19b4787f21051a3e84d416d43c3',
        flow: '93ca408a47fca21051a3e84d416d43b5',
        logic_definition: 'd176605ea76103004f27b0d2187901c7',
        order: '13',
        parent_ui_id: '69a90f82-d979-438c-8d97-1f939020a772',
        ui_id: 'dd130e76-5e74-49cf-a04d-a6973342486e',
        values: 'H4sIAAAAAAAA/6tWyi8tKSgtKQ7JdywuzkzPU7KKjtVRyswDiUHYZYlFmYlJOalQbkpqcmZxZn5eCEjME0ldSmVeYm5mMrJQeX5RdlpOfjlCrBYAD1ouqHEAAAA=',
    },
})
Record({
    $id: Now.ID['93ca408a47fca21051a3e84d416d43b5'],
    table: 'sys_hub_flow_snapshot',
    data: {
        access: 'public',
        active: 'true',
        attributes:
            'browserActivatedIn=chrome,integrationActivatedIn=standalone,labelCacheCleanUpExecuted=true,viewActivatedIn=naturalLanguage',
        authored_on_release_version: '25000',
        callable_by_client_api: 'false',
        category: '{}',
        flow_priority: 'MEDIUM',
        internal_name: 'subflow_identity_manager_approval',
        label_cache:
            '[{"name":"bc8297f4-98c8-435b-a53b-7b4666c62132.approval_state","label":"4 - Ask For Approval➛Approval State","reference_display":"Approval State","type":"choice","base_type":"choice","choices":[{"label":"-- None --","value":"","order":0.0},{"label":"Not Yet Requested","value":"not requested","order":1.0},{"label":"Requested","value":"requested","order":2.0},{"label":"Approved","value":"approved","order":3.0},{"label":"Rejected","value":"rejected","order":4.0},{"label":"Cancelled","value":"cancelled","order":5.0},{"label":"No Longer Required","value":"not_required","order":6.0},{"label":"Skipped","value":"skipped","order":7.0}],"usedInstances":{"0f5e1b49-d578-480b-9397-c43934e7be80":["condition"]},"attributes":{"element_mapping_provider":"com.glide.flow_design.action.data.FlowDesignVariableMapper"}},{"name":"e551864f-9a56-4c4e-ab04-51add5bf61f4.__status__.message","label":"17 - Top Level Catch➛Error Status➛Message","reference":"","reference_display":"","type":"string","base_type":"string","column_name":"","usedInstances":{"f4be4885-a7c4-4a6c-9aea-54689c482c04":["work_notes"]},"attributes":{}},{"name":"e551864f-9a56-4c4e-ab04-51add5bf61f4.__status__.code","label":"17 - Top Level Catch➛Error Status➛Code","reference":"","reference_display":"","type":"integer","base_type":"integer","column_name":"","usedInstances":{"f4be4885-a7c4-4a6c-9aea-54689c482c04":["work_notes"]},"attributes":{}},{"name":"subflow.request.request_for.full_name","label":"Input➛Request➛Request For➛Full Name","reference":"","reference_display":"Full Name","type":"string","base_type":"string","parent_table_name":"x_aleen_snguardian_identity","column_name":"full_name","usedInstances":{"c4b580eb-cde7-49ca-812e-8b142908b53b":["work_notes"]}},{"name":"flow_variable.manager.last_name","label":"Flow Variables➛Manager➛Last name","reference":"","reference_display":"Last name","type":"string","base_type":"string","parent_table_name":"sys_user","column_name":"last_name","usedInstances":{"23aafed8-aeab-4a3f-9cab-a70a9dd56fc9":["work_notes"],"a5e796eb-dad0-47a6-af0f-d07bcf678274":["work_notes"]}},{"name":"flow_variable.manager.first_name","label":"Flow Variables➛Manager➛First name","reference":"","reference_display":"First name","type":"string","base_type":"string","parent_table_name":"sys_user","column_name":"first_name","usedInstances":{"23aafed8-aeab-4a3f-9cab-a70a9dd56fc9":["work_notes"],"a5e796eb-dad0-47a6-af0f-d07bcf678274":["work_notes"]}},{"name":"subflow.request.task_effective_number","label":"Input➛Request➛Effective number","reference":"","reference_display":"Effective number","type":"string","base_type":"string","parent_table_name":"x_aleen_snguardian_request","column_name":"task_effective_number","usedInstances":{"23aafed8-aeab-4a3f-9cab-a70a9dd56fc9":["work_notes"]}},{"name":"subflow.request.approval","label":"Input➛Request➛Approval","reference":"","reference_display":"Approval","type":"choice","base_type":"choice","parent_table_name":"x_aleen_snguardian_request","column_name":"approval","choices":[{"image":"","label":"Not Yet Requested","used":false,"reference":false,"selected":false,"missing":false,"rawLabel":"Not Yet Requested","value":"not requested","parameters":{"name":"task","dependent_values":[""]}},{"image":"","label":"Requested","used":false,"reference":false,"selected":false,"missing":false,"rawLabel":"Requested","value":"requested","parameters":{"name":"task","dependent_values":[""]}},{"image":"","label":"Approved","used":false,"reference":false,"selected":false,"missing":false,"rawLabel":"Approved","value":"approved","parameters":{"name":"task","dependent_values":[""]}},{"image":"","label":"Rejected","used":false,"reference":false,"selected":false,"missing":false,"rawLabel":"Rejected","value":"rejected","parameters":{"name":"task","dependent_values":[""]}}],"usedInstances":{}},{"name":"flow_variable.manager.user_name","label":"Flow Variables➛Manager➛User ID","reference":"","reference_display":"User ID","type":"string","base_type":"string","parent_table_name":"sys_user","column_name":"user_name","usedInstances":{"c489bcb1-3f47-438c-92a1-82504c97e88b":["work_notes"]}},{"name":"subflow.request.number","label":"Input➛Request➛Number","reference":"","reference_display":"Number","type":"string","base_type":"string","parent_table_name":"x_aleen_snguardian_request","column_name":"number","usedInstances":{"c489bcb1-3f47-438c-92a1-82504c97e88b":["work_notes"],"23aafed8-aeab-4a3f-9cab-a70a9dd56fc9":["work_notes"],"a5e796eb-dad0-47a6-af0f-d07bcf678274":["work_notes"],"c4b580eb-cde7-49ca-812e-8b142908b53b":["work_notes"]}},{"name":"subflow.request","label":"Input➛Request","reference":"x_aleen_snguardian_request","reference_display":"Request","type":"reference","base_type":"reference","column_name":"","usedInstances":{"c489bcb1-3f47-438c-92a1-82504c97e88b":["record"],"bc8297f4-98c8-435b-a53b-7b4666c62132":["record"],"23aafed8-aeab-4a3f-9cab-a70a9dd56fc9":["record","work_notes"],"a5e796eb-dad0-47a6-af0f-d07bcf678274":["record"],"c4b580eb-cde7-49ca-812e-8b142908b53b":["record","work_notes"],"f4be4885-a7c4-4a6c-9aea-54689c482c04":["record"]},"attributes":{"uiType":"reference","uiTypeLabel":"Reference","element_mapping_provider":"com.glide.flow_design.action.data.FlowDesignVariableMapper","uiUniqueId":"1046d325-5948-4369-b125-b1035a8963f0","sourceUiUniqueId":"","sourceType":"","sourceId":""}},{"name":"flow_variable.manager","label":"Flow Variables➛Manager","reference":"sys_user","reference_display":"User","type":"reference","base_type":"reference","usedInstances":{"69a90f82-d979-438c-8d97-1f939020a772":["condition"],"c489bcb1-3f47-438c-92a1-82504c97e88b":["assigned_to"],"bc8297f4-98c8-435b-a53b-7b4666c62132":["approval_conditions"]},"attributes":{"sourceUiUniqueId":"","sourceType":"","sourceId":"","uiUniqueId":"25048cf8-8e20-4b63-8c1d-e2fa134d5038"}}]',
        master: 'true',
        name: 'Alert Subflow Identity Manager Approval',
        parent_flow: '5e65888247fca21051a3e84d416d43d3',
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
    $id: Now.ID['8cda808a47fca21051a3e84d416d43f8'],
    table: 'sys_flow_subflow_plan',
    data: {
        plan: 'com.snc.process_flow.engine.ProcessPlan@139520af',
        plan_id: '5e65888247fca21051a3e84d416d43d3',
        snapshot: '93ca408a47fca21051a3e84d416d43b5',
        sys_domain: 'global',
        sys_domain_path: '/',
    },
})
Record({
    $id: Now.ID['cdca8c4a47fca21051a3e84d416d437c'],
    table: 'sys_hub_flow_variable',
    data: {
        active: 'true',
        array: 'false',
        array_denormalized: 'false',
        attributes:
            'element_mapping_provider=com.glide.flow_design.action.data.FlowDesignVariableMapper,uiType=reference,uiTypeLabel=Reference,uiUniqueId=25048cf8-8e20-4b63-8c1d-e2fa134d5038',
        audit: 'false',
        calculation: `(function calculatedFieldValue(current) {

	// Add your code here
	return '';  // return the calculated value

})(current);`,
        choice_table: 'sys_user',
        display: 'false',
        dynamic_creation: 'false',
        element: 'manager',
        element_reference: 'false',
        function_field: 'false',
        internal_type: 'reference',
        label: 'Manager',
        mandatory: 'false',
        max_length: '32',
        model: '5e65888247fca21051a3e84d416d43d3',
        model_id: '5e65888247fca21051a3e84d416d43d3',
        model_table: 'sys_hub_flow',
        name: 'var__m_sys_hub_flow_variable_5e65888247fca21051a3e84d416d43d3',
        order: '0',
        primary: 'false',
        read_only: 'false',
        reference: 'sys_user',
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
    $id: Now.ID['67ca808a47fca21051a3e84d416d431d'],
    table: 'sys_hub_flow_variable',
    data: {
        active: 'true',
        array: 'false',
        array_denormalized: 'false',
        attributes:
            'element_mapping_provider=com.glide.flow_design.action.data.FlowDesignVariableMapper,uiType=reference,uiTypeLabel=Reference,uiUniqueId=25048cf8-8e20-4b63-8c1d-e2fa134d5038',
        audit: 'false',
        calculation: `(function calculatedFieldValue(current) {

	// Add your code here
	return '';  // return the calculated value

})(current);`,
        choice_table: 'sys_user',
        display: 'false',
        dynamic_creation: 'false',
        element: 'manager',
        element_reference: 'false',
        function_field: 'false',
        internal_type: 'reference',
        label: 'Manager',
        mandatory: 'false',
        max_length: '32',
        model: '93ca408a47fca21051a3e84d416d43b5',
        model_id: '93ca408a47fca21051a3e84d416d43b5',
        model_table: 'sys_hub_flow_snapshot',
        name: 'var__m_sys_hub_flow_variable_93ca408a47fca21051a3e84d416d43b5',
        order: '0',
        primary: 'false',
        read_only: 'false',
        reference: 'sys_user',
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
    $id: Now.ID['0dca8c4a47fca21051a3e84d416d436a'],
    table: 'sys_hub_flow_output',
    data: {
        active: 'true',
        array: 'false',
        array_denormalized: 'false',
        attributes:
            'element_mapping_provider=com.glide.flow_design.action.data.FlowDesignVariableMapper,uiType=boolean,uiTypeLabel=True/False,uiUniqueId=9e538ef8-8c63-4760-8a4c-30a1921d538b',
        audit: 'false',
        calculation: `(function calculatedFieldValue(current) {

	// Add your code here
	return '';  // return the calculated value

})(current);`,
        display: 'false',
        dynamic_creation: 'false',
        element: 'approved',
        element_reference: 'false',
        function_field: 'false',
        internal_type: 'boolean',
        label: 'Approved',
        mandatory: 'false',
        max_length: '40',
        model: '5e65888247fca21051a3e84d416d43d3',
        model_id: '5e65888247fca21051a3e84d416d43d3',
        model_table: 'sys_hub_flow',
        name: 'var__m_sys_hub_flow_output_5e65888247fca21051a3e84d416d43d3',
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
    $id: Now.ID['9bc54c8247fca21051a3e84d416d43de'],
    table: 'sys_hub_flow_output',
    data: {
        active: 'true',
        array: 'false',
        array_denormalized: 'false',
        attributes:
            'element_mapping_provider=com.glide.flow_design.action.data.FlowDesignVariableMapper,uiType=boolean,uiTypeLabel=True/False,uiUniqueId=27a354e1-84ad-459c-ba29-ee89723b61d1',
        audit: 'false',
        calculation: `(function calculatedFieldValue(current) {

	// Add your code here
	return '';  // return the calculated value

})(current);`,
        display: 'false',
        dynamic_creation: 'false',
        element: 'has_manager',
        element_reference: 'false',
        function_field: 'false',
        internal_type: 'boolean',
        label: 'Has Manager',
        mandatory: 'false',
        max_length: '40',
        model: '5e65888247fca21051a3e84d416d43d3',
        model_id: '5e65888247fca21051a3e84d416d43d3',
        model_table: 'sys_hub_flow',
        name: 'var__m_sys_hub_flow_output_5e65888247fca21051a3e84d416d43d3',
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
    $id: Now.ID['27ca408a47fca21051a3e84d416d43f0'],
    table: 'sys_hub_flow_output',
    data: {
        active: 'true',
        array: 'false',
        array_denormalized: 'false',
        attributes:
            'element_mapping_provider=com.glide.flow_design.action.data.FlowDesignVariableMapper,uiType=boolean,uiTypeLabel=True/False,uiUniqueId=9e538ef8-8c63-4760-8a4c-30a1921d538b',
        audit: 'false',
        calculation: `(function calculatedFieldValue(current) {

	// Add your code here
	return '';  // return the calculated value

})(current);`,
        display: 'false',
        dynamic_creation: 'false',
        element: 'approved',
        element_reference: 'false',
        function_field: 'false',
        internal_type: 'boolean',
        label: 'Approved',
        mandatory: 'false',
        max_length: '40',
        model: '93ca408a47fca21051a3e84d416d43b5',
        model_id: '93ca408a47fca21051a3e84d416d43b5',
        model_table: 'sys_hub_flow_snapshot',
        name: 'var__m_sys_hub_flow_output_93ca408a47fca21051a3e84d416d43b5',
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
    $id: Now.ID['abca408a47fca21051a3e84d416d43f8'],
    table: 'sys_hub_flow_output',
    data: {
        active: 'true',
        array: 'false',
        array_denormalized: 'false',
        attributes:
            'element_mapping_provider=com.glide.flow_design.action.data.FlowDesignVariableMapper,uiType=boolean,uiTypeLabel=True/False,uiUniqueId=27a354e1-84ad-459c-ba29-ee89723b61d1',
        audit: 'false',
        calculation: `(function calculatedFieldValue(current) {

	// Add your code here
	return '';  // return the calculated value

})(current);`,
        display: 'false',
        dynamic_creation: 'false',
        element: 'has_manager',
        element_reference: 'false',
        function_field: 'false',
        internal_type: 'boolean',
        label: 'Has Manager',
        mandatory: 'false',
        max_length: '40',
        model: '93ca408a47fca21051a3e84d416d43b5',
        model_id: '93ca408a47fca21051a3e84d416d43b5',
        model_table: 'sys_hub_flow_snapshot',
        name: 'var__m_sys_hub_flow_output_93ca408a47fca21051a3e84d416d43b5',
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
