import { Record } from '@servicenow/sdk/core'

Record({
    $id: Now.ID['fa2be6c04706a21051a3e84d416d43a2'],
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
        choice_field: 'asset_sub_type',
        choice_table: 'x_aleen_snguardian_decision_table_choice',
        column_label: 'Asset-Subtype',
        display: 'false',
        dynamic_creation: 'false',
        element: 'u_asset_subtype',
        element_reference: 'false',
        function_field: 'false',
        internal_type: 'choice',
        label: 'Asset-Subtype',
        mandatory: 'false',
        max_length: '40',
        model: '1a2b26004706a21051a3e84d416d43b0',
        model_id: '1a2b26004706a21051a3e84d416d43b0',
        name: 'var__m_sys_decision_multi_result_element_1a2b26004706a21051a3e84d416d43b0',
        order: '50',
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
