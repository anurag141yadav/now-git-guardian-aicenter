import { CatalogClientScript } from '@servicenow/sdk/core'

CatalogClientScript({
    $id: Now.ID['d2b4c3262b569210d4dffd74ce91bfdd'],
    name: 'Load Action Configuration',
    script: Now.include('./catalog_script_client_d2b4c3262b569210d4dffd74ce91bfdd-script.js'),
    type: 'onChange',
    catalogItem: '3f46e3ec2bb51a10d4dffd74ce91bf43',
    variableName: 'f65b725f2b259210d4dffd74ce91bf66',
    vaSupported: true,
    $meta: {
        useEsLatest: false,
    },
})
