var AlertGuardianLogger = Class.create();
AlertGuardianLogger.prototype = {
    initialize: function(context) {
        // Optional context to help identify where the log came from (BR name, widget name, etc.)
        this._context = context || '';
        this._propertyName = 'x_aleen_snguardian.alert.guardian.log.level'; 
        this._baseSource = 'AlertGuardianLogger';

        // Severity ranking: smaller = more severe
        this._levelRank = {
            error: 0,
            warn:  1,
            info:  2,
            debug: 3
        };
    },

    /**
     * Returns the configured level from sys_properties (default: error).
     * Read at log-time so changes reflect immediately.
     */
    _getConfiguredLevel: function() {
        var lvl = (gs.getProperty(this._propertyName, 'error') + '').toLowerCase();
        if (!this._levelRank.hasOwnProperty(lvl)) {
            lvl = 'error';
        }
        return lvl;
    },

    /**
     * Should we log msgLevel at current configured level?
     * Example: configured=warn => allow warn & error only.
     */
    _shouldLog: function(msgLevel) {
        msgLevel = (msgLevel || 'error').toLowerCase();
        if (!this._levelRank.hasOwnProperty(msgLevel)) {
            msgLevel = 'error';
        }

        var configured = this._getConfiguredLevel();
        return this._levelRank[msgLevel] <= this._levelRank[configured];
    },

    _source: function() {
        return this._context
            ? this._baseSource + ':' + this._context
            : this._baseSource;
    },

    _format: function(message, data) {
        var msg = (message === undefined || message === null) ? '' : '' + message;

        if (data !== undefined) {
            try {
                msg += ' | data=' + JSON.stringify(data);
            } catch (e) {
                msg += ' | data=[unstringifiable]';
            }
        }
        return msg;
    },

    _write: function(level, message, data) {
        if (!this._shouldLog(level)) return;

        var text = this._format(message, data);
        var src = this._source();
        var prefixed = '[' + src + '] ' + text;
        try {
            switch ((level || 'error').toLowerCase()) {
                case 'debug':
                    gs.debug(prefixed);
                    break;
                case 'info':
                    gs.info(prefixed);
                    break;
                case 'warn':
                    gs.warn(prefixed);
                    break;
                default:
                    gs.error(prefixed);
            }
        } catch (e) {
			gs.error(prefixed);
			gs.error(e);	
        }
    },

    debug: function(message, data) { this._write('debug', message, data); },
    info:  function(message, data) { this._write('info',  message, data); },
    warn:  function(message, data) { this._write('warn',  message, data); },
    error: function(message, data) { this._write('error', message, data); },

    type: 'AlertGuardianLogger'
};