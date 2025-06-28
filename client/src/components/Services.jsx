import React from 'react'
// import hero_image_book from '../assets/images/book-window1.png'
import hero_image_book from '../assets/images/services_14_detailed-shot.jpg'



const Services = ({ title='Services', subtitle='Services'}) => {
  return (
    <section className="bg-black">
    <div className="max-w-[1056px] mx-auto bg-black p-4">
      <div className="bg-black pt-20 mb-4 grid container grid-cols-1 sm:grid-cols-12 gap-4">
        <div className="bg-black container col-span-7">
          <h1 className="font-extrabold text-white text-left text-4xl md:text-5xl ">
              { title }
          </h1>
          <p className="my-4 text-xl text-white">    
              Kenneth Davis (Works of Art) Ltd provides a range of services for museums, private collections, public art galleries and private clients, including: </p>
          <ul className="my-4 py-1 text-xl text-white">
            <li className="py-1">• Restoration work for silver, porcelain, glass, paintings and frames.</li>
            <li className="py-1">• Valuations for insurance purposes.</li>
            <li className="py-1">• Interior decorating and purchasing advise.</li>
            <li className="py-1">• Purchasing and selling artworks for or on behalf of client.</li>
            <li className="py-1">• Authentication and analysis of antique silver.</li>
            <li className="py-1">• Researching and documenting selected private artworks.</li>
            <li className="py-1">• Sourcing rare artworks through industry experts.</li>
          </ul>
        </div>
        <div className="bg-black rectangle container col-span-5">
          <img className="rounded-lg w-full" src={ hero_image_book }></img>
        </div>
      </div>
    </div>
    </section>
  )
}

export default Services


