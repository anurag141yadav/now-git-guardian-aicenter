import { CatalogUiPolicy } from '@servicenow/sdk/core'

CatalogUiPolicy({
    $id: Now.ID['14287e0e1bf78210bf7ea82b234bcbb2'],
    catalogItem: 'f07913481b6c4e106962fe60cd4bcb32',
    shortDescription: 'Hide Access Levels MRVS',
    runScriptsInUiType: 'desktop',
    actions: [
        {
            variableName: '135e12001b684e106962fe60cd4bcb87',
            variable: 'access_levels',
            visible: false,
        },
    ],
})
