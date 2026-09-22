import { Dashboard } from '@servicenow/sdk/core'

Dashboard({
    $id: Now.ID['f91b0fe6077502d036efaed553c36fe9'],
    name: 'Badging Office Home',
    tabs: [
        {
            $id: Now.ID['391b0fe6d97502d0b8db91c13b3f50e9'],
            name: 'Home',
            widgets: [
                {
                    $id: Now.ID['3ecd1b2e1bb502d06962fe60cd4bcb5b'],
                    component: 'single-score',
                    componentProps: {
                        scoreSize: 'md',
                        scoreIcon: 'chart-bar-column-outline',
                        iconStyle: 'no-background',
                        showZero: true,
                        colorConfig: {
                            type: 'singleColor',
                            values: [
                                {
                                    color: '65b30254a9fe3dba00b44ce0710382b3',
                                    iconColor: '65b30254a9fe3dba00b44ce0710382b3',
                                    metric: 'ZEdGaWJHVjRYMkZzWldWdVgzTnVaM1ZoY21ScFlXNWZjbVZ4ZFdWemRERTNNVFEwTnpFNE16RTNNVFE9MTcxNDQ3MTgzMzgxMg==',
                                },
                            ],
                        },
                        dataSources: [
                            {
                                label: 'Request',
                                sourceType: 'table',
                                tableOrViewName: 'x_aleen_snguardian_request',
                                filterQuery:
                                    'request_type=a1b7dec81b284e106962fe60cd4bcb6c^ORrequest_type=53ec2bb21bec0650759455342a4bcba3^ORrequest_type=809e7b121b3e81108dcc755e034bcbcc',
                                id: 'dGFibGV4X2FsZWVuX3NuZ3VhcmRpYW5fcmVxdWVzdDE3MTQ0NzE4MzE3MTQ=',
                            },
                        ],
                        showSubAggregate: false,
                        showHeaderSeparator: true,
                        headerTitle: 'Total # Requests',
                        refreshRequest: '',
                        metrics: [
                            {
                                dataSource: 'dGFibGV4X2FsZWVuX3NuZ3VhcmRpYW5fcmVxdWVzdDE3MTQ0NzE4MzE3MTQ=',
                                id: 'ZEdGaWJHVjRYMkZzWldWdVgzTnVaM1ZoY21ScFlXNWZjbVZ4ZFdWemRERTNNVFEwTnpFNE16RTNNVFE9MTcxNDQ3MTgzMzgxMg==',
                                aggregateFunction: 'COUNT',
                                axisId: 'primary',
                            },
                        ],
                        showChangeFrom: false,
                        noDebounce: '',
                    },
                    height: 8,
                    width: 12,
                    position: {
                        x: 0,
                        y: 0,
                    },
                },
                {
                    $id: Now.ID['76cddb2e1bb502d06962fe60cd4bcbea'],
                    component: 'single-score',
                    componentProps: {
                        scoreSize: 'md',
                        scoreIcon: 'chart-relative-compare-outline',
                        iconStyle: 'no-background',
                        showZero: true,
                        colorConfig: {
                            type: 'singleColor',
                            values: [
                                {
                                    color: '65b30254a9fe3dba01b9293f1d4d705d',
                                    iconColor: '65b30254a9fe3dba01b9293f1d4d705d',
                                    metric: 'ZEdGaWJHVjRYMkZzWldWdVgzTnVaM1ZoY21ScFlXNWZaM1ZoY21ScFlXNWliMkZ3Y0hKdmRtRnNkbWxsZHpFM01UUTBOekEyT0RjeU56QT0xNzE0NDcwNjg5NjAw',
                                },
                            ],
                        },
                        dataSources: [
                            {
                                label: 'GuardianBOApprovalView',
                                sourceType: 'table',
                                tableOrViewName: 'x_aleen_snguardian_guardianboapprovalview',
                                filterQuery:
                                    'req_request_type=a1b7dec81b284e106962fe60cd4bcb6c^ORreq_request_type=f07913481b6c4e106962fe60cd4bcb32^ORreq_request_type=53ec2bb21bec0650759455342a4bcba3^ORreq_request_type=0b4bdbc81b6c4e106962fe60cd4bcbbe^approval_approverDYNAMIC90d1921e5f510100a9ad2572f2b477fe^approval_state=requested',
                                id: 'dGFibGV4X2FsZWVuX3NuZ3VhcmRpYW5fZ3VhcmRpYW5ib2FwcHJvdmFsdmlldzE3MTQ0NzA2ODcyNzA=',
                            },
                        ],
                        showSubAggregate: false,
                        showHeaderSeparator: true,
                        headerTitle: 'Open Requests (My Office)',
                        refreshRequest: '',
                        metrics: [
                            {
                                dataSource:
                                    'dGFibGV4X2FsZWVuX3NuZ3VhcmRpYW5fZ3VhcmRpYW5ib2FwcHJvdmFsdmlldzE3MTQ0NzA2ODcyNzA=',
                                id: 'ZEdGaWJHVjRYMkZzWldWdVgzTnVaM1ZoY21ScFlXNWZaM1ZoY21ScFlXNWliMkZ3Y0hKdmRtRnNkbWxsZHpFM01UUTBOekEyT0RjeU56QT0xNzE0NDcwNjg5NjAw',
                                aggregateFunction: 'COUNT',
                                axisId: 'primary',
                            },
                        ],
                        followFilters: false,
                        showFilterIcon: false,
                        showChangeFrom: false,
                        noDebounce: '',
                        refreshFrequency: '60',
                    },
                    height: 8,
                    width: 12,
                    position: {
                        x: 12,
                        y: 0,
                    },
                },
                {
                    $id: Now.ID['7acddb2e1bb502d06962fe60cd4bcbee'],
                    component: 'single-score',
                    componentProps: {
                        scoreSize: 'sm',
                        scoreIcon: 'clock-outline',
                        iconStyle: 'no-background',
                        showZero: true,
                        colorConfig: {
                            type: 'singleColor',
                            values: [
                                {
                                    color: '65b30218a9fe3dba017f94ef07aa661c',
                                    iconColor: '65b30395a9fe3dba0161892ceab91c5d',
                                    metric: 'ZEdGaWJHVjRYMkZzWldWdVgzTnVaM1ZoY21ScFlXNWZaM1ZoY21ScFlXNWliMkZ3Y0hKdmRtRnNkbWxsZHpFM01UUTBOelEyT1RVeE5qZz0xNzE0NDc0Njk3NDk0',
                                },
                            ],
                        },
                        dataSources: [
                            {
                                label: 'GuardianBOApprovalView',
                                sourceType: 'table',
                                tableOrViewName: 'x_aleen_snguardian_guardianboapprovalview',
                                filterQuery: 'approval_state=approved',
                                id: 'dGFibGV4X2FsZWVuX3NuZ3VhcmRpYW5fZ3VhcmRpYW5ib2FwcHJvdmFsdmlldzE3MTQ0NzQ2OTUxNjg=',
                            },
                        ],
                        showSubAggregate: false,
                        showHeaderSeparator: true,
                        headerTitle: 'SLA',
                        refreshRequest: '',
                        metrics: [
                            {
                                dataSource:
                                    'dGFibGV4X2FsZWVuX3NuZ3VhcmRpYW5fZ3VhcmRpYW5ib2FwcHJvdmFsdmlldzE3MTQ0NzQ2OTUxNjg=',
                                id: 'ZEdGaWJHVjRYMkZzWldWdVgzTnVaM1ZoY21ScFlXNWZaM1ZoY21ScFlXNWliMkZ3Y0hKdmRtRnNkbWxsZHpFM01UUTBOelEyT1RVeE5qZz0xNzE0NDc0Njk3NDk0',
                                aggregateFunction: 'AVG',
                                axisId: 'primary',
                                aggregateField: 'process_time',
                                durationFormat: {
                                    customFormat: false,
                                },
                            },
                        ],
                        showChangeFrom: false,
                        noDebounce: '',
                    },
                    height: 8,
                    width: 11,
                    position: {
                        x: 36,
                        y: 0,
                    },
                },
                {
                    $id: Now.ID['7ecddb2e1bb502d06962fe60cd4bcbf2'],
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
                                    color: '0c2b2cd75b712110e5ba6e8a1d81c7ba',
                                    metric: 'ZEdGaWJHVjRYMkZzWldWdVgzTnVaM1ZoY21ScFlXNWZaM1ZoY21ScFlXNWliMkZ3Y0hKdmRtRnNkbWxsZHpFM01UUTBOelEzTlRVeE1qTT0xNzE0NDc0NzU3OTc3',
                                },
                            ],
                        },
                        dataSources: [
                            {
                                label: 'GuardianBOApprovalView',
                                sourceType: 'table',
                                tableOrViewName: 'x_aleen_snguardian_guardianboapprovalview',
                                filterQuery:
                                    'approval_state=approved^approval_sys_updated_onONToday@javascript:gs.beginningOfToday()@javascript:gs.endOfToday()',
                                id: 'dGFibGV4X2FsZWVuX3NuZ3VhcmRpYW5fZ3VhcmRpYW5ib2FwcHJvdmFsdmlldzE3MTQ0NzQ3NTUxMjM=',
                            },
                        ],
                        showSubAggregate: false,
                        showHeaderSeparator: true,
                        headerTitle: 'Requests Approved by Office Today',
                        metrics: [
                            {
                                dataSource:
                                    'dGFibGV4X2FsZWVuX3NuZ3VhcmRpYW5fZ3VhcmRpYW5ib2FwcHJvdmFsdmlldzE3MTQ0NzQ3NTUxMjM=',
                                id: 'ZEdGaWJHVjRYMkZzWldWdVgzTnVaM1ZoY21ScFlXNWZaM1ZoY21ScFlXNWliMkZ3Y0hKdmRtRnNkbWxsZHpFM01UUTBOelEzTlRVeE1qTT0xNzE0NDc0NzU3OTc3',
                                aggregateFunction: 'COUNT',
                                axisId: 'primary',
                            },
                        ],
                        showChangeFrom: false,
                        noDebounce: '',
                    },
                    height: 8,
                    width: 12,
                    position: {
                        x: 0,
                        y: 8,
                    },
                },
                {
                    $id: Now.ID['b2cd1f2e1bb502d06962fe60cd4bcb33'],
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
                                    color: '65b302c2a9fe3dba017e38e9bad56694',
                                    iconColor: '65b302c2a9fe3dba017e38e9bad56694',
                                    metric: 'ZEdGaWJHVjRYMkZzWldWdVgzTnVaM1ZoY21ScFlXNWZjbVZ4ZFdWemRERTNNVFEwTnpFNE9Ua3lOalk9MTcxNDQ3MTkwMTAxMg==',
                                },
                            ],
                        },
                        dataSources: [
                            {
                                label: 'Request',
                                sourceType: 'table',
                                tableOrViewName: 'x_aleen_snguardian_request',
                                filterQuery: 'status=4c8f8ed51bbc8210759455342a4bcb7b',
                                id: 'dGFibGV4X2FsZWVuX3NuZ3VhcmRpYW5fcmVxdWVzdDE3MTQ0NzE4OTkyNjY=',
                            },
                        ],
                        showSubAggregate: false,
                        showHeaderSeparator: true,
                        headerTitle: 'Provisioning Errors',
                        metrics: [
                            {
                                dataSource: 'dGFibGV4X2FsZWVuX3NuZ3VhcmRpYW5fcmVxdWVzdDE3MTQ0NzE4OTkyNjY=',
                                id: 'ZEdGaWJHVjRYMkZzWldWdVgzTnVaM1ZoY21ScFlXNWZjbVZ4ZFdWemRERTNNVFEwTnpFNE9Ua3lOalk9MTcxNDQ3MTkwMTAxMg==',
                                aggregateFunction: 'COUNT',
                                axisId: 'primary',
                            },
                        ],
                        showChangeFrom: false,
                        noDebounce: '',
                        id: 'colorConfig',
                        value: {
                            type: 'singleColor',
                            values: [
                                {
                                    color: '65b302c2a9fe3dba017e38e9bad56694',
                                    iconColor: '65b302c2a9fe3dba017e38e9bad56694',
                                    metric: 'ZEdGaWJHVjRYMkZzWldWdVgzTnVaM1ZoY21ScFlXNWZjbVZ4ZFdWemRERTNNVFEwTnpFNE9Ua3lOalk9MTcxNDQ3MTkwMTAxMg==',
                                },
                            ],
                        },
                        propLabel: 'Colors',
                    },
                    height: 8,
                    width: 12,
                    position: {
                        x: 0,
                        y: 16,
                    },
                },
                {
                    $id: Now.ID['d06bf4db2bd15250d4dffd74ce91bf57'],
                    component: 'list',
                    componentProps: {
                        dataSources: [
                            {
                                filterQuery:
                                    'provisioning_status=458fced51bbc8210759455342a4bcb45^active=true^ORDERBYDESCnumber',
                                id: '70769947fb178b142ce8f46b5eefdc34',
                                sourceType: 'table',
                                tableOrViewName: 'x_aleen_snguardian_identity_asset',
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
                        table: 'x_aleen_snguardian_identity_asset',
                        headerTitle: 'All Identity Asset',
                        columns: '',
                        showRecordCount: true,
                    },
                    height: 15,
                    width: 48,
                    position: {
                        x: 0,
                        y: 31,
                    },
                },
                {
                    $id: Now.ID['f6cddb2e1bb502d06962fe60cd4bcbec'],
                    component: 'single-score',
                    componentProps: {
                        scoreSize: 'md',
                        scoreIcon: 'user-verify-outline',
                        iconStyle: 'no-background',
                        showZero: true,
                        colorConfig: {
                            type: 'singleColor',
                            values: [
                                {
                                    color: '65b30268a9fe3dba004a22b709993a1a',
                                    metric: 'ZEdGaWJHVjRYMkZzWldWdVgzTnVaM1ZoY21ScFlXNWZaM1ZoY21ScFlXNWliMkZ3Y0hKdmRtRnNkbWxsZHpFM01UUTBOekE0TVRrek1EYz0xNzE0NDcwODIxNTkx',
                                },
                            ],
                        },
                        dataSources: [
                            {
                                label: 'GuardianBOApprovalView',
                                sourceType: 'table',
                                tableOrViewName: 'x_aleen_snguardian_guardianboapprovalview',
                                filterQuery:
                                    'req_request_type=a1b7dec81b284e106962fe60cd4bcb6c^ORreq_request_type=f07913481b6c4e106962fe60cd4bcb32^ORreq_request_type=0b4bdbc81b6c4e106962fe60cd4bcbbe^ORreq_request_type=53ec2bb21bec0650759455342a4bcba3^approval_state=requested',
                                id: 'dGFibGV4X2FsZWVuX3NuZ3VhcmRpYW5fZ3VhcmRpYW5ib2FwcHJvdmFsdmlldzE3MTQ0NzA4MTkzMDc=',
                            },
                        ],
                        showSubAggregate: false,
                        showHeaderSeparator: true,
                        headerTitle: 'Open Requests (All Badge Offices)',
                        refreshRequest: '',
                        metrics: [
                            {
                                dataSource:
                                    'dGFibGV4X2FsZWVuX3NuZ3VhcmRpYW5fZ3VhcmRpYW5ib2FwcHJvdmFsdmlldzE3MTQ0NzA4MTkzMDc=',
                                id: 'ZEdGaWJHVjRYMkZzWldWdVgzTnVaM1ZoY21ScFlXNWZaM1ZoY21ScFlXNWliMkZ3Y0hKdmRtRnNkbWxsZHpFM01UUTBOekE0TVRrek1EYz0xNzE0NDcwODIxNTkx',
                                aggregateFunction: 'COUNT',
                                axisId: 'primary',
                            },
                        ],
                        showChangeFrom: false,
                        noDebounce: '',
                        refreshFrequency: '60',
                    },
                    height: 8,
                    width: 12,
                    position: {
                        x: 24,
                        y: 0,
                    },
                },
                {
                    $id: Now.ID['facddb2e1bb502d06962fe60cd4bcbf0'],
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
                                    color: '65b30236a9fe3dba003564a15808d29f',
                                    iconColor: '65b30236a9fe3dba003564a15808d29f',
                                    metric: 'ZEdGaWJHVjRYMkZzWldWdVgzTnVaM1ZoY21ScFlXNWZaM1ZoY21ScFlXNWliMkZ3Y0hKdmRtRnNkbWxsZHpFM01UUTBOekUxTkRrME9EZz0xNzE0NDcxNTUyMjcw',
                                },
                            ],
                        },
                        dataSources: [
                            {
                                label: 'GuardianBOApprovalView',
                                sourceType: 'table',
                                tableOrViewName: 'x_aleen_snguardian_guardianboapprovalview',
                                filterQuery:
                                    'approval_state=approved^approval_sys_updated_on>javascript:gs.endOfToday()',
                                id: 'dGFibGV4X2FsZWVuX3NuZ3VhcmRpYW5fZ3VhcmRpYW5ib2FwcHJvdmFsdmlldzE3MTQ0NzE1NDk0ODg=',
                            },
                        ],
                        showSubAggregate: false,
                        showHeaderSeparator: true,
                        headerTitle: '# Requests Approved by Me (Today)',
                        refreshRequest: '',
                        metrics: [
                            {
                                dataSource:
                                    'dGFibGV4X2FsZWVuX3NuZ3VhcmRpYW5fZ3VhcmRpYW5ib2FwcHJvdmFsdmlldzE3MTQ0NzE1NDk0ODg=',
                                id: 'ZEdGaWJHVjRYMkZzWldWdVgzTnVaM1ZoY21ScFlXNWZaM1ZoY21ScFlXNWliMkZ3Y0hKdmRtRnNkbWxsZHpFM01UUTBOekUxTkRrME9EZz0xNzE0NDcxNTUyMjcw',
                                aggregateFunction: 'COUNT',
                                axisId: 'primary',
                            },
                        ],
                        showChangeFrom: false,
                        noDebounce: '',
                    },
                    height: 7,
                    width: 12,
                    position: {
                        x: 0,
                        y: 24,
                    },
                },
                {
                    $id: Now.ID['fd1b0fe6707502d0b9697da5720b67e8'],
                    component: 'list',
                    componentProps: {
                        dataSources: [
                            {
                                filterQuery:
                                    'state=requested^active=true^state=requested^approverDYNAMIC90d1921e5f510100a9ad2572f2b477fe',
                                id: '45769947fb178b142ce8f46b5eefdc44',
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
                        table: 'sysapproval_approver',
                        headerTitle: 'Pending Approvals',
                        columns:
                            'sysapproval,approver,state,sysapproval.ref_x_aleen_snguardian_request.request_type,sysapproval.ref_sc_request.requested_for,sys_created_on',
                        showRecordCount: true,
                    },
                    height: 23,
                    width: 35,
                    position: {
                        x: 13,
                        y: 8,
                    },
                },
            ],
        },
    ],
    visibilities: [
        {
            $id: Now.ID['3d1b0fe6847502d09b2dc7376f06a5e8'],
            experience: 'f51b0fe67e7502d09df6f61979a51bf0',
        },
    ],
})
