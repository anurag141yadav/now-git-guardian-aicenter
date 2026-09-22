import { Record } from '@servicenow/sdk/core'

Record({
    $id: Now.ID['6fbf2971919e44d7d95cbabf74742b66'],
    table: 'par_visualization',
    data: {
        active: 'true',
        certified: 'false',
        macroponent: '2b1c080881e05dc63b917044290b233f',
        name: 'Cardholder with Temp Badge',
        properties:
            '{"columns":"number,valid_from,valid_to,provisioning_action,provisioning_status,asset,status","fixedQuery":"","groupByField":"identity","hideColumnFiltering":false,"hideColumnGrouping":false,"hideColumnReorder":false,"hideColumnResizing":false,"hideColumnSorting":false,"hideDotwalk":false,"hideEmptyStateImage":false,"hideHeader":false,"hideHighlightContent":false,"hideHighlightedValues":false,"hideInlineEditing":false,"hideLastRefreshedText":true,"hideLinks":false,"hidePersonalization":true,"hideRefreshButton":false,"hideRowSelector":false,"hideTitle":false,"hideTitleRowCount":false,"hideViewAll":false,"highlightContent":{"color":"","patterns":[]},"highlightedValueConfigId":"","limit":20,"listTitle":"Cardholder with Temp Badge","maxCharLimit":4000,"maxColumns":7.0,"overrideWordWrapUserPref":false,"query":"asset.type.code=TEMP_BADGE^status=2a7f0ed51bbc8210759455342a4bcbe9","refreshRequested":"","table":"x_aleen_snguardian_identity_asset","wordWrap":false}',
        sys_domain: 'global',
        sys_domain_path: '/',
        type: 'List - Simple',
    },
})
