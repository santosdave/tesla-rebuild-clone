import MainHeader from '@/components/MainHeader'
import Head from 'next/head'
import React from 'react'

type Props = {}

export default function modelX({ }: Props) {
    return (
        <>
            <Head>
                <title>ModelX - Tesla (KE)</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <MainHeader />
        </>
    )
}