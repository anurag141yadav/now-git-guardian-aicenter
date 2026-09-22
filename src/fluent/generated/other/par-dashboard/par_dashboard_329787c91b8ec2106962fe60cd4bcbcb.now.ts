import { Dashboard } from '@servicenow/sdk/core'

Dashboard({
    $id: Now.ID['329787c91b8ec2106962fe60cd4bcbcb'],
    name: 'SOC Incident Report',
    description: 'SOC Incident Report',
    tabs: [
        {
            $id: Now.ID['4b97c30d1b8ec2106962fe60cd4bcbf2'],
            name: 'Tab',
            widgets: [
                {
                    $id: Now.ID['eb98834d1b8ec2106962fe60cd4bcbea'],
                    component: 'column',
                    componentProps: {
                        yAxisStyle: 'default',
                        extensionType: 'bar',
                        dataSources: [
                            {
                                label: 'Event',
                                sourceType: 'table',
                                tableOrViewName: 'x_aleen_snguardian_event',
                                filterQuery:
                                    'type!=CHECKIN^type!=CHECKOUT^event_date_time>=javascript:gs.beginningOfLast30Minutes()',
                                id: 'dGFibGV4X2FsZWVuX3NuZ3VhcmRpYW5fZXZlbnQxNzE1MDY3NjExNjY5',
                            },
                        ],
                        showSubAggregate: false,
                        showHeaderSeparator: true,
                        headerTitle: 'Incidents',
                        dataCategory: 'group',
                        refreshRequest: '',
                        metrics: [
                            {
                                dataSource: 'dGFibGV4X2FsZWVuX3NuZ3VhcmRpYW5fZXZlbnQxNzE1MDY3NjExNjY5',
                                id: 'ZEdGaWJHVjRYMkZzWldWdVgzTnVaM1ZoY21ScFlXNWZaWFpsYm5ReE56RTFNRFkzTmpFeE5qWTUxNzE1MDY3NjEzMTYz',
                                aggregateFunction: 'COUNT',
                                axisId: 'primary',
                            },
                        ],
                        groupBy: [
                            {
                                groupBy: [
                                    {
                                        dataSource: 'dGFibGV4X2FsZWVuX3NuZ3VhcmRpYW5fZXZlbnQxNzE1MDY3NjExNjY5',
                                        groupByField: 'type',
                                        metric: 'ZEdGaWJHVjRYMkZzWldWdVgzTnVaM1ZoY21ScFlXNWZaWFpsYm5ReE56RTFNRFkzTmpFeE5qWTUxNzE1MDY3NjEzMTYz',
                                    },
                                ],
                                maxNumberOfGroups: 'ALL',
                                numberOfGroupsBasedOn: 'NO_OF_GROUP_BASED_ON_PER_METRIC',
                                showOthers: false,
                                hideZeroValues: false,
                                disableRanges: false,
                            },
                        ],
                        sortBy: 'value',
                        trendBy: {
                            trendByFrequency: 'minute',
                            trendByMinuteInterval: 1,
                            trendByFields: [
                                {
                                    field: 'event_date_time',
                                    metric: 'ZEdGaWJHVjRYMkZzWldWdVgzTnVaM1ZoY21ScFlXNWZaWFpsYm5ReE56RTFNRFkzTmpFeE5qWTUxNzE1MDY3NjEzMTYz',
                                },
                            ],
                        },
                        refreshFrequency: false,
                        noDebounce: '',
                    },
                    height: 28,
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
            $id: Now.ID['8397c30d1b8ec2106962fe60cd4bcbf7'],
            experience: 'f51b0fe67e7502d09df6f61979a51bf0',
        },
    ],
})
