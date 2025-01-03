const express=require('express');
let router=express.Router(); // router is a variable

router.get('/',(req,res)=>{
    res.send("user information");
})
router.get("/newuser",(req,res)=>{
    res.send("new user added");
})
router.get("/DELETEUSER",(req,res)=>{  // If URL is given in caps then automatically it typecast it 
    res.send("delete new user");
})    
router.post("/createuser",(req,res)=>{
    res.send("create newuser added");
})

router
    .route('/:id')
    .get((req,res)=>{
        console.log(req.usery);
        res.send("retrive id value"+req.params.id);
    })
    .get((req,res)=>{
        res.send("retrive id value is "+req.params.id); 
    })
    .put((req,res)=>{
        res.send("update id value is "+req.params.id);  // create common method because(get,put,post,delete) methods are different 
    })                                              //but there is a common id in all so create one function.
    .delete((req,res)=>{
        res.send("delete id value is "+req.params.id); 
    })

const users=[{name:"raja"},{name:"rani"},{name:"sepoys"}];
router.param('id',(req,res,next,id)=>{
    console.log(id);
    req.usery=users[id]
    next();
})
// router.get('/:id',(req,res)=>{
//     res.send("retrive id value is "+req.params.id); 
// })
// router.put('/:id',(req,res)=>{
//     res.send("update id value is "+req.params.id); 
// })
// router.delete('/:id',(req,res)=>{
//     res.send("delete id value is "+req.params.id); 
// })
// router.get('/:id',(req,res)=>{ //url is filled with id value ex:http://localhost:3000/user/22CDR070
//      res.send("Id value is "+req.params.id); 
// })
module.exports = router;  // export the variable router because all the values are stored in the router