import MainHeader from '@/components/MainHeader'
import Head from 'next/head'
import React from 'react'

type Props = {}

export default function solarpanel({ }: Props) {
    return (
        <>
            <Head>
                <title>Solar Panel - Tesla (KE)</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <MainHeader />
        </>
    )
}