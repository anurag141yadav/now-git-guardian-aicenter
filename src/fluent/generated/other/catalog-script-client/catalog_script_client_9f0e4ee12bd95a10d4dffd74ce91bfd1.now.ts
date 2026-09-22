import { CatalogClientScript } from '@servicenow/sdk/core'

CatalogClientScript({
    $id: Now.ID['9f0e4ee12bd95a10d4dffd74ce91bfd1'],
    name: 'OnChangeGetAssets',
    script: Now.include('./catalog_script_client_9f0e4ee12bd95a10d4dffd74ce91bfd1-script.js'),
    type: 'onChange',
    catalogItem: '70518e652b995a10d4dffd74ce91bff2',
    variableName: 'f2ebc2612bd95a10d4dffd74ce91bf1b',
    vaSupported: true,
    $meta: {
        useEsLatest: false,
    },
})
