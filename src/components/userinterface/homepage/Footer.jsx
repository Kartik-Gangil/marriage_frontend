import { Link } from "react-router-dom";
export default function Footer() {
  return (
    <div style={{ backgroundColor: "#8b0000", color: "#fff", paddingTop: "50px" }}>
      <div className="container">
        <div className="row gy-4">

          {/* Contact Us */}
          <div className="col-md-4">
            <h5 style={{ color: "#f5c542", fontWeight: "600" }}>
              Contact Us
            </h5>

            <p className="mt-3 mb-2">
              <i className="bi bi-geo-alt me-2 text-warning"></i>
              Ambah, Morena (M.P) - 476111
            </p>

            <p>
              <i className="bi bi-telephone me-2 text-warning"></i>
              +91 9752292743
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-md-4 text-md-center">
            <h5 style={{ color: "#f5c542", fontWeight: "600" }}>
              Quick Links
            </h5>

            <ul className="list-unstyled mt-3">
              <li className="mb-2">Privacy Policy</li>
              <li className="mb-2">Terms of Service</li>
              <li>Registration Guide</li>
            </ul>
          </div>

          {/* Follow Us */}
          <div className="col-md-4 text-md-end">
            <h5 style={{ color: "#f5c542", fontWeight: "600" }}>
              Follow Us
            </h5>

            <div className="mt-3">
              <span className="social-circle me-2">
                <i className="bi bi-instagram"></i>
              </span>

              <span className="social-circle me-2">
                <i className="bi bi-youtube"></i>
              </span>

              <span className="social-circle">
                <i className="bi bi-share"></i>
              </span>
            </div>

          </div>

        </div>

        {/* <div className="row">
          <div className="col-lg-6"></div>
          <div className="col-lg-4"></div>
          <div className="col-lg-2">
             <Link to="https://creovateio.in" style={{textDecoration: 'none' , color:'inherit'}} >
                <div style={{ fontSize:16,padding: 5, display: "flex", alignItems: "center", marginTop: 5, textAlign: 'center', marginBottom: 2, justifyContent: 'center', cursor: 'pointer' }}>
                  <img src="https://creovate-io.vercel.app/android-chrome-512x512.png" height={50} width={50} alt="" />
                  <h1 style={{ fontFamily: 'Newsreader', letterSpacing: 1, textTransform: 'uppercase', fontWeight: "lighter",fontSize:18,margin:2 }}>CreovateIO</h1>
                </div>
              </Link>
               <p style={{ textAlign: 'center', fontWeight: "bolder",fontSize:14 }}>WE BUILD TRUST & Contact Us:+91 6265511439</p>
          </div>
        </div> */}


        <hr style={{ borderColor: "rgba(255,255,255,0.2)", marginTop: "40px" }} />

        <div className="d-flex align-items-center">
          <p className="text-left pb-3" style={{ fontSize: "14px", opacity: 0.9 }}>
            © 2024 Vivah & Career Bureau Ambah. All rights reserved.
          </p>
          <p className="ms-auto " style={{ fontSize: "14px", opacity: 0.9 }}>
            <Link to="https://creovateio.in" style={{ textDecoration: 'none', color: 'inherit' }} >
              <div className="d-flex align-items-center">
                Made by CreovateIO
                <img src="https://creovate-io.vercel.app/android-chrome-512x512.png" height={30} width={30} alt="" />
              </div>
            </Link>
          </p>
        </div>
      </div>



      {/* Social Circle Styling */}
      <style>{`
        .social-circle {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 38px;
          height: 38px;
          border-radius: 50%;
          border: 1px solid rgba(255,255,255,0.4);
          cursor: pointer;
          transition: 0.3s;
        }
        .social-circle:hover {
          background: #f5c542;
          color: #8b0000;
          border-color: #f5c542;
        }
      `}</style>
    </div >
  );
}
