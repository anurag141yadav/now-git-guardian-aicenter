import { VariableSet, CustomVariable, SingleLineTextVariable } from '@servicenow/sdk/core'

export const qrCode = VariableSet({
    $id: Now.ID['0881dddb33ab1210bf1221382e5c7b39'],
    title: 'QR Code',
    internalName: 'qr_code',
    layout: '2across',
    version: 2,
    variables: {
        qr_code_generator: CustomVariable({
            question: 'QR Code Generator',
            widget: 'eb18fac333219210bf1221382e5c7bb8',
        }),
        qr_code_data_generated: SingleLineTextVariable({
            question: 'QR Code Data Generated',
            hidden: true,
        }),
    },
})
