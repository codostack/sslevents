import React from 'react'
import Ourworksheader from './Components/Ourworksheader'
import Ourworksonly from './Components/Ourworksonly'
import Ourworcontent from './Components/Ourworcontent'
import Workanimation from './Components/Workanimation'
import Ourcontent1 from './Ourcontent1'
import Faqcontent from './Components/Faqcontent'

const Page = () => {
  return (
    <div>
      <Ourworksheader/>
      <Ourworcontent/>
      <Workanimation/>
      <Ourcontent1/>
      <Ourworksonly/>
      <Faqcontent/>
    </div>
  )
}

export default Page