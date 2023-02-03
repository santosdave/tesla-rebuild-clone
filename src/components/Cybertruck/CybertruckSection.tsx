import React from 'react'
import InteriorSection from './InteriorSection'
import TopSection from './TopSection'

type Props = {}

export default function CybertruckSection({ }: Props) {
    return (
        <div className='h-screen snap-y  snap-proximity'>
            <TopSection
                title="CYBERTRUCK"
                description="BETTER UTILITY THAN A TRUCK WITH MORE PERFORMANCE THAN A SPORTS CAR"
                backgroundImage="https://tesla-cdn.thron.com/delivery/public/image/tesla/0f22af4d-15e0-452d-ba66-1359490b4a0b/bvlatuR/std/2880x1800/Cybertruck-Hero-Desktop"
                DownArrows="https://drive.google.com/uc?id=15i5Os5GL77AVoRR1uD9MNbF6aIWDDgkc"
            />
            <InteriorSection
                title="Design of the Future"
                description=""
                backgroundImage="https://www.tesla.com/xNVh4yUEc3B9/02_Desktop.jpg"
                DownArrows="https://drive.google.com/uc?id=15i5Os5GL77AVoRR1uD9MNbF6aIWDDgkc"
            />
        </div>
    )
}