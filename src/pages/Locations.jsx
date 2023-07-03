import React from 'react'
import LocationsHeader from '../components/locationscomponents/LocationsHeader'
import SignUp from '../components/homeComponents/SignUp'
import CityList from '../components/locationscomponents/CityList'

const Locations = () => {
    return (
        <div>
            <header>
            <LocationsHeader />
            </header>
            <main>
                <CityList />
                <SignUp />
            </main>
        </div>
    )
}

export default Locations