import { Dashboard } from '@servicenow/sdk/core'

Dashboard({
    $id: Now.ID['3b131e98db688e10c635d46a79578017'],
    name: 'Guardian Badge Admin Workspace',
    tabs: [
        {
            $id: Now.ID['fb131e985e688e10957e819dd86d5e17'],
            name: 'Home',
            widgets: [
                {
                    $id: Now.ID['33131e98ea688e102ffa75046812a716'],
                    component: 'single-score',
                    componentProps: {
                        scoreSize: 'md',
                        useRelativeScoreTime: true,
                        enableRealTimeUpdate: true,
                        showZero: true,
                        colorConfig: {
                            type: 'singleColor',
                            values: [
                                {
                                    color: '65b302aea9fe3dba00a530d65ecc2106',
                                    metric: 'metric_0',
                                },
                            ],
                        },
                        showSubAggregate: false,
                        showHeaderSeparator: true,
                        headerTitle: 'Open Requests (All Badge Offices)',
                        showDataPassthrough: true,
                        dataPassthrough: [
                            {
                                data: [
                                    {
                                        value: '23',
                                        change: '0',
                                        changePercent: '0',
                                    },
                                ],
                                metadata: {
                                    eventData: {
                                        indicatorSysid: 'fb007202d7130100b96d45a3ce6103b4',
                                    },
                                    previousScoreDate: '1642809600000',
                                    dataSourceLabel: 'Number of open incidents',
                                    changeArrow: 'steady',
                                    scoreDate: '1642896000000',
                                    filterQuery:
                                        'opened_atONToday@javascript:gs.beginningOfToday()@javascript:gs.endOfToday()^ORopened_at<javascript:gs.beginningOfToday()^resolved_atISEMPTY^ORresolved_at>javascript:gs.endOfToday()^state!=8',
                                    aggregate: {
                                        fieldType: 'decimal',
                                    },
                                    format: {
                                        unitFormat: '{0}',
                                        frequency: 'daily',
                                        precision: 0,
                                    },
                                },
                                sparkline: {
                                    data: [
                                        {
                                            timestamp: '1637798400000',
                                            value: '54',
                                        },
                                        {
                                            timestamp: '1637884800000',
                                            value: '54',
                                        },
                                        {
                                            timestamp: '1637971200000',
                                            value: '54',
                                        },
                                        {
                                            timestamp: '1638057600000',
                                            value: '54',
                                        },
                                        {
                                            timestamp: '1638144000000',
                                            value: '54',
                                        },
                                        {
                                            timestamp: '1638230400000',
                                            value: '54',
                                        },
                                        {
                                            timestamp: '1638316800000',
                                            value: '54',
                                        },
                                        {
                                            timestamp: '1638403200000',
                                            value: '54',
                                        },
                                        {
                                            timestamp: '1638489600000',
                                            value: '54',
                                        },
                                        {
                                            timestamp: '1638576000000',
                                            value: '54',
                                        },
                                        {
                                            timestamp: '1638662400000',
                                            value: '54',
                                        },
                                        {
                                            timestamp: '1638748800000',
                                            value: '54',
                                        },
                                        {
                                            timestamp: '1638835200000',
                                            value: '54',
                                        },
                                        {
                                            timestamp: '1638921600000',
                                            value: '54',
                                        },
                                        {
                                            timestamp: '1639008000000',
                                            value: '54',
                                        },
                                        {
                                            timestamp: '1639094400000',
                                            value: '54',
                                        },
                                        {
                                            timestamp: '1639180800000',
                                            value: '54',
                                        },
                                        {
                                            timestamp: '1639267200000',
                                            value: '54',
                                        },
                                        {
                                            timestamp: '1639353600000',
                                            value: '54',
                                        },
                                        {
                                            timestamp: '1639440000000',
                                            value: '54',
                                        },
                                        {
                                            timestamp: '1639526400000',
                                            value: '54',
                                        },
                                        {
                                            timestamp: '1639612800000',
                                            value: '54',
                                        },
                                        {
                                            timestamp: '1639699200000',
                                            value: '54',
                                        },
                                        {
                                            timestamp: '1639785600000',
                                            value: '54',
                                        },
                                        {
                                            timestamp: '1639872000000',
                                            value: '54',
                                        },
                                        {
                                            timestamp: '1639958400000',
                                            value: '54',
                                        },
                                        {
                                            timestamp: '1640044800000',
                                            value: '54',
                                        },
                                        {
                                            timestamp: '1640131200000',
                                            value: '54',
                                        },
                                        {
                                            timestamp: '1640217600000',
                                            value: '54',
                                        },
                                        {
                                            timestamp: '1640304000000',
                                            value: '54',
                                        },
                                        {
                                            timestamp: '1640390400000',
                                            value: '54',
                                        },
                                        {
                                            timestamp: '1640476800000',
                                            value: '54',
                                        },
                                        {
                                            timestamp: '1640563200000',
                                            value: '54',
                                        },
                                        {
                                            timestamp: '1640649600000',
                                            value: '54',
                                        },
                                        {
                                            timestamp: '1640736000000',
                                            value: '54',
                                        },
                                        {
                                            timestamp: '1640822400000',
                                            value: '62',
                                        },
                                        {
                                            timestamp: '1640908800000',
                                            value: '62',
                                        },
                                        {
                                            timestamp: '1640995200000',
                                            value: '62',
                                        },
                                        {
                                            timestamp: '1641081600000',
                                            value: '62',
                                        },
                                        {
                                            timestamp: '1641168000000',
                                            value: '62',
                                        },
                                        {
                                            timestamp: '1641254400000',
                                            value: '62',
                                        },
                                        {
                                            timestamp: '1641340800000',
                                            value: '62',
                                        },
                                        {
                                            timestamp: '1641427200000',
                                            value: '62',
                                        },
                                        {
                                            timestamp: '1641513600000',
                                            value: '62',
                                        },
                                        {
                                            timestamp: '1641600000000',
                                            value: '62',
                                        },
                                        {
                                            timestamp: '1641686400000',
                                            value: '62',
                                        },
                                        {
                                            timestamp: '1641772800000',
                                            value: '62',
                                        },
                                        {
                                            timestamp: '1641859200000',
                                            value: '61',
                                        },
                                        {
                                            timestamp: '1641945600000',
                                            value: '61',
                                        },
                                        {
                                            timestamp: '1642032000000',
                                            value: '59',
                                        },
                                        {
                                            timestamp: '1642118400000',
                                            value: '59',
                                        },
                                        {
                                            timestamp: '1642204800000',
                                            value: '59',
                                        },
                                        {
                                            timestamp: '1642291200000',
                                            value: '60',
                                        },
                                        {
                                            timestamp: '1642377600000',
                                            value: '60',
                                        },
                                        {
                                            timestamp: '1642464000000',
                                            value: '60',
                                        },
                                        {
                                            timestamp: '1642550400000',
                                            value: '59',
                                        },
                                        {
                                            timestamp: '1642636800000',
                                            value: '40',
                                        },
                                        {
                                            timestamp: '1642723200000',
                                            value: '40',
                                        },
                                        {
                                            timestamp: '1642809600000',
                                            value: '40',
                                        },
                                        {
                                            timestamp: '1642896000000',
                                            value: '40',
                                        },
                                    ],
                                    metadata: {
                                        eventData: {
                                            indicatorSysid: 'fb007202d7130100b96d45a3ce6103b4',
                                        },
                                        dataSourceLabel: 'Number of open incidents',
                                        series: [
                                            {
                                                label: 'Number of open incidents',
                                                id: 'value',
                                                type: 'value',
                                            },
                                        ],
                                        aggregate: {
                                            fieldType: 'decimal',
                                        },
                                        format: {
                                            unitFormat: '{0}',
                                            frequency: 'daily',
                                            precision: 0,
                                        },
                                    },
                                },
                            },
                        ],
                        sortBy: 'value',
                        showChangeFrom: false,
                        noDebounce: '',
                        scoreIcon: 'verify-person-outline',
                        iconStyle: 'no-background',
                    },
                    height: 8,
                    width: 11,
                    position: {
                        x: 23,
                        y: 18,
                    },
                },
                {
                    $id: Now.ID['903b73031b918e10759455342a4bcbb1'],
                    component: 'single-score',
                    componentProps: {
                        scoreSize: 'md',
                        scoreIcon: 'clock-outline',
                        iconStyle: 'no-background',
                        useRelativeScoreTime: true,
                        showZero: true,
                        colorConfig: {
                            type: 'singleColor',
                            values: [
                                {
                                    color: '1709ccc3730033000b9dff603ef6a7ef',
                                    metric: 'ZEdGaWJHVjRYMkZzWldWdVgzTnVaM1ZoY21ScFlXNWZjbVZ4ZFdWemRERTNNVEl6T1RZMU9EWTJNalE9MTcxMjM5NjU4ODQyNQ==',
                                },
                            ],
                        },
                        showSubAggregate: false,
                        showHeaderSeparator: true,
                        headerTitle: 'SLA (Minutes)',
                        showDataPassthrough: true,
                        refreshRequest: '',
                        dataPassthrough: [
                            {
                                data: [
                                    {
                                        value: '25',
                                        change: '0',
                                        changePercent: '0',
                                    },
                                ],
                                metadata: {
                                    eventData: {
                                        indicatorSysid: 'fb007202d7130100b96d45a3ce6103b4',
                                    },
                                    previousScoreDate: '1642809600000',
                                    dataSourceLabel: 'Number of open incidents',
                                    changeArrow: 'steady',
                                    scoreDate: '1642896000000',
                                    filterQuery:
                                        'opened_atONToday@javascript:gs.beginningOfToday()@javascript:gs.endOfToday()^ORopened_at<javascript:gs.beginningOfToday()^resolved_atISEMPTY^ORresolved_at>javascript:gs.endOfToday()^state!=8',
                                    aggregate: {
                                        fieldType: 'decimal',
                                    },
                                    format: {
                                        unitFormat: '{0}',
                                        frequency: 'daily',
                                        precision: 0,
                                    },
                                },
                                sparkline: {
                                    data: [
                                        {
                                            timestamp: '1637798400000',
                                            value: '54',
                                        },
                                        {
                                            timestamp: '1637884800000',
                                            value: '54',
                                        },
                                        {
                                            timestamp: '1637971200000',
                                            value: '54',
                                        },
                                        {
                                            timestamp: '1638057600000',
                                            value: '54',
                                        },
                                        {
                                            timestamp: '1638144000000',
                                            value: '54',
                                        },
                                        {
                                            timestamp: '1638230400000',
                                            value: '54',
                                        },
                                        {
                                            timestamp: '1638316800000',
                                            value: '54',
                                        },
                                        {
                                            timestamp: '1638403200000',
                                            value: '54',
                                        },
                                        {
                                            timestamp: '1638489600000',
                                            value: '54',
                                        },
                                        {
                                            timestamp: '1638576000000',
                                            value: '54',
                                        },
                                        {
                                            timestamp: '1638662400000',
                                            value: '54',
                                        },
                                        {
                                            timestamp: '1638748800000',
                                            value: '54',
                                        },
                                        {
                                            timestamp: '1638835200000',
                                            value: '54',
                                        },
                                        {
                                            timestamp: '1638921600000',
                                            value: '54',
                                        },
                                        {
                                            timestamp: '1639008000000',
                                            value: '54',
                                        },
                                        {
                                            timestamp: '1639094400000',
                                            value: '54',
                                        },
                                        {
                                            timestamp: '1639180800000',
                                            value: '54',
                                        },
                                        {
                                            timestamp: '1639267200000',
                                            value: '54',
                                        },
                                        {
                                            timestamp: '1639353600000',
                                            value: '54',
                                        },
                                        {
                                            timestamp: '1639440000000',
                                            value: '54',
                                        },
                                        {
                                            timestamp: '1639526400000',
                                            value: '54',
                                        },
                                        {
                                            timestamp: '1639612800000',
                                            value: '54',
                                        },
                                        {
                                            timestamp: '1639699200000',
                                            value: '54',
                                        },
                                        {
                                            timestamp: '1639785600000',
                                            value: '54',
                                        },
                                        {
                                            timestamp: '1639872000000',
                                            value: '54',
                                        },
                                        {
                                            timestamp: '1639958400000',
                                            value: '54',
                                        },
                                        {
                                            timestamp: '1640044800000',
                                            value: '54',
                                        },
                                        {
                                            timestamp: '1640131200000',
                                            value: '54',
                                        },
                                        {
                                            timestamp: '1640217600000',
                                            value: '54',
                                        },
                                        {
                                            timestamp: '1640304000000',
                                            value: '54',
                                        },
                                        {
                                            timestamp: '1640390400000',
                                            value: '54',
                                        },
                                        {
                                            timestamp: '1640476800000',
                                            value: '54',
                                        },
                                        {
                                            timestamp: '1640563200000',
                                            value: '54',
                                        },
                                        {
                                            timestamp: '1640649600000',
                                            value: '54',
                                        },
                                        {
                                            timestamp: '1640736000000',
                                            value: '54',
                                        },
                                        {
                                            timestamp: '1640822400000',
                                            value: '62',
                                        },
                                        {
                                            timestamp: '1640908800000',
                                            value: '62',
                                        },
                                        {
                                            timestamp: '1640995200000',
                                            value: '62',
                                        },
                                        {
                                            timestamp: '1641081600000',
                                            value: '62',
                                        },
                                        {
                                            timestamp: '1641168000000',
                                            value: '62',
                                        },
                                        {
                                            timestamp: '1641254400000',
                                            value: '62',
                                        },
                                        {
                                            timestamp: '1641340800000',
                                            value: '62',
                                        },
                                        {
                                            timestamp: '1641427200000',
                                            value: '62',
                                        },
                                        {
                                            timestamp: '1641513600000',
                                            value: '62',
                                        },
                                        {
                                            timestamp: '1641600000000',
                                            value: '62',
                                        },
                                        {
                                            timestamp: '1641686400000',
                                            value: '62',
                                        },
                                        {
                                            timestamp: '1641772800000',
                                            value: '62',
                                        },
                                        {
                                            timestamp: '1641859200000',
                                            value: '61',
                                        },
                                        {
                                            timestamp: '1641945600000',
                                            value: '61',
                                        },
                                        {
                                            timestamp: '1642032000000',
                                            value: '59',
                                        },
                                        {
                                            timestamp: '1642118400000',
                                            value: '59',
                                        },
                                        {
                                            timestamp: '1642204800000',
                                            value: '59',
                                        },
                                        {
                                            timestamp: '1642291200000',
                                            value: '60',
                                        },
                                        {
                                            timestamp: '1642377600000',
                                            value: '60',
                                        },
                                        {
                                            timestamp: '1642464000000',
                                            value: '60',
                                        },
                                        {
                                            timestamp: '1642550400000',
                                            value: '59',
                                        },
                                        {
                                            timestamp: '1642636800000',
                                            value: '40',
                                        },
                                        {
                                            timestamp: '1642723200000',
                                            value: '40',
                                        },
                                        {
                                            timestamp: '1642809600000',
                                            value: '40',
                                        },
                                        {
                                            timestamp: '1642896000000',
                                            value: '40',
                                        },
                                    ],
                                    metadata: {
                                        eventData: {
                                            indicatorSysid: 'fb007202d7130100b96d45a3ce6103b4',
                                        },
                                        dataSourceLabel: 'Number of open incidents',
                                        series: [
                                            {
                                                label: 'Number of open incidents',
                                                id: 'value',
                                                type: 'value',
                                            },
                                        ],
                                        aggregate: {
                                            fieldType: 'decimal',
                                        },
                                        format: {
                                            unitFormat: '{0}',
                                            frequency: 'daily',
                                            precision: 0,
                                        },
                                    },
                                },
                            },
                        ],
                        enableRealTimeUpdate: true,
                        showChangeFrom: false,
                        noDebounce: '',
                    },
                    height: 8,
                    width: 11,
                    position: {
                        x: 34,
                        y: 18,
                    },
                },
                {
                    $id: Now.ID['a9a087ea1b3502d06962fe60cd4bcb9a'],
                    component: '2b1c080881e05dc63b917044290b233f',
                    componentProps: {
                        table: 'x_aleen_snguardian_request',
                        fixedQuery: '',
                        listTitle: 'All Active Tasks',
                        columns: '',
                        query: 'active=true',
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
                        hideTitleRowCount: false,
                        hideLastRefreshedText: false,
                        hideRefreshButton: false,
                        hideInlineEditing: false,
                        refreshRequested: '',
                    },
                    height: 24,
                    width: 48,
                    position: {
                        x: 0,
                        y: 28,
                    },
                },
                {
                    $id: Now.ID['b7131e98a6688e1020eb3a681ec48c16'],
                    component: 'single-score',
                    componentProps: {
                        scoreSize: 'md',
                        useRelativeScoreTime: true,
                        showZero: true,
                        colorConfig: {
                            type: 'singleColor',
                            values: [
                                {
                                    color: '0c2b2cd75b712110e5ba6e8a1d81c7ba',
                                    metric: 'ZEdGaWJHVjRYMkZzWldWdVgzTnVaM1ZoY21ScFlXNWZjbVZ4ZFdWemRERTNNVFF6TVRreU5qVXhNVEU9MTcxNDMxOTI2NzQxMA==',
                                },
                            ],
                        },
                        dataSources: [
                            {
                                label: 'Request',
                                sourceType: 'table',
                                tableOrViewName: 'x_aleen_snguardian_request',
                                filterQuery: 'state=2',
                                id: 'dGFibGV4X2FsZWVuX3NuZ3VhcmRpYW5fcmVxdWVzdDE3MTQzMTkyNjUxMTE=',
                            },
                        ],
                        showSubAggregate: false,
                        showHeaderSeparator: true,
                        headerTitle: 'Open Requests (My Office)',
                        metrics: [
                            {
                                dataSource: 'dGFibGV4X2FsZWVuX3NuZ3VhcmRpYW5fcmVxdWVzdDE3MTQzMTkyNjUxMTE=',
                                id: 'ZEdGaWJHVjRYMkZzWldWdVgzTnVaM1ZoY21ScFlXNWZjbVZ4ZFdWemRERTNNVFF6TVRreU5qVXhNVEU9MTcxNDMxOTI2NzQxMA==',
                                aggregateFunction: 'COUNT',
                                axisId: 'primary',
                            },
                        ],
                        sortBy: 'value',
                        showChangeFrom: false,
                        noDebounce: '',
                        description: '',
                        scoreIcon: 'chart-relative-compare-outline',
                        iconStyle: 'no-background',
                    },
                    height: 8,
                    width: 12,
                    position: {
                        x: 11,
                        y: 18,
                    },
                },
                {
                    $id: Now.ID['b7686f141b240e10759455342a4bcb24'],
                    component: 'single-score',
                    componentProps: {
                        scoreSize: 'md',
                        scoreIcon: 'user-tag-outline',
                        iconStyle: 'no-background',
                        showZero: true,
                        colorConfig: {
                            type: 'singleColor',
                            values: [
                                {
                                    color: '65b30218a9fe3dba006ab0b2adba589f',
                                    metric: 'metric_0',
                                },
                            ],
                        },
                        showSubAggregate: false,
                        headerTitle: '# Request Approved by Me  Today',
                        showDataPassthrough: true,
                        dataPassthrough: [
                            {
                                data: [
                                    {
                                        value: '8',
                                        change: '0',
                                        changePercent: '0',
                                    },
                                ],
                                metadata: {
                                    eventData: {
                                        indicatorSysid: 'fb007202d7130100b96d45a3ce6103b4',
                                    },
                                    previousScoreDate: '1642809600000',
                                    dataSourceLabel: 'Number of open incidents',
                                    changeArrow: 'steady',
                                    scoreDate: '1642896000000',
                                    filterQuery:
                                        'opened_atONToday@javascript:gs.beginningOfToday()@javascript:gs.endOfToday()^ORopened_at<javascript:gs.beginningOfToday()^resolved_atISEMPTY^ORresolved_at>javascript:gs.endOfToday()^state!=8',
                                    aggregate: {
                                        fieldType: 'decimal',
                                    },
                                    format: {
                                        unitFormat: '{0}',
                                        frequency: 'daily',
                                        precision: 0,
                                    },
                                },
                                sparkline: {
                                    data: [
                                        {
                                            timestamp: '1637798400000',
                                            value: '54',
                                        },
                                        {
                                            timestamp: '1637884800000',
                                            value: '54',
                                        },
                                        {
                                            timestamp: '1637971200000',
                                            value: '54',
                                        },
                                        {
                                            timestamp: '1638057600000',
                                            value: '54',
                                        },
                                        {
                                            timestamp: '1638144000000',
                                            value: '54',
                                        },
                                        {
                                            timestamp: '1638230400000',
                                            value: '54',
                                        },
                                        {
                                            timestamp: '1638316800000',
                                            value: '54',
                                        },
                                        {
                                            timestamp: '1638403200000',
                                            value: '54',
                                        },
                                        {
                                            timestamp: '1638489600000',
                                            value: '54',
                                        },
                                        {
                                            timestamp: '1638576000000',
                                            value: '54',
                                        },
                                        {
                                            timestamp: '1638662400000',
                                            value: '54',
                                        },
                                        {
                                            timestamp: '1638748800000',
                                            value: '54',
                                        },
                                        {
                                            timestamp: '1638835200000',
                                            value: '54',
                                        },
                                        {
                                            timestamp: '1638921600000',
                                            value: '54',
                                        },
                                        {
                                            timestamp: '1639008000000',
                                            value: '54',
                                        },
                                        {
                                            timestamp: '1639094400000',
                                            value: '54',
                                        },
                                        {
                                            timestamp: '1639180800000',
                                            value: '54',
                                        },
                                        {
                                            timestamp: '1639267200000',
                                            value: '54',
                                        },
                                        {
                                            timestamp: '1639353600000',
                                            value: '54',
                                        },
                                        {
                                            timestamp: '1639440000000',
                                            value: '54',
                                        },
                                        {
                                            timestamp: '1639526400000',
                                            value: '54',
                                        },
                                        {
                                            timestamp: '1639612800000',
                                            value: '54',
                                        },
                                        {
                                            timestamp: '1639699200000',
                                            value: '54',
                                        },
                                        {
                                            timestamp: '1639785600000',
                                            value: '54',
                                        },
                                        {
                                            timestamp: '1639872000000',
                                            value: '54',
                                        },
                                        {
                                            timestamp: '1639958400000',
                                            value: '54',
                                        },
                                        {
                                            timestamp: '1640044800000',
                                            value: '54',
                                        },
                                        {
                                            timestamp: '1640131200000',
                                            value: '54',
                                        },
                                        {
                                            timestamp: '1640217600000',
                                            value: '54',
                                        },
                                        {
                                            timestamp: '1640304000000',
                                            value: '54',
                                        },
                                        {
                                            timestamp: '1640390400000',
                                            value: '54',
                                        },
                                        {
                                            timestamp: '1640476800000',
                                            value: '54',
                                        },
                                        {
                                            timestamp: '1640563200000',
                                            value: '54',
                                        },
                                        {
                                            timestamp: '1640649600000',
                                            value: '54',
                                        },
                                        {
                                            timestamp: '1640736000000',
                                            value: '54',
                                        },
                                        {
                                            timestamp: '1640822400000',
                                            value: '62',
                                        },
                                        {
                                            timestamp: '1640908800000',
                                            value: '62',
                                        },
                                        {
                                            timestamp: '1640995200000',
                                            value: '62',
                                        },
                                        {
                                            timestamp: '1641081600000',
                                            value: '62',
                                        },
                                        {
                                            timestamp: '1641168000000',
                                            value: '62',
                                        },
                                        {
                                            timestamp: '1641254400000',
                                            value: '62',
                                        },
                                        {
                                            timestamp: '1641340800000',
                                            value: '62',
                                        },
                                        {
                                            timestamp: '1641427200000',
                                            value: '62',
                                        },
                                        {
                                            timestamp: '1641513600000',
                                            value: '62',
                                        },
                                        {
                                            timestamp: '1641600000000',
                                            value: '62',
                                        },
                                        {
                                            timestamp: '1641686400000',
                                            value: '62',
                                        },
                                        {
                                            timestamp: '1641772800000',
                                            value: '62',
                                        },
                                        {
                                            timestamp: '1641859200000',
                                            value: '61',
                                        },
                                        {
                                            timestamp: '1641945600000',
                                            value: '61',
                                        },
                                        {
                                            timestamp: '1642032000000',
                                            value: '59',
                                        },
                                        {
                                            timestamp: '1642118400000',
                                            value: '59',
                                        },
                                        {
                                            timestamp: '1642204800000',
                                            value: '59',
                                        },
                                        {
                                            timestamp: '1642291200000',
                                            value: '60',
                                        },
                                        {
                                            timestamp: '1642377600000',
                                            value: '60',
                                        },
                                        {
                                            timestamp: '1642464000000',
                                            value: '60',
                                        },
                                        {
                                            timestamp: '1642550400000',
                                            value: '59',
                                        },
                                        {
                                            timestamp: '1642636800000',
                                            value: '40',
                                        },
                                        {
                                            timestamp: '1642723200000',
                                            value: '40',
                                        },
                                        {
                                            timestamp: '1642809600000',
                                            value: '40',
                                        },
                                        {
                                            timestamp: '1642896000000',
                                            value: '40',
                                        },
                                    ],
                                    metadata: {
                                        eventData: {
                                            indicatorSysid: 'fb007202d7130100b96d45a3ce6103b4',
                                        },
                                        dataSourceLabel: 'Number of open incidents',
                                        series: [
                                            {
                                                label: 'Number of open incidents',
                                                id: 'value',
                                                type: 'value',
                                            },
                                        ],
                                        aggregate: {
                                            fieldType: 'decimal',
                                        },
                                        format: {
                                            unitFormat: '{0}',
                                            frequency: 'daily',
                                            precision: 0,
                                        },
                                    },
                                },
                            },
                        ],
                        showChangeFrom: false,
                        noDebounce: '',
                    },
                    height: 7,
                    width: 10,
                    position: {
                        x: 0,
                        y: 7,
                    },
                },
                {
                    $id: Now.ID['bb131e9855688e106bdc370b23f37d15'],
                    component: 'single-score',
                    componentProps: {
                        scoreSize: 'md',
                        useRelativeScoreTime: true,
                        showScoreUpdateTime: true,
                        enableRealTimeUpdate: true,
                        showZero: true,
                        colorConfig: {
                            type: 'singleColor',
                            values: [
                                {
                                    color: '0c2b2cd75b712110e5ba6e8a1d81c7ba',
                                    iconColor: '0c2b2cd75b712110e5ba6e8a1d81c7ba',
                                    metric: 'ZEdGaWJHVjBZWE5yTVRZMU16ZzBNVGt4TnpJeU9BPT0xNjUzODQyMzE4NDk1',
                                },
                            ],
                        },
                        dataSources: [
                            {
                                label: 'Request',
                                sourceType: 'table',
                                tableOrViewName: 'x_aleen_snguardian_request',
                                filterQuery: '',
                                id: 'dGFibGV0YXNrMTY1Mzg0MTkxNzIyOA==',
                            },
                        ],
                        showSubAggregate: false,
                        showHeaderSeparator: true,
                        headerTitle: 'Total # Requests',
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
                        scoreIcon: 'chart-bar-column-outline',
                        noDebounce: '',
                        iconStyle: 'no-background',
                    },
                    height: 7,
                    width: 10,
                    position: {
                        x: 0,
                        y: 0,
                    },
                },
                {
                    $id: Now.ID['f7686f141b240e10759455342a4bcb26'],
                    component: 'single-score',
                    componentProps: {
                        scoreSize: 'md',
                        scoreIcon: 'circle-info-outline',
                        iconStyle: 'no-background',
                        showZero: true,
                        colorConfig: {
                            type: 'singleColor',
                            values: [
                                {
                                    color: '65b3036ca9fe3dba0197ee0f7e51375c',
                                    metric: 'metric_0',
                                },
                            ],
                        },
                        showSubAggregate: false,
                        headerTitle: 'Provisioning Error(s)',
                        showDataPassthrough: true,
                        dataPassthrough: [
                            {
                                data: [
                                    {
                                        value: '3',
                                        change: '0',
                                        changePercent: '0',
                                    },
                                ],
                                metadata: {
                                    eventData: {
                                        indicatorSysid: 'fb007202d7130100b96d45a3ce6103b4',
                                    },
                                    previousScoreDate: '1642809600000',
                                    dataSourceLabel: 'Number of open incidents',
                                    changeArrow: 'steady',
                                    scoreDate: '1642896000000',
                                    filterQuery:
                                        'opened_atONToday@javascript:gs.beginningOfToday()@javascript:gs.endOfToday()^ORopened_at<javascript:gs.beginningOfToday()^resolved_atISEMPTY^ORresolved_at>javascript:gs.endOfToday()^state!=8',
                                    aggregate: {
                                        fieldType: 'decimal',
                                    },
                                    format: {
                                        unitFormat: '{0}',
                                        frequency: 'daily',
                                        precision: 0,
                                    },
                                },
                                sparkline: {
                                    data: [
                                        {
                                            timestamp: '1637798400000',
                                            value: '54',
                                        },
                                        {
                                            timestamp: '1637884800000',
                                            value: '54',
                                        },
                                        {
                                            timestamp: '1637971200000',
                                            value: '54',
                                        },
                                        {
                                            timestamp: '1638057600000',
                                            value: '54',
                                        },
                                        {
                                            timestamp: '1638144000000',
                                            value: '54',
                                        },
                                        {
                                            timestamp: '1638230400000',
                                            value: '54',
                                        },
                                        {
                                            timestamp: '1638316800000',
                                            value: '54',
                                        },
                                        {
                                            timestamp: '1638403200000',
                                            value: '54',
                                        },
                                        {
                                            timestamp: '1638489600000',
                                            value: '54',
                                        },
                                        {
                                            timestamp: '1638576000000',
                                            value: '54',
                                        },
                                        {
                                            timestamp: '1638662400000',
                                            value: '54',
                                        },
                                        {
                                            timestamp: '1638748800000',
                                            value: '54',
                                        },
                                        {
                                            timestamp: '1638835200000',
                                            value: '54',
                                        },
                                        {
                                            timestamp: '1638921600000',
                                            value: '54',
                                        },
                                        {
                                            timestamp: '1639008000000',
                                            value: '54',
                                        },
                                        {
                                            timestamp: '1639094400000',
                                            value: '54',
                                        },
                                        {
                                            timestamp: '1639180800000',
                                            value: '54',
                                        },
                                        {
                                            timestamp: '1639267200000',
                                            value: '54',
                                        },
                                        {
                                            timestamp: '1639353600000',
                                            value: '54',
                                        },
                                        {
                                            timestamp: '1639440000000',
                                            value: '54',
                                        },
                                        {
                                            timestamp: '1639526400000',
                                            value: '54',
                                        },
                                        {
                                            timestamp: '1639612800000',
                                            value: '54',
                                        },
                                        {
                                            timestamp: '1639699200000',
                                            value: '54',
                                        },
                                        {
                                            timestamp: '1639785600000',
                                            value: '54',
                                        },
                                        {
                                            timestamp: '1639872000000',
                                            value: '54',
                                        },
                                        {
                                            timestamp: '1639958400000',
                                            value: '54',
                                        },
                                        {
                                            timestamp: '1640044800000',
                                            value: '54',
                                        },
                                        {
                                            timestamp: '1640131200000',
                                            value: '54',
                                        },
                                        {
                                            timestamp: '1640217600000',
                                            value: '54',
                                        },
                                        {
                                            timestamp: '1640304000000',
                                            value: '54',
                                        },
                                        {
                                            timestamp: '1640390400000',
                                            value: '54',
                                        },
                                        {
                                            timestamp: '1640476800000',
                                            value: '54',
                                        },
                                        {
                                            timestamp: '1640563200000',
                                            value: '54',
                                        },
                                        {
                                            timestamp: '1640649600000',
                                            value: '54',
                                        },
                                        {
                                            timestamp: '1640736000000',
                                            value: '54',
                                        },
                                        {
                                            timestamp: '1640822400000',
                                            value: '62',
                                        },
                                        {
                                            timestamp: '1640908800000',
                                            value: '62',
                                        },
                                        {
                                            timestamp: '1640995200000',
                                            value: '62',
                                        },
                                        {
                                            timestamp: '1641081600000',
                                            value: '62',
                                        },
                                        {
                                            timestamp: '1641168000000',
                                            value: '62',
                                        },
                                        {
                                            timestamp: '1641254400000',
                                            value: '62',
                                        },
                                        {
                                            timestamp: '1641340800000',
                                            value: '62',
                                        },
                                        {
                                            timestamp: '1641427200000',
                                            value: '62',
                                        },
                                        {
                                            timestamp: '1641513600000',
                                            value: '62',
                                        },
                                        {
                                            timestamp: '1641600000000',
                                            value: '62',
                                        },
                                        {
                                            timestamp: '1641686400000',
                                            value: '62',
                                        },
                                        {
                                            timestamp: '1641772800000',
                                            value: '62',
                                        },
                                        {
                                            timestamp: '1641859200000',
                                            value: '61',
                                        },
                                        {
                                            timestamp: '1641945600000',
                                            value: '61',
                                        },
                                        {
                                            timestamp: '1642032000000',
                                            value: '59',
                                        },
                                        {
                                            timestamp: '1642118400000',
                                            value: '59',
                                        },
                                        {
                                            timestamp: '1642204800000',
                                            value: '59',
                                        },
                                        {
                                            timestamp: '1642291200000',
                                            value: '60',
                                        },
                                        {
                                            timestamp: '1642377600000',
                                            value: '60',
                                        },
                                        {
                                            timestamp: '1642464000000',
                                            value: '60',
                                        },
                                        {
                                            timestamp: '1642550400000',
                                            value: '59',
                                        },
                                        {
                                            timestamp: '1642636800000',
                                            value: '40',
                                        },
                                        {
                                            timestamp: '1642723200000',
                                            value: '40',
                                        },
                                        {
                                            timestamp: '1642809600000',
                                            value: '40',
                                        },
                                        {
                                            timestamp: '1642896000000',
                                            value: '40',
                                        },
                                    ],
                                    metadata: {
                                        eventData: {
                                            indicatorSysid: 'fb007202d7130100b96d45a3ce6103b4',
                                        },
                                        dataSourceLabel: 'Number of open incidents',
                                        series: [
                                            {
                                                label: 'Number of open incidents',
                                                id: 'value',
                                                type: 'value',
                                            },
                                        ],
                                        aggregate: {
                                            fieldType: 'decimal',
                                        },
                                        format: {
                                            unitFormat: '{0}',
                                            frequency: 'daily',
                                            precision: 0,
                                        },
                                    },
                                },
                            },
                        ],
                        showChangeFrom: false,
                        noDebounce: '',
                    },
                    height: 7,
                    width: 10,
                    position: {
                        x: 0,
                        y: 21,
                    },
                },
                {
                    $id: Now.ID['f7686f141b240e10759455342a4bcb28'],
                    component: 'single-score',
                    componentProps: {
                        scoreSize: 'md',
                        scoreIcon: 'building-outline',
                        iconStyle: 'no-background',
                        showZero: true,
                        colorConfig: {
                            type: 'singleColor',
                            values: [
                                {
                                    color: '65b30218a9fe3dba0120df8611520d97',
                                    metric: 'metric_0',
                                },
                            ],
                        },
                        showSubAggregate: false,
                        headerTitle: '# Request Approved by Office',
                        showDataPassthrough: true,
                        dataPassthrough: [
                            {
                                data: [
                                    {
                                        value: '14',
                                        change: '0',
                                        changePercent: '0',
                                    },
                                ],
                                metadata: {
                                    eventData: {
                                        indicatorSysid: 'fb007202d7130100b96d45a3ce6103b4',
                                    },
                                    previousScoreDate: '1642809600000',
                                    dataSourceLabel: 'Number of open incidents',
                                    changeArrow: 'steady',
                                    scoreDate: '1642896000000',
                                    filterQuery:
                                        'opened_atONToday@javascript:gs.beginningOfToday()@javascript:gs.endOfToday()^ORopened_at<javascript:gs.beginningOfToday()^resolved_atISEMPTY^ORresolved_at>javascript:gs.endOfToday()^state!=8',
                                    aggregate: {
                                        fieldType: 'decimal',
                                    },
                                    format: {
                                        unitFormat: '{0}',
                                        frequency: 'daily',
                                        precision: 0,
                                    },
                                },
                                sparkline: {
                                    data: [
                                        {
                                            timestamp: '1637798400000',
                                            value: '54',
                                        },
                                        {
                                            timestamp: '1637884800000',
                                            value: '54',
                                        },
                                        {
                                            timestamp: '1637971200000',
                                            value: '54',
                                        },
                                        {
                                            timestamp: '1638057600000',
                                            value: '54',
                                        },
                                        {
                                            timestamp: '1638144000000',
                                            value: '54',
                                        },
                                        {
                                            timestamp: '1638230400000',
                                            value: '54',
                                        },
                                        {
                                            timestamp: '1638316800000',
                                            value: '54',
                                        },
                                        {
                                            timestamp: '1638403200000',
                                            value: '54',
                                        },
                                        {
                                            timestamp: '1638489600000',
                                            value: '54',
                                        },
                                        {
                                            timestamp: '1638576000000',
                                            value: '54',
                                        },
                                        {
                                            timestamp: '1638662400000',
                                            value: '54',
                                        },
                                        {
                                            timestamp: '1638748800000',
                                            value: '54',
                                        },
                                        {
                                            timestamp: '1638835200000',
                                            value: '54',
                                        },
                                        {
                                            timestamp: '1638921600000',
                                            value: '54',
                                        },
                                        {
                                            timestamp: '1639008000000',
                                            value: '54',
                                        },
                                        {
                                            timestamp: '1639094400000',
                                            value: '54',
                                        },
                                        {
                                            timestamp: '1639180800000',
                                            value: '54',
                                        },
                                        {
                                            timestamp: '1639267200000',
                                            value: '54',
                                        },
                                        {
                                            timestamp: '1639353600000',
                                            value: '54',
                                        },
                                        {
                                            timestamp: '1639440000000',
                                            value: '54',
                                        },
                                        {
                                            timestamp: '1639526400000',
                                            value: '54',
                                        },
                                        {
                                            timestamp: '1639612800000',
                                            value: '54',
                                        },
                                        {
                                            timestamp: '1639699200000',
                                            value: '54',
                                        },
                                        {
                                            timestamp: '1639785600000',
                                            value: '54',
                                        },
                                        {
                                            timestamp: '1639872000000',
                                            value: '54',
                                        },
                                        {
                                            timestamp: '1639958400000',
                                            value: '54',
                                        },
                                        {
                                            timestamp: '1640044800000',
                                            value: '54',
                                        },
                                        {
                                            timestamp: '1640131200000',
                                            value: '54',
                                        },
                                        {
                                            timestamp: '1640217600000',
                                            value: '54',
                                        },
                                        {
                                            timestamp: '1640304000000',
                                            value: '54',
                                        },
                                        {
                                            timestamp: '1640390400000',
                                            value: '54',
                                        },
                                        {
                                            timestamp: '1640476800000',
                                            value: '54',
                                        },
                                        {
                                            timestamp: '1640563200000',
                                            value: '54',
                                        },
                                        {
                                            timestamp: '1640649600000',
                                            value: '54',
                                        },
                                        {
                                            timestamp: '1640736000000',
                                            value: '54',
                                        },
                                        {
                                            timestamp: '1640822400000',
                                            value: '62',
                                        },
                                        {
                                            timestamp: '1640908800000',
                                            value: '62',
                                        },
                                        {
                                            timestamp: '1640995200000',
                                            value: '62',
                                        },
                                        {
                                            timestamp: '1641081600000',
                                            value: '62',
                                        },
                                        {
                                            timestamp: '1641168000000',
                                            value: '62',
                                        },
                                        {
                                            timestamp: '1641254400000',
                                            value: '62',
                                        },
                                        {
                                            timestamp: '1641340800000',
                                            value: '62',
                                        },
                                        {
                                            timestamp: '1641427200000',
                                            value: '62',
                                        },
                                        {
                                            timestamp: '1641513600000',
                                            value: '62',
                                        },
                                        {
                                            timestamp: '1641600000000',
                                            value: '62',
                                        },
                                        {
                                            timestamp: '1641686400000',
                                            value: '62',
                                        },
                                        {
                                            timestamp: '1641772800000',
                                            value: '62',
                                        },
                                        {
                                            timestamp: '1641859200000',
                                            value: '61',
                                        },
                                        {
                                            timestamp: '1641945600000',
                                            value: '61',
                                        },
                                        {
                                            timestamp: '1642032000000',
                                            value: '59',
                                        },
                                        {
                                            timestamp: '1642118400000',
                                            value: '59',
                                        },
                                        {
                                            timestamp: '1642204800000',
                                            value: '59',
                                        },
                                        {
                                            timestamp: '1642291200000',
                                            value: '60',
                                        },
                                        {
                                            timestamp: '1642377600000',
                                            value: '60',
                                        },
                                        {
                                            timestamp: '1642464000000',
                                            value: '60',
                                        },
                                        {
                                            timestamp: '1642550400000',
                                            value: '59',
                                        },
                                        {
                                            timestamp: '1642636800000',
                                            value: '40',
                                        },
                                        {
                                            timestamp: '1642723200000',
                                            value: '40',
                                        },
                                        {
                                            timestamp: '1642809600000',
                                            value: '40',
                                        },
                                        {
                                            timestamp: '1642896000000',
                                            value: '40',
                                        },
                                    ],
                                    metadata: {
                                        eventData: {
                                            indicatorSysid: 'fb007202d7130100b96d45a3ce6103b4',
                                        },
                                        dataSourceLabel: 'Number of open incidents',
                                        series: [
                                            {
                                                label: 'Number of open incidents',
                                                id: 'value',
                                                type: 'value',
                                            },
                                        ],
                                        aggregate: {
                                            fieldType: 'decimal',
                                        },
                                        format: {
                                            unitFormat: '{0}',
                                            frequency: 'daily',
                                            precision: 0,
                                        },
                                    },
                                },
                            },
                        ],
                        showChangeFrom: false,
                        noDebounce: '',
                    },
                    height: 7,
                    width: 10,
                    position: {
                        x: 0,
                        y: 14,
                    },
                },
            ],
        },
        {
            $id: Now.ID['1fb27fd81b3d86906962fe60cd4bcbb8'],
            name: 'Badge Requests History',
            widgets: [
                {
                    $id: Now.ID['1994b71c1b3d86906962fe60cd4bcb98'],
                    component: 'column',
                    componentProps: {
                        extensionType: 'bar',
                        chartVariation: 'side-by-side',
                        showHeader: false,
                        showSubAggregate: false,
                        showBorder: false,
                        bareBorder: true,
                        enableDrilldown: false,
                        numberOfPeriods: 6,
                        refreshFrequency: false,
                        dataSources: [
                            {
                                allowTotalValue: true,
                                indicatorType: '1',
                                isScriptedIndicator: false,
                                label: 'Query Builder Usage',
                                sourceType: 'indicator',
                                uuid: {
                                    indicator: '2ac2bd18eb51211094bbb5d5d8522839',
                                },
                                id: 'aW5kaWNhdG9yMmFjMmJkMThlYjUxMjExMDk0YmJiNWQ1ZDg1MjI4MzkxNjc3MjYzNTU5Njk4',
                            },
                        ],
                        trendBy: {
                            trendByFrequency: 'date',
                            trendByFields: [
                                {
                                    field: 'anything',
                                    metric: 'YVc1a2FXTmhkRzl5TW1Gak1tSmtNVGhsWWpVeE1qRXhNRGswWW1KaU5XUTFaRGcxTWpJNE16a3hOamMzTWpZek5UVTVOams0MTY3NzI2MzU2MDY3Nw==',
                                },
                            ],
                        },
                        metrics: [
                            {
                                dataSource: 'aW5kaWNhdG9yMmFjMmJkMThlYjUxMjExMDk0YmJiNWQ1ZDg1MjI4MzkxNjc3MjYzNTU5Njk4',
                                id: 'YVc1a2FXTmhkRzl5TW1Gak1tSmtNVGhsWWpVeE1qRXhNRGswWW1KaU5XUTFaRGcxTWpJNE16a3hOamMzTWpZek5UVTVOams0MTY3NzI2MzU2MDY3Nw==',
                                aggregateIndicator: '1d7a2073eb21020065deac6aa206fe5c',
                                frequency: 40,
                                axisId: 'primary',
                                frequencyInterval: 'MONTH_PLUS',
                            },
                        ],
                        groupBy: [
                            {
                                maxNumberOfGroups: 10,
                                numberOfGroupsBasedOn: 'NO_OF_GROUP_BASED_ON_PER_METRIC',
                                showOthers: false,
                                hideZeroValues: false,
                                disableRanges: false,
                                groupBy: [
                                    {
                                        dataSource:
                                            'aW5kaWNhdG9yMmFjMmJkMThlYjUxMjExMDk0YmJiNWQ1ZDg1MjI4MzkxNjc3MjYzNTU5Njk4',
                                        groupByField: 'cdc6f11ceb51211094bbb5d5d852283e',
                                    },
                                ],
                            },
                        ],
                        yAxis0Title: 'Number of executions',
                        headerTitle: 'Query builder usage',
                    },
                    height: 22,
                    width: 28,
                    position: {
                        x: 0,
                        y: 0,
                    },
                },
            ],
        },
        {
            $id: Now.ID['dbb27fd81b3d86906962fe60cd4bcbbd'],
            name: 'Badge Requests Volume By Badging Office',
            widgets: [
                {
                    $id: Now.ID['8664b71c1b3d86906962fe60cd4bcbb0'],
                    component: 'image',
                    componentProps: {
                        src: '/now-image-placeholder.jpg',
                        sources: '[]',
                        fit: 'fill',
                        position: 'center center',
                        alt: '',
                    },
                    height: 48,
                    width: 48,
                    position: {
                        x: 0,
                        y: 0,
                    },
                },
            ],
        },
        {
            $id: Now.ID['5fb27fd81b3d86906962fe60cd4bcbc1'],
            name: 'Current Load on Badging Office',
            widgets: [],
        },
        {
            $id: Now.ID['97b27fd81b3d86906962fe60cd4bcbd2'],
            name: 'Badge Requests SLAs',
            widgets: [],
        },
        {
            $id: Now.ID['2bb27fd81b3d86906962fe60cd4bcbd6'],
            name: 'Badge Events Report',
            widgets: [],
        },
        {
            $id: Now.ID['abb27fd81b3d86906962fe60cd4bcbda'],
            name: 'Security Alarms Report',
            widgets: [],
        },
    ],
    visibilities: [
        {
            $id: Now.ID['7b131e988a688e10b94be25a65a86916'],
        },
    ],
})
