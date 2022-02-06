module.exports = errorHandler;

function errorHandler(err, req, res, next) {
    
    // add error verification here

    // TODO
    // if (typeof (err) === 'string') {
    //     // custom application error
    //     return res.status(400).json({ message: err });
    // }

    if (err.name === 'BadRequestError') {
        // custom application error
        return res.status(400).json({ message: err.validationErrorMsg });
    }

    if (err.name === 'UnauthorizedError') {
        // jwt authentication error
        return res.status(401).json({ message: 'Invalid Token' });
    }

    if (err.name === 'ForbiddenError') {
        // jwt authentication error
        return res.status(403).json({ message: 'Forbidden' });
    }

    // default to 500 server error
    return res.status(500).json({ message: err.message });
}