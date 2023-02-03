import MainHeader from '@/components/MainHeader'
import Model3Content from '@/components/Model3/Model3Content'
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
      <Model3Content/>
    </>
  )
}