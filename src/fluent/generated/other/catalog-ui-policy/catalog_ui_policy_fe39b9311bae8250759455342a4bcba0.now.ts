import { CatalogUiPolicy } from '@servicenow/sdk/core'

CatalogUiPolicy({
    $id: Now.ID['fe39b9311bae8250759455342a4bcba0'],
    catalogItem: '7753f3361bec0650759455342a4bcb0b',
    shortDescription: 'Read only user Prerequisites and Required Prerequisites',
    appliesOnTargetRecord: true,
    runScriptsInUiType: 'desktop',
    actions: [
        {
            variableName: '03edc4401b1286106962fe60cd4bcbfe',
            variable: 'user_prerequisites',
            readOnly: true,
        },
        {
            variableName: '399dc4801b1286106962fe60cd4bcb0c',
            variable: 'prerequisites',
            readOnly: true,
        },
    ],
})
