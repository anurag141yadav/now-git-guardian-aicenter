import { UxListMenuConfig } from '@servicenow/sdk/core'

UxListMenuConfig({
    $id: Now.ID['671b8fe61b7502d06962fe60cd4bcb49'],
    name: 'Guardian Badge Office Workspace_menu_config',
    categories: [
        {
            $id: Now.ID['231b8fe61b7502d06962fe60cd4bcb96'],
            title: 'Badge Template',
            order: 400,
            lists: [
                {
                    $id: Now.ID['ef1b8fe61b7502d06962fe60cd4bcb97'],
                    applicabilities: [
                        {
                            $id: Now.ID['371b8fe61b7502d06962fe60cd4bcb9a'],
                            applicability: 'df1b4fe61b7502d06962fe60cd4bcbd1',
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
            $id: Now.ID['ab1b8fe61b7502d06962fe60cd4bcb4b'],
            title: 'Request',
            lists: [
                {
                    $id: Now.ID['11ba77e21b7902d06962fe60cd4bcb28'],
                    applicabilities: [
                        {
                            $id: Now.ID['2dbabbe21b7902d06962fe60cd4bcb40'],
                            applicability: 'df1b4fe61b7502d06962fe60cd4bcbd1',
                        },
                    ],
                    columns: 'number,request_type,request_for,assigned_to,approval,status,state',
                    condition: 'assigned_toDYNAMIC90d1921e5f510100a9ad2572f2b477fe^EQ',
                    hideCheckboxHover: true,
                    hideDragAndDrop: true,
                    liveUpdates: '',
                    order: 150,
                    table: 'x_aleen_snguardian_request',
                    title: 'Assigned To Me',
                },
                {
                    $id: Now.ID['2b1b8fe61b7502d06962fe60cd4bcb4e'],
                    applicabilities: [
                        {
                            $id: Now.ID['ef1b8fe61b7502d06962fe60cd4bcb60'],
                            applicability: 'df1b4fe61b7502d06962fe60cd4bcbd1',
                            order: 100,
                        },
                    ],
                    columns: 'number,request_type,assigned_to,approval,status,state,sys_created_on',
                    condition: '',
                    hideCheckboxHover: true,
                    hideDragAndDrop: true,
                    liveUpdates: '',
                    order: 50,
                    table: 'x_aleen_snguardian_request',
                    title: 'All',
                },
                {
                    $id: Now.ID['631b8fe61b7502d06962fe60cd4bcb68'],
                    applicabilities: [
                        {
                            $id: Now.ID['e71b8fe61b7502d06962fe60cd4bcb6a'],
                            applicability: 'df1b4fe61b7502d06962fe60cd4bcbd1',
                            order: 100,
                        },
                    ],
                    columns: 'number,request_type,approval,assigned_to,status,state,sys_created_on',
                    condition: 'active=true^assigned_toISEMPTY^EQ',
                    hideCheckboxHover: true,
                    hideDragAndDrop: true,
                    liveUpdates: '',
                    order: 30,
                    table: 'x_aleen_snguardian_request',
                    title: 'Unassigned',
                },
                {
                    $id: Now.ID['a71b8fe61b7502d06962fe60cd4bcb6c'],
                    applicabilities: [
                        {
                            $id: Now.ID['2f1b8fe61b7502d06962fe60cd4bcb6e'],
                            applicability: 'df1b4fe61b7502d06962fe60cd4bcbd1',
                            order: 100,
                        },
                    ],
                    columns: 'number,request_type,assigned_to,approval,status,state,sys_created_on',
                    condition: 'active=true^EQ',
                    hideCheckboxHover: true,
                    hideDragAndDrop: true,
                    liveUpdates: '',
                    order: 10,
                    table: 'x_aleen_snguardian_request',
                    title: 'Open',
                },
                {
                    $id: Now.ID['ab1b8fe61b7502d06962fe60cd4bcb63'],
                    applicabilities: [
                        {
                            $id: Now.ID['631b8fe61b7502d06962fe60cd4bcb66'],
                            applicability: 'df1b4fe61b7502d06962fe60cd4bcbd1',
                            order: 100,
                        },
                    ],
                    columns: 'number,request_type,assigned_to,approval,status,state,sys_created_on',
                    condition: 'active=false^EQ',
                    hideCheckboxHover: true,
                    hideDragAndDrop: true,
                    liveUpdates: '',
                    order: 40,
                    table: 'x_aleen_snguardian_request',
                    title: 'Closed',
                },
            ],
        },
        {
            $id: Now.ID['af1b8fe61b7502d06962fe60cd4bcb76'],
            title: 'Location Administration',
            order: 300,
            lists: [
                {
                    $id: Now.ID['af1b8fe61b7502d06962fe60cd4bcb78'],
                    applicabilities: [
                        {
                            $id: Now.ID['631b8fe61b7502d06962fe60cd4bcb94'],
                            applicability: 'df1b4fe61b7502d06962fe60cd4bcbd1',
                            order: 100,
                        },
                    ],
                    columns: 'name,locations,officers,office',
                    condition: '',
                    hideCheckboxHover: true,
                    hideDragAndDrop: true,
                    liveUpdates: '',
                    order: 50,
                    table: 'x_aleen_snguardian_badge_office',
                    title: 'All',
                },
            ],
        },
        {
            $id: Now.ID['bf1b8fe61b7502d06962fe60cd4bcbcd'],
            title: 'Access Level',
            order: 700,
            lists: [
                {
                    $id: Now.ID['bf1b8fe61b7502d06962fe60cd4bcbcf'],
                    applicabilities: [
                        {
                            $id: Now.ID['3b1b8fe61b7502d06962fe60cd4bcbf7'],
                            applicability: 'df1b4fe61b7502d06962fe60cd4bcbd1',
                            order: 100,
                        },
                    ],
                    columns: 'number,name,criticality,system,is_deleted',
                    condition: '',
                    hideCheckboxHover: true,
                    hideDragAndDrop: true,
                    liveUpdates: '',
                    order: 50,
                    table: 'x_aleen_snguardian_access_level',
                    title: 'All',
                },
            ],
        },
        {
            $id: Now.ID['eb1b8fe61b7502d06962fe60cd4bcb70'],
            title: 'Asset',
            order: 200,
            lists: [
                {
                    $id: Now.ID['12ab472a1b7502d06962fe60cd4bcbb4'],
                    applicabilities: [
                        {
                            $id: Now.ID['eaabcf2a1b7502d06962fe60cd4bcba0'],
                            applicability: 'df1b4fe61b7502d06962fe60cd4bcbd1',
                        },
                    ],
                    columns: 'number,serial,type,status,system',
                    condition: 'status=a67f0ed51bbc8210759455342a4bcbec',
                    hideCheckboxHover: true,
                    hideDragAndDrop: true,
                    liveUpdates: '',
                    order: 150,
                    table: 'x_aleen_snguardian_asset',
                    title: 'Unassinged',
                },
                {
                    $id: Now.ID['ab1b8fe61b7502d06962fe60cd4bcb72'],
                    applicabilities: [
                        {
                            $id: Now.ID['ef1b8fe61b7502d06962fe60cd4bcb74'],
                            applicability: 'df1b4fe61b7502d06962fe60cd4bcbd1',
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
                {
                    $id: Now.ID['f7db836a1b7502d06962fe60cd4bcb6a'],
                    applicabilities: [
                        {
                            $id: Now.ID['8cebcf2a1b7502d06962fe60cd4bcbe4'],
                            applicability: 'df1b4fe61b7502d06962fe60cd4bcbd1',
                        },
                    ],
                    columns: 'number,serial,type,status,system',
                    condition: 'status=627f0ed51bbc8210759455342a4bcbeb',
                    hideCheckboxHover: true,
                    hideDragAndDrop: true,
                    liveUpdates: '',
                    order: 250,
                    table: 'x_aleen_snguardian_asset',
                    title: 'Assigned',
                },
            ],
        },
        {
            $id: Now.ID['f31b8fe61b7502d06962fe60cd4bcb9c'],
            title: 'Identity',
            order: 500,
            lists: [
                {
                    $id: Now.ID['390c876a1b7502d06962fe60cd4bcbec'],
                    applicabilities: [
                        {
                            $id: Now.ID['460cc36a1b7502d06962fe60cd4bcbd7'],
                            applicability: 'df1b4fe61b7502d06962fe60cd4bcbd1',
                        },
                    ],
                    columns: 'user_name,first_name,last_name,email,type,phone,status,source_system_code',
                    condition: 'type=777f8ed51bbc8210759455342a4bcb58^EQ',
                    hideCheckboxHover: true,
                    hideDragAndDrop: true,
                    liveUpdates: '',
                    order: 150,
                    table: 'x_aleen_snguardian_identity',
                    title: 'Employee',
                },
                {
                    $id: Now.ID['b31b8fe61b7502d06962fe60cd4bcb9e'],
                    applicabilities: [
                        {
                            $id: Now.ID['3f1b8fe61b7502d06962fe60cd4bcbc5'],
                            applicability: 'df1b4fe61b7502d06962fe60cd4bcbd1',
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
                {
                    $id: Now.ID['c91cc76a1b7502d06962fe60cd4bcbca'],
                    applicabilities: [
                        {
                            $id: Now.ID['d91c0b6a1b7502d06962fe60cd4bcb3d'],
                            applicability: 'df1b4fe61b7502d06962fe60cd4bcbd1',
                        },
                    ],
                    columns: 'user_name,first_name,last_name,email,type,phone,status,source_system_code',
                    condition: 'type=bf7f8ed51bbc8210759455342a4bcb59^EQ',
                    hideCheckboxHover: true,
                    hideDragAndDrop: true,
                    liveUpdates: '',
                    order: 250,
                    table: 'x_aleen_snguardian_identity',
                    title: 'Temp Workers',
                },
            ],
        },
        {
            $id: Now.ID['fb1b8fe61b7502d06962fe60cd4bcbc7'],
            title: 'Location',
            order: 600,
            lists: [
                {
                    $id: Now.ID['bb1b8fe61b7502d06962fe60cd4bcbc9'],
                    applicabilities: [
                        {
                            $id: Now.ID['ff1b8fe61b7502d06962fe60cd4bcbcb'],
                            applicability: 'df1b4fe61b7502d06962fe60cd4bcbd1',
                            order: 100,
                        },
                    ],
                    columns: 'number,name,type,state,country,latitude,longitude',
                    condition: '',
                    hideCheckboxHover: true,
                    hideDragAndDrop: true,
                    liveUpdates: '',
                    order: 50,
                    table: 'x_aleen_snguardian_location',
                    title: 'All',
                },
            ],
        },
    ],
})
