import { CatalogClientScript } from '@servicenow/sdk/core'

CatalogClientScript({
    $id: Now.ID['b2ffb0913386d610bf1221382e5c7b60'],
    name: 'Set Vistor from LS if Visitor Portal',
    script: Now.include('./catalog_script_client_b2ffb0913386d610bf1221382e5c7b60-script.js'),
    type: 'onLoad',
    catalogItem: '914c83502b0a9610d4dffd74ce91bfdc',
})
