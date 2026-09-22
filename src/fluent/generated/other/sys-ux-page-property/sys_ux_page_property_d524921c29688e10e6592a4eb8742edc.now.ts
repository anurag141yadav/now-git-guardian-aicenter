import { Record } from '@servicenow/sdk/core'

Record({
    $id: Now.ID['d524921c29688e10e6592a4eb8742edc'],
    table: 'sys_ux_page_property',
    data: {
        description: 'Header Configuration',
        name: 'chrome_header',
        page: '1124921cb6688e109e75a2d7902de0ef',
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
        unique_name: 'x_aleen_snguardian.1124921cb6688e109e75a2d7902de0ef.root.chrome_header',
        value: `{
    "privatePage": {
        "notificationsEnabled": true,
        "searchEnabled": true,
        "userPrefsEnabled": true,
        "contextualConfigurationItems": {
            "_roles": [
                "workspace_admin"
            ],
            "enabled": true,
            "position": 150
        },
        "globalTools": {
            "collapsingMenuId": 0,
            "primaryItems": [
                {
                    "label": "UserMenu",
                    "icon": "user",
                    "type": "menu",
                    "primaryDisplay": "icon",
                    "value": {
                        "children": [
                            {
                                "_roles": [
                                    "workspace_admin"
                                ],
                                "label": {
                                    "message": "Configure workspace",
                                    "translatable": true
                                },
                                "type": "navigation",
                                "position": 100,
                                "primaryDisplay": "none",
                                "value": {
                                    "type": "external",
                                    "opensWindow": "true",
                                    "value": {
                                        "href": "/nav_to.do?uri=/sys_ux_app_config.do?sys_id=9524921c0b688e10ad8e1b4cf3cfc7ef"
                                    }
                                }
                            },
                            {
                                "label": {
                                    "message": "Settings",
                                    "translatable": true
                                },
                                "type": "menu",
                                "position": 50,
                                "value": {
                                    "children": [
                                        {
                                            "label": {
                                                "message": "Display Preferences",
                                                "translatable": true
                                            },
                                            "type": "divider"
                                        },
                                        {
                                            "label": {
                                                "message": "Show ribbon",
                                                "translatable": true
                                            },
                                            "type": "toggle",
                                            "value": {
                                                "_meta": {
                                                    "_type": "userPreferences",
                                                    "_path": "userPrefName",
                                                    "_value": {
                                                        "userPrefName": "workspace.showRibbon"
                                                    },
                                                    "_default": {
                                                        "userPrefName": "true"
                                                    }
                                                }
                                            }
                                        },
                                        {
                                            "label": {
                                                "message": "Show sidebar",
                                                "translatable": true
                                            },
                                            "type": "toggle",
                                            "value": {
                                                "_meta": {
                                                    "_type": "userPreferences",
                                                    "_path": "userPrefName",
                                                    "_value": {
                                                        "userPrefName": "workspace.showAgentAssist"
                                                    },
                                                    "_default": {
                                                        "userPrefName": "true"
                                                    }
                                                }
                                            }
                                        },
                                        {
                                            "label": {
                                                "message": "Wrap list text",
                                                "translatable": true
                                            },
                                            "type": "toggle",
                                            "value": {
                                                "_meta": {
                                                    "_type": "userPreferences",
                                                    "_path": "userPrefName",
                                                    "_value": {
                                                        "userPrefName": "workspace.wrapListText"
                                                    },
                                                    "_default": {
                                                        "userPrefName": "true"
                                                    }
                                                }
                                            }
                                        },
                                        {
                                            "label": {
                                                "message": "Notifications",
                                                "translatable": true
                                            },
                                            "type": "divider"
                                        },
                                        {
                                            "label": {
                                                "message": "Show Banners",
                                                "translatable": true
                                            },
                                            "type": "toggle",
                                            "value": {
                                                "_meta": {
                                                    "_type": "userPreferences",
                                                    "_path": "userPrefName",
                                                    "_value": {
                                                        "userPrefName": "workspace.notifications.showPopups"
                                                    },
                                                    "_default": {
                                                        "userPrefName": "true"
                                                    }
                                                }
                                            }
                                        },
                                        {
                                            "label": {
                                                "message": "Show Badge Count",
                                                "translatable": true
                                            },
                                            "type": "toggle",
                                            "value": {
                                                "_meta": {
                                                    "_type": "userPreferences",
                                                    "_path": "userPrefName",
                                                    "_value": {
                                                        "userPrefName": "workspace.notifications.showBadgeCount"
                                                    },
                                                    "_default": {
                                                        "userPrefName": "true"
                                                    }
                                                }
                                            }
                                        }
                                    ]
                                }
                            }
                        ]
                    }
                }
            ],
            "secondaryItems": [
                
            ]
        }
    },
    "publicPage": {
        "actionButtons": [
            
        ],
        "searchEnabled": false
    }
}`,
    },
})
