import { Record } from '@servicenow/sdk/core'

Record({
    $id: Now.ID['0d990184470e621051a3e84d416d43c8'],
    table: 'sys_decision_multi_result_element',
    data: {
        active: 'true',
        array: 'false',
        audit: 'false',
        calculation: `(function calculatedFieldValue(current) {

	// Add your code here
	return '';  // return the calculated value

})(current);`,
        column_label: 'System Prov mode',
        display: 'false',
        dynamic_creation: 'false',
        element: 'u_system_prov_mode',
        element_reference: 'false',
        function_field: 'false',
        internal_type: 'reference',
        label: 'System Prov mode',
        mandatory: 'false',
        max_length: '32',
        model: '7c998544470e621051a3e84d416d434f',
        model_id: '7c998544470e621051a3e84d416d434f',
        model_table: 'sys_decision',
        name: 'var__m_sys_decision_multi_result_element_7c998544470e621051a3e84d416d434f',
        order: '200',
        primary: 'false',
        read_only: 'false',
        reference: 'x_aleen_snguardian_request_entity_action',
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
