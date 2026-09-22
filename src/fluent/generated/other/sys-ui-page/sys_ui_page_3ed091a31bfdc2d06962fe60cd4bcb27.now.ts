import { UiPage } from '@servicenow/sdk/core'

UiPage({
    $id: Now.ID['3ed091a31bfdc2d06962fe60cd4bcb27'],
    category: 'general',
    endpoint: 'x_aleen_snguardian_Print_Workspace.do',
    html: `<?xml version="1.0" encoding="utf-8" ?>
<j:jelly trim="false" xmlns:j="jelly:core" xmlns:g="glide" xmlns:j2="null" xmlns:g2="null">
<g:requires name="x_aleen_snguardian.qrcodejs_min.jsdbx" />
<style>
button{
  background-color: #04AA6D; /* Green */
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 10px;
  }</style>
<g:ui_form>
	
	<!-- <g:evaluate var="jvar_badgeid" expression="RP.getWindowProperties().sysparam_badgeid.toString()" />
	<g:evaluate var="jvar_user" expression="RP.getWindowProperties().sysparam_user.toString()" /> -->
	<g:evaluate var="jvar_badgeid" expression="RP.getParameterValue('sysparm_badge')"/>
	<g:evaluate var="jvar_user" expression="RP.getParameterValue('sysparm_user')"/>
	<g:evaluate var="jvar_idenAsset" expression="RP.getParameterValue('sysparm_idsset')"/>
	<g:evaluate jelly="true" object="true">
		var identityAssetRecord=new GlideRecordSecure("x_aleen_snguardian_identity_asset");
 	  	identityAssetRecord.addQuery("sys_id",jelly.jvar_idenAsset);   
		identityAssetRecord.query();
	</g:evaluate>
	<j:while test="\${HTML:identityAssetRecord.next()}">
		<j:set var="jvar_validTo" value="\${HTML:identityAssetRecord.getValue('valid_to')}"></j:set>
		<j:set var="jvar_badge_status" value="\${HTML:identityAssetRecord.getDisplayValue('status.code')}"></j:set>
	</j:while>
	
	<g:evaluate jelly="true" object="true">
		var identityRecord=new GlideRecordSecure("x_aleen_snguardian_identity");
 	  	identityRecord.addQuery("sys_id",jelly.jvar_user);   
		identityRecord.query();
	</g:evaluate>
	<j:while test="\${HTML:identityRecord.next()}">
		<j:set var="jvar_name" value="\${HTML:identityRecord.getValue('first_name')}"></j:set>
		<j:set var="jvar_last_name" value="\${HTML:identityRecord.getValue('last_name')}"></j:set>
		<j:set var="jvar_photo" value="\${HTML:identityRecord.getValue('photo')}"></j:set>
		<j:set var="jvar_type" value="\${HTML:identityRecord.getDisplayValue('type')}"></j:set>
	
	</j:while>
	
	<g:evaluate jelly="true" object="true">
		var assetRecord=new GlideRecordSecure("x_aleen_snguardian_asset");
 	  	assetRecord.addQuery("sys_id",jelly.jvar_badgeid);   
		assetRecord.query();
	</g:evaluate>
	<j:while test="\${HTML:assetRecord.next()}">
		<j:set var="jvar_bId" value="\${HTML:assetRecord.getValue('number')}"></j:set>  
	</j:while>

	<g:evaluate jelly="true" object="true"> 
		var templateRecord=new GlideRecordSecure("x_aleen_snguardian_badge_template");
		templateRecord.addQuery('type',jelly.jvar_type);    
		templateRecord.query();
	</g:evaluate>
	
	<input type="hidden" id="frontSide" name="frontSide" value="\${HTML:jvar_front}"></input>
	<input type="hidden" id="backSide" name="backSide" value="\${HTML:jvar_back}"></input> 
	<input type="hidden" id="badgeid" name="badgdeid" value="\${HTML:jvar_bId}"></input> 
	<input type="hidden" id="user_name" name="user_name" value="\${HTML:jvar_name} \${HTML:jvar_last_name}"></input>
	<input type="hidden" id="user_photo" name="user_photo" value="\${HTML:jvar_photo}"></input> 
	<input type="hidden" id="user_valid_to" name="user_valid_to" value="\${HTML:jvar_validTo}"></input>
	<input type="hidden" id="badge_status" name="badge_status" value="\${HTML:jvar_badge_status}"></input>

	
	<div style="padding: 5px 10px; display: flex; width: 100%; justify-content: center;">
	<select id="template" name="Template" onchange="changeTemplate()" style="width: 200px;padding: 5px;text-align: center;">
		<option value="front">----Front-----</option>
		<option value="back">----Back-----</option>
	</select>
	</div>
	
</g:ui_form>

<div id="printableArea" style="display: flex; width: 100%; justify-content: center;"></div>
<div style="padding: 5px 10px; display: flex; width: 100%; justify-content: center;">
	<select id="templateSelect" name="templateSelect" onchange="onTemplateChange()" 
			style="width: 200px;padding: 5px;text-align: center;">
		<j:while test="\${HTML:templateRecord.next()}">
			<option 
				value="\${HTML:templateRecord.getUniqueValue()}"
				data-front="\${HTML:templateRecord.getValue('front')}"
				data-back="\${HTML:templateRecord.getValue('back')}"
			>
				\${HTML:templateRecord.getDisplayValue('name')}
			</option>
		</j:while>
	</select>
</div>
<footer class="modal-footer flex">
    <g:dialog_buttons_ok_cancel  ok_text="Print" ok_title="Print" ok_type="button" 
								 ok="return onPrint();"  cancel="return onCancel();" cancel_type="button"/>
</footer>
</j:jelly>`,
    clientScript: `addLoadEvent(function() {
	onTemplateChange();
    var date = document.getElementById('user_valid_to').value;
    date = date.split(' ')[0];
    var mapObj = {
        "badge_id": document.getElementById('badgeid').value,
        "user_name": document.getElementById('user_name').value,
        "user_valid_to": date,
        "QR": generateQRCode(),
        "photo": document.getElementById('user_photo').value
    };

    var front_string = document.getElementById("frontSide").value.toString();
    var start = "$";
    var mid = "{";
    var end = "}";
    for (var mapKey in mapObj) {
        var replaceKey = start + mid + mapKey + end;
        var replaceKey2 = "$⁠{(" + mapKey + ")}";
        var replaceKey3 = "$⁠{" + mapKey + "}";
        var replaceKey4 = "##" + mapKey + "##";
        if (front_string.indexOf(replaceKey) != -1) {
            front_string = front_string.replaceAll(replaceKey, mapObj[mapKey]);
        }
        if (front_string.indexOf(replaceKey2) != -1) {
            front_string = front_string.replaceAll(replaceKey2, mapObj[mapKey]);
        }
        if (front_string.indexOf(replaceKey3) != -1) {
            front_string = front_string.replaceAll(replaceKey3, mapObj[mapKey]);
        }
        if (front_string.indexOf(replaceKey4) != -1) {
            front_string = front_string.replaceAll(replaceKey4, mapObj[mapKey]);
        }
    }
    document.getElementById("printableArea").innerHTML = front_string;

});

function changeTemplate() {
    var date = document.getElementById('user_valid_to').value;
    date = date.split(' ')[0];
    var mapObj = {
        "badge_id": document.getElementById('badgeid').value,
        "user_name": document.getElementById('user_name').value,
        "user_valid_to": date,
        "QR": generateQRCode(),
        "photo": document.getElementById('user_photo').value
    };
    var replacableString = "";
    if (gel("template").value == 'front' && document.getElementById("frontSide") != null) {
        replacableString = document.getElementById("frontSide").value.toString();
    } else {
        replacableString = document.getElementById("backSide").value.toString();
    }
    var start = "$";
    var mid = "{";
    var end = "}";
    for (var mapKey in mapObj) {
        var replaceKey = start + mid + mapKey + end;
        var replaceKey2 = "$⁠{(" + mapKey + ")}";
        var replaceKey3 = "$⁠{" + mapKey + "}";
        var replaceKey4 = "##" + mapKey + "##";
        if (replacableString.indexOf(replaceKey) != -1) {
            replacableString = replacableString.replaceAll(replaceKey, mapObj[mapKey]);
        }
        if (replacableString.indexOf(replaceKey2) != -1) {
            replacableString = replacableString.replaceAll(replaceKey2, mapObj[mapKey]);
        }
        if (replacableString.indexOf(replaceKey3) != -1) {
            replacableString = replacableString.replaceAll(replaceKey3, mapObj[mapKey]);
        }
        if (replacableString.indexOf(replaceKey4) != -1) {
            replacableString = replacableString.replaceAll(replaceKey4, mapObj[mapKey]);
        }
    }
    document.getElementById("printableArea").innerHTML = replacableString;
}

function onTemplateChange() {
    var dropdown = document.getElementById("templateSelect");
    var option = dropdown.options[dropdown.selectedIndex];

    var front = option.getAttribute("data-front");
    var back  = option.getAttribute("data-back");
    // Update hidden fields
    document.getElementById("frontSide").value = front;
    document.getElementById("backSide").value = back;

    // OPTIONAL: Trigger UI refresh if your render logic needs it
    if (typeof changeTemplate === "function") {
        changeTemplate();
    }
}

function generateQRCode() {
    var textToEncode = document.getElementById('badgeid').value; // badge id as QR
    var asset_status = document.getElementById('badge_status').value;
    if (asset_status == 'ACTIVE') {
        var tempDiv = document.createElement("div");

        // Generate QR in the temporary container
        var qrcode = new QRCode(tempDiv, {
            text: textToEncode,
            width: 200,
            height: 200,
            colorDark: "#000000",
            colorLight: "#ffffff",
            correctLevel: QRCode.CorrectLevel.H
        });

        //Return the QR image HTML (base64 image tag)
        var imgTag = tempDiv.getElementsByTagName("canvas")[0];
        if (imgTag) {
            var qrDataUrl = imgTag.toDataURL("image/png"); // Base64 encoded QR image
            return qrDataUrl;
        } else {
            jslog("QR canvas not found");
        }
    } else {
        return "";
    }

}

function onCancel() {
    GlideDialogWindow.get().destroy();
    return false;
}

function onPrint() {

    var divContents = document.getElementById("printableArea").innerHTML;
    var a = window.open('', '', 'height=700, width=500');
    setTimeout(function() {
        // Remove the header and footer styles
        var style = document.createElement('style');
        style.type = 'text/css';
        style.innerHTML = \`
		@media print {
		@page { 
			size: auto; 
			margin: 0; 
		}
		header, footer { 
			display: none !important; 
		}
		}
	\`;
        document.head.appendChild(style);
    }, 500);
    a.document.write('<html>');
    a.document.write('<body onload="window.print();window.close()">');
    a.document.write(divContents);
    a.document.write('</body></html>');
    a.document.close();
    //a.print();  
}`,
    $meta: {
        useEsLatest: true,
    },
})
