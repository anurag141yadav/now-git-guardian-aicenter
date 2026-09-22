(function execute(inputs, outputs) {
var visitorHelper = new VisitorHelper();
var statusSysId = visitorHelper.getVisitStatusSysId('SCHEDULED');

var gdt = new GlideDateTime();
var currentDate = (gdt.toString().split(' '))[0];
var updatedCount = 0;
var updatedIds = [];
var grVisit = new GlideRecordSecure('x_aleen_snguardian_visitor_visit');
grVisit.addQuery('is_recurring', true);
grVisit.addNullQuery("parent");
grVisit.addQuery('recurring_end_date', '>=', currentDate);
grVisit.query();
while (grVisit.next()) {
    var type = grVisit.getValue('recurring_type');
    if (type == 'DAILY') {
        grVisit.setValue('status', statusSysId);
        grVisit.update();
        updatedCount++;
        updatedIds.push(grVisit.getUniqueValue());
    } else if (type == 'WEEKLY') {
        var value = grVisit.getValue('recurring_value');
        var valueArray = value.split(',').map(function(item) {
            return parseInt(item.trim(), 10);
        });
        var currentDay = gdt.getDayOfWeekLocalTime();
        if (valueArray.includes(currentDay)) {
            grVisit.setValue('status', statusSysId);
            grVisit.update();
            updatedCount++;
            updatedIds.push(grVisit.getUniqueValue());
        }
    }
}
outputs.updated_count = updatedCount;
outputs.updated_visit_ids = updatedIds.join(',');
})(inputs, outputs);