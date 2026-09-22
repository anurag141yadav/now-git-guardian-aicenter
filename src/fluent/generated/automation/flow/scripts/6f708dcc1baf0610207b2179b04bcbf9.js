(function execute(inputs, outputs) {
    var eventsHelper =  new EventsDataHelper();
    eventsHelper.processAccessLastUsedDateTime();
    eventsHelper.processAssetLastUsedDateTime();
})(inputs, outputs);