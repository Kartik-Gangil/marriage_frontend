import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import Footer from "../../userinterface/homepage/Footer";
import Header from "../../userinterface/homepage/Header";
import logo from "../../../assets/logo.png"

export default function Dashboard() 
{
  const navigate = useNavigate();
  const token = localStorage.getItem("admin");

  
  useEffect(() => {
    if (!token) navigate("/");
  }, [token, navigate]);

  return (
    <div className="bg-light min-vh-100">
      <Header/>

      <div className="container-fluid px-md-4 mt-2">
        <div className="row">
          
            <div className="col-12 col-md-3 mb-3">
              <div className="card shadow">
                <div className="card-body text-center">
                  
                  <img src={logo} alt="profile" className="rounded-circle mb-2" width="100" height="100"/>

                  <h5 className="fw-bold">Shyam Sundar Mishra</h5>
                  <p className="text-muted small">
                   shyama911@zohomail.in 
                  </p>

                  <hr />

                  <div className="mb-3">
                    <Link to="/showjob" target="nw" className="text-decoration-none fw-semibold d-block">
                      Show Job
                    </Link>
                  </div>

                  <div>
                    <Link to="/showmarriage" target="nw" className="text-decoration-none fw-semibold d-block">
                      Show Marriage
                    </Link>
                  </div>
                </div>
              </div>
            </div>
        

         
          <div className="col-12 col-md-9">
            <div className="card shadow mb-4">
              <div className="card-body p-0">
                <iframe name="nw" src="/showjob" className="w-100 border-0" style={{ minHeight: "80vh" }} title="Dashboard Panel"/>
              </div>
            </div>
          </div>
        </div>
      </div>


      <Footer />
    </div>
  );
}
