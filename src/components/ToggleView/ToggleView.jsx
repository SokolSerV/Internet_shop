import { useContext } from "react";

import ViewContext from "../../context/ViewContext";

import { ReactComponent as ToggleOffIcon } from "./icons/toggle-off.svg";
import { ReactComponent as ToggleOnIcon } from "./icons/toggle-on.svg";

export default function ToggleView() {
    const viewData = useContext(ViewContext);
    const { view, toggleView } = viewData;

    return (
        <div
            style={{
                display: "flex",
                justifyContent: "end",
                alignItems: "center",
                margin: "5px 50px",
            }}
        >
            <p style={{ margin: "0 10px 0 0 ", fontWeight: "700" }}>
                Показати у вигляді {view === "card" ? "таблиці" : "карток"}
            </p>
            <i
                onClick={toggleView}
                style={{ display: "flex", cursor: "pointer" }}
            >
                {view === "card" ? <ToggleOffIcon /> : <ToggleOnIcon />}
            </i>
        </div>
    );
}
