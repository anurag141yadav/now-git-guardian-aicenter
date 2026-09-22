(function() {
	if(input && input.funcName=="OnDate"){
		data.datePicker=input.datePicker;
	}
	data.systemDateFormat = gs.getProperty('glide.sys.date_format').trim();
})();