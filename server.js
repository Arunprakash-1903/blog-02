const express=require("express");
const app=express();
const PORT =process.env.PORT || 3000

app.use(express.static('public'));
app.get("/",(req,res)=>{
res.sendFile(__dirname+ "/try.html")
})


app.listen(PORT,()=>{
    console.log("server runnig on port 3000");
})