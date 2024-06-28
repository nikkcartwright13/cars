"use client";
import { CarProps } from '@/types';
import React, { useState } from 'react';
import Image from 'next/image';
import { Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

interface CarDetailsProps {
    isOpen: boolean;
    closeModal: () => void;
    car: CarProps;
}

const CarDetails = ({ isOpen, closeModal, car }: CarDetailsProps) => {
    const [loading, setLoading] = useState(true);

    const whatsappLink = `https://Wa.me/+995577773385?text=I'm%20interested%20in%20the%20${car.make}%20${car.model}`;

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    const handleImageLoad = () => {
        setLoading(false);
    };

    return (
        <Transition appear show={isOpen} as={Fragment}>
            <Dialog as="div" className="relative z-10" onClose={closeModal}>
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-black bg-opacity-25" />
                </Transition.Child>
                <div className="fixed inset-0 overflow-y-auto">
                    <div className="flex min-h-full items-center justify-center p-4 text-center">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 scale-95"
                            enterTo="opacity-100 scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 scale-100"
                            leaveTo="opacity-0 scale-95"
                        >
                            <Dialog.Panel className="relative w-full max-w-lg max-h-[90vh] overflow-y-auto transform rounded-2xl bg-white p-6 text-left shadow-xsl transition-all flex flex-col gap-5">
                                <button
                                    type="button"
                                    onClick={closeModal}
                                    className="absolute top-2 right-2 z-10 w-fit p-2 bg-primary-blue-100 rounded-full"
                                >
                                    <Image src="/close.svg" alt="close" width={20} height={20} className="object-contain" />
                                </button>

                                <div className="flex-1 flex flex-col gap-3">
                                    <Slider {...settings}>
                                        {car.gallery.map((image, index) => (
                                            <div key={index} className="relative w-full h-60 bg-pattern bg-cover bg-center rounded-lg">
                                                {loading && <div className="absolute inset-0 flex items-center justify-center bg-gray-200"><span>Loading...</span></div>}
                                                <Image src={image} alt={`car model ${index}`} fill priority className="object-contain" onLoadingComplete={handleImageLoad} />
                                            </div>
                                        ))}
                                    </Slider>
                                </div>
                                <div className="flex-1 flex flex-col gap-2">
                                    <h2 className="font-semibold text-xl capitalize">
                                        {car.make} {car.model}
                                    </h2>
                                    <div className="mt-3 flex flex-wrap gap-4">
                                        {Object.entries(car).slice(0, 10).map(([key, value]) => (
                                            <div className="flex justify-between gap-5 w-full text-right" key={key}>
                                                <h5 className="text-grey capitalize">{key.split('_').join(' ')}</h5>
                                                <p className="text-black-100 ">{value}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div>
                                   
                                    <button
                                        className="mt-3 w-full bg-blue-500 text-white py-4 px-8 rounded"
                                        onClick={() => window.open('https://maps.app.goo.gl/LvGEttW7uEhoY6GT6', '_blank')}
                                    >
                                        View on Map
                                    </button>
                                    <button
                                        className="mt-3 w-full bg-green-500 text-white py-4 px-8 rounded"
                                        onClick={() => window.open(whatsappLink, '_blank')}
                                    >
                                        Contact us on WhatsApp
                                    </button>
                                    <button
                                        className="mt-3 w-full bg-red-500 text-white py-4 px-8 rounded"
                                        onClick={() => window.open(`tel:+995577773385`, '_self')}
                                    >
                                        Call Us
                                    </button>
                                </div>
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition>
    );
};

export default CarDetails;