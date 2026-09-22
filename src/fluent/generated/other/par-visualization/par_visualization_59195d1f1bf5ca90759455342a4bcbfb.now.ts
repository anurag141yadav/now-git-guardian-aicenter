import { Record } from '@servicenow/sdk/core'

Record({
    $id: Now.ID['59195d1f1bf5ca90759455342a4bcbfb'],
    table: 'par_visualization',
    data: {
        active: 'true',
        certified: 'false',
        macroponent: 'd1f6c60ce95607ea1ef236430d5fdec9',
        name: 'Guardian Access levels Heatmap',
        properties:
            '{"showZero":true,"showDataLabels":true,"showLegend":true,"legendPosition":"bottom","colorConfig":{"type":"default"},"newReporting":false,"additionalGroupByConfig":[],"dataSources":[{"isDatabaseView":false,"allowRealTime":true,"label":"Access Level","sourceType":"table","tableOrViewName":"x_aleen_snguardian_access_level","filterQuery":"","preferredVisualizations":["d24d53f60350de7a652caf3188a46ed2"],"id":"dGFibGV4X2FsZWVuX3NuZ3VhcmRpYW5fYWNjZXNzX2xldmVsMTcxNDQ5MDgzNDMzMw==","dataCategories":["trend","group","simple"]}],"showHeader":true,"showTotalAggregate":false,"showSubAggregate":false,"showFirstGroupAggregate":false,"showSecondGroupAggregate":false,"hideMatrixAggregate":false,"wrapTitle":false,"showHeaderSeparator":true,"headerTitle":"Access Levels Heatmap","headingLevel":2,"showBorder":true,"bareBorder":false,"telemetry":null,"showDataPassthrough":false,"refreshRequest":"","showAdditionalGroupBySelector":false,"dataPassthrough":null,"metrics":[{"dataSource":"dGFibGV4X2FsZWVuX3NuZ3VhcmRpYW5fYWNjZXNzX2xldmVsMTcxNDQ5MDgzNDMzMw==","id":"ZEdGaWJHVjRYMkZzWldWdVgzTnVaM1ZoY21ScFlXNWZZV05qWlhOelgyeGxkbVZzTVRjeE5EUTVNRGd6TkRNek13PT0xNzE0NDkwODM2NDI2","aggregateFunction":"COUNT","numberFormat":{"customFormat":false},"axisId":"primary"}],"groupBy":[{"groupBy":[{"dataSource":"dGFibGV4X2FsZWVuX3NuZ3VhcmRpYW5fYWNjZXNzX2xldmVsMTcxNDQ5MDgzNDMzMw==","groupByField":"criticality","isRange":false,"isChoice":true,"isPaBucket":false}],"categoryIndex":0,"maxNumberOfGroups":10,"numberOfGroupsBasedOn":"NO_OF_GROUP_BASED_ON_PER_METRIC","showOthers":false,"disableRanges":false},{"groupBy":[{"dataSource":"dGFibGV4X2FsZWVuX3NuZ3VhcmRpYW5fYWNjZXNzX2xldmVsMTcxNDQ5MDgzNDMzMw==","groupByField":"system","isRange":false,"isChoice":false,"isPaBucket":false}],"categoryIndex":1,"maxNumberOfGroups":10,"numberOfGroupsBasedOn":"NO_OF_GROUP_BASED_ON_PER_METRIC","showOthers":false,"disableRanges":false}],"sortBy":"name","sortByOrder":"asc","trendBy":null,"showChange":false,"showChangePercentage":false,"showTarget":false,"showForecast":false,"showForecastRange":false,"showTrend":false,"showConfidenceBand":false,"showGapPercentage":false,"showSparkline":false,"showMetricLabel":false,"showThreshold":false,"showComment":false,"followFilters":true,"showFilterIcon":true,"enableRealTimeUpdate":false,"enableDrilldown":true,"enableClickAndStay":false,"enableCustomEmptyState":false,"componentId":"1210q66l","emptyStateIllustration":"no-data","emptyStateHeading":"No data available.","emptyStateContent":"There are no scores available for the selected criteria. Contact your admin for more info.","emptyStateAlignment":"vertical-centered","hideDevSettings":false,"contextMenuActions":[],"showMaximumRange":false,"allowChangeDateRange":false,"showDateRangeByDefault":false,"applyDateRange":false,"numberOfPeriods":3,"showAbsolutePeriod":false,"scoreType":null,"showChangeFrom":"previous","period":"M","dateFormat":"default","noDebounce":""}',
        scheduled_count: '0',
        sys_domain: 'global',
        sys_domain_path: '/',
        type: 'Heatmap',
    },
})
