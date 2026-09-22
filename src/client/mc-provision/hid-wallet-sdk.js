;(function (e) {
    var t = {}

    function n(o) {
        if (t[o]) return t[o].exports
        var r = (t[o] = {
            i: o,
            l: false,
            exports: {},
        })
        e[o].call(r.exports, r, r.exports, n)
        r.l = true
        return r.exports
    }
    n.m = e
    n.c = t
    n.d = function (e, t, o) {
        if (!n.o(e, t))
            Object.defineProperty(e, t, {
                enumerable: true,
                get: o,
            })
    }
    n.r = function (e) {
        if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
            Object.defineProperty(e, Symbol.toStringTag, {
                value: 'Module',
            })
        }
        Object.defineProperty(e, '__esModule', {
            value: true,
        })
    }
    n.t = function (e, t) {
        if (1 & t) e = n(e)
        if (8 & t) return e
        if (4 & t && typeof e === 'object' && e && e.__esModule) return e
        var o = Object.create(null)
        n.r(o)
        Object.defineProperty(o, 'default', {
            enumerable: true,
            value: e,
        })
        if (2 & t && typeof e !== 'string') {
            for (var r in e) {
                n.d(
                    o,
                    r,
                    function (t) {
                        return e[t]
                    }.bind(null, r)
                )
            }
        }
        return o
    }
    n.n = function (e) {
        var t =
            e && e.__esModule
                ? function () {
                      return e.default
                  }
                : function () {
                      return e
                  }
        n.d(t, 'a', t)
        return t
    }
    n.o = function (e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }
    n.p = ''
    n((n.s = 1))
})([
    // Module 0: constants
    function (e, t) {
        e.exports = {
            MILESTONE: '23W07D',
        }
    },
    // Module 1: main
    function (e, t, n) {
        'use strict'
        n.r(t)
        n(0)

        // Module-level debug bridge. Forwards to window.__alertDbg (registered by
        // client.js when devMode is on) so SDK events appear in the debug panel.
        // Falls back to console so nothing is silently lost.
        function cDbg(level, stage, msg, extra) {
            if (typeof window.__alertDbg === 'function') {
                window.__alertDbg(level, stage, msg, extra)
            } else {
                var fn = console[level] || console.log
                fn('[SDK][' + stage + '] ' + msg, extra !== undefined ? extra : '')
            }
        }

        var o

        // Open centered popup window
        var openPopup = function (e) {
            var t = e.title,
                n = e.w,
                o = e.h,
                r = e.location,
                s = e.id,
                i = typeof window.screenLeft !== 'undefined' ? window.screenLeft : window.screenX,
                u = typeof window.screenTop !== 'undefined' ? window.screenTop : window.screenY,
                l = window.outerWidth / 2 + i - n / 2,
                a = window.outerHeight / 2 + u - o / 2
            return window.open(
                r + '&id=' + s,
                t,
                'scrollbars=yes,width=' + n + ',height=' + o + ',top=' + a + ',left=' + l
            )
        }

        // Backdrop overlay element
        var s = document.createElement('div')
        s.setAttribute(
            'style',
            'position: fixed;top: 0;left: 0;height: 100%;width: 100%;z-index: 1000; transition: all .6s linear;'
        )

        var removeBackdrop = function () {
            var e
            if (s && (e = s.parentNode)) {
                e.removeChild(s)
            }
        }

        var u = []
        var l = false
        var a = 0
        var c = function () {
            return ++a
        }

        window.initAddToAppleWallet = function (e) {
            cDbg('info', 'SDK-INIT', 'initAddToAppleWallet called', {
                buttonId: e && e.buttonId,
                hasPartnerId: !!(e && e.partnerId),
                domain: e && e.domain,
                hasJwsResolver: typeof (e && e.jwsResolver) === 'function',
                hasJwtResolver: typeof (e && e.jwtResolver) === 'function',
                devMode: !!(e && e.devMode),
            })

            var t = document.getElementById(e.buttonId)

            if (!t) {
                cDbg('error', 'SDK-INIT', 'STAGE FAILED: Button element not found in DOM', {
                    buttonId: e.buttonId,
                })
                throw Error("Button element with id '" + e.buttonId + "' not found.")
            }

            if (t.getAttribute('data-initialized') === '1') {
                cDbg('error', 'SDK-INIT', 'STAGE FAILED: initAddToAppleWallet already invoked for this button', {
                    buttonId: e.buttonId,
                })
                throw Error('initAddToAppleWallet() function has already been invoked.')
            }

            if (!e) {
                cDbg('error', 'SDK-INIT', 'STAGE FAILED: Config argument is missing')
                throw Error('Config argument must be present.')
            }

            e.resultDelivered = false

            if (typeof e.resultResolver !== 'function') {
                cDbg('error', 'SDK-INIT', 'STAGE FAILED: resultResolver is not a function', {
                    typeOf: typeof e.resultResolver,
                })
                throw Error('Config object must include resultResolver key.')
            }

            var originalResolver = e.resultResolver
            var n // popup window reference (declared here, assigned on click)

            e.resultResolver = function (result) {
                if (!e.resultDelivered) {
                    if (result.status === '444' && n && !n.closed) return
                    e.resultDelivered = true
                    cDbg('info', 'SDK-RESULT', 'resultResolver delivering result to caller', {
                        status: result && result.status,
                        statusMessage: result && result.statusMessage,
                        hasError: !!(result && result.error),
                    })
                    return originalResolver(result)
                } else {
                    cDbg(
                        'warn',
                        'SDK-RESULT',
                        'resultResolver called but result already delivered — ignoring duplicate',
                        {
                            status: result && result.status,
                        }
                    )
                }
            }

            if (!e.partnerId) {
                cDbg('error', 'SDK-INIT', 'STAGE FAILED: partnerId missing from config — delivering 400 result')
                e.resultResolver({
                    statusMessage: 'Config object must include partnerId key.',
                    status: '400',
                })
                return
            }

            if (typeof (e.jwtResolver || e.jwsResolver) !== 'function') {
                cDbg('error', 'SDK-INIT', 'STAGE FAILED: Neither jwsResolver nor jwtResolver is a function', {
                    typeOfJwsResolver: typeof e.jwsResolver,
                    typeOfJwtResolver: typeof e.jwtResolver,
                })
                e.resultResolver({
                    statusMessage: 'Config object must include jwsResolver or jwtResolver key.',
                    status: '400',
                })
                return
            }

            if (/MSIE|Trident/.test(navigator.userAgent)) {
                cDbg('error', 'SDK-INIT', 'STAGE FAILED: Browser is Internet Explorer — not supported')
                e.resultResolver({
                    statusMessage: 'Partner does not support browser',
                    status: '40101',
                })
                return
            }

            t.setAttribute('data-initialized', '1')
            cDbg('info', 'SDK-INIT', 'Stage CLEARED: All validations passed — button marked data-initialized=1', {
                buttonId: e.buttonId,
                partnerId: e.partnerId ? e.partnerId.substring(0, 6) + '...' : null,
                domain: e.domain,
                resolverType: typeof e.jwsResolver === 'function' ? 'jwsResolver' : 'jwtResolver',
            })

            // Logs step timing + non-sensitive context, only when devMode is enabled.
            var logDevTiming = function (label, startMs, extra) {
                if (!e.devMode) {
                    return
                }
                var elapsed = Date.now() - startMs
                var msg = label + ' :: ' + elapsed + 'ms' + (extra ? ' :: ' + extra : '')
                console.debug('[DEV-TIMING] ' + msg)
                cDbg('timing', 'SDK-TIMING', msg)
            }
            var clickStart = 0

            var d = {
                id: c(),
                get: function () {
                    return this.id
                },
                reset: function () {
                    var e = this.id
                    this.id = c()
                    return e
                },
            }

            // Build the wallet URL
            var buildWalletUrl = function (domain, id, partnerId, cardType) {
                return {
                    title: 'Add to Wallet',
                    w: 600,
                    h: 660,
                    location: domain + '/navweb/static/index.html?partnerId=' + partnerId + '&cardType=' + cardType,
                    id: id,
                }
            }

            // Set up postMessage listener for the popup
            var attachMessageListener = function (config, jwtPromise, requestId) {
                l = false
                u.forEach(function (listener) {
                    window.removeEventListener('message', listener)
                })
                cDbg('info', 'SDK-MSG', 'Attaching postMessage listener for popup', { requestId: requestId })

                var handler = function (evt) {
                    if (evt.origin !== String(config.domain)) {
                        // Ignore messages from unexpected origins
                        return
                    }

                    if (evt.data.message === 'ready') {
                        logDevTiming('initAddToAppleWallet :: popup ready', clickStart, 'requestId=' + requestId)
                        cDbg('info', 'SDK-MSG', 'Stage CLEARED: "ready" message received from Apple Wallet popup', {
                            requestId: requestId,
                            origin: evt.origin,
                        })
                        l = true
                        jwtPromise
                            .then(function (result) {
                                if (typeof result !== 'undefined' && result.status === 200) {
                                    cDbg(
                                        'info',
                                        'SDK-MSG',
                                        'JWS resolved (200) — posting jwtGenerationSuccessful to popup',
                                        {
                                            requestId: requestId,
                                            hasNavwebJwt: !!(result && result.navwebJwt),
                                        }
                                    )
                                    evt.source.postMessage(
                                        {
                                            message: 'jwtGenerationSuccessful',
                                            timestamp: requestId,
                                            jwt: result.navwebJwt,
                                        },
                                        String(config.domain)
                                    )
                                } else if (result.status === 408) {
                                    cDbg(
                                        'warn',
                                        'SDK-MSG',
                                        'JWS resolver timed out (408) — posting jwtGenerationUnsuccessful',
                                        {
                                            requestId: requestId,
                                        }
                                    )
                                    evt.source.postMessage(
                                        {
                                            message: 'jwtGenerationUnsuccessful',
                                        },
                                        String(config.domain)
                                    )
                                    config.resultResolver({
                                        message: 'jwt resolver timed out',
                                        status: '408',
                                    })
                                } else {
                                    cDbg(
                                        'error',
                                        'SDK-MSG',
                                        'JWS resolved with error status — posting jwtGenerationUnsuccessful',
                                        {
                                            requestId: requestId,
                                            status: result && result.status,
                                            error: result && result.error && result.error.message,
                                        }
                                    )
                                    evt.source.postMessage(
                                        {
                                            message: 'jwtGenerationUnsuccessful',
                                        },
                                        String(config.domain)
                                    )
                                    config.resultResolver({
                                        statusMessage: 'JWT generation failed',
                                        status: '500',
                                        error: result,
                                    })
                                }
                            })
                            .catch(function (err) {
                                cDbg('error', 'SDK-MSG', 'JWS promise rejected — posting jwtGenerationUnsuccessful', {
                                    requestId: requestId,
                                    error: err && err.message,
                                })
                                evt.source.postMessage(
                                    {
                                        message: 'jwtGenerationUnsuccessful',
                                    },
                                    String(config.domain)
                                )
                                config.resultResolver({
                                    statusMessage:
                                        'JWT call failed: ' + (err && err.message ? err.message : 'unknown error'),
                                    status: '500',
                                    error: err,
                                })
                            })
                    }

                    if (evt.data.message === 'deliverResult') {
                        logDevTiming(
                            'initAddToAppleWallet :: deliverResult received',
                            clickStart,
                            'requestId=' + requestId + ', status=' + (evt.data.result && evt.data.result.status)
                        )
                        cDbg('info', 'SDK-MSG', '"deliverResult" message received from popup', {
                            requestId: requestId,
                            status: evt.data.result && evt.data.result.status,
                            statusMessage: evt.data.result && evt.data.result.statusMessage,
                            readyFlagWas: l,
                        })
                        if (l) {
                            config.resultResolver(evt.data.result)
                        } else {
                            cDbg('warn', 'SDK-MSG', 'deliverResult received before ready — result silently ignored', {
                                requestId: requestId,
                            })
                        }
                    }
                }

                u.push(handler)
                window.addEventListener('message', handler)
            }

            t.addEventListener('click', function () {
                var resolveFn, rejectFn, promiseObj, body
                var requestId = d.get()
                clickStart = Date.now()

                cDbg('info', 'SDK-CLICK', 'Hidden button clicked — starting Apple Wallet flow', {
                    requestId: requestId,
                    buttonId: e.buttonId,
                    partnerId: e.partnerId ? e.partnerId.substring(0, 6) + '...' : null,
                    domain: e.domain,
                })

                promiseObj = new Promise(function (res, rej) {
                    resolveFn = res
                    rejectFn = rej
                })

                var p = {
                    onResolve: resolveFn,
                    onReject: rejectFn,
                    promise: promiseObj,
                }

                attachMessageListener(e, p.promise, requestId)

                body = document.getElementsByTagName('body')[0]

                if (!o) {
                    o = s.getAttribute('style')
                    window.addEventListener('focus', removeBackdrop)
                }

                if (body) {
                    body.appendChild(s)
                    setTimeout(function () {
                        s.setAttribute(
                            'style',
                            o +
                                'background-color: rgba(0,0,0,0.6); backdrop-filter: blur(8px); -webkit-backdrop-filter: blur(8px)'
                        )
                    }, 400)
                }

                e.resultDelivered = false

                cDbg('info', 'SDK-POPUP', 'Opening Apple Wallet popup window', {
                    requestId: requestId,
                    domain: e.domain,
                    partnerId: e.partnerId ? e.partnerId.substring(0, 6) + '...' : null,
                    cardType: 'ACCESS_CORPORATE',
                })
                n = openPopup(buildWalletUrl(String(e.domain), requestId, e.partnerId, 'ACCESS_CORPORATE'))
                logDevTiming('initAddToAppleWallet :: popup opened', clickStart, 'requestId=' + requestId)

                if (!n) {
                    cDbg('error', 'SDK-POPUP', 'STAGE FAILED: window.open returned null — popup blocked by browser', {
                        requestId: requestId,
                    })
                    removeBackdrop()
                    e.resultResolver({
                        statusMessage: 'Popup was blocked by the browser. Please allow popups for this site.',
                        status: '400',
                    })
                    return
                }

                cDbg('info', 'SDK-POPUP', 'Stage CLEARED: Popup window opened successfully', {
                    requestId: requestId,
                })

                try {
                    runJwtFlow(p)
                } catch (err) {
                    cDbg('error', 'SDK-POPUP', 'runJwtFlow threw synchronously', {
                        requestId: requestId,
                        error: err && err.message,
                    })
                    removeBackdrop()
                    e.resultResolver({
                        statusMessage: 'JWT flow failed: ' + (err && err.message ? err.message : 'unknown error'),
                        status: '500',
                        error: err,
                    })
                }
            })

            var runJwtFlow = function (deferred) {
                cDbg('info', 'SDK-JWT', 'runJwtFlow started — polling for popup close + calling jwsResolver')

                // Poll for popup close
                ;(function pollClosed() {
                    if (!n || n.closed) {
                        cDbg('info', 'SDK-JWT', 'Popup closed (pollClosed)', {
                            resultAlreadyDelivered: e.resultDelivered,
                        })
                        if (!e.resultDelivered) {
                            cDbg(
                                'warn',
                                'SDK-JWT',
                                'Popup closed by user before provisioning completed — delivering 444 result'
                            )
                            e.resultResolver({
                                statusMessage: 'User closed window before provisioning was completed',
                                status: '444',
                            })
                        }
                    } else {
                        setTimeout(pollClosed, 1000)
                    }
                })()

                // 20 second timeout for JWT resolver
                var timeoutHandle = setTimeout(function () {
                    cDbg('warn', 'SDK-JWT', 'JWS resolver timeout (20 s) reached — resolving with 408')
                    deferred.onResolve({
                        status: 408,
                    })
                }, 20000)

                var jwtResolverStart = Date.now()
                cDbg('info', 'SDK-JWT', 'Calling jwsResolver/jwtResolver now')

                ;(e.jwsResolver || e.jwtResolver)()
                    .then(function (jwt) {
                        clearTimeout(timeoutHandle)
                        logDevTiming('initAddToAppleWallet :: jwsResolver resolved', jwtResolverStart)
                        cDbg('info', 'SDK-JWT', 'Stage CLEARED: jwsResolver resolved successfully', {
                            elapsed: Date.now() - jwtResolverStart + 'ms',
                            hasState: !!(jwt && jwt.state),
                            hasJws: !!(jwt && jwt.jws),
                            jwsLength: jwt && jwt.jws ? jwt.jws.length : 0,
                        })
                        deferred.onResolve({
                            status: 200,
                            navwebJwt: jwt,
                        })
                    })
                    .catch(function (err) {
                        clearTimeout(timeoutHandle)
                        logDevTiming(
                            'initAddToAppleWallet :: jwsResolver failed',
                            jwtResolverStart,
                            'error=' + (err && err.message ? err.message : 'unknown')
                        )
                        cDbg('error', 'SDK-JWT', 'STAGE FAILED: jwsResolver/jwtResolver rejected', {
                            elapsed: Date.now() - jwtResolverStart + 'ms',
                            error: err && err.message,
                            stack: err && err.stack,
                        })
                        deferred.onResolve({
                            status: 500,
                            error: err,
                            message: err && err.message ? err.message : 'JWT generation failed',
                        })
                    })
            }
        }
    },
])
