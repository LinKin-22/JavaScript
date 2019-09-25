/* Hash Table */

var hash = (string, max) => {
    var hash = 0;
    for (let i = 0; i < string.length; i++) {
        hash += string.charCodeAt(i);
    }
    return hash%max;
}