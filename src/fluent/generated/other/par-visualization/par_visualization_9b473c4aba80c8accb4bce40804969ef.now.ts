import { Record } from '@servicenow/sdk/core'

Record({
    $id: Now.ID['9b473c4aba80c8accb4bce40804969ef'],
    table: 'par_visualization',
    data: {
        active: 'true',
        certified: 'false',
        macroponent: '96abe7e38d8790718022c5630a92176c',
        name: 'Visitors By Type',
        properties:
            '{"applyDateRange":false,"bareBorder":false,"colorConfig":{"type":"chartColor"},"configVersion":"23.0.0-ci-SNAPSHOT","dataLabelsType":"value","dataSources":[{"allowRealTime":true,"dataCategories":["group","simple","trend"],"filterQuery":"","id":"dGFibGV4X2FsZWVuX3NuZ3VhcmRpYW5fdmlzaXRvcjE3NzMyODA4NjExNTg0Mjc4NzM4Ni42MTM5NDEzNQ==","isDatabaseView":false,"preferredVisualizations":["d24d53f60350de7a652caf3188a46ed2"],"sourceType":"table","tableOrViewName":"x_aleen_snguardian_visitor"}],"dateFormat":"default","emptyStateHeading":"No data available.","emptyStateIllustration":"add-data","enableCustomEmptyState":false,"enableDrilldown":true,"enableRealTimeUpdate":false,"filterConfigurations":"@state.parFilters","followFilters":true,"groupBy":[{"groupBy":[{"dataSource":"dGFibGV4X2FsZWVuX3NuZ3VhcmRpYW5fdmlzaXRvcjE3NzMyODA4NjExNTg0Mjc4NzM4Ni42MTM5NDEzNQ==","groupByField":"visitor_type","isChoice":true,"isPaBucket":false,"isRange":false}],"maxNumberOfGroups":"ALL","numberOfGroupsBasedOn":"NO_OF_GROUP_BASED_ON_PER_METRIC","showOthers":true}],"headerTitle":"Visitors By Type","hideMatrixAggregate":false,"legendExpandToFit":false,"legendHorizontalAlignment":"start","metrics":[{"aggregateFunction":"COUNT","axisId":"primary","dataSource":"dGFibGV4X2FsZWVuX3NuZ3VhcmRpYW5fdmlzaXRvcjE3NzMyODA4NjExNTg0Mjc4NzM4Ni42MTM5NDEzNQ==","id":"ZEdGaWJHVjRYMkZzWldWdVgzTnVaM1ZoY21ScFlXNWZkbWx6YVhSdmNqRTNOek15T0RBNE5qRXhOVGcwTWpjNE56TTROaTQyTVRNNU5ERXpOUT09MTc3MzI4MDg2MTE1OTQ4MTgxOTY5LjQwNTkyOTc=","numberFormat":{"customFormat":false},"durationFormat":{"customFormat":false},"dateFormat":{"customFormat":false},"stringFormat":{"customFormat":false}}],"newReporting":false,"numberOfPeriods":2.0,"period":"M","registerOrientation":"horizontal","registerPosition":"top","showAbsolutePeriod":false,"showBorder":true,"showChange":false,"showChangeFrom":"previous","showChangePercentage":false,"showComment":false,"showConfidenceBand":false,"showDataLabels":true,"showDataPassthrough":false,"showFilterIcon":true,"showFirstGroupAggregate":false,"showForecast":false,"showForecastRange":false,"showGapPercentage":false,"showHeader":true,"showHeaderSeparator":true,"showMaximumRange":false,"showMetricLabel":false,"showRegister":false,"showRegisterOnSameLine":false,"showRegisterPercentage":true,"showRegisterValue":true,"showSecondGroupAggregate":false,"showSparkline":false,"showSubAggregate":false,"showTarget":false,"showThreshold":false,"showTotalAggregate":false,"showTrend":false,"sortBy":"value","sortByOrder":"desc","telemetry":"null","truncationType":"start","wrapTitle":true}',
        sys_domain: 'global',
        sys_domain_path: '/',
        type: 'Pie',
    },
})
