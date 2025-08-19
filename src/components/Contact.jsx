import React from 'react'

export default function Contact() {
  return (
    <section className="py-16 px-6 bg-gray-100 text-center">
      <h2 className="text-4xl font-bold mb-6">Contact Us</h2>
      <form className="max-w-xl mx-auto grid gap-4">
        <input type="text" placeholder="Your Name" className="p-3 border rounded-lg"/>
        <input type="email" placeholder="Your Email" className="p-3 border rounded-lg"/>
        <textarea placeholder="Your Message" className="p-3 border rounded-lg h-32"></textarea>
        <button type="submit" className="bg-blue-600 text-white p-3 rounded-lg">Send Message</button>
      </form>
    </section>
  )
}
