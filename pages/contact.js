import { Fragment } from 'react'
import Head from 'next/head'

import ContactForm from '../components/contact/contact-form'

function ContactPage() {
  console.log({
    username: process.env.MONGODB_USERNAME,
    password: process.env.MONGODB_PASSWORD,
    clustername: process.env.MONGODB_CLUSTERNAME,
    env: process.env.NODE_ENV,
  })
  return (
    <Fragment>
      <Head>
        <title>Contact Me</title>
        <meta name="description" content="Send me your messages!" />
      </Head>
      <ContactForm />
    </Fragment>
  )
}

export default ContactPage
