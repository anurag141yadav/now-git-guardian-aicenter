import { Record } from '@servicenow/sdk/core'

Record({
    $id: Now.ID['9aebf08447ca621051a3e84d416d434a'],
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
        choice_field: 'health_questions_in_lobby',
        choice_table: 'x_aleen_snguardian_decision_table_choice',
        column_label: 'health_question',
        comments: 'Health Question',
        display: 'false',
        dynamic_creation: 'false',
        element: 'u_health_question',
        element_reference: 'false',
        function_field: 'false',
        internal_type: 'choice',
        label: 'health_question',
        mandatory: 'false',
        max_length: '40',
        model: '5debb84447ca621051a3e84d416d43be',
        model_id: '5debb84447ca621051a3e84d416d43be',
        model_table: 'sys_decision',
        name: 'var__m_sys_decision_multi_result_element_5debb84447ca621051a3e84d416d43be',
        order: '700',
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
