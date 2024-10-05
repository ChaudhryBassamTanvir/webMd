import React from 'react'
import PowerToThePatients from '../components/HospitalComponents/PowerToThePatients'
import HospitalTags from '../components/HospitalComponents/HospitalTags'
import HopitalHeroSection from '../components/HospitalComponents/HopitalHeroSection'
import SpecialtyAwardsSection from '../components/HospitalComponents/SpecialtyAwardsSection'
import AwardsByClassSection from '../components/HospitalComponents/AwardsByClassSection'
import Footer from '../components/Footer'
import ProviderList from '../components/HospitalComponents/ProviderList'
import FindDoc from '../components/HospitalComponents/FindDoc'
import TreatmentAwards from '../components/HospitalComponents/TreatmentAwards'
import TopBar from '../components/doctor/TopBar'

function BestHopital() {
    return (
    <>
  <div className='bg-[#05284A]'>
        <TopBar/>
    </div>
        <HopitalHeroSection/>
        <HospitalTags/>
        <PowerToThePatients/>
        <SpecialtyAwardsSection/>
        <TreatmentAwards/>
        <AwardsByClassSection/>
        <FindDoc/>
        <ProviderList/>
        
    </>
  )
}

export default BestHopital