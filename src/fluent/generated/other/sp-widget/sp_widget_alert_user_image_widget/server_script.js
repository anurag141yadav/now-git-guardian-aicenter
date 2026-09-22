(function() {
    data.videoId = 'video';
    data.canvasId = 'canvas';
    data.photoId = 'photo';
    data.imageId = 'imageData';
    if (options) {
        data.videoId = options.videoId || 'video';
        data.canvasId = options.canvasId || 'canvas';
        data.photoId = options.photoId || 'photo';
        data.imageId = options.imageId || 'imageData';
    }
    if (input && input.getImage == true) {
        var grIden = new GlideRecordSecure("x_aleen_snguardian_identity");
				var imageId;
				if(grIden.get(input.sys_id)){
					var masterUserId = "";
					masterUserId = grIden.getValue("master_user_id");
					var glideAttachment = new GlideSysAttachment();
					var identityAttachments = glideAttachment.getAttachments("ZZ_YYsys_user", masterUserId);
					while (identityAttachments.next()) {
						imageId = identityAttachments.getUniqueValue();
					}
					if (!imageId) {
						var attachmentId = input.sys_id;
						var specificAttachments = glideAttachment.getAttachments("ZZ_YYx_aleen_snguardian_identity", attachmentId);
						while (specificAttachments.next()) {
							imageId = specificAttachments.getUniqueValue();
						}
						if (!imageId) {
							imageId = grIden.getValue("photo");
						}
					}
				}
        data.image = imageId;
        return data;
    }
})();