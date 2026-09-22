import { SPPage } from '@servicenow/sdk/core'

SPPage({
    title: 'Alert Mobile Credential Provision',
    category: 'custom',
    pageId: 'alert_mobile_credential_provision',
    roles: ['x_aleen_snguardian.visitor'],
    containers: [
        {
            $id: 'af90fc2447a4a610f487c24fe16d4347',
            order: 1,
            name: 'Alert Mobile Credential Provision - Container 1',
            rows: [
                {
                    $id: '1ab034a447a4a610f487c24fe16d4379',
                    order: 1,
                    columns: [
                        {
                            $id: '12b034a447a4a610f487c24fe16d437c',
                            size: 3,
                            order: 1,
                        },
                        {
                            $id: '96b034a447a4a610f487c24fe16d437e',
                            size: 6,
                            order: 2,
                            instances: [
                                {
                                    $id: 'a3b038e047a4a610f487c24fe16d43dc',
                                    widget: '692ec8d44760269051a3e84d416d4331',
                                    order: 1,
                                },
                            ],
                        },
                        {
                            $id: 'dab034a447a4a610f487c24fe16d4380',
                            size: 3,
                            order: 3,
                        },
                    ],
                },
            ],
        },
    ],
})
