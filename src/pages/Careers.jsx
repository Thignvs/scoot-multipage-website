import React from 'react'
import CareersHeader from '../components/careerscomponents/CareersHeader'
import CareToJoin from '../components/careerscomponents/CareToJoin'
import WhyJoin from '../components/careerscomponents/WhyJoin'
import Jobs from '../components/careerscomponents/Jobs'
import SignUp from '../components/homeComponents/SignUp'


const Careers = () => {
    return (
        <div>
            <header>
                <CareersHeader />
            </header>
            <main>
                <CareToJoin />
                <WhyJoin />
                <Jobs />
                <SignUp />
            </main>
        </div>
    )
}

export default Careers