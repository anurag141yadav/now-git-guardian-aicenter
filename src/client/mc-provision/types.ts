export interface Badge {
    id_str: string
    identityId: string
    sourceId: string
    subType: 'HID' | 'WAVELYNX' | string
    type: 'MobileCredential' | 'WatchCredential' | string
    mobileCredentialId?: string
    intStatus: number
    status?: string
    validFromDate?: string
    validToDate?: string
}

export interface HidConfig {
    env: string
    appId: string
    jwsUrl: string
    partnerId: string
    devMode?: boolean
}

export interface SessionData {
    userName: string
    email: string
    status: string
    image: string
    identitySysId: string | null
    hidConfig: HidConfig
    googleClientId: string
    googleRedirectUri: string
    badges: Badge[]
    count: number
}

export function canProvision(badge: Badge): boolean {
    if (badge.intStatus === 0 && !badge.status) return true
    if (badge.intStatus === 7 && badge.status === 'CREATED') return true
    if (badge.intStatus === 9 && badge.status === 'PASS_ISSUE_FAILED') return true
    return false
}
