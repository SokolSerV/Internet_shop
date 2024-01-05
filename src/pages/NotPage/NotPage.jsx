import { Link } from "react-router-dom";

import "./NotPage.scss";

export default function NotPage() {
    return (
        <div className="not-page">
            <p className="not-page_title">
                Щось пішло не так. Сторінка не знайдена.
            </p>
            <p className="not-page_description">
                Поверніться на головну сторінку і спробуйте ще раз.
            </p>
            <p className="not-page_linkHome">
                <Link to="/">Головна сторінка</Link>
            </p>
        </div>
    );
}
