(function execute(inputs, outputs) {
    var jsonObj = null;
    if(inputs.data !== null){
        jsonObj = JSON.parse(inputs.data);
    }else{
        jsonObj = JSON.parse('{"systems":[],"roles":[],"assets":[]}');
    }
     if(inputs.system !== null){
        jsonObj.systems.push({"system":inputs.system.sys_id});
    }
    if(inputs.access_level !== null){
        jsonObj.roles.push({"access_level":inputs.access_level.sys_id});
    }
    if(inputs.asset_action !== null){
        jsonObj.assets.push({"asset":"1234"});
    }
    outputs.result = JSON.stringify(jsonObj);
})(inputs, outputs);