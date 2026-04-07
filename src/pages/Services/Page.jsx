import React from 'react'
import Serviceheader from './Components/Serviceheader'
import Servicescontent from './Components/Servicescontent'
import Servicecontent from './Components/Servicecontent'
import Serviceanimation from './Serviceanimation'

const Page = () => {
  return (
    <div>
      <Serviceheader/>
      <Servicecontent/>
      <Serviceanimation/>
      <Servicescontent/>
    </div>
  )
}

export default Page