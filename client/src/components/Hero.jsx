import React from 'react'
// import hero_image_book from '../assets/images/book-window1.png'
import hero_image from '../assets/images/home_1_1kd-33-ed.jpg'

const Hero = ({ title='Kenneth Davis Ltd.', subtitle='Antique Silver & Works of Art'}) => {
  return (
    <section className="bg-black">
    <div className="max-w-[1056px] mx-auto bg-black p-4">
      <div className="bg-black pt-20 mb-4 grid container grid-cols-1 sm:grid-cols-12 gap-4">
        <div className="bg-black container sm:col-span-6">
          <h1 className="font-extrabold text-white text-left text-5xl md:text-6xl">
              { title }
          </h1>
          <p className="my-4 text-xl text-white">    
              { subtitle }
          </p>
        </div>
        <div className="bg-black rectangle container sm:col-span-6">
          <img className="rounded-lg" src={ hero_image }></img>
        </div>
      </div>
    </div>
    </section>
  )
}

export default Hero


