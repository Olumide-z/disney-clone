import React from 'react';
import styled from 'styled-components';

const Login = () => {
  return (
    <Container>
        <CTA>
            <CTALogoOne src='/images/cta-logo-one.svg'/>
            <SignUp>Get all there</SignUp>
            <Description>
                Lorem ipsum dolor sit. Itaque obcaecati repudiandae optio aut aliquid rerum dolore eum voluptatibus. Expedita esse neque nobis iste!
            </Description>
            <CTALogoTwo src='/images/cta-logo-two.png'/>
        </CTA>
    </Container>
  )
}

export default Login

const Container = styled.div`
    position: relative;
    height: calc(100vh - 70px);
    display: flex;
    align-items: top;
    justify-content: center;
    

    &::before{
        z-index: -1;
        position: absolute;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
        content: "";
        background-image: url('/images/login-background.jpg');
        background-position: top;
        background-size: cover;
        background-repeat: no-repeat;
        opacity: .7;
    }
`
const CTA = styled.div`
    max-width: 650px;
    padding: 80px 40px;
    width: 90%;
    display: flex;
    flex-direction: column;
    margin-top: 100px;
    align-items: center;
`

const CTALogoOne = styled.img``
const SignUp = styled.a`
    text-transform: uppercase;
    width: 100%;
    background-color: #0063e5;
    font-weight: bold;
    padding: 17px 0;
    color: #f9f9f9;
    border-radius: 4px;
    text-align: center;
    font-size: 18px;
    cursor: pointer;
    transition: all 250ms;
    letter-spacing: 1.5px;
    margin-top: 8px;
    margin-bottom: 12px;

    &:hover{
        background-color: #0483ee;
    }
`
const Description = styled.p`
    font-size: 11px;
    letter-spacing: 1.5px;
    text-align: center;
    line-height: 1.5;
`
const CTALogoTwo = styled.img`
    width: 90%;
`