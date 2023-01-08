
const userCtrl = {}

const User = require('../models/User');

userCtrl.getUsers = async (req, res) => {
    const users = await User.find()
    res.json (users);

}
userCtrl.createUser = async (req, res) => {
    
    const newUser = new User(req.body)
    console.log(req.body)
    await newUser.save()
    res.send({message: "User Created"})
    
    console.log("USUARIO CREADOoo")
}
userCtrl.getUser = async (req, res) => {  
    console.log (req.params);
    const user = await User.findById(req.params.id)
    res.send (user);
}

userCtrl.editUser = async (req, res) => {
    const user = await User.findByIdAndUpdate(req.params.id, req.body);
}
userCtrl.deleteUser = async (req, res) => {
    const user = await User.findByIdAndDelete(req.params.id);
    console.log(req)
    console.log("Deleted")
}
userCtrl.filtraUser = async (req, res)=>{
    const filters = req.body;
    const users = await User.find()
    console.log(filters)

    const filteredUsers = users.filter(user => {
        let isValid = true;
        for (key in filters) {
            

            //Si la KEY de filters es un array y es mayor que 0 entramos al IF
            if (Array.isArray(filters[key]) && filters[key].length>0){
                isValid = isValid && compruebaArray(filters[key], user[key]);
                console.log(isValid);

            }else{
                isValid = isValid && user[key] == filters[key];
            }
        }
        return isValid;
    });
    res.json(filteredUsers);
}
function compruebaArray(a1, a2){
    var i = a1.length;
    while (i--) {
        if (a1[i] !== a2[i]) return false;
    }
    return true
}


module.exports = userCtrl;