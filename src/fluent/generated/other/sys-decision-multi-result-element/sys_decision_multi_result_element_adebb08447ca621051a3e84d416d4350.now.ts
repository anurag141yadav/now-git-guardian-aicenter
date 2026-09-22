import { Record } from '@servicenow/sdk/core'

Record({
    $id: Now.ID['adebb08447ca621051a3e84d416d4350'],
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
        choice_field: 'nda_sign_in_lobby',
        choice_table: 'x_aleen_snguardian_decision_table_choice',
        column_label: 'nda_sign',
        comments: 'NDA Sign',
        display: 'false',
        dynamic_creation: 'false',
        element: 'u_nda_sign',
        element_reference: 'false',
        function_field: 'false',
        internal_type: 'choice',
        label: 'nda_sign',
        mandatory: 'false',
        max_length: '40',
        model: '5debb84447ca621051a3e84d416d43be',
        model_id: '5debb84447ca621051a3e84d416d43be',
        model_table: 'sys_decision',
        name: 'var__m_sys_decision_multi_result_element_5debb84447ca621051a3e84d416d43be',
        order: '600',
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
