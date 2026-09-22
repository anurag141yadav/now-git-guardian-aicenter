import { SPPage } from '@servicenow/sdk/core'

SPPage({
    title: 'Alert Bulk Print Page',
    category: 'custom',
    pageId: 'alert_bulk_print_page',
    roles: ['x_aleen_snguardian.employee'],
    containers: [
        {
            $id: '394eccb747a0e250f487c24fe16d4314',
            order: 1,
            name: 'Alert Bulk Print Page - Container 1',
            rows: [
                {
                    $id: 'a99e84f747a0e250f487c24fe16d4397',
                    order: 1,
                    columns: [
                        {
                            $id: '299e84f747a0e250f487c24fe16d439a',
                            order: 1,
                            instances: [
                                {
                                    $id: 'f29e84f747a0e250f487c24fe16d439f',
                                    widget: 'eb8cff954724aa10f487c24fe16d4347',
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
