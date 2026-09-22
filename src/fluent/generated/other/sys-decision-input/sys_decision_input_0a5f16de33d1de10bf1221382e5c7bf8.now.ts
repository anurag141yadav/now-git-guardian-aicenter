import { Record } from '@servicenow/sdk/core'

Record({
    $id: Now.ID['0a5f16de33d1de10bf1221382e5c7bf8'],
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
        column_label: 'role',
        display: 'false',
        dynamic_creation: 'false',
        element: 'u_role',
        element_reference: 'false',
        function_field: 'false',
        internal_type: 'string',
        label: 'role',
        mandatory: 'false',
        max_length: '40',
        model: '23ae169e33d1de10bf1221382e5c7b14',
        model_id: '23ae169e33d1de10bf1221382e5c7b14',
        model_table: 'sys_decision',
        name: 'var__m_sys_decision_input_23ae169e33d1de10bf1221382e5c7b14',
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
