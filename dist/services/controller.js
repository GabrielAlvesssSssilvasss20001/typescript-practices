"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.displayUserJSON = void 0;
var createUser_1 = require("./createUser");
var displayUserJSON = function (req, res) {
    var user = createUser_1.createUser({
        name: 'Gabriel',
        password: '0000',
        email: 'gbr@gmail.com'
    });
    console.log(user);
    res.json(typeof (user.address));
};
exports.displayUserJSON = displayUserJSON;
