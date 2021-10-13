const jwt = require('jsonwebtoken');

const checkJWT = async function validateToken (req, res, next) {

    const token =  req.cookies
    
    jwt.verify(token.jwt, 'net secret', function(err, decoded) {
        if (err) {

            res.status(401).send(err)
        } else {
            next()
        }
    })
};

module.exports = {checkJWT};

    