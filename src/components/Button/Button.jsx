import PropTypes from "prop-types";
import cn from "classnames";

import "./Button.scss";

export default function Button({
    type,
    backgroundColor,
    text,
    onClick,
    isDisabled,
}) {
    return (
        <button
            type={type}
            className={cn("button", { cursorDefault: isDisabled })}
            style={{ backgroundColor }}
            onClick={onClick}
            disabled={isDisabled}
        >
            {text}
        </button>
    );
}

Button.propTypes = {
    type: PropTypes.string,
    backgroundColor: PropTypes.string,
    text: PropTypes.string,
    onClick: PropTypes.func,
    isDisabled: PropTypes.bool,
};

Button.defaultProps = {
    type: "button",
    backgroundColor: "grey",
    text: "Кнопка",
    onClick: () => {},
    isDisabled: false,
};
