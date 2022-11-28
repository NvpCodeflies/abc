import React from 'react'
import SearchIcon from '../Icons/SearchIcon'

import './vulnerbilityHead.css'

const VulnerbilityHead = () => {
    return (
        <section className="vulnerbility-head_section">
            <div className="container">
                <div className="vulnerbility-head_row">
                    <div className="vulnerbility-head_left">
                        <h5>Remedy Cloud</h5>
                    </div>
                    <div className="vulnerbility_head-right">
                        <div className="search_bar">
                            <SearchIcon />
                            <input type="text" placeholder="Search for any CVE" />
                            <button className="theme_btn theme_btn-primary search_btn"><SearchIcon /> Search</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default VulnerbilityHead