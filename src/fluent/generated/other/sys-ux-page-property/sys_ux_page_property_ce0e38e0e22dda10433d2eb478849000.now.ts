import { Record } from '@servicenow/sdk/core'

Record({
    $id: Now.ID['ce0e38e0e22dda10433d2eb478849000'],
    table: 'sys_ux_page_property',
    data: {
        description: 'Main Configuration',
        name: 'chrome_main',
        page: '020e38e0f42dda10aed05e6f8f796710',
        sys_domain: 'global',
        sys_domain_path: 'global',
        type: 'json',
        unique_name: 'x_aleen_snguardian.020e38e0f42dda10aed05e6f8f796710.root.chrome_main',
        value: `{\r
  "maxCachedPageCount": 5,\r
  "maxActivePageCount": 3,\r
  "timeLeftWarning": 15\r
}`,
    },
})
