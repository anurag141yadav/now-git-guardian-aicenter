import { Record } from '@servicenow/sdk/core'

Record({
    $id: Now.ID['b51b0fe6df7502d03c1a8e7522a526df'],
    table: 'sys_ux_page_property',
    data: {
        description: 'L1 Configuration',
        name: 'chrome_toolbar',
        page: 'f51b0fe67e7502d09df6f61979a51bf0',
        required_translations: `[ {
  "message" : "Home",
  "comment" : ""
}, {
  "message" : "List",
  "comment" : ""
}, {
  "message" : "Map",
  "comment" : ""
} ]`,
        suffix: 'chrome_toolbar',
        sys_domain: 'global',
        sys_domain_path: 'global',
        type: 'json',
        unique_name: 'x_aleen_snguardian.f51b0fe67e7502d09df6f61979a51bf0.root.chrome_toolbar',
        value: '[{"id":"home","label":{"translatable":true,"message":"Home"},"icon":"home-outline","routeInfo":{"route":"home"},"group":"top","badge":{},"presence":{},"availability":{}},{"id":"list","label":{"translatable":true,"message":"List"},"icon":"database-search-outline","routeInfo":{"route":"list"},"group":"top","badge":{},"presence":{},"availability":{}},{"id":"locations-map-page","label":{"translatable":true,"message":"Map"},"icon":"chart-geomap-outline","routeInfo":{"route":"locations-map-page"},"group":"top","badge":{},"presence":{},"availability":{},"order":200}]',
    },
})
