"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUser = void 0;
;
var createUser = function (_a) {
    var name = _a.name, password = _a.password, email = _a.email, address = _a.address;
    var userObj = {
        name: name,
        password: password,
        email: email,
        address: address
    };
    return userObj;
};
exports.createUser = createUser;
