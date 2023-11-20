const jwt = require('jsonwebtoken');

const Authenticate = async(req, res, next) => {
    try {
        const token = req.headers.authorization;
        if (!token) {
            return res.status(401).json({ error: 'Authorization token is missing' });
        }
        const decoded = jwt.verify(token, process.env.SECRET_KEY);
        req.user = decoded._id;
        next();
    } catch (error) {
        console.error(error);
        return res.status(401).json({ error: 'Invalid token' });
    }

}

module.exports = Authenticate;