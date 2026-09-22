import { Record } from '@servicenow/sdk/core'

Record({
    $id: Now.ID['51ba3c2447f6ae1051a3e84d416d431c'],
    table: 'sys_decision_multi_result_element',
    data: {
        active: 'true',
        array: 'false',
        audit: 'false',
        calculation: `(function calculatedFieldValue(current) {

	// Add your code here
	return '';  // return the calculated value

})(current);`,
        column_label: 'Default Access',
        display: 'false',
        dynamic_creation: 'false',
        element: 'u_default_access',
        element_reference: 'false',
        function_field: 'false',
        internal_type: 'boolean',
        label: 'Default Access',
        mandatory: 'false',
        max_length: '40',
        model: '7c998544470e621051a3e84d416d434f',
        model_id: '7c998544470e621051a3e84d416d434f',
        name: 'var__m_sys_decision_multi_result_element_7c998544470e621051a3e84d416d434f',
        order: '1100',
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
