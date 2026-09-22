import { Record } from '@servicenow/sdk/core'

Record({
    $id: Now.ID['1c0f42f9473a265051a3e84d416d4322'],
    table: 'sys_decision_multi_result_element',
    data: {
        active: 'true',
        array: 'false',
        audit: 'false',
        calculation: `(function calculatedFieldValue(current) {

	// Add your code here
	return '';  // return the calculated value

})(current);`,
        column_label: 'Skip Manager Approval',
        display: 'false',
        dynamic_creation: 'false',
        element: 'u_skip_manager_approval',
        element_reference: 'false',
        function_field: 'false',
        internal_type: 'boolean',
        label: 'Skip Manager Approval',
        mandatory: 'false',
        max_length: '40',
        model: 'a97d0e39473a265051a3e84d416d43e1',
        model_id: 'a97d0e39473a265051a3e84d416d43e1',
        name: 'var__m_sys_decision_multi_result_element_a97d0e39473a265051a3e84d416d43e1',
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
