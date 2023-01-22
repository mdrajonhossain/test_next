var mongoose = require('mongoose');


const Schema = mongoose.Schema

const add_quizeSchema = new Schema({
    cata_id:{type: String},
    question:{type: String},
    question_options: [{type:String}],
    answer: {type: String},
    actives:{ type:Number, default: 0 },
    admin_user_id:{type: String},
    created_at : { type: Date, default: new Date().toJSON().slice(0, 10) },
    updated_at : { type: Date, default: new Date().toJSON().slice(0, 10) }
})



module.exports = mongoose.models.add_quize || mongoose.model('add_quize', add_quizeSchema);


