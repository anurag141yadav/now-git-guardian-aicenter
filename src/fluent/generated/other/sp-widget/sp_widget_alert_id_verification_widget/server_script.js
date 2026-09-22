(function() {

	data.cameraWidgets = [];
	//var scanTypeOption = options.scan_type || 'id_capture';
	//load(scanTypeOption);
	
	if(gs.hasRole('x_aleen_snguardian.lobby_admin') ){
		data.isLobbyAdmin = true;
	}else{
		data.isLobbyAdmin = false;
	}
	var scanType = "";

	if(input && input.locationValue && input.locationValue!=''){
		data.cameraWidgets = [];
		var lobbyConfig = new VisitorHelper().getLobbyConfig(input.locationValue);
		scanType = JSON.parse(lobbyConfig).idScanType;
		if(!input.submitForVerification){
			return load(scanType);
		}else if(input.verifyData && (input.submitForVerification || input.submitForVerification!='')){
			var grSystem = new GlideRecordSecure('x_aleen_snguardian_system_features');
			grSystem.addQuery('feature.code',"ID-AUTHENTICITY-VERIFICATION");
			grSystem.addQuery('value=yes^ORvalue=true');
			grSystem.setLimit(1);
			grSystem.query();
			if(grSystem.next()){
				var sys_number = grSystem.getDisplayValue('system.number');
				var provHelper = new ProvisioningHelper(sys_number);
				var requestBodyObj = JSON.parse(input.verifyData);
				requestBodyObj.scanType = scanType;
				requestBodyObj.visitor = input.visitorSysId;
				data.verificationResult = provHelper.execute(requestBodyObj, "GET-USER",{});
				if(input.visitorSysId=="" || input.visitorSysId=="CREATE" || input.visitorSysId=="NEW"){
					var metadataGlideRecordHelper = new MetadataGlideRecordHelper();
					if(data.verificationResult.documentInformation.documentType=="DriverLicense"){
						data.verificationResult.documentInformation.documentType = "DL";
					}
					data.verificationResult.documentInformation.currentTime = new GlideDateTime().getDisplayValue().toString();
					if(data.verificationResult.success){
						var visitorStatus = metadataGlideRecordHelper.getRecordSysIdByCode("x_aleen_snguardian_visitor_status","VERIFIED").toString();
						data.verificationResult.documentInformation.visitorStatus = visitorStatus;
					}
				}
				return data;
			}
		}
	}else if(!options || !options.locationValue){
		return load(scanType);
	}

	function load(scanType){
		if (scanType==='image_capture') {
			data.notRequired = false;
			data.title = "Capture Your Image";
			data.subtitle = "Please capture your live photo. Ensure the surrounding is clear. Please note, no Static-Photo is allowed";
			var cam = {};
			cam.text = "Visitor Photo(Face)";
			var optionsData = {};
			optionsData["videoId"]= "video-image-capture-photo";
			optionsData["photoId"]= "photo-image-capture-photo";
			optionsData["imageId"]= "image-image-capture-photo";
			cam.widget = $sp.getWidget('alert-visitor-camera-capture',optionsData);
			data.cameraWidgets.push(cam);
			return data;
		} 
		else if (scanType==='id_capture')  {
			data.title = "Upload Your ID";
			data.notRequired = false;
			data.subtitle = "Please upload both the front and back images of your ID card. Ensure all details are visible and legible.";
			var id_capture_cam = {};
			id_capture_cam.text = "Front side of ID";
			var id_capture_cam_options = {};
			id_capture_cam_options["videoId"]= "video-id-capture-front";
			id_capture_cam_options["photoId"]= "photo-id-capture-front";
			id_capture_cam_options["imageId"]= "image-id-capture-front";
			id_capture_cam.widget = $sp.getWidget('alert-visitor-camera-capture',id_capture_cam_options);
			data.cameraWidgets.push(id_capture_cam);
			id_capture_cam = {};
			id_capture_cam.text = "Back side of ID";
			id_capture_cam_options = {};
			id_capture_cam_options["videoId"]= "video-id-capture-back";
			id_capture_cam_options["photoId"]= "photo-id-capture-back";
			id_capture_cam_options["imageId"]= "image-id-capture-back";
			id_capture_cam.widget = $sp.getWidget('alert-visitor-camera-capture',id_capture_cam_options);
			data.cameraWidgets.push(id_capture_cam);
			return data;
		}
		else if (scanType==='id_verification')  {
			data.notRequired = false;
			data.title = "Verify Your ID";
			data.subtitle = "Upload both the front and back images of your ID card, along with your live Photo. We will validate the information, check expiration dates, and detect any signs of document forgery.";
			var verification_cam = {};
			verification_cam.text = "Front side of ID";
			var verification_cam_options = {};
			verification_cam_options["videoId"]= "video-id-verification-front";
			verification_cam_options["photoId"]= "photo-id-verification-front";
			verification_cam_options["imageId"]= "image-id-verification-front";
			verification_cam.widget = $sp.getWidget('alert-visitor-camera-capture',verification_cam_options);
			data.cameraWidgets.push(verification_cam);
			verification_cam = {};
			verification_cam.text = "Back side of ID";
			verification_cam_options = {};
			verification_cam_options["videoId"]= "video-id-verification-back";
			verification_cam_options["photoId"]= "photo-id-verification-back";
			verification_cam_options["imageId"]= "image-id-verification-back";
			verification_cam.widget = $sp.getWidget('alert-visitor-camera-capture',verification_cam_options);
			data.cameraWidgets.push(verification_cam);
			verification_cam = {};
			verification_cam.text = "Visitor Photo(Face)";
			verification_cam_options = {};
			verification_cam_options["videoId"]= "video-id-verification-photo";
			verification_cam_options["photoId"]= "photo-id-verification-photo";
			verification_cam_options["imageId"]= "image-id-verification-photo";
			verification_cam.widget = $sp.getWidget('alert-visitor-camera-capture',verification_cam_options);
			data.cameraWidgets.push(verification_cam);
			return data;
		}
		else if (scanType==='id_live_verification')  {	
			data.notRequired = false;
			data.title = "ID Live Verification";
			data.subtitle = "Capture clear images of your ID's front and back, along with a live photo. We will validate authenticity, check expiration dates, and verify your identity.";
			var live_verification_cam = {};
			live_verification_cam.text = "Front side of ID";
			var live_verification_cam_options = {};
			live_verification_cam_options["videoId"]= "video-id-live-verification-front";
			live_verification_cam_options["photoId"]= "photo-id-live-verification-front";
			live_verification_cam_options["imageId"]= "image-id-live-verification-front";
			live_verification_cam.widget = $sp.getWidget('alert-visitor-camera-capture',live_verification_cam_options);
			data.cameraWidgets.push(live_verification_cam);
			live_verification_cam = {};
			live_verification_cam.text = "Back side of ID";
			live_verification_cam_options = {};
			live_verification_cam_options["videoId"]= "video-id-live-verification-back";
			live_verification_cam_options["photoId"]= "photo-id-live-verification-back";
			live_verification_cam_options["imageId"]= "image-id-live-verification-back";
			live_verification_cam.widget = $sp.getWidget('alert-visitor-camera-capture',live_verification_cam_options);
			data.cameraWidgets.push(live_verification_cam);
			live_verification_cam = {};
			live_verification_cam.text = "Visitor Photo(Face)";
			live_verification_cam_options = {};
			live_verification_cam_options["videoId"]= "video-id-live-verification-photo";
			live_verification_cam_options["photoId"]= "photo-id-live-verification-photo";
			live_verification_cam_options["imageId"]= "image-id-live-verification-photo";
			live_verification_cam.widget = $sp.getWidget('alert-visitor-camera-capture',live_verification_cam_options);
			data.cameraWidgets.push(live_verification_cam);
			return data;
		}else if(scanType==='not_required'){
			data.notRequired = true;
			data.title = "Capture Your ID Card";
			data.subtitle = "Please upload a clear image of the front side of your ID card. Ensure all details are visible and legible.";	
			return data;
		}
	}
})();
