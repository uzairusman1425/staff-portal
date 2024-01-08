const { Schema, model, default: mongoose } = require("mongoose");

const SignupSchema = new Schema({
    fullname: {
        type: String,
        required: [true, 'Name is required!'],
    },
    email: {
        type: String,
        required: [true, 'Email is required'],
        match: [/^\S+@\S+\.\S+$/, 'Please enter a valid email address.'],
    },
    password: {
        type: String,
        required: [true, 'Password is required!'],
    },
    phone: {
        type: String,
        required: [true, 'Phone number is required!'],
    }
});

const User = mongoose.models.User || model('User', SignupSchema);

export default User
