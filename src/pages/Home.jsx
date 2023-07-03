import React from 'react'
import HeroHome from '../components/homeComponents/HeroHome'
import LocatePickEnjoy from '../components/homeComponents/LocatePickEnjoy'
import UsePayment from '../components/homeComponents/UsePayment'
import SignUp from '../components/homeComponents/SignUp'



const Home = () => {
    return (
        <div>
            <header>
                <HeroHome />
            </header>
            <main>
                <LocatePickEnjoy />
                <UsePayment />
                <SignUp />
            </main>
        </div>
    )
}

export default Home