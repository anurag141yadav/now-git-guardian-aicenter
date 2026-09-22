import { Dashboard } from '@servicenow/sdk/core'

Dashboard({
    $id: Now.ID['4e0e38e0972dda10e8f628d1a1f9f108'],
    name: 'Lobby Admin Workspace',
    tabs: [
        {
            $id: Now.ID['8a0e38e09f2dda10967b5aca75b29e08'],
            name: 'Tab',
            widgets: [
                {
                    $id: Now.ID['060e38e09e2dda10b31eaa9b2127a108'],
                    component: 'vertical-bar',
                    componentProps: {
                        showLegend: false,
                        dataSources: [
                            {
                                label: 'Visitor',
                                sourceType: 'table',
                                tableOrViewName: 'x_aleen_snguardian_visitor',
                                filterQuery: '',
                                id: 'dGFibGV4X2FsZWVuX3NuZ3VhcmRpYW5fdmlzaXRvcjE3Mjk5MzAzMTAyNTA=',
                            },
                        ],
                        showSubAggregate: false,
                        headerTitle: 'Visitors By Status',
                        refreshRequest: '',
                        metrics: [
                            {
                                dataSource: 'dGFibGV4X2FsZWVuX3NuZ3VhcmRpYW5fdmlzaXRvcjE3Mjk5MzAzMTAyNTA=',
                                id: 'ZEdGaWJHVjRYMkZzWldWdVgzTnVaM1ZoY21ScFlXNWZkbWx6YVhSdmNqRTNNams1TXpBek1UQXlOVEE9MTcyOTkzMDMxMjI5OA==',
                                aggregateFunction: 'COUNT',
                                axisId: 'primary',
                            },
                        ],
                        groupBy: [
                            {
                                groupBy: [
                                    {
                                        dataSource: 'dGFibGV4X2FsZWVuX3NuZ3VhcmRpYW5fdmlzaXRvcjE3Mjk5MzAzMTAyNTA=',
                                        groupByField: 'visitor_status',
                                    },
                                ],
                                maxNumberOfGroups: 10,
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
                    height: 22,
                    width: 23,
                    position: {
                        x: 25,
                        y: 0,
                    },
                },
                {
                    $id: Now.ID['0e0e38e08c2dda10f39fd5b77a8c6606'],
                    component: 'donut',
                    componentProps: {
                        registerPosition: 'right',
                        dataSources: [
                            {
                                label: 'Visitor 1',
                                sourceType: 'table',
                                tableOrViewName: 'x_aleen_snguardian_visitor',
                                filterQuery: '',
                                id: 'dGFibGV4X2FsZWVuX3NuZ3VhcmRpYW5fdmlzaXRvcjE3Mjk5Mjk5OTAyNDc=',
                            },
                        ],
                        showSubAggregate: false,
                        headerTitle: 'Visitors By Type',
                        refreshRequest: '',
                        metrics: [
                            {
                                dataSource: 'dGFibGV4X2FsZWVuX3NuZ3VhcmRpYW5fdmlzaXRvcjE3Mjk5Mjk5OTAyNDc=',
                                id: 'ZEdGaWJHVjRYMkZzWldWdVgzTnVaM1ZoY21ScFlXNWZkbWx6YVhSdmNqRTNNams1TWprNU9UQXlORGM9MTcyOTkyOTk5MjE0Mw==',
                                aggregateFunction: 'COUNT',
                                axisId: 'primary',
                            },
                        ],
                        groupBy: [
                            {
                                groupBy: [
                                    {
                                        dataSource: 'dGFibGV4X2FsZWVuX3NuZ3VhcmRpYW5fdmlzaXRvcjE3Mjk5Mjk5OTAyNDc=',
                                        groupByField: 'visitor_type',
                                    },
                                ],
                                maxNumberOfGroups: 10,
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
                    height: 22,
                    width: 25,
                    position: {
                        x: 0,
                        y: 0,
                    },
                },
                {
                    $id: Now.ID['ca0e38e0a62dda10855b2a5f6b726f07'],
                    component: '2b1c080881e05dc63b917044290b233f',
                    componentProps: {
                        table: 'x_aleen_snguardian_visitor_visit',
                        fixedQuery: '',
                        listTitle: 'Visit',
                        columns: '',
                        query: '',
                        groupByField: '',
                        hideViewAll: false,
                        hideHighlightedValues: false,
                        highlightedValueConfigId: '',
                        hideHighlightContent: false,
                        highlightContent: {
                            color: '',
                        },
                        hideLinks: false,
                        wordWrap: false,
                        overrideWordWrapUserPref: false,
                        maxCharLimit: 4000,
                        hideEmptyStateImage: false,
                        hidePersonalization: true,
                        hideDotwalk: true,
                        hideColumnReorder: true,
                        hideRowSelector: false,
                        hideColumnGrouping: true,
                        hideColumnResizing: true,
                        hideColumnFiltering: true,
                        hideColumnSorting: false,
                        hideHeader: false,
                        hideTitle: false,
                        hideTitleRowCount: false,
                        hideLastRefreshedText: false,
                        hideRefreshButton: false,
                        hideInlineEditing: true,
                        refreshRequested: '',
                        noDebounce: '',
                    },
                    height: 18,
                    width: 48,
                    position: {
                        x: 0,
                        y: 22,
                    },
                },
            ],
        },
    ],
    visibilities: [
        {
            $id: Now.ID['420e38e0642dda103318a5d2dc459008'],
            experience: '020e38e0f42dda10aed05e6f8f796710',
        },
    ],
})
