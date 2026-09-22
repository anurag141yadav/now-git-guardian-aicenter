import { UxListMenuConfig } from '@servicenow/sdk/core'

UxListMenuConfig({
    $id: Now.ID['d70e78e0332dda10bf1221382e5c7bb7'],
    name: 'Lobby Admin Workspace_menu_config',
    categories: [
        {
            $id: Now.ID['1f0e78e0332dda10bf1221382e5c7bd2'],
            title: 'Location',
            order: 200,
            lists: [
                {
                    $id: Now.ID['db0e78e0332dda10bf1221382e5c7bd4'],
                    applicabilities: [
                        {
                            $id: Now.ID['9f0e78e0332dda10bf1221382e5c7bef'],
                            applicability: 'd30e78e0332dda10bf1221382e5c7b17',
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
        {
            $id: Now.ID['1f0e78e0332dda10bf1221382e5c7bf1'],
            title: 'Building',
            order: 300,
            lists: [],
        },
        {
            $id: Now.ID['6b0eb8e0332dda10bf1221382e5c7b10'],
            title: 'NDA & Email Template',
            order: 600,
            lists: [
                {
                    $id: Now.ID['2b0eb8e0332dda10bf1221382e5c7b12'],
                    applicabilities: [
                        {
                            $id: Now.ID['6f0eb8e0332dda10bf1221382e5c7b14'],
                            applicability: 'd30e78e0332dda10bf1221382e5c7b17',
                            order: 100,
                        },
                    ],
                    columns: 'name,type,is_deleted',
                    condition: '',
                    hideCheckboxHover: true,
                    hideDragAndDrop: true,
                    liveUpdates: '',
                    order: 50,
                    table: 'x_aleen_snguardian_visitor_nda_email_templates',
                    title: 'All',
                },
            ],
        },
        {
            $id: Now.ID['9f0e78e0332dda10bf1221382e5c7bb9'],
            title: 'Visit',
            lists: [
                {
                    $id: Now.ID['df0e78e0332dda10bf1221382e5c7bbc'],
                    applicabilities: [
                        {
                            $id: Now.ID['130e78e0332dda10bf1221382e5c7bd0'],
                            applicability: 'd30e78e0332dda10bf1221382e5c7b17',
                            order: 100,
                        },
                    ],
                    columns: 'number,start_date,end_date,status,visitor',
                    condition: '',
                    hideCheckboxHover: true,
                    hideDragAndDrop: true,
                    liveUpdates: '',
                    order: 50,
                    table: 'x_aleen_snguardian_visitor_visit',
                    title: 'All',
                },
            ],
        },
        {
            $id: Now.ID['af0e78e0332dda10bf1221382e5c7bf7'],
            title: 'Visitor',
            order: 400,
            lists: [
                {
                    $id: Now.ID['6f0e78e0332dda10bf1221382e5c7bf9'],
                    applicabilities: [
                        {
                            $id: Now.ID['6b0eb8e0332dda10bf1221382e5c7b08'],
                            applicability: 'd30e78e0332dda10bf1221382e5c7b17',
                            order: 100,
                        },
                    ],
                    columns: 'first_name,last_name,email,phone,visitor_type,visitor_status',
                    condition: '',
                    hideCheckboxHover: true,
                    hideDragAndDrop: true,
                    liveUpdates: '',
                    order: 50,
                    table: 'x_aleen_snguardian_visitor',
                    title: 'All',
                },
            ],
        },
        {
            $id: Now.ID['e70eb8e0332dda10bf1221382e5c7b0a'],
            title: 'Visitor Watch List',
            order: 500,
            lists: [
                {
                    $id: Now.ID['a70eb8e0332dda10bf1221382e5c7b0c'],
                    applicabilities: [
                        {
                            $id: Now.ID['eb0eb8e0332dda10bf1221382e5c7b0e'],
                            applicability: 'd30e78e0332dda10bf1221382e5c7b17',
                            order: 100,
                        },
                    ],
                    columns: 'first_name,last_name,email,phone,type,location',
                    condition: '',
                    hideCheckboxHover: true,
                    hideDragAndDrop: true,
                    liveUpdates: '',
                    order: 50,
                    table: 'x_aleen_snguardian_visitor_watch_list',
                    title: 'All',
                },
            ],
        },
    ],
})
