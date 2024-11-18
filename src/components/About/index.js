const About = () => {
    return (
        <div className="container-fluid py-5" id="about">
        <div className="container">
          <div className="position-relative d-flex align-items-center justify-content-center">
            <h1 className="display-1 text-uppercase text-white" style={{WebkitTextStroke: '1px #dee2e6'}}>About</h1>
            <h1 className="position-absolute text-uppercase text-primary">About Me</h1>
          </div>
          <div className="row align-items-center">
            <div className="col-lg-5 pb-4 pb-lg-0">
              <img className="img-fluid rounded w-100" src="assets/img/about.jpg" alt />
            </div>
            <div className="col-lg-7">
              <h3 className="mb-4">Avril Agnes Kamu</h3>
              <p>I am a student at <strong>Universitas Klabat</strong> with a strong interest in design, particularly website design and other visual design. I really enjoy creating and exploring various design concepts. Additionally, I have a hobby of swimming, which helps me stay fit and focused in my daily activities.</p>
              <div className="row mb-3">
                <div className="col-sm-6 py-2"><h6>Name: <span className="text-secondary">Avril Agnes Kamu</span></h6></div>
                <div className="col-sm-6 py-2"><h6>Birthday: <span className="text-secondary">19 April 2005</span></h6></div>
                <div className="col-sm-6 py-2"><h6>Degree: <span className="text-secondary">Senior High School</span></h6></div>
                <div className="col-sm-6 py-2"><h6>Email: <span className="text-secondary">info@example.com</span></h6></div>
                <div className="col-sm-6 py-2"><h6>Address: <span className="text-secondary">Airmadidi, Nourth Sulawesi</span></h6></div>
                <div className="col-sm-6 py-2"><h6>Status: <span className="text-secondary">Student</span></h6></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}

export default About;