import { Record } from '@servicenow/sdk/core'

Record({
    $id: Now.ID['9fa9f1044702a21051a3e84d416d43dc'],
    table: 'sys_decision_multi_result_element',
    data: {
        active: 'true',
        array: 'false',
        audit: 'false',
        calculation: `(function calculatedFieldValue(current) {

	// Add your code here
	return '';  // return the calculated value

})(current);`,
        column_label: 'visitor',
        comments: 'visitor',
        display: 'false',
        dynamic_creation: 'false',
        element: 'u_visitor',
        element_reference: 'false',
        function_field: 'false',
        internal_type: 'reference',
        label: 'visitor',
        mandatory: 'false',
        max_length: '32',
        model: 'd7a97dc04702a21051a3e84d416d43ee',
        model_id: 'd7a97dc04702a21051a3e84d416d43ee',
        model_table: 'sys_decision',
        name: 'var__m_sys_decision_multi_result_element_d7a97dc04702a21051a3e84d416d43ee',
        order: '100',
        primary: 'false',
        read_only: 'false',
        reference: 'x_aleen_snguardian_visitor_nda_email_templates',
        reference_floats: 'false',
        reference_qual: 'scopeLIKEVISITOR',
        reference_qual_condition: 'scopeLIKEVISITOR',
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
