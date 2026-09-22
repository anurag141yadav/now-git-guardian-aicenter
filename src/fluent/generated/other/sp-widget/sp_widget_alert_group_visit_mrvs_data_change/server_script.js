(function() {
    /* populate the 'data' object */
    /* e.g., data.table = $sp.getValue('table'); */
    if (input && input.action === "checkWatchlistByData") {
        var mrvsObj = JSON.parse(input.mrvs);
        var query = '';
        for (var i = 0; i < mrvsObj.length; i++) {
            var row = mrvsObj[i];
            if (row.visit_visitor_email != null && row.visit_visitor_email != "") {
                query += (query === "" ? "" : "^OR") + "email=" + GlideStringUtil.escapeQueryTermSeparator(row.visit_visitor_email);
            }
        }
        var users = [];
        var grWatchlist = new GlideRecordSecure('x_aleen_snguardian_visitor_watch_list');
        grWatchlist.addEncodedQuery(query);
        grWatchlist.query();
        while (grWatchlist.next()) {
            users.push(grWatchlist.getValue('email'));
        }
        data.list = JSON.stringify(users);
    }
})();