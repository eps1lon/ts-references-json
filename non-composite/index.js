"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var data_json_1 = __importDefault(require("./data.json"));
console.log(data_json_1["default"][0].match(/feature/));
