import React from 'react'

export default function Services() {
  return (
    <section className="py-16 px-6 bg-white text-center">
      <h2 className="text-4xl font-bold mb-8">Our Services</h2>
      <div className="grid md:grid-cols-3 gap-8">
        <div className="p-6 bg-blue-50 rounded-lg shadow">
          <img src="https://source.unsplash.com/400x250/?doctor,care" alt="Nursing Care" className="rounded-lg mb-4"/>
          <h3 className="text-xl font-semibold">Nursing Care</h3>
          <p>Professional nursing services tailored to your needs.</p>
        </div>
        <div className="p-6 bg-blue-50 rounded-lg shadow">
          <img src="https://source.unsplash.com/400x250/?elderly,care" alt="Elderly Care" className="rounded-lg mb-4"/>
          <h3 className="text-xl font-semibold">Elderly Care</h3>
          <p>Compassionate support for seniors to maintain independence.</p>
        </div>
        <div className="p-6 bg-blue-50 rounded-lg shadow">
          <img src="https://source.unsplash.com/400x250/?therapy,rehab" alt="Therapy" className="rounded-lg mb-4"/>
          <h3 className="text-xl font-semibold">Therapy</h3>
          <p>Physical and occupational therapy sessions at home.</p>
        </div>
      </div>
    </section>
  )
}
