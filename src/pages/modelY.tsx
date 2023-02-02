import MainHeader from '@/components/MainHeader'
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
        </>
    )
}