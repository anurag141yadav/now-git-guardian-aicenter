function onSubmit() {
  var valid_from = g_form.getValue("existing_valid_from");
    var valid_to = g_form.getValue("existing_valid_to");
    var fromDate = new Date(valid_from.replace(" ", "T"));
    var toDate = new Date(valid_to.replace(" ", "T"));
	if(fromDate>toDate){
		alert("Valid From Date cannot be later than Valid To Date.");
		return false;
	}else{
		return true;
	}
   
}