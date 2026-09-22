const BASE = '/api/x_aleen_snguardian/mc_provision'

async function request(path: string, options: RequestInit = {}) {
    const res = await fetch(BASE + path, {
        ...options,
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json',
            'X-UserToken': (window as any).g_ck || '',
            ...(options.headers || {}),
        },
    })
    if (!res.ok) {
        throw new Error('Request to ' + path + ' failed with status ' + res.status)
    }
    const json = await res.json()
    // Scripted REST APIs wrap setBody() output in a `result` envelope.
    return json && typeof json === 'object' && 'result' in json ? json.result : json
}

export function getSession() {
    return request('/session')
}

export function getBadgesByEmail(email: string) {
    return request('/badges?email=' + encodeURIComponent(email))
}

export function addToWalletRequest(identityId: string, sourceId: string) {
    return request('/add-to-wallet', { method: 'POST', body: JSON.stringify({ identityId, sourceId }) })
}

export function fetchProvTokenRequest(identityId: string, sourceId: string) {
    return request('/fetch-prov-token', { method: 'POST', body: JSON.stringify({ identityId, sourceId }) })
}

export function provisionGoogleRequest(code: string, identityId: string, sourceId: string) {
    return request('/provision-google', { method: 'POST', body: JSON.stringify({ code, identityId, sourceId }) })
}
