const express = require("express");
const signupRouter = express.Router();
function router(navbar){

    signupRouter.get("/",function(req,res){
        res.render("signup",
        {
            navbar,
            title:"Library",
            link:"/login"
        });
    });
    

    return signupRouter;

}


module.exports = router;