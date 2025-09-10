function logger(req, res, next) {
    console.log('before...');
    next();
    console.log('after...');
}

module.exports = logger;