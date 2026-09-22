import { SPPage } from '@servicenow/sdk/core'

SPPage({
    title: 'Alert Visitors List Page',
    category: 'custom',
    pageId: 'alert_visitors_list_page',
    shortDescription: 'Alert Visitors List Page',
    roles: ['x_aleen_snguardian.host', 'x_aleen_snguardian.lobby_admin'],
    containers: [
        {
            $id: '404ce8632b6d9210d4dffd74ce91bf10',
            order: 1,
            name: 'Alert Visitors List Page - Container 1',
            width: 'container-fluid',
            rows: [
                {
                    $id: '604ce8632b6d9210d4dffd74ce91bfa5',
                    order: 1,
                    columns: [
                        {
                            $id: 'e44ce8632b6d9210d4dffd74ce91bfa7',
                            order: 1,
                        },
                    ],
                },
            ],
        },
    ],
})
