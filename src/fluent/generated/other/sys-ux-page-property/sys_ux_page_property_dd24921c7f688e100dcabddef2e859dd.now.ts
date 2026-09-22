import { Record } from '@servicenow/sdk/core'

Record({
    $id: Now.ID['dd24921c7f688e100dcabddef2e859dd'],
    table: 'sys_ux_page_property',
    data: {
        description: 'L1 Configuration',
        name: 'chrome_toolbar',
        page: '1124921cb6688e109e75a2d7902de0ef',
        required_translations: `[ {
  "message" : "Home",
  "comment" : ""
}, {
  "message" : "List",
  "comment" : ""
} ]`,
        sys_domain: 'global',
        sys_domain_path: 'global',
        type: 'json',
        unique_name: 'x_aleen_snguardian.1124921cb6688e109e75a2d7902de0ef.root.chrome_toolbar',
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
        "order": 0,
        "badge": {},
        "presence": {},
        "availability": {},
        "viewportInfo": {}
    },
    {
        "id": "list",
        "label": {
            "translatable": true,
            "message": "List"
        },
        "icon": "list-outline",
        "routeInfo": {
            "route": "list"
        },
        "group": "top",
        "order": 0,
        "badge": {},
        "presence": {},
        "availability": {},
        "viewportInfo": {}
    }
]`,
    },
})
