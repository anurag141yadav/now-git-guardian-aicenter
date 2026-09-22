import { Dashboard } from '@servicenow/sdk/core'

Dashboard({
    $id: Now.ID['b6c12ba2a1d1aa1073adb3908afa5ad4'],
    name: 'Risk Management Workspace',
    tabs: [
        {
            $id: Now.ID['32c12ba2a8d1aa10592651511b6a00d4'],
            name: 'Tab',
            widgets: [
                {
                    $id: Now.ID['0a1e97724755ea1051a3e84d416d43b1'],
                    component: 'calendar-report',
                    componentProps: {
                        table: 'x_aleen_snguardian_risk_instance',
                        reportSource: '',
                        encodedQuery: '',
                        startDateField: 'detected_at',
                        endDateField: 'eta',
                        eventDisplayFields: 'number,risk.name',
                        componentTitle: 'Risk Lifespan',
                        followFilters: false,
                        showFilterOverview: false,
                        showDescription: true,
                        componentDescription: '',
                        viewType: 'DAY',
                        eventColor: '',
                        noDebounce: '',
                    },
                    height: 16,
                    width: 48,
                    position: {
                        x: 0,
                        y: 68,
                    },
                },
                {
                    $id: Now.ID['22f5ab2a47d1aa1051a3e84d416d43f9'],
                    component: 'single-score',
                    componentProps: {
                        scoreSize: 'md',
                        showZero: true,
                        dataSources: [
                            {
                                label: 'Risk Instance',
                                sourceType: 'table',
                                tableOrViewName: 'x_aleen_snguardian_risk_instance',
                                filterQuery: '',
                                id: 'dGFibGV4X2FsZWVuX3NuZ3VhcmRpYW5fcmlza19pbnN0YW5jZTE3NDY2MTY2MzE1NjU=',
                            },
                        ],
                        showSubAggregate: false,
                        showHeaderSeparator: true,
                        headerTitle: 'SLA Violations (Closed)',
                        refreshRequest: '',
                        metrics: [
                            {
                                dataSource: 'dGFibGV4X2FsZWVuX3NuZ3VhcmRpYW5fcmlza19pbnN0YW5jZTE3NDY2MTY2MzE1NjU=',
                                id: 'ZEdGaWJHVjRYMkZzWldWdVgzTnVaM1ZoY21ScFlXNWZjbWx6YTE5cGJuTjBZVzVqWlRFM05EWTJNVFkyTXpFMU5qVT0xNzQ2NjE2NjMyMjA0',
                                aggregateFunction: 'COUNT',
                                axisId: 'primary',
                            },
                        ],
                        showChangeFrom: false,
                        noDebounce: '',
                    },
                    height: 8,
                    width: 9,
                    position: {
                        x: 39,
                        y: 8,
                    },
                },
                {
                    $id: Now.ID['26dca7624715aa1051a3e84d416d4392'],
                    component: 'horizontal-bar',
                    componentProps: {
                        yAxisStyle: 'default',
                        showLegend: false,
                        colorConfig: {
                            type: 'palette',
                            palette: '467fc319d7100200b96d45a3ce610342',
                        },
                        dataSources: [
                            {
                                label: 'Risk Instance',
                                sourceType: 'table',
                                tableOrViewName: 'x_aleen_snguardian_risk_instance',
                                filterQuery: 'etaRELATIVE^status=OPEN',
                                id: 'dGFibGV4X2FsZWVuX3NuZ3VhcmRpYW5fcmlza19pbnN0YW5jZTE3NDY2MTgxODk2NjU=',
                            },
                            {
                                label: 'Risk Instance 1',
                                sourceType: 'table',
                                tableOrViewName: 'x_aleen_snguardian_risk_instance',
                                filterQuery: 'sla_due>=1970-01-01 00:00:00',
                                id: 'dGFibGV4X2FsZWVuX3NuZ3VhcmRpYW5fcmlza19pbnN0YW5jZTE3NDY2MTgxOTQzOTU=',
                            },
                        ],
                        showSubAggregate: false,
                        headerTitle: 'SLA Violation by Risk',
                        refreshRequest: '',
                        metrics: [
                            {
                                dataSource: 'dGFibGV4X2FsZWVuX3NuZ3VhcmRpYW5fcmlza19pbnN0YW5jZTE3NDY2MTgxODk2NjU=',
                                id: 'ZEdGaWJHVjRYMkZzWldWdVgzTnVaM1ZoY21ScFlXNWZjbWx6YTE5cGJuTjBZVzVqWlRFM05EWTJNVGd4T0RrMk5qVT0xNzQ2NjE4MTkwNzE4',
                                aggregateFunction: 'COUNT',
                                axisId: 'primary',
                            },
                            {
                                dataSource: 'dGFibGV4X2FsZWVuX3NuZ3VhcmRpYW5fcmlza19pbnN0YW5jZTE3NDY2MTgxOTQzOTU=',
                                id: 'ZEdGaWJHVjRYMkZzWldWdVgzTnVaM1ZoY21ScFlXNWZjbWx6YTE5cGJuTjBZVzVqWlRFM05EWTJNVGd4T1RRek9UVT0xNzQ2NjE4MTk1MDQ4',
                                aggregateFunction: 'COUNT',
                                axisId: 'primary',
                            },
                        ],
                        groupBy: [
                            {
                                groupBy: [
                                    {
                                        dataSource:
                                            'dGFibGV4X2FsZWVuX3NuZ3VhcmRpYW5fcmlza19pbnN0YW5jZTE3NDY2MTgxODk2NjU=',
                                        groupByField: 'risk',
                                    },
                                    {
                                        dataSource:
                                            'dGFibGV4X2FsZWVuX3NuZ3VhcmRpYW5fcmlza19pbnN0YW5jZTE3NDY2MTgxOTQzOTU=',
                                        groupByField: 'risk',
                                    },
                                ],
                                maxNumberOfGroups: 'ALL',
                                numberOfGroupsBasedOn: 'NO_OF_GROUP_BASED_ON_PER_METRIC',
                                showOthers: false,
                            },
                        ],
                        sortBy: 'value',
                        noDebounce: '',
                    },
                    height: 16,
                    width: 25,
                    position: {
                        x: 0,
                        y: 34,
                    },
                },
                {
                    $id: Now.ID['26f5ab2a47d1aa1051a3e84d416d43f6'],
                    component: 'single-score',
                    componentProps: {
                        scoreSize: 'md',
                        scoreIcon: 'user-verify-fill',
                        showZero: true,
                        dataSources: [
                            {
                                label: 'Risk Instance',
                                sourceType: 'table',
                                tableOrViewName: 'x_aleen_snguardian_risk_instance',
                                filterQuery: '',
                                id: 'dGFibGV4X2FsZWVuX3NuZ3VhcmRpYW5fcmlza19pbnN0YW5jZTE3NDY2MTY1Mzk5Nzc=',
                            },
                        ],
                        showSubAggregate: false,
                        showHeaderSeparator: true,
                        headerTitle: 'SLA Violation (Open)',
                        refreshRequest: '',
                        metrics: [
                            {
                                dataSource: 'dGFibGV4X2FsZWVuX3NuZ3VhcmRpYW5fcmlza19pbnN0YW5jZTE3NDY2MTY1Mzk5Nzc=',
                                id: 'ZEdGaWJHVjRYMkZzWldWdVgzTnVaM1ZoY21ScFlXNWZjbWx6YTE5cGJuTjBZVzVqWlRFM05EWTJNVFkxTXprNU56Yz0xNzQ2NjE2NTQwNjMx',
                                aggregateFunction: 'COUNT',
                                axisId: 'primary',
                            },
                        ],
                        showChangeFrom: false,
                        noDebounce: '',
                    },
                    height: 8,
                    width: 9,
                    position: {
                        x: 39,
                        y: 0,
                    },
                },
                {
                    $id: Now.ID['3ec12ba207d1aa10ec700047d1ff25d1'],
                    component: 'donut',
                    componentProps: {
                        registerPosition: 'right',
                        showRegisterOnSameLine: true,
                        showRegisterValue: true,
                        dataSources: [
                            {
                                label: 'Risk Instance',
                                sourceType: 'table',
                                tableOrViewName: 'x_aleen_snguardian_risk_instance',
                                filterQuery: '',
                                id: 'dGFibGV4X2FsZWVuX3NuZ3VhcmRpYW5fcmlza19pbnN0YW5jZTE3NDY2MTU4NDEzMjY=',
                            },
                        ],
                        showSubAggregate: false,
                        wrapTitle: true,
                        showHeaderSeparator: true,
                        headerTitle: 'Risk By Type',
                        metrics: [
                            {
                                dataSource: 'dGFibGV4X2FsZWVuX3NuZ3VhcmRpYW5fcmlza19pbnN0YW5jZTE3NDY2MTU4NDEzMjY=',
                                id: 'ZEdGaWJHVjRYMkZzWldWdVgzTnVaM1ZoY21ScFlXNWZjbWx6YTE5cGJuTjBZVzVqWlRFM05EWTJNVFU0TkRFek1qWT0xNzQ2NjE1ODQyMTc1',
                                aggregateFunction: 'COUNT',
                                axisId: 'primary',
                            },
                        ],
                        groupBy: [
                            {
                                groupBy: [
                                    {
                                        dataSource:
                                            'dGFibGV4X2FsZWVuX3NuZ3VhcmRpYW5fcmlza19pbnN0YW5jZTE3NDY2MTU4NDEzMjY=',
                                        groupByField: 'risk.type',
                                    },
                                ],
                                maxNumberOfGroups: 'ALL',
                                numberOfGroupsBasedOn: 'NO_OF_GROUP_BASED_ON_PER_METRIC',
                                showOthers: false,
                                disableRanges: false,
                            },
                        ],
                        sortBy: 'value',
                        enableRealTimeUpdate: true,
                        showChangeFrom: false,
                        noDebounce: '',
                        id: 'groupBy',
                        value: [
                            {
                                groupBy: [
                                    {
                                        dataSource:
                                            'dGFibGV4X2FsZWVuX3NuZ3VhcmRpYW5fcmlza19pbnN0YW5jZTE3NDY2MTU4NDEzMjY=',
                                        groupByField: 'risk.type',
                                        isRange: false,
                                        isChoice: false,
                                        isPaBucket: false,
                                    },
                                ],
                                maxNumberOfGroups: 'ALL',
                                numberOfGroupsBasedOn: 'NO_OF_GROUP_BASED_ON_PER_METRIC',
                                showOthers: false,
                                disableRanges: false,
                            },
                        ],
                        propLabel: 'Group by',
                    },
                    height: 16,
                    width: 13,
                    position: {
                        x: 0,
                        y: 0,
                    },
                },
                {
                    $id: Now.ID['4c3f233a4795ea1051a3e84d416d4377'],
                    component: 'vertical-bar',
                    componentProps: {
                        xAxisWrapLabels: true,
                        showLegend: false,
                        dataSources: [
                            {
                                label: 'Risk Instance',
                                sourceType: 'table',
                                tableOrViewName: 'x_aleen_snguardian_risk_instance',
                                filterQuery: '',
                                id: 'dGFibGV4X2FsZWVuX3NuZ3VhcmRpYW5fcmlza19pbnN0YW5jZTE3NDY2ODYxNDk2ODU=',
                            },
                        ],
                        showSubAggregate: false,
                        showHeaderSeparator: true,
                        headerTitle: 'Key Recurrence (Top 10)',
                        refreshRequest: '',
                        metrics: [
                            {
                                dataSource: 'dGFibGV4X2FsZWVuX3NuZ3VhcmRpYW5fcmlza19pbnN0YW5jZTE3NDY2ODYxNDk2ODU=',
                                id: 'ZEdGaWJHVjRYMkZzWldWdVgzTnVaM1ZoY21ScFlXNWZjbWx6YTE5cGJuTjBZVzVqWlRFM05EWTJPRFl4TkRrMk9EVT0xNzQ2Njg2MTUwNzk5',
                                aggregateFunction: 'COUNT',
                                axisId: 'primary',
                            },
                        ],
                        groupBy: [
                            {
                                groupBy: [
                                    {
                                        dataSource:
                                            'dGFibGV4X2FsZWVuX3NuZ3VhcmRpYW5fcmlza19pbnN0YW5jZTE3NDY2ODYxNDk2ODU=',
                                        groupByField: 'risk',
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
                    width: 25,
                    position: {
                        x: 0,
                        y: 50,
                    },
                },
                {
                    $id: Now.ID['5f89533a4715ea1051a3e84d416d4308'],
                    component: 'vertical-bar',
                    componentProps: {
                        xAxisWrapLabels: true,
                        showLegend: false,
                        dataSources: [
                            {
                                label: 'Risk Instance',
                                sourceType: 'table',
                                tableOrViewName: 'x_aleen_snguardian_risk_instance',
                                filterQuery:
                                    'detected_atONToday@javascript:gs.beginningOfToday()@javascript:gs.endOfToday()',
                                id: 'dGFibGV4X2FsZWVuX3NuZ3VhcmRpYW5fcmlza19pbnN0YW5jZTE3NDY2ODAzNzU4MDc=',
                            },
                        ],
                        showSubAggregate: false,
                        showHeaderSeparator: true,
                        headerTitle: 'Risk findings per Policy',
                        refreshRequest: '',
                        metrics: [
                            {
                                dataSource: 'dGFibGV4X2FsZWVuX3NuZ3VhcmRpYW5fcmlza19pbnN0YW5jZTE3NDY2ODAzNzU4MDc=',
                                id: 'ZEdGaWJHVjRYMkZzWldWdVgzTnVaM1ZoY21ScFlXNWZjbWx6YTE5cGJuTjBZVzVqWlRFM05EWTJPREF6TnpVNE1EYz0xNzQ2NjgwMzc2NTY5',
                                aggregateFunction: 'COUNT',
                                axisId: 'primary',
                            },
                        ],
                        groupBy: [
                            {
                                groupBy: [
                                    {
                                        dataSource:
                                            'dGFibGV4X2FsZWVuX3NuZ3VhcmRpYW5fcmlza19pbnN0YW5jZTE3NDY2ODAzNzU4MDc=',
                                        groupByField: 'policy',
                                    },
                                ],
                                maxNumberOfGroups: 10,
                                numberOfGroupsBasedOn: 'NO_OF_GROUP_BASED_ON_PER_METRIC',
                                showOthers: false,
                            },
                        ],
                        sortBy: 'value',
                        noDebounce: '',
                    },
                    height: 16,
                    width: 23,
                    position: {
                        x: 25,
                        y: 34,
                    },
                },
                {
                    $id: Now.ID['72c12ba2ccd1aa10dccff47c57eb8ed3'],
                    component: 'donut',
                    componentProps: {
                        registerPosition: 'right',
                        showRegisterOnSameLine: true,
                        showRegisterValue: true,
                        dataSources: [
                            {
                                label: 'Risk Instance',
                                sourceType: 'table',
                                tableOrViewName: 'x_aleen_snguardian_risk_instance',
                                filterQuery: '',
                                id: 'dGFibGV4X2FsZWVuX3NuZ3VhcmRpYW5fcmlza19pbnN0YW5jZTE3NDY2MTYwODExMTM=',
                            },
                        ],
                        showSubAggregate: false,
                        showHeaderSeparator: true,
                        headerTitle: 'Risk By Severity',
                        refreshRequest: '',
                        metrics: [
                            {
                                dataSource: 'dGFibGV4X2FsZWVuX3NuZ3VhcmRpYW5fcmlza19pbnN0YW5jZTE3NDY2MTYwODExMTM=',
                                id: 'ZEdGaWJHVjRYMkZzWldWdVgzTnVaM1ZoY21ScFlXNWZjbWx6YTE5cGJuTjBZVzVqWlRFM05EWTJNVFl3T0RFeE1UTT0xNzQ2NjE2MDgxODUz',
                                aggregateFunction: 'COUNT',
                                axisId: 'primary',
                            },
                        ],
                        groupBy: [
                            {
                                groupBy: [
                                    {
                                        dataSource:
                                            'dGFibGV4X2FsZWVuX3NuZ3VhcmRpYW5fcmlza19pbnN0YW5jZTE3NDY2MTYwODExMTM=',
                                        groupByField: 'risk.severity',
                                    },
                                ],
                                maxNumberOfGroups: 'ALL',
                                numberOfGroupsBasedOn: 'NO_OF_GROUP_BASED_ON_PER_METRIC',
                                showOthers: false,
                                disableRanges: false,
                            },
                        ],
                        sortBy: 'value',
                        enableRealTimeUpdate: true,
                        showChangeFrom: false,
                        noDebounce: '',
                    },
                    height: 16,
                    width: 13,
                    position: {
                        x: 26,
                        y: 0,
                    },
                },
                {
                    $id: Now.ID['b4d067b64755ea1051a3e84d416d4337'],
                    component: 'vertical-bar',
                    componentProps: {
                        dataSources: [
                            {
                                label: 'Risk',
                                sourceType: 'table',
                                tableOrViewName: 'x_aleen_snguardian_risk',
                                filterQuery: '',
                                id: 'dGFibGV4X2FsZWVuX3NuZ3VhcmRpYW5fcmlzazE3NDY2ODIzNzk1NTI=',
                            },
                        ],
                        showSubAggregate: false,
                        showHeaderSeparator: true,
                        headerTitle: 'Risk Mitigation SLA',
                        refreshRequest: '',
                        metrics: [
                            {
                                dataSource: 'dGFibGV4X2FsZWVuX3NuZ3VhcmRpYW5fcmlzazE3NDY2ODIzNzk1NTI=',
                                id: 'ZEdGaWJHVjRYMkZzWldWdVgzTnVaM1ZoY21ScFlXNWZjbWx6YXpFM05EWTJPREl6TnprMU5UST0xNzQ2NjgyMzgwNjQw',
                                aggregateFunction: 'COUNT',
                                axisId: 'primary',
                            },
                        ],
                        groupBy: [
                            {
                                groupBy: [
                                    {
                                        dataSource: 'dGFibGV4X2FsZWVuX3NuZ3VhcmRpYW5fcmlzazE3NDY2ODIzNzk1NTI=',
                                        groupByField: 'sla',
                                    },
                                ],
                                maxNumberOfGroups: 'ALL',
                                numberOfGroupsBasedOn: 'NO_OF_GROUP_BASED_ON_PER_METRIC',
                                showOthers: false,
                                disableRanges: false,
                            },
                        ],
                        sortBy: 'value',
                        noDebounce: '',
                    },
                    height: 17,
                    width: 48,
                    position: {
                        x: 0,
                        y: 116,
                    },
                },
                {
                    $id: Now.ID['c5b12fb64755ea1051a3e84d416d435c'],
                    component: '2b1c080881e05dc63b917044290b233f',
                    componentProps: {
                        table: 'x_aleen_snguardian_policy',
                        columnPreferenceKey: '',
                        fixedQuery: '',
                        listTitle: 'Recent Policy Evaluations',
                        columns: 'name,last_evaluated',
                        query: 'active=true',
                        groupByField: '',
                        hideViewAll: true,
                        hideHighlightedValues: true,
                        highlightedValueConfigId: '',
                        hideHighlightContent: false,
                        highlightContent: {
                            color: '',
                        },
                        hideLinks: true,
                        nrlLandmark: true,
                        wordWrap: true,
                        overrideWordWrapUserPref: false,
                        maxCharLimit: 4000,
                        hideEmptyStateImage: false,
                        hidePersonalization: false,
                        hideDotwalk: false,
                        hideColumnReorder: false,
                        hideRowSelector: false,
                        hideColumnGrouping: false,
                        hideColumnResizing: false,
                        hideColumnFiltering: false,
                        hideColumnSorting: false,
                        hideHeader: false,
                        hideTitle: false,
                        hideTitleRowCount: true,
                        hideLastRefreshedText: true,
                        hideRefreshButton: false,
                        hideInlineEditing: false,
                        refreshRequested: '',
                        noDebounce: '',
                    },
                    height: 17,
                    width: 28,
                    position: {
                        x: 0,
                        y: 133,
                    },
                },
                {
                    $id: Now.ID['de6aa7ae47d1aa1051a3e84d416d43d6'],
                    component: 'area',
                    componentProps: {
                        showDataLabels: true,
                        legendPosition: 'right',
                        yAxisStyle: 'default',
                        extensionType: 'area',
                        dataSources: [
                            {
                                label: 'Detected at',
                                sourceType: 'table',
                                tableOrViewName: 'x_aleen_snguardian_risk_instance',
                                filterQuery: '',
                                id: 'dGFibGV4X2FsZWVuX3NuZ3VhcmRpYW5fcmlza19pbnN0YW5jZTE3NDY2MTc0OTY4NTQ=',
                            },
                            {
                                label: 'Mitigated',
                                sourceType: 'table',
                                tableOrViewName: 'x_aleen_snguardian_risk_instance',
                                filterQuery: 'status=MITIGATED',
                                id: 'dGFibGV4X2FsZWVuX3NuZ3VhcmRpYW5fcmlza19pbnN0YW5jZTE3NDY2ODM0MTUyNzg=',
                            },
                            {
                                label: 'Accepted',
                                sourceType: 'table',
                                tableOrViewName: 'x_aleen_snguardian_risk_instance',
                                filterQuery: 'status=ACCEPTED',
                                id: 'dGFibGV4X2FsZWVuX3NuZ3VhcmRpYW5fcmlza19pbnN0YW5jZTE3NDY2ODM0NTUyOTQ=',
                            },
                            {
                                label: 'Invalid',
                                sourceType: 'table',
                                tableOrViewName: 'x_aleen_snguardian_risk_instance',
                                filterQuery: 'status=CLOSED',
                                id: 'dGFibGV4X2FsZWVuX3NuZ3VhcmRpYW5fcmlza19pbnN0YW5jZTE3NDY2ODM0Nzc3NzM=',
                            },
                        ],
                        showSubAggregate: false,
                        showHeaderSeparator: true,
                        headerTitle: 'Detected  vs Mitigated (last 24 Hrs)',
                        dataCategory: 'group',
                        refreshRequest: '',
                        metrics: [
                            {
                                dataSource: 'dGFibGV4X2FsZWVuX3NuZ3VhcmRpYW5fcmlza19pbnN0YW5jZTE3NDY2MTc0OTY4NTQ=',
                                id: 'ZEdGaWJHVjRYMkZzWldWdVgzTnVaM1ZoY21ScFlXNWZjbWx6YTE5cGJuTjBZVzVqWlRFM05EWTJNVGMwT1RZNE5UUT0xNzQ2NjE3NDk3ODY1',
                                aggregateFunction: 'COUNT',
                                axisId: 'primary',
                            },
                            {
                                dataSource: 'dGFibGV4X2FsZWVuX3NuZ3VhcmRpYW5fcmlza19pbnN0YW5jZTE3NDY2ODM0MTUyNzg=',
                                id: 'ZEdGaWJHVjRYMkZzWldWdVgzTnVaM1ZoY21ScFlXNWZjbWx6YTE5cGJuTjBZVzVqWlRFM05EWTJPRE0wTVRVeU56Zz0xNzQ2NjgzNDE3MDU4',
                                aggregateFunction: 'COUNT',
                                axisId: 'primary',
                                chartType: 'spline',
                            },
                            {
                                dataSource: 'dGFibGV4X2FsZWVuX3NuZ3VhcmRpYW5fcmlza19pbnN0YW5jZTE3NDY2ODM0NTUyOTQ=',
                                id: 'ZEdGaWJHVjRYMkZzWldWdVgzTnVaM1ZoY21ScFlXNWZjbWx6YTE5cGJuTjBZVzVqWlRFM05EWTJPRE0wTlRVeU9UUT0xNzQ2NjgzNDU2NTg5',
                                aggregateFunction: 'COUNT',
                                axisId: 'primary',
                                chartType: 'bar',
                            },
                            {
                                dataSource: 'dGFibGV4X2FsZWVuX3NuZ3VhcmRpYW5fcmlza19pbnN0YW5jZTE3NDY2ODM0Nzc3NzM=',
                                id: 'ZEdGaWJHVjRYMkZzWldWdVgzTnVaM1ZoY21ScFlXNWZjbWx6YTE5cGJuTjBZVzVqWlRFM05EWTJPRE0wTnpjM056TT0xNzQ2NjgzNDc4OTQx',
                                aggregateFunction: 'COUNT',
                                axisId: 'primary',
                                chartType: 'bar',
                            },
                        ],
                        sortBy: 'value',
                        trendBy: {
                            trendByFrequency: 'hourOfDay',
                            trendByFields: [
                                {
                                    field: 'detected_at',
                                    metric: 'ZEdGaWJHVjRYMkZzWldWdVgzTnVaM1ZoY21ScFlXNWZjbWx6YTE5cGJuTjBZVzVqWlRFM05EWTJNVGMwT1RZNE5UUT0xNzQ2NjE3NDk3ODY1',
                                },
                                {
                                    field: 'action_at',
                                    metric: 'ZEdGaWJHVjRYMkZzWldWdVgzTnVaM1ZoY21ScFlXNWZjbWx6YTE5cGJuTjBZVzVqWlRFM05EWTJPRE0wTVRVeU56Zz0xNzQ2NjgzNDE3MDU4',
                                },
                                {
                                    field: 'action_at',
                                    metric: 'ZEdGaWJHVjRYMkZzWldWdVgzTnVaM1ZoY21ScFlXNWZjbWx6YTE5cGJuTjBZVzVqWlRFM05EWTJPRE0wTlRVeU9UUT0xNzQ2NjgzNDU2NTg5',
                                },
                                {
                                    field: 'action_at',
                                    metric: 'ZEdGaWJHVjRYMkZzWldWdVgzTnVaM1ZoY21ScFlXNWZjbWx6YTE5cGJuTjBZVzVqWlRFM05EWTJPRE0wTnpjM056TT0xNzQ2NjgzNDc4OTQx',
                                },
                            ],
                        },
                        refreshFrequency: false,
                        noDebounce: '',
                    },
                    height: 18,
                    width: 48,
                    position: {
                        x: 0,
                        y: 16,
                    },
                },
                {
                    $id: Now.ID['e91f97b24755ea1051a3e84d416d4351'],
                    component: 'heatmap',
                    componentProps: {
                        showZero: true,
                        showDataLabels: true,
                        dataSources: [
                            {
                                label: 'Risk Instance',
                                sourceType: 'table',
                                tableOrViewName: 'x_aleen_snguardian_risk_instance',
                                filterQuery: 'status=OPEN',
                                id: 'dGFibGV4X2FsZWVuX3NuZ3VhcmRpYW5fcmlza19pbnN0YW5jZTE3NDY2ODE4Nzk5MjY=',
                            },
                        ],
                        showSubAggregate: false,
                        showHeaderSeparator: true,
                        headerTitle: 'Heatmap Policy vs Risk',
                        refreshRequest: '',
                        metrics: [
                            {
                                dataSource: 'dGFibGV4X2FsZWVuX3NuZ3VhcmRpYW5fcmlza19pbnN0YW5jZTE3NDY2ODE4Nzk5MjY=',
                                id: 'ZEdGaWJHVjRYMkZzWldWdVgzTnVaM1ZoY21ScFlXNWZjbWx6YTE5cGJuTjBZVzVqWlRFM05EWTJPREU0TnprNU1qWT0xNzQ2NjgxODgwOTY1',
                                aggregateFunction: 'COUNT',
                                axisId: 'primary',
                            },
                        ],
                        groupBy: [
                            {
                                groupBy: [
                                    {
                                        dataSource:
                                            'dGFibGV4X2FsZWVuX3NuZ3VhcmRpYW5fcmlza19pbnN0YW5jZTE3NDY2ODE4Nzk5MjY=',
                                        groupByField: 'policy',
                                    },
                                ],
                                categoryIndex: 0,
                                maxNumberOfGroups: 5,
                                numberOfGroupsBasedOn: 'NO_OF_GROUP_BASED_ON_PER_METRIC',
                                showOthers: false,
                                disableRanges: false,
                            },
                            {
                                groupBy: [
                                    {
                                        dataSource:
                                            'dGFibGV4X2FsZWVuX3NuZ3VhcmRpYW5fcmlza19pbnN0YW5jZTE3NDY2ODE4Nzk5MjY=',
                                        groupByField: 'risk',
                                    },
                                ],
                                categoryIndex: 1,
                                maxNumberOfGroups: 'ALL',
                                numberOfGroupsBasedOn: 'NO_OF_GROUP_BASED_ON_PER_METRIC',
                                showOthers: false,
                                disableRanges: false,
                            },
                        ],
                        sortBy: 'value',
                        noDebounce: '',
                    },
                    height: 15,
                    width: 48,
                    position: {
                        x: 0,
                        y: 84,
                    },
                },
                {
                    $id: Now.ID['f21027764755ea1051a3e84d416d4345'],
                    component: 'vertical-bar',
                    componentProps: {
                        showDataLabels: true,
                        dataSources: [
                            {
                                label: 'Policy',
                                sourceType: 'table',
                                tableOrViewName: 'x_aleen_snguardian_policy',
                                filterQuery: '',
                                id: 'dGFibGV4X2FsZWVuX3NuZ3VhcmRpYW5fcG9saWN5MTc0NjY4MjE1MzM2MA==',
                            },
                        ],
                        showSubAggregate: false,
                        showHeaderSeparator: true,
                        headerTitle: 'Policies by Evaluation Frequency',
                        refreshRequest: '',
                        metrics: [
                            {
                                dataSource: 'dGFibGV4X2FsZWVuX3NuZ3VhcmRpYW5fcG9saWN5MTc0NjY4MjE1MzM2MA==',
                                id: 'ZEdGaWJHVjRYMkZzWldWdVgzTnVaM1ZoY21ScFlXNWZjRzlzYVdONU1UYzBOalk0TWpFMU16TTJNQT09MTc0NjY4MjE1NDcxMw==',
                                aggregateFunction: 'COUNT(DISTINCT',
                                axisId: 'primary',
                                aggregateField: 'sys_id',
                            },
                        ],
                        groupBy: [
                            {
                                groupBy: [
                                    {
                                        dataSource: 'dGFibGV4X2FsZWVuX3NuZ3VhcmRpYW5fcG9saWN5MTc0NjY4MjE1MzM2MA==',
                                        groupByField: 'evaluation_frequency',
                                    },
                                ],
                                maxNumberOfGroups: 'ALL',
                                numberOfGroupsBasedOn: 'NO_OF_GROUP_BASED_ON_PER_METRIC',
                                showOthers: false,
                                disableRanges: false,
                            },
                        ],
                        sortBy: 'report_range',
                        sortByOrder: 'asc',
                        noDebounce: '',
                    },
                    height: 17,
                    width: 48,
                    position: {
                        x: 0,
                        y: 99,
                    },
                },
                {
                    $id: Now.ID['f6c12ba29bd1aa10e525ce052ccad9d3'],
                    component: 'donut',
                    componentProps: {
                        registerPosition: 'right',
                        showRegisterOnSameLine: true,
                        showRegisterValue: true,
                        dataSources: [
                            {
                                label: 'Risk Instance',
                                sourceType: 'table',
                                tableOrViewName: 'x_aleen_snguardian_risk_instance',
                                filterQuery: '',
                                id: 'dGFibGV4X2FsZWVuX3NuZ3VhcmRpYW5fcmlza19pbnN0YW5jZTE3NDY2MTU5ODkyOTI=',
                            },
                        ],
                        showSubAggregate: false,
                        showHeaderSeparator: true,
                        headerTitle: 'Risk By Status',
                        refreshRequest: '',
                        metrics: [
                            {
                                dataSource: 'dGFibGV4X2FsZWVuX3NuZ3VhcmRpYW5fcmlza19pbnN0YW5jZTE3NDY2MTU5ODkyOTI=',
                                id: 'ZEdGaWJHVjRYMkZzWldWdVgzTnVaM1ZoY21ScFlXNWZjbWx6YTE5cGJuTjBZVzVqWlRFM05EWTJNVFU1T0RreU9UST0xNzQ2NjE1OTkwMDM1',
                                aggregateFunction: 'COUNT',
                                axisId: 'primary',
                            },
                        ],
                        groupBy: [
                            {
                                groupBy: [
                                    {
                                        dataSource:
                                            'dGFibGV4X2FsZWVuX3NuZ3VhcmRpYW5fcmlza19pbnN0YW5jZTE3NDY2MTU5ODkyOTI=',
                                        groupByField: 'status',
                                    },
                                ],
                                maxNumberOfGroups: 'ALL',
                                numberOfGroupsBasedOn: 'NO_OF_GROUP_BASED_ON_PER_METRIC',
                                showOthers: false,
                                disableRanges: false,
                            },
                        ],
                        sortBy: 'value',
                        enableRealTimeUpdate: true,
                        showChangeFrom: false,
                        noDebounce: '',
                    },
                    height: 16,
                    width: 13,
                    position: {
                        x: 13,
                        y: 0,
                    },
                },
                {
                    $id: Now.ID['fc22633a4755ea1051a3e84d416d438a'],
                    component: 'donut',
                    componentProps: {
                        dataSources: [
                            {
                                label: 'Policy Execution',
                                sourceType: 'table',
                                tableOrViewName: 'x_aleen_snguardian_policy_execution',
                                filterQuery: '',
                                id: 'dGFibGV4X2FsZWVuX3NuZ3VhcmRpYW5fcG9saWN5X2V4ZWN1dGlvbjE3NDY2ODI3MjkyOTY=',
                            },
                        ],
                        showSubAggregate: false,
                        headerTitle: 'Policies by Status',
                        refreshRequest: '',
                        metrics: [
                            {
                                dataSource: 'dGFibGV4X2FsZWVuX3NuZ3VhcmRpYW5fcG9saWN5X2V4ZWN1dGlvbjE3NDY2ODI3MjkyOTY=',
                                id: 'ZEdGaWJHVjRYMkZzWldWdVgzTnVaM1ZoY21ScFlXNWZjRzlzYVdONVgyVjRaV04xZEdsdmJqRTNORFkyT0RJM01qa3lPVFk9MTc0NjY4MjczMDQ2Ng==',
                                aggregateFunction: 'COUNT',
                                axisId: 'primary',
                            },
                        ],
                        groupBy: [
                            {
                                groupBy: [
                                    {
                                        dataSource:
                                            'dGFibGV4X2FsZWVuX3NuZ3VhcmRpYW5fcG9saWN5X2V4ZWN1dGlvbjE3NDY2ODI3MjkyOTY=',
                                        groupByField: 'status',
                                    },
                                ],
                                maxNumberOfGroups: 10,
                                numberOfGroupsBasedOn: 'NO_OF_GROUP_BASED_ON_PER_METRIC',
                                showOthers: false,
                            },
                        ],
                        sortBy: 'value',
                        showTotalValue: false,
                        noDebounce: '',
                    },
                    height: 17,
                    width: 20,
                    position: {
                        x: 28,
                        y: 133,
                    },
                },
                {
                    $id: Now.ID['fc4c5b7e4715ea1051a3e84d416d43dd'],
                    component: 'horizontal-bar',
                    componentProps: {
                        xAxisWrapLabels: true,
                        showLegend: false,
                        dataSources: [
                            {
                                label: 'Risk Instance',
                                sourceType: 'table',
                                tableOrViewName: 'x_aleen_snguardian_risk_instance',
                                filterQuery: 'mitigationISNOTEMPTY',
                                id: 'dGFibGV4X2FsZWVuX3NuZ3VhcmRpYW5fcmlza19pbnN0YW5jZTE3NDY2ODExOTk3NDM=',
                            },
                        ],
                        showSubAggregate: false,
                        showHeaderSeparator: true,
                        headerTitle: 'Top 5 Mitigations Applied',
                        refreshRequest: '',
                        metrics: [
                            {
                                dataSource: 'dGFibGV4X2FsZWVuX3NuZ3VhcmRpYW5fcmlza19pbnN0YW5jZTE3NDY2ODExOTk3NDM=',
                                id: 'ZEdGaWJHVjRYMkZzWldWdVgzTnVaM1ZoY21ScFlXNWZjbWx6YTE5cGJuTjBZVzVqWlRFM05EWTJPREV4T1RrM05ETT0xNzQ2NjgxMjAwNDYy',
                                aggregateFunction: 'COUNT',
                                axisId: 'primary',
                            },
                        ],
                        groupBy: [
                            {
                                groupBy: [
                                    {
                                        dataSource:
                                            'dGFibGV4X2FsZWVuX3NuZ3VhcmRpYW5fcmlza19pbnN0YW5jZTE3NDY2ODExOTk3NDM=',
                                        groupByField: 'mitigation',
                                    },
                                ],
                                maxNumberOfGroups: 'ALL',
                                numberOfGroupsBasedOn: 'NO_OF_GROUP_BASED_ON_PER_METRIC',
                                showOthers: false,
                                disableRanges: false,
                            },
                        ],
                        sortBy: 'value',
                        noDebounce: '',
                    },
                    height: 18,
                    width: 23,
                    position: {
                        x: 25,
                        y: 50,
                    },
                },
            ],
        },
    ],
    visibilities: [
        {
            $id: Now.ID['fac12ba2ecd1aa10a2d36c98df4b22d2'],
            experience: '47c12ba26bd1aa10c90f9721e2c824db',
        },
    ],
    permissions: [
        {
            $id: Now.ID['33c1aba247d1aa1051a3e84d416d433b'],
            canRead: true,
            canShare: false,
            canWrite: false,
            owner: false,
            role: 'x_aleen_snguardian.badging_officer',
        },
        {
            $id: Now.ID['3bc1aba247d1aa1051a3e84d416d436c'],
            canRead: true,
            canShare: false,
            canWrite: false,
            owner: false,
            role: 'x_aleen_snguardian.host',
        },
        {
            $id: Now.ID['3fc1aba247d1aa1051a3e84d416d4344'],
            canRead: true,
            canShare: false,
            canWrite: false,
            owner: false,
            role: 'x_aleen_snguardian.visitor',
        },
        {
            $id: Now.ID['77c1aba247d1aa1051a3e84d416d4342'],
            canRead: true,
            canShare: false,
            canWrite: false,
            owner: false,
            role: 'x_aleen_snguardian.employee',
        },
        {
            $id: Now.ID['7fc1aba247d1aa1051a3e84d416d4373'],
            canRead: true,
            canShare: false,
            canWrite: false,
            owner: false,
            role: 'x_aleen_snguardian.portal',
        },
        {
            $id: Now.ID['b3c1aba247d1aa1051a3e84d416d432c'],
            canRead: true,
            canShare: false,
            canWrite: false,
            owner: false,
            role: 'x_aleen_snguardian.admin',
        },
        {
            $id: Now.ID['b7c1aba247d1aa1051a3e84d416d4326'],
            canRead: true,
            canShare: true,
            canWrite: true,
            owner: true,
            user: '5b729ae147f0621051a3e84d416d4367',
        },
        {
            $id: Now.ID['b7c1aba247d1aa1051a3e84d416d4371'],
            canRead: true,
            canShare: false,
            canWrite: false,
            owner: false,
            role: 'x_aleen_snguardian.lobby_admin',
        },
        {
            $id: Now.ID['bbc1aba247d1aa1051a3e84d416d4329'],
            canRead: true,
            canShare: false,
            canWrite: false,
            owner: false,
            role: 'x_aleen_snguardian.access_reviewer',
        },
        {
            $id: Now.ID['bfc1aba247d1aa1051a3e84d416d433f'],
            canRead: true,
            canShare: false,
            canWrite: false,
            owner: false,
            role: 'x_aleen_snguardian.review_admin',
        },
        {
            $id: Now.ID['f7c1aba247d1aa1051a3e84d416d433d'],
            canRead: true,
            canShare: false,
            canWrite: false,
            owner: false,
            role: 'x_aleen_snguardian.manager',
        },
        {
            $id: Now.ID['ffc1aba247d1aa1051a3e84d416d436e'],
            canRead: true,
            canShare: false,
            canWrite: false,
            owner: false,
            role: 'x_aleen_snguardian.kiosk',
        },
    ],
})
