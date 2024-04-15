import { useState } from "react"
import axios from "axios";
import { useNavigate } from "react-router-dom"
import { Appbar } from "../components/Appbar";
import { InputBox } from "../components/InputBox";
import { BottomWarning } from "../components/BottomWarning";
import Patientname from "../components/Patientname";

export const NewForm = () => {
  const navigate = useNavigate();
  const [bloodType , setBloodType] = useState("");
  const [name , setName ] = useState("");

  return (<>
  <Appbar/>
    <div className=' bg-[url(../img2.jpg)] flex  bg-no-repeat bg-cover bg-center bg-fixed h-screen'>
    <div className='justify-center h-screen pt-16 max-w-sm mx-auto'>
      <div className='mb-5  '>
        
       <InputBox
              onChange={(e) => {
                setName(e.target.value)
              }}
              placeholder='ayush@gmail.com'
              label={'Patient Name'}
          />
      </div>
      <label
        className='flex justify-left  mb-2 text-sm font-medium text-gray-900 dark:text-black'
      >
        Blood Types
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

      

     <div className="flex justify-center">
      <button
      onClick={() => {
        axios.post("http://localhost:3000/api/v1/blood/donated", {
            patientName : name,
            bloodType: bloodType,
            address: localStorage.getItem("address")
        }, {
            headers: {
                Authorization: "Bearer " + localStorage.getItem("token")
            }
        }).then((response) => {
          console.log(response) 
          alert("Thank you for donating")})
    .catch((err) => {
      console.log(err)
          })
        
        navigate("/newform")
        console.log(bloodType)
    }}
        
        className=' m-5 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-gray-900 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
      >
        Donate Blood
      </button>
      </div>
      <BottomWarning className="text-gray-900" label={"Go back to Blood Bank"} buttonText={"Click Here"} to={"/dashboard"}/>
      
    </div>
    </div>
    
    
    </>
  )
}
