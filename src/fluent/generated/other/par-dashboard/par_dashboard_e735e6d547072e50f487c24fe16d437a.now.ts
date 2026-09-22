import { Dashboard } from '@servicenow/sdk/core'

Dashboard({
    $id: Now.ID['e735e6d547072e50f487c24fe16d437a'],
    name: 'Integration Monitor',
    description: 'Monitors provisioning activities across systems, showing status, performance for quick analysis.',
    tabs: [
        {
            $id: Now.ID['73356ed547072e50f487c24fe16d43e5'],
            name: 'New Tab 2',
            widgets: [
                {
                    $id: Now.ID['10327e1547472e50f487c24fe16d43d0'],
                    component: 'horizontal-bar',
                    componentProps: {
                        dataSources: [
                            {
                                label: 'Provisioning Monitor',
                                sourceType: 'table',
                                tableOrViewName: 'x_aleen_snguardian_provisioning_monitor',
                                filterQuery: '',
                                id: 'dGFibGV4X2FsZWVuX3NuZ3VhcmRpYW5fcHJvdmlzaW9uaW5nX21vbml0b3IxNzUzNzgyNjAzNzkw',
                            },
                        ],
                        showSubAggregate: false,
                        metrics: [
                            {
                                dataSource:
                                    'dGFibGV4X2FsZWVuX3NuZ3VhcmRpYW5fcHJvdmlzaW9uaW5nX21vbml0b3IxNzUzNzgyNjAzNzkw',
                                id: 'ZEdGaWJHVjRYMkZzWldWdVgzTnVaM1ZoY21ScFlXNWZjSEp2ZG1semFXOXVhVzVuWDIxdmJtbDBiM0l4TnpVek56Z3lOakF6TnprdzE3NTM3ODI2MDU5NTY=',
                                aggregateFunction: 'COUNT',
                                axisId: 'primary',
                            },
                        ],
                        groupBy: [
                            {
                                groupBy: [
                                    {
                                        dataSource:
                                            'dGFibGV4X2FsZWVuX3NuZ3VhcmRpYW5fcHJvdmlzaW9uaW5nX21vbml0b3IxNzUzNzgyNjAzNzkw',
                                        groupByField: 'category',
                                    },
                                ],
                                maxNumberOfGroups: 10,
                                numberOfGroupsBasedOn: 'NO_OF_GROUP_BASED_ON_PER_METRIC',
                                showOthers: false,
                                disableRanges: false,
                            },
                        ],
                        sortBy: 'value',
                        showFilterIcon: false,
                        id: 'showFilterIcon',
                        value: false,
                        noDebounce: true,
                        propLabel: 'Show filter icon',
                        headerTitle: 'Records by Category (Today)',
                    },
                    height: 13,
                    width: 18,
                    position: {
                        x: 0,
                        y: 48,
                    },
                },
                {
                    $id: Now.ID['164d2edd47072e50f487c24fe16d430b'],
                    component: 'pie',
                    componentProps: {
                        registerPosition: 'right',
                        showRegisterOnSameLine: true,
                        showRegisterValue: true,
                        dataSources: [
                            {
                                label: 'Provisioning Monitor',
                                sourceType: 'table',
                                tableOrViewName: 'x_aleen_snguardian_provisioning_monitor',
                                filterQuery: '',
                                id: 'dGFibGV4X2FsZWVuX3NuZ3VhcmRpYW5fcHJvdmlzaW9uaW5nX21vbml0b3IxNzUzNzgxOTc0MjA5',
                            },
                        ],
                        showSubAggregate: false,
                        showHeaderSeparator: true,
                        headerTitle: 'By Status',
                        metrics: [
                            {
                                dataSource:
                                    'dGFibGV4X2FsZWVuX3NuZ3VhcmRpYW5fcHJvdmlzaW9uaW5nX21vbml0b3IxNzUzNzgxOTc0MjA5',
                                id: 'ZEdGaWJHVjRYMkZzWldWdVgzTnVaM1ZoY21ScFlXNWZjSEp2ZG1semFXOXVhVzVuWDIxdmJtbDBiM0l4TnpVek56Z3hPVGMwTWpBNTE3NTM3ODE5NzU5NjU=',
                                aggregateFunction: 'COUNT',
                                axisId: 'primary',
                            },
                        ],
                        groupBy: [
                            {
                                groupBy: [
                                    {
                                        dataSource:
                                            'dGFibGV4X2FsZWVuX3NuZ3VhcmRpYW5fcHJvdmlzaW9uaW5nX21vbml0b3IxNzUzNzgxOTc0MjA5',
                                        groupByField: 'status',
                                    },
                                ],
                                maxNumberOfGroups: 10,
                                numberOfGroupsBasedOn: 'NO_OF_GROUP_BASED_ON_PER_METRIC',
                                showOthers: false,
                                disableRanges: false,
                            },
                        ],
                        sortBy: 'value',
                        showFilterIcon: false,
                        id: 'showFilterIcon',
                        value: false,
                        noDebounce: true,
                        propLabel: 'Show filter icon',
                    },
                    height: 18,
                    width: 18,
                    position: {
                        x: 0,
                        y: 30,
                    },
                },
                {
                    $id: Now.ID['348c37d5474b2e50f487c24fe16d43f9'],
                    component: 'single-score',
                    componentProps: {
                        showZero: true,
                        dataSources: [
                            {
                                label: 'Provisioning Monitor',
                                sourceType: 'table',
                                tableOrViewName: 'x_aleen_snguardian_provisioning_monitor',
                                filterQuery: 'status=FAILED',
                                id: 'dGFibGV4X2FsZWVuX3NuZ3VhcmRpYW5fcHJvdmlzaW9uaW5nX21vbml0b3IxNzUzODAyOTU3OTE0',
                            },
                        ],
                        showSubAggregate: false,
                        showHeaderSeparator: true,
                        headerTitle: 'Errors',
                        metrics: [
                            {
                                dataSource:
                                    'dGFibGV4X2FsZWVuX3NuZ3VhcmRpYW5fcHJvdmlzaW9uaW5nX21vbml0b3IxNzUzODAyOTU3OTE0',
                                id: 'ZEdGaWJHVjRYMkZzWldWdVgzTnVaM1ZoY21ScFlXNWZjSEp2ZG1semFXOXVhVzVuWDIxdmJtbDBiM0l4TnpVek9EQXlPVFUzT1RFMDE3NTM4MDI5NTk0MzI=',
                                aggregateFunction: 'COUNT',
                                axisId: 'primary',
                            },
                        ],
                        showFilterIcon: false,
                        refreshFrequency: '',
                        showChangeFrom: false,
                        id: 'showFilterIcon',
                        value: false,
                        noDebounce: true,
                        propLabel: 'Show filter icon',
                    },
                    height: 12,
                    width: 12,
                    position: {
                        x: 12,
                        y: 4,
                    },
                },
                {
                    $id: Now.ID['5e4d2edd47072e50f487c24fe16d4310'],
                    component: 'vertical-bar',
                    componentProps: {
                        legendHorizontalAlignment: 'start',
                        dataSources: [
                            {
                                label: 'Provisioning Monitor',
                                sourceType: 'table',
                                tableOrViewName: 'x_aleen_snguardian_provisioning_monitor',
                                filterQuery: '',
                                id: 'dGFibGV4X2FsZWVuX3NuZ3VhcmRpYW5fcHJvdmlzaW9uaW5nX21vbml0b3IxNzUzNzgyMTY2ODc2',
                            },
                        ],
                        showSubAggregate: false,
                        showHeaderSeparator: true,
                        headerTitle: 'By System (Today)',
                        metrics: [
                            {
                                dataSource:
                                    'dGFibGV4X2FsZWVuX3NuZ3VhcmRpYW5fcHJvdmlzaW9uaW5nX21vbml0b3IxNzUzNzgyMTY2ODc2',
                                id: 'ZEdGaWJHVjRYMkZzWldWdVgzTnVaM1ZoY21ScFlXNWZjSEp2ZG1semFXOXVhVzVuWDIxdmJtbDBiM0l4TnpVek56Z3lNVFkyT0RjMjE3NTM3ODIxNjkwNDE=',
                                aggregateFunction: 'COUNT',
                                axisId: 'primary',
                            },
                        ],
                        groupBy: [
                            {
                                groupBy: [
                                    {
                                        dataSource:
                                            'dGFibGV4X2FsZWVuX3NuZ3VhcmRpYW5fcHJvdmlzaW9uaW5nX21vbml0b3IxNzUzNzgyMTY2ODc2',
                                        groupByField: 'system',
                                    },
                                ],
                                maxNumberOfGroups: 10,
                                numberOfGroupsBasedOn: 'NO_OF_GROUP_BASED_ON_PER_METRIC',
                                showOthers: false,
                                disableRanges: false,
                            },
                        ],
                        sortBy: 'value',
                        showFilterIcon: false,
                        id: 'showFilterIcon',
                        value: false,
                        noDebounce: true,
                        propLabel: 'Show filter icon',
                    },
                    height: 13,
                    width: 30,
                    position: {
                        x: 18,
                        y: 30,
                    },
                },
                {
                    $id: Now.ID['b08c37d5474b2e50f487c24fe16d43fb'],
                    component: 'single-score',
                    componentProps: {
                        showZero: true,
                        dataSources: [
                            {
                                label: 'Provisioning Monitor',
                                sourceType: 'table',
                                tableOrViewName: 'x_aleen_snguardian_provisioning_monitor',
                                filterQuery: 'status=PROCESSED',
                                id: 'dGFibGV4X2FsZWVuX3NuZ3VhcmRpYW5fcHJvdmlzaW9uaW5nX21vbml0b3IxNzUzODAzMTAzNjU2',
                            },
                        ],
                        showSubAggregate: false,
                        showHeaderSeparator: true,
                        headerTitle: 'Completed',
                        metrics: [
                            {
                                dataSource:
                                    'dGFibGV4X2FsZWVuX3NuZ3VhcmRpYW5fcHJvdmlzaW9uaW5nX21vbml0b3IxNzUzODAzMTAzNjU2',
                                id: 'ZEdGaWJHVjRYMkZzWldWdVgzTnVaM1ZoY21ScFlXNWZjSEp2ZG1semFXOXVhVzVuWDIxdmJtbDBiM0l4TnpVek9EQXpNVEF6TmpVMjE3NTM4MDMxMDUyNTg=',
                                aggregateFunction: 'COUNT',
                                axisId: 'primary',
                            },
                        ],
                        showFilterIcon: false,
                        showChangeFrom: false,
                        id: 'showFilterIcon',
                        value: false,
                        noDebounce: true,
                        propLabel: 'Show filter icon',
                    },
                    height: 12,
                    width: 12,
                    position: {
                        x: 24,
                        y: 4,
                    },
                },
                {
                    $id: Now.ID['b48c37d5474b2e50f487c24fe16d43f7'],
                    component: 'single-score',
                    componentProps: {
                        showZero: true,
                        dataSources: [
                            {
                                label: 'Provisioning Monitor',
                                sourceType: 'table',
                                tableOrViewName: 'x_aleen_snguardian_provisioning_monitor',
                                filterQuery: 'status=PENDING^ORstatus=IN_QUEUE',
                                id: 'dGFibGV4X2FsZWVuX3NuZ3VhcmRpYW5fcHJvdmlzaW9uaW5nX21vbml0b3IxNzUzODAzMTUwMzgw',
                            },
                        ],
                        showSubAggregate: false,
                        showHeaderSeparator: true,
                        headerTitle: 'Pending (In Queue)',
                        metrics: [
                            {
                                dataSource:
                                    'dGFibGV4X2FsZWVuX3NuZ3VhcmRpYW5fcHJvdmlzaW9uaW5nX21vbml0b3IxNzUzODAzMTUwMzgw',
                                id: 'ZEdGaWJHVjRYMkZzWldWdVgzTnVaM1ZoY21ScFlXNWZjSEp2ZG1semFXOXVhVzVuWDIxdmJtbDBiM0l4TnpVek9EQXpNVFV3TXpndzE3NTM4MDMxNTE5Nzg=',
                                aggregateFunction: 'COUNT',
                                axisId: 'primary',
                            },
                        ],
                        showFilterIcon: false,
                        showChangeFrom: false,
                        id: 'showFilterIcon',
                        value: false,
                        noDebounce: true,
                        propLabel: 'Show filter icon',
                    },
                    height: 12,
                    width: 12,
                    position: {
                        x: 36,
                        y: 4,
                    },
                },
                {
                    $id: Now.ID['cb53475547872e50f487c24fe16d438c'],
                    component: 'heatmap',
                    componentProps: {
                        showZero: true,
                        showDataLabels: true,
                        dataSources: [
                            {
                                label: 'Provisioning Monitor',
                                sourceType: 'table',
                                tableOrViewName: 'x_aleen_snguardian_provisioning_monitor',
                                filterQuery:
                                    'sys_created_onONThis week@javascript:gs.beginningOfThisWeek()@javascript:gs.endOfThisWeek()',
                                id: 'dGFibGV4X2FsZWVuX3NuZ3VhcmRpYW5fcHJvdmlzaW9uaW5nX21vbml0b3IxNzUzNzg4MDk3OTAz',
                            },
                        ],
                        showSubAggregate: false,
                        headerTitle: 'Weekly  Heatmap',
                        metrics: [
                            {
                                dataSource:
                                    'dGFibGV4X2FsZWVuX3NuZ3VhcmRpYW5fcHJvdmlzaW9uaW5nX21vbml0b3IxNzUzNzg4MDk3OTAz',
                                id: 'ZEdGaWJHVjRYMkZzWldWdVgzTnVaM1ZoY21ScFlXNWZjSEp2ZG1semFXOXVhVzVuWDIxdmJtbDBiM0l4TnpVek56ZzRNRGszT1RBejE3NTM3ODgwOTk3NzQ=',
                                aggregateFunction: 'COUNT',
                                axisId: 'primary',
                            },
                        ],
                        groupBy: [
                            {
                                groupBy: [
                                    {
                                        dataSource:
                                            'dGFibGV4X2FsZWVuX3NuZ3VhcmRpYW5fcHJvdmlzaW9uaW5nX21vbml0b3IxNzUzNzg4MDk3OTAz',
                                        groupByField: 'system',
                                    },
                                ],
                                categoryIndex: 0,
                                maxNumberOfGroups: 10,
                                numberOfGroupsBasedOn: 'NO_OF_GROUP_BASED_ON_PER_METRIC',
                                showOthers: false,
                                disableRanges: false,
                            },
                            {
                                groupBy: [
                                    {
                                        dataSource:
                                            'dGFibGV4X2FsZWVuX3NuZ3VhcmRpYW5fcHJvdmlzaW9uaW5nX21vbml0b3IxNzUzNzg4MDk3OTAz',
                                        groupByField: 'status',
                                    },
                                ],
                                categoryIndex: 1,
                                maxNumberOfGroups: 10,
                                numberOfGroupsBasedOn: 'NO_OF_GROUP_BASED_ON_PER_METRIC',
                                showOthers: false,
                                disableRanges: false,
                            },
                        ],
                        sortBy: 'name',
                        sortByOrder: 'asc',
                        followFilters: false,
                        showFilterIcon: false,
                        id: 'showFilterIcon',
                        value: false,
                        noDebounce: true,
                        propLabel: 'Show filter icon',
                    },
                    height: 18,
                    width: 30,
                    position: {
                        x: 18,
                        y: 43,
                    },
                },
                {
                    $id: Now.ID['db23fe5547472e50f487c24fe16d4303'],
                    component: 'spline',
                    componentProps: {
                        showClosestSeriesOnHover: false,
                        showLegend: false,
                        yAxisStyle: 'default',
                        extensionType: 'spline',
                        dataSources: [
                            {
                                label: 'Provisioning Monitor',
                                sourceType: 'table',
                                tableOrViewName: 'x_aleen_snguardian_provisioning_monitor',
                                filterQuery: '',
                                id: 'dGFibGV4X2FsZWVuX3NuZ3VhcmRpYW5fcHJvdmlzaW9uaW5nX21vbml0b3IxNzUzNzgzOTQyNzUy',
                            },
                        ],
                        showSubAggregate: false,
                        headerTitle: 'Start Activity  Trend by System',
                        dataCategory: 'group',
                        metrics: [
                            {
                                dataSource:
                                    'dGFibGV4X2FsZWVuX3NuZ3VhcmRpYW5fcHJvdmlzaW9uaW5nX21vbml0b3IxNzUzNzgzOTQyNzUy',
                                id: 'ZEdGaWJHVjRYMkZzWldWdVgzTnVaM1ZoY21ScFlXNWZjSEp2ZG1semFXOXVhVzVuWDIxdmJtbDBiM0l4TnpVek56Z3pPVFF5TnpVeTE3NTM3ODM5NDQ3MjA=',
                                aggregateFunction: 'COUNT',
                                axisId: 'primary',
                            },
                        ],
                        groupBy: [
                            {
                                groupBy: [
                                    {
                                        dataSource:
                                            'dGFibGV4X2FsZWVuX3NuZ3VhcmRpYW5fcHJvdmlzaW9uaW5nX21vbml0b3IxNzUzNzgzOTQyNzUy',
                                        groupByField: 'system',
                                        metric: 'ZEdGaWJHVjRYMkZzWldWdVgzTnVaM1ZoY21ScFlXNWZjSEp2ZG1semFXOXVhVzVuWDIxdmJtbDBiM0l4TnpVek56Z3pPVFF5TnpVeTE3NTM3ODM5NDQ3MjA=',
                                    },
                                ],
                                maxNumberOfGroups: 10,
                                numberOfGroupsBasedOn: 'NO_OF_GROUP_BASED_ON_PER_METRIC',
                                showOthers: false,
                                disableRanges: false,
                            },
                        ],
                        sortBy: 'value',
                        trendBy: {
                            trendByFrequency: 'hourOfDay',
                            trendByFields: [
                                {
                                    field: 'start_time',
                                    metric: 'ZEdGaWJHVjRYMkZzWldWdVgzTnVaM1ZoY21ScFlXNWZjSEp2ZG1semFXOXVhVzVuWDIxdmJtbDBiM0l4TnpVek56Z3pPVFF5TnpVeTE3NTM3ODM5NDQ3MjA=',
                                },
                            ],
                        },
                        showFilterIcon: false,
                        id: 'showFilterIcon',
                        value: false,
                        noDebounce: true,
                        propLabel: 'Show filter icon',
                    },
                    height: 14,
                    width: 48,
                    position: {
                        x: 0,
                        y: 16,
                    },
                },
                {
                    $id: Now.ID['fc8c37d5474b2e50f487c24fe16d43f3'],
                    component: 'single-score',
                    componentProps: {
                        showZero: true,
                        dataSources: [
                            {
                                label: 'Provisioning Monitor',
                                sourceType: 'table',
                                tableOrViewName: 'x_aleen_snguardian_provisioning_monitor',
                                filterQuery: '',
                                id: 'dGFibGV4X2FsZWVuX3NuZ3VhcmRpYW5fcHJvdmlzaW9uaW5nX21vbml0b3IxNzUzODAyODY0OTIy',
                            },
                        ],
                        showSubAggregate: false,
                        showHeaderSeparator: true,
                        headerTitle: 'Total',
                        description: '',
                        metrics: [
                            {
                                dataSource:
                                    'dGFibGV4X2FsZWVuX3NuZ3VhcmRpYW5fcHJvdmlzaW9uaW5nX21vbml0b3IxNzUzODAyODY0OTIy',
                                id: 'ZEdGaWJHVjRYMkZzWldWdVgzTnVaM1ZoY21ScFlXNWZjSEp2ZG1semFXOXVhVzVuWDIxdmJtbDBiM0l4TnpVek9EQXlPRFkwT1RJeTE3NTM4MDI4NjY3MzY=',
                                aggregateFunction: 'COUNT',
                                axisId: 'primary',
                            },
                        ],
                        showFilterIcon: false,
                        showChangeFrom: false,
                        id: 'showFilterIcon',
                        value: false,
                        noDebounce: true,
                        propLabel: 'Show filter icon',
                    },
                    height: 12,
                    width: 12,
                    position: {
                        x: 0,
                        y: 4,
                    },
                },
                {
                    $id: Now.ID['fdf1fba147c76e50f487c24fe16d43dc'],
                    component: '226449101138d0dff1abe0e1566c8b2a',
                    componentProps: {
                        filterId: '1j1da3fr7ucl9ufu05j4',
                        filterName: 'Date ',
                        filterComponentType: 'date',
                        datasource: {
                            type: 'table',
                            table: {
                                id: 'x_aleen_snguardian_provisioning_monitor',
                            },
                        },
                        targets: [
                            {
                                type: 'table',
                                table: {
                                    id: 'x_aleen_snguardian_provisioning_monitor',
                                },
                                field: {
                                    id: 'sys_created_on',
                                    type: 'glide_date_time',
                                    reference: '',
                                },
                            },
                        ],
                        defaultSelectedDateRange: {
                            range: 'SN_DYNAMIC_DATERANGE__LAST_7_DAYS',
                            label: 'Last 7 days',
                        },
                        dateFilterView: 'calendar-reldates',
                        sort: 'ASC',
                        filterElementType: 'pill',
                        isShowSelectedValueInPill: true,
                        filterElementLayout: 'vertical',
                        enableResetToDefault: false,
                        enableClearFilter: true,
                        maxElements: 500,
                        cascadeScope: '73356ed547072e50f487c24fe16d43e5',
                        id: 'isShowSelectedValueInPill',
                        value: true,
                        noDebounce: true,
                        propLabel: 'Show values in pill',
                    },
                    height: 4,
                    width: 47,
                    position: {
                        x: 0,
                        y: 0,
                    },
                },
            ],
        },
    ],
    visibilities: [
        {
            $id: Now.ID['fb45eed547072e50f487c24fe16d4324'],
            experience: 'f51b0fe67e7502d09df6f61979a51bf0',
        },
    ],
    permissions: [
        {
            $id: Now.ID['2735e6d547072e50f487c24fe16d437d'],
            canRead: true,
            canShare: true,
            canWrite: true,
            owner: true,
            user: '5b729ae147f0621051a3e84d416d4367',
        },
    ],
})
