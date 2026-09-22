(function runTransformScript(source, map, log, target /*undefined onStart*/ ) {
	if(source.u_photo && source.u_photo!=''){
		var systemGr = new GlideRecordSecure('x_aleen_snguardian_system');
		systemGr.addQuery('code', source.u_source_system_code);
		systemGr.query();
		if (systemGr.next()) {
			var systemUtil = new SystemUtil(systemGr.getValue('number'));
			var supportUserPhoto = systemUtil.getSystemFeature('SUPPORT-USER-PHOTO');
			if (supportUserPhoto.next()) {
				var featureValue = supportUserPhoto.getValue('value');
				if (featureValue.toLowerCase() == 'yes' || featureValue.toLowerCase() == 'true') {
					var imageUtil = new ImageUtils();
					if (source.u_photo && source.u_photo != '') {
						var record = imageUtil.base64ToImage('x_aleen_snguardian_u_import_set_user', source.getUniqueValue(), source.u_first_name + '_image.jpg', source.u_photo, 'image/jpg');
						// return record ? record : "";
						target.photo = record;
						source.u_photo = record;
					}
				}
				
			}
		}
	}else{
		source.u_photo = target.photo;
	}
    // Add your code here

})(source, map, log, target);