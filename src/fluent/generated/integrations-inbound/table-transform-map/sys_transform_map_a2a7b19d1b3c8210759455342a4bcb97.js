(function transformRow(source, target, map, log, isUpdate) {

    if (source.u_config_type != 'Function') {
        ignore = true;
    } else {
        if (source.u_is_deleted == 'true' || source.u_is_deleted == 'TRUE' || source.u_is_deleted == 'yes' || source.u_is_deleted == 'YES') {
            target.is_deleted = true;
        } else {
            target.is_deleted = false;
        }
        if (source.u_pre_validation_required == 'true' || source.u_pre_validation_required == 'TRUE' || source.u_pre_validation_required == 'yes' || source.u_pre_validation_required == 'YES') {
            target.pre_validation_required = true;
        } else {
            target.pre_validation_required = false;
        }
		if (source.u_supports_background_job == 'true' || source.u_supports_background_job == 'TRUE' || source.u_supports_background_job == 'yes' || source.u_supports_background_job == 'YES') {
            target.supports_background_job = true;
        } else {
            target.supports_background_job = false;
        }
    }

})(source, target, map, log, action === "update");