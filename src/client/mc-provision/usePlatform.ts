export function detectPlatform() {
    const ua = navigator.userAgent.toLowerCase()
    const isAndroid = ua.includes('android')
    const isIOS = /iphone|ipod|ipad/.test(navigator.platform.toLowerCase()) || /iphone|ipod|ipad/.test(ua)
    return { isAndroid, isIOS, isMobile: isAndroid || isIOS }
}
