import { CatalogUiPolicy } from '@servicenow/sdk/core'

CatalogUiPolicy({
    $id: Now.ID['c0ee6aa51b2f8a10207b2179b04bcb30'],
    appliesTo: 'set',
    variableSet: '135e12001b684e106962fe60cd4bcb87',
    shortDescription: 'Access Validity Restriction',
    onLoad: false,
    catalogCondition: 'a0108f881be84e106962fe60cd4bcb74MORETHAN5dff3e881be84e106962fe60cd4bcb0e@year@after@1^EQ',
    runScripts: true,
    executeIfTrue: Now.include('./catalog_ui_policy_c0ee6aa51b2f8a10207b2179b04bcb30-script-true.js'),
    $meta: {
        useEsLatest: false,
    },
})
