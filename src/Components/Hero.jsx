import React, { useState } from 'react'
import styled from 'styled-components'
import Left from './Left'
import Right from './Right'

function Hero() {

  const [index, setIndex] = useState(0)

  const previewData = [
    {title: "Discover innovative ways to decorate", content: "We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love."},
    {title: "We are available all across the globe", content: "With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today."},
    {title: "Manufactured with the best materials", content: "Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office."}
]

  const prevImg = () => {
    if(index > 0) {
      setIndex(index - 1)
    }
    else {
      setIndex(previewData.length-1)
    }
  }

  const nextImg = () => {
    if(index < previewData.length-1) {
      setIndex(index + 1)
    }
    else {
      setIndex(0)
    }
  }

  return (
    <Section>   
        <Left index={index} />
        <Right index={index} prevImg={prevImg} nextImg={nextImg} previewData={previewData} />
    </Section>
  )
}

export default Hero

const Section = styled.section`
  display: flex;
  align-items: center;

@media (max-width: 575.98px) {
  display: block;
}
@media (min-width: 576px) and (max-width: 767.98px) {
  display: block;
}
@media (min-width: 768px) and (max-width: 991.98px) {
  display: block;
}
@media (min-width: 992px) and (max-width: 1199.98px) {
  display: block;
}
`