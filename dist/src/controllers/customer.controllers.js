"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCustomerByID = exports.getAllCustomer = exports.addCustomer = exports.welcome = void 0;
const customer_entities_1 = require("../entities/customer.entities");
const sendMail_1 = require("../sendMail");
// welcome
const welcome = (req, res) => {
    return res.status(200).send('Welcome to Growsoft API');
};
exports.welcome = welcome;
// add a new customer
const addCustomer = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(req.body);
    try {
        const { firstname, lastname, email, phone, company, jobtitle, contactabout, coments, currentcustomer } = req.body;
        // set a new object with data from reques body
        const customer = new customer_entities_1.Customer();
        customer.firstname = firstname;
        customer.lastname = lastname;
        customer.email = email;
        customer.phone = phone;
        customer.company = company;
        customer.jobtitle = jobtitle;
        customer.contactabout = contactabout;
        customer.coments = coments;
        customer.currentcustomer = currentcustomer;
        // method save
        yield customer.save();
        // send email
        (0, sendMail_1.sendMail)(firstname, email);
        (0, sendMail_1.sendMailToSell)({
            firstname,
            lastname,
            email,
            phone,
            company,
            jobtitle,
            contactabout,
            coments,
            currentcustomer
        });
        return res.status(200).redirect('https://growsoft.com.do');
    }
    catch (error) {
        if (error instanceof Error) {
            return res.status(500).json({ message: error.message });
        }
    }
});
exports.addCustomer = addCustomer;
// get all customers
const getAllCustomer = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const customers = yield customer_entities_1.Customer.find();
        return res.status(200).json(customers);
    }
    catch (error) {
        if (error instanceof Error) {
            return res.status(500).json({ message: error.message });
        }
    }
});
exports.getAllCustomer = getAllCustomer;
// get customer by ID
const getCustomerByID = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const customers = yield customer_entities_1.Customer.findOneBy({ id });
        return res.status(200).json(customers);
    }
    catch (error) {
        if (error instanceof Error) {
            return res.status(500).json({ message: error.message });
        }
    }
});
exports.getCustomerByID = getCustomerByID;
//# sourceMappingURL=customer.controllers.js.map