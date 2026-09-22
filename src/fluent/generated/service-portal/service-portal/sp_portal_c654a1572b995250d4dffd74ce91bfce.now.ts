import { ServicePortal } from '@servicenow/sdk/core'

ServicePortal({
    $id: Now.ID['c654a1572b995250d4dffd74ce91bfce'],
    title: 'Visitor Portal',
    urlSuffix: 'visitor',
    icon: Now.attach('./sp_portal_c654a1572b995250d4dffd74ce91bfce_icon.png'),
    logo: Now.attach('./sp_portal_c654a1572b995250d4dffd74ce91bfce_logo.png'),
    theme: '44d029d72b595250d4dffd74ce91bfd7',
    mainMenu: '2d0361132b995250d4dffd74ce91bf6a',
    homePage: '87bdae5133bd9a10bf1221382e5c7b39',
    searchResultsConfiguration: '80eb579d53671010968addeeff7b1215',
    searchApplication: '00731b9d5b231010d9a5ce1a8581c7dd',
    loginPage: '6995a144cb11120000f8d856634c9c25',
    notFoundPage: '3c2c9063cb11020000f8d856634c9c1f',
    defaultPortal: true,
})
