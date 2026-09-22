import { CatalogUiPolicy } from '@servicenow/sdk/core'

CatalogUiPolicy({
    $id: Now.ID['3d03f8f947e7f61051a3e84d416d43d4'],
    catalogItem: '7753f3361bec0650759455342a4bcb0b',
    shortDescription: 'On Change Access type Hide MRVS',
    catalogCondition: 'fdf95bde472bea5051a3e84d416d434d=existing_access^EQ',
    runScriptsInUiType: 'desktop',
    actions: [
        {
            variableName: '5e42d75a472bea5051a3e84d416d431e',
            variable: 'new_access_levels',
            visible: false,
        },
        {
            variableName: 'eb52131a472bea5051a3e84d416d4363',
            variable: 'existing_access_levels',
            visible: true,
        },
    ],
})
