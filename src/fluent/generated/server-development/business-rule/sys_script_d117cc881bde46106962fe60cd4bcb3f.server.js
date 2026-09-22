(function executeRule(current, previous /*null when async*/ ) {
    if (null != current.first_name && current.first_name != "" && null != current.last_name && current.last_name != "") {
        current.full_name = current.first_name + ' ' + current.last_name;
    } else if (null != current.first_name && current.first_name != "") {
        current.full_name = current.first_name;
    } else if (null != current.last_name && current.last_name != "") {
        current.full_name = current.last_name;
    }
    if (null != current.user_name && current.user_name != "") {
        current.user_name = current.user_name.toUpperCase();
    }
})(current, previous);