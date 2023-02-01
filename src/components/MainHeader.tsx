import React, { useEffect, useState } from 'react'
import { HomeIcon } from "@heroicons/react/outline";
import { XCircleIcon } from "@heroicons/react/outline";
import { carTypes } from '@/interface/car-atom';
import { useRecoilState } from 'recoil';
type Props = {}

export default function MainHeader({ }: Props) {
    const [cars, setCars] = useRecoilState(carTypes);
    const [openMenu, setOpenMenu] = useState(false);
    return (
        <div className='flex fixed items-center justify-between top-0 left-0 right-0 z-10 px-5 py-2'>
            <a>
                <img className='object-contain' src='https://drive.google.com/uc?id=1gHqC-87TFqAhzC3iZUgprTxxXo0b-m6L' alt='' />
            </a>
            <div className='hidden  md:flex flex-1 items-center justify-center space-x-6 '>
                {cars.map((car, i) => (
                    <a className='m-3 font-semibold flex-wrap' key={i} href='javascript:void(0)'>{car}</a>
                ))}
                <a className='m-3 font-semibold flex-wrap' href='javascript:void(0)'>Solar Roof</a>
                <a className='m-3 font-semibold flex-wrap' href='javascript:void(0)'>Solar Panels</a>
            </div>
            <div className='flex items-center space-x-4'>
                <a className='m-3 font-semibold flex-wrap' href='javascript:void(0)'>
                    Shop
                </a>
                <a className='m-3 font-semibold flex-wrap' href='javascript:void(0)'>
                    Account
                </a>
                <a className='m-3 font-semibold flex-wrap' href='javascript:void(0)' onClick={() => setOpenMenu(true)}>
                    Menu
                </a>
            </div>
            <div >
                {openMenu &&
                    <div className='fixed top-0 bottom-0 right-0 bg-white w-[250px] z-20 list-none p-5 flex flex-col text-start transition-transform  duration-500'>
                        <div className='flex justify-end'>
                            <XCircleIcon className=" h-8 w-8 text-black cursor-pointer" onClick={() => setOpenMenu(false)} />
                        </div>
                        <ul className='space-y-2 overflow-hidden overflow-y-auto text-gray-700 font-semibold  cursor-pointer'>
                            <li className='pt-2'><a className='' href='javascript:void(0)'></a>Existing Inventory</li>
                            <li className='pt-2'><a href='javascript:void(0)'></a>Used Inventory</li>
                            <li className='pt-2'><a href='javascript:void(0)'></a>Trade-In</li>
                            <li className='pt-2'><a href='javascript:void(0)'></a>Demo Drive</li>
                            <li className='pt-2'><a href='javascript:void(0)'></a>Insurance</li>
                            <li className='pt-2'><a href='javascript:void(0)'></a>Cybertruck</li>
                            <li className='pt-2'><a href='javascript:void(0)'></a>Roadster</li>
                            <li className='pt-2'><a href='javascript:void(0)'></a>Semi</li>
                            <li className='pt-2'><a href='javascript:void(0)'></a>Charging</li>
                            <li className='pt-2'><a href='javascript:void(0)'></a>Powerwall</li>
                            <li className='pt-2'><a href='javascript:void(0)'></a>Commercial Energy</li>
                            <li className='pt-2'><a href='javascript:void(0)'></a>Utilities</li>
                            <li className='pt-2'><a href='javascript:void(0)'></a>Find Us</li>
                            <li className='pt-2'><a href='javascript:void(0)'></a>Support</li>
                            <li className='pt-2'><a href='javascript:void(0)'></a>Investor Relations</li>
                        </ul>
                    </div>
                }
            </div>

        </div>
    )
}