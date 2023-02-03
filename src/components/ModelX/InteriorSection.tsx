import React from 'react'
import { motion } from 'framer-motion'
type Props = {
    title: string,
    description: string,
    backgroundImage: string,
    DownArrows: string,
}

export default function InteriorSection({ title, description, backgroundImage, DownArrows }: Props) {
    return (
        <div className='mt-8 md:mt-0  w-screen h-screen snap-center  items-center justify-center'>
            <img className='object-cover h-[100vh]  w-screen absolute -z-10' src={backgroundImage} />
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className=""
                transition={{ ease: [0.17, 0.67, 0.83, 0.67], duration: 2 }}
            >
                <div className='pt-24 text-center text-white bg-gradient-to-r from-black to-zinc-900 opacity-90 shadow-2xl'>
                    <h1 className='text-xl py-3 font-medium  md:text-2xl lg:text-4xl'>{title}</h1>
                    <p className='text-lg'>{description}</p>
                </div>
            </motion.div>
        </div>
    )
}