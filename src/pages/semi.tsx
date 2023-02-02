import MainHeader from '@/components/MainHeader'
import Head from 'next/head'
import React from 'react'

type Props = {}

export default function semi({ }: Props) {
    return (
        <>
            <Head>
                <title>Semitruck - Tesla (KE)</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <MainHeader/>
        </>
    )
}