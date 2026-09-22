import { Record } from '@servicenow/sdk/core'

Record({
    $id: Now.ID['27c1a2dd47bd2a5051a3e84d416d4305'],
    table: 'sys_decision_multi_result_element',
    data: {
        active: 'true',
        array: 'false',
        audit: 'false',
        calculation: `(function calculatedFieldValue(current) {

	// Add your code here
	return '';  // return the calculated value

})(current);`,
        comments: 'To configure the visitor photo',
        display: 'false',
        dynamic_creation: 'false',
        element: 'u_visitor_photo_required',
        element_reference: 'false',
        function_field: 'false',
        internal_type: 'boolean',
        label: 'visitor_photo_required',
        mandatory: 'false',
        max_length: '40',
        model: '043bd6de337d9e10bf1221382e5c7b8a',
        model_id: '043bd6de337d9e10bf1221382e5c7b8a',
        name: 'var__m_sys_decision_multi_result_element_043bd6de337d9e10bf1221382e5c7b8a',
        order: '1000',
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
