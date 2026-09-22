import { SPPage } from '@servicenow/sdk/core'

SPPage({
    title: 'Alert Visitors Watchlist Page',
    category: 'custom',
    pageId: 'alert_visitors_watchlist_page',
    shortDescription: 'Alert Visitors Watch List',
    roles: ['x_aleen_snguardian.lobby_admin'],
    containers: [
        {
            $id: '6495c4192b695e50d4dffd74ce91bf73',
            order: 1,
            name: 'Alert Visitors Watchlist Page - Container 1',
            rows: [
                {
                    $id: 'a99540d92b695e50d4dffd74ce91bf0c',
                    order: 1,
                    columns: [
                        {
                            $id: '659540d92b695e50d4dffd74ce91bf0f',
                            order: 1,
                        },
                    ],
                },
            ],
        },
    ],
})
