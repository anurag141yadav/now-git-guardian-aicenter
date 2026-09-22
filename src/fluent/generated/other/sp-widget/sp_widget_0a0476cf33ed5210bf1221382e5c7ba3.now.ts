import { SPWidget } from '@servicenow/sdk/core'

SPWidget({
    $id: Now.ID['0a0476cf33ed5210bf1221382e5c7ba3'],
    name: 'Alert Camera Capture',
    clientScript: Now.include('./sp_widget_alert_visitor_camera_capture/client_script.js'),
    serverScript: Now.include('./sp_widget_alert_visitor_camera_capture/server_script.js'),
    htmlTemplate: Now.include('./sp_widget_alert_visitor_camera_capture/template.html'),
    customCss: Now.include('./sp_widget_alert_visitor_camera_capture/style.scss'),
    description: 'Alert Camera Capture',
    hasPreview: true,
    id: 'alert-visitor-camera-capture',
    linkScript: Now.include('./sp_widget_alert_visitor_camera_capture/link-script.js'),
    roles: ['x_aleen_snguardian.visitor', 'x_aleen_snguardian.portal'],
    optionSchema: [
        {
            hint: 'Video Tag ID',
            name: 'videoid',
            section: 'Presentation',
            defaultValue: 'video',
            label: 'VideoId',
            type: 'string',
        },
        {
            hint: 'canvasId',
            name: 'canvasid',
            section: 'Presentation',
            defaultValue: 'canvas',
            label: 'canvasId',
            type: 'string',
        },
        {
            hint: 'photoId',
            name: 'photoid',
            section: 'Presentation',
            defaultValue: 'photo',
            label: 'photoId',
            type: 'string',
        },
        {
            hint: 'imageId',
            name: 'imageid',
            section: 'Presentation',
            defaultValue: 'imageData',
            label: 'imageId',
            type: 'string',
        },
    ],
    $meta: {
        useEsLatest: true,
    },
})
