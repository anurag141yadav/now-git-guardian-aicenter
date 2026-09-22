import { SPPage } from '@servicenow/sdk/core'

SPPage({
    title: 'Alert  Host HomePage',
    category: 'custom',
    pageId: 'alert_host_home_page',
    shortDescription: 'Alert Visit List Page',
    roles: ['x_aleen_snguardian.host'],
    containers: [
        {
            $id: '728588ff2bf1d210d4dffd74ce91bf13',
            order: 1,
            name: 'Alert  Host HomePage - Container 1',
            width: 'container-fluid',
            rows: [
                {
                    $id: 'f68588ff2bf1d210d4dffd74ce91bf15',
                    order: 1,
                    columns: [
                        {
                            $id: '3e8588ff2bf1d210d4dffd74ce91bf17',
                            order: 1,
                        },
                    ],
                },
            ],
        },
    ],
})
