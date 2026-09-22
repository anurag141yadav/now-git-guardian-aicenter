import { SPPage } from '@servicenow/sdk/core'

SPPage({
    title: 'Alert Catalog Item Page',
    category: 'custom',
    pageId: 'alert_cat_item',
    shortDescription: 'Alert Catalog Item',
    roles: ['x_aleen_snguardian.visitor'],
    containers: [
        {
            $id: '5ebfbfb033829610bf1221382e5c7b2d',
            order: 1,
            name: 'Alert Catalog Item Page - Container 1',
            width: 'container-fluid',
            rows: [
                {
                    $id: '0f8f2e0b2b5a1610d4dffd74ce91bfc7',
                    order: 1,
                    columns: [
                        {
                            $id: '838f2e0b2b5a1610d4dffd74ce91bfca',
                            order: 1,
                            instances: [
                                {
                                    $id: 'd59fae0b2b5a1610d4dffd74ce91bf4d',
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
            $id: '82fe2ec72b5a1610d4dffd74ce91bf1b',
            order: 2,
            name: 'Alert Catalog Item Page - Container 2',
            width: 'container-fluid',
            rows: [
                {
                    $id: '11bf6e0b2b5a1610d4dffd74ce91bfaf',
                    order: 1,
                    columns: [
                        {
                            $id: '95bf6e0b2b5a1610d4dffd74ce91bfb1',
                            order: 1,
                            instances: [
                                {
                                    $id: '43bf224b2b5a1610d4dffd74ce91bfde',
                                    widget: '519e3a4b33219210bf1221382e5c7b7d',
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
