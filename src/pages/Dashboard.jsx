import { useEffect, useState } from 'react'
import { Appbar } from '../components/Appbar'
import { NewForm } from './newForm'
import Bloodavailablity from './Bloodavailability'

export const Dashboard = () => {
  return (
    <>
      <Appbar />
      <div className=' bg-[url(../img2.jpg)] flex  bg-no-repeat bg-cover bg-center bg-fixed h-screen'>
        <Bloodavailablity />
      </div>
    </>
  )
}
