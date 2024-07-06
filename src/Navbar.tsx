const Navbar = () => {
    return (
        <nav className = "navbar">
            <h1>MRHS Math Team</h1>
            <div className = "links"> 
                <a href = "/"> Home </a>
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