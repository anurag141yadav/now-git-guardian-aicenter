import { Record } from '@servicenow/sdk/core'

Record({
    $id: Now.ID['2d9af1444702a21051a3e84d416d438d'],
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
        choice: '1',
        choice_field: 'notification_type',
        choice_table: 'x_aleen_snguardian_decision_table_choice',
        column_label: 'Type',
        display: 'false',
        dynamic_creation: 'false',
        element: 'u_type',
        element_reference: 'false',
        function_field: 'false',
        internal_type: 'choice',
        label: 'Type',
        mandatory: 'false',
        max_length: '40',
        model: 'd7a97dc04702a21051a3e84d416d43ee',
        model_id: 'd7a97dc04702a21051a3e84d416d43ee',
        model_table: 'sys_decision',
        name: 'var__m_sys_decision_input_d7a97dc04702a21051a3e84d416d43ee',
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
