import React from 'react'
import './vulnerbility-item.css'

import vulnerbilityImage from '../../assets/img/vulnerbility-item-img.jpg'
import fixImage from "../../assets/img/fix.png"

const VulnerbilityItem = () => {
  return (
    <section className="vulnerbility-item_section">
      <div className="container">
        <div className="vulnerbility_item">
          <div className="vulnerbility-item_row">
            <div className="vulnerbility-item_img">
              <img src={vulnerbilityImage} alt="" />
            </div>

            <div className="vulnerbillity-item_content">
              <h2>CVE-2021-44228</h2>
              <h4>Lorem ipsum dolor sit amet ipsum dolor sit amet</h4>
            </div>

            <div className="vulnerbility_suggest">
              <img src={fixImage} alt="" />
              <p>Suggest a fix</p>
            </div>
          </div>
        </div>
        <ul className="vulnerbility_item-tags">
          <li><b>CVSS</b> <span className="vulnerbility_severity">10</span>  </li>
          <li>Published: 12.10.2021</li>
          <li>CWE: 502 (Deserialization of untrusted data)</li>
          <li>NVD</li>
        </ul>
      </div>
    </section>
  )
}

export default VulnerbilityItem