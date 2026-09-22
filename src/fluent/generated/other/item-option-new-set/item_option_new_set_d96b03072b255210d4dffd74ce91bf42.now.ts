import { VariableSet, MultipleChoiceVariable, YesNoVariable } from '@servicenow/sdk/core'

export const healthQuestions = VariableSet({
    $id: Now.ID['d96b03072b255210d4dffd74ce91bf42'],
    title: 'Health Questions',
    internalName: 'health_questions',
    layout: '2down',
    displayTitle: true,
    version: 36,
    variables: {
        the_past_14_days: MultipleChoiceVariable({
            question: 'Have you experienced any of the following symptoms in the past 14 days?',
            order: 10,
            defaultValue: 'NONE',
            choices: {
                NONE: {
                    label: 'None of the Above',
                    inactive: false,
                    sequence: 100,
                },
                SHORT_BREATH: {
                    label: 'Shortness of Breath or Difficulty in breathing',
                    inactive: false,
                    sequence: 300,
                },
                FEVER: {
                    label: 'Fever',
                    inactive: false,
                    sequence: 150,
                },
                FATIGUE: {
                    label: 'Fatigue',
                    inactive: false,
                    sequence: 400,
                },
                ACHE: {
                    label: 'Muscle or body aches',
                    inactive: false,
                    sequence: 600,
                },
                SORE: {
                    label: 'Sore Throught',
                    inactive: false,
                    sequence: 700,
                },
                COUGH: {
                    label: 'Cough',
                    inactive: false,
                    sequence: 200,
                },
            },
        }),
        health_any_recent_contact_with_sick_person: YesNoVariable({
            question: 'Any recent contact with sick person?',
            order: 20,
            defaultValue: 'No',
        }),
        have_you_received_a_covid_19_vaccination: YesNoVariable({
            question: 'Have you received a COVID-19 vaccination?',
            order: 30,
            defaultValue: 'Yes',
        }),
        have_you_tested_positive_for_covid_19_in_the_past_14_days: YesNoVariable({
            question: 'Have you tested positive for COVID-19 in the past 14 days?',
            order: 40,
            defaultValue: 'No',
        }),
        are_you_currently_under_quarantine: YesNoVariable({
            question: 'Are you currently under quarantine?',
            order: 50,
            defaultValue: 'No',
        }),
        do_you_agree_to_wear_a_face_mask_and_maintain_social_distancing_guidelines_while_on_the_premises: YesNoVariable(
            {
                question:
                    'Do you agree to wear a face mask and maintain social distancing guidelines while on the premises?',
                order: 60,
                defaultValue: 'Yes',
            }
        ),
    },
})
