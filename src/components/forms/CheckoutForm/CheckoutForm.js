import { Formik, Form } from "formik";
import { useDispatch, useSelector } from "react-redux";

import CustomInput from "../../CustomInput/CustomInput";
import Button from "../../Button/Button";

import validationSchema from "./validationSchema";
import { deleteBasket } from "../../../redux/slices/basketSlice";

import styles from "./CheckoutForm.module.scss";

export default function CheckoutForm() {
    const basketList = useSelector((state) => state.basket.basketList);
    const dispatch = useDispatch();

    const initialValues = {
        firstName: "",
        lastName: "",
        age: "",
        deliveryAddress: "",
        mobilePhone: "",
        email: "",
    };

    const onSubmit = (values, actions) => {
        console.log(basketList);
        console.log(values);
        dispatch(deleteBasket());
        actions.resetForm();
    };

    return (
        <div className={styles.root}>
            <h4>Оформлення замовлення</h4>
            <Formik
                initialValues={initialValues}
                onSubmit={onSubmit}
                validationSchema={validationSchema}
            >
                {(form) => {
                    return (
                        <Form>
                            <CustomInput
                                name="firstName"
                                id="firstName"
                                lable="Ім'я"
                            />
                            <CustomInput
                                name="lastName"
                                id="lastName"
                                lable="Прізвище"
                            />
                            <CustomInput
                                name="age"
                                id="age"
                                lable="Вік"
                                // type="number"
                            />
                            <CustomInput
                                name="deliveryAddress"
                                id="deliveryAddress"
                                lable="Адреса доставки"
                            />
                            <CustomInput
                                name="mobilePhone"
                                id="mobilePhone"
                                lable="Мобільний фелефон"
                            />
                            <CustomInput
                                name="email"
                                id="email"
                                lable="Електронна адреса"
                            />

                            <Button
                                type="submit"
                                backgroundColor={
                                    form.isValid ? "orange" : "grey"
                                }
                                text={"Checkout"}
                                isDisabled={!form.isValid}
                            />
                        </Form>
                    );
                }}
            </Formik>
        </div>
    );
}
