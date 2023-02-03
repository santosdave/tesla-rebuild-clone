import React from 'react'
import InteriorSection from './InteriorSection'
import TopSection from './TopSection'

type Props = {}

export default function ModelXContent({}: Props) {
  return (
    <div className='h-screen snap-y  snap-proximity'>
      <TopSection
        title="Model X"
        description="Plaid"
        backgroundImage="https://tesla-cdn.thron.com/delivery/public/image/tesla/37612e96-a8a7-46ea-9847-4fff683483b0/bvlatuR/std/2880x1800/Model-X-Main-Hero-Desktop-LHD"
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
        backgroundImage="https://tesla-cdn.thron.com/delivery/public/image/tesla/94cd5b9b-d8ab-4353-af9a-42c4ac941bf2/bvlatuR/std/2880x1800/Model-X-Interior-Hero-Desktop-LHD"
        DownArrows="https://drive.google.com/uc?id=15i5Os5GL77AVoRR1uD9MNbF6aIWDDgkc"
      />
    </div>
  )
}