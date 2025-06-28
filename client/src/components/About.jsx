import React from 'react'
// import hero_image_book from '../assets/images/book-window1.png'
import hero_image_book from '../assets/images/about_13_img38222.jpg'

const About = ({ title='About', subtitle='About'}) => {
  return (
    <section className="bg-black">
    <div className="max-w-[1056px] mx-auto bg-black p-4">
      <div className="bg-black pt-20 mb-4 grid container grid-cols-1 md:grid-cols-12 gap-4">
        <div className="bg-black container col-span-1 md: col-span-6">
          <h1 className="font-extrabold text-white text-left text-4xl md:text-5xl ">    
              { title }
          </h1>
          <p className="my-4 text-xl text-white">    
            Kenneth Davis has been dealing in artworks for over 50 years. Formerly based in Albermarle Street, he then moved to Bury Street, and finally to King Street where he has been dealing for the last 10 years. Set in the area of St James’s, along with many other well respected art galleries, the gallery is easy to reach and open 5 days a week. Please phone us before visiting; by appointment only.</p>
          <p className="my-4 text-xl text-white">
            The artworks range from old master paintings, continental porcelain, mounted antique silver objects and sculptures to medieval jewellery and artefacts. The gallery is home to many unusual and unique works of art with an emphasis on 15th-17th century continental and English silver. Kenneth is a recognized figure in the antique silver industry and has vetted on the committee of major art fairs both in England and Europe.</p>
          <p className="my-4 text-xl text-white">
            Other than being an animal lover and devoted master to his two Labradoodles, Kenneth’s main passions include fine art, talented workmanship and interesting antique silver. We welcome all sorts of enquires and offers and urge you to please get in touch with us should you be interested in any artwork you may have seen on our website.</p>
        </div>
        <div className="bg-black rectangle container col-span-1 md:col-span-6">
          <img className="rounded-lg w-full" src={ hero_image_book }></img>
        </div>
      </div>
    </div>
    </section>
  )
}

export default About


