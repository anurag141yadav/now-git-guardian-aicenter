import { SPWidget } from '@servicenow/sdk/core'

SPWidget({
    $id: Now.ID['519e3a4b33219210bf1221382e5c7b7d'],
    name: 'Alert Catalog Item',
    clientScript: Now.include('./sp_widget_alert_catalog_item/client_script.js'),
    serverScript: Now.include('./sp_widget_alert_catalog_item/server_script.js'),
    htmlTemplate: Now.include('./sp_widget_alert_catalog_item/template.html'),
    customCss: Now.include('./sp_widget_alert_catalog_item/style.scss'),
    demoData: {
        options: {
            sys_id: '01eb8b902b0a9610d4dffd74ce91bfea',
            showSections: 'true',
        },
    },
    description: 'Alert Catalog Item',
    hasPreview: true,
    id: 'alert-catalog-item',
    linkScript: Now.include('./sp_widget_alert_catalog_item/link-script.js'),
    roles: ['x_aleen_snguardian.visitor'],
    dependencies: [
        '016f19255b301200e39fc7ad31f91abd',
        'f7fdd25e87c50300e0ef0cf888cb0b7b',
        '2eaf31f30b301200b0b02c6317673a84',
        'df0ce057a5301010fa9b0db875c4f5bd',
    ],
    angularProviders: [
        '1d2b40e07323201081d3738234f6a714',
        'c045f99a0b67320014ea425663673a25',
        '631d65a287300300e0ef0cf888cb0ba3',
    ],
    $meta: {
        useEsLatest: true,
    },
})
