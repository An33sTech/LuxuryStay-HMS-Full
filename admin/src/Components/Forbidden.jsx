import { useNavigate } from "react-router-dom";

function Forbidden() {
    const navigate = useNavigate();
    const goBack = () => {
        navigate(-1);
    };

    return (
        <>
            <div className="pt-5">
                <div className="container pt-5">
                    <div className="row pt-5">
                        <div className="col-lg-12">
                            <div className="text-center error-pages">
                                <h1 className="error-title text-white mb-3">403</h1>
                                <h2 className="error-sub-title text-white">403 FORBIDDEN</h2>

                                <p className="error-message text-white text-uppercase">Access Denied: You don't have the required permissions!</p>

                                <div className="mt-4 d-flex align-items-center justify-content-center gap-3">
                                    <button onClick={goBack} className="btn btn-light rounded-5 px-4"><i className="bi bi-arrow-left me-2"></i>Go Back</button>
                                </div>

                                <div className="mt-4">
                                    <p className="text-light">Copyright © 2024 | All rights reserved.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
}
export default Forbidden;