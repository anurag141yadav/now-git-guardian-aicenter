(function execute(inputs, outputs) {
var random_num = Math.floor(Math.random() * 30);
var duration = "00:00:"+random_num;
outputs.dur = new GlideDuration(duration);
})(inputs, outputs);