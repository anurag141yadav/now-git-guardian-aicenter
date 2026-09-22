import { Record } from '@servicenow/sdk/core'

Record({
    $id: Now.ID['62cc99dc33ad9a10bf1221382e5c7b28'],
    table: 'sp_rel_widget_clone',
    data: {
        child: 'a6cc11dc33ad9a10bf1221382e5c7b13',
        cloned: '2024-10-25 15:36:54',
        last_validated: '2024-10-25 15:36:54',
        parent: '3a36b30b6f3631005be8583e6b3ee490',
        payload: `<?xml version="1.0" encoding="UTF-8"?><sp_widget><category>sample</category><client_script><![CDATA[function ($timeout) {
	var c = this;
	c.darkness = "";
	if (!c.options.c_color || !c.options.c_color.length)
		c.options.c_color = 'red';
	
	var z = c.options.zone || "America/Los_Angeles"
	c.date = moment().tz(z);
	c.majors = new Array(12);
	c.minors = new Array(60); 
	(function tick() {
		c.date = new moment().tz(z);
		var t = c.date.hours();
		c.darkness = "";
		if (t > 17)
			c.darkness = "evening";
		if (t > 19)
			c.darkness = "night";
		if (t < 5)
			c.darkness = "night";
		
		$timeout(tick, 1000);
	})();
}]]></client_script><controller_as>c</controller_as><css>.clock {
  width: 100%;
  max-width:400px;
  max-height: 400px;
  padding: 1em;
  margin: auto;
}

.square {
	position: relative;
	width: 100%;
	height: 0;
	padding-bottom: 100%;
}

.clock-face {
	stroke: #333;
	fill: #FFF;
}

.minor {
	stroke: #999;
	stroke-width: 0.5;
}

.major {
	stroke: #333;
	stroke-width: 1;
}

.hour {
	stroke: #333;
}

.minute {
	stroke: #666; 
}

.second-counterweight {
	stroke-width: 3;
}

g.night circle.clock-face {
  stroke: #fff;
  fill: #333;
}

g.night line.major {
  stroke: #fff;
}

g.night line.hour {
  stroke: #fff;
}

g.night line.minute {
  stroke: #fff;
}

g.evening circle.clock-face {
  stroke: #fff;
  fill: #888;
}

g.evening line.major {
  stroke: #fff;
}

g.evening line.hour {
  stroke: #fff;
}

g.evening line.minute {
  stroke: #fff;
}

g.evening line.minor {
  stroke: #fff;
}</css><data_table>sp_instance</data_table><demo_data>{"options": 
	{
		"zone": "America/Los_Angeles",
		"title": "San Diego, CA",
		"c_color": "blue"
	}
}</demo_data><description/><docs/><field_list>title</field_list><has_preview>true</has_preview><id>widget-cool-clock</id><internal>false</internal><link><![CDATA[function (scope, $element, attrs) {
	var element = $element[0];
	cacheElementSize(scope, element);
	$(window).on('resize', onWindowResize);
	// run after layout
	setTimeout(onWindowResize, 5);
	
	function cacheElementSize(scope, element) {
		var elem = scope.elem = {}
		elem.w = element.offsetWidth;
		elem.h = element.offsetHeight;
		return elem;
	}

	function onWindowResize() {
		var elem = scope.elem;
		var isSizeChanged = elem.w != element.offsetWidth || elem.h != element.offsetHeight;
		if (isSizeChanged) {
			elem = cacheElementSize(scope, element);
			// to stay square, the child width has to be
			// min of height, width
			var w = Math.min(elem.h, elem.w);
			var clock = element.firstChild;
			clock.style.width = w + "px";
		}
	}	
}]]></link><name>Cool Clock</name><option_schema>[{"name":"zone","default_value":"America/Los_Angeles","section":"Data","label":"TimeZone","type":"string"},{"name":"c_color","default_value":"red","section":"Presentation","label":"Second hand color","type":"string"}]</option_schema><public>true</public><roles/><script><![CDATA[(function () {
})();]]></script><servicenow>true</servicenow><sys_class_name>sp_widget</sys_class_name><sys_created_by>admin</sys_created_by><sys_created_on>2015-03-19 15:50:03</sys_created_on><sys_customer_update>false</sys_customer_update><sys_id>3a36b30b6f3631005be8583e6b3ee490</sys_id><sys_mod_count>179</sys_mod_count><sys_name>Cool Clock</sys_name><sys_package display_value="Service Portal - Core" source="com.glide.service-portal">25a8e7ecdb431300a3b6176a4896192d</sys_package><sys_policy/><sys_replace_on_upgrade>false</sys_replace_on_upgrade><sys_scope display_value="Global">global</sys_scope><sys_update_name>sp_widget_3a36b30b6f3631005be8583e6b3ee490</sys_update_name><sys_updated_by>admin</sys_updated_by><sys_updated_on>2017-08-24 20:37:37</sys_updated_on><template><![CDATA[<div class="clock">
  <span></span>
    <div class="square">
      <svg viewBox="0 0 100 100">
        <g transform="translate(50,50)" class="{{c.darkness}}" >
          <circle class="clock-face" r="48" />
          <line ng-repeat="minor in c.minors track by $index" class="minor"
            y1="42" y2="45" ng-attr-transform="rotate({{360 * $index / c.minors.length}})" />
          <line ng-repeat="major in c.majors track by $index" class="major"
            y1="35" y2="46" ng-attr-transform="rotate({{360 * $index / c.majors.length}})" />
          <line class="hour" y1="2" y2="-20"
            ng-attr-transform="rotate({{30 * c.date.hours() + c.date.minutes() / 2}})" />
          <line class="minute" y1="4" y2="-30"
            ng-attr-transform="rotate({{6 * c.date.minutes() + c.date.seconds() / 10}})" />
          <g ng-attr-transform="rotate({{6 * c.date.seconds()}})">
            <line stroke="{{::c.options.c_color}}" class="second" y1="10" y2="-38" />
            <line stroke="{{::c.options.c_color}}" class="second-counterweight" y1="10" y2="2" />
          </g>
        </g>
      </svg>
    </div>
  <div class="text-center text-muted m-t-sm">{{::c.options.title}}</div>
</div>
]]></template></sp_widget>`,
    },
})
