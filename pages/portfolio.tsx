import Contact from '../components/Contact';
import Head from 'next/head'
import Hero from '../components/Hero';
import Projects from '../components/Projects';
import Stack from '../components/Stack';
import Projects2 from '../components/Projects2';
import Stack2 from '../components/Stack2';
import type { NextPage } from 'next'


import { meta } from '../data/config';

const Portfolio: NextPage  = () => {
  return (
    <>
      <Head>
        <title>{meta.title}</title>
      </Head>
      <div className="p-6 lg:p-20 max-w-4xl m-auto w-full">
        <Hero />
        <div className="p-0 space-y-10">
          <Projects />
          <Projects2 />
          <Stack />
          <Stack2 />
          <Contact />

        </div>
      </div>
    </>
  );
}
export default Portfolio;