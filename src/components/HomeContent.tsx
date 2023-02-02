import React from 'react'
import HomeSection from './HomeSection'

type Props = {}

export default function HomeContent({ }: Props) {
    return (
        <div className='h-screen snap-y  snap-proximity'>
            <HomeSection
                title="Model S"
                description="Order Online for Touchless Delivery"
                backgroundImage="https://drive.google.com/uc?id=1t03o-AW2HJsMSsSW6UDaaFkoWtzinsyu"
                leftButtonText="Customer Order"
                rightButtonText="Demo Drive"
                DownArrows="https://drive.google.com/uc?id=15i5Os5GL77AVoRR1uD9MNbF6aIWDDgkc"
            />
            <HomeSection
                title="Model 3"
                description="Order Online for Touchless Delivery"
                backgroundImage="https://drive.google.com/uc?id=1T-9meSoh1Lg1vP30TdClvYO0ks3gtUYP"
                leftButtonText="Customer Order"
                rightButtonText="Demo Drive"
                DownArrows="https://drive.google.com/uc?id=15i5Os5GL77AVoRR1uD9MNbF6aIWDDgkc"
            />
            <HomeSection
                title="Model X"
                description="Order Online for Touchless Delivery"
                backgroundImage="https://drive.google.com/uc?id=1k5fGaYFRNVSnLGlOcNvQmi-vOe8GNV86"
                leftButtonText="Customer Order"
                rightButtonText="Demo Drive"
                DownArrows="https://drive.google.com/uc?id=15i5Os5GL77AVoRR1uD9MNbF6aIWDDgkc"
            />
            <HomeSection
                title="Model Y"
                description="Order Online for Touchless Delivery"
                backgroundImage="https://drive.google.com/uc?id=1C3PKeQKoOmCRPyELeDCuZc2lO2AYKaXH"
                leftButtonText="Customer Order"
                rightButtonText="Demo Drive"
                DownArrows="https://drive.google.com/uc?id=15i5Os5GL77AVoRR1uD9MNbF6aIWDDgkc"
            />
            <HomeSection
                title="Solar Panels"
                description="Lowest Cost Solar Panels in America"
                backgroundImage="https://drive.google.com/uc?id=15iQz3dhNOhAYUphMXq_pVFxw69jGRsFX"
                leftButtonText="order now"
                rightButtonText="learn more"
                DownArrows="https://drive.google.com/uc?id=15i5Os5GL77AVoRR1uD9MNbF6aIWDDgkc"
            />
            <HomeSection
                title="Solar Roof"
                description="Solar Roof"
                backgroundImage="https://drive.google.com/uc?id=1V7qJT4iUQXx8xVPhvk1mVNyQghl928Fw"
                leftButtonText="order now"
                rightButtonText="learn more"
                DownArrows="https://drive.google.com/uc?id=15i5Os5GL77AVoRR1uD9MNbF6aIWDDgkc"
            />
            <HomeSection
                title="Accessories"
                description=""
                backgroundImage="https://drive.google.com/uc?id=1_aO8aPvXVtzPfduk4yhJw4sGskc5KmeO"
                leftButtonText="Shop now"
                rightButtonText=""
                DownArrows="https://drive.google.com/uc?id=15i5Os5GL77AVoRR1uD9MNbF6aIWDDgkc"
            />

        </div>
    )
}