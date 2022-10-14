import React from 'react'
import styled from 'styled-components'
import Close from '../assets/icon-close.svg'

function TopNav({opened, setOpened}) {
  return (
    opened ? (
        <Navigation>
            <img src={Close} alt="" onClick={()=> setOpened(!opened)} />
            <TopUl>
                <li><a href="#">home <div></div></a></li>
                <li><a href="#">shop <div></div></a></li>
                <li><a href="#">about <div></div></a></li>
                <li><a href="#">contact <div></div></a></li>
            </TopUl>
        </Navigation>
    ): ''
  )
}

export default TopNav

const Navigation = styled.nav`
    display: flex;
    align-items: center;
    justify-content: space-around;

    padding: 50px 0;
    background-color: #fff;
    position: absolute;
    width: 100%;
    z-index: 9;
`

const TopUl = styled.ul`
    list-style: none;
    display: flex;
    gap: 25px;

    a {
        text-decoration: none;
        color: #000000;
    }
`