import React from 'react'
import { motion } from 'framer-motion'
type Props = {
    title: string,
    description: string,
    backgroundImage: string,
    DownArrows: string,
    cargoSpace: string,
    range: string,
    launchSpeed: string,
    speed: string,
    quarterMile: string,
    power: string,
    dualMotor: string,
}

export default function TopSection({ title, description, backgroundImage, DownArrows, cargoSpace, range, launchSpeed, speed, quarterMile, power, dualMotor }: Props) {
    return (
        <div className='w-screen h-screen snap-center  items-center justify-center'>
            
            <img className='object-cover h-[100vh]  w-screen absolute -z-10' src={backgroundImage} />

            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ ease: [0.17, 0.67, 0.83, 0.67], duration: 1.5 }}
            >
                <div className='pt-24 text-center text-gray-900 '>
                    <h1 className='text-xl font-medium  md:text-3xl lg:text-5xl'>{title}</h1>
                    <p className='text-lg'>{description}</p>
                </div>
            </motion.div>
            <div className='flex flex-col md:flex-row pt-60  md:pt-80  items-center justify-center space-y-4 md:space-y-0 md:space-x-6'>
                <div className='flex  items-center justify-center space-x-4 md:space-x-8 text-white'>
                    {cargoSpace &&
                        <div className='flex flex-col items-center text-center '>
                            <span className='text-2xl md:text-3xl font-bold'>
                                {cargoSpace}
                            </span>
                            <span className='text-sm'>
                                Cargo Space
                            </span>
                        </div>
                    }
                    {range &&
                        <div className='flex flex-col items-center text-center '>
                            <span className='text-2xl md:text-3xl font-bold'>
                                {range}
                            </span>
                            <span className='text-sm'>
                                Range (EPA est.)
                            </span>

                        </div>
                    }
                    {launchSpeed &&
                        <div className='flex flex-col items-center text-center '>
                            <span className='text-2xl md:text-3xl font-bold'>
                                {launchSpeed}
                            </span>
                            <span className='text-sm'>
                                0-60 mph*
                            </span>

                        </div>
                    }
                    {speed &&
                        <div className='flex flex-col items-center text-center '>
                            <span className='text-2xl md:text-3xl font-bold'>
                                {speed}
                            </span>
                            <span className='text-sm'>
                                Top Speed†
                            </span>

                        </div>
                    }
                    {quarterMile &&
                        <div className='flex flex-col items-center text-center '>
                            <span className='text-2xl md:text-3xl font-bold'>
                                {quarterMile}
                            </span>
                            <span className='text-sm'>
                                1/4 Mile
                            </span>
                        </div>
                    }
                    {power &&
                        <div className='flex flex-col items-center text-center '>
                             <span className='text-2xl md:text-3xl font-bold'>
                                {power}
                            </span>
                            <span className='text-sm'>
                                Peak Power
                            </span>

                        </div>
                    }
                    {dualMotor &&
                        <div className='flex flex-col items-center text-center '>
                             <span className='text-2xl md:text-3xl font-bold'>
                                {dualMotor}
                            </span>
                            <span className='text-sm'>
                                Dual Motor
                            </span>
                        </div>
                    }
                </div>

                <div className='text-white border-4 rounded-md p-2 w-[200px] text-center text-base font-bold'>
                    Order Now
                </div>
            </div>
        </div>
    )
}