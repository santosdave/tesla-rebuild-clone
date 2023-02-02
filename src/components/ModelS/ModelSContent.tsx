import React from 'react'
import InteriorSection from './InteriorSection'
import TopSection from './TopSection'

type Props = {
 
}

export default function ModelSContent({ }: Props) {
  return (
    <div className='h-screen snap-y  snap-proximity'>
      <TopSection
        title="Model S"
        description="Plaid"
        backgroundImage="https://tesla-cdn.thron.com/delivery/public/image/tesla/9584e5ae-f8df-4e18-8aa3-c84ce07e1fb2/bvlatuR/std/2880x1800/Model-S-Main-Hero-Desktop-LHD"
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
        backgroundImage="https://tesla-cdn.thron.com/delivery/public/image/tesla/5805821a-f3cd-408d-aa50-53195f08359c/bvlatuR/std/2880x1800/Model-S-Interior-Hero-Desktop-LHD"
        DownArrows="https://drive.google.com/uc?id=15i5Os5GL77AVoRR1uD9MNbF6aIWDDgkc"
      />
    </div>
  )
}