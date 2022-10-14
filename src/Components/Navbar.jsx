import styled from 'styled-components'
import Logo from '../assets/logo.svg'
import IcHamburger from '../assets/icon-hamburger.svg'

function Navbar({opened, setOpened}) {
  return (
    <Header>
        <figure onClick={()=> setOpened(!opened)}><img src={IcHamburger} alt="" /></figure>
        <NavH2><img src={Logo} alt="" /></NavH2>
        <nav>
            <Ul>
                <li><a href="#">home <div></div></a></li>
                <li><a href="#">shop <div></div></a></li>
                <li><a href="#">about <div></div></a></li>
                <li><a href="#">contact <div></div></a></li>
            </Ul>
        </nav>
    </Header>
  )
}

export default Navbar

const Header = styled.header`
    position: absolute;
    display: flex;
    align-items: center;
    gap: 60px;

    padding: 45px 30px;

    figure {
        display: none;
    }

@media (max-width: 575.98px) {
    gap: 30px;

    figure {
        display: block;
    }
}
@media (min-width: 576px) and (max-width: 767.98px) {
    gap: 30px;

    figure {
        display: block;
    }
}
@media (min-width: 768px) and (max-width: 991.98px) {
    gap: 30px;

    figure {
        display: block;
    }
}
@media (min-width: 992px) and (max-width: 1199.98px) {
    gap: 30px;

    figure {
        display: block;
    }
}

`
const NavH2 = styled.h2`
@media (max-width: 575.98px) {
    width: 235px;
    text-align: center;
}
@media (min-width: 576px) and (max-width: 767.98px) {
    width: 485px;
    text-align: center;
}
@media (min-width: 768px) and (max-width: 991.98px) {
    width: 650px;
    text-align: center;
}
@media (min-width: 992px) and (max-width: 1199.98px) {
    width: 1000px;
    text-align: center;
}
`
const Ul = styled.ul`
    list-style: none;
    display: flex;
    gap: 25px;
    margin-top: 8px;

    a {
        text-decoration: none;
        color: #fff;
    }
    div {
        width: 0;
        height: 3px;
        background-color: #fff;
        margin: 0 auto;
        margin-top: 8px;
        transition: all .3s ease-in-out;
    }
    li {
        &:hover div {
            width: 20px;
        }
    }

    @media (max-width: 575.98px) {
        display: none;
    }
    @media (min-width: 576px) and (max-width: 767.98px) {
        display: none;
    }
    @media (min-width: 768px) and (max-width: 991.98px) {
        display: none;
    }
    @media (min-width: 992px) and (max-width: 1199.98px) {
        display: none;
    }

`