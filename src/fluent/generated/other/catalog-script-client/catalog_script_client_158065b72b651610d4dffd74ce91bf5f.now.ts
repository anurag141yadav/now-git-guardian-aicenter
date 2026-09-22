import { CatalogClientScript } from '@servicenow/sdk/core'

CatalogClientScript({
    $id: Now.ID['158065b72b651610d4dffd74ce91bf5f'],
    name: 'Show Success Summary',
    script: Now.include('./catalog_script_client_158065b72b651610d4dffd74ce91bf5f-script.js'),
    type: 'onSubmit',
    catalogItem: '20b21f0f2b255210d4dffd74ce91bf94',
    vaSupported: true,
})
