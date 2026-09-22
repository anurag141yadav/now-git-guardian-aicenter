import { Dashboard } from '@servicenow/sdk/core'

Dashboard({
    $id: Now.ID['5124921c4c688e10928319d4a4670be8'],
    name: 'Guardian Manager Home',
    tabs: [
        {
            $id: Now.ID['1524921c4a688e101111f2452e3e33e8'],
            name: 'Home',
            widgets: [
                {
                    $id: Now.ID['1d589ddb1bf5ca90759455342a4bcb24'],
                    component: 'pie',
                    componentProps: {
                        registerPosition: 'right',
                        showRegisterValue: true,
                        showRegisterPercentage: true,
                        additionalGroupByConfig: [
                            {
                                id: 'type',
                                label: 'Type',
                            },
                            {
                                id: 'system',
                                label: 'System',
                            },
                            {
                                id: 'status',
                                label: 'Status',
                            },
                        ],
                        dataSources: [
                            {
                                label: 'Asset',
                                sourceType: 'table',
                                tableOrViewName: 'x_aleen_snguardian_asset',
                                filterQuery:
                                    'type!=a88f8ed51bbc8210759455342a4bcbcd^type!=2c8f8ed51bbc8210759455342a4bcbcc^type!=e08f8ed51bbc8210759455342a4bcbcd',
                                id: 'dGFibGV4X2FsZWVuX3NuZ3VhcmRpYW5fYXNzZXQxNzE0NDgzMDA2OTM1',
                            },
                        ],
                        showSubAggregate: false,
                        showHeaderSeparator: true,
                        headerTitle: 'Assets',
                        refreshRequest: '',
                        metrics: [
                            {
                                dataSource: 'dGFibGV4X2FsZWVuX3NuZ3VhcmRpYW5fYXNzZXQxNzE0NDgzMDA2OTM1',
                                id: 'ZEdGaWJHVjRYMkZzWldWdVgzTnVaM1ZoY21ScFlXNWZZWE56WlhReE56RTBORGd6TURBMk9UTTExNzE0NDgzMDA4MzM1',
                                aggregateFunction: 'COUNT',
                                axisId: 'primary',
                            },
                        ],
                        groupBy: [
                            {
                                groupBy: [
                                    {
                                        dataSource: 'dGFibGV4X2FsZWVuX3NuZ3VhcmRpYW5fYXNzZXQxNzE0NDgzMDA2OTM1',
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
                        noDebounce: '',
                    },
                    height: 15,
                    width: 17,
                    position: {
                        x: 0,
                        y: 0,
                    },
                },
                {
                    $id: Now.ID['2f170e411b8ac2106962fe60cd4bcb98'],
                    component: 'pie',
                    componentProps: {
                        registerPosition: 'right',
                        showRegisterValue: true,
                        showRegisterPercentage: true,
                        dataSources: [
                            {
                                label: 'Identity',
                                sourceType: 'table',
                                tableOrViewName: 'x_aleen_snguardian_identity',
                                filterQuery: 'master_user_idISEMPTY',
                                id: 'dGFibGV4X2FsZWVuX3NuZ3VhcmRpYW5faWRlbnRpdHkxNzE1MDUwNTAyODUy',
                            },
                        ],
                        showSubAggregate: false,
                        showHeaderSeparator: true,
                        headerTitle: 'Orphan Accounts by Type',
                        refreshRequest: '',
                        metrics: [
                            {
                                dataSource: 'dGFibGV4X2FsZWVuX3NuZ3VhcmRpYW5faWRlbnRpdHkxNzE1MDUwNTAyODUy',
                                id: 'ZEdGaWJHVjRYMkZzWldWdVgzTnVaM1ZoY21ScFlXNWZhV1JsYm5ScGRIa3hOekUxTURVd05UQXlPRFV5MTcxNTA1MDUwNDczNQ==',
                                aggregateFunction: 'COUNT',
                                axisId: 'primary',
                            },
                        ],
                        groupBy: [
                            {
                                groupBy: [
                                    {
                                        dataSource: 'dGFibGV4X2FsZWVuX3NuZ3VhcmRpYW5faWRlbnRpdHkxNzE1MDUwNTAyODUy',
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
                        showChangeFrom: false,
                        noDebounce: '',
                    },
                    height: 16,
                    width: 12,
                    position: {
                        x: 12,
                        y: 31,
                    },
                },
                {
                    $id: Now.ID['443abbc51b8206106962fe60cd4bcb9b'],
                    component: 'gauge',
                    componentProps: {
                        innerRadius: 0.7,
                        showZero: true,
                        dataSources: [
                            {
                                label: 'Access Assignment View',
                                sourceType: 'table',
                                tableOrViewName: 'x_aleen_snguardian_access_assignment_view',
                                filterQuery: 'ia_identityISEMPTY',
                                id: 'dGFibGV4X2FsZWVuX3NuZ3VhcmRpYW5fYWNjZXNzX2Fzc2lnbm1lbnRfdmlldzE3MTUwODA3NTg3MjU=',
                            },
                        ],
                        showSubAggregate: false,
                        showHeaderSeparator: true,
                        headerTitle: 'Access Level Never assigned to Anyone',
                        refreshRequest: '',
                        metrics: [
                            {
                                dataSource:
                                    'dGFibGV4X2FsZWVuX3NuZ3VhcmRpYW5fYWNjZXNzX2Fzc2lnbm1lbnRfdmlldzE3MTUwODA3NTg3MjU=',
                                id: 'ZEdGaWJHVjRYMkZzWldWdVgzTnVaM1ZoY21ScFlXNWZZV05qWlhOelgyRnpjMmxuYm0xbGJuUmZkbWxsZHpFM01UVXdPREEzTlRnM01qVT0xNzE1MDgwNzYwNjE2',
                                aggregateFunction: 'COUNT',
                                axisId: 'primary',
                            },
                        ],
                        noDebounce: '',
                    },
                    height: 16,
                    width: 12,
                    position: {
                        x: 36,
                        y: 31,
                    },
                },
                {
                    $id: Now.ID['5924921c1f688e10c11eaa182c118ee6'],
                    component: 'single-score',
                    componentProps: {
                        scoreSize: 'md',
                        showZero: true,
                        colorConfig: {
                            type: 'singleColor',
                            values: [
                                {
                                    color: '65b30268a9fe3dba00fb6dcb0fd06381',
                                    iconColor: '65b30268a9fe3dba00fb6dcb0fd06381',
                                    metric: 'ZEdGaWJHVjRYMkZzWldWdVgzTnVaM1ZoY21ScFlXNWZZblZwYkdScGJtY3hOekE0TkRFeE5EVTVNRFV6MTcwODQxMTQ2MDg0Mw==',
                                },
                            ],
                        },
                        dataSources: [
                            {
                                label: 'Building',
                                sourceType: 'table',
                                tableOrViewName: 'x_aleen_snguardian_building',
                                filterQuery: '',
                                id: 'dGFibGV4X2FsZWVuX3NuZ3VhcmRpYW5fYnVpbGRpbmcxNzA4NDExNDU5MDUz',
                            },
                        ],
                        showSubAggregate: false,
                        showHeaderSeparator: true,
                        headerTitle: 'Buildings',
                        metrics: [
                            {
                                dataSource: 'dGFibGV4X2FsZWVuX3NuZ3VhcmRpYW5fYnVpbGRpbmcxNzA4NDExNDU5MDUz',
                                id: 'ZEdGaWJHVjRYMkZzWldWdVgzTnVaM1ZoY21ScFlXNWZZblZwYkdScGJtY3hOekE0TkRFeE5EVTVNRFV6MTcwODQxMTQ2MDg0Mw==',
                                aggregateFunction: 'COUNT',
                                axisId: 'primary',
                            },
                        ],
                        sortBy: 'value',
                        showChangeFrom: false,
                        noDebounce: '',
                        scoreIcon: 'building-outline',
                    },
                    height: 8,
                    width: 8,
                    position: {
                        x: 32,
                        y: 23,
                    },
                },
                {
                    $id: Now.ID['6d79995f1bf5ca90759455342a4bcb93'],
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
                    height: 16,
                    width: 17,
                    position: {
                        x: 0,
                        y: 15,
                    },
                },
                {
                    $id: Now.ID['88ca9d9f1bf5ca90759455342a4bcbd7'],
                    component: 'heatmap',
                    componentProps: {
                        showZero: true,
                        showDataLabels: true,
                        dataSources: [
                            {
                                label: 'Access Level',
                                sourceType: 'table',
                                tableOrViewName: 'x_aleen_snguardian_access_level',
                                filterQuery: '',
                                id: 'dGFibGV4X2FsZWVuX3NuZ3VhcmRpYW5fYWNjZXNzX2xldmVsMTcxNDQ5MDgzNDMzMw==',
                            },
                        ],
                        showSubAggregate: false,
                        showHeaderSeparator: true,
                        headerTitle: 'Access Levels Heatmap',
                        refreshRequest: '',
                        metrics: [
                            {
                                dataSource: 'dGFibGV4X2FsZWVuX3NuZ3VhcmRpYW5fYWNjZXNzX2xldmVsMTcxNDQ5MDgzNDMzMw==',
                                id: 'ZEdGaWJHVjRYMkZzWldWdVgzTnVaM1ZoY21ScFlXNWZZV05qWlhOelgyeGxkbVZzTVRjeE5EUTVNRGd6TkRNek13PT0xNzE0NDkwODM2NDI2',
                                aggregateFunction: 'COUNT',
                                axisId: 'primary',
                            },
                        ],
                        groupBy: [
                            {
                                groupBy: [
                                    {
                                        dataSource:
                                            'dGFibGV4X2FsZWVuX3NuZ3VhcmRpYW5fYWNjZXNzX2xldmVsMTcxNDQ5MDgzNDMzMw==',
                                        groupByField: 'criticality',
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
                                            'dGFibGV4X2FsZWVuX3NuZ3VhcmRpYW5fYWNjZXNzX2xldmVsMTcxNDQ5MDgzNDMzMw==',
                                        groupByField: 'system',
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
                        noDebounce: '',
                    },
                    height: 15,
                    width: 15,
                    position: {
                        x: 33,
                        y: 0,
                    },
                },
                {
                    $id: Now.ID['9558191f1bf5ca90759455342a4bcb9a'],
                    component: 'semi-donut',
                    componentProps: {
                        registerPosition: 'right',
                        showRegisterValue: true,
                        showRegisterPercentage: true,
                        additionalGroupByConfig: [
                            {
                                id: 'type',
                                label: 'Type',
                            },
                            {
                                id: 'department',
                                label: 'Department',
                            },
                            {
                                id: 'source_system_code',
                                label: 'Source System Code',
                            },
                        ],
                        dataSources: [
                            {
                                label: 'Identity',
                                sourceType: 'table',
                                tableOrViewName: 'x_aleen_snguardian_identity',
                                filterQuery: '',
                                id: 'dGFibGV4X2FsZWVuX3NuZ3VhcmRpYW5faWRlbnRpdHkxNzE0NDgzMzI1OTk3',
                            },
                        ],
                        showSubAggregate: false,
                        showHeaderSeparator: true,
                        headerTitle: 'Cardholders',
                        refreshRequest: '',
                        metrics: [
                            {
                                dataSource: 'dGFibGV4X2FsZWVuX3NuZ3VhcmRpYW5faWRlbnRpdHkxNzE0NDgzMzI1OTk3',
                                id: 'ZEdGaWJHVjRYMkZzWldWdVgzTnVaM1ZoY21ScFlXNWZhV1JsYm5ScGRIa3hOekUwTkRnek16STFPVGszMTcxNDQ4MzMyODA2MA==',
                                aggregateFunction: 'COUNT',
                                axisId: 'primary',
                            },
                        ],
                        groupBy: [
                            {
                                groupBy: [
                                    {
                                        dataSource: 'dGFibGV4X2FsZWVuX3NuZ3VhcmRpYW5faWRlbnRpdHkxNzE0NDgzMzI1OTk3',
                                        groupByField: 'type',
                                    },
                                ],
                                maxNumberOfGroups: 12,
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
                    width: 16,
                    position: {
                        x: 17,
                        y: 0,
                    },
                },
                {
                    $id: Now.ID['9a7c1e891bcac2106962fe60cd4bcbde'],
                    component: 'semi-donut',
                    componentProps: {
                        dataSources: [
                            {
                                label: 'Access levels with Location View',
                                sourceType: 'table',
                                tableOrViewName: 'x_aleen_snguardian_accesslevelwithlocationview',
                                filterQuery: 'al_locationISEMPTY',
                                id: 'dGFibGV4X2FsZWVuX3NuZ3VhcmRpYW5fYWNjZXNzbGV2ZWx3aXRobG9jYXRpb252aWV3MTcxNTA1NjAzMjQ0Mg==',
                            },
                        ],
                        showSubAggregate: false,
                        headerTitle: 'Access Levels Without Location',
                        refreshRequest: '',
                        metrics: [
                            {
                                dataSource:
                                    'dGFibGV4X2FsZWVuX3NuZ3VhcmRpYW5fYWNjZXNzbGV2ZWx3aXRobG9jYXRpb252aWV3MTcxNTA1NjAzMjQ0Mg==',
                                id: 'ZEdGaWJHVjRYMkZzWldWdVgzTnVaM1ZoY21ScFlXNWZZV05qWlhOemJHVjJaV3gzYVhSb2JHOWpZWFJwYjI1MmFXVjNNVGN4TlRBMU5qQXpNalEwTWc9PTE3MTUwNTYwMzM5NzU=',
                                aggregateFunction: 'COUNT',
                                axisId: 'primary',
                            },
                        ],
                        groupBy: [
                            {
                                groupBy: [
                                    {
                                        dataSource:
                                            'dGFibGV4X2FsZWVuX3NuZ3VhcmRpYW5fYWNjZXNzbGV2ZWx3aXRobG9jYXRpb252aWV3MTcxNTA1NjAzMjQ0Mg==',
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
                    height: 16,
                    width: 12,
                    position: {
                        x: 24,
                        y: 31,
                    },
                },
                {
                    $id: Now.ID['adbc9d131b39ca90759455342a4bcba2'],
                    component: 'single-score',
                    componentProps: {
                        scoreSize: 'md',
                        scoreIcon: 'image-outline',
                        showZero: true,
                        colorConfig: {
                            type: 'singleColor',
                            values: [
                                {
                                    color: '96604711d7003100fa6c0c12ce610330',
                                    iconColor: '96604711d7003100fa6c0c12ce610330',
                                    metric: 'ZEdGaWJHVjRYMkZzWldWdVgzTnVaM1ZoY21ScFlXNWZZbUZrWjJWZmRHVnRjR3hoZEdVeE56RTBOVFk1TmpjM016WXkxNzE0NTY5Njc4Njc0',
                                },
                            ],
                        },
                        dataSources: [
                            {
                                label: 'Badge Template',
                                sourceType: 'table',
                                tableOrViewName: 'x_aleen_snguardian_badge_template',
                                filterQuery: '',
                                id: 'dGFibGV4X2FsZWVuX3NuZ3VhcmRpYW5fYmFkZ2VfdGVtcGxhdGUxNzE0NTY5Njc3MzYy',
                            },
                        ],
                        showSubAggregate: false,
                        showHeaderSeparator: true,
                        headerTitle: 'Badge Templates',
                        refreshRequest: '',
                        metrics: [
                            {
                                dataSource: 'dGFibGV4X2FsZWVuX3NuZ3VhcmRpYW5fYmFkZ2VfdGVtcGxhdGUxNzE0NTY5Njc3MzYy',
                                id: 'ZEdGaWJHVjRYMkZzWldWdVgzTnVaM1ZoY21ScFlXNWZZbUZrWjJWZmRHVnRjR3hoZEdVeE56RTBOVFk1TmpjM016WXkxNzE0NTY5Njc4Njc0',
                                aggregateFunction: 'COUNT',
                                axisId: 'primary',
                            },
                        ],
                        showChangeFrom: false,
                        noDebounce: '',
                    },
                    height: 8,
                    width: 8,
                    position: {
                        x: 40,
                        y: 23,
                    },
                },
                {
                    $id: Now.ID['d124921c94688e109dddc87afb347ce6'],
                    component: 'single-score',
                    componentProps: {
                        scoreSize: 'md',
                        enableRealTimeUpdate: true,
                        showZero: true,
                        colorConfig: {
                            type: 'singleColor',
                            values: [
                                {
                                    color: '65b3024aa9fe3dba0041a150cc135aed',
                                    iconColor: '65b3024aa9fe3dba0041a150cc135aed',
                                    metric: 'ZEdGaWJHVjBZWE5yTVRZMU16ZzBNVGt4TnpJeU9BPT0xNjUzODQyMzE4NDk1',
                                },
                            ],
                        },
                        dataSources: [
                            {
                                label: 'System',
                                sourceType: 'table',
                                tableOrViewName: 'x_aleen_snguardian_system',
                                filterQuery: '',
                                id: 'dGFibGV0YXNrMTY1Mzg0MTkxNzIyOA==',
                            },
                        ],
                        showSubAggregate: false,
                        showHeaderSeparator: true,
                        headerTitle: 'Systems',
                        metrics: [
                            {
                                dataSource: 'dGFibGV0YXNrMTY1Mzg0MTkxNzIyOA==',
                                id: 'ZEdGaWJHVjBZWE5yTVRZMU16ZzBNVGt4TnpJeU9BPT0xNjUzODQyMzE4NDk1',
                                aggregateFunction: 'COUNT',
                                axisId: 'primary',
                            },
                        ],
                        sortBy: 'value',
                        showChangeFrom: false,
                        scoreIcon: 'link-outline',
                        noDebounce: '',
                    },
                    height: 8,
                    width: 8,
                    position: {
                        x: 32,
                        y: 15,
                    },
                },
                {
                    $id: Now.ID['dd24921c26688e10b4e207464b5c06e6'],
                    component: 'single-score',
                    componentProps: {
                        scoreSize: 'md',
                        showZero: true,
                        colorConfig: {
                            type: 'singleColor',
                            values: [
                                {
                                    color: '28de19d8b7733010b288bc16de11a9ac',
                                    iconColor: '28de19d8b7733010b288bc16de11a9ac',
                                    metric: 'ZEdGaWJHVjRYMkZzWldWdVgzTnVaM1ZoY21ScFlXNWZiRzlqWVhScGIyNHhOekE0TkRFeE16WTBNelEzMTcwODQxMTM2NjA1MQ==',
                                },
                            ],
                        },
                        dataSources: [
                            {
                                label: 'Location',
                                sourceType: 'table',
                                tableOrViewName: 'x_aleen_snguardian_location',
                                id: 'dGFibGV4X2FsZWVuX3NuZ3VhcmRpYW5fbG9jYXRpb24xNzA4NDExMzY0MzQ3',
                            },
                        ],
                        showSubAggregate: false,
                        showHeaderSeparator: true,
                        headerTitle: 'Locations',
                        metrics: [
                            {
                                dataSource: 'dGFibGV4X2FsZWVuX3NuZ3VhcmRpYW5fbG9jYXRpb24xNzA4NDExMzY0MzQ3',
                                id: 'ZEdGaWJHVjRYMkZzWldWdVgzTnVaM1ZoY21ScFlXNWZiRzlqWVhScGIyNHhOekE0TkRFeE16WTBNelEzMTcwODQxMTM2NjA1MQ==',
                                aggregateFunction: 'COUNT',
                                axisId: 'primary',
                            },
                        ],
                        sortBy: 'value',
                        showChangeFrom: false,
                        noDebounce: '',
                        description: 'Security Locations',
                        scoreIcon: 'compass-outline',
                    },
                    height: 8,
                    width: 8,
                    position: {
                        x: 40,
                        y: 15,
                    },
                },
                {
                    $id: Now.ID['eb170e411b8ac2106962fe60cd4bcb94'],
                    component: 'donut',
                    componentProps: {
                        registerPosition: 'right',
                        showRegisterValue: true,
                        showRegisterPercentage: true,
                        dataSources: [
                            {
                                label: 'Identity',
                                sourceType: 'table',
                                tableOrViewName: 'x_aleen_snguardian_identity',
                                filterQuery: 'master_user_idISEMPTY',
                                id: 'dGFibGV4X2FsZWVuX3NuZ3VhcmRpYW5faWRlbnRpdHkxNzE1MDUwMDY2MDM5',
                            },
                        ],
                        showSubAggregate: false,
                        showHeaderSeparator: true,
                        headerTitle: 'Orphan Accounts By System',
                        refreshRequest: '',
                        metrics: [
                            {
                                dataSource: 'dGFibGV4X2FsZWVuX3NuZ3VhcmRpYW5faWRlbnRpdHkxNzE1MDUwMDY2MDM5',
                                id: 'ZEdGaWJHVjRYMkZzWldWdVgzTnVaM1ZoY21ScFlXNWZhV1JsYm5ScGRIa3hOekUxTURVd01EWTJNRE01MTcxNTA1MDA2Nzc3OA==',
                                aggregateFunction: 'COUNT',
                                axisId: 'primary',
                            },
                        ],
                        groupBy: [
                            {
                                groupBy: [
                                    {
                                        dataSource: 'dGFibGV4X2FsZWVuX3NuZ3VhcmRpYW5faWRlbnRpdHkxNzE1MDUwMDY2MDM5',
                                        groupByField: 'source_system_code',
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
                    width: 12,
                    position: {
                        x: 0,
                        y: 31,
                    },
                },
                {
                    $id: Now.ID['ed799d1f1bf5ca90759455342a4bcb2b'],
                    component: 'donut',
                    componentProps: {
                        dataSources: [
                            {
                                label: 'Identity Asset',
                                sourceType: 'table',
                                tableOrViewName: 'x_aleen_snguardian_identity_asset',
                                filterQuery: '',
                                id: 'dGFibGV4X2FsZWVuX3NuZ3VhcmRpYW5faWRlbnRpdHlfYXNzZXQxNzE0NDg2NDU5NjAy',
                            },
                        ],
                        showSubAggregate: false,
                        showHeaderSeparator: true,
                        headerTitle: 'Cardholders By Badge Type',
                        refreshRequest: '',
                        metrics: [
                            {
                                dataSource: 'dGFibGV4X2FsZWVuX3NuZ3VhcmRpYW5faWRlbnRpdHlfYXNzZXQxNzE0NDg2NDU5NjAy',
                                id: 'ZEdGaWJHVjRYMkZzWldWdVgzTnVaM1ZoY21ScFlXNWZhV1JsYm5ScGRIbGZZWE56WlhReE56RTBORGcyTkRVNU5qQXkxNzE0NDg2NDYxNDM4',
                                aggregateFunction: 'COUNT',
                                axisId: 'primary',
                            },
                        ],
                        groupBy: [
                            {
                                groupBy: [
                                    {
                                        dataSource:
                                            'dGFibGV4X2FsZWVuX3NuZ3VhcmRpYW5faWRlbnRpdHlfYXNzZXQxNzE0NDg2NDU5NjAy',
                                        groupByField: 'asset.type',
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
                    width: 15,
                    position: {
                        x: 17,
                        y: 15,
                    },
                },
            ],
        },
    ],
    visibilities: [
        {
            $id: Now.ID['9124921c71688e101b375279c728aae7'],
            experience: '1124921cb6688e109e75a2d7902de0ef',
        },
    ],
})
