import { CatalogClientScript } from '@servicenow/sdk/core'

CatalogClientScript({
    $id: Now.ID['759314621bf082106962fe60cd4bcb08'],
    name: 'Check Existing Worker',
    script: Now.include('./catalog_script_client_759314621bf082106962fe60cd4bcb08-script.js'),
    type: 'onChange',
    catalogItem: 'f07913481b6c4e106962fe60cd4bcb32',
    variableName: '37228f0c1be84e106962fe60cd4bcb03',
    $meta: {
        useEsLatest: false,
    },
})
