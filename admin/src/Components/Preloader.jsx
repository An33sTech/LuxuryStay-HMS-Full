function Preloader() {
    return (
        <div style={{ top: 0, left: 0, backgroundColor: "rgba(0, 0, 0, 0.5)", backdropFilter: "blur(10px)", boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)", zIndex: 9999 }} className="position-fixed w-100 h-100 d-flex align-items-center justify-content-center">
            <button className="btn btn-dark" type="button" disabled> <span className="spinner-grow spinner-grow-sm me-2" role="status" aria-hidden="true"></span>
                Loading...</button>
        </div>
    );
}

export default Preloader;