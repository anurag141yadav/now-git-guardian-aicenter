import { CatalogClientScript } from '@servicenow/sdk/core'

CatalogClientScript({
    $id: Now.ID['f20c6236eb8f1210e317ff47bad0cdf5'],
    name: 'On Submit Check Bulk Request',
    script: Now.include('./catalog_script_client_f20c6236eb8f1210e317ff47bad0cdf5-script.js'),
    type: 'onSubmit',
    catalogItem: 'b487d71a33df5e10bf1221382e5c7bca',
    vaSupported: true,
})
