import { Record } from '@servicenow/sdk/core'

Record({
    $id: Now.ID['31bc8639473a265051a3e84d416d43ce'],
    table: 'sys_decision_multi_result_element',
    data: {
        active: 'true',
        array: 'false',
        audit: 'false',
        calculation: `(function calculatedFieldValue(current) {

	// Add your code here
	return '';  // return the calculated value

})(current);`,
        column_label: 'Consent text',
        display: 'false',
        dynamic_creation: 'false',
        element: 'u_consent_text',
        element_reference: 'false',
        function_field: 'false',
        internal_type: 'string',
        label: 'Consent text',
        mandatory: 'false',
        max_length: '500',
        model: 'c68b06b5473a265051a3e84d416d435d',
        model_id: 'c68b06b5473a265051a3e84d416d435d',
        name: 'var__m_sys_decision_multi_result_element_c68b06b5473a265051a3e84d416d435d',
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
