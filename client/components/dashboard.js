import React from 'react'
import { Link } from 'react-router-dom'
import Head from './head'

const Dashboard = () => {   
  return (
    <div>
      <Head title="Hello" />
      <div id="title" className="bg-indigo-800 text-white font-bold rounded-lg border shadow-lg p-10">
        Dashboard
      </div>
      <div>
        <Link to="/dashboard/profile/fe505ea1-786b-4658-b0b4-6fce6879830e">Go To Profile</Link>
      </div>
      <div>
        <Link to="/dashboard/main">Go To Main</Link>
      </div>
    </div>
  )
}

Dashboard.propTypes = {}

export default Dashboard
