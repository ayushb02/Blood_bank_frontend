import React, { useEffect } from "react";
import { useState } from "react";
import { Button } from "../components/Button";
import axios, { Axios } from "axios";
import Patientname from "../components/Patientname";
import { BottomWarning } from "../components/BottomWarning";

function Bloodavailablity() {
  const [bloodData ,setBloodData] = useState([]);
  const [bloodType, setBloodType] = useState("")

  
  const fetch = async ()=>{
    await axios.post("https://blood-bank-backend-r2ru.onrender.com/api/v1/blood/available", {
            bloodType: bloodType
        }, {
            headers: {
              Authorization: "Bearer " + localStorage.getItem("token")
            }
        }).then((response)=>{
           setBloodData(response)
           console.log(response)
        })
        

      
  }

  useEffect(()=>{
    fetch()
    console.log(bloodData)
  },[bloodType])
  

  let list;
  if(bloodData!=""){
    list = <div>{bloodData.data.finalinfo.map((patient)=>(
      <Patientname key={patient._id} name={patient.bloodDoner} bloodType={patient.bloodGroup}/>
    ))}</div>
  }
  else{
    <div></div>
  }


  return (<div className='justify-center h-screen pt-16 max-w-sm mx-auto'>
    <label
          className='flex justify-left  mb-2 text-sm font-medium text-gray-900 dark:text-black'
        >
          Patient Name
        </label>
        <input
          type='text'
          id='email'
          className='shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-black dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light'
          placeholder='Name'
          required
        />
        <label
          className='flex justify-left  my-3 text-sm font-medium text-gray-900 dark:text-black'
        >
          Blood Group
        </label>
    
    <select
      onChange={(e)=>{
        const selectedBloodType = e.target.value;
        setBloodType(selectedBloodType);
      }}
       
        className='shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light'
      >
        <option value="A+">A+</option>
        <option value="A-">A-</option>
        <option value="B+">B+</option>
        <option value="B-">B-</option>
        <option value="O+">O+</option>
        <option value="O-">O-</option>
        <option value="AB+">AB+</option>
        <option value="AB-">AB-</option>
      </select>

      <BottomWarning
              label={"Want to Donate Blood?"}
              buttonText={'Donate Here'}
              to={'/newform'}
      />

      <div className="flex mt-5 justify-between">
        <span className="text-sm font-medium text-gray-900 dark:text-black">Doner Name</span><span className="text-sm font-medium text-gray-900 dark:text-black">BloodGroup</span>
      </div>
     
      {list}
     
      

      
  </div>


    
  );
}

export default Bloodavailablity;