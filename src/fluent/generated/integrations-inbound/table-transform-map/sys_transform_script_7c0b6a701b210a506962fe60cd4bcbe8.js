(function runTransformScript(source, map, log, target /*undefined onStart*/ ) {

	source.targetsysid = target.getUniqueValue();
	source.update();

})(source, map, log, target);