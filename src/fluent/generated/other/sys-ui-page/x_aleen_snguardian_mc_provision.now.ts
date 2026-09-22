import '@servicenow/sdk/global'
import { UiPage } from '@servicenow/sdk/core'
import htmlFile from '../../../../client/mc-provision/index.html'

UiPage({
    $id: Now.ID['62f727b2495e4730b1557b541c5a5f05'],
    endpoint: 'x_aleen_snguardian_mc_provision.do',
    description: '',
    category: '',
    direct: true,
    html: htmlFile,
    clientScript: '',
    processingScript: '',
})
