import user from '../model/usermodel.js';

//create or post
export const create = async(req,res)=>{
    try{
        let userdata = new user(req.body);
        const {email} = userdata;

        const userExist = await user.findOne({email});
        if(userExist)
        {
            return res.status(400).json({message:"User already exist"})
        }
        const saveduser=await userdata.save();
        res.status(200).json({saveduser})
    }
    catch(err){
        res.status(500).json({err:"Internal server error"})
    }
}

//fetch or get
export const fetch=async(req, res)=>{
    try{
        const users = await user.find();
        if(users.length===0){
            return res.status(404).json({message:"No user exists"})
        }
        res.status(200).json({users});
    }
    catch(err){
        res.status(500).json({err:"Internal server error"})
    }
}

//update
export const update=async(req, res)=>{
    try{
        const id = req.params.id;
        const userExist = await user.findOne({_id:id});
        if(!userExist){
            return res.status(404).json({message:"User not found"});
        }
        const updateUser = await user.findByIdAndUpdate(id,req.body,{new:true});
        res.status(200).json({updateUser});
    }
    catch(err){
        res.status(500).json({err:"Internal server error"})
    }
}

//delete
export const deletes=async(req, res)=>{
    try{
        const id = req.params.id;
        const userExist = await user.findOne({_id:id});
        if(!userExist){
            return res.status(404).json({message:"User not found"});
        }
        const deleteUser = await user.findByIdAndDelete(id);
        res.status(200).json({deleteUser});
    }
    catch(err){
        res.status(500).json({err:"Internal server error"})
    }
}

//get or fetch with id value
export const getdetails=async(req, res)=>{
    try{
        const id=req.params.id;
        const users = await user.findById(id);
        if(users.length===0){
            return res.status(404).json({message:"No user exists"})
        }
        res.status(200).json({users});
    }
    catch(err){
        res.status(500).json({err:"Internal server error"})
    }
}

// export const fetch=async(req, res)=>{
//     try{
//         res.send("hello world");
//     }
//     catch(err){
//         res.status(500).json({err:"Internal server error"})
//     }
// }