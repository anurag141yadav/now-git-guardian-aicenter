import { CatalogClientScript } from '@servicenow/sdk/core'

CatalogClientScript({
    $id: Now.ID['c766d45f33659210bf1221382e5c7b97'],
    name: 'Set Request Type And Hide',
    script: Now.include('./catalog_script_client_c766d45f33659210bf1221382e5c7b97-script.js'),
    type: 'onLoad',
    catalogItem: 'ec2e8c9f2b295210d4dffd74ce91bf86',
})
