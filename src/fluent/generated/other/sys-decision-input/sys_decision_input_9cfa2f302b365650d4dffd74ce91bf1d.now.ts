import { Record } from '@servicenow/sdk/core'

Record({
    $id: Now.ID['9cfa2f302b365650d4dffd74ce91bf1d'],
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
        column_label: 'table_name',
        display: 'false',
        dynamic_creation: 'false',
        element: 'u_table_name',
        element_reference: 'false',
        function_field: 'false',
        internal_type: 'string',
        label: 'table_name',
        mandatory: 'false',
        max_length: '255',
        model: '2e09e7bc2bf25650d4dffd74ce91bf27',
        model_id: '2e09e7bc2bf25650d4dffd74ce91bf27',
        model_table: 'sys_decision',
        name: 'var__m_sys_decision_input_2e09e7bc2bf25650d4dffd74ce91bf27',
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
