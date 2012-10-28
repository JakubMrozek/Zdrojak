module.exports = function(str) {
    var url = str || '';
    url = url.replace(/ /g, '-');
    //todo
    return url;
}