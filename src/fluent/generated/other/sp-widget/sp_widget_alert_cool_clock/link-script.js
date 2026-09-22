function alertClockLink(scope, $element, attrs) {
    var element = $element[0];
    cacheElementSize(scope, element);
    $(window).on('resize', onWindowResize);
    setTimeout(onWindowResize, 5);

    function cacheElementSize(scope, element) {
        var elem = scope.elem = {};
        elem.w = element.offsetWidth;
        elem.h = element.offsetHeight;
        return elem;
    }

    function onWindowResize() {
        var elem = scope.elem;
        var isSizeChanged = elem.w != element.offsetWidth || elem.h != element.offsetHeight;
        if (isSizeChanged) {
            elem = cacheElementSize(scope, element);
            var w = Math.min(elem.h, elem.w);
            var clock = element.firstChild;
            if (clock.style != undefined) {
                clock.style.width = w + "px";
            }
        }
    }
}