const mod=require('./Usermod')

const adddata=async(req,res)=>{
    const {Busname,
        BusNumber,
        ToArea}=req.body;
       
        let exbus;
        try {
            exbus=await mod.findOne({BusNumber:BusNumber})
        } catch (error) {

            console.log(error)
        }
         
        if(exbus){
          return  res.json({message:"bus number is already exist"})
        }

        

        let user;
        try {
          user=new mod({Busname,BusNumber,ToArea})  
        }
        
            
        catch (error) {
            console.log(error)
        }
        user=await user.save();
        console.log(user)
        res.json({message:"send"})
     
    }
  
        const getStatus=async(req,res)=>{
            
            await mod.find().then(status1=>res.json(status1)).catch(err=>console.log(err))
        }

        const checkbus=async(req,res)=>{
                

        }

    

    exports.adddata=adddata
    exports.getStatus=getStatus