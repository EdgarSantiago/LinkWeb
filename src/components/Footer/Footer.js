import React from 'react'
import {Fragment} from 'react'
import { FaFacebook } from 'react-icons/fa'
import { Button } from '../../globalStyles'
import { FooterContainer, FooterSubscription, FooterSubHeading, FooterSubText, Form, FormInput,
    FooterLinksContainer,  FooterLinksWrapper, FooterLinksItems
, FooterLinkTitle, FooterLink} from './Footer.elements'

const Footer = () => {
    return (

        <Fragment>
            <FooterContainer>
                <FooterSubscription>
                    <FooterSubHeading>
                        Join oor exclusive aismdoaids osdmioadsk oaisd iojk
                    </FooterSubHeading>
                        <FooterSubText> 
                            you can unsub any time
                        </FooterSubText>
                            <Form>
                                <FormInput name="email" type="email" placeholder="Seu Email"/>
                                    <Button fontBig>Subscribe</Button>
                            </Form>
                </FooterSubscription>
                    <FooterLinksContainer>
                        <FooterLinksWrapper>
                            <FooterLinksItems>
                                <FooterLinkTitle>About us</FooterLinkTitle>
                                    <FooterLink to="/">Home</FooterLink>
                                    <FooterLink to="/sign-up">How it Works</FooterLink>
                                    <FooterLink to="/Services">Services</FooterLink>
                            </FooterLinksItems>

                            <FooterLinksItems>
                                <FooterLinkTitle>About us</FooterLinkTitle>
                                    <FooterLink to="/">Home</FooterLink>
                                    <FooterLink to="/sign-up">How it Works</FooterLink>
                                    <FooterLink to="/Services">Services</FooterLink>
                            </FooterLinksItems>

                            <FooterLinksItems>
                                <FooterLinkTitle>About us</FooterLinkTitle>
                                    <FooterLink to="/">Home</FooterLink>
                                    <FooterLink to="/sign-up">How it Works</FooterLink>
                                    <FooterLink to="/Services">Services</FooterLink>
                            </FooterLinksItems>
                        </FooterLinksWrapper>
                    </FooterLinksContainer>
                        <SocialMedia>
                            <SocialMediaWrap>
                                <SocialLogo to="/">
                                    <SocialIcon>
                                        LinkHat
                                    </SocialIcon>
                                        <WebSiteRights>
                                            LinkHat 2021
                                        </WebSiteRights>
                                            <SocialIcons>
                                                <SocialIconLink href='/' target="_blank" aria-label="Facebook">
                                                    <FaFacebook/>
                                                </SocialIconLink>
                                            </SocialIcons>
                                </SocialLogo>
                            </SocialMediaWrap>
                        </SocialMedia>
                </FooterContainer>
        </Fragment>
    )
}

export default Footer
