import { Record } from '@servicenow/sdk/core'

Record({
    $id: Now.ID['5b4e5ad233bd9e10bf1221382e5c7b49'],
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
        model: '043bd6de337d9e10bf1221382e5c7b8a',
        model_id: '043bd6de337d9e10bf1221382e5c7b8a',
        model_table: 'sys_decision',
        name: 'var__m_sys_decision_input_043bd6de337d9e10bf1221382e5c7b8a',
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
