// React
import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import { CSSTransition } from "react-transition-group";

// Style
import "./Modal.css";

export default function Modal(props) {
    // useEffect
    useEffect(() => {
        document.body.addEventListener("keydown", closeOnEscapeKeyDown);
        return function cleanup() {
            document.body.removeEventListener("keydown", closeOnEscapeKeyDown);
        };
    }, []);

    // Function
    const closeOnEscapeKeyDown = (e) => {
        if ((e.charCode || e.keyCode) === 27) {
            props.onClose();
        }
    };

    return ReactDOM.createPortal(
        <CSSTransition
            in={props.show}
            unmountOnExit
            timeout={{ enter: 0, exit: 300 }}
        >
            <div className="modal" onClick={props.onClose}>
                <div
                    className="modal-content"
                    onClick={(e) => e.stopPropagation()}
                >
                    <div className="modal-header">
                        <h4 className="modal-title">{props.title}</h4>
                        <div className="button-group">
                            <button onClick={props.onClose} className="button close">
                                X
                            </button>

                        </div>

                    </div>
                    <div className="modal-body">{props.children}</div>
                    <div className="modal-footer">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos, velit?
                    </div>
                </div>
            </div>
        </CSSTransition>,
        document.getElementById("root")
    );
}
