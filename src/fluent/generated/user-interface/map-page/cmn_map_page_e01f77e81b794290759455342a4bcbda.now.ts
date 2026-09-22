import { Record } from '@servicenow/sdk/core'

Record({
    $id: Now.ID['e01f77e81b794290759455342a4bcbda'],
    table: 'cmn_map_page',
    data: {
        center_address: 'Yogododji, Africa',
        center_latitude: '14.883333',
        center_longitude: '-1.766667',
        controls_size: 'large',
        disable_nav_bar: 'false',
        initial_zoom: '3',
        name: 'x_aleen_snguardian_location_map',
        overview: 'false',
        refresh_on_zoom: 'false',
        script: `var instanceURL = gs.getProperty("glide.servlet.uri");
var grLocation = new GlideRecordSecure("x_aleen_snguardian_location");
grLocation.addNotNullQuery("latitude");
grLocation.addNotNullQuery("longitude");
grLocation.query();
while (grLocation.next()) {
    var item = map.addItem(grLocation);
    item.name = grLocation.getValue('name');
    item.table = "x_aleen_snguardian_location";
    item.sys_id = grLocation.getUniqueValue();
    item.marker_label = grLocation.getDisplayValue('name');
    item.html = _buildWOTHTML(grLocation);
    item.latitude = grLocation.getValue('latitude');
    item.longitude = grLocation.getValue('longitude');
    item.icon = "x_aleen_snguardian.location_pin.png";
    item.icon_width = "24";
    item.icon_height = "32";
}

function _buildWOTHTML(grLocation) {
    var s = [];
	
	var gaIdentityLocation = new GlideAggregate('x_aleen_snguardian_identity_location');
	gaIdentityLocation.addAggregate('COUNT', 'identity');
    gaIdentityLocation.addQuery('location', grLocation.getUniqueValue());
	gaIdentityLocation.query();
	var totalEmployees = 0;
	if(gaIdentityLocation.next()){
		totalEmployees = gaIdentityLocation.getAggregate('COUNT','identity');
	}

	var gaAssetLocation = new GlideAggregate('x_aleen_snguardian_asset_location');
	gaAssetLocation.addAggregate('COUNT', 'asset');
    gaAssetLocation.addQuery('location', grLocation.getUniqueValue());
	gaAssetLocation.query();
	var assetLocations = 0;
	if(gaAssetLocation.next()){
		assetLocations = gaAssetLocation.getAggregate('COUNT','asset');
	}

	var gaAccessLocation = new GlideAggregate('x_aleen_snguardian_access_location');
	gaAccessLocation.addAggregate('COUNT', 'access_level');
    gaAccessLocation.addQuery('location', grLocation.getUniqueValue());
	gaAccessLocation.query();
	var accessLocations = 0;
	if(gaAccessLocation.next()){
		accessLocations = gaAccessLocation.getAggregate('COUNT','access_level');
	}

    var outerCard = 'style="background-color:#1f8476; padding:10px ;border-radius: 5px;  display:flex;  gap:10px"';
    var innerCard = 'style="background-color:#f5f5f5; border-radius:8px; box-shadow:2px 2px 10px rgba(0, 0, 0, 0.1); width:160px; height:120px;display:flex;flex-direction:column"';
    var leftSection = 'style="flex:50%; height:90px; margin-left:10px; margin-bottom:0px;"';
    var rightSection = 'style="flex:50%; height:90px; margin-right:5px; margin-bottom:0px;"';
    var locationRecords = instanceURL+"x/aleen/guardian-badge-office-workspace/simplelist/x_aleen_snguardian_identity_location/params/list-title/Cardholders/query/location%3d"+grLocation.getUniqueValue();
    var accessLocationRecords = instanceURL+"x/aleen/guardian-badge-office-workspace/simplelist/x_aleen_snguardian_access_location/params/list-title/Accesslevels/query/location%3d"+grLocation.getUniqueValue();
    var assetLocationRecords = instanceURL+"x/aleen/guardian-badge-office-workspace/simplelist/x_aleen_snguardian_asset_location/params/list-title/Assets/query/location%3d"+grLocation.getUniqueValue();
    var buildingLocationRecords = instanceURL+"x/aleen/guardian-badge-office-workspace/simplelist/x_aleen_snguardian_building/params/list-title/Buildings/query/location%3d"+grLocation.getUniqueValue();
    
	s.push('<div class="outer-card" ' + outerCard + '>');
	s.push('<div style="width:0px;height:0px;"><a href="#"></a> </div>');
    s.push('<div class="inner-card" ' + innerCard + '><div id="identityTop" style="height:90px;display:flex;"><div class="left-section" ' + leftSection + '><div style="font-size:36px; padding-top: 20px;padding-left: 5px;">' + totalEmployees + '</div></div><div class="right-section" ' + rightSection + '><div><img style="margin-top: 15px;" src="x_aleen_snguardian.employees.png" width=48" height="48"></div></div></div><div id="identitylabel" style="height:30px; font-size: 18px;width: 100%;text-align: center;"><a href=' + locationRecords + ' target="_blank">Cardholders</a></div></div>');
    s.push('<div class="inner-card" ' + innerCard + '><div id="accesstop" style="height:90px;display:flex;"><div class="left-section" ' + leftSection + '><div style="font-size:36px; padding-top: 20px;padding-left: 5px;">' + accessLocations + '</div></div><div class="right-section" ' + rightSection + '><div><img style="margin-top: 15px;" src="x_aleen_snguardian.access.jpg" width=48" height="48"></div></div></div><div id="accesslabel" style="height:30px; font-size: 18px;width: 100%;text-align: center;"><a href=' + accessLocationRecords + ' target="_blank">Access Levels</a></div></div>');
	s.push('<div class="inner-card" ' + innerCard + '><div id="assetTop" style="height:90px;display:flex;"><div class="left-section" ' + leftSection + '><div style="font-size:36px; padding-top: 20px;padding-left: 5px;">' + assetLocations + '</div></div><div class="right-section" ' + rightSection + '><div><img style="margin-top: 15px;" src="x_aleen_snguardian.asset.jpg" width=48" height="48"></div></div></div><div id="assetlabel" style="height:30px; font-size: 18px;width: 100%;text-align: center;"><a href=' + assetLocationRecords + ' target="_blank">Assets</a></div></div>');
    s.push('<div style="width:0px;height:0px;"><a href="#"></a> </div>');
	s.push('</div>');
    return s.join("");
}`,
        show_device_location: 'true',
        suffix: 'location_map',
        type: 'normal',
        type_selection: 'buttons',
        use_advanced_configuration: 'false',
    },
    $meta: {
        useEsLatest: true,
    },
})
