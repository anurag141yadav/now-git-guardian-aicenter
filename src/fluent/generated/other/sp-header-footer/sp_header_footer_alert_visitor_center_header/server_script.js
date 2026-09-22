(function() {
	data.isMobile = gs.isMobile();
	data.isFavoritesEnabled = 'false';
	data.isPersonalizedAnswer = 'false';
	data.sub = {};
	data.top = {};
	var menu = $sp.getValue("sp_rectangle_menu");
	data.sub.menu = $sp.getWidgetFromInstance(menu);
	data.escNavigation = $sp.getWidget("employee-center-navigation");
	data.top.menu = JSON.parse(JSON.stringify(data.sub.menu));
	var configOptions = JSON.parse((data.top.menu && data.top.menu.options && data.top.menu.options.widget_parameters) || '{}');

	data.moreItemsSysId = '';
	data.hideSearchOnHomepage = true;
	data.showRequests = false;
	data.showTodos = false;
	data.todoCount = 0;
	data.todoCountLabel = '';
	data.isHrCoreActive = false;
	data.link = '?id=hri_user_profile&sys_id=' + gs.getUserID();
	data.login_page = $sp.getValue('login_page');
	var subMenu = data.sub.menu;
	var moreItems;
	if (subMenu && subMenu.data) {
		subMenu.data.replace = true;
		data.hasLogin = false;
		var subMenuDataItems = (subMenu.data.menu && subMenu.data.menu.items) || [];
		for (var i in subMenuDataItems) {
			var item = subMenuDataItems[i];
			if (item.sys_id === data.moreItemsSysId)
				moreItems = item;
			if (item.type === 'page' && item.sp_page === data.login_page)
				data.hasLogin = true;
		}
	}
	if (moreItems && moreItems.items) {
		data.moreItems = moreItems.items;
	} else if (moreItems && moreItems.scriptedItems && moreItems.scriptedItems.items) {
		data.moreItems = moreItems.scriptedItems.items;
	}
	if (moreItems && data.moreItems && moreItems.label) {
		data.moreItems = data.moreItems.filter(function(moreItem) {
			return moreItem.label;
		});
		data.moreItems.forEach(function(moreItem) {
			moreItem.shortLabel = (moreItem.label.length > 60) ? (moreItem.label.substring(0, 60) + '...') : moreItem.label;
		});
	}
	data.showMoreItems = false;
	if (subMenu) {
		if (subMenu.data) {
			subMenu.data.cartWidget = {};
			subMenu.data.showTours = false;
		}
		if (subMenu.options) {
			subMenu.options.enable_cart = false;
		}
	}
	data.showSubMenu = true;
	// if(gs.hasRole("admin")){
	// 	data.showLogoutAvatar = true ;
	// 	data.showSubMenu = true;
	if(gs.hasRole('x_aleen_snguardian.lobby_admin')){
		data.showLogoutAvatar = true ;
		data.showSubMenu = true;
	}else if(gs.hasRole('x_aleen_snguardian.host')){
		data.showLogoutAvatar = true ;
		data.showSubMenu = true;
	}else if(gs.hasRole('x_aleen_snguardian.portal')){
		data.showLogoutAvatar = false ;
		data.showSubMenu = false;
		data.link ="#";
	}else  if(gs.hasRole('x_aleen_snguardian.kiosk')){
		data.showLogoutAvatar = true ;
		data.showSubMenu = false;
		data.autoRefresh = true ;
	}


	if (data.top.menu && data.top.menu.data && data.top.menu.data.menu && data.top.menu.data.menu.items)
		data.top.menu.data.menu.items = [];
	data.loginWidget = $sp.getWidgetFromInstance('login-modal');
	data.avatarDropDown = $sp.getWidget('profile-with-drop-down', {
		"profile_url": data.link,
		"show_xs_avatar": false
	});
})();