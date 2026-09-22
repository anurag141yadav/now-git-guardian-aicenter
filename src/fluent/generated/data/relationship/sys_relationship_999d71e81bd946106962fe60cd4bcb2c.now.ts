import { Record } from '@servicenow/sdk/core'

Record({
    $id: Now.ID['999d71e81bd946106962fe60cd4bcb2c'],
    table: 'sys_relationship',
    data: {
        advanced: false,
        basic_apply_to: 'x_aleen_snguardian_review_task',
        basic_query_from: 'x_aleen_snguardian_identity_access',
        name: 'Review Items',
        query_with: `(function refineQuery(current, parent) {

    current.addQuery('review_task', parent.sys_id);
    if (parent.review.type.code == 'MANAGER') {
        current.addEncodedQuery('^ORDERBYidentity');
    } else if (parent.review.type.code == 'AREAOWNER') {
        current.addEncodedQuery('^ORDERBYaccess_level');
    }

})(current, parent);`,
        simple_reference: false,
        sys_name: 'Review Items',
    },
})
