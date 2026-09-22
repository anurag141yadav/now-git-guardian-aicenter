import { Record } from '@servicenow/sdk/core'

Record({
    $id: Now.ID['6d0bc80a47fca21051a3e84d416d43fa'],
    table: 'sys_hub_flow',
    data: {
        access: 'public',
        acls: '',
        active: true,
        attributes:
            'browserActivatedIn=chrome,integrationActivatedIn=standalone,labelCacheCleanUpExecuted=true,timeFromCreateToActivate=27206881000,viewActivatedIn=naturalLanguage',
        authored_on_release_version: 25000,
        callable_by_client_api: false,
        category: '{}',
        description: 'Badging officer is assigned according to the identity location.',
        flow_priority: 'MEDIUM',
        internal_name: 'subflow_badging_officer_approval',
        label_cache:
            '[{"name":"subflow.request.request_for","label":"Input➛request➛Request For","reference":"x_aleen_snguardian_identity","reference_display":"Identity","type":"reference","base_type":"reference","parent_table_name":"x_aleen_snguardian_request","column_name":"request_for","usedInstances":{"35fec776-5894-4c8c-937c-3ae4f9416545":["conditions"]}},{"name":"35fec776-5894-4c8c-937c-3ae4f9416545.Record.number","label":"1 - Look Up Record➛Identity Location Record➛Number","reference":"","reference_display":"Number","type":"string","base_type":"string","parent_table_name":"x_aleen_snguardian_identity_location","column_name":"number","usedInstances":{}},{"name":"35fec776-5894-4c8c-937c-3ae4f9416545.Record","label":"1 - Look Up Record➛Identity Location Record","reference":"x_aleen_snguardian_identity_location","reference_display":"Identity Location","type":"reference","base_type":"reference","usedInstances":{"bdddb37b-5649-4efd-86ed-dd1f2477bfa6":["condition"]},"attributes":{"element_mapping_provider":"com.glide.flow_design.action.data.FlowDesignVariableMapper"}},{"name":"35fec776-5894-4c8c-937c-3ae4f9416545.Record.location","label":"1 - Look Up Record➛Identity Location Record➛Location","reference":"x_aleen_snguardian_location","reference_display":"Location","type":"reference","base_type":"reference","parent_table_name":"x_aleen_snguardian_identity_location","column_name":"location","usedInstances":{"7c88816b-4520-4d64-8190-34904f0c8a36":["conditions"]}},{"name":"subflow.request","label":"Input➛request","reference":"x_aleen_snguardian_request","reference_display":"Request","type":"reference","base_type":"reference","usedInstances":{"72b5e5e6-0a28-4e8b-b2c1-fa42db1675cf":["record"],"67f3679f-8e6a-4289-be38-2d4ef546fac9":["record"],"c8fff015-ab9f-4dff-8802-de6ce5dfab6d":["record"],"297cd307-5fce-4aaa-a798-098066ed3af7":["record"],"33d4f536-4e2d-44af-bdb2-0471d4ca831a":["record"],"4046ab44-6dce-4b8f-9585-deba5eb8f9de":["record"],"d8f45478-b92d-4d8e-9e92-ddeec68bf140":["record"]},"attributes":{"sourceUiUniqueId":"","sourceType":"","sourceId":"","uiUniqueId":"580dcfd0-464e-4a9b-a1bd-e9f699e23dab","uiTypeLabel":"Reference"}},{"name":"subflow.request.number","label":"Input➛request➛Number","reference":"","reference_display":"Number","type":"string","base_type":"string","parent_table_name":"x_aleen_snguardian_request","column_name":"number","usedInstances":{"72b5e5e6-0a28-4e8b-b2c1-fa42db1675cf":["work_notes"],"c8fff015-ab9f-4dff-8802-de6ce5dfab6d":["work_notes"]}},{"name":"35fec776-5894-4c8c-937c-3ae4f9416545.Record.location.name","label":"1 - Look Up Record➛Identity Location Record➛Location➛Name","reference":"","reference_display":"Name","type":"string","base_type":"string","parent_table_name":"x_aleen_snguardian_location","column_name":"name","usedInstances":{"72b5e5e6-0a28-4e8b-b2c1-fa42db1675cf":["work_notes"],"4046ab44-6dce-4b8f-9585-deba5eb8f9de":["work_notes"]}},{"name":"7c88816b-4520-4d64-8190-34904f0c8a36.Record.officers","label":"2 - Look Up Record➛Location Administrator Record➛Badging Officer","reference":"sys_user","reference_display":"User","type":"glide_list","base_type":"glide_list","parent_table_name":"x_aleen_snguardian_badge_office","column_name":"officers","usedInstances":{"67f3679f-8e6a-4289-be38-2d4ef546fac9":["approval_conditions"],"8f79400a-99d6-4e8b-bb3d-e706f0411852":["condition"]}},{"name":"67f3679f-8e6a-4289-be38-2d4ef546fac9.approval_state","label":"4 - Ask For Approval➛Approval State","reference_display":"Approval State","type":"choice","base_type":"choice","choices":[{"label":"-- None --","value":"","order":0.0},{"label":"Not Yet Requested","value":"not requested","order":1.0},{"label":"Requested","value":"requested","order":2.0},{"label":"Approved","value":"approved","order":3.0},{"label":"Rejected","value":"rejected","order":4.0},{"label":"Cancelled","value":"cancelled","order":5.0},{"label":"No Longer Required","value":"not_required","order":6.0},{"label":"Skipped","value":"skipped","order":7.0}],"usedInstances":{"ba896eca-fca0-44dc-93c2-530ad16a4a1e":["condition"]},"attributes":{"element_mapping_provider":"com.glide.flow_design.action.data.FlowDesignVariableMapper"}},{"name":"subflow.request.request_for.full_name","label":"Input➛request➛Request For➛Full Name","reference":"","reference_display":"Full Name","type":"string","base_type":"string","parent_table_name":"x_aleen_snguardian_identity","column_name":"full_name","usedInstances":{"33d4f536-4e2d-44af-bdb2-0471d4ca831a":["work_notes"],"4046ab44-6dce-4b8f-9585-deba5eb8f9de":["work_notes"]}},{"name":"d77967ac-e414-490c-9821-4dc2c8fcfc62.__status__.code","label":"12 - Top Level Catch➛Error Status➛Code","reference":"","reference_display":"","type":"integer","base_type":"integer","column_name":"","usedInstances":{"33d4f536-4e2d-44af-bdb2-0471d4ca831a":["work_notes"],"4046ab44-6dce-4b8f-9585-deba5eb8f9de":["work_notes"],"d8f45478-b92d-4d8e-9e92-ddeec68bf140":["work_notes"]},"attributes":{}},{"name":"d77967ac-e414-490c-9821-4dc2c8fcfc62.__status__.message","label":"12 - Top Level Catch➛Error Status➛Message","reference":"","reference_display":"","type":"string","base_type":"string","column_name":"","usedInstances":{"33d4f536-4e2d-44af-bdb2-0471d4ca831a":["work_notes"],"4046ab44-6dce-4b8f-9585-deba5eb8f9de":["work_notes"],"d8f45478-b92d-4d8e-9e92-ddeec68bf140":["work_notes"]},"attributes":{}}]',
        master_snapshot: 'b93fc4ce47fca21051a3e84d416d4326',
        name: 'Alert Subflow Badging Officer Approval',
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
        latest_snapshot: 'b93fc4ce47fca21051a3e84d416d4326',
        compiler_build: 'glide-washingtondc-12-20-2023__patch10-hotfix2-03-11-2025_03-12-2025_0251.zip',
    },
})
Record({
    $id: Now.ID['a90bc80a47fca21051a3e84d416d43fb'],
    table: 'sys_flow_cat_variable_model',
    data: {
        id: '6d0bc80a47fca21051a3e84d416d43fa',
        name: 'Subflow Badging Officer Approval',
    },
})
Record({
    $id: Now.ID['b93fc4ce47fca21051a3e84d416d4327'],
    table: 'sys_flow_cat_variable_model',
    data: {
        id: 'b93fc4ce47fca21051a3e84d416d4326',
        name: 'Subflow Badging Officer Approval',
    },
})
Record({
    $id: Now.ID['172fc0ce47fca21051a3e84d416d43e6'],
    table: 'sys_hub_flow_input',
    data: {
        active: 'true',
        array: 'false',
        array_denormalized: 'false',
        attributes:
            'element_mapping_provider=com.glide.flow_design.action.data.FlowDesignVariableMapper,uiType=reference,uiTypeLabel=Reference,uiUniqueId=580dcfd0-464e-4a9b-a1bd-e9f699e23dab',
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
        model: '6d0bc80a47fca21051a3e84d416d43fa',
        model_id: '6d0bc80a47fca21051a3e84d416d43fa',
        model_table: 'sys_hub_flow',
        name: 'var__m_sys_hub_flow_input_6d0bc80a47fca21051a3e84d416d43fa',
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
    $id: Now.ID['fd3fc4ce47fca21051a3e84d416d4328'],
    table: 'sys_hub_flow_input',
    data: {
        active: 'true',
        array: 'false',
        array_denormalized: 'false',
        attributes:
            'element_mapping_provider=com.glide.flow_design.action.data.FlowDesignVariableMapper,uiType=reference,uiTypeLabel=Reference,uiUniqueId=580dcfd0-464e-4a9b-a1bd-e9f699e23dab',
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
        model: 'b93fc4ce47fca21051a3e84d416d4326',
        model_id: 'b93fc4ce47fca21051a3e84d416d4326',
        model_table: 'sys_hub_flow_snapshot',
        name: 'var__m_sys_hub_flow_input_b93fc4ce47fca21051a3e84d416d4326',
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
    $id: Now.ID['1747ad5b4787f21051a3e84d416d4348'],
    table: 'sys_hub_action_instance_v2',
    data: {
        action_type: '9d09f99587003300663ca1bb36cb0ba3',
        action_type_parent: 'b93f42810b30030085c083eb37673a63',
        flow: '6d0bc80a47fca21051a3e84d416d43fa',
        order: '1',
        parent_ui_id: 'd1e1ff62-c88e-4da6-9de0-6bb1d196866f',
        ui_id: '35fec776-5894-4c8c-937c-3ae4f9416545',
        values: 'H4sIAAAAAAAA/9VYXW/iOhD9K1GeKTeBQKBvV1shVdq7lba9+9KtLMd2wLrGSW2nLUX89zuOE6B8FSgV3ScUe8ZzZnzOZML91MfE8ExeS22wJOx2oq+pf+njpJUGEWFRnBLcCoNOiNusF9Eo7NKoHQR+w+fWjvaDftrvd3pxELRhvdttExwmSbtLkiDBEdhJPGZgaXAiGDw+YVHY5xeEBWMSaTkssKIcS8Qpk4abCRIZwRYVmFOuc4Envyqv68rE+74wISMuqGLSv7x/aPg5VhDQMOVfTle2zCRnSOCECTjpzuLxflhw++fyxnk9NxugfkTSHZ0parEEDZ+9GCYpg1ApFpo1/DGWFJtMTeYrimF6I8ViYcSlgRN9a/yi+Ssc3wusXcogLcLc3vwRVeVyy2SUccJu8rJO5YoD6jYzUYzlD5eALTRLcSFMXWhYKTScx3KL2YKoEKW3o+z5Zx1wwGWZXrVpL07Mn7AxiieFYdreBRNsDAehMc5zLocoV9kTL50By7g5FPDQTEX2DEE1H8qmY2YTSoSbA1i/Kpd/YcVtFv/AMeAMgLiA20au6DorVFmVJ0REocsNhaV2Z/mzslbosbAoXdZVfsiVCAw0UTw3f4PDE6tSmTU+rJPOTm71F1wimaTchtJLYqmV8bsAdzqd6iKxlWoq9lgwbepflGZqNltXzaHuxynq2zLyfbPe6LypFJW23qxV2gpPpq0oCM6kLqOKryeu9+TiEv4szYR0J3vogig6Uwa5ki+JZl0HR1N7wJmgb14We4CrnW8sS71ksg1vxezUxlh5a7T++LfGl+Q1AKLI1ZtLwWX50gagZyZ8ZyenknCFQCVvFnQv17Am67THnsm81+P7ekmIA0DWjreAyLtzKDcArzt6fXzF+fbJON9uHcZ5YNz9dI5+XrUNBa6HOnvntf2rtcer9kDLJYdw9jDXzLfjYoaHxmzZmCuibh+k6mVmuZ2rLQQ78ci4RaWNz2wLI3Ct4iGncvTM6ZCZRfTaimbmGYv/Nu1X7JprqEzvfONnuPPTJlkaP3mKxnDBPIdhWjECHNIIKwajYSEpqsboBd/shadcwezojNebz09mCiW9DLTqmRHzSmtvbn2KlrRHdrXjderV6VUYtAfpeWV63jy9w4qxpZFFJxxLP9LIBpiLsvTwOZQv3R1TKlNbmtk7t7bj+vfsdHuCCk8K6uOtcBPfN7bEd7D+Ed/WZ2tXhOEkauFu3A7DIAgDGge9OA573STt4jhKFwpFSEsCjRggpcAowIVqBtV0CNZ7kuvGR/9zBF3+r0F1xL54a+erTNqv8FZsPAsYCOLVgN9PqWo0SZYJhuWC152zdZqv8udSwe9Wa+OWvm+6tM8aHwr+r+SPBSvJ3mNBqxdSctGLw/giSmn3ok9x5wL3k07cpoxE6fETwcP/EsvJJLoVAAA=',
    },
})
Record({
    $id: Now.ID['1f47ad5b4787f21051a3e84d416d4348'],
    table: 'sys_hub_action_instance_v2',
    data: {
        action_type: '9d09f99587003300663ca1bb36cb0ba3',
        action_type_parent: 'b93f42810b30030085c083eb37673a63',
        flow: '6d0bc80a47fca21051a3e84d416d43fa',
        order: '2',
        parent_ui_id: 'd1e1ff62-c88e-4da6-9de0-6bb1d196866f',
        ui_id: '7c88816b-4520-4d64-8190-34904f0c8a36',
        values: 'H4sIAAAAAAAA/9VYW2/iOBT+K1GegU1IQqBvo+lWqrY7ldruvHQry/EFrDVOxnZ6Ff99j3MBCrQFStXOo+1z+c7x9x0crp98TKzI1akyFivCLh/MKfWP/EHU50FMWJxygvthkIQ4YsOYxuGAxlGA/Y4vnB0dBSM+GiXDNAiiKAgGg4jgMMuiAcmCDMdgp/CUgaXFmWSwvMWydOt7hCVjChk1LrGmAiuUYTpmKOdcEGdJhSkkfvjZOJzlBDuo3jc6FUoYq6slGJKJkFQz5R9d33T8AmvIaJn2j55WjuxDwZDEGZMQ78oB8n44dNsX88x5vTiXoF0iVYfONXVYgo7P7i1TlEEqjqVhHX+KFcU21w/zHc0wPVdysTERykJE3xnfG/EI4YeBs+MMyiKsPpsvUdO0eptMcmjleVH1qdqpgdaHuSyn6kddgGs347iUtm037JQG4rHCYXYgGkT8cpLfXbQJT4SqymsOJVySnK+wtVpkpWXG3QWTbAqB0BQXhVBjVOj8VlTOgGXaG0tY9LjM7yCpEWPVq6nZgxbh3gnsH1fbP7EWroq/IQw4AyAh4bZR3XSTl7rqyi0isjTVgcbK1LH8WdUr9Kt0KOuqm/pQ3SIwMESLwn4Dh1vWlDLrvFsoyavcGi24RHJFhUtlltQiG/Kbs9O//nx6ihLOSJoOuslwFHdjMiTdUZSSboRZzEeQO4mT3gUjwL1e6zqbrWvqUGH3U+D35Uq37dJG502ta7T4bK/RYngwLcZB8ElqtLr8emJ8S151wR+lsZC+yh66IIrJtUV1y5dEtq6Pval9Ipikz35ctgDXOp87lnrZw0t4G2Zzl2PlV6b/2//KfEleAyCK6n4LJYWqfuQB6CcTPnmVU1m4QqCKNwu6V3vYkHXaY8/m3uP+c70ixA4gW8dLQORd1Sg3AG8nehu+4Xx0MM5H/d04D4y7fpqjn3dtQ4PbR6C789b+0dnjVXug5ZJDOLuZa+b7fjnDXXP2Xc4VUUc7qXqZWfXJ8QsEO/AT8wWVdj5yLEzAtcmHapWjOwEfMnaRvbWiub3D8r9N5w275hqqyvu852r46qdQtvRcFRxN4YJFAY9vXT0NDcKaIZ6XiqLm2b3gm7twLrSxjfH68LlgttTKy0Grnp0wr7L25taHGElbVNc6nnKvLa/BYDwoz6vK8+bl7daMFwZZfMBn6XsG2QkWsmo9fD4VS3fHtM71C8PsjVt75fq3nHRbggoPCur9o3AT3zeOxDew/hbf4p82rgjDWdzHgzQKwyAIA5oGwzQNh4OMD3Aa84VCETKKwCAGSBwYBbhQy6CWDsH6TKqn8d7/NMGU/+OkCbEt3tb5OFf/lkHQT63nAANBvBbw2yU1gybLc8mwWvA6+bRJ81X+jCrF1Wpv6q2zTZf2Uc+HUvyjxK+SVWQfsqA/DCnpDtMw7cacDrojipMuHmVJGlFGYr7/i+Dmf9O9g1zrFQAA',
    },
})
Record({
    $id: Now.ID['1f47ad5b4787f21051a3e84d416d434a'],
    table: 'sys_hub_action_instance_v2',
    data: {
        action_type: 'f8f2e9920b10030085c083eb37673abd',
        action_type_parent: 'bae0a1120b10030085c083eb37673a92',
        flow: '6d0bc80a47fca21051a3e84d416d43fa',
        order: '4',
        parent_ui_id: 'd1e1ff62-c88e-4da6-9de0-6bb1d196866f',
        ui_id: '67f3679f-8e6a-4289-be38-2d4ef546fac9',
        values: 'H4sIAAAAAAAA/+1X32/bNhD+VwI9Ox5lybbstwBBgBTYCiRdX+JAoMlTzIKmVJJK4wn+33eUaFmxWzXNPAQb8ni/vzt+J4p3VUCZFbm6VsZSxeB2Y655MA8m2SgjMYN4mjE6Csk4pBEkMY/DCY+jKAwGgXB+0yQbwWw2IsuQkIiQZMxIEsEymk6mEWUE/RRdA3pqYLnmKD9SWTpFVZlymcn821DD1xKM3W7RyoUpJN189k6oYSshuQYVzO/uB0FBNeazoIN5dWCymwJSSZcgMfAyZ+UalD27vvwFrLvomx3YQ/CuBsrcZ0+FU6LJ4SGDAJ4sKA5YLaPSwCBYU8WpzfUmmFtdokID5R+V3LQeK6Fs0+iaPhnxF6aPRs4vA+yM+SG0YuoHtJtNLhh8LNwRNhpLl3I3uFyWa/VH04EbLWS0lLYz2tJgPigcZAeiQZjdrvJvN7t6V0LVzXm0MmdUthK1VotlacG40wAJ9UzWtCiEekgLnT+KOhihrIcPEoWhO3CsacSDGjbUG+KA6PAK9Ze1+jPVwjXxO6bB4G3dfPq1dHWbNjzgtO65aRi9DNOisBeY8xE8wu3gn/J7yXo5w/YUaXDs6f2UUgmgUqMeSqq5oCr1PD9m+U1reB3ZP7naZ/VJvxz3s+DjPjzTazFVTWpP9LCf6F7zEqYn5G2Y7hH9x6j+r7GchH1s4cmeHQgUW6UyzQTI7td8Zzgmd8fyOnZfuVLP2P0CvLvgC1/97MoD/lEjnu+1eMD30Qn5Tt6I8e/f9iPWs14WQbQny5e81KqH9OlKmJoLPyR/x+NUS/AC+LvgDw3+wx04bKtnBaL3Ffg/rkA87uUQfOd7yXLFhatpOovQfGXBXKjNn3dVNWVJkoST5Xk8HpHzmE/i8ySckfMonpE4Iyyh0WTY/GMP8yzDM9Zmu70/Xp+T5X3d0rWXx00pwfzC0Np3hI/rHaJfu9aofZBfvfhUz4q327z3363nF08vgbLZnjC8xDlS231XVAtffRHMF4HKFSyCwSJwXqljUq1GD+yqNdS6qtpuG02pqU8QdsR9NKcbU3satgKObKy1zzTNinj9Kd/tt77A2SXi/u2T6Nx3P59a+/gvm/jvDtKvW9tJMznRve3GJ7vt4veN62wcwhRp+x7Ayw2/Xa9ew/u/AVHuzUe9EgAA',
    },
})
Record({
    $id: Now.ID['1f47ad5b4787f21051a3e84d416d4372'],
    table: 'sys_hub_action_instance_v2',
    data: {
        action_type: 'f9d01dd2c31332002841b63b12d3aea1',
        action_type_parent: 'baf174c8c3c232002841b63b12d3aee4',
        flow: '6d0bc80a47fca21051a3e84d416d43fa',
        order: '15',
        parent_ui_id: 'bdddb37b-5649-4efd-86ed-dd1f2477bfa6',
        ui_id: '33d4f536-4e2d-44af-bdb2-0471d4ca831a',
        values: 'H4sIAAAAAAAA/+1W224TMRD9ldU+J6u95fqGVCr1gYsK4oWA5bVnEwuvvdjetCHKvzPeSxooVKUUIVDzEs14PHPOzFnb7/chZU5odaGso4rBm5294OEyTLO0jHMG+axkNE3iSUIzmOc8T6Y8z6ZpOAqFj8uBx8kimbIsybI0jtN5nhTTrEhSnlGABOMUrQAjDTBtONpbKhvv2O9tU5RSX0UGPjdg3eGAq1zYWtLduz4IPWwjJDegwuX7D6OwpgbzOTDhcv/dktvVQCQtQOLGM82aCpQLLs5+Aeuw+3IA+z14XwNt3mcnwjtxyeNJ4lEI1w4UByxXUmlhFFZUceq02YVLZxp0GKD8lZK7Y8RGKNcxrei1FV8wfx77uBKQGuu7cDRJ36GhOVoweFX7GXYeRws5dE7LplIvOwq+t1DSRrqT3jYW80HtIXsQHcLyzUZfXQ71zoVq2fVopWZUHi3qnBFF48D6cYCEtikVrWuh1qQ2eivazQilitYSjchPHGtasVZRp70IG0Sjc/Sfte531AhP4gWmwc2Hljz53Pi6HY0eMGk5t4RJOygMtcyI2j3DxFvoYR5Gv6vyYnKXctjiRignYG6Ufk2oBFDEqnVDDRdUkV7ytwV/eVx4mO7fegDByw7AfcF/s/knZHrlf+PrhT95NOHP/5Lwe0T/mPL/mN7j9M6T8kQircTtidaxoINVE8cZn330RmM7a78apL4Kl6vwte+QRYzYriB4bow2q3C06vK0ETmbl3Pgk6Qo2BzBziaLfDLJ8pTmBStmRRtudxbP4HvGHz5eafOJKI1T60C93UDQf3HAg1KbAIVhgltX0/BPMCQqGynbL+BwCLgG7HGwoVsIaOAl4vseoPZvDGGD48fQ1kB1MLDWMx/yB68lUIs5rNfBaSqnW0wRguKz2WI6o2wMeZKP80XMxgtkOs45S5E8K9k0jQjpuk5IxDT3GMctV3hAggpR0jXmiG4fVE+D/l8H/cCLByqcuYOgE8j9T5IhwbkAye0Pjpbh5ukLkG1f4PjserTrJ5nG7e/p9fWIr68PXwHQu+HBZQwAAA==',
    },
})
Record({
    $id: Now.ID['5747ad5b4787f21051a3e84d416d4352'],
    table: 'sys_hub_action_instance_v2',
    data: {
        action_type: 'f9d01dd2c31332002841b63b12d3aea1',
        action_type_parent: 'baf174c8c3c232002841b63b12d3aee4',
        flow: '6d0bc80a47fca21051a3e84d416d43fa',
        order: '7',
        parent_ui_id: 'ba896eca-fca0-44dc-93c2-530ad16a4a1e',
        ui_id: 'c8fff015-ab9f-4dff-8802-de6ce5dfab6d',
        values: 'H4sIAAAAAAAA/+1V207jMBD9lSjPVZRrSfu2K4TEwwICxAulkWNPWmsdJ9hOoVv133ecSymXRSzLarUSfalmPJ455/jEvt64hBpeyWOpDZEULtb6mLlTF6Kw8GMK8UFBSRj4SUAiSGMWB2MWR3Hojlxu62JgfjAJxjQKoij0/TCNg3wc5UHIIgIQYJ0kJWClAlophvGKiMYmNhvd5IWo7jwFtw1os93iKuO6FmR91Rdhhi65YAqkO72+Gbk1UdjPgHKnmydLZl1DJkgOAjceVrQpQRrn+PA3sA67zwewT8HbGRizvnvGbRKXLJ7AH7lwb0AywHEFERpGbkkkI6ZSa3dqVIMJBYSdSrHeVSy5NB3Tktxr/gP7x76tKwCp0V6FXZj1Cg3iVJzCaW3PsMsYkotBuUo0pTzpKFhtoSCNMHvaNhr7QW0hWxAdwuJiWd2dD/OOuGzZ9WhFRYnYRcQYxfPGgLbHAQJaUUpS11wuslpVK95uRiiltxAYePbEcabmC+l13vNQIOIdYf6wTV8RxS2Jb9gGN29b8tltY+d2NHrAWcu5JZy1B4Wlmipemy/YeAU9zO3oT12eJ685h04ejLIH5sHp9xkRADLTctEQxTiRWW/554Y/3y28z/eXFoBz0gF4K/hHm39Bpnf+o1xv/OTDjJ/+I+P3iP4z5/81v/vhqzflnkVai+s9r+NAA7PG9yMWzm3Q6C7azAarz9zpzD2zCmnEiHI5Z8gK/2fuaNY1akvSNC1SYEmQ5zRFtAfJJE4ShEninOYHk7ZcrzVewm+s385RWBxMRIepi4DN7yr1PZMVnma3cLkEp/8SnWfvlCebMge13TpLop0cv2xnaOTka+crYQtL6rQo0KHKe/6Nf2r0gkbvvO6gRLkMOJ22b/fv0OCIg2D6BUMP910/IFv1A3aP/YddesHYb3+fb/4Hvvk3PwGL6vWI2woAAA==',
    },
})
Record({
    $id: Now.ID['5b47ad5b4787f21051a3e84d416d437c'],
    table: 'sys_hub_action_instance_v2',
    data: {
        action_type: 'f9d01dd2c31332002841b63b12d3aea1',
        action_type_parent: 'baf174c8c3c232002841b63b12d3aee4',
        flow: '6d0bc80a47fca21051a3e84d416d43fa',
        order: '19',
        parent_ui_id: '8f79400a-99d6-4e8b-bb3d-e706f0411852',
        ui_id: '4046ab44-6dce-4b8f-9585-deba5eb8f9de',
        values: 'H4sIAAAAAAAA/+1W227bOBD9FULPtqCrZfutQBogD9su0m5f6pagyJEtLEWqJJXENfzvHeripkkbpNksFgvEL8YM53Lm8Ijkx0PAuKu1ulDWMcXh3d5eiGAdJGVSRRmHrKg4S+Ioj1kKy0xk8UJkaREHs6D2cRmIKF7FC57GaZpEUbLM4nKRlnEiUgbg4xRrACMNcG0E2ldMdt5xONiurKS+Dg186cC64xFXRW1byfYfxiD08F0thQEVrD9+mgUtM1jPgQnWhztLbt8ClawEiYlnmncNKEcuzn4D65R9OYG9C973QFuM1Wntnbjk8cTRLIAbB0oAtquYtDALGqYEc9rsg7UzHToMMPFWyf0pYlcrN0zasBtbf8X6WeTjKsDR+MjCyaQjQxM5uubwtvV7OHgcK+XEnJZdo94MI3huoWKddLe47SzWg9ZD9iAGhNW7nb6+nPqd16qfbkQrNWfyZDHnTF12DqzfDpDQk9Kwtq3VlrZGX9V9MkJpwq1EI/Q7jj1tvVXhoL0QCWLhOfrPevcHZmo/xB9YBpOP/fD0S+f7DmOMgGk/cz8w7TcKQy03deteYeErGGEeZ/9U5WX+kHL46rtQboH5rvQbyiSAolZtO2ZEzRQdJX9f8Jenhafp/r0HQN4MAB4L/ofkXwwzKv8H3yj8/NmEv/yPhD8i+p8p/1/Te5Q8eFLekkgvcXtL69jQwaaLolQUn73R2cE6bCapb4L1JvjTM2QRI9JFyGtjtNkEs81Qp4/I+LJagsjjsuRLBFvkqyzP0yxhWcnLouzD7d7iGfzI+OPna23+pkrjrg2g3u+AjF8cCHKuDfnLgiH3rqbpn1bahFUnZf8FHI++SlJY4rXhCcfMNK+AF8Vini9X2RxB8fkqLfgcicuqFTKdZ3k43C/hlBYO1ciOWaI0KZnYelp0VaHGDdl5NRKHWEcYlnCmcAxSAkGpcbAW4SO2Pgi1bUJEIopitSgYn0MWI5JVhEiQmHkmeIJc8YovkpDSYZMoDbkWCGJOemrgCQUaxMG2WCO8f6696OJFF70unnitQYMScUAGPT3+nJoKnNcghf3JwTXda2MDejU2OD3qnu1yixdR/3t52z3j2+7TN/1E3OnDDAAA',
    },
})
Record({
    $id: Now.ID['9747ad5b4787f21051a3e84d416d4368'],
    table: 'sys_hub_action_instance_v2',
    data: {
        action_type: 'f9d01dd2c31332002841b63b12d3aea1',
        action_type_parent: 'baf174c8c3c232002841b63b12d3aee4',
        flow: '6d0bc80a47fca21051a3e84d416d43fa',
        order: '11',
        parent_ui_id: 'db898d51-2a0e-4917-ac1d-4b71e109491d',
        ui_id: '297cd307-5fce-4aaa-a798-098066ed3af7',
        values: 'H4sIAAAAAAAA/+1V207bQBD9FcvPUeRrEvJWCSHxUJAA8UKKNd4dJ9uu12Z3DaRR/r2zvoQALaKUqqpav83sXM6cOd692vjArKjUsTIWFMPztTnm/tyPplERJAyTacEgCoM0hBhnCU/CCU/iNPRHvnBxCfIgPAgnLA7jOAqCaJaE+STOw4jHgOjiFJRIkRpZpTnZtyAb59hsTJMXsroba7xp0Njtlk65MLWE9WUfRB62EpJrVP786tPIr0FTPYvan2+eHNl1jZmEHCUlHlasKVFZ7/jwJ7AO2WcD2KfgXQ+yeV89E85JRw5PGIx8vLeoOFK7AqTBkV+C4mArvfbnVjfk0Aj8VMn1LmIllO0mLeHeiK9UPwlcXIE0GutZ2JlZz9BATiUYntZuh53HQi4H5irZlOqkG8FxiwU00u5x2xiqh7WD7EB0CIvzVXV3NvQ7EqqdrkcrKwZyZ4G1WuSNRePWgRJbUkqoa6GWWa2rW9EmE5RyvJRkjN3GqacRSzXutDcmgmB8RP7D1n0JWrghPlIZSt62w2c3jevbjdEDztqZ24GzdlEUapgWtf1AhW+xh7kd/arK8/Ql5bCDB6HsgXlQ+n0GElFlRi0b0FyAynrJPxf82e7gbbq/cAC8kw7Aa8E/Sv7BML3yH/l64afvJvzZHxJ+j+gvU/5v03sQvXhT7kmklbjZ0zo1tLhogiDmybUzGtNZm8Ug9YU/X5DOPyOzyBf+aNElt+4kmBUz5GmY52xGCKfpQZKmcRJBkrN8Cm24WRu6eF8Zv70mMmkdIDscum98fVfpL5mqaIPdwcUKvf7v81ZgvJx+WW+I9vK1lwNf0nK9qihIenr8/Of9t4Z/4wWFJfFg0etIe73ihgJHAiU335HgcEP1DbLbvsHueX63ayqcBO33/5V+x1f60zeiAdnPjQoAAA==',
    },
})
Record({
    $id: Now.ID['db47ad5b4787f21051a3e84d416d4349'],
    table: 'sys_hub_action_instance_v2',
    data: {
        action_type: 'f9d01dd2c31332002841b63b12d3aea1',
        action_type_parent: 'baf174c8c3c232002841b63b12d3aee4',
        flow: '6d0bc80a47fca21051a3e84d416d43fa',
        order: '3',
        parent_ui_id: 'd1e1ff62-c88e-4da6-9de0-6bb1d196866f',
        ui_id: '72b5e5e6-0a28-4e8b-b2c1-fa42db1675cf',
        values: 'H4sIAAAAAAAA/+1W207cMBD9lSjPS5Tr3t6oEBJSCxIgXliIHHuya9Vxgu0A21X+veNclgVaRCmoqkTeZjyeOXPm2PHlxiXU8FIeSW2IpHC21kfMnbvjPMz9mEI8ySkJAz8JSATTmMXBmMVROHNHLrdxMTA/mAVjGgVRFPp+OI2DbBxlQcgiAhBgnCQFYKQCWiqG9i0RtXVsNrrOclHeeQpuatCmaXCVcV0Jsr7og9BDV1wwBdKdX16N3IoozGdAufPNkyWzriAVJAOBGw9KWhcgjXN08AdYh92nA9in4G0NtFmfPeXWiUsWT+CPXLg3IBlguZwIDSO3IJIRU6q1OzeqRocCwk6kWG8jVlyartOC3Gv+A/PHvo3LAVujPQtbM+0ZGsgpOYWTys6w8xiSiYG5UtSFPO5asNxCTmphdritNeaDykK2IDqE+dmqvDsd6h1y2XbXoxUlJWJrEWMUz2oD2o4DBLSkFKSquFymlSpvebsZoRTeUqDh2YljTc2X0uu05yFBxDtE/0HrviCK2ya+YRrc3LTNpze1rdu10QNO257bhtN2UBiqqeKV2cfEt9DDbEZ/q/IseUk5dPYglB0wD0q/T4kAkKmWy5ooxolMe8k/F/zpduFtuj+3AJzjDsBrwT/a/JtmeuU/8vXCT95N+NN/JPwe0X+m/A/Tux++eFPuSKSVuN7ROhY0sKh9P2LhtTVq3VmbxSD1hTtfuPt3hBukytmvLFlELNzRosvSrlN/mk+BJUGW0SlCnSSzOEmiOCRxRrPJrA3Xa4038Cvjm2sylGoB9UcQ2PVdqb6nssRZdivnK3D6c+g8+0t5si4yUE3jrIh2MjzXDtF2eMAcUzpfCFvatk7ynINyytz5irqxw8BUUZIDnUzGe8l0Fu/FdEr3ZtGE7iGpcT7DKSRx4nX/Hk/02zzLdNN4z6+KT6o/juo3Xr5QIOsGnG5Erz9NQ4JDDoLpXxyv4fbtC6S3fYHt0+PdruBg7Lff5wvkHV8gVz8BIzKrlWkLAAA=',
    },
})
Record({
    $id: Now.ID['df47ad5b4787f21051a3e84d416d4382'],
    table: 'sys_hub_action_instance_v2',
    data: {
        action_type: 'f9d01dd2c31332002841b63b12d3aea1',
        action_type_parent: 'baf174c8c3c232002841b63b12d3aee4',
        flow: '6d0bc80a47fca21051a3e84d416d43fa',
        order: '22',
        parent_ui_id: 'd77967ac-e414-490c-9821-4dc2c8fcfc62',
        ui_id: 'd8f45478-b92d-4d8e-9e92-ddeec68bf140',
        values: 'H4sIAAAAAAAA/+1WyW7bMBD9FUFnW9Bmy/atQBoghyZFEuRSp8KIHNlEKUohqSSu4X/vUJJdd0WapigKVLcZzvLmzRPBd1sfmBW1OlPGgmJ4tTFn3F/4WRGXYcowzUoGcRROIkhwlvI0mvI0gdgf+cLFpcjDaB5NWRIlSRyG8SyNimlSRDFPADGiOAUVUqRGVmtO9j3I1jm2W9MWpawfAo13LRq729EpF6aRsLkZgsjD1kJyjcpfvLsd+Q1oqmdR+4vtV0d202AuoUBJiSc1aytU1js7+QWs++zLPdivwbseZPOhei6ck44cnigc+fhoUXGkdiVIgyO/AsXB1nrjL6xuyaER+IWSm0PEWijbT1rBoxEfqX4aurgSaTQ2sHAw84GhPTm1YHjRuB32HguF3DNXy7ZS5/0IjlssoZX2iNvWUD1sHGQHokdYXq3rh8t9v1OhuukGtLJmIA8WWKtF0Vo0bh0osSOlgqYRapU3ur4XXTJBqYKVJCNwG6eeRqxU0GsvIIIgOCX/See+AS3cEG+oDCXvuuHzu9b17ccYAOfdzN3AebcoCjVMi8a+osL3OMDcjX5X5cXkZ8ph889COQLzWemPOUhElRu1akFzASofJP+t4C8PB8/T/bUD4J33AJ4K/ovkHwwzKP8L3yD8yYsJf/aXhD8g+seU/8f0HsY/vSmPJNJJ3BxpnRpaXLZhmPDsvTNa01vb5V7qS3+x9N86hgxhJLo877XWtV76o2Vfp4tI2aycIZ9ERcFmBDabzNPJJEljSAtWZEUXbjaG7uAnxu/eP9T6Q65q2loP6npNq/bWYLyCflAPPHRAPKG8AvjKQavLknSmPdoIIQbpbbc8y+bTDNgY0ygdp/OQjefUcJxyFhMGVrJpHOR5P3yeB6zmuNuNu474jPwKjYEVlQi+vS7+0/1n6X7mJYwVMW/R69f09L9qX+BUoOTmO7/Z/hYeGuT3Q4PDE+TFruJoGnbf/5fIC75Ebj8BgMEgzXELAAA=',
    },
})
Record({
    $id: Now.ID['0457219b4787f21051a3e84d416d4337'],
    table: 'sys_hub_action_instance_v2',
    data: {
        action_type: 'f9d01dd2c31332002841b63b12d3aea1',
        action_type_parent: 'baf174c8c3c232002841b63b12d3aee4',
        compiled_snapshot: 'f9d01dd2c31332002841b63b12d3aea1',
        flow: 'b93fc4ce47fca21051a3e84d416d4326',
        order: '22',
        parent_ui_id: 'd77967ac-e414-490c-9821-4dc2c8fcfc62',
        ui_id: 'd8f45478-b92d-4d8e-9e92-ddeec68bf140',
        values: 'H4sIAAAAAAAA/+1Wy27bOhD9FYFrW9DLz13R3AABetsiKbKJW2FEjmziUpRKUklcw//eoSQ7RlIUaW+7CFrv5kWeOZwz1s2OAXey1hfaOtAcr7b2QrAlmxVJGWUcs1nJIYmjSQwpzjORxVORpZCwEZM+L0MRxYt4ytM4TZMoSuZZXEzTIk5ECogx5WmokDIN8toIsm9Btd6x29m2KFV9Fxr83KJ1+z1FhbSNgu31kEQevpFKGNRsefNxxBowdJ5Dw5a7R6HnAlJQoKLUywOixwjdtvG2qHlboXa5PDjfDJVnQyS4OKMIFXk4cTRieO9QCyQgJSiLI1aBFuBqs2VLZ1pyGATxTqvtMWMjtesbreDeyi90cxb5vBKpMz6QcDTzgaDeXZ6Bgys6mbvWHPmqJUfbcyKwhFa516e+PuFd49+9L3FQqEN1rdpKv+0ZYccDTt6jtQQCG9+nR963VV5t6rvLA8hzqTtKhhZVzUEdLXDOyKJ1Hs6OocKO4wqaRup13pj6VnbFBKUK14qM0E8J3WnlWof9vIbEKoTn5D/r3NdgpG/iXzqGivcjZrf2tQJrH1ohDvPPrUfSNza0kHcsdBTk3ST4Ym5k417RVbc4AN+P/q9Wisn3RpMvHibxBMyDXu5zUIg6t3rdghESdD4I56lsLo+BH1PPMyAe1POhm5lvQx4E9MT35rQ2eNsHBvlMfpl85i9JPkMbL14/v001UfLdhX4ygp1Q7Ili6EKHqzaKUjH75I3W9tZudRDMii1X7L3nzBJGIjAI/jGmNis2WvXndBkZn5dzFJO4KPicwM4mi2wySbMEsoIXs6JLJ8bor+KZ+ftPd7X5L9c1vWMP6sOGHj/YgA0KknkAAXoggdRBAWLtodVlSZNnAnojQgwq2O3EbLaYzoCPMYuzcbaI+HhBF44zwRPCwEs+TcI875vP85DXAvf7cXcj/kR9hdbCmo4Iny6dv3T/Xrp/bJU/QzeHVX4uUQn7DSEd9jhW9HgO815Yj3b5EAyuh+Dxc+iXLfR4GnW/F7TW/5ivoo9fAZ4sMOtDDAAA',
    },
})
Record({
    $id: Now.ID['0c57219b4787f21051a3e84d416d4326'],
    table: 'sys_hub_action_instance_v2',
    data: {
        action_type: 'f9d01dd2c31332002841b63b12d3aea1',
        action_type_parent: 'baf174c8c3c232002841b63b12d3aee4',
        compiled_snapshot: 'f9d01dd2c31332002841b63b12d3aea1',
        flow: 'b93fc4ce47fca21051a3e84d416d4326',
        order: '15',
        parent_ui_id: 'bdddb37b-5649-4efd-86ed-dd1f2477bfa6',
        ui_id: '33d4f536-4e2d-44af-bdb2-0471d4ca831a',
        values: 'H4sIAAAAAAAA/+1W224bNxD9lcU+S4u96fpWxDVgIE0CO/BLlCxmyVmJKJfckFzbqqB/73AvsmAHgdOmD26rF4Ezw+GZwzmc/XQIgTmh1ZWyDhTDm7294uE6TLO0inOG+aJikCbxLIEMlznPkznPs3kaTkLh43LkcbJK5ixLsiyN43SZJ+U8K5OUZ4CYUJyCGinSINOG0/oOZOsNh4Nty0rq+8jg1xatOx7Jy4VtJOxvhyCysJ2Q3KAK158+T8IGDOVzaML14YnrpYAklCgp9HpE9BSh2zd+zTVra1SuEKPx7bDzYvAEVxfkoU0eThJPQnxwqDgSkAqkxUlYg+LgtNmHa2daMhgE/l7J/SliJ5TrC63hwYo/6OQ89nEVUmVsIOG0LAaCenN1AQ5uKDNzrTnxpQVD23PCsYJWujfntj7gfePvvd/ioJTjbi3bWr3rGQlPCc7uo7UEAhtfp0fel1Xd7PT99QjyUqiOkqFEqRnI0wqcM6JsnYdzCFFix3ENTSPUtmiMvhPdZoJSR1tJi8h3CZ1pxVZFfb9GxCpEl2S/6My3YIQv4jdKQ5uPk9Du7RsJ1j6WQhwWX1uPpC9sKKHoWOgoKLpO8JuZEY37hY66wwH4cfJ3tVLOvteabPXYiWdgHvXyUIBEVIVV2xYMF6CKQTjPZXN9cvyYel4AcVTPx65nvg15ENAz29vzvcG73jHIZ/bT5LN8TfIZynj1+vnHVBOn333Qz1qwE4o9Uwwd6HDTxnHGF1/8orX96rAZBbMJ15vwg+fMEkYiMAh+NUabTTjZ9Hm6iJwtqyXyWVKWbElgF7NVPptleQp5ycpF2YUTYzQqXhh//HKvze+F0nSPPaiPOwwG3SIPKm0CahUTPBuT439BIVHVStkp7HgMuEbiONjBHQYQ+KbxvAckoceFsMFJU90Z1C/U2dZXPuYPPkgESzms74zzVE53mCICxReL1XwBbIp5kk/zVcymK6p0mnOWUvGsYvM0Koqe9aKImOYe47SrFf9CgppQwpZyRM+fu/8v+t960T82vl7wVozj61Kg5PYbj8c4u7CmtnFY9I/Jk/k1OIPbwXn6BPxpQyyZx93vFY2y/8yX4Oc/AQ5S1mE3DQAA',
    },
})
Record({
    $id: Now.ID['0c57219b4787f21051a3e84d416d4330'],
    table: 'sys_hub_action_instance_v2',
    data: {
        action_type: 'f9d01dd2c31332002841b63b12d3aea1',
        action_type_parent: 'baf174c8c3c232002841b63b12d3aee4',
        compiled_snapshot: 'f9d01dd2c31332002841b63b12d3aea1',
        flow: 'b93fc4ce47fca21051a3e84d416d4326',
        order: '19',
        parent_ui_id: '8f79400a-99d6-4e8b-bb3d-e706f0411852',
        ui_id: '4046ab44-6dce-4b8f-9585-deba5eb8f9de',
        values: 'H4sIAAAAAAAA/+1WTW/bOBD9K4TOtqAPyrJ9WzQbIEC3XSTdXOpWoMiRLSxFqiSVxGv4v+9QH46RFEW62z0EW18MDmeGbx7ncfTxEDDuaq2ulHVMcbjZ2ysRrIOkTKqIcqB5xVkSR1nMUlhSQeOFoGkeB7Og9n4URBSv4gVP4zRNoihZ0rhcpGWciJQBeD/FGkBPA1wbges7JjtvOBxsV1ZS34cGvnRg3fGIu6K2rWT729EJLXxXS2FABeuPn2ZBywzmc2CC9eHJ1ksBSVaCRNfrCdFThG7f+rXQvGtAuaKejG/HyItxh1xd4A4GeThxNAvgwYESgEAqJi3MgoYpwZw2+2DtTIcGA0y8V3J/8tjVyg2FNuzB1n/hyTTyfhVgZXwk4bQsRoIGc3XBHLvBzNx15sSXrjnYgRMBFeuke3NuGxzet/7ehxDHSjlFa9k16t3ASHBKcHYfnUUQ0Po6PfKhrOpmp++vJ5CXteopGUuUmjN5WjHnTF12zsM5BCCh57hhbVurbdEafVf3wQilCbcSF6HvEjzT1lsVDv0aIqssvET7RW++Zab2RfyGaTD4OAvs3r6RzNrHUpDD4kvnkQyFjSUUPQs9BUXfCT6Ym7p1v+BRdzACP87+rVbK7FutyVePnXgG5lEvDwWTAKqwatsxI2qmilE4z2Vzfdr4PvW8AOKkng99z3wd8iigZ7a357Hk3bAxyif7YfJZvib5jGW8ev38Z6qJkm8+6Gct2AvFnikGD3Sw6aIoFflnv+jssDpsJsFsgvUm+N1zZhEjEkjIr8ZoswlmmyFP70H5slqCyOKy5EsEm2crmmUpTRgteZmXvTsyhqPihf7Hz/fa/Fkojfc4gPqwAzLqFgS51Ib8YcGQZ2Ny+i8qbcKqk7JX2PHosyS5Jb5bPOEYmWYV8DxfzLPlis4RFJ+v0pzPkTharZDpjGbhMAbDKSwcspEds0RpUjKx9bToqsKuN2Tn+5M4xDrCsIQzhWWQEgg2H8rEInzE1jtht5sQkYg8Xy1yxudAY0SyihAJEjOngifIFa/4IgmLYrikogi5FghiTnpq4B8kaBAH22KO8Pnr+LMvfvZF3xffNxxf8BJNw/GyBinsV56maTJCg13moBieqifTcdwkt+Pm6QPzh43IeBH1v1c0KP8335mf/gbw3mN5lQ0AAA==',
    },
})
Record({
    $id: Now.ID['8857ed5b4787f21051a3e84d416d43f0'],
    table: 'sys_hub_action_instance_v2',
    data: {
        action_type: 'f9d01dd2c31332002841b63b12d3aea1',
        action_type_parent: 'baf174c8c3c232002841b63b12d3aee4',
        compiled_snapshot: 'f9d01dd2c31332002841b63b12d3aea1',
        flow: 'b93fc4ce47fca21051a3e84d416d4326',
        order: '3',
        parent_ui_id: 'd1e1ff62-c88e-4da6-9de0-6bb1d196866f',
        ui_id: '72b5e5e6-0a28-4e8b-b2c1-fa42db1675cf',
        values: 'H4sIAAAAAAAA/+1W207cMBD9lSjPS5Tr3t4oCAmJFgkqXroQOfZk16rjpLYDbFf5944TZ1lBVYHaPqB23zwX+8yZOZP9svMJNbyW51IbIilcb/U585f+tIzLMKWQzkpK4ijMIpLAPGVpNGVpEi/8ic9tXAosjBbRlCZRksRhGM/TqJgmRRSzhABEGCdJBRipgNaK4fmeiNYadjvdFqWoHwIF31rQpuvQy7huBNneuCC00A0XTIH0l19uJ35DFN5nQPnL3TPXawEJUoDA0KsR0XOEZtvYM6tpW4E0OR+NFy7z1Hm881P0YJKFE4UTHx4NSAYIpCRCw8SviGTE1GrrL41q0aCAsEsptvuIDZdmKLQij5p/x5fT0MaVgJVRR8L+mDuCBnN5Sgy5xpupadWer5pT0AMnDErSCnNyaBsCLhvb9yHFkEKM2bVoK/lpYMTfX3DQj1YjCGhsnRb5UFZ5vakfrkaQZ1z2lLgSRU2J2J+IMYoXrbFwdj4I6DmuSNNwuc4bVd/zPhmhVMFa4CGwU4Jvar6WwTCvAbJKgjO0n/bmG6K4LeIjXoPJ3cTXW30iiNZPpSCH+bfWIhkKcyXkPQs9BXk/CTaZKt6YY3zqHhzwbvK7WimyX40mXTxN4gGYJ7085kQAyFzLdUsU40TmTjgvZXO1d7xNPa+AOKrncz8zP4fsBPTCdnGY630aHE4+2R+Tz/w9yceV8e7189dUE8a/XOgHI9gLRR8oBh80sGrDMGHxnT20ejjtVqNgVv5y5R8/EG6QPO+4sfQRsfInq+GW3k/DeTkHlkVFQecIdZYt0ixL0pikBS1miz4c+cIPxSvjuzsyPtUDckIGdvdQq6+5rLG7g+fzBjynZu/FFzOQbVWA6jpvQ7RX4HbwsGPYTmCeqb0PhK1tWZdlyUF5deld4CTZZuBVSVYCnc2mR9l8kR6ldE6PFsmMHiGpabnALmRpFgyfyEC4tMAy3XXBy4Xzn+q/R/XbVvgr9DKu8DMOgumfCGjc31Bh4wzkg6Ce7XDn9G6cc/836I8t8mga9r93tM7/mX9Dtz8AHZLiBjsMAAA=',
    },
})
Record({
    $id: Now.ID['c057ed5b4787f21051a3e84d416d43ef'],
    table: 'sys_hub_action_instance_v2',
    data: {
        action_type: '9d09f99587003300663ca1bb36cb0ba3',
        action_type_parent: 'b93f42810b30030085c083eb37673a63',
        compiled_snapshot: '9d09f99587003300663ca1bb36cb0ba3',
        flow: 'b93fc4ce47fca21051a3e84d416d4326',
        order: '1',
        parent_ui_id: 'd1e1ff62-c88e-4da6-9de0-6bb1d196866f',
        ui_id: '35fec776-5894-4c8c-937c-3ae4f9416545',
        values: 'H4sIAAAAAAAA/+VYUW/iOBD+K1GeKZdAINC3UyukSr2ttO3ty97KmsROsc44qe20pYj/fuM4AQSUEi2VqO4JeTz2fDP+vrHDz4UPqeG5vJHagEzZ/VzfUP/Sh6SXBVHKojhLoRcGgxD6bBTRKBzSqB8Efsfn1o+Og3E2Hg9GcRD00T4c9lMIk6Q/TJMggQj9JMwYehpIBMPhM4jSjl8JCMYk0fKxBEU5SMIpk4abORF5ChYVulOuCwHzH/Wqm9rFu127pFMuqGLSv/z5q+MXoDCgYcq/XGxNHYtYQMIEuj7UkLcyMPNiNSTVnLPdbi7zvrmJXFELJej47NUwSRliyEBo1vFnICmYXM1XFsWA3kmxNky5NLijb51fNX/DuKPA+mUMs0qZm1sNSV0tZ86uwcC9UWVqSlW7ptOcp0y7elCWQSnM1abNOdwVVW2rJS5ttzoX5Ux+c+XwVxs0h4OWUiMIVthELfI6jex+mr98b1BOuKxqUk/awxarERijeFIai2fhM8FmuBGZQVFw+UgKlT/zajFimXUfBQ66mchfMKjmj7Lr2NzFukJ3gvbryvwDFLdZ/IXb4GIExAUyhLgj1HmpqlI+k1SUuppQILXby192fD3XVwK0XmeOJSdPpcXt6lBnTFzR7JJU8cL8iVs8szq5Zee31TY4yN3xmqtpLim3ofSG5Bp9/VPicrpY6DKxtesq9lQybZpfkuVqudzVXtvlLXX5cW6NLq82k9uXcK3QHdvtvg1qhYYnU2gUBF9Joxj8/CTaXnSuBJ+lvJAeZCddE1HnyhB3CBvS21VTa4EcAaERyJ2ltJfM30NV6yPjTNB9N9jETmzdYL3/5w12lupAQJS40+NScFk9RxDo2clmcJCzSbhF0IqXa9FUNtDprnjAM7n31lpCR8BpJHSPsb0Hh2cPxOaGqbi2fbs0xlo5/ZMpp987jXIWqzRXhdxT8+bpamnQ+L9Zf9j2R+5uLAiX+5TZKmbYNmZvuav8fivpb5LNzVy/w7kTv3HfkXLnM3vHFJfW8YgTPnnh9JGZdfTGi+bmBcS/++ZrxpHmoKr0zum9HB781ks23ss8IzM8cl7g94BiKbJKE1AM37KlpKT+Elgz0FIg4wofu855t0N9Zyg86eWoaM9MmVd5eyvvllf/x3k0Z3CTeU0idTTtYSJelYi3SqRd2m26XXTCd/Spu90EuKhOAz/yio3jZErl6p2O98FBHmDEke3wSFDhSUH9fr/cJ4G9ffMDrF/iH4Mz6mkpgyTqwTDuh2EQhAGNg1Ech6Nhkg0hjrK1uAnRMsX+jZAy5BjiIg2nGoIEu43LNfG2HeoIVA13r3Np/0HoxcazsJAYXgPrY+B1J0ryXDCQW63oAW+mPyY1/prog7NrR1/ij7eSP2xX2pn21vqzXiol/1vyp5JVAhmxoDcKaXoxisP4Isro8GJMYXAB42QQ9ylLo+yUj49f/wEQ7LuMHBcAAA==',
    },
})
Record({
    $id: Now.ID['c457ed5b4787f21051a3e84d416d43f9'],
    table: 'sys_hub_action_instance_v2',
    data: {
        action_type: 'f9d01dd2c31332002841b63b12d3aea1',
        action_type_parent: 'baf174c8c3c232002841b63b12d3aee4',
        compiled_snapshot: 'f9d01dd2c31332002841b63b12d3aea1',
        flow: 'b93fc4ce47fca21051a3e84d416d4326',
        order: '7',
        parent_ui_id: 'ba896eca-fca0-44dc-93c2-530ad16a4a1e',
        ui_id: 'c8fff015-ab9f-4dff-8802-de6ce5dfab6d',
        values: 'H4sIAAAAAAAA/+1WTU/jMBD9K5HPVZQ0aQm97VIhIbGAAHGhEDn2pLXWcYLtAN2q/30ncVIqilDRsge020s1X/abl3mT3K4IZVaU6kQZSxWDq6U54WRCIBrmQcwgPsgZHYbBKKQRJDGPwzGPo3hIBkQ0eTHwIDwMxywKo2gYBMMkDrNxlIVDHlGAEPMULQAzNbBSc7Qfqawbx2pl6iyX5ZOv4aEGY9drjHJhKkmXN10SethCSK5Bkcnt3YBUVON5FjSZrF6F9gUkaQYSUy97RK8R2mXV2LxkdQHKpqJ3nnaV0y7inUwxgkUNnDAYEHi2oDggkJxKAwNSUMWpLfWSTKyu0aGB8nMll5uMhVDWNVrQZyN+4c1x0OTlgJ2xjoSNmXYEOXc+pZZe4cnM1nrDVykYGMcJh5zW0h5t+1zCedU8d1diaSb76lLWhTpzjJDNAVvPozYIAqqmzwa5ayu/WpRPlz3IY6FaSroWZcmo3FjUWi2y2jZwVgQktBwXtKqEmqeVLh9FW4xQCn8u0fCbKcE7jZgr382rj6xS/xj909Z9Q7VomviBx2DxekDM0hxJasxLK8hh+lA3SFxjXQtpy0JLQdpOQlPMtKjsN7zqETrg68GfaiUbvTea7PBlErfAvOjlOaUSQKVGzWuquaAq7YSzK5vLTeBj6tkDYq+e63Zm3obcCWjHd7pd6525QCef0afJJ/lK8una+PL6+WuqCYbvLvStEWyFYrYUgxdamNVBEPHhfWPUxlmrWS+YGZnMyEXDmUGMSKB3gV3h/4wMZu6gNiVJkjwBPgqzjCWI9mB0GI9GCJPGGcsODtt0pAzfFXvmr++RaryYSofJWcDvn0r9M1UlPl8XuF6A1+nZ23ln+qouMtDrtbegxstwP3j9QV629L5TPm+aOs9znFnt726K/xy9wdHHluYeE9ovzWMBkps3RrbfmFAg4xZSN8KvtmYX9G664ObD49NWZzgO2t8XWqD/zPfH3W/iH9N1rQsAAA==',
    },
})
Record({
    $id: Now.ID['c857219b4787f21051a3e84d416d430f'],
    table: 'sys_hub_action_instance_v2',
    data: {
        action_type: 'f9d01dd2c31332002841b63b12d3aea1',
        action_type_parent: 'baf174c8c3c232002841b63b12d3aee4',
        compiled_snapshot: 'f9d01dd2c31332002841b63b12d3aea1',
        flow: 'b93fc4ce47fca21051a3e84d416d4326',
        order: '11',
        parent_ui_id: 'db898d51-2a0e-4917-ac1d-4b71e109491d',
        ui_id: '297cd307-5fce-4aaa-a798-098066ed3af7',
        values: 'H4sIAAAAAAAA/+VWTU/jMBD9K5HPVZU0SSm9raiQkFiQAHGhEE3sSetdxwm2A3Sr/vedfJUKECpa9oDobb7sN8/zprlZM+BOFvpEWwea4+XKngg2ZaODUeZHHKODjMMo8OMAQpxEIgrGIgrjgA2YrPMiFH5wGIx5GIThyPdHkyhIx2EajEQIiHWehhwp0yAvjCD7AVRVO9ZrW6WZKh6HBu8rtG6zoaiQtlSwuu6SyMOXUgmDmk1vbgesBEPnOTRsun4R2heQghQVpV70iF4idKuytkXBqxy1S2TvPO0qZ13EO5lRhIpqOIE/YPjkUAskIBkoiwOWgxbgCrNiU2cqchgEca7VapuxlNq1jebwZOUfujny67wMqTPekbA1k46g1p3NwMElncxdZbZ8FZKjbTkRmEGl3NGur004L+t3b0scpKqvLlSV67OWEbY9YOc9KksgsKz7rJG3bWWXy+Lxogd5LHVDSdeiKjiorQXOGZlWroazZqiw4TiHspR6kZSmeJBNMUHJhwtFxrCeErrTyoUetvM6JFZheEz+WeO+BiPrJn7SMVS8GTC7skcKrH1uhThM7qsaSdtY10LSsNBQkDSTUBdzI0v3g656wA74ZvCvWknj90aTHz5P4g6YZ708JaAQdWL1ogIjJOikE85r2VxsAx9Tzx4Qe/VcNTPzNuROQK98p7u13lkb6OQTf5p8Jl9JPl0bX14//001/ujdhb4zgo1Q7I5i6EKH88r3QxHd1UZlW2s97wUzZ9M5qeUXcodizgbztrhxR/4km6CIgzTlE0J4EB9GcRxGI4hSnh5Ak0400f/DnvmbO6KXHghUi8N0F989FuZ3ogt60zZwtUSv07C3BOulJHyvz/bSlZeCWNBze0WW0TCa4esV8L2a/9ia22Om+jV3LFEJ+8aQ9TsOc6LSYdIO3Ys91wW96y64/VT4tGUXjP3m94VW3rf5Yrj9C4KauNVfCwAA',
    },
})
Record({
    $id: Now.ID['c857ed5b4787f21051a3e84d416d43ef'],
    table: 'sys_hub_action_instance_v2',
    data: {
        action_type: '9d09f99587003300663ca1bb36cb0ba3',
        action_type_parent: 'b93f42810b30030085c083eb37673a63',
        compiled_snapshot: '9d09f99587003300663ca1bb36cb0ba3',
        flow: 'b93fc4ce47fca21051a3e84d416d4326',
        order: '2',
        parent_ui_id: 'd1e1ff62-c88e-4da6-9de0-6bb1d196866f',
        ui_id: '7c88816b-4520-4d64-8190-34904f0c8a36',
        values: 'H4sIAAAAAAAA/+VY32/iOBD+V6I8A5eQhEDfVu1Vqq63ldrevuytLMc/inXGydpOW4r433cSJ4CAtkRLJap79Hjs+Wb8fWMn3xc+Jlbk6koZixVhd3NzRf0zfxQNeRATFqec4GEYJCGO2DimcTiicRRgv+eLyo9OggmfTJJxGgRRFASjUURwmGXRiGRBhmPwU3jGwNPiTDIYPmJZVuNnhCVjChn1UGJNBVYow/SBoZxzQSpPKkwh8fxbs+A6J7iC6n2hM6GEsboegiOZCkk1U/7Z9x89v8AaIlqm/bPF1tShkCXOmATX+wbzVgp2XqyGqJ5ztuvNZd5XN5FrWkEJej57tkxRBhg4lob1/BlWFNtcz1cWzTC9UXJtmAplYUe/cn424gXijoPKjzPIijA3txqipmbOzC+wxXdWl8SWunEl0xyqa1w9KOO4lPZ80+Ycboq6tvUSl7Zbnctypr66cvirDdojAktpAAQrqkQr5E0a/G6aP922KC+FqmvSTEo4WLkaYWu1yEpb4Vn4TLIZbIRmuCiEekCFzh9FvRiwzAYPEgYDLvMnCGrEgxo4Og+grnhwCfaL2vwNa1Fl8TdsA4sBkJDAEOSO0OSlrkv5iIgsTT2hsTJuL3/Z883cnEtszDpzKDn6WVa4XR2ajJErWrWEaFHYL7DFI2uSW/Z+W27Jm9ydrLlKckVFFcpsaE42EjLXV3/9uVhECWckTUf9ZDyJ+zEZk/4kSkk/wizmE4idxMnglhGg8KBdulzuKvNY23bU8fu1aHV8vlmMfQVqFL1ju963QaPo8GiKjoPgM2kagp+epLuL1JXgo5Qa0jfZSddENLm2yB3ChlR3VdZZIAdAaAVyU1Hay+avoWr0wQWTdN+Nd1lNbN14w//njXeS6gBAFLnTE0oKVT9fAOjJySZ5k7NZuEXQmpdr0dQ2bMiueLBnc++ls4QOgNNK6A5ie/cOzx6I7Q1Tc237dmmNjXKioyknGh5HOYtVmqtC7ql5+9StaND6v1T+eNsfuLuxIFzuU2anmGHXmMPlrvKjTtLfJJubuXiFc0d+E78i5d5H9o4pLG3iISd89CTga82uo7deNLdPWP63b75hHGoPqk7vlN7X4ZvfhtnG+1pwNIMjFwV8P+j6LWsQ1gzxvFQUNV8OawZWFOBCG9s473aoWwbCU14OivbslHm1t7fy7nj1v59HewZX3GsTaaIZDxLx6kS8VSLd0u7S7eIjvqOP3e0usZD1acBHYbFxnEzrXL/S8d45yDcYcWA7PBBUeFRQv98v90lgb998B+un+MNwQj2NMJzFQzxKozAMgjCgaTBO03A8yvgIpzFfixshowj0b4DEgWOAC7WcagkS7DYu18S7dqgDULXcvcjVv2UQDFPrVbCAGF4L633gTSfK8lwyrLZa0T3cTH9cNvgboicn144+xY+6UtxvV9qZ9tb6o14qpfhHiZ8lqwUyZsFwHFLSH6dh2o85HfUnFCd9PMmSNKKMxPyYj48fvwDnG0HdTRcAAA==',
    },
})
Record({
    $id: Now.ID['c857ed5b4787f21051a3e84d416d43f1'],
    table: 'sys_hub_action_instance_v2',
    data: {
        action_type: 'f8f2e9920b10030085c083eb37673abd',
        action_type_parent: 'bae0a1120b10030085c083eb37673a92',
        compiled_snapshot: 'f8f2e9920b10030085c083eb37673abd',
        flow: 'b93fc4ce47fca21051a3e84d416d4326',
        order: '4',
        parent_ui_id: 'd1e1ff62-c88e-4da6-9de0-6bb1d196866f',
        ui_id: '67f3679f-8e6a-4289-be38-2d4ef546fac9',
        values: 'H4sIAAAAAAAA/+2YXW/iOBSG/0rla8o6JEDgrhpUqavdGamdnZtSRcZ2ilfGyfijUzbiv69jOyEDUwZ22ItKXPp82O85OU+N+1gBhDUrxJ1QGglMH9bqjoApGOWDHCaYJuMco0EEhxGKaZqQJBqRJI4j0AOsjhun+YBOJgO4iCCMIUyHGKYxXcTj0ThGGNo4gVbURkqKC0ns+gVxUxuqSplFzotvfUm/Gqr0ZmO9hKmSo/WXEGQteMk4kVSA6eNTD5RI2v00lWBa7biOFcTRgnIbet8o2lWo12W9JgU2Kyp0xhrjHyFzFjxXdzPrsUm1HNgD9FVTQajVkSOuaA+skCBIF3INploaa5AUkU+Cr9uIJRPa17lCr4r9Yw+OB3VcTm1hOPSgXWahP96cz5BGD3ZnrI1s21UwTJVvCaE5Mlx/6Np8wKey/uw+RaMFb7ILblbio28IaDfofA6jrAha1nXWyn1Z+cOy+HbfiLxlwnUklMgLjHi7QlpLtjC6llMByqlr8QqVJRPPWSmLF+aSrZRV/5nbRb8eEnumYs+i78e1b7uK+rfWPnPmL0iyuog/7TY2edMDaq0+cKTUthTbw+yrqZX4wkIJmeuCb0GdhyUr9Y095YUGzZver1KywAeHEm9n0OvYQvKaIU6pyJR4NkgShkQWaNln5b51nIbMEeoaZD4HeTtqAzBumTnf97y4tKuP3hFwiQ7jEixbXvyg/QCXFL4jXEJZ756X/w0VGB0aRpJuh89Kt8UjnuWM8u7F0jj2Cel4TkPkCFUNIjfhjKvbIOstuQEat/wRNC5/B5rBidC8fcmkEL4nbi7XzBHs4INTSuPtMP5dGCkOoJMtmXIj9SZCnYjTUDpCZIPS717lLkm74v8LSPEFpAtIb4KUDA/OaOcXUIsDLgRh9Zmqg5O/C6i6Eeu/HqtqjNM0jUaL62Q4gNcJGSXXaTSB13EygUkOcYriUd+/SvpFntuvLtVm87QP4dn2PQ3dI9rSvq0Mp+pnbQrgtk4Zkrrwttdps2MAODnXa+ud8Xv5AfmzS/DgkOaT7VASYzuLdPe5Vc3D6XMwnQNRCDoHvTmoo7J6Kp3ZRtiqWoezVdVm4y1GorBB1FluswlaKxep8JISO9TO+p0lcxQF+zn+KXJETxpwZ4ZezXxT9tsUgG11+r6wvRv3IQS4nX77zLo37/BsN29y4fZXubUyWda+iuy1av9snhHmp38BZwQoR2AUAAA=',
    },
})
Record({
    $id: Now.ID['1347ad5b4787f21051a3e84d416d4368'],
    table: 'sys_hub_flow_logic_instance_v2',
    data: {
        block: '1b47ad5b4787f21051a3e84d416d4367',
        flow: '6d0bc80a47fca21051a3e84d416d43fa',
        logic_definition: 'df4e1945c3e232002841b63b12d3ae3e',
        order: '10',
        outputs_assigned: 'has_badging_officer,approved',
        parent_ui_id: 'db898d51-2a0e-4917-ac1d-4b71e109491d',
        ui_id: '05e7c1a7-3c83-4723-ac1a-c6ff3163aec3',
        values: 'H4sIAAAAAAAA/+1Vy27bMBD8lYBny5VsWZJzC1AEMJA2QOPmUhTCilzaRGlSESk7bpB/79KSrSJpgrbIoYeebM4+ODPchR6YbX3dere0F86plWHnXx6Y1HZ3ZVeKL4zzYDje7N1CsHM2yScyTjmmueQwSeJZAlMsUpEmmUinKbARUyEvkRPJ45fykFOegQ1S5hpcWYFYKbMqrZSKY0PBLeg2RBP6L5SrNexve8g39DNifK20aDDw/TpiNTTUzlPt+cOTkN/XWGqoUFPxkorfXYJ2+AdMj8VE9aynejZQfVVHuJyClbUawRBgGxFIJiOG9x6NQOIgA58R24AR4G2zPyENgrg2egDWynhqx0LyvVPfqXcahzyJpJdjFzsdy966DuZrS6yua6+s6RAPle5ruNXtxnzstATTUUKr/dF0QlpH/bAOnAOJnpG8Wdvdp+OFl8oc5PVBbTno0wm8b1TVenThkVq1fOpNB1396qlQ44auLTdQ18HhurFbdbiKmG/GK02HcZhaohimeAw8yByToTC+JPz9Ab6FRgXNH6jN4X1a9dmouxYPw53lXCbTTEQxz7Mo5VUazXNeREmRiVzMsOIFZ48Hf8u7NijrnOo9KTtbKcHxRtX+gihssZf/OHqDrZq9OqsyHqaR9JFDNFzDKsXPV0n27r7VLv0Gv2PxxUDwOeWXtmbyf2v+va2R+bxIp0kRzfIKorSQGBWzaRbRI0lM53KeQfzXW0Mzp0z4PHXzt+2Z9EeBXDkivAzY4qc8saehCns2QDvbfAtSB+zxB14fNG/8BgAA',
    },
})
Record({
    $id: Now.ID['1f47ad5b4787f21051a3e84d416d4378'],
    table: 'sys_hub_flow_logic_instance_v2',
    data: {
        block: '1747ad5b4787f21051a3e84d416d4378',
        flow: '6d0bc80a47fca21051a3e84d416d43fa',
        logic_definition: 'd176605ea76103004f27b0d2187901c7',
        order: '17',
        parent_ui_id: 'bdddb37b-5649-4efd-86ed-dd1f2477bfa6',
        ui_id: '7929c42c-a941-4e25-aa0f-abf19e0544a0',
        values: 'H4sIAAAAAAAA/6tWyi8tKSgtKQ7JdywuzkzPU7KKjtVRyswDiUHYZYlFmYlJOalQbkpqcmZxZn5eCEjME0ldSmVeYm5mMrJQeX5RdlpOfjlCrBYAD1ouqHEAAAA=',
    },
})
Record({
    $id: Now.ID['1f47ad5b4787f21051a3e84d416d437f'],
    table: 'sys_hub_flow_logic_instance_v2',
    data: {
        block: '1747ad5b4787f21051a3e84d416d437f',
        flow: '6d0bc80a47fca21051a3e84d416d43fa',
        logic_definition: 'df4e1945c3e232002841b63b12d3ae3e',
        order: '20',
        outputs_assigned: 'has_badging_officer,approved',
        parent_ui_id: '8f79400a-99d6-4e8b-bb3d-e706f0411852',
        ui_id: '22c3ac77-6f22-48df-8b7f-ba4eee88d72a',
        values: 'H4sIAAAAAAAA/+1VXWvbMBT9K8XPcWYnju3kLTACgW6FNevLKOZaukrEFMm15KRZ6H/fle0ko1tLGWPsYW/WuR865+hefAxM46rG2ZWZWyvXOph9OQZCmf21WUu21NaBZnh7sEsezAIYj0SUMEwywWAUR5MYxpgnPIlTnoyn02AQSJ8Xi5Fg0Ut5yChPwxYpcwO2KIGvpV4XRgjJsKbgDlTjoxF9c2krBYe7HhKgLBLMNlLxGj3h+0FQQU39HBXPjs9C7lBhoaBERdWrusF3i77FW6meionrVc/16sL1VSH+cgqWxigETYCpuScZDwJ8dKg5EodW0iDYgubgTH04IzUCv9HqAmykdtQu8MmPVn6j3knk8wSSXoZd7Hwseu86mG0MsbqpnDS6QxyUqq9hRjVb/bHT4l1HAY1yJ9cJaSz1w8pz9iR6RuJ2Y/afThcupG7l9UFlGKjzCZyrZdk4tP6RGrl67k0HXf/qqVDhlq4ttlBV3uGqNjvZXkXMt8O1osPQjy1R9GM8BOZlDslQGC4If9/Cd1BLr/kDtWnfp5GftXxosJ3uNGMiHqc8jFiWhgkrk3CasTyM85RnfIIly1nw1PpbPDReWedU70nR2UoJltWycnOisMNe/tPgD6zV5NVZFdFlGkkfOUTD9Vd36Q38TsXzC8GfKb+0NaP/W/PvbY3IpnkyjvNwkpUQJrnAMJ+M05AeSWAyFdMUot/eGpo5qf3/qZu/Xc+kP3Jk0hLhlceWP+TxAw2V37MLtDf1Vy/1gj19B5G0fBL9BgAA',
    },
})
Record({
    $id: Now.ID['5747ad5b4787f21051a3e84d416d436b'],
    table: 'sys_hub_flow_logic_instance_v2',
    data: {
        block: '5f47ad5b4787f21051a3e84d416d436a',
        flow: '6d0bc80a47fca21051a3e84d416d43fa',
        logic_definition: 'd176605ea76103004f27b0d2187901c7',
        order: '12',
        parent_ui_id: 'db898d51-2a0e-4917-ac1d-4b71e109491d',
        ui_id: '5dd11ec3-5bc7-4f82-be1d-d41ff74afb7e',
        values: 'H4sIAAAAAAAA/6tWyi8tKSgtKQ7JdywuzkzPU7KKjtVRyswDiUHYZYlFmYlJOalQbkpqcmZxZn5eCEjME0ldSmVeYm5mMrJQeX5RdlpOfjlCrBYAD1ouqHEAAAA=',
    },
})
Record({
    $id: Now.ID['5b47ad5b4787f21051a3e84d416d4382'],
    table: 'sys_hub_flow_logic_instance_v2',
    data: {
        block: '5347ad5b4787f21051a3e84d416d4382',
        flow: '6d0bc80a47fca21051a3e84d416d43fa',
        logic_definition: 'd176605ea76103004f27b0d2187901c7',
        order: '21',
        parent_ui_id: '8f79400a-99d6-4e8b-bb3d-e706f0411852',
        ui_id: '2a63c7cf-3cc8-4eb5-97d2-aed587d42fb5',
        values: 'H4sIAAAAAAAA/6tWyi8tKSgtKQ7JdywuzkzPU7KKjtVRyswDiUHYZYlFmYlJOalQbkpqcmZxZn5eCEjME0ldSmVeYm5mMrJQeX5RdlpOfjlCrBYAD1ouqHEAAAA=',
    },
})
Record({
    $id: Now.ID['9347ad5b4787f21051a3e84d416d4347'],
    table: 'sys_hub_flow_logic_instance_v2',
    data: {
        block: '9b47ad5b4787f21051a3e84d416d4346',
        flow: '6d0bc80a47fca21051a3e84d416d43fa',
        logic_definition: 'e9060aa2c3013010ace8b740ad40dd51',
        order: '0',
        ui_id: 'd1e1ff62-c88e-4da6-9de0-6bb1d196866f',
        values: 'H4sIAAAAAAAA/6tWyi8tKSgtKQ7JdywuzkzPU7KKjtVRyswDiUHYZYlFmYlJOalQbkpqcmZxZn5eCEjME0ldSmVeYm5mMrJQeX5RdlpOfjlCrBYAD1ouqHEAAAA=',
    },
})
Record({
    $id: Now.ID['9747ad5b4787f21051a3e84d416d4372'],
    table: 'sys_hub_flow_logic_instance_v2',
    data: {
        block: '9f47ad5b4787f21051a3e84d416d4371',
        flow: '6d0bc80a47fca21051a3e84d416d43fa',
        logic_definition: 'af4e1945c3e232002841b63b12d3ae3e',
        order: '14',
        parent_ui_id: 'd77967ac-e414-490c-9821-4dc2c8fcfc62',
        ui_id: 'bdddb37b-5649-4efd-86ed-dd1f2477bfa6',
        values: 'H4sIAAAAAAAA/+1U22rbQBD9FaNnWejq21toGjA0TYlNIJQgVquRvXS1q+6u7KjG/95ZXRzTODSEPvZNe+Z2zsxBB0fWpqqNXssrrdlGOIvvT67DhMXw++AIUoKzcKgUOTNMirQFXGdHeG0DyxyEYaYZXUvQwoy2ZAcjLimxyZiXM11x0jy8M51uGc8V9DwqonCaAeUsDn+ETFNBykkGHLuujGJig+Usx1fhkyKY04BG4SQKfT+cxUE2ibIgzCMCJMK8ofDTIGv0pUXcN/XaeYjrYZJUuaUV+K4DzwZEDji6IFyD65RE5MRI1ZwQBSS/E/wF2DJhsJ1jk581+4W9wySxiQWgRgpd8PRM+z12MN1KRuGuapfWIoZkvK+hktel+NrpsBeAgtTcDBdApNbYDypL2rLoKRWrrdzfDwNvmGgF9kF7In56EYNryGoD2h4GOJTYKC1JVeFy0krJHWuLkUvpbTg+vILLPQ61HvMItcQ93BHxbhC/buEHophVcYttsLijmRHNaNr6EdsZhRKO7VrSn7Ul1AnspaTdNjBBU8Uqc4VzdtCzPrqvzXzm48MhSgqg0+lknMzm8TimMzqeR1M6Rs/ExTwOJkmcePdA8fLH43L1+fbb+vG1wT/c5184f06SIgn85LLz48kl51/w/Nt2D/9id3ugd7rd9/3/dj+3O9NpZ9teWzv8w25/stbuJujONzlQppHI2mLL4Q9vAw0agNFzaC/VDyvhBTv+BjvQGRIrBgAA',
    },
})
Record({
    $id: Now.ID['9b47ad5b4787f21051a3e84d416d434e'],
    table: 'sys_hub_flow_logic_instance_v2',
    data: {
        block: '9347ad5b4787f21051a3e84d416d434e',
        flow: '6d0bc80a47fca21051a3e84d416d43fa',
        logic_definition: 'af4e1945c3e232002841b63b12d3ae3e',
        order: '5',
        parent_ui_id: 'd1e1ff62-c88e-4da6-9de0-6bb1d196866f',
        ui_id: 'ba896eca-fca0-44dc-93c2-530ad16a4a1e',
        values: 'H4sIAAAAAAAA/+1UTW/bMAz9K4PPieGP2E1yCzYUGLCtwFr0shUGLdGJMFnyJDlpFuS/j/JHWrQJNgw97mY9iuR71KMPgW5d0zp7p1fWirUKlt8eJoFQHqPvQ6CgxmAZMK24cEKrogMmwRZk6wOrpjF6i5wgLmwjYX//OsI2QnKDQ/UGDNVwaILl4UXI7RssJJQoqcCtM0KtKV1wOlURVPGCxSxN8jSJomQ+i8s8LeOEp4CQ0r0x8f1I9t2nDplcVOH7EW7HTtpwTyuOJgE+OlSc6C8rkBYnQQ2Kg9Nmf0IMAr9R8gnYCOWoXOAvP1rxi2onWeYvVkgaGfbB07EYRtbDbKMFw5vGE+wRB6UccpiWba2+9Dr8sLGCVrpx2IS0luph40l7FgOl6najd1/HhtdCdQKHoNQM5OkEjsZQtg6tfxiUWFOhooamoeEU/jFFl0xc6nAt6RBWUu+oqXdOCMwTD2lGEF4T/qGD78EIr+IzlaHknmYJVrCicxmVc4YkHLuxFD9bT6gXOEgp+mnQBcuMaNyK+mxxYH2cvLboM3ceDvlVleZXi2o6xxyms2S+mJaYzqcJn2GVzfIK2CKEzqogC+vA4fH4vY2ilMNFa79V2bfYiwVkVRZH2fm9mOXn9uLMRlxehuQPy+Cf7y93IYqi/8vwfBmELXpTD9q65v+8Cw/e+H0H2/uGIxOWiNx57OP4V/eBPRlAsOfQTpsfXsITdvwN23GRGB8GAAA=',
    },
})
Record({
    $id: Now.ID['9f47ad5b4787f21051a3e84d416d4361'],
    table: 'sys_hub_flow_logic_instance_v2',
    data: {
        block: '9747ad5b4787f21051a3e84d416d4361',
        flow: '6d0bc80a47fca21051a3e84d416d43fa',
        logic_definition: 'd176605ea76103004f27b0d2187901c7',
        order: '8',
        parent_ui_id: 'ba896eca-fca0-44dc-93c2-530ad16a4a1e',
        ui_id: 'daf6cfd3-d4e8-41e7-bdbd-643ed57bd0bc',
        values: 'H4sIAAAAAAAA/6tWyi8tKSgtKQ7JdywuzkzPU7KKjtVRyswDiUHYZYlFmYlJOalQbkpqcmZxZn5eCEjME0ldSmVeYm5mMrJQeX5RdlpOfjlCrBYAD1ouqHEAAAA=',
    },
})
Record({
    $id: Now.ID['9f47ad5b4787f21051a3e84d416d4364'],
    table: 'sys_hub_flow_logic_instance_v2',
    data: {
        block: '9747ad5b4787f21051a3e84d416d4364',
        connected_to: 'ba896eca-fca0-44dc-93c2-530ad16a4a1e',
        flow: '6d0bc80a47fca21051a3e84d416d43fa',
        logic_definition: '1f781bf3c32232002841b63b12d3aee6',
        order: '9',
        parent_ui_id: 'd1e1ff62-c88e-4da6-9de0-6bb1d196866f',
        ui_id: 'db898d51-2a0e-4917-ac1d-4b71e109491d',
        values: 'H4sIAAAAAAAA/6tWyi8tKSgtKQ7JdywuzkzPU7KKjtVRyswDiUHYZYlFmYlJOalQbkpqcmZxZn5eCEjME0ldSmVeYm5mMrJQeX5RdlpOfjlCrBYAD1ouqHEAAAA=',
    },
})
Record({
    $id: Now.ID['d347ad5b4787f21051a3e84d416d437c'],
    table: 'sys_hub_flow_logic_instance_v2',
    data: {
        block: 'db47ad5b4787f21051a3e84d416d437b',
        flow: '6d0bc80a47fca21051a3e84d416d43fa',
        logic_definition: 'af4e1945c3e232002841b63b12d3ae3e',
        order: '18',
        parent_ui_id: 'd77967ac-e414-490c-9821-4dc2c8fcfc62',
        ui_id: '8f79400a-99d6-4e8b-bb3d-e706f0411852',
        values: 'H4sIAAAAAAAA/+1Uy27bMBD8FUNnWdC7tm9B2wABkqaIgwBFEQgrkrKJUqRKUnZcw//epR6O0Tho0PbYmzhL7s7szmrvqdY2rTX36sIYvpLe4uuj73HpMPzeexJq5i08oiTllitZdIDvbUC0LnCtCDh8sgYzkWpSAl1xuZqoquKEabxJuWkE7B7e/ICsuaCaDVwa0FjRYmSx/yVkdw0rBJRMYN6l1ZgGn3OKpyqEKpqTiCRxnsRhGM/SqMyTMoppAgwSvDc+fD9Km1x3iP+qZlcPcTNWUpo6WlHoe+zJMkkZlq5AGOZ7NUgKVundEdEM6K0Uz8CaS4vpPHf5yfAfmDvOMnexYqiRsD54PBZDJ3uYrBX267ZxBHvEQimGN0SJtpafeh1uBqyCVthxBoi0BvOxxpF2LAZK1XKttndjwUsuO4FDUODkxPEEFttQtpYZNxgmWI2JihqaBptTNFptePcYudTBSuAhqITaYlHnswCIIx5gjyC4RPxDBz+A5k7FDabpvOBolmA4KTpPYjqrUcKha0vxvXWEeoGDlKLvBl4wRPPGXmCdDRtYH/yXhj7x8n7/jsxmsygvp2kWh9OU5ul0Fs3DaZLOw7QKyQySPLhjBCcfDIY1h8PV8uPN5/svL73+9wn/xS7MIauyKMzO70Kan9uFM1vw+gLEv1kAN7I3+j8Mw/8LcLoA3BS9kQdtXfE/9v+jM3tfwfS+oYxwg0TuHXY1/vddYIcG4OQU2ir9zUl4xg4/AXxBYYhBBgAA',
    },
})
Record({
    $id: Now.ID['df47ad5b4787f21051a3e84d416d4351'],
    table: 'sys_hub_flow_logic_instance_v2',
    data: {
        block: 'd747ad5b4787f21051a3e84d416d4351',
        flow: '6d0bc80a47fca21051a3e84d416d43fa',
        logic_definition: 'df4e1945c3e232002841b63b12d3ae3e',
        order: '6',
        outputs_assigned: 'has_badging_officer,approved',
        parent_ui_id: 'ba896eca-fca0-44dc-93c2-530ad16a4a1e',
        ui_id: 'a035ed8c-f1ed-4d27-a46e-03a0f60493b7',
        values: 'H4sIAAAAAAAA/+1VXWvbMBT9K0XPcWYnju3krTAChW6FNevLKOZaukrEFMm15LRZ6X/fle0ko1vLNsbYw54Snfuhc47uxY/Mtr5uvVvZc+fU2rDFp0cmtb2/tGvFL4zzYDhe792FYAs2yScyTjmmueQwSeJZAlMsUpEmmUinU2AjpkJeIieSxy/lIac8A1ukzA24sgKxVmZdWikVx4aCO9BtiCb0XyhXa9jfDJBv6GfE+EZp0WDgeztiNTTUzlPt4vFZyO9rLDVUqKl4RcVvlqAd/gLTQzFRPRuonp2ovqojXE7BylqNYAiwjQgkkxHDB49GIHGQgc+IbcEI8LbZH5EGQVwZfQI2ynhqx0Lyg1NfqHcahzyJpJdjHzsey8G6HuYbS6yuaq+s6REPlR5quNXt1rzvtQTTUUKr/cF0QlpH/bAOnAOJgZG83tj7D4cLl8p08oagthz08QTeN6pqPbrwSK1aPfemhy5/9FSocUvXlluo6+Bw3did6q4i5tvxWtNhHKaWKIYpHgMPMsdkKIyXhL/t4BtoVND8jtp079Oqj0bdtdgNd5ZzmUwzEcU8z6KUV2k0z3kRJUUmcjHDihecPXX+lndtUNY7NXhS9rZSguONqv05UdjhIP9p9Ae2avbqrMr4NI2kjxyi4fqbq/QT9A7F5yd+3zN+aWkm/5fm31samc+LdJoU0SyvIEoLiVExm2YRPZLEdC7nGcS/vTQ0c8qEr1M/f7uByXAUyJUjwquAXXyTJ/Y0VGHNTtC9bT4HqSfs6StHA6FC+wYAAA==',
    },
})
Record({
    $id: Now.ID['df47ad5b4787f21051a3e84d416d436e'],
    table: 'sys_hub_flow_logic_instance_v2',
    data: {
        block: 'd747ad5b4787f21051a3e84d416d436e',
        flow: '6d0bc80a47fca21051a3e84d416d43fa',
        logic_definition: '35d60003e6022010a5e40cdd1254dd23',
        order: '13',
        ui_id: 'd77967ac-e414-490c-9821-4dc2c8fcfc62',
        values: 'H4sIAAAAAAAA/+1Y32/jNgz+Vwajj2lm58clzVvRLkCHtQWWXF/mwpAtJtVNsXy2nLYX5H8fKctKnGTXoZf1YQtQBDYpkZ/IjxTdladKnZW6mKrLohDz1Bv98djyREoyfF55KVuAN/KiqNBMl0UUeS1vyWRJwlXoLSEvhEpDbxR6QdsPvVboFZALJsU3plEzVvmCaaP/dXJ/ZxYkapFJeLmPv0BCqhWJOFRPZ8myfjC7vrAla0uWztsTnYt0biycLY0u9NZrfFtAUbD5O/evdwFNkidYsMrGWKrna6DAQD4aX19eTW/u7ybTy+nnSQN36N2kGuaQ2/NxaJ/NBEgezVgCuqgWTwS5uWXZmIRm2yoMQ68U09cMfmMxSHod0U9tLySL+JMD45FK5atbofMSnPpJpNpo0lLK1saoWy127HGYsVLqyOTSrXJqllDyIshzlUcVRw47lg3UVxSOWrVgKWda5RvIMyaLjV7lvAJkdMHWvpdIQjrXT07Z8+l3jX+NdGNINzm14h8NvLV4rLgXTXP7YXcb3xnyWxuN90W98/2o+y7uFPjvVEP7TOOp3x102wpqLImKjDlqPm7NTvkdK0Gq6fqNumjG/tKk7KeJaY37iCLbV6KNj32AR6wS3ylL8TkVX0u44U45hC7E3Yv+eXJx4Z/32ICfx0POzv1hwAKWsHgAsUv2Grs8F0Um2evDqdmfmv2p2Z+a/anZ/4ebffIkJM8hNTO/4NjvUWhnf+pwW1N/czV+LRRJLjJN4Vmi3hyoFiI3kEx7Fm31/ohRXJKxHM1pyFHQPIBpCoaJyEjSbtEQndl2iz4PlCHqKWXYfLbBvQFnF30prqvbk9yiBeE8GqrLPSB1gGrNVRXzZgb0rjFDF28UtDx40ZBy4A6bY5qTEFPvkahOQNVSeUV6FeIb2u75tG4GeJDEnty9RnYgqLOlRAL3GcWvkmgWyzqVSpaL9K4CT6NEVWcPm3hayXVzxkBFWaAjyOgwhM5CnU2e1PPvNZKxSM25rVKqhEn3xjQ24bjUUFSJQfzR15IWVH6t6aiCTeR8gy3VHfGBZClqhw2uOBi7VLl1xbRXXXrHoOVL54h88f93jHncSUx1ndWJ8WeDDuuzTj8Ouh0/8ONPATB86A6GQTLoXWwl7hcikr1PNtlr/KfFJlDVLuqCp6gfKYXDj0vhcTNly3Q7PM3CdYnZnjBQ3pwtUA8SFpTgBcsyLJQoy9VSGBT0sdCeS3xpz3AeQvQ0ELWrTtDGaLP2Zk56YPgpFJspKMPN/6D3HOoU1JEsUEjJHN+6JoP97zLTf3Zbyt9djbvcneLmn8fktuYv5wM/GA6SpPsJiL/9fr8bD3o+4z2fc55s8XcDbw+v5W2slASW/jvE/Zi7amaDc7j91NoPv7UOMueRiFJxsKiSzSER9Mk+JdlN/V9dUrxizkSyLXpW+Z9E8o1s/RfQLDk/HxYAAA==',
    },
})
Record({
    $id: Now.ID['df47ad5b4787f21051a3e84d416d4375'],
    table: 'sys_hub_flow_logic_instance_v2',
    data: {
        block: 'd747ad5b4787f21051a3e84d416d4375',
        flow: '6d0bc80a47fca21051a3e84d416d43fa',
        logic_definition: 'df4e1945c3e232002841b63b12d3ae3e',
        order: '16',
        outputs_assigned: 'has_badging_officer,approved',
        parent_ui_id: 'bdddb37b-5649-4efd-86ed-dd1f2477bfa6',
        ui_id: '8bf2705f-87b1-46bb-8238-f92e7eb0e2e5',
        values: 'H4sIAAAAAAAA/+1VXWvbMBT9K8XPcWYnju3kLTACgW6FNevLKOZaukrEFMm15KRZ6H/fVezEo1tLGWPsYW/WuR865+hefAxM46rG2ZWZWyvXOph9OQZCmf21WUu21NaBZnh7sEsezII0G4koYZhkgsEojiYxjDFPeBKnPBmnSTAIpM+LxUiw6KU8ZJSnYYuUuQFblMDXUq8LI4RkWFNwB6rx0Yi+ubSVgsNdBwlQFglmG6l4jZ7w/SCooKZ+jopnx2chd6iwUFCioupV3eC7RdfirVTPxcT1quN61XN9VYi/nIKlMQpBE2Bq7knGgwAfHWqOxOEkaRBsQXNwpj5ckBqB32jVAxupHbULfPKjld+odxL5PIGkl2EbuxyLzrsWZhtDrG4qJ41uEQel6mqYUc1Wf2y1eNdRQKPc2XVCGkv9sPKcPYmOkbjdmP2n84ULqU/yuqAyDNTlBM7VsmwcWv9IjVw996aFrn/1VKhwS9cWW6gq73BVm508XUXMt8O1osPQjy1R9GM8BOZlDslQGC4If3+C76CWXvMHanN6n0Z+1vKhwW66mYjHKQ8jlqVhwsoknGYsD+M85RmfYMlyFjyd/C0eGq+sdarzpGhtpQTLalm5OVHYYSf/afAH1mry6qyKqJ9G0kcO0XD91V16A79z8bwn+DPll7Zm9H9r/r2tEdk0T8ZxHk6yEsIkFxjmk3Ea0iMJTKZimkL021tDMye1/z+187frmHRHjkxaIrzy2PKHPH6gofJ71kN7U3/1Unvs6TvBp4V4/QYAAA==',
    },
})
Record({
    $id: Now.ID['0057219b4787f21051a3e84d416d432a'],
    table: 'sys_hub_flow_logic_instance_v2',
    data: {
        block: 'd747ad5b4787f21051a3e84d416d4375',
        flow: 'b93fc4ce47fca21051a3e84d416d4326',
        logic_definition: 'df4e1945c3e232002841b63b12d3ae3e',
        order: '16',
        outputs_assigned: 'has_badging_officer,approved',
        parent_ui_id: 'bdddb37b-5649-4efd-86ed-dd1f2477bfa6',
        ui_id: '8bf2705f-87b1-46bb-8238-f92e7eb0e2e5',
        values: 'H4sIAAAAAAAA/+1VXWvbMBT9K0XPcWYnjuPkrbQUCt0Ka9aXMcK1PhJRWXL1kTYL/e+7ip24rFvpoOxh7M0690o651wdvCMm+CZ4tzCnzsmVJvOvOyKUebgyK0kvtfOgKb/ZuktG5qSYjkSaU55PBYVRlk4yGPMyZ3lWsHxc5GRAZOzLxEjQ9Hd9nGKfhppj5xrcsgK2knq1NEJIyi0WN6BCrKb4zaRrFGxvO0iAchxhupaKWR4JfxuQBiye53HzfEekxg8N6krqO9zxovmtFBVUXLUcTzqOJz3HVwX4bROLlTGKg+6Aq+68hQ38w0Wnw1gWWWcDwh8914wjub3GAalBM/DGbo+I5cCuteqBNWptJdbw6OR3vDRPY5/gKJfytnZcLjszW1icg4cbbwP1wfKDUwYluNYoxgUE5c+eY23DdeOl0e0WD5U67DYq1PpT6ww5HnCYHSLBIQneRKGReSdD3KzNw+cDywup9550RWUoqOMKvLeyCj7y2ZEgFz873UK/9JorXuO1yxqaJs6rsWYj91ch83q4UrgYxsePFGMYhkCjzCFOAYYXiJ/v4VuwMmr+iMfspx3kFy3vA+8yQkU2LliS0mmR5LTKk9mUlklWFmzKJryiJSVPA+K27kyBc71bOKblfYhaW+86l5at0XELtbLxp0hqwztDngbvENfJq1kQaf/aUTF6hm/0r2T0DbwOGT3tib2k+sdpHP1P4z+SRjGdlfk4K5PJtIIkLwVPysm4SHCyguczMSsgfcc0xper4/+0Hc+m43acIJUOJSwidvmsj23x0cb89tCDsXdRfI89/QC3jfJSrQcAAA==',
    },
})
Record({
    $id: Now.ID['0057219b4787f21051a3e84d416d4334'],
    table: 'sys_hub_flow_logic_instance_v2',
    data: {
        block: '1747ad5b4787f21051a3e84d416d437f',
        flow: 'b93fc4ce47fca21051a3e84d416d4326',
        logic_definition: 'df4e1945c3e232002841b63b12d3ae3e',
        order: '20',
        outputs_assigned: 'has_badging_officer,approved',
        parent_ui_id: '8f79400a-99d6-4e8b-bb3d-e706f0411852',
        ui_id: '22c3ac77-6f22-48df-8b7f-ba4eee88d72a',
        values: 'H4sIAAAAAAAA/+1VXWvbMBT9K0XPcWYnjuPkrbQUCt0Ka9aXMcK1PhJRWXL1kTYL/e+7ip24rFvpoOxh7M0690o651wdvCMm+CZ4tzCnzsmVJvOvOyKUebgyK0kvtfOgKb/ZuktG5gTGI5HmlOdTQWGUpZMMxrzMWZ4VLB/PZmRAZOzLxEjQ9Hd9nGKfhppj5xrcsgK2knq1NEJIyi0WN6BCrKb4zaRrFGxvO0iAchxhupaKWR4JfxuQBiye53HzfEekxg8N6krqO9zxovmtFBVUXLUcTzqOJz3HVwX4bROLlTGKg+6Aq+68hQ38w0Wnw1gWWWcDwh8914wjub3GAalBM/DGbo+I5cCuteqBNWptJdbw6OR3vDRPY5/gKJfytnZcLjszW1icg4cbbwP1wfKDUwYluNYoxgUE5c+eY23DdeOl0e0WD5U67DYq1PpT6ww5HnCYHSLBIQneRKGReSdD3KzNw+cDywup9550RWUoqOMKvLeyCj7y2ZEgFz873UK/9JorXuO1yxqaJs6rsWYj91ch83q4UrgYxsePFGMYhkCjzCFOAYYXiJ/v4VuwMmr+iMfspx3kFy3vA99npJhSkY0LlqR0WiQ5rfJkNqVlkpUFm7IJr2hJydOAuK07U+Bc7xaOaXkfotbWu86lZWt03EKtbPwpktrwzpCnwTvEdfJqFkTav3ZUjJ7hG/0rGX0Dr0NGT3tiL6n+cRpH/9P4j6RRTGdlPs7KZDKtIMlLwZNyMi4SnKzg+UzMCkjfMY3x5er4P23Hs+m4HSdIpUMJi4hdPutjW3y0Mb899GDsXRTfY08/AATWl5CtBwAA',
    },
})
Record({
    $id: Now.ID['4057219b4787f21051a3e84d416d4309'],
    table: 'sys_hub_flow_logic_instance_v2',
    data: {
        block: '9747ad5b4787f21051a3e84d416d4361',
        flow: 'b93fc4ce47fca21051a3e84d416d4326',
        logic_definition: 'd176605ea76103004f27b0d2187901c7',
        order: '8',
        parent_ui_id: 'ba896eca-fca0-44dc-93c2-530ad16a4a1e',
        ui_id: 'daf6cfd3-d4e8-41e7-bdbd-643ed57bd0bc',
        values: 'H4sIAAAAAAAA/6tWyi8tKSgtKQ7JdywuzkzPU7KKjtVRyswDiUHYZYlFmYlJOalQbkpqcmZxZn5eCEjME0ldSmVeYm5mMrJQeX5RdlpOfjlCrBYAD1ouqHEAAAA=',
    },
})
Record({
    $id: Now.ID['4057ed5b4787f21051a3e84d416d43ee'],
    table: 'sys_hub_flow_logic_instance_v2',
    data: {
        block: '9b47ad5b4787f21051a3e84d416d4346',
        flow: 'b93fc4ce47fca21051a3e84d416d4326',
        logic_definition: 'e9060aa2c3013010ace8b740ad40dd51',
        order: '0',
        ui_id: 'd1e1ff62-c88e-4da6-9de0-6bb1d196866f',
        values: 'H4sIAAAAAAAA/6tWyi8tKSgtKQ7JdywuzkzPU7KKjtVRyswDiUHYZYlFmYlJOalQbkpqcmZxZn5eCEjME0ldSmVeYm5mMrJQeX5RdlpOfjlCrBYAD1ouqHEAAAA=',
    },
})
Record({
    $id: Now.ID['4057ed5b4787f21051a3e84d416d43f9'],
    table: 'sys_hub_flow_logic_instance_v2',
    data: {
        block: 'd747ad5b4787f21051a3e84d416d4351',
        flow: 'b93fc4ce47fca21051a3e84d416d4326',
        logic_definition: 'df4e1945c3e232002841b63b12d3ae3e',
        order: '6',
        outputs_assigned: 'has_badging_officer,approved',
        parent_ui_id: 'ba896eca-fca0-44dc-93c2-530ad16a4a1e',
        ui_id: 'a035ed8c-f1ed-4d27-a46e-03a0f60493b7',
        values: 'H4sIAAAAAAAA/+1VXWvbMBT9K0XPdmYnju3krbQUCt0Ka9aXMcK1PhJRWXIlOW0W+t93FTtxWbfSQdnD2FOsc6+kc87VITtiWt+03i3MqXNypcn8644IZR6uzErSS+08aMpvtu6SkTkZF2ORZJRnhaAwTpNpChNeZixLc5ZNJkAiIkNfKsaCJr/r4xT7NNQcO9fglhWwldSrpRFCUm6xuAHVhmqK30y6RsH2toe8xZ+I0LVUzPLA91tEGrB4nMe98x2RGj80qCup73DDi+a3MlRQcdVRPOkpngwUX+Xvt00oVsYoDroHrvrzFqjgwwUoF3QYywLrNCL80XPNOJIToRaRGjQDb+z2iFgO7FqrAVij1k5iDY9OfsdLsyT0CY5yKe9qx+Wy97KDxTl4uEE/qW8tPzhlUILrjGJcQKv82XOsa7huvDS62+KhUofdRrW1/tQ5Q44HHEaHSOuQBG+C0MC8lyFu1ubh84HlhdR7T/qiMhTUcQXeW1m1PvDZkVYufna6g37pNVe8xmuXNTRNmFdjzUbur0Lm9WilcDEKbx8phiyMgAaZI5wCjC4QP9/Dt2Bl0PwRj9lPu5VftLxv+T4ieUFFOslZnNAijzNaZfGsoGWcljkr2JRXtKTkKSJu684UODe4hWNa3rdBa+dd79KyMzpsoVY2/hRJbXhvyFP0DmmdvpoFkQyvHRWjZ/hG/0ZE30DrENHTgddLpn8cxvH/MP4jYRTFrMwmaRlPiwrirBQ8LqeTPMbJCp7NxCyH5B3DGF6uDv+m3Xg2PbfjBKl0KGERsMtnfWyLjzbEd4AejL0L4gfs6QcWlctoqwcAAA==',
    },
})
Record({
    $id: Now.ID['4457219b4787f21051a3e84d416d430f'],
    table: 'sys_hub_flow_logic_instance_v2',
    data: {
        block: '1b47ad5b4787f21051a3e84d416d4367',
        flow: 'b93fc4ce47fca21051a3e84d416d4326',
        logic_definition: 'df4e1945c3e232002841b63b12d3ae3e',
        order: '10',
        outputs_assigned: 'has_badging_officer,approved',
        parent_ui_id: 'db898d51-2a0e-4917-ac1d-4b71e109491d',
        ui_id: '05e7c1a7-3c83-4723-ac1a-c6ff3163aec3',
        values: 'H4sIAAAAAAAA/+1VXU/bMBT9K8jPSZe0aZL2DYGQkNiQRsfLNFU3/mgtHDvYTqGr+O+7btIGjQ0xjadpT43PvbbPOddH3RHT+qb1bmFOnZMrTeZfd0Qo83BlVpJeaudBU36zdZeMzMm4GIskozwrBIVxmkxTmPAyY1mas2ySAYmIDH2pGAua/K6PU+zTUHPsXINbVsBWUq+WRghJucXiBlQbqil+M+kaBdvbHvIWfyJC11IxywPfbxFpwOJxHvfOd0Rq/NCgrqS+ww0vmt/KUEHFVUfxpKd4MlB8lb/fNqFYGaM46B646s9boIIPF6Bc0GEsC6zTiPBHzzXjSE6EWkRq0Ay8sdsjYjmwa60GYI1aO4k1PDr5HS/NktAnOMqlvKsdl8veyw4W5+DhBv2kvrX84JRBCa4zinEBrfJnz7Gu4brx0uhui4dKHXYb1db6U+cMOR5wGB0irUMSvAlCA/NehrhZm4fPB5YXUu896YvKUFDHFXhvZdX6wGdHWrn42ekO+qXXXPEar13W0DRhXo01G7m/CpnXo5XCxSi8faQYsjACGmSOcAowukD8fA/fgpVB80c8Zj/tVn7R8r7l+4jkBRXpJGdxQos8zmiVxbOClnFa5qxgU17RkpKniLitO1Pg3OAWjml53watnXe9S8vO6LCFWtn4UyS14b0hT9E7pHX6ahZEMrx2VIye4RsdIpq8jKjo/f7bjL6B1yGjpwOxl1T/OI3j/2n8R9IoilmZTdIynhYVxFkpeFxOJ3mMkxU8m4lZDsk7pjG8XB3+TrvxbHpuxwlS6VDCImCXz/rYFh9tyO8APRh7F8QP2NMPR260SawHAAA=',
    },
})
Record({
    $id: Now.ID['8057219b4787f21051a3e84d416d430c'],
    table: 'sys_hub_flow_logic_instance_v2',
    data: {
        block: '9747ad5b4787f21051a3e84d416d4364',
        connected_to: 'ba896eca-fca0-44dc-93c2-530ad16a4a1e',
        flow: 'b93fc4ce47fca21051a3e84d416d4326',
        logic_definition: '1f781bf3c32232002841b63b12d3aee6',
        order: '9',
        parent_ui_id: 'd1e1ff62-c88e-4da6-9de0-6bb1d196866f',
        ui_id: 'db898d51-2a0e-4917-ac1d-4b71e109491d',
        values: 'H4sIAAAAAAAA/6tWyi8tKSgtKQ7JdywuzkzPU7KKjtVRyswDiUHYZYlFmYlJOalQbkpqcmZxZn5eCEjME0ldSmVeYm5mMrJQeX5RdlpOfjlCrBYAD1ouqHEAAAA=',
    },
})
Record({
    $id: Now.ID['8457219b4787f21051a3e84d416d4326'],
    table: 'sys_hub_flow_logic_instance_v2',
    data: {
        block: '9f47ad5b4787f21051a3e84d416d4371',
        flow: 'b93fc4ce47fca21051a3e84d416d4326',
        logic_definition: 'af4e1945c3e232002841b63b12d3ae3e',
        order: '14',
        parent_ui_id: 'd77967ac-e414-490c-9821-4dc2c8fcfc62',
        ui_id: 'bdddb37b-5649-4efd-86ed-dd1f2477bfa6',
        values: 'H4sIAAAAAAAA/+1V224aMRD9FeTnBe2V21sEjYSUNFVAkaoqWg1eL1g19tb2Qiji3zveC6CGqknbx77h4/HMOWfniANRpS1Kaxbqxhi+kmT85dkjXDoMfx+IhA0jY0KVzLjlSqYV4JEtiNJdzDImLbf7zlQxI21nDVvWEYqCK8a6jJtCwP7pjeV0zUWmWcOjAI3TLNNkfPjpimfYLfchD0Y0oFHYj0LfD4dxsOxHyyDMImAQYUMBSyawdNIK6NxViPdLZXZfONxYzeWqOd81XeYtqHTmWAW+R9iLZTJjyCcHYZhHNiAzsErvT4hmkD1IcQbWXFpsR1zxi+HfcWCYJK4wZyiRsvrydEwbG2s4n4IFpFJSW+qmlK4Vp8zU5mQsh1LYySVWFzwUldHVEwtL0b5WotzIj7Uj5NSg/WqIlAZJsMIpddQbHfl8rXaPLctbLitXmkv3WcXpBBa9W5bW8TkQJtgGG6UbKAp0NC202vLqMXLZ9FYCD71cqB0OdXvZA+qI99BY6N0iPq3gJ9DcqbjHNvi4prkEw2la7TC2Q5sYOXrE7M1EgDFnkehu+q10FGvJjbi09sc9oZoX9gYnb1mj4+i9jsRFGg6HKMkZHQz63WQ4irsxHdLuKBrQLu5jnI/ioJ/ESe+RUVyg43E2/3D/afH5dUz+uM/78jOCJE8CP7men7h/LT9XkvPO0IS/CY37Ym/MjO/7/0Pz16HhJq1XvdFWDf+HmXl2Aalnnrym3CC1hcNm7b+Nu9jjcnF6Ce2U/upEnbHjD5iTVSq3BgAA',
    },
})
Record({
    $id: Now.ID['8457219b4787f21051a3e84d416d4330'],
    table: 'sys_hub_flow_logic_instance_v2',
    data: {
        block: 'db47ad5b4787f21051a3e84d416d437b',
        flow: 'b93fc4ce47fca21051a3e84d416d4326',
        logic_definition: 'af4e1945c3e232002841b63b12d3ae3e',
        order: '18',
        parent_ui_id: 'd77967ac-e414-490c-9821-4dc2c8fcfc62',
        ui_id: '8f79400a-99d6-4e8b-bb3d-e706f0411852',
        values: 'H4sIAAAAAAAA/+1VXWvbMBT9K0HPjvFnluStpCsU0nU0oVBGMdeynIjJkmfJSTOT/74r2/lgzVhL97i36Fzp3nOO7yENUbUpa6OX6kprvpJk+u3ZIVxaDH83RELByJRQJTNuuJJJCzhkA6K2hbmiYPHBGvRAqkEK2YrL1UDlOaeswpsZ16WA3eObH9A1F1nFei4lVDjRYGXa/FbiGfbLPcj9CfVpGIzCwPOCceSnozD1gywEBiE2FJAygVdnBxGDeYs4f1RndqXFtamQWn+e910WB1BVmWXlew5hL4bJjCGfHIRmDilAZmBUtTsiFYPsXooTsObSYDtiL79o/hMHBnFsL+YMJVLWFY/HpDeyg/NrMIBUamrqqr9K1wot1J05GcuhFmZ2jnUX7ksrtXtiIBWH10rUhfzSOUKODQ7fDZFaIwlWWqWWeq8jX6zV9uHA8obL1pW+KPBri+MJDHqX1sbyaQgTrMBGSQFliY4mZaU2vH2MXAp3JfDg5kJtcajdTReoJe6iseDeIH7dwo9QcaviDtu0+2NppqA5Tdo9xnZoEyN7h+idngnQ+iQS3U1+1JZiJ7kXl3T+2Ce04qW5wskb1uvYO69jcZaIpvlEx+OxP0qHURx4wygbRcOxP/GGYTTxotyjYwhH7gOjuEBuv/Z6v79dfL77unx6nZiPN3xfoiYQ57HvxZcTFY0uJepClt4Zo+AvMbLf8I0p8jzvf4w+HCOuk275e23t8H+YomcbmW7m0WvKNVJbWuz28B9kCztcLk7Poa2qvltRJ2z/C9xuue7NBgAA',
    },
})
Record({
    $id: Now.ID['8c57219b4787f21051a3e84d416d4322'],
    table: 'sys_hub_flow_logic_instance_v2',
    data: {
        block: 'd747ad5b4787f21051a3e84d416d436e',
        flow: 'b93fc4ce47fca21051a3e84d416d4326',
        logic_definition: '35d60003e6022010a5e40cdd1254dd23',
        order: '13',
        ui_id: 'd77967ac-e414-490c-9821-4dc2c8fcfc62',
        values: 'H4sIAAAAAAAA/+1ZXW/iOBT9K6uoj5RNCgyUt6pdpK6mRVqYedlUkWMb6hmTZGyHtoP47+NrOyYhzKymy2irFRKK4nv9ce851ydx2AR5qYpSyXl+JSVbZsH474dOwDKw6ftNkKEVDcZBkkiFVCmTJOgEa8RLMG7iYE2FZHkWB+M4iLphHHTiQFLBEGdfkdKeSS5WSBn/n7PpvemA81XB6fM0/UQxuDZgItTeneF1dWNGfUJr1OUoW3ZnSrBsaWY4WxtfHGy3urWiUqLlK8dv9wOa4Ue6QnaOCc+fbigAQ8V4cnN1Pb+d3s/mV/MPs0bccXCbKbqkwuVHaPdswSgnyQJhqqTtPGOwzB0qJmA0wzZxHAclm78U9D1KKYfmGC7VfDHMqC+CIpLkGX/xPZQoqXc/skwZT1Zy3tlN6nuzvfkIXaCSq8Rw6Xt5N8JAXkKFyEVia+TwwrwR9TXAUblWKCNI5WIX8gJxufPngtiAjC+qjXtOOM2W6tE7+yFct/rXoFtDuuPUmf8t8G7GY+Eum9O1YfcDXwn5nUPjdahf/Bj10OMOwP9gN3TPlM761aA7KahiwXlipgPx8X32tt+xCMqbS//Dvmhif2Uo+21mpLEdUeJ0Jdmt0Q7wiLsk9M6SfcjYl5LeEu8c0R5Ne5eDc3x5GZ730ZCcpyOCzsNRhCKEUTqkqSd7q1WeMFlw9PLxJPYnsT+J/UnsT2L/PxZ7/Mg4ETSrv/ODsmlXgYRuKyo00YHZboZjzTUYagTrIU7I9KgDBa79AIbe1v4E0X7MaIvEghUK4F5riwGoMuoVtx0jbyJD/D3LPtshtfD18aVkN3ZSCE13YD4qU2i8FSwjdprKc20zb+KgDk3WTtxQGIyjTkCfFc0IJT4Hz763QPVMdfEEY0CmYwrYhqIZl+yrXrAfQrcF1dlhB5BvJg48a17cIIW0opVYlYJWwOQMU2lxsY1pAcxYt0Ipr3rmvFxl9zZl4MXujRovznLTIqyUOhJaQLIQvsttMXvMn/6qQp2wzODinDzHiPsWUlo401JBoECwfJHXHEm5i0annHwpYYiNxC2W2ES2B4tm2/Gl7B4XP1nN9unwxopZVkE1atmHul/Kdz7zFhTqwISt1F05XxyvnMNTQb+2oB/26reh2idpPknzW6zkk8yeZPatFueDYzJcDC/QAF0M0qh3EUZh+i6iSN/0hqMID/uXNab/gOp0p4Ad3Y3v445xexDYY3xaGSsxAp5+inNnOED66JikO9auj1gIx+XbqUgd6KaueKjrJ0xtb54ttZ9yuoKiWKGi0NsxKUS+ZiYK+FjUXXLd6C70eVhHDwfirhWqrqYIdXfn5I9IMIBDi1yhB/+K91iawQKk9h9M1JZDI5j7+va994ZqBxAyDKPREOPeOwo7YDAY9NJhP0SkHxJCcG0H7IJoReUqP81zTlG2V/pzHdfvE8jo15T/ER/Hxy7+hcv6sBRW3v9eD7/72rl2te3xwQw+Bc/Bdlv9WwiOF10TDNdNT7n4DJtnZ9t+A3wUxSd3HAAA',
    },
})
Record({
    $id: Now.ID['8c57219b4787f21051a3e84d416d432c'],
    table: 'sys_hub_flow_logic_instance_v2',
    data: {
        block: '1747ad5b4787f21051a3e84d416d4378',
        flow: 'b93fc4ce47fca21051a3e84d416d4326',
        logic_definition: 'd176605ea76103004f27b0d2187901c7',
        order: '17',
        parent_ui_id: 'bdddb37b-5649-4efd-86ed-dd1f2477bfa6',
        ui_id: '7929c42c-a941-4e25-aa0f-abf19e0544a0',
        values: 'H4sIAAAAAAAA/6tWyi8tKSgtKQ7JdywuzkzPU7KKjtVRyswDiUHYZYlFmYlJOalQbkpqcmZxZn5eCEjME0ldSmVeYm5mMrJQeX5RdlpOfjlCrBYAD1ouqHEAAAA=',
    },
})
Record({
    $id: Now.ID['8c57219b4787f21051a3e84d416d4336'],
    table: 'sys_hub_flow_logic_instance_v2',
    data: {
        block: '5347ad5b4787f21051a3e84d416d4382',
        flow: 'b93fc4ce47fca21051a3e84d416d4326',
        logic_definition: 'd176605ea76103004f27b0d2187901c7',
        order: '21',
        parent_ui_id: '8f79400a-99d6-4e8b-bb3d-e706f0411852',
        ui_id: '2a63c7cf-3cc8-4eb5-97d2-aed587d42fb5',
        values: 'H4sIAAAAAAAA/6tWyi8tKSgtKQ7JdywuzkzPU7KKjtVRyswDiUHYZYlFmYlJOalQbkpqcmZxZn5eCEjME0ldSmVeYm5mMrJQeX5RdlpOfjlCrBYAD1ouqHEAAAA=',
    },
})
Record({
    $id: Now.ID['c857219b4787f21051a3e84d416d4312'],
    table: 'sys_hub_flow_logic_instance_v2',
    data: {
        block: '5f47ad5b4787f21051a3e84d416d436a',
        flow: 'b93fc4ce47fca21051a3e84d416d4326',
        logic_definition: 'd176605ea76103004f27b0d2187901c7',
        order: '12',
        parent_ui_id: 'db898d51-2a0e-4917-ac1d-4b71e109491d',
        ui_id: '5dd11ec3-5bc7-4f82-be1d-d41ff74afb7e',
        values: 'H4sIAAAAAAAA/6tWyi8tKSgtKQ7JdywuzkzPU7KKjtVRyswDiUHYZYlFmYlJOalQbkpqcmZxZn5eCEjME0ldSmVeYm5mMrJQeX5RdlpOfjlCrBYAD1ouqHEAAAA=',
    },
})
Record({
    $id: Now.ID['c857ed5b4787f21051a3e84d416d43f5'],
    table: 'sys_hub_flow_logic_instance_v2',
    data: {
        block: '9347ad5b4787f21051a3e84d416d434e',
        flow: 'b93fc4ce47fca21051a3e84d416d4326',
        logic_definition: 'af4e1945c3e232002841b63b12d3ae3e',
        order: '5',
        parent_ui_id: 'd1e1ff62-c88e-4da6-9de0-6bb1d196866f',
        ui_id: 'ba896eca-fca0-44dc-93c2-530ad16a4a1e',
        values: 'H4sIAAAAAAAA/+1Vy27bMBD8lYJnWdDDUmzfDAcBCqQN0AS5tIGw4sMmSomqSNlxBf97l3rYRuOgDZpjb+Ysdzkz2oFbohtbNdY86KUxcl2Sxdcnj8jSYfi7JSUUnCwI1SWTVuoy6wCPbEE1rrCsqlpvOUOISVMp2D++rNCNVKzmw/QKapxheU0W7W8lybBRBCDCOQ1pHKVxFATRbBrmaZyHEYuBQ4wDFeRc4dXVSOvDbYd4r/K1+8rhxtayXA/n22HK/QjqmjlWYeAR/mx5yZD9QoAy3CMFlAysrvdHpObA7kp1AjaytDiOuMvPRv7EB6MkcRcFR4mU98XjMRsc62FxDRaQSkNtUw9X6UZLyk1vDuMCGmVX51h/4a5yUvsWC7kau7VqivJz7wg5Dhg/ECKNQRK8ckod9UGHuN/o3ZeR5Y0sO1eGotIU1PEEFr3LG+v4tIQrXuCgrICqQkcztwCya0Yuhb9WePCF0jt81G2bD9QR99FY8G8Qv+7gR6ilU/EJx2BzTzMHI2nWbSaOQ5s4OXjE7M1KgTEnkehu9qNxFHvJg7is98e10FpWdokvb/mg4+C9XPSzHW/b9ErE6dVcTGY8hck0ms0nOY9nk4hNuUimqQA696FbeFCZsWD54fCtCYKYwasBea+xb0vXHBKRhEFyOV3T9FK6LuTqjZGK/hAp9z3/MlFBEPyP1D9HSpqsD8KgrXv8HRP15OLTv3n0mkqD1B4c9nH8h3GFPS6XpOfQTtffnagTdvgFTtYD2KsGAAA=',
    },
})
Record({
    $id: Now.ID['b93fc4ce47fca21051a3e84d416d4326'],
    table: 'sys_hub_flow_snapshot',
    data: {
        access: 'public',
        active: 'true',
        attributes:
            'browserActivatedIn=chrome,integrationActivatedIn=standalone,labelCacheCleanUpExecuted=true,viewActivatedIn=naturalLanguage',
        authored_on_release_version: '25000',
        callable_by_client_api: 'false',
        category: '{}',
        description: 'Badging officer is assigned according to the identity location.',
        flow_priority: 'MEDIUM',
        internal_name: 'subflow_badging_officer_approval',
        label_cache:
            '[{"name":"subflow.request.request_for","label":"Input➛request➛Request For","reference":"x_aleen_snguardian_identity","reference_display":"Identity","type":"reference","base_type":"reference","parent_table_name":"x_aleen_snguardian_request","column_name":"request_for","usedInstances":{"35fec776-5894-4c8c-937c-3ae4f9416545":["conditions"]}},{"name":"35fec776-5894-4c8c-937c-3ae4f9416545.Record.number","label":"1 - Look Up Record➛Identity Location Record➛Number","reference":"","reference_display":"Number","type":"string","base_type":"string","parent_table_name":"x_aleen_snguardian_identity_location","column_name":"number","usedInstances":{}},{"name":"35fec776-5894-4c8c-937c-3ae4f9416545.Record","label":"1 - Look Up Record➛Identity Location Record","reference":"x_aleen_snguardian_identity_location","reference_display":"Identity Location","type":"reference","base_type":"reference","usedInstances":{"bdddb37b-5649-4efd-86ed-dd1f2477bfa6":["condition"]},"attributes":{"element_mapping_provider":"com.glide.flow_design.action.data.FlowDesignVariableMapper"}},{"name":"35fec776-5894-4c8c-937c-3ae4f9416545.Record.location","label":"1 - Look Up Record➛Identity Location Record➛Location","reference":"x_aleen_snguardian_location","reference_display":"Location","type":"reference","base_type":"reference","parent_table_name":"x_aleen_snguardian_identity_location","column_name":"location","usedInstances":{"7c88816b-4520-4d64-8190-34904f0c8a36":["conditions"]}},{"name":"subflow.request","label":"Input➛request","reference":"x_aleen_snguardian_request","reference_display":"Request","type":"reference","base_type":"reference","usedInstances":{"72b5e5e6-0a28-4e8b-b2c1-fa42db1675cf":["record"],"67f3679f-8e6a-4289-be38-2d4ef546fac9":["record"],"c8fff015-ab9f-4dff-8802-de6ce5dfab6d":["record"],"297cd307-5fce-4aaa-a798-098066ed3af7":["record"],"33d4f536-4e2d-44af-bdb2-0471d4ca831a":["record"],"4046ab44-6dce-4b8f-9585-deba5eb8f9de":["record"],"d8f45478-b92d-4d8e-9e92-ddeec68bf140":["record"]},"attributes":{"sourceUiUniqueId":"","sourceType":"","sourceId":"","uiUniqueId":"580dcfd0-464e-4a9b-a1bd-e9f699e23dab","uiTypeLabel":"Reference"}},{"name":"subflow.request.number","label":"Input➛request➛Number","reference":"","reference_display":"Number","type":"string","base_type":"string","parent_table_name":"x_aleen_snguardian_request","column_name":"number","usedInstances":{"72b5e5e6-0a28-4e8b-b2c1-fa42db1675cf":["work_notes"],"c8fff015-ab9f-4dff-8802-de6ce5dfab6d":["work_notes"]}},{"name":"35fec776-5894-4c8c-937c-3ae4f9416545.Record.location.name","label":"1 - Look Up Record➛Identity Location Record➛Location➛Name","reference":"","reference_display":"Name","type":"string","base_type":"string","parent_table_name":"x_aleen_snguardian_location","column_name":"name","usedInstances":{"72b5e5e6-0a28-4e8b-b2c1-fa42db1675cf":["work_notes"],"4046ab44-6dce-4b8f-9585-deba5eb8f9de":["work_notes"]}},{"name":"7c88816b-4520-4d64-8190-34904f0c8a36.Record.officers","label":"2 - Look Up Record➛Location Administrator Record➛Badging Officer","reference":"sys_user","reference_display":"User","type":"glide_list","base_type":"glide_list","parent_table_name":"x_aleen_snguardian_badge_office","column_name":"officers","usedInstances":{"67f3679f-8e6a-4289-be38-2d4ef546fac9":["approval_conditions"],"8f79400a-99d6-4e8b-bb3d-e706f0411852":["condition"]}},{"name":"67f3679f-8e6a-4289-be38-2d4ef546fac9.approval_state","label":"4 - Ask For Approval➛Approval State","reference_display":"Approval State","type":"choice","base_type":"choice","choices":[{"label":"-- None --","value":"","order":0.0},{"label":"Not Yet Requested","value":"not requested","order":1.0},{"label":"Requested","value":"requested","order":2.0},{"label":"Approved","value":"approved","order":3.0},{"label":"Rejected","value":"rejected","order":4.0},{"label":"Cancelled","value":"cancelled","order":5.0},{"label":"No Longer Required","value":"not_required","order":6.0},{"label":"Skipped","value":"skipped","order":7.0}],"usedInstances":{"ba896eca-fca0-44dc-93c2-530ad16a4a1e":["condition"]},"attributes":{"element_mapping_provider":"com.glide.flow_design.action.data.FlowDesignVariableMapper"}},{"name":"subflow.request.request_for.full_name","label":"Input➛request➛Request For➛Full Name","reference":"","reference_display":"Full Name","type":"string","base_type":"string","parent_table_name":"x_aleen_snguardian_identity","column_name":"full_name","usedInstances":{"33d4f536-4e2d-44af-bdb2-0471d4ca831a":["work_notes"],"4046ab44-6dce-4b8f-9585-deba5eb8f9de":["work_notes"]}},{"name":"d77967ac-e414-490c-9821-4dc2c8fcfc62.__status__.code","label":"12 - Top Level Catch➛Error Status➛Code","reference":"","reference_display":"","type":"integer","base_type":"integer","column_name":"","usedInstances":{"33d4f536-4e2d-44af-bdb2-0471d4ca831a":["work_notes"],"4046ab44-6dce-4b8f-9585-deba5eb8f9de":["work_notes"],"d8f45478-b92d-4d8e-9e92-ddeec68bf140":["work_notes"]},"attributes":{}},{"name":"d77967ac-e414-490c-9821-4dc2c8fcfc62.__status__.message","label":"12 - Top Level Catch➛Error Status➛Message","reference":"","reference_display":"","type":"string","base_type":"string","column_name":"","usedInstances":{"33d4f536-4e2d-44af-bdb2-0471d4ca831a":["work_notes"],"4046ab44-6dce-4b8f-9585-deba5eb8f9de":["work_notes"],"d8f45478-b92d-4d8e-9e92-ddeec68bf140":["work_notes"]},"attributes":{}}]',
        master: 'true',
        name: 'Alert Subflow Badging Officer Approval',
        parent_flow: '6d0bc80a47fca21051a3e84d416d43fa',
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
    $id: Now.ID['563f08ce47fca21051a3e84d416d4352'],
    table: 'sys_flow_subflow_plan',
    data: {
        plan: 'com.snc.process_flow.engine.ProcessPlan@3b7a4c77',
        plan_id: '6d0bc80a47fca21051a3e84d416d43fa',
        snapshot: 'b93fc4ce47fca21051a3e84d416d4326',
        sys_domain: 'global',
        sys_domain_path: '/',
    },
})
Record({
    $id: Now.ID['1f2fc0ce47fca21051a3e84d416d43ec'],
    table: 'sys_hub_flow_output',
    data: {
        active: 'true',
        array: 'false',
        array_denormalized: 'false',
        attributes:
            'element_mapping_provider=com.glide.flow_design.action.data.FlowDesignVariableMapper,uiType=boolean,uiTypeLabel=True/False,uiUniqueId=67cf136d-0c76-4cb4-97c8-186d7d5ebc8c',
        audit: 'false',
        calculation: `(function calculatedFieldValue(current) {

	// Add your code here
	return '';  // return the calculated value

})(current);`,
        display: 'false',
        dynamic_creation: 'false',
        element: 'has_badging_officer',
        element_reference: 'false',
        function_field: 'false',
        internal_type: 'boolean',
        label: 'has badging officer',
        mandatory: 'false',
        max_length: '40',
        model: '6d0bc80a47fca21051a3e84d416d43fa',
        model_id: '6d0bc80a47fca21051a3e84d416d43fa',
        model_table: 'sys_hub_flow',
        name: 'var__m_sys_hub_flow_output_6d0bc80a47fca21051a3e84d416d43fa',
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
    $id: Now.ID['5f2fc0ce47fca21051a3e84d416d43f0'],
    table: 'sys_hub_flow_output',
    data: {
        active: 'true',
        array: 'false',
        array_denormalized: 'false',
        attributes:
            'element_mapping_provider=com.glide.flow_design.action.data.FlowDesignVariableMapper,uiType=boolean,uiTypeLabel=True/False,uiUniqueId=f7984318-57ba-48fe-8536-dedfe49f96a0',
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
        model: '6d0bc80a47fca21051a3e84d416d43fa',
        model_id: '6d0bc80a47fca21051a3e84d416d43fa',
        model_table: 'sys_hub_flow',
        name: 'var__m_sys_hub_flow_output_6d0bc80a47fca21051a3e84d416d43fa',
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
    $id: Now.ID['753fc4ce47fca21051a3e84d416d4356'],
    table: 'sys_hub_flow_output',
    data: {
        active: 'true',
        array: 'false',
        array_denormalized: 'false',
        attributes:
            'element_mapping_provider=com.glide.flow_design.action.data.FlowDesignVariableMapper,uiType=boolean,uiTypeLabel=True/False,uiUniqueId=f7984318-57ba-48fe-8536-dedfe49f96a0',
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
        model: 'b93fc4ce47fca21051a3e84d416d4326',
        model_id: 'b93fc4ce47fca21051a3e84d416d4326',
        model_table: 'sys_hub_flow_snapshot',
        name: 'var__m_sys_hub_flow_output_b93fc4ce47fca21051a3e84d416d4326',
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
    $id: Now.ID['fd3fc4ce47fca21051a3e84d416d434d'],
    table: 'sys_hub_flow_output',
    data: {
        active: 'true',
        array: 'false',
        array_denormalized: 'false',
        attributes:
            'element_mapping_provider=com.glide.flow_design.action.data.FlowDesignVariableMapper,uiType=boolean,uiTypeLabel=True/False,uiUniqueId=67cf136d-0c76-4cb4-97c8-186d7d5ebc8c',
        audit: 'false',
        calculation: `(function calculatedFieldValue(current) {

	// Add your code here
	return '';  // return the calculated value

})(current);`,
        display: 'false',
        dynamic_creation: 'false',
        element: 'has_badging_officer',
        element_reference: 'false',
        function_field: 'false',
        internal_type: 'boolean',
        label: 'has badging officer',
        mandatory: 'false',
        max_length: '40',
        model: 'b93fc4ce47fca21051a3e84d416d4326',
        model_id: 'b93fc4ce47fca21051a3e84d416d4326',
        model_table: 'sys_hub_flow_snapshot',
        name: 'var__m_sys_hub_flow_output_b93fc4ce47fca21051a3e84d416d4326',
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
