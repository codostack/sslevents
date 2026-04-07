import React from 'react'
import Contactpage from './Components/Contactpage'
import Contactheader from './Components/Contactheader'
import Contactdetails from './Components/Contactdetails'

const Page = () => {
  return (
    <div>
      <Contactheader/>
      <Contactpage/>
      <Contactdetails/>

    </div>
  )
}

export default Page