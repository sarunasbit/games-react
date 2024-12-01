import { Link } from "react-router-dom"

const Nav =()=>{
    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="#">Navbar</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                <li className="nav-item active">
                    <Link to={`/`}>
                        <a className="nav-link" href="#">Home</a>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to={`/search/`}>
                        <a className="nav-link" href="#">Results</a>
                    </Link>
                </li>
                </ul>
            </div>
        </nav>
    )
}

export default Nav