import MainHeader from '@/components/MainHeader'
import RoadsterContent from '@/components/Roadster/RoadsterContent'
import Head from 'next/head'
import React from 'react'

type Props = {}

export default function roadster({ }: Props) {
    return (
        <>
            <Head>
                <title>Roadster - Tesla (KE)</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <MainHeader/>
            <RoadsterContent/>
        </>
    )
}