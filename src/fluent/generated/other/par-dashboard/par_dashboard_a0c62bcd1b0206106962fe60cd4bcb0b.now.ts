import { Dashboard } from '@servicenow/sdk/core'

Dashboard({
    $id: Now.ID['a0c62bcd1b0206106962fe60cd4bcb0b'],
    name: 'Badge Events Report',
    description: 'Badge Events Dashboard',
    tabs: [
        {
            $id: Now.ID['e4c6e3011b4206106962fe60cd4bcb5a'],
            name: 'Tab',
            widgets: [
                {
                    $id: Now.ID['5f0763011b4206106962fe60cd4bcbd7'],
                    component: 'area',
                    componentProps: {
                        yAxisStyle: 'default',
                        extensionType: 'area',
                        dataSources: [
                            {
                                label: 'Event',
                                sourceType: 'table',
                                tableOrViewName: 'x_aleen_snguardian_event',
                                filterQuery:
                                    'type=CHECKIN^ORtype=CHECKOUT^event_date_time>=javascript:gs.beginningOfLast30Minutes()',
                                id: 'dGFibGV4X2FsZWVuX3NuZ3VhcmRpYW5fZXZlbnQxNzE1MDY3MjAzNTE5',
                            },
                        ],
                        showSubAggregate: false,
                        showHeaderSeparator: true,
                        headerTitle: 'Check in Checkout Dashboard',
                        dataCategory: 'group',
                        refreshRequest: '',
                        metrics: [
                            {
                                dataSource: 'dGFibGV4X2FsZWVuX3NuZ3VhcmRpYW5fZXZlbnQxNzE1MDY3MjAzNTE5',
                                id: 'ZEdGaWJHVjRYMkZzWldWdVgzTnVaM1ZoY21ScFlXNWZaWFpsYm5ReE56RTFNRFkzTWpBek5URTUxNzE1MDY3MjA1MTEx',
                                aggregateFunction: 'COUNT',
                                axisId: 'primary',
                            },
                        ],
                        groupBy: [
                            {
                                groupBy: [
                                    {
                                        dataSource: 'dGFibGV4X2FsZWVuX3NuZ3VhcmRpYW5fZXZlbnQxNzE1MDY3MjAzNTE5',
                                        groupByField: 'type',
                                        metric: 'ZEdGaWJHVjRYMkZzWldWdVgzTnVaM1ZoY21ScFlXNWZaWFpsYm5ReE56RTFNRFkzTWpBek5URTUxNzE1MDY3MjA1MTEx',
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
                                    metric: 'ZEdGaWJHVjRYMkZzWldWdVgzTnVaM1ZoY21ScFlXNWZaWFpsYm5ReE56RTFNRFkzTWpBek5URTUxNzE1MDY3MjA1MTEx',
                                },
                            ],
                        },
                        refreshFrequency: false,
                        noDebounce: '',
                    },
                    height: 27,
                    width: 48,
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
            $id: Now.ID['70c6e3011b4206106962fe60cd4bcb5f'],
            experience: 'f51b0fe67e7502d09df6f61979a51bf0',
        },
    ],
})
