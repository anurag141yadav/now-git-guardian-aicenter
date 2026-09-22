(function executeRule(current, previous /*null when async*/ ) {
    var grVisitDelete = new GlideRecordSecure('x_aleen_snguardian_visitor_visit');
    grVisitDelete.addNotNullQuery('parent');
    grVisitDelete.addQuery('parent', current.getUniqueValue());
    grVisitDelete.query();
    grVisitDelete.deleteMultiple();


})(current, previous);