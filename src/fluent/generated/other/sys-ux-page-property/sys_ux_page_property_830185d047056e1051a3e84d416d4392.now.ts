import { Record } from '@servicenow/sdk/core'

Record({
    $id: Now.ID['830185d047056e1051a3e84d416d4392'],
    table: 'sys_ux_page_property',
    data: {
        name: 'chrome_toolbar',
        page: '9f4c32b74738ea1051a3e84d416d43e8',
        required_translations: `[ {
  "message" : "Home",
  "comment" : ""
}, {
  "message" : "Visitors",
  "comment" : ""
} ]`,
        suffix: 'chrome_toolbar',
        sys_domain: 'global',
        sys_domain_path: 'global',
        type: 'json',
        unique_name: 'x_aleen_snguardian.9f4c32b74738ea1051a3e84d416d43e8.root.chrome_toolbar',
        value: `[
    {
        "id": "home",
        "label": {
            "translatable": true,
            "message": "Home"
        },
        "icon": "home-outline",
        "routeInfo": {
            "route": "home"
        },
        "group": "top",
        "order": 100,
        "badge": {},
        "presence": {},
        "availability": {},
        "viewportInfo": {}
    },
    {
        "id": "list",
        "label": {
            "translatable": true,
            "message": "Visitors"
        },
        "icon": "list-fill",
        "group": "top",
        "order": 100,
        "badge": {},
        "presence": {},
        "availability": {},
        "viewportInfo": {}
    }
]`,
    },
})
