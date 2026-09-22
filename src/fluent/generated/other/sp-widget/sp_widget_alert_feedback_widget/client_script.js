api.controller = function($scope) {
     var c = this;
    $scope.activeTab = 'feedback';
    $scope.setActiveTab = function(tab) {
        $scope.activeTab = tab;
    };
    $scope.feedbackType = 'positive';
    $scope.remarks = '';
    $scope.visibility = {
        host: false,
        lobbyAdmin: false,
        visitor: false
    };
    $scope.initiateSurvey = false;
    $scope.chatMessages = []; 
    $scope.chatInput = '';
    $scope.submitFeedback = function() {
        var visibilityList = [];
        if ($scope.visibility.host) visibilityList.push("Host");
        if ($scope.visibility.lobbyAdmin) visibilityList.push("Lobby Admin");
        if ($scope.visibility.visitor) visibilityList.push("Visitor");
        $scope.feedbackType = 'positive';
        $scope.remarks = '';
        $scope.visibility = {
            host: false,
            lobbyAdmin: false,
            visitor: false
        };
        $scope.initiateSurvey = false;
    };
    $scope.sendMessage = function() {
        if ($scope.chatInput.trim()) {
            $scope.chatMessages.push({
                sender: 'me',
                text: $scope.chatInput
            });
            if ($scope.chatInput.toLowerCase().includes("hello")) {
                $scope.chatMessages.push({
                    sender: 'visitor',
                    text: "Hello! How can I assist you today?"
                });
            }
            $scope.chatInput = ''; 
        }
    };
};