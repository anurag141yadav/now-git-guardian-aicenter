(function execute(inputs, outputs) {
    var logger = new AlertGuardianLogger(" Alert Decision Evaluation Action:: ");
    try {
        var inputObj = JSON.parse(inputs.decision_input);
        var code = inputs.decision_code;
        var decisionEval = new DecisionHelper();
        var result = decisionEval.evaluate(code, inputObj);
        outputs.output = result;
    } catch (e) {
        logger.error("Decision Eval Exception :: " + e + " \nStack\n " + e.stack);
    }

})(inputs, outputs);