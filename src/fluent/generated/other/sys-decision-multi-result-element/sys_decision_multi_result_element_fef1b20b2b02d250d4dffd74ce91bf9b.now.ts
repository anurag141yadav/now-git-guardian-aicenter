import { Record } from '@servicenow/sdk/core'

Record({
    $id: Now.ID['fef1b20b2b02d250d4dffd74ce91bf9b'],
    table: 'sys_decision_multi_result_element',
    data: {
        active: 'true',
        array: 'false',
        audit: 'false',
        calculation: `(function calculatedFieldValue(current) {

	// Add your code here
	return '';  // return the calculated value

})(current);`,
        column_label: 'require_host_confirmation',
        comments: 'Requires Host Confirmation',
        display: 'false',
        dynamic_creation: 'false',
        element: 'u_require_host_confirmation',
        element_reference: 'false',
        function_field: 'false',
        internal_type: 'boolean',
        label: 'require_host_confirmation',
        mandatory: 'false',
        max_length: '40',
        model: '043bd6de337d9e10bf1221382e5c7b8a',
        model_id: '043bd6de337d9e10bf1221382e5c7b8a',
        name: 'var__m_sys_decision_multi_result_element_043bd6de337d9e10bf1221382e5c7b8a',
        order: '800',
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
