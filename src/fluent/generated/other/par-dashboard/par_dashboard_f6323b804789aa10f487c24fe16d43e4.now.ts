import { Dashboard } from '@servicenow/sdk/core'

Dashboard({
    $id: Now.ID['f6323b804789aa10f487c24fe16d43e4'],
    name: 'Visitor Management Workspace',
    tabs: [
        {
            $id: Now.ID['b2327b804789aa10f487c24fe16d43de'],
            name: 'New Tab 1',
            widgets: [
                {
                    $id: Now.ID['12e1885447cd2e1051a3e84d416d43a9'],
                    component: 'column',
                    componentProps: {
                        yAxisStyle: 'default',
                        extensionType: 'bar',
                        dataSources: [
                            {
                                label: 'Visit',
                                sourceType: 'table',
                                tableOrViewName: 'x_aleen_snguardian_visitor_visit',
                                filterQuery: '',
                                id: 'dGFibGV4X2FsZWVuX3NuZ3VhcmRpYW5fdmlzaXRvcl92aXNpdDE3NDQ4NzU5OTMwMDA=',
                            },
                        ],
                        showSubAggregate: false,
                        showHeaderSeparator: true,
                        headerTitle: 'Monthly Comparison',
                        dataCategory: 'group',
                        refreshRequest: '',
                        metrics: [
                            {
                                dataSource: 'dGFibGV4X2FsZWVuX3NuZ3VhcmRpYW5fdmlzaXRvcl92aXNpdDE3NDQ4NzU5OTMwMDA=',
                                id: 'ZEdGaWJHVjRYMkZzWldWdVgzTnVaM1ZoY21ScFlXNWZkbWx6YVhSdmNsOTJhWE5wZERFM05EUTROelU1T1RNd01EQT0xNzQ0ODc1OTkzOTY5',
                                aggregateFunction: 'COUNT',
                                axisId: 'primary',
                            },
                        ],
                        sortBy: 'value',
                        trendBy: {
                            trendByFrequency: 'month',
                            trendByFields: [
                                {
                                    field: 'start_date',
                                    metric: 'ZEdGaWJHVjRYMkZzWldWdVgzTnVaM1ZoY21ScFlXNWZkbWx6YVhSdmNsOTJhWE5wZERFM05EUTROelU1T1RNd01EQT0xNzQ0ODc1OTkzOTY5',
                                },
                            ],
                        },
                        noDebounce: '',
                        id: '',
                        value: false,
                        propLabel: '',
                        showClosestSeriesOnHover: false,
                    },
                    height: 15,
                    width: 31,
                    position: {
                        x: 17,
                        y: 4,
                    },
                },
                {
                    $id: Now.ID['1752bb804789aa10f487c24fe16d4304'],
                    component: 'pie',
                    componentProps: {
                        dataSources: [
                            {
                                label: 'Visitor',
                                sourceType: 'table',
                                tableOrViewName: 'x_aleen_snguardian_visitor',
                                filterQuery: '',
                                id: 'dGFibGV4X2FsZWVuX3NuZ3VhcmRpYW5fdmlzaXRvcjE3NDQ4NzUwODExNDU=',
                            },
                        ],
                        showSubAggregate: false,
                        showHeaderSeparator: true,
                        refreshRequest: '',
                        metrics: [
                            {
                                dataSource: 'dGFibGV4X2FsZWVuX3NuZ3VhcmRpYW5fdmlzaXRvcjE3NDQ4NzUwODExNDU=',
                                id: 'ZEdGaWJHVjRYMkZzWldWdVgzTnVaM1ZoY21ScFlXNWZkbWx6YVhSdmNqRTNORFE0TnpVd09ERXhORFU9MTc0NDg3NTA4MTk1Ng==',
                                aggregateFunction: 'COUNT',
                                axisId: 'primary',
                            },
                        ],
                        groupBy: [
                            {
                                groupBy: [
                                    {
                                        dataSource: 'dGFibGV4X2FsZWVuX3NuZ3VhcmRpYW5fdmlzaXRvcjE3NDQ4NzUwODExNDU=',
                                        groupByField: 'visitor_type',
                                    },
                                ],
                                maxNumberOfGroups: 10,
                                numberOfGroupsBasedOn: 'NO_OF_GROUP_BASED_ON_PER_METRIC',
                                showOthers: true,
                                disableRanges: false,
                            },
                        ],
                        sortBy: 'value',
                        showChangeFrom: false,
                        noDebounce: '',
                        headerTitle: 'Visitor Type Breakdown',
                    },
                    height: 18,
                    width: 17,
                    position: {
                        x: 0,
                        y: 60,
                    },
                },
                {
                    $id: Now.ID['2897b3f047a5661051a3e84d416d43ec'],
                    component: 'vertical-bar',
                    componentProps: {
                        yAxisStyle: 'default',
                        dataSources: [
                            {
                                label: 'Visit',
                                sourceType: 'table',
                                tableOrViewName: 'x_aleen_snguardian_visitor_visit',
                                filterQuery: '',
                                id: 'dGFibGV4X2FsZWVuX3NuZ3VhcmRpYW5fdmlzaXRvcl92aXNpdDE3NDcyMjUxNDc5NzI=',
                            },
                        ],
                        showSubAggregate: false,
                        showHeaderSeparator: true,
                        headerTitle: 'Visitor Locations',
                        dataCategory: 'group',
                        refreshRequest: '',
                        metrics: [
                            {
                                dataSource: 'dGFibGV4X2FsZWVuX3NuZ3VhcmRpYW5fdmlzaXRvcl92aXNpdDE3NDcyMjUxNDc5NzI=',
                                id: 'ZEdGaWJHVjRYMkZzWldWdVgzTnVaM1ZoY21ScFlXNWZkbWx6YVhSdmNsOTJhWE5wZERFM05EY3lNalV4TkRjNU56ST0xNzQ3MjI1MTQ5NDc1',
                                aggregateFunction: 'COUNT(DISTINCT',
                                axisId: 'primary',
                                aggregateField: 'location',
                            },
                        ],
                        groupBy: [
                            {
                                groupBy: [
                                    {
                                        dataSource:
                                            'dGFibGV4X2FsZWVuX3NuZ3VhcmRpYW5fdmlzaXRvcl92aXNpdDE3NDcyMjUxNDc5NzI=',
                                        groupByField: 'location',
                                    },
                                ],
                                maxNumberOfGroups: 10,
                                numberOfGroupsBasedOn: 'NO_OF_GROUP_BASED_ON_PER_METRIC',
                                showOthers: false,
                                disableRanges: false,
                            },
                        ],
                        sortBy: 'value',
                        id: '',
                        value: [
                            {
                                groupBy: [
                                    {
                                        dataSource:
                                            'dGFibGV4X2FsZWVuX3NuZ3VhcmRpYW5fdmlzaXRvcl92aXNpdDE3NDcyMjUxNDc5NzI=',
                                        groupByField: 'location',
                                        isRange: false,
                                        isChoice: false,
                                        isPaBucket: false,
                                    },
                                ],
                                maxNumberOfGroups: 10,
                                numberOfGroupsBasedOn: 'NO_OF_GROUP_BASED_ON_PER_METRIC',
                                showOthers: false,
                                disableRanges: false,
                            },
                        ],
                        noDebounce: '',
                        propLabel: '',
                    },
                    height: 16,
                    width: 36,
                    position: {
                        x: 12,
                        y: 19,
                    },
                },
                {
                    $id: Now.ID['304a441047016e1051a3e84d416d4324'],
                    component: 'vertical-bar',
                    componentProps: {
                        dataSources: [
                            {
                                label: 'Visit',
                                sourceType: 'table',
                                tableOrViewName: 'x_aleen_snguardian_visitor_visit',
                                filterQuery: 'status=ac508e1d2b191a10d4dffd74ce91bf62',
                                id: 'dGFibGV4X2FsZWVuX3NuZ3VhcmRpYW5fdmlzaXRvcl92aXNpdDE3NDQ4ODEyNDE0NzE=',
                            },
                        ],
                        showSubAggregate: false,
                        showHeaderSeparator: true,
                        headerTitle: 'Overstay Locations',
                        refreshRequest: '',
                        metrics: [
                            {
                                dataSource: 'dGFibGV4X2FsZWVuX3NuZ3VhcmRpYW5fdmlzaXRvcl92aXNpdDE3NDQ4ODEyNDE0NzE=',
                                id: 'ZEdGaWJHVjRYMkZzWldWdVgzTnVaM1ZoY21ScFlXNWZkbWx6YVhSdmNsOTJhWE5wZERFM05EUTRPREV5TkRFME56RT0xNzQ0ODgxMjQyMzIw',
                                aggregateFunction: 'COUNT',
                                axisId: 'primary',
                            },
                        ],
                        groupBy: [
                            {
                                groupBy: [
                                    {
                                        dataSource:
                                            'dGFibGV4X2FsZWVuX3NuZ3VhcmRpYW5fdmlzaXRvcl92aXNpdDE3NDQ4ODEyNDE0NzE=',
                                        groupByField: 'location',
                                    },
                                ],
                                maxNumberOfGroups: 10,
                                numberOfGroupsBasedOn: 'NO_OF_GROUP_BASED_ON_PER_METRIC',
                                showOthers: false,
                                disableRanges: false,
                            },
                        ],
                        sortBy: 'value',
                        noDebounce: '',
                    },
                    height: 18,
                    width: 31,
                    position: {
                        x: 17,
                        y: 60,
                    },
                },
                {
                    $id: Now.ID['7105bf3047a5661051a3e84d416d4366'],
                    component: 'heatmap',
                    componentProps: {
                        showZero: true,
                        showDataLabels: true,
                        dataSources: [
                            {
                                label: 'Visit',
                                sourceType: 'table',
                                tableOrViewName: 'x_aleen_snguardian_visitor_visit',
                                filterQuery: '',
                                id: 'dGFibGV4X2FsZWVuX3NuZ3VhcmRpYW5fdmlzaXRvcl92aXNpdDE3NDcyMjQ0MDg4MjQ=',
                            },
                        ],
                        showSubAggregate: false,
                        showHeaderSeparator: true,
                        headerTitle: 'Tower Utilization',
                        refreshRequest: '',
                        metrics: [
                            {
                                dataSource: 'dGFibGV4X2FsZWVuX3NuZ3VhcmRpYW5fdmlzaXRvcl92aXNpdDE3NDcyMjQ0MDg4MjQ=',
                                id: 'ZEdGaWJHVjRYMkZzWldWdVgzTnVaM1ZoY21ScFlXNWZkbWx6YVhSdmNsOTJhWE5wZERFM05EY3lNalEwTURnNE1qUT0xNzQ3MjI0NDEwNjI3',
                                aggregateFunction: 'COUNT',
                                axisId: 'primary',
                            },
                        ],
                        groupBy: [
                            {
                                groupBy: [
                                    {
                                        dataSource:
                                            'dGFibGV4X2FsZWVuX3NuZ3VhcmRpYW5fdmlzaXRvcl92aXNpdDE3NDcyMjQ0MDg4MjQ=',
                                        groupByField: 'status',
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
                                            'dGFibGV4X2FsZWVuX3NuZ3VhcmRpYW5fdmlzaXRvcl92aXNpdDE3NDcyMjQ0MDg4MjQ=',
                                        groupByField: 'location',
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
                        id: '',
                        value: true,
                        noDebounce: '',
                        propLabel: '',
                    },
                    height: 25,
                    width: 48,
                    position: {
                        x: 0,
                        y: 35,
                    },
                },
                {
                    $id: Now.ID['7e89c0dc47cd2e1051a3e84d416d43f6'],
                    component: 'single-score',
                    componentProps: {
                        scoreSize: 'lg',
                        scoreIcon: 'address-card-outline',
                        showZero: true,
                        dataSources: [
                            {
                                label: 'Visit',
                                sourceType: 'table',
                                tableOrViewName: 'x_aleen_snguardian_visitor_visit',
                                filterQuery: 'status=ac508e1d2b191a10d4dffd74ce91bf62',
                                id: 'dGFibGV4X2FsZWVuX3NuZ3VhcmRpYW5fdmlzaXRvcl92aXNpdDE3NDQ4ODExMjM1Nzk=',
                            },
                        ],
                        showSubAggregate: false,
                        showHeaderSeparator: true,
                        headerTitle: 'Overstayed Badges',
                        refreshRequest: '',
                        metrics: [
                            {
                                dataSource: 'dGFibGV4X2FsZWVuX3NuZ3VhcmRpYW5fdmlzaXRvcl92aXNpdDE3NDQ4ODExMjM1Nzk=',
                                id: 'ZEdGaWJHVjRYMkZzWldWdVgzTnVaM1ZoY21ScFlXNWZkbWx6YVhSdmNsOTJhWE5wZERFM05EUTRPREV4TWpNMU56az0xNzQ0ODgxMTI0Mzc1',
                                aggregateFunction: 'COUNT',
                                axisId: 'primary',
                            },
                        ],
                        showChangeFrom: false,
                        noDebounce: '',
                        id: '',
                        value: 'lg',
                        propLabel: '',
                    },
                    height: 16,
                    width: 12,
                    position: {
                        x: 0,
                        y: 19,
                    },
                },
                {
                    $id: Now.ID['b5c088114761a250f487c24fe16d43a7'],
                    component: 'donut',
                    componentProps: {
                        dataSources: [
                            {
                                label: 'Visitor Request',
                                sourceType: 'table',
                                tableOrViewName: 'x_aleen_snguardian_visitor_request',
                                filterQuery: '',
                                id: 'dGFibGV4X2FsZWVuX3NuZ3VhcmRpYW5fdmlzaXRvcl9yZXF1ZXN0MTc0NzI5NDY2MjEwMw==',
                            },
                        ],
                        showSubAggregate: false,
                        showHeaderSeparator: true,
                        headerTitle: 'Visitor Request breakdown ',
                        metrics: [
                            {
                                dataSource: 'dGFibGV4X2FsZWVuX3NuZ3VhcmRpYW5fdmlzaXRvcl9yZXF1ZXN0MTc0NzI5NDY2MjEwMw==',
                                id: 'ZEdGaWJHVjRYMkZzWldWdVgzTnVaM1ZoY21ScFlXNWZkbWx6YVhSdmNsOXlaWEYxWlhOME1UYzBOekk1TkRZMk1qRXdNdz09MTc0NzI5NDY2MzM3NQ==',
                                aggregateFunction: 'COUNT',
                                axisId: 'primary',
                            },
                        ],
                        groupBy: [
                            {
                                groupBy: [
                                    {
                                        dataSource:
                                            'dGFibGV4X2FsZWVuX3NuZ3VhcmRpYW5fdmlzaXRvcl9yZXF1ZXN0MTc0NzI5NDY2MjEwMw==',
                                        groupByField: 'request_type',
                                    },
                                ],
                                maxNumberOfGroups: 10,
                                numberOfGroupsBasedOn: 'NO_OF_GROUP_BASED_ON_PER_METRIC',
                                showOthers: false,
                                disableRanges: false,
                            },
                        ],
                        sortBy: 'value',
                        id: 'showRegister',
                        value: true,
                        noDebounce: true,
                        propLabel: 'Show legend',
                    },
                    height: 15,
                    width: 17,
                    position: {
                        x: 0,
                        y: 4,
                    },
                },
                {
                    $id: Now.ID['ee40fb4947ed6250f487c24fe16d4393'],
                    component: '226449101138d0dff1abe0e1566c8b2a',
                    componentProps: {
                        filterId: '1ir99uvtgopsj94atc08',
                        filterName: 'Date Filter',
                        filterComponentType: 'date',
                        datasource: '{}',
                        targets: [
                            {
                                type: 'table',
                                table: {
                                    id: 'x_aleen_snguardian_visitor_visit',
                                },
                                field: {
                                    id: 'sys_created_on',
                                    type: 'glide_date_time',
                                    reference: '',
                                },
                            },
                        ],
                        defaultSelectedItems: '[]',
                        defaultSelectedDateRange: {
                            range: 'SN_DYNAMIC_DATERANGE__YTD',
                            label: 'YTD',
                        },
                        dateFilterView: 'calendar-reldates',
                        sort: 'ASC',
                        filterElementType: 'pill',
                        isShowSelectedValueInPill: true,
                        filterElementLayout: 'vertical',
                        enableResetToDefault: true,
                        enableClearFilter: true,
                        maxElements: 500,
                        cascadeScope: 'b2327b804789aa10f487c24fe16d43de',
                        id: '',
                        value: {
                            range: 'SN_DYNAMIC_DATERANGE__YTD',
                            label: 'YTD',
                        },
                        noDebounce: '',
                        propLabel: '',
                    },
                    height: 4,
                    width: 26,
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
            $id: Now.ID['f6327b804789aa10f487c24fe16d43e3'],
            experience: '9f4c32b74738ea1051a3e84d416d43e8',
        },
    ],
    permissions: [
        {
            $id: Now.ID['76323b804789aa10f487c24fe16d43e7'],
            canRead: true,
            canShare: true,
            canWrite: true,
            owner: true,
            user: 'bcbe4a2147f0621051a3e84d416d43ec',
        },
    ],
})
