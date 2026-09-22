import { Record } from '@servicenow/sdk/core'

Record({
    $id: Now.ID['13976c574707e21051a3e84d416d4349'],
    table: 'sys_hub_flow',
    data: {
        access: 'public',
        acls: '',
        active: true,
        attributes:
            'browserActivatedIn=chrome,integrationActivatedIn=standalone,labelCacheCleanUpExecuted=true,timeFromCreateToActivate=17195149000,viewActivatedIn=naturalLanguage',
        authored_on_release_version: 25000,
        callable_by_client_api: false,
        flow_priority: 'MEDIUM',
        internal_name: 'processing_provisioning_queue_flow',
        label_cache: '[]',
        master_snapshot: '00f868d74707e21051a3e84d416d436a',
        name: 'Alert Processing Provisioning Queue Flow',
        pre_compiled: false,
        remote_trigger_id: '1cf868d74707e21051a3e84d416d439f',
        run_as: 'system',
        run_with_roles: '',
        sc_callable: false,
        show_draft_actions: false,
        show_triggered_flows: false,
        status: 'published',
        sys_domain: 'global',
        sys_domain_path: '/',
        type: 'flow',
        version: '2',
        latest_snapshot: '00f868d74707e21051a3e84d416d436a',
        compiler_build: 'glide-washingtondc-12-20-2023__patch10-hotfix3b-05-20-2025_05-23-2025_1940.zip',
    },
})
Record({
    $id: Now.ID['9b9760974707e21051a3e84d416d4379'],
    table: 'sys_flow_cat_variable_model',
    data: {
        id: '13976c574707e21051a3e84d416d4349',
        name: 'Processing Provisioning Queue Flow',
    },
})
Record({
    $id: Now.ID['c0f868d74707e21051a3e84d416d436b'],
    table: 'sys_flow_cat_variable_model',
    data: {
        id: '00f868d74707e21051a3e84d416d436a',
        name: 'Processing Provisioning Queue Flow',
    },
})
Record({
    $id: Now.ID['622419df4707f21051a3e84d416d435e'],
    table: 'sys_hub_trigger_instance_v2',
    data: {
        flow: '13976c574707e21051a3e84d416d4349',
        name: 'Repeat',
        trigger_definition: 'f63f0d94c32222002841b63b12d3aeed',
        trigger_inputs:
            'H4sIAAAAAAAA/31SwWrcMBD9laLzxki2N7vxrRACObSBpOQSghlLY69AllxJ3sQN+feObO+mlLTCF72ZefPes57eWPS669Df2hDBSnyYwq1iFSu2uM/3alfu+A5zwbcCCtyXqhSXqiy2OdswAw0aar3HASESoG1Eb8H8mAYkvDNaYa1GD1E7S/UerILo/MSq6EfcMOcVelYJzjfMQp+G/InsCGZMgLja8QsuLnj+hfMqfYKqSofBwPT436YBPJHGtOKNyYM2yqNl1dPzhkWSWJ8MXH9I1Mm7kNu2VFelLHI6nOf7UjSXRSNyVQA2xWfe/5Yf/5HBn5bxNaJVSCtbMAE/CcgjqDtrpnPHgTIm2jnM16B/4UrlsUUyJ3Epnq/1GtQCy4PTEu+GWcuMRGjMOiOdGXv7ffGRIsYWRhNPERMyBuIjg6Q5qVgltQ8H93J/Wnij7WxwLRonwZxvEOm1NWPEkP4IGuyJqO5hGLTt6sG7o56HSUufzdFlrXEvtDTozmYgk/CMIoLshvDrGX4Er5OLb0RDw++z+/rnmPYuPlbF9WKaGoL0eohfie6Iq7j359+bgfrNDAMAAA==',
        trigger_type: 'repeat',
    },
})
Record({
    $id: Now.ID['362419df4707f21051a3e84d416d43c3'],
    table: 'sys_hub_trigger_instance_v2',
    data: {
        flow: '00f868d74707e21051a3e84d416d436a',
        name: 'Repeat',
        trigger_definition: 'f63f0d94c32222002841b63b12d3aeed',
        trigger_inputs:
            'H4sIAAAAAAAA/31SwWrcMBD9laLzxki2N7vxrRACObSBpOQSghlLY69AllxJ3sQN+feObO+mlLTCF72ZefPes57eWPS669Df2hDBSnyYwq1iFSu2uM/3alfu+A5zwbcCCtyXqhSXqiy2OdswAw0aar3HASESoG1Eb8H8mAYkvDNaYa1GD1E7S/UerILo/MSq6EfcMOcVelYJzjfMQp+G/InsCGZMgLja8QsuLnj+hfMqfYKqSofBwPT436YBPJHGtOKNyYM2yqNl1dPzhkWSWJ8MXH9I1Mm7kNu2VFelLHI6nOf7UjSXRSNyVQA2xWfe/5Yf/5HBn5bxNaJVSCtbMAE/CcgjqDtrpnPHgTIm2jnM16B/4UrlsUUyJ3Epnq/1GtQCy4PTEu+GWcuMRGjMOiOdGXv7ffGRIsYWRhNPERMyBuIjg6Q5qVgltQ8H93J/Wnij7WxwLRonwZxvEOm1NWPEkP4IGuyJqO5hGLTt6sG7o56HSUufzdFlrXEvtDTozmYgk/CMIoLshvDrGX4Er5OLb0RDw++z+/rnmPYuPlbF9WKaGoL0eohfie6Iq7j359+bgfrNDAMAAA==',
        trigger_type: 'repeat',
    },
})
Record({
    $id: Now.ID['622419df4707f21051a3e84d416d4368'],
    table: 'sys_hub_action_instance_v2',
    data: {
        action_type: '5bc1bcc6531003003bf1d9109ec587d4',
        action_type_parent: '0e0ae8c2531003003bf1d9109ec587c8',
        flow: '13976c574707e21051a3e84d416d4349',
        order: '3',
        parent_ui_id: 'd7c9382f-e261-4d18-8946-5d07bd3948d6',
        ui_id: '895cfda3-6531-4874-b1c4-7a7f05ae8dec',
        values: 'H4sIAAAAAAAA/91UUW/aMBD+K8jPgBKSAOVtalcJaW2lVWIPVRUZ+wKWHDu1E1qG+O87JyakDFVl29OkvPjy+fx9d9/d045QVgqt5sqWVDF43No5JzMSj2E6mvJJPAkmMAqDJKQRTGMeh2MeR5OE9IlwuGTJwiVj4yQKgyDCb5mF/CoMroAl0wmfIE7RHBAp9SqVsAGJoQ2VlYsJlWk8cmELSbcLH503UbYWkhtQZPb03CcFNZinBENmu5Nf5baAVNIlpp6R67UWDC6gd7j4zXM7Q9c9gCF2SK0NdzyCPoG3EhQHfCqj0kKf5FRxWmqzbSMGKH9Q8hhYC1ViNuLAb1b8xNRx4HAZoCQGzb/2mPrqNOGGg0Xhu5b5YNC71wp6g0GntB2a+/4R62t70gCPDLvIH9QooVYd8CtGjuBRF/zVGG06UPBnj4322CYOGa1keX25gvDTCkaXKIguUBA7BU3xHwo3MAgJnTXoUnqyTMsqV/eNfUird3Hi9SZ6c9bylcV2Q+Es5TziDZM9rvXr94MfboWqGfmfUjMq2xMtSyOWVenquyMgIcdEaU6LAguRFkZvRH0ZyebDlcTDMJP6FR+1YqWGzS4YooPp8BbjN3V4QY1wMu8wDV7e1+ZMXyr3biPUM07rsjiAZUYU5RdMtwFPzhX773bNKPpomCF5P7w5WEtX0Glp3eKeUD2sAzrQYkl6LxVU8PsK+gj6Z3vpERtTe/GzUg4X71odZ8X53WQP6Q8j88920yhJLltO7XxcNB7/u/uffwEJL7AxawcAAA==',
    },
})
Record({
    $id: Now.ID['a22419df4707f21051a3e84d416d4363'],
    table: 'sys_hub_action_instance_v2',
    data: {
        action_type: '79a8e0d74707e21051a3e84d416d436e',
        action_type_parent: 'ebd760974707e21051a3e84d416d43b2',
        flow: '13976c574707e21051a3e84d416d4349',
        order: '1',
        parent_ui_id: '23474cf1-c0c4-4d02-ab2d-fe05f5a5fc45',
        ui_id: '095e4f50-2ae5-4aa4-9c20-ef0ea4fdb019',
        values: 'H4sIAAAAAAAA/4uOBQApu0wNAgAAAA==',
    },
})
Record({
    $id: Now.ID['362419df4707f21051a3e84d416d43e1'],
    table: 'sys_hub_action_instance_v2',
    data: {
        action_type: '5bc1bcc6531003003bf1d9109ec587d4',
        action_type_parent: '0e0ae8c2531003003bf1d9109ec587c8',
        compiled_snapshot: '5bc1bcc6531003003bf1d9109ec587d4',
        flow: '00f868d74707e21051a3e84d416d436a',
        order: '3',
        parent_ui_id: 'd7c9382f-e261-4d18-8946-5d07bd3948d6',
        ui_id: '895cfda3-6531-4874-b1c4-7a7f05ae8dec',
        values: 'H4sIAAAAAAAA/+VUTW/iMBD9K8hnQAlJgHJbtVsJqR/SInUPVYWMPQFLjp3aDi2L+t93nBhIKaqKtreVcpmXZ3vezJt53BLKnNBqqqyjisFsY6ecTEg6hPFgzEfpKBrBII6ymCYwTnkaD3majDLSJcLzsgWLF4wNsySOogS/RR7zizi6AJaNR3yEPEULQKbUy7mENUiE1lRWHhMq1xhyYUtJNw8BnTYoWwnJDSgyeXzqkpIavMeBIZPt0a+vJiLpAl+fkJuQxYnE3Kb0EFtpwSDEN+HY5Q7Uhvs0oi6BVweKA76fU2mhSwqqOHXabPaIAcrvlTwAK6Ec3kY8+dWKP/heGnleDqiIQfNvH85DcRo4v6KOzpypmKtMoDbJWqzFdi+x1+vcaQWdXq9V7Vbqb90DN5T7qCeBGbeZv6lRQi1b5BdEDuRBm/zTGG1aVAhx4CZv2DkOOa2kuzxfQfxlBYNzFCRnKEi9gqb496WfIaTE3jN0IXet0bIq1F3jM7LX+3Bk/wa9OjkFlUULQOlt5n0TTJTPVvrl184j10LVGYWfUjMq9xF1zohF5Xx9twQkFHjRvKBliYWYl0avRX0Yky36S4lBP5f6BR+1Yqn6zXroo6tp/xrxqxp+oEZ4mbd4DR5+6xK7sZeSWnsQixaeP1c+k0Z60DCvC1UfYUaU7gc+sIaQri//vy2kQfLZHoDs/dwXYC1dQqvJddM7QnWwMuhJi0XqPFdQwcc99Rn1vOX1haR3przdZ3xSRlhgFnte27y9wGY7cDdD37bABln2PRvs1E74OGVnDdn/N0NPfwGG/kTI1gcAAA==',
    },
})
Record({
    $id: Now.ID['be2419df4707f21051a3e84d416d43dc'],
    table: 'sys_hub_action_instance_v2',
    data: {
        action_type: '79a8e0d74707e21051a3e84d416d436e',
        action_type_parent: 'ebd760974707e21051a3e84d416d43b2',
        compiled_snapshot: '79a8e0d74707e21051a3e84d416d436e',
        flow: '00f868d74707e21051a3e84d416d436a',
        order: '1',
        parent_ui_id: '23474cf1-c0c4-4d02-ab2d-fe05f5a5fc45',
        ui_id: '095e4f50-2ae5-4aa4-9c20-ef0ea4fdb019',
        values: 'H4sIAAAAAAAA/4uOBQApu0wNAgAAAA==',
    },
})
Record({
    $id: Now.ID['a62419df4707f21051a3e84d416d4367'],
    table: 'sys_hub_flow_logic_instance_v2',
    data: {
        block: 'ee2419df4707f21051a3e84d416d4366',
        flow: '13976c574707e21051a3e84d416d4349',
        logic_definition: '35d60003e6022010a5e40cdd1254dd23',
        order: '2',
        ui_id: 'd7c9382f-e261-4d18-8946-5d07bd3948d6',
        values: 'H4sIAAAAAAAA/+1Y32/jNgz+Vwajj2lm58clzVvRLkCHtQWWXF/mwpAtJtVNsXy2nLYX5H8fKctKnGTXoZf1YQtQBDYpkZ/IjxTdladKnZW6mKrLohDz1Bv98djyREoyfF55KVuAN/KiqNBMl0UUeS1vyWRJwlXoLSEvhEpDbxR6QdsPvVboFZALJsU3plEzVvmCaaP/dXJ/ZxYkapFJeLmPv0BCqhWJOFRPZ8myfjC7vrAla0uWztsTnYt0biycLY0u9NZrfFtAUbD5O/evdwFNkidYsMrGWKrna6DAQD4aX19eTW/u7ybTy+nnSQN36N2kGuaQ2/NxaJ/NBEgezVgCuqgWTwS5uWXZmIRm2yoMQ68U09cMfmMxSHod0U9tLySL+JMD45FK5atbofMSnPpJpNpo0lLK1saoWy127HGYsVLqyOTSrXJqllDyIshzlUcVRw47lg3UVxSOWrVgKWda5RvIMyaLjV7lvAJkdMHWvpdIQjrXT07Z8+l3jX+NdGNINzm14h8NvLV4rLgXTXP7YXcb3xnyWxuN90W98/2o+y7uFPjvVEP7TOOp3x102wpqLImKjDlqPm7NTvkdK0Gq6fqNumjG/tKk7KeJaY37iCLbV6KNj32AR6wS3ylL8TkVX0u44U45hC7E3Yv+eXJx4Z/32ICfx0POzv1hwAKWsHgAsUv2Grs8F0Um2evDqdmfmv2p2Z+a/anZ/4ebffIkJM8hNTO/4NjvUWhnf+pwW1N/czV+LRRJLjJN4Vmi3hyoFiI3kEx7Fm31/ohRXJKxHM1pyFHQPIBpCoaJyEjSbtEQndl2iz4PlCHqKWXYfLbBvQFnF30prqvbk9yiBeE8GqrLPSB1gGrNVRXzZgb0rjFDF28UtDx40ZBy4A6bY5qTEFPvkahOQNVSeUV6FeIb2u75tG4GeJDEnty9RnYgqLOlRAL3GcWvkmgWyzqVSpaL9K4CT6NEVWcPm3hayXVzxkBFWaAjyOgwhM5CnU2e1PPvNZKxSM25rVKqhEn3xjQ24bjUUFSJQfzR15IWVH6t6aiCTeR8gy3VHfGBZClqhw2uOBi7VLl1xbRXXXrHoOVL54h88f93jHncSUx1ndWJ8WeDDuuzTj8Ouh0/8ONPATB86A6GQTLoXWwl7hcikr1PNtlr/KfFJlDVLuqCp6gfKYXDj0vhcTNly3Q7PM3CdYnZnjBQ3pwtUA8SFpTgBcsyLJQoy9VSGBT0sdCeS3xpz3AeQvQ0ELWrTtDGaLP2Zk56YPgpFJspKMPN/6D3HOoU1JEsUEjJHN+6JoP97zLTf3Zbyt9djbvcneLmn8fktuYv5wM/GA6SpPsJiL/9fr8bD3o+4z2fc55s8XcDbw+v5W2slASW/jvE/Zi7amaDc7j91NoPv7UOMueRiFJxsKiSzSER9Mk+JdlN/V9dUrxizkSyLXpW+Z9E8o1s/RfQLDk/HxYAAA==',
    },
})
Record({
    $id: Now.ID['aa2419df4707f21051a3e84d416d4362'],
    table: 'sys_hub_flow_logic_instance_v2',
    data: {
        block: 'e22419df4707f21051a3e84d416d4362',
        flow: '13976c574707e21051a3e84d416d4349',
        logic_definition: 'e9060aa2c3013010ace8b740ad40dd51',
        order: '0',
        ui_id: '23474cf1-c0c4-4d02-ab2d-fe05f5a5fc45',
        values: 'H4sIAAAAAAAA/6tWyi8tKSgtKQ7JdywuzkzPU7KKjtVRyswDiUHYZYlFmYlJOalQbkpqcmZxZn5eCEjME0ldSmVeYm5mMrJQeX5RdlpOfjlCrBYAD1ouqHEAAAA=',
    },
})
Record({
    $id: Now.ID['7a2419df4707f21051a3e84d416d43e0'],
    table: 'sys_hub_flow_logic_instance_v2',
    data: {
        block: 'ee2419df4707f21051a3e84d416d4366',
        flow: '00f868d74707e21051a3e84d416d436a',
        logic_definition: '35d60003e6022010a5e40cdd1254dd23',
        order: '2',
        ui_id: 'd7c9382f-e261-4d18-8946-5d07bd3948d6',
        values: 'H4sIAAAAAAAA/+1ZXW/iOBT9K6uoj5RNCgyUt6pdpK6mRVqYedlUkWMb6hmTZGyHtoP47+NrOyYhzKymy2irFRKK4nv9ce851ydx2AR5qYpSyXl+JSVbZsH474dOwDKw6ftNkKEVDcZBkkiFVCmTJOgEa8RLMG7iYE2FZHkWB+M4iLphHHTiQFLBEGdfkdKeSS5WSBn/n7PpvemA81XB6fM0/UQxuDZgItTeneF1dWNGfUJr1OUoW3ZnSrBsaWY4WxtfHGy3urWiUqLlK8dv9wOa4Ue6QnaOCc+fbigAQ8V4cnN1Pb+d3s/mV/MPs0bccXCbKbqkwuVHaPdswSgnyQJhqqTtPGOwzB0qJmA0wzZxHAclm78U9D1KKYfmGC7VfDHMqC+CIpLkGX/xPZQoqXc/skwZT1Zy3tlN6nuzvfkIXaCSq8Rw6Xt5N8JAXkKFyEVia+TwwrwR9TXAUblWKCNI5WIX8gJxufPngtiAjC+qjXtOOM2W6tE7+yFct/rXoFtDuuPUmf8t8G7GY+Eum9O1YfcDXwn5nUPjdahf/Bj10OMOwP9gN3TPlM761aA7KahiwXlipgPx8X32tt+xCMqbS//Dvmhif2Uo+21mpLEdUeJ0Jdmt0Q7wiLsk9M6SfcjYl5LeEu8c0R5Ne5eDc3x5GZ730ZCcpyOCzsNRhCKEUTqkqSd7q1WeMFlw9PLxJPYnsT+J/UnsT2L/PxZ7/Mg4ETSrv/ODsmlXgYRuKyo00YHZboZjzTUYagTrIU7I9KgDBa79AIbe1v4E0X7MaIvEghUK4F5riwGoMuoVtx0jbyJD/D3LPtshtfD18aVkN3ZSCE13YD4qU2i8FSwjdprKc20zb+KgDk3WTtxQGIyjTkCfFc0IJT4Hz763QPVMdfEEY0CmYwrYhqIZl+yrXrAfQrcF1dlhB5BvJg48a17cIIW0opVYlYJWwOQMU2lxsY1pAcxYt0Ipr3rmvFxl9zZl4MXujRovznLTIqyUOhJaQLIQvsttMXvMn/6qQp2wzODinDzHiPsWUlo401JBoECwfJHXHEm5i0annHwpYYiNxC2W2ES2B4tm2/Gl7B4XP1nN9unwxopZVkE1atmHul/Kdz7zFhTqwISt1F05XxyvnMNTQb+2oB/26reh2idpPknzW6zkk8yeZPatFueDYzJcDC/QAF0M0qh3EUZh+i6iSN/0hqMID/uXNab/gOp0p4Ad3Y3v445xexDYY3xaGSsxAp5+inNnOED66JikO9auj1gIx+XbqUgd6KaueKjrJ0xtb54ttZ9yuoKiWKGi0NsxKUS+ZiYK+FjUXXLd6C70eVhHDwfirhWqrqYIdXfn5I9IMIBDi1yhB/+K91iawQKk9h9M1JZDI5j7+va994ZqBxAyDKPREOPeOwo7YDAY9NJhP0SkHxJCcG0H7IJoReUqP81zTlG2V/pzHdfvE8jo15T/ER/Hxy7+hcv6sBRW3v9eD7/72rl2te3xwQw+Bc/Bdlv9WwiOF10TDNdNT7n4DJtnZ9t+A3wUxSd3HAAA',
    },
})
Record({
    $id: Now.ID['b62419df4707f21051a3e84d416d43dc'],
    table: 'sys_hub_flow_logic_instance_v2',
    data: {
        block: 'e22419df4707f21051a3e84d416d4362',
        flow: '00f868d74707e21051a3e84d416d436a',
        logic_definition: 'e9060aa2c3013010ace8b740ad40dd51',
        order: '0',
        ui_id: '23474cf1-c0c4-4d02-ab2d-fe05f5a5fc45',
        values: 'H4sIAAAAAAAA/6tWyi8tKSgtKQ7JdywuzkzPU7KKjtVRyswDiUHYZYlFmYlJOalQbkpqcmZxZn5eCEjME0ldSmVeYm5mMrJQeX5RdlpOfjlCrBYAD1ouqHEAAAA=',
    },
})
Record({
    $id: Now.ID['00f868d74707e21051a3e84d416d436a'],
    table: 'sys_hub_flow_snapshot',
    data: {
        access: 'public',
        active: 'true',
        attributes:
            'browserActivatedIn=chrome,integrationActivatedIn=standalone,labelCacheCleanUpExecuted=true,viewActivatedIn=naturalLanguage',
        authored_on_release_version: '25000',
        callable_by_client_api: 'false',
        flow_priority: 'MEDIUM',
        internal_name: 'processing_provisioning_queue_flow',
        label_cache: '[]',
        master: 'true',
        name: 'Alert Processing Provisioning Queue Flow',
        parent_flow: '13976c574707e21051a3e84d416d4349',
        run_as: 'system',
        sc_callable: 'false',
        status: 'published',
        sys_domain: 'global',
        sys_domain_path: '/',
        type: 'flow',
        version: '2',
    },
})
Record({
    $id: Now.ID['1cf868d74707e21051a3e84d416d43a2'],
    table: 'sys_flow_trigger_plan',
    data: {
        binding_strategy: 'com.snc.process_flow.engine.binding.RunAlways',
        plan: '{"type":"PlanProxy","persistor":{"@class":".ChunkingPlanPersistor","table":"sys_flow_trigger_plan","id":"1cf868d74707e21051a3e84d416d43a2","name":"plan","plan_signature":null}}',
        plan_id: '13976c574707e21051a3e84d416d4349',
        snapshot: '00f868d74707e21051a3e84d416d436a',
        sys_domain: 'global',
        sys_domain_path: '/',
        trigger: '1cf868d74707e21051a3e84d416d439f',
    },
})
