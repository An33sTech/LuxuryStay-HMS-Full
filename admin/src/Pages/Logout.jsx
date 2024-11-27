import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function LogoutPage() {
    const navigate = useNavigate();

    useEffect(() => {
        if (localStorage.getItem("token")) {
            localStorage.removeItem("token");
        }
        navigate("/admin/login");
    }, [navigate]);

    return null;
}

export default LogoutPage;