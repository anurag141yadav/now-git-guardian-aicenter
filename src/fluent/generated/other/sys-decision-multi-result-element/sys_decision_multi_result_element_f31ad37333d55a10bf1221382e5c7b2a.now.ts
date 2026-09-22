import { Record } from '@servicenow/sdk/core'

Record({
    $id: Now.ID['f31ad37333d55a10bf1221382e5c7b2a'],
    table: 'sys_decision_multi_result_element',
    data: {
        active: 'true',
        array: 'false',
        audit: 'false',
        calculation: `(function calculatedFieldValue(current) {

	// Add your code here
	return '';  // return the calculated value

})(current);`,
        column_label: 'show_locations',
        comments: 'Show Locations',
        display: 'false',
        dynamic_creation: 'false',
        element: 'u_show_locations',
        element_reference: 'false',
        function_field: 'false',
        internal_type: 'boolean',
        label: 'show_locations',
        mandatory: 'false',
        max_length: '40',
        model: '23ae169e33d1de10bf1221382e5c7b14',
        model_id: '23ae169e33d1de10bf1221382e5c7b14',
        name: 'var__m_sys_decision_multi_result_element_23ae169e33d1de10bf1221382e5c7b14',
        order: '200',
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
