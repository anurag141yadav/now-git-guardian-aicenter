import { UxListMenuConfig } from '@servicenow/sdk/core'

UxListMenuConfig({
    $id: Now.ID['ae24161c1b688e106962fe60cd4bcb7a'],
    name: 'Guardian Data Manager Workspace_menu_config',
    categories: [
        {
            $id: Now.ID['0724561c1b688e106962fe60cd4bcb6e'],
            title: 'System Feature List',
            order: 1800,
            lists: [
                {
                    $id: Now.ID['c324561c1b688e106962fe60cd4bcb70'],
                    applicabilities: [
                        {
                            $id: Now.ID['c724561c1b688e106962fe60cd4bcb72'],
                            applicability: 'e624161c1b688e106962fe60cd4bcb44',
                            order: 100,
                        },
                    ],
                    columns: 'code,name,description,is_deleted',
                    condition: '',
                    hideCheckboxHover: true,
                    hideDragAndDrop: true,
                    liveUpdates: '',
                    table: 'x_aleen_snguardian_system_feature',
                    title: 'All',
                },
            ],
        },
        {
            $id: Now.ID['2224161c1b688e106962fe60cd4bcb7d'],
            title: 'System',
            lists: [
                {
                    $id: Now.ID['2224161c1b688e106962fe60cd4bcb8c'],
                    applicabilities: [
                        {
                            $id: Now.ID['2e24161c1b688e106962fe60cd4bcb8e'],
                            applicability: 'e624161c1b688e106962fe60cd4bcb44',
                            order: 100,
                        },
                    ],
                    columns: 'number,code,description,host',
                    condition: '',
                    hideCheckboxHover: true,
                    hideDragAndDrop: true,
                    liveUpdates: '',
                    table: 'x_aleen_snguardian_system',
                    title: 'All',
                },
            ],
        },
        {
            $id: Now.ID['3224161c1b688e106962fe60cd4bcbe1'],
            title: 'Building',
            order: 700,
            lists: [],
        },
        {
            $id: Now.ID['3624161c1b688e106962fe60cd4bcbf9'],
            title: 'Identity Type',
            order: 1100,
            lists: [
                {
                    $id: Now.ID['7224561c1b688e106962fe60cd4bcb14'],
                    applicabilities: [
                        {
                            $id: Now.ID['7624561c1b688e106962fe60cd4bcb16'],
                            applicability: 'e624161c1b688e106962fe60cd4bcb44',
                            order: 100,
                        },
                    ],
                    columns: 'number,name,code,description,is_deleted',
                    condition: '',
                    hideCheckboxHover: true,
                    hideDragAndDrop: true,
                    liveUpdates: '',
                    table: 'x_aleen_snguardian_identitytype',
                    title: 'All',
                },
            ],
        },
        {
            $id: Now.ID['6224161c1b688e106962fe60cd4bcb91'],
            title: 'Access Location',
            order: 300,
            lists: [
                {
                    $id: Now.ID['2224161c1b688e106962fe60cd4bcb93'],
                    applicabilities: [
                        {
                            $id: Now.ID['2624161c1b688e106962fe60cd4bcb95'],
                            applicability: 'e624161c1b688e106962fe60cd4bcb44',
                            order: 100,
                        },
                    ],
                    columns: 'access_level,location',
                    condition: '',
                    hideCheckboxHover: true,
                    hideDragAndDrop: true,
                    liveUpdates: '',
                    table: 'x_aleen_snguardian_access_location',
                    title: 'All',
                },
            ],
        },
        {
            $id: Now.ID['6224161c1b688e106962fe60cd4bcbbc'],
            title: 'Asset Type',
            order: 500,
            lists: [
                {
                    $id: Now.ID['2224161c1b688e106962fe60cd4bcbbe'],
                    applicabilities: [
                        {
                            $id: Now.ID['3624161c1b688e106962fe60cd4bcbc0'],
                            applicability: 'e624161c1b688e106962fe60cd4bcb44',
                            order: 100,
                        },
                    ],
                    columns: 'code,name,description,is_deleted',
                    condition: '',
                    hideCheckboxHover: true,
                    hideDragAndDrop: true,
                    liveUpdates: '',
                    table: 'x_aleen_snguardian_asset_type',
                    title: 'All',
                },
            ],
        },
        {
            $id: Now.ID['6a24161c1b688e106962fe60cd4bcba3'],
            title: 'Asset',
            order: 200,
            lists: [
                {
                    $id: Now.ID['e624161c1b688e106962fe60cd4bcba5'],
                    applicabilities: [
                        {
                            $id: Now.ID['ea24161c1b688e106962fe60cd4bcba7'],
                            applicability: 'e624161c1b688e106962fe60cd4bcb44',
                            order: 100,
                        },
                    ],
                    columns: 'code,serial,type,status,system',
                    condition: '',
                    hideCheckboxHover: true,
                    hideDragAndDrop: true,
                    liveUpdates: '',
                    table: 'x_aleen_snguardian_asset',
                    title: 'All',
                },
            ],
        },
        {
            $id: Now.ID['6a24161c1b688e106962fe60cd4bcba9'],
            title: 'Asset Location',
            order: 400,
            lists: [
                {
                    $id: Now.ID['2a24161c1b688e106962fe60cd4bcbab'],
                    applicabilities: [
                        {
                            $id: Now.ID['2e24161c1b688e106962fe60cd4bcbad'],
                            applicability: 'e624161c1b688e106962fe60cd4bcb44',
                            order: 100,
                        },
                    ],
                    columns: 'number,asset,location',
                    condition: '',
                    hideCheckboxHover: true,
                    hideDragAndDrop: true,
                    liveUpdates: '',
                    table: 'x_aleen_snguardian_asset_location',
                    title: 'All',
                },
            ],
        },
        {
            $id: Now.ID['7224161c1b688e106962fe60cd4bcbe7'],
            title: 'Field Mapping Type',
            order: 800,
            lists: [
                {
                    $id: Now.ID['3224161c1b688e106962fe60cd4bcbe9'],
                    applicabilities: [
                        {
                            $id: Now.ID['3624161c1b688e106962fe60cd4bcbeb'],
                            applicability: 'e624161c1b688e106962fe60cd4bcb44',
                            order: 100,
                        },
                    ],
                    columns: 'code,name,description,is_deleted',
                    condition: '',
                    hideCheckboxHover: true,
                    hideDragAndDrop: true,
                    liveUpdates: '',
                    table: 'x_aleen_snguardian_field_mapping_type',
                    title: 'All',
                },
            ],
        },
        {
            $id: Now.ID['7a24561c1b688e106962fe60cd4bcb49'],
            title: 'Request Entity Action',
            order: 1400,
            lists: [
                {
                    $id: Now.ID['3a24561c1b688e106962fe60cd4bcb4b'],
                    applicabilities: [
                        {
                            $id: Now.ID['3e24561c1b688e106962fe60cd4bcb4d'],
                            applicability: 'e624161c1b688e106962fe60cd4bcb44',
                            order: 100,
                        },
                    ],
                    columns: 'code,name,is_deleted',
                    condition: '',
                    hideCheckboxHover: true,
                    hideDragAndDrop: true,
                    liveUpdates: '',
                    table: 'x_aleen_snguardian_request_entity_action',
                    title: 'All',
                },
            ],
        },
        {
            $id: Now.ID['b224161c1b688e106962fe60cd4bcbc2'],
            title: 'Badge Template',
            order: 600,
            lists: [
                {
                    $id: Now.ID['3224161c1b688e106962fe60cd4bcbc4'],
                    applicabilities: [
                        {
                            $id: Now.ID['3624161c1b688e106962fe60cd4bcbc6'],
                            applicability: 'e624161c1b688e106962fe60cd4bcb44',
                            order: 100,
                        },
                    ],
                    columns: 'name,type,front,back',
                    condition: '',
                    hideCheckboxHover: true,
                    hideDragAndDrop: true,
                    liveUpdates: '',
                    table: 'x_aleen_snguardian_badge_template',
                    title: 'All',
                },
            ],
        },
        {
            $id: Now.ID['b224161c1b688e106962fe60cd4bcbed'],
            title: 'Http Request Type',
            order: 900,
            lists: [],
        },
        {
            $id: Now.ID['b224561c1b688e106962fe60cd4bcb62'],
            title: 'Status Code',
            order: 1600,
            lists: [
                {
                    $id: Now.ID['4324561c1b688e106962fe60cd4bcb64'],
                    applicabilities: [
                        {
                            $id: Now.ID['4724561c1b688e106962fe60cd4bcb66'],
                            applicability: 'e624161c1b688e106962fe60cd4bcb44',
                            order: 100,
                        },
                    ],
                    columns: 'code,name,applicable_to,is_deleted',
                    condition: '',
                    hideCheckboxHover: true,
                    hideDragAndDrop: true,
                    liveUpdates: '',
                    table: 'x_aleen_snguardian_status_code',
                    title: 'All',
                },
            ],
        },
        {
            $id: Now.ID['ba24561c1b688e106962fe60cd4bcb4f'],
            title: 'Request Status',
            order: 1500,
            lists: [
                {
                    $id: Now.ID['3224561c1b688e106962fe60cd4bcb5e'],
                    applicabilities: [
                        {
                            $id: Now.ID['3624561c1b688e106962fe60cd4bcb60'],
                            applicability: 'e624161c1b688e106962fe60cd4bcb44',
                            order: 100,
                        },
                    ],
                    columns: 'code,name,description,is_deleted',
                    condition: '',
                    hideCheckboxHover: true,
                    hideDragAndDrop: true,
                    liveUpdates: '',
                    table: 'x_aleen_snguardian_request_status',
                    title: 'All',
                },
            ],
        },
        {
            $id: Now.ID['c324561c1b688e106962fe60cd4bcb68'],
            title: 'System Parameter Type',
            order: 1700,
            lists: [],
        },
        {
            $id: Now.ID['f224561c1b688e106962fe60cd4bcb18'],
            title: 'Location',
            order: 1200,
            lists: [],
        },
        {
            $id: Now.ID['f224561c1b688e106962fe60cd4bcb1e'],
            title: 'Provisioning Status',
            order: 1300,
            lists: [
                {
                    $id: Now.ID['f624561c1b688e106962fe60cd4bcb45'],
                    applicabilities: [
                        {
                            $id: Now.ID['fa24561c1b688e106962fe60cd4bcb47'],
                            applicability: 'e624161c1b688e106962fe60cd4bcb44',
                            order: 100,
                        },
                    ],
                    columns: 'code,name,description,is_deleted',
                    condition: '',
                    hideCheckboxHover: true,
                    hideDragAndDrop: true,
                    liveUpdates: '',
                    table: 'x_aleen_snguardian_provisioning_status',
                    title: 'All',
                },
            ],
        },
    ],
})
