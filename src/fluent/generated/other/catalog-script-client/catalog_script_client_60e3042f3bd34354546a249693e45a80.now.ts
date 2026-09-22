import { CatalogClientScript } from '@servicenow/sdk/core'

CatalogClientScript({
    $id: Now.ID['60e3042f3bd34354546a249693e45a80'],
    name: 'RequestForEndUser',
    script: Now.include('./catalog_script_client_60e3042f3bd34354546a249693e45a80-script.js'),
    type: 'onLoad',
    catalogItem: '24942b96fb1387142ce8f46b5eefdcac',
    vaSupported: true,
})
