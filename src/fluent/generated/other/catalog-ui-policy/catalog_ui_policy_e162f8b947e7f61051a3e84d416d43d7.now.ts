import { CatalogUiPolicy } from '@servicenow/sdk/core'

CatalogUiPolicy({
    $id: Now.ID['e162f8b947e7f61051a3e84d416d43d7'],
    catalogItem: 'a1b7dec81b284e106962fe60cd4bcb6c',
    shortDescription: 'On Change User Show Photo',
    catalogCondition: '56b8d64c1b284e106962fe60cd4bcb15ISEMPTY^EQ',
    runScriptsInUiType: 'desktop',
    actions: [
        {
            variableName: '31656f7a1bac0650759455342a4bcbdf',
            variable: 'photo',
            visible: false,
        },
    ],
})
