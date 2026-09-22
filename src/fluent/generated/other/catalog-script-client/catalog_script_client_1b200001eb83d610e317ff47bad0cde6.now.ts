import { CatalogClientScript } from '@servicenow/sdk/core'

CatalogClientScript({
    $id: Now.ID['1b200001eb83d610e317ff47bad0cde6'],
    name: 'Process Uploaded Data',
    script: Now.include('./catalog_script_client_1b200001eb83d610e317ff47bad0cde6-script.js'),
    type: 'onChange',
    catalogItem: 'b487d71a33df5e10bf1221382e5c7bca',
    variableName: 'f1e6a75a33139e10bf1221382e5c7b42',
    vaSupported: true,
    $meta: {
        useEsLatest: false,
    },
})
