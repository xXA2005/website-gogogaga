import Head from 'next/head'
import Navbar from '../components/Navbar'
import LeftContacts from '@/components/LeftContacts'
import { motion } from 'framer-motion'
import Middle from '@/components/Middle'
import Xp from '@/components/Xp'
import Projects from '@/components/Projects'
import Archive from '@/components/Archive'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Head>
        <title>Ab5</title>
        <meta property="og:title" content="hot" />
        <meta property="og:description" content="best corad in unviverse" />
        <meta name="theme-color" content="#3f00e4" data-react-helmet="true" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className='w-full h-screen font-sans bg-gradient-to-b from-gray-950 to-gray-800 text-white overflow-x-hidden overflow-y-scroll'>
        <Navbar/>
        <div className='w-full h-[88vh] xl:flex items-center gap-20 justify-between'>
          <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{delay:1.5}} className='hidden xl:inline-flex w-32 h-full fixed left-0 bottom-0'>
            <LeftContacts/>
          </motion.div>
          <div className='h-[88vh] w-full mx-auto p-4'>
            <Middle/>
            <Xp/>
            <Projects/>
            <Archive/>
            <Footer/>
          </div>
        </div>
      </main>
    </>
  )
}