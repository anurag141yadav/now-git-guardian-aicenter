import { CatalogUiPolicy } from '@servicenow/sdk/core'

CatalogUiPolicy({
    $id: Now.ID['19f3e0f11b934610bf7ea82b234bcbf9'],
    catalogItem: 'f07913481b6c4e106962fe60cd4bcb32',
    shortDescription: 'Hide Asset MRVS',
    runScriptsInUiType: 'desktop',
    actions: [
        {
            variableName: '027e9a041b684e106962fe60cd4bcb96',
            variable: 'assets',
            visible: false,
        },
    ],
})
