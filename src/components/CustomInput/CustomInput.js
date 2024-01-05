import { useField } from "formik";
import PropTypes from "prop-types";

import styles from "./CustomInput.module.scss";

export default function CustomInput({ type, ...restProps }) {
    const [field, meta] = useField(restProps.name);
    const { error, touched } = meta;

    return (
        <div className={styles.root}>
            <label htmlFor={restProps.id}>
                {restProps.lable || field.name}
            </label>
            <input type={type} {...field} {...restProps} />
            {touched && error && <span className={styles.error}>{error}</span>}
        </div>
    );
}

CustomInput.propTypes = {
    type: PropTypes.string,
};
CustomInput.defaultProps = {
    type: "text",
};
