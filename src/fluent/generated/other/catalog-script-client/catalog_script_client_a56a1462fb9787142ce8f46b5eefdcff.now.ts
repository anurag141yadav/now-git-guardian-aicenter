import { CatalogClientScript } from '@servicenow/sdk/core'

CatalogClientScript({
    $id: Now.ID['a56a1462fb9787142ce8f46b5eefdcff'],
    name: 'OnChangeGetAssets',
    script: Now.include('./catalog_script_client_a56a1462fb9787142ce8f46b5eefdcff-script.js'),
    type: 'onChange',
    catalogItem: '24942b96fb1387142ce8f46b5eefdcac',
    variableName: '5ba7231efb1387142ce8f46b5eefdc6d',
    vaSupported: true,
})
