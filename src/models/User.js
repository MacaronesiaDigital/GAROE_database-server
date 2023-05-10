

const { Schema, model} = require('mongoose')

const userSchema = new Schema({
    session: {type: String, required: true},
    name: {type: String, required: false},
    lastName: {type: String, required: false},
    mail: {type: String, required: false},
    crops: {type: Array, required: false},
    muffins: {type: Object, required:false},
    policyAcceptance: {type: Boolean, required:true},
    fieldNotebook : {type: Object, required:false},
    
},{

    timestamps: true,
    versionKey: false

})


module.exports = model("User", userSchema)