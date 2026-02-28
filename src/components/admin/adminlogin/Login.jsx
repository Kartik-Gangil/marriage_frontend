import { useState } from "react";
import Header from "../../userinterface/homepage/Header";
import { useNavigate } from 'react-router-dom'
import { postData } from "../../../services/FetchNodeAdminServices";
import Swal from "sweetalert2";
import { useEffect } from "react";

export default function Login() {
  const navigate = useNavigate()
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    if (localStorage.getItem('admin')) {
      navigate('/dashboard')
    }
  }, [])


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = { email, password };

      const result = await postData('api/login', data)
      // console.log(result)

      if (result.data?._id !== '') {
        localStorage.setItem('admin', JSON.stringify(result.data?._id))
        navigate('/dashboard')
      }
      else {
        Swal.fire({
          position: "top-end",
          icon: "error",
          title: "Credentials Incorrect",
          showConfirmButton: false,
          timer: 2000
        });
      }

    } catch (error) {
      console.log(error)
    }

  };

  return (
    <div>
      <div>
        <Header show="nav" />
      </div>


      <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
        <div className="card shadow p-4" style={{ width: "350px", borderRadius: "15px" }}>
          <h3 className="text-center mb-4 text-primary">Marriage Bureau Login</h3>

          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label">Email address</label>
              <input type="email" className="form-control" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} required />
            </div>

            <div className="mb-3">
              <label className="form-label">Password</label>
              <input type="password" className="form-control" placeholder="Enter password" value={password} onChange={(e) => setPassword(e.target.value)} required />
            </div>

            <button type="submit" className="btn btn-primary w-100">
              Login
            </button>
          </form>

        </div>
      </div>

    </div>
  );
}


