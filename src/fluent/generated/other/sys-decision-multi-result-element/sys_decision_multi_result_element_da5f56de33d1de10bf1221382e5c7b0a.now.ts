import { Record } from '@servicenow/sdk/core'

Record({
    $id: Now.ID['da5f56de33d1de10bf1221382e5c7b0a'],
    table: 'sys_decision_multi_result_element',
    data: {
        active: 'true',
        array: 'false',
        audit: 'false',
        calculation: `(function calculatedFieldValue(current) {

	// Add your code here
	return '';  // return the calculated value

})(current);`,
        column_label: 'topic',
        comments: 'topic',
        display: 'false',
        dynamic_creation: 'false',
        element: 'u_topic',
        element_reference: 'false',
        function_field: 'false',
        internal_type: 'string_full_utf8',
        label: 'topic',
        mandatory: 'false',
        max_length: '3055',
        model: '23ae169e33d1de10bf1221382e5c7b14',
        model_id: '23ae169e33d1de10bf1221382e5c7b14',
        name: 'var__m_sys_decision_multi_result_element_23ae169e33d1de10bf1221382e5c7b14',
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
