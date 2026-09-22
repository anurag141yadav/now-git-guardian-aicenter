import { Record } from '@servicenow/sdk/core'

Record({
    $id: Now.ID['00ee5b6e1bb502d06962fe60cd4bcb0e'],
    table: 'sys_ux_page_property',
    data: {
        name: 'chrome_header',
        page: 'f7131e985d688e100cef1efdce94211e',
        required_translations: `[ {
  "message" : "Configure workspace",
  "comment" : ""
}, {
  "message" : "Display Preferences",
  "comment" : ""
}, {
  "message" : "Notifications",
  "comment" : ""
}, {
  "message" : "Settings",
  "comment" : ""
}, {
  "message" : "Show Badge Count",
  "comment" : ""
}, {
  "message" : "Show Banners",
  "comment" : ""
}, {
  "message" : "Show ribbon",
  "comment" : ""
}, {
  "message" : "Show sidebar",
  "comment" : ""
}, {
  "message" : "UserMenu",
  "comment" : ""
}, {
  "message" : "Wrap list text",
  "comment" : ""
} ]`,
        sys_domain: 'global',
        sys_domain_path: 'global',
        type: 'json',
        unique_name: 'x_aleen_snguardian.f7131e985d688e100cef1efdce94211e.root.chrome_header',
        value: '{"privatePage":{"notificationsEnabled":true,"searchEnabled":true,"userPrefsEnabled":true,"contextualConfigurationItems":{"_roles":["workspace_admin"],"enabled":true,"position":150},"globalTools":{"collapsingMenuId":0,"primaryItems":[{"label":"UserMenu","icon":"user","type":"menu","primaryDisplay":"icon","value":{"children":[{"_roles":["workspace_admin"],"label":{"message":"Configure workspace","translatable":true},"type":"navigation","position":100,"primaryDisplay":"none","value":{"type":"external","opensWindow":"true","value":{"href":"/nav_to.do?uri=/sys_ux_app_config.do?sys_id=193f9ac9d3e15910470052c8e1f2060e"}}},{"label":{"message":"Settings","translatable":true},"type":"menu","position":50,"value":{"children":[{"label":{"message":"Display Preferences","translatable":true},"type":"divider"},{"label":{"message":"Show ribbon","translatable":true},"type":"toggle","value":{"_meta":{"_type":"userPreferences","_path":"userPrefName","_value":{"userPrefName":"workspace.showRibbon"},"_default":{"userPrefName":"true"}}}},{"label":{"message":"Show sidebar","translatable":true},"type":"toggle","value":{"_meta":{"_type":"userPreferences","_path":"userPrefName","_value":{"userPrefName":"workspace.showAgentAssist"},"_default":{"userPrefName":"true"}}}},{"label":{"message":"Wrap list text","translatable":true},"type":"toggle","value":{"_meta":{"_type":"userPreferences","_path":"userPrefName","_value":{"userPrefName":"workspace.wrapListText"},"_default":{"userPrefName":"true"}}}},{"label":{"message":"Notifications","translatable":true},"type":"divider"},{"label":{"message":"Show Banners","translatable":true},"type":"toggle","value":{"_meta":{"_type":"userPreferences","_path":"userPrefName","_value":{"userPrefName":"workspace.notifications.showPopups"},"_default":{"userPrefName":"true"}}}},{"label":{"message":"Show Badge Count","translatable":true},"type":"toggle","value":{"_meta":{"_type":"userPreferences","_path":"userPrefName","_value":{"userPrefName":"workspace.notifications.showBadgeCount"},"_default":{"userPrefName":"true"}}}}]}}]}}],"secondaryItems":[]}},"publicPage":{"actionButtons":[]}}',
    },
})
