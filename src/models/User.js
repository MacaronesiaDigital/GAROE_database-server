

const { Schema, model} = require('mongoose')

const userSchema = new Schema({
    session: {type: String, required: true},
    name: {type: String, required: false},
    lastName: {type: String, required: false},
    mail: {type: String, required: false},
    location:{type: String, required: false},
    lat: {type: Number, required: false},
    lon: {type: Number, required: false},
    crops: {type: [], required: true},
    
},{

    timestamps: true,
    versionKey: false

})


module.exports = model("User", userSchema)