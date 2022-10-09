import '../MainDash/MainDash.css'
import React from 'react'
import Cards from '../Cards/Cards'
import ShowTable from '../Table/Table'


const MainDash = () => {
  return (
    <div className='MainDash'>
        <h1>Dashboard</h1>
        <Cards/>
        <ShowTable/>
       
    </div>
  )
}

export default MainDash