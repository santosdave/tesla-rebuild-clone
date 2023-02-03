import React from 'react'
import { motion } from 'framer-motion'
type Props = {
    title: string,
    description: string,
    backgroundImage: string,
    DownArrows: string,
}

export default function TopSection({ title, description, backgroundImage, DownArrows }: Props) {
    return (
        <div className='w-screen h-screen snap-center  items-center justify-center'>
            <img className='object-cover h-[100vh]  w-screen absolute -z-10' src={backgroundImage} />
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ ease: [0.17, 0.67, 0.83, 0.67], duration: 1.5 }}
            >
                <div className='pt-24 text-center text-gray-900 '>
                    <h1 className='text-xl font-medium  md:text-3xl lg:text-5xl italic'>{title}</h1>
                    <p className='text-lg'>{description}</p>
                </div>
            </motion.div>
            <div className='flex flex-col md:flex-row pt-60  md:pt-80  items-center justify-center space-y-4 md:space-y-0 md:space-x-6'>
                <div className='text-white border-4 rounded-md p-2 w-[200px] text-center text-base font-bold'>
                    Order Now
                </div>
            </div>
        </div>
    )
}