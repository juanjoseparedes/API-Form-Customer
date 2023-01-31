import { Request, Response } from 'express';
import { Customer } from '../entities/customer.entities';

// welcome
export const welcome = (req: Request, res: Response) => { 
    return res.status(200).send('Welcome to Growsoft API')
}

// add a new customer
export const addCustomer = async (req: Request, res: Response) => {
    console.log(req.body);
    try {
        const { 
            firstname,
            lastname,
            email,
            phone,
            company,
            jobtitle,
            contactabout,
            coments,
            currentcustomer 
        } = req.body;
        // set a new object with data from reques body
        const customer = new Customer();
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
        await customer.save();
        return res.status(200).json(customer);
    } catch (error) {
        if (error instanceof Error) {
            return res.status(500).json({ message: error.message })
        }
    }
}

// get all customers
export const getAllCustomer = async (req: Request, res: Response) => {
    try {
        const customers = await Customer.find();
        return res.status(200).json(customers);
    } catch (error) {
        if (error instanceof Error) {
            return res.status(500).json({ message: error.message })
        }
    }
}

// get customer by ID
export const getCustomerByID = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const customers = await Customer.findOneBy({ id });
        return res.status(200).json(customers);
    } catch (error) {
        if (error instanceof Error) {
            return res.status(500).json({ message: error.message })
        }
    }
}