import { CatalogClientScript } from '@servicenow/sdk/core'

CatalogClientScript({
    $id: Now.ID['7062c082eb8f1a100326f284dad0cd02'],
    name: 'Validate MRVS Emails',
    script: Now.include('./catalog_script_client_7062c082eb8f1a100326f284dad0cd02-script.js'),
    type: 'onChange',
    variableName: 'd178ac9f2ba71210d4dffd74ce91bf58',
    variableSet: '74d5e31a33139e10bf1221382e5c7bd9',
    appliesTo: 'set',
    vaSupported: true,
    $meta: {
        useEsLatest: false,
    },
})
