import { Record } from '@servicenow/sdk/core'

Record({
    $id: Now.ID['3dbc8639473a265051a3e84d416d43e0'],
    table: 'sys_decision_multi_result_element',
    data: {
        active: 'true',
        array: 'false',
        audit: 'false',
        calculation: `(function calculatedFieldValue(current) {

	// Add your code here
	return '';  // return the calculated value

})(current);`,
        column_label: 'show deletion checkbox',
        display: 'false',
        dynamic_creation: 'false',
        element: 'u_show_deletion_checkbox',
        element_reference: 'false',
        function_field: 'false',
        internal_type: 'boolean',
        label: 'show deletion checkbox',
        mandatory: 'false',
        max_length: '40',
        model: 'c68b06b5473a265051a3e84d416d435d',
        model_id: 'c68b06b5473a265051a3e84d416d435d',
        name: 'var__m_sys_decision_multi_result_element_c68b06b5473a265051a3e84d416d435d',
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
