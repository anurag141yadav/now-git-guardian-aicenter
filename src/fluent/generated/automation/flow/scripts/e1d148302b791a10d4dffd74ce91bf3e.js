(function execute(inputs, outputs) {

var visitType = inputs.visitor_request.variables.visit_creation_home.visit_type;

var visitorSysId = "";
var is_existing = false;
var visitorHelper = new VisitorHelper();
var visitTypeCode = visitorHelper.getVisitTypeBySysId(visitType);
var allVisitors = [];

if(visitTypeCode == "SINGLE"){
    var visitorInfo = {};
    var visitor_id = inputs.visitor_request.variables.visit_creation_home.visit_visitor_single_visitor_id;
    if(visitor_id =="NEW" ||visitor_id =="CREATE" ){
        visitorInfo.visitor_is_existing = false;
        visitorInfo.visitor_first_name = inputs.visitor_request.variables.visit_visitor_details.visit_visitor_single_first_name;
        visitorInfo.visitor_last_name = inputs.visitor_request.variables.visit_visitor_details.visit_visitor_single_last_name;
        visitorInfo.visitor_phone = inputs.visitor_request.variables.visit_visitor_details.visit_visitor_single_phone;
        visitorInfo.visitor_email = inputs.visitor_request.variables.visit_visitor_details.visit_visitor_single_email;
        //allVisitors.push(visitorInfo);
    }
    else {
        visitorInfo.visitor_is_existing = true;
        var grVisitor = new GlideRecordSecure('x_aleen_snguardian_visitor');
        if(grVisitor.get(visitor_id)){
            visitorInfo.visitor_email = grVisitor.getValue('email');
        }
        visitorInfo.visitor_id = visitor_id; 
    }
    allVisitors.push(visitorInfo);
}else{
    var visitorGroupData = JSON.parse(inputs.visitor_request.variables.visit_visitor_mrvs);
    for(var index=0;index<visitorGroupData.length;index++){
		//query to check is visitor is existing - based on email
        var visitorInfo = {};
		var grVisitorRecord = new GlideRecordSecure('x_aleen_snguardian_visitor');
		grVisitorRecord.addQuery('email',visitorGroupData[index].visit_visitor_email);
		grVisitorRecord.setLimit(1);
        grVisitorRecord.query();
		if(grVisitorRecord.next()){
		    visitorInfo.visitor_is_existing = true;
            visitorInfo.visitor_id = grVisitorRecord.getUniqueValue();
            
		}
		else{
            visitorInfo.visitor_is_existing = false;
            visitorInfo.visitor_first_name = visitorGroupData[index].visit_visitor_first_name;
			visitorInfo.visitor_last_name = visitorGroupData[index].visit_visitor_last_name;
			visitorInfo.visitor_email = visitorGroupData[index].visit_visitor_email;
			visitorInfo.visitor_phone = visitorGroupData[index].visit_visitor_phone;
			
        }	
		allVisitors.push(visitorInfo);	
		
    }

}  
outputs.is_existing = is_existing;
outputs.visit_type = visitTypeCode;
outputs.visitorlist = allVisitors;

})(inputs, outputs);