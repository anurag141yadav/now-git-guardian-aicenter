(function execute(inputs, outputs) {
    var logger = new AlertGuardianLogger(" Alert Guardian Action Process NFC Assets:: ");
    function isWebProv() {
        try {
            var isWebProv = inputs.request.variables.web_provision; // Yes, No
            logger.debug("isWebProv: Web Provisioning is enabled ::-> " + isWebProv);
            outputs.iswebprov = isWebProv == "Yes" ? true : false;
        } catch (e) {
            logger.error("isWebProv Exception :: " + e + " \nStack\n " + e.stack);
		}
    }
    try {
        logger.debug("isWebProv : Process NFC Badge asset json " + inputs.request.variables.assets);
        var assetList = [];
        var idenAssetObj = {};
        var grAsset = new GlideRecordSecure("x_aleen_snguardian_asset");
        var childSystem;
        var asset = JSON.parse(inputs.request.variables.assets);
        for (var index = 0; index < asset.length; index++) {
            var assetId = asset[index]["asset"];
            idenAssetObj.asset = assetId;
            idenAssetObj.identity = inputs.request.request_for;
            var validFromDate = GlideDateTime(asset[index]["asset_valid_from"]);
            idenAssetObj.valid_from = validFromDate.getDisplayValue();
            var validToDate = GlideDateTime(asset[index]["asset_valid_to"]);
            idenAssetObj.valid_to = validToDate.getDisplayValue();
            grAsset.initialize();
            if(grAsset.get(assetId)){
                var subtype = grAsset.getDisplayValue("sub_type");
            }
            if (subtype == "HID") {
                childSystem = "HID";
            } else if (subtype == "Wavelynx" && childSystem != "HID") {
                childSystem = "Wavelynx";
            }
            assetList.push(idenAssetObj);
        }
        logger.debug("isWebProv: Assets in MRVS length "+assetList.length);
        if(assetList.length>0){
            outputs.resultlistoutput = assetList;
            outputs.mrvssize = assetList.length>0?assetList.length:0;
            outputs.hasmrvs=true;
        }else{
            logger.debug("isWebProv: No assets in mrvs")
            outputs.hasmrvs=true;
            outputs.mrvssize = 0;
        }
    } catch (e) {
		logger.error("isWebProv Exception : Processing MRVS : continuing with auto approval procedure :: " + e + " \nStack\n " + e.stack);
		outputs.resultlistoutput = undefined;
        outputs.mrvssize = 0;
		outputs.hasmrvs=false;
	}

})(inputs, outputs);