import React from 'react'
import Breadcrumb from '../components/breadcrumb/Breadcrumb'
import VulnerbilityItem from '../components/vulnerbility/VulnerbilityItem'
import VulnerbilityHead from '../components/vulnerbilityHead/VulnerbilityHead'

const Vulnerbility = () => {
  return (
    <>
      <VulnerbilityHead />
      <Breadcrumb />
      <VulnerbilityItem />
    </>
  )
}


export default Vulnerbility