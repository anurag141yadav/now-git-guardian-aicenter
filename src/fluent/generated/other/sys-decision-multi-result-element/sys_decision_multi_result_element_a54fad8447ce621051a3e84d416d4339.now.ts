import { Record } from '@servicenow/sdk/core'

Record({
    $id: Now.ID['a54fad8447ce621051a3e84d416d4339'],
    table: 'sys_decision_multi_result_element',
    data: {
        active: 'true',
        array: 'false',
        audit: 'false',
        calculation: `(function calculatedFieldValue(current) {

	// Add your code here
	return '';  // return the calculated value

})(current);`,
        choice: '1',
        choice_field: 'badge_assign_method',
        choice_table: 'x_aleen_snguardian_decision_table_choice',
        column_label: 'Asset assignment  method',
        display: 'false',
        dynamic_creation: 'false',
        element: 'u_asset_assignment_method',
        element_reference: 'false',
        function_field: 'false',
        internal_type: 'choice',
        label: 'Asset assignment  method',
        mandatory: 'false',
        max_length: '40',
        model: '7c998544470e621051a3e84d416d434f',
        model_id: '7c998544470e621051a3e84d416d434f',
        name: 'var__m_sys_decision_multi_result_element_7c998544470e621051a3e84d416d434f',
        order: '550',
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
