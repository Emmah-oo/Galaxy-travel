import React from 'react'
import Hero from '../Components/Hero'

const Pricing = () => {
    const Features = [
        {
            name: "-Basic-",
            line: "_",
            price: "0.25 BTC",
            days: "3 Days",
            view: "-Views-",
            featured: "-Featured",
            private: "-Private Quarters-",
            reserve: "Book"
        },
        {
            name: "-Suite-",
            line: "_",
            price: "0.5 BTC",
            days: "6 Days",
            view: "-Views-",
            featured: "-Featured",
            private: "-Private Quarters-",
            reserve: "Book"
        },
        {
            name: "-Executive-",
            line: "_",
            price: "1 BTC",
            days: "10 Days",
            view: "-Views-",
            featured: "-Featured",
            private: "-Private Quarters-",
            reserve: "Book"
        }
    ]
  return (
    <div>
        <Hero heading='PRICING' desc='Choose your trip'/>
        <div className='bg-black grid gap-10 py-10 px-10 md:grid-cols-3'>
            {Features.map((feature, i) => (
                <div key={i} className="text-white w-full text-center border p-10 flex flex-col gap-5">
                    <h3 className='text-2xl font-bold'>{feature.name}</h3>
                    <p className='text-3xl mb-5'>{feature.line}</p>
                    <h1 className='text-3xl font-bold'>{feature.price}</h1>
                    <h2>{feature.days}</h2>
                    <h2>{feature.view}</h2>
                    <h2>{feature.featured}</h2>
                    <h2>{feature.private}</h2>
                    <button className='bg-transparent border py-3 px-4'>{feature.reserve}</button>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Pricing