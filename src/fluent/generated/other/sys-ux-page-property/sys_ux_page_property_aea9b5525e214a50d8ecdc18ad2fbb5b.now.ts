import { Record } from '@servicenow/sdk/core'

Record({
    $id: Now.ID['aea9b5525e214a50d8ecdc18ad2fbb5b'],
    table: 'sys_ux_page_property',
    data: {
        description: 'Tabs Configuration',
        name: 'chrome_tab',
        page: 'bea9b55207214a5091640bb7fe4ab86a',
        required_translations: `[ {
  "message" : "New Review",
  "comment" : ""
}, {
  "message" : "New Review Task",
  "comment" : ""
} ]`,
        sys_domain: 'global',
        sys_domain_path: 'global',
        type: 'json',
        unique_name: 'x_aleen_snguardian.bea9b55207214a5091640bb7fe4ab86a.root.chrome_tab',
        value: '{"contextual":["record"],"newTabMenu":[{"label":{"translatable":true,"message":"New Review"},"routeInfo":{"route":"record","fields":{"table":"x_aleen_snguardian_review","sysId":"-1"},"multiInstField":"sysId"},"condition":{"tableDescription":{"table":"x_aleen_snguardian_review","canCreate":true}}},{"label":{"translatable":true,"message":"New Review Task"},"routeInfo":{"route":"record","fields":{"table":"x_aleen_snguardian_review_task","sysId":"-1"},"multiInstField":"sysId"},"condition":{"tableDescription":{"table":"x_aleen_snguardian_review_task","canCreate":true}}}],"maxMainTabLimit":10,"maxTotalSubTabLimit":30}',
    },
})
