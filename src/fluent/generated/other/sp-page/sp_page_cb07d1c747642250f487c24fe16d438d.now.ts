import { SPPage } from '@servicenow/sdk/core'

SPPage({
    title: 'Alert Print Badge Page',
    category: 'custom',
    pageId: 'alert_print_badge_page',
    roles: ['x_aleen_snguardian.badging_officer', 'x_aleen_snguardian.admin'],
    containers: [
        {
            $id: 'b36791c747642250f487c24fe16d4373',
            order: 1,
            name: 'Alert Print Badge Page - Container 1',
            rows: [
                {
                    $id: '8a87ddc747642250f487c24fe16d436d',
                    order: 1,
                    columns: [
                        {
                            $id: 'ca87910b47642250f487c24fe16d4373',
                            order: 1,
                            instances: [
                                {
                                    $id: 'a2875dc747642250f487c24fe16d434a',
                                    widget: '1149643947a4ea10f487c24fe16d439d',
                                    order: 1,
                                },
                            ],
                        },
                    ],
                },
            ],
        },
    ],
})
