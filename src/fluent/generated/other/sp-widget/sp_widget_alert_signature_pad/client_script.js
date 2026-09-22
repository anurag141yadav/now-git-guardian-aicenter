api.controller=function($scope,$rootScope, $timeout,spUtil) {
	/* widget controller */
	var c = this;
	$scope.signatureData = '';
	$scope.errorMessage = false;
	$scope.isConfirmed = false;

	var signaturePad;
	var canvas;

	// Initialize the signature pad after the DOM is ready
	$timeout(function() {
		canvas = document.getElementById('signature-pad');
		signaturePad = new SignaturePad(canvas);

		// Function to resize the canvas
		function resizeCanvas() {
			var data = signaturePad.toData();
			var ratio = Math.max(window.devicePixelRatio || 1, 1);
			canvas.width = canvas.offsetWidth * ratio;
			canvas.height = canvas.offsetHeight * ratio;
			canvas.getContext('2d').scale(ratio, ratio);
			//signaturePad.clear(); // Clear the canvas after resizing
			signaturePad.fromData(data);
		}

		// Resize canvas initially and on window resize
		resizeCanvas();
		window.addEventListener('resize', resizeCanvas);
	}, 0);

	// Clear the signature
	$scope.clearSignature = function() {
		$scope.errorMessage = false;
		$rootScope.$emit('alert-sign-captured', "NO");
		$rootScope.$emit('alert-sign', "");
		if (signaturePad) {
			signaturePad.clear();
			$scope.signatureData = '';
		}
		$scope.isConfirmed = false;
		canvas = document.getElementById('signature-pad');
		canvas.style.pointerEvents = 'auto';
	};

	// Save the signature as a data URL
	$scope.saveSignature = function() {
		if (signaturePad && !signaturePad.isEmpty()) {
			$scope.signatureData = signaturePad.toDataURL();
			$rootScope.$emit('alert-sign-captured', "YES");
			$rootScope.$emit('alert-sign', $scope.signatureData);
			$scope.errorMessage = false;
			$scope.errorMessageText = "";
			$scope.isConfirmed = true;
			canvas = document.getElementById('signature-pad');
			canvas.style.pointerEvents = 'none';
		} else {
			$scope.errorMessage = true;
			$scope.errorMessageText = "Signature is empty, Please provide a signature";
			$rootScope.$emit('alert-sign-captured', "NO");
			$rootScope.$emit('alert-sign', "");
		}
	};

	// Clean up when the widget is destroyed to avoid memory leaks
	$scope.$on('$destroy', function() {
		window.removeEventListener('resize', resizSignatureCanvas);
	});
	function resizSignatureCanvas() {
		var data = signaturePad.toData();
		var ratio = Math.max(window.devicePixelRatio || 1, 1);
		canvas.width = canvas.offsetWidth * ratio;
		canvas.height = canvas.offsetHeight * ratio;
		canvas.getContext('2d').scale(ratio, ratio);
		//signaturePad.clear(); // Clear the canvas after resizing
		signaturePad.fromData(data);
	}
};