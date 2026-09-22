import { SPPage } from '@servicenow/sdk/core'

SPPage({
    title: 'Alert visitor OTP Page',
    category: 'custom',
    pageId: 'alert_visitor_otp_page',
    shortDescription: 'Alert Visitor OTP Page',
    roles: ['x_aleen_snguardian.portal'],
    containers: [
        {
            $id: 'a42ad6502b069610d4dffd74ce91bf61',
            order: 1,
            name: 'Alert visitor OTP Page - Container 1',
            rows: [
                {
                    $id: '403ada142b069610d4dffd74ce91bf40',
                    order: 1,
                    columns: [
                        {
                            $id: '4c3ada142b069610d4dffd74ce91bf42',
                            order: 1,
                            instances: [
                                {
                                    $id: '9c4a9a142b069610d4dffd74ce91bf30',
                                    widget: '96259e9c2bc29610d4dffd74ce91bf94',
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
