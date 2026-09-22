import { Record } from '@servicenow/sdk/core'

Record({
    $id: Now.ID['7f2b92b921f5bbaca6772864ed012ef2'],
    table: 'par_visualization',
    data: {
        active: 'true',
        certified: 'false',
        macroponent: '2b1c080881e05dc63b917044290b233f',
        name: 'Access Levels without Owners',
        properties:
            '{"columns":{"left":"acl_name,acl_system,ao_type,acl_criticality,acl_criticality","right":"","length":59,"isFlat":true},"fixedQuery":"","groupByField":"acl_system","hideColumnFiltering":false,"hideColumnGrouping":false,"hideColumnReorder":false,"hideColumnResizing":false,"hideColumnSorting":false,"hideDotwalk":false,"hideEmptyStateImage":false,"hideHeader":false,"hideHighlightContent":false,"hideHighlightedValues":false,"hideInlineEditing":false,"hideLastRefreshedText":true,"hideLinks":false,"hidePersonalization":true,"hideRefreshButton":false,"hideRowSelector":false,"hideTitle":false,"hideTitleRowCount":false,"hideViewAll":false,"highlightContent":{"color":"","patterns":[]},"highlightedValueConfigId":"","limit":20,"listTitle":"Access Levels without Owners","maxCharLimit":4000,"maxColumns":5.0,"overrideWordWrapUserPref":false,"query":"ao_ownerISEMPTY","refreshRequested":"","table":"x_aleen_snguardian_access_level_with_owners","wordWrap":false,"showAdditionalGroupBySelector":true,"additionalGroupByConfig":[{"label":"acl_system","id":"acl_system"},{"label":"acl_criticality","id":"acl_criticality"}]}',
        sys_domain: 'global',
        sys_domain_path: '/',
        type: 'List - Simple',
    },
})
