(function transformRow(source, target, map, log, isUpdate) {

    if (source.u_config_type != 'Mapping') {
        ignore = true;
    } else {
        if (source.u_is_advanced == 'true' || source.u_is_advanced == 'TRUE' || source.u_is_advanced == 'yes' || source.u_is_advanced == 'YES') {
            target.is_advanced = true;
        } else {
            target.is_advanced = false;
        }
        if (source.u_is_required == 'true' || source.u_is_required == 'TRUE' || source.u_is_required == 'yes' || source.u_is_required == 'YES') {
            target.is_required = true;
        } else {
            target.is_required = false;
        }
        if (source.u_is_deleted == 'true' || source.u_is_deleted == 'TRUE' || source.u_is_deleted == 'yes' || source.u_is_deleted == 'YES') {
            target.is_deleted = true;
        } else {
            target.is_deleted = false;
        }
    }

})(source, target, map, log, action === "update");