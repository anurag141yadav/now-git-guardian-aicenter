import { Record } from '@servicenow/sdk/core'

Record({
    $id: Now.ID['49990184470e621051a3e84d416d43b1'],
    table: 'sys_decision_multi_result_element',
    data: {
        active: 'true',
        array: 'false',
        audit: 'false',
        calculation: `(function calculatedFieldValue(current) {

	// Add your code here
	return '';  // return the calculated value

})(current);`,
        column_label: 'System Validity (days)',
        display: 'false',
        dynamic_creation: 'false',
        element: 'u_system_validity',
        element_reference: 'false',
        function_field: 'false',
        internal_type: 'string',
        label: 'System Validity (days)',
        mandatory: 'false',
        max_length: '40',
        model: '7c998544470e621051a3e84d416d434f',
        model_id: '7c998544470e621051a3e84d416d434f',
        model_table: 'sys_decision',
        name: 'var__m_sys_decision_multi_result_element_7c998544470e621051a3e84d416d434f',
        order: '400',
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
