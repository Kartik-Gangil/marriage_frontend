import { useNavigate } from "react-router-dom";
import { useState } from "react";
import logo from "../../../assets/logo.png";

export default function Header() {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  return (
    <div style={{ background: "#FFFDF5",borderBottom: "2px solid #eee", position: "relative"}}>
      <div style={{display: "flex", alignItems: "center", height: 60, padding: "0 20px", justifyContent: "space-between"}}>
       
        <div onClick={() => navigate("/")} style={{ display: "flex", alignItems: "center", cursor: "pointer" }} >
          <img src={logo} alt="logo" style={{ width: 45, height: 45 }} />
          <div className="fw-bold fs-5 fs-md-4" style={{  fontWeight: "bold", marginLeft: 10,fontFamily:'Newsreader' }}>
             LEELA FACILITY & MARRIAGE BUREAU
          </div>
        </div>

       
        <ul className="desktop-menu">
          <li onClick={() => navigate("/")}>Home</li>
          <li>About Us</li>
          <li>Register</li>
          <li></li>
        </ul>

        
       
      </div>

      
     

      {/* STYLES */}
      <style>{`
        .desktop-menu {
          display: flex;
          list-style: none;
          gap: 30px;
          margin: 0;
          font-weight: 500;
          cursor: pointer;
        }

        .menu-icon {
          display: none;
          font-size: 26px;
          cursor: pointer;
        }

        .mobile-menu {
          display: none;
        }

        /* MOBILE VIEW */
        @media (max-width: 768px) {
          .desktop-menu {
            display: none;
          }

          .menu-icon {
            display: block;
          }

          .mobile-menu {
            display: flex;
            flex-direction: column;
            padding: 15px 20px;
            background: #fff;
            border-top: 1px solid #eee;
            gap: 12px;
            font-weight: 500;
          }

          .mobile-menu div {
            padding: 8px 0;
            border-bottom: 1px solid #f1f1f1;
          }
        }
      `}</style>
    </div>
  );
}
