function onSubmit() {
	try {
		var required_assertions = g_form.getValue("required_assertions");
		if(required_assertions==null || required_assertions == undefined ||required_assertions == ""){
			return true;
		}
		var required = JSON.parse(required_assertions);
		var existing = JSON.parse(g_form.getValue("user_attestations"));
		var check = required.length;
		for(var i=0;i<required.length;i++){
			for(var k=0;k<existing.length;k++){
				if(required[i].name == existing[k].training_name){
					check=check-1;
				}
			}
		}
		if(check<=0){
			return true;
		}else{
			alert("Required Attestions are not complete");
			return false;
		}
   } catch (e) {
		alert("Required Attestions are not complete");
		return false;
	}

}