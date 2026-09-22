import { CatalogClientScript } from '@servicenow/sdk/core'

CatalogClientScript({
    $id: Now.ID['9261560d33d25210bf1221382e5c7b50'],
    name: 'Show Need assistance Icon',
    script: Now.include('./catalog_script_client_9261560d33d25210bf1221382e5c7b50-script.js'),
    type: 'onChange',
    variableName: '03428f4b2be15210d4dffd74ce91bf25',
    variableSet: '811132872ba15210d4dffd74ce91bf94',
    appliesTo: 'set',
})
