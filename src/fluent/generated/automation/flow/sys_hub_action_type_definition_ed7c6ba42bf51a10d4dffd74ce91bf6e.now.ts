import { Action, FlowArray, FlowObject, wfa, actionStep } from '@servicenow/sdk/automation'
import { ReferenceColumn, StringColumn, BooleanColumn } from '@servicenow/sdk/core'

export const process_visit_visitor_request_data = Action(
    {
        $id: Now.ID['ed7c6ba42bf51a10d4dffd74ce91bf6e'],
        name: 'Alert Process Visit Visitor Request Data',
        internalName: 'process_visit_visitor_request_data',
        inputs: {
            visitor_request: ReferenceColumn({
                label: 'visitor_request',
                referenceTable: 'x_aleen_snguardian_visitor_request',
            }),
        },
        outputs: {
            visitorlist: FlowArray({
                $id: 'e34b187c2bb91a10d4dffd74ce91bf52',
                co_type_name: 'FD234b187c66b91a1086294150322b2552',
                elementType: FlowObject({
                    fields: {
                        visitor_last_name: StringColumn({
                            label: 'visitor_last_name',
                        }),
                        visitor_id: StringColumn({
                            label: 'visitor_id',
                        }),
                        visitor_is_existing: BooleanColumn({
                            label: 'visitor_is_existing',
                        }),
                        visitor_first_name: StringColumn({
                            label: 'visitor_first_name',
                        }),
                        visitor_email: StringColumn({
                            label: 'visitor_email',
                        }),
                        visitor_phone: StringColumn({
                            label: 'visitor_phone',
                        }),
                    },
                    label: 'visitor',
                }),
                label: 'visitorList',
                childName: 'visitor',
            }),
            visittype: StringColumn({
                label: 'visit type',
                maxLength: 8000,
            }),
            isexisting: BooleanColumn({
                label: 'is exisiting',
            }),
        },
        masterSnapshot: 'dfab10bc2bb91a10d4dffd74ce91bfc0',
    },
    (params) => {
        const script_step = wfa.actionStep(
            actionStep.script,
            {
                $id: Now.ID['e1d148302b791a10d4dffd74ce91bf3e'],
                label: 'Script step',
            },
            {
                application: '35aa573fd7802200bdbaee5b5e610375',
                script: Now.include('./scripts/e1d148302b791a10d4dffd74ce91bf3e.js'),
                errorHandlingType: 'stop_the_action',
                required_run_time: 'instance',
                inputVariables: {
                    visitor_request: {
                        label: 'visitor_request',
                        value: wfa.dataPill(params.inputs.visitor_request, 'reference'),
                    },
                },
                outputVariables: {
                    visitorlist: FlowArray({
                        $id: 'ea6854b82bb91a10d4dffd74ce91bf4e',
                        co_type_name: 'FD2a6854b8bdb91a10cf8037ab924ea74e',
                        elementType: FlowObject({
                            fields: {
                                visitor_last_name: StringColumn({
                                    label: 'visitor_last_name',
                                }),
                                visitor_id: StringColumn({
                                    label: 'visitor_id',
                                }),
                                visitor_is_existing: BooleanColumn({
                                    label: 'visitor_is_existing',
                                }),
                                visitor_first_name: StringColumn({
                                    label: 'visitor_first_name',
                                }),
                                visitor_email: StringColumn({
                                    label: 'visitor_email',
                                }),
                                visitor_phone: StringColumn({
                                    label: 'visitor_phone',
                                }),
                            },
                            label: 'visitor',
                        }),
                        label: 'visitorList',
                        childName: 'visitor',
                    }),
                    visit_type: StringColumn({
                        label: 'visit type',
                        maxLength: 8000,
                    }),
                    is_exisiting: BooleanColumn({
                        label: 'is exisiting',
                        maxLength: 40,
                    }),
                },
            }
        )
        wfa.assignActionOutputs(params.outputs, {
            visitorlist: wfa.dataPill(script_step.visitorlist, 'array.object'),
            isexisting: wfa.dataPill(script_step.is_exisiting, 'boolean'),
            visittype: wfa.dataPill(script_step.visit_type, 'string'),
        })
    }
)
