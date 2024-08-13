'use client'; 

import { SocialIcon } from 'react-social-icons'

/** Footer Component */
function Footer() {

    return (
        <>
        <hr className='text-gray-500 mx-10 lg:mx-20 my-5' />
        <div className='mx-10 lg:mx-20'>
            <div className='flex flex-col md:flex-row justify-between items-center w-full space-y-5 md:space-y-0'>
                <h1 className="font-bold">© Amol Budhiraja</h1>
                <div className='space-x-0 space-y-3 md:space-y-0 md:space-x-3 flex flex-col md:flex-row'>
                    <div className='flex flex-row space-x-5 md:space-x-3'>
                        <SocialIcon url="https://www.instagram.com/amol.budhiraja/" />
                        <SocialIcon url="https://twitter.com/amol_budhiraja" />
                        <SocialIcon url="https://github.com/amolbudhiraja" />
                    </div>
                    <div className='flex flex-row space-x-5 md:space-x-3'>
                        <SocialIcon url="https://www.linkedin.com/in/amolbudhiraja/" />
                        <SocialIcon url="mailto:abudhiraja@live.com" />
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}


export default Footer;