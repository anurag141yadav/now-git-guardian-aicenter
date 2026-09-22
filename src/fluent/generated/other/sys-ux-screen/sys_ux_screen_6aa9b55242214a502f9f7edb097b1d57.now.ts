import { Record } from '@servicenow/sdk/core'

Record({
    $id: Now.ID['6aa9b55242214a502f9f7edb097b1d57'],
    table: 'sys_ux_screen',
    data: {
        active: true,
        app_config: '7ea9b552c4214a5052870216b6a84a6b',
        disable_auto_reflow: false,
        disable_interoperable: false,
        event_mappings: `[ {\r
  "eventMappingId" : "ckdeecffptcaaaaaajddghheejjiaajjbbaaiim",\r
  "isConfiguration" : false,\r
  "offRowStorageId" : null,\r
  "sourceEventApiName" : "sn_uib_base_aw.ROW_CLICKED",\r
  "sourceEventDefinition" : {\r
    "apiName" : "sn_uib_base_aw.ROW_CLICKED",\r
    "id" : null,\r
    "type" : "UXEVENT"\r
  },\r
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
    "targetId" : "ckdeecffptcaaaaaaiddghheerazxbbiieii",\r
    "type" : "EVENT"\r
  } ]\r
}, {\r
  "eventMappingId" : "803f44dc-cc7f-4a32-8c63-a388517013c7",\r
  "isConfiguration" : false,\r
  "offRowStorageId" : null,\r
  "sourceEventApiName" : "sn_uib_base_aw.NAV_ITEM_SELECTED_RELAY_2c08111d0fc21010036a83fa68767ef6",\r
  "sourceEventDefinition" : {\r
    "apiName" : "sn_uib_base_aw.NAV_ITEM_SELECTED_RELAY_2c08111d0fc21010036a83fa68767ef6",\r
    "id" : null,\r
    "type" : "UXEVENT"\r
  },\r
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
    "targetId" : "4aa065ee-5b71-4363-a8ab-0110185f3032",\r
    "type" : "EVENT"\r
  } ]\r
}, {\r
  "eventMappingId" : "dec1afda-d6df-4358-9623-52d595bdb7c7",\r
  "isConfiguration" : false,\r
  "offRowStorageId" : null,\r
  "sourceEventApiName" : "sn_uib_base_aw.CONTENT_UPDATED_RELAY_2c08111d0fc21010036a83fa68767ef6",\r
  "sourceEventDefinition" : {\r
    "apiName" : "sn_uib_base_aw.CONTENT_UPDATED_RELAY_2c08111d0fc21010036a83fa68767ef6",\r
    "id" : null,\r
    "type" : "UXEVENT"\r
  },\r
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
    "targetId" : "c0d740b1-064d-415f-aebb-d6c0f6e1a268",\r
    "type" : "EVENT"\r
  } ]\r
}, {\r
  "eventMappingId" : "5fb0ee34-b3d2-4233-8a59-d699b79ba68b",\r
  "isConfiguration" : false,\r
  "offRowStorageId" : null,\r
  "sourceEventApiName" : "sn_uib_base_aw.MODAL_SELECTED_RELAY_2c08111d0fc21010036a83fa68767ef6",\r
  "sourceEventDefinition" : {\r
    "apiName" : "sn_uib_base_aw.MODAL_SELECTED_RELAY_2c08111d0fc21010036a83fa68767ef6",\r
    "id" : null,\r
    "type" : "UXEVENT"\r
  },\r
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
    "targetId" : "c879c9d9-0194-4efb-9783-0d5cd5c5b02a",\r
    "type" : "EVENT"\r
  } ]\r
} ]`,
        macroponent: '2c08111d0fc21010036a83fa68767ef6',
        name: 'List Default',
        order: 0,
        parent_macroponent: 'c276387cc331101080d6d3658940ddd2',
        required_translations: '[]',
        screen_type: 'f2a9b5522b214a504d3d260527e62460',
        sys_domain: 'global',
        sys_domain_path: '/',
    },
})
