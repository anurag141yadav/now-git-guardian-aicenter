import { Record } from '@servicenow/sdk/core'

Record({
    $id: Now.ID['91eb708447ca621051a3e84d416d43c1'],
    table: 'sys_decision_input',
    data: {
        active: 'true',
        array: 'false',
        attributes:
            'element_mapping_provider=com.glide.decision_table.data.DecisionTableVariableMapper,element_mapping_provider=com.glide.decision_table.data.DecisionTableVariableMapper,element_mapping_provider=com.glide.decision_table.data.DecisionTableVariableMapper',
        audit: 'false',
        calculation: `(function calculatedFieldValue(current) {

	// Add your code here
	return '';  // return the calculated value

})(current);`,
        choice: '1',
        choice_field: 'visiting_actor',
        choice_table: 'x_aleen_snguardian_decision_table_choice',
        column_label: 'actor',
        display: 'false',
        dynamic_creation: 'false',
        element: 'u_actor',
        element_reference: 'false',
        function_field: 'false',
        internal_type: 'choice',
        label: 'actor',
        mandatory: 'false',
        max_length: '40',
        model: '5debb84447ca621051a3e84d416d43be',
        model_id: '5debb84447ca621051a3e84d416d43be',
        model_table: 'sys_decision',
        name: 'var__m_sys_decision_input_5debb84447ca621051a3e84d416d43be',
        order: '300',
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
