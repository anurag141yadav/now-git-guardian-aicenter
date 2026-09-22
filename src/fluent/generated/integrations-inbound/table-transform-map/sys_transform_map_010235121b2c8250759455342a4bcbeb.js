(function transformRow(source, target, map, log, isUpdate) {
    if (action == "insert") {
        target.journal = "Source for this record is  - " + source.sys_import_set.number;
        // if (source.u_type && (source.u_type.toLowerCase().includes("worker"))) {
        //    // target.manager = source.u_manager;
        //     //target.location = source.u_location;
        //     target.department = source.u_department;
        // }
    }
    if (source.u_is_deleted == 'true' || source.u_is_deleted == 'TRUE' || source.u_is_deleted == 'yes' || source.u_is_deleted == 'YES') {
        target.is_deleted = true;
    } else {
        target.is_deleted = false;
    }

})(source, target, map, log, action === "update");