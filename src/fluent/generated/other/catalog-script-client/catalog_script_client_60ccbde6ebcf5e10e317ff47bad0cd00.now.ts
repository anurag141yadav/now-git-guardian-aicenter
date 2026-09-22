import { CatalogClientScript } from '@servicenow/sdk/core'

CatalogClientScript({
    $id: Now.ID['60ccbde6ebcf5e10e317ff47bad0cd00'],
    name: 'on Location Change Filter Identities',
    script: Now.include('./catalog_script_client_60ccbde6ebcf5e10e317ff47bad0cd00-script.js'),
    type: 'onChange',
    catalogItem: 'b487d71a33df5e10bf1221382e5c7bca',
    variableName: 'f89ad35e33df5e10bf1221382e5c7bf5',
    vaSupported: true,
    $meta: {
        useEsLatest: false,
    },
})
