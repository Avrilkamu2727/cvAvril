const Skill = () => {
    return (
        <div className="container-fluid py-5" id="skill">
        <div className="container">
          <div className="position-relative d-flex align-items-center justify-content-center">
            <h1 className="display-1 text-uppercase text-white" style={{WebkitTextStroke: '1px #dee2e6'}}>Skills</h1>
            <h1 className="position-absolute text-uppercase text-primary">My Skills</h1>
          </div>
          <div className="row align-items-center">
            <div className="col-md-6">
              <div className="skill mb-4">
              <section className="section-padding">
          <div className="container">
            <div className="row">
              <div className="col-lg-10 col-12 text-center mx-auto">
              </div>
              <div className="col-lg-3 col-md-6 col-12 mb-4 mb-lg-0">
                <div className="featured-block d-flex justify-content-center align-items-center">
                  <a href="donate.html" className="d-block">
                    <img src="assets/images/icons/hands.png" className="featured-block-image img-fluid" alt />
                    <p className="featured-block-text">Become a <strong>volunteer</strong></p>
                  </a>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-12 mb-4 mb-lg-0 mb-md-4">
                <div className="featured-block d-flex justify-content-center align-items-center">
                  <a href="donate.html" className="d-block">
                    <img src="assets/images/icons/heart.png" className="featured-block-image img-fluid" alt />
                    <p className="featured-block-text"><strong>Caring</strong> Earth</p>
                  </a>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-12 mb-4 mb-lg-0 mb-md-4">
                <div className="featured-block d-flex justify-content-center align-items-center">
                  <a href="donate.html" className="d-block">
                    <img src="assets/images/icons/receive.png" className="featured-block-image img-fluid" alt />
                    <p className="featured-block-text">Healthy <strong>Living</strong></p>
                  </a>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-12 mb-4 mb-lg-0">
                <div className="featured-block d-flex justify-content-center align-items-center">
                  <a href="donate.html" className="d-block">
                    <img src="assets/images/icons/scholarship.png" className="featured-block-image img-fluid" alt />
                    <p className="featured-block-text"><strong>Scholarship</strong> Program</p>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}
export default Skill; 