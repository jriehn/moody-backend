/*global, module */
/*jshint globalstrict:true*/
'use strict';

module.exports = (function () {

    function getString(request, response) {
        response.setHeader('Content-Type', 'application/json');
        response.end(JSON.stringify({hello: 'world'}, null, 3));
    }

    function respondWithJson(response, data) {

        response.end(JSON.stringify(data, null, 3));
    }

    function respondWithJsonAndStatusCode(response, data, code) {
        response.statusCode = code;
        respondWithJson(response, data);
    }


    return {
        getString: getString,
    };
})();
