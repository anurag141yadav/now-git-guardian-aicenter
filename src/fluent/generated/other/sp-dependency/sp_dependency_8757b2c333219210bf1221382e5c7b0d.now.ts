import { SPWidgetDependency } from '@servicenow/sdk/core'

SPWidgetDependency({
    $id: Now.ID['8757b2c333219210bf1221382e5c7b0d'],
    name: 'Alert QR Code Reader',
    angularModuleName: '',
    jsIncludes: [
        {
            order: 100,
            include: 'ad87fac333219210bf1221382e5c7b82',
        },
        {
            order: 100,
            include: 'a2a73ec333219210bf1221382e5c7ba1',
        },
    ],
})
