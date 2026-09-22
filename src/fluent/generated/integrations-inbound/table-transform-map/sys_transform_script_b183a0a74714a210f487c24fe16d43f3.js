(function runTransformScript(source, map, log, target /*undefined onStart*/ ) {
    if (source.u_photo && source.u_photo != '') {
        var imageUtil = new ImageUtils();
        if (source.u_photo && source.u_photo != '') {
            var record = imageUtil.base64ToImage('x_aleen_snguardian_u_visitor_importset', source.getUniqueValue(), source.u_first_name + '_image.jpg', source.u_photo, 'image/jpg');
            target.photo = record;
            source.u_photo = record;
        } else {
            source.u_photo = target.photo;
        }
    } else {
        source.u_photo = target.photo;
    }
    // Add your code here

})(source, map, log, target);