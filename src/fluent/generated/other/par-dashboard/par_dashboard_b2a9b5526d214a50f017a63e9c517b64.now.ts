import { Dashboard } from '@servicenow/sdk/core'

Dashboard({
    $id: Now.ID['b2a9b5526d214a50f017a63e9c517b64'],
    name: 'Review Admin Workspace',
    tabs: [
        {
            $id: Now.ID['fea9b55295214a50588cf82381fdda63'],
            name: 'Home',
            widgets: [
                {
                    $id: Now.ID['3ea9b55259214a508f6ded0d70ccff63'],
                    component: 'area',
                    componentProps: {
                        extensionType: 'area',
                        dataSources: [
                            {
                                label: 'Review',
                                sourceType: 'table',
                                tableOrViewName: 'x_aleen_snguardian_review',
                                filterQuery: '',
                                id: 'dGFibGV0YXNrMTY1Mzg0MTk5Mjg3MA==',
                            },
                        ],
                        showSubAggregate: false,
                        showHeaderSeparator: true,
                        headerTitle: 'Access Reviews by Start date',
                        dataCategory: 'group',
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
                                        groupByField: 'type',
                                        metric: 'ZEdGaWJHVjBZWE5yTVRZMU16ZzBNVGs1TWpnM01BPT0xNjUzODQyMzc3NTI1',
                                    },
                                ],
                                maxNumberOfGroups: 'ALL',
                                numberOfGroupsBasedOn: 'NO_OF_GROUP_BASED_ON_PER_METRIC',
                                showOthers: false,
                                disableRanges: false,
                            },
                        ],
                        sortBy: 'value',
                        trendBy: {
                            trendByFrequency: 'date',
                            trendByFields: [
                                {
                                    field: 'start_date',
                                    metric: 'ZEdGaWJHVjBZWE5yTVRZMU16ZzBNVGs1TWpnM01BPT0xNjUzODQyMzc3NTI1',
                                },
                            ],
                        },
                        refreshFrequency: false,
                        noDebounce: '',
                    },
                    height: 16,
                    width: 17,
                    position: {
                        x: 31,
                        y: 15,
                    },
                },
                {
                    $id: Now.ID['562ccfaf1b7d0e90759455342a4bcb8c'],
                    component: 'horizontal-bar',
                    componentProps: {
                        dataSources: [
                            {
                                label: 'Identity Access',
                                sourceType: 'table',
                                tableOrViewName: 'x_aleen_snguardian_identity_access',
                                filterQuery: '',
                                id: 'dGFibGV4X2FsZWVuX3NuZ3VhcmRpYW5faWRlbnRpdHlfYWNjZXNzMTcxNDY2NjAxODIyMQ==',
                            },
                        ],
                        showSubAggregate: false,
                        headerTitle: 'Access Assignments',
                        refreshRequest: '',
                        metrics: [
                            {
                                dataSource: 'dGFibGV4X2FsZWVuX3NuZ3VhcmRpYW5faWRlbnRpdHlfYWNjZXNzMTcxNDY2NjAxODIyMQ==',
                                id: 'ZEdGaWJHVjRYMkZzWldWdVgzTnVaM1ZoY21ScFlXNWZhV1JsYm5ScGRIbGZZV05qWlhOek1UY3hORFkyTmpBeE9ESXlNUT09MTcxNDY2NjAyMDMwNA==',
                                aggregateFunction: 'COUNT',
                                axisId: 'primary',
                            },
                        ],
                        groupBy: [
                            {
                                groupBy: [
                                    {
                                        dataSource:
                                            'dGFibGV4X2FsZWVuX3NuZ3VhcmRpYW5faWRlbnRpdHlfYWNjZXNzMTcxNDY2NjAxODIyMQ==',
                                        groupByField: 'access_level',
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
                    width: 17,
                    position: {
                        x: 14,
                        y: 15,
                    },
                },
                {
                    $id: Now.ID['5faacb6f1b7d0e90759455342a4bcbfe'],
                    component: 'semi-donut',
                    componentProps: {
                        dataSources: [
                            {
                                label: 'Access Levels with Owner',
                                sourceType: 'table',
                                tableOrViewName: 'x_aleen_snguardian_access_level_with_owners',
                                filterQuery: '',
                                reportSourceSysId: 'e0344c301bb94290759455342a4bcbb8',
                                id: 'dGFibGV4X2FsZWVuX3NuZ3VhcmRpYW5fYWNjZXNzX2xldmVsX3dpdGhfb3duZXJzMTcxNDQ5MDQ0ODEwNA==',
                            },
                        ],
                        showSubAggregate: false,
                        showHeaderSeparator: true,
                        headerTitle: 'Access Levels without Owners',
                        refreshRequest: '',
                        metrics: [
                            {
                                dataSource:
                                    'dGFibGV4X2FsZWVuX3NuZ3VhcmRpYW5fYWNjZXNzX2xldmVsX3dpdGhfb3duZXJzMTcxNDQ5MDQ0ODEwNA==',
                                id: 'ZEdGaWJHVjRYMkZzWldWdVgzTnVaM1ZoY21ScFlXNWZZV05qWlhOelgyeGxkbVZzWDNkcGRHaGZiM2R1WlhKek1UY3hORFE1TURRME9ERXdOQT09MTcxNDQ5MDQ1MTAzNw==',
                                aggregateFunction: 'COUNT',
                                axisId: 'primary',
                            },
                        ],
                        groupBy: [
                            {
                                groupBy: [
                                    {
                                        dataSource:
                                            'dGFibGV4X2FsZWVuX3NuZ3VhcmRpYW5fYWNjZXNzX2xldmVsX3dpdGhfb3duZXJzMTcxNDQ5MDQ0ODEwNA==',
                                        groupByField: 'acl_criticality',
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
                    width: 10,
                    position: {
                        x: 22,
                        y: 0,
                    },
                },
                {
                    $id: Now.ID['72a9b552f2214a50e731b2e93d833c62'],
                    component: 'vertical-bar',
                    componentProps: {
                        xAxisWrapLabels: true,
                        dataSources: [
                            {
                                label: 'Review',
                                sourceType: 'table',
                                tableOrViewName: 'x_aleen_snguardian_review',
                                filterQuery: '',
                                id: 'dGFibGV0YXNrMTY1Mzg0MTkxNzIyOA==',
                            },
                        ],
                        showSubAggregate: false,
                        headerTitle: 'Reviews By Filter',
                        refreshRequest: '',
                        metrics: [
                            {
                                dataSource: 'dGFibGV0YXNrMTY1Mzg0MTkxNzIyOA==',
                                id: 'ZEdGaWJHVjBZWE5yTVRZMU16ZzBNVGt4TnpJeU9BPT0xNjUzODQyMzE4NDk1',
                                aggregateFunction: 'COUNT',
                                axisId: 'primary',
                            },
                        ],
                        groupBy: [
                            {
                                groupBy: [
                                    {
                                        dataSource: 'dGFibGV0YXNrMTY1Mzg0MTkxNzIyOA==',
                                        groupByField: 'criteria',
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
                    height: 16,
                    width: 14,
                    position: {
                        x: 0,
                        y: 15,
                    },
                },
                {
                    $id: Now.ID['7aa9b55249214a50f12271bb34608763'],
                    component: 'donut',
                    componentProps: {
                        dataSources: [
                            {
                                label: 'Review',
                                sourceType: 'table',
                                tableOrViewName: 'x_aleen_snguardian_review',
                                filterQuery: '',
                                id: 'dGFibGV0YXNrMTY1Mzg0MjI1MTUxMQ==',
                            },
                        ],
                        showSubAggregate: false,
                        showHeaderSeparator: true,
                        headerTitle: 'Reviews By Status',
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
                        showTotalValue: true,
                        enableRealTimeUpdate: true,
                        showChangeFrom: false,
                        noDebounce: '',
                    },
                    height: 15,
                    width: 8,
                    position: {
                        x: 32,
                        y: 0,
                    },
                },
                {
                    $id: Now.ID['b6a9b55213214a50437912b8401d6363'],
                    component: 'pie',
                    componentProps: {
                        registerPosition: 'right',
                        showRegisterValue: true,
                        showRegisterPercentage: true,
                        dataSources: [
                            {
                                label: 'Review',
                                sourceType: 'table',
                                tableOrViewName: 'x_aleen_snguardian_review',
                                filterQuery: '',
                                id: 'dGFibGV4X2FsZWVuX3NuZ3VhcmRpYW5fcmV2aWV3MTcxNDU3MTg4NjMwMg==',
                            },
                        ],
                        showSubAggregate: false,
                        showHeaderSeparator: true,
                        headerTitle: 'Access Reviews by Review Type',
                        refreshRequest: '',
                        metrics: [
                            {
                                dataSource: 'dGFibGV4X2FsZWVuX3NuZ3VhcmRpYW5fcmV2aWV3MTcxNDU3MTg4NjMwMg==',
                                id: 'ZEdGaWJHVjRYMkZzWldWdVgzTnVaM1ZoY21ScFlXNWZjbVYyYVdWM01UY3hORFUzTVRnNE5qTXdNZz09MTcxNDU3MTg4ODE5NQ==',
                                aggregateFunction: 'COUNT',
                                axisId: 'primary',
                            },
                        ],
                        groupBy: [
                            {
                                groupBy: [
                                    {
                                        dataSource: 'dGFibGV4X2FsZWVuX3NuZ3VhcmRpYW5fcmV2aWV3MTcxNDU3MTg4NjMwMg==',
                                        groupByField: 'type',
                                    },
                                ],
                                maxNumberOfGroups: 10,
                                numberOfGroupsBasedOn: 'NO_OF_GROUP_BASED_ON_PER_METRIC',
                                showOthers: false,
                                disableRanges: false,
                            },
                        ],
                        sortBy: 'value',
                        showTotalValue: true,
                        noDebounce: '',
                    },
                    height: 15,
                    width: 11,
                    position: {
                        x: 0,
                        y: 0,
                    },
                },
                {
                    $id: Now.ID['cef8a99b1b39ca90759455342a4bcb7c'],
                    component: 'gauge',
                    componentProps: {
                        innerRadius: 0.7,
                        showZero: true,
                        dataSources: [
                            {
                                label: 'Identity Access',
                                sourceType: 'table',
                                tableOrViewName: 'x_aleen_snguardian_identity_access',
                                filterQuery: 'is_deleted=false^last_reviewed_onRELATIVE',
                                id: 'dGFibGV4X2FsZWVuX3NuZ3VhcmRpYW5faWRlbnRpdHlfYWNjZXNzMTcxNDU3Mjg2NjU5MQ==',
                            },
                        ],
                        showSubAggregate: false,
                        showHeaderSeparator: true,
                        headerTitle: 'Access Never Reviewed /90d ago',
                        refreshRequest: '',
                        metrics: [
                            {
                                dataSource: 'dGFibGV4X2FsZWVuX3NuZ3VhcmRpYW5faWRlbnRpdHlfYWNjZXNzMTcxNDU3Mjg2NjU5MQ==',
                                id: 'ZEdGaWJHVjRYMkZzWldWdVgzTnVaM1ZoY21ScFlXNWZhV1JsYm5ScGRIbGZZV05qWlhOek1UY3hORFUzTWpnMk5qVTVNUT09MTcxNDU3Mjg2ODA4NQ==',
                                aggregateFunction: 'COUNT',
                                axisId: 'primary',
                            },
                        ],
                        noDebounce: '',
                    },
                    height: 15,
                    width: 11,
                    position: {
                        x: 11,
                        y: 0,
                    },
                },
                {
                    $id: Now.ID['d82a476f1b7d0e90759455342a4bcb6d'],
                    component: 'dial',
                    componentProps: {
                        innerRadius: 0.7,
                        showZero: true,
                        dataSources: [
                            {
                                label: 'Review Task',
                                sourceType: 'table',
                                tableOrViewName: 'x_aleen_snguardian_review_task',
                                filterQuery:
                                    'assigned_toDYNAMIC90d1921e5f510100a9ad2572f2b477fe^ORdelegated_toDYNAMIC90d1921e5f510100a9ad2572f2b477fe',
                                id: 'dGFibGV4X2FsZWVuX3NuZ3VhcmRpYW5fcmV2aWV3X3Rhc2sxNzE0NjY1NTMyMjg2',
                            },
                        ],
                        showSubAggregate: false,
                        showHeaderSeparator: true,
                        headerTitle: 'Assigned / Delegated to Me',
                        refreshRequest: '',
                        metrics: [
                            {
                                dataSource: 'dGFibGV4X2FsZWVuX3NuZ3VhcmRpYW5fcmV2aWV3X3Rhc2sxNzE0NjY1NTMyMjg2',
                                id: 'ZEdGaWJHVjRYMkZzWldWdVgzTnVaM1ZoY21ScFlXNWZjbVYyYVdWM1gzUmhjMnN4TnpFME5qWTFOVE15TWpnMjE3MTQ2NjU1MzM2NDM=',
                                aggregateFunction: 'COUNT',
                                axisId: 'primary',
                            },
                        ],
                        noDebounce: '',
                        maxValue: 10,
                    },
                    height: 15,
                    width: 8,
                    position: {
                        x: 40,
                        y: 0,
                    },
                },
            ],
        },
    ],
    visibilities: [
        {
            $id: Now.ID['f2a9b552cc214a5077ea5870c07b1363'],
            experience: 'bea9b55207214a5091640bb7fe4ab86a',
        },
    ],
})
