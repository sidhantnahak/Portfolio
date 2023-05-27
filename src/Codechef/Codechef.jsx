import React from 'react'
import './Codechef.css'
import codechef_rating from '../images/codechef_rating.png'
import codechef_rating_graph from '../images/codechef_rating_graph.png'
import codechef_profile from '../images/codechef_profile.png'
import codechef_active_map from '../images/codechef_active_map.png'

const Codechef = () => {
    return (
        <div className="codechef_container">
            <h1>Codechef Statitics 
                And Stats</h1>
                <div className="codechef_up_item">
                    <img style={{borderRight:"none"}} src={codechef_profile} alt="" /><img style={{borderLeft:"none"}} src={codechef_rating} alt="" />
                </div>
                <div className="codechef_down_item">
                    <img src={codechef_active_map} alt="" /><img src={codechef_rating_graph} alt="" />

                </div>
            
        </div>
    )
}

export default Codechef