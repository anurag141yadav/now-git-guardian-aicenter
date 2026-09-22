import { UxListMenuConfig } from '@servicenow/sdk/core'

UxListMenuConfig({
    $id: Now.ID['73c1aba247d1aa1051a3e84d416d4387'],
    name: 'Risk Management Workspace_menu_config',
    categories: [
        {
            $id: Now.ID['3bc1aba247d1aa1051a3e84d416d43a2'],
            title: 'Risk Rule',
            order: 200,
            lists: [
                {
                    $id: Now.ID['bbc1aba247d1aa1051a3e84d416d43a4'],
                    applicabilities: [
                        {
                            $id: Now.ID['33c1aba247d1aa1051a3e84d416d43a7'],
                            applicability: 'afc16ba247d1aa1051a3e84d416d43e8',
                            order: 100,
                        },
                    ],
                    columns: '',
                    condition: '',
                    hideCheckboxHover: true,
                    hideDragAndDrop: true,
                    liveUpdates: '',
                    order: 50,
                    table: 'x_aleen_snguardian_risk_rule',
                    title: 'All',
                },
            ],
        },
        {
            $id: Now.ID['73c1aba247d1aa1051a3e84d416d43a9'],
            title: 'Mitigation',
            order: 300,
            lists: [
                {
                    $id: Now.ID['bbc1aba247d1aa1051a3e84d416d43b7'],
                    applicabilities: [
                        {
                            $id: Now.ID['33c1aba247d1aa1051a3e84d416d43ba'],
                            applicability: 'afc16ba247d1aa1051a3e84d416d43e8',
                            order: 100,
                        },
                    ],
                    columns: '',
                    condition: '',
                    hideCheckboxHover: true,
                    hideDragAndDrop: true,
                    liveUpdates: '',
                    order: 50,
                    table: 'x_aleen_snguardian_mitigation',
                    title: 'All',
                },
            ],
        },
        {
            $id: Now.ID['73c1aba247d1aa1051a3e84d416d43bc'],
            title: 'Policy',
            order: 400,
            lists: [
                {
                    $id: Now.ID['f3c1aba247d1aa1051a3e84d416d43be'],
                    applicabilities: [
                        {
                            $id: Now.ID['7bc1aba247d1aa1051a3e84d416d43c0'],
                            applicability: 'afc16ba247d1aa1051a3e84d416d43e8',
                            order: 100,
                        },
                    ],
                    columns: '',
                    condition: '',
                    hideCheckboxHover: true,
                    hideDragAndDrop: true,
                    liveUpdates: '',
                    order: 50,
                    table: 'x_aleen_snguardian_policy',
                    title: 'All',
                },
            ],
        },
        {
            $id: Now.ID['7bc1aba247d1aa1051a3e84d416d4389'],
            title: 'Risk',
            lists: [
                {
                    $id: Now.ID['7fc1aba247d1aa1051a3e84d416d438c'],
                    applicabilities: [
                        {
                            $id: Now.ID['fbc1aba247d1aa1051a3e84d416d439f'],
                            applicability: 'afc16ba247d1aa1051a3e84d416d43e8',
                            order: 100,
                        },
                    ],
                    columns: '',
                    condition: '',
                    hideCheckboxHover: true,
                    hideDragAndDrop: true,
                    liveUpdates: '',
                    order: 50,
                    table: 'x_aleen_snguardian_risk',
                    title: 'All',
                },
            ],
        },
    ],
})
