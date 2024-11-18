const Skill = () => {
    return (
        <section className="section-padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-10 col-12 text-center mx-auto">
              <h2 className="mb-5">My Skill</h2>
            </div>
            <div className="col-lg-3 col-md-6 col-12 mb-4 mb-lg-0">
              <div className="featured-block d-flex justify-content-center align-items-center">
                <a className="d-block">
                  <img src="assets/images/icons/hands.png" className="featured-block-image img-fluid" alt />
                  <p className="featured-block-text"> <strong>HTML</strong></p>
                </a>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-12 mb-4 mb-lg-0 mb-md-4">
              <div className="featured-block d-flex justify-content-center align-items-center">
                <a href="donate.html" className="d-block">
                  <img src="assets/images/icons/heart.png" className="featured-block-image img-fluid" alt />
                  <p className="featured-block-text">CSS </p>
                </a>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-12 mb-4 mb-lg-0 mb-md-4">
              <div className="featured-block d-flex justify-content-center align-items-center">
                <a href="donate.html" className="d-block">
                  <img src="assets/images/icons/receive.png" className="featured-block-image img-fluid" alt />
                  <p className="featured-block-text"> <strong>ReactJs</strong></p>
                </a>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-12 mb-4 mb-lg-0">
              <div className="featured-block d-flex justify-content-center align-items-center">
                <a href="donate.html" className="d-block">
                  <img src="assets/images/icons/scholarship.png" className="featured-block-image img-fluid" alt />
                  <p className="featured-block-text">Figma </p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
}
export default Skill; 