import React from "react";
import couple from "../../../assets/couple.png";
import { useNavigate } from "react-router-dom";

import bal from "../../../assets/bal.jpeg";

export default function Body() 
{
  const navigate=useNavigate();

  return (<div>
     {/**************************HeroSection*************************** */ }

    <div style={{backgroundColor: "#f9f6ef",padding: "80px 0"}} >
      <div className="container">
        <div className="row align-items-center">

          <div className="col-md-6">

            <h1  className="fw-bold display-6 display-md-4" style={{fontFamily: "Georgia, serif",fontWeight:700,color: "#8B0000",lineHeight: "1.3"}}>
              Where Tradition & Job <br /> Meets Destiny
            </h1>

            <p style={{ color: "#6c757d", fontSize: "16px",marginTop: "20px",lineHeight: "1.8"}}>
              Welcome to most trusted Marriage and Career Bureau.
              We specialize in bringing hearts together and building
              professional futures. For over a decade, we have been
              the bridge to happy homes and successful careers in
              the region.
            </p>

            <div className="d-flex flex-column flex-md-row gap-3 mt-4">
              <span className="badge rounded-pill px-4 py-2" style={{border: "1px solid #d4af37", color: "#8B0000", background: "#fff"}}>
                ✔ 100% Verified Profiles
              </span>

            {/*  <span className="badge rounded-pill px-4 py-2" style={{border: "1px solid #d4af37", color: "#8B0000", background: "#fff"}}>
                📍 Based in Morena (M.P)
              </span>  */}
            </div>  

          </div>

          <div className="col-md-6 text-center position-relative mt-3">

            <div>
              <img src={couple} alt="couple" className="img-fluid" style={{width:'100%',borderRadius:20}}/>

              <div style={{position: "absolute", bottom: "30px", left: "50%",transform: "translateX(-50%)",color: "#fff", fontStyle: "italic", fontSize: "18px", textShadow: "0 2px 10px rgba(0,0,0,0.7)",width: "80%" }}>
                "Finding the perfect match for your soul and your goals."
              </div>
            </div>

          </div>

        </div>
      </div>
    </div>
    
    {/************************************************ */}


{/*********************Middle Section******************** */}

    
         <div style={{ backgroundColor: "#e8dfd6", minHeight: "80vh" }}>
      <div className="container py-5">

        <h2 className="text-center mb-5" style={{color: "#8B0000", fontWeight: "700", fontFamily: "serif"}}>
          Register With Us Today
        </h2>

        <div className="row justify-content-center g-4">

          <div className="col-md-5">
            <div className="card text-center p-4" style={{borderRadius: "20px",boxShadow: "0 4px 15px rgba(0,0,0,0.08)",border: "1px solid #f1e5d8",}}>

              <div className="d-flex justify-content-center align-items-center mx-auto mb-3" style={{width: "80px",height: "80px",borderRadius: "50%", backgroundColor: "#f3e4dc"}}>
                <i className="bi bi-heart-fill" style={{fontSize:24, color: "#a10000"}}></i>
              </div>

              <h5 style={{ fontWeight: "600" }}>
                शादी के लिए रजिस्टर करें
              </h5>

              <p style={{color: "#c89b2b",fontWeight: "600",letterSpacing: "1px",fontSize: "13px"}}>
                REGISTER FOR MARRIAGE
              </p>

              <p className="text-muted px-3">
                Find your life partner from our curated database
                of verified profiles.
              </p>

              <button onClick={()=>navigate('/marriage')} className="btn mt-3" style={{ backgroundColor: "#8B0000", color: "white",borderRadius: "30px",padding: "10px 25px" }}>
                Start Your Journey
              </button>
            </div>
          </div>

         
          <div className="col-md-5">
            <div className="card text-center p-4" style={{ borderRadius: "20px", boxShadow: "0 4px 15px rgba(0,0,0,0.08)",border: "1px solid #f1e5d8"}}>

                <div className="d-flex justify-content-center align-items-center mx-auto mb-3" style={{width: "80px", height: "80px", borderRadius: "50%", backgroundColor: "#f3e4dc" }}>
                  <i className="bi bi-briefcase-fill" style={{fontSize:24}}></i>
              </div>

              <h5 style={{ fontWeight: "600" }}>
                नौकरी के लिए रजिस्टर करें
              </h5>

              <p style={{color: "#c89b2b",fontWeight: "600", letterSpacing: "1px", fontSize: "13px"}}>
                REGISTER FOR JOB
              </p>

              <p className="text-muted px-3">
                Explore local career opportunities and placement
                services in India.
              </p>

              <button onClick={()=>navigate('/job')} className="btn mt-3" style={{backgroundColor: "#8B0000",color: "white", borderRadius: "30px", padding: "10px 25px"}}>
                Build Your Career
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
{/****************************************/}


{/****************last Section*******************/}

 <div style={{ backgroundColor: "#dcd8cf", padding: "80px 0"}}>
      <div className="container d-flex justify-content-center">
        <div className="shadow" style={{ backgroundColor: "#ffffff",borderRadius: "25px",padding: "50px", width: "85%", maxWidth: "1000px"}}>
         
          <h2 className="text-center fw-bold" style={{fontFamily: "Georgia, serif", color: "#2d2d2d"}}>
            Registration Fees For Marriage Only
          </h2>

         
         {/* <p className="text-center mt-3" style={{color: "#a10000",fontWeight: 600}}>
            <i className="bi bi-cash me-2"></i>
            रजिस्ट्रेशन फीस [Mobile No] पर भेजें
          </p>  */}

          <div className="row align-items-center mt-3">

            <div className="col-md-6 text-center text-md-start">
              <p className="text-muted" style={{fontSize: "15px",lineHeight: "1.7"}}>
                We accept all major UPI applications for your convenience.
                Please share the transaction receipt on WhatsApp Number <b>9752292743.</b>
              </p>

              

              <div className="mt-4">
                <i className="bi bi-google fs-4 text-secondary me-3"></i>
                <i className="bi bi-phone fs-4 text-secondary me-3"></i>
                <i className="bi bi-bank fs-4 text-secondary"></i>
              </div>
            </div>

          
            <div className="col-12 col-md-6 mt-4 mt-md-0 d-flex justify-content-center">
              <div className="text-center" style={{border: "2px dashed #d4b06a",borderRadius: "20px",padding: "20px", width: "100%"}}>
                <p className="text-uppercase text-muted"style={{fontSize: "12px"}}>
                  Scan And Pay
                </p>

                <h4 style={{color: "#a10000",fontWeight: 600,margin: "8px 0"}}>
                  <img alt="QR Code" src={bal} s style={{ maxWidth: "150px", width: "100%" }}/>
                </h4>

                <small className="text-muted">
                  Scan & Pay using any UPI App
                </small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>


{/********************************************** */}


 </div> );
}
