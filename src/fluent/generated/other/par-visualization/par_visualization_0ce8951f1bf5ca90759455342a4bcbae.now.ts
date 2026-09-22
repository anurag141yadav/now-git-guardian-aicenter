import { Record } from '@servicenow/sdk/core'

Record({
    $id: Now.ID['0ce8951f1bf5ca90759455342a4bcbae'],
    table: 'par_visualization',
    data: {
        active: 'true',
        certified: 'false',
        macroponent: 'a2b0596cec6b9d49dd1ff9bf76b5084b',
        name: 'Guardian Request Prov Errors',
        properties:
            '{"selectedElements":[],"configVersion":"23.0.0-ci-SNAPSHOT","showDataLabels":false,"dataLabelsType":"both","truncationType":"end","showRegister":true,"registerPosition":"right","registerOrientation":"horizontal","showRegisterOnSameLine":false,"showRegisterValue":true,"legendHorizontalAlignment":"center","legendExpandToFit":false,"showRegisterPercentage":true,"colorConfig":{"type":"default"},"newReporting":false,"additionalGroupByConfig":[],"dataSources":[{"isDatabaseView":false,"allowRealTime":true,"label":"Request","sourceType":"table","tableOrViewName":"x_aleen_snguardian_request","filterQuery":"status=4c8f8ed51bbc8210759455342a4bcb7b","preferredVisualizations":["d24d53f60350de7a652caf3188a46ed2"],"id":"dGFibGV4X2FsZWVuX3NuZ3VhcmRpYW5fcmVxdWVzdDE3MTQ0OTAxMzg1MTI=","dataCategories":["trend","group","simple"]}],"showHeader":true,"showTotalAggregate":false,"showSubAggregate":false,"showFirstGroupAggregate":false,"showSecondGroupAggregate":false,"hideMatrixAggregate":false,"wrapTitle":false,"showHeaderSeparator":true,"headerTitle":"Request Provision Errors by Type","headingLevel":2,"showBorder":true,"bareBorder":false,"telemetry":null,"showDataPassthrough":false,"refreshRequest":"","showAdditionalGroupBySelector":false,"dataPassthrough":null,"metrics":[{"dataSource":"dGFibGV4X2FsZWVuX3NuZ3VhcmRpYW5fcmVxdWVzdDE3MTQ0OTAxMzg1MTI=","id":"ZEdGaWJHVjRYMkZzWldWdVgzTnVaM1ZoY21ScFlXNWZjbVZ4ZFdWemRERTNNVFEwT1RBeE16ZzFNVEk9MTcxNDQ5MDE0MTA3OA==","aggregateFunction":"COUNT","numberFormat":{"customFormat":false},"axisId":"primary"}],"groupBy":[{"groupBy":[{"dataSource":"dGFibGV4X2FsZWVuX3NuZ3VhcmRpYW5fcmVxdWVzdDE3MTQ0OTAxMzg1MTI=","groupByField":"request_type","isRange":false,"isChoice":false,"isPaBucket":false}],"maxNumberOfGroups":10,"numberOfGroupsBasedOn":"NO_OF_GROUP_BASED_ON_PER_METRIC","showOthers":false,"disableRanges":false}],"sortBy":"value","sortByOrder":"desc","trendBy":null,"showChange":false,"showChangePercentage":false,"showTarget":false,"showForecast":false,"showForecastRange":false,"showTrend":false,"showConfidenceBand":false,"showGapPercentage":false,"showSparkline":false,"showMetricLabel":false,"showThreshold":false,"showComment":false,"showTotalValue":false,"followFilters":true,"showFilterIcon":true,"enableRealTimeUpdate":false,"enableDrilldown":true,"enableClickAndStay":false,"enableCustomEmptyState":false,"componentId":"cyyqh6bl","emptyStateIllustration":"no-data","emptyStateHeading":"No data available.","emptyStateContent":"There are no scores available for the selected criteria. Contact your admin for more info.","emptyStateAlignment":"vertical-centered","hideDevSettings":false,"contextMenuActions":[],"showMaximumRange":false,"allowChangeDateRange":false,"showDateRangeByDefault":false,"applyDateRange":false,"numberOfPeriods":3,"showAbsolutePeriod":false,"scoreType":null,"showChangeFrom":"previous","period":"M","dateFormat":"default","noDebounce":""}',
        scheduled_count: '0',
        sys_domain: 'global',
        sys_domain_path: '/',
        type: 'Donut',
    },
})
