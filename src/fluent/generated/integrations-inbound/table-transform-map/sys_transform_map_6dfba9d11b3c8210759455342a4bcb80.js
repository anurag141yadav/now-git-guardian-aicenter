(function transformRow(source, target, map, log, isUpdate) {

    if (source.u_config_type != 'Parameter') {
        ignore = true;
    } else {
        if (source.u_is_deleted == 'true' || source.u_is_deleted == 'TRUE' || source.u_is_deleted == 'yes' || source.u_is_deleted == 'YES') {
            target.is_deleted = true;
        } else {
            target.is_deleted = false;
        }
    }

})(source, target, map, log, action === "update");