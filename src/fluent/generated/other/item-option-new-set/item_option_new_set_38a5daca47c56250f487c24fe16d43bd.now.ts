import {
    VariableSet,
    SingleLineTextVariable,
    SelectBoxVariable,
    ReferenceVariable,
    CustomVariable,
    DateTimeVariable,
    YesNoVariable,
} from '@servicenow/sdk/core'

export const issueBadgeDetails = VariableSet({
    $id: Now.ID['38a5daca47c56250f487c24fe16d43bd'],
    title: 'Issue Badge Details',
    internalName: 'issue_badge_details',
    layout: '2across',
    version: 61,
    variables: {
        valid_to_gmt: SingleLineTextVariable({
            question: 'Valid To GMT',
            hidden: true,
        }),
        valid_from_gmt: SingleLineTextVariable({
            question: 'Valid From GMT',
            hidden: true,
        }),
        badge_type: SelectBoxVariable({
            question: 'Badge Type',
            order: 5,
            choices: {
                plastic: {
                    label: 'Plastic',
                    inactive: false,
                    sequence: 100,
                    pricingDetails: [
                        {
                            amount: 0,
                            currencyType: 'USD',
                            field: 'misc',
                        },
                        {
                            amount: 0,
                            currencyType: 'USD',
                            field: 'rec_misc',
                        },
                    ],
                },
                mobile_cred: {
                    label: 'Mobile Credentials',
                    inactive: false,
                    sequence: 200,
                    pricingDetails: [
                        {
                            amount: 0,
                            currencyType: 'USD',
                            field: 'misc',
                        },
                        {
                            amount: 0,
                            currencyType: 'USD',
                            field: 'rec_misc',
                        },
                    ],
                },
                qr_code: {
                    label: 'QR Code',
                    inactive: false,
                    sequence: 300,
                    pricingDetails: [
                        {
                            amount: 0,
                            currencyType: 'USD',
                            field: 'misc',
                        },
                        {
                            amount: 0,
                            currencyType: 'USD',
                            field: 'rec_misc',
                        },
                    ],
                },
            },
            includeNone: true,
        }),
        reason: SelectBoxVariable({
            question: 'Reason',
            order: 10,
            choices: {
                forget: {
                    label: 'Forget Badge at Home',
                    inactive: false,
                    sequence: 100,
                    pricingDetails: [
                        {
                            amount: 0,
                            currencyType: 'USD',
                            field: 'misc',
                        },
                        {
                            amount: 0,
                            currencyType: 'USD',
                            field: 'rec_misc',
                        },
                    ],
                },
                scheduled_visit: {
                    label: 'Scheduled Visit',
                    inactive: false,
                    sequence: 300,
                    pricingDetails: [
                        {
                            amount: 0,
                            currencyType: 'USD',
                            field: 'misc',
                        },
                        {
                            amount: 0,
                            currencyType: 'USD',
                            field: 'rec_misc',
                        },
                    ],
                },
                lost: {
                    label: 'Lost or Stolen',
                    inactive: false,
                    sequence: 200,
                    pricingDetails: [
                        {
                            amount: 0,
                            currencyType: 'USD',
                            field: 'misc',
                        },
                        {
                            amount: 0,
                            currencyType: 'USD',
                            field: 'rec_misc',
                        },
                    ],
                },
            },
        }),
        badge_number: ReferenceVariable({
            question: 'Badge Number',
            order: 15,
            attributes: 'ref_auto_completer=AJAXTableCompleter,ref_ac_columns=serial,ref_ac_columns_search=true',
            referenceTable: 'x_aleen_snguardian_asset',
            referenceQualCondition: 'status=a67f0ed51bbc8210759455342a4bcbec^type=648f8ed51bbc8210759455342a4bcbcc^EQ',
        }),
        empty: CustomVariable({
            question: 'Empty',
            order: 20,
            widget: '7eab87ff2b711610d4dffd74ce91bf08',
        }),
        valid_from: DateTimeVariable({
            question: 'Valid From',
            order: 25,
            readOnly: true,
        }),
        valid_to: DateTimeVariable({
            question: 'Valid To',
            order: 30,
            readOnly: true,
        }),
        deactivate_exisiting_badge: YesNoVariable({
            question: 'Deactivate Exisiting Badge',
            order: 35,
            defaultValue: 'No',
        }),
        sub_type: SingleLineTextVariable({
            question: 'Sub Type',
            order: 100,
            hidden: true,
        }),
        nfc_system: SingleLineTextVariable({
            question: 'NFC system',
            order: 110,
            hidden: true,
        }),
        web_prov: SingleLineTextVariable({
            question: 'Web Prov',
            order: 120,
            hidden: true,
        }),
        pac_system: SingleLineTextVariable({
            question: 'PAC system',
            order: 130,
        }),
    },
})
