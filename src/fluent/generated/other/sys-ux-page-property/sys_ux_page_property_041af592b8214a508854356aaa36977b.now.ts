import { Record } from '@servicenow/sdk/core'

Record({
    $id: Now.ID['041af592b8214a508854356aaa36977b'],
    table: 'sys_ux_page_property',
    data: {
        description: 'Tabs Configuration',
        name: 'chrome_tab',
        page: '041af59221214a500902aa73d3f35c8a',
        required_translations: `[ {
  "message" : "New Access Location",
  "comment" : ""
}, {
  "message" : "New Access Owner",
  "comment" : ""
}, {
  "message" : "New Access Review Frequency",
  "comment" : ""
}, {
  "message" : "New Asset",
  "comment" : ""
}, {
  "message" : "New Asset Location",
  "comment" : ""
}, {
  "message" : "New Asset Type",
  "comment" : ""
}, {
  "message" : "New Badge Office",
  "comment" : ""
}, {
  "message" : "New Badge Template",
  "comment" : ""
}, {
  "message" : "New Event",
  "comment" : ""
}, {
  "message" : "New Field Mapping Type",
  "comment" : ""
}, {
  "message" : "New Identity",
  "comment" : ""
}, {
  "message" : "New Identity Access",
  "comment" : ""
}, {
  "message" : "New Identity Asset",
  "comment" : ""
}, {
  "message" : "New Identity Location",
  "comment" : ""
}, {
  "message" : "New Identity System",
  "comment" : ""
}, {
  "message" : "New Identity Type",
  "comment" : ""
}, {
  "message" : "New Review Task",
  "comment" : ""
} ]`,
        suffix: 'chrome_tab',
        sys_domain: 'global',
        sys_domain_path: 'global',
        type: 'json',
        unique_name: 'x_aleen_snguardian.041af59221214a500902aa73d3f35c8a.root.global.chrome_tab',
        value: '{"contextual":["record"],"newTabMenu":[{"label":{"translatable":true,"message":"New Review Task"},"routeInfo":{"route":"record","fields":{"table":"x_aleen_snguardian_review_task","sysId":"-1"},"multiInstField":"sysId"},"condition":{"tableDescription":{"table":"x_aleen_snguardian_review_task","canCreate":true}}},{"label":{"translatable":true,"message":"New Access Location"},"routeInfo":{"route":"record","fields":{"table":"x_aleen_snguardian_access_location","sysId":"-1"},"multiInstField":"sysId"},"condition":{"tableDescription":{"table":"x_aleen_snguardian_access_location","canCreate":true}}},{"label":{"translatable":true,"message":"New Access Owner"},"routeInfo":{"route":"record","fields":{"table":"x_aleen_snguardian_access_owner","sysId":"-1"},"multiInstField":"sysId"},"condition":{"tableDescription":{"table":"x_aleen_snguardian_access_owner","canCreate":true}}},{"label":{"translatable":true,"message":"New Access Review Frequency"},"routeInfo":{"route":"record","fields":{"table":"x_aleen_snguardian_access_review_frequency","sysId":"-1"},"multiInstField":"sysId"},"condition":{"tableDescription":{"table":"x_aleen_snguardian_access_review_frequency","canCreate":true}}},{"label":{"translatable":true,"message":"New Asset"},"routeInfo":{"route":"record","fields":{"table":"x_aleen_snguardian_asset","sysId":"-1"},"multiInstField":"sysId"},"condition":{"tableDescription":{"table":"x_aleen_snguardian_asset","canCreate":true}}},{"label":{"translatable":true,"message":"New Asset Location"},"routeInfo":{"route":"record","fields":{"table":"x_aleen_snguardian_asset_location","sysId":"-1"},"multiInstField":"sysId"},"condition":{"tableDescription":{"table":"x_aleen_snguardian_asset_location","canCreate":true}}},{"label":{"translatable":true,"message":"New Asset Type"},"routeInfo":{"route":"record","fields":{"table":"x_aleen_snguardian_asset_type","sysId":"-1"},"multiInstField":"sysId"},"condition":{"tableDescription":{"table":"x_aleen_snguardian_asset_type","canCreate":true}}},{"label":{"translatable":true,"message":"New Badge Office"},"routeInfo":{"route":"record","fields":{"table":"x_aleen_snguardian_badge_office","sysId":"-1"},"multiInstField":"sysId"},"condition":{"tableDescription":{"table":"x_aleen_snguardian_badge_office","canCreate":true}}},{"label":{"translatable":true,"message":"New Badge Template"},"routeInfo":{"route":"record","fields":{"table":"x_aleen_snguardian_badge_template","sysId":"-1"},"multiInstField":"sysId"},"condition":{"tableDescription":{"table":"x_aleen_snguardian_badge_template","canCreate":true}}},{"label":{"translatable":true,"message":"New Event"},"routeInfo":{"route":"record","fields":{"table":"x_aleen_snguardian_event","sysId":"-1"},"multiInstField":"sysId"},"condition":{"tableDescription":{"table":"x_aleen_snguardian_event","canCreate":true}}},{"label":{"translatable":true,"message":"New Field Mapping Type"},"routeInfo":{"route":"record","fields":{"table":"x_aleen_snguardian_field_mapping_type","sysId":"-1"},"multiInstField":"sysId"},"condition":{"tableDescription":{"table":"x_aleen_snguardian_field_mapping_type","canCreate":true}}},{"label":{"translatable":true,"message":"New Identity"},"routeInfo":{"route":"record","fields":{"table":"x_aleen_snguardian_identity","sysId":"-1"},"multiInstField":"sysId"},"condition":{"tableDescription":{"table":"x_aleen_snguardian_identity","canCreate":true}}},{"label":{"translatable":true,"message":"New Identity Access"},"routeInfo":{"route":"record","fields":{"table":"x_aleen_snguardian_identity_access","sysId":"-1"},"multiInstField":"sysId"},"condition":{"tableDescription":{"table":"x_aleen_snguardian_identity_access","canCreate":true}}},{"label":{"translatable":true,"message":"New Identity Asset"},"routeInfo":{"route":"record","fields":{"table":"x_aleen_snguardian_identity_asset","sysId":"-1"},"multiInstField":"sysId"},"condition":{"tableDescription":{"table":"x_aleen_snguardian_identity_asset","canCreate":true}}},{"label":{"translatable":true,"message":"New Identity Location"},"routeInfo":{"route":"record","fields":{"table":"x_aleen_snguardian_identity_location","sysId":"-1"},"multiInstField":"sysId"},"condition":{"tableDescription":{"table":"x_aleen_snguardian_identity_location","canCreate":true}}},{"label":{"translatable":true,"message":"New Identity System"},"routeInfo":{"route":"record","fields":{"table":"x_aleen_snguardian_identity_system","sysId":"-1"},"multiInstField":"sysId"},"condition":{"tableDescription":{"table":"x_aleen_snguardian_identity_system","canCreate":true}}},{"label":{"translatable":true,"message":"New Identity Type"},"routeInfo":{"route":"record","fields":{"table":"x_aleen_snguardian_identitytype","sysId":"-1"},"multiInstField":"sysId"},"condition":{"tableDescription":{"table":"x_aleen_snguardian_identitytype","canCreate":true}}}],"maxMainTabLimit":10,"maxTotalSubTabLimit":30}',
    },
})
