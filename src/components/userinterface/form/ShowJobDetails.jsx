import { useEffect, useState } from "react";
import Header from "../homepage/Header";
import { getData } from "../../../services/FetchNodeAdminServices";

export default function ShowJobDetails()
{
    const [job,setJob]=useState([]);

    //  const data=[{name:'perter',village:'mathura',age:21,eduation:'b.tech',work:'coder',mobile:'7892514360',address:'morar gwailor'},
    //              {name:'perter',village:'mathura',age:21,eduation:'b.tech',work:'coder',mobile:'7892514360',address:'morar gwailor'},
    //              {name:'perter',village:'mathura',age:21,eduation:'b.tech',work:'coder',mobile:'7892514360',address:'morar gwailor'},
    //              {name:'perter',village:'mathura',age:21,eduation:'b.tech',work:'coder',mobile:'7892514360',address:'morar gwailor'}
    //     ]


         const fetchJobData=async()=>{
<<<<<<< HEAD
            var result=await getData('api/getCarrerEntries')
=======
           var result = await getData('getCarrerEntries')
          //  console.log(result)
>>>>>>> 35999a8d8e9dc1300dbfa3f49d109f53438e0ba8
            setJob(result.data)

        }

        useEffect(()=>{
            fetchJobData();
        },[])


        return(<div>
    
             <div style={{ background: '#e9d5a3', color: 'black', width: '100%', height: 80, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginBottom: 40, textAlign: 'center' }}>
                <div style={{ fontSize: '1.1rem', fontWeight: 600, letterSpacing: 1.2,fontFamily:'Newsreader' }}>SHOW ALL JOB APPLICATION</div>
            </div>

            <div className="table-responsive">
      <table className="table table-bordered table-sm">
        <thead className="table-secondary">
          <tr>
            <th className="text-center">Seq</th>
            <th className="text-center">Name</th>
            <th className="text-center">Village</th>
            <th className="text-center">Age</th>
            <th className="text-center">Education</th>
                  <th className="text-center">Work Experience</th>
            <th className="text-center">Mobile No.</th>
            <th className="text-center">Address</th>
          </tr>
        </thead>
        <tbody>
          {
            job.length > 0 ? (

              job.map((item, i) => {
                return (<tr key={i}>

                  <td className="text-center">{i + 1}</td>
                  <td className="text-center">{item.name}</td>
                  <td className="text-center">{item.village}</td>
                  <td className="text-center">{item.age}</td>
                  <td className="text-center">{item.education}</td>
                  <td className="text-center">{item.workExperience}</td>
                  <td className="text-center">{item.mobile}</td>
                  <td className="text-center">{item.address}</td>
                  
                </tr>
                )
              }
              )
            )
              : (
                <tr>
                  <td colSpan="8" className="text-center">
                    No Data Available
                  </td>
                </tr>
              )
          }
        </tbody>
      </table>
    </div>
    
    
        </div>)
    
}