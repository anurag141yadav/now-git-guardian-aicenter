import { Record } from '@servicenow/sdk/core'

Record({
    $id: Now.ID['ac5075abf4a5093d8467774554abc901'],
    table: 'par_visualization',
    data: {
        active: 'true',
        certified: 'false',
        macroponent: '2b1c080881e05dc63b917044290b233f',
        name: 'Cardholder With Active Badges',
        properties:
            '{"columns":"number,valid_from,valid_to,provisioning_action,provisioning_status","fixedQuery":"","groupByField":"identity","hideColumnFiltering":false,"hideColumnGrouping":false,"hideColumnReorder":false,"hideColumnResizing":false,"hideColumnSorting":false,"hideDotwalk":false,"hideEmptyStateImage":false,"hideHeader":false,"hideHighlightContent":false,"hideHighlightedValues":false,"hideInlineEditing":false,"hideLastRefreshedText":true,"hideLinks":false,"hidePersonalization":true,"hideRefreshButton":false,"hideRowSelector":false,"hideTitle":false,"hideTitleRowCount":false,"hideViewAll":false,"highlightContent":{"color":"","patterns":[]},"highlightedValueConfigId":"","limit":20,"listTitle":"Cardholder With Active Badges","maxCharLimit":4000,"maxColumns":5.0,"overrideWordWrapUserPref":false,"query":"asset.type.code=PERMANENT_BADGE^status=2a7f0ed51bbc8210759455342a4bcbe9^ORstatus=627f0ed51bbc8210759455342a4bcbeb","refreshRequested":"","table":"x_aleen_snguardian_identity_asset","wordWrap":false}',
        sys_domain: 'global',
        sys_domain_path: '/',
        type: 'List - Simple',
    },
})
