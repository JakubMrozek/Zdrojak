var removeDiacritics = require(process.cwd() + '/lib/filters/removeDiacritics');

module.exports = function(str) {
    var url = str || '';
    
    url = url.trim();
    url = url.replace(/\s+/g, '-');
    url = removeDiacritics(url);
    url = url.toLowerCase();

    return url;
}
