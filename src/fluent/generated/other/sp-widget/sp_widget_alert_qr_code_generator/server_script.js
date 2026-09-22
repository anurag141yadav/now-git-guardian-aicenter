(function() {
	if(input && input.action && input.action=="fetchVisitorEmail"){
		var grVisitor = new GlideRecordSecure('x_aleen_snguardian_visitor');
		if(grVisitor.get(input.sys_id)){
			data.email = grVisitor.getValue('email');
			return data;
		}
	}
})();