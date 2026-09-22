(function execute(inputs, outputs) {
    var logger = new AlertGuardianLogger(" Alert Process New Badge Request Data Action:: ");
    var accessArray = []
    var access_levelsObject = inputs.record.variables.assets;
    var data = JSON.parse(access_levelsObject);
    for(var i=0; i<data.length; i++){
      var accessEntry = {};
      accessEntry.asset_record_status  = data[i].asset_record_status;
      if(accessEntry.asset_record_status != "EXISTING"){
        accessEntry.access = data[i].asset;
        accessEntry.status = data[i].asset_status;
        accessEntry.action = data[i].asset_action;
        accessEntry.valid_from = "";
        accessEntry.valid_to = "";
        accessEntry.record_id = "";
      try{
        if(accessEntry.asset_record_status == "EXISTING"){
          accessEntry.record_id = data[i].access_record_id;
        }
      }catch(e){
        logger.error("Exception : reading EXISTING record Id :: " + e + " \nStack\n " + e.stack);
      }
      try{
        var validFromDate = new GlideDateTime(data[i].asset_valid_from);
        accessEntry.valid_from = validFromDate.getDisplayValue();
      }catch(e){
        logger.error(" Reading Valid from : Exception :: " + e + " \nStack\n " + e.stack);
      }
      try{
        var validToDate = new GlideDateTime(data[i].asset_valid_to);
        accessEntry.valid_to = validToDate.getDisplayValue();
      }catch(e){
        logger.error(" Reading Valid To : Exception :: " + e + " \nStack\n " + e.stack);
      }
      accessArray.push(accessEntry);
    }

    }
    outputs.response = accessArray;
  })(inputs, outputs);