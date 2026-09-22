import { Record } from '@servicenow/sdk/core'

Record({
    $id: Now.ID['58fa2f302b365650d4dffd74ce91bf3c'],
    table: 'sys_decision_multi_result_element',
    data: {
        active: 'true',
        array: 'false',
        audit: 'false',
        calculation: `(function calculatedFieldValue(current) {

	// Add your code here
	return '';  // return the calculated value

})(current);`,
        column_label: 'Columns',
        comments: 'lobby data table columns',
        display: 'false',
        dynamic_creation: 'false',
        element: 'u_columns',
        element_reference: 'false',
        function_field: 'false',
        internal_type: 'string',
        label: 'Columns',
        mandatory: 'false',
        max_length: '1000',
        model: '2e09e7bc2bf25650d4dffd74ce91bf27',
        model_id: '2e09e7bc2bf25650d4dffd74ce91bf27',
        name: 'var__m_sys_decision_multi_result_element_2e09e7bc2bf25650d4dffd74ce91bf27',
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
