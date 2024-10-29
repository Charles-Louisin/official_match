
const authService = require('../services/auth.service')

const verifyLoginBody = async (req, res, next) => {
    const body = req.body;
    
    if (!body.email || !body.password) {
        return res.status(400).json({
            error: true,
            message: 'Body must contain email & password'
        });
    }

    const user = await authService.verifyIfIsUnique('email', body.email);
    if (!user) {
        return res.status(401).json({
            error: true,
            message: 'Invalid email or password'
        });
    }

    req.user = user;
    next();
};

const verifyRegisterBody = async (req, res, next) => {
    const body = req.body;

    if ( !body.email || !body.username ||
        !body.password || !body.confirm_password) {
        return res.status(400).json({
            error: true,
            message: 'Body must contain username, email, password & confirm_password'
        });
    }

    if ( body.password !== body.confirm_password ) {
        return res.status(400).json({
            error: true,
            message: 'Passwords does not match'
        });
    }

    const isUniqueUsername = await authService.verifyIfIsUnique('username', body.username)
    if (isUniqueUsername) {
        return res.status(400).json({
            error: true,
            message: 'Username already use'
        });
    }
    const isUniqueEmail = await authService.verifyIfIsUnique('email', body.email)
    if (isUniqueEmail) {
        return res.status(400).json({
            error: true,
            message: 'Email already use'
        });
    }


    next();
};

const verifyIfUserIsLogged = async (req, res, next) => {
    const auth = req.header('Authorization');
    if (!auth) {
        return res.status(401).json({
            error: true,
            message: 'Access denied. No token provided'
        });
    }

    const verified = authService.tokenVerify(auth);
    if (!verified) {
        return res.status(401).json({
            error: true,
            message: 'Access denied. Invalid token'
        })
    }

    const user = await authService.verifyIfIsUnique('_id', verified.id);
    if (!user) {
        return res.status(401).json({
            error: true,
            message: 'Access denied. User not found'
        });
    }

    req.auth = user;
    next();
};

module.exports = { verifyLoginBody, verifyRegisterBody, verifyIfUserIsLogged };