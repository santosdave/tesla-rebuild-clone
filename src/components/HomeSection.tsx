import React from 'react'
import { motion } from 'framer-motion'
type Props = {
    title: string,
    description: string,
    backgroundImage: string,
    leftButtonText: string,
    rightButtonText: string,
    DownArrows: string,
}

export default function HomeSection({ title, description, backgroundImage, leftButtonText, rightButtonText, DownArrows }: Props) {
    return (
        <div className='w-screen h-screen snap-center  items-center justify-center'>
            <img className='object-cover h-[100vh]  w-screen absolute -z-10' src={backgroundImage} />
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}

                transition={{ ease: [0.17, 0.67, 0.83, 0.67], duration: 1.5 }}
            >
                <div className='pt-24 text-center text-gray-900 '>
                    <h1 className='text-xl font-bold md:text-3xl lg:text-4xl'>{title}</h1>
                    <p>{description}</p>
                </div>
            </motion.div>

            <div>
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}

                    transition={{ ease: [0.17, 0.67, 0.83, 0.67], duration: 1.5 }}
                >
                    <div className='flex flex-col md:flex-row  pt-72 items-center justify-center space-y-4 md:space-y-0 md:space-x-4'>
                        {leftButtonText &&
                            <div className='h-[40px] w-[256px] text-lg text-center opacity-80 text-white bg-slate-900 items-center rounded-xl'>
                                {leftButtonText}
                            </div>
                        }

                        {rightButtonText &&
                            <div className='h-[40px] w-[256px] text-lg text-center opacity-90  text-gray-800 bg-gray-300 items-center rounded-xl'>
                                {rightButtonText}
                            </div>
                        }

                    </div>
                </motion.div>
            </div>
        </div>
    )
}