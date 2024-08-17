import React from 'react'
import Navigation from './navigation/Navigation'
import ContactHeader from './contactHeader/contactheader'
import ContactForm from './contactForm/contactForm'

const Pr2 = () => {
  return (
    <div>
      <Navigation />
      <main className="main_container">
        <ContactHeader />
        <ContactForm />
      </main>
    </div>
  )
}

export default Pr2
