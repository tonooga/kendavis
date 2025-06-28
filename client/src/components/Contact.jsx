import React from 'react'
import hero_image from '../assets/images/map_7_picture-3.png'
import { FaMapMarker, FaCalendarAlt, FaBook, FaPhone, FaEnvelope} from 'react-icons/fa'


const Contact = ({ title='Contact & Location',
                    subtitle='void',
                }) => {
  return (
    <section className="bg-black">
    <div className="max-w-[1056px] mx-auto bg-black p-4">
      <div className="bg-black pt-20 mb-4 grid container grid-cols-1 md:grid-cols-12 gap-4">
        <div className="bg-black rectangle container col-span-6 p-2 order-2 md:order-1 ">
          <img className="rounded-lg w-full" src={ hero_image }></img>
        </div>
        <div className="bg-black container col-span-6 text-xl order-1 md:order-2 ">
          <h1 className="font-extrabold text-white text-left text-4xl md:text-5xl ">    
              { title }
          </h1>
          <div className="text-white">
            <p className="my-4 text-white">    
            Kenneth Davis (Works of Art) Ltd is located in the heart of St James’s right next door to Christies auction house.</p>
            <FaBook className="inline my-4 text-white mr-2" />
                15 King Street,St James's
                London,SW1Y 6QU, UK<br></br>
            <FaPhone className='inline my-4 text-white mr-2'/>+44 (0)20 7930 0313 | fax. +44 (0)20 7976 1306<br></br>
            <FaEnvelope className='inline my-4 text-white mr-2' />info@kennethdavis.co.uk
          </div>
        </div>
      </div>
    </div>
    </section>
  )
}

export default Contact
