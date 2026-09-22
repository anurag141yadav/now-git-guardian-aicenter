import { CatalogClientScript } from '@servicenow/sdk/core'

CatalogClientScript({
    $id: Now.ID['637fc6a733861250bf1221382e5c7be2'],
    name: 'On change location get lobby config',
    script: Now.include('./catalog_script_client_637fc6a733861250bf1221382e5c7be2-script.js'),
    type: 'onChange',
    catalogItem: 'ec2e8c9f2b295210d4dffd74ce91bf86',
    variableName: 'f65b725f2b259210d4dffd74ce91bf66',
    vaSupported: true,
    $meta: {
        useEsLatest: false,
    },
})
