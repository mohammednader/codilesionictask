var mongoose=require("mongoose");
var AutoIncrement = require('mongoose-sequence')(mongoose);

var accountSchema=new mongoose.Schema({
  
   a_id:Number,
   accountNumber:Number,
   totalService:Number,
   totalbill:Number,
   ischecked:Boolean

});
accountSchema.plugin(AutoIncrement, {inc_field: 'a_id'});
mongoose.model("account",accountSchema);