import { object, string, number } from "yup";
import "yup-phone-lite";

const validationSchema = object({
    firstName: string().required("FirstName is required"),
    lastName: string().required("LastName is required"),
    age: number()
        .required("Age is required")
        .positive("Age should be positive")
        .integer("Age should be integer")
        .min(18, "Min age is 18")
        .max(100, "Max age is 100"),
    deliveryAddress: string().required("Delivery address is required"),
    mobilePhone: string()
        .phone("UA", "Please enter a valid phone number")
        .required("A phone number is required"),
    email: string().required("Email is required").email("Invalid email format"),
});

export default validationSchema;
