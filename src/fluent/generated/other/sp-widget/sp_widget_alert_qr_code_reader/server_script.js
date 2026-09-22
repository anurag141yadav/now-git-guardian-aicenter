(function() {
	data.data_type = 'string';
	if(options){
		data.data_type = options.data_type || 'string';
		data.data_attribute = options.data_attribute || 'data';
	}
})();