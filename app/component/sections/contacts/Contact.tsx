'use client';

import ContactHeading from './ContactHeading';
import ContactForm from './ContactForm';
import ContactDivider from './ContactDivider';

const Contact = () => (
  <section
    id="contact"
    className="min-h-screen bg-[#d7d7d7] py-16 px-4 sm:px-8 flex flex-col items-center"
  >
    <div className="max-w-6xl w-full text-center">
      <ContactHeading />
      <ContactDivider />
      <ContactForm />
      <ContactDivider />
    </div>
  </section>
);

export default Contact;
