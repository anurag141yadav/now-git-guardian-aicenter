import { Subflow, wfa } from '@servicenow/sdk/automation'
import { StringColumn, BooleanColumn } from '@servicenow/sdk/core'

export const alert_authentication_subflow = Subflow(
    {
        $id: Now.ID['716f093c478b361051a3e84d416d4306'],
        name: 'Alert Authentication Subflow',
        internalName: 'alert_authentication_subflow',
        runAs: 'system',
        masterSnapshot: '7ea0117047cb361051a3e84d416d439c',
        category: '{}',
        inputs: {
            system_id: StringColumn({
                label: 'system_id',
                maxLength: 8000,
            }),
        },
        outputs: {
            success: BooleanColumn({
                label: 'success',
            }),
            token: StringColumn({
                label: 'token',
                maxLength: 8000,
            }),
            message: StringColumn({
                label: 'message',
                maxLength: 8000,
            }),
        },
    },
    (_params) => {
        const actionInstance_1 = wfa.action(
            '4240953047cb361051a3e84d416d43c4',
            {
                $id: Now.ID['fea0117047cb361051a3e84d416d437e'],
                uuid: '45805469-fbea-4fc7-830d-62f9568cbc2a',
            },
            {
                system_id: wfa.dataPill(_params.inputs.system_id, 'string'),
            }
        )
        wfa.flowLogic.assignSubflowOutputs(
            {
                $id: Now.ID['fea0117047cb361051a3e84d416d4380'],
            },
            _params.outputs,
            {
                success: wfa.dataPill(actionInstance_1.success, 'boolean'),
                token: wfa.dataPill(actionInstance_1.token, 'string'),
                message: wfa.dataPill(actionInstance_1.message, 'string'),
            }
        )
    }
)
