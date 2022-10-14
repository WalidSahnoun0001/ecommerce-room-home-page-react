import styled from 'styled-components'
import AboutDark from '../assets/image-about-dark.jpg'
import AboutLight from '../assets/image-about-light.jpg'

function Bottom() {
  return (
    <Footer>
            <BoImg src={AboutDark} alt="" />
            <FooterContent>
                <h2>About Our Furniture</h2>
                <p>
                    Our multifunctional collection blends design and function to suit your individual taste. Make each room unique,
                    or pick a cohesive theme that best express your interests and what inspires you. Find the furniture pieces you need,
                    from traditional to contemporary styles or anything in between. Product specialists are available to help you create
                    your dream space.
                </p>
            </FooterContent>
            <BoImg src={AboutLight} alt="" />
    </Footer>
  )
}

export default Bottom

const Footer = styled.footer`
    position: relative;
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
const FooterContent = styled.div`
    padding: 10px 50px;

    @media (max-width: 575.98px) {
        padding: 50px 25px;
    }
    @media (min-width: 576px) and (max-width: 767.98px) {
        padding: 50px 25px;
    }
    @media (min-width: 768px) and (max-width: 991.98px) {
        padding: 50px 25px;
    }
    @media (min-width: 992px) and (max-width: 1199.98px) {
        padding: 50px 25px;
    }
    h2 {
        text-transform: uppercase;
        font-size: 20px;
        letter-spacing: 5px;
        word-spacing: 2px;

        margin-bottom: 20px;
    }
    p {
        color: hsl(0, 0%, 63%);
        font-size: 18px;
        line-height: 1.4;
    }
`
const BoImg = styled.img`
    width: 100%;
`