//ส่วนข้อมูลติดต่อ
const mongoose = require('mongoose')

//เชื่อม
mongoose.set("strictQuery", false);
const dbUrl = 'mongodb://127.0.0.1:27017/productDB2';
    mongoose.connect(dbUrl,{
        useNewUrlParser:true,
        useUnifiedTopology:true
    }).catch(err=>console.log(err))


    let inforSchema = mongoose.Schema({
        name:String,
        phone:Number,
        email:String,
        description:String
    })
////
    let Infor = mongoose.model("infor",inforSchema)

    module.exports = Infor
///

module.exports.saveinfor=function(model,data){
    model.save(data)
}