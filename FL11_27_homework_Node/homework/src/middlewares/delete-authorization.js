function logIn () {
        return  (req, res, next) => {
            if (req.method === 'DELETE') {
    
                if (req.get('Log in')) {
                    if (req.get('Log in') === 'X-Password qwerty') {
                        next();
                    } else {
                        res.status(401).send('Unauthorized');
                    }
                } else {
                    res.status(401).send('Unauthorized');
                }
            } else {
                next();
            }
        }
    }

    module.exports.logIn = logIn;