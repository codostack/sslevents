import React from 'react'
import Header from './Components/Header'
// import About from './Components/About'; // removed

import Tradepartner from './Components/Tradepartner'
import Ourworks from './Components/Ourworks'
import Ourservices from './Components/Ourservices'
import Keyfeatures from './Components/Keyfeatures'
import Register from './Components/Register'


const Page = () => {
  return (
    <div>
       <Header/>
       <Tradepartner/>
       <Ourservices/>
        <Keyfeatures/>
       <Ourworks/>
       <Register/>
    </div>
  )
}

export default Page