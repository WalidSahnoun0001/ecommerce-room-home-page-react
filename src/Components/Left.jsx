import styled from 'styled-components'
import DesktopImgHero1 from '../assets/desktop-image-hero-1.jpg'
import DesktopImgHero2 from '../assets/desktop-image-hero-2.jpg'
import DesktopImgHero3 from '../assets/desktop-image-hero-3.jpg'

function Left({index}) {

    const images = [DesktopImgHero1, DesktopImgHero2, DesktopImgHero3]
  return (
        <Img src={images[index]} alt="" />
  )
}

export default Left

const Img = styled.img`
  width: 100%;
  height: 487px;
`