import { Dashboard } from '@servicenow/sdk/core'

Dashboard({
    $id: Now.ID['a27ccc871b358a90759455342a4bcb62'],
    name: 'Badging Office Reports',
    description: 'Badge Admin Reports Dashboard',
    tabs: [
        {
            $id: Now.ID['a67c80c71b358a90759455342a4bcbae'],
            name: 'Tab',
            widgets: [
                {
                    $id: Now.ID['427f888b1b358a90759455342a4bcb3e'],
                    component: '226449101138d0dff1abe0e1566c8b2a',
                    componentProps: {
                        filterId: '1hsnhpj4954dsqslc27',
                        filterName: '',
                        filterComponentType: 'date',
                        targets: [
                            {
                                type: 'table',
                                table: {
                                    id: 'x_aleen_snguardian_request',
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
                        isShowSelectedValueInPill: false,
                        filterElementLayout: 'vertical',
                        enableResetToDefault: true,
                        enableClearFilter: true,
                        maxElements: 500,
                        cascadeScope: 'a67c80c71b358a90759455342a4bcbae',
                        noDebounce: '',
                    },
                    height: 3,
                    width: 25,
                    position: {
                        x: 15,
                        y: 0,
                    },
                },
                {
                    $id: Now.ID['444598031b758a90759455342a4bcb15'],
                    component: 'line',
                    componentProps: {
                        legendPosition: 'right',
                        legendHorizontalAlignment: 'end',
                        yAxisStyle: 'default',
                        extensionType: 'line',
                        dataSources: [
                            {
                                label: 'Request',
                                sourceType: 'table',
                                tableOrViewName: 'x_aleen_snguardian_request',
                                filterQuery: '',
                                id: 'dGFibGV4X2FsZWVuX3NuZ3VhcmRpYW5fcmVxdWVzdDE3MTQ0ODM4NzYwODY=',
                            },
                        ],
                        showSubAggregate: false,
                        headerTitle: 'Request Creation Trend',
                        dataCategory: 'group',
                        refreshRequest: '',
                        metrics: [
                            {
                                dataSource: 'dGFibGV4X2FsZWVuX3NuZ3VhcmRpYW5fcmVxdWVzdDE3MTQ0ODM4NzYwODY=',
                                id: 'ZEdGaWJHVjRYMkZzWldWdVgzTnVaM1ZoY21ScFlXNWZjbVZ4ZFdWemRERTNNVFEwT0RNNE56WXdPRFk9MTcxNDQ4Mzg3ODQyNg==',
                                aggregateFunction: 'COUNT',
                                axisId: 'primary',
                            },
                        ],
                        groupBy: [
                            {
                                groupBy: [
                                    {
                                        dataSource: 'dGFibGV4X2FsZWVuX3NuZ3VhcmRpYW5fcmVxdWVzdDE3MTQ0ODM4NzYwODY=',
                                        groupByField: 'request_type',
                                    },
                                ],
                                maxNumberOfGroups: 10,
                                numberOfGroupsBasedOn: 'NO_OF_GROUP_BASED_ON_PER_METRIC',
                                showOthers: true,
                                hideZeroValues: false,
                                disableRanges: false,
                            },
                        ],
                        sortBy: 'value',
                        trendBy: {
                            trendByFrequency: 'date',
                            trendByFields: [
                                {
                                    field: 'sys_created_on',
                                    metric: 'ZEdGaWJHVjRYMkZzWldWdVgzTnVaM1ZoY21ScFlXNWZjbVZ4ZFdWemRERTNNVFEwT0RNNE56WXdPRFk9MTcxNDQ4Mzg3ODQyNg==',
                                },
                            ],
                        },
                        refreshFrequency: false,
                        noDebounce: '',
                    },
                    height: 15,
                    width: 30,
                    position: {
                        x: 0,
                        y: 20,
                    },
                },
                {
                    $id: Now.ID['519bd84f1bf942d06962fe60cd4bcb44'],
                    component: 'semi-donut',
                    componentProps: {
                        dataSources: [
                            {
                                label: 'Request',
                                sourceType: 'table',
                                tableOrViewName: 'x_aleen_snguardian_request',
                                filterQuery: '',
                                id: 'dGFibGV4X2FsZWVuX3NuZ3VhcmRpYW5fcmVxdWVzdDE3MTQ0ODUzNjE0MzE=',
                            },
                        ],
                        showSubAggregate: false,
                        showHeaderSeparator: true,
                        headerTitle: 'Request By Provisioning Status',
                        refreshRequest: '',
                        metrics: [
                            {
                                dataSource: 'dGFibGV4X2FsZWVuX3NuZ3VhcmRpYW5fcmVxdWVzdDE3MTQ0ODUzNjE0MzE=',
                                id: 'ZEdGaWJHVjRYMkZzWldWdVgzTnVaM1ZoY21ScFlXNWZjbVZ4ZFdWemRERTNNVFEwT0RVek5qRTBNekU9MTcxNDQ4NTM2NDA0NA==',
                                aggregateFunction: 'COUNT',
                                axisId: 'primary',
                            },
                        ],
                        groupBy: [
                            {
                                groupBy: [
                                    {
                                        dataSource: 'dGFibGV4X2FsZWVuX3NuZ3VhcmRpYW5fcmVxdWVzdDE3MTQ0ODUzNjE0MzE=',
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
                        showTotalValue: false,
                        noDebounce: '',
                    },
                    height: 17,
                    width: 15,
                    position: {
                        x: 18,
                        y: 3,
                    },
                },
                {
                    $id: Now.ID['6168ea091b0ec2106962fe60cd4bcbc4'],
                    component: 'pie',
                    componentProps: {
                        registerPosition: 'right',
                        showRegisterValue: true,
                        showRegisterPercentage: true,
                        additionalGroupByConfig: [
                            {
                                id: 'identity_type',
                                label: 'Type',
                            },
                            {
                                id: 'identity_source_system_code',
                                label: 'Source System Code',
                            },
                            {
                                id: 'identity_department',
                                label: 'Department',
                            },
                        ],
                        dataSources: [
                            {
                                label: 'Cardholders Without Badges View',
                                sourceType: 'table',
                                tableOrViewName: 'x_aleen_snguardian_cardholders_without_badges_view',
                                filterQuery: 'iasset_assetISEMPTY',
                                id: 'dGFibGV4X2FsZWVuX3NuZ3VhcmRpYW5fY2FyZGhvbGRlcnNfd2l0aG91dF9iYWRnZXNfdmlldzE3MTUwNTkyODY0NjQ=',
                            },
                        ],
                        showSubAggregate: false,
                        showHeaderSeparator: true,
                        headerTitle: 'Cardholders Without Badges',
                        refreshRequest: '',
                        metrics: [
                            {
                                dataSource:
                                    'dGFibGV4X2FsZWVuX3NuZ3VhcmRpYW5fY2FyZGhvbGRlcnNfd2l0aG91dF9iYWRnZXNfdmlldzE3MTUwNTkyODY0NjQ=',
                                id: 'ZEdGaWJHVjRYMkZzWldWdVgzTnVaM1ZoY21ScFlXNWZZMkZ5WkdodmJHUmxjbk5mZDJsMGFHOTFkRjlpWVdSblpYTmZkbWxsZHpFM01UVXdOVGt5T0RZME5qUT0xNzE1MDU5Mjg4NDE5',
                                aggregateFunction: 'COUNT',
                                axisId: 'primary',
                            },
                        ],
                        groupBy: [
                            {
                                groupBy: [
                                    {
                                        dataSource:
                                            'dGFibGV4X2FsZWVuX3NuZ3VhcmRpYW5fY2FyZGhvbGRlcnNfd2l0aG91dF9iYWRnZXNfdmlldzE3MTUwNTkyODY0NjQ=',
                                        groupByField: 'identity_type',
                                    },
                                ],
                                maxNumberOfGroups: 10,
                                numberOfGroupsBasedOn: 'NO_OF_GROUP_BASED_ON_PER_METRIC',
                                showOthers: false,
                                disableRanges: false,
                            },
                        ],
                        sortBy: 'value',
                        showChangeFrom: false,
                        noDebounce: '',
                    },
                    height: 16,
                    width: 26,
                    position: {
                        x: 0,
                        y: 35,
                    },
                },
                {
                    $id: Now.ID['80492e491b0ec2106962fe60cd4bcb64'],
                    component: 'donut',
                    componentProps: {
                        registerPosition: 'right',
                        showRegisterValue: true,
                        showRegisterPercentage: true,
                        additionalGroupByConfig: [
                            {
                                id: 'identity_source_system_code',
                                label: 'Source System Code',
                            },
                            {
                                id: 'identity_type',
                                label: 'Type',
                            },
                            {
                                id: 'identity_department',
                                label: 'Department',
                            },
                        ],
                        dataSources: [
                            {
                                label: 'Cardholders Without Access View',
                                sourceType: 'table',
                                tableOrViewName: 'x_aleen_snguardian_cardholders_without_access_view',
                                filterQuery: 'iaccess_access_levelISEMPTY',
                                id: 'dGFibGV4X2FsZWVuX3NuZ3VhcmRpYW5fY2FyZGhvbGRlcnNfd2l0aG91dF9hY2Nlc3NfdmlldzE3MTUwNTk0MjY1NDY=',
                            },
                        ],
                        showSubAggregate: false,
                        showHeaderSeparator: true,
                        headerTitle: 'Cardholders without Access',
                        refreshRequest: '',
                        metrics: [
                            {
                                dataSource:
                                    'dGFibGV4X2FsZWVuX3NuZ3VhcmRpYW5fY2FyZGhvbGRlcnNfd2l0aG91dF9hY2Nlc3NfdmlldzE3MTUwNTk0MjY1NDY=',
                                id: 'ZEdGaWJHVjRYMkZzWldWdVgzTnVaM1ZoY21ScFlXNWZZMkZ5WkdodmJHUmxjbk5mZDJsMGFHOTFkRjloWTJObGMzTmZkbWxsZHpFM01UVXdOVGswTWpZMU5EWT0xNzE1MDU5NDI4NjY1',
                                aggregateFunction: 'COUNT',
                                axisId: 'primary',
                            },
                        ],
                        groupBy: [
                            {
                                groupBy: [
                                    {
                                        dataSource:
                                            'dGFibGV4X2FsZWVuX3NuZ3VhcmRpYW5fY2FyZGhvbGRlcnNfd2l0aG91dF9hY2Nlc3NfdmlldzE3MTUwNTk0MjY1NDY=',
                                        groupByField: 'identity_source_system_code',
                                    },
                                ],
                                maxNumberOfGroups: 10,
                                numberOfGroupsBasedOn: 'NO_OF_GROUP_BASED_ON_PER_METRIC',
                                showOthers: false,
                                disableRanges: false,
                            },
                        ],
                        sortBy: 'value',
                        showTotalValue: false,
                        noDebounce: '',
                    },
                    height: 16,
                    width: 22,
                    position: {
                        x: 26,
                        y: 35,
                    },
                },
                {
                    $id: Now.ID['80bd840b1b358a90759455342a4bcb64'],
                    component: 'donut',
                    componentProps: {
                        registerPosition: 'right',
                        showRegisterValue: true,
                        showRegisterPercentage: true,
                        dataSources: [
                            {
                                label: 'Request',
                                sourceType: 'table',
                                tableOrViewName: 'x_aleen_snguardian_request',
                                filterQuery: '',
                                id: 'dGFibGV4X2FsZWVuX3NuZ3VhcmRpYW5fcmVxdWVzdDE3MTQ0ODE4NjYzNTc=',
                            },
                        ],
                        showSubAggregate: false,
                        showHeaderSeparator: true,
                        headerTitle: 'Requests By Type',
                        refreshRequest: '',
                        metrics: [
                            {
                                dataSource: 'dGFibGV4X2FsZWVuX3NuZ3VhcmRpYW5fcmVxdWVzdDE3MTQ0ODE4NjYzNTc=',
                                id: 'ZEdGaWJHVjRYMkZzWldWdVgzTnVaM1ZoY21ScFlXNWZjbVZ4ZFdWemRERTNNVFEwT0RFNE5qWXpOVGM9MTcxNDQ4MTg2OTI1NA==',
                                aggregateFunction: 'COUNT',
                                axisId: 'primary',
                            },
                        ],
                        groupBy: [
                            {
                                groupBy: [
                                    {
                                        dataSource: 'dGFibGV4X2FsZWVuX3NuZ3VhcmRpYW5fcmVxdWVzdDE3MTQ0ODE4NjYzNTc=',
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
                        showMetricLabel: true,
                        showTotalValue: true,
                        noDebounce: '',
                    },
                    height: 17,
                    width: 18,
                    position: {
                        x: 0,
                        y: 3,
                    },
                },
                {
                    $id: Now.ID['999b588f1bf942d06962fe60cd4bcb90'],
                    component: 'pie',
                    componentProps: {
                        additionalGroupByConfig: [
                            {
                                id: 'state',
                                label: 'State',
                            },
                            {
                                id: 'assigned_to',
                                label: 'Assigned to',
                            },
                        ],
                        dataSources: [
                            {
                                label: 'Request',
                                sourceType: 'table',
                                tableOrViewName: 'x_aleen_snguardian_request',
                                filterQuery: '',
                                id: 'dGFibGV4X2FsZWVuX3NuZ3VhcmRpYW5fcmVxdWVzdDE3MTQ0ODU0Mjk5MTQ=',
                            },
                        ],
                        showSubAggregate: false,
                        showHeaderSeparator: true,
                        headerTitle: 'Request By State',
                        refreshRequest: '',
                        metrics: [
                            {
                                dataSource: 'dGFibGV4X2FsZWVuX3NuZ3VhcmRpYW5fcmVxdWVzdDE3MTQ0ODU0Mjk5MTQ=',
                                id: 'ZEdGaWJHVjRYMkZzWldWdVgzTnVaM1ZoY21ScFlXNWZjbVZ4ZFdWemRERTNNVFEwT0RVME1qazVNVFE9MTcxNDQ4NTQzMjUyNA==',
                                aggregateFunction: 'COUNT',
                                axisId: 'primary',
                            },
                        ],
                        groupBy: [
                            {
                                groupBy: [
                                    {
                                        dataSource: 'dGFibGV4X2FsZWVuX3NuZ3VhcmRpYW5fcmVxdWVzdDE3MTQ0ODU0Mjk5MTQ=',
                                        groupByField: 'state',
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
                    height: 17,
                    width: 15,
                    position: {
                        x: 33,
                        y: 3,
                    },
                },
                {
                    $id: Now.ID['a31bac8f1b3d42d06962fe60cd4bcbda'],
                    component: 'donut',
                    componentProps: {
                        registerPosition: 'right',
                        showRegisterValue: true,
                        showRegisterPercentage: true,
                        dataSources: [
                            {
                                label: 'Request',
                                sourceType: 'table',
                                tableOrViewName: 'x_aleen_snguardian_request',
                                filterQuery: 'status=4c8f8ed51bbc8210759455342a4bcb7b',
                                id: 'dGFibGV4X2FsZWVuX3NuZ3VhcmRpYW5fcmVxdWVzdDE3MTQ0ODk1NjIyNTY=',
                            },
                        ],
                        showSubAggregate: false,
                        showHeaderSeparator: true,
                        headerTitle: 'Provision Errors by Request Type',
                        refreshRequest: '',
                        metrics: [
                            {
                                dataSource: 'dGFibGV4X2FsZWVuX3NuZ3VhcmRpYW5fcmVxdWVzdDE3MTQ0ODk1NjIyNTY=',
                                id: 'ZEdGaWJHVjRYMkZzWldWdVgzTnVaM1ZoY21ScFlXNWZjbVZ4ZFdWemRERTNNVFEwT0RrMU5qSXlOVFk9MTcxNDQ4OTU2NTE5NQ==',
                                aggregateFunction: 'COUNT',
                                axisId: 'primary',
                            },
                        ],
                        groupBy: [
                            {
                                groupBy: [
                                    {
                                        dataSource: 'dGFibGV4X2FsZWVuX3NuZ3VhcmRpYW5fcmVxdWVzdDE3MTQ0ODk1NjIyNTY=',
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
                        showTotalValue: false,
                        noDebounce: '',
                    },
                    height: 15,
                    width: 18,
                    position: {
                        x: 30,
                        y: 20,
                    },
                },
            ],
        },
    ],
    visibilities: [
        {
            $id: Now.ID['a67c80c71b358a90759455342a4bcbb3'],
            experience: 'f51b0fe67e7502d09df6f61979a51bf0',
        },
    ],
})
