import React from 'react'
import Aboutheader from './Components/Aboutheader'
import Whychooseus from './Components/Whychooseus'
import Ourvisonmission from './Components/Ourvisonmission'
import Whoweare from './Components/Whoweare'
import Whatwedo from './Components/Whatwedo'
import Aboutimage from './Components/Aboutimage'
import Ourprogress from './Components/Ourprogress'

const Page = () => {
  return (
    <div>
      <Aboutheader/>
      <Aboutimage/>
      <Whoweare/>
      <Whychooseus/>
      <Ourvisonmission/>
      <Ourprogress/>
      <Whatwedo/>
    </div>
  )
}

export default Page