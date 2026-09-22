var DecisionHelper = Class.create();
DecisionHelper.prototype = {
    initialize: function() {
        this.logger = new AlertGuardianLogger(" DecisionHelper:: ");
    },
    evaluate(code, inputs) {
        //takes code and inputs object as input for decision table
        try {
            var grRuleMaster = new GlideRecordSecure("x_aleen_snguardian_rule_master_config");
            grRuleMaster.addQuery("code", code);
            grRuleMaster.setLimit(1);
            grRuleMaster.query();
            if (grRuleMaster.next()) {
                var dt = new sn_dt.DecisionTableAPI();
                var response = dt.getDecision(grRuleMaster.getValue("rule"), inputs);
                var elements = response.result_elements;
                var result = {};
                for (var key in elements) {
                    if (elements[key]) {
                        result[key] = elements[key].toString();
                    }
                }
                return result;
            } else {
                this.logger.debug("evaluate: No Decision table found for the code :: " + code);
            }
        } catch (e) {
			this.logger.error("evaluate Exception :: " + e + " \nStack\n " + e.stack);
        }

    },
    type: 'DecisionHelper'
};