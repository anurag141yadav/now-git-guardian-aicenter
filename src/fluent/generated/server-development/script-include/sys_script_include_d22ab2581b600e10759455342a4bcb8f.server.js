var JSONUtil = Class.create();
JSONUtil.prototype = {
    initialize: function() {},
    // Flatten a JSON object into a string
    flattenJSON: function(jsonObj) {
        if (!jsonObj || typeof jsonObj !== 'object') {
            return jsonObj;
        }
        var result = {};

        function recurse(current, property) {
            if (Object(current) !== current) {
                result[property] = current;
            } else if (Array.isArray(current)) {
                for (var i = 0, l = current.length; i < l; i++) {
                    recurse(current[i], property + '[' + i + ']');
                }
                if (l == 0) {
                    result[property] = [];
                }
            } else {
                var isEmpty = true;
                for (var p in current) {
                    isEmpty = false;
                    recurse(current[p], property ? property + '.' + p : p);
                }
                if (isEmpty && property) {
                    result[property] = {};
                }
            }
        }
        recurse(jsonObj, '');
        return JSON.stringify(result);
    },
    // Unflatten a JSON string into an object
    unflattenJSON: function(jsonString) {
        if (!jsonString || typeof jsonString !== 'string') {
            return jsonString;
        }
        var result = JSON.parse(jsonString);

        function unflatten(obj) {
            if (Object(obj) !== obj || Array.isArray(obj)) {
                return obj;
            }
            var result = {};
            for (var key in obj) {
                var keys = key.split('.');
                var lastKey = keys.pop();
                var current = result;
                keys.forEach(function(k) {
                    if (!current[k]) {
                        current[k] = {};
                    }
                    current = current[k];
                });
                current[lastKey] = obj[key];
            }
            return result;
        }
        return unflatten(result);
    },
    flattenJSONArray: function(jsonObj) {
        var result = [];
        if (Array.isArray(jsonObj)) {
            for (var i = 0; i < jsonObj.length; i++) {
                result.push(this.flattenJSON(jsonObj[i]));
            }
        }
        return result;
    },
    type: 'JSONUtil'
};