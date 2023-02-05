import { Router } from "express";
import { welcome, getAllCustomer, getCustomerByID, addCustomer } from "../controllers/customer.controllers";

const router = Router();

router.get('/', welcome)
router.post('/api/newcustomer', addCustomer)
router.get('/api/customers', getAllCustomer)
router.get('/api/customer/:id', getCustomerByID)

export default router;
