import { Record } from '@servicenow/sdk/core'

Record({
    $id: Now.ID['df8de83d3bae031065adbfcc73e45a56'],
    table: 'sys_dictionary',
    data: {
        active: true,
        array: false,
        audit: false,
        calculation: `(function calculatedFieldValue(current) {

	// Add your code here
	return '';  // return the calculated value

})(current);`,
        column_label: 'Process Time',
        display: false,
        dynamic_creation: false,
        element: 'process_time',
        element_reference: false,
        function_definition: 'glidefunction:datediff(approval_sys_updated_on,approval_sys_created_on)',
        function_field: true,
        internal_type: 'glide_duration',
        mandatory: false,
        max_length: 40,
        name: 'x_aleen_snguardian_guardianboapprovalview',
        primary: false,
        read_only: true,
        reference_floats: false,
        spell_check: false,
        staged: false,
        table_reference: false,
        text_index: false,
        unique: false,
        use_dependent_field: false,
        use_dynamic_default: false,
        use_reference_qualifier: 'simple',
        virtual: false,
        virtual_type: 'script',
        xml_view: false,
    },
})
