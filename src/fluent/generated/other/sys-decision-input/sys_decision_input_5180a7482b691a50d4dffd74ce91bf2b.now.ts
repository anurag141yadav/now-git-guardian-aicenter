import { Record } from '@servicenow/sdk/core'

Record({
    $id: Now.ID['5180a7482b691a50d4dffd74ce91bf2b'],
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
        column_label: 'Identity Type',
        display: 'false',
        dynamic_creation: 'false',
        element: 'u_identity_type',
        element_reference: 'false',
        function_field: 'false',
        internal_type: 'reference',
        label: 'Identity Type',
        mandatory: 'false',
        max_length: '32',
        model: '3ecc17c02b691a50d4dffd74ce91bf40',
        model_id: '3ecc17c02b691a50d4dffd74ce91bf40',
        model_table: 'sys_decision',
        name: 'var__m_sys_decision_input_3ecc17c02b691a50d4dffd74ce91bf40',
        order: '100',
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
