import CybertruckSection from '@/components/Cybertruck/CybertruckSection'
import MainHeader from '@/components/MainHeader'
import Head from 'next/head'
import React from 'react'

type Props = {}

export default function cybertruck({ }: Props) {
    return (
        <>
            <Head>
                <title>Cybertruck - Tesla (KE)</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <MainHeader/>
            <CybertruckSection/>
        </>
    )
}