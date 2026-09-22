import { Record } from '@servicenow/sdk/core'

Record({
    $id: Now.ID['c60ef4e03c2dda10c483c2e7c5020aff'],
    table: 'sys_ux_page_property',
    data: {
        description: 'L1 Configuration',
        name: 'chrome_toolbar',
        page: '020e38e0f42dda10aed05e6f8f796710',
        required_translations: `[ {
  "message" : "Analytics Center",
  "comment" : ""
}, {
  "message" : "Home",
  "comment" : ""
}, {
  "message" : "List",
  "comment" : ""
} ]`,
        sys_domain: 'global',
        sys_domain_path: 'global',
        type: 'json',
        unique_name: 'x_aleen_snguardian.020e38e0f42dda10aed05e6f8f796710.root.chrome_toolbar',
        value: `[\r
   {\r
      "id":"home",\r
      "label": {\r
              "message": "Home",\r
               "translatable": true\r
        },\r
      "icon":"home-outline",\r
      "viewportInfo":{\r
         \r
      },\r
      "routeInfo":{\r
         "route":"home"\r
      },\r
      "group":"top",\r
      "badge":{\r
         \r
      },\r
      "presence":{\r
         \r
      },\r
      "availability":{\r
         \r
      }\r
   },\r
   {\r
      "id":"list",\r
      "label": {\r
              "message": "List",\r
               "translatable": true\r
        },\r
      "icon":"list-outline",\r
      "viewportInfo":{\r
         \r
      },\r
      "routeInfo":{\r
         "route":"list"\r
      },\r
      "group":"top",\r
      "badge":{\r
         \r
      },\r
      "presence":{\r
         \r
      },\r
      "availability":{\r
         \r
      }\r
   },\r
 {\r
      "id":"analytics-center",\r
      "label": {\r
              "message": "Analytics Center",\r
               "translatable": true\r
        },\r
      "icon":"analytics-center-outline",\r
      "viewportInfo":{\r
         \r
      },\r
      "routeInfo":{\r
         "route":"analytics-center"\r
      },\r
      "group":"top",\r
      "badge":{\r
         \r
      },\r
      "presence":{\r
         \r
      },\r
      "availability":{\r
         \r
      }\r
   }\r
]`,
    },
})
