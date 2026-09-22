import { Record } from '@servicenow/sdk/core'

Record({
    $id: Now.ID['f51b0fe6ef7502d04de704c14e927de1'],
    table: 'sys_ux_page_property',
    data: {
        description: 'Tabs Configuration',
        name: 'chrome_tab',
        page: 'f51b0fe67e7502d09df6f61979a51bf0',
        required_translations: `[ {
  "message" : "New Access Level",
  "comment" : ""
}, {
  "message" : "New Asset",
  "comment" : ""
}, {
  "message" : "New Badge Office",
  "comment" : ""
}, {
  "message" : "New Badge Template",
  "comment" : ""
}, {
  "message" : "New Identity",
  "comment" : ""
}, {
  "message" : "New Location",
  "comment" : ""
}, {
  "message" : "New Request",
  "comment" : ""
} ]`,
        sys_domain: 'global',
        sys_domain_path: 'global',
        type: 'json',
        unique_name: 'x_aleen_snguardian.f51b0fe67e7502d09df6f61979a51bf0.root.chrome_tab',
        value: '{"contextual":["record"],"newTabMenu":[{"label":{"translatable":true,"message":"New Request"},"routeInfo":{"route":"record","fields":{"table":"x_aleen_snguardian_request","sysId":"-1"},"multiInstField":"sysId"},"condition":{"tableDescription":{"table":"x_aleen_snguardian_request","canCreate":true}}},{"label":{"translatable":true,"message":"New Asset"},"routeInfo":{"route":"record","fields":{"table":"x_aleen_snguardian_asset","sysId":"-1"},"multiInstField":"sysId"},"condition":{"tableDescription":{"table":"x_aleen_snguardian_asset","canCreate":true}}},{"label":{"translatable":true,"message":"New Badge Office"},"routeInfo":{"route":"record","fields":{"table":"x_aleen_snguardian_badge_office","sysId":"-1"},"multiInstField":"sysId"},"condition":{"tableDescription":{"table":"x_aleen_snguardian_badge_office","canCreate":true}}},{"label":{"translatable":true,"message":"New Badge Template"},"routeInfo":{"route":"record","fields":{"table":"x_aleen_snguardian_badge_template","sysId":"-1"},"multiInstField":"sysId"},"condition":{"tableDescription":{"table":"x_aleen_snguardian_badge_template","canCreate":true}}},{"label":{"translatable":true,"message":"New Identity"},"routeInfo":{"route":"record","fields":{"table":"x_aleen_snguardian_identity","sysId":"-1"},"multiInstField":"sysId"},"condition":{"tableDescription":{"table":"x_aleen_snguardian_identity","canCreate":true}}},{"label":{"translatable":true,"message":"New Location"},"routeInfo":{"route":"record","fields":{"table":"x_aleen_snguardian_location","sysId":"-1"},"multiInstField":"sysId"},"condition":{"tableDescription":{"table":"x_aleen_snguardian_location","canCreate":true}}},{"label":{"translatable":true,"message":"New Access Level"},"routeInfo":{"route":"record","fields":{"table":"x_aleen_snguardian_access_level","sysId":"-1"},"multiInstField":"sysId"},"condition":{"tableDescription":{"table":"x_aleen_snguardian_access_level","canCreate":true}}}],"maxMainTabLimit":10,"maxTotalSubTabLimit":30}',
    },
})
