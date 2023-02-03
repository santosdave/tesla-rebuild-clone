import React from 'react'
import TopSection from './TopSection'

type Props = {}

export default function SemiContent({ }: Props) {
    return (
        <div className='h-screen snap-y  snap-proximity'>
            <TopSection
                title="Semi"
                description=""
                backgroundImage="https://tesla-cdn.thron.com/delivery/public/image/tesla/ebd875c1-3960-4782-945e-a5e7409b920b/bvlatuR/std/2880x1800/Semi-Performance-Desktop-Global"
                DownArrows="https://drive.google.com/uc?id=15i5Os5GL77AVoRR1uD9MNbF6aIWDDgkc"
                cargoSpace={'dfddfd'}
                range={'396 mi'}
                launchSpeed={'1.99'}
                speed={'200 mph'}
                quarterMile={'9.9 s'}
                power={"1,020 hp"}
                dualMotor={'df  '}
            />
        </div>
    )
}