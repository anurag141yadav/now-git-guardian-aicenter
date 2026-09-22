import { SPPage } from '@servicenow/sdk/core'

SPPage({
    title: 'Alert Visitors Home Page',
    category: 'custom',
    pageId: 'alert_visitor_homepage',
    shortDescription: 'Alert Visitor Home Page',
    roles: ['x_aleen_snguardian.portal', 'x_aleen_snguardian.visitor'],
    containers: [
        {
            $id: '736e6e5133bd9a10bf1221382e5c7b91',
            order: 1,
            name: 'Alert Visitors Home Page - Container 1',
            rows: [
                {
                    $id: '967ea65133bd9a10bf1221382e5c7b82',
                    order: 1,
                    columns: [
                        {
                            $id: '967ea65133bd9a10bf1221382e5c7b85',
                            order: 1,
                            instances: [
                                {
                                    $id: '119e6e9133bd9a10bf1221382e5c7b50',
                                    widget: '531e269133bd9a10bf1221382e5c7bde',
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
