const Header = () => {
    return (
        <div className="container-fluid bg-primary d-flex align-items-center mb-5 py-5" id="home" style={{minHeight: '100vh'}}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-5 px-5 pl-lg-0 pb-5 pb-lg-0">
              <img className="img-fluid w-100 rounded-circle shadow-sm" src="assets/img/profile.jpg" alt />
            </div>
            <div className="col-lg-7 text-center text-lg-left">
              <h2 className="display text-uppercase text-primary mb-2" style={{WebkitTextStroke: 'px #000000'}}>I'm</h2>
              <h1 className="display-2 text-uppercase text-primary mb-2" style={{WebkitTextStroke: '4px #000000'}}>Avril Agnes Kamu</h1>
              <h3 className="text-white font-weight-normal mb-2" style={{WebkitTextStroke: '3px #00000'}}> Student in Klabat University</h3>
            </div>
          </div>
        </div>
      </div>
    )
}

export default Header;