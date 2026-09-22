import { Record } from '@servicenow/sdk/core'

Record({
    $id: Now.ID['b7131e9856688e1094700699256dad0a'],
    table: 'sys_ux_screen',
    data: {
        active: true,
        disable_auto_reflow: false,
        disable_interoperable: false,
        event_mappings: `[ {\r
  "eventMappingId" : "7c4b7a6d-da76-4cfb-9561-c14388a97faf",\r
  "sourceEventApiName" : "sn_uib_base_aw.NAV_ITEM_SELECTED_RELAY_8515f3e853031010ffa5ddeeff7b1297",\r
  "sourceEventSysId" : null,\r
  "targets" : [ {\r
    "broker" : null,\r
    "clientScript" : null,\r
    "declarativeAction" : null,\r
    "event" : {\r
      "apiName" : "sn_canvas_core.NAV_ITEM_SELECTED",\r
      "payload" : {\r
        "type" : "MAP_CONTAINER",\r
        "container" : {\r
          "route" : {\r
            "type" : "EVENT_PAYLOAD_BINDING",\r
            "binding" : {\r
              "address" : [ "route" ]\r
            }\r
          },\r
          "fields" : {\r
            "type" : "EVENT_PAYLOAD_BINDING",\r
            "binding" : {\r
              "address" : [ "fields" ]\r
            }\r
          },\r
          "params" : {\r
            "type" : "EVENT_PAYLOAD_BINDING",\r
            "binding" : {\r
              "address" : [ "params" ]\r
            }\r
          },\r
          "redirect" : {\r
            "type" : "EVENT_PAYLOAD_BINDING",\r
            "binding" : {\r
              "address" : [ "redirect" ]\r
            }\r
          },\r
          "passiveNavigation" : {\r
            "type" : "EVENT_PAYLOAD_BINDING",\r
            "binding" : {\r
              "address" : [ "passiveNavigation" ]\r
            }\r
          },\r
          "title" : {\r
            "type" : "EVENT_PAYLOAD_BINDING",\r
            "binding" : {\r
              "address" : [ "title" ]\r
            }\r
          },\r
          "multiInstField" : {\r
            "type" : "EVENT_PAYLOAD_BINDING",\r
            "binding" : {\r
              "address" : [ "multiInstField" ]\r
            }\r
          },\r
          "external" : {\r
            "type" : "EVENT_PAYLOAD_BINDING",\r
            "binding" : {\r
              "address" : [ "external" ]\r
            }\r
          }\r
        }\r
      },\r
      "sysId" : "8b82bf18e5276c8e423b6e4e0889b463"\r
    },\r
    "operation" : null,\r
    "targetId" : "d119fc74-0541-4ad1-b58d-58329f7787fe",\r
    "type" : "EVENT"\r
  } ]\r
}, {\r
  "eventMappingId" : "0a1eecc8-902b-4713-921f-db4fff537b3d",\r
  "sourceEventApiName" : "sn_uib_base_aw.CONTENT_UPDATED_RELAY_8515f3e853031010ffa5ddeeff7b1297",\r
  "sourceEventSysId" : null,\r
  "targets" : [ {\r
    "broker" : null,\r
    "clientScript" : null,\r
    "declarativeAction" : null,\r
    "event" : {\r
      "apiName" : "sn_canvas_core.CONTENT_UPDATED",\r
      "payload" : {\r
        "type" : "MAP_CONTAINER",\r
        "container" : {\r
          "params" : {\r
            "type" : "EVENT_PAYLOAD_BINDING",\r
            "binding" : {\r
              "address" : [ "params" ]\r
            }\r
          }\r
        }\r
      },\r
      "sysId" : "75f3815fb0d9c38bb6df1626a0f284c4"\r
    },\r
    "operation" : null,\r
    "targetId" : "0c83f019-e1f4-4fc6-9961-d66457b08e75",\r
    "type" : "EVENT"\r
  } ]\r
}, {\r
  "eventMappingId" : "4396d8ea-245b-4956-ad7b-06572cd3ba77",\r
  "sourceEventApiName" : "sn_uib_base_aw.MODAL_SELECTED_RELAY_8515f3e853031010ffa5ddeeff7b1297",\r
  "sourceEventSysId" : null,\r
  "targets" : [ {\r
    "broker" : null,\r
    "clientScript" : null,\r
    "declarativeAction" : null,\r
    "event" : {\r
      "apiName" : "sn_canvas_core.MODAL_SELECTED",\r
      "payload" : {\r
        "type" : "MAP_CONTAINER",\r
        "container" : {\r
          "modalId" : {\r
            "type" : "EVENT_PAYLOAD_BINDING",\r
            "binding" : {\r
              "address" : [ "modalId" ]\r
            }\r
          },\r
          "showModal" : {\r
            "type" : "EVENT_PAYLOAD_BINDING",\r
            "binding" : {\r
              "address" : [ "showModal" ]\r
            }\r
          },\r
          "displayOptions" : {\r
            "type" : "EVENT_PAYLOAD_BINDING",\r
            "binding" : {\r
              "address" : [ "displayOptions" ]\r
            }\r
          }\r
        }\r
      },\r
      "sysId" : "882eed4091382d3a41f1bb3f382ae089"\r
    },\r
    "operation" : null,\r
    "targetId" : "b40e5e12-cb9a-4727-afda-cbc616bca1a0",\r
    "type" : "EVENT"\r
  } ]\r
} ]`,
        macroponent: '8515f3e853031010ffa5ddeeff7b1297',
        macroponent_config: `{\r
  "title" : "",\r
  "label" : "",\r
  "bare" : true,\r
  "scrollable" : "y",\r
  "headerLevel" : "1",\r
  "interceptNotifications" : false,\r
  "propagateNotifications" : false\r
}`,
        name: 'Simple List Default',
        order: 0,
        parent_macroponent: 'c276387cc331101080d6d3658940ddd2',
        required_translations: '[]',
        screen_type: '33131e9805688e10a4fa5943c3e29313',
        sys_domain: 'global',
        sys_domain_path: '/',
    },
})
