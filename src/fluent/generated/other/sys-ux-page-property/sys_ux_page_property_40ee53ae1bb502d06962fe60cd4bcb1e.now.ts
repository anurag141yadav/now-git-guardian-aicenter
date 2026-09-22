import { Record } from '@servicenow/sdk/core'

Record({
    $id: Now.ID['40ee53ae1bb502d06962fe60cd4bcb1e'],
    table: 'sys_ux_page_property',
    data: {
        name: 'chrome_toolbar',
        page: 'f7131e985d688e100cef1efdce94211e',
        required_translations: `[ {
  "message" : "Analytics Center",
  "comment" : ""
}, {
  "message" : "Home",
  "comment" : ""
}, {
  "message" : "List",
  "comment" : ""
} ]`,
        sys_domain: 'global',
        sys_domain_path: 'global',
        type: 'json',
        unique_name: 'x_aleen_snguardian.f7131e985d688e100cef1efdce94211e.root.chrome_toolbar',
        value: '[{"id":"home","label":{"message":"Home","translatable":true},"icon":"home-outline","viewportInfo":{},"routeInfo":{"route":"home"},"group":"top","badge":{},"presence":{},"availability":{}},{"id":"list","label":{"message":"List","translatable":true},"icon":"list-outline","viewportInfo":{},"routeInfo":{"route":"list"},"group":"top","badge":{},"presence":{},"availability":{}},{"id":"analytics-center","label":{"message":"Analytics Center","translatable":true},"icon":"analytics-center-outline","viewportInfo":{},"routeInfo":{"route":"analytics-center"},"group":"top","badge":{},"presence":{},"availability":{}}]',
    },
})
