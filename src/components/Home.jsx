import React from 'react'

export default function Home() {
  return (
    <section className="h-screen flex flex-col items-center justify-center bg-blue-100 text-center">
      <h1 className="text-5xl font-bold mb-4">Compassionate Home Health Care</h1>
      <p className="text-lg max-w-xl">Providing quality care and comfort to your loved ones in the place they feel most at home.</p>
      <img src="https://source.unsplash.com/800x400/?healthcare,nursing" alt="Home Health Care" className="rounded-lg mt-6 shadow-lg"/>
    </section>
  )
}
