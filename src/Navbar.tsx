const Navbar = () => {
    return (
        <nav className = "navbar">
            <a href = "/"><h1>MRHS Math Team</h1></a>
            <div className = "links"> 
                <a href = "/competition-schedule"> Competitions </a>
                <a href = "/hcml-teams"> HCML </a>
                <a href = "/resources"> Resources </a>
                <a href = "/mvms-math-team"> MVMS </a>
                <a href = "/faq"> FAQ </a>
                <a href = "/about"> About </a>
            </div>
        </nav>
    )
}

export default Navbar;