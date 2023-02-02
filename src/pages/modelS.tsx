import MainHeader from '@/components/MainHeader'
import ModelSContent from '@/components/ModelS/ModelSContent'
import Head from 'next/head'
import React from 'react'

type Props = {}

export default function modelS({}: Props) {
  return (
    <>
    <Head>
        <title>ModelS - Tesla (KE)</title>
        <link rel="icon" href="/favicon.ico" />
    </Head>
    <MainHeader/>
    <ModelSContent/>
</>
  )
}