import { CatalogUiPolicy } from '@servicenow/sdk/core'

CatalogUiPolicy({
    $id: Now.ID['f3cea4f147e7f61051a3e84d416d43c1'],
    catalogItem: '8e51568647c56250f487c24fe16d431d',
    shortDescription: 'On Load Setup Request Fields',
    runScriptsInUiType: 'desktop',
    actions: [
        {
            variableName: '662083c247896250f487c24fe16d438d',
            variable: 'badge_number',
            visible: false,
        },
        {
            variableName: '80bd9b2447d1621051a3e84d416d4368',
            variable: 'empty',
            visible: false,
        },
        {
            variableName: '89e8f0a94769e61051a3e84d416d435d',
            variable: 'badge_type',
            mandatory: true,
        },
    ],
})
