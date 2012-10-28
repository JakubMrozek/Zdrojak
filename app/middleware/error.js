module.exports = function() {
    return function(err, req, res, next){
        if (typeof(err) == 'number') {
            res.send(err);
        } else {
            next(err);
        } 
    }
};
