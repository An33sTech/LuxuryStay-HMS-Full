import { Navigate } from "react-router-dom";

function ProtectedRoute({ children, allowedRoles = ['admin', 'manager', 'receptionist', 'housekeeping']}) {
    const token = localStorage.getItem("token");
    const role = localStorage.getItem("role");

    if (!token || !role) {
        return <Navigate to="/admin/login" />;
    }
    
    return children;
}

export default ProtectedRoute;
