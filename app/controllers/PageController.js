var Page = require('../models/Page');

/**
 * GET /pages
 */
exports.index = function(req, res, next){
    var fields = {};
    
    //povolit jen specifikovana pole
    if (req.query.fields) {
        var queryFields = req.query.fields.split(',');
        queryFields.forEach(function(field) {
            if (field == 'title' || field == 'url' || field == 'content') {
                fields[field] = 1;    
            } else {
                return next(400);
            }
        })
    }
    
    Page.find({}, fields, function(err, docs) {
        if (err) return next(err);
        res.json(docs);
    });
};

/**
 * GET /pages/:page
 */
exports.show = function(req, res, next){
    res.send(req.page);
};

/**
 * POST /pages
 * 
 * @todo
 */
exports.create = function(req, res, next){
    req.page.title = req.body.title || '';
    req.page.content = req.body.content || '';
    
    if (!req.page.title || !req.page.content) {
        return next(400);
    }
    
    var page = new Page();
    page.title = req.body.title;
    page.url = req.body.title;
    page.content = req.body.content;
    page.save(function(err, doc) {
        if (err) return next(err);
        res.json(doc);
    });
};

/**
 * PUT /pages/:page
 * 
 */
exports.update = function(req, res, next){
    req.page.title = req.body.title || '';
    req.page.content = req.body.content || '';
    
    if (!req.page.title || !req.page.content) {
        return next(400);
    }
    
    req.page.save(function(err, doc) {
        if (err) return next(err);
        res.json(doc);
    });
};

/**
 * DELETE /pages/:page
 * 
 */
exports.destroy = function(req, res, next){
    req.page.remove(function(err, doc) {
        if (err) return next(err);
        res.json(doc);
    });
};