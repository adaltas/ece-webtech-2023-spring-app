import Head from 'next/head'
import Image from 'next/image'
import Layout from '../components/Layout.js'

export default function ContactUs() {
  return (
    <Layout>
      <Head>
        <title>WebTech - About us</title>
        <meta name="description" content="Don't be shy, drop us an email" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>
        About us
      </h1>
      <p>
        Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Cras sit amet enim sit amet nibh auctor interdum sit amet sed lacus. Nam consequat hendrerit lobortis. Mauris nec facilisis turpis. Nullam neque sem, ultricies in facilisis nec, rhoncus et nibh. Curabitur et risus in risus maximus scelerisque non at justo. Nullam blandit massa id justo elementum rutrum. Phasellus id facilisis lacus, vel dignissim magna. Duis at lacus a mi varius lacinia. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nunc ultrices justo bibendum aliquam tempus. Vivamus consequat metus eros, sit amet malesuada mi placerat a. Vivamus efficitur faucibus odio vel vulputate. Suspendisse eros dolor, pellentesque ac aliquam vel, rutrum eu ipsum. Donec quis nunc felis. 
      </p>
    </Layout>
  )
}
