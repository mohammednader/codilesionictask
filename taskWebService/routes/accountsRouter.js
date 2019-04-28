let express=require("express"),
accountsRouter=express.Router(),

//require accounts Model
mongoose=require("mongoose");
require("../Models/accountModel");

let accountSchema = mongoose.model("account");


//list Accounts
accountsRouter.get("/list" ,(request,response)=>{
  accountSchema.find({},(error,result)=>{
    
     // response.render("listAccounts",{accounts:result});
       response.send(result);
    });
 });//list
 



//details for 1 account dependon it's id
 accountsRouter.get("/details/:id",(request,response)=>{
  accountSchema.findOne({a_id:request.params.id},(error,result)=>{
        if(!error)
            response.send(result)
        else
            response.send(error);
       
       

    });
})//details



//search dependon "account number"
accountsRouter.get('/search/:accountNumber', function(req, res, next) {
  var accountNumber = req.params.accountNumber;
  accountSchema.find({accountNumber: accountNumber}, function (err, result) {
      if(!err) {
        //  return res.render('search', {result: null});
        res.send(result);
        
      }
      else{
        res.send(err);
      }
      //res.render('search', {result: accounts});
  });
});



/////////////////////////////////// for testing Api //////////////////////////////////////
//  //get add
// accountsRouter.get("/add",(request,response)=>{
//   response.render("addAccount");
// })

// //post add
// accountsRouter.post("/add",(request,response)=>{
// console.log("request");
// console.log(request.body);

// let account=new accountSchema({
//   accountNumber: request.body.accountNumber,
//   totalService: request.body.totalService,
//   totalbill: request.body.totalbill,
//   ischecked: request.body.ischecked
// });
// account.save((err)=>{
//    console.log("inside save ")
//    if(!err)
//    {
//        console.log("from save ")
//        response.send("DONE")
      
//    }
   
// });

// });
//////////////////////////////////////////////////////////////////////////////////////////


  



module.exports=accountsRouter;