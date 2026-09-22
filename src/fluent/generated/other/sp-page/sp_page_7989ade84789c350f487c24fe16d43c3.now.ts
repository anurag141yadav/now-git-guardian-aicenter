import { SPPage } from '@servicenow/sdk/core'

SPPage({
    title: 'Alert MC Redirect',
    category: 'custom',
    pageId: 'alert_mc_redirect',
    roles: ['x_aleen_snguardian.visitor'],
    containers: [
        {
            $id: '730ce56c4789c350f487c24fe16d4301',
            order: 1,
            name: 'Alert MC Redirect - Container 1',
            rows: [
                {
                    $id: '3a1ce92047c9c350f487c24fe16d43bf',
                    order: 1,
                    columns: [
                        {
                            $id: 'be1ce92047c9c350f487c24fe16d43c4',
                            order: 1,
                            instances: [
                                {
                                    $id: '0e2c692047c9c350f487c24fe16d437e',
                                    widget: '35eaa56c4789c350f487c24fe16d43d5',
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
