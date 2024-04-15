import { BottomWarning } from '../components/BottomWarning'
import { Button } from '../components/Button'
import { Heading } from '../components/Heading'
import { InputBox } from '../components/InputBox'
import { SubHeading } from '../components/SubHeading'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

export const Signin = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  return (
    <div className='bg-[url(../bb.jpg)] h-screen flex justify-center bg-no-repeat bg-cover bg-center bg-fixed '>
      <div className=' h-screen flex justify-center'>
        <div className='flex flex-col justify-center'>
          <div className='rounded-lg bg-red-100 w-80 text-center p-2 h-max px-4'>
            <Heading label={'Sign in'} />
            <SubHeading
              label={'Enter your credentials to access your account'}
            />
            <InputBox
              onChange={(e) => {
                setUsername(e.target.value)
              }}
              placeholder='ayush@gmail.com'
              label={'Email'}
            />
            <InputBox
              onChange={(e) => {
                setPassword(e.target.value)
              }}
              placeholder='123456'
              label={'Password'}
            />
            <div className='pt-4'>
              <Button
                onClick={async () => {
                  const response = await axios.post(
                    'https://blood-bank-backend-r2ru.onrender.com/api/v1/user/signin',
                    {
                      username,
                      password,
                    }
                  ).then((response)=>{
                    console.log(response)
                    localStorage.clear()
                  localStorage.setItem('token', response.data.token)
                  localStorage.setItem('firstName', response.data.firstName)
                  localStorage.setItem('lastName', response.data.lastName)
                  localStorage.setItem('address',response.data.address)
                    navigate('/dashboard')})
                  
                  
                }}
                label={'Sign in'}
              />
            </div>
            <BottomWarning
              label={"Don't have an account?"}
              buttonText={'Sign up'}
              to={'/signup'}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
