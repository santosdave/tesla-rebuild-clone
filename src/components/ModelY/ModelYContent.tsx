import React from 'react'
import InteriorSection from './InteriorSection'
import TopSection from './TopSection'

type Props = {}

export default function ModelYContent({ }: Props) {
  return (
    <div className='h-screen snap-y  snap-proximity'>
      <TopSection
        title="Model Y"
        description="Schedule a Demo Drive"
        backgroundImage="https://tesla-cdn.thron.com/delivery/public/image/tesla/91abd4c7-32a1-41cc-ade5-b64774dbea61/bvlatuR/std/2880x1800/Model-Y-Main-Hero-Desktop-Global"
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
        backgroundImage="https://tesla-cdn.thron.com/delivery/public/image/tesla/9a77958a-146d-40de-8a5f-0ba8af777fdf/bvlatuR/std/2560x1440/Model-3-Interior-Hero-Desktop-LHD"
        DownArrows="https://drive.google.com/uc?id=15i5Os5GL77AVoRR1uD9MNbF6aIWDDgkc"
      />

    </div>
  )
}