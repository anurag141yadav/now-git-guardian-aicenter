(function execute(inputs, outputs) {
// Issue type - QR, MC ; today - time when job is triggered
//CASE 1: valid to< today (expired badge)
var today = new GlideDateTime();
var metadataHelper = new MetadataGlideRecordHelper();
var deactivateAction = metadataHelper.getRecordSysIdByCode('x_aleen_snguardian_request_entity_action', 'DEACTIVATE');
var grBadge = new GlideRecordSecure('x_aleen_snguardian_identity_asset');
grBadge.addQuery('status', metadataHelper.getRecordSysIdByCode('x_aleen_snguardian_status_code', 'ACTIVE')); // ACTIVE 
grBadge.addQuery('valid_to', '<=', today);
grBadge.addQuery('issue_type', 'IN', 'QR,MC');
grBadge.query();
grBadge.setValue('provisioning_action', deactivateAction);
grBadge.updateMultiple();

//CASE 2: valid to > today , visit - check out, visit end date< today
gs.info('Starting badge deactivation process.');
var singleTypeSysId = metadataHelper.getRecordSysIdByCode('x_aleen_snguardian_visitor_visit_type', 'SINGLE');
var visitStatus = metadataHelper.getRecordSysIdByCode('x_aleen_snguardian_visitor_mt_visit_status','CHECKED-OUT');

var checkoutVisitors = [];
var grVisit = new GlideRecord('x_aleen_snguardian_visitor_visit');
grVisit.addQuery('status', visitStatus);
//multi day visit - checkout at end of day (do not deactivate) - so deactivating after visit end date
var gq = grVisit.addQuery('end_date', '<=', today);
gq.addOrCondition('recurring_end_date','<', today.getDate());
grVisit.query();
while (grVisit.next()) {
    if (grVisit.getValue('type') == singleTypeSysId) {
        checkoutVisitors.push(grVisit.getValue('visitor').toString());
    } else {
        var visitorsField = grVisit.getValue('visitors').toString();
        if (visitorsField) {
            var groupVisitors = visitorsField.split(',');
            for (var i = 0; i < groupVisitors.length; i++) {
                var id = groupVisitors[i].trim();
                if (id) checkoutVisitors.push(id);
            }
        }
    }
}
if (checkoutVisitors.length === 0) {
    gs.info('[Deactivate Badges Job] No checkout visitors found.');
}
 
var grAsset = new GlideRecord('x_aleen_snguardian_identity_asset');
grAsset.addQuery('issue_type', 'IN', 'QR,MC');
grAsset.addQuery('status', metadataHelper.getRecordSysIdByCode('x_aleen_snguardian_status_code', 'ACTIVE'));
grAsset.addQuery('identity', 'IN', checkoutVisitors.join(','));
grAsset.query();
grAsset.setValue('provisioning_action',deactivateAction);
grAsset.updateMultiple();

})(inputs, outputs);