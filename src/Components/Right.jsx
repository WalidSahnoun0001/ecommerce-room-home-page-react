import React from 'react'
import styled from 'styled-components'
import ShopNowArrow from '../assets/icon-arrow.svg'
import IconLeft from '../assets/icon-angle-left.svg'
import IconRight from '../assets/icon-angle-right.svg'

function Right({index, prevImg, nextImg, previewData}) {


  return (
    <RightDiv>
        <PreviewContent>
            <H2>{previewData[index].title}</H2>
            <P>{previewData[index].content}</P>
            <Button>
                Shop Now
                <img src={ShopNowArrow} alt="" />
            </Button>
        </PreviewContent>
        <Figure>
            <Control onClick={prevImg} >
                <img src={IconLeft} alt="" />
            </Control>
            <Control onClick={nextImg}>
                <img src={IconRight} alt="" />
            </Control>
        </Figure>
    </RightDiv>
  )
}

export default Right

const RightDiv = styled.div`
    position: relative;
`

const PreviewContent = styled.div`
    padding: 50px 100px;

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
`
const H2 = styled.h2`
    font-size: 45px;
    margin-bottom: 20px;

@media (max-width: 575.98px) {
    font-size: 35px;
}
@media (min-width: 576px) and (max-width: 767.98px) {
    font-size: 35px;
}
@media (min-width: 768px) and (max-width: 991.98px) {
    font-size: 35px;
}
@media (min-width: 992px) and (max-width: 1199.98px) {
    font-size: 35px;
}
`
const P = styled.p`
    color: hsl(0, 0%, 63%);
    line-height: 1.4;
    font-size: 16px;
    height: 125px;

@media (max-width: 575.98px) {
    height: 200px;
}
@media (min-width: 576px) and (max-width: 767.98px) {
    height: 200px;
}
@media (min-width: 768px) and (max-width: 991.98px) {
    height: 200px;
}
@media (min-width: 992px) and (max-width: 1199.98px) {
    height: 200px;
}
`
const Button = styled.button`
    display: flex;
    font-size: 16px;
    text-transform: uppercase;
    border: none;
    background-color: transparent;
    letter-spacing: 5px;
    word-spacing: 5px;
    font-weight: 600;
    cursor: pointer;

    margin-top: 20px;

    img {
        margin-left: 10px;
    }
    &:hover {
        color: hsl(0, 0%, 27%);
    }
`
const Figure = styled.figure`
    display: flex;
    text-align: center;
    position: absolute;
    bottom: -63px;

@media (max-width: 575.98px) {
    bottom: 101%;
    right: 0;
    z-index: 9;
}
@media (min-width: 576px) and (max-width: 767.98px) {
    bottom: 101%;
    right: 0;
    z-index: 9;
}
@media (min-width: 768px) and (max-width: 991.98px) {
    bottom: 101%;
    right: 0;
    z-index: 9;
}
@media (min-width: 992px) and (max-width: 1199.98px) {
    bottom: 101%;
    right: 0;
    z-index: 9;
}
`
const Control = styled.div`
    background-color: #000000;
    width: 60px;
    padding: 20px 0;
    cursor: pointer;

    &:hover {
        background-color: hsl(0, 0%, 27%);
    }
`