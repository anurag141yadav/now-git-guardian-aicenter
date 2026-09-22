api.controller = function($scope, $rootScope, $timeout) {
    //TODO:onload: start camera should be visible if availableCameras > 0 else "No Cam found"
    //TODO: if timeout show Message to user to start again
    //TODO: time to capture photo button (60Sec)  - OPTIONAL
    //TODO: events , no cam found, cam opened, captured, not captured, cleared
    //TODO: auto capture
    var c = this;
    $scope.isCaptured = false;
    $scope.photoData = '';
    $scope.availableCameras = [];
    $scope.noCamFound = false;
    $scope.remainingTime = 60;
    $scope.selectedCameraId = null;
    var videoStream = null;
    var loadDiv = false;
    $scope.getAvailableCameras = function() {
        navigator.mediaDevices.enumerateDevices()
            .then(function(devices) {
                $scope.availableCameras = devices.filter(function(device) {
                    return device.kind === 'videoinput';
                });
                if ($scope.availableCameras.length > 0) {
                    $scope.noCamFound = false;
                    $scope.loadDiv = true;
                    $scope.selectedCameraId = $scope.availableCameras[0].deviceId;
                    $scope.startCamera($scope.selectedCameraId);
                } else {
                    $scope.noCamFound = true;
                    $scope.loadDiv = false;
                }
                $scope.$apply();
            })
            .catch(function(err) {
            });
    };
    $scope.startCamera = function(cameraId) {
        $scope.stopCamera();
        navigator.mediaDevices.getUserMedia({
                video: {
                    deviceId: cameraId ? {
                        exact: cameraId
                    } : undefined
                }
            })
            .then(function(stream) {
                if (videoStream) {
                    var tracks = videoStream.getTracks();
                    tracks.forEach(function(track) {
                        track.stop();
                    });
                    videoStream = null;
                }
                videoStream = stream;
                var video = document.getElementById(c.data.videoId);
                video.srcObject = stream;
                $scope.resetInactivityTimeout();
                $scope.startTimer();
            })
            .catch(function(err) {
            });
    };
    $scope.stopCamera = function() {
        if (videoStream) {
            var tracks = videoStream.getTracks();
            tracks.forEach(function(track) {
                track.stop();
            });
            videoStream = null;
        }
        $scope.clearInactivityTimeout();
        $scope.cancelTimeout();
    };
    $scope.capturePhoto = function() {
        
        var video = document.getElementById(c.data.videoId);
        var canvas = document.createElement('canvas'); // Note: 'canvas' is the tag name, not an ID
        canvas.width = video.videoWidth; // Native resolution
        canvas.height = video.videoHeight;
        var context = canvas.getContext('2d');
        context.drawImage(video, 0, 0, canvas.width, canvas.height);

        // Use high-quality JPEG (0.92 = 92% quality)
        $scope.photoData = canvas.toDataURL('image/jpeg', 0.92);
        $scope.isCaptured = true;
        $scope.stopCamera();
        document.getElementById(c.data.imageId).value = $scope.photoData;
        $rootScope.$emit('alert-photo-captured', "YES");
        $rootScope.$emit('alert-cam-photo', $scope.photoData);

    };
    $scope.retakePhoto = function() {
        $scope.isCaptured = false;
        $scope.photoData = '';
        $rootScope.$emit('alert-photo-captured', "NO");
        $rootScope.$emit('alert-cam-photo', $scope.photoData);
        $scope.startCamera($scope.selectedCameraId);
    };
    $scope.detect = function() {
        $scope.noCamFound = false;
        $scope.getAvailableCameras();
    };
    $scope.$on('$destroy', function() {
        $scope.stopCamera();
    });
    window.onbeforeunload = function() {
        $scope.stopCamera();
    };
    window.onunload = function() {
        $scope.stopCamera();
    };
    $scope.resetInactivityTimeout = function() {
        $scope.clearInactivityTimeout();
        $scope.inactivityTimeout = setTimeout(function() {
            $scope.stopCamera();
            $scope.isCaptured = false;
            $scope.photoData = '';
            $scope.loadDiv = false;
            $scope.$apply();
            $rootScope.$emit('alert-photo-captured', "NO");
            $rootScope.$emit('alert-cam-photo', $scope.photoData);
        }, 60000);
    };
    $scope.clearInactivityTimeout = function() {
        if ($scope.inactivityTimeout) {
            clearTimeout($scope.inactivityTimeout);
            inactivityTimeout = null;
        }
    };

    $scope.startTimer = function() {
        $scope.remainingTime = 60;
        var countdown = function() {
            if ($scope.remainingTime > 0) {
                $scope.remainingTime--;
                $scope.timeoutPromise = $timeout(countdown, 1000);
            } else {
                $scope.cancelTimeout();
            }
        };
        countdown();
    };

    $scope.cancelTimeout = function() {
        $scope.remainingTime = 60;
        if ($scope.timeoutPromise) {
            $timeout.cancel($scope.timeoutPromise);
            $scope.timeoutPromise = null;
        }
    };

};