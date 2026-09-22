import { CatalogClientScript } from '@servicenow/sdk/core'

CatalogClientScript({
    $id: Now.ID['c3454c583b838f50546a249693e45ae8'],
    name: 'Set Request Type And Hide',
    script: Now.include('./catalog_script_client_c3454c583b838f50546a249693e45ae8-script.js'),
    type: 'onLoad',
    catalogItem: '36a232733bbecb50546a249693e45a82',
    vaSupported: true,
})
