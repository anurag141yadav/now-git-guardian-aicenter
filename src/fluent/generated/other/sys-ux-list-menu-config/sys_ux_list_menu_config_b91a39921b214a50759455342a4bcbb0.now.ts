import { UxListMenuConfig } from '@servicenow/sdk/core'

UxListMenuConfig({
    $id: Now.ID['b91a39921b214a50759455342a4bcbb0'],
    name: 'Access Reviewer Workspace_menu_config',
    categories: [
        {
            $id: Now.ID['061a79921b214a50759455342a4bcb47'],
            title: 'Asset Location',
            order: 700,
            lists: [
                {
                    $id: Now.ID['821a79921b214a50759455342a4bcb49'],
                    applicabilities: [
                        {
                            $id: Now.ID['461a79921b214a50759455342a4bcb4b'],
                            applicability: 'a11a39921b214a50759455342a4bcb89',
                            order: 100,
                        },
                    ],
                    columns: 'asset.serial,location',
                    condition: '',
                    hideCheckboxHover: true,
                    hideDragAndDrop: true,
                    liveUpdates: '',
                    order: 50,
                    table: 'x_aleen_snguardian_asset_location',
                    title: 'All',
                },
            ],
        },
        {
            $id: Now.ID['0e1a79921b214a50759455342a4bcbec'],
            title: 'Http Request Type',
            order: 1400,
            lists: [],
        },
        {
            $id: Now.ID['1e1ab9921b214a50759455342a4bcb54'],
            title: 'Identity System',
            order: 1900,
            lists: [
                {
                    $id: Now.ID['9a1ab9921b214a50759455342a4bcb56'],
                    applicabilities: [
                        {
                            $id: Now.ID['161ab9921b214a50759455342a4bcb65'],
                            applicability: 'a11a39921b214a50759455342a4bcb89',
                            order: 100,
                        },
                    ],
                    columns: 'number,identity,system,valid_from,valid_to',
                    condition: '',
                    hideCheckboxHover: true,
                    hideDragAndDrop: true,
                    liveUpdates: '',
                    order: 50,
                    table: 'x_aleen_snguardian_identity_system',
                    title: 'All',
                },
            ],
        },
        {
            $id: Now.ID['311a39921b214a50759455342a4bcbfe'],
            title: 'Access Owner',
            order: 300,
            lists: [
                {
                    $id: Now.ID['bd1a39921b214a50759455342a4bcbff'],
                    applicabilities: [
                        {
                            $id: Now.ID['711a79921b214a50759455342a4bcb02'],
                            applicability: 'a11a39921b214a50759455342a4bcb89',
                            order: 100,
                        },
                    ],
                    columns: 'owner,type',
                    condition: '',
                    hideCheckboxHover: true,
                    hideDragAndDrop: true,
                    liveUpdates: '',
                    order: 50,
                    table: 'x_aleen_snguardian_access_owner',
                    title: 'All',
                },
            ],
        },
        {
            $id: Now.ID['3d1a79921b214a50759455342a4bcb09'],
            title: 'Access Review Type',
            order: 500,
            lists: [],
        },
        {
            $id: Now.ID['421a79921b214a50759455342a4bcb97'],
            title: 'Badge Template',
            order: 1000,
            lists: [
                {
                    $id: Now.ID['ce1a79921b214a50759455342a4bcb98'],
                    applicabilities: [
                        {
                            $id: Now.ID['821a79921b214a50759455342a4bcb9b'],
                            applicability: 'a11a39921b214a50759455342a4bcb89',
                            order: 100,
                        },
                    ],
                    columns: 'name,type,front,back',
                    condition: '',
                    hideCheckboxHover: true,
                    hideDragAndDrop: true,
                    liveUpdates: '',
                    order: 50,
                    table: 'x_aleen_snguardian_badge_template',
                    title: 'All',
                },
            ],
        },
        {
            $id: Now.ID['521ab9921b214a50759455342a4bcb67'],
            title: 'Identity Type',
            order: 2000,
            lists: [
                {
                    $id: Now.ID['de1ab9921b214a50759455342a4bcb68'],
                    applicabilities: [
                        {
                            $id: Now.ID['921ab9921b214a50759455342a4bcb6b'],
                            applicability: 'a11a39921b214a50759455342a4bcb89',
                            order: 100,
                        },
                    ],
                    columns: 'code,name,description,is_deleted',
                    condition: '',
                    hideCheckboxHover: true,
                    hideDragAndDrop: true,
                    liveUpdates: '',
                    order: 50,
                    table: 'x_aleen_snguardian_identitytype',
                    title: 'All',
                },
            ],
        },
        {
            $id: Now.ID['5e1ab9921b214a50759455342a4bcb0a'],
            title: 'Identity Asset',
            order: 1700,
            lists: [
                {
                    $id: Now.ID['da1ab9921b214a50759455342a4bcb0c'],
                    applicabilities: [
                        {
                            $id: Now.ID['521ab9921b214a50759455342a4bcb4d'],
                            applicability: 'a11a39921b214a50759455342a4bcb89',
                            order: 100,
                        },
                    ],
                    columns: 'number,asset.serial,identity,valid_from,valid_to,status',
                    condition: '',
                    hideCheckboxHover: true,
                    hideDragAndDrop: true,
                    liveUpdates: '',
                    order: 50,
                    table: 'x_aleen_snguardian_identity_asset',
                    title: 'All',
                },
            ],
        },
        {
            $id: Now.ID['821a79921b214a50759455342a4bcb4d'],
            title: 'Asset Type',
            order: 800,
            lists: [
                {
                    $id: Now.ID['021a79921b214a50759455342a4bcb4f'],
                    applicabilities: [
                        {
                            $id: Now.ID['c21a79921b214a50759455342a4bcb51'],
                            applicability: 'a11a39921b214a50759455342a4bcb89',
                            order: 100,
                        },
                    ],
                    columns: 'code,name,description,parent,is_deleted',
                    condition: '',
                    hideCheckboxHover: true,
                    hideDragAndDrop: true,
                    liveUpdates: '',
                    order: 50,
                    table: 'x_aleen_snguardian_asset_type',
                    title: 'All',
                },
            ],
        },
        {
            $id: Now.ID['9a1a79921b214a50759455342a4bcbf2'],
            title: 'Identity',
            order: 1500,
            lists: [
                {
                    $id: Now.ID['de1ab9921b214a50759455342a4bcb00'],
                    applicabilities: [
                        {
                            $id: Now.ID['921ab9921b214a50759455342a4bcb03'],
                            applicability: 'a11a39921b214a50759455342a4bcb89',
                            order: 100,
                        },
                    ],
                    columns: 'user_name,first_name,last_name,email,phone,type,status,source_system_code',
                    condition: '',
                    hideCheckboxHover: true,
                    hideDragAndDrop: true,
                    liveUpdates: '',
                    order: 50,
                    table: 'x_aleen_snguardian_identity',
                    title: 'All',
                },
            ],
        },
        {
            $id: Now.ID['9e1ab9921b214a50759455342a4bcb4e'],
            title: 'Identity Location',
            order: 1800,
            lists: [
                {
                    $id: Now.ID['1e1ab9921b214a50759455342a4bcb50'],
                    applicabilities: [
                        {
                            $id: Now.ID['de1ab9921b214a50759455342a4bcb52'],
                            applicability: 'a11a39921b214a50759455342a4bcb89',
                            order: 100,
                        },
                    ],
                    columns: 'identity,location',
                    condition: '',
                    hideCheckboxHover: true,
                    hideDragAndDrop: true,
                    liveUpdates: '',
                    order: 50,
                    table: 'x_aleen_snguardian_identity_location',
                    title: 'All',
                },
            ],
        },
        {
            $id: Now.ID['b11a39921b214a50759455342a4bcbbf'],
            title: 'Review Task',
            lists: [
                {
                    $id: Now.ID['f51a39921b214a50759455342a4bcbc1'],
                    applicabilities: [
                        {
                            $id: Now.ID['b11a39921b214a50759455342a4bcbc4'],
                            applicability: 'a11a39921b214a50759455342a4bcb89',
                            order: 100,
                        },
                    ],
                    columns: 'number,assigned_to,total_records,completed,pending,status',
                    condition: '',
                    hideCheckboxHover: true,
                    hideDragAndDrop: true,
                    liveUpdates: '',
                    order: 50,
                    table: 'x_aleen_snguardian_review_task',
                    title: 'All',
                },
            ],
        },
        {
            $id: Now.ID['b51a39921b214a50759455342a4bcbc6'],
            title: 'Access Location',
            order: 200,
            lists: [
                {
                    $id: Now.ID['351a39921b214a50759455342a4bcbc8'],
                    applicabilities: [
                        {
                            $id: Now.ID['f11a39921b214a50759455342a4bcbfc'],
                            applicability: 'a11a39921b214a50759455342a4bcb89',
                            order: 100,
                        },
                    ],
                    columns: 'access_level,location',
                    condition: '',
                    hideCheckboxHover: true,
                    hideDragAndDrop: true,
                    liveUpdates: '',
                    order: 50,
                    table: 'x_aleen_snguardian_access_location',
                    title: 'All',
                },
            ],
        },
        {
            $id: Now.ID['b91a79921b214a50759455342a4bcb0f'],
            title: 'Asset',
            order: 600,
            lists: [
                {
                    $id: Now.ID['391a79921b214a50759455342a4bcb11'],
                    applicabilities: [
                        {
                            $id: Now.ID['f91a79921b214a50759455342a4bcb13'],
                            applicability: 'a11a39921b214a50759455342a4bcb89',
                            order: 100,
                        },
                    ],
                    columns: 'number,serial,type,status,system',
                    condition: '',
                    hideCheckboxHover: true,
                    hideDragAndDrop: true,
                    liveUpdates: '',
                    order: 50,
                    table: 'x_aleen_snguardian_asset',
                    title: 'All',
                },
            ],
        },
        {
            $id: Now.ID['bd1a79921b214a50759455342a4bcb03'],
            title: 'Access Review Frequency',
            order: 400,
            lists: [],
        },
        {
            $id: Now.ID['ca1a79921b214a50759455342a4bcba8'],
            title: 'Field Mapping Type',
            order: 1300,
            lists: [
                {
                    $id: Now.ID['0e1a79921b214a50759455342a4bcbe8'],
                    applicabilities: [
                        {
                            $id: Now.ID['ce1a79921b214a50759455342a4bcbea'],
                            applicability: 'a11a39921b214a50759455342a4bcb89',
                            order: 100,
                        },
                    ],
                    columns: 'code,name,description,category,is_deleted',
                    condition: '',
                    hideCheckboxHover: true,
                    hideDragAndDrop: true,
                    liveUpdates: '',
                    order: 50,
                    table: 'x_aleen_snguardian_field_mapping_type',
                    title: 'All',
                },
            ],
        },
        {
            $id: Now.ID['ce1a79921b214a50759455342a4bcb9c'],
            title: 'Building',
            order: 1100,
            lists: [],
        },
        {
            $id: Now.ID['de1ab9921b214a50759455342a4bcb04'],
            title: 'Identity Access',
            order: 1600,
            lists: [
                {
                    $id: Now.ID['5e1ab9921b214a50759455342a4bcb06'],
                    applicabilities: [
                        {
                            $id: Now.ID['121ab9921b214a50759455342a4bcb09'],
                            applicability: 'a11a39921b214a50759455342a4bcb89',
                            order: 100,
                        },
                    ],
                    columns: 'number,identity,access_level,valid_from,valid_to',
                    condition: '',
                    hideCheckboxHover: true,
                    hideDragAndDrop: true,
                    liveUpdates: '',
                    order: 50,
                    table: 'x_aleen_snguardian_identity_access',
                    title: 'All',
                },
            ],
        },
    ],
})
