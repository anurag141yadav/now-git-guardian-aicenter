import { Record } from '@servicenow/sdk/core'

Record({
    $id: Now.ID['c8ee53ae1bb502d06962fe60cd4bcb1b'],
    table: 'sys_ux_page_property',
    data: {
        name: 'chrome_tab',
        page: 'f7131e985d688e100cef1efdce94211e',
        required_translations: `[ {
  "message" : "New Change Request",
  "comment" : ""
}, {
  "message" : "New Incident",
  "comment" : ""
}, {
  "message" : "New Interaction",
  "comment" : ""
} ]`,
        sys_domain: 'global',
        sys_domain_path: 'global',
        type: 'json',
        unique_name: 'x_aleen_snguardian.f7131e985d688e100cef1efdce94211e.root.chrome_tab',
        value: '{"contextual":["record"],"newTabMenu":[{"label":{"translatable":true,"message":"New Interaction"},"routeInfo":{"route":"record","fields":{"table":"interaction","sysId":"-1"},"multiInstField":"sysId"},"condition":{"tableDescription":{"table":"interaction","canCreate":true}}},{"label":{"translatable":true,"message":"New Incident"},"routeInfo":{"route":"record","fields":{"table":"incident","sysId":"-1"},"multiInstField":"sysId"}},{"label":{"translatable":true,"message":"New Change Request"},"routeInfo":{"route":"record","fields":{"table":"change_request","sysId":"-1"},"multiInstField":"sysId"},"condition":{"tableDescription":{"table":"change_request","canCreate":true}}}],"maxMainTabLimit":10,"maxTotalSubTabLimit":30}',
    },
})
