import { HidConfig } from './types'

const APPLE_DOMAIN_PROD = 'https://apple-pay.apple.com'
const APPLE_DOMAIN_CERT = 'https://apple-pay-cert.apple.com'

declare global {
    interface Window {
        initAddToAppleWallet?: (config: Record<string, unknown>) => void
    }
}

export function invokeAppleWallet(
    cfg: HidConfig,
    issuanceToken: string,
    provisioningToken: string,
    buttonId: string,
    onComplete: (result: { status?: string }) => void
) {
    if (typeof window.initAddToAppleWallet !== 'function') {
        throw new Error('Apple Wallet SDK not loaded')
    }

    window.initAddToAppleWallet({
        partnerId: cfg.partnerId,
        domain: cfg.env === 'production' ? APPLE_DOMAIN_PROD : APPLE_DOMAIN_CERT,
        buttonId,
        devMode: !!cfg.devMode,

        jwsResolver: async function () {
            const requestBody = {
                issuanceToken,
                applicationId: cfg.appId,
                web: { language: 'en-US' },
                appleWallet: { type: 'CORPORATE_ID_WEB', version: 'V1' },
            }

            const res = await fetch(cfg.jwsUrl, {
                method: 'POST',
                headers: {
                    'x-requestId': String(Math.round(Math.random() * 0x2540be400)),
                    'Application-ID': cfg.appId,
                    'Content-Type': 'application/json',
                    Authorization: 'Bearer ' + provisioningToken,
                },
                body: JSON.stringify(requestBody),
            })
            const body = await res.json()

            if (
                !body ||
                !body.provisioningData ||
                !body.provisioningData.appleWallet ||
                !body.provisioningData.appleWallet.jws
            ) {
                throw new Error('Response missing appleWallet.jws')
            }
            return { state: String(Date.now()), jws: body.provisioningData.appleWallet.jws }
        },

        resultResolver: function (result: { status?: string }) {
            onComplete(result)
        },
    })
}
