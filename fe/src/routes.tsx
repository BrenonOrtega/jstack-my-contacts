import { Routes, Route } from "react-router";
import Home from "./Pages/Home";
import NewContact from "./Pages/NewContact";
import EditContact from "./Pages/EditContact";

export default function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home />} /> 
            <Route path="new-contact" element={<NewContact />} /> 
            <Route path="edit/:id" element={<EditContact />} /> 
        </Routes>
    );
}