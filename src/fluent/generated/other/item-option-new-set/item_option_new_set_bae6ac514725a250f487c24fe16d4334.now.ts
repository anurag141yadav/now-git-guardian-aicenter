import { VariableSet, SingleLineTextVariable } from '@servicenow/sdk/core'

export const tempBadgeMetadata = VariableSet({
    $id: Now.ID['bae6ac514725a250f487c24fe16d4334'],
    title: 'Temp Badge Metadata',
    internalName: 'temp_badge_metadata',
    version: 2,
    variables: {
        found_active_badges: SingleLineTextVariable({
            question: 'Found Active Badge(s)',
            hidden: true,
        }),
        filtered_visitor_list: SingleLineTextVariable({
            question: 'Filtered Visitor List',
            hidden: true,
        }),
    },
})
