import { useState } from "react";
import Header from "../homepage/Header";
import { postData } from "../../../services/FetchNodeAdminServices";
import Swal from "sweetalert2";
import Footer from "../homepage/Footer";

export default function Marriage() {
  const [name, setName] = useState('');
  const [father, setFather] = useState('');
  const [jati, setJati] = useState('');
  const [got, setGot] = useState('');
  const [dob, setDOB] = useState('');
  const [age, setAge] = useState('');
  const [education, setEducation] = useState('');

  const [marriageStatus, setMarriageStatus] = useState("अविवाहित");
  const [work, setWork] = useState('');
  const [rang, setRang] = useState('');
  const [weight, setWeight] = useState('');
  const [ghar, setGhar] = useState('');
  const [samag, setSamag] = useState('');
  const [salary, setSalary] = useState('');
  const [maPa, setMaPa] = useState('');

  const [mobile, setMobile] = useState('');
  const [address, setAddress] = useState('');

  const handleSave = async () => {
    // alert(1)
    var formData = new FormData();

    formData.append('name', name);
    formData.append('fatherName', father);
    formData.append('caste', jati);
    formData.append('subCaste', got);
    formData.append('dateOfBirth', dob);
    formData.append('age', age);

    formData.append('education', education);
    formData.append('maritalStatus', marriageStatus);
    formData.append('profession', work);
    formData.append('color', rang);
    formData.append('weight', weight);

    formData.append('cityOrPlace', ghar);
    formData.append('societyOrCommunity', samag);
    formData.append('expectedPartnerAge', salary);
    formData.append('maternalUncleProfession', maPa);
    formData.append('mobileNo', mobile);
    formData.append('address', address);
    const formdataObj = {};
    formData.forEach((value, key) => {
      formdataObj[key] = value;
    });
    // console.log(formdataObj)
    var result = await postData('api/marriage', formdataObj);
    // console.log(result)
    if (result.data) {
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Data Submit Successfully",
        showConfirmButton: false,
        timer: 2000
      });
    }
    else {
      Swal.fire({
        position: "top-end",
        icon: "error",
        title: "Your work has been not saved",
        showConfirmButton: false,
        timer: 2000
      });
    }


  }





  return (<div>
    <div>
      <Header />
    </div>

    <div style={{ background: '#e9d5a3', color: 'black', width: '100%', height: 200, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginBottom: 40, textAlign: 'center' }}>

      <div style={{ fontSize: '2.2rem', fontWeight: 500, letterSpacing: 1.2, fontFamily: 'Newsreader' }}>REGISTER FOR MARRIAGE</div>

    </div>

    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', height: '100%' }}>
      <div style={{ width: 700, height: 'auto', background: '#f9f6ef', borderRadius: 20, margin: 10, padding: 10 }}>

        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
          <i className="bi bi-person-circle" style={{ fontSize: 30, display: 'flex', justifyContent: 'center', margin: 8, padding: 10 }}></i>
          <div style={{ fontSize: 30, marginTop: 5, marginBottom: 15, fontFamily: 'Newsreader', fontWeight: 550 }}>CANDINATE PROFILE</div>
        </div>

        <div className="row mt-3">
          <div className="col-md-6 mt-2">
            <label className="form-label fw-semibold">नाम</label>
            <input value={name} onChange={(e) => setName(e.target.value)} type="text" className="form-control" placeholder="अपना नाम लिखें" />
          </div>

          <div className="col-md-6 mt-2">
            <label className="form-label fw-semibold">पिता का नाम</label>
            <input value={father} onChange={(e) => setFather(e.target.value)} type="text" className="form-control" placeholder="पिता का नाम" />
          </div>
        </div>


        <div className="row mt-3">
          <div className="col-md-6 mt-2">
            <label className="form-label fw-semibold">जाति</label>
            <input value={jati} onChange={(e) => setJati(e.target.value)} type="text" className="form-control" placeholder="जाति" />
          </div>

          <div className="col-md-6 mt-2">
            <label className="form-label fw-semibold">उपजाति / गोत्र</label>
            <input value={got} onChange={(e) => setGot(e.target.value)} type="text" className="form-control" placeholder="उपजाति / गोत्र" />
          </div>
        </div>


        <div className="row mt-3">
          <div className="col-md-6 mt-2">
            <label className="form-label fw-semibold">जन्म दिनांक</label>
            <input value={dob} onChange={(e) => setDOB(e.target.value)} type="date" className="form-control" placeholder="जन्म दिनांक" />
          </div>

          <div className="col-md-6 mt-2">
            <label className="form-label fw-semibold">उम्र</label>
            <input value={age} onChange={(e) => setAge(e.target.value)} type="text" className="form-control" placeholder="उम्र" />
          </div>
        </div>



        <div className="row mt-3">
          <div className="col-md-6 mt-2">
            <label className="form-label fw-semibold">पढ़ाई</label>
            <input value={education} onChange={(e) => setEducation(e.target.value)} type="text" className="form-control" placeholder="पढ़ाई" />
          </div>

          <div className="col-md-6 mt-2">
            <label className="form-label fw-semibold">वैवाहिक स्थिति</label>

            <select
              className="form-control"
              value={marriageStatus}
              onChange={(e) => setMarriageStatus(e.target.value)}
            >
              <option value="अविवाहित">अविवाहित</option>
              <option value="विवाहित">विवाहित</option>
              <option value="Divorced">Divorced</option>
              <option value="Widowed">Widowed</option>
            </select>
          </div>

          <div className="row mt-3">
            <div className="col-md-6 mt-2">
              <label className="form-label fw-semibold">नौकरी / व्यवसाय</label>
              <input value={work} onChange={(e) => setWork(e.target.value)} type="text" className="form-control" placeholder="नौकरी / व्यवसाय" />
            </div>

            <div className="col-md-6 mt-2">
              <label className="form-label fw-semibold">रंग</label>
              <input value={rang} onChange={(e) => setRang(e.target.value)} type="text" className="form-control" placeholder="रंग" />
            </div>
          </div>


          <div className="row mt-3">
            <div className="col-md-6 mt-2">
              <label className="form-label fw-semibold">वजन</label>
              <input value={weight} onChange={(e) => setWeight(e.target.value)} type="text" className="form-control" placeholder="वजन" />
            </div>

            <div className="col-md-6 mt-2">
              <label className="form-label fw-semibold">शहर में घर / प्लॉट</label>
              <input value={ghar} onChange={(e) => setGhar(e.target.value)} type="text" className="form-control" placeholder="शहर में घर / प्लॉट" />
            </div>
          </div>


          <div className="row mt-3">
            <div className="col-md-6 mt-2">
              <label className="form-label fw-semibold">समाज / बिरादरी</label>
              <input value={samag} onChange={(e) => setSamag(e.target.value)} type="text" className="form-control" placeholder="समाज / बिरादरी" />
            </div>

            <div className="col-md-6 mt-2">
              <label className="form-label fw-semibold"> लड़का / लड़की की सामान्य आय</label>
              <input value={salary} onChange={(e) => setSalary(e.target.value)} type="text" className="form-control" placeholder=" लड़का / लड़की की सामान्य आय" />
            </div>
          </div>


          <div className="row mt-3">
            <div className="col-md-6 mt-2">
              <label className="form-label fw-semibold">माता पिता का व्यवसाय</label>
              <input value={maPa} onChange={(e) => setMaPa(e.target.value)} type="text" className="form-control" placeholder="समाता पिता का व्यवसाय" />
            </div>

            <div className="col-md-6 mt-2">
              <label className="form-label fw-semibold">Mobile No</label>
              <input
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
                type="text"
                className="form-control"
                placeholder="Mobile No"
              />
            </div>
          </div>


          <div className="row mt-4">
            <div className="col-md-12">
              <label className="form-label fw-semibold">पता</label>
              <textarea value={address} onChange={(e) => setAddress(e.target.value)} type="text" className="form-control" placeholder="पूरा पता लिखें" />
            </div>
          </div>


          <div className="text-center mt-4">
            <button onClick={handleSave} className="btn btn-lg px-5" style={{ background: "#8B0000", color: "#fff", borderRadius: 50, fontWeight: 600 }}>
              Submit
            </button>
          </div>


        </div>
      </div>
    </div>

    <div className="mt-5">
      <Footer />
    </div>
  </div>)
}