import { Record } from '@servicenow/sdk/core'

Record({
    $id: Now.ID['fa2be6c04706a21051a3e84d416d43c3'],
    table: 'sys_decision_multi_result_element',
    data: {
        active: 'true',
        array: 'false',
        audit: 'false',
        calculation: `(function calculatedFieldValue(current) {

	// Add your code here
	return '';  // return the calculated value

})(current);`,
        column_label: 'Sub-System',
        display: 'false',
        dynamic_creation: 'false',
        element: 'u_sub_system',
        element_reference: 'false',
        function_field: 'false',
        internal_type: 'reference',
        label: 'Sub-System',
        mandatory: 'false',
        max_length: '32',
        model: '1a2b26004706a21051a3e84d416d43b0',
        model_id: '1a2b26004706a21051a3e84d416d43b0',
        name: 'var__m_sys_decision_multi_result_element_1a2b26004706a21051a3e84d416d43b0',
        order: '75',
        primary: 'false',
        read_only: 'false',
        reference: 'x_aleen_snguardian_system',
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
