import { RestApi } from '@servicenow/sdk/core'

RestApi({
    $id: Now.ID['7a0be533fb8648ada2bc42e7a4793c53'],
    name: 'Mobile Credential Provisioning API',
    consumes: 'application/json',
    produces: 'application/json',
    serviceId: 'mc_provision',
    routes: [
        {
            $id: Now.ID['1b4744aeb3cb46049e5e190adf909636'],
            name: 'fetch-prov-token',
            consumes: 'application/json',
            method: 'POST',
            script: Now.include('./sys_ws_operation_1b4744aeb3cb46049e5e190adf909636.js'),
            produces: 'application/json',
            path: '/fetch-prov-token',
        },
        {
            $id: Now.ID['404200bdff074479b0da99aa8f40597d'],
            name: 'provision-google',
            consumes: 'application/json',
            method: 'POST',
            script: Now.include('./sys_ws_operation_404200bdff074479b0da99aa8f40597d.js'),
            produces: 'application/json',
            path: '/provision-google',
        },
        {
            $id: Now.ID['a7c80237977c4957963d9b1eb90f398d'],
            name: 'session',
            consumes: 'application/json',
            script: Now.include('./sys_ws_operation_a7c80237977c4957963d9b1eb90f398d.js'),
            produces: 'application/json',
            path: '/session',
        },
        {
            $id: Now.ID['aa4947d1bcce4aab809bbca9ae3d9c12'],
            name: 'badges',
            consumes: 'application/json',
            script: Now.include('./sys_ws_operation_aa4947d1bcce4aab809bbca9ae3d9c12.js'),
            produces: 'application/json',
            path: '/badges',
        },
        {
            $id: Now.ID['bebe60c0d7a74ff0936abaaae34ccfa7'],
            name: 'add-to-wallet',
            consumes: 'application/json',
            method: 'POST',
            script: Now.include('./sys_ws_operation_bebe60c0d7a74ff0936abaaae34ccfa7.js'),
            produces: 'application/json',
            path: '/add-to-wallet',
        },
    ],
})
