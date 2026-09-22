var TimeZoneUtil = Class.create();
TimeZoneUtil.prototype = {
    initialize: function() {
		this.logger = new AlertGuardianLogger(" TimeZoneUtil:: ");
	},

    getTimeZoneOffset: function(tragetTimezone) {
        var offset = 0;
        var hours, minutes = 0;
        var grTimeZone = new GlideRecordSecure('x_aleen_snguardian_timezone');
        grTimeZone.addQuery('name', tragetTimezone);
		grTimeZone.setLimit(1);
        grTimeZone.query();
        if (grTimeZone.next()) {
            var offSetString = grTimeZone.offset;

            if (offSetString.indexOf('+') != -1) {
                var offsetData = offSetString.split('+')[1];
                hours = parseInt(offsetData.split(':')[0], 10);
                if (offsetData.indexOf(':') != -1) {
                    minutes = parseFloat(parseInt(offsetData.split(':')[1]) / 60, 10);
                }
                offset = parseFloat(hours + minutes);
            } else if (offSetString.indexOf('-') != -1) {
                var offsetDataNew = offSetString.split('-')[1];
                hours = parseInt(offsetDataNew.split(':')[0], 10);
                if (offsetDataNew.indexOf(':') != -1) {
                    minutes = parseFloat(parseInt(offsetDataNew.split(':')[1]) / 60, 10);
                }
                offset = -parseFloat(hours + minutes);
            }
        }
        return offset;
    },
    getEpochAsStringinTargetTimeZone: function(epochTime, tragetTimezone, dateTimeFormat) {
		try{
			var format = dateTimeFormat ? dateTimeFormat : "yyyy-MM-DD HH:mm:ss";
			var timeZoneOffset = this.getTimeZoneOffset(tragetTimezone);
			if (typeof epochTime === 'string') {
				epochTime = parseInt(epochTime, 10);
			}
			if (epochTime < 1e12) {
				epochTime *= 1000;
			}
			var date = new Date(epochTime);
			var utcTime = date.getTime() + (date.getTimezoneOffset() * 60000);
			var adjustedTime = new Date(utcTime + (timeZoneOffset * 3600000));
			var year = adjustedTime.getFullYear();
			var month = String(adjustedTime.getMonth() + 1).padStart(2, '0');
			var day = String(adjustedTime.getDate()).padStart(2, '0');
			var hours = String(adjustedTime.getHours()).padStart(2, '0');
			var minutes = String(adjustedTime.getMinutes()).padStart(2, '0');
			var seconds = String(adjustedTime.getSeconds()).padStart(2, '0');
			switch (format) {
				case 'MM-DD-YYYY HH:mm:ss':
				case 'MM-DD-yyyy HH:mm:ss':
					return `${month}-${day}-${year} ${hours}:${minutes}:${seconds}`;
				case 'DD-MM-YYYY HH:mm:ss':
				case 'DD-MM-yyyy HH:mm:ss':
					return `${day}-${month}-${year} ${hours}:${minutes}:${seconds}`;
				case 'MM%2Fdd%2Fyyyy+HH%3Amm%3Ass':
					return `${month}%2F${day}%2F${year}+${hours}%3A${minutes}%3A${seconds}`;
				default:
					return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
			}
		}catch(e){
			this.logger.error("getEpochAsStringinTargetTimeZone Exception :: " + e + " \nStack\n " + e.stack);
			var gdt = new GlideDateTime();
			gdt.setValue(epochTime);
			return gdt.getDisplayValue();
		}
    },

    timeZoneStringtoEpoch: function(dateTimeString, timezone) {
        var glideDateTime = new GlideDateTime(dateTimeString);
        var epoch = glideDateTime.getNumericValue();
        if (epoch < 1e12) {
            epoch *= 1000;
        }
        var timeZoneOffset = this.getTimeZoneOffset(timezone);
        var timeZoneOffsetReverse = -(timeZoneOffset);
        var adjustedTime = new Date(epoch + (timeZoneOffsetReverse * 3600000));
        return adjustedTime.getTime();
    },

    getDurationDifference: function(duration, operation) {
		try{
			var current = new GlideDateTime();
			var universalStartTime = new GlideDateTime('1970-01-01 00:00:00');
			var durationTime = new GlideDateTime(duration);
			var difference = durationTime.getNumericValue() - universalStartTime.getNumericValue();
			if (operation == "add" || operation == "+" || operation == "Add") {
				current.add(difference);
			} else {
				current.subtract(difference);
			}
			return current.getValue();
		}catch(e){
			this.logger.error("getDurationDifference Exception :: " + e + " \nStack\n " + e.stack);
			return new GlideDateTime().getValue();
		}
    },

    type: 'TimeZoneUtil'
};