import PropTypes from "prop-types";

import { ReactComponent as CrossIcon } from "./icons/cross.svg";

import "./Modal.scss";

export default function Modal({
    header,
    closeButton,
    closeModal,
    text,
    actions,
}) {
    return (
        <div
            className="modal-wrapper"
            onClick={(event) => {
                if (event.target.classList.contains("modal-wrapper")) {
                    closeModal();
                }
            }}
        >
            <div className="modal">
                <div className="modal-box">
                    {closeButton && (
                        <button
                            type="button"
                            className="modal-close"
                            onClick={() => closeModal()}
                        >
                            <CrossIcon />
                        </button>
                    )}
                    <div className="modal-header">
                        <p>{header}</p>
                    </div>
                    <div className="modal-content">
                        <p>{text}</p>
                    </div>
                    <div className="modal-footer">
                        <div className="button-wrapper">{actions}</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

Modal.propTypes = {
    header: PropTypes.string,
    closeButton: PropTypes.bool,
    closeModal: PropTypes.func,
    text: PropTypes.string,
    actions: PropTypes.node,
};

Modal.defaultProps = {
    header: "Текст заголовка модального вікна",
    closeButton: false,
    closeModal: () => {},
    text: "Основний текст модального вікна",
    actions: "Код у форматі JSX",
};
