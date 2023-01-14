"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const customer_controllers_1 = require("../controllers/customer.controllers");
const router = (0, express_1.Router)();
router.post('/api/newcustomer', customer_controllers_1.addCustomer);
router.get('/api/customers', customer_controllers_1.getAllCustomer);
router.get('/api/customer/:id', customer_controllers_1.getCustomerByID);
exports.default = router;
//# sourceMappingURL=cliente.routers.js.map