const jwt = require('jsonwebtoken');

function verifyToken(req, res, next) {
    const header = req.headers['authorization'];

    if(typeof header !== 'undefined') {
        const bearer = header.split(' ');
        const token = bearer[1];

        jwt.verify(token, 'secret', (err) => {
            if(err) {
                return res.sendStatus(403);
            }

            next();
        });
    } else {
        res.sendStatus(403)
    }
}

module.exports = verifyToken;