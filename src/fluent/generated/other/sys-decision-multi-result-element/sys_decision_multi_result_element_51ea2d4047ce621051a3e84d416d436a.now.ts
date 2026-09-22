import { Record } from '@servicenow/sdk/core'

Record({
    $id: Now.ID['51ea2d4047ce621051a3e84d416d436a'],
    table: 'sys_decision_multi_result_element',
    data: {
        active: 'true',
        array: 'false',
        audit: 'false',
        calculation: `(function calculatedFieldValue(current) {

	// Add your code here
	return '';  // return the calculated value

})(current);`,
        choice: '1',
        choice_field: 'badge_assign_method',
        choice_table: 'x_aleen_snguardian_decision_table_choice',
        column_label: 'Badge assignment method',
        display: 'false',
        dynamic_creation: 'false',
        element: 'u_badge_assignment_method',
        element_reference: 'false',
        function_field: 'false',
        internal_type: 'choice',
        label: 'Badge assignment method',
        mandatory: 'false',
        max_length: '40',
        model: 'e2e58540470e621051a3e84d416d4369',
        model_id: 'e2e58540470e621051a3e84d416d4369',
        name: 'var__m_sys_decision_multi_result_element_e2e58540470e621051a3e84d416d4369',
        order: '525',
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
