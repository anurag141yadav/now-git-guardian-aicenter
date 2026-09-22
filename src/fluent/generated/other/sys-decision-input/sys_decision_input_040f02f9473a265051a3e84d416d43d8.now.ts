import { Record } from '@servicenow/sdk/core'

Record({
    $id: Now.ID['040f02f9473a265051a3e84d416d43d8'],
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
        column_label: 'Employee Type',
        display: 'false',
        dynamic_creation: 'false',
        element: 'u_employee_type',
        element_reference: 'false',
        function_field: 'false',
        internal_type: 'reference',
        label: 'Employee Type',
        mandatory: 'true',
        max_length: '32',
        model: 'a97d0e39473a265051a3e84d416d43e1',
        model_id: 'a97d0e39473a265051a3e84d416d43e1',
        model_table: 'sys_decision',
        name: 'var__m_sys_decision_input_a97d0e39473a265051a3e84d416d43e1',
        order: '200',
        primary: 'false',
        read_only: 'false',
        reference: 'x_aleen_snguardian_identitytype',
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
