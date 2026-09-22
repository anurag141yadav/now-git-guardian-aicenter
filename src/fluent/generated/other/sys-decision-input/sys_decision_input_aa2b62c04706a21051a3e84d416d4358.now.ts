import { Record } from '@servicenow/sdk/core'

Record({
    $id: Now.ID['aa2b62c04706a21051a3e84d416d4358'],
    table: 'sys_decision_input',
    data: {
        active: 'true',
        array: 'false',
        attributes: 'element_mapping_provider=com.glide.decision_table.data.DecisionTableVariableMapper',
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
        model: '1a2b26004706a21051a3e84d416d43b0',
        model_id: '1a2b26004706a21051a3e84d416d43b0',
        model_table: 'sys_decision',
        name: 'var__m_sys_decision_input_1a2b26004706a21051a3e84d416d43b0',
        order: '100',
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
