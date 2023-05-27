import React from 'react'
import stats from '../images/github_statitics.png'
import './Stats.css'

const Github = () => {
  return (
    <div className='github_stats_container'>
        <h1>Github Stats</h1>
        <img src={stats} alt="" />
    </div>
  )
}

export default Github