import { Record } from '@servicenow/sdk/core'

Record({
    $id: Now.ID['fee5c940470e621051a3e84d416d434d'],
    table: 'sys_decision_multi_result_element',
    data: {
        active: 'true',
        array: 'false',
        audit: 'false',
        calculation: `(function calculatedFieldValue(current) {

	// Add your code here
	return '';  // return the calculated value

})(current);`,
        column_label: 'Badge Role System',
        comments: 'Is the default system badge role?',
        display: 'false',
        dynamic_creation: 'false',
        element: 'u_badge_role_system',
        element_reference: 'false',
        function_field: 'false',
        internal_type: 'boolean',
        label: 'Badge Role System',
        mandatory: 'false',
        max_length: '40',
        model: 'e2e58540470e621051a3e84d416d4369',
        model_id: 'e2e58540470e621051a3e84d416d4369',
        model_table: 'sys_decision',
        name: 'var__m_sys_decision_multi_result_element_e2e58540470e621051a3e84d416d4369',
        order: '250',
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
