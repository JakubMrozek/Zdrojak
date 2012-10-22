var Page = require('../models/Page');

/**
 * GET /pages
 */
exports.index = function(req, res, next){
    Page.find(function(err, docs) {
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
 * @todo
 */
exports.update = function(req, res, next){
    req.page.title = req.body.title;
    req.page.content = req.body.content;
    page.save(function(err, doc) {
        if (err) return next(err);
        res.json(doc);
    });
};

/**
 * DELETE /pages/:page
 * 
 * @todo
 */
exports.destroy = function(req, res, next){
    req.page.remove(function(err, doc) {
        if (err) return next(err);
        res.json(doc);
    });
};