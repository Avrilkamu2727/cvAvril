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

  {/* Footer Start */}
  <div className="container-fluid bg-primary text-white mt-5 py-5 px-sm-3 px-md-5">
    <div className="container text-center py-5">
      <div className="d-flex justify-content-center mb-4">
        <a className="btn btn-light btn-social mr-2" href="#"><i className="fab fa-twitter" /></a>
        <a className="btn btn-light btn-social mr-2" href="#"><i className="fab fa-facebook-f" /></a>
        <a className="btn btn-light btn-social mr-2" href="#"><i className="fab fa-linkedin-in" /></a>
        <a className="btn btn-light btn-social" href="#"><i className="fab fa-instagram" /></a>
      </div>
      <p className="m-0">© <a className="text-white font-weight-bold" href="#">Domain Name</a>. Designed by Avril Kamu <a className="text-white font-weight-bold" href="https://htmlcodex.com">HTML Codex</a>
      </p>
    </div>
  </div>
  {/* Footer End */}

</div>


  )
}

export default App;