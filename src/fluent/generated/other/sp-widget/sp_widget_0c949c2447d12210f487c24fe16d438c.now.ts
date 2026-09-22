import { SPWidget } from '@servicenow/sdk/core'

SPWidget({
    $id: Now.ID['0c949c2447d12210f487c24fe16d438c'],
    name: 'Alert Form widget',
    category: 'servicePortal',
    clientScript: Now.include('./sp_widget_alert_form_widget/client_script.js'),
    serverScript: Now.include('./sp_widget_alert_form_widget/server_script.js'),
    htmlTemplate: Now.include('./sp_widget_alert_form_widget/template.html'),
    customCss: Now.include('./sp_widget_alert_form_widget/style.scss'),
    hasPreview: true,
    id: 'alert-form-widget',
    linkScript: Now.include('./sp_widget_alert_form_widget/link-script.js'),
    roles: ['x_aleen_snguardian.visitor'],
    optionSchema: [
        {
            name: 'disableUIActions',
            section: 'Behavior',
            label: 'Disable UI Actions on Form',
            type: 'boolean',
        },
        {
            name: 'showFormView',
            section: 'Behavior',
            label: 'Display current form view',
            type: 'boolean',
        },
        {
            name: 'omitHeaderOptions',
            section: 'Behavior',
            label: 'Omit header options icon',
            type: 'boolean',
        },
    ],
    $meta: {
        useEsLatest: true,
    },
})
