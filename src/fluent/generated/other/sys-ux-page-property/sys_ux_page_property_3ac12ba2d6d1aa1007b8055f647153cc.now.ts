import { Record } from '@servicenow/sdk/core'

Record({
    $id: Now.ID['3ac12ba2d6d1aa1007b8055f647153cc'],
    table: 'sys_ux_page_property',
    data: {
        description: 'Tabs Configuration',
        name: 'chrome_tab',
        page: '47c12ba26bd1aa10c90f9721e2c824db',
        required_translations: `[ {
  "message" : "New Mitigation",
  "comment" : ""
}, {
  "message" : "New Policy",
  "comment" : ""
}, {
  "message" : "New Risk",
  "comment" : ""
}, {
  "message" : "New Risk Rule",
  "comment" : ""
} ]`,
        sys_domain: 'global',
        sys_domain_path: 'global',
        type: 'json',
        unique_name: 'x_aleen_snguardian.47c12ba26bd1aa10c90f9721e2c824db.root.chrome_tab',
        value: '{"contextual":["record"],"newTabMenu":[{"label":{"translatable":true,"message":"New Risk"},"routeInfo":{"route":"record","fields":{"table":"x_aleen_snguardian_risk","sysId":"-1"},"multiInstField":"sysId"},"condition":{"tableDescription":{"table":"x_aleen_snguardian_risk","canCreate":true}}},{"label":{"translatable":true,"message":"New Risk Rule"},"routeInfo":{"route":"record","fields":{"table":"x_aleen_snguardian_risk_rule","sysId":"-1"},"multiInstField":"sysId"},"condition":{"tableDescription":{"table":"x_aleen_snguardian_risk_rule","canCreate":true}}},{"label":{"translatable":true,"message":"New Mitigation"},"routeInfo":{"route":"record","fields":{"table":"x_aleen_snguardian_mitigation","sysId":"-1"},"multiInstField":"sysId"},"condition":{"tableDescription":{"table":"x_aleen_snguardian_mitigation","canCreate":true}}},{"label":{"translatable":true,"message":"New Policy"},"routeInfo":{"route":"record","fields":{"table":"x_aleen_snguardian_policy","sysId":"-1"},"multiInstField":"sysId"},"condition":{"tableDescription":{"table":"x_aleen_snguardian_policy","canCreate":true}}}],"maxMainTabLimit":10,"maxTotalSubTabLimit":30}',
    },
})
