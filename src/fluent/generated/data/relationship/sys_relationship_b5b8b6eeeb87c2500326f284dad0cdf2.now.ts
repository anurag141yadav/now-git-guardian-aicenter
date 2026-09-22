import { Record } from '@servicenow/sdk/core'

Record({
    $id: Now.ID['b5b8b6eeeb87c2500326f284dad0cdf2'],
    table: 'sys_relationship',
    data: {
        advanced: false,
        basic_apply_to: 'x_aleen_snguardian_access_level',
        basic_query_from: 'x_aleen_snguardian_reader_access_levels',
        name: 'Access Level Readers',
        query_with: `(function refineQuery(current, parent) {

	current.addQuery("access_levels", "CONTAINS", parent.sys_id);

})(current, parent);`,
        simple_reference: false,
        sys_name: 'Access Level Readers',
    },
})
