import { Record } from '@servicenow/sdk/core'

Record({
    $id: Now.ID['ceebb08447ca621051a3e84d416d43d5'],
    table: 'sys_decision_multi_result_element',
    data: {
        active: 'true',
        array: 'false',
        audit: 'false',
        calculation: `(function calculatedFieldValue(current) {

	// Add your code here
	return '';  // return the calculated value

})(current);`,
        column_label: 'add_more_visitors',
        comments: 'Add More visitors',
        display: 'false',
        dynamic_creation: 'false',
        element: 'u_add_more_visitors',
        element_reference: 'false',
        function_field: 'false',
        internal_type: 'boolean',
        label: 'add_more_visitors',
        mandatory: 'false',
        max_length: '40',
        model: '5debb84447ca621051a3e84d416d43be',
        model_id: '5debb84447ca621051a3e84d416d43be',
        model_table: 'sys_decision',
        name: 'var__m_sys_decision_multi_result_element_5debb84447ca621051a3e84d416d43be',
        order: '800',
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
