"use strict";

var _web = require("./web.server");

var _web2 = _interopRequireDefault(_web);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var webServer = new _web2.default();

webServer.start().then(function () {
    console.log("Awesome !! I Just Started A Server");
}).catch(function (err) {
    console.log(err);
    console.log("oops!! Something Went Wrong");
});