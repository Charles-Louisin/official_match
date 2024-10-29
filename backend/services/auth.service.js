
const User = require('../models/userModels');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


const hashPassword = async (password) => {
    try {
        const salt = await bcrypt.genSalt(10);
        return await bcrypt.hash(password, salt);
    } catch (error) {
        throw new Error('Invalide Password: ' + error.message);
    }
};

const hashCompare = async (value, hash) => {
    try {
        return await bcrypt.compare(value, hash);
    } catch (error) {
        return false;
    }
};

const tokenVerify = (token) => {
    try {
        return jwt.verify(token, 'secret key');
    } catch (error) {
        return false;
    }
}

const verifyIfIsUnique = async (field, value) => {

    //* Check if the value already exists in the database ( Facile )
    // let where = {};
    // if (field === 'email') {
    //     where = { email: value };
    // } else if (field === 'username') {
    //     where = { username: value };
    // }  
    // const user = await User.findOne( where);



    //* Check if the value already exists in the database ( Complexe )
    return await User.findOne({ [field]: value });
};


const register = async (data) => {
    const password = await hashPassword(data.password);
    data.password = password;

    const user = new User(data);
    await user.save();
    return {
        error: false,
        message: 'User registered successfully',
        user
    }
};

const login = async (user, password) => {
    const compare = await hashCompare(password, user.password);
    if (!compare) {
        return {
            error: true,
            message: 'Invalid email or password'
        };
    }

    const token = jwt.sign({ id: user._id }, 'secret key', { expiresIn: '1h' });
    return {
        error: false,
        message: 'Logged in successfully',
        token: token
    };
};


module.exports = { verifyIfIsUnique, register, login, tokenVerify };