
const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
}, { timestamps: true });

module.exports = mongoose.model('User', UserSchema);


//model author

/*const authorSchema = new mongoose.Schema({
    name:{type: String,required: true},
    bio: String
});
const Author = mongoose.model('Author', authorSchema);*/
