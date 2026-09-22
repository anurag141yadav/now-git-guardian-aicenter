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
})();