module.exports = function() {
    return function(err, req, res, next){
        if (typeof(err) === 'number') {
            return res.send(err);
        } 
        
        if (err.name && err.name == 'ValidationError') {
            return res.send(400);
        }
        
        next(err);
    }
};
