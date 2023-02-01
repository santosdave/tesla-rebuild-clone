import HomeContent from '@/components/HomeContent'
import MainHeader from '@/components/MainHeader'
import Head from 'next/head'
export default function Home() {
  return (
    <div className=''>
       <Head>
        <title>Tesla Rebuild - Kenya</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
     <MainHeader/>
     <HomeContent/>
     
    </div>
  )
}
