(function() {
	data.isLobbyAdmin = false;
	data.isHost = false;
	data.isVisitor = false;

	if(gs.hasRole('x_aleen_snguardian.lobby_admin') || gs.hasRole('x_aleen_snguardian.host')){
		data.isLobbyAdmin = true;
	}
	if(gs.hasRole('x_aleen_snguardian.host')){
		data.isHost = true;
	}
	if(gs.hasRole('x_aleen_snguardian.portal') ){
		data.isVisitor = true;
	}
})();