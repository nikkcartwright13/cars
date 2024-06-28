"use client"
import React from 'react'

import Image from 'next/image'

const Hero = () => {

    

    return (
        <div className='hero'>
            <div className='flex-1 pt-36 padding-x'>
                <h1 className='hero__title'>
                    Find, book, or rent a car - quickly
                    and easily!
                    - Our location :
                </h1>
                <p className='hero__subtitle'>
                    10 Kote Afkhazi St, Tbilisi
                    Phone:+995577773385
                </p>

                <button
                    className="mt-3 bg-blue-500 text-white py-2 px-5 rounded"
                    onClick={() => window.open('https://maps.app.goo.gl/LvGEttW7uEhoY6GT6', '_blank')}
                >
                    View on Map
                </button>
            </div>
            <div className='hero__image-container'>
                <div className='hero__image'>
                    <Image src="/mitt.png" alt="hero" fill className="object-contain" />
                    <div className='hero__image-overlay'>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero