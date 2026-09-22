import { CatalogClientScript } from '@servicenow/sdk/core'

CatalogClientScript({
    $id: Now.ID['7dab44cdeb83d610e317ff47bad0cda9'],
    name: 'Add Identities to MRVS',
    script: Now.include('./catalog_script_client_7dab44cdeb83d610e317ff47bad0cda9-script.js'),
    type: 'onChange',
    catalogItem: 'b487d71a33df5e10bf1221382e5c7bca',
    variableName: '0987139a33df5e10bf1221382e5c7b7a',
    $meta: {
        useEsLatest: false,
    },
})
