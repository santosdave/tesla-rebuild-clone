import React from 'react'
import InteriorSection from './InteriorSection'
import TopSection from './TopSection'

type Props = {}

export default function RoadsterContent({ }: Props) {
    return (
        <div className='h-screen snap-y  snap-proximity'>
      <TopSection
        title="Roadster"
        description=""
        backgroundImage="https://tesla-cdn.thron.com/delivery/public/image/tesla/d75beae1-60b5-4bdd-b08a-ddb865f01ed8/bvlatuR/std/2878x1800/roadster-hero-desktop"
        DownArrows="https://drive.google.com/uc?id=15i5Os5GL77AVoRR1uD9MNbF6aIWDDgkc"
        cargoSpace={'dfddfd'}
        range={'396 mi'}
        launchSpeed={'1.99'}
        speed={'200 mph'}
        quarterMile={'9.9 s'}
        power={"1,020 hp"}
        dualMotor={'df  '}
      />

      <InteriorSection
        title="Interior of the Future"
        description=""
        backgroundImage="https://tesla-cdn.thron.com/delivery/public/image/tesla/f6812228-7008-4f30-9cad-1e15731bb086/bvlatuR/std/2880x1620/roadster-interior-desktop"
        DownArrows="https://drive.google.com/uc?id=15i5Os5GL77AVoRR1uD9MNbF6aIWDDgkc"
      />

    </div>
    )
}