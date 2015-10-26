function foo () {
    var bar = 2;
    quux = 13;
    function zip () {
        var quux = 9;
        bar = true;
    }
    return zip;
}