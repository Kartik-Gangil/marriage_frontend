import { useEffect, useState } from "react";
import Header from "../homepage/Header";
import { getData } from "../../../services/FetchNodeAdminServices";

export default function ShowJobDetails() {
  const [marriage, setMarriage] = useState([]);

  //  const data=[{name:'perter',father:'mr.bobu lal',jati:'sharma',got:'baniya',dob:'25/02/2024',age:2,eduation:'b.tech',marriagestatus:'single',work:'coder',rang:'white',weight:'50kg',ghar:5,samag:'pagal',salary:'50000',mapa:'tute',mobile:'7892514360',address:'morar gwailor'},
  //              {name:'perter',father:'mr.bobu lal',jati:'sharma',got:'baniya',dob:'25/02/2024',age:2,eduation:'b.tech',marriagestatus:'single',work:'coder',rang:'white',weight:'50kg',ghar:5,samag:'pagal',salary:'50000',mapa:'tute',mobile:'7892514360',address:'morar gwailor'},
  //              {name:'perter',father:'mr.bobu lal',jati:'sharma',got:'baniya',dob:'25/02/2024',age:2,eduation:'b.tech',marriagestatus:'single',work:'coder',rang:'white',weight:'50kg',ghar:5,samag:'pagal',salary:'50000',mapa:'tute',mobile:'7892514360',address:'morar gwailor'},
  //              {name:'perter',father:'mr.bobu lal',jati:'sharma',got:'baniya',dob:'25/02/2024',age:2,eduation:'b.tech',marriagestatus:'single',work:'coder',rang:'white',weight:'50kg',ghar:5,samag:'pagal',salary:'50000',mapa:'tute',mobile:'7892514360',address:'morar gwailor'},
  //              {name:'perter',father:'mr.bobu lal',jati:'sharma',got:'baniya',dob:'25/02/2024',age:2,eduation:'b.tech',marriagestatus:'single',work:'coder',rang:'white',weight:'50kg',ghar:5,samag:'pagal',salary:'50000',mapa:'tute',mobile:'7892514360',address:'morar gwailor'},
  //     ]

  const fetchMarriageData = async () => {
    var result = await getData('api/getMarriageEntries')
    console.log(result)
    setMarriage(result.data)

  }


  

  useEffect(() => {
    fetchMarriageData();
  }, [])


  return (<div>


    <div style={{ background: '#e9d5a3', color: 'black', width: '100%', height: 80, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginBottom: 40, textAlign: 'center' }}>
      <div style={{ fontSize: '1.1rem', fontWeight: 600, letterSpacing: 1.2, fontFamily: 'Newsreader' }}>SHOW ALL MARRIAGE APPLICATION</div>
    </div>

    <div className="table-responsive">
      <table className="table table-bordered table-sm">
        <thead className="table-secondary">
          <tr>
            <th className="text-center">Seq</th>
            <th className="text-center">Name</th>
            <th className="text-center">Father</th>
            <th className="text-center">Jati</th>
            <th className="text-center">Got</th>
            <th className="text-center">Dob</th>

            <th className="text-center">Age</th>
            <th className="text-center">Education</th>
            <th className="text-center">Status</th>
            <th className="text-center">Work</th>
            <th className="text-center">Rang</th>
            <th className="text-center">Weight</th>

            <th className="text-center">Ghar</th>
            <th className="text-center">Samag</th>
            <th className="text-center">Ladka / Ladki ka samanya age</th>
            <th className="text-center">Maa Papa work</th>
            <th className="text-center">Mobile No.</th>
            <th className="text-center">Address</th>
          </tr>
        </thead>
        <tbody>
          {
            marriage.length > 0 ? (

              marriage.map((item, i) => {
                return (<tr key={i}>

                  <td className="text-center">{i + 1}</td>
                  <td className="text-center">{item.name}</td>
                  <td className="text-center">{item.fatherName}</td>
                  <td className="text-center">{item.caste}</td>
                  <td className="text-center">{item.subCaste}</td>
                  <td className="text-center">{new Date(item.dateOfBirth).toLocaleDateString()}</td>

                  <td className="text-center">{item.age}</td>
                  <td className="text-center">{item.education}</td>
                  <td className="text-center">{item.maritalStatus}</td>
                  <td className="text-center">{item.profession}</td>
                  <td className="text-center">{item.color}</td>
                  <td className="text-center">{item.weight}</td>

                  <td className="text-center">{item.address}</td>
                  <td className="text-center">{item.societyOrCommunity}</td>
                  <td className="text-center">{item.expectedPartnerAge}</td>
                  <td className="text-center">{item.maternalUncleProfession}</td>
                  <td className="text-center">{item.mobileNo}</td>
                  <td className="text-center">{item.address}</td>

                </tr>
                )
              }
              )
            )
              : (
                <tr>
                  <td colSpan="17" className="text-center">
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