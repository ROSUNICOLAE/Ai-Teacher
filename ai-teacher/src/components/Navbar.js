import React from 'react';


function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg bg-tertiary" style={{ backgroundColor: "mistyrose" }}>
            <div className="container-fluid">
                <a className="navbar-brand" href="/"><i className="fas fa-home"></i>AIteacher</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="/MathAi">Math</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="/PhysicsAi">Physics</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="/InfoAi">IT</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="/HistoryAi">History</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/about">About us</a>
                        </li>
                    </ul>
                    <form className="d-flex" role="login">
                        <button className="btn btn-light signUp" type="submit" href="/signup">Sign Up</button>
                        <button className="btn btn-light" type="submit">Sign In</button>
                    </form>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
