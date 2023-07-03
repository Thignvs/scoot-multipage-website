import React from 'react'
import appStore from '../../assets/icons/app-store.svg'
import googlePlay from '../../assets/icons/google-play.svg'

const SignUp = () => {
    return (
        <div className='bg-DarkNavy py-20 px-5 bg-bg-pattern-semicircle bg-repeat-x bg-[left_-600px_bottom] md:bg-no-repeat md:bg-bottom lg:flex justify-around items-center lg:bg-right-bottom'>
            <p className='text-Snow font-headings text-3xl text-center md:text-5xl'>Sign up and Scoot off today</p>
            <div className='mt-10 flex justify-center align-center gap-3 font-headings'>
                <img className='cursor-pointer' src={appStore} alt="appstorebadge" />
                <img className='cursor-pointer' src={googlePlay} alt="googleplaybadge" />
            </div>
        </div>
    )
}

export default SignUp