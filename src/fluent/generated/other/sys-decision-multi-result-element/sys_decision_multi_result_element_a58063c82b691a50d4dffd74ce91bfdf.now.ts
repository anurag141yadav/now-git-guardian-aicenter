import { Record } from '@servicenow/sdk/core'

Record({
    $id: Now.ID['a58063c82b691a50d4dffd74ce91bfdf'],
    table: 'sys_decision_multi_result_element',
    data: {
        active: 'true',
        array: 'false',
        audit: 'false',
        calculation: `(function calculatedFieldValue(current) {

	// Add your code here
	return '';  // return the calculated value

})(current);`,
        column_label: 'Access Provisioning Action',
        display: 'false',
        dynamic_creation: 'false',
        element: 'u_access_provisioning_action',
        element_reference: 'false',
        function_field: 'false',
        internal_type: 'reference',
        label: 'Access Provisioning Action',
        mandatory: 'false',
        max_length: '32',
        model: '3ecc17c02b691a50d4dffd74ce91bf40',
        model_id: '3ecc17c02b691a50d4dffd74ce91bf40',
        name: 'var__m_sys_decision_multi_result_element_3ecc17c02b691a50d4dffd74ce91bf40',
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
