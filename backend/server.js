require("dotenv").config();
const express = require("express");
const productRoutes = require("./routes/productRoutes");
const connectDB = require("./config/db");
const Product = require("./models/Product") 
const User = require('./models/User')
//
connectDB();
const app = express();
app.use(express.json());
app.get("/", (req, res) => {
  res.json({ message: "API running..." });
});
app.use("/api/products", productRoutes);
//routes
app.post("/login",(req,res)=>{
  const {email,password} = req.body
  User.findOne({email:email},(err,user)=>{
    if(user){
      if(password === user.password ){
        res.send({message: "Login Successfull",user})
      }
      else{
        res.send({message:"Password not matched"})
      }

    }else{
      res.send({message:"User not registered"})
    }
  })
})
app.post("/register",(req,res)=>{ //FRONTEND SE DATA LY K YAHAN IS FUNCTION TK POHANCHEY GA OR USER KA SCHEMA USE KR K DB MA SUT DY GA DTAA
   //console.log(req.body)
   const {name,email,password} = req.body
   User.findOne({email:email},(err,user)=>{
     if(user){
       res.send({message:"User Already Exist"})
     } else{
      const user = new User({
        name: name,
        email: email,
        password: password
        
      })
      user.save(err=>{
        if(err){
          res.send(err)
        }else{
          res.send({ message:"Succesfull register, Please login now"})
        }
      })
     }
   })
   
})
app.post("/publish",(req,res)=>{ //FRONTEND SE DATA LY K YAHAN IS FUNCTION TK POHANCHEY GA OR USER KA SCHEMA USE KR K DB MA SUT DY GA DTAA
  console.log(req.body)  
  const {name,description,price,countInStock,imageUrl,file} = req.body

  Product.findOne({name:name},(err,product)=>{
    
    if(product){
      res.send({message:"product Already Exist"})
    } else{
     const product = new Product({
       name: name,
       description: description,
       price: price,
       countInStock: countInStock,
       imageUrl: "http://localhost/example/pictures/"+imageUrl.replace(/^.*\\/, ""),
       
       file: file.replace(/^.*\\/, "")
     })
     product.save(err=>{
       if(err){
         res.send(err)
       }else{
         res.send({ message:"Succesfull aded, Please shop now"})
       }
     })
    }
  })
})
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));