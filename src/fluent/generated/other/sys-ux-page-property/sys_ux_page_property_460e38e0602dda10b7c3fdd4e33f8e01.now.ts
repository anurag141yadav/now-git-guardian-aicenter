import { Record } from '@servicenow/sdk/core'

Record({
    $id: Now.ID['460e38e0602dda10b7c3fdd4e33f8e01'],
    table: 'sys_ux_page_property',
    data: {
        description: 'Tabs Configuration',
        name: 'chrome_tab',
        page: '020e38e0f42dda10aed05e6f8f796710',
        required_translations: `[ {
  "message" : "New Location",
  "comment" : ""
}, {
  "message" : "New NDA & Email Template",
  "comment" : ""
}, {
  "message" : "New Visit",
  "comment" : ""
}, {
  "message" : "New Visitor",
  "comment" : ""
}, {
  "message" : "New Visitor Watch List",
  "comment" : ""
} ]`,
        suffix: 'chrome_tab',
        sys_domain: 'global',
        sys_domain_path: 'global',
        type: 'json',
        unique_name: 'x_aleen_snguardian.020e38e0f42dda10aed05e6f8f796710.root.global.chrome_tab',
        value: '{"contextual":["record"],"newTabMenu":[{"label":{"translatable":true,"message":"New Visit"},"routeInfo":{"route":"record","fields":{"table":"x_aleen_snguardian_visitor_visit","sysId":"-1"},"multiInstField":"sysId"},"condition":{"tableDescription":{"table":"x_aleen_snguardian_visitor_visit","canCreate":true}}},{"label":{"translatable":true,"message":"New Location"},"routeInfo":{"route":"record","fields":{"table":"x_aleen_snguardian_location","sysId":"-1"},"multiInstField":"sysId"},"condition":{"tableDescription":{"table":"x_aleen_snguardian_location","canCreate":true}}},{"label":{"translatable":true,"message":"New Visitor"},"routeInfo":{"route":"record","fields":{"table":"x_aleen_snguardian_visitor","sysId":"-1"},"multiInstField":"sysId"},"condition":{"tableDescription":{"table":"x_aleen_snguardian_visitor","canCreate":true}}},{"label":{"translatable":true,"message":"New Visitor Watch List"},"routeInfo":{"route":"record","fields":{"table":"x_aleen_snguardian_visitor_watch_list","sysId":"-1"},"multiInstField":"sysId"},"condition":{"tableDescription":{"table":"x_aleen_snguardian_visitor_watch_list","canCreate":true}}},{"label":{"translatable":true,"message":"New NDA & Email Template"},"routeInfo":{"route":"record","fields":{"table":"x_aleen_snguardian_visitor_nda_email_templates","sysId":"-1"},"multiInstField":"sysId"},"condition":{"tableDescription":{"table":"x_aleen_snguardian_visitor_nda_email_templates","canCreate":true}}}],"maxMainTabLimit":10,"maxTotalSubTabLimit":30}',
    },
})
