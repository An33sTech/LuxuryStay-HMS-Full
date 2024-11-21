import { useEffect, useState } from "react";
import Header from "../Components/Header";
import Sidebar from "../Components/Sidebar";

function IndexPage(){
    const [user, setUser] = useState({});
    useEffect(() => {
        const fetchUserInfo = async () => {
            try {
                const token = localStorage.getItem("token");
                if (!token) {
                    console.error("Token not found");
                    return;
                }
                const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/users/profile/me`, {
                    method: "GET",
                    headers: { token: token },
                });


                if (response.ok) {
                    const data = await response.json();
                    setUser(data);
                    console.log(data);
                } else {
                    console.error("Failed to fetch user info");
                }
            } catch (error) {
                console.error("Error fetching user info:", error);
            }
        };

        fetchUserInfo();
    }, []);
    return(
        <>
            <Header name={user.profile.name}/>
            <Sidebar/>
        </>
    );
}

export default IndexPage;