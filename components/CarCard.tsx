"use client";
import { useState } from 'react';
import Image from 'next/image';
import { CarProps } from '@/types';
import { CustomButton, CarDetails } from '.';

import styles from './CarCard.module.css';

interface CarCardProps {
  car: CarProps;
}

const CarCard = ({ car }: CarCardProps) => {
  const { L100km,  make, model, transmission, drive, image , Price } = car;

  const [isOpen, setIsOpen] = useState(false);
  //const carRent = calculateCarRent(kml, year);

  return (
    <div className={`${styles['car-card-out']}`}>
      <div className="car-card group">
        <div className="car-card__content">
          <h2 className="car-card__content-title">
            {make} {model}
          </h2>
        </div>
        <p className='flex mt-6 text-[32px] leading-[38px] font-extrabold'>
          <span className='self-start text-[14px] leading-[17px] font-semibold'>$</span>
          {/* {carRent} */}
          {Price}
          <span className='self-end text-[14px] leading-[17px] font-medium'>/day</span>
        </p>
        <div className='relative w-full h-60 my-3'>
          <Image src={image} alt='car model' layout="fill" priority className='object-contain' />
        </div>
        <div className='relative flex w-full mt-2'>
          <div className='flex group-hover:invisible w-full justify-between text-grey'>
            <div className='flex flex-col justify-center items-center gap-2'>
              <Image src='/steering-wheel.svg' width={20} height={20} alt='steering wheel' />
              <p className='text-[14px] leading-[17px]'>
                {transmission === "a" ? "Automatic" : "Automatic"}
              </p>
            </div>
            <div className="car-card__icon">
              <Image src="/tire.svg" width={20} height={20} alt="tire" />
              <p className="car-card__icon-text">{drive.toUpperCase()}</p>
            </div>
            <div className="car-card__icon">
              <Image src="/gas.svg" width={20} height={20} alt="gas" />
              <p className="car-card__icon-text">{L100km}  L/100km</p>
            </div>
          </div>
          <div className='car-card__btn-container'>
            <CustomButton
              title='View More'
              containerStyles='w-full py-[16px] rounded-full bg-primary-blue'
              textStyles='text-white text-[14px] leading-[17px] font-bold'
              rightIcon='/right-arrow.svg'
              handleClick={() => setIsOpen(true)}
            />
          </div>
        </div>
        <CarDetails isOpen={isOpen} closeModal={() => setIsOpen(false)} car={car} />
      </div>
    </div>
  );
};

export default CarCard;
