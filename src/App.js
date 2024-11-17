import About from "./components/About";
import Gallery from "./components/Gallery";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Qualification from "./components/Qualification";
import Skill from "./components/skill";


const App = () => {
  return (
<div>
<Navbar/>
<Header/>
<About/>
<Qualification/>
<Skill/>
<Gallery/>

  {/* Blog Start */}
  <div className="container-fluid pt-5" id="blog">
    <div className="container">
      <div className="position-relative d-flex align-items-center justify-content-center">
        <h1 className="display-1 text-uppercase text-white" style={{WebkitTextStroke: '1px #dee2e6'}}>Blog</h1>
        <h1 className="position-absolute text-uppercase text-primary">Latest Blog</h1>
      </div>
      <div className="row">
        <div className="col-lg-4 mb-5">
          <div className="position-relative mb-4">
            <img className="img-fluid rounded w-100" src="img/blog-1.jpg" alt />
            <div className="blog-date">
              <h4 className="font-weight-bold mb-n1">01</h4>
              <small className="text-white text-uppercase">Jan</small>
            </div>
          </div>
          <h5 className="font-weight-medium mb-4">Rebum lorem no eos ut ipsum diam tempor sed rebum elitr ipsum</h5>
          <a className="btn btn-sm btn-outline-primary py-2" href>Read More</a>
        </div>
        <div className="col-lg-4 mb-5">
          <div className="position-relative mb-4">
            <img className="img-fluid rounded w-100" src="img/blog-2.jpg" alt />
            <div className="blog-date">
              <h4 className="font-weight-bold mb-n1">01</h4>
              <small className="text-white text-uppercase">Jan</small>
            </div>
          </div>
          <h5 className="font-weight-medium mb-4">Rebum lorem no eos ut ipsum diam tempor sed rebum elitr ipsum</h5>
          <a className="btn btn-sm btn-outline-primary py-2" href>Read More</a>
        </div>
        <div className="col-lg-4 mb-5">
          <div className="position-relative mb-4">
            <img className="img-fluid rounded w-100" src="img/blog-3.jpg" alt />
            <div className="blog-date">
              <h4 className="font-weight-bold mb-n1">01</h4>
              <small className="text-white text-uppercase">Jan</small>
            </div>
          </div>
          <h5 className="font-weight-medium mb-4">Rebum lorem no eos ut ipsum diam tempor sed rebum elitr ipsum</h5>
          <a className="btn btn-sm btn-outline-primary py-2" href>Read More</a>
        </div>
      </div>
    </div>
  </div>
  {/* Blog End */}
  {/* Footer Start */}
  <div className="container-fluid bg-primary text-white mt-5 py-5 px-sm-3 px-md-5">
    <div className="container text-center py-5">
      <div className="d-flex justify-content-center mb-4">
        <a className="btn btn-light btn-social mr-2" href="#"><i className="fab fa-twitter" /></a>
        <a className="btn btn-light btn-social mr-2" href="#"><i className="fab fa-facebook-f" /></a>
        <a className="btn btn-light btn-social mr-2" href="#"><i className="fab fa-linkedin-in" /></a>
        <a className="btn btn-light btn-social" href="#"><i className="fab fa-instagram" /></a>
      </div>
      <div className="d-flex justify-content-center mb-3">
        <a className="text-white" href="#">Privacy</a>
        <span className="px-3">|</span>
        <a className="text-white" href="#">Terms</a>
        <span className="px-3">|</span>
        <a className="text-white" href="#">FAQs</a>
        <span className="px-3">|</span>
        <a className="text-white" href="#">Help</a>
      </div>
      <p className="m-0">© <a className="text-white font-weight-bold" href="#">Domain Name</a>. All Rights Reserved. Designed by <a className="text-white font-weight-bold" href="https://htmlcodex.com">HTML Codex</a>
      </p>
    </div>
  </div>
  {/* Footer End */}

</div>


  )
}

export default App;