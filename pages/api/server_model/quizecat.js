var mongoose = require('mongoose');


const Schema = mongoose.Schema

const quizecatagorySchema = new Schema({
    caname: String,
    cat_img: String,
    public_allow: { type:Number, default: 0 }
})


module.exports = mongoose.models.quizecat || mongoose.model('quizecat', quizecatagorySchema);



