import { Record } from '@servicenow/sdk/core'

Record({
    $id: Now.ID['f5ebb08447ca621051a3e84d416d43bd'],
    table: 'sys_decision_multi_result_element',
    data: {
        active: 'true',
        array: 'false',
        audit: 'false',
        calculation: `(function calculatedFieldValue(current) {

	// Add your code here
	return '';  // return the calculated value

})(current);`,
        column_label: 'nda_validity',
        comments: 'nda_validity',
        display: 'false',
        dynamic_creation: 'false',
        element: 'u_nda_validity',
        element_reference: 'false',
        function_field: 'false',
        internal_type: 'glide_duration',
        label: 'nda_validity',
        mandatory: 'false',
        max_length: '40',
        model: '5debb84447ca621051a3e84d416d43be',
        model_id: '5debb84447ca621051a3e84d416d43be',
        model_table: 'sys_decision',
        name: 'var__m_sys_decision_multi_result_element_5debb84447ca621051a3e84d416d43be',
        order: '200',
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
