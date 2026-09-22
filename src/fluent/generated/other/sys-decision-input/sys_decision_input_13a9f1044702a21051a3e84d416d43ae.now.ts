import { Record } from '@servicenow/sdk/core'

Record({
    $id: Now.ID['13a9f1044702a21051a3e84d416d43ae'],
    table: 'sys_decision_input',
    data: {
        active: 'true',
        array: 'false',
        attributes:
            'element_mapping_provider=com.glide.decision_table.data.DecisionTableVariableMapper,element_mapping_provider=com.glide.decision_table.data.DecisionTableVariableMapper',
        audit: 'false',
        calculation: `(function calculatedFieldValue(current) {

	// Add your code here
	return '';  // return the calculated value

})(current);`,
        column_label: 'Location',
        display: 'false',
        dynamic_creation: 'false',
        element: 'u_location',
        element_reference: 'false',
        function_field: 'false',
        internal_type: 'reference',
        label: 'Location',
        mandatory: 'false',
        max_length: '32',
        model: 'd7a97dc04702a21051a3e84d416d43ee',
        model_id: 'd7a97dc04702a21051a3e84d416d43ee',
        model_table: 'sys_decision',
        name: 'var__m_sys_decision_input_d7a97dc04702a21051a3e84d416d43ee',
        order: '100',
        primary: 'false',
        read_only: 'false',
        reference: 'x_aleen_snguardian_location',
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
