import React, { useState } from 'react';
import chevron from '../../assets/icons/chevron.svg';

const AccordionItem = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className='bg-Snow py-5 my-1 w-full cursor-pointer hover:bg-LightYellow'>
            <p
                onClick={toggleAccordion}
                className='px-5 flex items-center justify-between font-headings text-lg font-bold text-DarkNavy'
            >
                {question}{' '}
                <img
                    className={`${isOpen ? 'transform rotate-180 duration-300' : 'duration-300'}`}
                    src={chevron}
                    alt="chevronsvg"
                />
            </p>
            {isOpen && (
                <div className='text-DarkNavy '>
                    <p className='leading-7 px-5 my-5'>{answer}</p>
                </div>
            )}
        </div>
    );
};

const Faqs = () => {
    return (
        <div className='flex flex-col justify-center my-20 px-5'>
            <p className='text-DarkNavy font-headings text-4xl my-5 text-center md:text-5xl md:py-20'>FAQs</p>
            <div className='flex flex-col lg:flex-row justify-around'>
                <p className='text-DarkNavy text-center my-5 text-3xl font-headings font-bold md:text-4xl'>How it works</p>
                <div className='flex flex-col lg:w-2/3'>
                <AccordionItem
                    question='How do I download the app?'
                    answer='To download the Scoot app, you can search “Scoot” in both the App and Google Play stores. An even simpler way to do it would be to click the relevant link at the bottom of this page and you’ll be re-directed to the correct page.'
                />
                <AccordionItem
                    question='Can I find a nearby Scoots?'
                    answer="Definitely! Simply open up the app and allow us to find your location while using it. We' ll show you all of the closest Scoots and some extra useful information." />
                <AccordionItem
                    question='Do I need a license to ride?'
                    answer='Yup! We provide information inside the app regarding local laws and the license you need to be able to ride our Scoots.'
                />
                </div>
            </div>

            <div className='flex flex-col lg:flex-row justify-around mt-20'>
                <p className='text-DarkNavy text-center my-5 text-3xl font-headings font-bold md:text-4xl'>Safe driving</p>
                <div className='flex flex-col lg:w-2/3'>
                <AccordionItem
                    question='Should I wear a helmet?'
                    answer='Yes, please do! All cities have different laws. But we strongly strongly strongly recommend 
                    always wearing a helmet regardless of the local laws. We like you and we want you to be as 
                    safe as possible while Scooting.'
                />
                <AccordionItem
                    question='How about the rules & regulations?'
                    answer="Now is not the time to be a rule breaker. Be sure you're complying with all local laws and 
                    regulations. Also, just be a good human being. Be sure not to park your Scoot where it can 
                    block access to buildings or get in people's way." />
                <AccordionItem
                    question='What if I damage my Scoot?'
                    answer="Be sure to read our terms and conditions carefully. Not the most fun job we know but we make 
                    it as clear as possible. There's an option to add insurance for each trip, or you can sign 
                    up for annual insurance if you're a regular Scooter."
                />
                </div>
            </div>
        </div>
    );
};

export default Faqs;
