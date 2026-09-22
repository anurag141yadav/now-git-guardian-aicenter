api.controller = function($scope, $rootScope, $timeout) {
    //TODO:onload: start camera should be visible if availableCameras > 0 else "No Cam found"
    //TODO: if timeout show Message to user to start again
    //TODO: time to capture photo button (60Sec)  - OPTIONAL
    //TODO: events , no cam found, cam opened, captured, not captured, cleared
    //TODO: auto capture
    var c = this;
    var gForm = $scope.page.g_form;
    $scope.isCaptured = false;
    $scope.photoData = '';
    $scope.availableCameras = [];
    $scope.noCamFound = false;
    $scope.remainingTime = 60;
    $scope.selectedCameraId = null;
    var videoStream = null;
    var loadDiv = false;
    //---------------------------
    $rootScope.$on("field.change", function(evt, parms) {
        //c.data.image = "";
        if (parms.field.name == 'request_for') {
            c.data.value1 = parms.newValue;
            c.server.get({
                getImage: true,
                sys_id: parms.newValue
            }).then(function(response) {
                c.data.image = response.data.image;
            });
        }
    });
    //---------------------------------------
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
                console.error("Error listing cameras: ", err);
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
                console.error("Error accessing the camera: ", err);
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
        var canvas = document.createElement(c.data.canvasId);
        canvas.width = 320;
        canvas.height = 240;
        var context = canvas.getContext('2d');
        context.drawImage(video, 0, 0, canvas.width, canvas.height);
        $scope.photoData = canvas.toDataURL('image/jpeg');
        $scope.isCaptured = true;
        $scope.stopCamera();
        document.getElementById(c.data.imageId).value = $scope.photoData;
        $rootScope.$emit('alert-photo-captured', "YES");
        $rootScope.$emit('alert-cam-photo', $scope.photoData);
        gForm.setValue("photo_data", $scope.photoData);

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