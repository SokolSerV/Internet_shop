import { Routes, Route } from "react-router-dom";

import PageHome from "../pages/PageHome";
import PageFavourite from "../pages/PageFavourite";
import PageBasket from "../pages/PageBasket";
import NotPage from "../pages/NotPage";

export default function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<PageHome />} />
            <Route path="favourite" element={<PageFavourite />} />
            <Route path="basket" element={<PageBasket />} />
            <Route path="*" element={<NotPage />} />
        </Routes>
    );
}
