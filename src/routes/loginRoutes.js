const express = require("express");
const loginRouter = express.Router();
function router(navbar){
    

    loginRouter.get("/",function(req,res){
        res.render("login",
        {
            navbar,
            title:"Library",
            link:"/main"
            
        });
    });

    
    return loginRouter;

    
}


module.exports = router;