
/**
 * Vytvori z absolutni URL plnou URL vc. hostitele.
 * 
 * @param {String} path
 * @param {ServerRequest} req
 * @return string
 */
exports.fullUrl = function(path, req) {
  return req.protocol + '://' + req.host + path;
};