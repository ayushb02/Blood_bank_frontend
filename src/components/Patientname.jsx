import React from 'react'
import { Button } from './Button';
import axios, { Axios } from "axios";
import { useNavigate } from 'react-router-dom'

function Patientname(props) {
    const { name, bloodType} = props;
    const navigate = useNavigate()

    const clickHandler = async ()=>{
        axios.post("http://localhost:3000/api/v1/blood/recieved", {
                 patientName: name,
                 bloodType: bloodType
            }, {
                headers: {
                    Authorization: "Bearer " + localStorage.getItem("token")
                }
            }).then(()=>{
                window.location.reload();
            })
      }
    
      
  return (
    <div>
      <div className='my-3 flex justify-between'>
      <span className='text-sm font-medium text-gray-900 dark:text-black'>{name}</span><span className='text-sm font-medium text-gray-900 dark:text-black'>{bloodType}</span>
      </div>
      <Button label={'Book'} onClick={clickHandler} />
    </div>
  )
}

export default Patientname
