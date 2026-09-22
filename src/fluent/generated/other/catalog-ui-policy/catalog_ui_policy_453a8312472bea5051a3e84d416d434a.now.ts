import { CatalogUiPolicy } from '@servicenow/sdk/core'

CatalogUiPolicy({
    $id: Now.ID['453a8312472bea5051a3e84d416d434a'],
    catalogItem: '683a4312472bea5051a3e84d416d4357',
    shortDescription: 'Read only user attestations and required assertions',
    appliesOnTargetRecord: true,
    runScriptsInUiType: 'desktop',
    actions: [
        {
            variableName: '399dc4801b1286106962fe60cd4bcb0c',
            variable: 'prerequisites',
            readOnly: true,
        },
        {
            variableName: '03edc4401b1286106962fe60cd4bcbfe',
            variable: 'user_prerequisites',
            readOnly: true,
        },
    ],
})
