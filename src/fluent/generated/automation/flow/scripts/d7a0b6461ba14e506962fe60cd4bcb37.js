(function execute(inputs, outputs) {
    if(inputs.record.type == "EXPIRY_BADGE"){
        new AccessReviewHelper(inputs.record, true).processAssets();    
    }
    else if(inputs.record.type == "EXPIRY_TRAINING"){
        new AccessReviewHelper(inputs.record, true).processAssertions(); 
    }
    else if(inputs.record.type == "OTHERS"){
        new AccessReviewHelper(inputs.record, true).processUsers();
    }
    else{
        new AccessReviewHelper(inputs.record, true).processAccess();
    }

    
    
})(inputs, outputs);