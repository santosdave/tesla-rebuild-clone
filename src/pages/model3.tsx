import MainHeader from '@/components/MainHeader'
import Head from 'next/head'
import React from 'react'

type Props = {}

export default function model3({ }: Props) {
  return (
    <>
      <Head>
        <title>Model3 - Tesla (KE)</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainHeader />
    </>
  )
}