import { Link } from "react-router-dom";

function Navbar(){
    return(
        <>
            <nav className="navbar navbar-expand-lg shadow p-3">
                <div className="container-fluid">
                    <button className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
                            <ul className="navbar-nav"> 
                                <li className="nav-item ms-2 me-2"><Link to="/" className="nav-link">Home</Link></li>
                                <li className="nav-item ms-2 me-2"><Link to="/about" className="nav-link">About</Link></li>
                                <li className="nav-item ms-2 me-2"><Link to="/contact" className="nav-link">Contact</Link></li>
                            </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Navbar;