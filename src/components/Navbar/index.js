const Navbar = () => {
    return (
        <nav className="navbar fixed-top shadow-sm navbar-expand-lg bg-light navbar-light py-3 py-lg-0 px-lg-5">
        <a href="index.html" className="navbar-brand ml-lg-3">
          <h1 className="m-0 display-5"><span className="text-primary">A</span>K</h1>
        </a>   
        <div className="collapse navbar-collapse px-lg-3" id="navbarCollapse">
          <div className="navbar-nav m-auto py-0">
            <a href="#home" className="nav-item nav-link active">Home</a>
            <a href="#about" className="nav-item nav-link active">About</a>
            <a href="#qualification" className="nav-item nav-link active">Quality & Skill</a>
            <a href="#portfolio" className="nav-item nav-link active">Portfolio</a>    
          </div>
        </div>
      </nav>
    )
}

export default Navbar; 