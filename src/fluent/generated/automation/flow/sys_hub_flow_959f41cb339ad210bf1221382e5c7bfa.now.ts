import { Flow, wfa, trigger } from '@servicenow/sdk/automation'
import { BooleanColumn } from '@servicenow/sdk/core'

Flow(
    {
        $id: Now.ID['959f41cb339ad210bf1221382e5c7bfa'],
        name: 'Alert Visitor Check-in flow',
        internalName: 'visitor_checkin_flow',
        description: 'Process Check-in Visitor Request',
        runAs: 'system',
        masterSnapshot: '5887599f2b565610d4dffd74ce91bfa1',
        flowVariables: {
            is_parent_present: BooleanColumn({
                label: 'is_parent_present',
            }),
        },
    },
    wfa.trigger(
        trigger.record.created,
        {
            $id: Now.ID['71960ce547523610f487c24fe16d43a9'],
        },
        {
            table: 'x_aleen_snguardian_visitor_request',
            condition: 'request_type=20b21f0f2b255210d4dffd74ce91bf94',
            run_on_extended: 'false',
            run_flow_in: 'any',
            run_when_user_list: [],
            run_when_setting: 'both',
            run_when_user_setting: 'any',
        }
    ),
    (_params) => {
        wfa.subflow(
            '341ebdcb335ed210bf1221382e5c7bc4',
            {
                $id: Now.ID['79960ce547523610f487c24fe16d43b2'],
                uuid: 'f53b0a10-ce39-4f85-a857-9e2e194c3d03',
            },
            {
                visit_record: wfa.inlineScript('return fd_data.trigger.current.variables.visit_id;'),
                record: wfa.dataPill(_params.trigger.current, 'reference'),
            }
        )
        wfa.flowLogic.setFlowVariables(
            {
                $id: Now.ID['31960ce547523610f487c24fe16d43b7'],
            },
            _params.flowVariables,
            {
                is_parent_present: wfa.inlineScript(`var parent = fd_data.trigger.current.variables.visit_id.parent;
if(parent && parent!="NULL"){
    return true;
}else{
    return false;
}`),
            }
        )
        wfa.flowLogic.if(
            {
                label: 'Parent is not Empty',
                condition: `${wfa.dataPill(_params.flowVariables.is_parent_present, 'boolean')}=true`,
                annotation: '',
                $id: Now.ID['35960ce547523610f487c24fe16d43bb'],
                uuid: 'ced5b172-71d9-4ad8-8870-d8e65be13088',
            },
            () => {
                wfa.subflow(
                    'f8acd5c047ad2e10f487c24fe16d435b',
                    {
                        $id: Now.ID['31960ce547523610f487c24fe16d43bc'],
                        uuid: 'cf244f60-5212-494b-b59c-8fa76fc38716',
                    },
                    {
                        child_visit_sys_id: wfa.inlineScript(
                            'return fd_data.trigger.current.variables.visit_id.sys_id;'
                        ),
                        parent_visit_sys_id: wfa.inlineScript(
                            'return fd_data.trigger.current.variables.visit_id.parent.sys_id;'
                        ),
                        action: 'CHECK-IN',
                    }
                )
            }
        )
    }
)
