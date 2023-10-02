"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// import * as D from 'js-date-fairy';
const js_date_fairy_1 = __importDefault(require("js-date-fairy"));
const stringamabob = __importStar(require("stringamabob"));
const functions_1 = require("./functions");
const data_json_1 = __importDefault(require("./data.json"));
// Challenge 1
data_json_1.default.slice(0, 10).forEach((person) => {
    let fullName = stringamabob.capitalizeWords(`${person.first_name} ${person.last_name}`);
    console.log(fullName);
});
// Challenge 2
data_json_1.default.slice(0, 10).forEach((person) => {
    let dateObj = new js_date_fairy_1.default(person.purchased);
    let purchaseDate = dateObj.format('M d, Y');
    console.log('Purchased: ' + purchaseDate);
});
// Challenge 3
data_json_1.default.slice(0, 10).forEach((person) => {
    let dateObj = new js_date_fairy_1.default(person.lastpayment);
    let lastPayment = dateObj.when();
    console.log('Last Payment: ' + lastPayment);
});
// Challenge 4
data_json_1.default.slice(0, 10).forEach((person) => {
    let phoneNumber = (0, functions_1.formatPhoneNumber)(person.phone);
    console.log(phoneNumber);
});
