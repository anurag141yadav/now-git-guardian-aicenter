(function transformRow(source, target, map, log, isUpdate) {

    if (source.u_is_deleted == 'true' || source.u_is_deleted == 'TRUE' || source.u_is_deleted == 'yes' || source.u_is_deleted == 'YES') {
        target.is_deleted = true;
    } else {
        target.is_deleted = false;
    }
    if (source.u_is_realtime__ation_required == 'true' || source.u_is_realtime__ation_required == 'TRUE' || source.u_is_realtime__ation_required == 'yes' || source.u_is_realtime__ation_required == 'YES') {
        target.is_realtime_validation_required = true;
    } else {
        target.is_realtime_validation_required = false;
    }



})(source, target, map, log, action === "update");