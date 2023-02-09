// ใช้งานmongoose
const mongoose = require('mongoose')

//เชื่อมmogodb
mongoose.set("strictQuery", false);
    const dbUrl = 'mongodb://127.0.0.1:27017/productDB2';
    mongoose.connect(dbUrl,{
        useNewUrlParser:true,
        useUnifiedTopology:true
    }).catch(err=>console.log(err))

//ออกแบบschema
let productSchema = mongoose.Schema({
    name:String,
    price:Number,
    image:String,
    description:String
})


//สร้างโมเดล
let Product = mongoose.model("products",productSchema)


//ส่งออกโมเดล
module.exports = Product

//ออกแบบฟังก์ชั่น
module.exports.saveProduct=function(model,data){
    model.save(data)
}