(function execute(inputs, outputs) {
    var mrvs = inputs.request.variables.identity_details;
    var mrvsIdentities = mrvs===''?[]:JSON.parse(mrvs);
    var emails = '';
    for(var i=0;i<mrvsIdentities.length;i++){
        if(emails.length > 0){
            emails+=','+mrvsIdentities[i].email;
        }else{
            emails+=mrvsIdentities[i].email;
        }
    }
    var requesteeIdentities = [];
    var grIdentity = new GlideRecordSecure('x_aleen_snguardian_identity');
    grIdentity.addQuery('email','IN',emails);
    grIdentity.query();
    while(grIdentity.next()){
        requesteeIdentities.push(grIdentity.getUniqueValue());
    }
    outputs.identities = requesteeIdentities;
})(inputs, outputs);