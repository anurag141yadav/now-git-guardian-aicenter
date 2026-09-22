import { SPPage } from '@servicenow/sdk/core'

SPPage({
    title: 'Alert Action Result Page',
    category: 'custom',
    pageId: 'alert_action_result_page',
    shortDescription: 'After Checkin In, Walkin we should show result',
    roles: ['x_aleen_snguardian.visitor'],
    containers: [
        {
            $id: 'c9d33e8f2b5a1610d4dffd74ce91bff3',
            order: 1,
            name: 'Alert Action Result Page - Container 1',
            rows: [
                {
                    $id: 'aed3fe8f2b5a1610d4dffd74ce91bf32',
                    order: 1,
                    columns: [
                        {
                            $id: 'e2d372cf2b5a1610d4dffd74ce91bf0e',
                            order: 1,
                            instances: [
                                {
                                    $id: '41e3ba8f2b5a1610d4dffd74ce91bf51',
                                    widget: '0fb269305b3212000d7ec7ad31f91ae2',
                                    order: 1,
                                },
                            ],
                        },
                    ],
                },
            ],
        },
        {
            $id: '1be3b2cf2b5a1610d4dffd74ce91bfb5',
            order: 2,
            name: 'Alert Action Result Page - Container 2',
            rows: [
                {
                    $id: 'c0f332cf2b5a1610d4dffd74ce91bfc1',
                    order: 1,
                    columns: [
                        {
                            $id: '4cf3b2cf2b5a1610d4dffd74ce91bfe6',
                            order: 1,
                            instances: [
                                {
                                    $id: 'fff3b2cf2b5a1610d4dffd74ce91bfc9',
                                    widget: '5d89fa4733219210bf1221382e5c7b2f',
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
