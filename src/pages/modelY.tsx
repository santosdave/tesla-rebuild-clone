import MainHeader from '@/components/MainHeader'
import ModelYContent from '@/components/ModelY/ModelYContent'
import Head from 'next/head'
import React from 'react'

type Props = {}

export default function modelY({ }: Props) {
    return (
        <>
            <Head>
                <title>ModelY- Tesla (KE)</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <MainHeader/>
            <ModelYContent/>
        </>
    )
}