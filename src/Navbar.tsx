const Navbar = () => {
    return (
        <nav className = "navbar">
            <h1>MRHS Math Team</h1>
            <div className = "links"> 
                <a href = "/"> Home </a>
                <a href = "/competition-schedule"> Competition Schedule </a>
                <a href = "/hcml-teams"> HCML Teams </a>
                <a href = "/resources"> Resources </a>
                <a href = "/mvms-math-team"> MVMS Math Team </a>
                <a href = "/contact"> Contact </a>
                <a href = "/about"> About </a>
            </div>
        </nav>
    )
}

export default Navbar;