import React from 'react'

export default function Testimonials() {
  return (
    <section className="py-16 px-6 bg-white text-center">
      <h2 className="text-4xl font-bold mb-8">What Our Clients Say</h2>
      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        <div className="p-6 bg-blue-50 rounded-lg shadow">
          <p>"The care my mother received was outstanding. The team was kind, patient, and professional."</p>
          <h4 className="mt-4 font-semibold">- Sarah W.</h4>
        </div>
        <div className="p-6 bg-blue-50 rounded-lg shadow">
          <p>"Thanks to their support, my father is comfortable and happy at home. Truly a blessing."</p>
          <h4 className="mt-4 font-semibold">- John M.</h4>
        </div>
      </div>
    </section>
  )
}
