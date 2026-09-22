api.controller = function($scope, $timeout, $rootScope) {
    //TODO:  default camera
    //Auto Scan
    //SCAN Data setup, attribute to return
    // placeholder gif
    var c = this;
    c.qrCode = '';
    c.isScanning = false;
    c.timeoutMessage = '';
    c.autoStart = false;
    var scanTimeout;
    c.startScan = function() {
        c.statusMessage = 'Scanning ...';
        c.timeoutMessage = '';
        c.qrCode = '';
        c.isScanning = true;
        Quagga.init({
            inputStream: {
                name: "Live",
                type: "LiveStream",
                target: document.querySelector('#qr-scanner-container'),
                constraints: {
                    width: 320,
                    height: 320,
                    facingMode: "environment"
                }
            },
            decoder: {
                readers: []
            }
        }, function(err) {
            if (err) {
                console.error(err);
                return;
            }
            Quagga.start();
        });
        scanTimeout = $timeout(function() {
            c.stopScan();
            c.timeoutMessage = 'Scanning timed out. Please try again.';
        }, 30000); // 30 seconds timeout
    };
    c.stopScan = function() {
        if (c.isScanning) {
            Quagga.stop();
            c.isScanning = false;
            $timeout.cancel(scanTimeout);
        }
    };
    c.rescan = function() {
        c.startScan();
    };
    if (c.autoStart) {
        c.startScan();
    }
    Quagga.onProcessed(function(result) {
        try {
            var video = document.querySelector('video');
            if (video) {
                var canvas = document.createElement('canvas');
                var context = canvas.getContext('2d');
                canvas.width = video.videoWidth;
                canvas.height = video.videoHeight;
                context.drawImage(video, 0, 0, canvas.width, canvas.height);
                var imageData = context.getImageData(0, 0, canvas.width, canvas.height);
                var qrCode = jsQR(imageData.data, canvas.width, canvas.height);
                if (qrCode && c.data.data_type == 'json') {
                    try {
                        var decodedData = JSON.parse(qrCode.data);
                        var now = new Date();
                        var expiresAt = new Date(decodedData.expiresAt);
                        if (now > expiresAt) {
                            $scope.$applyAsync(function() {
                                c.statusMessage = 'QR has expired.';
                                c.stopScan();
                            });
                        } else {
                            var att = c.data.data_attribute;
                            $scope.$applyAsync(function() {
                                if (att) {
                                    c.qrCode = $scope.getDataFromItem(decodedData, att);
                                } else if (decodedData && decodedData.data) {
                                    c.qrCode = decodedData.data;
                                } else {
                                    c.qrCode = decodedData;
                                }
                                c.statusMessage = 'Success';
                                c.stopScan();
                                $rootScope.$emit('alert-qr-captured', "YES");
                                $rootScope.$emit('alert-qr-data', c.qrCode);
                            });
                        }
                    } catch (e) {
                        $scope.$applyAsync(function() {
                            c.statusMessage = 'Invalid QR';
                            c.stopScan();
                            $rootScope.$emit('alert-qr-captured', "NO");
                            $rootScope.$emit('alert-qr-data', "");
                        });
                    }
                } else if (qrCode && c.data.data_type == 'string') {
                    $scope.$applyAsync(function() {
                        c.qrCode = qrCode.data;
                        c.statusMessage = 'Success';
                        c.stopScan();
                        $rootScope.$emit('alert-qr-captured', "YES");
                        $rootScope.$emit('alert-qr-data', c.qrCode);
                    });
                }
            }
        } catch (ex) {
            $scope.$applyAsync(function() {
                c.statusMessage = 'Error';
                c.stopScan();
                $rootScope.$emit('alert-qr-captured', "NO");
                $rootScope.$emit('alert-qr-data', "");
            });
        }
    });
    $scope.$on('$destroy', function() {
        c.stopScan();
    });

    $scope.getDataFromItem = function(object, propertyPath) {
        return propertyPath.split('.').reduce(function(obj, key) {
            return obj && obj[key];
        }, object);
    };
};