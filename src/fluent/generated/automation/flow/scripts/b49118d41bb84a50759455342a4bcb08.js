(function execute(inputs, outputs) {
    var grRecord = new GlideRecordSecure(inputs.TableName);
    if(grRecord.get(inputs.RecordID)){
      grRecord.datasource_table = inputs.DocumentTableName;
      grRecord.datasource  =  inputs.DocumentID;
      grRecord.update();

    }
})(inputs, outputs);