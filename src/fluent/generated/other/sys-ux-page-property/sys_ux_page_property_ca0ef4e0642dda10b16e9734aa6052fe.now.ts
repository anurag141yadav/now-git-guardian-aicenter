import { Record } from '@servicenow/sdk/core'

Record({
    $id: Now.ID['ca0ef4e0642dda10b16e9734aa6052fe'],
    table: 'sys_ux_page_property',
    data: {
        description: 'Header Configuration',
        name: 'chrome_header',
        page: '020e38e0f42dda10aed05e6f8f796710',
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
        suffix: 'chrome_header',
        sys_domain: 'global',
        sys_domain_path: 'global',
        type: 'json',
        unique_name: 'x_aleen_snguardian.020e38e0f42dda10aed05e6f8f796710.root.chrome_header',
        value: `{\r
    "privatePage": {\r
        "notificationsEnabled": true,\r
        "searchEnabled": true,\r
        "userPrefsEnabled": true,\r
        "contextualConfigurationItems": {\r
            "_roles": [\r
                "workspace_admin"\r
            ],\r
            "enabled": true,\r
            "position": 150\r
        },\r
        "globalTools": {\r
            "collapsingMenuId": 0,\r
            "primaryItems": [{\r
                "label": "UserMenu",\r
                "icon": "user",\r
                "type": "menu",\r
                "primaryDisplay": "icon",\r
                "value": {\r
                    "children": [{\r
                            "_roles": [\r
                                "workspace_admin"\r
                            ],\r
                            "label": {\r
                                "message": "Configure workspace",\r
                                "translatable": true\r
                            },\r
                            "type": "navigation",\r
                            "position": 100,\r
                            "primaryDisplay": "none",\r
                            "value": {\r
                                "type": "external",\r
                                "opensWindow": "true",\r
                                "value": {\r
                                    "href": "/nav_to.do?uri=/sys_ux_app_config.do?sys_id=860e38e0372dda10dd9c025dea500810"\r
                                }\r
                            }\r
                        },\r
                        {\r
                            "label": {\r
                                "message": "Settings",\r
                                "translatable": true\r
                            },\r
                            "type": "menu",\r
                            "position": 50,\r
                            "value": {\r
                                "children": [{\r
                                        "label": {\r
                                            "message": "Display Preferences",\r
                                            "translatable": true\r
                                        },\r
                                        "type": "divider"\r
                                    },\r
                                    {\r
                                        "label": {\r
                                            "message": "Show ribbon",\r
                                            "translatable": true\r
                                        },\r
                                        "type": "toggle",\r
                                        "value": {\r
                                            "_meta": {\r
                                                "_type": "userPreferences",\r
                                                "_path": "userPrefName",\r
                                                "_value": {\r
                                                    "userPrefName": "workspace.showRibbon"\r
                                                },\r
                                                "_default": {\r
                                                    "userPrefName": "true"\r
                                                }\r
                                            }\r
                                        }\r
                                    },\r
                                    {\r
                                        "label": {\r
                                            "message": "Show sidebar",\r
                                            "translatable": true\r
                                        },\r
                                        "type": "toggle",\r
                                        "value": {\r
                                            "_meta": {\r
                                                "_type": "userPreferences",\r
                                                "_path": "userPrefName",\r
                                                "_value": {\r
                                                    "userPrefName": "workspace.showAgentAssist"\r
                                                },\r
                                                "_default": {\r
                                                    "userPrefName": "true"\r
                                                }\r
                                            }\r
                                        }\r
                                    },\r
                                    {\r
                                        "label": {\r
                                            "message": "Wrap list text",\r
                                            "translatable": true\r
                                        },\r
                                        "type": "toggle",\r
                                        "value": {\r
                                            "_meta": {\r
                                                "_type": "userPreferences",\r
                                                "_path": "userPrefName",\r
                                                "_value": {\r
                                                    "userPrefName": "workspace.wrapListText"\r
                                                },\r
                                                "_default": {\r
                                                    "userPrefName": "true"\r
                                                }\r
                                            }\r
                                        }\r
                                    },\r
                                    {\r
                                        "label": {\r
                                            "message": "Notifications",\r
                                            "translatable": true\r
                                        },\r
                                        "type": "divider"\r
                                    },\r
                                    {\r
                                        "label": {\r
                                            "message": "Show Banners",\r
                                            "translatable": true\r
                                        },\r
                                        "type": "toggle",\r
                                        "value": {\r
                                            "_meta": {\r
                                                "_type": "userPreferences",\r
                                                "_path": "userPrefName",\r
                                                "_value": {\r
                                                    "userPrefName": "workspace.notifications.showPopups"\r
                                                },\r
                                                "_default": {\r
                                                    "userPrefName": "true"\r
                                                }\r
                                            }\r
                                        }\r
                                    },\r
                                    {\r
                                        "label": {\r
                                            "message": "Show Badge Count",\r
                                            "translatable": true\r
                                        },\r
                                        "type": "toggle",\r
                                        "value": {\r
                                            "_meta": {\r
                                                "_type": "userPreferences",\r
                                                "_path": "userPrefName",\r
                                                "_value": {\r
                                                    "userPrefName": "workspace.notifications.showBadgeCount"\r
                                                },\r
                                                "_default": {\r
                                                    "userPrefName": "true"\r
                                                }\r
                                            }\r
                                        }\r
                                    }\r
                                ]\r
                            }\r
                        }\r
                    ]\r
                }\r
            }],\r
            "secondaryItems": [\r
\r
            ]\r
        }\r
    },\r
    "publicPage": {\r
        "actionButtons": [\r
\r
        ]\r
    }\r
}`,
    },
})
