import React from 'react'
import AboutHeader from '../components/aboutcomponents/AboutHeader'
import Mobility from '../components/aboutcomponents/Mobility'
import Values from '../components/aboutcomponents/Values'
import Faqs from '../components/aboutcomponents/Faqs'
import SignUp from '../components/homeComponents/SignUp'

const About = () => {
    return (
        <div>
            <header>
            <AboutHeader />
            </header>
            <main>
                <Mobility />
                <Values />
                <Faqs />
                <SignUp />
            </main>
        </div>
    )
}

export default About