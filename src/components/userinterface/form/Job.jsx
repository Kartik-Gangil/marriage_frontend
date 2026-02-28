import { useState } from "react";
import Header from "../homepage/Header";
import { postData } from "../../../services/FetchNodeAdminServices";
import Swal from "sweetalert2";
import Footer from "../homepage/Footer";

export default function Job()
{
    const [name,setName]=useState('');
    const [village,setVillage]=useState('');
    const [age,setAge]=useState('');
    const [education,setEducation]=useState('');
    const [work,setWork]=useState('');
    const [mobile,setMobile]=useState('');
    const [address,setAddress]=useState('');

    const handleSave=async()=>{
       // alert(1)
        var formData=new FormData();

        formData.append('name',name);
        formData.append('village',village);
        formData.append('age',age);
        formData.append('education',education);
        formData.append('workExperience',work);
        formData.append('mobile',mobile);
        formData.append('address',address);

        const formdataObj = {};
        formData.forEach((value, key) => {
            formdataObj[key] = value;
        });

        var result = await postData('api/carrers', formdataObj);
        console.log(result)
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





    return(<div>
        <div>
            <Header/>
        </div>

         <div style={{ background: '#e9d5a3', color: 'black', width: '100%', height: 200, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginBottom: 40, textAlign: 'center' }}>

            <div style={{ fontSize: '2.2rem', fontWeight: 500, letterSpacing: 1.2,fontFamily:'Newsreader' }}>REGISTER FOR JOB</div>

        </div>
        
        <div style={{display:'flex',justifyContent:'center',alignItems:'center',width:'100%',height:'100%'}}>
            <div style={{width:700,height:'auto',background:'#f9f6ef',borderRadius:20,margin:10,padding:10}}>

                <div style={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
                    <i className="bi bi-person-circle" style={{fontSize:30,display:'flex',justifyContent:'center',margin:8,padding:10}}></i>
                    <div style={{fontSize:30,margin:0, fontFamily:'Newsreader',fontWeight:550}}>CANDINATE PROFILE</div>
                </div>

                <div className="row mt-3">
                    <div className="col-md-6 mt-2">
                      <label className="form-label fw-semibold">नाम</label>
                      <input value={name} onChange={(e)=>setName(e.target.value)} type="text" className="form-control" placeholder="अपना नाम लिखें"/>
                    </div>

                    <div className="col-md-6 mt-2">
                      <label className="form-label fw-semibold">गाँव</label>
                      <input value={village} onChange={(e)=>setVillage(e.target.value)} type="text" className="form-control"  placeholder="गाँव का नाम"/>
                    </div>
                </div>


                 <div className="row mt-3">
                    <div className="col-md-6 mt-2">
                      <label className="form-label fw-semibold">उम्र (साल)</label>
                      <input value={age} onChange={(e)=>setAge(e.target.value)} type="text" className="form-control" placeholder="Enter Age"/>
                    </div>

                    <div className="col-md-6 mt-2">
                      <label className="form-label fw-semibold">पढ़ाई (शिक्षा)</label>
                      <input value={education} onChange={(e)=>setEducation(e.target.value)} type="text" className="form-control"  placeholder="जैसे: 12वीं, Graduation"/>
                    </div>
                </div>


                <div className="row mt-3">
                    <div className="col-md-6 mt-2">
                      <label className="form-label fw-semibold">किस काम का अनुभव</label>
                      <input value={work} onChange={(e)=>setWork(e.target.value)} type="text" className="form-control" placeholder="काम का नाम"/>
                    </div>

                    <div className="col-md-6 mt-2">
                      <label className="form-label fw-semibold">Mobile</label>
                      <input value={mobile} onChange={(e)=>setMobile(e.target.value)} type="text" className="form-control" placeholder="मोबाइल नंबर"/>
                    </div>
                </div>


                <div className="row mt-4">
                    <div className="col-md-12 mt-2">
                      <label className="form-label fw-semibold">पता</label>
                      <textarea value={address} onChange={(e)=>setAddress(e.target.value)} type="text" className="form-control" placeholder="पूरा पता लिखें"/>
                    </div>
                </div>


                <div className="text-center mt-4">
                   <button onClick={handleSave} className="btn btn-lg px-5" style={{background: "#8B0000",color: "#fff",borderRadius: 50, fontWeight: 600}}>
                      Submit 
                   </button>
                </div>

    
            </div>
         </div>

         <div className="mt-5">
            <Footer/>
         </div>
    </div>)
}