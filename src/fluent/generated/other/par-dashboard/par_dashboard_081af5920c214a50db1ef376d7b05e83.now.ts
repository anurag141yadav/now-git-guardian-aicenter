import { Dashboard } from '@servicenow/sdk/core'

Dashboard({
    $id: Now.ID['081af5920c214a50db1ef376d7b05e83'],
    name: 'Access Reviewer Workspace',
    tabs: [
        {
            $id: Now.ID['441af592b8214a503a4f4c005c520583'],
            name: 'Tab',
            widgets: [
                {
                    $id: Now.ID['70cfb15a1b214a50759455342a4bcb99'],
                    component: 'list',
                    componentProps: {
                        dataSources: [
                            {
                                filterQuery: 'assigned_toDYNAMIC90d1921e5f510100a9ad2572f2b477fe^active=true',
                                id: '542dd7413b574314546a249693e45aa8',
                                sourceType: 'table',
                                tableOrViewName: 'x_aleen_snguardian_review_task',
                            },
                        ],
                        description: '',
                        metrics: [
                            {
                                aggregateFunction: 'COUNT',
                                axisId: 'primary',
                                dataSource: 'dGFibGVpbmNpZGVudDE3MzYzNjA0MzU5NjM=',
                                id: 'ZEdGaWJHVnBibU5wWkdWdWRERTNNell6TmpBME16VTVOak09MTczNjM2MDQzNjgwMQ==',
                            },
                        ],
                        parFilter: '',
                        allowListPagination: true,
                        columnLimit: 0,
                        limit: 10,
                        maxCharLimit: 4000,
                        columnPreferenceKey: '',
                        wrapCellContent: 'useLineBreaksUserPref',
                        showPersonalization: true,
                        hideDotwalk: false,
                        showColumnReorder: true,
                        showColumnGrouping: true,
                        showColumnResizing: true,
                        showColumnFiltering: true,
                        showColumnSorting: true,
                        groupByField: '',
                        showLinks: true,
                        showViewAll: true,
                        showInlineEditing: true,
                        table: 'x_aleen_snguardian_review_task',
                        headerTitle: 'My Open Tasks',
                        columns: 'review,review_type,total_records,pending,completed',
                        showRecordCount: true,
                    },
                    height: 13,
                    width: 28,
                    position: {
                        x: 20,
                        y: 0,
                    },
                },
                {
                    $id: Now.ID['801af592d0214a502f54552a9285db83'],
                    component: 'semi-donut',
                    componentProps: {
                        dataSources: [
                            {
                                label: 'Review Task',
                                sourceType: 'table',
                                tableOrViewName: 'x_aleen_snguardian_review_task',
                                filterQuery:
                                    'assigned_toDYNAMIC90d1921e5f510100a9ad2572f2b477fe^ORdelegated_toDYNAMIC90d1921e5f510100a9ad2572f2b477fe',
                                id: 'dGFibGV0YXNrMTY1Mzg0MTk5Mjg3MA==',
                            },
                        ],
                        showSubAggregate: false,
                        headerTitle: 'Review Task By Status',
                        refreshRequest: '',
                        metrics: [
                            {
                                dataSource: 'dGFibGV0YXNrMTY1Mzg0MTk5Mjg3MA==',
                                id: 'ZEdGaWJHVjBZWE5yTVRZMU16ZzBNVGs1TWpnM01BPT0xNjUzODQyMzc3NTI1',
                                aggregateFunction: 'COUNT',
                                axisId: 'primary',
                            },
                        ],
                        groupBy: [
                            {
                                groupBy: [
                                    {
                                        dataSource: 'dGFibGV0YXNrMTY1Mzg0MTk5Mjg3MA==',
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
                        enableRealTimeUpdate: true,
                        showChangeFrom: false,
                        noDebounce: '',
                    },
                    height: 13,
                    width: 10,
                    position: {
                        x: 10,
                        y: 0,
                    },
                },
                {
                    $id: Now.ID['c41af5924c214a502261cf5a41ded681'],
                    component: 'dial',
                    componentProps: {
                        maxValue: 10,
                        innerRadius: 0.9,
                        valueLabelSize: 'lg',
                        showZero: true,
                        dataSources: [
                            {
                                label: 'Review Task',
                                sourceType: 'table',
                                tableOrViewName: 'x_aleen_snguardian_review_task',
                                filterQuery: 'assigned_toDYNAMIC90d1921e5f510100a9ad2572f2b477fe',
                                id: 'dGFibGV0YXNrMTY1Mzg0MTkxNzIyOA==',
                            },
                        ],
                        showSubAggregate: false,
                        showHeaderSeparator: true,
                        headerTitle: 'Assigned / Delegated to Me',
                        refreshRequest: '',
                        metrics: [
                            {
                                dataSource: 'dGFibGV0YXNrMTY1Mzg0MTkxNzIyOA==',
                                id: 'ZEdGaWJHVjBZWE5yTVRZMU16ZzBNVGt4TnpJeU9BPT0xNjUzODQyMzE4NDk1',
                                aggregateFunction: 'COUNT',
                                axisId: 'primary',
                            },
                        ],
                        sortBy: 'value',
                        showMetricLabel: true,
                        enableRealTimeUpdate: true,
                        showChangeFrom: false,
                        noDebounce: '',
                    },
                    height: 13,
                    width: 10,
                    position: {
                        x: 0,
                        y: 0,
                    },
                },
                {
                    $id: Now.ID['cc1af5926b214a50005635b7d9537182'],
                    component: 'pivot-table',
                    componentProps: {
                        dataSources: [
                            {
                                label: 'Review Task',
                                sourceType: 'table',
                                tableOrViewName: 'x_aleen_snguardian_review_task',
                                filterQuery:
                                    'review.due_date>javascript:gs.endOfToday()^status=81c2fda01b9946106962fe60cd4bcbae',
                                id: 'dGFibGV0YXNrMTY1Mzg0MjI1MTUxMQ==',
                            },
                        ],
                        showTotalAggregate: true,
                        showFirstGroupAggregate: true,
                        showSecondGroupAggregate: true,
                        showHeaderSeparator: true,
                        headerTitle: 'Record Due Dates',
                        dataCategory: 'group',
                        refreshRequest: '',
                        metrics: [
                            {
                                dataSource: 'dGFibGV0YXNrMTY1Mzg0MjI1MTUxMQ==',
                                id: 'ZEdGaWJHVjBZWE5yTVRZMU16ZzBNakkxTVRVeE1RPT0xNjUzODQyMjUyNzkw',
                                aggregateFunction: 'COUNT',
                                axisId: 'primary',
                            },
                        ],
                        groupBy: [
                            {
                                groupBy: [
                                    {
                                        dataSource: 'dGFibGV0YXNrMTY1Mzg0MjI1MTUxMQ==',
                                        groupByField: 'review.due_date',
                                    },
                                ],
                                categoryIndex: 0,
                                maxNumberOfGroups: 'ALL',
                                numberOfGroupsBasedOn: 'NO_OF_GROUP_BASED_ON_PER_METRIC',
                                showOthers: false,
                                disableRanges: true,
                            },
                            {
                                groupBy: [
                                    {
                                        dataSource: 'dGFibGV0YXNrMTY1Mzg0MjI1MTUxMQ==',
                                        groupByField: 'total_records',
                                    },
                                ],
                                categoryIndex: 1,
                                maxNumberOfGroups: 'ALL',
                                numberOfGroupsBasedOn: 'NO_OF_GROUP_BASED_ON_PER_METRIC',
                                showOthers: false,
                                disableRanges: true,
                            },
                            {
                                groupBy: [
                                    {
                                        dataSource: 'dGFibGV0YXNrMTY1Mzg0MjI1MTUxMQ==',
                                        groupByField: 'completed',
                                    },
                                ],
                                categoryIndex: 1,
                                disableRanges: true,
                            },
                            {
                                groupBy: [
                                    {
                                        dataSource: 'dGFibGV0YXNrMTY1Mzg0MjI1MTUxMQ==',
                                        groupByField: 'pending',
                                    },
                                ],
                                categoryIndex: 1,
                                disableRanges: true,
                            },
                            {
                                groupBy: [
                                    {
                                        dataSource: 'dGFibGV0YXNrMTY1Mzg0MjI1MTUxMQ==',
                                        groupByField: 'errors',
                                    },
                                ],
                                categoryIndex: 1,
                                disableRanges: true,
                            },
                        ],
                        sortBy: 'value',
                        enableRealTimeUpdate: true,
                        showChangeFrom: false,
                        noDebounce: '',
                    },
                    height: 15,
                    width: 48,
                    position: {
                        x: 0,
                        y: 29,
                    },
                },
                {
                    $id: Now.ID['d44c7c1f2bd15250d4dffd74ce91bf62'],
                    component: 'list',
                    componentProps: {
                        dataSources: [
                            {
                                filterQuery:
                                    'state=requested^active=true^state=requested^approverDYNAMIC90d1921e5f510100a9ad2572f2b477fe',
                                id: 'd82dd7413b574314546a249693e45ab7',
                                sourceType: 'table',
                                tableOrViewName: 'sysapproval_approver',
                            },
                        ],
                        description: '',
                        metrics: [
                            {
                                aggregateFunction: 'COUNT',
                                axisId: 'primary',
                                dataSource: 'dGFibGVpbmNpZGVudDE3MzYzNjA0MzU5NjM=',
                                id: 'ZEdGaWJHVnBibU5wWkdWdWRERTNNell6TmpBME16VTVOak09MTczNjM2MDQzNjgwMQ==',
                            },
                        ],
                        parFilter: '',
                        allowListPagination: true,
                        columnLimit: 10,
                        limit: 10,
                        maxCharLimit: 4000,
                        columnPreferenceKey: '',
                        wrapCellContent: 'useLineBreaksUserPref',
                        showPersonalization: true,
                        hideDotwalk: false,
                        showColumnReorder: true,
                        showColumnGrouping: true,
                        showColumnResizing: true,
                        showColumnFiltering: true,
                        showColumnSorting: true,
                        groupByField: '',
                        showLinks: true,
                        showViewAll: true,
                        showInlineEditing: true,
                        table: 'sysapproval_approver',
                        headerTitle: 'All Pending Approvals',
                        columns:
                            'sysapproval,state,approver,sysapproval.ref_x_aleen_snguardian_request.request_type,sysapproval.ref_x_aleen_snguardian_request.request_for,sys_created_on',
                        showRecordCount: true,
                    },
                    height: 16,
                    width: 48,
                    position: {
                        x: 0,
                        y: 13,
                    },
                },
            ],
        },
    ],
    visibilities: [
        {
            $id: Now.ID['481af59291214a507ce845eae318a682'],
            experience: '041af59221214a500902aa73d3f35c8a',
        },
    ],
})
