var DateUtil = Class.create();
DateUtil.prototype = {
    initialize: function(systemCode) {
        //Setting Default Time Zone and Format
        var systemUtil = new SystemUtil();
        var systemGr = systemUtil.getSystemByCode(systemCode);
		this.logger = new AlertGuardianLogger(" DateUtil:: ");
        // confirm number or code for usage
        if (systemGr == null) {
            this.logger.debug("Initialize: No System Code for "+systemCode+" Provided setting default values as UTC and yyyy-MM-ddTHH:mm:ss");
        }
        this.systemTZ = systemGr?.getValue("time_zone") || "UTC";
        this.systemFormat = systemGr?.getValue("date_format") || "yyyy-MM-ddTHH:mm:ss";
    },
    getCurrentDateTimeEpoch: function() {
        var currDateTime = new GlideDateTime();
        return currDateTime.getNumericValue().toString();

    },
    getDateTimeEpoch: function(validTo) {
        var validto = new GlideDateTime(validTo);
        return validto.getNumericValue();
    },
    getGlideDateTimeFromEpoach: function(epoch) {
        var dateTime = new GlideDateTime();
        dateTime.setNumericValue(epoch);
        return dateTime;
    },
    convertTimeZone: function(dateTime) {
        var dtTime = new GlideDateTime(dateTime);
        var gsdt = new GlideScheduleDateTime(dtTime);
        gsdt.setTimeZone(this.systemTZ);
        var answer = gsdt.getGlideDateTime().getDisplayValue();
        return answer;
    },
    dateFormatter: function(dateTime) {
        var dTime = new GlideDateTime(dateTime);
        //To do ::  Need to create a generalized function for formatting of dates.
        var dateArr;
        dateArr = dTime.toString().split(" ");
        if (this.systemFormat == "yyyy-MM-ddTHH:mm:ssZ") {
            formattedDate = dateArr[0] + "T" + dateArr[1] + "Z";
            return formattedDate;
        } else if (this.systemFormat == "yyyy-MM-ddTHH:mm:ss-00:00") {
            formattedDate = dateArr[0] + "T" + dateArr[1] + "-00:00";
            return formattedDate;
        } else {
            //default case of time format
            formattedDate = dateArr[0] + "T" + dateArr[1];
            return formattedDate;
        }
    },
    convertTimeZoneAndFormat: function(dateTime) {
        if (dateTime != "" && dateTime != null && dateTime != undefined && dateTime != "NULL") {
            //return this.dateFormatter(this.convertTimeZone(dateTime));
            return this.dateFormatter(dateTime);
        } else {
            return "";
        }
    },

    fetchTimeZoneOffset: function() {
        var hours, minutes = 0,
            offset = 0;
        if (this.systemTZ.indexOf('+') != -1) {
            offset = this.systemTZ.split('+')[1];
            hours = parseInt(offset.split(':')[0]);
            if (offset.indexOf(':') != -1) {
                minutes = parseFloat(parseInt(offset.split(':')[1]) / 60);
            }
            offset = parseFloat(hours + minutes);
        } else if (this.systemTZ.indexOf('-') != -1) {
            offset = this.systemTZ.split('-')[1];
            hours = parseInt(offset.split(':')[0]);
            if (offset.indexOf(':') != -1) {
                minutes = parseFloat(parseInt(offset.split(':')[1]) / 60);
            }
            offset = -parseFloat(hours + minutes);
        }
        return offset;
    },

    EpochToString: function(epochTime, dateTimeFormat, reverse) {
        var format = dateTimeFormat ? dateTimeFormat : this.systemFormat;
        var timeZoneOffset = this.fetchTimeZoneOffset();
        if (reverse || reverse == "true")
            timeZoneOffset = -timeZoneOffset;
        if (epochTime < 1e12) {
            epochTime *= 1000;
        }
        var date = new Date(epochTime);
        var utcTime = date.getTime() + (date.getTimezoneOffset() * 60000); // Local UTC
        var adjustedTime = new Date(utcTime + (timeZoneOffset * 3600000)); // Adjusted for the given timezone offset
        // Extract individual date components for formatting
        var year = adjustedTime.getFullYear();
        var month = String(adjustedTime.getMonth() + 1).padStart(2, '0'); // Months are zero-indexed
        var day = String(adjustedTime.getDate()).padStart(2, '0');
        var hours = String(adjustedTime.getHours()).padStart(2, '0');
        var minutes = String(adjustedTime.getMinutes()).padStart(2, '0');
        var seconds = String(adjustedTime.getSeconds()).padStart(2, '0');
        // Format the date string according to the provided format
        switch (format) {
            case 'MM-DD-YYYY HH:mm:ss':
                return `${month}-${day}-${year} ${hours}:${minutes}:${seconds}`;
            case 'YYYY-MM-DD HH:mm:ss':
                return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
            case 'DD-MM-YYYY HH:mm:ss':
                return `${day}-${month}-${year} ${hours}:${minutes}:${seconds}`;
            case 'YYYY-MM-DD hh:mm:ss':
			case 'YYYY-MM-DD hh:mm:ss aa':
                var ampm = hours >= 12 ? 'PM' : 'AM';
                var formattedHours = hours % 12;
                formattedHours = formattedHours ? String(formattedHours).padStart(2, '0') : '12'; // Handle 12 AM/PM
                return `${year}-${month}-${day} ${formattedHours}:${minutes}:${seconds} ${ampm}`;
            case 'MM%2Fdd%2Fyyyy+HH%3Amm%3Ass':
                //01%2F19%2F2023+12%3A00%3A00
                return `${month}%2F${day}%2F${year}+${hours}%3A${minutes}%3A${seconds}`;
            case 'YYYY-MM-DDTHH:mm':
                return `${year}-${month}-${day}T${hours}:${minutes}`;
            case 'YYYY-MM-DDTHH:mm:ss':
                return `${year}-${month}-${day}T${hours}:${minutes}:${seconds}`;
            default:
                // return adjustedTime.toISOString(); // Default to ISO format
                return adjustedTime.toString(); // Default to ISO format
        }
    },
    type: 'DateUtil'
};